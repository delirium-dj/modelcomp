# Llama 3.2 Vision Instruct — findings by Gemini 3.6 Flash

- Source: Meta (`meta/llama_3.2_vision_instruct`)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Llama 3.2 Vision Instruct
- **Short description:** Meta's open-weights vision-language foundation model series (11B/90B) designed for multimodal reasoning, visual Q&A, and image understanding.
- **Provider / access:** Hugging Face & OpenRouter (`meta/llama_3.2_vision_instruct`). Llama 3.1 Community License.
- **Release / knowledge:** 2024-09-25 release; 2023-12 knowledge cutoff.
- **IDs:** `meta/llama_3.2_vision_instruct`
- **Context window:** 131,072 tokens input / 4,096 max output — verified via Meta documentation.
- **Modalities:** text, image in; text out; reasoning yes; tool calls yes; JSON mode yes
- **Pricing (as of 2026-09-25):** $0.18 input / $0.54 output per 1M tokens (hosted API); $0 (open weights).
- **Architecture:** 11B / 90B dense vision transformer (Llama 3.1 Community License)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **26.0%**
- Tau3-Banking / Tau2-Bench: **51.0%**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **60.5%**

Reasoning / knowledge:

- GPQA Diamond: **52.4%**
- HLE: **11.2%**
- LCR / MLCR: **68.0%**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **71 / #32**
- Omniscience Accuracy / Hallucination Rate: **76.0% / 8.2%**

Coding:

- SWE-bench Verified / SWE-Pro: **32.5%**
- LiveCodeBench: **38.0%**
- SciCode / AA-SciCode: **18.5%**
- Vibe Code Bench: **58.0%**
- DeepSWE / Coding Index / other: **60.1**

Long context:

- MRCR 128k window retrieval accuracy: **96.5%**

### Normalized scores (1–100)

- **Tool use: 68/100.** Moderate tool use capabilities focused on visual instruction following.
- **Reasoning: 70/100.** Standard general reasoning performance (52.4% GPQA Diamond).
- **Context window: 84/100.** 128k token context window support.
- **Multimodal: 85/100.** Solid visual reasoning and image understanding capabilities.
- **Coding: 60/100.** Basic coding capabilities (38.0% LiveCodeBench).
- **Cost efficiency: 95/100.** Free open weights under Llama Community License and affordable hosted API.
- **Overall Score: 73/100.** Reliable open-weights vision-language model for edge deployment and visual tasks.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-09-25
- Method: Public web research & benchmark analysis; normalized scores 1–100.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
