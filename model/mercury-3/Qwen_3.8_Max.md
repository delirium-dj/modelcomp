# Mercury 3 — findings by Qwen 3.8 Max

- Source: Inception Labs (`mercury-3`)
- Date: 2026-11-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mercury 3
- **Short description:** Inception Labs' **October-2026 flagship diffusion LLM (dLLM)** — the most capable diffusion model released to date, **>40x larger than Mercury 1** with intelligence up **3x**, running **1,068 tok/s on NVIDIA GPUs (4–8x faster than GPT-6 Luna / Claude Haiku 5.5)** while matching or beating them on quality. A **verified 1M-token context**, **GPQA-D 89.2%** and **MRCRv2 75.5%** at near-budget pricing — but **text-only**, and coding / deeply-nested agent loops sit below frontier autoregressive models (**SWE-bench 38.5%**, τ³-bench 30.2%).
- **Provider / access:** Inception Labs API Platform `inception/mercury-3`; also OpenRouter, Baseten, Vercel. **OpenAI-API-compatible** (drop-in). 100M free tokens on the Inception platform. Proprietary / closed weights. **No free tier in the curated roster** (`noFreeId: true`). Reasoning model with tool/function calling + JSON mode.
- **Release / knowledge:** Launched **October 19, 2026** (blog published Oct 29, 2026). Knowledge cutoff not publicly disclosed.
- **IDs:** `inception/mercury-3`; BenchLM slug `mercury-3`. **Artificial Analysis does not track it** (`mercury-3` 404s). Related: Mercury 2.5 (260K context predecessor), Mercury Voice, Mercury Decide.
- **Context window:** **1M total / 128K max output** — up from 260K for Mercury 2.5. **Verified** by MRCRv2 75.5% (long-context reasoning) and cited in the standout as a "verified 1M-token window."
- **Modalities:** **Text in → text out** (text-only). No image/audio/video input; the Design Arena Website Elo reflects code/markup generation, not multimodal input.
- **Pricing (as of 2026-11-04):** **List $0.20 / $0.70** per 1M in/out; **launch promo 50% off = $0.10 / $0.35**; **cached tokens 90% off the input price**. Near-budget for a 1M-context model at this speed.
- **Architecture:** Proprietary **diffusion LLM (dLLM)** — non-autoregressive parallel decoding; **>40x the parameters of Mercury 1** (exact count undisclosed). Demonstrates that text diffusion scales with the same laws as autoregressive models.

### Raw benchmarks found

> Independent aggregator coverage: **Artificial Analysis does not track Mercury 3** (404 — no AA Intelligence Index). **BenchLM lists 9 of 739 rows, all sourced from Inception's own "Mercury 3 medium-reasoning launch chart"** (vendor/published; BenchLM leaves it *unranked*, "no public overall score"). One row (Design Arena Website 1230 Elo) is OpenRouter-sourced. Production corroboration comes from partner testimonials (e.g., TinyFish's Mind2Web harness). All quality figures below are **Inception-published**.

Agent / tool use (Inception launch chart + production):

- **DeepSearchQA: 71.3%** — good deep-research / retrieval-agentic.
- **BrowseComp+: 55.18%** — mid on agentic web browsing.
- **τ³-bench: 30.2%** — weak on the harder dual-control agentic benchmark; the diffusion drift in deeply nested loops shows here.
- **Mind2Web (production harness): 50% of 50 live navigation tasks completed** (TinyFish AI) — "significantly more than GPT-6.1-Sol," at the same token volume / agent steps and a fraction of the per-token cost.

Reasoning / knowledge (Inception launch chart):

- **GPQA-Diamond: 89.2%** — strong graduate-level science reasoning (frontier-adjacent).
- **MRCRv2: 75.5%** — good long-context reasoning (also the 1M-context verification).
- **IFBench: 76.8%** (instruction following); **MultiChallenge: 60.35%** (multi-turn).
- Vendor claim: **outperforms GPT-6 Luna and Claude Haiku 5.5** across the chart while 4–8x faster; intelligence "risen 3x from Mercury 1 (mini)."

Coding (Inception launch chart + meta):

- **DeepSWE: 46.3%** — mid on repository-scale SWE.
- **SWE-bench: 38.5%** (curated meta) — below frontier; the tradeoff explicitly cites coding "below frontier models." **SWE-Bench Atlas** also referenced in launch coverage.
- **Design Arena Website: 1230 Elo** (OpenRouter) — competent website/front-end code generation.

Multimodal:

- **None.** Text-only (no image/audio/video input). No multimodal benchmark applies.

Long context:

- **1M / 128K out**; **MRCRv2 75.5%** verifies effective long-context reasoning at scale (up from 260K on Mercury 2.5).

Speed (not scored, but the headline):

- **1,068 tok/s on NVIDIA GPUs** — 4–8x faster than GPT-6 Luna / Claude Haiku 5.5; median generation 0.9s and end-to-end 2.2s in Octen's Sense API tests. The defining production trait.

> Provenance: **vendor-published, thinly corroborated.** No independent AA Index (404) and BenchLM leaves the model *unranked* — all 9 rows trace to Inception's own launch chart. The figures are internally consistent and the speed claim is corroborated by multiple independent partners (TinyFish, Octen, RevisionDojo, Lorikeet) and third-party trackers (cellcog 1,068 tok/s; venice/armes pricing). GPQA-D 89.2% is impressive but unverified by a third party, so quality dimensions are graded with a vendor-only discount. Enough verified public benchmarks exist to score (not a `.excluded` case).
> Meta verification: **accurate** — Oct-2026 flagship dLLM ✓, non-autoregressive parallel decoding >1,000 tok/s ✓ (1,068 confirmed), 1M/128K ✓ (up from 260K), $0.10/$0.35 launch ✓ (list $0.20/$0.70), GPQA 89.2% ✓, MRCR 75.5% ✓, text-only with tool/function calling + JSON mode ✓, SWE-bench 38.5% ✓, `noFreeId` ✓. No discrepancies; the meta is well-curated and matches the launch evidence.

