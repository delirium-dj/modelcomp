# Qwen3.8-Flash-Next — findings by LongCat 2.5 Preview

- Source: Alibaba Qwen/Qwen3.8-Flash-Next
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8-Flash-Next
- **Short description:** Open-weight multimodal MoE model from Alibaba's Qwen team, previewing the Qwen4 architecture. 125B total / 6B active parameters with 51B N-gram embedding. Extremely cost-efficient — matches 397B predecessor at 1/9 training FLOPs.
- **Provider / access:** QwenCloud (`qwen3.8-flash` production endpoint), Hugging Face (`Qwen/Qwen3.8-Flash-Next` open weights), Alibaba Cloud Model Studio. OpenAI and Anthropic API compatible.
- **Release / knowledge:** 2026-08-26.
- **IDs:** `Qwen/Qwen3.8-Flash-Next` (open weights), `qwen3.8-flash` (hosted production)
- **Context window:** 262,144 tokens native; extensible to 1,000,000 with YaRN (verified via Hugging Face, QwenCloud, DataCamp).
- **Modalities:** Text, Image, Video input; Text output. Reasoning: yes (thinking enabled by default, 262K max reasoning budget). Tool calling: yes (function calling, structured outputs, prefix completion, context caching).
- **Pricing (as of 2026-10-09):** ~$0.15–0.16/1M input, ~$0.47/1M output (QwenCloud). Cached input ~$0.014–0.016/1M. Open weights for self-hosting. Promotional rates as low as 30% of standard.
- **Architecture:** 125B total / 6B active MoE + 51B N-gram embedding table. Gated DeltaNet linear attention, Qwen Sparse Attention, Gated Residual (4 parallel branches), Muon optimizer. 512 experts with top-10 routing, 1 shared expert. Vision encoder for multimodal input.

### Raw benchmarks found

Agent / tool use:

- Agentic Index: **0.56 / #2** (Artificial Analysis — ApX)
- LiveBench Agentic: **0.62 / #8** (ApX)
- Toolathlon Verified: **73.5** (B.AI Doc)
- CoWorkBench: **73.9** (B.AI Doc)
- Function calling: supported (QwenCloud, models.dev)
- Structured outputs: supported (QwenCloud)
- WebDev Arena: **1626 / #8** (ApX)

Reasoning / knowledge:

- AA Intelligence Index: **39.8 / #45** (Artificial Analysis, BenchLeader)
- HLE: **35.9%** (Hugging Face — vs Qwen3.7-Plus 34.7%, DeepSeek-V4-Flash 33.8%, Claude-Opus-4.6 40.0%)
- GPQA: **0.917 / #18** (ApX)
- LiveBench: **76.2% / #27** (BenchLeader)
- LiveBench Language: **74.6% / #46** (BenchLeader)
- LiveBench Instruction Following: **77.1% / #5** (BenchLeader)
- LiveBench Global: **0.76 / #20** (ApX)

Coding:

- SWE-bench Pro: **62.5%** (Hugging Face — vs Qwen3.8-27B 61.7%, Qwen3.7-Plus 55.8%, DeepSeek-V4-Flash 56.0%, Claude-Opus-4.6 53.4%)
- DeepSWE 1.1: **58.7%** (Hugging Face — vs Qwen3.8-27B 42.2%, Qwen3.7-Plus 16.5%, DeepSeek-V4-Flash 54.4%)
- SWE-bench Multilingual: **81.0%** (Hugging Face — vs Qwen3.8-27B 73.8%, Qwen3.7-Plus 75.8%, Claude-Opus-4.6 77.5%)
- NL2Repo-Bench: **48.1%** (Hugging Face — vs Qwen3.8-27B 42.3%, Qwen3.7-Plus 41.1%, DeepSeek-V4-Flash 54.2%, Claude-Opus-4.6 47.6%)
- LiveCodeBench v6: **91.9%** (Hugging Face — vs Qwen3.8-27B 90.3%, Qwen3.7-Plus 89.6%, DeepSeek-V4-Flash 90.6%, Claude-Opus-4.6 88.8%)
- Coding index (BenchLeader): **70**

Long context:

- Context window: **262,144 tokens native; 1,000,000 with YaRN** (verified via Hugging Face, QwenCloud)
- AA-LCR: **79.7% / #73** (BenchLeader)
- 8.6× prefill throughput vs Qwen3.7-Plus at 1M tokens (DataCamp)

Multimodal:

- MMMU-Pro: **79.8% / #48** (BenchLeader)
- ClawEval-MM: **64.4** (Hugging Face — vs Qwen3.8-27B 60.4, Qwen3.7-Plus 56.9, DeepSeek-V4-Flash 60.1, Claude-Opus-4.6 54.7)
- ERQA: **72.3** (Hugging Face — vs Qwen3.8-27B 65.5, Qwen3.7-Plus 69.8, DeepSeek-V4-Flash 40.8)
- LVBench: **76.6** (Hugging Face — vs Qwen3.8-27B 72.4, Qwen3.7-Plus 76.2, DeepSeek-V4-Flash 63.0)
- RealWorldQA: **88.5** (Hugging Face — vs Qwen3.8-27B 85.9, Qwen3.7-Plus 86.9, DeepSeek-V4-Flash 73.9)
- MathVision: **90.6** (without CI, Hugging Face)

### Normalized scores (1–100)

- **Tool use: 82/100.** Agentic Index #2, Toolathlon 73.5, CoWorkBench 73.9, function calling + structured outputs. Strong agentic tool use, though reported brittleness on very long agent chains.
- **Reasoning: 78/100.** AA Intelligence Index 39.8, HLE 35.9%, GPQA 0.917, LiveBench 76.2%. Good general reasoning, trails frontier models on hardest reasoning tasks.
- **Context window: 82/100.** 262K native context, 1M with YaRN extension. Good long-context capability, though native window is smaller than some competitors.
- **Multimodal: 85/100.** Text, Image, Video input. MMMU-Pro 79.8%, LVBench 76.6%, RealWorldQA 88.5%. Strong multimodal understanding across vision and video.
- **Coding: 82/100.** SWE-bench Pro 62.5%, DeepSWE 58.7%, SWE-bench Multilingual 81.0%, LiveCodeBench 91.9%. Strong coding, competitive with Claude Opus 4.6 on several benchmarks.
- **Cost efficiency: 93/100.** ~$0.15-0.16/$0.47 per 1M tokens — among the cheapest capable models. Open weights for self-hosting. 1/9 training cost of predecessor.
- **Overall Score: 82/100.** Mean of Tool (82), Reasoning (78), Context (82), Multimodal (85), Coding (82) = 409/5 = 81.8 → 82. Exceptional value — near-frontier capability at a fraction of the cost.

---

## Signature

- Provided by: **LongCat 2.5 Preview (meituan/longcat-2.5-preview)** — 2026-10-09
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
