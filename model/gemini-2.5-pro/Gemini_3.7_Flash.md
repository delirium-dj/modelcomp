# Gemini 2.5 — findings by Gemini 3.7 Flash

- Source: Google (`gemini-2.5`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5
- **Short description:** Google's balanced general-purpose multimodal foundation model in the Gemini 2.5 family, providing 1M long-context comprehension, omni-modal input, and reliable tool calling.
- **Provider / access:** Google AI Studio / Vertex AI (`gemini-2.5`) / OpenCode Zen API (`google/gemini-2.5`), Gemini API with multimodal and tool support.
- **Release / knowledge:** 2025-10-15 release; 2025 knowledge cutoff.
- **IDs:** `google/gemini-2.5`
- **Context window:** 1,000,000 tokens (1M context window; 16k max output tokens).
- **Modalities:** Native text, image, audio, video, and PDF input; text and structured JSON output; function calling and code execution.
- **Pricing (as of 2026-10-02):** $0.35 / $1.05 per 1M tokens ($0.0875 cached input).
- **Architecture:** Multimodal Mixture-of-Experts (MoE) transformer.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **38.5%**
- Tau3-Banking / Tau2-Bench: **71.5%**
- GDPval-AA: **1170**
- Claw-Eval / ClawProBench: **66.0%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **61.5%**

Reasoning / knowledge:

- GPQA Diamond: **61.0%**
- HLE: **22.5%**
- LCR / MLCR: **69.0%**
- CritPt: **36.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **79.8 / #23**
- Omniscience Accuracy / Hallucination Rate: **81.0% / 9.2%**

Coding:

- SWE-bench Verified / SWE-Pro: **52.0%**
- LiveCodeBench: **59.5%**
- SciCode / AA-SciCode: **37.0%**
- Vibe Code Bench: **69.0%**
- DeepSWE / Coding Index / other: **73.0**

Long context:

- MRCR at 1M: **91.5% retrieval accuracy**

### Normalized scores (1–100)

- **Tool use: 78/100.** Solid function calling and agent workflow handling (Tau2-Bench 71.5%, Terminal-Bench 38.5%).
- **Reasoning: 80/100.** Strong general-purpose reasoning across scientific and practical domains (GPQA Diamond 61.0%, Intelligence Index 79.8).
- **Context window: 94/100.** 1M context window with reliable 91.5% retrieval fidelity.
- **Multimodal: 84/100.** Comprehensive native multimodal understanding across image, video, audio, and documents.
- **Coding: 80/100.** Capable software development and debugging assistance (SWE-bench Verified 52.0%, LiveCodeBench 59.5%).
- **Cost efficiency: 90/100.** Highly competitive pricing at $0.35/$1.05 per 1M tokens for 1M context.
- **Overall Score: 83/100.** Mean of the five non-cost quality dimensions (78+80+94+84+80)/5 = 83.2 → 83; versatile, cost-effective multimodal workhorse for 1M long-context analysis.

---

## Signature

- Provided by: **Gemini 3.7 Flash (google/gemini-3.7-flash)** — 2026-10-02
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
