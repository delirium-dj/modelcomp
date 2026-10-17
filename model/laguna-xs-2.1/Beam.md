# Laguna XS 2.1 — findings by Beam

- Source: Poolside/Laguna XS 2.1, `poolside/laguna-xs-2.1`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Laguna XS 2.1
- **Short description:** Poolside's open-weight MoE (Jul 2, 2026): 33B total / 3B active, 256K context. Terminal-Bench 2.1 33.4%. SWE-bench Multilingual 63.1%. LiveCodeBench 66.6%. Open weights (Apache 2.0). Free.
- **Provider / access:** HuggingFace `poolside/Laguna-XS-2.1`; Poolside API; OpenRouter.
- **Release / knowledge:** Released 2026-07-02; knowledge cutoff not stated.
- **IDs:** `poolside/laguna-xs-2.1`
- **Context window:** 256,000 tokens; max output not stated.
- **Modalities:** text in; text out; reasoning yes; tool calling yes. Open weights (Apache 2.0).
- **Pricing (as of 2026-10-17):** Free (open weights); self-host.
- **Architecture:** MoE, 33B total / 3B active, 256K context, Apache 2.0. Trained in under 5 weeks.

### Raw benchmarks found

Agent / tool use:

- Agentic public-lane (BenchLM): not individually reported
- Terminal-Bench 2.0: **33.4%** (BenchLM, Laguna XS 2.1)
- Terminal-Bench 2.1: **33.4%** (Poolside official) / **25.8%** (Vals AI, XS.2)
- Toolathlon-Verified: not reported for XS 2.1

Reasoning / knowledge:

- Reasoning public-lane (BenchLM): not individually reported
- GPQA Diamond: **58.1%** (BenchmarkList, XS.2)
- MMLU Pro: **69.4%** (BenchmarkList, XS.2)
- HLE: not reported
- AA Intelligence Index: not reported

Coding:

- Coding public-lane (BenchLM): not individually reported
- SWE-bench Verified: **55.2%** (BenchmarkList, XS.2)
- SWE-bench Multilingual: **63.1%** (Poolside official, XS 2.1)
- LiveCodeBench: **66.6%** (BenchmarkList, XS.2)
- Terminal-Bench 2.0: **28.1%** (BenchmarkList, XS.2)
- Terminal-Bench 2.1: **25.8%** (Vals AI, XS.2) / **33.4%** (Poolside official, XS 2.1)
- Vibe Code Bench v1.1: **5.2%** (BenchmarkList, XS.2)

Long context:

- 256K window; MRCR: not reported.

Multimodal:

- Text-only. Multimodal lane not applicable.

### Normalized scores (1–100)

- **Tool use: 50/100.** Terminal-Bench 2.0 33.4%, Terminal-Bench 2.1 25.8%/33.4%; caps at no published OSWorld/τ²-bench.
- **Reasoning: 56/100.** GPQA 58.1%, MMLU Pro 69.4%; caps at no published HLE/AA Intelligence.
- **Context window: 64/100.** 256K window; caps at no published MRCR.
- **Multimodal: 40/100.** Text-only.
- **Coding: 56/100.** SWE-bench 55.2%, SWE-bench Multilingual 63.1%, LiveCodeBench 66.6%, Terminal-Bench 2.0 28.1%, Vibe Code 5.2%; caps at Vibe Code 5.2%.
- **Cost efficiency: 100/100.** Free (open weights).
- **Overall Score: 53.2/100.** Mean of five quality dims (BenchLM not computed); best-fit for local coding at zero cost. Low-confidence (XS.2 benchmarks, XS 2.1 may differ).

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (Poolside official blog, BenchLM, BenchmarkList, HuggingFace); scores are normalized 1–100 interpretations, not official vendor scores. XS 2.1 benchmarks are mostly from XS.2; XS 2.1 improves on SWE-bench Multilingual (+5.4 points to 63.1%).
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings. Laguna XS 2.1 is superseded by Laguna S 2.1 (Jul 21, 2026). Apache 2.0 open weights.<|end|>>2>