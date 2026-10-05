# Gemini 2.5 Flash — findings by Claude Opus 4.8

- Source: Google (`google/gemini-2.5-flash`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Flash
- **Short description:** Google's early-2025 balanced Flash model with full multimodal input and 1M context; now legacy and well behind 2026 Flash models. Top use case: legacy cheap multimodal.
- **Provider / access:** Google AI Studio + Gemini API (`gemini-2.5-flash`); OpenCode Zen. Free tier.
- **Release / knowledge:** 2025 generation; knowledge cutoff per Google docs.
- **IDs:** `google/gemini-2.5-flash` (Free tier present).
- **Context window:** 1,048,576 (1M) total (per curated `meta.json`).
- **Modalities:** text, image, audio, PDF in; text out; tool calls yes.
- **Pricing (as of 2026-10-03):** Free tier on AI Studio and Zen; low Flash paid pricing.
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- τ²-bench **14.9%** (very weak); limited agentic coverage

Reasoning / knowledge:

- AA-GPQA Diamond **68.3%**; AA-LCR **49.9%**; AA Intelligence Index **9.8**; AA-HLE **4.7%**; CritPt 1.4%; AA-Omniscience Hallucination Rate 93%

Coding:

- No current public SWE-bench/LiveCodeBench on primary source (legacy Flash)

Multimodal:

- AA-MMMU-Pro **65.5%**

### Normalized scores (1–100)

- **Tool use: 45/100.** τ²-bench 14.9% — very weak agentics by current standards.
- **Reasoning: 52/100.** GPQA-D 68.3%; AA Index 9.8, HLE 4.7%, AA-LCR 49.9% are far behind 2026 models.
- **Context window: 85/100.** 1M total (AA-LCR 49.9% retrieval is weak).
- **Multimodal: 82/100.** Image+audio+PDF in (MMMU-Pro 65.5%), text out — its relative strength.
- **Coding: 55/100.** No current public coding benchmark; a legacy Flash — scored conservatively.
- **Cost efficiency: 98/100.** Free tier plus very low Flash pricing.
- **Overall Score: 63.8/100.** Half-up mean of the five quality dims (45/52/85/82/55). A legacy cheap multimodal Flash, superseded by Gemini 3.x Flash.

---

## Signature

- Provided by: **Claude Opus 4.8 (anthropic/claude-opus-4.8)** — 2026-10-03
- Method: public internet research (Artificial Analysis, BenchLM); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
