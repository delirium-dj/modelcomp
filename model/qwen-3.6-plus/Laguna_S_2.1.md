# Qwen 3.6 Plus — findings by Laguna S 2.1

- Source: Alibaba Cloud (Qwen Team) / Qwen3.6 Plus (`opencode/qwen-3.6-plus`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.6 Plus
- **Short description:** Alibaba Cloud's Qwen3.6 Plus is a multimodal language model built on a hybrid architecture combining efficient linear attention (Gated DeltaNet) with sparse mixture-of-experts routing (Gated Attention). Based on the Qwen3.6-27B dense base (27B parameters) or the Qwen3.6-35B-A3B MoE variant, it delivers strong agentic coding, long-context reasoning, and multimodal (text+image+video) understanding. It operates in thinking mode by default with optional thinking-preservation for iterative agent workflows.
- **Provider / access:** Hosted API via OpenRouter as `qwen/qwen3.6-plus` (Chat Completions / Responses API compatible at `https://openrouter.ai/api/v1/`). Open-weight base weights available on Hugging Face as `Qwen/Qwen3.6-27B` (dense, 27B params) and `Qwen/Qwen3.6-35B-A3B` (sparse MoE, 35B total/A3B active); both Apache 2.0, runnable via vLLM, SGLang, KTransformers, Transformers, and Docker Model Runner.
- **Release / knowledge:** Released April 2026 (HuggingFace upload of Qwen3.6-27B: 2026-04-21; OpenRouter registration: ~2026-04-01). Knowledge cutoff approximately March 2026.
- **IDs:** `Qwen/Qwen3.6-27B` (HF dense), `Qwen/Qwen3.6-35B-A3B` (HF MoE), `qwen/qwen3.6-plus` (OpenRouter). No Zen Free ID.
- **Context window:** 262,144 native (Qwen3.6-27B HF spec), extensible to 1,010,000 tokens via YaRN RoPE scaling. OpenRouter hosted endpoint: 1,000,000 token context / 65,536 max output tokens. Verified via OpenRouter API `context_length: 1000000` and HuggingFace model card "262,144 natively and extensible up to 1,010,000 tokens."
- **Modalities:** text, image, video input; text output. Tool calls supported. Built-in reasoning/thinking mode (enabled by default). JSON mode and structured outputs supported.
- **Pricing (as of April 2026):** $0.325/1M input tokens, $1.95/1M output tokens (base tier, OpenRouter). For prompts exceeding 256,000 tokens: $1.30/1M input, $3.90/1M output. Cache write pricing: $0.40625/1M input. Source: OpenRouter API `pricing` object.
- **Architecture:** Qwen3.6-27B dense variant: 27B parameters (27.8B total), 64 layers, 5120 hidden dimension, 248,320 token embedding (padded), hybrid layout of 48 QKV + 16 attention heads with Gated DeltaNet linear attention and Gated Attention sparse routing. Qwen3.6-35B-A3B MoE variant: 35.95B total parameters, architecture type `qwen3_5_moe`. License: Apache 2.0.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **59.3%** (Harbor/Terminus-2 harness, 3h timeout, 32 CPU/48GB RAM, temp=1.0, top_p=0.95, top_k=20, max_tokens=80K, 256K ctx; avg of 5 runs) [(source: HuggingFace Qwen3.6-27B model card)](https://huggingface.co/Qwen/Qwen3.6-27B)
- Claw-Eval Avg: **72.4** [(source: HuggingFace Qwen3.6-27B model card)](https://huggingface.co/Qwen/Qwen3.6-27B)
- Claw-Eval Pass^3: **60.6** [(source: HuggingFace Qwen3.6-27B model card)](https://huggingface.co/Qwen/Qwen3.6-27B)
- QwenClawBench: **53.4** (real-user-distribution Claw agent benchmark, temp=0.6, 256K ctx) [(source: HuggingFace)](https://huggingface.co/Qwen/Qwen3.6-27B)
- NL2Repo: **36.2** (evaluated via Claude Code, temp=1.0, top_p=0.95, max_turns=900) [(source: HuggingFace)](https://huggingface.co/Qwen/Qwen3.6-27B)
- Design Arena (OpenRouter): coding Elo 1239 (rank 41/55), website Elo 1246 (rank 43), gamedev Elo 1219 (rank 44), svg Elo 1161 (rank 39) [(source: OpenRouter API)](https://openrouter.ai/api/v1/models)

Reasoning / knowledge:

- GPQA Diamond: **87.8%** [(source: HuggingFace Qwen3.6-27B)](https://huggingface.co/Qwen/Qwen3.6-27B)
- HLE: **24.0%** [(source: HuggingFace Qwen3.6-27B)](https://huggingface.co/Qwen/Qwen3.6-27B)
- MMLU-Pro: **86.2** [(source: HuggingFace eval results)](https://huggingface.co/Qwen/Qwen3.6-27B)
- MMLU-Redux: **93.5** [(source: HuggingFace model card)](https://huggingface.co/Qwen/Qwen3.6-27B)
- SuperGPQA: **66.0** [(source: HuggingFace model card)](https://huggingface.co/Qwen/Qwen3.6-27B)
- C-Eval: **91.4** [(source: HuggingFace model card)](https://huggingface.co/Qwen/Qwen3.6-27B)
- AIME26: **94.1** (full AIME 2026 I & II) [(source: HuggingFace Qwen3.6-27B)](https://huggingface.co/Qwen/Qwen3.6-27B)
- HMMT Feb 25: **93.8** [(source: HuggingFace)](https://huggingface.co/Qwen/Qwen3.6-27B)
- HMMT Nov 25: **90.7** [(source: HuggingFace)](https://huggingface.co/Qwen/Qwen3.6-27B)
- HMMT Feb 26: **84.3** [(source: HuggingFace)](https://huggingface.co/Qwen/Qwen3.6-27B)
- IMOAnswerBench: **80.8** [(source: HuggingFace)](https://huggingface.co/Qwen/Qwen3.6-27B)
- Artificial Analysis Intelligence Index: 27 (rank-based index) [(source: OpenRouter API)](https://openrouter.ai/api/v1/models)

Coding:

- SWE-bench Verified: **77.2%** (resolved) [(source: HuggingFace Qwen3.6-27B)](https://huggingface.co/Qwen/Qwen3.6-27B)
- SWE-bench Pro: **53.5** [(source: HuggingFace)](https://huggingface.co/Qwen/Qwen3.6-27B)
- SWE-bench Multilingual: **71.3** [(source: HuggingFace)](https://huggingface.co/Qwen/Qwen3.6-27B)
- LiveCodeBench v6: **83.9%** [(source: HuggingFace Qwen3.6-27B)](https://huggingface.co/Qwen/Qwen3.6-27B)
- Terminal-Bench 2.0: **59.3%** (also listed under tool use — coding agent benchmark) [(source: HuggingFace)](https://huggingface.co/Qwen/Qwen3.6-27B)
- QwenWebBench: **1487** (internal frontend code generation benchmark) [(source: HuggingFace)](https://huggingface.co/Qwen/Qwen3.6-27B)
- SkillsBench Avg5: **48.2** (evaluated via OpenCode on 78 tasks) [(source: HuggingFace)](https://huggingface.co/Qwen/Qwen3.6-27B)
- Artificial Analysis Coding Index: 54.5 [(source: OpenRouter API)](https://openrouter.ai/api/v1/models)

Multimodal / vision:

- MMMU: **82.9** [(source: HuggingFace Qwen3.6-27B)](https://huggingface.co/Qwen/Qwen3.6-27B)
- MMMU-Pro: **75.8** [(source: HuggingFace)](https://huggingface.co/Qwen/Qwen3.6-27B)
- MathVista mini: **87.4** [(source: HuggingFace)](https://huggingface.co/Qwen/Qwen3.6-27B)
- DynaMath: **85.6** [(source: HuggingFace)](https://huggingface.co/Qwen/Qwen3.6-27B)
- VlmsAreBlind: **97.0** [(source: HuggingFace)](https://huggingface.co/Qwen/Qwen3.6-27B)
- RealWorldQA: **84.1** [(source: HuggingFace)](https://huggingface.co/Qwen/Qwen3.6-27B)
- MMStar: **81.4** [(source: HuggingFace)](https://huggingface.co/Qwen/Qwen3.6-27B)
- MMBenchEN-DEV-v1.1: **92.3** [(source: HuggingFace)](https://huggingface.co/Qwen/Qwen3.6-27B)
- CharXiv RQ: **78.4** [(source: HuggingFace)](https://huggingface.co/Qwen/Qwen3.6-27B)
- CC-OCR: **81.2** [(source: HuggingFace)](https://huggingface.co/Qwen/Qwen3.6-27B)
- OCRBench: **89.4** [(source: HuggingFace)](https://huggingface.co/Qwen/Qwen3.6-27B)
- CountBench: **97.8** [(source: HuggingFace)](https://huggingface.co/Qwen/Qwen3.6-27B)
- RefCOCO avg: **92.5** [(source: HuggingFace)](https://huggingface.co/Qwen/Qwen3.6-27B)
- VideoMME (with subtitles): **87.7** [(source: HuggingFace)](https://huggingface.co/Qwen/Qwen3.6-27B)
- VideoMMU: **84.4** [(source: HuggingFace)](https://huggingface.co/Qwen/Qwen3.6-27B)
- MLVU: **86.6** [(source: HuggingFace)](https://huggingface.co/Qwen/Qwen3.6-27B)
- MVBench: **75.5** [(source: HuggingFace)](https://huggingface.co/Qwen/Qwen3.6-27B)
- V*: **94.7** (visual agent benchmark) [(source: HuggingFace)](https://huggingface.co/Qwen/Qwen3.6-27B)
- AndroidWorld: **70.3** [(source: HuggingFace)](https://huggingface.co/Qwen/Qwen3.6-27B)

Long context:

- Native context: 262,144 tokens. Extensible to 1,010,000 tokens via YaRN RoPE scaling (factor 4.0, rope_theta 10,000,000). [(source: HuggingFace Qwen3.6-27B model card)](https://huggingface.co/Qwen/Qwen3.6-27B)

### Normalized scores (1–100)

- **Tool use: 72/100.** Terminal-Bench 2.0 at 59.3% sits in the solid mid-tier range (methodology: TB 45–60% → 50–70); Claw-Eval Avg 72.4 and Claw-Eval Pass^3 60.6 reinforce this tier. Capped by Terminal-Bench not reaching frontier 85%+ territory. NL2Repo at 36.2 is notably weaker.
- **Reasoning: 85/100.** GPQA Diamond 87.8% is just below frontier (90%+), HLE 24.0% is below frontier (40%+), but AIME26 at 94.1, HMMT Feb 25 at 93.8, and MMLU-Redux 93.5 demonstrate elite math/reasoning. Capped by HLE being well below frontier threshold.
- **Context window: 98/100.** 1,000,000-token context on the OpenRouter hosted endpoint qualifies for the ≥1M tier (95–100). Native 262,144 extensible to 1,010,000 via YaRN. Max output 65,536 noted as caveat but not penalized per methodology.
- **Multimodal: 85/100.** Supports text, image, and video input with text output — falls in the +video/PDF in band (75–90). Vision-language benchmarks are strong (MMMU 82.9, VlmsAreBlind 97.0, CountBench 97.8, V* 94.7) but not quite frontier-level across all modalities.
- **Coding: 80/100.** SWE-bench Verified 77.2% and LiveCodeBench 83.9% are strong, but Terminal-Bench 59.3% is short of frontier (85%+). No SciCode or DeepSWE numbers available to push into frontier 90–100 range.
- **Cost efficiency: 95/100.** $0.325/1M input and $1.95/1M output is excellent value — cheaper than the ~$0.60/$2.20 tier (92) and close to the ~$0.10/$0.20 tier (97–99), warranting a high score. Not $0 free tier so can't reach 100.
- **Overall Score: 84/100.** Mean of five quality dims: (72+85+98+85+80)/5 = 84. Strong multimodal coding + reasoning model with industry-leading context length; best for agentic long-context multimodal workloads. No Free ID on Zen — scored on paid OpenRouter pricing.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-10-09
- Method: Public web research via HuggingFace model cards, OpenRouter API, and Artificial Analysis data. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
