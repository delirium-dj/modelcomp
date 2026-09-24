# Gemini 2.5 Flash — findings by Muse Spark 1.2

- Source: Google (opencode/muse-spark-1.2-contributor-free)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Flash
- **Short description:** Google's fast 1M multimodal Flash (2025-05) with reasoning/non-reasoning variants; deprecated but fast, cheap latency king.
- **Provider / access:** Google AI Studio `gemini-2.5-flash` via OpenCode Zen `google/gemini-2.5-flash` (Chat Completions via adapter)
- **Release / knowledge:** 2025-05; knowledge cutoff 2025-01-01
- **IDs:** `google/gemini-2.5-flash` (Reasoning 13, Non-reasoning 10–14) — no Free tier
- **Context window:** 1,000,000 total (1M in / ~32K out) — verified via Artificial Analysis (1M)
- **Modalities:** Text, image in; text out; reasoning yes (Reasoning vs Non-reasoning); tool calls yes; JSON mode yes — no audio/video/PDF
- **Pricing (as of 2026-09-24):** $0.30 in / $2.50 out per 1M est. ($0.33 blended per AA) — deprecated, superseded by 2.5 Flash Sep
- **Architecture:** Proprietary (Gemini 2.5 family)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **no verified public score found** (not isolated for 2.5 Flash; deprecated workload only)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found** (grouped under AA Index 13)
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**
- AutomationBench-AA: **no verified isolate** (grouped under Index)

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found** (deprecated, not ranked)
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index: **13 (Reasoning, v4.3.2) / 10 Non-reasoning** (Artificial Analysis — vs 20 est. reasoning in comparison view; deprecated, below median)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**
- MMMU-Pro / other: **no verified public score found** for 2.5 Flash (Sep variant 19)

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found** — deprecated, not on Coding Index leader

Long context:

- 1M total verified; no MRCR/RULER at max reported; deprecated workload only 10K tokens maintained

### Normalized scores (1–100)

- **Tool use: 55/100.** No TB/Automation/GDPval verified under v4.3; capped at 55 on 1M tool window existence and 218 t/s speed — lacks agentic isolation.
- **Reasoning: 52/100.** AA Index 13 (Reasoning) well below median 25 and deprecated; no GPQA/HLE/CritPt; capped at 52 on 1M latency 0.46s fast but not intelligent.
- **Context window: 96/100.** 1,000,000 total verified; tier 95-100 for ≥1M but capped at 96 by no MRCR/LCR disclosure and deprecated status.
- **Multimodal: 60/100.** Text+image in → text out only; 60 tier for image; capped by no video/audio/PDF vs 2.5 Pro video peers.
- **Coding: 50/100.** No verified SWE/LCB/SciCode; deprecated without Coding Index ranking; capped at 50 placeholder — no evidence of frontier coding.
- **Cost efficiency: 60/100.** $0.33 blended paid; cheap vs GPT but not Free and deprecated (suggest Gemini 2.5 Flash Sep instead).
- **Overall Score: 63/100.** Mean of five non-cost dims (55+52+96+60+50)/5=62.6 → 63; best-fit deprecated fast Flash — use Sep variant.

---

## Signature

- Provided by: **Muse Spark 1.2 (opencode/muse-spark-1.2-contributor-free)** — 2026-09-24
- Method: public internet research (Artificial Analysis 2025-05 Gemini 2.5 Flash Reasoning 13 vs Non-reasoning 10/14, 2026-09 Sep 19, provider benchmarking Google AI Studio 208 t/s, 0.46s latency); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
