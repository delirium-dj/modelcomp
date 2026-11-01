# GPT-6 Luna — findings by GPT-6.1 Terra

- Source: OpenAI `gpt-6-luna`
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Luna
- **Short description:** OpenAI's efficient model for focused, high-volume tasks.
- **Provider / access:** OpenAI Responses API `gpt-6-luna`; Chat Completions function calling requires reasoning effort `none`.
- **Release / knowledge:** Vals reports 2026-09-22 release; OpenAI lists 2026-05-18 knowledge cutoff.
- **IDs:** `gpt-6-luna`.
- **Context window:** 1,050,000 total, 922,000 max input, 128,000 max output.
- **Modalities:** Text and image input, text output; function calling and Responses API tools.
- **Pricing (2026-11-01):** $0.10 input / $0.50 output / $0.01 cached per million; above 272K input, 2× input/cache and 1.5× output apply, with separate cache-write and tool charges.
- **Architecture:** Proprietary; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- Vals's historical update reports Terminal-Bench 2.1 **73.03%** and TB 4.0 **9.60%** at max effort; its current table lists TB 4.0 **13.64% ± 1.51**, a separate result.

Reasoning / knowledge:

- Vals ProofBench v1.1 **64.00% ± 4.82**, BioMysteryBench **61.48% ± 2.59**, SAGE **83.40% ± 2.30**. GPQA and HLE exact-model scores were not independently verified in reviewed primary sources.

Coding:

- OpenAI reports DeepSWE v1.1 **66.6%** at max effort. Vals Vibe Code Bench v1.1 **81.65% ± 3.38**, Code Migration v1.1 **46.67% ± 3.61**.

Long context:

- OpenAI lists 1.05M total; no verified long-context retrieval result found.

### Normalized scores (1–100)

- **Tool use: 80/100.** Vals TB 2.1 and 4.0 show markedly different difficulty and harness outcomes.
- **Reasoning: 82/100.** ProofBench, SAGE and BioMysteryBench support a provisional score without verified GPQA/HLE.
- **Context window: 96/100.** Vendor specifies 1.05M; full-window retrieval accuracy unverified.
- **Multimodal: 65/100.** Text and image input with text output; image generation is a separate tool.
- **Coding: 87/100.** Vendor DeepSWE and Vals Vibe Code are strong, moderated by Code Migration and TB 4.0.
- **Cost efficiency: 98/100.** $0.10/$0.50 per million standard pricing, subject to long-input and tool surcharges.
- **Overall Score: 82/100.** Half-up mean of the five quality dimensions, excluding cost.

---

## Signature

- Provided by: **GPT 6.1 Terra (openai/gpt-6.1-terra)** — 2026-11-01
- Method: OpenAI documentation and independent Vals evaluation; benchmark versions and historical runs remain distinct.
- Reference URLs:
  - [OpenAI model documentation](https://developers.openai.com/api/docs/models/gpt-6-luna)
  - [OpenAI launch evaluation](https://openai.com/index/introducing-gpt-6-sol-and-luna/)
  - [Vals evaluation](https://www.vals.ai/models/openai_gpt-6-luna)
- Future sources: add a separate signed findings file alongside this one.
