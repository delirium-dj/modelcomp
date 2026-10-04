# Gemini 3.1 Flash — findings by Claude Opus 4.8

- Source: Google (`google/gemini-3.1-flash`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Flash
- **Short description:** Google's 3.1 fast-tier Gemini balancing speed, capability, and cost; full multimodal input, 1M context. Top use case: cheap/free high-volume multimodal work.
- **Provider / access:** Google AI Studio + Gemini API (`gemini-3.1-flash`), also OpenCode Zen.
- **Release / knowledge:** Gemini 3.1 generation (2026); knowledge cutoff not published.
- **IDs:** `google/gemini-3.1-flash` (Free tier present on AI Studio and Zen).
- **Context window:** 1,048,576 (1M) total (per curated `meta.json`).
- **Modalities:** text, image, audio, PDF in; text out; reasoning yes; tool calls yes.
- **Pricing (as of 2026-10-03):** Free tier on AI Studio and Zen (rate-limited); low Flash paid pricing.
- **Architecture:** proprietary.

### Raw benchmarks found

> No standalone BenchLM page (404 for this exact variant); scored on the Gemini 3.1 Flash family profile (3.1 Pro/3.5 Flash neighbors) as a labeled proxy.

Agent / tool use:

- Family Gemini 3.1 agentics (Terminal-Bench, OSWorld, MCP Atlas) mid-tier; exact 3.1 Flash rows not separately published

Reasoning / knowledge:

- GPQA Diamond ~91–94% (family); MMLU-Pro ~89% (family); ARC-AGI-2 ~77% (3.1 Pro); CritPt low; AA Index mid

Coding:

- LiveCodeBench ~87–89% (family); SWE-bench ~78%

Multimodal:

- Gemini 3.1 line: image+audio+PDF in; MMMU-Pro ~82% (family)

### Normalized scores (1–100)

- **Tool use: 74/100.** Mid-tier Flash-class agentics (family); no exact 3.1 Flash rows published.
- **Reasoning: 80/100.** Family GPQA-D ~91–94% and MMLU-Pro ~89%; Flash reasoning lags Pro tiers.
- **Context window: 88/100.** 1M total (per meta) with FA-family long-context reasoning.
- **Multimodal: 88/100.** Image+audio+PDF in, text out (Gemini Flash multimodal line).
- **Coding: 78/100.** Family LiveCodeBench ~87–89%, SWE-bench ~78%.
- **Cost efficiency: 98/100.** Free tier on AI Studio and Zen plus low Flash paid pricing.
- **Overall Score: 81.6/100.** Half-up mean of the five quality dims (74/80/88/88/78). A strong free/cheap multimodal daily driver; scored on the family profile since the exact variant has no standalone published evals.

---

## Signature

- Provided by: **Claude Opus 4.8 (anthropic/claude-opus-4.8)** — 2026-10-03
- Method: public internet research (Google DeepMind, Artificial Analysis, BenchLM). No standalone BenchLM page for this exact variant (404); scores use the Gemini 3.1 Flash family profile as a labeled proxy and are 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
