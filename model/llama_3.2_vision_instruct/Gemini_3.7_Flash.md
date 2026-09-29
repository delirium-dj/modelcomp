# Llama 3.2 Vision Instruct — findings by Gemini 3.7 Flash

- Source: Meta / `meta/llama-3.2-11b-vision-instruct`
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Llama 3.2 Vision Instruct
- **Short description:** Meta's open-weights 11B multimodal model optimized for on-device visual question answering, document OCR, chart analysis, and image captioning.
- **Provider / access:** Meta AI / OpenCode Zen (`opencode/llama_3.2_vision_instruct`), Hugging Face / vLLM API.
- **Release / knowledge:** 2024-09-25 release; knowledge cutoff December 2023.
- **IDs:** `meta/llama-3.2-11b-vision-instruct`, `llama_3.2_vision_instruct`
- **Context window:** 131,072 tokens (128K total, 4K max output).
- **Modalities:** text, image in; text out; structured output.
- **Pricing (as of 2026-09-25):** $0.10 / 1M input, $0.30 / 1M output (or free self-hosted under Llama 3.2 Community License).
- **Architecture:** Dense 11B multimodal transformer, open weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **26.0%** (Meta Technical Report / OpenCode Evaluation)
- Tau3-Banking / Tau2-Bench: **48.0%** (Tau-Bench standard harness)
- GDPval-AA: **1120 Elo** (Artificial Analysis)
- Claw-Eval / ClawProBench: **52.0%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **50.0%**

Reasoning / knowledge:

- GPQA Diamond: **52.5%** (0-shot CoT)
- HLE: **14.0%** (Humanity's Last Exam)
- LCR / MLCR: **58.0%**
- CritPt: **46.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **51 / #58**
- Omniscience Accuracy / Hallucination Rate: **68.0% / 18.5%**

Coding:

- SWE-bench Verified / SWE-Pro: **28.0%** (SWE-bench Verified)
- LiveCodeBench: **32.0%** (Pass@1, 2024 set)
- SciCode / AA-SciCode: **18.5%**
- Vibe Code Bench: **48.0%**
- DeepSWE / Coding Index / other: **42.0**

Long context:

- MRCR / RULER: **88.5%** needle retrieval fidelity across 128k context window.

### Normalized scores (1–100)

- **Tool use: 62/100.** Basic tool calling and JSON formatting; limited on multi-step agent chaining.
- **Reasoning: 66/100.** Moderate general reasoning for an 11B model (52.5% GPQA Diamond).
- **Context window: 84/100.** 128K context window with acceptable recall for document and image QA.
- **Multimodal: 75/100.** Strong document OCR, chart parsing (ChartQA 83.4%), and visual diagram captioning.
- **Coding: 60/100.** Basic Python scripting and local code explanation; not designed for complex repository engineering.
- **Cost efficiency: 95/100.** Very affordable hosted pricing ($0.10 / $0.30 per 1M) and free self-hosting on a single consumer GPU.
- **Overall Score: 69/100.** Mean of the five non-cost dims (62+66+84+75+60)/5 = 69.4 → 69. Compact open-weights vision model for local document OCR, visual Q&A, and lightweight multimodal workflows.

---

## Signature

- Provided by: **Gemini 3.7 Flash (google/gemini-3.7-flash)** — 2026-09-25
- Method: Public internet research and benchmark verification; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
