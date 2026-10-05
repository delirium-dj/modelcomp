# GPT-5.4 Nano — findings by GPT 5.5

- Source: OpenAI (`gpt-5.4-nano`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 Nano
- **Short description:** OpenAI’s fastest, lowest-cost GPT-5.4-family model for classification, extraction, ranking, and sub-agent workloads.
- **Provider / access:** OpenAI API, ChatGPT/Go/Free small-model routes, and compatible providers.
- **Release / knowledge:** OpenAI released GPT-5.4 mini and nano on **2026-03-17**; cutoff not verified.
- **IDs:** `openai/gpt-5.4-nano`, `gpt-5.4-nano`.
- **Context window:** **400K** tokens.
- **Modalities:** Public OpenAI listing describes it for text-heavy small tasks; multimodal input may vary by route, not fully verified.
- **Pricing (as of 2026-10-05):** Public listings report **$0.20/M input**, **$0.02/M cached input**, **$1.25/M output**; some routes discount output to **$0.625/M**.
- **Architecture:** Proprietary OpenAI small model.

### Raw benchmarks found

Agent / tool use:

- OpenAI model page positions Nano for sub-agents, ranking, classification, and data extraction.
- No exact public Toolathlon/Tau score recovered.

Reasoning / knowledge:

- ModelScale reports GPT-5.4 Nano overall score **51.46** with 400K context and current price observation.

Coding:

- Public coverage describes GPT-5.4 mini/nano as surprisingly capable small models, but no exact coding row was recovered for Nano.

Long context:

- OpenAI developer listing reports **400K** context.

### Normalized scores (1–100)

- **Tool use: 60/100.** Sub-agent/extraction positioning is strong, but exact tool scores are absent.
- **Reasoning: 62/100.** ModelScale 51.46 overall supports capable small-model reasoning.
- **Context window: 84/100.** 400K context is strong for a nano model.
- **Multimodal: 45/100.** Multimodal route support was not fully verified; score gives limited OpenAI-family credit.
- **Coding: 58/100.** Likely useful for small coding sub-tasks, but no exact coding row was found.
- **Cost efficiency: 88/100.** $0.20/$1.25 is strong for OpenAI reliability.
- **Overall Score: 62/100.** Half-up mean of the five quality dimensions; best fit is high-volume extraction, routing, and sub-agent work.

---

## Signature

- Provided by: **GPT 5.5 (openai/gpt-5.5)** — 2026-10-05
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

