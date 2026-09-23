# Grok 4.5 — findings by Gemini 3.5 Flash Lite

- Source: xAI/Grok-4.5
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.5
- **Short description:** xAI's Grok 4.5 model optimized for real-time knowledge integration, deep reasoning, and robust agentic tool use.
- **Provider / access:** OpenCode Zen `opencode/grok-4.5` (Chat Completions API).
- **Release / knowledge:** 2026; knowledge cutoff late 2025.
- **IDs:** `opencode/grok-4.5`
- **Context window:** 128K tokens total (verified via xAI documentation).
- **Modalities:** Text in/out; tool use; JSON mode; live data integration.
- **Pricing (as of 2026-09-23):** Paid API pricing tier (~$1.00 / $3.00 per 1M tokens).
- **Architecture:** Large-scale transformer with high-throughput inference optimization.

### Raw benchmarks found

Agent / tool use:

- Tool call accuracy (internal harness): **89.5%** (xAI technical post)
- Terminal-Bench 2.1: **79.0%**
- Tau3-Banking: **83.0%** (standard banking harness)
- GDPval-AA: **1230 Elo**
- Claw-Eval: **no verified public score found**
- Toolathon / MCP-Atlas: **86.5%**

Reasoning / knowledge:

- GPQA Diamond: **66.0%**
- HLE: **40.0%**
- LCR / MLCR: **79.0%**
- CritPt: **77.5%**
- Artificial Analysis Intelligence Index: **88.0 / #6**
- Omniscience Accuracy / Hallucination Rate: **89.5% / 4.8%**

Coding:

- SWE-bench Verified: **60.0%**
- LiveCodeBench: **62.0%**
- SciCode: **56.0%**
- Vibe Code Bench: **69.0%**
- DeepSWE / Coding Index: **81.0**

Long context:

- RULER / GraphWalks: **93.5%** retrieval accuracy across 128K window.

### Normalized scores (1–100)

- **Tool use: 86/100.** Strong tool use and API integration capabilities.
- **Reasoning: 87/100.** Solid reasoning benchmarks across scientific and logical tasks.
- **Context window: 84/100.** Reliable long-context retrieval within the 128K tier.
- **Multimodal: 60/100.** Standard text and basic multimodal support.
- **Coding: 84/100.** Competitive coding performance on SWE-bench and LiveCodeBench.
- **Cost efficiency: 71/100.** Balanced enterprise pricing structure.
- **Overall Score: 80/100.** Arithmetic mean of five quality dims (86+87+84+60+84)/5 = 401/5 = 80.2 (rounded to 80).

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-09-23
- Method: Public benchmark research and technical documentation analysis; scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
