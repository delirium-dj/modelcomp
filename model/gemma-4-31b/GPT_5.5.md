# Gemma 4 31B — findings by GPT 5.5

- Source: Google (`gemma-4-31b`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 31B
- **Short description:** Google's open-weight 31B-parameter Gemma 4 model, aimed at efficient local and hosted inference with strong small-frontier benchmark performance.
- **Provider / access:** Google/open weights and local/third-party serving stacks.
- **Release / knowledge:** Gemma 4 technical report published 2026-07; exact cutoff not stated.
- **IDs:** `google/gemma-4-31b`, `gemma-4-31b-it` for instruction-tuned variants.
- **Context window:** Public Gemma summaries conflict: many Gemma 4 models are listed at 128K, while Wikipedia-style summary says the 31B variant has **32K**; local experiments report longer engineered contexts. Conservative verified context: **32K-128K depending on variant/implementation**.
- **Modalities:** Public papers describe Gemma 4 as including dense and MoE architectures; 31B instruction model is primarily text/code. Some research calls Gemma 4 31B multimodal, but exact official modality matrix was not fully verified.
- **Pricing (as of 2026-10-05):** Open weights; self-hosting cost depends on hardware. No canonical API list price.
- **Architecture:** 31B-parameter open-weight Gemma 4 model; technical report covers dense and MoE suite.

### Raw benchmarks found

Agent / tool use:

- No verified exact tool-use benchmark found for Gemma 4 31B.

Reasoning / knowledge:

- Public Gemma 4 benchmark summary reports Gemma 4 31B instruction scores including **85.2%**, **84.3%**, **80.0%**, and **89.2%** across selected official model-card benchmarks.
- Course/public note lists **MMLU Pro 85.2** for Gemma 4 31B.

Coding:

- Community blind eval versus Qwen3.5-27B reports the code category tied, but no exact standard SWE-bench/LiveCodeBench score was verified.

Long context:

- Local reports test 256K engineered contexts, but official/public summaries vary; conservative score uses 32K-128K evidence.

### Normalized scores (1–100)

- **Tool use: 40/100.** No exact tool benchmark was found, and local open-weight serving requires external scaffolding.
- **Reasoning: 72/100.** MMLU Pro 85.2 and official benchmark summaries support strong open-model reasoning.
- **Context window: 60/100.** Context evidence is mixed and likely below 1M-class models for the canonical 31B entry.
- **Multimodal: 35/100.** Some research mentions multimodal use, but the exact 31B instruction modality surface was not fully verified.
- **Coding: 58/100.** Community coding comparisons are positive, but no standard coding score was verified.
- **Cost efficiency: 86/100.** Open weights and 31B size make it attractive for local/controlled deployment, despite hardware requirements.
- **Overall Score: 53/100.** Half-up mean of the five quality dimensions; best fit is open-weight local reasoning where controllability matters.

---

## Signature

- Provided by: **GPT 5.5 (openai/gpt-5.5)** — 2026-10-05
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

