// @vitest-environment jsdom
/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Regression suite for the sidebar entry (the "plugin button" row).
 *
 * The feature has one failure mode that a source-text guard cannot see: the
 * sidebar's button and the panel it opens are TWO registrations the host joins
 * by string. `sidebar.panellist` gives the icon an `id`; clicking it calls
 * `ctx.layout.selectPanel(id)`; `MainPanel` then renders the `main` slot with
 * `entryKey = activePanelId`. Register the icon without the `main` cell and the
 * button renders fine and THROWS on click:
 *
 *   layout.selectPanel: main panel "workbuddy" is not registered
 *
 * Nothing in the type system connects the two, because both sides are `'…' as
 * never` string casts into a host slot ("no compile-time key set" is the host's
 * own description of `main`). So this suite asserts the JOIN, not either half:
 * it imports the real entry module, runs the real `apply()` against a recording
 * context, and compares what landed in the two slots.
 *
 * Why the REAL module and not a mirror: the repo's older client suites mirror
 * `apply()` because they could not import browser-only packages. Under a jsdom
 * environment the real entry imports fine, and a mirror of this feature would
 * be exactly the thing that drifts — the defect this suite exists to catch is a
 * string no mirror is obliged to keep equal.
 */
import { afterEach, describe, expect, it, vi } from 'vitest'
import { apply, inject, name } from '../src/client/index.tsx'
import {
  WorkBuddyPanel,
  WorkBuddyPanelIcon,
  WORKBUDDY_PANEL_ID,
  WORKBUDDY_PANEL_ORDER,
} from '../src/client/WorkBuddyPanel.tsx'
import { WORKBUDDY_PLUGIN_ICON } from '../src/client/icon.ts'
import { mount, fakeScope, stubFetch, t, type Mounted } from './pool-render-helpers.tsx'

afterEach(() => { vi.unstubAllGlobals() })

/**
 * A slot core that records what each slot received.
 *
 * `inject(name, factory)` resolves when the slot is declared; the factory then
 * calls `register(options, component)` itself and its return value is the
 * disposer. That is the real shape (a mirror test that passes `register` INTO
 * the factory gets `ctx.slots.register is not a function`), so the stub keeps
 * it and hands the disposer back out.
 */
function recordingSlots(): {
  slots: any
  /** Every registration, as `{ slot, options, component }`. */
  entries: { slot: string, options: any, component: unknown }[]
  /** Registrations for one slot name. */
  of: (slot: string) => { slot: string, options: any, component: unknown }[]
  /** Slot names that were registered into, in first-seen order. */
  names: () => string[]
} {
  const entries: { slot: string, options: any, component: unknown }[] = []
  const slots = {
    inject(slot: string, factory: () => unknown): () => void {
      void slot
      // The real slot resolves the factory when the slot is declared; a test
      // context has nothing to wait for, so it runs immediately.
      const disposer = factory()
      return typeof disposer === 'function' ? disposer as () => void : () => { /* nothing to undo */ }
    },
    register(options: any, component: unknown): () => void {
      // `options.name` is the slot the plugin registered INTO — the same string
      // the host's ledger uses — so it is the honest key for grouping here.
      entries.push({ slot: String(options.name), options, component })
      return () => { /* disposer identity is not what this suite asserts */ }
    },
  }
  return {
    slots,
    entries,
    of: (slot: string) => entries.filter(entry => entry.slot === slot),
    names: () => [...new Set(entries.map(entry => entry.slot))],
  }
}

/**
 * The smallest context `apply()` will run against.
 *
 * `configForms` is deliberately ABSENT: `apply` probes it with `ctx.get()`, and
 * the no-forms path is the one a fresh install takes. The sidebar entry must
 * land there too — a user's first move is to open the plugin and sign in, and
 * there is no settings form to have arrived yet.
 */
function context(slots: any): any {
  const registered: { namespace: string, bundle: Record<string, unknown> }[] = []
  return {
    get: (service: string) => service === 'configForms' ? undefined : undefined,
    slots,
    effect: (body: () => unknown) => { body(); return () => { /* torn down with the fiber */ } },
    locale: {
      register: (namespace: string, bundle: Record<string, unknown>) => {
        registered.push({ namespace, bundle })
        return () => { /* unregistered with the fiber */ }
      },
      bind: (namespace: string) => (key: string, params?: Record<string, unknown>) => {
        if (params === undefined) return `${namespace}.${key}`
        const parts = Object.entries(params).map(([k, v]) => `${k}=${String(v)}`)
        return [`${namespace}.${key}`, ...parts].join('|')
      },
    },
    registered,
  }
}

