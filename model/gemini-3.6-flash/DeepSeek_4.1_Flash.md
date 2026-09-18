# Gemini 3.6 Flash — findings by DeepSeek 4.1 Flash

- Source: Google DeepMind / Gemini 3.6 Flash (`gemini-3.6-flash`)
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.6 Flash (no "Free" wording; a free AI Studio tier exists)
- **Short description:** Google DeepMind's July 2026 mid-tier Flash workhorse, released 2026-07-21 alongside Gemini 3.5 Flash-Lite and the cybersecurity-focused Gemini 3.5 Flash Cyber. It replaced Gemini 3.5 Flash as Google's cost-efficient model for agentic coding and desktop automation, finishing tasks with ~17% fewer output tokens and advancing the knowledge cutoff a full 14 months to March 2026.
- **Provider / access:** Google — Gemini API, Google AI Studio, Vertex AI, Gemini Enterprise Agent Platform, Antigravity IDE and the Gemini app. Proprietary, closed; no open weights.
- **Release / knowledge:** Released 2026-07-21; knowledge cutoff March 2026 (stated as a 14-month advance).
- **IDs:** `gemini-3.6-flash` (Gemini API / Vertex AI). No OpenCode Zen Free ID.
- **Context window:** 1,000,000 tokens; max output 64,000 tokens (trackers list 1,048,576 with 65,536 via OpenRouter-style metadata). Verified from Google's page as compiled by HokAI (checked 2026-09-09).
- **Modalities:** text, image, video, audio and PDF input; text output only (no image/audio generation); tool calls; structured output; reasoning yes with configurable thinking levels.
- **Pricing (as of 2026-09-18):** $0.75 / 1M in and $3.75 / 1M out — the list price was cut 50% from the launch rate of $1.50/$7.50 on 2026-08-16 — with cached input at $0.075 / 1M. Both rates double on 2027-01-01 under Google's published schedule. Batch mode is 50% off; Priority adds ~80%. Free tier through Google AI Studio.
- **Architecture:** proprietary, multimodal; Google has not disclosed parameter count or dense-vs-MoE. Framed around token efficiency rather than scale.

### Raw benchmarks found

Agent / tool use:

- OSWorld-Verified (computer use): **83.0%** (vendor) — up from 78.4% for Gemini 3.5 Flash
- SWE-bench Pro: **58.7%** (vendor) — up from 55.1%
- GDPval-AA v2 (composite knowledge-work, run by Artificial Analysis): **1,421** (vendor) — up from 1,349
- MLE-Bench: **63.9%** (vendor) — up from 49.7%
- Terminal-Bench 2.1: **no verified public score found** for the 3.6 checkpoint
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- Claw-Eval / ClawProBench / Toolathon / MCP-Atlas: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **94.1%** (Epoch AI via Model Beat)
- HLE: **40.8%** (improved from 38.3% in an August revision)
- ARC-AGI: **91.2%**; ARC-AGI-2: **60.4%** (Epoch AI via Model Beat)
- SimpleQA Verified: **66.2%**; WeirdML: **56.1%** (Epoch AI via Model Beat)
- AIME 2024/2025: **94.2%** (Epoch AI via Model Beat)
- CharXiv reasoning: **89.4%** with tools / **85.2%** without (vendor)
- Artificial Analysis Intelligence Index: **34** under AA's current methodology (a separate Epoch-derived tracker places it at the 72nd percentile of models it follows)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found** (SimpleQA Verified 66.2% is the closest proxy)

Coding:

- DeepSWE v1.1 (long-horizon SWE): **49%** (vendor) — up from 37%
- SciCode: **53.4%**; WebDev Arena: **1539 Elo** (Epoch AI via Model Beat)
- SWE-bench Verified: **no verified public score found** (SWE-bench Pro 58.7% is the published substitute)
- LiveCodeBench / Vibe Code Bench / Coding Index: **no verified public score found**
- Output speed: **198 tok/s** median (Artificial Analysis)

Long context:

- GDM-MRCR (Google's internal recall test): **91.8% at 128K** but only **54.0% at the full 1M window** — the clearest published evidence in this scan that headline context size and usable recall differ. Anyone relying on near-window retrieval should chunk.

### Normalized scores (1–100)

- **Tool use: 82/100.** OSWorld-Verified 83.0%, SWE-bench Pro 58.7% and MLE-Bench 63.9% are strong agentic signals; capped by the missing Terminal-Bench/Tau3/Claw results and by the fact that 3.7 Flash supersedes it three weeks later.
- **Reasoning: 88/100.** GPQA Diamond 94.1%, ARC-AGI 91.2% and AIME 94.2% are near-frontier for a Flash tier, but HLE 40.8% and ARC-AGI-2 60.4% show the Pro-tier gap.
- **Context window: 92/100.** A million-token window with a 50%-off cache is excellent value, but measured recall collapses to 54.0% at full depth — a real, published limitation that other models in this scan do not document.
- **Multimodal: 85/100.** Text, image, video, audio and PDF input with CharXiv 89.4% tool-aided reasoning; text-only output and a flagged regression in refusal tone.
- **Coding: 82/100.** DeepSWE 49%, SciCode 53.4% and WebDev Arena 1539 Elo mark a large generational jump, but there is no SWE-bench Verified number and no third-party agentic-coding leaderboard entry.
- **Cost efficiency: 90/100.** $0.75/$3.75 per 1M after a 50% cut, $0.075 cached and a free AI Studio tier make it one of the best capability-per-dollar buys here; the scheduled 2027 price doubling caps it below 95.
- **Overall Score: 86/100.** (82 + 88 + 92 + 85 + 82 + 90) / 6 = 86.5 → **87**. Best fit: high-volume agentic coding, desktop automation and long-document work where price per completed task dominates.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (`deepseek/deepseek-v4.1-flash`)** — 2026-09-18
- Method: public internet research (Google model page via HokAI, Epoch AI figures via Model Beat); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.