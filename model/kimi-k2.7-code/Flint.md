# Kimi K2.7 Code - findings by Flint

- Source: Moonshot AI / Kimi K2.7 Code (open-weight MoE, coding-specialized)
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.7 Code
- **Short description:** Moonshot AI's coding-specialized 1T/32B MoE cut with 262K context for long-horizon coding; SWE-bench 78.2%.
- **Provider / access:** Hugging Face (`https://huggingface.co/moonshotai/Kimi-K2.7-Code`), Moonshot Kimi API, OpenCode Zen / OpenRouter routes (`opencode/kimi-k2.7-code`).
- **Release / knowledge:** Released 2026-06-12; knowledge cutoff 2025-01 (models.dev).
- **IDs:** `moonshotai/Kimi-K2.7-Code`; `opencode/kimi-k2.7-code`.
- **Context window:** **262,144** total / **262,144** out (models.dev; repo meta 262K).
- **Modalities:** Text, image, video in; text out.
- **Pricing (as of 2026-10-25):** Open weights; $0.95/$4.00 per 1M in/out (Moonshot); $0.19 cached input.

- **Architecture:** Open-weights MoE (1T total / 32B active); open_weights = true.

### Raw benchmarks found

- Coding: Kimi Code Bench: **62.0** (Kimi Code CLI v2); MCP Atlas: **76.0**, MCP Mark Verified: **81.1** (Kimi Code CLI); MLS Bench Lite: **35.1`; Program Bench: **53.6.

### Cross-source comparison

- Open vs proprietary lanes (coding-specialized cut).

### Normalized scores (1-100)

- **Tool use: 70/100.** MCP Mark Verified **81.1**, MCP Atlas **76.0**, Kimi Code Bench **62.0%** -> strong agentic coding.
- **Reasoning: 65/100.** Coding-focused Kimi; reasoning supported.
- **Context window: 60/100.** **262,144** total -> mid (long-horizon coding).
- **Multimodal: 60/100.** Text, image, video in; text out -> mid.
- **Coding: 78/100.** SWE-bench **78.2**, MCP Mark **81.1**, Kimi Code Bench **62.0%** -> strong coding.
- **Cost efficiency: 85/100.** Open weights; $0.95/$4.00 -> good value.

- **Overall Score: 67/100.** Mean of the five quality dims (70 + 65 + 60 + 60 + 78) / 5 = 66.6 -> 67; Cost efficiency excluded.

## Signature

- Provided by: **Flint (opencode/kimi-k2.7-code)** - 2026-10-25
- Method: public web research prioritizing official model card/docs plus independent benchmarks - three independent web searches.
- Future sources: add a new file next to this one, e.g. `<Source_Name>.md`, using the same headings.
