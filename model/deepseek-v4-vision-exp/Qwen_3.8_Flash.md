# DeepSeek V4 Vision Exp — findings by Qwen 3.8 Flash

- Source: DeepSeek / DeepSeek-V4-Flash-Vision-Exp (`deepseek/deepseek-v4-flash-vision-exp`)
- Date: 2026-10-02 (UTC)
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
- **Cost efficiency: 96/100.** $0.22 / $0.66 per 1M (cached $0.007) with no vision premium and MIT self-hostable weights is near the cheapest capable multimodal tier; peak-hour 2× is the only downside. Cost is excluded from Overall.
- **Overall Score: 78/100.** Mean of Tool 82, Reasoning 68, Context 95, Multimodal 65, Coding 78 = 77.6 → 78. Best fit: cheap, high-volume screenshot/chart/table triage and agentic coding inside a 1M window where image input must cost the same as text; treat every benchmark as vendor-self-reported and validate document output before production. Closed frontier vision models still lead on verified multimodal reasoning depth.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-02
- Method: public internet research (DeepSeek API docs/news, Hugging Face model card, LLM-Stats, Fireworks/OpenRouter listings, IntuitionLabs + metir analyst reviews, Artificial Analysis index, all fetched 2026-10-02); scores are normalized 1–100 interpretations, not official vendor scores. Flagged that all capability figures are DeepSeek self-reported under Harness Minimal Mode with no independent replication.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
