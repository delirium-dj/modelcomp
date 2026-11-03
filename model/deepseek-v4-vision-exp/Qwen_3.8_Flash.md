# DeepSeek V4 Vision Exp — findings by Qwen 3.8 Flash

- Source: DeepSeek / DeepSeek-V4-Flash-Vision-Exp (`deepseek/deepseek-v4-flash-vision-exp`)
- Date: 2026-10-02 (UTC); second pass 2026-11-03 (UTC) — ⚠️ **executed retirement**: DeepSeek changelog 2026-09-10 states V4 Flash and V4 Flash Vision Exp were **retired** when V4.1 Flash shipped, with `deepseek-v4-flash-vision-exp` **temporarily routed to V4.1 Flash** for compatibility; scores remain the historical artifact's; Cost 96 stands (historical); bands unchanged
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4 Vision Exp (canonical ID DeepSeek-V4-Flash-Vision-Exp)
- **Short description:** DeepSeek's first experimental multimodal model — a vision-enabled build of DeepSeek-V4-Flash-0731 (shipped 2026-08-21) that adds image understanding (screenshots, charts, scanned documents) at the same text rate, while DeepSeek states text capability "matches DeepSeek-V4-Flash". Flagged experimental; MIT weights published on Hugging Face.
- **Provider / access:** DeepSeek API (`deepseek-chat` vision endpoint / `deepseek-v4-flash-vision-exp`), also Fireworks AI, OpenRouter, DeepInfra. Chat Completions; reasoning + tool calls. HF `deepseek-ai/DeepSeek-V4-Flash-Vision-Exp`.
- **Release / knowledge:** 2026-08-21 (API live); MIT weights 2026-08-31; knowledge cutoff not disclosed.
- **IDs:** `deepseek/deepseek-v4-flash-vision-exp`. Only this variant accepts images — sending an image to the non-vision V4-Flash endpoint returns HTTP 400.
- **Context window:** 1M total (DeepSeek 1.0M in / ~384–393.2K out; Fireworks lists 1,040K; DeepInfra 1M/1M) — verified across four hosts.
- **Modalities:** text + image in (JPEG/PNG/GIF/WebP, up to 600 images/request, capped 384 tokens ≈ 800×800 px effective); text out; reasoning on; tool calls. No audio/video; no dedicated PDF-ingest, OCR, or bounding-box mode.
- **Pricing (as of 2026-10-02):** $0.22 in / $0.66 out per 1M off-peak (cached $0.007); peak (~2×) $0.44 / $1.32. Identical to text-only V4-Flash — no multimodal premium. MIT open weights → self-hostable.
- **Architecture:** sparse MoE, ~305B total / 13B active (inherits V4-Flash backbone + vision encoder + continued multimodal training).

### Raw benchmarks found

> IMPORTANT CAVEAT: every figure below is DeepSeek **self-reported** under its own "Harness Minimal Mode" (temp 1.0, top_p 0.95, max reasoning effort), with **no independent third-party replication** as of 2026-10-02. No standard GPQA/HLE/SWE-bench/MMMU/ChartQA/DocVQA/OCRBench score is published for this exact variant; DeepSeek only states text parity with the base V4-Flash. Cross-check vs Claude Opus 4.8 in parens.

Agent / tool use:

