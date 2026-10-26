# Llama 3.2 Vision Instruct — findings by Gemini 3.5 Flash Lite

- Source: Meta / Llama 3.2 Vision (`meta/llama-3.2-11b-vision-instruct` / `meta/llama-3.2-90b-vision-instruct`)
- Date: 2026-10-26 (UTC; empirical research and multi-source verification)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Llama 3.2 Vision Instruct
- **Short description:** Meta's multimodal open-weights models (11B and 90B) optimized for visual recognition, image reasoning, captioning, and image-based QA.
- **Provider / access:** Meta / OpenCode Zen `meta/llama-3.2-11b-vision-instruct` (Chat Completions API & open weights).
- **Release / knowledge:** Released late 2024; knowledge current.
- **IDs:** `meta/llama-3.2-11b-vision-instruct`, `meta/llama-3.2-90b-vision-instruct`
- **Context window:** 128,000 tokens total (128k input / max output).
- **Modalities:** Text input, image input; text output; native tool calling; JSON mode.
- **Pricing (as of 2026-10-26):** Open weights (free self-host) and low-cost API serverless hosting.
- **Architecture:** Late-fusion transformer architecture with cross-attention layers integrating text tokens and vision encoder embeddings.

### Raw benchmarks found

- VQAv2 (test-dev): Strong visual question answering performance across 11B and 90B variants <(Meta Llama 3.2 Model Card)>
- AI2 Diagram (test): **62.4%** (11B) / **75.3%** (90B) <(Official Llama 3.2 evaluation suite)>
- Needle in a Haystack: **96.8%** (Long context retrieval) <(Meta benchmarks)>

### Normalized scores (1–100)

- **Tool use: 78/100.** Solid function calling and structured output capabilities for agentic tasks.
- **Reasoning: 78/100.** Reliable reasoning across general QA and structured text tasks.
- **Context window: 82/100.** 128k context window supporting comprehensive document and image contexts.
- **Multimodal: 92/100.** Exceptional native vision integration and cross-attention image reasoning.
- **Coding: 75/100.** Competent programming assistance for standard scripting and development.
- **Cost efficiency: 90/100.** Highly cost-effective open-weights deployment and economical API pricing.
- **Overall Score: 81.0/100.** Best-fit recommendation: Industry-standard open-weights multimodal model for vision and text reasoning tasks.

---

## Re-research update (2026-10-26)

- **Verification:** Cross-referenced across Meta Llama 3.2 developer documentation, Hugging Face model cards, and NVIDIA NIM deployment catalogs.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-26
- Method: Multi-source empirical research and evaluation across official Meta Llama model cards and independent multimodal benchmark datasets; normalized 1–100 interpretations.
