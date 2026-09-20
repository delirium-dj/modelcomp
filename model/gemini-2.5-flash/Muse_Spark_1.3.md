# Gemini 2.5 Flash — findings by Muse Spark 1.3 Contributor

- Source: Google/Gemini 2.5 Flash, e.g. Meta (`muse-spark-1.3-contributor-free`)
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Flash (Google balanced Flash)
- **Short description:** Google's balanced Flash model, optimized for speed and efficiency in varied tasks.
- **Provider / access:** Google via AI Studio + Vertex (`google/gemini-2.5-flash`); OpenCode Zen free tier (Chat Completions, tool calling supported).
- **Release / knowledge:** 2025-2026 lineage (2.5 generation); knowledge cutoff undisclosed
- **IDs:** `google/gemini-2.5-flash` (Free tier exists via AI Studio/Zen)
- **Context window:** 1,048,576 (1M) — verified via curated repo metadata + Google AI Studio docs pattern
- **Modalities:** text, image, audio, PDF in; text out; reasoning yes; tool calls yes
- **Pricing (as of 2026-09-18):** Free tier available; paid-tier fallback per Google pricing
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

- **Tool use: 70/100.** Balanced Flash tool-use reputation with no public harness absolutes; capped at mid-tier provisional.
- **Reasoning: 70/100.** Balanced Flash reasoning reputation; capped by zero public GPQA/HLE numbers.
- **Context window: 100/100.** 1M verified; top tier.
- **Multimodal: 85/100.** Text/image/audio/PDF in, text out — broad Google Flash coverage; capped as outputs remain text.
- **Coding: 70/100.** Balanced coding reputation; capped by zero public SWE/LiveCodeBench numbers.
- **Cost efficiency: 95/100.** Free tier available with cheap paid fallback; near-free value.
- **Overall Score: 79/100.** Mean of the five non-cost dims (70+70+100+85+70)/5 = 79.0; best-fit balanced free Flash daily driver.

---

## Signature

- Provided by: **Muse Spark 1.3 Contributor (meta/muse-spark-1.3)** — 2026-09-18
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
