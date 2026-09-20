# Gemini 2.5 Flash Lite — findings by Muse Spark 1.3 Contributor

- Source: Google/Gemini 2.5 Flash Lite, e.g. Meta (`muse-spark-1.3-contributor-free`)
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Flash Lite (Google ultra-low-latency)
- **Short description:** Google's ultra-low-latency model for cost-sensitive, high-frequency tasks.
- **Provider / access:** Google via AI Studio + Vertex (`google/gemini-2.5-flash-lite`); OpenCode Zen free tier (Chat Completions, tool calling supported).
- **Release / knowledge:** 2025-2026 lineage (2.5 generation); knowledge cutoff undisclosed
- **IDs:** `google/gemini-2.5-flash-lite` (Free tier exists via AI Studio/Zen)
- **Context window:** 1,048,576 (1M) — verified via curated repo metadata
- **Modalities:** text, image, audio, PDF in; text out; reasoning yes (light); tool calls yes
- **Pricing (as of 2026-09-18):** Free tier available; cheapest paid Flash-Lite fallback
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

- **Tool use: 62/100.** Lite tier trades agentic depth for latency; no public harness numbers cap it below full Flash.
- **Reasoning: 62/100.** Lightweight reasoning for high-frequency tasks; capped by zero public evals and Lite positioning.
- **Context window: 100/100.** 1M verified; top tier.
- **Multimodal: 85/100.** Same broad text/image/audio/PDF input as full Flash; capped as outputs remain text.
- **Coding: 62/100.** High-frequency lightweight coding reputation; capped by zero public coding harness numbers.
- **Cost efficiency: 98/100.** Free tier plus cheapest paid Lite fallback; near-maximum value.
- **Overall Score: 74/100.** Mean of the five non-cost dims (62+62+100+85+62)/5 = 74.2; best-fit cheapest high-frequency free Flash pick.

---

## Signature

- Provided by: **Muse Spark 1.3 Contributor (meta/muse-spark-1.3)** — 2026-09-18
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
