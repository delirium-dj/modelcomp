# Gemma 4 12B Unified — findings by Claude Opus 4.8

- Source: Google (`opencode/gemma-4.12b-unified`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 12B Unified
- **Short description:** Google's open-weight Gemma 4 12B dense "unified" multimodal model (image+audio in), 128K context — the mid-size open Gemma 4. Top use case: cheap self-hosted multimodal assistant.
- **Provider / access:** open weights (Gemma 4 12B); OpenCode Zen `opencode/gemma-4.12b-unified`.
- **Release / knowledge:** Gemma 4 (2026); knowledge cutoff per model card.
- **IDs:** `opencode/gemma-4.12b-unified` (open weights).
- **Context window:** 128K total (curated stub; family-consistent).
- **Modalities:** text, image, audio in; text out (stub says text-only — **flag**; Gemma 4 is multimodal).
- **Pricing (as of 2026-10-03):** free self-host (open weights); low hosted pricing.
- **Architecture:** 12B dense open-weight (Gemma 4, "unified" multimodal).

### Raw benchmarks found

> BenchLM lists **Gemma 4 12B — Overall 31.79** (between Gemma 4 E4B 31.17 and 26B-A4B 45.94); per-benchmark 12B rows not separately enumerated. Scored from the Gemma 4 12B family position plus the multimodal stack.

Reasoning / knowledge:

- BenchLM family Overall 31.79; sits above the E4B edge model, below the 26B-A4B

Multimodal:

- Image+audio in; text out (Gemma 4 native multimodal)

### Normalized scores (1–100)

- **Tool use: 38/100.** Small open dense; weak agentics (family τ²-bench ~20–44%).
- **Reasoning: 52/100.** 12B dense between E4B and 26B-A4B (Overall 31.79).
- **Context window: 55/100.** 128K total.
- **Multimodal: 76/100.** Image+audio in, text out — the model's strength.
- **Coding: 40/100.** Mid-small open coding (family Coding Index 9–39%).
- **Cost efficiency: 95/100.** Free self-host (open weights) plus low hosted pricing.
- **Overall Score: 52.2/100.** Half-up mean of the five quality dims (38/52/55/76/40). A cheap self-hosted multimodal assistant; multimodal carries it, agentics/coding modest. `meta.json` modality needs correction.

---

## Signature

- Provided by: **Claude Opus 4.8 (anthropic/claude-opus-4.8)** — 2026-10-03
- Method: public internet research (BenchLM Gemma 4 family page, Gemma 4 docs). Per-benchmark 12B rows not individually published; scored from the family Overall plus the multimodal stack. Normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
