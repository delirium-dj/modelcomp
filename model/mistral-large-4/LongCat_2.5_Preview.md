# Mistral Large 4 — findings by LongCat 2.5 Preview

- Source: Mistral AI/Mistral Large 4
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mistral Large 4
- **Short description:** Mistral AI's largest and most capable model — a 1T-parameter natively multimodal MoE with 49B active parameters. Released as public preview with open weights planned for end of October 2026. Unofficially "Le Chonk."
- **Provider / access:** Mistral AI API (`mistral-large-4`), Mistral Studio, Blackbox AI, AIMLAPI. OpenAI-compatible API.
- **Release / knowledge:** 2026-10-06 (public preview; weights planned end of October 2026).
- **IDs:** `mistralai/mistral-large-4` (also `mistral-large-4-0` on some providers)
- **Context window:** 512K–524K tokens (verified via AIMLAPI, Blackbox AI, LLM Stats); some sources claim up to 1M.
- **Modalities:** Text, image input; Text output. Reasoning: yes. Tool calling: yes (function calling, structured outputs).
- **Pricing (as of 2026-10-09):** ~$0.68/1M input, ~$2.09/1M output, ~$0.07/1M cached input (Mistral AI direct). AIMLAPI: $1.768/$5.434. Very affordable for a 1T-parameter model. Open weights planned.
- **Architecture:** 1T (1050B) total / 49B active MoE with granular Mixture-of-Experts architecture. Natively multimodal.

### Raw benchmarks found

Agent / tool use:

- AutomationBench: **59.9%** (AIMLAPI — Mistral AI announcement)
- DeepSWE v1.1: **61.7%** (AIMLAPI — Mistral AI announcement)
- Function calling: supported (Mistral docs, Blackbox AI)
- Structured outputs: supported (Blackbox AI)
- Tool-assisted applications: supported (Hugging Face blog)

Reasoning / knowledge:

- Intelligence Index: **38** (Artificial Analysis — comparable to GPT-6 Luna max 38, DeepSeek V4.1 Flash max 39)
- Cyber Index: **50** (Artificial Analysis — level with GLM-5.3-Flash, ahead of Kimi K3 and DeepSeek V4.1 Flash)
- KORA: **1.691** (AIMLAPI — Mistral AI announcement)
- B3 Attack Resistance: **93.3%** (AIMLAPI — Mistral AI announcement)

Coding:

- DeepSWE v1.1: **61.7%** (AIMLAPI — Mistral AI announcement)
- Cybench: **93%** (AIMLAPI — Mistral AI announcement)

Long context:

- Context window: **512K–524K tokens** (verified via AIMLAPI, Blackbox AI, LLM Stats); some sources claim up to 1M

Multimodal:

- Dense 200 visual grounding: **42%** (AIMLAPI — Mistral AI announcement)
- Text and image input supported (Mistral docs, Blackbox AI)

### Normalized scores (1–100)

- **Tool use: 75/100.** AutomationBench 59.9%, function calling + structured outputs. Good agentic tool use, though below frontier on complex multi-step automation.
- **Reasoning: 75/100.** Intelligence Index 38, comparable to GPT-6 Luna and DeepSeek V4.1 Flash. Good general reasoning, trails top-tier models.
- **Context window: 82/100.** 512K–524K token context. Good long-context capability, though not the largest available.
- **Multimodal: 72/100.** Text and image input. Dense 200 visual grounding 42%. Decent visual understanding but no audio/video input.
- **Coding: 78/100.** DeepSWE 61.7%, Cybench 93%. Good coding agent performance, especially on cybersecurity tasks.
- **Cost efficiency: 90/100.** ~$0.68/$2.09 per 1M tokens — very affordable for a 1T-parameter model. Open weights planned for self-hosting.
- **Overall Score: 76/100.** Mean of Tool (75), Reasoning (75), Context (82), Multimodal (72), Coding (78) = 382/5 = 76.4 → 76. Strong open-weight flagship with excellent cost efficiency.

---

## Signature

- Provided by: **LongCat 2.5 Preview (meituan/longcat-2.5-preview)** — 2026-10-09
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
