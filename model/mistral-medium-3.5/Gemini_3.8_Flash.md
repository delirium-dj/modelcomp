# Mistral Medium 3.5 — findings by Gemini 3.8 Flash

- Source: Mistral AI (`mistral-medium-3-5`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mistral Medium 3.5
- **Short description:** Mistral AI's 128B dense open-weights model consolidating general instruction following, reasoning, and coding (merging Medium 3.1, Magistral, and Devstral 2) into a unified multimodal architecture under a modified MIT license.
- **Provider / access:** Mistral AI API (`mistral-medium-3-5`), [OpenRouter](https://openrouter.ai/models/mistralai/mistral-medium-3.5), [Hugging Face](https://huggingface.co/mistralai), and Ollama.
- **Release / knowledge:** 2026-04-29 release; knowledge cutoff early 2026.
- **IDs:** `mistral-medium-3-5`, `mistralai/mistral-medium-3.5`
- **Context window:** 262,144 tokens (256K context window).
- **Modalities:** Text and image input; text output; configurable reasoning effort and multi-tool calling.
- **Pricing (as of 2026-10-21):** $1.50 / 1M input tokens, $7.50 / 1M output tokens ($0.75 / $3.75 batch pricing) ([Mistral API Pricing](https://mistral.ai/pricing/)).
- **Architecture:** 128B dense parameter transformer achieving high inference throughput (~164 tokens/sec).

### Raw benchmarks found

Agent / tool use:
- τ³-Telecom: **91.4%** ([Mistral AI Technical Release](https://mistral.ai))
- τ²-Bench: **94.2%**
- COLLIE: **95.8%**
- Terminal-Bench Hard: **33.3%**
- AA Agentic Index: **76.8**

Reasoning / knowledge:
- GPQA Diamond: **74.8%**
- Artificial Analysis Intelligence Index: **14** ([Artificial Analysis](https://artificialanalysis.ai/models/mistral-medium-3-5))
- AIME 2025: **86.3%**
- Humanity's Last Exam (HLE): **13.8%**

Coding:
- SWE-bench Verified: **77.6%** (Mistral official release)
- AA Coding Index: **46.9**
- SciCode: **39.6%–40.2%**

Long context:
- 262,144 tokens (256K); AA Long Context Reasoning (LCR): **65.3%**.

### Normalized scores (1–100)

- **Tool use: 78/100.** High scores on τ³-Telecom (91.4%) and τ²-Bench (94.2%) show strong instruction-based tool execution, with room for improvement on complex terminal tasks (TB Hard 33.3%).
- **Reasoning: 68/100.** Solid math on AIME (86.3%), while GPQA Diamond (74.8%), HLE (13.8%), and AA Intelligence Index of 14 reflect mid-tier reasoning depth.
- **Context window: 72/100.** 256K context provides good working volume with 65.3% LCR.
- **Multimodal: 68/100.** Native vision encoder supporting image and document perception; text-only output.
- **Coding: 77/100.** 77.6% on SWE-bench Verified established an impressive open-weights benchmark at launch.
- **Cost efficiency: 78/100.** $1.50 / $7.50 pricing provides reasonable access to a 128B dense model with ~164 tok/s inference speeds.
- **Overall Score: 73/100.** Arithmetic mean of five quality dimensions: (78 + 68 + 72 + 68 + 77) / 5 = 72.6 → 73. A capable, dense open-weights foundation model offering solid coding and multimodal vision support, superseded in the frontier tier by Mistral Large 4.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-21
- Method: Public benchmark evaluation and analysis of Mistral AI documentation, Artificial Analysis leaderboards, and OpenRouter metrics; scores are normalized 1–100 interpretations, not official vendor scores.
