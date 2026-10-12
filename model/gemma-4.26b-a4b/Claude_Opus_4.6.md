# Gemma 4 26B A4B — findings by Claude Opus 4.6

- Source: Google DeepMind / Gemma 4 26B A4B
- Date: 2026-10-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 26B A4B
- **Short description:** Google's efficient MoE open-weight model (Apr 2026). 25.2B total / ~3.8B active parameters per token ("Active 4 Billion"). Near-identical performance to dense Gemma 4 31B at a fraction of the compute. Apache 2.0.
- **Provider / access:** Hugging Face, Kaggle, Ollama, LM Studio. Apache 2.0 open weights.
- **Release / knowledge:** 2026-04-02 release.
- **IDs:** `google/gemma-4-26b-a4b-it`
- **Context window:** 256,000 tokens.
- **Modalities:** Text, image in; text out. Configurable thinking modes. Native function calling.
- **Pricing (as of 2026-10-12):** $0 self-hosted (Apache 2.0). ~16-19GB VRAM at 4-bit quantization.
- **Architecture:** 25.2B total parameters, ~3.8B active per token. MoE with 128 experts, top-8 routing. Apache 2.0.

### Raw benchmarks found

- MMLU Pro: **82.6%** (source: Google reporting)
- AIME 2026 (No Tools): **88.3%** (source: Google reporting)
- LiveCodeBench v6: **77.1%** (source: Google reporting)

### Normalized scores (1–100)

- **Tool use: 72/100.** Native function calling. Configurable thinking modes. 3.8B active params limits complex agentic loops vs larger models.
- **Reasoning: 82/100.** MMLU Pro 82.6% is strong. AIME 2026 88.3% is excellent math. Remarkable for only 3.8B active params.
- **Context window: 78/100.** 256K verified (ref: 256K ≈ 78).
- **Multimodal: 55/100.** Text + image in; text out. No audio/video. Basic vision = 50–60 range.
- **Coding: 80/100.** LiveCodeBench v6 77.1% is strong. Near Gemma 4 31B performance at fraction of compute.
- **Cost efficiency: 98/100.** Apache 2.0. Only 3.8B active = runs on consumer hardware (16GB). Extraordinary performance-per-FLOP ratio.
- **Overall Score: 73/100.** Mean of (72 + 82 + 78 + 55 + 80) / 5 = 73.4, rounded to 73. Exceptional efficiency model — near-31B performance at 4B active params.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4-6-20260205)** — 2026-10-12
- Method: Public internet research (Google DeepMind, community benchmarks); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
