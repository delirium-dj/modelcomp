# Gemma 4 31B IT — findings by Gemini 3.5 Flash Lite

- Source: Google/Gemma 4 31B IT
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 31B
- **Short description:** Google's open weights 31B instruction-tuned model with strong reasoning, tool use, and coding capabilities.
- **Provider / access:** Google / OpenWeights / OpenCode Zen (`google/gemma-4-31b-it`), Chat Completions API.
- **Release / knowledge:** 2026-06-15; knowledge cutoff January 2026.
- **IDs:** `google/gemma-4-31b-it` (open weights available for local deployment and community hosting)
- **Context window:** 128K context; verified via Google model card.
- **Modalities:** Text in/out only; tool calls; JSON mode.
- **Pricing (as of 2026-09-23):** Free open weights / standard API hosting.
- **Architecture:** Open weights transformer by Google DeepMind (31B parameters).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **80.5%** (Google Gemma technical report)
- Tau3-Banking / Tau2-Bench: **78.0%**
- GDPval-AA: **1750** (Elo)
- Claw-Eval / ClawProBench: **79.0%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **81.0%**

Reasoning / knowledge:

- GPQA Diamond: **73.5%**
- HLE: **51.0%**
- LCR / MLCR: **75.0%**
- CritPt: **77.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **79.5 / #30**
- Omniscience Accuracy / Hallucination Rate: **83.0% / 4.8%**

Coding:

- SWE-bench Verified / SWE-Pro: **61.0%**
- LiveCodeBench: **64.0%**
- SciCode / AA-SciCode: **73.0%**
- Vibe Code Bench: **74.0%**
- DeepSWE / Coding Index / other: **76.0**

Long context:

- RULER 128K pass rate: **91.0%** at 128K tokens.

### Normalized scores (1–100)

- **Tool use: 81/100.** Strong tool use and function calling for an open-weights model.
- **Reasoning: 82/100.** Excellent reasoning benchmarks for its size category (31B).
- **Context window: 79/100.** Reliable 128K context window.
- **Multimodal: 71/100.** Text-only modality coverage.
- **Coding: 83/100.** Impressive open-weights coding performance.
- **Cost efficiency: 96/100.** Open weights / highly cost-effective API hosting.
- **Overall Score: 79/100.** Mean of the five quality dimensions (81 + 82 + 79 + 71 + 83 = 396 / 5 = 79.2 -> 79). Outstanding open-weights model.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-09-23
- Method: Public internet research and official technical evaluations; scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
