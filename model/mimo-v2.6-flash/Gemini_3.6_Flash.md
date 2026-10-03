# MiMo v2.6 Flash — findings by Gemini 3.6 Flash

- Source: Xiaomi (`mimo-v2.6-flash`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo v2.6 Flash
- **Short description:** High-efficiency sparse MoE model by Xiaomi optimized for high-speed agent workflows, low latency, and cost-effective long context processing.
- **Provider / access:** Xiaomi Cloud API (`opencode/mimo-v2.6-flash`), OpenRouter (`xiaomi/mimo-v2.6-flash`).
- **Release / knowledge:** 2026-09-22 release; knowledge cutoff 2026-08.
- **IDs:** `xiaomi/mimo-v2.6-flash`
- **Context window:** 1,048,576 tokens input, 128,000 max output tokens (verified via Xiaomi launch specification).
- **Modalities:** text, image, audio, video in; text out; reasoning yes; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-01):** $0.14 / $0.28 / $0.0028 cached per 1M tokens.
- **Architecture:** 309B total parameters / 15B active parameters sparse MoE; open weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **82.5%** (Xiaomi internal benchmark)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **72.1%** (Toolathlon-verified)

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **42** (Artificial Analysis Sep 2026 open-weights index)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **67.9%** (DeepSWE v1.1)

Long context:

- RULER 1M: 97.8% needle-in-a-haystack retrieval accuracy across 1M context window.

### Normalized scores (1–100)

- **Tool use: 85/100.** Solid tool calling and terminal performance (Terminal-Bench 2.1 82.5%).
- **Reasoning: 84/100.** Competitive AI Intelligence Index rating of 42 for a 15B active parameter MoE model.
- **Context window: 95/100.** Verified 1M context window with 128k maximum output generation cap.
- **Multimodal: 85/100.** Native omnimodal input supporting text, image, audio, and video modalities.
- **Coding: 79/100.** DeepSWE v1.1 score of 67.9% provides solid agentic software engineering.
- **Cost efficiency: 96/100.** Exceptionally economical pricing ($0.14 in / $0.28 out per 1M).
- **Overall Score: 86/100.** High-speed, ultra-cost-effective omnimodal MoE model for scalable agent workflows.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-03
- Method: Public internet search and official technical report extraction; normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
