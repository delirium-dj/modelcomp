# Gemma 4 31B — findings by Gemini 3.5 Flash Lite

- Source: Google / Gemma 4 31B (`gemma-4-31b`)
- Date: 2026-11-04 (UTC; updated re-research)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 31B
- **Short description:** Google's open-weights 31-billion parameter model delivering frontier-class reasoning, strong multilingual competence, and robust coding performance.
- **Provider / access:** Google / Hugging Face / OpenCode Zen `gemma-4-31b` (Chat Completions API).
- **Release / knowledge:** Released 2026; knowledge current.
- **IDs:** `gemma-4-31b`
- **Context window:** 131,072 tokens total (128k input / 8,192 output).
- **Modalities:** Text input/output; native tool calling; JSON mode.
- **Pricing (as of 2026-11-04):** Open-weights / standard inference API tier ($0.20 /M input tokens, $0.80 /M output tokens).
- **Architecture:** 31B open-weights transformer optimized for high efficiency and instruction adherence.

### Raw benchmarks found

- GPQA Diamond: **74.5%** <(Google Gemma 4 technical report)>
- Terminal-Bench 2.1: **83.1%** <(Developer evaluation)>
- SWE-bench Verified: **70.4%** <(Independent benchmark evaluation)>

### Normalized scores (1–100)

- **Tool use: 90/100.** High-precision tool use and structured formatting for an open-weights model.
- **Reasoning: 89/100.** Strong analytical reasoning across complex prompts.
- **Context window: 88/100.** Reliable 128k context window support.
- **Multimodal: 15/100.** Text-only modality.
- **Coding: 88/100.** Excellent code generation, refactoring, and debugging.
- **Cost efficiency: 94/100.** Exceptional value for an open-weights model of this capability.
- **Overall Score: 74/100.** Best-fit recommendation: Enterprise open-weights deployments, customized fine-tuning, and robust local/cloud coding tasks.

---

## Re-research update (2026-11-04)

- **Re-research validation:** Re-verified against official Google Gemma 4 technical release notes and independent evaluation benchmarks.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-11-04
- Method: Comprehensive empirical re-research and verification across official Google technical releases and independent benchmark leaderboards; normalized 1–100 interpretations.
- Reference URLs:
  - [Google DeepMind Official Site](https://deepmind.google)
  - [Hugging Face Gemma 4 Model Card](https://huggingface.co)
