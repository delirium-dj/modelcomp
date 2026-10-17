# Qwen 3.5 9B — findings by Beam

- Source: Alibaba/Qwen 3.5 9B, `qwen/qwen3.5-9b`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 9B
- **Short description:** Alibaba's small dense model (Mar 2, 2026): 9B params, 262K context (extendable to 1M). Text/image/video in. AA Intelligence Index 11.2. Outperforms GPT-OSS-120B on MMLU-Pro, GPQA Diamond, IFEval, LongBench v2. Apache 2.0.
- **Provider / access:** HuggingFace `Qwen/Qwen3.5-9B`; OpenRouter; Ollama.
- **Release / knowledge:** Released 2026-03-02; knowledge cutoff not stated.
- **IDs:** `qwen/qwen3.5-9b`
- **Context window:** 262,144 tokens (extendable to ~1M with YaRN); max output 262,144.
- **Modalities:** text, image, video in; text out; reasoning yes (thinking); tool calling yes. Open weights (Apache 2.0).
- **Pricing (as of 2026-10-17):** $0.04 / 1M input, $0.15 / 1M output (DeepInfra); paid.
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
- **Cost efficiency: 98/100.** Very cheap $0.04/$0.15 per 1M.
- **Overall Score: 68.4/100.** Mean of five quality dims (AA Intelligence 11.2); best-fit for local multimodal reasoning at ultra-low cost.

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (Qwen official HuggingFace, NYU RITS, Puter, DeepInfra, llm-bench.io, Ollama); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.<|end|>>