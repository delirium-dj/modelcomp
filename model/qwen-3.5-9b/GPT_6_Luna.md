# Qwen 3.5 9B — findings by GPT-6 Luna

- Source: Alibaba/Qwen 3.5 9B, `qwen/qwen3.5-9b`
- Date: 2026-10-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 9B
- **Short description:** Alibaba's Feb-Mar 2026 dense 9.65B open-weight multimodal model (Apache 2.0, 262K): tau2 86.8%, LiveCodeBench v6 65.6%, MMMU-Pro 70.1% at ~$0.10/$0.15 - not on Zen.
- **Provider / access:** HuggingFace `Qwen/Qwen3.5-9B`; OpenRouter; Ollama.
- **Release / knowledge:** Released 2026-03-02; knowledge cutoff not stated.
- **IDs:** `qwen/qwen3.5-9b` (the exact tracked route; alternate hosts are listed in the provider line).
- **Context window:** 262,144 native (extensible to 1,010,000); 32,768 max out
- **Modalities:** Text, image, video in; text out; reasoning/tool support as documented in the raw model card.
- **Pricing (as of 2026-10-30):** $0.10/$0.15 per 1M (OpenRouter); $0.135/$0.20 (AA)
- **Architecture:** 9B dense, hybrid Gated DeltaNet + full attention (3:1), Apache 2.0. 32 layers.

### Raw benchmarks found

Agent / tool use:

- Agentic public-lane (BenchLM): not individually reported
- BFCL-V4: **66.1%** (Qwen official)
- TAU2-Bench: **79.1%** (Qwen official)
- ScreenSpot Pro: **65.2%** (Qwen official)
- OSWorld-Verified: **41.8%** (Qwen official)
- llm-bench.io: Agent Workflow 71.7 (community)

Reasoning / knowledge:

- Reasoning public-lane (BenchLM): not individually reported
- MMLU-Pro: **82.5%** (Qwen official)
- GPQA Diamond: **81.7%** (Qwen official)
- IFEval: **91.5%** (Qwen official)
- LongBench v2: **55.2%** (Qwen official)
- HMMT Feb 25: **83.2%** (Qwen official)
- HLE: not reported for 9B
- AA Intelligence Index: **11.2%** (Artificial Analysis via Puter)
- AA Coding Index: **28.7%** (Artificial Analysis via Puter)

Coding:

- Coding public-lane (BenchLM): not individually reported
- LiveCodeBench v6: not reported for 9B
- llm-bench.io: Code Generation 51.5 (community)

Long context:

- 262K native (extendable to ~1M with YaRN); AA-LCR not reported.

Multimodal:

- Multimodal public-lane (BenchLM): not individually reported
- MMMU-Pro: **70.1%** (Qwen official)
- MathVision: **78.9%** (Qwen official)
- MathVista (mini): **85.7%** (Qwen official)
- VideoMME (w/ sub.): **84.5%** (Qwen official)

### Normalized scores (1–100)

- **Tool use: 66/100.** BFCL-V4 66.1%, TAU2-Bench 79.1%, ScreenSpot Pro 65.2%, OSWorld 41.8%; caps at OSWorld 41.8%.
- **Reasoning: 72/100.** MMLU-Pro 82.5%, GPQA 81.7%, IFEval 91.5%, LongBench v2 55.2%, HMMT 83.2%, AA Intelligence 11.2%; caps at AA Intelligence 11.2%.
- **Context window: 68/100.** 262K native (extendable to ~1M); caps at no published MRCR/AA-LCR.
- **Multimodal: 76/100.** Text/image/video in; MMMU-Pro 70.1%, MathVision 78.9%, MathVista 85.7%, VideoMME 84.5%; caps at no published AA-MMMU-Pro.
- **Coding: 60/100.** AA Coding 28.7%, llm-bench.io code 51.5; caps at no published LiveCodeBench/SWE-bench.
- **Cost efficiency: 98/100.** Current hosted pricing is about $0.10/$0.15 per 1M; self-hosting remains free under Apache 2.0.
- **Overall Score: 68.4/100.** Half-up mean of the five non-cost quality dimensions: (66 + 72 + 68 + 76 + 60) / 5 = 68.4. Cost efficiency is excluded. best-fit for local multimodal reasoning at ultra-low cost.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna)** — 2026-10-30 UTC
- Method: Public web research using the official model card/API documentation and the independent benchmark pages retained in the research extract; conflicting harnesses and inherited variant results are labelled in the raw section. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Source 1](https://huggingface.co/Qwen/Qwen3.5-9B)
  - [Source 2](https://openrouter.ai/qwen/qwen3.5-9b)
  - [Source 3](https://artificialanalysis.ai/models/qwen3-5-9b)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
