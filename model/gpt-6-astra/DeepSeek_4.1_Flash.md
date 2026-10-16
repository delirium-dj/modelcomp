# GPT-6 Astra — findings by DeepSeek 4.1 Flash

- Source: OpenAI / GPT-6 Astra (`gpt-6-astra`)
- Date: 2026-10-16 (UTC) — rewrite pass (previous Signature 2026-10-09)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Rewrite pass — 2026-10-16** (≥3 independent sources).
> Independently re-sourced this pass: GPQA Diamond **96.0%** (llm-stats #1), ARC-AGI-1 98.5%, ARC-AGI-2 95% (ARC Prize verified), ARC-AGI-3 **62.7%** (ARC Prize verified), FrontierMath Tier 4 v2 97.6%, HLE w/ tools 57.2%, MRCR v2 256K–512K **100%** / 512K–1M **96.3%**, Terminal-Bench 2.1 87.3% (Vals) / 88.4% (AA), Terminal-Bench 4.0 57.9–59% (Vals/AA), OSWorld 2.0 72.6%, BrowseComp 91.5%, ApprenticeBench 68%, Agents' Last Exam 59.3%, AutomationBench-AA 68.5%, GDPval-AA **1574 Elo**, DeepSWE 74.1%, AA Coding Index 76.9%, SWE-Atlas Codebase QnA 59.14 (Codex xHigh), AA-MMMU-Pro 86.9%, ScreenSpot Pro 92.7%, BenchLM overall 83.5 (#3/932).
> **Conflicts surfaced:** (1) **ARC-AGI-3 62.7% (ARC Prize verified) vs 99.9% (LiteLLM day-0 post)** — a large, unresolved gap; the vendor-style 99.9% is scaffolded. (2) **GDPval-AA 1574 Elo vs 53.7** across AA pages. (3) Context **1.05M** (AA, BenchLM, llm-stats) vs **922K** (Economize). (4) Pricing list **$10/$50** (LiteLLM, OpenAI) vs **$13/$65** (AIMLAPI) vs **$11.90 blended** (llm-stats). (5) SWE-bench Verified/Pro remain undisclosed at launch.
> Sources: https://docs.litellm.ai/blog/gpt_6_astra · https://benchlm.ai/models/gpt-6-astra · https://llm-stats.com/models/compare/gpt-6-astra-vs-gpt-6.1-sol · https://artificialanalysis.ai/articles/benchmarking-gpt-6-astra · https://llm-stats.com/benchmarks/gpqa · https://www.tbench.ai/ · https://labs.scale.com/leaderboard/sweatlas-qna

## Model card

- **Name:** GPT-6 Astra (API ID `gpt-6-astra`)
- **Short description:** OpenAI's flagship above GPT-5.6 Sol, the first model on the GPT-6 name; built for long-horizon agentic coding, computer use, deep research and scientific work. Superseded by GPT-6.1 Sol (2026-09-29).
- **Provider / access:** OpenAI Responses API, ChatGPT tiers, AWS Bedrock, Azure; closed; no fine-tuning.
- **Release / knowledge:** 2026-09-03; knowledge cutoff **2026-04-30** (LiteLLM, AA).
- **IDs:** `gpt-6-astra`; Zen `gpt-6-astra`.
- **Context window:** 1,050,000 (1.05M) in; **128,000 max output**; requests >272K reprice the whole call.
- **Modalities:** text + image in, text out; reasoning (`low`/`medium`/`high`/`xhigh`); tool calls.
- **Pricing (as of 2026-10-16):** $10 in / $50 out per 1M; cached $1; cache writes $12.50; >272K tier reprices to $20/$75; Batch 50%; flex half / priority 2×.
- **Architecture:** undisclosed (anonymized press reports of "recurrent depth" remain unconfirmed).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 **87.3%** (Vals) / **88.4%** (AA); Terminal-Bench 4.0 **57.9–59%** (Vals/AA)
- BrowseComp **91.5%**; OSWorld 2.0 72.6%; Terminal-Bench-Science 0.1 64.6%; CWE-bench v1 68.0%
- ApprenticeBench 68%; Agents' Last Exam 59.3%; AutomationBench-AA 68.5%; ExploitGym 42.4%
- GDPval-AA **1574 Elo**; AA-Briefcase 1570; AA Agentic Index 51.5%
- MCP Atlas / Claw-Eval / Toolathlon: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond **96.0%** (llm-stats #1); HLE w/ tools 57.2%; HealthBench Professional 64.7%
- FrontierMath Tier 4 v2 **97.6%**; ARC-AGI-1 98.5%; ARC-AGI-2 **95%**; ARC-AGI-3 **62.7%** (ARC Prize verified)
- AA-LCR 80.7%; MRCR v2 256K–512K 100% / 512K–1M 96.3%; GraphWalks BFS 256K–1M 71.8%
- CritPt 31.7%; GeneBench-Pro 37.8%; BenchLM overall **83.5** (#3/932)

Coding:

- DeepSWE **74.1%**; AA Coding Index 76.9%; FrontierCode 1.1 Main 53.3% / Extended 64.5%
- FrontierSWE v2 65.5%; PostTrainBench v1.1 44.3%; Bug Hunt Bench 45.0 fixes; AA-SciCode 56.5%
- SWE-Atlas Codebase QnA 59.14 (Codex xHigh, Scale Labs); SWE-bench Verified/Pro **not disclosed**

Multimodal / long context:

- AA-MMMU-Pro **86.9%**; ScreenSpot Pro 92.7%; BenchCAD Vision2Code 0.959
- MRCR v2 512K–1M 96.3% (vendor) — near-flat retention at full window

### Normalized scores (1–100)

- **Tool use: 91/100.** Terminal-Bench 2.1 87–88%, BrowseComp 91.5%, OSWorld 2.0 72.6% and GDPval-AA 1574 make it a top computer-use/coding agent; capped by the absence of MCP Atlas/Toolathlon and gated ExploitGym.
- **Reasoning: 95/100.** GPQA 96.0% (#1), ARC-AGI-2 95%, FrontierMath T4 97.6% and HLE w/ tools 57.2% are frontier-leading; the ARC-AGI-3 62.7% vs 99.9% conflict is surfaced rather than averaged.
- **Context window: 97/100.** 1.05M input with 128K output and vendor MRCR 96.3% at 512K–1M (near-flat); the 272K billing step-up is the only caveat.
- **Multimodal: 82/100.** Strong image work (AA-MMMU-Pro 86.9%, ScreenSpot Pro 92.7%) but text + image only — no audio/video in and no non-text output.
- **Coding: 87/100.** DeepSWE 74.1%, AA Coding Index 76.9% and SWE-Atlas 59.14 are elite; SWE-bench Verified/Pro omission and FrontierCode Main 53.3% keep it just under 90.
- **Cost efficiency: 40/100.** $10/$50 per 1M (the ~30 anchor) with a 2× repricing past 272K; 90%-off cached reads are the only relief.
- **Overall Score: 90/100.** (91 + 95 + 97 + 82 + 87) / 5 = 90.4 → 90. Best fit: agentic coding, computer-use automation and long-horizon research where terminal-class performance matters more than chat economics.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek/deepseek-v4.1-flash)** — 2026-10-16
- Method: rewrite-pass public internet research (LiteLLM day-0 post, BenchLM model page and comparisons, llm-stats GPQA leaderboard, Artificial Analysis benchmarking article, tbench.ai, Scale Labs SWE-Atlas). Verified ARC Prize rows were promoted over vendor saturation claims; the ARC-AGI-3 scaffold gap and GDPval/context/pricing conflicts are surfaced. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
