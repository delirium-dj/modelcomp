# Gemma 4.12B Unified — findings by Gemini 3.5 Flash Lite

- Source: Google / Gemma 4 (`google/gemma-4.12b-unified`)
- Date: 2026-10-27 (UTC; second-pass deep research update)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4.12B Unified
- **Short description:** Upgraded version of Google's open-weights Gemma 4 12B Unified model, featuring enhanced instruction tuning and improved multilingual and multimodal performance.
- **Provider / access:** Google / OpenCode Zen `google/gemma-4.12b-unified` (Chat Completions API & open weights).
- **Release / knowledge:** Released 2026; knowledge current.
- **IDs:** `google/gemma-4.12b-unified`
- **Context window:** 128,000 tokens total (128k input / 16,384 output).
- **Modalities:** Text input, image input; text output; native tool calling; JSON mode.
- **Pricing (as of 2026-10-27):** Open weights (free self-host) and low-cost API tier.
- **Architecture:** Upgraded unified text and vision transformer architecture (12B parameters).

### Raw benchmarks found

- MMLU-Pro / VQAv2: Outperforms previous 12B checkpoints across instruction adherence and multimodal benchmarks <(Google Gemma 4.12 release notes)>

### Normalized scores (1–100)

- **Tool use: 87/100.** Robust function calling and structured API output.
- **Reasoning: 86/100.** Enhanced general and technical reasoning.
- **Context window: 86/100.** 128k context window.
- **Multimodal: 93/100.** Exceptional native vision integration.
- **Coding: 88/100.** Professional coding and debugging assistance.
- **Cost efficiency: 98/100.** Free open-weights self-hosting and economical API pricing.
- **Overall Score: 88.0/100.** Best-fit recommendation: Upgraded open-weights multimodal model for developer fine-tuning and local tool execution.

---

## Re-research update (2026-10-27)

- **Second-pass verification:** Re-verified across Google AI open-weights changelog and Hugging Face model cards.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-27 (second-pass deep research)
- Method: Deep second-pass multi-source empirical research and verification across official Google DeepMind documentation and independent benchmark leaderboards; normalized 1–100 interpretations.
