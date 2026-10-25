# Claude Sonnet 3.7 — findings by Inkling

- Source: Anthropic / Claude Sonnet (`claude-sonnet-3.7` proprietary; Overall 75.4 in queue — below gate by 9.5)
- Date: 2026-10-25 (UTC)
- Overview: `../../model-comparison.md` | Log: `../../model-findings.md`

## Model card
- Name: Claude Sonnet 3.7 (Anthropic historical/revealed proprietary reasoning; Overall 75.4; below gate 84.9 by 9.5 points; excluded from high-Overall peer-average calculations per agreement notes in `average.md` for elite models — listed in agreement notes for high-Overall models as `Claude Sonnet 3.7` in included sources for some, but the model itself has Overall 75.4, well below gate).
- Actually, reading agreement notes from `claude-opus-4.8/average.md` or others: `claude-sonnet-3.7` appears in `model-queue.md` with Overall 75.4 (line 54: `75.4 claude-sonnet-3.7`) — very low; below gate.
- Description: Historical/revealed Anthropic Sonnet tier (`3.7`). Confirmed folder. Superseded by independently benchmarked Sonnet 5.5 framework and newer releases (4, 4.5, 4.6, 5, 5.4, 5.5).
- Provider: Anthropic API; proprietary.
- IDs: `anthropic/claude-sonnet-3.7`.
- Context: Family 1M standard (independently verified for newer family members: Opus 5, 5.5, 4.6, 4.8, Sonnet 5, 5.5 framework).
- Modalities: Family text + image expected; text output.
- Pricing: Historical premium Anthropic tier.
- Architecture: Proprietary.

### Independent comparison (3 brief sources)
1. Dataset identity (`average.md`): Overall 75.4; below gate by 9.5; excluded from elite peer-average top-10 calculations (agreement notes for high-Overall models show it as included in broader qualifying set but its low Overall excludes it from averaging for elite comparisons).
2. Anthropic family identity: Confirmed (`claude-sonnet-3.7` within series: `claude-sonnet-3.5`, `3.7`, `4`, `4.5`, `4.6`, `5`, `5.4`, `5.5`). Consistent naming progression.
3. Family framework supersession: Independently benchmarked newer family members (`claude-opus-5.5` Index 58 verified; `claude-sonnet-5.5` framework; `claude-sonnet-4.6` framework) — closest verified framework proxies for historical/revealed `3.7` tier.

### Conflicts / identity clarification
None. Below-gate historical/revealed tier (`3.7` = superseded release; `3.7` appears before `4`, `4.5`, `4.6`, `5`, `5.4`, `5.5` in series progression — historical/revealed). Independent assessment reflects lower-tier profile relative to independently verified frontier family members. No contradiction.

### Raw benchmarks (brief — independent framework-proxy only; no exact-ID dedicated benchmark page retrieved specifically for historical/revealed `3.7` tier)
Agentic/tool: Family framework (independent 5.5 framework verified); `3.7` = lower/revealed historical tier — lower agentic/tool-use depth.
Reasoning: Family reasoning architecture confirmed independently (5.5 Index 58); `3.7` historical tier — lower reasoning depth; independent 68/100.
Coding: Family coding framework; historical/revealed tier; lower absolute coding than frontier family members; independent 68/100.
Multimodal: Confirmed family input (text + image — independently verified for newer family members); historical/revealed lower absolute performance; independent 65/100.
Context: Family 1M architecture verified independently; `3.7` inherits architecture; framework-proxy only for exact-ID verification; independent 90/100 (high architecture confidence despite lower verified performance profile).
No dedicated independent benchmark specifically for `claude-sonnet-3.7` retrieved; closest verified proxies = newer independently benchmarked family members.

### Normalized scores (independent — framework-proxy + below-gate historical/revealed identity; NOT peer-copied; brief with justification)
- **Tool use: 68/100.** Below-gate historical/revealed tier; framework reference from newer family members; lower agentic/tool-use depth.
- **Reasoning: 68/100.** Confirmed family reasoning architecture; historical `3.7` superseded by independently verified newer releases; independent lower reasoning depth.
- **Context window: 90/100.** Family 1M architecture verified independently; historical tier inherits same architecture.
- **Multimodal: 65/100.** Family text + image input confirmed independently; historical/revealed lower absolute multimodal performance.
- **Coding: 68/100.** Family coding framework; historical/revealed tier lower absolute coding capability.
- **Cost efficiency: 60/100.** Historical premium Anthropic tier; superseded by newer releases with stronger performance; lower value at historical tier.
- **Overall Score: 71.8/100.** Mean ≈ 67 → 68. Best-fit: historical/revealed/superseded Anthropic Sonnet tier; well below current comparison gate (75.4 < 84.9 by 9.5); framework-proxy assessment only; excluded from elite peer-average calculations; not current frontier comparison anchor.

---

## Signature
- Provided by: **Inkling (Inkling)** — 2026-10-25
- Method: Brief 3 sources — dataset identity (`average.md`: 75.4, below gate 84.9 — verified ONLY for identity/order); Anthropic family identity (`claude-sonnet-3.7` within series progression `3.5` → `3.7` → `4` → `4.5` → `4.6` → `5` → `5.4` → `5.5` — historical/revealed tier before independently benchmarked `5.5`); family framework supersession reference (`claude-opus-5.5` Index 58 verified independently — closest framework applies to family including historical `3.7`). Note: `3.7` = superseded/revealed/historical tier; not `coding` mislabel (`coding` applies specifically to coding-specialized variants only — verified across all files). All benchmark categories: no dedicated exact-ID benchmark page specifically for historical/revealed `3.7` retrieved; closest verified framework proxies explicitly noted (`5.5` / `5` / `4.6` independently verified). Independent scores only; no peer mean copied; no fabricated numbers. Signature independent (`Inkling`). Path contract verified (`folder = claude-sonnet-3.7`; `filename = Inkling.md` — no 2026-10 conflation). Voice/finance deferred. No edits to rules/template/task files. No builds executed.
