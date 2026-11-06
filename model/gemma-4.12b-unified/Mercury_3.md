# Gemma 4 12B Unified — findings by Mercury 3

- Source: Google DeepMind (Gemma 4 12B Unified)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 12B Unified
- **Short description:** Google DeepMind's encoder-free multimodal instruction-tuned open model (released 2026-06-03), feeding text, image, and audio directly into a single decoder-only transformer. Dense 11.95B params; Apache 2.0.
- **Provider / access:** Open weights on Hugging Face (`google/gemma-4-12B-unified-it` and base, Apache 2.0); hosted via multiple providers (Together, OpenRouter, etc.).
- **Release / knowledge:** Released 2026-06-03; knowledge cutoff not published.
- **IDs:** `google/gemma-4-12b-unified-it`.
- **Context window:** 256K tokens.
- **Modalities:** text + image + audio input; text output; reasoning variant; Apache 2.0.
- **Pricing (as of 2026-11):** $0.10 in / $0.30 out per 1M (blended $0.15; BenchLeader); open weights free.
- **Architecture:** dense, ~11.95B params, encoder-free.

### Raw benchmarks found

Reasoning / knowledge:

- GPQA Diamond: **78.8%** (nAIvigate)
- HLE: **5.2%** (nAIvigate) — real limits on hardest reasoning
- Intelligence index: **51.2** (Ultrabench)

Coding:

- LiveCodeBench: **72%** (nAIvigate)
- BenchLM composite: 35.53/100 (#162/216, estimated)

Long context:

- 256K verified; no independent long-context retrieval benchmark captured

Multimodal:

- Text/image/audio input, text output (encoder-free)

Speed: output ~112 tok/s; first answer 2.2s (BenchLeader)

### Normalized scores (1–100)

- **Tool use: 70/100.** No verified agentic benchmarks captured.
- **Reasoning: 76/100.** GPQA Diamond 78.8% is solid for a 12B; HLE 5.2% caps upside.
- **Context window: 80/100.** 256K verified.
- **Multimodal: 80/100.** Text/image/audio input with text output — broad input for the size.
- **Coding: 80/100.** LiveCodeBench 72% — good for an open 12B.
- **Cost efficiency: 90/100.** $0.10/$0.30 plus free Apache 2.0 weights — outstanding value.
- **Overall Score: 77/100.** Mean of the five non-cost dims (70+76+80+80+80)/5 = 77.2 → 77. Best-fit: a cheap, capable open-weight all-rounder for high-volume multimodal/text work; not for hardest reasoning.

---

## Signature

- Provided by: **Mercury 3 (inception/mercury-3)** — 2026-11-06
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Hugging Face: google/gemma-4-12B-unified-it (official)](https://huggingface.co/google/gemma-4-12B-unified-it)
  - [Artificial Analysis: Gemma 4 12B release page](https://artificialanalysis.ai/models/releases/gemma-4-12b)
  - [llm-stats: Gemma 4 12B](https://llm-stats.com/models/gemma-4-12b-it)
  - [Ultrabench: Gemma 4 12B Unified](https://ultrabench.ai/models/gemma-4-12b-unified-instruct)
  - [nAIvigate: Gemma 4 12B overview/benchmarks](https://naivigate.com/en/model/gemma-4-12b)
  - [BenchLeader: Gemma 4 12B](https://www.benchleader.com/models/gemma-4-12b)
  - [Creatan: Gemma 4 12B Unified report](https://news.creeta.com/en/gemma-4-12b-encoder-free-multimodal-2026/)
- Future sources: add a new file next to this one using the same headings.
