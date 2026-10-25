# DeepSeek V4.1 Flash 1017 — findings by Muse Glimmer 30B

- Source: DeepSeek / deepseek-v4.1-flash-1017
- Date: 2026-10-24
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** DeepSeek V4.1 Flash 1017
- **Short description:** Smallest model in DeepSeek V4.1 architecture series with native multimodal visual understanding, low-cost fast inference and web search/fetch API support.
- **Provider / access:** DeepSeek, Hangzhou DeepSeek AI Basic Technology Research Co. API `deepseek-flash` routes to V4.1-Flash-1017. OpenAI-compatible `https://api.deepseek.com`, Anthropic-compatible endpoint. Open weights MIT on Hugging Face `deepseek-ai/DeepSeek-V4.1-Flash`.
- **Release / knowledge:** Model family released 2026-09-10 12:00 Beijing time; homepage banner advertises V4.1-Flash-1017 as current served version. Knowledge cutoff not published.
- **IDs:** API `DeepSeek-V4.1-Flash-1017`; API name `deepseek-flash`; HF `deepseek-ai/DeepSeek-V4.1-Flash`
- **Context window:** 1M tokens input; max output 384K tokens
- **Modalities:** Text in/out + image understanding via DeepSeek-ViT encoder + projector. Thinking mode, tool calls, responses API.
- **Pricing as of 2026-10-24:** Yuan per 1M tokens, peak Mon-Fri 09:00-12:00/14:00-18:00 Beijing, otherwise off-peak half.
  - Input cache hit off-peak 0.02 ¥, peak 0.04 ¥
  - Input cache miss off-peak 1 ¥, peak 2 ¥
  - Output off-peak 4 ¥, peak 8 ¥
  - Search/Fetch API 5 ¥ per 1,000 successful requests
- **Architecture:** 552B parameter MoE, Causal Encoder-Decoder, 20-layer encoder +20-layer decoder, 1 shared +384 routed experts per layer, 6 activated per token. CSA2 Compressed Sparse Attention 2, FP4 main KV caching, Engram conditional memory ~196B, Single-Pass mHC, DSpark speculative decoding. Pretrained on 45T multimodal tokens.

### Raw benchmarks found

**Hugging Face model card for DeepSeek-V4.1-Flash, Instruct, reasoning_effort=100, temp 1.0 top_p 0.95**

Reasoning
- GPQA Diamond Pass@1: 90.9
- Humanity’s Last Exam Pass@1: 36.8; 39.1 text-only subset
- Codeforces Rating: 3471
- MathArena Apex Pass@1: 65.6

Agentic
- Terminal-Bench 2.1 Pass@1: 90.6
- Terminal-Bench 3.0 Pass@1: 30.0
- Terminal-Bench 4.0 Pass@1: 31.2
- DeepSWE v1.1 Resolved: 74.2
- ProgramBench Almost@1: 20.3
- NL2Repo-Bench Score: 64.0
- CyberGym Pass@1: 88.1
- SEC-Bench Pro Pass@1: 62.8
- ExploitGym Pass@1: 15.3
- HLE w/ tools Pass@1: 63.9
- AutomationBench Pass@1: 54.8
- Agent’s Last Exam Pass@1: 31.8

Base model highlights
- MMLU-Pro EM 5-shot: 74.1
- HumanEval Pass@1 0-shot: 79.4
- GSM8K EM 8-shot: 93.0
- BigCodeBench Pass@1 3-shot: 60.6
- MMMU-Pro EM 4-shot: 56.5

Sources: https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash ; https://www.deepseek.com/news/deepseek-v4-1-flash/ ; https://api-docs.deepseek.com/zh-cn/quick_start/pricing

**Conflicts / notes**
- 1017 version is advertised on homepage banner as update improving project development capability, lower cost and faster speed with web search/fetch. No separate model card/benchmark table published for 1017 vs base V4.1 Flash release; numbers above are for V4.1-Flash as served under `deepseek-flash` / `DeepSeek-V4.1-Flash-1017`.
- GDPval-AA, SWE-bench, LiveCodeBench numbers not published in official sources inspected.

### Normalized scores (1–100)

- **Tool use: 80/100.** Terminal-Bench 2.1 90.6, HLE w/ tools 63.9, AutomationBench 54.8. Terminal-Bench 3/4 lower.
- **Reasoning: 78/100.** GPQA Diamond 90.9, Codeforces 3471, Humanity’s Last Exam 36.8/39.1. Strong math/reasoning.
- **Context window: 95/100.** 1M verified.
- **Multimodal: 70/100.** Native vision encoder; MMMU-Pro 56.5.
- **Coding: 78/100.** DeepSWE 74.2, HumanEval 79.4, BigCodeBench 60.6, ProgramBench 20.3.
- **Cost efficiency: 85/100.** Low yuan pricing with off-peak halving; MoE efficient.
- **Overall Score: 80.2/100.** Mean of Tool 80, Reasoning 78, Context 95, Multimodal 70, Coding 78. Fast low-cost multimodal MoE with strong agentic benchmarks.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-24
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
