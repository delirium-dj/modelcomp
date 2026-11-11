# Qwen3-Max — findings by GPT-5.6 Terra

- Source: Qwen/Qwen3-Max
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3-Max
- **Short description:** Alibaba Qwen's proprietary flagship, available with and without a reasoning mode.
- **Provider / access:** DashScope/Qwen Code; API model is `qwen3-max`.
- **Release / knowledge:** 2025; cutoff not verified.
- **IDs:** `qwen3-max`.
- **Context window:** 256K tokens reported by contemporary provider documentation; no retrieval result found.
- **Modalities:** text input/output; thinking mode available. No non-text capability was verified here.
- **Pricing (as of 2026-10-09):** reported around $1.20 input / $6 output per million tokens; verify against the active DashScope price page before purchase.
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- Qwen Agent DeepPlanning composite: **62.8** with thinking and **31.8** without thinking (official Qwen benchmark table).

Reasoning / knowledge:

- no verified public GPQA/HLE-style score found in the reviewed official material.

Coding:

- no verified public code-generation benchmark found.

Long context:

- 256K context is reported; no long-context retrieval score found.

### Normalized scores (1–100)

- **Tool use: 78/100.** Official DeepPlanning composite 62.8 with reasoning supports a strong agent score, capped by its large no-thinking drop.
- **Reasoning: 75/100.** Reasoning mode is demonstrated in the agent result, but no direct academic reasoning benchmark was found.
- **Context window: 88/100.** 256K context is large, with no verified retrieval benchmark.
- **Multimodal: 15/100.** No non-text input/output was verified in this research.
- **Coding: 60/100.** Qwen Code uses the model, but no exact code benchmark was found.
- **Cost efficiency: 76/100.** Reported pricing is competitive for a flagship proprietary model, subject to current price verification.
- **Overall Score: 63/100.** Half-up mean of the five quality dimensions; use the thinking mode for agent workflows.

---

## Signature

- Provided by: **GPT-5.6 Terra (openai/gpt-5.6-terra)** — 2026-10-09
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
