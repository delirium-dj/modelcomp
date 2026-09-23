# Gemini 2.5 Flash — findings by Ling 3.0

> Provided by: **Ling 3.0 (Google/gemini-2.5-flash)** — 2026-09-23 UTC
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card
- **Name:** Gemini 2.5 Flash
- **Short description:** Google's balanced Flash model optimized for speed and efficiency in varied tasks, with multimodal input capabilities.
- **Provider / access:** Google (`google/gemini-2.5-flash`, `google/gemini-2.5-flash-preview-09-2025`)
- **Release / knowledge:** September 2025 (preview); 2026 general availability
- **IDs:** google/gemini-2.5-flash
- **Context window:** 1,048,576 (1M) tokens
- **Modalities:** Text, image, audio, PDF in; text out
- **Pricing (as of 2026-09-23):** Free tier available; Paid $0.30/$2.50 per 1M tokens
- **Architecture:** Dense transformer; Flash-class efficiency model

### Raw benchmarks found
Agent / tool use:
- Terminal-Bench 2.1: **not listed** in Vals AI leaderboard for this model version
- τ²-Bench: **not measured** (no data found)

Reasoning / knowledge:
- GPQA Diamond: **59.4%** (pricepertoken.com)
- MMLU-Pro: **78.3** (pricepertoken.com)
- Intelligence Index: **12.7** (53rd percentile) (pricepertoken.com)
- Math: **56.7** (56th percentile) (pricepertoken.com)

Coding:
- SWE-bench Lite: **26.1%** (pricepertoken.com, LayerLens)
- LiveCodeBench: **75.06%** (vals.ai mirror, Gemini 2.5 Flash Preview 09 2025)
- Coding Index: **40.6** (pricepertoken.com)

Long context:
- No verified long-context benchmark found

### Normalized scores (1-100)
- **Tool use: 40/100.** No verified Terminal-Bench or τ²-Bench scores found; the model's primary focus is not agentic tool use; available data suggests modest agentic capability.
- **Reasoning: 55/100.** GPQA Diamond 59.4% and Intelligence Index 12.7 (53rd percentile) indicate moderate reasoning; MMLU-Pro 78.3 is respectable but not frontier-level for 2025–2026 standards.
- **Context window: 85/100.** 1M context window is excellent and at the frontier standard; supports large document processing.
- **Multimodal: 70/100.** Supports text, image, audio, and PDF input — genuinely multimodal; however, multimodal-specific benchmarks are not available in public data.
- **Coding: 45/100.** SWE-bench Lite 26.1% is modest; LiveCodeBench 75.06% is competitive but the model is not optimized primarily for coding; Coding Index 40.6 reflects this.
- **Cost efficiency: 100/100.** Free tier available on Google AI Studio and OpenCode Zen; paid pricing $0.30/$2.50 per 1M is moderate for a Flash-class model.
- **Overall Score: 59/100.** A well-rounded, efficient model with good context and multimodal support, but reasoning and coding scores are modest compared to newer 2026 models.

---

## Signature
- Provided by: **Ling 3.0 (Google/gemini-2.5-flash)** — 2026-09-23
- Method: Public internet research; scores are normalized 1-100 interpretations.

---

## Submission checklist (delete before finishing)
1. All placeholders replaced
2. Filename is model/gemini-2.5-flash/Ling_3.0.md
3. Relative links resolve
4. No raw benchmark invented
5. Zero verified benchmarks → Ling_3.0.md.excluded
