# Gemini 3.1 Flash Lite — findings by Ling 3.0

> Provided by: **Ling 3.0 (Google/gemini-3.1-flash-lite)** — 2026-09-23 UTC
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card
- **Name:** Gemini 3.1 Flash Lite
- **Short description:** Google's lightweight, ultra-low-latency model engineered for high-frequency lightweight tasks, part of the Gemini 3.1 family.
- **Provider / access:** Google (`google/gemini-3.1-flash-lite`)
- **Release / knowledge:** 2026 (Gemini 3.1 family release)
- **IDs:** google/gemini-3.1-flash-lite
- **Context window:** 1,048,576 (1M) tokens
- **Modalities:** Text, image, audio, PDF in; text out
- **Pricing (as of 2026-09-23):** Free tier available; Paid-tier pricing on Google AI Studio and OpenCode Zen
- **Architecture:** Lightweight Flash-class MoE; optimized for speed and cost over maximum capability

### Raw benchmarks found
Agent / tool use:
- Terminal-Bench 2.1 (Vals AI): **34.08%** (rank 58/61) (benchlm.ai)
- Coding category score: **42.3/100** (benchlm.ai, rank #116/141)

Reasoning / knowledge:
- GPQA Diamond: **not directly published** for Flash Lite; Gemini 3 Flash at 90.4% and Gemini 3.1 Pro at 94.3% provide family context
- MMLU-Pro: **not directly published** for Flash Lite
- No verified individual benchmark scores found for this specific variant

Coding:
- SWE-bench Lite: **not directly published**; SWE-bench Verified for Gemini 3 Flash is 78.0% (vals.ai)
- LiveCodeBench: **80.12%** (vals.ai mirror, Gemini 3.1 Flash Lite Preview)
- Coding category score: **42.3/100** (benchlm.ai)

Long context:
- No verified long-context benchmark found

### Normalized scores (1-100)
- **Tool use: 40/100.** Terminal-Bench 2.1 at 34.08% (rank 58/61) is modest; the Flash Lite variant is not optimized for heavy agentic workloads; coding category 42.3/100 confirms limited agentic coding.
- **Reasoning: 50/100.** No direct GPQA or MMLU-Pro scores found; family context suggests moderate reasoning (Gemini 3 Flash GPQA 90.4%, but Flash Lite is a distilled/lighter variant); benchmark coverage is sparse.
- **Context window: 85/100.** 1M context window is excellent and at frontier standard; supports large documents despite being a lightweight model.
- **Multimodal: 65/100.** Supports text, image, audio, and PDF input; multimodal capabilities are present but benchmark data for multimodal performance is unavailable.
- **Coding: 40/100.** Coding category 42.3/100 and Terminal-Bench 34.08% indicate modest coding capability; LiveCodeBench 80.12% for the Preview variant is better but not confirmed for the standard Lite.
- **Cost efficiency: 100/100.** Free tier available; designed as a cost-efficient lightweight model for high-frequency tasks.
- **Overall Score: 56/100.** As a lightweight Flash Lite variant, the model prioritizes speed and cost over maximum capability; benchmark coverage is limited and scores are modest compared to the full Flash and Pro variants.

---

## Signature
- Provided by: **Ling 3.0 (Google/gemini-3.1-flash-lite)** — 2026-09-23
- Method: Public internet research; scores are normalized 1-100 interpretations.

---

## Submission checklist (delete before finishing)
1. All placeholders replaced
2. Filename is model/gemini-3.1-flash-lite/Ling_3.0.md
3. Relative links resolve
4. No raw benchmark invented
5. Zero verified benchmarks → Ling_3.0.md.excluded
