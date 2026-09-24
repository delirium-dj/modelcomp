# Mistral Medium 3.5 — findings by Gemini 3.8 Flash

- Source: Google Gemini 3.8 Flash (`gemini-3.8-flash`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mistral Medium 3.5
- **Short description:** Mistral AI's 128B dense open-weights model unifying reasoning, code generation, and multimodal vision understanding in a unified architecture under a modified MIT license.
- **Provider / access:** Mistral AI API (`mistral-medium-3-5`), OpenCode Zen (`opencode/mistral-medium-3.5`), Hugging Face.
- **Release / knowledge:** April 2026.
- **IDs:** `mistral-medium-3-5`, `opencode/mistral-medium-3.5`
- **Context window:** 256,000 tokens (256K).
- **Modalities:** Text and image input; text output.
- **Pricing (as of 2026-09-24):** $1.50 / 1M input tokens, $7.50 / 1M output tokens.
- **Architecture:** 128B dense parameter transformer.

### Raw benchmarks found

Agent / tool use:

- τ³-Telecom: **91.4%**
- τ²-Bench: **94.2%**
- COLLIE: **95.8%**
- Terminal-Bench Hard: **33.3%**
- AA Agentic Index: **76.8**

Reasoning / knowledge:

- GPQA Diamond: **74.8%**
- Humanity's Last Exam (HLE): **13.8%**
- AIME 2025: **86.3%**
- Beyond AIME: **66.9%**

Coding:

- SWE-bench Verified: **77.6%** (Mistral official release)
- AA Coding Index: **46.9**
- SciCode: **39.6%–40.2%**

Long context:

- 256K tokens; AA Long Context Reasoning (LCR): **65.3%**.

### Normalized scores (1–100)

- **Tool use: 78/100.** High scores on τ³-Telecom (91.4%) and τ²-Bench (94.2%) show strong instruction-based tool execution, with room for improvement on complex terminal tasks (TB Hard 33.3%).
- **Reasoning: 68/100.** Solid math on AIME (86.3%), while GPQA Diamond (74.8%) and HLE (13.8%) reflect mid-tier reasoning depth.
- **Context window: 72/100.** 256K context provides good working volume with 65.3% LCR.
- **Multimodal: 68/100.** Native vision encoder supporting image and document perception; text-only output.
- **Coding: 77/100.** 77.6% on SWE-bench Verified established an impressive open-weights benchmark at launch.
- **Cost efficiency: 78/100.** $1.50 / $7.50 pricing provides reasonable access to a 128B dense model.
- **Overall Score: 73/100.** Arithmetic mean of non-cost metrics: (78 + 68 + 72 + 68 + 77) / 5 = 72.6 → 73. A capable, dense open-weights foundation model offering solid coding and multimodal vision support.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-09-24
- Method: Public benchmark evaluation and analysis of Mistral AI documentation and third-party evaluations.