/** Run the real entry's `apply()` and return what the slots captured. */
function runApply(): ReturnType<typeof recordingSlots> & { ctx: any } {
  const recorder = recordingSlots()
  const ctx = context(recorder.slots)
  // `apply` logs its own diagnostics (`console.info` on success, `console.error`
  // per failed slot). Keep the suite's output readable; the assertions below
  // are on the registrations, not on the log.
  const info = vi.spyOn(console, 'info').mockImplementation(() => { /* quiet */ })
  const error = vi.spyOn(console, 'error').mockImplementation(() => { /* quiet */ })
  try {
    apply(ctx)
  } finally {
    info.mockRestore()
    error.mockRestore()
  }
  return { ...recorder, ctx }
}

describe('sidebar entry registration', () => {
  it('runs through the real entry module', () => {
    // Guard on the harness itself: if the import ever stops resolving (a new
    // browser-only dependency, an environment change), every case below would
    // silently become a no-op rather than failing.
    expect(name).toBe('dsh-connect-workbuddy-client')
    expect(inject).toEqual(['slots', 'locale'])
  })

  it('registers a sidebar icon and the main cell it opens, under the same id', () => {
    const { of } = runApply()
    const icons = of('sidebar.panellist')
    const panels = of('main')

    expect(icons).toHaveLength(1)
    expect(panels).toHaveLength(1)

    // THE assertion of this suite: the string the host sorts the icon by is the
    // string it dispatches the panel by. Split them and the button throws.
    expect(icons[0]!.options.id).toBe(panels[0]!.options.key)
    expect(icons[0]!.options.id).toBe(WORKBUDDY_PANEL_ID)
    expect(panels[0]!.options.key).toBe('workbuddy')
  })

  it('gives both halves a real component', () => {
    // A registration whose component is undefined renders an empty panel and
    // reports nothing — the "silently empty page" class of defect again.
    const { of } = runApply()
    expect(typeof of('sidebar.panellist')[0]!.component).toBe('function')
    expect(typeof of('main')[0]!.component).toBe('function')
  })

  it('orders the icon between the host’s Plugins and task entries', () => {
    // The host sorts `sidebar.panellist` ascending by `order` and renders it
    // top-down. Plugins ships at 0 and the task manager at 10; the entry is
    // meant to sit directly under Plugins. Assert the WINDOW, not the value:
    // a future host entry may legitimately change the number, but landing at 0
    // (above Plugins) or at 10+ (below the task manager) is never the intent.
    const { of } = runApply()
    const order = of('sidebar.panellist')[0]!.options.order
    expect(order).toBe(WORKBUDDY_PANEL_ORDER)
    expect(order).toBeGreaterThan(0)
    expect(order).toBeLessThan(10)
  })

  it('passes the label as a thunk so it follows a language switch', () => {
    // The slot accepts `string | (() => string)`. A literal string freezes the
    // label at registration time, so the button reads "WorkBuddy" in the wrong
    // language until the plugin reloads.
    const { of } = runApply()
    const label = of('sidebar.panellist')[0]!.options.label
    expect(typeof label).toBe('function')
    expect(label()).toBe('settings.workbuddy.panel.sidebar')
  })

  it('keeps every seat the card already had', () => {
    // The regression risk of adding a seat is LOSING one: `registerAllSlots` is
    // one array, and its entries are filtered by disposer identity.
    const { names } = runApply()
    expect(names()).toEqual(expect.arrayContaining([
      'plugins.bundle.config',
      'plugins.row.config',
      'conversation.input.left',
      'conversation.composer.dock',
      'shell.quota-notice',
      'sidebar.panellist',
      'main',
    ]))
  })

  it('registers the entry even when no settings form has arrived', () => {
    // The first-run path: `configForms` is undefined, so `settingsScope` never
    // binds and the card is read-only. The sidebar entry is the only way OUT of
    // that state (it is where signing in happens), so it must not be gated on
    // the form.
    const { of, ctx } = runApply()
    expect(ctx.get('configForms')).toBeUndefined()
    expect(of('sidebar.panellist')).toHaveLength(1)
    expect(of('main')).toHaveLength(1)
  })

  it('names the locale namespace on both halves', () => {
    // `locale` is how the host resolves the label/body copy back to a
    // namespace; without it the button renders the raw id.
    const { of } = runApply()
    expect(of('sidebar.panellist')[0]!.options.locale).toBe('settings.workbuddy')
    expect(of('main')[0]!.options.locale).toBe('settings.workbuddy')
  })
})

