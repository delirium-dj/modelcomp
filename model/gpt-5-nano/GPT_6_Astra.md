# GPT-5 Nano — findings by GPT 6 Astra

- Source: OpenAI / GPT-5 Nano
- Date: 2026-10-08 (UTC)
- [Overview and scoring methodology](../../model-comparison.md)
- [Cross-model signed log](../../model-findings.md)

## Model card

- **Name:** GPT-5 Nano.
- **Short description:** Small reasoning model for inexpensive classification, extraction and summarization.
- **Provider / access:** OpenAI Responses and Chat Completions APIs.
- **Release / knowledge:** August 7, 2025; May 31, 2024 knowledge cutoff.
- **IDs:** `gpt-5-nano`, `gpt-5-nano-2025-08-07`; no verified Free Zen ID.
- **Context window:** 400,000 total; launch documentation specifies 272,000 maximum input and 128,000 reasoning/output tokens.
- **Modalities:** Text/image input, text output; reasoning, function calling, structured outputs. No native audio/video API input.
- **Pricing (as of 2026-10-08):** $0.05 input / $0.005 cached input / $0.40 output per million tokens; paid API, free account tier unsupported.
- **Architecture:** Proprietary; parameter count and dense/MoE design undisclosed.

Sources: [model documentation](https://developers.openai.com/api/docs/models/gpt-5-nano), [launch and input limit](https://openai.com/index/introducing-gpt-5-for-developers/).
**Lifecycle:** Deprecated June 11, 2026; scheduled API shutdown December 11, 2026. [Official deprecations](https://developers.openai.com/api/docs/deprecations).

### Raw benchmarks found

Vendor launch results at **high reasoning effort**:
- **Tools:** Tau2 airline **41.0%**, retail **62.3%**, telecom **35.5%**.
- **Reasoning:** GPQA Diamond **71.2%**, HLE **8.7%**, AIME 2025 **85.2%**; no tools.
- **Coding:** SWE-bench Verified **54.7%** (23 of 500 tasks omitted); Aider polyglot diff **48.4%**.
- **Vision:** MMMU **75.6%**, MMMU-Pro **62.6%**.
- **Long context:** Two-needle MRCR **43.2% at 128k / 34.9% at 256k**; BrowseComp Long Context **80.4% / 68.4%** at those lengths.
- **Missing:** Terminal-Bench 2.1, Tau3, GDPval-AA, Claw-Eval, Toolathlon, LCR, CritPt, Omniscience, LiveCodeBench, SciCode and DeepSWE: no verified public score found in inspected sources.

[Benchmark table and harness notes](https://openai.com/index/introducing-gpt-5-for-developers/). These vendor results are not independent replications; video-frame evaluation does not establish native video input.

### Normalized scores (1–100)

- **Tool use: 53/100.** Uneven Tau2 performance limits reliability for complex agents.
- **Reasoning: 62/100.** GPQA is midrange and HLE remains below 10%.
- **Context window: 72/100.** Large advertised window, substantially weakened by measured retrieval loss.
- **Multimodal: 65/100.** Verified image understanding; text-only output.
- **Coding: 60/100.** Moderate SWE-bench and Aider performance, below strong engineering models.
- **Cost efficiency: 98/100.** Extremely low token pricing, although reasoning consumes billed output tokens.
- **Overall Score: 62/100.** Half-up mean: (53 + 62 + 72 + 65 + 60) / 5 = 62.4. Best fit: inexpensive bounded text/image tasks.

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-08
- Method: Fresh official documentation and vendor benchmark research; scores are normalized interpretations, not official scores.
- Future sources: Add a separate signed report alongside this file.

