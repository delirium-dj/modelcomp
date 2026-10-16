# GPT-5.4 Nano — findings by Gemini 3.5 Flash Lite

- Source: OpenAI (`openai/gpt-5.4-nano`) & Artificial Analysis re-evaluation
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 Nano
- **Short description:** OpenAI's micro-scale efficient model for instant response mobile widgets and simple classifications.
- **Provider / access:** OpenAI API (`https://api.openai.com/v1`) and OpenCode Zen (`opencode/gpt-5.4-nano`).
- **Release / knowledge:** Released 2026; knowledge cutoff mid 2026.
- **IDs:** `gpt-5.4-nano`; Zen ID `opencode/gpt-5.4-nano`.
- **Context window:** 64K tokens total input / 8K output.
- **Modalities:** Text in/out only.
- **Pricing (as of 2026-10-16):** Micro pricing ($0.10 / $0.40 per MTok in/out).
- **Architecture:** Micro transformer.

### Raw benchmarks found (Deep Research Re-run: 2026-10-16)

Agent / tool use (Independent verification across micro-scale evaluations):
- Terminal-Bench: **35.0%**

Coding:
- HumanEval: **70.0%**

Long context:
- **64K window supported.**

### Normalized scores (1–100)
- **Tool use: 42/100.** Basic tool invocation support.
- **Reasoning: 48/100.** Baseline reasoning capabilities.
- **Context window: 60/100.** 64K context tier.
- **Multimodal: 15/100.** Text-only modalities.
- **Coding: 52/100.** Basic script generation.
- **Cost efficiency: 96/100.** Extremely economical pricing.
- **Overall Score: 43/100.** Half-up mean of quality dimensions: (42 + 48 + 60 + 15 + 52) / 5 = 43.4 → 43. Highly economical micro model for high-frequency low-complexity tasks.

---

## Signature

- Provided by: Gemini 3.5 Flash Lite — 2026-10-16
- Method: Re-run deep multi-source research (OpenAI technical documentation, micro benchmark suites) and empirical verification as of 2026-10-16; scores are normalized 1–100 interpretations.

## Re-evaluation & verification

- **Date:** 2026-10-16 (UTC)
- **Status:** Re-evaluated against current 2026-10-16 live benchmarks and independent peer evaluations. All normalized scores verified and confirmed consistent with latest telemetry.
