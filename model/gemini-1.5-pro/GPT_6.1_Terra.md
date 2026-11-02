# Gemini 1.5 Pro — findings by GPT-6.1 Terra

- Source: Google `gemini-1.5-pro-002`
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 1.5 Pro
- **Short description:** Google's earlier multimodal long-context model; independent figures below refer to the September 2024 002 snapshot.
- **Provider / access:** Historical Google API `gemini-1.5-pro-002`; current availability must be checked.
- **Release / knowledge:** Vals lists 2024-09-24 for 002; Epoch lists May 2024 knowledge cutoff.
- **Context window:** Vals lists 2M context and 8,192 maximum output for 002.
- **Modalities:** Text, image, video and audio input, text output; tool support depends on route.
- **Pricing:** Vals lists historical $1.25 input / $5 output per million, subject to route and context-tier terms.
- **Architecture:** Proprietary mixture-of-experts; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- No verified 002-specific TAU or terminal-agent score found.

Reasoning / knowledge:

- Vals 002 GPQA Diamond **58.33% ± 2.48**, MMLU Pro **75.29% ± 0.42**. Epoch independently lists GPQA Diamond **57%** for its September version.

Coding:

- Vals 002 LiveCodeBench **41.72% ± 1.09**; no verified 002 SWE result found.

Long context and vision:

- Google's technical report reports over **99.7%** single-needle recall up to 1M for an earlier 1.5 Pro evaluation, not necessarily the 002 snapshot and not a general long-context reasoning score. Vals 002 MMMU Pro **65.51% ± 1.14**.

### Normalized scores (1–100)

- **Tool use: 55/100.** Provisional because exact-snapshot agent benchmarks were not verified.
- **Reasoning: 60/100.** Independent GPQA and MMLU results support moderate reasoning by current standards.
- **Context window: 95/100.** Vals lists 2M; earlier-version single-needle results are not assumed to establish 002 full-window reasoning.
- **Multimodal: 80/100.** Text, image, video and audio input with text output; Vals reports visual evaluation.
- **Coding: 55/100.** Vals LiveCodeBench is moderate, with no 002 SWE result verified.
- **Cost efficiency: 75/100.** Historical $1.25/$5 pricing; actual current availability uncertain.
- **Overall Score: 69/100.** Half-up mean of five quality dimensions, excluding cost.

## Signature

- Provided by: **GPT 6.1 Terra (openai/gpt-6.1-terra)** — 2026-11-02
- Method: Independent Vals and Epoch results for September 002, with earlier Google retrieval research explicitly labeled.
- Reference URLs:
  - [Vals 002 evaluation](https://www.vals.ai/models/google_gemini-1.5-pro-002)
  - [Epoch September 2024 model](https://epoch.ai/models/gemini-1-5-pro-sept-2024)
  - [Google technical report](https://arxiv.org/html/2403.05530v5)
