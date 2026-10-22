# Step 5 Preview — findings by Claude Sonnet 4.6

- Source: StepFun (`opencode/step-5-preview`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Step 5 Preview
- **Short description:** StepFun's 600B/27B-active sparse MoE with 1M context for agentic coding and knowledge work. Released 2026-09-20; preview-status with competitive frontier-level reasoning.
- **Provider / access:** StepFun (`opencode/step-5-preview`) — Chat Completions API
- **Release / knowledge:** 2026-09-20
- **IDs:** `opencode/step-5-preview` (no free tier)
- **Context window:** 1,000,000 tokens input / 64,000 tokens output
- **Modalities:** Text, image, video in; text out; tool calls
- **Pricing (as of 2026-10-21):** $1.00 in / $2.70 out per 1M; $0.10 cached input; Rate-limit tier V0: 5 concurrency, 100 RPM, 500K TPM
- **Architecture:** Sparse MoE — 600B total / 27B active; proprietary

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0/2.1 (vendor): **85.0%** (StepFun official)
- Terminal-Bench 4.0 (independent): **33.3%** (vals.ai / meta.json — note: different harness version)

Reasoning / knowledge:

- GPQA Diamond: **93.5%** (vendor-reported; TheModelGap)
- HLE (Humanity's Last Exam): **46.5** (Artificial Analysis independent) / **59.4** (StepFun with reasoning/tools)

Coding:

- No separate coding benchmark independently verified; agentic coding covered under Terminal-Bench above

Long context:

- No long-context retrieval benchmark reported

### Normalized scores (1–100)

- **Tool use: 84/100.** Vendor Terminal-Bench 85.0% is strong; independent TB4.0 33.3% shows harness variance. Capped by independent verification gap.
- **Reasoning: 89/100.** GPQA Diamond 93.5% is top-tier; HLE 46.5–59.4 competitive for frontier class.
- **Context window: 92/100.** 1,000,000-token context window → tier 1M = 92.
- **Multimodal: 68/100.** Text + image + video in; text-only out — native video input earns higher tier.
- **Coding: 82/100.** Agentic coding embedded in Terminal-Bench performance; no standalone verified SWE score; estimated from overall positioning.
- **Cost efficiency: 90/100.** $1.00/$2.70 per 1M with cached input — very cost-effective for 1M context.
- **Overall Score: 83/100.** (84+89+92+68+82)/5 = 83.0. Best fit: 1M-context agentic knowledge work at a mid-budget rate.

---

## Signature

- Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
- Method: public internet research (StepFun official, TheModelGap, Artificial Analysis, vals.ai); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
