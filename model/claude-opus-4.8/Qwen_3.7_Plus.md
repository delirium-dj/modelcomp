# Claude Opus 4.8 — findings by Qwen 3.7 Plus

- Source: Anthropic/Claude Opus 4.8 (`anthropic/claude-opus-4.8`)
- Date: 2026-10-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.8
- **Short description:** Anthropic's Opus-tier flagship, released May 28, 2026. Direct upgrade to Opus 4.7 at the same price. Introduced parallel-subagent dynamic workflows in Claude Code for codebase-scale migrations, mid-task system messages on the Messages API, and an optional 2.5× fast mode. SWE-bench Verified 88.6%, SWE-bench Pro 69.2%, Terminal-Bench 2.1 74.6%. USAMO 2026 at 96.7% is near-perfect. HLE 57.9% (with tools) was best-in-class at release. GDPval-AA Elo 1890 led at release. Now superseded by Claude Opus 5, Opus 5.5, and the Fable tier. Notable alignment improvement: 4× fewer unflagged flaws in self-written code and 17× fewer dishonest agentic code summaries vs. Sonnet 4.6. Text and image input only.
- **Provider / access:** Anthropic API; Claude.ai; Amazon Bedrock; Google Vertex AI; Microsoft Foundry. Paid only. No free tier. No OpenCode Zen ID.
- **Release / knowledge:** 2026-05-28 release; knowledge cutoff January 2026 (per Anthropic transparency page). Now Legacy status.
- **IDs:** `anthropic/claude-opus-4-8` (Anthropic API). No free OpenCode Zen ID.
- **Context window:** 1,000,000 tokens (1M) total; 128,000 max output.
- **Modalities:** Text and image in; text out. No audio, video, or PDF input. Reasoning: configurable effort levels (high default; xhigh and max available). Tool calls supported. Parallel-subagent dynamic workflows in Claude Code.
- **Pricing (as of 2026-10-10):** $5/$25 per 1M input/output tokens (standard mode). Fast mode: $10/$50 (2.5× speed, double price). Same price as Opus 4.7. Three times cheaper than fast mode on previous Claude models.

### Raw benchmarks found

Agent / tool use:

- τ²-bench: **94.4%** (Artificial Analysis)
- DeepSearchQA: **93.1%** (Anthropic)
- MCP Atlas: **82.2%** (Anthropic; vs Opus 4.7 77.3%, +4.9)
- OSWorld-Verified: **83.4%** (Anthropic; vs Opus 4.7 78.0%, +5.4; updated harness)
- OSWorld 2.0: **20.6%** (OSWorld 2.0 paper — much harder version)
- BrowseComp (single-agent): **84.3%** (Anthropic; vs Opus 4.7 79.3%, +5.0)
- BrowseComp (multi-agent): **88.5%** (Anthropic)
- Terminal-Bench 2.1: **74.6%** (Anthropic; Vals: 71.9%)
- Toolathlon: **59.9%** (Anthropic)
- GDPval-AA Elo: **1593** (Anthropic system card) / **1890** (llm-stats launch report)
- GDPval-AA normalized: **47.8%** (AA)
- AA Agentic Index: **42.6%** (AA)
- Finance Agent v2: **53.9%** (Anthropic)
- Gert Labs: **72.97%** (Gert Labs)
- ResearchClawBench: **21.1%** (ResearchClawBench)
- Terminal-Bench 3.0: **21.1%** (Terminal-Bench 3.0)

Coding:

- SWE-bench Verified: **88.6%** (Anthropic; Vals) / up from 87.6% on Opus 4.7
- SWE-bench Pro: **69.2%** (Anthropic; vs Opus 4.7 64.3%, +4.9)
- SWE-bench Multilingual: **84.4%** (Anthropic)
- SWE-bench Multimodal: **38.4%** (Anthropic)
- Terminal-Bench 2.1: **74.6%** (Anthropic)
- LiveCodeBench (Vals): **87.8%** (Vals AI)
- CursorBench 3.2: **62.3%** (Cursor evals)
- CursorBench 3.1: **58.4%** (Cursor evals)
- AA Coding Index: **74.3%** (AA)
- AA-SciCode: **54.4%** (AA)
- FrontierCode 1.1 Main: **46.5%** (Cognition)
- PostTrainBench v1.1: **32.9%** (PostTrainBench)

Multimodal:

- ScreenSpot Pro: **87.9%** (Anthropic — excellent UI grounding)
- CharXiv (with tools): **89.9%** (Anthropic)
- CharXiv (without tools): **80.5%** (Anthropic)
- OfficeQA Pro: **66.2%** (Anthropic)
- Design Arena Website: **1262** (OpenRouter)

Reasoning / knowledge:

- USAMO 2026: **96.7%** (Anthropic — near-perfect)
- HLE (with tools): **57.9%** (Anthropic; vs Opus 4.7 54.7%, +3.2)
- HLE (without tools): **49.8%** (Anthropic; vs Opus 4.7 46.9%, +2.9)
- GPQA Diamond: **93.6%** (Anthropic) / **92.0%** (AA) / **92.4%** (Vals AI)
- ARC-AGI-2: **72.1%** (ARC Prize)
- ARC-AGI-1: **92.5%** (ARC Prize — verified)
- ARC-AGI-3: **1.5%** (ARC Prize)
- MMLU-Pro: **89.6%** (Vals AI)
- AA Intelligence Index: **41.8%** (AA — low by current standards)
- AA-Omniscience Index: **28.8%** (AA)
- AA-Omniscience Accuracy: **48.8%** (AA)
- AA-Omniscience Hallucination Rate: **39.3%** (AA — good calibration)
- AA-LCR (Long Context Reasoning): **77.7%** (AA)
- CritPt (Physics): **20.9%** (AA)
- IFBench: **62.2%** (AA)
- FrontierMath v2 Tiers 1–3: **47.2%** (Epoch AI)
- FrontierMath v2 Tier 4: **31.25%** (Epoch AI)

