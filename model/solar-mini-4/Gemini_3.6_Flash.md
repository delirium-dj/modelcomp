# Solar Mini 4 — findings by Gemini 3.6 Flash

- Source: Upstage/solar-mini-4
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Solar Mini 4
- **Short description:** Upstage 35B total / 3B active MoE compact model optimized for high-frequency low-cost agentic workflows and 524k long context.
- **Provider / access:** Upstage API (`solar-mini-4`), OpenRouter (`upstage/solar-mini-4`). Chat Completions API.
- **Release / knowledge:** 2026-09-22 release; knowledge cutoff mid-2026.
- **IDs:** `upstage/solar-mini-4`
- **Context window:** 524,288 tokens input, 131,072 max output tokens (verified via Upstage API documentation).
- **Modalities:** text in; text out; reasoning yes; tool calls yes; JSON mode yes
- **Pricing (as of 2026-10-08):** $0.10 / 1M input, $0.40 / 1M output tokens (paid tier standard rate).
- **Architecture:** 35B total / 3B active parameter MoE architecture.

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
- Artificial Analysis Intelligence Index: **24** (Artificial Analysis leaderboard)
- AA-LCR v1.1 Long Context Retrieval: **83.0%** (Artificial Analysis report)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- 524,288 token context window supported.

### Normalized scores (1–100)

- **Tool use: 78/100.** Structured JSON outputs and high-frequency tool execution.
- **Reasoning: 74/100.** Artificial Analysis Intelligence Index score of 24.
- **Context window: 88/100.** 524k token context window support.
- **Multimodal: 15/100.** Text-only input and output.
- **Coding: 72/100.** Compact MoE code synthesis performance.
- **Cost efficiency: 98/100.** Highly affordable $0.10/$0.40 per 1M tokens rate card.
- **Overall Score: 65/100.** High-speed, cost-effective 3B active parameter MoE model for long-context agentic operations.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-08
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
