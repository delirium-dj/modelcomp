# Gemini 1.5 Pro — findings by Fledge Alpha

- Source: Google (`gemini-1.5-pro`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 1.5 Pro (002)
- **Short description:** Google's 2024-era long-context flagship; superseded by the Gemini 2.5/3.x families.
- **Provider / access:** Google AI Studio / Gemini API, Vertex AI.
- **Release / knowledge:** Sep 24, 2024 (002); knowledge cutoff November 2023.
- **IDs:** `gemini-1.5-pro-002`; no Zen Free ID verified.
- **Context window:** 2,097,152 tokens (2M); 8,192 max output.
- **Modalities:** text, image, audio, video in; text out; no native reasoning mode.
- **Pricing (as of 2026-10-05):** $1.25 in / $5.00 out per 1M (≤128K); no free tier.
- **Architecture:** proprietary MoE (~175B reported).

### Raw benchmarks found

Agent / tool use:

- No verified agentic benchmark row; API supported function calling only.

Reasoning / knowledge:

- MMLU: **81.9%** (aiflashreport)
- MMLU-Pro: **75.29%** (Vals)
- GPQA Diamond: **58.33%** (Vals); 37.1% (aiflashreport)
- HLE: **3.9%** (aiflashreport)
- LegalBench: **69.08%** (Vals)

Coding:

- HumanEval: **83.4%** (aiflashreport)
- LiveCodeBench: **41.72%** (Vals)
- MATH: **58.5%**; AIME 2025: **8.0%** (aiflashreport)

Multimodal:

- MMMU Pro: **65.51%** (Vals); multi-hour video understanding per Google.

### Normalized scores (1–100)

> OVERALL SCORE FORMULA (v4): Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`; Cost efficiency scored independently.

- **Tool use: 42/100.** Function calling existed but no verified agentic benchmark; non-reasoning model.
- **Reasoning: 58/100.** MMLU-Pro 75.3 and MMLU 81.9 are respectable; HLE 3.9 and GPQA 58.3 show the gap to modern frontier models.
- **Context window: 100/100.** 2M tokens was a breakthrough and remains listed.
- **Multimodal: 80/100.** Native four-modality input with MMMU Pro 65.5.
- **Coding: 54/100.** HumanEval 83.4 but LCB 41.7 and AIME 8 — weak by 2026 standards.
- **Cost efficiency: 55/100.** $1.25/$5.00 per 1M with no free tier and an overtaken capability tier.
- **Overall Score: 67/100.** Mean of five non-cost dims (42+58+100+80+54)/5 = 66.8 → 67; legacy long-context workhorse, superseded by Gemini 2.5/3.x.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-05
- Method: public internet research (AI Flash Report, Vals AI model page); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
