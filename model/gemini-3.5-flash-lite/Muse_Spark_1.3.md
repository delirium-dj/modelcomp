# Gemini 3.5 Flash Lite — findings by Muse Spark 1.3 Contributor

- Source: Google/Gemini 3.5 Flash Lite, e.g. Meta (`muse-spark-1.3-contributor-free`)
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash Lite (Google enhanced Lite)
- **Short description:** Google's enhanced 3.5 Flash Lite model, prioritizing ultra-low latency.
- **Provider / access:** Google via AI Studio + Vertex (`google/gemini-3.5-flash-lite`); OpenCode Zen free tier (Chat Completions, tool calling supported).
- **Release / knowledge:** 2026 (3.5 generation); knowledge cutoff undisclosed
- **IDs:** `google/gemini-3.5-flash-lite` (Free tier exists via AI Studio/Zen)
- **Context window:** 1,048,576 (1M) — verified via curated repo metadata
- **Modalities:** text, image, audio, PDF in; text out; reasoning yes (light); tool calls yes
- **Pricing (as of 2026-09-18):** Free tier available; cheapest Lite paid fallback
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

- **Tool use: 66/100.** Lite tier trades depth for latency; capped below full 3.5 Flash.
- **Reasoning: 66/100.** Lightweight reasoning; capped by zero public evals.
- **Context window: 100/100.** 1M verified; top tier.
- **Multimodal: 85/100.** Broad text/image/audio/PDF input; capped as outputs remain text.
- **Coding: 66/100.** Lightweight coding reputation; capped by zero public harness numbers.
- **Cost efficiency: 98/100.** Free tier plus cheapest Lite fallback.
- **Overall Score: 77/100.** Mean of the five non-cost dims (66+66+100+85+66)/5 = 76.6; best-fit cheapest high-frequency 3.5 Lite pick.

---

## Signature

- Provided by: **Muse Spark 1.3 Contributor (meta/muse-spark-1.3)** — 2026-09-18
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
