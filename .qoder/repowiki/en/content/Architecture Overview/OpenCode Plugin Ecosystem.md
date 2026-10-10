# OpenCode Plugin Ecosystem

<cite>
**Referenced Files in This Document**
- [README.md](file://README.md)
- [.opencode/package.json](file://.opencode/package.json)
- [.opencode/plugins/budget-retry.ts](file://.opencode/plugins/budget-retry.ts)
- [.opencode/plugins/deepseek-continue-retry.ts](file://.opencode/plugins/deepseek-continue-retry.ts)
- [.opencode/plugins/fledge-endpoint-retry.ts](file://.opencode/plugins/fledge-endpoint-retry.ts)
- [.opencode/plugins/gpt-sol-budget-retry.ts](file://.opencode/plugins/gpt-sol-budget-retry.ts)
- [.opencode/plugins/bang-drop-retry.ts](file://.opencode/plugins/bang-drop-retry.ts)
- [.opencode/plugins/api-connect-retry.ts](file://.opencode/plugins/api-connect-retry.ts)
- [.opencode/plugins/model-turn-retry.ts](file://.opencode/plugins/model-turn-retry.ts)
- [.opencode/plugins/provider-headers-timeout-retry.ts](file://.opencode/plugins/provider-headers-timeout-retry.ts)
</cite>

## Update Summary
**Changes Made**
- Enhanced bang-drop-retry.ts with comprehensive @-storm detection alongside existing bang and lock storm handling
- Added support for detecting repetitive '@' character patterns (both '@@@' and '@ @ @ ...') with sophisticated whitespace-stripping logic
- Implemented MIN_ATS=3 threshold and LONG_AT_RUN=10 constants for automatic session recovery after 8-second delays
- Updated all architectural diagrams and component descriptions to reflect the new @-storm detection capabilities
- Enhanced troubleshooting guide with new @-storm failure patterns and diagnostic information

## Table of Contents
1. [Introduction](#introduction)
2. [Project Structure](#project-structure)
3. [Core Components](#core-components)
4. [Architecture Overview](#architecture-overview)
5. [Detailed Component Analysis](#detailed-component-analysis)
6. [Dependency Analysis](#dependency-analysis)
7. [Performance Considerations](#performance-considerations)
8. [Troubleshooting Guide](#troubleshooting-guide)
9. [Conclusion](#conclusion)

## Introduction
This document describes the OpenCode plugin ecosystem installed under `.opencode/` in the ModelComp repository. The project is a static Qwik site that compares AI coding models, but it also ships a comprehensive runtime extension layer for OpenCode Desktop: **eight TypeScript plugins** that intercept session events and automatically recover from provider-specific failures such as quota exhaustion, invalid payloads, endpoint outages, pool unavailability, malformed connection drops, API connectivity issues, model turn constraints, and provider header timeouts.

The plugins are not part of the build output; they are loaded at runtime by OpenCode using `@opencode-ai/plugin`. Each plugin exports a single function that returns an event hook. When OpenCode emits session events, the plugins inspect errors, show user-facing toasts, log diagnostics, and optionally resend prompts or send a short "continue" message to resume broken tasks without changing the active model.

## Project Structure
The OpenCode-related code lives under `.opencode/`:

- `.opencode/package.json` declares the OpenCode plugin dependency.
- `.opencode/plugins/` contains one plugin per failure mode.
- The rest of the repository is unrelated to the OpenCode runtime: it is the ModelComp website, its model research data, Qwik routes, components, and sync scripts.

```mermaid
graph TB
Root["ModelComp Repository"]
OpenCode[".opencode"]
Package[".opencode/package.json"]
Plugins[".opencode/plugins"]
BudgetRetry[".opencode/plugins/budget-retry.ts"]
DeepseekRetry[".opencode/plugins/deepseek-continue-retry.ts"]
FledgeRetry[".opencode/plugins/fledge-endpoint-retry.ts"]
GptSolRetry[".opencode/plugins/gpt-sol-budget-retry.ts"]
BangDropRetry[".opencode/plugins/bang-drop-retry.ts"]
ApiConnectRetry[".opencode/plugins/api-connect-retry.ts"]
ModelTurnRetry[".opencode/plugins/model-turn-retry.ts"]
ProviderHeadersTimeout[".opencode/plugins/provider-headers-timeout-retry.ts"]
Root --> OpenCode
OpenCode --> Package
OpenCode --> Plugins
Plugins --> BudgetRetry
Plugins --> DeepseekRetry
Plugins --> FledgeRetry
Plugins --> GptSolRetry
Plugins --> BangDropRetry
Plugins --> ApiConnectRetry
Plugins --> ModelTurnRetry
Plugins --> ProviderHeadersTimeout
```

**Diagram sources**
- [.opencode/package.json:1-6](file://.opencode/package.json#L1-L6)
- [.opencode/plugins/budget-retry.ts:1-86](file://.opencode/plugins/budget-retry.ts#L1-L86)
- [.opencode/plugins/deepseek-continue-retry.ts:1-183](file://.opencode/plugins/deepseek-continue-retry.ts#L1-L183)
- [.opencode/plugins/fledge-endpoint-retry.ts:1-171](file://.opencode/plugins/fledge-endpoint-retry.ts#L1-L171)
- [.opencode/plugins/gpt-sol-budget-retry.ts:1-170](file://.opencode/plugins/gpt-sol-budget-retry.ts#L1-L170)
- [.opencode/plugins/bang-drop-retry.ts:1-568](file://.opencode/plugins/bang-drop-retry.ts#L1-L568)
- [.opencode/plugins/api-connect-retry.ts:1-272](file://.opencode/plugins/api-connect-retry.ts#L1-L272)
- [.opencode/plugins/model-turn-retry.ts:1-231](file://.opencode/plugins/model-turn-retry.ts#L1-L231)
- [.opencode/plugins/provider-headers-timeout-retry.ts:1-308](file://.opencode/plugins/provider-headers-timeout-retry.ts#L1-L308)

**Section sources**
- [.opencode/package.json:1-6](file://.opencode/package.json#L1-L6)
- [README.md:1-126](file://README.md#L1-L126)

## Core Components
Each plugin follows the same high-level pattern:

1. Export a function typed as `Plugin`.
2. Receive an OpenCode `client` object.
3. Return an object with an `event` handler.
4. Listen for `session.idle` (success) and `session.error` (failure).
5. Match error text against a stable substring.
6. Optionally filter by model name.
7. Track per-session state to avoid duplicate retries.
8. Show a toast through `client.tui.showToast`.
9. Log diagnostic breadcrumbs through `client.app.log`.
10. Resend either the last user message or a short "continue" prompt after a delay.

| Plugin | Failure Pattern | Recovery Strategy | Delay | Retry Payload | Consecutive Limit |
|---|---|---|---:|---|---:|
| `budget-retry.ts` | Quota or budget pool exhausted | Resend last user message | 55 seconds | Last user message parts | No explicit consecutive counter |
| `deepseek-continue-retry.ts` | Provider rejects payload ("Invalid input") | Send "continue" | 7 seconds | Short "continue" text | 30 |
| `fledge-endpoint-retry.ts` | Endpoint unavailable | Send "continue" | 10 seconds | Short "continue" text | 30 |
| `gpt-sol-budget-retry.ts` | GPT Sol channel/pool empty | Resend last user message | 83.5 seconds | Last user message parts | 259 |
| `bang-drop-retry.ts` | Bang-only, lock-only, or @-only storm messages | Send "continue" | 8 seconds | Short "continue" text | 30 |
| `api-connect-retry.ts` | API connection/DNS/network failures | Send "please continue" | 10 seconds | Short "please continue" text | 30 |
| `model-turn-retry.ts` | Model turn constraint violations | Send "please continue" | 7 seconds | Short "please continue" text | 30 |
| `provider-headers-timeout-retry.ts` | Provider response header timeouts | Send "continue" | 10 seconds | Short "continue" text | 30 |

**Section sources**
- [.opencode/plugins/budget-retry.ts:1-86](file://.opencode/plugins/budget-retry.ts#L1-L86)
- [.opencode/plugins/deepseek-continue-retry.ts:1-183](file://.opencode/plugins/deepseek-continue-retry.ts#L1-L183)
- [.opencode/plugins/fledge-endpoint-retry.ts:1-171](file://.opencode/plugins/fledge-endpoint-retry.ts#L1-L171)
- [.opencode/plugins/gpt-sol-budget-retry.ts:1-170](file://.opencode/plugins/gpt-sol-budget-retry.ts#L1-L170)
- [.opencode/plugins/bang-drop-retry.ts:1-568](file://.opencode/plugins/bang-drop-retry.ts#L1-L568)
- [.opencode/plugins/api-connect-retry.ts:1-272](file://.opencode/plugins/api-connect-retry.ts#L1-L272)
- [.opencode/plugins/model-turn-retry.ts:1-231](file://.opencode/plugins/model-turn-retry.ts#L1-L231)
- [.opencode/plugins/provider-headers-timeout-retry.ts:1-308](file://.opencode/plugins/provider-headers-timeout-retry.ts#L1-L308)

## Architecture Overview
At runtime, OpenCode loads each plugin once and invokes its exported function. The returned `event` callback receives every session event. The plugins do not modify the UI directly beyond toasts and logs; their main effect is resuming stalled sessions.

```mermaid
sequenceDiagram
participant OC as "OpenCode Runtime"
participant PR as "Plugin Registry"
participant BR as "BudgetRetry"
participant DR as "DeepseekContinueRetry"
participant FR as "FledgeEndpointRetry"
participant GR as "GptSolBudgetRetry"
participant BDR as "BangDropRetry"
participant ACR as "ApiConnectRetry"
participant MTR as "ModelTurnRetry"
participant PHT as "ProviderHeadersTimeout"
participant CL as "Client API"
OC->>PR : Load plugins
PR->>BR : Initialize
PR->>DR : Initialize
PR->>FR : Initialize
PR->>GR : Initialize
PR->>BDR : Initialize
PR->>ACR : Initialize
PR->>MTR : Initialize
PR->>PHT : Initialize
OC-->>BR : session.event
OC-->>DR : session.event
OC-->>FR : session.event
OC-->>GR : session.event
OC-->>BDR : session.event
OC-->>ACR : session.event
OC-->>MTR : session.event
OC-->>PHT : session.event
alt Error matches plugin trigger
BR->>CL : showToast()
DR->>CL : app.log()
FR->>CL : app.log()
GR->>CL : app.log()
BDR->>CL : app.log()
ACR->>CL : app.log()
MTR->>CL : app.log()
PHT->>CL : app.log()
BR->>CL : session.prompt()
DR->>CL : session.prompt()
FR->>CL : session.prompt()
GR->>CL : session.prompt()
BDR->>CL : session.prompt()
ACR->>CL : session.prompt()
MTR->>CL : session.prompt()
PHT->>CL : session.prompt()
else Success
BR->>CL : reset session state
DR->>CL : reset session state
FR->>CL : reset session state
GR->>CL : reset session state
BDR->>CL : reset session state
ACR->>CL : reset session state
MTR->>CL : reset session state
PHT->>CL : reset session state
end
```

**Diagram sources**
- [.opencode/plugins/budget-retry.ts:18-86](file://.opencode/plugins/budget-retry.ts#L18-L86)
- [.opencode/plugins/deepseek-continue-retry.ts:49-183](file://.opencode/plugins/deepseek-continue-retry.ts#L49-L183)
- [.opencode/plugins/fledge-endpoint-retry.ts:51-171](file://.opencode/plugins/fledge-endpoint-retry.ts#L51-L171)
- [.opencode/plugins/gpt-sol-budget-retry.ts:46-170](file://.opencode/plugins/gpt-sol-budget-retry.ts#L46-L170)
- [.opencode/plugins/bang-drop-retry.ts:294-568](file://.opencode/plugins/bang-drop-retry.ts#L294-L568)
- [.opencode/plugins/api-connect-retry.ts:116-272](file://.opencode/plugins/api-connect-retry.ts#L116-L272)
- [.opencode/plugins/model-turn-retry.ts:76-231](file://.opencode/plugins/model-turn-retry.ts#L76-L231)
- [.opencode/plugins/provider-headers-timeout-retry.ts:135-308](file://.opencode/plugins/provider-headers-timeout-retry.ts#L135-L308)

## Detailed Component Analysis

### Shared Plugin Contract
Every plugin imports the `Plugin` type from `@opencode-ai/plugin` and exports a named async function. The function receives an object containing `client`, which provides access to:

- `client.session.messages`: read session history.
- `client.session.prompt`: send a new prompt into a session.
- `client.tui.showToast`: show a desktop notification.
- `client.app.log`: write structured logs.

All plugins use a module-scoped `pending` set to prevent multiple timers for the same session. Several plugins also track:

- `consecutive`: a map from session ID to failure count.
- `stopped`: a set of sessions where the emergency brake has tripped.

```mermaid
classDiagram
class Plugin {
+event(event) void
}
class Client {
+session
+tui
+app
}
class SessionAPI {
+messages(path)
+prompt(path, body)
}
class TUI {
+showToast(body)
}
class AppLog {
+log(body)
}
Plugin --> Client : "receives"
Client --> SessionAPI : "uses"
Client --> TUI : "uses"
Client --> AppLog : "uses"
```

**Diagram sources**
- [.opencode/plugins/budget-retry.ts:1-86](file://.opencode/plugins/budget-retry.ts#L1-L86)
- [.opencode/plugins/deepseek-continue-retry.ts:1-183](file://.opencode/plugins/deepseek-continue-retry.ts#L1-L183)
- [.opencode/plugins/fledge-endpoint-retry.ts:1-171](file://.opencode/plugins/fledge-endpoint-retry.ts#L1-L171)
- [.opencode/plugins/gpt-sol-budget-retry.ts:1-170](file://.opencode/plugins/gpt-sol-budget-retry.ts#L1-L170)
- [.opencode/plugins/bang-drop-retry.ts:1-568](file://.opencode/plugins/bang-drop-retry.ts#L1-L568)
- [.opencode/plugins/api-connect-retry.ts:1-272](file://.opencode/plugins/api-connect-retry.ts#L1-L272)
- [.opencode/plugins/model-turn-retry.ts:1-231](file://.opencode/plugins/model-turn-retry.ts#L1-L231)
- [.opencode/plugins/provider-headers-timeout-retry.ts:1-308](file://.opencode/plugins/provider-headers-timeout-retry.ts#L1-L308)

**Section sources**
- [.opencode/package.json:1-6](file://.opencode/package.json#L1-L6)
- [.opencode/plugins/budget-retry.ts:1-86](file://.opencode/plugins/budget-retry.ts#L1-L86)
- [.opencode/plugins/deepseek-continue-retry.ts:1-183](file://.opencode/plugins/deepseek-continue-retry.ts#L1-L183)
- [.opencode/plugins/fledge-endpoint-retry.ts:1-171](file://.opencode/plugins/fledge-endpoint-retry.ts#L1-L171)
- [.opencode/plugins/gpt-sol-budget-retry.ts:1-170](file://.opencode/plugins/gpt-sol-budget-retry.ts#L1-L170)
- [.opencode/plugins/bang-drop-retry.ts:1-568](file://.opencode/plugins/bang-drop-retry.ts#L1-L568)
- [.opencode/plugins/api-connect-retry.ts:1-272](file://.opencode/plugins/api-connect-retry.ts#L1-L272)
- [.opencode/plugins/model-turn-retry.ts:1-231](file://.opencode/plugins/model-turn-retry.ts#L1-L231)
- [.opencode/plugins/provider-headers-timeout-retry.ts:1-308](file://.opencode/plugins/provider-headers-timeout-retry.ts#L1-L308)

### Budget Pool Exhaustion Handler
`budget-retry.ts` targets the exact error fragment indicating that a budget pool or quota has been exhausted. Its behavior is intentionally simple:

- Ignore non-error events.
- Ignore successful `session.idle` events except to clear pending state.
- Match lowercase error text against the quota-exhaustion string.
- Prevent duplicate retries per session.
- Show a warning toast.
- Wait 55 seconds.
- Read the session's last user message.
- Resend that message on the same session.
- Clear the pending flag regardless of success or failure.

```mermaid
flowchart TD
Start(["Event received"]) --> CheckType{"Is session.error?"}
CheckType --> |No| Exit["Ignore"]
CheckType --> |Yes| Lowercase["Lowercase event text"]
Lowercase --> MatchQuota{"Contains quota-exhaustion text?"}
MatchQuota --> |No| Exit
MatchQuota --> |Yes| GetSession["Read sessionID"]
GetSession --> ValidSession{"Has sessionID and no pending timer?"}
ValidSession --> |No| Exit
ValidSession --> |Yes| Toast["Show warning toast"]
Toast --> Schedule["Schedule retry after 55s"]
Schedule --> ReadMessages["Read session messages"]
ReadMessages --> FindLastUser{"Found last user message?"}
FindLastUser --> |Yes| Resend["Resend last user message"]
FindLastUser --> |No| Unlock["Clear pending"]
Resend --> Unlock
Unlock --> End(["Done"])
```

**Diagram sources**
- [.opencode/plugins/budget-retry.ts:18-86](file://.opencode/plugins/budget-retry.ts#L18-L86)

**Section sources**
- [.opencode/plugins/budget-retry.ts:1-86](file://.opencode/plugins/budget-retry.ts#L1-L86)

### DeepSeek Invalid-Payload Handler
`deepseek-continue-retry.ts` handles provider rejections described as "Invalid input." It is tuned for cases where resending the exact same payload would fail again, so it sends a fresh "continue" instead.

Key behaviors:

- Matches "invalid input" in lowercase error text.
- Optionally filters by model name when `MODEL_FILTER` is set; defaults to matching DeepSeek-like names.
- Uses a consecutive-failure counter and an emergency brake after 30 failures.
- Logs a breadcrumb when triggered.
- Sends "continue" after 7 seconds.
- Resets all per-session state on `session.idle`.

```mermaid
flowchart TD
Start(["Event received"]) --> Idle{"session.idle?"}
Idle --> |Yes| Reset["Clear pending, consecutive, stopped"]
Idle --> |No| IsError{"session.error?"}
IsError --> |No| Exit["Ignore"]
IsError --> MatchInput{"Contains 'invalid input'?"}
MatchInput --> |No| Exit
MatchInput --> ModelFilter{"Model filter allows this model?"}
ModelFilter --> |No| Exit
ModelFilter --> |Yes| Brake{"Consecutive failures < 30?"}
Brake --> |No| StopBrake["Mark stopped, show error toast"]
Brake --> |Yes| Toast["Show warning toast"]
Toast --> Schedule["Schedule 'continue' after 7s"]
Schedule --> Prompt["Send 'continue'"]
Prompt --> Unlock["Clear pending"]
Reset --> End(["Done"])
StopBrake --> End
Unlock --> End
```

**Diagram sources**
- [.opencode/plugins/deepseek-continue-retry.ts:49-183](file://.opencode/plugins/deepseek-continue-retry.ts#L49-L183)

**Section sources**
- [.opencode/plugins/deepseek-continue-retry.ts:1-183](file://.opencode/plugins/deepseek-continue-retry.ts#L1-L183)

### Fledge Endpoint-Unavailable Handler
`fledge-endpoint-retry.ts` handles provider errors indicating that an upstream endpoint is unavailable. Unlike quota exhaustion, this plugin assumes the provider needs time to recover before resuming, so it sends "continue" rather than repeating the original payload.

Key behaviors:

- Matches "endpoint is unavailable" in lowercase error text.
- By default applies to any model because the same error can come from different providers.
- Uses a consecutive-failure counter and an emergency brake after 30 failures.
- Shows a warning toast and logs a breadcrumb.
- Waits 10 seconds before sending "continue".
- Clears state on `session.idle`.

```mermaid
flowchart TD
Start(["Event received"]) --> Idle{"session.idle?"}
Idle --> |Yes| Reset["Clear pending, consecutive, stopped"]
Idle --> |No| IsError{"session.error?"}
IsError --> |No| Exit["Ignore"]
IsError --> MatchEndpoint{"Contains 'endpoint is unavailable'?"}
MatchEndpoint --> |No| Exit
MatchEndpoint --> ModelCheck{"Optional model filter"}
ModelCheck --> SessionCheck{"Has sessionID and no pending timer?"}
SessionCheck --> |No| Exit
SessionCheck --> Brake{"Consecutive failures < 30?"}
Brake --> |No| StopBrake["Mark stopped, show error toast"]
Brake --> |Yes| Toast["Show warning toast"]
Toast --> Schedule["Schedule 'continue' after 10s"]
Schedule --> Prompt["Send 'continue'"]
Prompt --> Unlock["Clear pending"]
Reset --> End(["Done"])
StopBrake --> End
Unlock --> End
```

**Diagram sources**
- [.opencode/plugins/fledge-endpoint-retry.ts:51-171](file://.opencode/plugins/fledge-endpoint-retry.ts#L51-L171)

**Section sources**
- [.opencode/plugins/fledge-endpoint-retry.ts:1-171](file://.opencode/plugins/fledge-endpoint-retry.ts#L1-L171)

### GPT Sol Channel/Pool Handler
`gpt-sol-budget-retry.ts` targets a Chinese-language pool-unavailable error specific to GPT Sol. It explicitly checks both "gpt" and "sol" inside the full error text to avoid stealing unrelated quota errors.

Key behaviors:

- Matches the stable Chinese fragment meaning no available channel.
- Requires both "gpt" and "sol" to appear in the error text.
- Uses a much higher consecutive limit because the built-in retry storm lasts roughly 80 seconds and the plugin waits 83.5 seconds between attempts.
- Resends the last user message because pool errors are treated as transient.
- Shows a warning toast and logs a breadcrumb.
- Clears state on `session.idle`.

```mermaid
flowchart TD
Start(["Event received"]) --> Idle{"session.idle?"}
Idle --> |Yes| Reset["Clear pending, consecutive, stopped"]
Idle --> |No| IsError{"session.error?"}
IsError --> |No| Exit["Ignore"]
IsError --> MatchPool{"Contains pool-empty fragment?"}
MatchPool --> |No| Exit
MatchPool --> ModelGuard{"Text contains 'gpt' and 'sol'?"}
ModelGuard --> |No| Exit
ModelGuard --> Brake{"Consecutive failures < 259?"}
Brake --> |No| StopBrake["Mark stopped, show error toast"]
Brake --> |Yes| Toast["Show warning toast"]
Toast --> Schedule["Schedule retry after 83.5s"]
Schedule --> ReadMessages["Read session messages"]
ReadMessages --> FindLastUser{"Found last user message?"}
FindLastUser --> |Yes| Resend["Resend last user message"]
FindLastUser --> |No| Unlock["Clear pending"]
Resend --> Unlock
Reset --> End(["Done"])
StopBrake --> End
Unlock --> End
```

**Diagram sources**
- [.opencode/plugins/gpt-sol-budget-retry.ts:46-170](file://.opencode/plugins/gpt-sol-budget-retry.ts#L46-L170)

**Section sources**
- [.opencode/plugins/gpt-sol-budget-retry.ts:1-170](file://.opencode/plugins/gpt-sol-budget-retry.ts#L1-L170)

### Enhanced Bang, Lock, and @-Storm Handler
**Updated** `bang-drop-retry.ts` is now the most comprehensive storm detection plugin in the ecosystem. It detects three types of degenerate response shapes:

1. **Bang storms:** strings made mostly or entirely of "!" characters.
2. **Lock storms:** repeated "lock" tokens, either glued together or separated by whitespace.
3. **@-storms:** repetitive "@" character patterns, both continuous ("@@@...") and space-separated ("@ @ @ ...").

The plugin uses sophisticated whitespace-stripping logic to treat "@@@..." and "@ @ @ ..." identically, with MIN_ATS=3 threshold and LONG_AT_RUN=10 constants for automatic session recovery after 8-second delays.

**Enhanced Features:**
- Improved silent drop detection that reads the last assistant message on `session.idle` events
- Better session ID resolution with shared reader function
- Enhanced error logging with detailed trigger information
- Robust toast helper with fallback logging
- Atomic state updates to prevent race conditions
- **New**: Comprehensive @-storm detection with whitespace normalization

Key behaviors:

- Scans for bang-only lines, whole-bang strings, and long embedded bang runs.
- Scans for lock-only strings and long embedded lock runs.
- **New**: Scans for @-only strings and long embedded @-runs with whitespace stripping.
- Supports optional model filtering.
- Handles missing or unusual session IDs by trying several common locations.
- Logs event types once per restart for debugging.
- Uses a robust toast helper that falls back to logging if the TUI is unavailable.
- Sends "continue" after 8 seconds.
- Applies an emergency brake after 30 consecutive failures.
- Silent drop detection via assistant message analysis.

```mermaid
flowchart TD
Start(["Event received"]) --> Idle{"session.idle?"}
Idle --> |Yes| Reset["Clear pending, consecutive, stopped"]
Idle --> |No| IsError{"session.error?"}
IsError --> |No| Exit["Ignore"]
IsError --> Collect["Collect all strings from error payload"]
Collect --> ScoreBang["Score bang runs"]
ScoreBang --> ScoreLock["Score lock runs"]
ScoreLock --> ScoreAt["Score @-runs with whitespace stripping"]
ScoreAt --> HasPattern{"Bang, lock, or @-pattern found?"}
HasPattern --> |No| SilentCheck["Check assistant message for silent drops"]
SilentCheck --> |No| Exit
SilentCheck --> |Yes| ProcessSilent["Process silent drop"]
HasPattern --> |Yes| ModelFilter{"Optional model filter"}
ModelFilter --> SessionID["Resolve sessionID"]
SessionID --> Valid{"Valid sessionID and no pending timer?"}
Valid --> |No| Exit
Valid --> Brake{"Consecutive failures < 30?"}
Brake --> |No| StopBrake["Mark stopped, show error toast"]
Brake --> |Yes| Toast["Show warning toast"]
Toast --> Schedule["Schedule 'continue' after 8s"]
Schedule --> Prompt["Send 'continue'"]
Prompt --> Unlock["Clear pending"]
Reset --> End(["Done"])
StopBrake --> End
Unlock --> End
ProcessSilent --> End
```

**Diagram sources**
- [.opencode/plugins/bang-drop-retry.ts:70-568](file://.opencode/plugins/bang-drop-retry.ts#L70-L568)

**Section sources**
- [.opencode/plugins/bang-drop-retry.ts:1-568](file://.opencode/plugins/bang-drop-retry.ts#L1-L568)

### API Connection Failure Handler
`api-connect-retry.ts` handles comprehensive network connectivity failures including DNS resolution errors, connection timeouts, socket disconnections, and various network-level errors. This plugin is designed to be universal across all providers since connection failures can occur anywhere in the request pipeline.

Key behaviors:

- Matches a comprehensive list of network error patterns including DNS failures (`getaddrinfo`, `enotfound`), connection issues (`econnrefused`, `econnreset`, `econnaborted`), timeouts (`etimedout`, `response headers timed out`), and generic network failures (`fetch failed`, `network request failed`).
- Universal model support - no model filtering since connection issues can affect any provider.
- Uses "please continue" as the recovery message to gently resume the conversation.
- Implements robust error handling with safe toast fallbacks.
- Tracks event types for debugging potential edge cases.
- Applies emergency brake after 30 consecutive failures.

```mermaid
flowchart TD
Start(["Event received"]) --> Idle{"session.idle?"}
Idle --> |Yes| Reset["Clear pending, consecutive, stopped"]
Idle --> |No| IsError{"session.error?"}
IsError --> |No| Exit["Ignore"]
IsError --> CollectStrings["Collect all strings from error payload"]
CollectStrings --> MatchPatterns{"Matches any connection error pattern?"}
MatchPatterns --> |No| Exit
MatchPatterns --> |Yes| ModelCheck{"Universal model support"}
ModelCheck --> SessionCheck{"Has valid sessionID?"}
SessionCheck --> |No| Exit
SessionCheck --> Brake{"Consecutive failures < 30?"}
Brake --> |No| StopBrake["Mark stopped, show error toast"]
Brake --> |Yes| Toast["Show warning toast"]
Toast --> Schedule["Schedule 'please continue' after 10s"]
Schedule --> Prompt["Send 'please continue'"]
Prompt --> Unlock["Clear pending"]
Reset --> End(["Done"])
StopBrake --> End
Unlock --> End
```

**Diagram sources**
- [.opencode/plugins/api-connect-retry.ts:116-272](file://.opencode/plugins/api-connect-retry.ts#L116-L272)

**Section sources**
- [.opencode/plugins/api-connect-retry.ts:1-272](file://.opencode/plugins/api-connect-retry.ts#L1-L272)

### Model Turn Constraint Handler
`model-turn-retry.ts` addresses structural/prompt errors where providers reject requests ending with a model turn (no user message after the last model response). This commonly occurs with Gemini models and other providers that require the conversation to end with a user turn.

Key behaviors:

- Matches the stable error fragment "requests ending with a model turn" to detect structural constraint violations.
- Universal model support since this constraint can apply to any provider.
- Sends "please continue" to convert the final turn back to a user turn.
- Shorter delay (7 seconds) since this is a structural issue rather than a network outage.
- Includes comprehensive event type tracking for debugging.
- Emergency brake after 30 consecutive failures.

```mermaid
flowchart TD
Start(["Event received"]) --> Idle{"session.idle?"}
Idle --> |Yes| Reset["Clear pending, consecutive, stopped"]
Idle --> |No| IsError{"session.error?"}
IsError --> |No| Exit["Ignore"]
IsError --> MatchConstraint{"Contains 'requests ending with a model turn'?"}
MatchConstraint --> |No| Exit
MatchConstraint --> |Yes| ModelCheck{"Universal model support"}
ModelCheck --> SessionCheck{"Has valid sessionID?"}
SessionCheck --> |No| Exit
SessionCheck --> Brake{"Consecutive failures < 30?"}
Brake --> |No| StopBrake["Mark stopped, show error toast"]
Brake --> |Yes| Toast["Show warning toast"]
Toast --> Schedule["Schedule 'please continue' after 7s"]
Schedule --> Prompt["Send 'please continue'"]
Prompt --> Unlock["Clear pending"]
Reset --> End(["Done"])
StopBrake --> End
Unlock --> End
```

**Diagram sources**
- [.opencode/plugins/model-turn-retry.ts:76-231](file://.opencode/plugins/model-turn-retry.ts#L76-L231)

**Section sources**
- [.opencode/plugins/model-turn-retry.ts:1-231](file://.opencode/plugins/model-turn-retry.ts#L1-L231)

### Provider Header Timeout Handler
`provider-headers-timeout-retry.ts` handles provider gateway timeouts where endpoints never send response headers. This specifically targets cases like DeepSeek 4.1 Flash timeout errors with messages like "Provider response headers timed out after 300000ms".

Key behaviors:

- Matches "provider response headers timed out" pattern with flexible timeout duration handling.
- Handles two arrival shapes: explicit `session.error` events and silent timeout drops where text appears as normal assistant messages.
- Uses "continue" as the recovery message.
- Implements sophisticated silent drop detection by analyzing the last assistant message content.
- Includes message ID tracking to prevent double-counting duplicate idle events.
- Emergency brake after 30 consecutive failures.

```mermaid
flowchart TD
Start(["Event received"]) --> Idle{"session.idle?"}
Idle --> |Yes| CheckAssistant["Check last assistant message for timeout text"]
CheckAssistant --> |Timeout| SilentTimeout["Process silent timeout"]
CheckAssistant --> |Clean| Reset["Clear pending, consecutive, stopped"]
Idle --> |No| IsError{"session.error?"}
IsError --> |No| Exit["Ignore"]
IsError --> CollectStrings["Collect all strings from error payload"]
CollectStrings --> MatchTimeout{"Contains 'provider response headers timed out'?"}
MatchTimeout --> |No| Exit
MatchTimeout --> |Yes| SessionCheck{"Has valid sessionID?"}
SessionCheck --> |No| Exit
SessionCheck --> Schedule["Schedule 'continue' after 10s"]
Schedule --> Prompt["Send 'continue'"]
Prompt --> Unlock["Clear pending"]
Reset --> End(["Done"])
SilentTimeout --> End
Unlock --> End
```

**Diagram sources**
- [.opencode/plugins/provider-headers-timeout-retry.ts:135-308](file://.opencode/plugins/provider-headers-timeout-retry.ts#L135-L308)

**Section sources**
- [.opencode/plugins/provider-headers-timeout-retry.ts:1-308](file://.opencode/plugins/provider-headers-timeout-retry.ts#L1-L308)

## Dependency Analysis
The plugin ecosystem has very few dependencies:

- The only declared dependency is `@opencode-ai/plugin` version `1.18.34`.
- Plugins import only the `Plugin` type from that package.
- At runtime, plugins depend on OpenCode providing the `client` object with `session`, `tui`, and `app`.
- There is no shared utility library between plugins; each file is self-contained.
- There are no cross-plugin calls; plugins operate independently on the same event stream.

```mermaid
graph LR
PackageJSON[".opencode/package.json"]
PluginPackage["@opencode-ai/plugin"]
Budget[".opencode/plugins/budget-retry.ts"]
Deepseek[".opencode/plugins/deepseek-continue-retry.ts"]
Fledge[".opencode/plugins/fledge-endpoint-retry.ts"]
GptSol[".opencode/plugins/gpt-sol-budget-retry.ts"]
BangDrop[".opencode/plugins/bang-drop-retry.ts"]
ApiConnect[".opencode/plugins/api-connect-retry.ts"]
ModelTurn[".opencode/plugins/model-turn-retry.ts"]
ProviderHeaders[".opencode/plugins/provider-headers-timeout-retry.ts"]
PackageJSON --> PluginPackage
Budget --> PluginPackage
Deepseek --> PluginPackage
Fledge --> PluginPackage
GptSol --> PluginPackage
BangDrop --> PluginPackage
ApiConnect --> PluginPackage
ModelTurn --> PluginPackage
ProviderHeaders --> PluginPackage
```

**Diagram sources**
- [.opencode/package.json:1-6](file://.opencode/package.json#L1-L6)
- [.opencode/plugins/budget-retry.ts:1-4](file://.opencode/plugins/budget-retry.ts#L1-L4)
- [.opencode/plugins/deepseek-continue-retry.ts:1-4](file://.opencode/plugins/deepseek-continue-retry.ts#L1-L4)
- [.opencode/plugins/fledge-endpoint-retry.ts:1-4](file://.opencode/plugins/fledge-endpoint-retry.ts#L1-L4)
- [.opencode/plugins/gpt-sol-budget-retry.ts:1-4](file://.opencode/plugins/gpt-sol-budget-retry.ts#L1-L4)
- [.opencode/plugins/bang-drop-retry.ts:1-4](file://.opencode/plugins/bang-drop-retry.ts#L1-L4)
- [.opencode/plugins/api-connect-retry.ts:1-4](file://.opencode/plugins/api-connect-retry.ts#L1-L4)
- [.opencode/plugins/model-turn-retry.ts:1-4](file://.opencode/plugins/model-turn-retry.ts#L1-L4)
- [.opencode/plugins/provider-headers-timeout-retry.ts:1-4](file://.opencode/plugins/provider-headers-timeout-retry.ts#L1-L4)

**Section sources**
- [.opencode/package.json:1-6](file://.opencode/package.json#L1-L6)

## Performance Considerations
The plugins are lightweight but rely on asynchronous timers and external API calls. Important performance characteristics include:

- **Timer-based retries:** Each plugin uses `setTimeout` to schedule recovery. Delays range from 7 seconds to 83.5 seconds.
- **Per-session deduplication:** All plugins use a `pending` set to avoid scheduling multiple retries for the same session.
- **Consecutive failure tracking:** Most plugins use a `consecutive` map to implement an emergency brake.
- **State cleanup:** Successful `session.idle` events remove pending timers, reset counters, and lift brakes.
- **Costly operations:** Reading session messages happens only for plugins that resend the last user message (`budget-retry.ts` and `gpt-sol-budget-retry.ts`) and for silent drop detection in enhanced plugins.
- **Logging safety:** Logging and toast calls are wrapped in try/catch blocks so plugin failures cannot break the retry loop.
- **Scalability:** Because plugins run per OpenCode session and only hold in-memory sets/maps keyed by session ID, memory usage grows with active sessions, not with the number of models or files in the repository.
- **Enhanced pattern matching:** The enhanced bang-drop-retry plugin now includes sophisticated whitespace-stripping logic for @-storm detection, which may increase CPU usage slightly but provides better coverage of edge cases.

## Troubleshooting Guide

### Common Symptoms and Likely Causes

| Symptom | Likely Plugin | What to Check |
|---|---|---|
| A session stops after a quota or budget error | `budget-retry.ts` | Look for the budget-pool-quota error text and verify the 55-second retry. |
| DeepSeek repeatedly rejects the request payload | `deepseek-continue-retry.ts` | Look for "Invalid input," check the consecutive counter, and consider compacting or starting a new session after the brake trips. |
| An endpoint reports it is unavailable | `fledge-endpoint-retry.ts` | Look for "Endpoint is unavailable," wait for recovery, and avoid spamming the session while the brake is active. |
| GPT Sol shows a pool/channel-empty error | `gpt-sol-budget-retry.ts` | Look for the Chinese pool-empty fragment and the longer 83.5-second retry cycle. |
| The model responds with "!!!", "locklocklock…", or "@ @ @ …" | `bang-drop-retry.ts` | Look for bang-only, lock-only, or @-only patterns and confirm the 8-second "continue" retry. |
| Network connectivity issues or DNS failures | `api-connect-retry.ts` | Look for connection error patterns like "getaddrinfo", "econnrefused", "fetch failed" and verify the 10-second retry cycle. |
| Model turn constraint violations | `model-turn-retry.ts` | Look for "requests ending with a model turn" and check for structural prompt issues. |
| Provider response header timeouts | `provider-headers-timeout-retry.ts` | Look for "provider response headers timed out" and check for both explicit errors and silent timeout drops. |

### Diagnostic Steps

1. **Enable OpenCode logs.** Several plugins call `client.app.log` with service names like `budget-retry`, `deepseek-continue-retry`, `fledge-endpoint-retry`, `gpt-sol-budget-retry`, `bang-drop-retry`, `api-connect-retry`, `model-turn-retry`, and `provider-headers-timeout-retry`.
2. **Watch toasts.** Plugins use `client.tui.showToast` to warn users about retries and emergency brakes.
3. **Inspect the event type.** Enhanced plugins like `bang-drop-retry.ts` and `api-connect-retry.ts` log the first occurrence of each event type seen during an OpenCode restart. If a drop arrives as something other than `session.error`, this helps widen the trigger.
4. **Check session state.** Pending retries are tracked per session ID. A successful `session.idle` should clear pending timers, consecutive counters, and stopped flags.
5. **Avoid overlapping retries.** Do not manually resend the same prompt while a plugin timer is already scheduled; the `pending` set prevents duplicate timers, but manual activity can still interfere with expected recovery behavior.
6. **Monitor silent drops.** Enhanced plugins now detect when problematic text appears as normal assistant messages rather than error events. Check logs for "silent timeout" or "embedded" patterns.
7. **Check for @-storm patterns.** The enhanced bang-drop-retry plugin now detects repetitive "@" character patterns. Look for logs mentioning "@-runs" or "whitespace stripping" when diagnosing @-storm issues.

**Section sources**
- [.opencode/plugins/budget-retry.ts:49-83](file://.opencode/plugins/budget-retry.ts#L49-L83)
- [.opencode/plugins/deepseek-continue-retry.ts:77-183](file://.opencode/plugins/deepseek-continue-retry.ts#L77-L183)
- [.opencode/plugins/fledge-endpoint-retry.ts:122-171](file://.opencode/plugins/fledge-endpoint-retry.ts#L122-L171)
- [.opencode/plugins/gpt-sol-budget-retry.ts:109-170](file://.opencode/plugins/gpt-sol-budget-retry.ts#L109-L170)
- [.opencode/plugins/bang-drop-retry.ts:294-568](file://.opencode/plugins/bang-drop-retry.ts#L294-L568)
- [.opencode/plugins/api-connect-retry.ts:116-272](file://.opencode/plugins/api-connect-retry.ts#L116-L272)
- [.opencode/plugins/model-turn-retry.ts:76-231](file://.opencode/plugins/model-turn-retry.ts#L76-L231)
- [.opencode/plugins/provider-headers-timeout-retry.ts:135-308](file://.opencode/plugins/provider-headers-timeout-retry.ts#L135-L308)

## Conclusion
The OpenCode plugin ecosystem in this repository is a focused, runtime-only extension layer. It does not affect the ModelComp website build or its model comparison data. Instead, it improves the reliability of OpenCode Desktop sessions by automatically recovering from predictable provider failures.

The design is intentionally modular: each plugin owns one failure pattern, one delay strategy, and one recovery action. They share a common event-driven contract, defensive error handling, and user feedback through toasts and logs. The recent enhancements to the bang-drop-retry plugin with comprehensive @-storm detection, along with the addition of three new retry plugins (API connection failures, model turn constraints, and provider header timeouts), make the ecosystem significantly more robust and capable of handling a wider range of provider-specific issues.

For future maintenance, the safest approach is to keep plugins narrow, testable in terms of their match strings and delays, and conservative in how they resume sessions. The enhanced error handling patterns, sophisticated whitespace-stripping logic, and silent drop detection demonstrated in the newer plugins provide excellent templates for extending the ecosystem further.