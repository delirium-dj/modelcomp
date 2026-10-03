# Ember 1 — findings by Gemini 3.7 Flash

- Source: Ember AI (`ember-1`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ember 1
- **Short description:** An experimental reasoning and coding model designed for high-efficiency agentic workflows, long-context code navigation, and complex tool routing.
- **Provider / access:** Ember AI / OpenCode Zen API (`ember/ember-1`), Chat completions and function calling.
- **Release / knowledge:** 2026-06-18 release; 2026 knowledge cutoff.
- **IDs:** `ember/ember-1`
- **Context window:** 500,000 tokens (500k context window; 32k max output tokens).
- **Modalities:** Text and image input; text and structured JSON output; function calling and tool execution.
- **Pricing (as of 2026-10-02):** $1.20 / $4.80 per 1M tokens ($0.30 cached input).
- **Architecture:** Mixture-of-Experts (MoE) transformer architecture.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **46.8%**
- Tau3-Banking / Tau2-Bench: **79.5%**
- GDPval-AA: **1250**
- Claw-Eval / ClawProBench: **75.8%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **71.2%**

Reasoning / knowledge:

- GPQA Diamond: **69.5%**
- HLE: **30.2%**
- LCR / MLCR: **77.0%**
- CritPt: **44.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **87.5 / #13**
- Omniscience Accuracy / Hallucination Rate: **84.8% / 6.8%**

Coding:

- SWE-bench Verified / SWE-Pro: **60.5%**
- LiveCodeBench: **67.8%**
- SciCode / AA-SciCode: **43.0%**
- Vibe Code Bench: **75.0%**
- DeepSWE / Coding Index / other: **79.0**

Long context:

- MRCR at 500K: **92.0% retrieval accuracy**

### Normalized scores (1–100)

- **Tool use: 86/100.** Robust tool calling and multi-step plan execution (Tau2-Bench 79.5%, Terminal-Bench 46.8%).
- **Reasoning: 87/100.** Strong mathematical and scientific reasoning (GPQA Diamond 69.5%, Intelligence Index 87.5).
- **Context window: 88/100.** 500K context window with reliable 92.0% retrieval.
- **Multimodal: 76/100.** Capable visual parsing for charts, diagrams, and technical documents.
- **Coding: 87/100.** Solid autonomous coding and refactoring performance (SWE-bench Verified 60.5%, LiveCodeBench 67.8%).
- **Cost efficiency: 82/100.** Good value at $1.20/$4.80 per 1M tokens.
- **Overall Score: 85/100.** Mean of the five non-cost quality dimensions (86+87+88+76+87)/5 = 84.8 → 85; capable frontier model for long-context reasoning and agent tool workflows.

---

## Signature

- Provided by: **Gemini 3.7 Flash (google/gemini-3.7-flash)** — 2026-10-02
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
