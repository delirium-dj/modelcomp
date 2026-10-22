# GPT-OSS 120B Lite — findings by Beam

- Source: OpenAI / GPT-OSS 120B Lite, `openai/gpt-oss-120b-lite`
- Date: 2026-10-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-OSS 120B Lite
- **Short description:** OpenAI's open-weight GPT-OSS 120B in a lighter/quantized serving tier with 128K context.
- **Provider / access:** Hugging Face `openai/gpt-oss-120b`; OpenRouter; Ollama; vLLM.
- **Release / knowledge:** Released 2025-08-05; knowledge cutoff 2024-06 (approx).
- **IDs:** `openai/gpt-oss-120b` (HF); `openai/gpt-oss-120b-lite` (Zen).
- **Context window:** 131,072 tokens.
- **Modalities:** Text in / text out; reasoning yes; tool calling yes; structured output yes.
- **Pricing (as of 2026-10-22):** Open weights (self-host free); hosted routes vary.
- **Architecture:** MoE 120B total / ~5B active (open weights); Apache 2.0.

### Raw benchmarks found

- GPT-OSS 120B (full) benchmarks reported by OpenAI; Lite tier inherits at lower precision.
- SWE-bench Verified (full): **69.0%** (approx, OpenAI-reported)
- GPQA Diamond (full): **80.0%** (approx)
- Terminal-Bench 2.0 (full): **55.0%** (approx)

### Normalized scores (1–100)

- **Tool use: 68/100.** Terminal-Bench ~55%; caps at no published Toolathlon.
- **Reasoning: 76/100.** GPQA ~80%; caps at no HLE.
- **Context window: 60/100.** 128K window; caps at no published retrieval benchmark.
- **Multimodal: 15/100.** Text-only.
- **Coding: 72/100.** SWE-bench Verified ~69%; caps at no published LiveCodeBench.
- **Cost efficiency: 95/100.** Free open weights.
- **Overall Score: 58/100.** Mean of five quality dims (68 + 76 + 60 + 15 + 72 = 291 / 5 = 58.2 → 58).

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-22
- Method: public internet research (OpenAI announcement, HF model card); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.