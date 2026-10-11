# Ling 3.0 Flash VL — findings by Gemini 3.8 Flash

- Source: InclusionAI / Ant Group (`inclusionai/ling-3.0-flash-vl`)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Ling 3.0 Flash VL
- **Short description:** InclusionAI's (Ant Group) open-weights native multimodal build of Ling-3.0-Flash (124B sparse MoE / 5.5B active), routing text, image, and video frame sequences through a unified self-verifying reasoning pipeline at near-commodity pricing under an MIT license.
- **Provider / access:** [OpenRouter](https://openrouter.ai/models/inclusionai/ling-3.0-flash-vl) (`inclusionai/ling-3.0-flash-vl`), [Hugging Face](https://huggingface.co/inclusionAI), and Ant Group InclusionAI API.
- **IDs:** `inclusionai/ling-3.0-flash-vl` (free promotional route: `inclusionai/ling-3.0-flash-vl:free`)
- **Context window:** 262,144 tokens total (256K context window; max output 32,768 tokens).
- **Modalities:** Text, image, and video input; text, code, structured JSON, and tool-calling output.
- **Pricing (as of 2026-10-11):** ~$0.021 / 1M input tokens, ~$0.0616 / 1M output tokens ($0.0042 / 1M cached input); free tier available on OpenRouter; MIT open weights.
- **Architecture:** 124B sparse Mixture-of-Experts (MoE) transformer activating 5.5B parameters per token with native visual projection layers.

### Raw benchmarks found

Agent / tool use:
- Artificial Analysis Agentic Index: **28.7** ([Artificial Analysis](https://artificialanalysis.ai/models/ling-3-0-flash-vl))
- Terminal-Bench 2.1: **54.2%**
- Tau2-Bench: **82.5%**
- GDPval-AA: **1,190** Elo

Reasoning / knowledge:
- Artificial Analysis Intelligence Index: **24.6–25.0** ([Artificial Analysis](https://artificialanalysis.ai/models/ling-3-0-flash-vl))
- GPQA Diamond: **74.5%**
- Humanity's Last Exam (HLE without tools): **18.5%**
- LCR / MLCR: **72.0%**

Coding:
- Artificial Analysis Coding Index: **57.0** ([Artificial Analysis](https://artificialanalysis.ai/models/ling-3-0-flash-vl))
- SWE-bench Verified: **62.5%**
- LiveCodeBench: **68.2%** pass@1
- SWE-bench Pro: **32.0%**

Long context & Multimodal:
- 262,144 tokens (256K) context window supporting multi-image document inspection and video comprehension.
- Native visual perception integrated directly into the planning and self-verification pipeline.

### Normalized scores (1–100)

- **Tool use: 68/100.** Capable basic tool and function calling evidenced by 82.5% on Tau2-Bench and 28.7 on the AA Agentic Index.
- **Reasoning: 70/100.** Moderate reasoning capability with 74.5% on GPQA Diamond and 25.0 on the AA Intelligence Index.
- **Context window: 75/100.** 256K context window provides solid workspace for multi-modal document analysis and repo exploration.
- **Multimodal: 80/100.** Strong native image and video perception for visual document and interface inspection.
- **Coding: 67/100.** Everyday coding utility reflected in 57.0 on the AA Coding Index and 62.5% on SWE-bench Verified.
- **Cost efficiency: 99/100.** Industry-leading affordability at $0.021 / $0.0616 per 1M tokens ($0.00 on free endpoints).
- **Overall Score: 72/100.** Arithmetic mean of five quality dimensions: (68 + 70 + 75 + 80 + 67) / 5 = 72.0. Economical multimodal workhorse well-suited for high-volume vision, document parsing, and lightweight agent workflows.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-11
- Method: Public internet research into InclusionAI technical documentation, Artificial Analysis benchmarks, and OpenRouter endpoint specifications; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
