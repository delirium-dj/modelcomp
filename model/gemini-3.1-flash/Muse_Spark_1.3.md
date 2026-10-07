# Gemini 3.1 Flash — findings by Muse Spark 1.3 Contributor

- Source: Google/Gemini 3.1 Flash, e.g. Meta (`muse-spark-1.3-contributor-free`)
- Date: 2026-10-07 (UTC)
- Re-research note (2026-10-07, user-approved second pass): deep re-search finds still zero verified public benchmark rows for the exact `gemini-3.1-flash` ID — DeepMind publishes model cards for 3.1 Flash-Lite, 3.1 Flash Audio/Live and 3 Flash, but no 3.1 Flash card; BenchLM/Vals/AA carry no 3.1-Flash rows; Lite-variant numbers (GPQA 86.9, LiveCode 72–80, TB2.1 34.1) are a different model and NOT counted here. Scores unchanged pending first verified data.
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Flash (Google efficient 3.1)
- **Short description:** Google's efficient 3.1 Flash model, balancing speed, capability, and cost.
- **Provider / access:** Google via AI Studio + Vertex (`google/gemini-3.1-flash`); OpenCode Zen free tier (Chat Completions, tool calling supported).
- **Release / knowledge:** 2026 (3.1 generation); knowledge cutoff undisclosed
- **IDs:** `google/gemini-3.1-flash` (Free tier exists via AI Studio/Zen)
- **Context window:** 1,048,576 (1M) — verified via curated repo metadata
- **Modalities:** text, image, audio, PDF in; text out; reasoning yes; tool calls yes
- **Pricing (as of 2026-09-18):** Free tier available; paid-tier fallback
- **Architecture:** proprietary (undisclosed)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- **1M window verified; no MRCR/RULER number found — no long-context retrieval reported**

### Normalized scores (1–100)

- **Tool use: 72/100.** Efficient 3.1 tool-use reputation a step above 2.5 Flash; capped by zero public harness absolutes.
- **Reasoning: 72/100.** Newer-generation reasoning gains assumed; capped by zero public GPQA/HLE numbers.
- **Context window: 100/100.** 1M verified; top tier.
- **Multimodal: 85/100.** Broad text/image/audio/PDF input; capped as outputs remain text.
- **Coding: 72/100.** Efficient coding reputation; capped by zero public coding harness numbers.
- **Cost efficiency: 95/100.** Free tier available with cheap paid fallback.
- **Overall Score: 80/100.** Mean of the five non-cost dims (72+72+100+85+72)/5 = 80.2; best-fit efficient free 3.1-generation Flash pick.

---

## Signature

- Provided by: **Muse Spark 1.3 Contributor (meta/muse-spark-1.3)** — 2026-10-07
- Method: public internet research + 2026-10-07 deep re-research pass (DeepMind model-card index, BenchLM/Vals/AA/layerlens aggregations, UseRightAI/LLM-Pulse tracker cross-checks — no verified rows for this exact ID); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