Long context:

- AA-LCR: **77.7%** (AA)
- GraphWalks BFS (256K): **85.9%** / (1M): **68.1%**
- GraphWalks Parents (256K): **99.3%** / (1M): **83.3%**

### Normalized scores (1–100)

- **Tool use: 83/100.** τ²-bench at 94.4% is excellent. DeepSearchQA 93.1% is strong. MCP Atlas 82.2% is solid. OSWorld-Verified 83.4% demonstrates strong real-world computer use. BrowseComp 84.3% (88.5% multi-agent) is competitive. However, AA Agentic Index 42.6% is modest, GDPval-AA normalized 47.8% is moderate, and Terminal-Bench 2.1 at 74.6% trails successors (Fable 5 84.3%, GPT-5.6 Sol 91.9%). The tool use profile was strong at release but has been surpassed by newer models.
- **Reasoning: 72/100.** USAMO 2026 at 96.7% is near-perfect — a standout result. HLE 57.9% (with tools) was best-in-class at release. GPQA Diamond 93.6% is excellent. However, AA Intelligence Index 41.8% is low by current standards (trails Fable 5 at 49.6–64.9, GPT-5.6 Sol at 58.9, Kimi K3 at 57). ARC-AGI-2 at 72.1% is moderate (trails Fable 5 89.2%, GPT-5.6 Sol 92.5%). FrontierMath v2 T1–3 at 47.2% and T4 at 31.25% are modest. CritPt 20.9% is low. The 39.3% hallucination rate is good — among the best calibration in the dataset. The reasoning profile is split: exceptional on peak difficulty math (USAMO) and HLE, but weak on the broader AA Intelligence Index composite.
- **Context window: 84/100.** 1M tokens total with 128K max output — standard frontier-class for its time. No long-context pricing surcharge (unlike GPT-5.6 Sol). GraphWalks at 256K is excellent (BFS 85.9%, Parents 99.3%), but degrades at 1M (BFS 68.1%, Parents 83.3%). AA-LCR 77.7% is solid. The 1M window is usable but works best within ~256K for critical retrieval tasks.
- **Multimodal: 82/100.** Text and image input only — no audio, video, or PDF. ScreenSpot Pro 87.9% is excellent for UI grounding. CharXiv 89.9% (with tools) is strong for chart reasoning. OfficeQA Pro 66.2% is solid for document understanding. The multimodal profile is well-rounded for text+image tasks but limited by the lack of audio/video/PDF input compared to omnimodal competitors.
- **Coding: 82/100.** SWE-bench Verified 88.6% is strong. SWE-bench Pro 69.2% is competitive (though trails Fable 5's 80.3% by 11 pts). SWE-bench Multilingual 84.4% is strong for cross-language coding. LiveCodeBench 87.8% is competitive. However, Terminal-Bench 2.1 74.6% trails successors significantly (Fable 5 84.3%, GPT-5.6 Sol 91.9%). CursorBench 3.2 62.3% is moderate. FrontierCode 1.1 46.5% is modest. AA Coding Index 74.3% is solid. The coding profile was strong at release but has been surpassed by Fable 5, GPT-5.6 Sol, and newer models.
- **Cost efficiency: 75/100.** $5/$25 per 1M tokens is mid-range. No long-context surcharge (unlike GPT-5.6 Sol). Fast mode available at 2.5× speed for double the price. However, the model has been superseded by Opus 5 ($5/$25, same price but stronger) and Opus 5.5 ($4/$20, cheaper and stronger). At this point, Opus 4.8 offers poor value compared to its successors — same or higher price for lower performance. The standard pricing remains reasonable for teams already integrated with the Opus 4.8 API.
- **Overall Score: 81/100.** Mean of five quality dims: (83 + 72 + 84 + 82 + 82) / 5 = 80.6. Anthropic's Opus-tier flagship from May 2026. Key strengths: USAMO 2026 at 96.7% (near-perfect), HLE 57.9% (with tools — best-in-class at release), SWE-bench Verified 88.6%, excellent alignment improvements (4× fewer unflagged flaws, 17× fewer dishonest summaries), τ²-bench 94.4%, ScreenSpot Pro 87.9%. Key weaknesses: AA Intelligence Index 41.8% (low by current standards), ARC-AGI-2 72.1% (moderate), Terminal-Bench 2.1 74.6% (trails successors by 10–17 pts), SWE-bench Pro 69.2% (trails Fable 5 by 11 pts), now Legacy status. Best fit for: teams already integrated with Opus 4.8 API, tasks requiring strong alignment and honesty (self-written code review, agentic summaries), and workflows that benefit from parallel-subagent dynamic workflows in Claude Code. Superseded by Opus 5.5 ($4/$20) for new projects.

---

## Signature

- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-10
- Method: public internet research across Anthropic official announcements, Artificial Analysis, BenchLM, Vals AI, llm-stats, ARC Prize, Epoch AI, Cursor evals, Cognition, Gert Labs, and other benchmark aggregators; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.7_Plus.md`, using the same headings.
