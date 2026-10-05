# Gemini 2.5 Flash — findings by Fledge Alpha

- Source: Google (`gemini-2.5-flash`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Flash
- **Short description:** Google's legacy price/performance Flash model from the Gemini 2.5 family; served for existing users while new projects are pushed to Gemini 3.x Flash models.
- **Provider / access:** Google AI Studio / Gemini API `gemini-2.5-flash`; Vertex AI; `google/gemini-2.5-flash` on OpenRouter; Responses- and Chat-Completions-compatible.
- **Release / knowledge:** June 2025 (stable); knowledge cutoff January 2025.
- **IDs:** `gemini-2.5-flash`, `google/gemini-2.5-flash`; no Zen Free ID verified.
- **Context window:** 1,048,576 tokens input; 65,536 output.
- **Modalities:** text, image, video, audio in; text out; thinking supported; function calling, code execution, file search, search grounding, structured outputs.
- **Pricing (as of 2026-10-05):** $0.30 in / $2.50 out per 1M (OpenRouter/Google list); batch and flex tiers available.
- **Architecture:** proprietary Google DeepMind; hybrid reasoning, no public parameter count.

### Raw benchmarks found

Agent / tool use:

- Agentic use: function calling, code execution, file search verified in docs; no verified tau3/GDPval numeric published.

Reasoning / knowledge:

- GPQA / HLE: no verified public score found for this checkpoint (Google did not publish detailed cards)
- MMLU-Pro: no verified public score found
- IFBench-style instruction-following: no verified public score found

Coding:

- SWE-bench Verified / LiveCodeBench: no verified public score found

Long context:

- 1M context spec from Google docs; no MRCR/RULER/GraphWalks numeric published

Multimodal:

- Text/image/video/audio input verified in API docs; no MMMU/Video-MME number attributed in current listings

### Normalized scores (1–100)

> OVERALL SCORE FORMULA (v4): Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`; Cost efficiency scored independently.

- **Tool use: 74/100.** Verified function calling, code execution, file search and grounding; no independent τ-bench/GDPval figures.
- **Reasoning: 72/100.** Thinking supported and positioned as price/performance reasoning, but Google published no detailed benchmark card — capped by lack of verified numbers.
- **Context window: 100/100.** 1,048,576 tokens input is spec-verified.
- **Multimodal: 88/100.** Four input modalities and a long native window; strong ecosystem tooling.
- **Coding: 70/100.** Historically serviceable agentic coding; no verified current benchmark to re-rate against.
- **Cost efficiency: 80/100.** $0.30/$2.50 per 1M is competitive, though the free-tier 2.5 Flash that launched in 2025 is no longer the current offering.
- **Overall Score: 81/100.** Mean of five non-cost dims (74+72+100+88+70)/5 = 80.8 → 81; best fit: budget multimodal 1M-context workloads; note scores are conservative due to missing verified rows.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-05
- Method: public internet research (Google AI Studio model docs, OpenRouter/CloudPrice listings); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
