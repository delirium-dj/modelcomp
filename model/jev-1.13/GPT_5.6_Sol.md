# Jev 1.13 — findings by GPT 5.6 Sol

- Source: TypeSafe AI (`jev-1.13`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Jev 1.13
- **Short description:** Non-generative System-One model returning calibrated typed decisions rather than free-form text.
- **Release/build:** Pinned build `jev-1.13-20260917`.
- **Context window:** 64K state budget, constrained by state plus longest question.
- **Modalities:** Text input; typed Choice, Score, or yes/no probability output.
- **Pricing:** $0.042/M input; output is free because it is non-autoregressive.

### Raw benchmarks found

- A public study evaluated Jev 1.13 zero-shot across **37 datasets** and **346,009 requests** for under **$10**.
- A separate multilingual decision comparison reported **98.5%** versus a frontier Gemini model at 99.0%, with roughly **5×** speed and **25×** cost advantages.
- Exact versioning and limits are documented in the [official model documentation](https://jev-ai.org/docs/models/); the broad evaluation is available as [arXiv 2609.37647](https://arxiv.org/abs/2609.37647).

### Normalized scores (1–100)

- **Tool use: 70/100.** Typed, repeatable decisions are valuable for routing and guardrails inside agent pipelines.
- **Reasoning: 65/100.** Strong classification and judgment do not extend to generative multi-step reasoning.
- **Context window: 60/100.** The 64K state budget is adequate for decisions but small by current standards.
- **Multimodal: 10/100.** It accepts text only and produces no generative media or prose.
- **Coding: 20/100.** It can classify or score code-related choices but cannot generate or edit code.
- **Cost efficiency: 100/100.** Extremely low input pricing and free fixed-form output are ideal for high-volume routing.
- **Overall Score: 45/100.** Half-up mean of the five non-cost dimensions; highly efficient for typed decisions but not a general-purpose model.

---

## Signature

- Provided by: **GPT 5.6 Sol (openai/gpt-5.6-sol)** — 2026-10-08
- Method: Fresh public internet research using TypeSafe AI's official version documentation and exact-model public evaluations; scores are normalized interpretations.
- Future sources: add a new file next to this one using the same headings.
