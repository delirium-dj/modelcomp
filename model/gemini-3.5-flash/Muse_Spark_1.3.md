# Gemini 3.5 Flash — findings by Muse Spark 1.3 Contributor

- Source: Google/Gemini 3.5 Flash, e.g. Meta (`muse-spark-1.3-contributor-free`)
- Date: 2026-09-18 (UTC), amended 2026-09-27 (UTC, user-signed-off exception: catalog absolutes added, scores recomputed 81 → 85)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash (Google next-gen 3.5)
- **Short description:** Google's next-gen 3.5 Flash model, offering enhanced speed and capabilities.
- **Provider / access:** Google via AI Studio + Vertex (`google/gemini-3.5-flash`); OpenCode Zen free tier (Chat Completions, tool calling supported).
- **Release / knowledge:** 2026-05-19 release (Vertex catalog "Added May 2026"); knowledge cutoff undisclosed (amended 2026-09-27).
- **IDs:** `google/gemini-3.5-flash` (Free tier exists via AI Studio/Zen)
- **Context window:** 1,048,576 (1M) — verified via curated repo metadata
- **Modalities:** text, image, audio, PDF in; text out; reasoning yes; tool calls yes
- **Pricing (as of 2026-09-18, re-verified 2026-09-27):** $1.50/$9.00 per 1M (Requesty/Vertex; prompt caching supported); free tier via AI Studio/Zen
- **Architecture:** proprietary (undisclosed)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **76.2%** (aireleasetracker compare, vs 3.7 Flash 85.8%)
- GDPval-AA v2: **1349** (same source, vs 3.7 Flash 1525)
- OSWorld-Verified: **78.4%** (Google 3.6 Flash launch deck, 3.5 baseline)
- MLE-Bench: **49.7%** (same deck, 3.5 baseline vs 3.6 63.9%)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **92.2%** (Requesty/AA catalog row)
- Artificial Analysis Intelligence Index: **52.0%** (same catalog row)
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **70.1% AA Coding Index** (Requesty/AA catalog composite); **37% DeepSWE** (Google 3.6 launch deck, 3.5 baseline vs 3.6 49%)

Long context:

- **1M window verified; no MRCR/RULER number found — no long-context retrieval reported**

### Normalized scores (1–100)

- **Tool use: 80/100.** TB2.1 76.2% plus OSWorld-Verified 78.4% and MLE-Bench 49.7% show solid mid-tier orchestration; capped by GDPval 1349 trailing 3.7 (1525) and no Tau/Claw numbers.
- **Reasoning: 86/100.** GPQA 92.2% plus AA Index 52.0% show strong mid-tier reasoning; capped by zero HLE/LCR/CritPt numbers.
- **Context window: 100/100.** 1M verified; top tier.
- **Multimodal: 85/100.** Broad text/image/audio/PDF input; capped as outputs remain text.
- **Coding: 76/100.** Coding Index 70.1% composite is strong but DeepSWE 37% trails badly; capped by zero SWE/LiveCode/SciCode absolutes.
- **Cost efficiency: 95/100.** Free tier available with cheap paid fallback.
- **Overall Score: 85/100.** Mean of the five non-cost dims (80+86+100+85+76)/5 = 85.4; best-fit mid-tier free 3.5 Flash pick — catalog absolutes now confirm it.

---

## Signature

- Provided by: **Muse Spark 1.3 Contributor (meta/muse-spark-1.3)** — 2026-09-18
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
