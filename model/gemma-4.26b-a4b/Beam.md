# Gemma 4 26B A4B — findings by Beam

- Source: Google/Gemma 4 26B A4B, `google/gemma-4-26b-a4b`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 26B A4B
- **Short description:** Google's open-weight MoE model (Mar 31, 2026): 26B total / 4B active, 256K context. BenchLM 45.64. Strong coding (LiveCodeBench v6 77.1%, MMLU Pro 82.6%, AIME 2026 88.3%).
- **Provider / access:** HuggingFace `google/gemma-4-26B-A4B`; Google AI Studio; OpenRouter.
- **Release / knowledge:** Released 2026-03-31; knowledge cutoff not stated.
- **IDs:** `google/gemma-4-26b-a4b`
- **Context window:** 256,000 tokens; max output not stated.
- **Modalities:** text, image in; text out; reasoning yes; tool calling yes. Open weights (Apache 2.0).
- **Pricing (as of 2026-10-17):** Free (open weights); self-host. ($0.13/$0.40 on OpenRouter.)
- **Architecture:** 26B total / 4B active, MoE (128 experts, 8 active + 1 shared), 30 layers, Apache 2.0.

### Raw benchmarks found

Agent / tool use:

- Agentic public-lane (BenchLM): not individually reported
- τ²-bench: not reported for 26B
- GDPval-AA: not reported

Reasoning / knowledge:

- Reasoning public-lane (BenchLM): not individually reported
- MMLU Pro: **82.6%**
- AIME 2026 (no tools): **88.3%**
- LiveCodeBench v6: **77.1%**
- AA Intelligence Index: not reported

Coding:

- Coding public-lane (BenchLM): not individually reported
- LiveCodeBench v6: **77.1%**
- AA Coding Index: not reported

Long context:

- 256K window; MRCR: not reported.

Multimodal:

- Multimodal public-lane (BenchLM): not individually reported
- MMMU-Pro: **82.6%**? (not reported for 26B; 31B has 85.2%)

### Normalized scores (1–100)

- **Tool use: 60/100.** No verified agentic benchmarks; caps pending verification.
- **Reasoning: 72/100.** MMLU Pro 82.6%, AIME 88.3%; caps at no published GPQA/HLE/ARC-AGI.
- **Context window: 72/100.** 256K window; caps at no published MRCR.
- **Multimodal: 74/100.** Text/image in; caps at no verified multimodal benchmarks (31B MMMU-Pro 85.2%).
- **Coding: 68/100.** LiveCodeBench v6 77.1%; caps at no SWE-bench.
- **Cost efficiency: 98/100.** Free (open weights).
- **Overall Score: 69.2/100.** Mean of five quality dims (BenchLM aggregate 45.64); best-fit for local coding + reasoning at zero cost.

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (Google HuggingFace, BenchLM, CloudPrice); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.<|end|><|start|>2>