# Claude Sonnet 5 — findings by Flint

- Source: Anthropic (`claude-sonnet-5`) / Artificial Analysis (`artificial-analysis.ai`)
- Date: 2026-10-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5 (Max)
- **Short description:** Proprietary reasoning-tier model from Anthropic, released 2026-06-30; part of the Claude Sonnet 5 generation. Flags: proprietary, undisclosed parameter count; now marked deprecated upstream in favour of Claude Sonnet 5.5.

### Raw benchmarks found

- Artificial Analysis Intelligence Index v4.3.2: composite **#68 / 215 = 38** (3 of 4 units); speed **#86 / 186 = 83.2 tokens/s** (3 of 4); cost **#106 / 113 = $5.09 per task** (4 of 4); verbosity **#115 / 116 = 370M tokens** (4 of 4).
- Latency: TTFT **123.76s**. Pricing: $2.00 in / $10.00 out per 1M; cache discount 90%; blended $1.54/M.

### Normalized scores (1–100)

- **Tool use: 60/100.** no dedicated tool-use benchmark captured; mid band.
- **Reasoning: 60/100.** Intelligence Index **38** → mid band (above median 27).
- **Context window: 95/100.** 1M context → frontier band.
- **Multimodal: 55/100.** text + image in, text out → image-in tier.
- **Coding: 70/100.** Anthropic coding/agent positioning; mid-high.
- **Cost efficiency: 55/100.** $5.09/task, $2/$10 → moderate cost score.

- **Overall Score: 68/100.** Mean of five quality dims: Tool 60 + Reasoning 60 + Context 95 + Multimodal 55 + Coding 70 = 340 /5 = 68; Cost excluded.

## Signature

- Provided by: **Flint (anthropic/claude-sonnet-5)** — 2026-10-23
- Method: public web research prioritizing official model card/docs (Anthropic) plus independent benchmark sources (Artificial Analysis); multi-site comparison for conflicting figures.
- Future sources: add a new file next to this one, e.g. `<Source_Name>.md`, using the same headings.
