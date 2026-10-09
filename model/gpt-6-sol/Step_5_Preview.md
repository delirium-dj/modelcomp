# GPT-6 Sol — findings by Step 5 Preview

- Source: OpenAI (`gpt-6-sol`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Sol
- **Short description:** OpenAI's mid-tier GPT-6 model (released 2026-09-22 alongside Luna, below flagship Astra) — built for complex coding and agentic workflows at half of GPT-5.6 Sol's promotional price ($2/$10). DeepSWE-class coding within ~1 point of Claude Fable 5 at ~80% lower cost per task, with a large factuality improvement. Replaced by GPT-6.1 Sol just 7 days later at the same price; still served on the API.
- **Provider / access:** OpenAI Responses API `gpt-6-sol`; ChatGPT Work and Codex (Plus/Pro/Business/Enterprise/Edu; not in consumer Chat at launch); OpenRouter `openai/gpt-6-sol-20260922`; Azure, Amazon Bedrock. No OpenCode Zen Free ID found — paid API only.
- **Release / knowledge:** 2026-09-22; knowledge cutoff 2026-04-20.
- **IDs:** `gpt-6-sol` (OpenAI), `openai/gpt-6-sol-20260922` (OpenRouter route).
- **Context window:** 1,050,000 tokens (922K max input); 128,000 max output.
- **Modalities:** Text + image in → text out (no audio/video). Reasoning effort: none / low / medium (default) / high / xhigh / max; Responses-API tools (web search, file search, image gen, code interpreter, hosted shell, apply-patch, computer use, MCP); improved prompt caching (90% off cached reads, effort changes no longer break the cache). No fine-tuning.
- **Pricing (as of 2026-10-09):** $2.00 / MTok input, $10.00 output; cached input $0.20; cache write $2.50; **>272K input tokens: the whole request reprices to $4 / $15**; Batch/Flex 50%; Fast mode 2x; EU residency +10%.
- **Architecture:** Proprietary (undisclosed parameters; reasoning transformer trained with Astra-like methods).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **83.15% ±1.30** (Vals AI, Terminus-2, max — independent; #6); RankLLMs lists 85.5%
- Terminal-Bench 4.0: **43.9%** (AA, max) / 44.4% (Vals mini-swe) / 49.39% (official board, Codex max, ±3.23) — #8–23 depending on harness
- AutomationBench: **33.2%** at xhigh, $0.27/task (OpenAI launch; beats Claude Opus 5 max's 26.9% at 11.1x the cost); AA's guardrail-adjusted AutomationBench reads 61.6%
- GDPval-AA v2.1: **50.5%** (AA, max — #45)
- Agents' Last Exam: **56.4%** (vendor, max — partial-credit basis; Snorkel's pass-rate row reads 32.2 at XHigh)
- OSWorld 2.0 offline: **60.5%** at xhigh (partial reward; Opus 5 medium 60.3%)
- FrontierCode 1.1 Main: **49.3%** (max; vs Fable 5.1 xhigh 53.4%, Opus 5.5 54.4%)
- APEX-Agents: **54.3%** (#22); ITBench SRE: **49.4%**; Terminal-Bench-Science: **30.0%** (Vals #6)
- Claw-Eval / ClawProBench: **no verified public score found**
- Cost per task: **$1.06** (AA coding task estimate; $2.74 on OpenAI's DeepSWE chart, $0.27 AutomationBench)

Reasoning / knowledge:

- AA Intelligence Index: **47.6–48** (v4.3.2, max — #25 of 427 per BenchLeader; #10/52 per ShawnHack)
- GPQA Diamond: **94.3%** (Epoch AI Hub, max — #8)
- HLE: **47.9%** (AA, max, text-only — #32)
- ARC-AGI-2: **89.6%** (ARC Prize, max)
- LiveBench: **79.3%** overall (max); reasoning 88.7%
- SciCode: **57.6%** (AA, max); CritPt: **30.9%** (AA, max)
- AA-LCR: **83.7%** (AA, max)
- MMMU-Pro: **82.9%** (AA)
- Factuality: internal eval mistakes roughly halved vs GPT-5.6 Sol; AA hallucination rate fell 92% → 60%

Coding:

- DeepSWE v1.1: **68.8%** (vendor, max) / **69.0%** (AA's own Codex-agent run, max — independent agreement within 1 point); Fable 5 leads at 69.9% xhigh, Opus 5 peaks 73.7%
- SWE-bench Verified: **84.8%** (RankLLMs aggregate); SWE-bench Pro: **no verified public score found**
- AA Coding Agent Index: **57** (vs 55 for GPT-5.6 Sol); LiveBench Agentic Coding 52.9%
- Coding-deception rate fell to 1.3% from 10.4% (OpenAI internal test)

Long context:

- 1.05M window with the >272K whole-request repricing cliff; AA-LCR 83.7% (AA, max) is the only published long-context measure; **no MRCR/RULER**

### Normalized scores (1–100)

- **Tool use: 84/100.** Terminal-Bench 2.1 83.2% (Vals), AutomationBench 33.2% at $0.27/task (beating Opus 5 max on cost-efficiency), GDPval-AA 50.5% and OSWorld 2.0 60.5% are solidly mid-frontier; capped by Terminal-Bench 4.0 at 43.9–49.4%, FrontierCode 49.3%, and the vendor/independent noise-band tie with GPT-5.6 Sol.
- **Reasoning: 88/100.** GPQA 94.3%, HLE 47.9%, ARC-AGI-2 89.6%, SciCode 57.6% and the AA Intelligence Index 47.6 (max) sit in the frontier band, backed by a measured hallucination-rate drop (92% → 60%); capped by CritPt 30.9% and HLE ~6 points behind GPT-6.1 Sol.
- **Context window: 94/100.** 1,050,000-token window (922K input) with 128K output is the ≥1M tier, and AA-LCR 83.7% at max effort is among the best published; the 100 tier's ≥98% retrieval at 512K+ is unverifiable (no MRCR), and the >272K cliff reprices the entire request 2x/1.5x.
- **Multimodal: 70/100.** Text + image in → text out is the 60–70 band, at its top on MMMU-Pro 82.9%; no video/audio input or non-text output.
- **Coding: 85/100.** DeepSWE v1.1 68.8–69.0% (vendor and AA agree within a point, ~1.1 points off Fable 5's best), Terminal-Bench 2.1 83.2%, SWE-bench Verified 84.8% and Coding Agent Index 57 are frontier-band at half the predecessor's price; capped by no published SWE-bench Pro and FrontierCode 49.3%.
- **Cost efficiency: 62/100.** $2/$10 per MTok is the same tier as Claude Sonnet 5 and GPT-6.1 Sol (between the methodology's $3/$15 ≈ 60 and $0.60/$2.20 ≈ 92), with 90%-off cache reads and a measured $1.06/task; the >272K cliff doubles input on the whole request, and there is no free tier.
- **Overall Score: 84/100.** Best-fit recommendation: the cost-efficiency workhorse for agentic coding — near-Fable-5 DeepSWE performance at a fifth of the per-task cost, with the best factuality trend in the GPT-6 family.

---

## Signature

- Provided by: **Step 5 Preview (StepFun)** — 2026-10-09
- Method: public internet research (OpenAI launch post + model/pricing docs, Artificial Analysis via The Model Gap/ShawnHack/BenchLeader, Vals AI, Snorkel, ARC Prize, The New Stack, HITL Systems, HokAI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Grok_4.6.md`, using the same headings.
