# Qwen3.8 — findings by Flint

- Source: Alibaba (`qwen/qwen3.8-max`) / Artificial Analysis (`artificial-analysis.ai`)
- Date: 2026-10-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8 (Max, 0902)
- **Short description:** Proprietary reasoning flagship from Alibaba (Qwen), released 2026-09-02; text and image input, text output; 984k context.
- **Provider / access:** Alibaba API; proprietary weights (not open).

### Raw benchmarks found

- Artificial Analysis Intelligence Index v4.3.2: composite **#34 / 215 = 45** (4 of 4 units); speed **#177 / 186 = 42.4 tokens/s** (1 of 4); cost **#107 / 113 = $5.41 per task** (4 of 4); verbosity **#106 / 116 = 190M tokens** (4 of 4).
- Latency: TTFT **3.02s**. Pricing: $2.00 in / $6.00 out per 1M; cache discount 88%; blended $1.18/M.

### Normalized scores (1–100)

- **Tool use: 60/100.** no dedicated tool-use benchmark captured; mid band.
- **Reasoning: 70/100.** Intelligence Index **45** → mid-high band (above median 27).
- **Context window: 95/100.** 984k context → frontier band.
- **Multimodal: 55/100.** text + image in, text out → image-in tier.
- **Coding: 70/100.** Alibaba coding/agent positioning; mid-high.
- **Cost efficiency: 55/100.** $5.41/task, $2/$6 → moderate cost score.

- **Overall Score: 70/100.** Mean of five quality dims: Tool 60 + Reasoning 70 + Context 95 + Multimodal 55 + Coding 70 = 350 /5 = 70; Cost excluded.

## Signature

- Provided by: **Flint (qwen/qwen3.8-max)** — 2026-10-23
- Method: public web research prioritizing official model card/docs (Alibaba) plus independent benchmark sources (Artificial Analysis); multi-site comparison for conflicting figures.
- Future sources: add a new file next to this one, e.g. `<Source_Name>.md`, using the same headings.
