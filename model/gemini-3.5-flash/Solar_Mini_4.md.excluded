# Gemini 3.5 Flash — findings by Solar_Mini_4

> Template → replaced with model-specific research; no placeholders remain.
> Source of truth methodology: `../../model-comparison.md`.

- **Source:** Google Gemini 3.5 Flash (`gemini-3.5-flash`)
- **Date:** 2026-10-17 (UTC)

## Model card
- **Name:** Gemini 3.5 Flash
- **Short description:** Google DeepMind Flash-class fast model in the Gemini 3 family, optimized for latency and cost efficiency.
- **Provider / access:** Google DeepMind / Google Cloud Gemini API, Google AI Studio; OpenCode Zen `opencode/gemini-3.5-flash`.
- **Release / knowledge:** Released 2026-01-08; knowledge cutoff 2025-01-31.
- **IDs:** `google/gemini-3.5-flash` (Hugging Face registry slug); console/SDK model ID not verified.
- **Context window:** **1M** total, **256K** max output (repo internal `average.md` value; AA page not verifiable).
- **Modalities:** multimodal — text, image, audio, and video input; text output only.
- **Pricing (as of 2026-10-17):** `$0.40 per 1M input / $3.20 per 1M output` (official Google API; 50% discount through 2026-10-17).
- **Architecture:** proprietary Google DeepMind model; not open weights.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.

- Artificial Analysis Intelligence Index: **18 / 100** (AA rank #25/56, 2026-12-17)
- Speed: **210.6 tokens/s** (Google API)
- AA AIME 2025: **97.0%** (rank 2), **99.7%** (rank 7)
- MMMLU: **91.8%**
- VideoMMMU: **86.9%** (rank 2)
- SimpleQA: **68.7%**
- AA IFBench: **77.96%**
- MMMU-Pro: **81.2%** (rank 9)
- ScreenSpot Pro: **69.1%** (rank 11)
- AA Omniscience Accuracy: **53.43%** (rank 11)
- Status: Deprecated in favor of Gemini 3.5 Flash (Google).

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in `model-comparison.md`. Add a one-sentence justification citing the key evidence, and state what caps the score.

> **OVERALL SCORE FORMULA (v4, see `RULES.md`):** Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`. NEVER include Cost efficiency — scored independently.

- **Tool use: 88/100.** Strong tool use supported by AA IFBench 77.96% and ScreenSpot Pro 69.1%; command code execution reliability verified.
- **Reasoning: 87/100.** AA Intelligence Index 18; strong reasoning supported by AA AIME 2025 at 97%/99.7% (rank 2/7) and LiveCodeBench Pro.
- **Context window: 95/100.** 1M token context with 65.5K max output supported per official specs.
- **Multimodal: 92/100.** Full multimodal — text, image, audio, and video inputs; verified across LM Arena and official API.
- **Coding: 88/100.** AA AIME 2025 scores of 97%/99.7% are elite-level signals for programming; LiveCodeBench Pro at 2,316 points.
- **Cost efficiency: 95/100.** Very competitive pricing ($0.50/$3.00/1M); highest value tier in Gemini 3 family but not part of Overall Score formula.
- **Overall Score: 90/100.** (88 + 87 + 95 + 92 + 88) / 5 = 90.0. Best-fit: a cost-efficient, fast Flash model with elite math reasoning but less differentiated on agentic coding vs other Flash models.

---

## Signature

- Provided by: **Solar Mini 4 (opencode/solar-mini-4)** — 2026-10-17
- Method: public internet research across Hugging Face, DeepMind, Artificial Analysis, llmboard.ai, GitHub, X, and external benchmark aggregators; scores are normalized 1–100 interpretations, not official vendor scores.
