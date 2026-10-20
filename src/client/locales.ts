/**
 * Plugin-card copy registered under the settings.workbuddy locale namespace.
 *
 * 参考：dingminhua/dsh-connect-trae（MIT，Copyright (c) 2026 LaoDing）
 *   — `row.*` 的文案键约定与中英 1:1 键对齐（`zh: Record<Key, string>`
 *     强制双语同步）来自该项目，其又继承自
 *     dingminhua/dsh-subagent-default-model（MIT）。
 * 改动：文案按 WorkBuddy 的实际情况改写（积分套餐、模型倍率、多账号）。
 *
 * @module dsh-connect-workbuddy/client/locales
 */

export const en = {
  'row.title': 'WorkBuddy credits & models (dsh-connect-workbuddy)',
  'row.desc': 'Use WorkBuddy models in DSH: each refresh reads every model\'s credit multiplier from the upstream catalog, image input is toggled per model, several accounts can be switched or failed over automatically, and daily check-in plus your remaining credits are one click away. The domestic and international sides are two independent providers, each with its own account — use both at the same time.',
  'row.expand': 'Expand',
  'row.collapse': 'Collapse',
  'row.tabCn': 'Domestic',
  'row.tabGlobal': 'Global',
  'row.tabHint': 'Each tab is a separate provider (workbuddy / workbuddy-global) with its own account, credits, and models. Both sides are live at once: different sessions can pick from either side, and changes on one tab never touch the other.',
  // The free (×0) models are NOT unlimited — they carry a per-WINDOW token quota
  // (the upstream's 6004/14003 refusals are that quota, not a billing balance).
  // Stated separately from `tabHint` and in bold because the misreading it
  // prevents is expensive: a user who believes ×0 means unlimited reads a 6004
  // as "the plugin is broken" instead of "this window's allowance is spent".
  'row.tabFreeQuotaWarn': 'Free models have a per-window token quota — they are not unlimited.',
  'row.tabSwitchHint': 'Uncheck to switch this provider off. Its models disappear from the DSH model picker; your account, credits, and model settings are kept and return when you check it again.',
  'row.tabSwitchAria': 'Offer the {region} provider to DSH',
  'row.tabOffNotice': 'This provider is switched off: none of its models are offered to DSH. Your account, credits, and model settings are kept — check the box above the tab to bring it back.',
  'row.signedOutHint': 'Sign in once in the WorkBuddy desktop app; this plugin follows that sign-in automatically.',
  'row.signedOutWrongRegion': 'Your WorkBuddy sign-in was found, but it belongs to the other region tab. Switch tabs above to use it — there is nothing to sign in again.',
  'row.signedOutEncrypted': 'Your WorkBuddy sign-in is present, but its token fields are encrypted and the plugin could not read the key. Install the WorkBuddy desktop app, or set WORKBUDDY_APP_EXECUTABLE to its executable — signing in again will not change this.',
  'row.searchedTitle': 'Paths checked',
  'row.searchedHint': 'If your WorkBuddy keeps its login somewhere else, point the plugin at it with the WORKBUDDY_AUTH_FILE environment variable.',
  'row.reasonMissing': 'not found',
  'row.reasonUnreadable': 'unreadable',
  'row.reasonInvalid': 'no usable token',
  'row.reasonEncrypted': 'encrypted — needs the desktop app',
  'row.reasonWrongRegion': 'belongs to the other region',
  'row.sourceDesktop': 'desktop app',
  'row.sourceDsh': 'plugin copy',
  'row.searchedMore': 'Show the {count} path(s) that were not found',
  'row.reloginHint': 'If errors occur, sign back in to the WorkBuddy app.',
  // Shown when the Host reports that the hidden accounts could NOT be brought
  // back: on Windows a locked vault file can defeat both the unlink and the
  // rewrite. Says what happened and what to do, instead of leaving the user
  // with a rescan that looks like it worked.
  'row.rescanHidesKept': 'The accounts you removed are still hidden: the plugin could not update its own list file. On Windows this is usually a file lock — close antivirus or sync tools that may be holding files in the DSH profile, then try again.',
  'row.credentialRejectedTitle': 'WorkBuddy refused this account\'s token',
  'row.credentialRejectedIntro': 'The token for "{accountName}" is no longer accepted by the upstream, so credits and check-in are unavailable. Signing in again only helps if the problem is the token itself — here is what actually applies:',
  'row.credentialRejectedSwitch': 'Another sign-in on this machine answered the upstream: "{accountName}". Switching to it fixes this — no need to sign in again.',
  'row.credentialRejectedSwitchAction': 'Switch to "{accountName}"',
  'row.credentialRejectedRelogin': 'No other local sign-in exists to switch to. Sign in again in the WorkBuddy desktop app.',
  'row.credentialRejectedChoose': 'Other local sign-ins exist but none of them answered the upstream just now. Try switching to one above; if none works, sign in again in the desktop app.',
  'row.requestFailed': 'Request failed',
  // Shown when a REFRESH failed but the last good snapshot is still on
  // screen — distinct from `row.requestFailed`, which replaces the panel.
  'row.requestFailedHint': 'Refresh failed — showing the last loaded data: {message}',
  'row.poolErrUnavailable': 'The account pool is not available in this build (or its batch route is missing). Restart the app; if it persists, the plugin needs reinstalling.',
  'row.poolErrFailed': 'The batch failed on the host side: {message}',
  'row.poolErrHttp': 'The batch was refused (HTTP {status}). Check the plugin is up to date and try again.',
  'row.poolErrNoMembers': 'No account is checked into this pool — the batch had nothing to run. Check at least one account and save.',
  'row.poolErrNoLiveMembers': 'Every account checked into this pool has lost its local sign-in, so the batch had nothing to run. Sign in again in the WorkBuddy desktop app, or save to drop them.',
  'row.poolErrNoFreeModel': 'This region has no zero-multiplier model to test with. Refresh the model catalog, or pick a target model yourself.',
  'row.poolErrNoCheckin': 'This region has no daily check-in — the action is not offered here.',
  'row.poolErrStaleModel': 'The target model is no longer offered by this region. Pick another, or switch back to automatic.',
  'row.creditsError': 'Credit query unavailable: {message}',
  'row.refresh': 'Refresh',
  'row.refreshing': 'Refreshing…',
  'row.accountUnnamed': 'Unnamed account',
  'row.accountsHint': 'Choose from locally detected sign-ins. Tokens are never shown or saved in DSH settings.',
  'row.accountsRescan': 'Detect accounts again',
  'row.accountsScanning': 'Detecting…',
  // Shown while the FIRST paint is in flight (issue #77). It replaces the
  // signed-out guidance, which used to render here and told signed-in users
  // they were not signed in for as long as the usage route took.
  'row.accountsLoading': 'Loading your accounts…',
  'row.accountsWriteFailed': 'The account change was not saved: {message} — the active profile\'s configuration file could not be updated (on Windows it may be locked by an antivirus scanner or a sync client). Your previous choice is still in effect; close whatever holds that file and try again (see docs/WINDOWS.md in the plugin repo for the exact path).',
  'row.selectionLostHint': 'The saved account no longer exists locally.',
  'row.selectionLostMessage': 'The account saved for this region is no longer among the local sign-ins (WorkBuddy replaced its login or cleaned up backups). Your other sign-ins are fine — pick a current one from the list above. Signing in again in the desktop app will not fix this.',
  'row.modelsTitle': 'Models',
  'row.modelsSummary': '{count} enabled',
  // Shown in the section header while the list is COLLAPSED. The save/discard
  // buttons live inside the fold, so without this a user could hide their own
  // unsaved edits behind it with nothing on screen saying so.
  'row.modelsDirty': 'unsaved changes',
  // The faint hint in the header's middle. It names the ACTION available right
  // now, so it reads as an instruction rather than as a label for the section —
  // a static "expand or collapse" would make the reader work out which applies.
  'row.modelsRefresh': 'Refresh from WorkBuddy',
  'row.modelsRefreshing': 'Refreshing models…',
  'row.discard': 'Discard changes',
  'row.save': 'Save',
  'row.saving': 'Saving…',
  'row.saveError': 'Save failed: {message}',
  'row.saveContentionHint': ' (The file was locked, so the write was refused — on Windows this is usually an antivirus scanner, a sync client such as OneDrive, or an editor with that file open. Close whatever holds it and save again; your edits are still here.)',
  'row.modelContext': 'Maximum context {context}',
  'row.contextBudget': 'DSH context budget',
  'row.modelOutput': 'Output {output}',
  'row.modelRate': '{rate}x credits',
  'row.modelMultimodal': 'Multimodal',
  'row.modelImage': 'Image',
  'row.modelImageText': 'Image input: the vendor documents this model as text-only, so a refresh leaves it unchecked. Tick it yourself only if you know it reads images.',
  'row.modelImageUnverified': 'Image input unverified: no vendor source confirms this model reads images, so a refresh leaves it unchecked rather than guessing. Tick it yourself if you have verified it works.',
  'row.modelOff': 'Can disable',
  'row.modelOffHint': 'Offer the “off” level for this model',
  'row.modelOffRefused': 'refuses off',
  'row.modelOffRefusedHint': 'Measured to reject the “off” level with HTTP 400 (code 11133) on both gateways. With this ticked, every request that carries no reasoning tier — compaction summaries above all — would fail, so it cannot be enabled here.',
  'row.modelReasoning': 'Reasoning: {efforts}',
  'row.modelUnknown': 'Unknown',
  'row.modelCapabilityPending': 'Only capabilities advertised by WorkBuddy are shown.',
  // The two one-click sweeps (issue #61 follow-up, mirroring the sibling `trae`
  // plugin). Cost is stated in the HINT rather than a confirm dialog, per the
  // maintainer's choice: the "all" run covers models the user did not enable, so
  // it spends more than the enabled-only run.
  'row.modelsTestEnabled': 'Test enabled models',
  'row.modelsTestAll': 'Test all models',
  'row.modelsTesting': 'Testing {done}/{total}…',
  'row.modelsTestEnabledHint': 'Tests every model you have ENABLED, one request each — each probe sends a real-volume request, so this spends real credit (about 0.01 per model at the default 25000-token size). Rows show their verdict as it lands. Stops early if the credential is rejected.',
  'row.modelsTestAllHint': 'Tests EVERY model in this region\'s catalog, including the ones you have NOT enabled — so it costs noticeably more than "test enabled models". Same per-probe cost, same early stop on a rejected credential.',
  'row.modelsTestDone': 'Done: {available} of {total} available',
  'row.modelsTestAuth': 'Stopped: the credential was rejected, so every remaining model would answer the same way. Sign in again, then re-run.',
  'row.probe': 'Test',
  'row.probing': 'Testing…',
  'row.probeHint': 'Send a real-volume request (~25k input tokens) to this model and report whether it answers right now. The upstream rate limit fires on request SIZE — measured: about 20k tokens pass, about 30k are refused — so a small request can look fine while every long-conversation request is refused. This is why every test costs real credits (about 0.7) and runs one model at a time.',
  'row.probeOk': '✓ Usable',
  'row.probeOkMs': '✓ Usable ({ms})',
  'row.probeRateLimitedUnknown': '✗ Rate limited · the upstream gave no time for when it frees up',
  'row.probeRateLimitedAt': '✗ Rate limited · usable again after {at}',
  'row.probeModelBusyUnknown': '✗ This model is loaded right now · not your account — another account will not help; wait about a minute or switch models',
  'row.probeModelBusyAt': '✗ This model is loaded right now · not your account; retry after {at}, or switch models',
  'row.probeOutOfCreditUnknown': '✗ Not enough credits · the upstream gave no time for when it frees up',
  'row.probeOutOfCreditAt': '✗ Not enough credits · quota refreshes {at}',
  'row.probeCredentialRejected': '✗ WorkBuddy refused this account\'s token — sign in again or pick another account',
  'row.probePolicyRejected': '✗ WorkBuddy\'s server refused this request under its content policy — re-signing in won\'t help; try the desktop app or another region/account',
  'row.probeNotFound': '✗ The upstream does not know this model',
  'row.probeUnavailable': '✗ The upstream could not be reached — no usable answer came back',
  'row.probeFailed': '✗ Test failed',
  'row.probeFailedStatus': '✗ Test failed (HTTP {status})',
  'row.probeError': 'Could not run the test: {message}',
  'row.cheer': 'Star on GitHub',

  // ---- OAuth sign-in (QR on CN, web page on the international build) ----
  'row.oauthTitle': 'Add an account by QR sign-in',
  'row.oauthStart': 'Sign in with QR code',
  'row.oauthStarting': 'Opening…',
  // The dialog opens the authorization page in the browser automatically
  // (placeholder-window-in-gesture); the copy/reopen buttons are the fallback
  // when that open is blocked.
  'row.oauthOpenHint': 'Open the sign-in page and confirm — the account is added here automatically when you finish:',
  'row.oauthOpened': 'Opened. Waiting for you to finish…',
  'row.oauthWaiting': 'Waiting for the sign-in to finish… ({seconds}s)',
  'row.oauthExpires': 'The sign-in window expires in about {minutes} min.',
  'row.oauthCancel': 'Cancel',
  'row.oauthCancelled': 'Sign-in cancelled.',
  'row.oauthTimedOut': 'The sign-in timed out — start again when ready.',
  'row.oauthDone': 'Added “{accountName}”. Pick it above to use it.',
  'row.oauthError': 'Sign-in failed: {message}',
  'row.oauthCopy': 'Copy link',
  'row.oauthCopied': 'Link copied',
  'row.oauthReopen': 'Open page again',
  'row.oauthDialogClose': 'Close',
  // The INTERNATIONAL sign-in is a browser page, not a QR code — the CN build
  // scans with the WorkBuddy app. Only the three strings that NAME the method
  // are split; every other line (waiting, cancel, done) is method-agnostic and
  // stays shared, so the two regions cannot drift apart on the rest.
  'row.oauthTitleGlobal': 'Add an account by web sign-in',
  'row.oauthStartGlobal': 'Sign in on the web',
  // ---- Shared busy veil ----
  // The line under a veil's scenario text: why the row under it has not moved
  // yet. Same words for every operation, because the wait is the same wait.
  'row.veilHintList': 'The list refreshes as soon as this finishes.',
  'row.oauthSyncing': 'Adding the account…',
  'row.transferTitle': 'Export / import accounts',
  'row.transferHint': 'Move accounts between computers as a JSON file. The file carries the credentials — keep it private. The format is shared with other WorkBuddy credential managers.',
  'row.transferExport': 'Export accounts',
  'row.transferExporting': 'Exporting…',
  'row.transferExportPick': 'Choose the accounts to export ({total} available):',
  'row.transferExportConfirm': 'Export {count} account(s)',
  'row.transferExported': 'Exported {count} account(s) to {fileName}.',
  'row.transferImport': 'Import accounts',
  'row.transferImporting': 'Importing…',
  // Shown while the picked file is being parsed. The picker itself is the OS
  // dialog (the import button opens it directly), so this is the first line the
  // user sees after choosing — it must say what is happening, not ask again.
  'row.transferPreviewing': 'Reading the file…',
  'row.transferPreviewTotal': '{total} account(s) in the file — untick what should stay out. Accounts already stored here are overwritten by the import.',
  'row.transferImportConfirm': 'Import {count} account(s)',
  'row.transferImported': 'Imported {imported} account(s); {skipped} skipped (no token, or belongs to the other region).',
  'row.transferEntryUnknown': 'unknown account',
  'row.transferNoToken': 'no token in this record',
  'row.transferCancel': 'Cancel',
  'row.transferError': 'Transfer failed: {message}',

  // ---- Account pool ----
  'row.poolTitle': 'Account pool',
  'row.poolNoCandidate': 'No account in this pool can be used right now.',
  'row.poolNoCandidateHint': 'Members are rate-limited, out of credits, rejected, or unreachable. Rate limits, drained quotas and transient failures return to the pool on their own — at the time the upstream states, or after a 30-minute fallback. Only a rejected credential needs a new sign-in.',
  // The POOL-level verdict for "every member is blocked by the SAME model"
  // (issue #64). Distinct from `poolNoCandidate` above, which blames the
  // ACCOUNTS; here the accounts are fine and the model is the wall. Without this
  // the card's own per-row labels ("model busy") add up to a claim that is
  // false in aggregate, and the user goes looking for a bad account — the exact
  // hunt issue #56 reported.
  'row.poolModelWideBusy': 'Every member is blocked on the same model — this is the model, not your accounts.',
  'row.poolModelWideBusyHint': 'Switching accounts cannot help: the limit follows the model, so a different account hits the same wall. Wait about a minute, or switch to a less busy model in this session.',
  'row.poolCheckinAll': 'Check in all accounts',
  'row.poolCheckingIn': 'Checking in…',
  'row.poolTestAll': 'Test all accounts',
  'row.poolTesting': 'Testing…',
  'row.poolBusyHint': 'Running one account at a time…',
  'row.poolTargetAuto': 'Auto',
  'row.poolTargetStaleShort': 'target model unavailable',
  'row.poolTargetNoneShort': 'no free model',
  'row.poolTargetFree': 'Auto-picked free model: {model}',
  'row.poolTargetPreferred': 'Your chosen model: {model}',
  'row.poolTargetCurrentPreferred': 'Current: {model} (your choice).',
  'row.poolTargetCurrentFree': 'Current: {model} (auto-picked free model).',
  'row.poolTargetNone': 'This region has no zero-multiplier model yet.',
  'row.poolTargetStale': 'The target model you saved is no longer offered: {model}',
  'row.poolTargetStaleHint': 'The region\'s catalog changed and no longer lists this model, so testing is off rather than running against a model the upstream may not accept. Pick another target, or switch back to automatic.',
  'row.poolTargetStaleClear': 'Switch back to automatic',
  'row.poolTargetStaleOption': '{model} (no longer offered)',
  'row.poolTargetNoneHint': 'The domestic catalog only reveals its multipliers after a model refresh. Rather than quietly spending credits on a paid model, testing stays off until one appears — refresh the models, or pick a target model yourself.',
  'row.poolColumnAccount': 'Account',
  'row.poolColumnCredits': 'Credits',
  'row.poolColumnProbe': 'Target model',
  'row.poolColumnCheckin': 'Check-in',
  'row.poolNeverTested': 'Not tested yet',
  'row.poolTestedAt': 'Tested {at}',
  'row.poolCheckedIn': 'Checked in',
  'row.poolNotCheckedIn': 'Not checked in',
  'row.poolCheckinUnknown': '—',
  'row.poolBenefitClaimable': '{title}: {count} credits',
  'row.poolBenefitUrgent': '{title}: {count} credits · {days}d left',
  'row.poolBenefitDueToday': '{title}: {count} credits · last day',
  'row.poolBenefitClaim': 'Claim',
  'row.poolBenefitClaiming': 'Claiming…',
  'row.poolBenefitClaimAria': 'Claim {title} ({count} credits) for this account',
  'row.poolLogBenefitClaimed': '{accountName} claimed {title}: {count} credits',
  'row.poolLogBenefitFailed': '{accountName} claim failed: {message}',
  'row.poolBenefitHint': 'Claim it on the plans page: {url}',
  'row.poolCreditSoon': '{count} expiring within 3 days',
  'row.poolCreditNearest': 'Nearest package expires {at}',
  'row.poolExcludedRateLimited': 'Rate limited',
  'row.poolExcludedModelBusy': 'Model busy',
  'row.poolExcludedOutOfCredit': 'Out of credits',
  'row.poolExcludedRejected': 'Rejected',
  'row.poolExcludedUnusable': 'Unusable',
  'row.poolRetryAt': 'Back after {at}',
  'row.poolRetryUnknown': 'The upstream gave no time for when this frees up',
  // Relative form of a stated recovery time. Always shown NEXT TO the absolute
  // instant, never instead of it: the instant is the upstream's own answer and
  // stays authoritative, while these save the reader the subtraction.
  'row.remainingImminent': 'any moment now',
  'row.remainingMinutes': 'in about {count} min',
  'row.remainingHours': 'in about {count} h',
  'row.remainingDays': 'in about {count} d',
  // How stale a measurement is, and which writer produced it. Two sites write
  // the same account's record and overwrite each other, so without these the
  // table cannot explain a change the user just watched happen.
  'row.poolProbeJustNow': 'just now',
  'row.poolProbeMinutesAgo': '{count} min ago',
  'row.poolProbeHoursAgo': '{count} h ago',
  'row.poolProbeDaysAgo': '{count} d ago',
  'row.poolProbeSourceTest': 'tested',
  'row.poolProbeSourceLive': 'hit by a live request',
  'row.poolProbeSourceUnknown': 'source unknown',
  // WHICH model a verdict is about (issue #61). 6004 is an account × model
  // condition, so a bare "available" was readable as account-level truth while
  // the model the user actually chats with was the one being refused.
  'row.poolProbeModel': 'model {model}',
  'row.poolProbeModelUnknown': 'model not recorded',
  'row.poolSettingsTitle': 'Account pool settings',
  'row.poolSettingsHint': 'These are preferences: they take effect when you save (same as the model list). Test results are written automatically and are not affected by this button.',
  'row.poolEnabled': 'Enable the account pool',
  'row.poolEnabledHint': 'While on, this region\'s pool decides who serves every request (usable first, then credits, soonest-expiring, freshest credential) and retries on another account when one fails. While off, the plugin does not pick or switch: the account you selected serves every request and a failure is reported as-is. Check-in and testing are MANUAL actions and stay available either way — the switch only controls whether the plugin decides by itself.',
  'row.poolManualAccountLabel': 'Account in use',
  'row.poolManualAccountHint': 'Which account serves this region while the pool is off. Turn the pool on and the ranking picks instead.',
  'row.poolManualAccountNone': 'No account in effect',
  'row.poolTargetLabel': 'Target test model',
  'row.poolTargetHint': 'Auto (default) picks a zero-multiplier model from this region\'s catalog, preferring the largest context window. The two regions can pick different models. A manual choice always wins.',
  'row.poolTargetAutoOption': 'Auto — pick a free model',
  'row.poolProbeSizeLabel': 'Test request size',
  'row.poolProbeSizeHint': 'How much text a test sends. The upstream refuses a request once it grows past roughly 20K–30K tokens, so a test smaller than your real conversations answers "usable" for an account that would refuse them. Bigger tests are more truthful but cost more credit each.',
  'row.poolProbeSizeDefault': 'Default (25K)',
  'row.poolProbeSizeOption': '{tokens}K tokens',
  'row.poolSaved': 'Save',
  'row.poolSaving': 'Saving…',
  'row.poolSaveFailed': 'Could not save: {message}',
  'row.poolSavedStaleRefresh': 'Saved, but the panel could not re-read it. The value is stored; the next refresh will show it.',
  'row.poolDiscard': 'Discard changes',
  'row.poolDirty': '● Unsaved changes',
  'row.poolManualUnlock': 'Turn off rotation',
  'row.poolLogTitle': 'Activity',
  'row.poolLogClear': 'Clear',
  'row.poolLogEmpty': 'Nothing yet. Check-ins, tests, and account switches are recorded here.',
  'row.poolLogCheckinStart': 'Checking in {count} account(s), one at a time',
  'row.poolLogCheckinClaimed': '{accountName}: checked in (+{credit})',
  'row.poolLogCheckinAlready': '{accountName}: already checked in today — skipped',
  'row.poolLogCheckinFailed': '{accountName}: check-in failed — {message}',
  'row.poolLogCheckinDone': 'Check-in finished',
  'row.poolLogBatchFailed': 'Batch failed — nothing ran: {message}',
  'row.poolLogTestStart': 'Testing {count} account(s) against {model}',
  'row.poolLogTestRow': '{accountName}: {outcome}',
  'row.poolLogTestDone': 'Test finished; the pool was re-ranked',
  'row.poolLogTestRowMalformed': '{accountName}: the host returned no result for this account',
  'row.poolRegionNote': 'The domestic and international pools are fully independent: accounts, switches, intervals, and target models never affect each other.',
  'row.poolMembersTitle': 'Accounts in this pool',
  'row.poolMembersHint': 'Only checked accounts are checked in, tested, and used for rotation. Nothing is selected by default — check the ones you want, then save.',
  'row.poolSelectAll': 'Select all',
  'row.poolSelectNone': 'Clear all',
  'row.poolSelectedCount': '{count} of {total} selected',
  // The ordering rule, spelled out where the arrows are used. This is the ONE
  // place the full priority order is written down for a reader; `rankPool`'s
  // doc comment is the source of truth for the code, and the numbered list
  // below must stay in the same order as that comparator.
  'row.poolOrderRulesTitle': 'How this pool chooses an account',
  'row.poolOrderRulesIntro': 'The pool always picks the first account that can actually be billed right now. The rules below are checked in order — the first one that separates two accounts decides; later rules only break ties.',
  'row.poolOrderRuleUsable': '1. Can it be billed right now? Accounts that are rate-limited, out of credit, credential-rejected, or failing are moved to the back until their cooldown ends. This outranks everything, including your own order below.',
  'row.poolOrderRuleExpiring': '2. Does it have credits expiring within 3 days? Yes goes first. This also outranks your manual order — see the note below.',
  'row.poolOrderRuleManual': '3. Your manual order. The position you set with the ↑ / ↓ arrows. Accounts you never ordered are placed after every ordered one.',
  'row.poolOrderRuleNearestExpiry': '4. Which expiry comes first? Between accounts that both have credits expiring, the one losing them sooner goes first.',
  'row.poolOrderRuleExpiringAmount': '5. How many are expiring? Between those same accounts, the one with more at stake goes first. With nothing expiring this is equivalent to comparing totals.',
  'row.poolOrderRuleTotal': '6. Total credits. The account holding more goes first, so a nearly-drained account is kept in reserve.',
  'row.poolOrderRuleFreshness': '7. Freshness of the sign-in. The more recently issued credential wins a draw.',
  'row.poolOrderRuleId': '8. Account id. A final tie-break, so the same pool always produces the same order.',
  'row.poolOrderWhy': 'Why expiring credits outrank your manual order: expiring credits are money about to disappear, while a manual order may be stale or set by accident. If the manual order won, one mis-drag could let credits lapse unused. So an account with credits expiring within 3 days always goes ahead of one without, even if you dragged it to the bottom.',
  'row.poolOrderBadgeNote': 'The badge shows the position you SAVED, not the live ranking. An account can read "No. 2" while being benched for a rate limit — the number is your saved preference, and the pool skips accounts it cannot bill right now.',
  'row.poolOrderRulesToggle': 'Show the full ordering rule',
  'row.poolNoneSelected': 'No account is checked into this pool.',
  'row.poolNoneSelectedHint': 'Check at least one account above and save. Until then both buttons stay disabled, because a pool with no members has nothing to run on.',
  'row.poolGhostMembers': '{count} pool member(s) are no longer signed in on this machine, so they are not counted and not used: {names}. Remove any you no longer need below.',
  'row.poolGhostRemove': 'Remove {account} from this pool',
  'row.poolGhostRemoveNamed': 'Remove {account} from this pool. This account is no longer signed in on this machine.',
  'row.poolGhostRemoveUnnamed': 'Remove {account} from this pool. No name was ever recorded for this account, so what you see is the start of its id.',
  'row.poolSelectAria': 'Include {accountName} in this region\'s account pool',
  'row.poolMember': 'In pool',
  'row.poolCurrentBadge': 'In use',
  'row.poolCurrentHeader': 'In use: {account}',
  'row.poolNotMember': 'Not in pool',
  'row.poolUnsavedMembers': 'Selection changed — save to apply',
  // Manual priority ordering: the rank badge and the ↑/↓ move arrows. The badge
  // is non-interactive (it describes the current order), the arrows act on it.
  'row.poolRankLabel': 'No. {rank}',
  // Deliberately no interpolated ordinal suffix. "{rank}st" is correct for 1
  // but produces "2st" / "3st" for the ranks the badge actually shows, and an
  // English ordinal needs a suffix helper the locale table does not have. This
  // wording reads correctly for every rank and matches the badge's "No. N".
  'row.poolRankManualTitle': 'You placed this account at position {rank} in the pool manually.',
  'row.poolRankAuto': 'Auto',
  'row.poolRankAutoTitle': 'Not manually sorted yet: the pool spends expiring credits first, then picks accounts by remaining balance. Use ↑/↓ to set your own order.',
  'row.poolMoveUpTitle': 'Move account up in this pool\'s order',
  'row.poolMoveDownTitle': 'Move account down in this pool\'s order',
  'row.poolMoveUpAria': 'Move {accountName} up in this pool\'s order',
  'row.poolMoveDownAria': 'Move {accountName} down in this pool\'s order',
  // Per-row actions: test ONE account, remove ONE account.
  'row.poolRowTest': 'Test',
  'row.poolRowRemove': 'Remove',
  'row.poolRowRemoveHint': 'Remove this account from the list. The WorkBuddy desktop app is not signed out — it keeps its own sign-in. Removing only hides the account here; 「Detect accounts again」 brings it back.',
  'row.poolRowRemoveAria': 'Remove the stored credential of {accountName}',
  'row.poolRowRemoved': '{accountName}: hidden from the list. 「Detect accounts again」 re-adds it; the desktop app stays signed in.',
  'row.poolRowRemoving': 'Removing the account…',
  'row.poolRowRemoveDesktopOnly': '{accountName}: hidden from the list — this account comes from the desktop app\'s own sign-in, which is left untouched. 「Detect accounts again」 re-adds it.',
  'row.showCreditsCn': 'Show credits in the composer toolbar',
  'row.showCreditsGlobal': 'Show credits in the composer toolbar',
  'row.showCreditsCnHint': 'Show the domestic (WB CN) credit balance in the composer toolbar, but only while this session uses a WB CN model. Click it for per-account balances and a manual refresh (refreshes by itself every 5 minutes).',
  // WHERE the readout sits (issue #62). The composer row is a LIST seat shared
  // with any other plugin that registers there — one report is the readout
  // disappearing once another plugin was installed — so the seat is a choice.
  'row.creditPositionLabel': 'Position',
  'row.creditPositionComposer': 'composer toolbar',
  'row.creditPositionStats': 'below the input box',
  'row.creditPositionAria': 'Credit readout position for {region}',
  // The subordinate control's own explanation, ALWAYS visible: it answers "why
  // is there a picker here at all" rather than restating the option names.
  // Restating them belongs to the disabled state only — see
  // creditPositionDisabledHint. Both are deliberately short: they are the
  // second and third text tiers under the switch's title, and a longer line
  // would push the switch itself into second place.
  'row.creditPositionHintInline': 'Where the readout sits. "composer toolbar" is the default — the row with the model picker.',
  'row.creditPositionDisabledHint': 'Unavailable while the switch above is off: tick "Show credits in the composer toolbar" first.',
  // The row's explanation: what the readout IS. Kept distinct from
  // creditPositionHintInline, which explains the picker beside it — one
  // sentence per control.
  'row.showCreditsHintInline': 'The balance for the account currently serving this tab. Click for per-account balances; it also refreshes every 5 minutes.',
  // The supplement to a quota failure (issue #63), rendered as an INLINE
  // PARENTHETICAL in the conversation — one short clause, no dialog, no button.
  // The plugin no longer claims the `shell.quota-notice` chain seat, so this is
  // NOT appended to the host's sentence by this plugin any more (that takeover
  // is what parked an unstyled span at the overlay's top-left); the host draws
  // its own sentence and this qualifies it where the user is already looking.
  // Written to be TRUE FOR BOTH cases the QUOTA code covers — a model's own daily
  // quota that has nothing to do with credits, and a genuinely empty balance —
  // because the upstream says which it is in Chinese prose the plugin must not
  // parse to make policy. The glyphs are part of the string so a locale that
  // brackets differently is not at the mercy of a CSS `content` rule.
  'quotaNotice.fallbackHead': 'The quota for this request is exhausted',
  'quotaNotice.supplement': ' (some models also have a daily limit that is unrelated to your credits)',
  'row.creditPositionHint': 'Where the credit readout sits. "composer toolbar" is the default (the row with the model picker). Choose "below the input box" — the row carrying the round / step / token statistics — if another plugin occupies the composer toolbar and the readout does not appear.',
  'row.showCreditsGlobalHint': 'Show the international (WB AI) credit balance in the composer toolbar, but only while this session uses a WB AI model. Click it for per-account balances and a manual refresh (refreshes by itself every 5 minutes).',
  'composer.pointsCn': 'WB CN',
  'composer.pointsGlobal': 'WB AI',
  'composer.panelTitleCn': 'WB CN credits',
  'composer.panelTitleGlobal': 'WB AI credits',
  'composer.account': 'Account',
  'composer.credits': 'Credits',
  'composer.switchTo': 'Switch to {account}',
  'composer.current': 'In use',
  'composer.noAccounts': 'No account in this region',
  'composer.signedOut': 'Not signed in',
  // The panel's header button TESTS the accounts rather than re-reading their
  // balances: a mark in that table is a measurement, and only another measurement
  // can improve it. It still re-reads afterwards — the probes live in the usage
  // document — so pressing this leaves the table current as well as tested.
  'composer.testAll': 'Test all',
  'composer.testing': 'Testing…',
  'composer.testAllHint': 'Test every account in this region, one at a time',
  'composer.testFailed': 'Could not test the accounts',
  'composer.refreshFailed': 'Could not refresh credits',
  'composer.lastRefresh': 'Last refreshed',
  'composer.panelTitle': 'WorkBuddy credits',
  'sidebar.creditsCn': 'WB CN credits',
  'sidebar.creditsGlobal': 'WB AI credits',
  'sidebar.refresh': 'Refresh',
  'sidebar.refreshing': 'Refreshing…',
  'sidebar.lastRefresh': 'Last refreshed {time}',
  'sidebar.refreshFailed': 'Refresh failed',
  'sidebar.signedOut': 'Not signed in',
  'panel.title': 'WorkBuddy',
  'panel.intro': 'Accounts, models, and credits for both WorkBuddy providers. This page is always reachable — it does not depend on which model the current session is using.',
  'panel.sidebar': 'WorkBuddy',
} as const

