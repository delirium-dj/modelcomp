# Gemini 3.7 Flash — findings by Muse Spark 1.3 Contributor

- Source: Google/Gemini 3.7 Flash, e.g. Meta (`muse-spark-1.3-contributor-free`)
- Date: 2026-09-18 (UTC), amended 2026-09-27 (UTC, user-signed-off exception: model-card absolutes added, scores recomputed 84 → 88)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.7 Flash (Google high-capability 3.7)
- **Short description:** Google's high-capability 3.7 Flash model.
- **Provider / access:** Google via AI Studio + Vertex (`google/gemini-3.7-flash`); OpenCode Zen free tier (Chat Completions, tool calling supported).
- **Release / knowledge:** 2026-08-13 release (three weeks after 3.6 Flash; algorithmic refinement, thinking_level control); knowledge cutoff undisclosed (amended 2026-09-27).
- **IDs:** `google/gemini-3.7-flash` (Free tier exists via AI Studio/Zen)
- **Context window:** 1,048,576 (1M) — verified via curated repo metadata
- **Modalities:** text, image, audio, PDF in; text out; reasoning yes; tool calls yes
- **Pricing (as of 2026-09-18, re-verified 2026-09-27):** $0.75/$3.75 per 1M intro through 2026-12-31, then $1.50/$7.50; free tier via AI Studio/Zen
- **Architecture:** proprietary (undisclosed)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **85.8%** (Google model card, vs 3.6 78.0%, Sonnet 5 80.4%, Terra 87.4%)
- AutomationBench: **30.4%** (Google model card, vs 3.6 17.0%, Sonnet 5 10.7%, Terra 23.6%)
- GDP.pdf (expert PDF comprehension): **34.0%** (Google model card, vs 3.6 22.0%, Sonnet 5 28.0%)
- Harvey LAB-AA (legal): **90.7%** (Google model card)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE-Verified: **53.6%** (Google model card, vs 3.6 51.2%, Sonnet 5 31.0%, Terra 51.1%)
- CharXiv Reasoning (no tools): **84.5%** (Google model card, vs 3.6 85.2%, Sonnet 5 77.0%)
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **56 AA Index (high)** (emergent/AA, ahead of 3.6 at 52)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **65.3% DeepSWE v1.1** (Google model card, vs 3.6 49.0%); **43.6% FrontierCode 1.1 Main** (model card, ahead of Sonnet 5 42.7% and Terra 41.3%); **1588 WebDev Arena Elo** (vs 3.6 1538)

Long context:

- **1M window verified; MRCR v2 97.0% (128k, 8-needle)** (Google model card, vs 3.6 91.8%, Sonnet 5 81.5%); **LVBench long-video 85.4%** (model card, vs 3.6 84.2%)

### Normalized scores (1–100)

- **Tool use: 84/100.** TB2.1 85.8% plus AutomationBench 30.4% and GDP.pdf 34.0% lead the Flash tier; capped by zero Tau3/GDPval/Claw-Eval numbers.
- **Reasoning: 86/100.** HLE-Verified 53.6% plus AA Index 56 and CharXiv 84.5% lead the price tier; capped by zero GPQA absolute.
- **Context window: 100/100.** 1M verified; top tier.
- **Multimodal: 87/100.** Broad text/image/audio/PDF input with LVBench 85.4% and CharXiv 84.5% measured strength; capped as outputs remain text.
- **Coding: 82/100.** FrontierCode 43.6% (ahead of Sonnet 5/Terra) plus DeepSWE 65.3% and WebDev 1588 show strong Flash-tier coding; capped by zero SWE/LiveCode/SciCode absolutes.
- **Cost efficiency: 95/100.** Free tier available with cheap paid fallback.
- **Overall Score: 88/100.** Mean of the five non-cost dims (84+86+100+87+82)/5 = 87.8; best-fit high-capability Flash pick — model-card absolutes now confirm it.

---

## Signature

- Provided by: **Muse Spark 1.3 Contributor (meta/muse-spark-1.3)** — 2026-09-18
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
