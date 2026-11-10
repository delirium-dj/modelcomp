# Qwen 3.5 0.8B — findings by Iceman

- Source: Qwen/Qwen3.5-0.8B
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5-0.8B
- **Short description:** Alibaba’s Qwen3.5-0.8B is an Apache-2.0 0.8B multimodal model (text/image/video in, text out, 262K native context) for edge/prototyping use, with a documented tendency toward thinking-mode loops at this size.
- **Provider / access:** Open weights on Hugging Face (`Qwen/Qwen3.5-0.8B`, Apache 2.0) and hosted providers. Local metadata lists `opencode/qwen-3.5-0.8b` with free hosted routes and open weights.
- **Release / knowledge:** Hugging Face model card reviewed 2026-11-10. Knowledge cutoff not explicitly stated in reviewed source.
- **IDs:** `Qwen3.5-0.8B`, `Qwen/Qwen3.5-0.8B`.
- **Context window:** 262,144 tokens native (local metadata notes up to 81,920 max output on some provider rows).
- **Modalities:** Text, image, and video input; text output.
- **Pricing (as of 2026-11-10):** Free Apache 2.0 open weights (self-host $0); free hosted routes ($0.00/$0.00) per metadata.
- **Architecture:** Causal multimodal LM with vision encoder (hybrid Gated DeltaNet + Gated Attention), ~0.8B parameters, 24 layers, 262K context (HF card).

### Raw benchmarks found

> Verified figures below are from the Hugging Face model card benchmark tables for Qwen3.5-0.8B (instruct/thinking and vision-language where specified).

Reasoning / knowledge / instruction (text):

- MMLU-Pro: **29.7** (instruct) / **42.3** (thinking)
- MMLU-Redux: **48.5** (instruct) / **59.5** (thinking)
- SuperGPQA: **16.9** (instruct) / **21.3** (thinking)
- GPQA: **11.9** (thinking)
- IFEval: **52.1** (instruct) / **44.0** (thinking)
- IFBench: **21.0** (thinking)
- AA-LCR: **4.7** (thinking)

Agent / tool use:

- BFCL-V4: **25.3** (thinking)
- TAU2-Bench: **11.6** (thinking)

Coding:

- No standardized SWE-bench/LiveCodeBench/Terminal-Bench coding suite reported on card.

Long context:

- Native 262K context. AA-LCR **4.7** (thinking), LongBench v2 **26.1** (thinking).

Multimodal (vision-language):

- MMMU: **49.0 / 47.4** (thinking/non-thinking)
- MathVista (mini): **62.2 / 58.6**
- RealWorldQA: **63.4 / 61.6**
- MMStar: **58.3 / 55.9**
- MMBenchEN-DEV-v1.1: **69.9 / 68.0**
- AI2D_TEST: **69.9 / 68.7**
- OCRBench: **74.5 / 79.1**
- OmniDocBench1.5: **61.0 / 70.6**
- VideoMME (w sub.): **63.8** (thinking)

### Normalized scores (1–100)

> Derived from verified evidence above using `model-comparison.md` methodology. Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5` (Cost excluded). Very small 0.8B multimodal edge model.

- **Tool use: 42/100.** Weak tool/agent benchmark performance (BFCL-V4 25.3, TAU2-Bench 11.6) and no terminal-agent evidence.
- **Reasoning: 48/100.** Limited reasoning/knowledge for this size (MMLU-Pro 42.3 thinking, GPQA 11.9, MMLU-Redux 59.5) with very weak long-context reasoning retrieval.
- **Context window: 70/100.** 262K native context supported, but poor long-context retrieval/effectiveness signals (AA-LCR 4.7).
- **Multimodal: 66/100.** Usable multimodal capability for a 0.8B model (MMMU 49.0, MathVista 62.2, OCRBench 74.5/79.1, OmniDocBench 61.0/70.6, VideoMME 63.8), though far below larger peers.
- **Coding: 40/100.** No standardized coding benchmark evidence reported; not suited for coding-agent tasks.
- **Cost efficiency: 100/100.** Apache 2.0 open weights, extremely small footprint, and free hosted/self-host options.
- **Overall Score: 53/100.** Mean of the five non-cost dims (42, 48, 70, 66, 40) = 53.2 → 53. Best fit for ultra-low-cost edge/local multimodal prototyping and lightweight perception tasks, not for reasoning, coding, or agentic workflows (and thinking mode may loop per card notes).

---

## Signature

- Provided by: **Iceman (opencode/iceman-free)** — 2026-11-10
- Method: Independent public research using alternative web access (`webfetch`) to Hugging Face model card; scores are normalized 1–100 interpretations from verified benchmark figures, not official vendor scores.
- Reference URLs:
  - [Qwen3.5-0.8B model card (Hugging Face)](https://huggingface.co/Qwen/Qwen3.5-0.8B)
  - Local repository metadata consulted: `model/qwen-3.5-0.8b/meta.json`
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