describe('sidebar panel copy', () => {
  it('ships the three panel keys in both dictionaries', () => {
    // `zh` is typed `Record<WorkBuddySettingsKey, string>`, so a missing key is
    // a typecheck failure — but only for zh. Assert both, and assert equality
    // of key SETS, because the two files are edited by hand and drift is a
    // one-line mistake that typecheck cannot see in one direction.
    const { ctx } = runApply()
    const bundle = ctx.registered[0]!.bundle as { en: Record<string, string>, zh: Record<string, string> }
    for (const key of ['panel.title', 'panel.intro', 'panel.sidebar']) {
      expect(typeof bundle.en[key]).toBe('string')
      expect(typeof bundle.zh[key]).toBe('string')
    }
    expect(Object.keys(bundle.en).sort()).toEqual(Object.keys(bundle.zh).sort())
  })
})

/**
 * The panel itself, executed.
 *
 * The registrations above prove the button opens SOMETHING; these cases prove
 * that something is a page rather than an empty screen. Both defects are
 * invisible to the registration assertions: a panel that renders the card
 * collapsed, or an `<li>` with no list around it, still registers perfectly.
 */
describe('the rendered page', () => {
  /** A signed-in usage body, enough for the card to draw its body. */
  function usageOf(): Record<string, unknown> {
    return {
      status: 'signed-in',
      region: 'cn',
      tokenExpiresAtMs: Date.now() + 86_400_000,
      selectionExplicit: true,
      accounts: [{ accountId: 'cn-1', accountName: 'CN One' }],
      models: [{ id: 'hy4-preview-f', name: 'hy4', creditMultiplier: 0 }],
      enabledModelIds: ['hy4-preview-f'],
      imageModelIds: [],
      contextBudgets: {},
      credits: { total: 10, expiringSoon: 0, packages: [] },
    }
  }

  async function renderPanel(): Promise<Mounted> {
    stubFetch(() => ({ body: usageOf() }))
    const m = await mount(WorkBuddyPanel, { t, settingsScope: fakeScope({ regions: { cn: {} } }) })
    await m.settle()
    return m
  }

  it('opens the card expanded, so the page is not an empty screen', async () => {
    // The card is a COLLAPSIBLE row on the Plugins page (`open` defaults to
    // false there). Here it is the whole content of the page, so the same
    // default would render a title and nothing else — the panel would look
    // broken to whoever clicked the button to reach it.
    const m = await renderPanel()
    const card = m.container.querySelector('li.dsm-plugin-card')
    expect(card).not.toBeNull()
    expect(card!.classList.contains('dsm-plugin-card-open')).toBe(true)
    await m.unmount()
  })

  it('wraps the card in a list, because the card element is a list item', async () => {
    // The card's root is an `<li>`. Rendered bare it is invalid markup and the
    // list semantics a screen reader uses to announce "one item" are lost; the
    // host's own plugin list supplies the `<ul>` there, and this page must
    // supply it here.
    const m = await renderPanel()
    const card = m.container.querySelector('li.dsm-plugin-card')
    expect(card!.parentElement?.tagName).toBe('UL')
    expect(card!.parentElement?.classList.contains('dsm-workbuddy-page-list')).toBe(true)
    await m.unmount()
  })

  it('titles the page from the panel copy, not from the card', async () => {
    const m = await renderPanel()
    const title = m.container.querySelector('h1.dsm-workbuddy-page-title')
    const intro = m.container.querySelector('p.dsm-workbuddy-page-intro')
    expect(title?.textContent).toBe('panel.title')
    expect(intro?.textContent).toBe('panel.intro')
    await m.unmount()
  })

  it('draws the icon from the plugin’s own data URI instead of a host package', async () => {
    // Depends on `@deepseek-ai/dsh-client-ui-primitives` being EXCLUDED from
    // the client bundle (see the manifest guard in
    // `client-host-contract.spec.ts`): an icon component imported from there
    // would tie the sidebar button's arrival to a package this plugin does not
    // otherwise use.
    const m = await mount(WorkBuddyPanelIcon, { size: 18 })
    const img = m.container.querySelector('img')
    expect(img).not.toBeNull()
    expect(img!.getAttribute('src')).toBe(WORKBUDDY_PLUGIN_ICON)
    // `size` is the sidebar's requested square edge in pixels, and it changes
    // when the sidebar is expanded vs collapsed — so it must reach the DOM.
    expect(img!.getAttribute('width')).toBe('18')
    expect(img!.style.width).toBe('18px')
    await m.unmount()
  })
})
