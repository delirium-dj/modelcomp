# Beam 1.0 501B A23B — findings by GPT 5.6 Luna

- Source: Reflection (`reflection/Beam-1.0-501B-A23B`)
- Date: 2026-10-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Beam 1.0 501B A23B
- **Short description:** Reflection's open-weight sparse MoE model for coding, reasoning, long-horizon agents, and tool use. It is text-only and emphasizes token-efficient reasoning.
- **Provider / access:** Hugging Face weights; provider-agnostic model ID `reflection/beam-1.0-501b-a23b`. Models.dev lists Reflection, OpenCode, OpenRouter, Together AI, CoreWeave, and other routes; OpenCode exposes a free `beam-free` route.
- **Release / knowledge:** Models.dev lists release `2026-10-05`; the official model card gives a June 30, 2026 knowledge cutoff.
- **IDs:** `reflection/Beam-1.0-501B-A23B`; OpenCode route `beam-free`; OpenRouter route `reflection/beam-1.0-501b-a23b`.
- **Context window:** 1,048,576 tokens canonical; some providers expose 262,144. Models.dev lists a 131,072-token output limit for the canonical model.
- **Modalities:** Text in, text out; reasoning, tool calls, browsing, MCP integration, and structured output are supported. No image, audio, or video input.
- **Pricing (as of 2026-10-23):** Open weights under Apache-2.0. Models.dev lists free Reflection/OpenCode routes and paid routes including OpenRouter at $0.25/$1.00 per 1M input/output tokens and CoreWeave at $0.30/$1.00.
- **Architecture:** 501.3B total / 23.4B active sparse MoE, 256 experts, 52 layers, gated GQA with sliding-window attention. Apache-2.0.

### Raw benchmarks found

> Figures below are for the exact Beam checkpoint. Unless stated otherwise, they are from the official Reflection model card for the BF16 variant; the card also reports FP8 and NVFP4 results.

Agent / tool use:

- MCP Atlas: **80.8%** (official Reflection model card)
- BrowseComp with context management: **76.8%** (official Reflection model card)
- DeepSearchQA with context management: **80.5%** (official Reflection model card)
- HLE with tools: **51.1%** (official Reflection model card)
- Tau3 Banking: **36.1%** (official Reflection model card)

Reasoning / knowledge:

- AIME 2026: **97.7%** (official Reflection model card)
- GPQA Diamond: **90.6%** (official Reflection model card)
- HLE without tools: **36.0%** (official Reflection model card)
- SciCode: **49.2%** (official Reflection model card)
- AA Omniscience index: **10.8** (official Reflection model card)

Coding:

- SWE-bench Verified: **81.6%** (official Reflection model card; Hugging Face evaluation result)
- SWE-bench Pro v2-Hard: **76.5%** (official Reflection model card)
- Terminal-Bench 2.1: **80.1%** (official Reflection model card; Hugging Face evaluation result)
- LiveCodeBench: **88.3%** (official Reflection model card)
- DeepSWE v1.1: **43.3%** (official Reflection model card)
- SWE Atlas Codebase QnA: **31.8%** (official Reflection model card)

Long context:

- AA-LCR: **78.2%** (official Reflection model card)
- LongBench v2: **67.5%** (official Reflection model card)
- The official model card states a 1M-token context window; provider-specific limits can be lower.

Multimodal:

- No verified multimodal benchmark found. The official model card explicitly lists text as the supported modality.

### Normalized scores (1–100)

- **Tool use: 85/100.** MCP Atlas 80.8%, BrowseComp 76.8%, and DeepSearchQA 80.5% show strong agent/search performance; Tau3 Banking at 36.1% caps the score.
- **Reasoning: 90/100.** AIME 97.7% and GPQA Diamond 90.6% are excellent, while HLE without tools at 36.0% and AA Omniscience at 10.8 cap it below perfect.
- **Context window: 88/100.** The 1M-token model-card limit and AA-LCR 78.2% are strong; LongBench v2 at 67.5% and lower provider-specific windows cap the score.
- **Multimodal: 15/100.** Beam is explicitly text-only and has no verified image, audio, or video input capability.
- **Coding: 90/100.** SWE-bench Verified 81.6%, Terminal-Bench 2.1 80.1%, and LiveCodeBench 88.3% support a top-tier coding score; DeepSWE at 43.3% caps it.
- **Cost efficiency: 100/100.** The model is open-weight and has free Reflection/OpenCode routes, although paid hosted routes also exist.
- **Overall Score: 73.6/100.** A strong text-only coding and agent model; choose a multimodal model when visual input is required.

---

## Signature

- Provided by: **GPT 5.6 Luna (openai/gpt-5.6-luna)** — 2026-10-23
- Method: Independent checks of the official Reflection Hugging Face model card, Models.dev's exact model/provider record, OpenCode model documentation, and exact-name web search. Scores are normalized interpretations, not official vendor scores.
