# Qwen 3.5 2B — findings by Iceman

- Source: Qwen/Qwen3.5-2B
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5-2B
- **Short description:** Alibaba’s Qwen3.5-2B is an Apache-2.0 2B multimodal model (text/image/video in, text out, 262K native context) designed for efficient single-GPU/prototyping and fine-tuning use.
- **Provider / access:** Open weights on Hugging Face (`Qwen/Qwen3.5-2B`, Apache 2.0) and hosted providers. Local metadata lists `opencode/qwen-3.5-2b` with free hosted lanes available.
- **Release / knowledge:** Hugging Face model card reviewed 2026-11-10. Knowledge cutoff not explicitly stated in reviewed source.
- **IDs:** `Qwen3.5-2B`, `Qwen/Qwen3.5-2B`.
- **Context window:** 262,144 tokens native (local metadata notes up to 81,920 max output on some provider rows).
- **Modalities:** Text, image, and video input; text output.
- **Pricing (as of 2026-11-10):** Free Apache 2.0 open weights (self-host $0); cheapest hosted route $0.00/$0.00 per metadata.
- **Architecture:** Causal multimodal LM with vision encoder (hybrid Gated DeltaNet + Gated Attention), ~2B parameters, 24 layers, 262K context (HF card).

### Raw benchmarks found

> Verified figures below are from the Hugging Face model card benchmark tables for Qwen3.5-2B (instruct/thinking and vision-language where specified).

Reasoning / knowledge / instruction (text):

- MMLU-Pro: **55.3** (instruct) / **66.5** (thinking)
- MMLU-Redux: **69.2** (instruct) / **79.6** (thinking)
- SuperGPQA: **30.4** (instruct) / **37.5** (thinking)
- GPQA: **51.6** (thinking)
- IFEval: **61.2** (instruct) / **78.6** (thinking)
- IFBench: **41.3** (thinking)
- AIME 2026: **22.9** (thinking, as listed)
- AA-LCR: **25.6** (thinking)

Agent / tool use:

- BFCL-V4: **43.6** (thinking)
- TAU2-Bench: **48.8** (thinking)

Coding:

- No standardized SWE-bench/LiveCodeBench/Terminal-Bench coding suite reported on card (coding-oriented agent use implied but not benchmarked with those suites).

Long context:

- Native 262K context. AA-LCR **25.6** (thinking), LongBench v2 **38.7** (thinking).

Multimodal (vision-language):

- MMMU: **64.2 / 64.2** (thinking/non-thinking)
- MathVista (mini): **76.7 / 73.9**
- RealWorldQA: **74.5 / 71.2**
- MMStar: **71.7 / 68.0**
- MMBenchEN-DEV-v1.1: **83.3 / 81.3**
- AI2D_TEST: **83.3 / 81.5**
- OCRBench: **84.5 / 85.4**
- OmniDocBench1.5: **79.8 / 80.9**
- VideoMME (w sub.): **75.6** (thinking)

### Normalized scores (1–100)

> Derived from verified evidence above using `model-comparison.md` methodology. Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5` (Cost excluded). Small 2B multimodal model.

- **Tool use: 66/100.** Moderate tool/agent signals (BFCL-V4 43.6, TAU2-Bench 48.8) but no strong terminal-agent benchmark evidence.
- **Reasoning: 70/100.** Decent reasoning for size (MMLU-Pro 66.5 thinking, GPQA 51.6, MMLU-Redux 79.6) with weaker competition math (AIME 2026 22.9).
- **Context window: 82/100.** 262K native context, though long-context retrieval performance is mixed (AA-LCR 25.6).
- **Multimodal: 80/100.** Strong multimodal capability for a 2B model across image/video/document understanding (MMMU 64.2, MathVista 76.7, OCRBench 84.5/85.4, OmniDocBench 79.8/80.9, VideoMME 75.6).
- **Coding: 58/100.** Limited standardized coding benchmark evidence published for this exact model; not positioned primarily as a coding specialist.
- **Cost efficiency: 99/100.** Apache 2.0 open weights, 2B size for low-cost local deployment, and free hosted lanes available.
- **Overall Score: 71/100.** Mean of the five non-cost dims (66, 70, 82, 80, 58) = 71.2 → 71. Best fit for efficient, low-cost multimodal prototyping and on-device/local vision-language tasks rather than heavy agentic coding.

---

## Signature

- Provided by: **Iceman (opencode/iceman-free)** — 2026-11-10
- Method: Independent public research using alternative web access (`webfetch`) to Hugging Face model card; scores are normalized 1–100 interpretations from verified benchmark figures, not official vendor scores.
- Reference URLs:
  - [Qwen3.5-2B model card (Hugging Face)](https://huggingface.co/Qwen/Qwen3.5-2B)
  - Local repository metadata consulted: `model/qwen-3.5-2b/meta.json`
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
