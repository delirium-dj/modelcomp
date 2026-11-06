# Step 5 Preview — findings by Mercury 3

- Source: StepFun (Step 5 Preview)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Step 5 Preview
- **Short description:** StepFun's flagship preview model for agentic work (2026), built on a sparse Mixture-of-Experts architecture (27B active / 600B total). Targets agentic coding, long-document research, tool-using multi-step workflows, and professional/financial analysis; "Preview" carries availability/behavior risk.
- **Provider / access:** StepFun platform (`platform.stepfun.ai`); available via OpenRouter (`stepfun/step-5-preview`) and other routers (~4 providers).
- **Release / knowledge:** Preview release 2026 (exact date not confirmed in sources fetched); knowledge cutoff not published.
- **IDs:** `stepfun/step-5-preview`.
- **Context window:** 1M tokens (OpenRouter); max completion 64K (OpenRouter).
- **Modalities:** text + image + video input; text output; function calling and structured output; agentic coding; no audio input confirmed, no multimodal output.
- **Pricing (as of 2026-10):** $1.00 in / $2.70 out per 1M (OpenRouter; cache read $0.05/1M).
- **Architecture:** sparse MoE, 600B total / 27B active (proprietary).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **33.3%** (BenchmarkList) / **31.8%** (independent run attributed to vals.ai per The Model Gap)
- Focus on long-horizon agentic coding and tool workflows per vendor; no MCP/agent-index numbers captured

Reasoning / knowledge:

- HLE: **46.5%** (BenchmarkList aggregated)
- AA-LCR: **88.3%** (BenchmarkList aggregated)
- AA Intelligence Index (independent): **29** (top StepFun model; output speed 136 t/s, TTFT 15.62s, cost/task $2.35)

Coding:

- SciCode: **58.9%** (BenchmarkList aggregated)
- Terminal-Bench 4.0: ~32–33% (see above)
- BenchLM composite: 56.81/100 (#60/216, estimated)

Long context:

- 1M context listed by OpenRouter; no independent long-context retrieval benchmark captured

### Normalized scores (1–100)

- **Tool use: 78/100.** Terminal-Bench 4.0 ~32–33% (independent 31.8%) is modest for an agentic flagship; vendor emphasis on tool-using multi-step workflows not backed by captured strong independent agent benchmarks.
- **Reasoning: 84/100.** HLE 46.5% and AA-LCR 88.3% are strong; independent AA Intelligence Index 29 is solid for its price class but far below proprietary frontier (50–59).
- **Context window: 92/100.** 1M verified via OpenRouter — top-tier for the price.
- **Multimodal: 75/100.** Text/image/video input with text output and structured output support; no audio input or multimodal output confirmed.
- **Coding: 82/100.** SciCode 58.9% is good; Terminal-Bench 4.0 ~32% limits the coding-agent story.
- **Cost efficiency: 78/100.** $1.00/$2.70 with $0.05 cache — inexpensive for a 1M-context agentic model; preview-phase risk and volatility noted.
- **Overall Score: 82/100.** Mean of the five non-cost dims (78+84+92+75+82)/5 = 82.2 → 82. Best-fit: a low-cost 1M-context agentic value play with strong HLE/AA-LCR; treat as preview — pin provider and verification date before production use.

---

## Signature

- Provided by: **Mercury 3 (inception/mercury-3)** — 2026-11-06
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [StepFun: Step 5 Preview (official)](https://www.stepfun.com/step-5-preview)
  - [OpenRouter: stepfun/step-5-preview](https://openrouter.ai/stepfun/step-5-preview)
  - [Artificial Analysis: Step 5 Preview page](https://artificialanalysis.ai/models/step-5)
  - [Artificial Analysis: StepFun creator comparison](https://artificialanalysis.ai/models/creators/stepfun)
  - [LLM Price Calc: Step 5 Preview pricing & benchmarks (independent)](https://llmpricecalc.com/step-5-preview-pricing/)
  - [The Model Gap: Step 5 Preview (independent verification status)](https://themodelgap.com/models/step-5-preview)
  - [BenchLM: Step 5 Preview](https://benchlm.ai/models/step-5-preview)
- Future sources: add a new file next to this one using the same headings.
