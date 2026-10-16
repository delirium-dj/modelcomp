# GPT-6 Sol — findings by DeepSeek 4.1 Flash

- Source: OpenAI/GPT-6 Sol (`gpt-6-sol`)
- Date: 2026-10-16 (UTC) — third pass (previous Signatures 2026-10-05 / 2026-09-23)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Third-pass refresh — 2026-10-16** (sources: BenchLM, Artificial Analysis, ARC Prize, OpenAI GPT-6 launch post and GPT-6 Astra system card, Nous Research).
> The 2026-10-05 pass had large gaps; BenchLM now covers **32 benchmarks** and scores GPT-6 Sol **78.45/100 (#9 of 950)**. New rows: **OSWorld 2.0 60.5%**, **Agents' Last Exam 56.4%**, **AutomationBench 33.2%**, **ExploitGym 22.1%**, **CWE-bench v1 52.0%**, **AA-ITBench 49.4%**, **GDPval-AA normalized 50.4%**, **Hermes Index 44.1 / Hermes Bench 73.5**, **MazeBench 7%**, **DeepSWE 68.8%**, **AA-SciCode 57.6%**, **AA-MMMU-Pro 82.9%** (first vision row for this ID), **AA-LCR 83.7%**, **CritPt 30.9%**, **ARC-AGI-1 95.50% / ARC-AGI-2 89.6% / ARC-AGI-3 4.6%** (ARC Prize verified), **FrontierMath v2 T1-3 89.825% / T4 90.000%** (Epoch AI — the earlier pass had no FrontierMath), **HealthBench** family (raw 47.1, length-adjusted 53.2, Professional 60.8, Hard 30.1), **Gray Swan IPI 10.1%**, and **AA-Omniscience Index 27.1** (accuracy 54.5%, hallucination 60.1%). AA Intelligence Index is confirmed at **47.6** (v4.3.2).
> **Conflicts surfaced:** (1) **AA Intelligence Index 47.6 / 47.5–48** vs BenchLM's own composite 78.45 — different scales. (2) **GDPval-AA 49.3% (earlier pass) vs 50.4% (AA normalized now)** — minor drift. (3) Omniscience **accuracy 54.5% but hallucination 60.1%** — a high 2:1 correct-to-hallucinated ratio that the 27.1 index still rates positively. (4) Still no Terminal-Bench 2.1, Tau3-Banking, Toolathlon, Claw-Eval or MCP-Atlas row for this ID.
> Sources: https://benchlm.ai/models/gpt-6-sol · https://artificialanalysis.ai/models/gpt-6-sol · https://openai.com/index/introducing-gpt-6-sol-and-luna/ · https://arcprize.org/results/openai-gpt-6-sol · https://deploymentsafety.openai.com/gpt-6-astra

## Model card

- **Name:** GPT-6 Sol
- **Short description:** OpenAI's cost-efficient high-end model in the GPT-6 series, released 2026-09-22, positioned below the GPT-6 Astra flagship and above the fast GPT-6 Luna tier — suited to demanding professional work, agentic coding, business workflow automation and computer use, with particular strength on long-horizon software engineering in real codebases. Not an alias: GPT-6 Astra / Astra Pro / Luna / Terra are separate IDs and prices. Its API price was halved on 2026-09-25, and the GPT-6.1 Sol refresh followed on 2026-09-29.
- **Provider / access:** OpenAI API (`gpt-6-sol`; served on Responses and Chat Completions — Chat Completions supports function calling only with `reasoning_effort` set to `none`), plus Live / Realtime / Batch and Azure; OpenCode Zen route `opencode/gpt-6-sol`. EU data residency available with Standard processing only.
- **Release / knowledge:** released 2026-09-22; knowledge cutoff 2026-04-20.
- **IDs:** `openai/gpt-6-sol`; Zen `opencode/gpt-6-sol`. No Free ID verified → cost scored on paid pricing.
- **Context window:** **1,050,000** input (max input 922,000 per llm-stats) with **128,000** max output; Artificial Analysis reports 872K for the `max` variant it benchmarks, so treat ~1M as the working figure and pin the variant before relying on it. Prompts over 272K input tokens are billed 2× input/cache and 1.5× output.
- **Modalities:** text + image in → text out (audio and video not supported); reasoning with `reasoning_effort` none/low/medium(default)/high/xhigh/max; streaming; function calling; structured outputs; Responses tools include web search, file search, image generation, code interpreter, hosted shell, apply patch, skills, computer use, MCP and tool search.
- **Pricing (as of 2026-10-16):** **~$1.00 in / $5.00 out per 1M tokens** — OpenAI halved the GPT-6 Sol/Luna API prices on 2026-09-25 (was $2.00/$10.00 at launch). Cached input ~$0.10; cache writes ~$1.25; blended ≈$0.77 per 1M at a 7:2:1 cache/input/output ratio. Batch and Flex 50% of Standard; Fast mode 2×; regional processing +10%.
- **Architecture:** proprietary; no parameter disclosure.

### Raw benchmarks found

Agent / tool use:

- OSWorld 2.0: **60.5%** (OpenAI); Agents' Last Exam: **56.4%** (OpenAI); AutomationBench: **33.2%** (OpenAI)
- GDPval-AA: **50.4%** normalized (Artificial Analysis; earlier pass recorded 49.3%)
- AA-ITBench: **49.4%**; AA-Agentic rows via the Intelligence Index; CWE-bench v1 **52.0%**; ExploitGym **22.1%**
- Hermes Index **44.1** / Hermes Bench **73.5**; MazeBench **7%** (ASCII +tools)
- Terminal-Bench 2.1 / Tau3-Banking / τ²-bench / Toolathlon / Claw-Eval / MCP-Atlas: no verified public score found
- Artificial Analysis Intelligence Index: **47.6** (v4.3.2, made of AA-Briefcase v1.1, GDPval-AA v2.1, AutomationBench-AA, Terminal-Bench 4.0, SciCode, HLE, GDP.pdf, CritPt, AA-Omniscience, AA-LCR v1.1)
- Sibling event: OpenAI halved GPT-6 Sol/Luna prices on 2026-09-25 and shipped GPT-6.1 Sol on 2026-09-29 (higher DeepSWE/AutomationBench) — the successor is a separate slug

Reasoning / knowledge:

- HLE: **47.9%** (AA) — frontier band (40%+); CritPt: **30.9%** (AA)
- ARC-AGI-1 **95.50%** / ARC-AGI-2 **89.6%** / ARC-AGI-3 **4.6%** (ARC Prize, verified, `max` variant)
- FrontierMath v2 Tiers 1-3 **89.825%** / Tier 4 **90.000%** (Epoch AI)
- AA-Omniscience Index **27.1** / Accuracy **54.5%** / Hallucination Rate **60.1%** (AA)
- GPQA Diamond, MMLU-Pro, IFBench, AIME and Epoch Capabilities Index: no verified public score found
- Verbosity/efficiency: ~77M output tokens while running the Intelligence Index; ~$1.06 cost per Intelligence Index task at launch pricing (lower after the price cut)

Coding:

- DeepSWE: **68.8%** (OpenAI); SciCode: **57.6%** (AA) — clears the repo's 55% frontier reference
- SWE-bench Verified / SWE-bench Pro / LiveCodeBench / SWE-bench Multilingual: no verified public score found
- Speed: 115.9 output tok/s with a 136.12 s TTFT on the `max` variant (AA); OpenRouter shows 2.91 s P50 latency at 46 tps on OpenAI with 100.00% three-day uptime

Multimodal:

- AA-MMMU-Pro: **82.9%** (Artificial Analysis) — the first vision benchmark published for this ID
- HealthBench raw **47.1%** / length-adjusted **53.2%** / Professional **60.8%** / Professional raw **59.5%** / Hard **30.1%** (GPT-6 Astra system card)

Long context:

- AA-LCR **83.7%** is the strongest long-context retrieval measurement found — good but below the 95%+ frontier reference used for the top of the context band.

### Normalized scores (1–100)

- **Tool use: 84/100.** OSWorld 2.0 60.5%, Agents' Last Exam 56.4%, GDPval-AA 50.4%, ITBench 49.4% and DeepSWE 68.8% are frontier-adjacent and fill the agentic gaps the earlier pass flagged; the missing Terminal-Bench/Tau3/Toolathlon and the moderate AutomationBench 33.2% keep it out of the top band.
- **Reasoning: 88/100.** AA Intelligence Index 47.6 with HLE 47.9%, CritPt 30.9%, ARC-AGI-2 89.6% and FrontierMath Tier 4 90.0% is a strong frontier-adjacent profile (frontier Index ref 60+), but the Index below 60 and the high 60.1% hallucination rate cap the 90+ band.
- **Context window: 94/100.** 1.05M input / 128K output is the ≥1M tier, held below the floor-plus level because retrieval is demonstrated rather than saturated (AA-LCR 83.7%), the AA-benchmarked `max` variant is listed at 872K, and inputs above 272K are surcharged 2×.
- **Multimodal: 70/100.** Text + image in → text only with a strong AA-MMMU-Pro 82.9% — the top of the "+image in = 60–70" band; no audio or video input and no image/file output.
- **Coding: 84/100.** DeepSWE 68.8% and SciCode 57.6% (both above the repo frontier refs) support mid-80s; capped because SWE-bench Verified/Pro and LiveCodeBench still have no verifiable score.
- **Cost efficiency: 78/100.** The 2026-09-25 price cut to **~$1.00 in / $5.00 out** (from $2.00/$10.00) with a 90% cache discount (cached ~$0.10, ≈$0.77 blended) moves it from the ~$3/$15 tier to just above the ~$1.25/$4.25 ≈ 88 anchor; Batch/Flex at 50% helps high-volume use.
- **Overall Score: 84/100.** (84 + 88 + 94 + 70 + 84) / 5 = 84.0 → **84**. Best fit: the value tier of OpenAI's GPT-6 line — near-flagship reasoning, agentic and long-context retrieval at a fraction of Astra's price, provided your workload is text+image and you can live with the very high TTFT seen in reasoning-max mode.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek/deepseek-v4.1-flash)** — 2026-10-16
- Method: public internet research; third-pass re-verification on 2026-10-16 against BenchLM (overall 78.45, #9/950), Artificial Analysis, ARC Prize verified results, the OpenAI GPT-6 launch post and GPT-6 Astra system card, and Nous Research, adding the first OSWorld/AutomationBench/DeepSWE/MMMU-Pro/ARC-AGI/FrontierMath/HealthBench rows over the 2026-10-05 and 2026-09-23 passes (Overall 83 → 84). Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
