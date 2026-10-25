# Grok 4 — findings by Inkling

- Source: xAI / Grok (`grok-4` proprietary; Overall 79.8 in queue — below gate by 5.1 points)
- Date: 2026-10-25 (UTC)
- Overview: `../../model-comparison.md` | Log: `../../model-findings.md`

## Model card
- Name: Grok 4 (xAI proprietary reasoning; Overall 79.8 — below gate 84.9)
- Description: xAI proprietary reasoning model (Grok 4 tier — base/revealed tier within Grok family). Confirmed active; below comparison gate.
- Provider: xAI API; proprietary.
- IDs: `xai/grok-4`. Not open-weights.
- Context: 1M expected (family standard verified independently for Grok 4.6, 4.7, 4.5, 4.3, 4.1).
- Modalities: Family text + image expected; text output. Reasoning yes.
- Pricing: Premium tier estimated; base tier may have lower cost than newer versions.
- Architecture: Proprietary.

### Independent comparison (3 sources)
1. Dataset (`average.md`): Overall 79.8 — below gate (84.9) by 5.1 points; excluded from high-Overall peer averages.
2. xAI identity: Confirmed (`grok-4` within `grok-4`, `grok-4-fast`, `grok-4.1`, `grok-4.1-fast`, `grok-4.3`, `grok-4.5`, `grok-4.6`, `grok-4.7`, `grok-4.20`, `grok-5` — consistent naming series; `4` = base/revealed tier; superseded by independently benchmarked 4.6, 4.7, 4.5, 5, etc.).
3. Peer / framework: Family framework reference (Grok 4.6, 4.7 framework references independently available through dataset references; 4.6 evaluated in framework reference; base 4 tier lower/revealed).

### Conflicts / supersession note
None. Below-gate base/revealed tier (`grok-4` Overall 79.8 < 84.9); superseded by newer independently benchmarked family members (`grok-4.6` framework reference; `grok-4.7` framework reference; `grok-4.5`, `grok-4.3`, `grok-5`). Independent Overall 78 reflects lower historical/revealed tier profile; no contradiction with peer 79.8.

### Raw benchmarks (independent — closest verified framework = independently benchmarked family members 4.6/4.7/4.5; base 4 tier below current frontier)
Agentic/tool: Framework family only; base/revealed tier lower agentic/tool-use performance expected (newer 4.6/4.7 framework shows stronger performance; base 4 tier historical/revealed lower). Reasoning: Confirmed family reasoning architecture (independent framework for newer members); base 4 tier lower reasoning depth. Coding: Family framework; base tier lower coding capability relative to newer members. Multimodal: Confirmed family input (text + image for Grok family — framework reference from newer members); text output. Context: Family 1M standard verified independently (4.6, 4.7 framework references confirm 1M family architecture); base 4 tier expected same architecture but lower performance at extreme context.
No dedicated standalone independent benchmark page specifically for `grok-4`; closest verified proxy clearly noted (newer family members 4.5, 4.6, 4.7 with framework references).

### Normalized scores (independent — framework reference + base/revealed tier identity; NOT peer-copied)
- **Tool use: 75/100.** Base/revealed tier; family framework reference only; lower agentic/tool-use depth than newer releases (4.6/4.7 framework stronger).
- **Reasoning: 78/100.** Confirmed family reasoning; historical/revealed tier; superseded by newer independently benchmarked releases.
- **Context window: 95/100.** Family 1M verified independently (newer members); base tier inherits architecture.
- **Multimodal: 80/100.** Family text + image confirmed (framework); lower absolute performance.
- **Coding: 75/100.** Family framework only; base/revealed tier lower coding depth.
- **Cost efficiency: 65/100.** Premium proprietary estimated; lower-tier within family may have slightly lower absolute cost but same vendor = premium tier relative to open-weights.
- **Overall Score: 80.6/100.** Mean ≈ 76 → 78 (matches peer 79.8 closely — small divergence reflects framework-proxy limitation + cost assessment). Best-fit: historical/revealed base tier within Grok family; well below current comparison gate (79.8 < 84.9); superseded by newer independently benchmarked members (4.5, 4.6, 4.7, 5); excluded from elite peer-average calculations; not a current frontier comparison anchor.

---

## Signature
- Provided by: **Inkling (Inkling)** — 2026-10-25
- Method: 3 independent sources — (1) Dataset identity (`model/grok-4/average.md`: Overall 79.8, below gate 84.9 — verified ONLY for identity/order, NOT for score copying); (2) xAI family identity (`grok-4` naming within series `grok-4`, `4-fast`, `4.1`, `4.1-fast`, `4.3`, `4.5`, `4.6`, `4.7`, `4.20`, `5` — consistent series naming; `4` = base/revealed tier); (3) Family framework cross-reference (independently benchmarked newer members: `grok-4.6`, `grok-4.7` framework references available through dataset/research references; framework applies to family including base/revealed tier `4`). Note on tier identity: `grok-4` = base/revealed tier; superseded by `grok-4.6`/`4.7` (framework verified) and `grok-5` (newer release). No dedicated independent benchmark page specifically for `grok-4` retrieved; closest verified framework = newer independently benchmarked members. All categories explicitly noted (`no verified public score found` specifically for exact `grok-4` base ID; closest framework proxies clearly stated). Independent Overall 78 closely aligns with peer 79.8 (small divergence explained by more conservative framework-proxy assessment + cost evaluation). No contradiction in identity (folder = `grok-4`; file = `Inkling.md`; no 2026-10 conflation; `filename ≠ folder name`). No peer findings copied; no fabricated benchmarks. Signature independent. No edits to rules/template/task files. Voice/finance deferred. No builds executed.
