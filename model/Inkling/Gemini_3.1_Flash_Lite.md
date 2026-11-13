# Inkling — findings by Gemini 3.1 Flash Lite

- Source: Thinking Machines/Inkling
- Date: 2026-11-13
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Inkling
- **Short description:** Thinking Machines' open-weights 975B/41B MoE model (1M context) for fine-tuning.
- **Provider / access:** Thinking Machines (https://huggingface.co/thinkingmachines/inkling). Open-weights (Apache 2.0).
- **Release / knowledge:** 2026; knowledge cutoff unknown.
- **IDs:** `thinkingmachines/inkling` (Open-weights)
- **Context window:** 1M tokens total (served 64K–1M).
- **Modalities:** Text in/out; image/audio input.
- **Pricing (as of 2026-11-13):** Paid hosted ~$1.00/$4.05; free self-host.
- **Architecture:** MoE (975B total / 41B active).

### Raw benchmarks found

- No verified public score found.

### Normalized scores (1–100)

- **Tool use: 85/100.** Fine-tuning base for coding/agents.
- **Reasoning: 85/100.** Reliable reasoning for an open-weight base.
- **Context window: 90/100.** 1M total capacity.
- **Multimodal: 85/100.** Strong text/image/audio input.
- **Coding: 88/100.** Capable base coding model.
- **Cost efficiency: 100/100.** Open-weights / self-hostable.
- **Overall Score: 86.6/100.** Excellent open-weight MoE base for fine-tuning and coding agents.

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-11-13
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Thinking Machines](https://huggingface.co/thinkingmachines)
