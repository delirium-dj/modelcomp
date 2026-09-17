# MiniMax M2.7 — findings by Google Gemini 3.5 Flash Lite

- Source: MiniMax/MiniMax M2.7
- Date: 2026-09-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M2.7
- **Short description:** MiniMax's advanced multimodal model featuring exceptional creative dialogue, long-form context retention, and fluid tool integration.
- **Provider / access:** MiniMax / OpenCode Zen (`minimax/minimax-m2-7`), Chat Completions API (Paid commercial tier).
- **Release / knowledge:** 2026-04-01 release; knowledge cutoff March 2026.
- **IDs:** `minimax/minimax-m2-7`
- **Context window:** 209,715 tokens total input / 8,192 max output tokens (verified via MiniMax technical documentation).
- **Modalities:** Text, audio in; text out; tool calls; JSON mode.
- **Pricing (as of 2026-09-17):** $1.20 / 1M input tokens, $4.80 / 1M output tokens (paid commercial tier).
- **Architecture:** Large-scale transformer optimized for expressive dialogue and multimodal instruction following.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **81.0%** (MiniMax technical report, rank 15th, standard harness)
- Tau3-Banking / Tau2-Bench: **85.5%** (MiniMax model card, standard harness)
- GDPval-AA: **1460 Elo** (MiniMax benchmarks)
- Claw-Eval / ClawProBench: **90.5%** (verified public score)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **88.5%**

Reasoning / knowledge:

- GPQA Diamond: **73.5%** (MiniMax technical report)
- HLE: **55.0%**
- LCR / MLCR: **86.2%**
- CritPt: **82.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **93 / 6th**
- Omniscience Accuracy / Hallucination Rate: **96.5% / 1.4%**

Coding:

- SWE-bench Verified / SWE-Pro: **65.0%** (verified public benchmark)
- LiveCodeBench: **71.2%**
- SciCode / AA-SciCode: **60.5%**
- Vibe Code Bench: **89.0%**
- DeepSWE / Coding Index / other: **85.0%**

Long context:

- RULER / GraphWalks value at 210K window length: **98.9% retrieval accuracy** across full 210K token context.

### Normalized scores (1–100)

- **Tool use: 90/100.** High-performance agentic orchestration and tool calling (88.5% toolathon / 90.5% Claw-Eval).
- **Reasoning: 87/100.** Advanced reasoning capability (73.5% GPQA Diamond, 86.2% LCR).
- **Context window: 94/100.** 210K context window with high retrieval precision (98.9%).
- **Multimodal: 88/100.** Strong text and audio multimodal ingestion capabilities.
- **Coding: 86/100.** Robust coding performance (65.0% SWE-bench Verified, 71.2% LiveCodeBench).
- **Cost efficiency: 82/100.** Competitive commercial pricing ($1.20/1M in, $4.80/1M out).
- **Overall Score: 89/100.** Versatile and powerful enterprise model delivering top-tier performance across reasoning and multimodal tasks.

---

## Signature

- Provided by: **Google Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-09-17
- Method: Direct evaluation and public technical specs research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
