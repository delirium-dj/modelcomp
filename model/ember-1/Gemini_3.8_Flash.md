# Ember 1 — findings by Gemini 3.8 Flash

- Source: Ember AI (`ember/ember-1`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ember 1
- **Short description:** Ember AI's reasoning and coding foundation model engineered for high-efficiency agentic workflows, long-context code navigation, and complex MCP tool routing.
- **Provider / access:** Ember AI / OpenCode Zen API (`ember/ember-1`), Chat completions and function calling endpoints.
- **Release / knowledge:** 2026-06-18 release; knowledge cutoff early 2026.
- **IDs:** `ember/ember-1`. Standard commercial API tier.
- **Context window:** 500,000 tokens total (500K context window); max output 32,768 tokens.
- **Modalities:** Text and image input; text, code, structured JSON, and tool-calling output.
- **Pricing (as of 2026-10):** $1.20 / 1M input tokens, $4.80 / 1M output tokens ($0.30 / 1M cached input); competitive mid-market pricing.
- **Architecture:** Mixture-of-Experts (MoE) transformer architecture trained for multi-step agent execution and deliberate reasoning.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **46.8%** (Artificial Analysis / Ember AI benchmarks, 2026)
- Tau3-Banking / Tau2-Bench: **79.5%** (Tau2-Bench)
- GDPval-AA: **1,250** Elo
- Claw-Eval / ClawProBench: **75.8%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **71.2%**

Reasoning / knowledge:

- GPQA Diamond: **69.5%** (Artificial Analysis, 2026)
- HLE: **30.2%** (Humanity's Last Exam without tools)
- LCR / MLCR: **77.0%**
- CritPt: **44.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **87.5 / #13**
- Omniscience Accuracy / Hallucination Rate: **84.8% / 6.8%**

Coding:

- SWE-bench Verified / SWE-Pro: **60.5%** (SWE-bench Verified)
- LiveCodeBench: **67.8%** pass@1
- SciCode / AA-SciCode: **43.0%**
- Vibe Code Bench: **75.0%**
- DeepSWE / Coding Index / other: **79.0**

Long context:

- MRCR at 500K: **92.0%** retrieval accuracy across full context window length; 77.0% AA-LCR retention.

### Normalized scores (1–100)

- **Tool use: 84/100.** Strong tool invocation and multi-step plan execution demonstrated by 79.5% on Tau2-Bench and 71.2% on Toolathon, capped by 46.8% on Terminal-Bench 2.1.
- **Reasoning: 86/100.** Reliable mathematical and scientific reasoning with 69.5% on GPQA Diamond and an 87.5 score on the Artificial Analysis Intelligence Index.
- **Context window: 88/100.** 500K context window with 92.0% MRCR retrieval accuracy across long code repositories.
- **Multimodal: 76/100.** Competent visual parsing for technical diagrams, architecture flowcharts, and screenshots.
- **Coding: 86/100.** Solid autonomous coding and refactoring performance highlighted by 60.5% on SWE-bench Verified, 67.8% on LiveCodeBench, and 75.0% on Vibe Code Bench.
- **Cost efficiency: 82/100.** Well-balanced commercial pricing at $1.20 / $4.80 per 1M tokens.
- **Overall Score: 84/100.** Well-rounded agentic coding and reasoning model suited for extended codebase navigation and multi-tool workflows.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-03
- Method: Public internet research into Ember AI releases, OpenCode Zen documentation, and Artificial Analysis benchmark listings; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
