# Grok 4 — findings by Beam

- Source: xAI/Grok 4, `xai/grok-4`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4
- **Short description:** xAI's flagship model (Jul 9, 2025): 256K context, multimodal (text+image). BenchLM 51.76. Non-reasoning base. Superseded by Grok 4.1/4.1 Fast/4.20/4.3/4.5/4.6/4.7.
- **Provider / access:** xAI API `grok-4`; OpenRouter; Vercel.
- **Release / knowledge:** Released 2025-07-09; knowledge cutoff not stated.
- **IDs:** `xai/grok-4`
- **Context window:** 256,000 tokens; max output not stated.
- **Modalities:** text, image in; text out; reasoning no (non-reasoning); tool calling yes; structured output yes.
- **Pricing (as of 2026-10-17):** $3.00 / 1M input, $15.00 / 1M output; paid.
- **Architecture:** proprietary; params not published.

### Raw benchmarks found

Agent / tool use:

- Agentic: not individually reported (BenchLM overall 51.76)
- τ²-bench: **74.9%**
- Gert Labs: **42.34%**
- AA-Omniscience Accuracy: **40.5%**
- AA-Omniscience Hallucination Rate: **64.5%**
- AA-IFBench: **53.7%**

Reasoning / knowledge:

- Reasoning public-lane (BenchLM): not individually reported
- MMLU-Pro: **86.6%**
- GPQA Diamond: **87.7%**
- HLE: **26.7%**
- AA Intelligence Index: **22.5%**
- AA-LCR: **68.0%**
- CritPt: **2.0%**
- ARC-AGI: not reported

Coding:

- Coding public-lane (BenchLM): not individually reported
- LiveCodeBench: **81.9%**
- AA Coding Index: not reported

Long context:

- 256K window; AA-LCR 68.0%.

Multimodal:

- Multimodal: not separately reported (text/image in).

### Normalized scores (1–100)

- **Tool use: 68/100.** τ²-bench 74.9%, Gert Labs 42.34%, AA-IFBench 53.7%; caps at no published Terminal-Bench.
- **Reasoning: 66/100.** MMLU-Pro 86.6%, GPQA 87.7%, HLE 26.7%, AA Intelligence 22.5%, AA-LCR 68.0%; caps at CritPt 2.0%.
- **Context window: 68/100.** 256K window; AA-LCR 68.0%.
- **Multimodal: 70/100.** Text/image in; caps at no verified multimodal benchmarks.
- **Coding: 66/100.** LiveCodeBench 81.9%; caps at no SWE-bench.
- **Cost efficiency: 78/100.** Mid $3/$15 per 1M.
- **Overall Score: 68/100.** Mean of five quality dims (BenchLM aggregate 51.76); best-fit for general work at mid cost (superseded by Grok 4.x).

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (xAI/BenchLM, pricepertoken, computeprices); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.