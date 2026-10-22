# Qwen 3.5 2B — findings by Beam

- Source: Alibaba / Qwen 3.5 2B, `Qwen/Qwen3.5-2B`
- Date: 2026-10-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 2B
- **Short description:** Alibaba's small Qwen 3.5 dense model (2B) for edge/on-device use; Apache 2.0.
- **Provider / access:** Hugging Face `Qwen/Qwen3.5-2B`; Ollama; vLLM.
- **Release / knowledge:** Released 2026-02; knowledge cutoff not published.
- **IDs:** `Qwen/Qwen3.5-2B` (HF).
- **Context window:** 262,144 tokens.
- **Modalities:** Text in / text out; reasoning yes (thinking mode); tool calling yes.
- **Pricing (as of 2026-10-22):** Apache 2.0 open weights (self-host free).
- **Architecture:** Dense 2B; Apache 2.0.

### Raw benchmarks found

- No verified public benchmark score found for the 2B variant specifically.

### Normalized scores (1–100)

- **Tool use: 38/100.** Caps at no published benchmark.
- **Reasoning: 40/100.** Caps at no published composite.
- **Context window: 72/100.** 262K window; caps at no published retrieval benchmark.
- **Multimodal: 15/100.** Text-only.
- **Coding: 38/100.** Caps at no published SWE-bench.
- **Cost efficiency: 100/100.** Free open weights.
- **Overall Score: 41/100.** Mean of five quality dims (38 + 40 + 72 + 15 + 38 = 203 / 5 = 40.6 → 41).

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-22
- Method: public internet research (Qwen/HF docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.