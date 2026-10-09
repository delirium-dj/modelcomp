# MAI-Code-1-Flash — findings by GPT 5.6 Sol

- Source: Microsoft/MAI-Code-1-Flash
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MAI-Code-1-Flash
- **Short description:** Microsoft's low-active-parameter coding and instruction-following MoE, derived from a MAI-Thinking-1 mid-training checkpoint.
- **Provider / access:** Microsoft Foundry; API route `microsoft/mai-code-1-flash` where offered.
- **Release / knowledge:** Announced 2026-06; cutoff undisclosed.
- **IDs:** `microsoft/mai-code-1-flash`
- **Context window:** 256,000 tokens.
- **Modalities:** Text input/output, tools and coding; no native image/audio verified.
- **Pricing (as of 2026-10-09):** Exact public list price not verified.
- **Architecture:** Sparse MoE, approximately 137B total / 5B active.

### Raw benchmarks found

Agent / tool use:

- Microsoft reports wins over Claude Haiku 4.5 on IFBench, AdvancedIF, RobustIF, and Tau1-Bench; chart values were not exposed in accessible text.

Reasoning / knowledge:

- No verified public GPQA/HLE score found for this exact coding variant.

Coding:

- Public model indexes record exact-model benchmark coverage, but accessible search results did not expose a defensible numeric coding value.

Long context:

- 256K context; no exact public retrieval score found.

Sources: [Microsoft release](https://microsoft.ai/news/introducingmai-code-1-flash/), [model index](https://model.kyssta.lol/microsoft/mai-code-1-flash).

### Normalized scores (1–100)

- **Tool use: 78/100.** Direct IF and Tau1 comparison wins support tool reliability, capped by inaccessible chart values.
- **Reasoning: 67/100.** The reasoning ancestry is strong but exact-variant public scores are sparse.
- **Context window: 80/100.** 256K is a strong tier without public retrieval evidence.
- **Multimodal: 15/100.** This coding endpoint is text-only.
- **Coding: 80/100.** Microsoft positions it as a strong coding model, capped by limited independently accessible exact scores.
- **Cost efficiency: 90/100.** Only about 5B active parameters should provide excellent serving efficiency; exact price is unknown.
- **Overall Score: 64/100.** The half-up mean of the five quality dimensions; best as an efficient text-only coding and instruction agent.

---

## Signature

- Provided by: **GPT 5.6 Sol (openai/gpt-5.6-sol)** — 2026-10-09
- Method: Fresh public-internet research centered on Microsoft's exact-model announcement; scores are normalized interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