export type WorkBuddySettingsKey = keyof typeof en

export const zh: Record<WorkBuddySettingsKey, string> = {
  'row.title': '接入使用 WorkBuddy 积分与模型（dsh-connect-workbuddy）',
  'row.desc': '在 DSH 中使用 WorkBuddy 模型：每次刷新都按上游目录读取每个模型的积分倍率，图片输入可逐模型开关，多个账号可切换或由账号池自动换号，每日签到与剩余积分一键可查。国内版与国际版是两个独立供应商，各有自己的账号，可同时使用。',
  'row.expand': '展开',
  'row.collapse': '收起',
  'row.tabCn': '国内版',
  'row.tabGlobal': '国际版',
  'row.tabHint': '每个 tab 是一个独立供应商（workbuddy / workbuddy-global），各有自己的账号、积分与模型。两边同时生效：不同会话可各选一边，一侧的改动不影响另一侧。',
  // 免费（×0）模型**不是无限量**：它有一个**时间段内的 token 定额**（上游的 6004/14003
  // 拒的就是这个定额，不是账单余额）。与 `tabHint` 分开、且加粗显示，因为它要防的误读
  // 代价很高：以为 ×0 = 无限用的人，会把 6004 读成「插件坏了」而不是「这一时段的额度用完了」。
  'row.tabFreeQuotaWarn': '免费模型有时间段内定额 Token 上限，并非无限制使用。',
  'row.tabSwitchHint': '取消勾选即关闭该供应商：它的模型不再出现在 DSH 模型选择器里；账号、积分与模型设置都会保留，重新勾选即恢复。',
  'row.tabSwitchAria': '是否向 DSH 提供{region}供应商',
  'row.tabOffNotice': '该供应商已关闭：它的模型不会提供给 DSH。账号、积分与模型设置均已保留——勾选上方复选框即可恢复。',
  'row.signedOutHint': '在 WorkBuddy 桌面 App 里登录一次即可，插件会自动跟随当前登录的账号。',
  'row.signedOutWrongRegion': '找到了你的 WorkBuddy 登录信息，但它属于另一个地区的标签页。切换到上方对应标签页即可使用——不需要重新登录。',
  'row.signedOutEncrypted': '你的 WorkBuddy 登录信息在，但其中的 token 字段是加密的，插件拿不到密钥。请安装 WorkBuddy 桌面 App，或用环境变量 WORKBUDDY_APP_EXECUTABLE 指定它的可执行文件——重新登录无法解决这个问题。',
  'row.searchedTitle': '已检查的路径',
  'row.searchedHint': '如果你的 WorkBuddy 把登录信息存在别处，可以用环境变量 WORKBUDDY_AUTH_FILE 指定。',
  'row.reasonMissing': '不存在',
  'row.reasonUnreadable': '无法读取',
  'row.reasonInvalid': '没有可用的 token',
  'row.reasonEncrypted': '已加密——需要桌面 App',
  'row.reasonWrongRegion': '属于另一个地区',
  'row.sourceDesktop': '桌面 App',
  'row.sourceDsh': '插件副本',
  'row.searchedMore': '显示另外 {count} 条「不存在」的路径',
  'row.reloginHint': '出现错误，重新登录 WorkBuddy APP 即可。',
  // 隐藏账号没能恢复时显示：Windows 上被占用的文件会让删除与改写双双失败。
  // 说明发生了什么、该做什么，而不是让用户以为「重新检测」成功了。
  'row.rescanHidesKept': '已删除的账号仍是隐藏状态：插件没能更新自己的名单文件。Windows 上通常是文件被占用——请关闭可能正在占用 DSH 配置目录的杀毒/同步工具后重试。',
  'row.credentialRejectedTitle': 'WorkBuddy 拒绝了这个账号的 token',
  'row.credentialRejectedIntro': '「{accountName}」的 token 已不被上游接受，所以积分与签到都用不了。重新登录只在「确实是 token 的问题」时才有用——当前实际适用的是下面这一条：',
  'row.credentialRejectedSwitch': '本机另一个账号「{accountName}」刚刚实测可用，切换到它即可恢复，不必重新登录。',
  'row.credentialRejectedSwitchAction': '切换到「{accountName}」',
  'row.credentialRejectedRelogin': '本机没有其他账号可切换。请在 WorkBuddy 桌面端重新登录。',
  'row.credentialRejectedChoose': '本机还有其他账号，但刚才都没能通过上游校验。可以在上方切换一个试试；如果都不行，请在桌面端重新登录。',
  'row.requestFailed': '请求失败',
  'row.requestFailedHint': '刷新失败——下方为上次加载的数据：{message}',
  'row.poolErrUnavailable': '本版本没有可用的账号池（或其批量接口缺失）。请重启应用；若仍不行，插件可能需要重新安装。',
  'row.poolErrFailed': '批量操作在宿主侧失败：{message}',
  'row.poolErrHttp': '批量操作被拒绝（HTTP {status}）。请确认插件是最新版本后重试。',
  'row.poolErrNoMembers': '本池没有勾选任何账号，批量操作没有可执行对象。请至少勾选一个账号并保存。',
  'row.poolErrNoLiveMembers': '本池勾选的账号在本机都已不再登录，批量操作没有可执行对象。请在 WorkBuddy 桌面端重新登录，或保存以移除它们。',
  'row.poolErrNoFreeModel': '本区域没有可用的免费（倍率为 0）模型。请先刷新模型目录，或自己指定一个目标模型。',
  'row.poolErrNoCheckin': '本区域没有每日签到 —— 这里不提供该操作。',
  'row.poolErrStaleModel': '目标模型已不在本区域目录中。请改选一个，或切回自动。',
  'row.creditsError': '积分查询失败：{message}',
  'row.refresh': '刷新',
  'row.refreshing': '正在刷新…',
  'row.accountUnnamed': '未命名账号',
  'row.accountsHint': '选择本机检测到的登录账号；Token 不会显示，也不会保存到 DSH 设置。',
  'row.accountsRescan': '重新检测账号',
  'row.accountsScanning': '正在检测…',
  // 首屏加载中的提示（issue #77）。它取代的正是「未登录」那段说明——
  // 那一段在用量接口返回前一直显示，让已登录的用户以为自己没登录。
  'row.accountsLoading': '正在加载账号…',
  'row.accountsWriteFailed': '账号改动未保存：{message} —— 当前 profile 的配置文件写入失败（Windows 上可能被杀毒软件或同步盘占用）。当前仍是原来保存的选择，请先关闭占用该文件的程序再重试（文件的确切路径见插件仓库的 docs/WINDOWS.md）。',
  'row.selectionLostHint': '已保存的账号在本机已不存在。',
  'row.selectionLostMessage': '该区域保存的账号已不在本机登录列表中（WorkBuddy 更换了登录或清理了备份文件）。本机其他登录仍然可用——请在上方列表中重新选择一个当前账号。重新登录桌面端 App 无法修复此问题。',
  'row.modelsTitle': '模型',
  'row.modelsSummary': '已启用 {count} 个',
  // 折叠态显示在标题行。保存/放弃按钮在折叠区里面，没有这个提示，用户会把
  // 自己未保存的改动藏到折叠后面，而界面上什么都不说。
  'row.modelsDirty': '有未保存的修改',
  // 标题行中间的淡色提示。它说的是「此刻能做的动作」，因此读起来像一句指引，
  // 而不是区块的标签——写成固定的「展开或收起」会让读者自己去想该按哪个。
  'row.modelsRefresh': '从 WorkBuddy 刷新',
  'row.modelsRefreshing': '正在刷新模型…',
  'row.discard': '放弃修改',
  'row.save': '保存',
  'row.saving': '保存中…',
  'row.saveError': '保存失败：{message}',
  'row.saveContentionHint': '（该文件被占用，写入被拒——Windows 上通常是杀毒软件、OneDrive 这类同步盘，或正打开该文件的编辑器。请先关闭占用者再保存一次；你的改动仍然还在。）',
  'row.modelContext': '最大上下文 {context}',
  'row.contextBudget': 'DSH 上下文预算',
  'row.modelOutput': '最大输出 {output}',
  'row.modelRate': '积分 {rate}x',
  'row.modelMultimodal': '多模态',
  'row.modelImage': '图片',
  'row.modelImageText': '图片输入：厂商文档标明该模型仅支持文本，因此刷新时不会自动勾选。只有你确认它能读图，才建议手动勾上。',
  'row.modelImageUnverified': '图片输入未核实：没有厂商资料确认该模型能读图，刷新时按「不猜」处理，不会自动勾选。如果你验证过确实可用，可以手动勾上。',
  'row.modelOff': '可关闭思考',
  'row.modelOffHint': '为这个模型提供「关闭思考」档位',
  'row.modelOffRefused': '拒绝 off',
  'row.modelOffRefusedHint': '实测在两个网关上都拒绝「关闭思考」档位（HTTP 400 / code 11133）。勾选后，所有未指定推理档位的请求（尤其是压缩摘要）都会失败，因此这里不能启用。',
  'row.modelReasoning': '推理强度：{efforts}',
  'row.modelUnknown': '未知',
  'row.modelCapabilityPending': '仅展示 WorkBuddy 接口明确公布的模型能力。',
  // 两个一键遍历按钮（issue #61 的后续，与同族 trae 插件对齐）。成本写在 title 提示里
  // 而不是二次确认，按维护者的选择：「所有模型」含未启用的，所以比「仅启用」花得多。
  'row.modelsTestEnabled': '一键测试启用模型',
  'row.modelsTestAll': '一键测试所有模型',
  'row.modelsTesting': '测试中 {done}/{total}…',
  'row.modelsTestEnabledHint': '逐个测试你**已启用**的模型，一个模型一次请求 —— 每次探测都发真实体积的请求，真花积分（默认 25000 token 体积下约 0.01/个）。每行的结果一出来就显示。凭据被拒时提前停止。',
  'row.modelsTestAllHint': '测试本区域目录里的**每一个**模型，含**未启用**的 —— 所以比「仅测试启用模型」明显更贵。单次探测成本相同，凭据被拒时同样提前停止。',
  'row.modelsTestDone': '完成：{total} 个里 {available} 个可用',
  'row.modelsTestAuth': '已停止：凭据被拒，剩下的模型都会得到同一个答案。请重新登录后再跑一次。',
  'row.probe': '测试',
  'row.probing': '测试中…',
  'row.probeHint': '对该模型发一条真实体积的请求（约 25k 输入 token），报告它现在能不能用。上游的限流按请求体积触发——实测约 20k 能过、约 30k 被拒——所以小请求看着正常、长对话里却可能每次都被拒。这也是为什么每次测试都会消耗真实积分（约 0.7），且一次只测一个模型。',
  'row.probeOk': '✓ 可用',
  'row.probeOkMs': '✓ 可用（{ms}）',
  'row.probeRateLimitedUnknown': '✗ 被限流 · 上游未给出何时恢复',
  'row.probeRateLimitedAt': '✗ 被限流 · {at} 之后可再用',
  'row.probeModelBusyUnknown': '✗ 该模型当前负载较高 · 不是账号被限流——换账号没用，建议等待约 1 分钟或切换模型',
  'row.probeModelBusyAt': '✗ 该模型当前负载较高 · 不是账号被限流；{at} 之后可重试，或切换模型',
  'row.probeOutOfCreditUnknown': '✗ 积分不足 · 上游未给出何时恢复',
  'row.probeOutOfCreditAt': '✗ 积分不足 · 积分包 {at} 刷新',
  'row.probeCredentialRejected': '✗ WorkBuddy 拒绝了这个账号的 token——请重新登录或换一个账号',
  'row.probePolicyRejected': '✗ WorkBuddy 服务端按内容策略拒绝了这次请求——重新登录无效；可在桌面端验证或切换区域/账号',
  'row.probeNotFound': '✗ 上游不认识这个模型',
  'row.probeUnavailable': '✗ 连不上上游——上游没有给出可用答复',
  'row.probeFailed': '✗ 测试失败',
  'row.probeFailedStatus': '✗ 测试失败（HTTP {status}）',
  'row.probeError': '无法执行测试：{message}',
  'row.cheer': '鼓励一下',

  // ---- OAuth 登录（国内扫码，国际版网页） ----
  'row.oauthTitle': '扫码添加账号',
  'row.oauthStart': '扫码登录',
  'row.oauthStarting': '正在打开…',
  // 弹窗内点击后自动在浏览器打开授权页（手势内占位窗口导航）；复制/重开按钮是
  // 打开被拦时的兜底。
  'row.oauthOpenHint': '打开登录页并完成确认——完成后账号会自动出现在这里：',
  'row.oauthOpened': '已打开，等待你完成登录…',
  'row.oauthWaiting': '正在等待登录完成…（{seconds} 秒）',
  'row.oauthExpires': '登录窗口约 {minutes} 分钟后过期。',
  'row.oauthCancel': '取消',
  'row.oauthCancelled': '已取消登录。',
  'row.oauthTimedOut': '登录超时——请重新开始。',
  'row.oauthDone': '已添加「{accountName}」。在上方选中它即可使用。',
  'row.oauthError': '登录失败：{message}',
  'row.oauthCopy': '复制链接',
  'row.oauthCopied': '已复制链接',
  'row.oauthReopen': '重新打开页面',
  'row.oauthDialogClose': '关闭',
  // 国际版登录是浏览器网页，国内版才是用 App 扫码。只拆「称呼登录方式」的三条，
  // 其余（等待、取消、完成）与方式无关，继续共用，避免两个区域在别处走偏。
  'row.oauthTitleGlobal': '网页登录添加账号',
  'row.oauthStartGlobal': '网页登录',
  // ---- 共用缓冲遮罩 ----
  'row.veilHintList': '完成后列表会立即刷新。',
  'row.oauthSyncing': '正在添加账号…',
  'row.transferTitle': '导出 / 导入账号',
  'row.transferHint': '用 JSON 文件在电脑之间迁移账号。文件里是账号凭据——请妥善保管。该格式与同类 WorkBuddy 凭据管理工具通用。',
  'row.transferExport': '导出账号',
  'row.transferExporting': '正在导出…',
  'row.transferExportPick': '选择要导出的账号（共 {total} 个）：',
  'row.transferExportConfirm': '导出 {count} 个账号',
  'row.transferExported': '已导出 {count} 个账号到 {fileName}。',
  'row.transferImport': '导入账号',
  'row.transferImporting': '正在导入…',
  'row.transferPreviewing': '正在读取文件…',
  'row.transferPreviewTotal': '文件中共 {total} 个账号——不需要的请取消勾选。导入会覆盖这里已存储的同名账号。',
  'row.transferImportConfirm': '导入 {count} 个账号',
  'row.transferImported': '已导入 {imported} 个账号；跳过 {skipped} 个（缺 token，或属于另一个区域）。',
  'row.transferEntryUnknown': '未知账号',
  'row.transferNoToken': '此记录没有 token',
  'row.transferCancel': '取消',
  'row.transferError': '传输失败：{message}',

  // ---- 账号池 ----
  'row.poolTitle': '账号池',
  'row.poolNoCandidate': '账号池里目前没有可用的账号。',
  'row.poolNoCandidateHint': '成员要么在限流冷却中、要么积分耗尽、要么凭据被拒、要么上游无响应。限流、积分耗尽与瞬时故障都会自动回池——按上游给出的恢复时间，没给时间就按 30 分钟兜底，不需要你操作；只有「凭据被拒」需要重新登录。',
  // 「所有成员都撞在同一个模型上」的池级结论（issue #64）。与上面那条刻意分开：
  // 那条说的是**账号**不行，这条说的是**账号没问题、模型才是那堵墙**。没有它，
  // 卡片上每行「模型繁忙」加起来就成了一个整体上错误的结论，用户会去找一个不存
  // 在的坏账号 —— 正是 issue #56 报告的那场搜寻。
  'row.poolModelWideBusy': '所有成员都卡在同一个模型上 —— 这是模型的问题，不是你的账号。',
  'row.poolModelWideBusyHint': '换账号解决不了：限制跟随模型，换一个账号撞的是同一堵墙。等大约 1 分钟，或把这个会话切到负载较低的模型。',
  'row.poolCheckinAll': '一键签到所有账号',
  'row.poolCheckingIn': '签到中…',
  'row.poolTestAll': '一键测试所有账号',
  'row.poolTesting': '测试中…',
  'row.poolBusyHint': '正在逐个账号执行…',
  'row.poolTargetAuto': '自动',
  'row.poolTargetStaleShort': '目标模型已失效',
  'row.poolTargetNoneShort': '无免费模型',
  'row.poolTargetFree': '自动选中的免费模型：{model}',
  'row.poolTargetPreferred': '你指定的模型：{model}',
  'row.poolTargetCurrentPreferred': '当前：{model}（你指定）。',
  'row.poolTargetCurrentFree': '当前：{model}（自动挑选的免费模型）。',
  'row.poolTargetNone': '本区域暂时没有倍率为 0 的免费模型。',
  'row.poolTargetStale': '你保存的目标模型已不在目录中：{model}',
  'row.poolTargetStaleHint': '本区域的模型目录已变化，不再包含这个模型，因此测试被停用——而不是拿一个上游可能不接受的模型去跑。请改选一个目标模型，或切回自动。',
  'row.poolTargetStaleClear': '切回自动',
  'row.poolTargetStaleOption': '{model}（已下架）',
  'row.poolTargetNoneHint': '国内版的倍率要等模型目录刷新后才会出现。为了不让你在不知情的情况下花掉积分，插件不会自动改用收费模型——请先刷新模型目录，或自己指定一个目标模型。',
  'row.poolColumnAccount': '账号',
  'row.poolColumnCredits': '积分',
  'row.poolColumnProbe': '目标模型',
  'row.poolColumnCheckin': '签到',
  'row.poolNeverTested': '尚未测试',
  'row.poolTestedAt': '测试于 {at}',
  'row.poolCheckedIn': '已签到',
  'row.poolNotCheckedIn': '未签到',
  'row.poolCheckinUnknown': '—',
  'row.poolBenefitClaimable': '{title}：{count} 积分',
  'row.poolBenefitUrgent': '{title}：{count} 积分 · 剩 {days} 天',
  'row.poolBenefitDueToday': '{title}：{count} 积分 · 今天截止',
  'row.poolBenefitClaim': '领取',
  'row.poolBenefitClaiming': '领取中…',
  'row.poolBenefitClaimAria': '为该账号领取{title}（{count} 积分）',
  'row.poolLogBenefitClaimed': '{accountName} 已领取{title}：{count} 积分',
  'row.poolLogBenefitFailed': '{accountName} 领取失败：{message}',
  'row.poolBenefitHint': '去套餐与积分页领取：{url}',
  'row.poolCreditSoon': '{count} 积分 3 天内过期',
  'row.poolCreditNearest': '最近积分包 {at} 过期',
  'row.poolExcludedRateLimited': '被限流',
  'row.poolExcludedModelBusy': '模型繁忙',
  'row.poolExcludedOutOfCredit': '积分耗尽',
  'row.poolExcludedRejected': '被拒绝',
  'row.poolExcludedUnusable': '不可用',
  'row.poolRetryAt': '{at} 之后可再用',
  'row.poolRetryUnknown': '上游未给出何时恢复',
  // 上游给出的恢复时间的「相对说法」。总是与绝对时刻**并列**显示，而不是取代它：
  // 绝对时刻是上游的原话、始终权威，这几个键只是替读者省掉一次心算。
  'row.remainingImminent': '即将恢复',
  'row.remainingMinutes': '约 {count} 分钟后',
  'row.remainingHours': '约 {count} 小时后',
  'row.remainingDays': '约 {count} 天后',
  // 记录有多旧、以及是谁写的。两个写入方会互相覆盖同一个账号的记录，
  // 没有这两项就无法解释用户亲眼看到的变化（测出 ok，过后变成被限流）。
  'row.poolProbeJustNow': '刚刚',
  'row.poolProbeMinutesAgo': '{count} 分钟前',
  'row.poolProbeHoursAgo': '{count} 小时前',
  'row.poolProbeDaysAgo': '{count} 天前',
  'row.poolProbeSourceTest': '测得',
  'row.poolProbeSourceLive': '聊天撞上',
  'row.poolProbeSourceUnknown': '来源未知',
  // 结论是针对**哪个模型**的（issue #61）。6004 是「账号 × 模型」维度的条件，
  // 只写「可用」会被读成账号级结论，而被拒的恰恰是用户真在用的那个模型。
  'row.poolProbeModel': '模型 {model}',
  'row.poolProbeModelUnknown': '未记录模型',
  'row.poolSettingsTitle': '账号池设置',
  'row.poolSettingsHint': '下面是偏好设置：点保存才生效（与「模型管理」一致）。测试结果由插件自动写入，不受这个保存按钮影响。',
  'row.poolEnabled': '启用账号池',
  'row.poolEnabledHint': '开启后由本区域的账号池自动决定每一次请求用谁（可用优先，其次积分高、快过期的积分包、凭据更新的），失败时自动换下一个可用账号。关闭后插件不替你选、也不替你换：你选的账号服务每一次请求，失败就如实报错。签到与测试是手动动作，两种状态下都可用 —— 这个开关只管「插件要不要自己决定」。',
  'row.poolManualAccountLabel': '使用哪个账号',
  'row.poolManualAccountHint': '账号池关闭时，由你在这里选定服务本区域的账号。开启账号池后改由排序自动决定。',
  'row.poolManualAccountNone': '当前没有生效的账号',
  'row.poolTargetLabel': '目标测试模型',
  'row.poolTargetHint': '「自动」（默认）会从本区域目录里挑一个倍率为 0 的免费模型，多个候选取上下文窗口最大的。国内版与国际版可能挑到不同的模型。手动指定优先于自动。',
  'row.poolTargetAutoOption': '自动 —— 挑一个免费模型',
  'row.poolProbeSizeLabel': '测试请求体积',
  'row.poolProbeSizeHint': '测试时发送多少文本。上游在请求大约超过 2 万～3 万 token 时会开始拒绝，所以测试体积若小于你真实对话的体积，就会出现「测出可用、实际一发就被限」。体积越大测得越准，但每次测试消耗的积分也越多。',
  'row.poolProbeSizeDefault': '默认（2.5 万）',
  'row.poolProbeSizeOption': '{tokens} 万 token',
  'row.poolSaved': '保存',
  'row.poolSaving': '保存中…',
  'row.poolSaveFailed': '保存失败：{message}',
  'row.poolSavedStaleRefresh': '已保存，但面板未能重新读取。设置已写入；下次刷新后会显示。',
  'row.poolDiscard': '放弃修改',
  'row.poolDirty': '● 有未保存的修改',
  'row.poolManualUnlock': '关闭自动轮换',
  'row.poolLogTitle': '活动记录',
  'row.poolLogClear': '清空',
  'row.poolLogEmpty': '尚无活动。签到、测试与账号切换都会记录在这里。',
  'row.poolLogCheckinStart': '开始签到 {count} 个账号（逐个执行）',
  'row.poolLogCheckinClaimed': '{accountName}：签到成功 +{credit}',
  'row.poolLogCheckinAlready': '{accountName}：今日已签到，跳过',
  'row.poolLogCheckinFailed': '{accountName}：签到失败 —— {message}',
  'row.poolLogCheckinDone': '签到完成',
  'row.poolLogBatchFailed': '批量操作失败 —— 没有执行：{message}',
  'row.poolLogTestStart': '开始测试 {count} 个账号 × {model}',
  'row.poolLogTestRow': '{accountName}：{outcome}',
  'row.poolLogTestDone': '测试完成，已重新计算候选账号',
  'row.poolLogTestRowMalformed': '{accountName}：Host 未返回该账号的结果',
  'row.poolRegionNote': '国内版与国际版是完全独立的两个账号池：账号、开关、间隔、目标模型互不影响。',
  'row.poolMembersTitle': '本池包含的账号',
  'row.poolMembersHint': '只有勾选的账号才会被签到、测试和轮换。默认一个都不勾 —— 请勾选你要的账号，然后保存。',
  'row.poolSelectAll': '全选',
  'row.poolSelectNone': '全不选',
  'row.poolSelectedCount': '已选 {count} / {total}',
  // 排序规则说明。顺序必须与 rankPool 的比较器完全一致（见 src/account-pool.ts）。
  'row.poolOrderRulesTitle': '本池如何挑选账号',
  'row.poolOrderRulesIntro': '池子总是先挑「现在确实能扣费的」账号。下面这些规则按顺序逐条比较，第一条分出胜负就停止，后面的只在平局时才看。',
  'row.poolOrderRuleUsable': '1. 现在能扣费吗？被限流、积分耗尽、凭证被拒或调用失败的账号会被挪到后面，直到冷却结束。这一条优先级最高，压过下面的手动顺序。',
  'row.poolOrderRuleExpiring': '2. 有 3 天内会过期的积分吗？有就排前面。这一条同样压过手动顺序，原因见下方说明。',
  'row.poolOrderRuleManual': '3. 你排的手动顺序。就是用 ↑ / ↓ 设定的位置。没有手动排过的账号，会排在所有已排序账号之后。',
  'row.poolOrderRuleNearestExpiry': '4. 谁先过期？两个都有临期积分时，先到期的排前面。',
  'row.poolOrderRuleExpiringAmount': '5. 过期多少？同样是两个都有临期积分时，临期数额大的排前面。没有临期积分时，这一步等同于比较总积分。',
  'row.poolOrderRuleTotal': '6. 总积分。积分多的排前面，接近耗尽的号先留着备用。',
  'row.poolOrderRuleFreshness': '7. 登录凭证新旧。凭证签发更晚的赢下平局。',
  'row.poolOrderRuleId': '8. 账号 id。最终兜底，保证同样的池子每次排出来的顺序都一样。',
  'row.poolOrderWhy': '为什么临期积分压过手动顺序：临期积分是马上要过期的钱，而手动顺序可能已经过时、也可能是手滑拖错了。如果让手动顺序赢，一次误拖就足以让积分白白过期。所以有 3 天内到期积分的账号，永远排在没有的账号前面 —— 哪怕你把它拖到了最后一位。',
  'row.poolOrderBadgeNote': '徽标显示的是你「保存」的位置，不是此刻的实际排序。一个账号可能写着「第 2 位」却因为被限流而暂时不被选中 —— 那个数字代表你的偏好，池子会跳过当下无法扣费的账号。',
  'row.poolOrderRulesToggle': '查看完整排序规则',
  'row.poolNoneSelected': '这个池里还没有勾选任何账号。',
  'row.poolNoneSelectedHint': '请在上方勾选至少一个账号并保存。在此之前两个按钮都不可用 —— 空池没有可执行的对象。',
  'row.poolGhostMembers': '有 {count} 个已选入本池的账号在本机已不再登录，因此不计入、也不会被使用：{names}。不需要的可在下方逐个移除。',
  'row.poolGhostRemove': '把 {account} 移出本池',
  'row.poolGhostRemoveNamed': '把 {account} 移出本池。该账号在本机已不再登录。',
  'row.poolGhostRemoveUnnamed': '把 {account} 移出本池。这个账号从未记录过名字，显示的是它 id 的开头几位。',
  'row.poolSelectAria': '把 {accountName} 加入本区域的账号池',
  'row.poolMember': '已在池中',
  'row.poolCurrentBadge': '当前使用',
  'row.poolCurrentHeader': '当前使用：{account}',
  'row.poolNotMember': '未入池',
  'row.poolUnsavedMembers': '勾选已改动 —— 保存后生效',
  // 手动优先级排序：排序徽标与 ↑/↓ 移动按钮。徽标不可点（只描述当前顺序），箭头负责调整。
  'row.poolRankLabel': '第 {rank} 位',
  'row.poolRankManualTitle': '你在本池中手动把该账号排在第 {rank} 位。',
  'row.poolRankAuto': '自动排序',
  'row.poolRankAutoTitle': '还没有手动排序：池会先花临期积分，再按余额多寡选号。用 ↑/↓ 自己指定顺序。',
  'row.poolMoveUpTitle': '在本池顺序中上移该账号',
  'row.poolMoveDownTitle': '在本池顺序中下移该账号',
  'row.poolMoveUpAria': '在本池顺序中上移 {accountName}',
  'row.poolMoveDownAria': '在本池顺序中下移 {accountName}',
  // 行级操作：测试单个账号 / 删除单个账号。
  'row.poolRowTest': '测试',
  'row.poolRowRemove': '删除',
  'row.poolRowRemoveHint': '把这个账号从列表中移除。桌面 App 不会被退出登录——它保留自己的登录状态。移除只是暂时隐藏，点「重新检测账号」即可找回。',
  'row.poolRowRemoveAria': '删除 {accountName} 的已存凭据',
  'row.poolRowRemoved': '{accountName}：已从列表中隐藏。点「重新检测账号」会重新加入，桌面 App 的登录不受影响。',
  'row.poolRowRemoving': '正在删除账号…',
  'row.poolRowRemoveDesktopOnly': '{accountName}：已从列表中隐藏——这个账号来自桌面 App 自己的登录，该登录未被改动。点「重新检测账号」会重新加入。',
  'row.showCreditsCn': '在输入框工具栏显示积分读数',
  'row.showCreditsGlobal': '在输入框工具栏显示积分读数',
  'row.showCreditsCnHint': '在对话输入框工具栏显示国内版（WB CN）剩余积分，仅当本会话使用 WB CN 模型时出现。点击可看各账号余额并手动刷新（每 5 分钟也会自动刷新）。',
  // 积分显示在哪个位置（issue #62）。输入框工具栏是**共享**的 list 插槽，
  // 别的插件也注册在那里时本插件读数会消失（报告者遇到的就是这个），
  // 所以位置做成可选项。
  'row.creditPositionLabel': '显示位置',
  'row.creditPositionComposer': '输入框工具栏',
  'row.creditPositionStats': '输入框下方',
  'row.creditPositionAria': '{region} 的积分显示位置',
  // 位置选择器的从属说明，**始终可见**：它解释的是「为什么这里还有个下拉框」，
  // 而不是复述选项名称 —— 复述类说明只该在该行灰掉时出现，见
  // creditPositionDisabledHint。两段文字都刻意短：它们是主开关标题下的
  // 第二、三级文字，再长就会把主开关本身挤成次要信息。
  'row.creditPositionHintInline': '读数显示在哪里。「输入框工具栏」是默认位置，与模型选择同一行。',
  'row.creditPositionDisabledHint': '主开关关闭时不可调整：先勾选上方「在输入框工具栏显示积分读数」。',
  // 这一行讲「读数是什么」；下面 creditPositionHintInline 讲「选位置是什么意思」。
  // 一个控件一句说明。
  'row.showCreditsHintInline': '当前为本 tab 服务的那个账号的余额。点一下能看各账号明细，另外每 5 分钟自动刷新一次。',
  // 额度失败的补充（issue #63），渲染成**对话里的行内括号**——一句短话，没有对话框、
  // 没有按钮。插件**不再**占用宿主的 `shell.quota-notice` 链座位，所以这句不再由本插件
  // 拼在宿主句子后面（那次占用才是把无样式 span 留在 overlay 左上角的原因）；宿主自己画
  // 它那句，本插件只在这句旁边补一句。措辞对 QUOTA 覆盖的**两种**情况都成立 —— 模型自己
  // 的每日额度（与积分无关）与真的积分耗尽 —— 因为上游说的是中文散文，插件不允许解析它
  // 来下政策判断。
  'quotaNotice.fallbackHead': '当前请求的额度已用尽',
  'quotaNotice.supplement': '（部分模型另有每日额度，与积分无关）',
  'row.creditPositionHint': '积分显示在哪里。「输入框工具栏」是默认位置（与模型选择同一行）。如果装了别的插件后读数不显示，改成「输入框下方」—— 那是「轮次 / 步数 / token」统计所在的那一行。',
  'row.showCreditsGlobalHint': '在对话输入框工具栏显示国际版（WB AI）剩余积分，仅当本会话使用 WB AI 模型时出现。点击可看各账号余额并手动刷新（每 5 分钟也会自动刷新）。',
  'composer.pointsCn': 'WB CN',
  'composer.pointsGlobal': 'WB AI',
  'composer.panelTitleCn': 'WB CN 积分',
  'composer.panelTitleGlobal': 'WB AI 积分',
  'composer.account': '账号',
  'composer.credits': '积分',
  'composer.switchTo': '切换到 {account}',
  'composer.current': '当前选用',
  'composer.noAccounts': '该区域暂无账号',
  'composer.signedOut': '未登录',
  'composer.testAll': '一键测试',
  'composer.testing': '正在测试…',
  'composer.testAllHint': '逐个测试本区所有账号（一次一个，避免触发上游限流）',
  'composer.testFailed': '测试失败',
  'composer.refreshFailed': '积分刷新失败',
  'composer.lastRefresh': '最近刷新',
  'composer.panelTitle': 'WorkBuddy 积分',
  'sidebar.creditsCn': 'WB CN 积分',
  'sidebar.creditsGlobal': 'WB AI 积分',
  'sidebar.refresh': '刷新',
  'sidebar.refreshing': '刷新中…',
  'sidebar.lastRefresh': '最近刷新 {time}',
  'sidebar.refreshFailed': '刷新失败',
  'sidebar.signedOut': '未登录',
  'panel.title': 'WorkBuddy',
  'panel.intro': '两个 WorkBuddy 供应商的账号、模型与积分。此页面始终可访问——不依赖当前会话正在使用哪个模型。',
  'panel.sidebar': 'WorkBuddy',
}
