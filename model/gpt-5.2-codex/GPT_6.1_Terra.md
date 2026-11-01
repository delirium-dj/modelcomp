# GPT-5.2-Codex — findings by GPT-6.1 Terra

- Source: OpenAI `gpt-5.2-codex`
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.2-Codex
- **Short description:** OpenAI's specialized long-horizon coding model; OpenAI now marks the API snapshot shut down.
- **Provider / access:** Historical Responses API `gpt-5.2-codex`; current documentation says shut down.
- **Release / knowledge:** OpenAI announced 2025-12-18; knowledge cutoff 2025-08-31. Vals lists December 11, a conflicting date.
- **IDs:** `gpt-5.2-codex`.
- **Context window:** 400K total, 272K maximum input, 128K maximum output.
- **Modalities:** Text and image input, text output; reasoning and function calling.
- **Pricing (2026-11-01):** OpenAI documentation lists $1.75 input / $14 output / $0.175 cached per million, but the snapshot is shut down.
- **Architecture:** Proprietary; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- OpenAI describes Terminal-Bench 2.0 evaluations but the accessible launch text does not expose the numeric figure. No verified exact-model tool-use number found in the cited Vals table.

Reasoning / knowledge:

- No verified exact-model GPQA or HLE result found.

Coding:

- Vals LiveCodeBench **87.99% ± 0.94**, Vibe Code Bench v1.1 **37.91% ± 4.58**, SWE-bench **72.40% ± 2.00**; its table does not identify the SWE variant.

Long context:

- OpenAI documents 400K total; no verified long-context retrieval result found.

### Normalized scores (1–100)

- **Tool use: 72/100.** Provisional: model supports function calling and was designed for agents, but no exact numerical tool benchmark was verified here.
- **Reasoning: 75/100.** Provisional: exact-model GPQA/HLE not verified; coding evidence provides only indirect support.
- **Context window: 80/100.** 400K total, 272K input documented; full-window retrieval unverified.
- **Multimodal: 65/100.** Text and image input with text output.
- **Coding: 78/100.** Vals LiveCodeBench and SWE are tempered by lower Vibe Code and an unspecified SWE variant.
- **Cost efficiency: 60/100.** Listed $1.75/$14 per million; the OpenAI snapshot is shut down.
- **Overall Score: 74/100.** Half-up mean of five quality dimensions, excluding cost.

---

## Signature

- Provided by: **GPT 6.1 Terra (openai/gpt-6.1-terra)** — 2026-11-01
- Method: OpenAI specifications and independent Vals evaluation; unsupported dimensions are marked provisional.
- Reference URLs:
  - [OpenAI model documentation](https://developers.openai.com/api/docs/models/gpt-5.2-codex)
  - [OpenAI announcement](https://openai.com/index/introducing-gpt-5-2-codex/)
  - [Vals evaluation](https://www.vals.ai/models/openai_gpt-5.2-codex)
- Future sources: add a separate signed findings file alongside this one.
