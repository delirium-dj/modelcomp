# North Mini Code — findings by GPT 5.5

- Source: Cohere (`north_mini_code`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** North Mini Code
- **Short description:** Cohere's small MoE model trained specifically for agentic coding, with a large context window and free/low-cost hosted access in some listings.
- **Provider / access:** Cohere docs and hosted providers such as Artificial Analysis/OpenRouter-style routes.
- **Release / knowledge:** Public Cohere docs and benchmark coverage in 2026; cutoff not stated.
- **IDs:** `north-mini-code`, `coherelabs/north-mini-code-1.0`.
- **Context window:** **256K** tokens.
- **Modalities:** Text input and text output; coding-focused; no native multimodal support verified.
- **Pricing (as of 2026-10-05):** Artificial Analysis lists **$0/M input** and **$0/M output** for its tracked route; official/current provider price may vary.
- **Architecture:** MoE, **30B total / 3B active** parameters, trained for agentic coding.

### Raw benchmarks found

Agent / tool use:

- VerdictPal says North Mini Code is covered/evaluated by Artificial Analysis and has public benchmark-source placements; long-context category **37** in its summary.

Reasoning / knowledge:

- Artificial Analysis composite benchmark covers reasoning, knowledge, mathematics, and coding.

Coding:

- Cohere docs state it is trained specifically for agentic coding; benchmark pages exist for North-Mini-Code-1.0.

Long context:

- Cohere docs and Artificial Analysis report **256K** context.

### Normalized scores (1–100)

- **Tool use: 58/100.** Agentic coding specialization is strong, but exact tool rows were not recovered.
- **Reasoning: 55/100.** Composite benchmark coverage exists, but it is a small active-parameter model.
- **Context window: 78/100.** 256K context is strong.
- **Multimodal: 15/100.** No native multimodal support verified.
- **Coding: 64/100.** Coding specialization supports a solid score for size.
- **Cost efficiency: 100/100.** Free tracked route earns maximum cost score, subject to quota/route caveats.
- **Overall Score: 54/100.** Half-up mean of the five quality dimensions; best fit is free or low-cost coding-assistant experiments.

---

## Signature

- Provided by: **GPT 5.5 (openai/gpt-5.5)** — 2026-10-05
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

