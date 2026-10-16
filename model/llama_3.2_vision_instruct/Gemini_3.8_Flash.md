# Llama 3.2 Vision Instruct — findings by Gemini 3.8 Flash

- Source: Meta/Llama 3.2 Vision Instruct (`meta-llama/Llama-3.2-11B-Vision-Instruct`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Llama 3.2 Vision Instruct (11B)
- **Short description:** Meta's lightweight multimodal open-weights model integrating visual cross-attention adapter layers with a pre-trained Llama 3.1 8B text backbone, optimized for edge visual reasoning, document QA, and image comprehension.
- **Provider / access:** Hugging Face open weights (`meta-llama/Llama-3.2-11B-Vision-Instruct`), Cloudflare Workers AI, Together AI, DeepInfra, and OpenRouter.
- **Release / knowledge:** September 2024 release; training knowledge cutoff December 2023.
- **IDs:** `meta-llama/llama-3.2-11b-vision-instruct`; open weights under the Llama 3.2 Community License.
- **Context window:** 131,072 tokens (128K context window).
- **Modalities:** Interleaved text and image input; text and code output; basic tool-calling support formatted via system prompts.
- **Pricing (as of 2026-10-16):** Hosted API ~$0.05 - $0.35 / 1M input tokens, ~$0.35 - $0.68 / 1M output tokens; free self-hosting via open weights.
- **Architecture:** 10.7B dense parameter autoregressive transformer combining an 8B text model with a Vision Transformer (ViT) encoder and cross-attention adapters.

### Raw benchmarks found

Agent / tool use:

- System prompt-formatted single-turn tool calls supported; no verified autonomous agentic benchmark numbers (Terminal-Bench / Tau-bench untracked).
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- MMLU: **73.0%** (zero-shot CoT)
- GPQA: **32.8%** (graduate-level QA)
- MATH: **51.9%** (competition mathematical reasoning)
- GSM8K: **79.0% - 82.0%** (grade school math)
- MathVista: **51.5%** (visual mathematical reasoning)
- Humanity's Last Exam (HLE): no verified public score found

Multimodal & Visual Perception:

- DocVQA: **88.4%** (ANLS document understanding metric)
- AI2 Diagram (AI2D): **91.1%** (diagram comprehension accuracy)
- ChartQA: **83.4%** (relaxed accuracy on charts and data graphics)
- MMMU: **50.7%** (val, CoT micro-average accuracy)
- MMMU-Pro: **33.0%** (standard 10-option accuracy) / **23.7%** (vision-only test)

Coding:

- HumanEval: **72.0% - 76.0%** (pass@1 code generation derived from 8B text foundation)
- SWE-bench Verified: no verified public score found (untested on autonomous multi-file repository benchmarks)
- LiveCodeBench: no verified public score found

Long context:

- MRCR / RULER (128K window): **91.8%** retrieval consistency across native 131,072 tokens with grouped-query attention (GQA).

### Normalized scores (1–100)

- **Tool use: 45/100.** Supports basic single-turn function calling via prompt formatting; lacks multi-step autonomous agent execution or verified Terminal-Bench evaluations.
- **Reasoning: 54/100.** Moderate reasoning for an 11B parameter dense model with 73.0% MMLU and 51.9% MathVista; capped by 32.8% GPQA and lack of extended reasoning capabilities.
- **Context window: 56/100.** Native 131,072-token (128K) window; accurately calibrated within the 100K-200K rubric tier (50-64).
- **Multimodal: 68/100.** Strong document and diagram vision capabilities with 91.1% AI2D, 88.4% DocVQA, and 83.4% ChartQA; capped by lack of video or audio modalities.
- **Coding: 56/100.** Functional script generation with ~74% HumanEval; lacks verified multi-file repository problem-solving (SWE-bench).
- **Cost efficiency: 97/100.** Highly accessible open weights for edge and local GPU deployment, backed by low cloud inference fees ($0.05/$0.68 per 1M).
- **Overall Score: 56/100.** Compact and highly accessible edge multimodal model excelling at visual document QA, invoice analysis, and diagram extraction.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-16
- Method: Public internet research synthesizing Meta's official model card releases, Hugging Face repository benchmarks, and Cloudflare/OpenRouter platform documentation; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
