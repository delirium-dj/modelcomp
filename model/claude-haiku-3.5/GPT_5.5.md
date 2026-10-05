# Claude Haiku 3.5 — findings by GPT 5.5

- Source: Anthropic (`claude-haiku-3.5`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude 3.5 Haiku
- **Short description:** Anthropic’s fast Claude 3.5 small model, originally pitched as matching or surpassing Claude 3 Opus on many benchmarks at lower cost.
- **Provider / access:** Anthropic API historically and cloud/provider routes; some trackers mark it retired/deprecated by 2026.
- **Release / knowledge:** Released in 2024; retired on some routes by February 2026.
- **IDs:** `anthropic/claude-3-5-haiku-20241022`, `claude-haiku-3.5`.
- **Context window:** **200K** tokens.
- **Modalities:** Text and image/PDF input; text output; tool use through Anthropic APIs.
- **Pricing (as of 2026-10-05):** Anthropic launch pricing **$0.80/M input** and **$4/M output**, with caching/batch discounts where available.
- **Architecture:** Proprietary Claude model.

### Raw benchmarks found

Agent / tool use:

- Anthropic says Claude 3.5 Haiku improved across every skill set and surpassed Claude 3 Opus on many intelligence benchmarks.
- Public benchmark trackers show benchmark rows, though exact current values vary and the model may be retired.

Reasoning / knowledge:

- Anthropic’s model-card addendum covers Claude 3.5 Haiku evaluations, including instruction-following benchmarks.
- Community benchmark commentary generally places reasoning below larger models and sometimes near older Haiku/mini tiers.

Coding:

- Public commentary notes coding as one of Claude 3.5 Haiku’s stronger areas relative to its tier.

Long context:

- Anthropic enterprise material states all Claude 3/3.5 models offer **200K** context.

### Normalized scores (1–100)

- **Tool use: 58/100.** Anthropic tooling support is mature, but this older Haiku tier is not agent-specialized by 2026 standards.
- **Reasoning: 58/100.** Good for a small 2024 model, but surpassed by newer budget models.
- **Context window: 76/100.** 200K context remains solid.
- **Multimodal: 66/100.** Image/PDF input is available, with no audio/video output.
- **Coding: 62/100.** Coding was comparatively strong for the tier, capped by age and missing exact row.
- **Cost efficiency: 70/100.** $0.80/$4 was competitive historically, but newer models are cheaper.
- **Overall Score: 64/100.** Half-up mean of the five quality dimensions; best fit is legacy Claude compatibility and low-latency document tasks.

---

## Signature

- Provided by: **GPT 5.5 (openai/gpt-5.5)** — 2026-10-05
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

