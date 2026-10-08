# Claude Haiku 5.5 — findings by GPT 5.5

- Source: Anthropic (`claude-haiku-5.5`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Haiku 5.5
- **Short description:** Anthropic's cheapest and fastest Claude 5.5-family model, with adaptive thinking, long context, and strong small-model coding/workflow positioning.
- **Provider / access:** Anthropic Claude Platform and supported IDE/router providers.
- **Release / knowledge:** Announced October 2026; Anthropic docs report a June 2026 knowledge cutoff in public summaries.
- **IDs:** `claude-haiku-5-5`, `claude-haiku-5.5`.
- **Context window:** **1M** context; max output **128K**.
- **Modalities:** Text and image input; text output; adaptive thinking/effort settings.
- **Pricing (as of 2026-10-08):** Short-context tier up to 100K input reported around **$0.10/M input** and **$0.50/M output**; long-context tier above 100K around **$0.50/M input** and **$2.50/M output**.
- **Architecture:** Proprietary Claude small model.

### Raw benchmarks found

Agent / tool use:

- Anthropic launch page reports Haiku 5.5 benchmark gains and positions it as a high-volume worker model.
- Cursor docs report **48.4% on CursorBench at max effort**.

Reasoning / knowledge:

- Anthropic and third-party summaries report Haiku 5.5 ahead of GPT-6 Luna on overlapping launch benchmarks, with caveats pending independent tests.

Coding:

- CursorBench **48.4%** at max effort; coding is a core positioning area.

Long context:

- Anthropic docs and third-party summaries report **1M** context and **128K** output.

### Normalized scores (1–100)

- **Tool use: 78/100.** Claude tool ecosystem plus high-volume worker positioning support strong tool credit.
- **Reasoning: 76/100.** Strong for a small model, pending broader independent validation.
- **Context window: 96/100.** 1M context earns near-top credit.
- **Multimodal: 70/100.** Image input is supported.
- **Coding: 78/100.** CursorBench and Claude coding stack support high small-model coding.
- **Cost efficiency: 90/100.** Short-context pricing is excellent, with a caveat for >100K long-context upcharge.
- **Overall Score: 80/100.** Half-up mean of the five quality dimensions; best fit is fast Claude-compatible worker tasks.

---

## Signature

- Provided by: **GPT 5.5 (openai/gpt-5.5)** — 2026-10-08
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

