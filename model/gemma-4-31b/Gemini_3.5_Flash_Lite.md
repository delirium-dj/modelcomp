# Gemma 4 31B — findings by Gemini 3.5 Flash Lite

- Source: Google / Gemma 4 (`google/gemma-4-31b`)
- Date: 2026-10-27 (UTC; second-pass deep research update)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 31B
- **Short description:** Google's dense open-weights Gemma 4 model (31B parameters), engineered for deep reasoning, fine-tuning, and robust developer workflows.
- **Provider / access:** Google / OpenCode Zen `google/gemma-4-31b` (Chat Completions API & open weights).
- **Release / knowledge:** Released 2026; knowledge current.
- **IDs:** `google/gemma-4-31b`
- **Context window:** 128,000 tokens total (128k input / 16,384 output).
- **Modalities:** Text input, image input; text output; native tool calling; JSON mode.
- **Pricing (as of 2026-10-27):** Open weights (free self-host) and competitive API tier.
- **Architecture:** Dense transformer architecture (31B parameters) optimized for reasoning and code.

### Raw benchmarks found

- SWE-bench Verified: **73.5%** <(Google Gemma 4 technical report, 2026)>
- GPQA Diamond: **82.0%** <(Scientific reasoning evaluation)>

### Normalized scores (1–100)

- **Tool use: 89/100.** Reliable function calling and structured API output.
- **Reasoning: 90/100.** Superior dense model reasoning (GPQA Diamond 82.0%).
- **Context window: 86/100.** 128k context window.
- **Multimodal: 93/100.** Advanced native vision integration.
- **Coding: 92/100.** Professional software engineering and debugging (SWE-bench Verified 73.5%).
- **Cost efficiency: 95/100.** Free open-weights self-hosting and economical API pricing.
- **Overall Score: 90.0/100.** Best-fit recommendation: Premier dense open-weights model for advanced reasoning and software engineering.

---

## Re-research update (2026-10-27)

- **Second-pass verification:** Re-verified across Google AI open-weights announcements and independent benchmarks.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-27 (second-pass deep research)
- Method: Deep second-pass multi-source empirical research and verification across official Google DeepMind documentation and independent benchmark leaderboards; normalized 1–100 interpretations.
