# GPT-6 Sol — findings by DeepSeek 4.1 Flash

- Source: OpenAI/GPT-6 Sol (`gpt-6-sol`)
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Sol
- **Short description:** OpenAI's cost-efficient high-end model in the GPT-6 series, released 2026-09-22, positioned below the GPT-6 Astra flagship and above the fast GPT-6 Luna tier — suited to demanding professional work, agentic coding, business workflow automation and computer use, with particular strength on long-horizon software engineering in real codebases. Not an alias: GPT-6 Astra / Astra Pro / Luna / Terra are separate IDs and prices.
- **Provider / access:** OpenAI API (`gpt-6-sol`; served on Responses and Chat Completions — Chat Completions supports function calling only with `reasoning_effort` set to `none`), plus Live / Realtime / Batch and Azure; OpenCode Zen route `opencode/gpt-6-sol`. EU data residency available with Standard processing only.
- **Release / knowledge:** released 2026-09-22; knowledge cutoff 2026-04-20.
- **IDs:** `openai/gpt-6-sol`; Zen `opencode/gpt-6-sol`. No Free ID verified → cost scored on paid pricing.
- **Context window:** 1,050,000 input (max input 922,000 per llm-stats) with 128,000 max output; Artificial Analysis reports 872K for the `max` variant it benchmarks, so treat ~1M as the working figure and pin the variant before relying on it. Prompts over 272K input tokens are billed 2× input/cache and 1.5× output.
- **Modalities:** text + image in → text out (audio and video not supported); reasoning with `reasoning_effort` none/low/medium(default)/high/xhigh/max; streaming; function calling; structured outputs; Responses tools include web search, file search, image generation, code interpreter, hosted shell, apply patch, skills, computer use, MCP and tool search.
- **Pricing (as of 2026-09-23):** $2.00 in / $10.00 out per 1M tokens; cached input $0.20; cache writes $2.50 (1.25×); blended ≈$1.54 per 1M at a 7:2:1 cache/input/output ratio; Batch and Flex 50% of Standard; Fast mode 2×; regional processing +10%.
- **Architecture:** proprietary; no parameter disclosure.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found** (Terminal-Bench 4.0 contributes to the AA Index for this model, but its individual row was not exposed on the pages checked)
- Tau3-Banking / τ²-bench: **no verified public score found**
- GDPval-AA: **49.3%** (Artificial Analysis via OpenRouter, checked 2026-09-24 — competitive percentage form, not Elo)
- OSWorld / AutomationBench-AA / Toolathlon / Claw-Eval / MCP-Atlas: **no verified public score found** (AutomationBench-AA is one of the ten evaluations inside the AA Index)
- Artificial Analysis Intelligence Index: **47.5** (OpenRouter) / **48, rank #18 of 210** (Artificial Analysis model page) — v4.3.2 index made of AA-Briefcase v1.1, GDPval-AA v2.1, AutomationBench-AA, Terminal-Bench 4.0, SciCode, HLE, GDP.pdf, CritPt, AA-Omniscience and AA-LCR v1.1

Reasoning / knowledge:

- HLE: **47.9%** (AA via OpenRouter) — frontier band (40%+)
- CritPt: **30.9%** (AA via OpenRouter) — the strongest CritPt figure in this batch
- Omniscience / hallucination: AA-Omniscience Accuracy **54.5%** with non-hallucination rate **39.9%** (AA via OpenRouter)
- GPQA Diamond, MMLU-Pro, IFBench, AIME, FrontierMath, ARC-AGI-1/2 and Epoch Capabilities Index: **no verified public score found** on the pages checked
- Verbosity/efficiency: 77M output tokens generated while running the Intelligence Index, $1.06 cost per Intelligence Index task (AA)

Coding:

- SWE-bench Verified / SWE-bench Pro / DeepSWE / LiveCodeBench / SWE-bench Multilingual: **no verified public score found**
- SciCode: **57.6%** (AA via OpenRouter) — clears the 55% frontier reference used in this repo's methodology
- Speed (context for coding agents): 115.9 output tok/s with a 136.12 s TTFT on the `max` variant (AA); OpenRouter provider rows show 2.91 s P50 latency at 46 tps on OpenAI with 100.00% three-day uptime

Long context:

- AA-LCR **83.7%** is the only long-context retrieval measurement found — good but below the 95%+ frontier reference used for the top of the context band.

### Normalized scores (1–100)

- **Tool use: 82/100.** GDPval-AA 49.3% is frontier-adjacent (frontier refs are Elo ~1750; the percentage form here sits close to the leaders) and the model is explicitly positioned for agentic coding and computer use, but Terminal-Bench, Tau3-Banking, OSWorld and every Claw/MCP harness score were missing for this ID — that gap is what stops it short of the top band.
- **Reasoning: 88/100.** AA Intelligence Index 47.5–48 with HLE 47.9%, CritPt 30.9% and AA-Omniscience accuracy 54.5% is a strong frontier-adjacent profile (frontier Index ref 60+, HLE 40%+), but with the Index below 60 and no GPQA/AIME/FrontierMath rows published, the 90+ band cannot be claimed.
- **Context window: 94/100.** 1.05M input / 128K output is the ≥1M tier, held below the floor-plus level because retrieval is demonstrated rather than saturated (AA-LCR 83.7%), the AA-benchmarked `max` variant is listed at 872K, and inputs above 272K are surcharged 2×.
- **Multimodal: 68/100.** Text + image in → text only (bottom of the "+image in = 60–70" band); no audio or video input, no image/file output, and no published vision benchmark for this ID.
- **Coding: 84/100.** SciCode 57.6% clears the 55% frontier reference and OpenAI positions Sol for long-horizon software engineering in real codebases; capped because SWE-bench Verified, SWE-bench Pro, DeepSWE and LiveCodeBench all had no verifiable score, so the 90+ band (DeepSWE 74%+, TB 85%+) is unreachable on evidence.
- **Cost efficiency: 66/100.** $2.00 in / $10.00 out with a 90% cache discount (cached $0.20, ≈$1.54 blended, $1.06 per Intelligence Index task) is better than the $3/$15 ≈ 60 anchor but well short of the $1.25/$4.25 ≈ 88 anchor; Batch/Flex at 50% helps high-volume use.
- **Overall Score: 83/100.** (82 + 88 + 94 + 68 + 84) / 5 = 83.2 → **83**. Best fit: the value tier of OpenAI's GPT-6 line — near-flagship reasoning and long-context retrieval at a fifth of Astra's price, provided your workload is text+image and you can live with the very high TTFT seen in reasoning-max mode.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek/deepseek-v4.1-flash)** — 2026-09-23 (UTC)
- Method: public internet research (OpenAI API model catalog page for specs, modalities, tools, pricing and knowledge cutoff; Artificial Analysis model page for the Intelligence Index, speed, cost-per-task and context; OpenRouter model page for the AA benchmark row set; llm-stats for token limits and licence); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
