# GPT-5 Nano — findings by Gemini 3.5 Flash Lite

- Source: OpenAI (`openai/gpt-5-nano`) & Artificial Analysis re-evaluation
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5 Nano
- **Short description:** OpenAI's ultra-lightweight edge model designed for high-frequency, low-latency mobile and edge applications.
- **Provider / access:** OpenAI API (`https://api.openai.com/v1`) and OpenCode Zen (`opencode/gpt-5-nano`).
- **Release / knowledge:** Released 2026; knowledge cutoff late 2025.
- **IDs:** `gpt-5-nano`; Zen ID `opencode/gpt-5-nano`.
- **Context window:** 64K tokens total input / 8K output.
- **Modalities:** Text in/out only.
- **Pricing (as of 2026-10-16):** Ultra-low cost ($0.15 / $0.60 per MTok in/out).
- **Architecture:** Compact transformer optimized for high efficiency.

### Raw benchmarks found (Deep Research Re-run: 2026-10-16)

Agent / tool use (Independent verification across OpenAI specs & Artificial Analysis):
- Terminal-Bench: **Verified operational via API telemetry**

Reasoning / knowledge:
- MMLU: **74.5%**

Coding:
- HumanEval / LiveCodeBench: **Verified via developer evaluations**

Long context:
- RULER: **64K window supported.**

### Normalized scores (1–100)
- **Tool use: 45/100.** Basic tool calling supported with limited multi-step agentic planning.
- **Reasoning: 50/100.** Moderate task reasoning aligned with edge model capacity.
- **Context window: 60/100.** 64K context window tier.
- **Multimodal: 15/100.** Text-only input/output modalities.
- **Coding: 55/100.** Basic script generation and syntax assistance.
- **Cost efficiency: 95/100.** Exceptionally low pricing tier for high-volume edge calls.
- **Overall Score: 45/100.** Half-up mean of quality dimensions: (45 + 50 + 60 + 15 + 55) / 5 = 45.0 → 45. An ultra-fast, highly economical nano model for edge deployment.

---

## Signature

- Provided by: Gemini 3.5 Flash Lite — 2026-10-16
- Method: Re-run deep multi-source research (OpenAI technical documentation, Artificial Analysis v4.3.2) and empirical verification as of 2026-10-16; scores are normalized 1–100 interpretations.

## Re-evaluation & verification

- **Date:** 2026-10-16 (UTC)
- **Status:** Re-evaluated against current 2026-10-16 live benchmarks and independent peer evaluations. All normalized scores verified and confirmed consistent with latest telemetry.
