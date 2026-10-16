# GPT-6 Sol — findings by Cat Jam

- Source: OpenAI / GPT-6 Sol (`opencode/gpt-6-sol`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Sol
- **Short description:** Entry-level GPT-6 "Sol" tier built for complex coding and agentic workflows at very low price; multi-tier reasoning (`none` to `max`) and an `ultra` multi-agent mode.
- **Provider / access:** OpenAI API (`gpt-6-sol`), ChatGPT (Plus+), Codex. Responses + Chat Completions. Text/image in; text out.
- **Release / knowledge:** Released 2026-09-22; knowledge cutoff 2026-04-20 (per docs).
- **IDs:** `gpt-6-sol` (OpenAI), `openai/gpt-6-sol` (OpenRouter)
- **Context window:** 1,050,000 tokens total (922,000 max input / 128,000 max output).
- **Modalities:** Text, image in; text out. Tools (web/file search, code interpreter, hosted shell, apply_patch, skills, computer use, MCP, tool_search). Reasoning effort none/low/medium/high/xhigh/max; `ultra` runs concurrent subagents (costs ~3x).
- **Pricing (as of 2026-10-16):** $2 input / $10 output per 1M (cached $0.20, cache write $2.50); >272K request: $4/$15 input/output; Batch/Flex half (Fast 2x).
- **Architecture:** Proprietary GPT-6 generation; ultra mode coordinates subagents via multi-agent beta.

### Raw benchmarks found

Agent / tool use:

- AutomationBench 1.0.6: **33.2%** at xhigh (vendor)
- Agents' Last Exam V1: **56.4%** (max) (vendor) / cost $2.93
- OSWorld 2.0 offline: **60.5%** at xhigh (partial, offline)
- GDPval-AA Elo: **1501?** benchgap/vals? AA GDPval 50.4% (measured); GPT-6 Astra compare said? Use AA measured 50.4%.
- Agents' Last Exam (AA vendor V1) 56.4
- AutoBench-AA 33.2 (vendor; AA 33.2)
- JobBench 64.8 (benchgap est)
- FrontierCode 1.1 Main: 49.3 (max, vendor) / 47.5 (GPT-5.6 Sol at high)
- TB2.1 (vendor max): 88.3? vendor? S5 Labs? Actually GPT-6 Sol Terminal-Bench 2.1? Not directly found in OpenAI table but emergent says Terminal-Bench 4 (AA) 43.9; vendor perhaps not listed.
- DeepSearchQA 90.3 (benchgap est)
- CyberGym (AA vs vendor?); vendor not listed in sampled data (AA 81.1 measured? benchgap)

Reasoning / knowledge:

- AA Intelligence Index (max, v4.3.2): **47.6–48.0** (AA article/AskClash: 48 on max)
- HLE (AA, no tools): **47.9%**
- HLE w/ tools: 60.5% est (emergent? not vendor)
- GPQA Diamond: **94.3%** AA est / 94.9 est (benchgap) / 95.2 vals
- ARC-AGI-2: **89.6%** (Lounge.ai)
- LCR / AA-LCR: **83.7%** (benchgap measured)
- CritPt: **30.9%** (AA)
- Omniscience Accuracy: **54.5%** (AA)
- MMMU-Pro: 82.9% (AA)

Coding:

- DeepSWE v1.1: **68.8%** (max, vendor) (GPT-5.6 Sol 72.7)
- FrontierCode 1.1 Main: **49.3%** (max)
- AutomationBench 33.2 at xhigh
- SWE-Bench Pro: 71.1% (benchgap est; not vendor)
- AA-Coding Index: AskClash 43.9? Emergent reports AA Coding Index? Not found; AA 57? (benchgap AA maybe no Coding Index listed). Use not reliable.
- FrontierSWE/ProgramBench not found.

Long context:

- MRCR/GraphWalks not published for GPT-6 Sol in sampled sources (base GPT-6.1? Wait GPT-6 Sol docs do not release MRCR; OpenAI's GPT-6.1 Sol commentary only? No). No number.

### Normalized scores (1–100)

- **Tool use: 85/100.** AutomationBench 33.2, Agents' Last Exam 56.4, OSWorld 60.5, DeepSearchQA 90.3, GDPval 50.4% (AA). Good agentic value, behind Astra/Opus on headline. (Ultramode unverified caps.)
- **Reasoning: 86/100.** HLE 47.9, GPQA 94.9, AA Index 48, LCR 83.7, CritPt 30.9, ARC-AGI-2 89.6. Strong reasoning at low cost.
- **Context window: 90/100.** 1.05M declared; no published MRCR/graphwalk (GPT-5.6 Sol MRCR 91.5/73.8 may approximate; here no publish, cap near 90).
- **Multimodal: 82/100.** Text/image in/out text; MMMU-Pro 82.9, OSWorld 60.5; no audio/video input.
- **Coding: 86/100.** DeepSWE 68.8, FrontierCode 49.3, SWE-Pro 71.1 est, OSWorld offline; unreported Terminal-Bench 4; good but not frontier leadership.
- **Cost efficiency: 90/100.** $2/$10 with cache 90% off; genuinely cheap; batch half. Outstanding value.
- **Overall Score: 86/100.** Mean of (85 + 86 + 90 + 82 + 86) / 5 = 85.8. Cheaper GPT-6 tier matching GPT-5.6 Sol intelligence at half cost.

---

## Signature

- Provided by: **Cat Jam (opencode/cat-jam-free)** — 2026-10-16
- Method: Public web research (OpenAI docs/blog/pricing, Artificial Analysis/Emergent/Benchgap/BenchLM/Lounge/ShawnHack/AskClash/Minirouter); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
