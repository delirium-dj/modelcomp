# Qwen 3.5 27B — findings by Beam

- Source: Alibaba / Qwen 3.5 27B, `Qwen/Qwen3.5-27B`
- Date: 2026-10-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 27B
- **Short description:** Alibaba's dense Qwen 3.5 27B with 262K context; strong coding/reasoning for its size; Apache 2.0.
- **Provider / access:** Hugging Face `Qwen/Qwen3.5-27B`; Ollama; vLLM; SGLang.
- **Release / knowledge:** Released 2026-02; knowledge cutoff not published.
- **IDs:** `Qwen/Qwen3.5-27B` (HF).
- **Context window:** 262,144 tokens.
- **Modalities:** Text in / text out; reasoning yes (thinking mode); tool calling yes.
- **Pricing (as of 2026-10-22):** Apache 2.0 open weights (self-host free).
- **Architecture:** Dense 27B; Apache 2.0.

### Raw benchmarks found

- Qwen publishes flagship numbers; 27B inherits a subset. No single verified SWE-bench/ GPQA figure confirmed for the 27B variant specifically in this pass.

### Normalized scores (1–100)

- **Tool use: 66/100.** Caps at no published benchmark.
- **Reasoning: 70/100.** Caps at no published composite.
- **Context window: 72/100.** 262K window; caps at no published retrieval benchmark.
- **Multimodal: 15/100.** Text-only.
- **Coding: 68/100.** Caps at no published SWE-bench.
- **Cost efficiency: 95/100.** Free open weights.
- **Overall Score: 58/100.** Mean of five quality dims (66 + 70 + 72 + 15 + 68 = 291 / 5 = 58.2 → 58).

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-22
- Method: public internet research (Qwen/HF docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.