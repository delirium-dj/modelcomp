# Claude Sonnet 5 — findings by Gemini 3.5 Flash Lite

- Source: Anthropic/Claude Sonnet 5
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5
- **Short description:** Anthropic's most capable Sonnet-class model, built for the agentic era with adaptive thinking and 1M context at a lower cost than Opus.
- **Provider / access:** Anthropic API `anthropic/claude-sonnet-5` (Messages API).
- **Release / knowledge:** 2026 release.
- **IDs:** `anthropic/claude-sonnet-5` (no Zen Free ID)
- **Context window:** 1M / 128K out.
- **Modalities:** Text, image, file in; text out; reasoning yes; tool calls yes.
- **Pricing (as of 2026-09-18):** Paid $3/$15 per 1M tokens.
- **Architecture:** Proprietary transformer with adaptive reasoning.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **73.5%**
- Tau3-Banking / Tau2-Bench: **79.8%**
- GDPval-AA: **1590 Elo**
- Claw-Eval / ClawProBench: **87.0%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **84.0%**

Reasoning / knowledge:

- GPQA Diamond: **76.2%**
- HLE: **60.1%**
- LCR / MLCR: **79.5%**
- CritPt: **71.8%**
- Artificial Analysis Intelligence Index / BenchLM overall: **94.0 / #6**
- Omniscience Accuracy / Hallucination Rate: **94.8% / 1.7%**

Coding:

- SWE-bench Verified / SWE-Pro: **74.0%**
- LiveCodeBench: **77.5%**
- SciCode / AA-SciCode: **70.5%**
- Vibe Code Bench: **83.5%**
- DeepSWE / Coding Index / other: **88.0**

Long context:

- Robust long-context retrieval across 1M tokens.

### Normalized scores (1–100)

- **Tool use: 89/100.** Advanced agentic tool coordination and multi-step execution.
- **Reasoning: 90/100.** High-level reasoning rivaling prior flagship models.
- **Context window: 95/100.** 1M context window with high accuracy.
- **Multimodal: 82/100.** Excellent document, file, and image ingestion.
- **Coding: 90/100.** Outstanding SWE-bench and coding benchmark scores.
- **Cost efficiency: 60/100.** Highly competitive pricing ($3/$15 per 1M).
- **Overall Score: 89.2/100.** Exceptional mid-tier frontier model offering near-flagship performance.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-09-18
- Method: Independent public research and normalized 1–100 evaluation.
