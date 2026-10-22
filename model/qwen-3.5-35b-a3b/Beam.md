# Qwen 3.5 35B A3B — findings by Beam

- Source: Alibaba / Qwen 3.5 35B A3B, `Qwen/Qwen3.5-35B-A3B`
- Date: 2026-10-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 35B A3B
- **Short description:** Alibaba's MoE Qwen 3.5 (35B total / 3B active) for efficient high-quality inference; Apache 2.0.
- **Provider / access:** Hugging Face `Qwen/Qwen3.5-35B-A3B`; Ollama; vLLM; SGLang.
- **Release / knowledge:** Released 2026-02; knowledge cutoff not published.
- **IDs:** `Qwen/Qwen3.5-35B-A3B` (HF).
- **Context window:** 262,144 tokens.
- **Modalities:** Text in / text out; reasoning yes (thinking mode); tool calling yes.
- **Pricing (as of 2026-10-22):** Apache 2.0 open weights (self-host free).
- **Architecture:** MoE 35B total / 3B active; Apache 2.0.

### Raw benchmarks found

- No verified public benchmark score found for the 35B-A3B variant specifically.

### Normalized scores (1–100)

- **Tool use: 64/100.** Caps at no published benchmark.
- **Reasoning: 66/100.** Caps at no published composite.
- **Context window: 72/100.** 262K window; caps at no published retrieval benchmark.
- **Multimodal: 15/100.** Text-only.
- **Coding: 64/100.** Caps at no published SWE-bench.
- **Cost efficiency: 95/100.** Free open weights.
- **Overall Score: 56/100.** Mean of five quality dims (64 + 66 + 72 + 15 + 64 = 281 / 5 = 56.2 → 56).

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-22
- Method: public internet research (Qwen/HF docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.