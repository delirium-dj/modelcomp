# Gemma 4 26B-A4B — findings by Mercury 3

- Source: Google DeepMind (Gemma 4 26B-A4B)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 26B-A4B
- **Short description:** Google DeepMind's open-weight instruction-tuned MoE (released 2026-04-02), ~25.2B total / 3.8B active per token, with a reasoning variant. A lean, fast, budget multimodal model for high-volume tasks where cost efficiency trumps peak quality.
- **Provider / access:** Open weights on Hugging Face (`google/gemma-4-26B-A4B-it`, Apache 2.0); hosted via 7+ providers (incl. free variants on OpenRouter).
- **Release / knowledge:** Released 2026-04-02; knowledge cutoff not published.
- **IDs:** `google/gemma-4-26b-a4b-it` (also `:free` variant).
- **Context window:** 256K tokens (262,144 per llm-stats listing).
- **Modalities:** text + image + video input; text output; reasoning variant with extended thinking; Apache 2.0.
- **Pricing (as of 2026-11):** median $0.10 in / $0.34 out per 1M (cache discount 50%); from $0.04/$0.15 (OpenRouter) to $0.07/$0.34 (llm-stats); open weights free.
- **Architecture:** MoE, 25.2B total / 3.8B active.

### Raw benchmarks found

Reasoning / knowledge:

- Reasoning variant with extended thinking (AA); AA Intelligence Index: N/A (not measured at research time)
- TTFA 24.42s (median across providers — higher than class median 5.10s); output speed 71 tok/s

Coding:

- Coding category 40/100 (LM Market Cap, #333)
- BenchLM composite: 42.25/100 (#134/216, estimated)

Long context:

- 256K verified; no independent long-context retrieval benchmark captured

Multimodal:

- Text/image/video input, text output

Safety/other:

- Openness Index tracked by AA (open weights)

### Normalized scores (1–100)

- **Tool use: 72/100.** No verified agentic benchmarks captured; budget-tier tool use.
- **Reasoning: 76/100.** Reasoning variant exists; no measured index; class-typical capability.
- **Context window: 80/100.** 256K verified.
- **Multimodal: 78/100.** Text/image/video input with text output.
- **Coding: 74/100.** Coding composite 40/100 — modest, budget-tier.
- **Cost efficiency: 88/100.** $0.04–0.10/$0.15–0.34 plus free Apache 2.0 weights — outstanding value.
- **Overall Score: 76/100.** Mean of the five non-cost dims (72+76+80+78+74)/5 = 76.0. Best-fit: a cheap, capable open-weight multimodal workhorse for high-volume tasks; not for peak-quality reasoning/coding.

---

## Signature

- Provided by: **Mercury 3 (inception/mercury-3)** — 2026-11-06
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Hugging Face: google/gemma-4-26B-A4B-it (official)](https://huggingface.co/google/gemma-4-26B-A4B-it)
  - [Artificial Analysis: Gemma 4 26B A4B page](https://artificialanalysis.ai/models/gemma-4-26b-a4b)
  - [llm-stats: Gemma 4 26B-A4B](https://llm-stats.com/models/gemma-4-26b-a4b-it)
  - [OpenRouter: google/gemma-4-26b-a4b-it](https://openrouter.ai/google/gemma-4-26b-a4b-it)
  - [BenchLM: Gemma 4 26B A4B](https://benchlm.ai/models/gemma-4-26b-a4b)
  - [CloudPrice: Gemma 4 26B A4B](https://cloudprice.net/models/google-gemma-4-26b-a4b)
- Future sources: add a new file next to this one using the same headings.
