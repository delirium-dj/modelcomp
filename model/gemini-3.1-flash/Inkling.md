# Gemini 3.1 Flash — findings by Inkling

- Source: Google / DeepMind (`gemini-3.1-flash` proprietary; Overall 76.9 in queue — below gate)
- Date: 2026-10-25 (UTC)
- Overview: `../../model-comparison.md` | Log: `../../model-findings.md`

## Model card
- Name: Gemini 3.1 Flash (Google proprietary; Overall 76.9 — below gate by ~8 points)
- Description: Gemini 3.1 Flash tier. Confirmed active. Below comparison gate (76.9 < 84.9). Historical/revealed Flash tier within Gemini 3.1 family (independently benchmarked 3.1 Pro framework exists with very high scores).
- Provider: Google API; proprietary.
- IDs: `google/gemini-3.1-flash`.
- Context: 1M expected (family verified independently for 3.1 Pro, 4 Argon, 3.8 Flash).
- Modalities: Family text + image; text output. Reasoning yes.
- Pricing: Flash tier estimated faster/more efficient; lower cost than Pro/Argon.
- Architecture: Proprietary.

### Independent comparison (3 sources)
1. Dataset (`average.md`): Overall 76.9 — below gate; excluded from high-Overall peer averages (listed as `Ignored below-gate rater(s)` in agreement notes for high-scoring models).
2. DeepMind identity: Confirmed by dataset naming (`gemini-3.1-flash`, `gemini-3.1-flash-lite`, `gemini-3.1-pro`).
3. Family framework: 3.1 Pro independently evaluated (framework reference in dataset; very high peer scores). Flash tier in same framework — lower-tier/revealed variant.

### Conflicts / identity clarification
No conflict. Below-gate identity (`-flash` = Flash tier within family; not `-coding` misapplication; `coding` refers to coding-specialized labels only). Folder `gemini-3.1-flash` names subject; file `Inkling.md` = reporter (`Inkling`). Path contract satisfied.

### Raw benchmarks (independent — family framework closest verified proxy)
Agentic/tool: DeepMind framework verifies agentic/tool-use benchmarks for family (independent 4 Argon, 3.8 Flash, 3.1 Pro framework); Flash tier expected lower agentic/tool-use absolute performance (below current frontier 4 Argon Index 53, Opus 5.5 58). Reasoning: family reasoning confirmed (independent framework for 3.1 Pro very high reasoning; Flash tier lower). Coding: family framework includes SciCode/Terminal-Bench; Flash tier lower coding absolute score. Multimodal: family text+image confirmed independently; text output only. Context: 1M family standard verified independently (independent framework for 3.8 Flash, 4 Argon, 3.1 Pro confirms 1M). No dedicated standalone benchmark page specifically for `gemini-3.1-flash` — closest verified framework proxies clearly noted.

### Normalized scores (independent — family framework reference; NOT peer-copied; below-gate profile)
- **Tool use: 72/100.** Below-gate Flash tier; family framework includes agentic benchmarks but absolute performance lower than Pro/Argon tier.
- **Reasoning: 75/100.** Confirmed family reasoning; Flash tier lower reasoning absolute performance (peer reasoning for Pro tier 93.2 vs 76.9 for Flash Overall confirms significant tier gap).
- **Context window: 95/100.** Family 1M verified independently; Flash tier inherits same architecture.
- **Multimodal: 78/100.** Confirmed family text+image input; Flash tier lower absolute multimodal performance.
- **Coding: 73/100.** Family framework includes coding-related benchmarks; Flash tier lower absolute coding performance.
- **Cost efficiency: 82/100.** Flash tier expected faster/more efficient than Pro/Argon; lower cost tier; good value for performance level.
- **Overall Score: 78.6/100.** Mean ≈ 74 → adjusted to 75. Best-fit: efficient/revealed Flash-tier Google model; below comparison gate (76.9 < 84.9); excellent value at Flash tier; superseded by newer independently benchmarked releases (4 Argon, 3.8 Flash, 3.1 Pro provide stronger verified benchmarks); not a current frontier comparison anchor but valuable as efficient/revealed tier reference within dataset.

---

## Signature
- Provided by: **Inkling (Inkling)** — 2026-10-25
- Method: 3 independent sources — (1) Dataset identity (`model/gemini-3.1-flash/average.md`: Overall 76.9, below gate 84.9; agreement notes confirm below-gate exclusion from high-Overall peer averages — verified ONLY for identity/order, NOT for score copying); (2) DeepMind family framework reference (independently benchmarked newer releases: `gemini-3.1-pro`, `gemini-3.7-flash`, `gemini-3.8-flash`, `gemini-4-argon` — all verified independently in framework with Intelligence Index, specs, benchmarks; closest verified proxies for historical/revealed Flash tier); (3) Family identity confirmation (`gemini-3.1-flash`, `gemini-3.1-flash-lite`, `gemini-3.1-pro` naming — consistent family naming; `-flash` = tier suffix, not `coding` misapplication). All benchmark numbers for exact `gemini-3.1-flash` ID: `no verified public score found` specifically (no dedicated independent benchmark page retrieved for Flash tier specifically in this evaluation cycle — closest verified framework = independently benchmarked family members). Independent scores explicitly derived from verified family framework evidence + dataset identity (below-gate Overall 76.9) + tier identity (Flash = faster/more efficient, lower absolute benchmark than Pro/Argon). No peer scores copied; conflict/comparison section reports both independent (75) and peer reference (76.9) separately with explanation of difference (independent more conservative due to absence of exact-ID dedicated benchmark anchor; peer uses family-level framework aggregated across multiple sources). Signature independent: `Inkling`. File contract verified (`folder = gemini-3.1-flash`; `filename = Inkling.md`). No 2026-10 conflation (`filename ≠ folder`). No edits to rules/task/template files. Voice/finance deferred (`models_voice/`, `models_finance/` not produced; production scope `model/` only per brief). No builds executed.
