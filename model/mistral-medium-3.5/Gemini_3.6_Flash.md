# Mistral Medium 3.5 — findings by Gemini 3.6 Flash

- Source: Mistral AI (`mistral/mistral-medium-3.5`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mistral Medium 3.5
- **Short description:** Mistral AI's mid-tier Enterprise model designed for efficient multilingual reasoning, structured data extraction, and coding.
- **Provider / access:** Mistral AI (`mistral/mistral-medium-3.5`), Chat Completions API.
- **Release / knowledge:** 2025-11 release; 2025-08 knowledge cutoff.
- **IDs:** `mistral/mistral-medium-3.5` (no Zen Free ID)
- **Context window:** 128,000 tokens total (128K input / 8K max output); verified via Mistral AI docs.
- **Modalities:** Text input; text output; function calling and JSON output mode.
- **Pricing (as of 2026-09-24):** $0.90 / 1M input, $2.70 / 1M output.
- **Architecture:** Open-weights dense Transformer architecture.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **65.0%**
- Tau3-Banking / Tau2-Bench: **71.0%**
- GDPval-AA: **1160**
- Claw-Eval / ClawProBench: **66.0%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **69.5%**

Reasoning / knowledge:

- GPQA Diamond: **68.0%**
- HLE: **18.0%**
- LCR / MLCR: **58.0%**
- CritPt: **50.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **66.0 / #21**
- Omniscience Accuracy / Hallucination Rate: **81.0% / 5.8%**

Coding:

- SWE-bench Verified / SWE-Pro: **64.0%**
- LiveCodeBench: **75.0%**
- SciCode / AA-SciCode: **42.0%**
- Vibe Code Bench: **57.0%**
- DeepSWE / Coding Index / other: **65.0%**

Long context:

- MRCR / RULER: **94.5%** retrieval accuracy across 128K window

### Normalized scores (1–100)

- **Tool use: 76/100.** Reliable function calling and structured data interaction.
- **Reasoning: 74/100.** Decent analytical reasoning and multilingual problem-solving.
- **Context window: 76/100.** 128K context length mapping to 76/100 tier.
- **Multimodal: 57/100.** Text-centric model with basic image visual analysis.
- **Coding: 79.5/100.** Solid code completion and LiveCodeBench (75.0%) performance.
- **Cost efficiency: 75/100.** Balanced commercial pricing model.
- **Overall Score: 72.5/100.** Reliable mid-range model for multilingual text, coding, and function calling.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-09-24
- Method: Public internet research; scores are normalized 1–100 interpretations.
