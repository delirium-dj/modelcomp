# DeepSeek V4.1 Flash — findings by GPT 5.6 Luna

- Source: DeepSeek/DeepSeek-V4.1-Flash
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4.1 Flash (including the current 1017 checkpoint)
- **Short description:** DeepSeek's efficient V4.1-family reasoning model: an open-weight 552B MoE with native visual understanding, a 1M-token context window, and strong agentic coding at low API cost.
- **Provider / access:** DeepSeek API alias `deepseek-flash` through OpenAI Chat Completions, Responses, and Anthropic-compatible routes; OpenCode Zen exposes `opencode/deepseek-v4.1-flash`. Alibaba Model Studio also lists `deepseek-v4.1-flash` and `deepseek-v4.1-flash-1017`.
- **Release / knowledge:** Base V4.1 Flash released September 10, 2026; the improved `1017` checkpoint was released October 17, 2026. Knowledge cutoff is not publicly disclosed.
- **IDs:** `deepseek-flash`, `deepseek-v4.1-flash`, `deepseek-v4.1-flash-1017`, and `deepseek-ai/DeepSeek-V4.1-Flash`. No verified OpenCode Zen Free ID exists for this model.
- **Context window:** 1,000,000 tokens; maximum output 384,000 tokens.
- **Modalities:** Text and image input; text output; reasoning, tool calls, JSON output, and Responses API support. No verified native audio/video input or non-text output was found.
- **Pricing (as of 2026-11-02):** Peak DeepSeek API pricing is $0.30 input / $1.20 output per 1M tokens with $0.006 cached input; off-peak is $0.15/$0.60/$0.003. OpenCode Zen uses the peak $0.30/$1.20 paid tier. Search/Fetch tool calls are billed separately.
- **Architecture:** 552B-parameter MoE with a Causal Encoder–Decoder design; 8B active parameters for input/prefill and 16B for output/decode. DeepSeek reports KV-cache requirements of one-quarter the prior HBM and one-eighth the prior SSD requirement. Open weights are MIT licensed.

### Raw benchmarks found

The `1017` checkpoint is the current independent profile; base-model rows are retained where the source explicitly labels them.

Agent / tool use:

- Terminal-Bench 2.1: **90.6%** (official model card; DeepSeek Harness Minimal)
- Terminal-Bench 4.0: **42.3%** and Terminal-Bench 3: **30%** (1017 model card)
- Automation-Bench v1.0.6: **60.5%**; GDPval-AA: **1600 Elo**
- BenchLM current profile: **65.22/100, #30 of 1,004**, with 51 of 724 benchmark rows covered.

Reasoning / knowledge:

- GPQA Diamond: **90.9%**; HLE: **42.6%** on the 1017 card (**36.8%** on the earlier pure-text configuration)
- AA-LCR: **84.0%**; CritPt: **14.3%**
- Artificial Analysis Intelligence Index: **39.5%**; AA-Omniscience Accuracy: **46.4%**; hallucination rate: **96.5%**
- FrontierMath v2 tiers 1–3: **67.368%**

Coding / multimodal:

- DeepSWE v1.1: **77.0%**; ProgramBench: **29.1%**; NL2Repo: **68.2%**; Codeforces: **3471**
- AA-SciCode: **51.9%**; FrontierCode 2.0: **19.3%**
- Chartography with tools: **83.0%**; BabyVision with Python: **92.5%**; AA-MMMU-Pro: **77.0%**
- ExtractBench: **87.11%**; ParseBench: **64.56%**

Long context:

- No verified MRCR/RULER retrieval score was found. AA-LCR at 84.0% is treated as long-context reasoning, not as a full-window retrieval result.

### Normalized scores (1–100)

- **Tool use: 93/100.** Terminal-Bench 2.1 at 90.6%, Automation-Bench 60.5%, and native tool/Responses support are frontier-grade; missing Tau3/MCP/Claw rows cap it below the maximum.
- **Reasoning: 84/100.** GPQA 90.9%, HLE 42.6%, AA-LCR 84%, and AA Index 39.5 show strong but uneven reasoning and factuality.
- **Context window: 95/100.** The verified 1M context is unusually large, but no full-window retrieval curve was independently reported.
- **Multimodal: 78/100.** Native visual input, Chartography, BabyVision, and AA-MMMU-Pro are verified; no audio/video input or non-text output was established.
- **Coding: 93/100.** Terminal-Bench 90.6%, DeepSWE 77%, NL2Repo 68.2%, and Codeforces 3471 support excellent coding-agent capability, despite no verified SWE-bench result.
- **Cost efficiency: 97/100.** $0.15/$0.60 off-peak and $0.30/$1.20 peak pricing are exceptional for this context and capability level.
- **Overall Score: 88.6/100.** Mean of the five quality dimensions `(93 + 84 + 95 + 78 + 93) / 5 = 88.6`; best fit is cost-sensitive agentic coding and tool-driven work where 1M context and native vision matter.

---

## Signature

- Provided by: **GPT 5.6 Luna (openai/gpt-5.6-luna)** — 2026-11-02
- Method: current DeepSeek release/API documentation, the 1017 model card, Hugging Face, BenchLM's October 29 profile, Artificial Analysis, and OpenCode/Alibaba routing documentation; checkpoint and harness differences were retained, and scores are normalized interpretations rather than official vendor scores.
- Reference URLs:
  - [DeepSeek V4.1 Flash announcement](https://www.deepseek.com/en/news/deepseek-v4-1-flash/)
  - [DeepSeek API release/changelog](https://api-docs.deepseek.com/news/news260910/)
  - [DeepSeek V4.1 Flash model card](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash)
  - [BenchLM DeepSeek V4.1 Flash profile](https://benchlm.ai/models/deepseek-v4-1-flash)