### Normalized scores (1–100)

- **Tool use: 64/100.** Decent search/agentic capability — **DeepSearchQA 71.3%**, **BrowseComp+ 55.18%**, and a strong production result (**Mind2Web 50%**, beating GPT-6.1-Sol at equal steps/cost) — but **τ³-bench 30.2%** is weak and the tradeoff explicitly cites **diffusion drift in deeply nested agent loops**. Built for fast, shallow-to-medium agentic passes, not long tool chains. Aligns with the cohort's 65.1.
- **Reasoning: 72/100.** A strong vendor reasoning cluster — **GPQA-Diamond 89.2%** (frontier-adjacent graduate science), **MRCRv2 75.5%**, **IFBench 76.8%**, **MultiChallenge 60.35%** — with intelligence up 3x from Mercury 1. Held below the cohort-adjacent frontier because **every figure is Inception-published** (no independent AA Index; BenchLM unranked) and τ³/coding reveal diffusion limits. Slightly above the cohort's 70.7 on the strength of GPQA-D 89.2%.
- **Context window: 91/100.** **1M tokens / 128K out** (up from 260K) with **MRCRv2 75.5%** verifying effective long-context reasoning at scale — a genuine, benchmarked 1M window at near-budget pricing. The standout cites a "verified 1M-token window." Matches the cohort's 90.7.
- **Multimodal: 15/100.** **Text-only** (no image/audio/video input) — the floor per the coverage-based calibration. The Design Arena Website Elo is code/markup generation, not multimodal input. Matches the cohort's 15 exactly.
- **Coding: 60/100.** **DeepSWE 46.3%** and **SWE-bench 38.5%** are below-frontier for repository-scale coding (the explicit tradeoff), though **Design Arena 1230 Elo** shows competent front-end/website code-gen and >1,000 tok/s enables very fast coding iteration and data-engineering work. Scored below the cohort's 63.9 to weight the weak repo-scale SWE figures more heavily.
- **Cost efficiency: 92/100.** **$0.10/$0.35 launch** (list $0.20/$0.70, 90% cache discount) for a **1M-context** model at **1,068 tok/s** — exceptional cost-per-token *and* cost-per-unit-time; the whole thesis of diffusion-at-scale. Matches the cohort's 91.9. Not counted toward Overall.
- **Overall Score: 60/100.** Mean of Tool 64 + Reasoning 72 + Context 91 + Multimodal 15 + Coding 60 = 302 / 5 = 60.4 → 60. Best fit: **an extremely fast, near-budget 1M-context diffusion flagship for latency-critical agentic/search/voice work** — strong reasoning (GPQA-D 89.2%) and verified long context, but text-only and below-frontier on repo-scale coding and deeply-nested agent loops. **Divergence note:** 7-rater cohort average 61.1 vs my 60 → **−1.1** (tightly aligned). The gap is **Coding** (my 60 vs the cohort's 63.9 — I weight SWE-bench 38.5% / DeepSWE 46.3% more heavily), partly offset by **Reasoning** (my 72 vs 70.7, crediting GPQA-D 89.2%); Tool/Context/Multimodal/Cost all land within ~1 of the cohort. All quality figures are Inception-published (no independent AA Index; BenchLM unranked).

---

## Signature

- Provided by: **Qwen 3.8 Max (qwen/qwen-3.8-max)** — 2026-11-04
- Method: public internet research (Inception "Diffusion at Scale: Introducing Mercury 3" launch post for 1,068 tok/s, 1M context up from 260K, $0.20/$0.70 list / $0.10/$0.35 launch / 90% cache, 40x scale + 3x intelligence, GPT-6 Luna / Claude Haiku 5.5 comparison, and Mind2Web 50% production result; BenchLM `mercury-3` 9-row launch chart for GPQA-D 89.2%, MRCRv2 75.5%, IFBench 76.8%, MultiChallenge 60.35%, DeepSearchQA 71.3%, BrowseComp+ 55.18%, τ³-bench 30.2%, DeepSWE 46.3%, Design Arena 1230 Elo; curated `meta.json` for SWE-bench 38.5%, tool/function calling + JSON mode, and `noFreeId`; WebSearch/cellcog/venice/armes for independent speed + pricing corroboration. Artificial Analysis does not track Mercury 3 (404 — no AA Index). Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Inception — Diffusion at Scale: Introducing Mercury 3](https://www.inceptionlabs.ai/blog/introducing-mercury-3)
  - [BenchLM — Mercury 3 benchmarks](https://benchlm.ai/models/mercury-3)
  - [OpenRouter — Inception Mercury 3](https://openrouter.ai/inception/mercury-3)
  - [cellcog — Inception Mercury 3: 1068 tokens/s, price, benchmarks](https://cellcog.ai/blog/inception-mercury-3/)
  - [Venice — Mercury 3 API pricing & specs](https://venice.ai/models/mercury-3)
- Future sources: add a new file next to this one, e.g. `Qwen_3.8_Max.md`, using the same headings.
