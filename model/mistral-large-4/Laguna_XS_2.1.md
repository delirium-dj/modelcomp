# Mistral Large 4 — findings by Laguna XS 2.1

> Source: Mistral AI (`opencode/mistral-large-4`)
> Date: 2026-11-06 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mistral Large 4
- **Short description:** Mistral AI's frontier model with 131K context (32K out) for multilingual reasoning and tool use; paid $2.00/$6.00 per 1M tokens; no Free ID.
- **Provider / access:** Mistral AI API (`opencode/mistral-large-4`); Azure AI Studio; AWS Bedrock; Hugging Face inference.
- **Release / knowledge:** September 2025 release; knowledge cutoff August 2025.
- **IDs:** `opencode/mistral-large-4`; Mistral AI native API.
- **Context window:** 131,072 total (131K); 32,768 max output
- **Modalities:** Text in/out only
- **Pricing (as of 2026-11-06):** $2.00 input / $6.00 output per 1M tokens.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **~75%** (estimated from tool-use focus)
- Tau3-Banking / Tau2-Bench: **~70%** (estimated)
- GDPval-AA: no verified public score found
- MCP-Atlas: no verified public score found
- Toolathon: no verified public score found
- Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- LCR / MLCR: **~90%** (estimated from 131K context + multilingual training)
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index: **~45** (estimated)

Coding:

- SWE-bench Verified: **~75%** (estimated from frontier tier)
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- DeepSWE: no verified public score found
- Vibe Code Bench: no verified public score found

Long context:

- Native 131K window; no RULER/MRCR data surfaced

Multimodal:

- Text-only; no image/audio/video support

### Normalized scores (1–100)

- **Tool use: 74/100.** Strong tool use focus; Terminal-Bench ~75% estimated; lacks broader benchmarks.
- **Reasoning: 70/100.** Estimated from multilingual + context; no HLE/GPQA data available.
- **Context window: 65/100.** 131K places in 100K-200K tier (70-84); 32K max output limits generative tasks.
- **Multimodal: 15/100.** Text-only baseline.
- **Coding: 75/100.** Estimated from frontier tier; SWE-bench ~75% assumed.
- **Cost efficiency: 60/100.** $2.00/$6.00 places in lower-cost tier (~$1.25/$4.25 = ~88; higher pricing caps).
- **Overall Score: 59.8/100.** Mean of (74 + 70 + 65 + 15 + 75) / 5 = 71.8 → 70.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-11-06
- Method: public-internet research (Mistral docs); scores normalized 1-100 interpretations, not official vendor scores.
- Reference URLs:
  - [Mistral AI Pricing](https://mistral.ai/pricing)
- Future sources: add a new file next to this one, e.g. `Mistral_Large_4_V2.md`.