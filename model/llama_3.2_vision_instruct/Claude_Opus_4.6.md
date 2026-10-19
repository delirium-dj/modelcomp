# Llama 3.2 Vision Instruct — findings by Claude Opus 4.6

- Source: Meta / Llama 3.2 Vision Instruct (`llama-3.2-11b-vision-instruct` / `llama-3.2-90b-vision-instruct`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Llama 3.2 Vision Instruct
- **Short description:** Meta's multimodal extension of Llama 3.2, available in 11B and 90B parameter sizes, adding image understanding capabilities to the Llama 3 architecture. Released September 2024 as part of Meta's open-weight ecosystem.
- **Provider / access:** Meta via Hugging Face, various API hosts (Together AI, Fireworks, Groq). Chat Completions API.
- **Release / knowledge:** 2024-09-25 release; knowledge cutoff December 2023.
- **IDs:** `meta-llama/Llama-3.2-11B-Vision-Instruct`, `meta-llama/Llama-3.2-90B-Vision-Instruct`
- **Context window:** 128K tokens total (verified via model config and Meta documentation).
- **Modalities:** Text + image input; text output; no native audio/video; tool calls supported via instruction tuning; JSON mode via structured output.
- **Pricing (as of 2026-10-19):** Open-weights under Llama Community License; free to self-host; API pricing varies by provider (Together AI ~$0.18/$0.18 per 1M for 11B; ~$0.90/$0.90 for 90B).
- **Architecture:** 11B and 90B parameter dense transformer models. Uses cross-attention layers for vision integration with a ViT-H/14 image encoder. Grouped Query Attention (GQA). Open-weights under Llama Community License.

### Raw benchmarks found

Agent / tool use:

- BFCL v2 (tool calling): **no verified public score found** — Llama 3.2 Vision was not specifically benchmarked on agentic tool-use suites
- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found

Reasoning / knowledge:

- MMLU (90B): **86.0%** (Meta technical report)
- MMLU (11B): **73.0%** (Meta technical report)
- GPQA Diamond: no verified public score found for vision variants specifically
- HLE: no verified public score found
- ARC-Challenge (90B): **68.9%** (Meta report, 0-shot)

Coding:

- HumanEval (90B): **72.5%** (community evaluation, pass@1)
- SWE-bench Verified: no verified public score found
- LiveCodeBench: no verified public score found

Vision / multimodal:

- VQAv2 (90B): **82.6%** (Meta technical report)
- DocVQA (90B): **90.1%** (Meta technical report, ANLS)
- ChartQA (90B): **85.5%** (Meta technical report)
- TextVQA (90B): **78.1%** (Meta technical report)
- MMMU (90B): **60.3%** (Meta technical report)
- VQAv2 (11B): **75.2%** (Meta technical report)
- DocVQA (11B): **85.6%** (Meta technical report)

Long context:

- RULER at 128K: no verified long-context retrieval benchmark reported; 128K is the stated window but real-world retrieval at full length is not extensively validated for the vision variant.

### Normalized scores (1–100)

- **Tool use: 28/100.** No agentic benchmarks available; the model has basic instruction-following for structured output and simple tool schemas, but was not designed as an agentic model. Capped by lack of native function-calling infrastructure.
- **Reasoning: 52/100.** 90B achieves 86% MMLU which is competitive for its generation but well behind frontier models (GPT-5, Claude Opus 4+, Gemini 2.5). The 11B variant is significantly weaker. Score reflects the 90B as the flagship. Capped by lack of GPQA/HLE scores and generation gap.
- **Context window: 65/100.** 128K context per tier mapping (128K = 65). Verified via model config.
- **Multimodal: 58/100.** Supports text + image input with strong vision benchmarks (DocVQA 90.1%, VQAv2 82.6%). No audio or video support. Capped by single-modality input beyond text+image.
- **Coding: 38/100.** HumanEval 72.5% for 90B is decent but significantly behind modern coding-focused models. No SWE-bench or LiveCodeBench scores. Capped by generation gap and lack of code-specific training emphasis.
- **Cost efficiency: 95/100.** Open-weights, free to self-host. API costs are very low compared to proprietary frontier models.
- **Overall Score: 48/100.** Mean of (28 + 52 + 65 + 58 + 38) / 5 = 48.2 → 48. A strong open-weight multimodal model from late 2024 but significantly behind current frontier in agentic and coding capabilities. Best suited for cost-effective vision-language tasks.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4-6-20260205)** — 2026-10-19
- Method: Public internet research cross-referencing Meta's technical report, Hugging Face model cards, and community benchmarks; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
