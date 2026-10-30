# Qwen 3.7 Max — findings by GLM-4.5-Flash

- Source: Alibaba/Qwen 3.7 Max
- Date: 2026-10-30 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Qwen 3.7 Max
- **Short description:** Alibaba's flagship Qwen3.7 reasoning-agent model, built for long-horizon coding, tool use, math, and large-context workflows with 1M token context window.
- **Provider / access:** OpenCode Zen opencode/qwen-3.7-max (Chat Completions); OpenRouter qwen/qwen3.7-max; Alibaba Cloud Model Studio / DashScope
- **Release / knowledge:** Released May 19, 2026 (announced May 20 at Alibaba Cloud Summit); knowledge cutoff not published
- **IDs:** opencode/qwen-3.7-max; OpenRouter qwen/qwen3.7-max
- **Context window:** 1,000,000 total (131,072 max output)
- **Modalities:** Text in/out; reasoning and tool calls
- **Pricing (as of 2026-10-30):** .48 in / .43 out per 1M (OpenRouter); cached ~.25
- **Architecture:** Proprietary Alibaba Qwen model (closed weights)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **69.7%** (vendor-claimed)
- Terminal-Bench 2.1: **no verified public score found**
- MCP-Atlas: **76.4** (vendor-claimed)
- ITbench-AA: **#3** placement (vendor-claimed)
- 35-hour autonomous CUDA-kernel optimization: **1,158 tool calls, 432 kernel evaluations, 10× geomean speedup** (vendor-claimed)

Reasoning / knowledge:

- GPQA Diamond: **92.4%** (vendor-claimed)
- HLE: **41.4%** (AA-aligned)
- MMLU-Pro: **89.6%** (vendor-claimed)
- HMMT 2026 Feb: **97.1%** (vendor-claimed, near-ceiling)
- Artificial Analysis Intelligence Index v4.0 (at launch): **56.6** (global top 5)
- Artificial Analysis Intelligence Index v4.3.2 (current): **29, #103/221** (median 28)
- Artificial Analysis speed: **202.2 tok/s** (#11/182,  notably fast)
- Artificial Analysis verbosity: **120M** Index output tokens (#86/122, somewhat verbose)

Coding:

- SWE-bench Verified: **80.4%** (vendor-claimed)
- SWE-bench Pro: **60.6%** (vendor-claimed, leads peer group)
- LiveCodeBench: **91.6%** (vendor-claimed)
- SciCode: **53.5%** (vendor-claimed)
- Vals AI SWE-bench Verified (bash-tool-only): **82%** (<15min), **64%** (15m–1h), **38%** (1–4h), **0%** (>4h)

Long context:

- 1M context documented by Alibaba; no independent MRCR/RULER row found

### Normalized scores (1–100)

- **Tool use: 84/100.** Strong tool execution capabilities with Terminal-Bench 2.0 at 69.7%, MCP-Atlas 76.4, and documented 35-hour/1,158-tool-call autonomous run. However, independent Vals AI results show a significant drop to 38% for 1-4h tasks and 0% for >4h tasks, contradicting the long-horizon autonomy claims. Capped by this contradiction and model deprecation.
- **Reasoning: 86/100.** Excellent vendor reasoning with GPQA Diamond 92.4% (frontier-class), HMMT 97.1% (near-ceiling), and MMLU-Pro 89.6%. Launched at AA Index v4.0 56.6 (global top 5), but current independent AA Index v4.3.2 rebases to 29 (#103/221, median 28). Capped by the rebasing and deprecation.
- **Context window: 91.7/100.** 1M token context window is excellent and maps to the highest tier. AA-confirmed but no independent long-context retrieval validation for deprecated models.
- **Multimodal: 71.4/100.** Text-only input/output with reasoning and tool calls support. Scored above the typical text-only floor due to strong reasoning capabilities.
- **Coding: 84.7/100.** Strong vendor coding performance with SWE-bench Verified 80.4%, SWE Pro 60.6% (leading peer group), and LiveCodeBench 91.6%. However, independent Vals AI results show mid-tier long-horizon capability with a >4h collapse to 0%, and no vendor SWE numbers are independently replicated.
- **Cost efficiency: 84.3/100.** Competitive pricing at .48/.43 per 1M via OpenRouter with valuable cache discounts (~.25), but heavy verbosity (120M Index tokens) increases effective cost.
- **Overall Score: 83.5/100.** Mean of the five quality dimensions: Tool 84 + Reasoning 86 + Context 91.7 + Multimodal 71.4 + Coding 84.7 = 417.8 / 5 = 83.56 ? 83.5. Best fit: a fast, 1M-context, agent-oriented text reasoner that was a genuine global-top-5 story at its May-2026 launch but is now deprecated, rebases to ~median independently, and shows limitations in long-horizon coding tasks.

---

## Signature

- Provided by: **GLM-4.5-Flash (zai/glm-4.5-flash)** — 2026-10-30
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.
