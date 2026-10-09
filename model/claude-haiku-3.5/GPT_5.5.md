# Claude Haiku 3.5 — findings by GPT 5.5

- Source: Anthropic (`claude-haiku-3.5`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude 3.5 Haiku
- **Short description:** Anthropic’s fast Claude 3.5 small model, originally pitched as matching or surpassing Claude 3 Opus on many benchmarks at lower cost.
- **Provider / access:** Anthropic API historically and cloud/provider routes; some trackers mark it retired/deprecated by 2026.
- **Release / knowledge:** Released 2024-10-22; knowledge cutoff July 2024; retired from Anthropic-operated API routes on **2026-02-19** in current trackers.
- **IDs:** `anthropic/claude-3-5-haiku-20241022`, `claude-haiku-3.5`.
- **Context window:** **200K** tokens.
- **Modalities:** Text and image/PDF input; text output; tool use through Anthropic APIs.
- **Pricing (as of 2026-10-09):** Historical/legacy pricing **$0.80/M input** and **$4/M output**, with caching/batch discounts where available; Anthropic list-price PDF still shows Bedrock standard and batch variants.
- **Architecture:** Proprietary Claude model.

### Raw benchmarks found

Agent / tool use:

- Anthropic says Claude 3.5 Haiku improved across every skill set and surpassed Claude 3 Opus on many intelligence benchmarks.
- ModelPriceWatch reports a benchmark average of **78.8** and marks it retired from the tracked Anthropic endpoint.

Reasoning / knowledge:

- Anthropic’s model-card addendum covers Claude 3.5 Haiku evaluations, including instruction-following benchmarks.
- Current migration guidance generally points users to Claude Haiku 4.5 or newer.

Coding:

- Public commentary notes coding as one of Claude 3.5 Haiku’s stronger areas relative to its tier.

Long context:

- Anthropic enterprise material states all Claude 3/3.5 models offer **200K** context.

### Normalized scores (1–100)

- **Tool use: 56/100.** Anthropic tooling support was mature historically, but retired status and older capability reduce production tool confidence.
- **Reasoning: 58/100.** Good for a small 2024 model, but surpassed by newer budget models.
- **Context window: 76/100.** 200K context remains solid.
- **Multimodal: 66/100.** Image/PDF input is available, with no audio/video output.
- **Coding: 60/100.** Coding was comparatively strong for the tier, capped by age and missing exact row.
- **Cost efficiency: 70/100.** $0.80/$4 was competitive historically, but newer models are cheaper.
- **Overall Score: 63/100.** Half-up mean of the five quality dimensions; best fit is legacy Claude compatibility and low-latency document tasks.

---

## Signature

- Provided by: **GPT 5.5 (openai/gpt-5.5)** — 2026-10-09
- Method: refreshed public internet research and comparison against the 2026-10-05 file; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
