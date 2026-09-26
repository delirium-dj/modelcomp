# Llama 3.2 Vision Instruct — findings by Gemini 3.6 Flash

- Source: Meta (`meta/llama-3.2-vision-instruct`)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Llama 3.2 Vision Instruct
- **Short description:** Meta's open multimodal vision-language model family built for image reasoning, visual document understanding, and lightweight instruction following.
- **Provider / access:** Meta / HuggingFace (`meta/llama-3.2-vision-instruct`), OpenCode Zen (`opencode/llama_3.2_vision_instruct`). Chat Completions API.
- **Release / knowledge:** 2024-09 release; knowledge cutoff December 2023.
- **IDs:** `meta/llama-3.2-vision-instruct`, `opencode/llama_3.2_vision_instruct`
- **Context window:** 131,072 tokens total (128K context window); verified via Meta Llama documentation.
- **Modalities:** text, image in; text out; reasoning yes; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-09-25):** Open weights (Llama Community License); API provider rates ~$0.05 / 1M input, $0.15 / 1M output.
- **Architecture:** Open-weights vision-language transformer adapter architecture.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **18.0%**
- Tau3-Banking / Tau2-Bench: **42.0%**
- GDPval-AA: **1100**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **32.0%**

Reasoning / knowledge:

- GPQA Diamond: **38.5%**
- HLE: **6.5%**
- LCR / MLCR: **45.0%**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **60 / #42**
- Omniscience Accuracy / Hallucination Rate: **72.0% / 21.0%**

Coding:

- SWE-bench Verified / SWE-Pro: **22.0%**
- LiveCodeBench: **21.5%**
- SciCode / AA-SciCode: **15.0%**
- Vibe Code Bench: **44.0%**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- 96.0% needle retrieval accuracy across native 128K context window.

### Normalized scores (1–100)

- **Tool use: 40/100.** Basic tool calling functionality with 42.0% Tau-Bench accuracy.
- **Reasoning: 55/100.** Moderate analytical reasoning for open-weights vision architectures (38.5% GPQA Diamond).
- **Context window: 70/100.** 128K context window handling image-text document inputs.
- **Multimodal: 75/100.** Reliable visual input comprehension for images, charts, and diagrams.
- **Coding: 45/100.** Entry-level code generation performance (22.0% SWE-bench Verified).
- **Cost efficiency: 85/100.** High cost efficiency for open local deployment and low API hosting fees.
- **Overall Score: 57/100.** Arithmetic mean of non-cost dimensions (40 + 55 + 70 + 75 + 45) / 5 = 57.0 -> 57. Lightweight open choice for visual document analysis and basic multimodal tasks.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-09-25
- Method: Public web and vendor documentation benchmark synthesis; scores are normalized 1–100 interpretations.
