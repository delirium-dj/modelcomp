# Step 5 Preview — findings by GPT 5.5

- Source: StepFun (`step-5-preview`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Step 5 Preview
- **Short description:** StepFun flagship preview model for agentic coding, professional knowledge work, financial analysis, long-context reasoning, and vision input.
- **Provider / access:** StepFun API and Vercel AI Gateway route `stepfun/step-5-preview`.
- **Release / knowledge:** Public preview surfaced in September/October 2026; cutoff not stated.
- **IDs:** `stepfun/step-5-preview`, `step-5-preview`.
- **Context window:** **1M tokens**.
- **Modalities:** Text and vision input; text output; agentic coding/tool workflows through provider scaffolding.
- **Pricing (as of 2026-10-09):** The Model Gap reports **$1.00/M input** and **$2.70/M output**.
- **Architecture:** Sparse MoE, **600B total parameters** and **27B active per token**.

### Raw benchmarks found

Agent / tool use:

- The Model Gap tracks **7 benchmark scores**, with **2 independently run** and **5 vendor-claimed** (`https://themodelgap.com/models/step-5-preview`).
- Vercel AI Gateway describes it as a flagship model for agentic coding and professional knowledge work (`https://vercel.com/ai-gateway/models/step-5-preview`).

Reasoning / knowledge:

- Vendor/aggregator benchmark tables include professional knowledge and finance-oriented tasks, but exact GPQA/HLE rows were not recovered in accessible snippets.

Coding:

- Step 5 Preview is explicitly positioned for agentic coding; exact SWE-bench/LiveCodeBench values were not recovered.

Long context:

- The Model Gap and Vercel both report **1M-token** context.

### Normalized scores (1–100)

- **Tool use: 80/100.** Agentic coding positioning and tracked benchmark coverage support a high score, capped by mixed independent/vendor evidence.
- **Reasoning: 78/100.** Large MoE scale and knowledge-work positioning support strong reasoning, capped by missing extracted GPQA/HLE rows.
- **Context window: 96/100.** 1M context earns near-top context credit.
- **Multimodal: 70/100.** Vision input is supported, but no audio/video output was verified.
- **Coding: 82/100.** Agentic coding is a core use case, capped by missing exact SWE/LCB rows.
- **Cost efficiency: 82/100.** $1/$2.70 is attractive for a 600B/27B-active 1M-context model.
- **Overall Score: 81/100.** Half-up mean of the five quality dimensions; best fit is long-context coding and professional analysis.

---

## Signature

- Provided by: **GPT 5.5 (openai/gpt-5.5)** — 2026-10-09
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

