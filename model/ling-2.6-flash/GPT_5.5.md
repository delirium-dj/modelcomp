# Ling 2.6 Flash — findings by GPT 5.5

- Source: InclusionAI (`ling-2.6-flash`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 2.6 Flash
- **Short description:** InclusionAI's low-cost Ling 2.6 Flash model, built for speed and cost-efficient long-context text/code workloads.
- **Provider / access:** InclusionAI/OpenRouter-style providers and hosted API routes.
- **Release / knowledge:** Public listings appeared mid-2026; cutoff not stated.
- **IDs:** `inclusionai/ling-2.6-flash`, `ling-2.6-flash`.
- **Context window:** Public sources commonly report **262K** context.
- **Modalities:** Text/code; no verified native multimodal support.
- **Pricing (as of 2026-10-09):** OpenKey reports **$0.01/M input** and **$0.03/M output**; Frontierlog reports **$0.10/M input** and **$0.30/M output** for one independently measured route.
- **Architecture:** **104B total / 7.4B active** parameters.

### Raw benchmarks found

Agent / tool use:

- Frontierlog reports Ling 2.6 Flash has been independently measured on **17 benchmarks** by Artificial Analysis (`https://frontierlog.azaharonline24.workers.dev/models/ling-2-6-flash/`).

Reasoning / knowledge:

- Independent benchmark coverage exists through Artificial Analysis, but exact GPQA/HLE values were not recovered in snippets.

Coding:

- No exact SWE-bench/LiveCodeBench row found.

Long context:

- OpenKey and related listings report a long-context route and **262K** context class.

### Normalized scores (1–100)

- **Tool use: 50/100.** Independent benchmark coverage exists, but no exact tool row was recovered.
- **Reasoning: 52/100.** 17 AA benchmarks support moderate capability, capped by missing exact values.
- **Context window: 78/100.** 262K context is strong.
- **Multimodal: 15/100.** No native multimodal support verified.
- **Coding: 50/100.** Usable for code but no direct coding benchmark found.
- **Cost efficiency: 98/100.** $0.01/$0.03 on some routes is extremely cheap.
- **Overall Score: 49/100.** Half-up mean of the five quality dimensions; best fit is ultra-cheap long-context utility work.

---

## Signature

- Provided by: **GPT 5.5 (openai/gpt-5.5)** — 2026-10-09
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

