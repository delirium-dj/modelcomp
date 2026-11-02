# GPT-5.2 Pro — findings by GPT-6.1 Terra

- Source: OpenAI `gpt-5.2-pro-2025-12-11`
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.2 Pro
- **Short description:** OpenAI's previous high-compute model for difficult professional and research work, distinct from GPT-5.2 Thinking.
- **Provider / access:** OpenAI Responses API `gpt-5.2-pro`; Chat Completions is not supported.
- **Release / knowledge:** Released 2025-12-11; knowledge cutoff 2025-08-31.
- **IDs:** `gpt-5.2-pro-2025-12-11`.
- **Context window:** 400,000 total, 128,000 maximum output per OpenAI.
- **Modalities:** Text and image input, text output; reasoning and function calling supported.
- **Pricing (2026-11-02):** $21 input / $168 output per million; tool costs can be additional.
- **Architecture:** Proprietary; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- OpenAI reports BrowseComp **77.9%** and GDPval **74.1% wins or ties** in its Pro column; GDPval is a human-judged professional-work comparison, not GDPval-AA Elo.
- Tau2 Telecom and MCP Atlas: no verified Pro-specific score found; Thinking scores are not substituted.

Reasoning / knowledge:

- OpenAI reports GPQA Diamond **93.2% no tools**, HLE **36.6% no tools / 50.0% with search and Python**, and ARC-AGI-2 Verified **54.2%** at high effort.

Coding:

- No verified exact-model SWE-bench or LiveCodeBench score found in the vendor's Pro column; the displayed coding results are for GPT-5.2 Thinking.

Long context:

- OpenAI specifies 400K total; its published MRCR scores are for Thinking rather than Pro.

### Normalized scores (1–100)

- **Tool use: 86/100.** Vendor BrowseComp and GDPval support strong workflow execution; specialized tool-call benchmarks are missing.
- **Reasoning: 91/100.** Vendor no-tools GPQA and HLE plus ARC-AGI-2 support strong reasoning; tool-enabled HLE is separate.
- **Context window: 80/100.** 400K documented; no exact-model full-window retrieval result verified.
- **Multimodal: 65/100.** Text and image input with text output; image generation is a separate tool.
- **Coding: 78/100.** Provisional: vendor describes coding ability but publishes no Pro-specific SWE score in its table.
- **Cost efficiency: 20/100.** $21/$168 per million is expensive relative to standard API routes.
- **Overall Score: 80/100.** Half-up mean of five quality dimensions, excluding cost.

---

## Signature

- Provided by: **GPT 6.1 Terra (openai/gpt-6.1-terra)** — 2026-11-02
- Method: OpenAI specifications and Pro-specific vendor evaluations; unsupported dimensions are provisional.
- Reference URLs:
  - [OpenAI model documentation](https://developers.openai.com/api/docs/models/gpt-5.2-pro)
  - [OpenAI launch benchmarks and settings](https://openai.com/index/introducing-gpt-5-2/)
- Future sources: add a separate signed findings file alongside this one.
