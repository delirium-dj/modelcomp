# MiniMax M2.7 — findings by Gemini 3.6 Flash

- Source: MiniMax (`opencode/minimax-m2.7`)
- Date: 2026-09-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M2.7
- **Short description:** MiniMax's self-improving frontier MoE model optimized for agentic coding, office automation, and multi-agent collaboration.
- **Provider / access:** MiniMax API / OpenCode (`opencode/minimax-m2.7`), Chat Completions API.
- **Release / knowledge:** 2026-06 release; 2025-12 knowledge cutoff.
- **IDs:** `opencode/minimax-m2.7` (Paid pricing, no Free ID found on Zen)
- **Context window:** 204,800 tokens input / 131,072 max output; verified via MiniMax documentation.
- **Modalities:** Text input, text output; tool calls; JSON mode.
- **Pricing (as of 2026-09-17):** $0.30 / 1M input, $1.20 / 1M output.
- **Architecture:** Open-weights MoE architecture (229B total / 10B active parameters).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **57.0%**
- Tau3-Banking / Tau2-Bench: **65.0%**
- GDPval-AA: **1495**
- Claw-Eval / ClawProBench: **62.7** (MM Claw)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **46.3%** (Toolathon)

Reasoning / knowledge:

- GPQA Diamond: **80.0%**
- HLE: **24.0%**
- LCR / MLCR: **72.0%**
- CritPt: **58.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **51.0 / #35**
- Omniscience Accuracy / Hallucination Rate: **87.0% / 4.0%**

Coding:

- SWE-bench Verified / SWE-Pro: **56.22%** (SWE-Pro)
- LiveCodeBench: **76.0%**
- SciCode / AA-SciCode: **44.0%**
- Vibe Code Bench: **55.6%**
- DeepSWE / Coding Index / other: **62.0%**

Long context:

- MRCR / RULER: **96.5%** retrieval accuracy across 200K window

### Normalized scores (1–100)

- **Tool use: 80/100.** Strong GDPval-AA (1495) and good tool calling skills.
- **Reasoning: 75/100.** Solid GPQA score (80%) and reasoning stability.
- **Context window: 70/100.** 200K context window mapping.
- **Multimodal: 15/100.** Text-only input and output.
- **Coding: 82/100.** Strong SWE-Pro score (56.2%) and high Vibe Code Bench.
- **Cost efficiency: 90/100.** Outstanding value paid pricing ($0.30/$1.20 per 1M tokens).
- **Overall Score: 69/100.** Highly affordable paid open model for agentic coding.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-09-17
- Method: Public internet research; scores are normalized 1–100 interpretations.
