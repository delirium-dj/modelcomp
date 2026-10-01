# Gemini 3.6 Flash — findings by DeepSeek 4.1 Flash

- Source: Google DeepMind / Gemini 3.6 Flash (`gemini-3.6-flash`)
- Date: 2026-10-01 (UTC) — refreshed second pass (previous Signature 2026-09-18)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.6 Flash (no "Free" wording; a free AI Studio tier exists)
- **Short description:** Google DeepMind's July 2026 mid-tier Flash workhorse, released 2026-07-21 alongside Gemini 3.5 Flash-Lite and Gemini 3.5 Flash Cyber. It replaced Gemini 3.5 Flash as Google's cost-efficient model for agentic coding and desktop automation, finishing tasks with ~17% fewer output tokens and advancing the knowledge cutoff 14 months to March 2026.
- **Provider / access:** Google — Gemini API, Google AI Studio, Vertex AI, Antigravity IDE and the Gemini app. Proprietary, closed.
- **Release / knowledge:** Released 2026-07-21; knowledge cutoff March 2026.
- **IDs:** `gemini-3.6-flash`. No OpenCode Zen Free ID.
- **Context window:** 1,000,000 tokens (trackers list 1,048,576); max output 64,000 (trackers 65,536).
- **Modalities:** text, image, video, audio and PDF input; text output only; tool calls; structured output; reasoning yes with configurable thinking levels.
- **Pricing (as of 2026-10-01):** $0.75 / 1M in and $3.75 / 1M out after a 50% cut on 2026-08-16 (launch $1.50/$7.50; BMList still lists the launch rate); cached input $0.075 / 1M; both rates double 2027-01-01; batch 50% off.
- **Architecture:** proprietary multimodal; parameter count / dense-vs-MoE undisclosed.

### Raw benchmarks found

Agent / tool use:

- OSWorld-Verified (computer use): **83.0%** (vendor; rank 8 of 61) — up from 78.4% for Gemini 3.5 Flash
- GDPval-AA: **1422 Elo** (rank 32 of 340); Tau3-Banking: **29.9%**
- MLE-Bench: **63.9%** (vendor); AutomationBench-AA: 51.1%; Agents' Last Exam: 24.2%
- Terminal-Bench 3.0: 5.4%; Claw-Eval / ClawProBench / Toolathon: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **93.4%**; MMMU-Pro: **88.4%**; MMLU-Pro: **89.3%**; HLE: **40.8%**
- ARC-AGI-1: **91.2%**; ARC-AGI-2: **60.4%**; AIME 2024/25: 94.2%
- Artificial Analysis Intelligence Index: **52**; AIIQ Composite IQ: 123; BenchmarkList ECI: **139.04 / 100** (rank 20 of 354)
- Omniscience / Hallucination: **no verified public score found** (SimpleQA Verified 66.2% is the closest proxy)

Coding:

- SWE-bench Verified: **79.6%**; SWE-bench Pro: **58.7%**; LiveCodeBench: **88.1%** (rank 4 of 123); SciCode: **52.7%**
- Terminal-Bench 2.1: **78.9%**; DeepSWE 1.1: **49.0%**; Vibe Code Bench v1.1: **57.3%**; Android Bench: **75.6%**
- WebDev Arena: **1539 Elo**; output speed: **198 tok/s** median

Long context:

- AA-LCR: **79.0%** (rank 14 of 409); MRCR-v2 at 128K: **91.8%**; MRCR v2 (8-needle): **54.0%** at the full 1M window — the clearest published evidence in this scan that headline context size and usable recall differ; chunk near-window retrieval.

### Normalized scores (1–100)

- **Tool use: 82/100.** OSWorld-Verified 83.0%, SWE-bench Pro 58.7% and MLE-Bench 63.9% are strong agentic signals; capped by the missing Claw results and the fact that 3.7 Flash supersedes it three weeks later.
- **Reasoning: 88/100.** GPQA Diamond 93.4%, MMMU-Pro 88.4%, ARC-AGI-1 91.2% and AIME 94.2% are near-frontier for a Flash tier, but HLE 40.8% and ARC-AGI-2 60.4% show the Pro-tier gap.
- **Context window: 92/100.** A million-token window with a 50%-off cache and AA-LCR 79.0%, but measured MRCR recall falls to 54.0% at full depth — a real, published limitation.
- **Multimodal: 85/100.** Text, image, video, audio and PDF input with MMMU-Pro 88.4%; text-only output.
- **Coding: 84/100.** LiveCodeBench 88.1%, SWE-bench Verified 79.6% and DeepSWE 49% mark a large generational jump; no third-party agentic-coding leaderboard entry.
- **Cost efficiency: 90/100.** $0.75/$3.75 per 1M after a 50% cut, $0.075 cached and a free AI Studio tier make it one of the best capability-per-dollar buys here; the scheduled 2027 doubling caps it below 95.
- **Overall Score: 86/100.** Mean of the five quality dims (82+88+92+85+84)/5 = 86.2 → 86. Best fit: high-volume agentic coding, desktop automation and long-document work where price per completed task dominates.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (`deepseek/deepseek-v4.1-flash`)** — 2026-10-01
- Method: public internet research (BenchmarkList model page + per-eval results, Google model page via HokAI, Epoch AI figures via Model Beat); second-pass refresh of the 2026-09-18 report. Scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
