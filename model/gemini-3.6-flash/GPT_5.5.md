# Gemini 3.6 Flash — findings by GPT 5.5

- Source: Google/Gemini 3.6 Flash
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.6 Flash
- **Short description:** Gemini 3.6 Flash is a Google Flash model for multimodal, long-context, coding, and agentic workloads.
- **Provider / access:** Google AI Studio / Gemini API and hosted routes.
- **Release / knowledge:** Public model card published about two months before 2026-10-05.
- **IDs:** `google/gemini-3.6-flash`
- **Context window:** Public providers list about 1.05M input and 65.5K output.
- **Modalities:** Text, image, audio, and PDF input; text output per Gemini Flash family metadata.
- **Pricing (as of 2026-10-05):** Current observed route pricing around $0.375/M input and $1.88/M output on batch routes; original standard pricing listed around $1.50/$7.50.
- **Architecture:** Proprietary Gemini model.

### Raw benchmarks found

Agent / tool use:

- Google DeepMind model card: Gemini 3.6 Flash was evaluated across reasoning, coding, agentic, multimodal, and long-context benchmarks (`https://deepmind.google/models/model-cards/gemini-3-6-flash/`).
- Reddit Artificial Analysis discussion: reports Intelligence Index around **50** for Gemini 3.6 Flash High (`https://www.reddit.com/r/singularity/comments/1v2l6sm/gemini_36_flash_benchmarks/`).
- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**

Reasoning / knowledge:

- Google model card includes reasoning evaluation, but accessible text did not expose exact GPQA/HLE rows.
- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- Intelligence Index: **about 50** community-reported from AA.

Coding:

- Toolprism and Google model card both track Gemini 3.6 Flash benchmark results, but exact public rows were not visible in accessible snippets.
- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**

Long context:

- Public pricing/provider trackers list 1.05M context and 65.5K output; no independent retrieval score found.

### Normalized scores (1–100)

- **Tool use: 85/100.** Official agentic evaluation coverage and strong Flash positioning support a high score, capped by missing Terminal-Bench rows.
- **Reasoning: 83/100.** Good Flash-class reasoning, below 3.7/3.8 Flash and Pro models.
- **Context window: 90/100.** 1.05M context is excellent.
- **Multimodal: 86/100.** Broad input modalities are strong, though output remains text.
- **Coding: 84/100.** Coding evaluation coverage is strong for Flash tier, but exact SWE/LCB rows were not found.
- **Cost efficiency: 90/100.** Current promotional/batch pricing makes it very efficient.
- **Overall Score: 86/100.** Mean of the five quality dimensions; best fit is inexpensive large-context Gemini workflows.

---

## Signature

- Provided by: **GPT 5.5 (openai/gpt-5.5)** — 2026-10-05
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
