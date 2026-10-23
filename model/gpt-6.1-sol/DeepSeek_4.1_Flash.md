# GPT-6.1 Sol — findings by DeepSeek 4.1 Flash

- Source: OpenAI/GPT-6.1 Sol (`openai/gpt-6.1-sol`; repo catalogue id `opencode/gpt-6.1-sol`)
- Date: 2026-10-16 (UTC) — rewrite pass (previous Signature 2026-10-11); re-verified 2026-10-18
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Re-verified 2026-10-18.** BenchLM (`gpt-6-1-sol`, 24 rows) computes an overall **84.21/100 (#2 of 228)** and re-confirms the prior pass. **No score change.**

> **Rewrite pass — 2026-10-16** (≥3 independent sources).
> Re-sourced this pass. Artificial Analysis (max): Intelligence Index **52 (#12/217)**, AA-Briefcase **1564**, GDPval-AA v2.1 **1575 Elo**, AA AutomationBench **65%**, Terminal-Bench 4.0 **56%**, AA-SciCode 54%, HLE 53%, CritPt 32%, GDP.pdf 31%, AA-Omniscience 41; ~53.5 t/s, TTFT 277–322s, **$0.72/task**. Vals AI: **Vals Index 61.15% (#9/48)**, Terminal-Bench 4.0 **55.05% (#7/48)**, Terminal-Bench Science **52.86% (#2/41)**, Vibe Code Bench v1.1 **88.93% (#8/112)**, IOI **96.89% (#3/44)**, Code Migration 65.12% (#5/77), ProofBench **99.0% (#4/50)**, BioMysteryBench 79.63% (#2), SRE Bench 50.76% (#2), ProgramBench 3.0%, CyberBench 39.29%, SWE-bench Multimodal 43.54%, cost/test **$3.237**. OpenAI self: DeepSWE v1.1 **75.2%** (high) / 71.9% (max), OSWorld 2.0 offline **71.4%** (max), GDP.pdf 32.0%, AutomationBench 36.1%. Microsoft Foundry + opencode.ai data confirm **1.05M context, 128K out, text+image+pdf in, $2/$10 ($0.10 cached; long-context $4/$15)**.
> **Conflicts surfaced:** (1) **Context window 1.05M (OpenAI/AA/BenchLM/Foundry) vs "1.1M" (LLM-Stats/opencode.ai data)** — rounding. (2) **DeepSWE v1.1 75.2% (high) vs 71.9% (max)** — the headline peak is the high-effort run, not the shipped max. (3) **AutomationBench effort framing** — OpenAI's "+2.2 over Opus 5.5" is medium-vs-medium, but at max effort Opus 5.5 leads by ~6.4. (4) **AA Index 52 (AA) vs OpenAI's 58.9 claim** — index/effort rebase. (5) **Terminal-Bench 4.0 56% (AA) vs 55.05% (Vals)** — near-agreement. (6) Serving is very slow (TTFT up to ~322s at max).
> Sources: https://openai.com/index/introducing-gpt-6-1-sol/ · https://artificialanalysis.ai/models/gpt-6-1-sol · https://www.vals.ai/models/openai_gpt-6.1-sol · https://techcommunity.microsoft.com/blog/azure-ai-foundry-blog/4560811 · https://llm-stats.com/models/gpt-6.1-sol · https://opencode.ai/data/compare/openai/gpt-6-sol/openai/gpt-6-1-sol

## Model card

- **Name:** GPT-6.1 Sol (OpenAI GPT-6 family, mid-cost tier; paid API only)
- **Short description:** OpenAI's mid-tier GPT-6 reasoning model, shipped at DevDay on 2026-09-29 as a point upgrade to GPT-6 Sol. Marketed as near-flagship (GPT-6 Astra) quality on agentic coding, computer use and professional knowledge work at roughly a fifth of Astra's standard token price. Not an alias of GPT-6 Sol — distinct API id, cheaper cache reads, and the "none" reasoning tier is unsupported.
- **Provider / access:** OpenAI API as `gpt-6.1-sol` (Responses with tools; Chat Completions only without tools; Batch), Microsoft Foundry/Azure; ChatGPT Work and Codex for Plus/Pro/Business/Enterprise/Edu. Not in standard ChatGPT chat. An "Ultrafast" (up to 8×) variant announced but unpriced. US/EU data residency.
- **Release / knowledge:** Released 2026-09-29 at OpenAI DevDay; knowledge cutoff 2026-04-30.
- **IDs:** `openai/gpt-6.1-sol` (repo `meta.json` uses `opencode/gpt-6.1-sol`). No OpenCode Zen Free ID — paid API only.
- **Context window:** 1,050,000 input tokens (~922K usable before repricing; AA rounds to 1M) and 128,000 max output. Any prompt over 272K input tokens reprices the whole request.
- **Modalities:** text, image and PDF/file in, text out (opencode.ai data + Vals + Microsoft Foundry); five effort levels (low→max; medium default; "none" unsupported); tool calls, structured output. No audio/video; no fine-tuning.
- **Pricing (as of 2026-10-16):** $2.00 / 1M input, $10.00 / 1M output, $0.10 / 1M cached input (cache write $2.50); long context >272K $4/$15. Batch and Flex 50% cheaper; Fast mode 2×. Blended ≈$1.47/1M (AA); **$0.72 per AA Index task**. Paid only.
- **Architecture:** proprietary; no parameter count published. Zero-data-retention option available.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **56% (AA)** / **55.05% (Vals, #7/48)**; Terminal-Bench Science **52.86% (Vals, #2/41)** / 57.0% (OpenAI max)
- GDPval-AA: **1575 Elo** (AA); AA-Briefcase **1564 Elo**; AA AutomationBench **65%** (AA) / 36.1% (max, vendor) / 36.2% (BenchLM)
- OSWorld 2.0 offline 71.4% (max, vendor); Vals SRE Bench **50.76% (#2/35)**; Code Migration 65.12% (#5/77)
- Vals Index: **61.15% (#9/48)**; Finance Agent v2 52.03%; CyberBench 39.29%
- Tau3-Banking / Claw-Eval / Toolathon / MCP-Atlas: **no verified public score found**

Reasoning / knowledge:

- HLE **53%** (AA) / 52.9%; CritPt **32%** (AA); AA-LCR 83.0%; MLCR-AA 33.9%
- ARC-AGI-1 96.5% / ARC-AGI-2 94.2% / ARC-AGI-3 52.7% (ARC Prize, Max)
- Artificial Analysis Intelligence Index (max) **52** — 1 behind GPT-6 Astra, 6 behind Claude Opus 5.5; BenchLM reads 51.8
- AA-Omniscience Index 41 / Accuracy 62.1% / Hallucination 54.3%; GPQA Diamond **no verified public score found**

Coding:

- DeepSWE v1.1 (high) **75.2%** — above GPT-6 Astra's best 74.1%, at $0.65/task vs $4.43; drops to 71.9% at max (BenchLM)
- Vibe Code Bench v1.1 **88.93% (#8/112)** (Vals); IOI **96.89% (#3/44)** (Vals); AA-SciCode 54%
- SWE-bench Multimodal 43.54% (#9/18); ProgramBench 3.0%; SWE-bench Verified / LiveCodeBench: **no verified public score found**

Long context:

- AA-LCR v1.1 **83.0%** and MLCR-AA 33.9% (AA) are the only long-context numbers; no MRCR/RULER/GraphWalks — **no verified public score found**. The 1.05M window is catalogue-verified only.

### Normalized scores (1–100)

- **Tool use: 88/100.** AA Terminal-Bench 4.0 56%, GDPval-AA 1575 Elo, AA AutomationBench 65% and Vals TB-Science 52.86% (#2/41) confirm strong agentic ability; held below 90 because the headline DeepSWE/AutomationBench claims are vendor-run and GDPval-AA sits under the ~1750 frontier reference.
- **Reasoning: 85/100.** HLE 53% (AA), ARC-AGI-2 94.2% (ARC Prize verified), CritPt 32% and AA-LCR 83.0% are frontier-adjacent; capped by an AA Intelligence Index of 52 (six behind Opus 5.5) and still-missing GPQA Diamond.
- **Context window: 92/100.** 1.05M-token input and 128K output clear the 1M band; held below 97 by the 272K reprice threshold and the absence of a ≥98%-at-512K retrieval benchmark (AA-LCR 83.0% is reasoning, not pure recall).
- **Multimodal: 60/100.** Text, image and PDF/file input, text out, with a strong MMMU-Pro 86.0% (AA); clear text+image band (60–70) now that opencode.ai data, Vals and Microsoft Foundry all list PDF/file support; no audio/video keeps it mid-pack.
- **Coding: 91/100.** DeepSWE v1.1 75.2% (high effort) beats Astra's best run at about one-seventh the per-task cost, and independent Vals Vibe Code Bench 88.93% (#8/112), IOI 96.89% (#3) plus AA-SciCode 54% corroborate the coding claim; capped by vendor-only sourcing on the DeepSWE peak and no SWE-bench Verified.
- **Cost efficiency: 72/100.** $2.00/$10.00 with a $0.10 cache read is mid-price for 2026 (roughly a fifth of Astra, about half of Opus 5.5's per-task cost) but far from the sub-$0.5 open-weight tier.
- **Overall Score: 83/100.** Mean of the five quality dims (88+85+92+60+91)/5 = 83.2 → 83. Best fit: high-volume agentic coding, computer-use and document work where near-Astra quality at mid-tier cost beats absolute peak scores.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-10-18
- Method: rewrite-pass public internet research (OpenAI launch post + DevDay coverage, Artificial Analysis model page, Vals AI model page, Microsoft Foundry blog, LLM-Stats, opencode.ai data, TTMS). Independent AA/Vals rows were promoted over vendor-only rows; the file/PDF-input corroboration, DeepSWE effort-peak discrepancy, AutomationBench effort framing and context-rounding mismatch are surfaced rather than hidden. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
