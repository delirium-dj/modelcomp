# Muse Ember — findings by Nemotron 3.5 Super VL 120B A12B

- Source: Meta / Muse Ember
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Ember
- **Short description:** Meta's smallest and most-efficient model, designed for complex reasoning execution and repetitive agent work: tool calls, coding agent subtasks, routing, extraction, and long document parsing. Released November 2026 as the successor to the stealth "Crouton Alpha" preview.
- **Provider / access:** Meta Model API `muse-ember-1.0`; OpenRouter route `meta/muse-ember-1.0`; OpenCode Console route `muse-ember-1.0`. One API provider on Artificial Analysis.
- **Release / knowledge:** Released 2026-11-09; knowledge cutoff not disclosed.
- **IDs:** `meta/muse-ember-1.0` (Meta Model API / OpenRouter). No Free ID confirmed on OpenCode Zen.
- **Context window:** 1,000,000 tokens total. Verified via Artificial Analysis and OpenRouter models.dev listing.
- **Modalities:** text + image in; text out; reasoning yes; tool calls yes; JSON mode / structured output yes. (OpenRouter listing also notes video, audio, and PDF document input.)
- **Pricing (as of 2026-11-11):** $0.10 per 1M input tokens, $0.50 per 1M output tokens; 96% cache discount; ~$0.0728 per 1M blended. Very cheap; closed weights.
- **Architecture:** Proprietary (closed); reasoning model; parameter count not disclosed by Meta. Described as Meta's smallest, most-efficient model.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the closest proxy as provisional — never invent values.

- Terminal-Bench: no verified public score found
- Tau3 / Tau2: no verified public score found
- Claw-Eval: no verified public score found
- GDPval / OSWorld / Automation: no verified public score found
- Reasoning (GPQA / HLE / MRCR / LCR / CritPt / Index): Artificial Analysis Intelligence Index 36 (v5.0.1), #2/3436 in class. Incorporates AA-Briefcase v1.1, AutomationBench-AA, Terminal-Bench 4.0, FrontierCode 2.0, AA-Omniscience v1.1, GDP.pdf, HLE-Diamond, CritPt v2 (Hard Subset), Terminal-Bench-Science 0.1. No individual GPQA / HLE / MRCR / LCR / CritPt numbers found.
- Coding (SWE-bench / DeepSWE / LiveCode / SciCode / SWE-Atlas): no verified public score found
- Cost per task / speed (if available): $0.14 per Intelligence Index task; 3.1 minutes per Intelligence Index task; 455 tok/s output speed; 4.69s time to first answer token; 115M output tokens on Intelligence Index.

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in `model-comparison.md`. Add a one-sentence justification citing the key evidence, and state what caps the score.

- **Tool use: 75/100.** Native tool calling supported; positioned for tool calls, coding agent subtasks, routing, extraction. Capped by absence of published Terminal-Bench / Tau3 / GDPval agentic-tool figures.
- **Reasoning: 70/100.** Artificial Analysis Intelligence Index 36 (Index ~36 sits just above the 20–35 mid band → 55–65, trending toward the 60+ → 90–100 frontier band); native reasoning mode. Capped by lack of published GPQA / HLE / CritPt individual numbers.
- **Context window: 98/100.** Verified 1M token context window (≥1M → 95–100).
- **Multimodal: 65/100.** Text + image input, text output (+image in → 60–70). OpenRouter listing also notes video/audio/PDF input, but AA confirms text + image; text-only output caps the top of the range.
- **Coding: 75/100.** Positioned for coding agent subtasks; reasoning model. Capped by absence of published SWE-bench / LiveCodeBench / DeepSWE figures.
- **Cost efficiency: 96/100.** $0.10/$0.50 per 1M tokens (very cheap; methodology: ~$0.10/$0.20 → 97–99). 96% cache discount. Closed weights, no free tier confirmed.
- **Overall Score: 77/100.** Mean of (75 + 70 + 98 + 65 + 75) / 5 = 76.6 → 77. Best-fit: low-cost reasoning agent for long-context document parsing, routing, and extraction; fast (3.1 min/task) and very cheap per task.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/nemotron-3.5-super-vl-120b-a12b)** — 2026-11-11
- Method: public internet research (Artificial Analysis model page, OpenRouter models.dev listing); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Artificial Analysis: Muse Ember — Intelligence Index 36](https://artificialanalysis.ai/models/muse-ember/)
  - [OpenRouter models.dev: Muse Ember — Meta, 1M context, $0.10/$0.50](https://openrouter.ai/models)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
