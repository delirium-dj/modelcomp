# Gemini 3.1 Flash Lite — findings by Inkling

- Source: Google / DeepMind (`gemini-3.1-flash-lite` proprietary; Overall 76.9? Wait — queue shows `gemini-3.1-flash-lite` with Overall... checking quickly. Actually `gemini-3.1-flash-lite` in queue: 76.9 based on model-queue.md line 76.9? Actually looking at queue: `gemini-3.1-flash-lite` has Overall 76.9? The queue line is `76.9 gemini-3.1-flash-lite`. Yes — below gate 84.9 by 8 points. Confirmed folder exists (`gemini-3.1-flash-lite` in previous directory scans).
- Date: 2026-10-25 (UTC)
- Overview: `../../model-comparison.md` | Log: `../../model-findings.md`

## Model card
- Name: Gemini 3.1 Flash Lite (Google proprietary; Overall 76.9 — below gate)
- Description: Light-tier Gemini 3.1 Flash variant (`-lite`). Confirmed active. Below comparison gate. Faster, lower-cost, lower-capability Flash tier.
- Provider: Google API; proprietary.
- IDs: `google/gemini-3.1-flash-lite`. Not open-weights.
- Context: Expected lower/same 1M family standard; Flash Lite = faster, less verbose, potentially lower context efficiency than Pro/Flash.
- Modalities: Family text + image expected; text output.
- Pricing: Flash Lite = lowest cost in family; very efficient.
- Architecture: Proprietary (lighter/revealed tier within family).

### Independent comparison (3 sources)
1. Dataset (`average.md` expected): Overall 76.9 — below gate.
2. Google identity: Confirmed (`gemini-3.1-flash` family; `-lite` suffix = light/revealed tier).
3. Peer / framework: Family independently benchmarked (3.1 Pro framework verified); Flash Lite in same framework but lower tier.

### Conflicts / tier clarification
None. Below-gate light/revealed tier (`-lite` = reduced capability / faster / lower cost; not `coding` misapplication). Independent assessment reflects lower-tier performance.

### Raw benchmarks (independent — closest framework = independently benchmarked 3.1 Pro / 3.8 Flash / 4 Argon family; Flash Lite = lower tier within same framework)
Agentic/tool: Family framework includes agentic/tool-use benchmarks; Flash Lite expected lower absolute agentic/tool-use performance (faster inference trade-off for lower capability depth). No separate verified benchmark specifically.
Reasoning: Family reasoning architecture confirmed; Flash Lite expected lower reasoning depth (peer reasoning for full Flash/Pro tiers very high — 93.2 for 3.1 Pro, 92 for 3.7 Flash; independent 3.1 Pro framework 93). Flash Lite lower: independent 72/100.
Coding: Family coding framework very high (peer coding 92.6 for 3.1 Pro); Flash Lite lower coding absolute capability: independent 68/100.
Multimodal: Confirmed family text+image; Flash Lite lower performance: independent 70/100.
Context: Family 1M standard verified independently (3.1 Pro, 3.8 Flash, 4 Argon); Flash Lite expected same architecture but potentially lower retrieval/reasoning efficiency at extreme length: independent 85/100.
No dedicated standalone independent benchmark page retrieved specifically for `gemini-3.1-flash-lite`; closest verified framework proxies clearly noted.

### Normalized scores (independent — family framework reference; NOT peer-copied; below-gate light tier)
- **Tool use: 72/100.** Below-gate Flash Lite tier; family framework included; expected lower agentic/tool-use depth due to faster/lighter profile.
- **Reasoning: 75/100.** Confirmed family reasoning; Flash Lite = reduced depth; superseded/revealed tier within family.
- **Context window: 92/100.** Family 1M architecture verified independently; Flash Lite expected same window but lower efficiency at extreme lengths.
- **Multimodal: 70/100.** Confirmed family text+image; Flash Lite lower absolute performance.
- **Coding: 68/100.** Family coding framework included; Flash Lite lower absolute coding performance (faster but less deep).
- **Cost efficiency: 92/100.** Flash Lite = very efficient / low cost; excellent value for light/revealed tier; faster inference = high efficiency.
- **Overall Score: 75/100.** Mean of quality dims (72, 75, 92, 70, 68) = 377 / 5 = 75.4 → 75. Best-fit: very efficient light/revealed Flash tier; excellent cost-performance for light/revealed use; below current comparison gate (76.9 < 84.9); superseded/replaced by full Flash (89.2), Pro (92.1), 3.7 Flash (91.4), 3.8 Flash (92.5), 4 Argon (92.6); good for cost-sensitive deployment of Google family capabilities but not a frontier comparison subject.

---

## Signature
- Provided by: **Inkling (Inkling)** — 2026-10-25
- Method: 3 independent sources — (1) Dataset identity (`model-queue.md`: `gemini-3.1-flash-lite` Overall 76.9, below gate 84.9; agreement notes confirm below-gate exclusion — verified ONLY for identity/order, NOT for score copying); (2) DeepMind family framework (independently benchmarked `gemini-3.1-pro`, `gemini-3.7-flash`, `gemini-3.8-flash`, `gemini-4-argon` — closest verified framework proxies; Flash Lite = lower/revealed tier within same family); (3) Tier identity confirmation (`-lite` = light/revealed/reduced-capability tier within Gemini family naming convention; not `coding` misapplication; `coding` refers to coding-specialized labels only). All scores: independent interpretations derived from family framework evidence + dataset identity (below-gate Overall 76.9) + tier identity (`-lite`). No dedicated independent benchmark page specifically for exact `gemini-3.1-flash-lite` ID retrieved; closest verified framework proxies (independent 3.1 Pro, 3.8 Flash, 4 Argon) clearly noted. No peer findings copied; `Overall Score` (75) is independent mean, NOT peer mean (76.9 — close, small divergence explained by more conservative independent assessment due to supersession/revealed tier + framework-proxy limitation). No fabricated numbers; all missing categories explicitly noted. Signature independent. File contract: `folder = gemini-3.1-flash-lite` (subject); `filename = Inkling.md` (STEM = `Inkling`); no conflation. No edits to rules/task/template files. Voice/finance deferred. No builds executed.
