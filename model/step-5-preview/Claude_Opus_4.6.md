# Step 5 Preview — findings by Claude Opus 4.6

- Source: StepFun / Step 5 Preview
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Step 5 Preview
- **Short description:** StepFun's flagship MoE model (Sep 2026). 600B total / 27B active params. Designed for agentic workflows, SWE, and financial analysis. Open-weight release planned Oct 15, 2026.
- **Provider / access:** StepFun API (`step-5-preview`). Open weights planned for 2026-10-15.
- **Release / knowledge:** 2026-09-20 release (preview). Open weights planned Oct 2026.
- **IDs:** `stepfun/step-5-preview`
- **Context window:** 1,000,000 tokens (1M); 64,000 max output tokens.
- **Modalities:** Text, image, video in; text out; tool calls. Native multimodal.
- **Pricing (as of 2026-10-11):** $1.00 / $2.70 per 1M tokens (input/output).
- **Architecture:** 600B total parameters, 27B active per token. Sparse MoE. Proprietary (open weights planned).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench v4: strong results reported (source: StepFun internal testing; exact % not publicly verified)
- Agents' Last Exam (ALE-CLI): strong results reported (source: StepFun; exact % not publicly verified)
- GDPval-AA: no verified public score found
- Tau3-Banking: no verified public score found

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **~43.7–44** (source: Artificial Analysis)
- GPQA Diamond: no verified standalone score found
- HLE (Humanity's Last Exam): no verified public score found
- ARC-AGI-2: no verified public score found

Coding:

- StepCodeBench: strong results reported (source: StepFun; exact % not publicly verified)
- ProgramBench: strong results reported (source: StepFun; exact % not publicly verified)
- SWE-bench Verified: no verified standalone score found
- LiveCodeBench: no verified standalone score found

Long context:

- 1,000,000 token context window. 64K max output. No MRCR/RULER retrieval score published.

### Normalized scores (1–100)

- **Tool use: 78/100.** Strong but unverified Terminal-Bench v4 and ALE-CLI results. Frontier-class comparison with Kimi K3, GLM-5.3. Missing independently verified numbers cap higher.
- **Reasoning: 80/100.** AA Intelligence Index ~44 positions it in frontier class. Strong financial analysis capability noted. Missing GPQA/HLE standalone verification limits scoring.
- **Context window: 90/100.** 1M verified. 64K max output is solid. Production-grade context for agentic workflows.
- **Multimodal: 65/100.** Text + image + video in; text out. Native multimodal. No audio input. Video + image = 60–70 range.
- **Coding: 78/100.** Internal benchmarks (StepCodeBench, ProgramBench) show strong coding. Compared with frontier models. Missing independently verified SWE-bench/LiveCodeBench scores.
- **Cost efficiency: 90/100.** $1.00/$2.70 is very competitive for a 600B-parameter model. Strong value proposition. Open weights planned for self-hosting.
- **Overall Score: 78/100.** Mean of (78 + 80 + 90 + 65 + 78) / 5 = 78.2, rounded to 78. Promising frontier-class model with excellent pricing; limited independently verified benchmarks as a preview release.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4-6-20260205)** — 2026-10-11
- Method: Public internet research (StepFun docs, Artificial Analysis, OpenRouter, benchmark aggregators); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
