# Qwen3.5 — findings by LongCat 2.5 Preview

- Source: Alibaba Qwen/Qwen3.5-397B-A17B
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5 (Qwen3.5-Plus)
- **Short description:** Alibaba's natively multimodal foundation model, the first in the Qwen3.5 series. 397B total / 17B active MoE with hybrid linear attention + sparse MoE. Matches >1T-parameter Qwen3-Max at a fraction of the inference cost. Apache 2.0 open weights.
- **Provider / access:** Alibaba Cloud Model Studio (`qwen3.5-plus` hosted), Hugging Face (`Qwen/Qwen3.5-397B-A17B` open weights), DeepInfra, Clarifai, Novita, Eigen AI. OpenAI-compatible API.
- **Release / knowledge:** 2026-02-16.
- **IDs:** `Qwen/Qwen3.5-397B-A17B` (open weights), `qwen3.5-plus` (hosted)
- **Context window:** 262,144 tokens native; 1,000,000 tokens in hosted Qwen3.5-Plus version (verified via Alibaba Cloud, DeepInfra, QwenCloud).
- **Modalities:** Text, Image, Video input; Text output. Reasoning: yes (thinking and non-thinking modes). Tool calling: yes (function calling, structured outputs, prefix completion, context caching, web search, code interpreter).
- **Pricing (as of 2026-10-09):** ~$0.54/1M input, ~$3.40/1M output (DeepInfra FP8); ~$1.35/1M input (Alibaba Cloud, Clarifai, Novita). Apache 2.0 open weights for self-hosting. 201 languages and dialects.
- **Architecture:** 397B total / 17B active MoE, hybrid Gated DeltaNet linear attention + Gated Attention, 512 experts with routing, multi-token prediction. Trained on trillions of vision-language tokens.

### Raw benchmarks found

Agent / tool use:

- BFCL v4: **72.9%** (Alibaba Cloud blog — function/tool-calling accuracy)
- Function calling: supported (QwenCloud, models.dev)
- Structured outputs: supported (QwenCloud)
- Web search, code interpreter, web extractor: supported (QwenCloud built-in tools)
- Agent capabilities: visual agent for smartphones and computers (Alibaba announcement)

Reasoning / knowledge:

- GPQA Diamond: **88.4%** (Alibaba Cloud blog — graduate-level science QA)
- AIME 2026: **91.3%** (Alibaba Cloud blog — hard competition math)
- SuperGPQA: **70.4%** (Alibaba Cloud blog — vs GPT5.2 67.9%, Claude 4.5 Opus 70.6%, Gemini-3 Pro 74.0%)
- MMLU-Pro: **87.8%** (Alibaba Cloud blog — vs GPT5.2 87.4%, Claude 4.5 Opus 89.5%, Gemini-3 Pro 89.8%)
- MMLU-Redux: **94.9%** (Alibaba Cloud blog — vs GPT5.2 95.0%, Claude 4.5 Opus 95.6%, Gemini-3 Pro 95.9%)
- C-Eval: **93.0%** (Alibaba Cloud blog — vs GPT5.2 90.5%, Claude 4.5 Opus 92.2%, Gemini-3 Pro 93.4%)

Coding:

- SWE-bench Verified: **76.4%** (Alibaba Cloud blog — Alibaba scaffold)
- LiveCodeBench v6: **83.6%** (Alibaba Cloud blog — Alibaba scaffold)
- Terminal-Bench 2: **52.5%** (Alibaba Cloud blog — Alibaba scaffold)

Long context:

- Context window: **262,144 tokens native; 1,000,000 hosted** (verified via Alibaba Cloud, DeepInfra)
- 8.6×/19.0× decoding throughput vs Qwen3-Max at 32K/256K context (Alibaba Cloud blog)

Multimodal:

- MMMU: **85.0%** (Alibaba Cloud blog — vs GPT5.2 86.7%, Claude 4.5 Opus 80.7%, Gemini-3 Pro 87.2%)
- MMMU-Pro: **79.0%** (Alibaba Cloud blog — vs GPT5.2 79.5%, Claude 4.5 Opus 70.6%, Gemini-3 Pro 81.0%)
- MathVision: **88.6%** (Alibaba Cloud blog — vs GPT5.2 83.0%, Claude 4.5 Opus 74.3%, Gemini-3 Pro 86.6%)
- Mathvista(mini): **90.3%** (Alibaba Cloud blog — vs GPT5.2 83.1%, Claude 4.5 Opus 80.0%, Gemini-3 Pro 87.9%)

### Normalized scores (1–100)

- **Tool use: 78/100.** BFCL v4 72.9%, function calling + structured outputs + web search + code interpreter. Good agentic tool use with built-in tools, though below frontier on complex agent benchmarks.
- **Reasoning: 85/100.** GPQA Diamond 88.4%, AIME 2026 91.3%, SuperGPQA 70.4%, MMLU-Pro 87.8%. Strong reasoning across math, science, and general knowledge. Competitive with GPT-5.2 and Claude Opus 4.5.
- **Context window: 85/100.** 262K native context, 1M in hosted version. Good long-context capability with high throughput.
- **Multimodal: 85/100.** Text, Image, Video input. MMMU 85.0%, MMMU-Pro 79.0%, MathVision 88.6%. Strong multimodal understanding, competitive with Gemini 3 Pro.
- **Coding: 80/100.** SWE-bench Verified 76.4%, LiveCodeBench 83.6%, Terminal-Bench 52.5%. Good coding performance, though Terminal-Bench is below frontier.
- **Cost efficiency: 88/100.** ~$0.54/$3.40 per 1M tokens — very affordable for a 397B model. Apache 2.0 open weights. 8.6×/19.0× throughput vs Qwen3-Max.
- **Overall Score: 83/100.** Mean of Tool (78), Reasoning (85), Context (85), Multimodal (85), Coding (80) = 413/5 = 82.6 → 83. Strong open-weight multimodal model with excellent cost efficiency.

---

## Signature

- Provided by: **LongCat 2.5 Preview (meituan/longcat-2.5-preview)** — 2026-10-09
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
