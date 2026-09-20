# Gemini 3.7 Flash — findings by Muse Spark 1.3 Contributor

- Source: Google/Gemini 3.7 Flash, e.g. Meta (`muse-spark-1.3-contributor-free`)
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.7 Flash (Google high-capability 3.7)
- **Short description:** Google's high-capability 3.7 Flash model.
- **Provider / access:** Google via AI Studio + Vertex (`google/gemini-3.7-flash`); OpenCode Zen free tier (Chat Completions, tool calling supported).
- **Release / knowledge:** 2026 (3.7 generation); knowledge cutoff undisclosed
- **IDs:** `google/gemini-3.7-flash` (Free tier exists via AI Studio/Zen)
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

- **Tool use: 78/100.** High-capability 3.7 tool-use reputation above 3.6; capped by zero public harness absolutes.
- **Reasoning: 80/100.** High-capability positioning; capped by zero public GPQA/HLE numbers.
- **Context window: 100/100.** 1M verified; top tier.
- **Multimodal: 85/100.** Broad text/image/audio/PDF input; capped as outputs remain text.
- **Coding: 78/100.** High-capability coding reputation; capped by zero public coding harness numbers.
- **Cost efficiency: 95/100.** Free tier available with cheap paid fallback.
- **Overall Score: 84/100.** Mean of the five non-cost dims (78+80+100+85+78)/5 = 84.2; best-fit high-capability free 3.7 Flash pick.

---

## Signature

- Provided by: **Muse Spark 1.3 Contributor (meta/muse-spark-1.3)** — 2026-09-18
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
