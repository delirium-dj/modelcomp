# GPT-6.1 Sol — findings by DeepSeek 4.1 Flash

- Source: OpenAI/GPT-6.1 Sol (`openai/gpt-6.1-sol`; repo catalogue id `opencode/gpt-6.1-sol`)
- Date: 2026-10-11 (UTC) — deep second pass (previous Signature 2026-10-01)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Deep second-pass re-verification — 2026-10-11** (≥3 independent sources).
> Newly confirmed independent data: Artificial Analysis **Terminal-Bench 4.0 56.1%**, **GDPval-AA 1575 Elo (53.8% normalized)**, **AA AutomationBench 64.9%**, **AA-Briefcase 1564 Elo**; Vals AI **Terminal-Bench Science 52.86% (#2/39)**, **Vibe Code Bench v1.1 88.93% (#8/110)**, **Terminal-Bench 4.0 55.05%**, Vals Index **61.15% (#8/45)**; BenchLM overall **84.18/100 (#3/889)**. Reasoning rows that were previously empty now exist: **HLE 52.9% (AA)**, **CritPt 31.7% (AA)**, **AA-LCR 83.0%**, **MLCR-AA 33.9%**, **ARC-AGI-1 96.5% / ARC-AGI-2 94.2% / ARC-AGI-3 52.7% (ARC Prize, GPT-6.1 Sol Max verified)**; multimodal **MMMU-Pro 86.0% (AA)**.
> **Conflicts surfaced:** (1) **multimodality** — Vals AI lists *File input supported* while Artificial Analysis and LLM-Stats both state text + image only; scored as text+image with the PDF/file-input claim noted as unresolved. (2) **DeepSWE v1.1** reads **75.2% (launch, AI Release Tracker)** vs **71.9% (xhigh/max, BenchLM/OpenAI)** — the higher figure is the high-effort peak, not the shipped default. (3) **Context window** reads **1.05M (OpenAI/BenchLM/AI Release Tracker)** vs **1.1M (LLM-Stats)** vs **1M rounded (AA/Vals)** — same window, rounding only. (4) AA Intelligence Index **52 (AA page)** vs **51.8 (BenchLM)** — rounding.
> Sources: https://openai.com/index/introducing-gpt-6-1-sol/ · https://deploymentsafety.openai.com/gpt-6-1-sol · https://benchlm.ai/models/gpt-6-1-sol · https://artificialanalysis.ai/models/gpt-6-1-sol · https://llm-stats.com/models/gpt-6.1-sol · https://www.vals.ai/models/openai_gpt-6.1-sol · https://aireleasetracker.com/model/openai/gpt-6.1-sol

## Model card

- **Name:** GPT-6.1 Sol (OpenAI GPT-6 family, mid-cost tier; paid API only, no "Free" wording)
- **Short description:** OpenAI's mid-tier GPT-6 reasoning model, shipped at DevDay on 2026-09-29 as a point upgrade to GPT-6 Sol. Marketed as near-flagship (GPT-6 Astra) quality on agentic coding, computer use and professional knowledge work at roughly a fifth of Astra's standard token price. Not an alias of GPT-6 Sol — distinct API id, cheaper cache reads, and the "none" reasoning tier is unsupported.
- **Provider / access:** OpenAI API as `gpt-6.1-sol` (Responses with tools; Chat Completions only without tools; Batch); also surfaced in ChatGPT Work and Codex for Plus/Pro/Business/Enterprise/Edu. Not available in standard ChatGPT chat. An "Ultrafast" (up to 8× generation) variant is announced but unpriced. US and EU data residency.
- **Release / knowledge:** Released 2026-09-29 at OpenAI DevDay; knowledge cutoff 2026-04-30 (AI Release Tracker, ten days later than GPT-6 Sol's).
- **IDs:** `openai/gpt-6.1-sol` (this repo's `meta.json` uses `opencode/gpt-6.1-sol`). No OpenCode Zen Free ID is documented — paid API only.
- **Context window:** 1,050,000 input tokens (~922K usable before repricing; AA rounds to 1M) and 128,000 max output tokens (OpenAI, LLM-Stats, BenchLM, Vals, AI Release Tracker, checked 2026-10-11). Any prompt over 272K input tokens reprices the whole request.
- **Modalities:** text and image in, text out (Artificial Analysis, LLM-Stats); Vals AI additionally lists file/PDF input support (unresolved conflict — see note above). Reasoning model with five effort levels (low, medium, high, xhigh, max; medium default; "none" unsupported); tool calls and structured output. No audio or video input; no fine-tuning.
- **Pricing (as of 2026-10-11):** $2.00 / 1M input, $10.00 / 1M output, $0.10 / 1M cached input (OpenAI list; Vals and AI Release Tracker agree). Batch and Flex are 50% cheaper; Fast mode is 2×. Blended ≈$1.47 / 1M (Artificial Analysis); $0.72 per AA Intelligence Index task. Paid only.
- **Architecture:** proprietary; OpenAI publishes no parameter count or architecture. Zero-data-retention option available.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **56.1% (AA)** / **55.05% (Vals, rank 6/45)** — first independent terminal-agent number for this ID
- Terminal-Bench Science 0.1: **57.1%** (OpenAI, max effort; $5.47/task vs $23.80 Astra); **52.86%** (Vals, rank **2/39**)
- GDPval-AA: **1575 Elo / 53.8% normalized** (AA); AA-Briefcase **1564 Elo**; AA-AnalystAgent 50.0% (AA)
- AA AutomationBench: **64.9%** (AA); AutomationBench 1.0.6: **36.2% (lab) / 36.1% (BenchLM)** at medium effort, +2.2 pts above Opus 5.5 (OpenAI, vendor-reported)
- OSWorld 2.0 offline: **71.4%** at max effort — 7 pts above GPT-6 Sol, 2.1 behind Astra (OpenAI/vendor)
- Vals AI Index: **61.15% (rank 8/45)**; Finance Agent v2 52.03%; CyberBench v1.1 39.29%
- Tau3-Banking / Tau2-Bench / Claw-Eval / Toolathon / MCP-Atlas: **no verified public score found**

Reasoning / knowledge:

- HLE: **52.9%** (AA) — previously unverified for this ID
- CritPt: **31.7%** (AA); MLCR-AA: **33.9%** (AA); AA-LCR v1.1: **83.0%** (AA)
- ARC-AGI-1: **96.5%**; ARC-AGI-2: **94.2%**; ARC-AGI-3: **52.7%** (ARC Prize, GPT-6.1 Sol Max verified)
- Artificial Analysis Intelligence Index (max effort): **52** — 1 point behind GPT-6 Astra and 6 behind Claude Opus 5.5 (58) (Artificial Analysis; BenchLM reads 51.8)
- Cost per Intelligence Index task: **$0.72** vs $3.26 Astra and $1.05 GPT-6 Sol (AA)
- GPQA Diamond / LCR / Omniscience: AA-Omniscience Index 41.5%, Accuracy 62.1%, Hallucination Rate 54.3% (AA/BenchLM); GPQA Diamond **no verified public score found**

Coding:

- DeepSWE v1.1 (high effort): **75.2%** — above GPT-6 Astra's best run of 74.1%, at $0.65/task vs $4.43 (OpenAI, vendor/lab)
- DeepSWE v1.1 (xhigh / max): **71.9%** (drops from the high-effort peak) (OpenAI/BenchLM)
- Vibe Code Bench v1.1: **88.93% (rank 8/110)** (Vals AI, independent); IOI **96.89% (rank 3/42)** (Vals)
- AA-SciCode: **54.2%** (AA); Bug Hunt Bench 44.3 fixes (public data)
- SWE-bench Verified / LiveCodeBench: **no verified public score found**

Long context:

- AA-LCR v1.1 **83.0%** and MLCR-AA **33.9%** (AA) are the first published long-context numbers; no MRCR / RULER / GraphWalks retrieval accuracy at any window length — **no verified public score found**. The 1.05M window is catalogue-verified only.

### Normalized scores (1–100)

- **Tool use: 88/100.** Independent AA Terminal-Bench 4.0 56.1%, GDPval-AA 1575 Elo, AA AutomationBench 64.9% and Vals TB-Science 52.86% (#2/39) confirm strong agentic ability; held below 90 because the headline DeepSWE/AutomationBench claims remain vendor-run and GDPval-AA sits under the ~1750 frontier reference.
- **Reasoning: 85/100.** HLE 52.9% (AA), ARC-AGI-2 94.2% (ARC Prize verified), CritPt 31.7% and AA-LCR 83.0% are frontier-adjacent (raised from 84 now that HLE/ARC evidence exists); capped by an AA Intelligence Index of 52 (six behind Opus 5.5) and still-missing GPQA Diamond.
- **Context window: 92/100.** 1.05M-token input and 128K output clear the 1M band; held below 97 by the 272K reprice threshold and the absence of a ≥98%-at-512K retrieval benchmark (AA-LCR 83.0% is reasoning, not pure recall).
- **Multimodal: 60/100.** Text + image input, text out, with a strong MMMU-Pro 86.0% (AA); raised from 55 into the methodology's +image band (60–70). Vals' unresolved "file/PDF input" claim is not credited until a second source confirms it; no audio/video keeps it mid-pack.
- **Coding: 91/100.** DeepSWE v1.1 75.2% (high effort) beats Astra's best run at about one-seventh the per-task cost, and independent Vals Vibe Code Bench 88.93% (#8/110) plus AA-SciCode 54.2% now corroborate the coding claim; capped by vendor-only sourcing on the DeepSWE peak and no SWE-bench Verified.
- **Cost efficiency: 72/100.** $2.00/$10.00 with a $0.10 cache read is mid-price for 2026 (roughly a fifth of Astra, about half of Opus 5.5's per-task cost) but far from the sub-$0.5 open-weight tier.
- **Overall Score: 83/100.** Mean of the five quality dims (88+85+92+60+91)/5 = 83.2 → 83. Best-fit: high-volume agentic coding, computer-use and document work where near-Astra quality at mid-tier cost beats absolute peak scores.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (`deepseek/deepseek-v4.1-flash`)** — 2026-10-11
- Method: deep second-pass public internet research (OpenAI launch post + system-card addendum, Artificial Analysis model page, BenchLM, LLM-Stats, Vals AI, AI Release Tracker, ARC Prize). Independent AA/Vals rows were promoted over vendor-only rows; the file/PDF-input conflict, the DeepSWE effort-peak discrepancy and the context rounding mismatch are surfaced rather than hidden. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
