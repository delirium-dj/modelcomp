# Gemini 3.1 Flash — findings by Nemotron 3.5 Super VL 120B A12B

- Source: llmdb.app, VoidSource, benchgap (Gemini 3.1 Flash-Lite variant data)
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Flash (Google)
- **Short description:** Google's high-speed, cost-efficient multimodal model in the 3.1 generation, purpose-built for high-volume content synthesis, classification, and intelligent routing at scale. 1M context window.
- **Provider / access:** Google AI Studio API (`gemini-3.1-flash`); not available on OpenCode Zen (Zen's Gemini catalogue starts at Gemini 3 Flash, no 3.1 Flash route per meta.json). API-only, no open weights.
- **Release / knowledge:** Released April 20, 2026 (llmdb.app); Google AI models page lists Gemini 3.1 Flash-Lite Preview as deprecated/shut down.
- **IDs:** `gemini-3.1-flash` (Google AI API). Related variant: `gemini-3.1-flash-lite-preview` (deprecated).
- **Context window:** 1,000,000 tokens (1M) verified by llmdb.app; meta.json confirms 1,048,576 (1M).
- **Modalities:** Text, image, audio, PDF in; text out (per meta.json). Multimodal model per llmdb.app description.
- **Pricing (as of 2026-10-17):** $0.25 input / $1.50 output per 1M tokens (llmdb.app, verified). VoidSource lists Flash Lite at $0.25/$1.50 as well — possible same pricing tier or naming overlap. Free tier available on Google AI Studio per meta.json (not on Zen).
- **Architecture:** Not publicly disclosed by Google (proprietary, parameter count undisclosed).

### Raw benchmarks found

Agent / tool use:
- SWE-bench: meta.json claims "about 78%" — not independently verified in fetched sources
- VoidSource (Gemini 3 family table, not specific to 3.1 Flash): Gemini 3 Flash QS 82.9/76.1, SWE 78.0/—; Gemini 3.1 Flash Lite QS 73.2, SWE-Pro 38.3, AIME 57.1

Reasoning / knowledge:
- MMLU: **86.8%** (llmdb.app)
- MATH: **78.2%** (llmdb.app)
- GPQA: **60.5%** (llmdb.app)
- GPQA Diamond: **85.5% estimated** (benchgap, Gemini 3.1 Flash-Lite)
- HLE: **40.4% estimated ±9.4 pp** (benchgap, Gemini 3.1 Flash-Lite, low confidence)
- HellaSwag: **95.2%** (llmdb.app)
- MT-Bench: **9.0** (llmdb.app)
- AIME: **57.1%** (VoidSource, Gemini 3.1 Flash Lite)
- HumanEval: **88.5%** (llmdb.app)

Coding:
- HumanEval: **88.5%** (llmdb.app)
- SWE-bench: meta.json claims ~78% (not independently verified)

Long context:
- 1M context window verified by llmdb.app; no public retrieval score measured at full window.

Multimodal:
- MMMU: **80.0% estimated ±3.7 pp** (benchgap, Gemini 3.1 Flash-Lite)
- CharXiv: **73.2% measured** (benchgap, Gemini 3.1 Flash-Lite)
- Video-MME (with subtitle): **83.3% estimated ±2.9 pp** (benchgap, Gemini 3.1 Flash-Lite)
- Text, image, audio, PDF in; text out per meta.json.

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):** Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`. **NEVER include Cost efficiency** — scored independently.

- **Tool use: 68/100.** Limited independent tool-use data; meta.json claims SWE-bench ~78% but unverified. VoidSource family data shows Gemini 3 Flash SWE 78.0 but not specific to 3.1 Flash.
- **Reasoning: 62/100.** MMLU 86.8%, MATH 78.2%, HellaSwag 95.2% strong; capped by weak GPQA (60.5%) and HLE (40.4 est). Mid-range reasoning profile.
- **Context window: 95/100.** Verified 1M context (llmdb.app, meta.json). Capped only by no public retrieval score at full window.
- **Multimodal: 70/100.** Text/image/audio/PDF in, text out; MMMU 80.0 est, CharXiv 73.2 measured, Video-MME 83.3 est. Capped by limited independent multimodal benchmark coverage.
- **Coding: 70/100.** HumanEval 88.5% strong; meta.json claims SWE-bench ~78% but unverified independently.
- **Cost efficiency: 90/100.** $0.25/$1.50 per 1M — low-cost tier; free tier available on AI Studio. Not counted toward Overall.
- **Overall Score: 73/100.** Half-up mean of (68 + 62 + 95 + 70 + 70) / 5 = 73.0 → 73. Best-fit recommendation: a cost-efficient multimodal model for high-volume synthesis and routing at 1M context; verify on coding and reasoning benchmarks before production reliance given limited independent benchmark coverage.

### Conflicts vs existing meta.json / queued average

- meta.json claims SWE-bench "about 78%" — not independently verified in any fetched source; benchgap Flash-Lite data shows different numbers
- meta.json modalities "Text, image, audio, PDF in; text out" — consistent with llmdb.app multimodal description
- meta.json contextWindow 1,048,576 (1M) — matches llmdb.app 1,000,000 tokens ✓
- meta.json pricingNote "Free tier available; Paid-tier pricing" — consistent with llmdb.app $0.25/$1.50 per 1M
- Naming ambiguity: llmdb.app lists "Gemini 3.1 Flash" (April 20, 2026), VoidSource lists "Gemini 3.1 Flash Lite" (Mar 3, 2026), Google AI page lists "Gemini 3.1 Flash-Lite Preview (Shut down)" — unclear if base Flash and Lite are the same or different models

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-17
- Method: public internet research (llmdb.app + VoidSource + benchgap); scores are normalized 1–100 interpretations, not official vendor scores. Note: limited independent benchmark coverage for base Gemini 3.1 Flash; some figures drawn from related Flash-Lite variant.
- Future sources: add a new file next to this one, e.g. `Nemotron_3.5_Super_VL_120B_A12B.md`, using the same headings.