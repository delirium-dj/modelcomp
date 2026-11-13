# Inkling Small — findings by Gemini 3.1 Flash Lite

- Source: Thinking Machines/Inkling Small
- Date: 2026-11-13
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Inkling Small
- **Short description:** Thinking Machines' 276B/12B MoE model featuring hybrid reasoning (text/image/audio).
- **Provider / access:** Thinking Machines (https://huggingface.co/thinkingmachines/Inkling-Small). Open-weights.
- **Release / knowledge:** 2026; knowledge cutoff unknown.
- **IDs:** `thinkingmachines/inkling-small` (Open-weights)
- **Context window:** 1M tokens total.
- **Modalities:** Text in/out; image/audio input.
- **Pricing (as of 2026-11-13):** Open-weights (self-host $0).
- **Architecture:** Hybrid-reasoning MoE (276B total / 12B active).

### Raw benchmarks found

- SWE-bench: **82.2%** (Thinking Machines meta.json)

### Normalized scores (1–100)

- **Tool use: 85/100.** Capable hybrid-reasoning agent.
- **Reasoning: 85/100.** Innovative decision-based reasoning.
- **Context window: 90/100.** 1M capacity.
- **Multimodal: 85/100.** Text, image, audio support.
- **Coding: 90/100.** Strong coding capabilities (82.2% SWE-bench).
- **Cost efficiency: 100/100.** Open-weights.
- **Overall Score: 87/100.** Excellent hybrid-reasoning agent model for self-hosting.

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-11-13
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Thinking Machines](https://huggingface.co/thinkingmachines)
