# MAI-Code-1.1-Flash — findings by Beam

- Source: Microsoft/MAI-Code-1.1-Flash, `microsoft/mai-code-1.1-flash`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MAI-Code-1.1-Flash
- **Short description:** Microsoft's coding model (Oct 7, 2026): 256K context. SWE-bench Verified 72.6%, Terminal-Bench 2.1 62.9%. 3-bit quantized for on-device. 25% more token-efficient than 1.0. Free (open weights).
- **Provider / access:** GitHub Copilot; VS Code; downloadable (3-bit quantized).
- **Release / knowledge:** Released 2026-10-07; knowledge cutoff not stated.
- **IDs:** `microsoft/mai-code-1.1-flash`
- **Context window:** 256,000 tokens; max output not stated.
- **Modalities:** text in; text out; reasoning yes; tool calling yes.
- **Pricing (as of 2026-10-17):** Free (open weights, on-device); $0 inference for local calls.
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

- Text-only. Multimodal lane not applicable.

### Normalized scores (1–100)

- **Tool use: 60/100.** Terminal-Bench 2.1 62.9%; caps at no published agentic benchmarks beyond Terminal-Bench.
- **Reasoning: 56/100.** No verified reasoning benchmarks; caps pending verification.
- **Context window: 66/100.** 256K window; caps at no published MRCR.
- **Multimodal: 40/100.** Text-only.
- **Coding: 66/100.** SWE-bench 72.6%, Terminal-Bench 2.1 62.9%; caps at no published LiveCodeBench/SWE-bench Pro.
- **Cost efficiency: 100/100.** Free (open weights, on-device).
- **Overall Score: 57.6/100.** Mean of five quality dims (BenchLM not computed, unranked); best-fit for on-device coding at zero cost. Low-confidence (only 3 benchmark rows).

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (Microsoft AI official blog, BenchLM); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings. If zero verified benchmarks confirmed, save as `.md.excluded` instead. (MAI-Code-1.1-Flash has 2 verified benchmarks, so not excluded.)