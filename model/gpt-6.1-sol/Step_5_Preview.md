# GPT-6.1 Sol — findings by Step 5 Preview

- Source: OpenAI (`gpt-6.1-sol`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6.1 Sol
- **Short description:** OpenAI's DevDay (2026-09-29) refresh of the GPT-6 series mid-tier — positioned as near-GPT-6-Astra capability for complex coding, computer use and professional work at one-fifth of Astra's per-token price. Replaced GPT-6 Sol just 7 days after that model shipped; Artificial Analysis confirms a 4-point Intelligence Index gain landing 1 point below Astra.
- **Provider / access:** OpenAI Responses API `gpt-6.1-sol` (recommended; Chat Completions works only without tools); ChatGPT Work and Codex for Plus/Pro/Business/Enterprise/Edu (not the consumer Chat product at launch). No OpenCode Zen Free ID found — paid API only.
- **Release / knowledge:** 2026-09-29; knowledge cutoff 2026-04-30.
- **IDs:** `gpt-6.1-sol` (OpenAI); `openai/gpt-6.1-sol-20260929` (OpenRouter route — provider ID only).
- **Context window:** 1,050,000 tokens; 128,000 max output. Long-context cliff: prompts >272K input tokens are repriced for the *whole request* at 2x input/cache and 1.5x output.
- **Modalities:** Text + image in → text out (no audio/video input). Reasoning effort low / medium (default) / high / xhigh / max (the `none` effort is no longer accepted); full tool suite via Responses API — web search, file search, image generation, code interpreter, hosted shell, apply patch, skills, computer use, MCP, tool search; prompt caching; no fine-tuning.
- **Pricing (as of 2026-10-09):** $2.00 / MTok input, $0.10 cached input (5% of fresh, halved vs GPT-6 Sol), $2.50 cache write, $10.00 output; >272K input: $4 / $0.20 / $5 / $15; Fast mode 2x; Batch/Flex 50%; regional processing +10%.
- **Architecture:** Proprietary (weights not released).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **56.1%** (Artificial Analysis, max — #5–9 depending on tracker; Vals 55.0% #6; +12 pts vs GPT-6 Sol)
- AutomationBench-AA: **64.9%** (AA, max — field-leading tier); vendor AutomationBench 1.0.6: 31.7% at medium (+4.8 vs GPT-6 Sol)
- GDPval-AA: **Elo 1575 / 53.8%** (AA, max; +5 pts vs GPT-6 Sol)
- AA-Briefcase v1.1: **Elo 1564** (AA, max)
- OSWorld 2.0 offline set: **71.4%** (vendor, max — within 2.1 pts of Astra's 73.5% at ~1/7 the cost/task)
- Terminal-Bench-Science 0.1: **57.0%** (vendor, max — #5/10; Astra leads at 68.1%)
- Terminal-Bench leaderboard: **58.2%** (#17); APEX-Agents: **60.0%** (#12)
- DeepSWE v1.1: **75.2%** (vendor, high effort — beats GPT-6 Sol's best 68.8% at max, at ~76% lower cost/task)
- Claw-Eval / ClawProBench: **no verified public score found**
- Cost per task: **$0.72** (AA, max) down to **$0.13** (low); output speed 54–55 tok/s (faster than Astra's 45)

Reasoning / knowledge:

- AA Intelligence Index: **51.8–52** (max; 1 point below GPT-6 Astra's 53; +4 vs GPT-6 Sol's 48)
- HLE: **52.9%** (AA, max — #8/97; +5 pts vs GPT-6 Sol)
- GPQA Diamond: **95.4%** (Epoch AI Hub, max — #3); Model Pareto estimate 96.1%
- AA-LCR: **83%** (AA, max)
- CritPt: **31.7%** (AA, max, #4); AA-Omniscience Index 41.5, accuracy 62.1%, hallucination rate 54.3% (down from 60% on GPT-6 Sol)
- SimpleQA Verified: **73.9%** (#2, Epoch); ProofBench: **99.0%** (#4, Vals)
- FrontierMath Tiers 1–3: **93.7%** (#1); Tier 4: **100.0%** (#1); OTIS Mock AIME: **100.0%** (#1) (Epoch, max)
- LiveBench overall: **81.6%** (max, #6); reasoning 92.6% (#2); data analysis 82.7% (#2); mathematics 96.8% (#3)
- Factuality: vendor reports factual-error share on difficult chats falling 11.4% → 7.7% at low effort (~32% relative reduction)

Coding:

- SWE-bench Verified: **~89.6%** (Model Pareto estimate, #2 — no official vendor number); SWE-bench Pro: **~75.0%** (estimated, #5)
- Vibe Code Bench v1.1: **88.9%** (Vals, #7)
- LMArena Coding: **1542** (#8); WebDev Arena: **1757** (#4); Codeforces: **3593** (top of its table)
- SciCode: **54.2%** (AA, max); **55.8%** (AA, high — #24/296)
- SWE-Marathon: **68/160 trials** (42.5%, 59th pct; mean $7.9/trial, 26.7M tokens/trial)
- LiveBench Coding: **80.4%** (max); Agentic Coding 54.5%; AA Coding Index: **82.4** (ArtificialWatch, #6)

Multimodal:

- MMMU-Pro: **86.0%** (AA); GDP.pdf: **31.0%** (AA); BenchLeader multimodal category 66/100

Long context:

- 1.05M window with the >272K repricing cliff; AA-LCR 83% (max) is the only public long-context measure found; **no MRCR/RULER number published**

### Normalized scores (1–100)

- **Tool use: 88/100.** On the current-generation agentic suites it sits at the top of the field: TB4.0 56.1% (#5, +12 pts over GPT-6 Sol), AutomationBench-AA 64.9%, GDPval-AA Elo 1575 and OSWorld 2.0 offline 71.4% (within 2.1 pts of Astra at ~1/7 cost); capped by TB-Science 57.0% (Astra 68.1%), APEX-Agents 60.0% and no public Claw-Eval.
- **Reasoning: 92/100.** AA Intelligence Index 51.8 (1 point below Astra, #1-tier), HLE 52.9%, GPQA 95.4%, FrontierMath T4 100% and ProofBench 99.0% are frontier-band across the board; CritPt 31.7% and GDP.pdf 31.0% keep it a notch off a perfect composite.
- **Context window: 93/100.** 1,050,000-token window with 128K output is the ≥1M tier; AA-LCR 83% (max) is strong, but the 100 tier needs ≥98% retrieval at 512K+ (no MRCR published) and the >272K cliff reprices the entire request 2x/1.5x.
- **Multimodal: 72/100.** Text + image in → text out with MMMU-Pro 86.0% and WebDev Arena 1757 (#4) above the plain image-input band; GDP.pdf 31.0% and no video/audio input or non-text output hold it below the 75–90 tier.
- **Coding: 90/100.** DeepSWE 75.2% (vendor, high effort), SWE-bench Verified ~89.6% (estimated), Vibe Code Bench 88.9% and WebDev/LMArena Coding top-8 placements are frontier-band; capped because the headline coding numbers are vendor-run (independent harnesses pending), SWE-Marathon lands at 42.5%, and SciCode 54.2% remains mid-pack.
- **Cost efficiency: 62/100.** $2/$10 per MTok maps to the same tier as Claude Sonnet 5 (between the methodology's $3/$15 ≈ 60 and $0.60/$2.20 ≈ 92), with the $0.10 cache read (5% of fresh) and a measured $0.72/task at max effort softening it — roughly one-fifth of Astra's task cost, but no free tier.
- **Overall Score: 87/100.** Best-fit recommendation: the value flagship — Astra-class agentic coding, computer use and reasoning at a fifth of Astra's per-token price with faster output; the default pick for budget-conscious frontier agentic work.

---

## Signature

- Provided by: **Step 5 Preview (StepFun)** — 2026-10-09
- Method: public internet research (OpenAI model/pricing docs + DevDay announcement + Deployment Safety Hub system card, Artificial Analysis releases/article, BenchLeader, BenchmarkList, BenchLM, Model Pareto, ArtificialWatch, developer-community analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Grok_4.6.md`, using the same headings.
