# DeepSeek V4.1 Flash 1017 — findings by MiniMax M3.1 Flash

- Source: DeepSeek-AI (`DeepSeek-V4.1-Flash-1017`)
- Date: 2026-10-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4.1 Flash 1017
- **Short description:** DeepSeek's open-weight multimodal Mixture-of-Experts model for agentic and coding workloads; the 1017 checkpoint is a minor update to DeepSeek-V4.1-Flash that raises reasoning, coding, agentic and visual scores while cutting task time and output length, improving the performance-cost Pareto frontier ([official model card](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017), [launch post](https://api-docs.deepseek.com/news/news261017)).
- **Provider / access:** First-party API at `https://api.deepseek.com` (OpenAI-compatible) and `https://api.deepseek.com/anthropic` (Anthropic Messages-compatible); the served model ID is `deepseek-flash`, which now runs DeepSeek-V4.1-Flash-1017, and the retired aliases `deepseek-v4-flash` / `deepseek-v4-flash-vision-exp` are routed to the same weights at Flash pricing ([DeepSeek API quick start](https://api-docs.deepseek.com/), [Models & Pricing](https://api-docs.deepseek.com/quick_start/pricing)). Chat Completions, the Responses API, tool calls, JSON output, FIM and chat-prefix completion are supported. Third-party: OpenRouter `deepseek/deepseek-v4.1-flash-1017` (Chat Completions + Anthropic Messages + Responses endpoints) ([OpenRouter model page](https://openrouter.ai/deepseek/deepseek-v4.1-flash-1017)).
- **Release / knowledge:** Released 2026-10-17 (Hugging Face repo created 2026-10-17; launch post dated 2026-10-17; OpenRouter lists Oct 17, 2026) ([Hugging Face](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017), [launch post](https://api-docs.deepseek.com/news/news261017), [OpenRouter](https://openrouter.ai/deepseek/deepseek-v4.1-flash-1017)). Public knowledge cutoff not disclosed for this checkpoint; the parent model is pretrained on a 45T-token multimodal corpus ([arXiv:2609.19969](https://arxiv.org/abs/2609.19969)).
- **IDs:** `deepseek-ai/DeepSeek-V4.1-Flash-1017` (Hugging Face, MIT weights), `deepseek-flash` (DeepSeek API), `deepseek/deepseek-v4.1-flash-1017` (OpenRouter), `DeepSeek-V4.1-Flash-1017` (ModelScope) ([launch post](https://api-docs.deepseek.com/news/news261017), [OpenRouter](https://openrouter.ai/deepseek/deepseek-v4.1-flash-1017)).
- **Context window:** 1M tokens (1,048,576) — confirmed by `max_position_embeddings: 1048576` with YaRN rope scaling factor 16 in the released `config.json`, by the API docs' "CONTEXT LENGTH 1M", and by OpenRouter's 1,048,576 context listing; maximum output 384K ([config.json](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017/raw/main/config.json), [Models & Pricing](https://api-docs.deepseek.com/quick_start/pricing), [OpenRouter](https://openrouter.ai/deepseek/deepseek-v4.1-flash-1017)).
- **Modalities:** text and image input, text output (vision tower present in `config.json`, `image_token_id` set, `pipeline_tag: image-text-to-text`); reasoning/thinking mode supported (default) plus `reasoning_effort` control; tool calls, JSON output, and Anthropic-style tool use documented ([model card](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017), [config.json](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017/raw/main/config.json), [API quick start](https://api-docs.deepseek.com/)).
- **Pricing (as of 2026-10-23):** DeepSeek API, per 1M tokens — cache-hit input $0.003 off-peak / $0.006 peak, cache-miss input $0.15 / $0.30, output $0.60 / $1.20; peak hours are 01:00–04:00 and 06:00–10:00 UTC on weekdays, all other hours and weekends are off-peak. Concurrency limit 2500. OpenRouter's weighted averages are $0.016 input / $0.706 output per 1M ([Models & Pricing](https://api-docs.deepseek.com/quick_start/pricing), [OpenRouter](https://openrouter.ai/deepseek/deepseek-v4.1-flash-1017)). No free tier was verified.
- **Architecture:** Open weights under the MIT License. Multimodal MoE with a Causal Encoder-Decoder (CED) design: 552B backbone parameters with 16B active per decoded token and 8B active during prefill, 45T pretraining tokens, cross-layer KV reuse in Compressed Sparse Attention 2 with FP4 KV caching, and a 890-byte-per-token global KV footprint (~1/4 of DeepSeek-V4-Flash) ([arXiv:2609.19969](https://arxiv.org/abs/2609.19969), [model card](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017)). Released `config.json`: 40 layers, hidden size 5120, 384 routed experts + 1 shared expert with 6 experts per token, single KV head with head_dim 512, 32-layer vision encoder, 3 next-token-prediction layers ([config.json](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017/raw/main/config.json)). Parameter count is reported inconsistently: the paper says 552B backbone parameters while LLM Stats lists 763.2B total for the parent V4.1-Flash ([LLM Stats](https://llm-stats.com/models/deepseek-v4.1-flash)).

### Raw benchmarks found

Official self-reported table (DeepSeek's own comparison, max reasoning effort; Terminal-Bench 4.0 run in the Claude Code harness, DeepSWE v1.1 in the Mini-SWE-V2 harness, ZeroBench-main at Pass@5) ([official model card](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017), [official benchmark table image](https://api-docs.deepseek.com/img/v4.1_261017_benchmark_table_en.png)):

Agent / tool use:

- Automation-Bench v1.0.6: **60.5%** (official; above Opus 5's 50.3 and GPT-5.6 Sol's 45.8 in the same table)
- Agents' Last Exam: **35.4%** (official; above Opus 5's 28.6)
- Apex Bench v1.1: **72.1%** (official; above Opus 5's 65.8)
- Terminal-Bench 4.0: **42.3%** (official, Claude Code harness; vs 31.2 for the parent V4.1-Flash, 12.6 Kimi K3, 37.9 GLM 5.3, 39.9 GPT-5.6 Sol, 51.8 Opus 5)
- GDPval-AA: **55.0%** (Artificial Analysis, listed on the model's OpenRouter page; **#19 of 158**)
- Tau3-Banking / Tau2-Bench: no verified public score found for this checkpoint
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- HLE (without tools): **42.6%** (**44.0%** on the text-only subset) (official; vs 36.8/39.1 parent, 43.5 Kimi K3, 44.5 GPT-5.6 Sol, 56.3 Opus 5)
- AA-LCR: **84.0%** (Artificial Analysis, **#7 of 285** models)
- Artificial Analysis Intelligence Index v4.3: **39.5** (**#31 of 351**, "better than 91% of models compared"; listed as "DeepSeek V4.1 Flash (Max)")
- CritPt: **14.3%** (Artificial Analysis, **#43 of 282**)
- Omniscience Accuracy / Non-Hallucination Rate: **46.4% / 3.5%** (Artificial Analysis; the non-hallucination rate ranks **#276 of 280**, i.e. one of the most hallucination-prone models measured)
- GPQA Diamond: **91%** for the parent DeepSeek-V4.1-Flash, self-reported via the official Hugging Face card and republished by LLM Stats (**#23**) — provisional for 1017, which publishes no separate GPQA number
- Terminal-Bench 2.1: no verified public score found for this checkpoint

Coding:

- DeepSWE v1.1: **77.0%** (official, Mini-SWE-V2 harness; above the parent V4.1-Flash's 74.2, Kimi K3's 67.5, GLM 5.3's 66.9, GPT-5.6 Sol's 73.0 and Opus 5's 74.0)
- NL2Repo-Bench: **68.2%** (official; parent 65.4, Opus 5 75.3)
- Vibe Code Bench v1.1: **87.7%** (Vals AI)
- Code Migration v1.1: **67.5%** (Vals AI)
- EMB v1.1: **69.2%** (Vals AI)
- SciCode: **51.9%** (Artificial Analysis, **#39 of 129**)
- ProgramBench: **29.1%** (official; parent 20.3, Opus 5 37.0)
- SWE-bench Verified / SWE-Pro: no verified public score found for this checkpoint
- LiveCodeBench: no verified public score found for this checkpoint
- CodeForces: **3471** rating, **#1** — self-reported for the parent V4.1-Flash, provisional for 1017 ([LLM Stats](https://llm-stats.com/models/deepseek-v4.1-flash))
- Design Arena Elo (1017): Code Categories **1296**, Website **1309**, UI Component **1307**, Game Development **1299**, Data Visualization **1295**, 3D **1351**, Asciiart **1230**, Agents Arena Spreadsheet **1259**

Professional / vertical (Vals AI, via the model's OpenRouter page):

- Vals Index: **61.3%**; Vals Finance Index **60.9%**; Finance Agent v2.1 **62.9%**; Tax Agent Bench **44.4%**; Legal Research Bench **45.2%**; HLAB-Vals-1.1 **14.2%**

Long context:

- AA-LCR v1.1 **84.0%** is the only long-context retrieval-style measurement found for this checkpoint; no MRCR, RULER, or GraphWalks result at 512K+ was published ([OpenRouter benchmark summary](https://openrouter.ai/deepseek/deepseek-v4.1-flash-1017)).

### Independent-source comparison and conflicts

- Terminal-Bench 4.0 disagrees sharply across sources: DeepSeek reports **42.3%** in the Claude Code harness, Artificial Analysis measures **26.8%** (**#20 of 124**) and Vals AI measures **31.8%** ([official model card](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017), [OpenRouter benchmark summary](https://openrouter.ai/deepseek/deepseek-v4.1-flash-1017)). The two independent runs are much lower than the vendor figure, so the vendor number is treated as harness-optimistic and the independent values anchor the tool/coding caps.
- HLE is consistent across sources: DeepSeek's **42.6%** (44.0% text-only) sits just above Artificial Analysis's **39.2%** (**#45 of 337**), the same order of magnitude ([official model card](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017), [OpenRouter benchmark summary](https://openrouter.ai/deepseek/deepseek-v4.1-flash-1017)).
- Overall independent capability is mid-tier rather than frontier: Artificial Analysis Intelligence Index **39.5** trails Claude Opus 5.5 (57.6), Claude Sonnet 5.5 (56.0), Qwen3.8 Max (53.4) and GPT-6.1 Sol (51.8), but beats GPT-5.4 (39.0) and Muse Spark 1.2 (39.6 is level) while being far cheaper ([OpenRouter rankings](https://openrouter.ai/deepseek/deepseek-v4.1-flash-1017)). The vendor table likewise shows the model trailing Opus 5 and GPT-5.6 Sol on most rows.
- Knowledge reliability is the model's weak point: Artificial Analysis reports **46.4%** Omniscience accuracy but only **3.5%** non-hallucination rate among wrong answers, plus **14.3%** on CritPt — strong agentic execution with weak factual grounding ([OpenRouter benchmark summary](https://openrouter.ai/deepseek/deepseek-v4.1-flash-1017)).
- Visual results are unusually strong for a text-output model: Chartography **83.0** (vs Opus 5 84.0), BabyVision **92.5** (vs Opus 5 94.1) and ZeroBench-main **51.0** with tools (GPT-5.6 Sol leads at 53.0) ([official model card](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017)).
- Price/perf is the headline: DeepSeek publishes a DeepSWE v1.1 pass@1 versus cost-per-task curve showing a Pareto improvement over the parent model, and OpenRouter records 267 tok/s peak throughput, 0.27 s best P50 latency, 99.83% availability and very high real traffic (3.97T prompt tokens, 34.7B reasoning tokens, 17.2B completion tokens in the tracked window) ([launch post](https://api-docs.deepseek.com/news/news261017), [OpenRouter](https://openrouter.ai/deepseek/deepseek-v4.1-flash-1017)).
- Parameter reporting conflicts: the paper states **552B backbone parameters** (16B active decode / 8B prefill) while LLM Stats lists **763.2B** total and 45T training tokens for the parent model; the paper's figure is used here because it is first-party ([arXiv:2609.19969](https://arxiv.org/abs/2609.19969), [LLM Stats](https://llm-stats.com/models/deepseek-v4.1-flash)).
- Third-party providers price the same weights higher than DeepSeek's off-peak rates (Fireworks $0.22/$0.66, DeepInfra and Novita $0.30/$1.20 per 1M in/out), so cost depends on the endpoint chosen ([LLM Stats](https://llm-stats.com/models/deepseek-v4.1-flash), [OpenRouter](https://openrouter.ai/deepseek/deepseek-v4.1-flash-1017)).

### Normalized scores (1–100)

- **Tool use: 70/100.** Automation-Bench 60.5, Agents' Last Exam 35.4 and Apex Bench 72.1 show strong agentic execution, and GDPval-AA 55.0% with Vals Index 61.3% supports professional task work; the cap comes from independent Terminal-Bench 4.0 results of 26.8% (AA) and 31.8% (Vals AI) versus the vendor's 42.3%, plus no verified Tau3 or Claw-Eval number.
- **Reasoning: 70/100.** HLE 42.6 (44.0 text-only) meets the project's frontier HLE threshold and AA-LCR 84.0% (#7) is excellent, but the Intelligence Index of 39.5 (#31/351), CritPt 14.3%, Omniscience accuracy 46.4% and a 3.5% non-hallucination rate keep it out of the top reasoning band; the 91% GPQA Diamond belongs to the parent checkpoint, not 1017.
- **Context window: 96/100.** 1M tokens (1,048,576) is verified in the released config, the API docs and OpenRouter, with 384K max output; it misses 100 because no 512K+ retrieval benchmark (MRCR/RULER/GraphWalks) was published and long-context reasoning lands at 84.0% rather than ≥98%.
- **Multimodal: 70/100.** Native image input with a dedicated vision encoder tops the image-input band, and visual reasoning is frontier-adjacent (BabyVision 92.5, Chartography 83.0, ZeroBench-main 51.0), but output is text-only and no audio, video, or PDF-native input was verified.
- **Coding: 85/100.** DeepSWE 77.0 exceeds the project's frontier reference, NL2Repo-Bench 68.2, Vibe Code Bench 87.7%, Code Migration 67.5% and EMB 69.2% are strong, while SciCode 51.9% misses the 55% frontier bar and independent Terminal-Bench 4.0 runs of 26.8%/31.8% cap terminal-agentic coding.
- **Cost efficiency: 95/100.** $0.15/M input and $0.60/M output off-peak ($0.30/$1.20 peak) with $0.003/M cache hits is among the cheapest published rates for a model of this capability, though third-party hosts charge up to 2× the off-peak first-party price.
- **Overall Score: 78.2/100.** Mean of Tool 70, Reasoning 70, Context 96, Multimodal 70, and Coding 85: the best price-performance open-weights agentic/coding model in the set — pick it for cheap high-volume 1M-context agent work with vision, not for frontier factual recall or top-tier terminal autonomy.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (nvidia/nvidia/minimaxai/minimax-m3.1-flash)** — 2026-10-23
- Method: Independent public-web research across DeepSeek's official Hugging Face model card and `config.json`, the official API launch post and pricing docs, the arXiv technical report, OpenRouter's live model/benchmark page, Artificial Analysis measurements, Vals AI results, LLM Stats, and multiple web searches. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, using the same headings.
