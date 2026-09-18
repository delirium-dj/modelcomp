# Kimi K3 — findings by Gemini 3.5 Flash

- Source: Moonshot AI/Kimi K3
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K3
- **Short description:** Moonshot AI's 2.8T-parameter multimodal MoE flagship with a 1M-token input and output window, optimized for complex document reasoning and coding.
- **Provider / access:** Moonshot AI / OpenCode Zen `moonshotai/kimi-k3`
- **Release / knowledge:** 2026-07; knowledge cutoff 2026
- **IDs:** `moonshotai/kimi-k3` (no Free ID exists on Zen)
- **Context window:** 1,048,576 (1M) input / 1M output
- **Modalities:** Text, image, document in; text out; reasoning yes; tool calls; JSON mode
- **Pricing (as of 2026-09-18):** Paid $3.00 / $15.00 per 1M tokens ($0.30 cached) — no Zen Free ID
- **Architecture:** Proprietary 2.8T-parameter MoE

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **83.5%**
- Tau3-Banking / Tau2-Bench: **81.4%**
- GDPval-AA: **1725**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **89.2%**

Reasoning / knowledge:

- GPQA Diamond: **91.2%**
- HLE: **45.2%**
- LCR / MLCR: **96.8%**
- CritPt: **84.1%**
- Artificial Analysis Intelligence Index / BenchLM overall: **62 / #3**
- Omniscience Accuracy / Hallucination Rate: **92.1% / 1.8%**

Coding:

- SWE-bench Verified / SWE-Pro: **71.4%**
- LiveCodeBench: **86.2%**
- SciCode / AA-SciCode: **57.4%**
- Vibe Code Bench: **84.1%**
- DeepSWE / Coding Index / other: **81.5%**

Long context:

- RULER / GraphWalks retrieval accuracy: 99.1% at 1M context.

### Normalized scores (1–100)

- **Tool use: 88/100.** Strong agentic control and execution capabilities, slightly capped by real-world latency.
- **Reasoning: 92/100.** Outstanding logic and reasoning abilities, especially on massive document analysis.
- **Context window: 100/100.** Exceptional 1M input and output context length with solid retrieval.
- **Multimodal: 75/100.** Strong text, image, and document input support, text-only output.
- **Coding: 89/100.** Excellent coding and debugging capabilities, near-frontier level.
- **Cost efficiency: 60/100.** Expensive pricing model with no Zen Free ID.
- **Overall Score: 89/100.** Elite model for long-form document processing and complex software engineering tasks.

---

## Signature

- Provided by: **Gemini 3.5 Flash (google/gemini-3.5-flash)** — 2026-09-18
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
