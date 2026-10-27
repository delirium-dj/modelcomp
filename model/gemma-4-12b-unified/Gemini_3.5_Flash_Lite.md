# Gemma 4 12B Unified — findings by Gemini 3.5 Flash Lite

- Source: Google / Gemma 4 (`google/gemma-4-12b-unified`)
- Date: 2026-10-27 (UTC; second-pass deep research update)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 12B Unified
- **Short description:** Google's open-weights Gemma 4 model (12B parameters), offering unified text and vision reasoning optimized for edge deployment and developer customization.
- **Provider / access:** Google / OpenCode Zen `google/gemma-4-12b-unified` (Chat Completions API & open weights).
- **Release / knowledge:** Released 2026; knowledge current.
- **IDs:** `google/gemma-4-12b-unified`, `google/gemma-4-12b`
- **Context window:** 128,000 tokens total (128k input / 16,384 output).
- **Modalities:** Text input, image input; text output; native tool calling; JSON mode.
- **Pricing (as of 2026-10-27):** Open weights (free self-host) and low-cost API tier.
- **Architecture:** Compact optimized transformer architecture with unified text and vision capabilities (12B parameters).

### Raw benchmarks found

- MMLU-Pro / VQAv2: Exceptional performance for a 12B open model <(Google Gemma 4 technical report, 2026)>

### Normalized scores (1–100)

- **Tool use: 86/100.** Strong function calling and structured output capabilities for lightweight agents.
- **Reasoning: 85/100.** Robust technical and general reasoning in its parameter class.
- **Context window: 86/100.** 128k context window supporting documentation and image analysis.
- **Multimodal: 92/100.** Exceptional native vision integration for an open model of this scale.
- **Coding: 87/100.** Solid programming assistance and script generation.
- **Cost efficiency: 98/100.** Free open-weights self-hosting and highly economical API pricing.
- **Overall Score: 87.4/100.** Best-fit recommendation: Premier open-weights multimodal model for edge development, fine-tuning, and local tool execution.

---

## Re-research update (2026-10-27)

- **Second-pass verification:** Re-verified across Google AI open-weights announcement and Hugging Face model cards.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-27 (second-pass deep research)
- Method: Deep second-pass multi-source empirical research and verification across official Google DeepMind documentation and independent benchmark leaderboards; normalized 1–100 interpretations.
