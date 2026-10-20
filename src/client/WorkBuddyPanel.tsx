/**
 * The dedicated WorkBuddy page behind a sidebar entry.
 *
 * 参考：宿主自身的全局面板形态（`@deepseek-ai/dsh-client-ui-plugin-manager`
 *   的 `sidebar.panellist` 图标 + 同名 `main` keyed 面板）—— 侧边栏只负责画
 *   按钮与解析 label，正文由 `main` 槽位按 `activePanelId` 派发渲染。
 * 改动：① 图标用本插件自带的 `WORKBUDDY_PLUGIN_ICON`（data URI），不引入
 *   `@deepseek-ai/dsh-client-ui-primitives` —— 本插件的客户端刻意不依赖该包
 *   （shell 的模块注册表里有它，但依赖它等于把按钮的到达时间绑在另一个包的
 *   装载上）；② 正文复用 `WorkBuddyCard` 本身，而不是为面板重写一套界面。
 *
 * WHY A PANEL AND NOT ANOTHER SEAT IN THE COMPOSER
 * -----------------------------------------------
 * This plugin used to sit in `sidebar.footer.action`, a single root-level row
 * shared with every other connector plugin, and later moved its readout into
 * the composer (`conversation.input.left`) because that row is per-session and
 * owned by provider. Both seats share one defect: they are only reachable while
 * the session happens to use a WorkBuddy model. Someone who wants to sign in,
 * switch accounts, or read a balance first has no way to reach the card — the
 * very actions that would make the readout appear sit behind the readout.
 *
 * `sidebar.panellist` plus a same-named `main` key gives the plugin one seat
 * that is always reachable, and the button itself is drawn by the HOST, so it
 * inherits the sidebar's own collapse, tooltip and active-state behaviour
 * instead of this plugin re-implementing any of it.
 *
 * @module dsh-connect-workbuddy/client/WorkBuddyPanel
 */

import type { ReactElement } from 'react'
import { WORKBUDDY_PLUGIN_ICON } from './icon.ts'
import { WORKBUDDY_PANEL_CSS } from './styles.ts'
import { WorkBuddyCard } from './WorkBuddyCard.tsx'
import type { WorkBuddyCardInjected } from './WorkBuddyCard.tsx'

/**
 * The sidebar entry id AND the `main` cell key — the same string, on purpose.
 *
 * The sidebar's button does not render a panel itself: clicking it calls
 * `ctx.layout.selectPanel(id)`, and `MainPanel` then renders the `main` slot
 * with `entryKey = activePanelId ?? 'conversation'`. A panellist id with no
 * matching `main` key therefore throws at CLICK time:
 *
 *   layout.selectPanel: main panel "workbuddy" is not registered
 *
 * so the two registrations must agree, and `tests/sidebar-panel.spec.ts`
 * asserts the equality instead of trusting it.
 */
export const WORKBUDDY_PANEL_ID = 'workbuddy'

/**
 * Position among the sidebar's panel icons, ascending.
 *
 * The host sorts `sidebar.panellist` by `order` and renders the list top-down,
 * so this value decides WHERE the button lands. The Plugins entry ships at 0
 * and the task manager at 10; 5 puts WorkBuddy directly under Plugins and above
 * the task manager, which is where someone looking for "the plugin I installed"
 * looks first. The window (0, 10) is asserted by the test — a host that later
 * adds an entry in between can move this deliberately, but not accidentally.
 */
export const WORKBUDDY_PANEL_ORDER = 5

/** Inject or refresh the panel CSS for the current client bundle. */
if (typeof document !== 'undefined') {
  const cssId = 'dsh-connect-workbuddy/panel.css'
  const existing = document.querySelector<HTMLStyleElement>(`style[data-plugin-css="${cssId}"]`)
  if (existing !== null) {
    existing.textContent = WORKBUDDY_PANEL_CSS
  } else {
    const styleTag = document.createElement('style')
    styleTag.dataset.plugin = 'dsh-connect-workbuddy'
    styleTag.dataset.pluginCss = cssId
    styleTag.textContent = WORKBUDDY_PANEL_CSS
    document.head.appendChild(styleTag)
  }
}

/**
 * The sidebar button's glyph.
 *
 * The owner passes `{ size, active }` (the `sidebar.panellist` owner props: the
 * requested square edge in pixels, and whether this panel is the selected one).
 * Only `size` is used: the host already paints the active row, and a plugin
 * that tinted its own glyph would either double the signal or fight the theme.
 *
 * The icon is the same data-URI mark the settings card uses, so the button and
 * the page it opens are visibly one thing.
 */
export function WorkBuddyPanelIcon({ size }: { size: number }): ReactElement {
  return (
    <img
      src={WORKBUDDY_PLUGIN_ICON}
      alt=""
      width={size}
      height={size}
      style={{ width: `${String(size)}px`, height: `${String(size)}px`, display: 'block' }}
    />
  )
}

/** Props the panel receives: the same injection surface as the card. */
export type WorkBuddyPanelProps = Partial<WorkBuddyCardInjected> & { view?: string }

/**
 * The page behind the sidebar entry.
 *
 * It renders the card itself rather than a second implementation of it: the
 * card is the only place this plugin's state is described, and a panel that
 * restated it would drift the moment either one changed. `view="page"` opens it
 * expanded — on the Plugins page it is a collapsible row among many, but here
 * it is the whole content of the page, so a collapsed card would render an
 * EMPTY screen.
 *
 * The card's root element is an `<li>` (it is a row of the plugin list there),
 * so it is wrapped in a `<ul>`: an `<li>` outside a list is invalid markup and
 * loses the list semantics a screen reader uses to announce "one item".
 */
export function WorkBuddyPanel({ t, settingsScope }: WorkBuddyPanelProps): ReactElement {
  const head = t === undefined ? { title: '', intro: '' } : { title: t('panel.title'), intro: t('panel.intro') }
  return (
    <div className="dsm-workbuddy-page">
      <div className="dsm-workbuddy-page-head">
        <h1 className="dsm-workbuddy-page-title">{head.title}</h1>
        <p className="dsm-workbuddy-page-intro">{head.intro}</p>
      </div>
      <ul className="dsm-workbuddy-page-list">
        <WorkBuddyCard
          {...(settingsScope === undefined ? {} : { settingsScope })}
          t={t as WorkBuddyCardInjected['t']}
          view="page"
        />
      </ul>
    </div>
  )
}
