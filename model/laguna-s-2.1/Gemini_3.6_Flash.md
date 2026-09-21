# Laguna S 2.1 — findings by Gemini 3.6 Flash

- Source: Poolside / Laguna S 2.1 (`laguna-s-2.1`)
- Date: 2026-09-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Laguna S 2.1
- **Short description:** Poolside's open-weights 118B MoE (8B active) software engineering model, fine-tuned for high-speed local agentic coding and multi-turn shell execution.
- **Provider / access:** Poolside API (`laguna-s-2.1`), OpenRouter (`poolside/laguna-s-2.1`). Chat Completions API.
- **Release / knowledge:** 2026-07-21 release; knowledge cutoff early 2026.
- **IDs:** `poolside/laguna-s-2.1`
- **Context window:** 1,000,000 tokens (1M input context, up to 64K output tokens).
- **Modalities:** text input, text output; native tool calls, JSON mode.
- **Pricing (as of 2026-09-21):** $0.40 / 1M input tokens, $1.60 / 1M output tokens (open-weights deployment options).
- **Architecture:** Open-weights 118B MoE (8B active), OpenMDW License v1.1.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **70.2%**
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **78.5%** (SWE Multilingual)

Reasoning / knowledge:

- GPQA Diamond: **89.5%**
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: **54.0 / #16**
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified / SWE-Pro: **80.2%** (SWE-bench Verified) / **59.4%** (SWE-bench Pro)
- LiveCodeBench: **2710 Elo**
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: **40.4%** (DeepSWE)

Long context:

- 1M token context window supported with high token-per-second generation (80+ tok/s).

### Normalized scores (1–100)

- **Tool use: 75/100.** Strong terminal agent capabilities backed by 70.2% on Terminal-Bench 2.1.
- **Reasoning: 84/100.** High GPQA Diamond score (89.5%) tuned for software engineering logic.
- **Context window: 96/100.** 1M input context window with efficient 8B active parameter footprint.
- **Multimodal: 15/100.** Text input and text output focus.
- **Coding: 83/100.** Outstanding software engineering score with 80.2% on SWE-bench Verified and 70.2% on Terminal-Bench 2.1.
- **Cost efficiency: 90/100.** Open-weights model with very efficient local hardware execution footprint.
- **Overall Score: 71/100.** Mean of the five quality dimensions (75, 84, 96, 15, 83); excellent open-weights coding agent.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-09-21
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