- Terminal-Bench 2.1: **83.9** (vs 82.7 text-only V4-Flash; 85.0 Claude Opus 4.8)
- ApexBench Pass@1: **36.5** (vs Opus 4.8 39.4)
- Agents' Last Exam: **27.3** (vs Opus 4.8 25.7); ZeroBench Pass@5 **35.0** (vs 34.0)

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **51** (≈ #5 of 176 tracked; well above the comparison-class median ~18)
- GPQA Diamond / HLE / MRCR for this variant: **no verified independent public score found** (vendor claims text parity with base V4-Flash)

Coding:

- Terminal-Bench 2.1 83.9 is the primary code-agent signal; no SWE-bench Verified / LiveCodeBench / DeepSWE / Coding-Index row published for this exact checkpoint (aggregator lists DeepSWE/NL2Repo without numbers).

Multimodal / document (the added capability):

- Chartography (chart-reading): **64.3** (vs Opus 4.8 65.0)
- Independent hands-on: ~**97–98%** field-level extraction on a dense 4-column financial table from a low-quality scan (single reviewer test, not a benchmark); strong clean-chart/table reading, inconsistent handwriting, weak on dense ERP screenshots.

### Normalized scores (1–100)

> Derived from the raw numbers above using `model-comparison.md` v4 methodology. All vendor-self-reported, which caps confidence. Overall = half-up mean of the five quality dims; Cost excluded.

- **Tool use: 82/100.** Terminal-Bench 2.1 83.9 is near-frontier agentic coding and ApexBench 36.5 / ALE 27.3 are solid for a 13B-active model; but the numbers are self-run in Minimal Mode with no third-party replication, so it sits at the top of the mid-band rather than the frontier 90s.
- **Reasoning: 68/100.** The AA Intelligence Index of 51 (aggregate over GPQA/HLE/TB) is strong and far above class median, but there is no independent GPQA/HLE/MRCR row for this exact variant, so the score rests on a single vendor-adjacent aggregate — mid band.
- **Context window: 95/100.** 1M-token window confirmed across four hosts meets the ≥1M tier; no published ≥98% long-context retrieval metric (no MRCR/RULER), so the band floor.
- **Multimodal: 65/100.** Text + image in / text out puts it in the +image 60–70 band; the hard 384-token / ~800×800 px ceiling, absence of PDF/OCR/audio/video modes, and only Chartography 64.3 as a visual row keep it at the top of that band rather than the video/audio 90s.
- **Coding: 78/100.** Terminal-Bench 2.1 83.9 and text parity with the capable V4-Flash backbone point to strong code-agent work, but no SWE-bench/LiveCodeBench/DeepSWE/Coding-Index numbers are published for this checkpoint, capping it below the frontier 90s.
- **Cost efficiency: 96/100.** $0.22 / $0.66 per 1M (cached $0.007) with no vision premium and MIT self-hostable weights is near the cheapest capable multimodal tier; peak-hour 2× is the only downside. (2026-11-03 second pass: rate is historical — the vendor retired the id on 2026-09-10 and calls now execute the V4.1 Flash reroute at V4.1's reduced pricing; MIT weights for the original artifact remain self-hostable at the historical economics.) Cost is excluded from Overall.
- **Overall Score: 78/100.** Mean of Tool 82, Reasoning 68, Context 95, Multimodal 65, Coding 78 = 77.6 → 78. Best fit: cheap, high-volume screenshot/chart/table triage and agentic coding inside a 1M window where image input must cost the same as text; treat every benchmark as vendor-self-reported and validate document output before production. Closed frontier vision models still lead on verified multimodal reasoning depth.

---

## Second-pass update — 2026-11-03 (UTC)

Staleness-triggered re-research (prior pass 2026-10-02); three independent sources consulted.

**Sources:** Lifecycle — https://api-docs.deepseek.com/updates/ (Change Log, fetched 2026-11-03; 2026-09-10 entry: **"The previous-generation models V4 Flash and V4 Flash Vision Exp have been retired; for compatibility, the model names deepseek-v4-flash and deepseek-v4-flash-vision-exp are temporarily routed to V4.1 Flash"**; 2026-10-17 entry: **"DeepSeek V4.1 Flash has been upgraded to DeepSeek-V4.1-Flash-1017. The API calling method and pricing remain unchanged"**) and https://forums.developer.nvidia.com/t/deepseek-v4-flash-vision-exp-is-released-as-open-weights/381911 (**"DeepSeek v4 Flash Vision Exp is Released as Open Weights"** — MIT weights remain downloadable, the self-host lane outlives the API) and https://openrouter.ai/compare/deepseek/deepseek-v4-flash-vision-exp (third-party hosts still route the vision-exp sku; **"DeepSeek V4 Flash 0731 … 39 … checked live on October 18, 2026"** backbone-class context per https://geotoolbox.ai/blog/deepseek-v4) · successor boundary — https://www.morphllm.com/deepseek-v4 (**"Artificial Analysis scores Pro-0813 at 36 on its Intelligence Index"**) and https://kie.ai/blog/deepseek-v4-flash-0731-release-analysis (**"Its analysis page puts the model at 50 on the Intelligence Index"**) — V4.1 Flash / 1017 and V4 Pro rows belong to their own folders per exact-ID rule; none merged here · benchmarks — no independent AA/Vals row for this exact vision-exp checkpoint surfaced after 2026-10-02; pass 1's "all self-reported, no replication" caveat stands.

**What moved and how it was resolved:**

1. **Retirement EXECUTED at the origin vendor (2026-09-10) — but pre-dates pass 1 and was missed:** the `deepseek-v4-flash-vision-exp` model name now silently serves V4.1 Flash (upgraded to 1017 on 2026-10-17). This report's rows remain the **historical artifact's** (the 2026-08-21→09-10 experimental endpoint), scored from its own release numbers — no successor row is merged in. Curation flag raised: the folder's queue row measures a model that is no longer orderable on DeepSeek's own API; third-party hosts (OpenRouter/Fireworks/DeepInfra) still serve the original weights.
2. **Independent replication never arrived:** the AA Index 51 remained vendor-adjacent; AA's independently-run reads cover the text backbone (Flash-0731 at ~50 launch scale / 39 current class), not this checkpoint — Reasoning 68's "single aggregate" discount and the self-report cap on Tool 82 / Coding 78 were therefore untouched.
3. **Cost 96 historical:** $0.22/$0.66 was the id's live rate; after the reroute, API spend goes to V4.1 Flash's reduced pricing. MIT weights keep the self-host economics — band unchanged, flag added. 82+68+95+65+78 = 388/5 = 77.6 → **Overall 78**.

**Scores changed by this pass:** none. **Overall remains 78.** Curation flag: **retired-at-vendor 2026-09-10 (temp-rerouted id)** — candidate for delisting or successor-folder decision at next sync.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-02
- Method: public internet research (DeepSeek API docs/news, Hugging Face model card, LLM-Stats, Fireworks/OpenRouter listings, IntuitionLabs + metir analyst reviews, Artificial Analysis index, all fetched 2026-10-02); scores are normalized 1–100 interpretations, not official vendor scores. Flagged that all capability figures are DeepSeek self-reported under Harness Minimal Mode with no independent replication.
- Second-pass signature: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-11-03. Method: ≥3 independent sources (DeepSeek official change log, NVIDIA forums, OpenRouter compare, morphllm/kie for successor-scale context, geotoolbox); retirement executed 2026-09-10 with model-name reroute recorded from the vendor's own changelog; V4.1 Flash rows quarantined per exact-ID rule — **no dimension changed and Overall remains 78; curation flag raised**. Prior pass retained verbatim per RULES.md.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
