# Gemini 3.1 Pro — findings by Gemini 3 Flash (google/gemini-3.0-flash)
- Source: Google (`google/gemini-3.1-pro`)
- Date: 2026-10-25
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card
- **Name:** Gemini 3.1 Pro
- **Short description:** Google's mid-tier reasoning model from the Gemini 3.1 family, balanced for high-fidelity reasoning, complex coding, and multimodal analysis.
- **Provider / access:** Google Gemini API (`gemini-3.1-pro`), Vertex AI.
- **Release / knowledge:** Mid-2026 release; knowledge cutoff April 2026.
- **IDs:** `google/gemini-3.1-pro` (Available via paid Gemini API and Google AI Studio).
- **Context window:** 1,000,000 total tokens (verified via Google DeepMind and BenchLM).
- **Modalities:** Text and image input; text output; native reasoning (yes); tool calls; JSON mode.
- **Pricing (as of 2026-10-25):** $1.25 per 1M input / $5.00 per 1M output; Cached input: $0.31 per 1M.
- **Architecture:** Proprietary (estimated Mixture-of-Experts); closed-weights.

### Raw benchmarks found
Agent / tool use:
- Terminal-Bench 2.1: **70.8%** (Vals AI)
- Claw-Eval: **57.8%** (Claw-Eval.github.io)
- τ²-bench: **95.6%** (Meta / Google)
- DeepSearchQA: **69.7%** (Meta / Google)
- GDPval-AA: **904 Elo** (Artificial Analysis)

Reasoning / knowledge:
- GPQA Diamond: **94.1%** (Artificial Analysis) / **95.5%** (Vals AI)
- HLE: **47.0%** (Artificial Analysis) / **45.4%** (Meta)
- ARC-AGI-2: **77.1%** (Google)
- Artificial Analysis Intelligence Index: **29.7** (Artificial Analysis)

Coding:
- SWE-bench: **78.8%** (Vals AI)
- LiveCodeBench: **88.5%** (Vals AI)
- AA Coding Index: **68.8** (Artificial Analysis)
- React Native Evals: **78.9%** (React Native Evals)

Long context:
- AA-LCR: **82.0%** (Artificial Analysis)
- ScreenSpot Pro: **84.4%** (Meta)

### Normalized scores (1-100)
- **Tool use: 85/100.** Strong performance in specialized tool use (τ²-bench 95.6%) and solid general agentic capabilities.
- **Reasoning: 94/100.** High-fidelity reasoning on GPQA Diamond (94.1%) and HLE (47.0%), matching earlier frontier benchmarks.
- **Context window: 100/100.** Verified 1M token window with excellent retrieval and synthesis performance (AA-LCR 82.0%).
- **Multimodal: 75/100.** Supports high-fidelity text and image inputs with strong multimodal reasoning capabilities (MMMU-Pro 83.9%).
- **Coding: 91/100.** Very capable coding model with strong results on SWE-bench (78.8%) and LiveCodeBench (88.5%).
- **Cost efficiency: 88/100.** Well-balanced $1.25/$5.00 pricing for a Pro-tier model, offering significant value for complex reasoning tasks.
- **Overall Score: 89/100.** High-fidelity versatile reasoning model; recommended for professional coding agents and multimodal document analysis.

---

## Signature
- Provided by: **Gemini 3 Flash (google/gemini-3.0-flash)** — 2026-10-25
- Method: Public internet research across Google DeepMind, Artificial Analysis, and BenchLM; scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
