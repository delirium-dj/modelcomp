# Claude Fable 5.2 — findings by Nemotron 3.5 Super VL 120B A12B

- Source: Anthropic / Claude Fable 5.2
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5.2
- **Short description:** Anthropic's frontier proprietary reasoning model, released November 2026. Supports text and image input with text output, a 1M token context window, native tool calling, and structured output / JSON mode.
- **Provider / access:** Anthropic API; OpenRouter route `anthropic/claude-fable-5-2`; also served via Google Vertex, Amazon Bedrock, and Azure. Chat Completions and Responses API.
- **Release / knowledge:** Released 2026-11-09; knowledge cutoff not disclosed.
- **IDs:** `anthropic/claude-fable-5-2` (OpenRouter). No Free ID confirmed on OpenCode Zen.
- **Context window:** 1M tokens total; 128,000 max output. Verified via OpenRouter models.dev listing.
- **Modalities:** text + image in; text out; reasoning yes; tool calls yes; JSON mode / structured output yes.
- **Pricing (as of 2026-11-11):** $8.00 per 1M input tokens, $40.00 per 1M output tokens (Anthropic / Bedrock / Vertex / Azure via OpenRouter). Paid; expensive relative to the median ($2.00/$10.00). Cache discount 98%.
- **Architecture:** Proprietary; reasoning model; parameter count not disclosed by Anthropic.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the closest proxy as provisional — never invent values.

- Terminal-Bench: no verified public score found
- Tau3 / Tau2: no verified public score found
- Claw-Eval: no verified public score found
- GDPval / OSWorld / Automation: no verified public score found
- Reasoning (GPQA / HLE / MRCR / LCR / CritPt / Index): Artificial Analysis Intelligence Index 65 (v5.0.1). Incorporates AA-Briefcase v1.1, AutomationBench-AA, Terminal-Bench 4.0, FrontierCode 2.0, AA-Omniscience v1.1, GDP.pdf, HLE-Diamond, CritPt v2 (Hard Subset), Terminal-Bench-Science 0.1. No individual GPQA / HLE / MRCR / LCR / CritPt numbers found.
- Coding (SWE-bench / DeepSWE / LiveCode / SciCode / SWE-Atlas): no verified public score found
- Cost per task / speed (if available): $26.54 per Intelligence Index task; 44.4 minutes per Intelligence Index task; 103 tok/s output speed; 230.35s time to first answer token.

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in `model-comparison.md`. Add a one-sentence justification citing the key evidence, and state what caps the score.

- **Tool use: 80/100.** Native tool calling supported; Intelligence Index includes Terminal-Bench 4.0 and AutomationBench-AA agentic components. Capped by absence of published Terminal-Bench 2.1 / Tau3 / GDPval figures.
- **Reasoning: 85/100.** Artificial Analysis Intelligence Index 65 (frontier tier; Index 60+ maps to 90–100 per methodology); native reasoning mode. Capped by lack of published GPQA / HLE / CritPt individual numbers.
- **Context window: 98/100.** Verified 1M token context window (≥1M → 95–100). 128K max output noted as a caveat, not a score reduction.
- **Multimodal: 65/100.** Text + image input, text output (+image in → 60–70). No video/PDF/audio input or non-text output.
- **Coding: 80/100.** Intelligence Index includes FrontierCode 2.0 and Terminal-Bench coding components; frontier Anthropic reasoning model. Capped by absence of published SWE-bench / LiveCodeBench / DeepSWE figures.
- **Cost efficiency: 35/100.** $8.00/$40.00 per 1M tokens (paid; methodology maps $10/$50 → ~30). 98% cache discount mitigates repeat-prompt cost.
- **Overall Score: 82/100.** Mean of (80 + 85 + 98 + 65 + 80) / 5 = 81.6 → 82. Best-fit: frontier reasoning agent for long-context, multimodal document work; expensive for high-volume use.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/nemotron-3.5-super-vl-120b-a12b)** — 2026-11-11
- Method: public internet research (OpenRouter models.dev listing, Artificial Analysis model page, Anthropic launch post); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [OpenRouter: Anthropic Claude Fable 5.2 — pricing and specs](https://openrouter.ai/anthropic/claude-fable-5.2)
  - [Artificial Analysis: Claude Fable 5.2 — Intelligence Index 65](https://artificialanalysis.ai/models/claude-fable-5-2/)
  - [Anthropic: Claude Fable 5 and Claude Mythos 5 launch post](https://www.anthropic.com/news/claude-fable-5-mythos-5)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
