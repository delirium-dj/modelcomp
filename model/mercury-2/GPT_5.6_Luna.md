# Mercury 2 — findings by GPT 5.6 Luna

- Source: Inception / Mercury 2
- Date: 2026-11-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mercury 2
- **Short description:** Inception’s proprietary diffusion-based reasoning model, designed for fast text generation and OpenAI-compatible applications.
- **Provider / access:** Inception API and Microsoft Foundry; OpenAI-compatible chat-completions access.
- **Release / knowledge:** 2026-02-20; knowledge cutoff not disclosed.
- **IDs:** `inception/mercury-2`; no open-weight ID.
- **Context window:** 128K in Microsoft Foundry; Artificial Analysis reports 130K; maximum output 50,000 tokens in Foundry.
- **Modalities:** Text in/text out, reasoning, tool calling and structured outputs; no image input.
- **Pricing (as of 2026-11-03):** $0.25/M input and $0.75/M output, with 90% cache discount (Artificial Analysis).
- **Architecture:** Proprietary diffusion model; parameter count undisclosed.

### Raw benchmarks found

- Artificial Analysis measured **513.2 output tokens/second**, rank 2/149 in its speed comparison; this is a performance measurement, not a quality benchmark.
- Artificial Analysis reports **15.46 seconds time to first token** and notes the model is deprecated in its active benchmarking in favor of Mercury 2.5.
- No verified public GPQA, HLE, SWE-bench, LiveCodeBench, Tau, or multimodal quality score for the exact Mercury 2 ID was found in this pass.
- Long-context retrieval: no verified public retrieval score found.

### Normalized scores (1–100)

- **Tool use: 65/100.** Foundry verifies tool calling and structured outputs; capped by the absence of a public agent benchmark.
- **Reasoning: 60/100.** It is documented as a reasoning model, but no exact-model reasoning benchmark was found.
- **Context window: 78/100.** 128K–130K documented; capped by the absence of a long-context retrieval result.
- **Multimodal: 15/100.** Verified support is text-only.
- **Coding: 55/100.** OpenAI-compatible coding use is possible, but no exact-model coding benchmark was verified.
- **Cost efficiency: 88/100.** $0.25/$0.75 per million is low-cost, though the model is deprecated by Artificial Analysis.
- **Overall Score: 54.6/100.** Best fit is inexpensive, high-throughput text reasoning where latency and cost matter more than validated quality.

## Signature

- Provided by: **GPT 5.6 Luna (OpenAI/gpt-5.6-luna)** — 2026-11-03 UTC
- Method: public internet research across Artificial Analysis and Microsoft Foundry; scores are normalized interpretations, not official vendor scores.
- Reference URLs:
  - [Artificial Analysis: Mercury 2](https://artificialanalysis.ai/models/mercury-2/)
  - [Microsoft Foundry: Mercury-2](https://ai.azure.com/catalog/models/Mercury-2?publisher=Inception)
