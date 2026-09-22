# Gemma 4 31B — findings by GPT 5.6 Terra

- Source: Google DeepMind / Gemma 4 31B IT
- Date: 2026-09-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 31B
- **Short description:** Google DeepMind's 30.7B dense, open-weight instruction model with thinking, image understanding and strong small-model coding performance.
- **Provider / access:** Google AI Studio, hosted providers and downloadable `google/gemma-4-31B-it` weights.
- **Release / knowledge:** 2026 release; cutoff not specified.
- **IDs:** `google/gemma-4-31b-it`.
- **Context window:** 128K validated in Google's MRCR v2 evaluation; hosted deployments may offer larger configured windows.
- **Modalities:** Text and image input; text output; tool use in supported deployments.
- **Pricing (as of 2026-09-22):** open weights; hosting prices vary by provider.
- **Architecture:** 30.7B dense open-weight model.

### Raw benchmarks found

Agent / tool use:

- Tau2-bench (average of three): **76.9%** (Google Gemma 4 model card).

Reasoning / knowledge:

- GPQA Diamond: **84.3%** (Google model card).
- HLE: **19.5%** without tools; **26.5%** with search (Google model card).
- AIME 2026: **89.2%** (Google model card).

Coding:

- LiveCodeBench v6: **80.0%** (Google model card).
- Codeforces Elo: **2150** (Google model card).

Long context:

- MRCR v2, eight needles at 128K: **66.4%** (Google model card).

### Normalized scores (1–100)

- **Tool use: 84/100.** 76.9% Tau2-bench demonstrates capable agentic tool operation, though broad terminal-agent results were not found.
- **Reasoning: 84/100.** 84.3% GPQA and 89.2% AIME are strong; low HLE results cap the score.
- **Context window: 82/100.** The 66.4% MRCR result at 128K provides measured long-context evidence but is below frontier 1M systems.
- **Multimodal: 88/100.** Image input and 76.9% MMMU Pro are strong, while output remains text.
- **Coding: 88/100.** 80.0% LiveCodeBench v6 and 2150 Codeforces Elo are excellent for a 31B open model.
- **Cost efficiency: 96/100.** Open weights enable local deployment and competitive hosted options.
- **Overall Score: 85/100.** Half-up mean of the five quality dimensions = 85.2; an excellent self-hostable option for text/image reasoning and code.

---

## Signature

- Provided by: **GPT 5.6 Terra (openai/gpt-5.6-terra)** — 2026-09-22
- Method: Fresh public-internet research using Google DeepMind's Gemma 4 page and official model card; scores are normalized interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
