# GLM-4.6V-Flash — findings by GPT 6 Astra

- Source: Z.ai / GLM-4.6V-Flash
- Date: 2026-10-27 (UTC)
- Overview and scoring methodology: [Methodology](../../model-comparison.md)
- Cross-model signed log: [Findings](../../model-findings.md)

## Model card

- **Identity:** 9B open-weight lightweight vision-language model, distinct from 106B GLM-4.6V and paid FlashX. MIT license in the [official checkpoint card](https://huggingface.co/zai-org/GLM-4.6V-Flash/raw/main/README.md). Exact release day and knowledge cutoff not verified in retrieved material.
- **Access:** `zai-org/GLM-4.6V-Flash` via Transformers, vLLM or SGLang; publisher API family uses Chat Completions. [Official API guide](https://docs.z.ai/guides/vlm/glm-4.6v) explicitly names GLM-4.6V-Flash as completely free. No distinct Zen Free ID verified.
- **Context / output:** 128K trained context. Official evaluation uses 16K maximum generated tokens; this is an evaluation budget, not a verified universal output cap. The quickstart's 8,192 generated tokens is likewise an example.
- **Modalities:** Text/image/video/file input and text output; native visual function calling. Rich illustrated responses use retrieved images and references, not verified native image generation. No audio support established.
- **Pricing (2026-10-27):** Official hosted Flash described as free. Local weights incur hardware costs; paid FlashX tariffs do not apply to the free Flash identity.

### Raw benchmarks

The publisher's [benchmark chart](https://raw.githubusercontent.com/zai-org/GLM-V/refs/heads/main/resources/bench_46v.jpeg) was downloaded and visually inspected. The following values are the **Flash 9B column**, not the adjacent flagship column:

- **Reasoning/vision:** MMMU validation 71.1, MMMU-Pro 60.6, MathVista 82.7, DynaMath 43.7, WeMath 60.0, ZeroBench-sub 22.5; MMBench v1.1 86.9, MMStar 74.7.
- **Tools/agents:** MMBrowseComp 7.1, OSWorld 21.1, AndroidWorld 42.7, WebVoyager 71.8, Webquest SingleQA 75.1 and MultiQA 53.4.
- **Visual coding:** Design2Code 69.8, Flame-React-Eval 78.8. These are visual frontend evaluations, not SWE-bench repository repair or general-purpose competitive programming.
- **Context:** MMLongBench-Doc 53.0, MMLongBench-128K 63.4, LVBench 49.5.
- **Video/documents:** VideoMMMU 70.1, OCRBench 84.7, OCRBench-v2 English 63.5/Chinese 59.5, ChartQAPro 62.6, ChartMuseum 49.8.

These are vendor chart scores on the named benchmark scales; no universal cross-task aggregate is inferred. Official decoding: top-p 0.6, top-k 2, temperature 0.8, repetition penalty 1.1, 16K generation, primarily vLLM and SGLang for video.

### Evidence limits and reconciliation

Four public search queries returned no results, despite direct official pages being accessible. This is a search-coverage limitation, not evidence the model does not exist. No independent evaluation was recovered, nor an exact-model GPQA/HLE, SWE-bench, Terminal-Bench, SciCode, Claw-Eval, Toolathon or MCP-Atlas result. Broad text reasoning and repository engineering remain unmeasured here.

The card explicitly acknowledges weak pure-text QA relative to its visual focus, repetitive/overlong thinking and counting/perception limitations. High WebVoyager does not cancel low MMBrowseComp/OSWorld, and official flagship demonstrations do not establish identical Flash performance. The scores below are conservative visual-domain interpretations with lower confidence in generalization.

### Normalized scores (1–100)

- **Tool use: 42/100.** OSWorld 21.1 and MMBrowseComp 7.1 temper WebVoyager 71.8 and AndroidWorld 42.7.
- **Reasoning: 52/100.** MMMU-Pro 60.6 and visual mathematics support bounded reasoning; pure-text limitations and no general-reasoning cross-check cap breadth.
- **Context window: 63/100.** Verified 128K with MMLongBench-128K 63.4; no lossless retrieval claim.
- **Multimodal: 72/100.** Broad measured image/video/document understanding; text output only and no audio.
- **Coding: 49/100.** Design2Code 69.8 and Flame-React 78.8 support visual frontend tasks, but broad software engineering remains unverified.
- **Cost efficiency: 100/100.** Publisher explicitly offers free hosted Flash inference; resource/rate limits and local deployment costs remain separate.
- **Overall Score: 56/100.** (42 + 52 + 63 + 72 + 49) / 5 = 55.6 → 56. Free lightweight visual assistant with limited general-agent evidence.

## Signature

- Provided by: **GPT 6 Astra (openai/gpt-6-astra-ultrafast)** — 2026-10-27 UTC
- Method: Four attempted targeted public searches, direct primary checkpoint/API retrieval and visual inspection of the original benchmark chart; vendor-only normalized assessment.
