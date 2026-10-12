# Gemini 3.6 Flash — findings by DeepSeek 4.1 Flash

- Source: Google DeepMind / Gemini 3.6 Flash (`gemini-3.6-flash`)
- Date: 2026-10-11 (UTC) — deep second pass (previous Signature 2026-10-01)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Deep second-pass re-verification — 2026-10-11** (≥3 independent sources).
> Newly confirmed independent data: BenchLM overall **63.15/100 (#41/889)**; Vals AI (launch review + model page) **Terminal-Bench 2.1 73.78% (#8/43)**, **GPQA Diamond 93.43% (#7)**, **MMLU-Pro 89.28% (#13)**, **MMMU-Pro 88.38% (#7)**, **LiveCodeBench 88.08% (#8)**, **SWE-bench 79.60%**, **Vibe Code Bench 64.00% (44/110)**, **Finance Agent v2 56.30% (#16)**, **LegalBench 86.70% (#11/149)**, CyberBench Patch **#1 (84.75% patch track)**; Artificial Analysis **AA Coding Index 69.2%**, **AA-MMMU-Pro 83.2%**, **AA-LCR 80.0%**, **AA Agentic Index 30.1%**, AA-Omniscience Index 22.1% (hallucination 55.6%), CritPt 10.6%.
> **Conflicts surfaced:** (1) **Pricing** — Vals still lists the **launch rate $1.50/$7.50** while AA records the post-2026-08-16 **50% cut ($0.75/$3.75, 80% cache)**; the cut is adopted. (2) **AA Intelligence Index** — the prior file's **52** is the old basket; the current **v4.3.2 page and BenchLM both read 34**, and Google has deprecated the model in favour of Gemini 3.7 Flash. (3) **Terminal-Bench 2.1** reads **78.9% (prior file)** vs **73.78% (Vals, 3 trials)**. (4) **Vibe Code Bench** reads **64.00% (full, Vals page)** vs **57.88% (Vals Index subset in the launch note)** — both are reported, not averaged.
> Sources: https://benchlm.ai/models/gemini-3-6-flash · https://artificialanalysis.ai/models/gemini-3-6-flash · https://www.vals.ai/models/google_gemini-3.6-flash · https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-6-flash-3-5-flash-lite-3-5-flash-cyber/

## Model card

- **Name:** Gemini 3.6 Flash (no "Free" wording; a free AI Studio tier exists)
- **Short description:** Google DeepMind's July 2026 mid-tier Flash workhorse, released 2026-07-21 alongside Gemini 3.5 Flash-Lite and Gemini 3.5 Flash Cyber. It replaced Gemini 3.5 Flash as Google's cost-efficient model for agentic coding and desktop automation, finishing tasks with ~17% fewer output tokens and advancing the knowledge cutoff 14 months to March 2026. Now superseded by Gemini 3.7 / 3.8 Flash.
- **Provider / access:** Google — Gemini API, Google AI Studio, Vertex AI, Antigravity IDE and the Gemini app. Proprietary, closed.
- **Release / knowledge:** Released 2026-07-21; knowledge cutoff March 2026.
- **IDs:** `gemini-3.6-flash`. No OpenCode Zen Free ID.
- **Context window:** 1,000,000 tokens (trackers list 1,048,576); max output 64,000 (trackers 65,536; Vals 66k).
- **Modalities:** text, image, video, audio/speech and PDF/file input; text output only; tool calls; structured output; reasoning yes with configurable thinking levels.
- **Pricing (as of 2026-10-11):** $0.75 / 1M in and $3.75 / 1M out after a 50% cut on 2026-08-16 (launch $1.50/$7.50 — the rate Vals still shows; AA blended 7:2:1 ≈$0.63/M); cached input $0.075 / 1M (80% cache discount per AA); both rates double 2027-01-01; batch 50% off.
- **Architecture:** proprietary multimodal; parameter count / dense-vs-MoE undisclosed.

### Raw benchmarks found

Agent / tool use:

- OSWorld-Verified (computer use): **83.0%** (vendor; rank 8 of 61) — up from 78.4% for Gemini 3.5 Flash
- GDPval-AA: **1423 Elo** (Google; AA normalized 39.3%, rank 32 of 340); Tau3-Banking: **29.9%**
- Terminal-Bench 2.1: **73.78% (#8/43, three trials)** (Vals) vs 78.9% (prior file); Terminal-Bench 3.0: 5.4%; Terminal-Bench Science: 4.29%
- MLE-Bench: **63.9%** (vendor); AutomationBench-AA: 51.1%; Agents' Last Exam: 24.2%; Finance Agent v2: **56.30% (#16)** (Vals)
- CyberBench Patch track: **#1 (84.75%)** (Vals); AA Agentic Index: 30.1% (AA); Claw-Eval / ClawProBench / Toolathon: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **93.4% (Vals #7)** / 92.8% (AA); MMMU-Pro: **88.4% (Vals #7)** / 83.2% (AA); MMLU-Pro: **89.3% (#13)** (Vals)
- HLE: **40.8%** (AA); ARC-AGI-1: **91.2%**; ARC-AGI-2: **60.4%** (ARC Prize, verified); AIME 2024/25: 94.2%
- Artificial Analysis Intelligence Index: **34 (#77/227, v4.3.2)** — BenchLM also 34; differs from the prior file's 52 (basket rebase)
- AA-LCR: **80.0%** (AA); CritPt: **10.6%** (AA); AA-Omniscience Index 22.1%, accuracy 50.0%, hallucination 55.6%
- Omniscience / Hallucination: **no separate verified public score found** (SimpleQA Verified 66.2% is the closest proxy)

Coding:

- SWE-bench Verified: **79.6% (Google + Vals #26)**; SWE-bench Pro: **58.7%**; LiveCodeBench: **88.1% (#8)** (Vals); SciCode: **53.4% (AA)**
- Vibe Code Bench v1.1: **64.00% (44/110, Vals)** / 57.88% (Vals Index subset); CursorBench 3.2: 53.5%; DeepSWE 1.1: **49.0%** (Google)
- Android Bench: **75.6%**; WebDev Arena: **1539 Elo**; Design Arena Website: 1304; AA Coding Index: **69.2%** (AA)
- Output speed: **196.6 tok/s** median (AA) — ~3.4× GPT-6.1 Sol and above the 81 t/s median

Long context:

- AA-LCR: **80.0%** (AA); MRCR-v2 at 128K: **91.8%**; MRCR v2 (8-needle): **54.0%** at the full 1M window — the clearest published evidence in this scan that headline context size and usable recall differ; chunk near-window retrieval.

### Normalized scores (1–100)

- **Tool use: 82/100.** OSWorld-Verified 83.0%, MLE-Bench 63.9%, Finance Agent v2 56.3% and the #1 CyberBench Patch track are strong agentic signals; capped by the missing Claw/Toolathon results, the mid TB2.1 73.8%, and the fact that 3.7 Flash supersedes it three weeks later.
- **Reasoning: 88/100.** GPQA Diamond 93.4%, MMMU-Pro 88.4%, ARC-AGI-1 91.2% and AIME 94.2% are near-frontier for a Flash tier, but HLE 40.8%, ARC-AGI-2 60.4% and CritPt 10.6% show the Pro-tier gap; the current AA index (34) sits below GPT-6.1 Sol's 52.
- **Context window: 92/100.** A million-token window with a 50–80% cache discount and AA-LCR 80.0%, but measured MRCR recall falls to 54.0% at full depth — a real, published limitation.
- **Multimodal: 85/100.** Text, image, video, audio/speech and PDF input with MMMU-Pro 88.4%; text-only output.
- **Coding: 84/100.** LiveCodeBench 88.1%, SWE-bench Verified 79.6%, Vibe Code Bench 64.0% and AA Coding Index 69.2% mark a large generational jump; no third-party agentic-coding leaderboard entry at the frontier.
- **Cost efficiency: 90/100.** $0.75/$3.75 per 1M after a 50% cut, $0.075 cached and a free AI Studio tier make it one of the best capability-per-dollar buys here; the scheduled 2027 doubling caps it below 95.
- **Overall Score: 86/100.** Mean of the five quality dims (82+88+92+85+84)/5 = 86.2 → 86. Best fit: high-volume agentic coding, desktop automation and long-document work where price per completed task dominates.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (`deepseek/deepseek-v4.1-flash`)** — 2026-10-11
- Method: deep second-pass public internet research (BenchLM model page + per-eval results, Artificial Analysis model page, Vals AI model page + launch review, Google blog launch post). Independent AA/Vals rows were promoted over the prior HokAI/Model-Beat-only rows; the launch-vs-cut pricing, AA-index basket rebase, TB2.1 discrepancy and the two Vibe Code figures are surfaced rather than hidden. Scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
