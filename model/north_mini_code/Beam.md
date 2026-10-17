# North Mini Code — findings by Beam

- Source: Cohere/North Mini Code, `cohere/north-mini-code`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** North Mini Code
- **Short description:** Cohere's open-weight MoE (Jun 9, 2026): 30B total / 3B active, 256K context. Apache 2.0. τ²-bench 37.4%, GDPval-AA 0.0%. No published SWE-bench/LiveCodeBench. Free (open weights). ECI 138.56 (#42 of 398).
- **Provider / access:** HuggingFace; Cohere API.
- **Release / knowledge:** Released 2026-06-09; knowledge cutoff Sep 23, 2025.
- **IDs:** `cohere/north-mini-code`
- **Context window:** 256,000 tokens; max output not stated.
- **Modalities:** text in; text out; reasoning yes; tool calling yes; structured output yes. Open weights (Apache 2.0).
- **Pricing (as of 2026-10-17):** Free (open weights); self-host.
- **Architecture:** MoE, 30B total / 3B active, 256K context, Apache 2.0.

### Raw benchmarks found

Agent / tool use:

- Agentic public-lane (BenchLM): not individually reported
- τ²-bench: **37.4%** (Artificial Analysis)
- GDPval-AA: **0.0%** (Artificial Analysis)
- OSWorld: not reported
- Terminal-Bench: not reported

Reasoning / knowledge:

- Reasoning public-lane (BenchLM): not individually reported
- GPQA: not reported
- HLE: not reported
- MMLU: not reported
- AA Intelligence Index: not reported

Coding:

- Coding public-lane (BenchLM): not individually reported
- SWE-bench Verified: not reported
- LiveCodeBench: not reported
- Terminal-Bench: not reported

Long context:

- 256K window; MRCR: not reported.

Multimodal:

- Text-only. Multimodal lane not applicable.

### Normalized scores (1–100)

- **Tool use: 48/100.** τ²-bench 37.4%, GDPval-AA 0.0%; caps at GDPval-AA 0.0%.
- **Reasoning: 50/100.** No verified reasoning benchmarks; provisional.
- **Context window: 64/100.** 256K window; caps at no published MRCR.
- **Multimodal: 40/100.** Text-only.
- **Coding: 50/100.** No verified coding benchmarks; provisional. DesignForOnline ranks #99 of 200 for coding.
- **Cost efficiency: 100/100.** Free (open weights).
- **Overall Score: 50.4/100.** Provisional mean; low-confidence (zero verified coding benchmarks, ECI 138.56). Self-exclusion candidate (`.md.excluded`) if zero verified benchmarks confirmed. (North Mini Code has 1 verified benchmark, so not excluded.)

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (Cohere official, BenchLM, zmime, llm-stats, aisotools, designforonline); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings. If zero verified benchmarks confirmed, save as `.md.excluded` instead. (North Mini Code has 1 verified benchmark, so not excluded.) Apache 2.0 open weights.<|end|>>2>