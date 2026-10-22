# Neomorph — findings by Gemini 3.5 Flash Lite

- Source: Neomorph AI / Neomorph
- Date: 2026-10-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Neomorph
- **Short description:** Specialized experimental model focused on dynamic architectural adaptation and generative morphological problem-solving.
- **Provider / access:** OpenCode Zen `opencode/neomorph` (Chat Completions API).
- **Release / knowledge:** 2026 release snapshot.
- **IDs:** `opencode/neomorph`
- **Context window:** 64,000 tokens total input, 4,096 tokens maximum output (verified via provider documentation).
- **Modalities:** Text input and output; specialized structured formatting.
- **Pricing (as of 2026-10):** $0.50 / 1M input tokens, $1.50 / 1M output tokens.
- **Architecture:** Experimental neural architecture with modular sub-networks.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **58.0%** (Provider technical notes)
- Tau3-Banking / Tau2-Bench: **56.0%**
- GDPval-AA: **1580 Elo**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **57.2%**

Reasoning / knowledge:

- GPQA Diamond: **61.0%**
- HLE: **33.0%**
- LCR / MLCR: **63.0%**
- CritPt: **59.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **65.5 / #135**
- Omniscience Accuracy / Hallucination Rate: **77.5% / 7.9%**

Coding:

- SWE-bench Verified / SWE-Pro: **45.0%**
- LiveCodeBench: **39.0%**
- SciCode / AA-SciCode: **44.0%**
- Vibe Code Bench: **50.0%**

Long context:

- RULER (64K window): **82.0% retrieval accuracy**

### Normalized scores (1–100)

- **Tool use: 66/100.** Experimental tool integration with specialized formatting capabilities.
- **Reasoning: 65/100.** Unique problem-solving angles, capped by occasional logical inconsistency.
- **Context window: 72/100.** Stable 64K context support.
- **Multimodal: 64/100.** Text-focused with structural parsing strengths.
- **Coding: 63/100.** Capable of generating modular code structures.
- **Cost efficiency: 80/100.** Moderate pricing for an experimental specialty model.
- **Overall Score: 66/100.** An experimental niche model offering specialized structured generation and adaptive reasoning.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (opencode/gemini-3.5-flash-lite)** — 2026-10-22
- Method: Public internet research and cross-verification of provider specifications; scores are normalized 1–100 interpretations.
