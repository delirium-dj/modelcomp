# Claude Sonnet 3.5 — findings by GPT 5.5

- Source: Anthropic (`claude-sonnet-3.5`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude 3.5 Sonnet
- **Short description:** Anthropic’s influential Claude 3.5 model, widely used for coding, writing, artifacts, and practical agent workflows before Claude 3.7/4.x.
- **Provider / access:** Anthropic API historically, Claude app, Bedrock/Vertex routes; some routes may now be legacy.
- **Release / knowledge:** Released June 2024 with upgraded variants later in 2024; cutoff not verified.
- **IDs:** `anthropic/claude-3-5-sonnet`, `claude-sonnet-3.5`.
- **Context window:** **200K** tokens on API routes.
- **Modalities:** Text and image/PDF input; text output; tool use and Artifacts/Claude app integrations.
- **Pricing (as of 2026-10-05):** Historically **$3/M input** and **$15/M output**.
- **Architecture:** Proprietary Claude model.

### Raw benchmarks found

Agent / tool use:

- Claude 3.5 Sonnet introduced Artifacts and strong coding/productivity workflows; public references cite Anthropic official benchmark figures.
- Exact current tool-benchmark rows were not recovered in snippets.

Reasoning / knowledge:

- Anthropic described Claude 3.5 Sonnet as its most intelligent model at release, outperforming earlier Claude 3 Opus on many benchmarks.
- Later model-card documents include Claude 3.5 Sonnet as a baseline against newer Anthropic models.

Coding:

- Anthropic’s Claude 3 family comparison snippet lists Claude 3.5 Sonnet (New) at **52** in a coding win-rate chart, above Claude 3.5 Haiku **45**, old Sonnet **50**, Claude 3 Opus **39**, Sonnet **33**, and Haiku **36**.
- Public real-world commentary consistently identifies coding as a major strength.

Long context:

- API context: **200K**.

### Normalized scores (1–100)

- **Tool use: 68/100.** Strong practical tool/workflow support, though not current frontier.
- **Reasoning: 70/100.** Excellent at release but surpassed by later Claude generations.
- **Context window: 76/100.** 200K context is solid.
- **Multimodal: 68/100.** Image/PDF input is supported, no native audio/video.
- **Coding: 76/100.** Coding was a standout strength and benchmark chart supports it.
- **Cost efficiency: 62/100.** $3/$15 is expensive for a legacy model by 2026.
- **Overall Score: 72/100.** Half-up mean of the five quality dimensions; best fit is legacy Claude workflows where behavior compatibility matters.

---

## Signature

- Provided by: **GPT 5.5 (openai/gpt-5.5)** — 2026-10-05
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

