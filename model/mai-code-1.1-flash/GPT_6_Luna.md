# MAI-Code-1.1-Flash — findings by GPT-6 Luna

- Source: Microsoft/MAI-Code-1.1-Flash, `microsoft/mai-code-1.1-flash`
- Date: 2026-10-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MAI-Code-1.1-Flash
- **Short description:** Microsoft's Aug 2026 agentic coding MoE (138B total/5B active, 256K) for Copilot: SWE-bench Verified 72.6%, Terminal-Bench 2.1 62.9% at $0.20/$1.20 - not on Zen.
- **Provider / access:** GitHub Copilot; VS Code; downloadable (3-bit quantized).
- **Release / knowledge:** Released 2026-10-07; knowledge cutoff not stated.
- **IDs:** `microsoft/mai-code-1.1-flash` (the exact tracked route; alternate hosts are listed in the provider line).
- **Context window:** 256,000 total (128,000 out)
- **Modalities:** Text, image in; text out; reasoning/tool support as documented in the raw model card.
- **Pricing (as of 2026-10-30):** $0.20/$1.20 per 1M in/out (GitHub Copilot), cached input $0.02
- **Architecture:** proprietary; params not published. 3-bit quantized.

### Raw benchmarks found

Agent / tool use:

- Agentic public-lane (BenchLM): not individually reported
- Terminal-Bench 2.1: **62.9%** (Microsoft AI model card)

Reasoning / knowledge:

- Reasoning public-lane (BenchLM): not individually reported
- GPQA: not reported
- HLE: not reported
- MMLU-Pro: not reported
- AA Intelligence Index: not reported

Coding:

- Coding public-lane (BenchLM): not individually reported
- SWE-bench Verified: **72.6%** (Microsoft AI model card)
- Terminal-Bench 2.1: **62.9%** (Microsoft AI model card)
- LiveCodeBench: not reported
- SWE-bench Pro: not reported

Long context:

- 256K window; MRCR: not reported.

Multimodal:

- Text and image input; no exact 1.1-specific multimodal benchmark was verified.

### Normalized scores (1–100)

- **Tool use: 60/100.** Terminal-Bench 2.1 62.9%; caps at no published agentic benchmarks beyond Terminal-Bench.
- **Reasoning: 56/100.** No verified reasoning benchmarks; caps pending verification.
- **Context window: 66/100.** 256K window; caps at no published MRCR.
- **Multimodal: 65/100.** Image input is documented, but no exact multimodal benchmark was verified.
- **Coding: 66/100.** SWE-bench 72.6%, Terminal-Bench 2.1 62.9%; caps at no published LiveCodeBench/SWE-bench Pro.
- **Cost efficiency: 86/100.** Current curated hosted route is $0.20/$1.20 per 1M; no zero-price inference guarantee was verified.
- **Overall Score: 62.6/100.** Half-up mean of the five non-cost quality dimensions: (60 + 56 + 66 + 65 + 66) / 5 = 62.6. Cost efficiency is excluded. Best fit is image-aware on-device coding, with only two exact benchmark rows.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna)** — 2026-10-30 UTC
- Method: Public web research using the official model card/API documentation and the independent benchmark pages retained in the research extract; conflicting harnesses and inherited variant results are labelled in the raw section. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Source 1](https://microsoft.ai/pdf/MAI-Code-1.1-Flash-Model-Card.PDF)
  - [Source 2](https://github.com/features/copilot/plans)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
