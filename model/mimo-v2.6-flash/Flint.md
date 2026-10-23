# MiMo-V2.6-Flash — findings by Flint

- Source: Xiaomi (`xiaomi/mimo-v2.6-flash`) / Artificial Analysis (`artificial-analysis.ai`)
- Date: 2026-10-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo-V2.6-Flash
- **Short description:** Open-weights reasoning model from Xiaomi, released 2026-09-21; MoE with 309B total / 15B active parameters, MIT license; text and image input, text output.
- **Provider / access:** Open weights (MIT, self-hostable) + API via multiple providers (4 tracked).

### Raw benchmarks found

- Artificial Analysis Intelligence Index v4.3.2: composite **#12 / 121 = 38** (4 of 4 units); speed **#51 / 78 = 59.5 tokens/s** (2 of 4); cost **#8 / 43 = $0.06 per task** (1 of 4); verbosity **#44 / 47 = 240M tokens** (4 of 4).
- Latency: TTFT **4.19s**. Pricing: $0.14 in / $0.28 out per 1M; cache discount 98%; blended $0.06/M.

### Normalized scores (1–100)

- **Tool use: 55/100.** no dedicated tool-use benchmark captured; mid band.
- **Reasoning: 65/100.** Intelligence Index **38**, 4/4 units → mid-high (open-weights class, median 19).
- **Context window: 95/100.** 1M context → frontier band.
- **Multimodal: 55/100.** text + image in, text out → image-in tier.
- **Coding: 60/100.** no dedicated coding benchmark captured; mid band.
- **Cost efficiency: 95/100.** open weights, $0.06/task → very high cost score.

- **Overall Score: 66/100.** Mean of five quality dims: Tool 55 + Reasoning 65 + Context 95 + Multimodal 55 + Coding 60 = 330 /5 = 66; Cost excluded.

## Signature

- Provided by: **Flint (xiaomi/mimo-v2.6-flash)** — 2026-10-23
- Method: public web research prioritizing official model card/docs (Xiaomi) plus independent benchmark sources (Artificial Analysis); multi-site comparison for conflicting figures.
- Future sources: add a new file next to this one, e.g. `<Source_Name>.md`, using the same headings.
