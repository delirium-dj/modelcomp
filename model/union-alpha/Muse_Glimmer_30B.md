# Union Alpha — findings by Muse Glimmer 30B

- Source: Unbiased / Circuit & Chisel, formerly anonymous on OpenRouter
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Union Alpha
- **Short description:** Unbiased's Pareto 26.9 composite (revealed from stealth Union Alpha, 262K ctx) - a blend, not a checkpoint; DeepSWE 70.0% (26.9) / 69.9% (26.10), not the circulated 74% (that is GPT-6 Astra's). $2.50/$7.50.
- **Provider / access:** Unbiased API `unbiased/pareto` (historical stealth `stealth/union-alpha` on OpenRouter / Cloudflare), Chat Completions-style. Free Zen preview 2026-09-16 to 2026-09-18 retired; no current free ID.
- **Release / knowledge:** Stealth listing 2026-09-16; reveal as Pareto 26.9 2026-09-17/18; formalized on Unbiased model card October 2026. Knowledge cutoff undisclosed.
- **IDs:** `unbiased/pareto` (formerly `stealth/union-alpha`); no OpenCode Zen Free ID.
- **Context window:** 262,144 total; 131,072 max output. Verified in meta.json and Unbiased model card.
- **Modalities:** Text, image in; text out. Tool calling supported in Pareto service; no verified audio/video.
- **Pricing (as of 2026-10-20):** Pareto 26.9 paid $2.50/$7.50 per 1M in/out, $0.25 cached input. Historical Union Alpha free preview retired. Pricing tiers from meta.json.
- **Architecture:** Proprietary composite/router: several frontier and open models evaluated per request and best answer kept; no open weights, parameters undisclosed.

### Raw benchmarks found

> Figures are vendor-reported for Pareto 26.9 / Union Alpha unless noted. Independent reproduction not found.

Agent / tool use:

- Terminal-Bench 4.0: **no verified public score found** for the exact stealth endpoint; Unbiased model card shows Pareto 26.10 50.8% at $0.48/task, Pareto 26.9 reported in prior vendor slate.
- DeepSWE v1.1: **70.0%** on 30-task slice, run September 20, 2026, $0.29/task. Unbiased model card October 2026 notes preliminary comparison, denominators/cost methodology require confirmation. [Unbiased model card](https://unbiased.ai/model-card/)
- DeepSWE circulated 74%: vendor note identifies that figure as GPT-6 Astra's, not Pareto 26.9. meta.json short description flags the confusion.

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found** for Pareto 26.9.
- HLE text-only: **no verified public score found** for Pareto 26.9; Pareto 26.10 reported 49.9% at $0.008/task.
- ArXivMath / MMMU-Pro: vendor slate mentioned in earlier reports; no independently verified numbers located in this research.

Coding:

- DeepSWE: **70.0%** (30-task slice, Sept 20 2026). See above.
- SWE-bench Verified / LiveCodeBench / SciCode: **no verified public score found**.

Long context:

- 262K window, 131K output; no long-context retrieval benchmark (RULER/MRCR/GraphWalks) published for Union Alpha/Pareto 26.9.

Multimodal:

- MMMU-Pro vendor claim 78% cited in prior reports; no independent verification found.

### Normalized scores (1–100)

- **Tool use: 75/100.** Composite routing with tool calling advertised for Pareto; Terminal-Bench numbers are only for 26.10 and not independently reproduced for 26.9. Capped by lack of independent agentic benchmarks.
- **Reasoning: 78/100.** No public GPQA/HLE for 26.9 located; model card shows strong graduate-level performance for 26.10 lineage and vendor claims for math. Score reflects mid-frontier expectation with verification gap.
- **Context window: 72/100.** 262K total / 131K output places it in 200K–500K band per methodology. No retrieval-at-length measurement; no 1M upgrade that 26.10 introduced.
- **Multimodal: 65/100.** Text + image in / text out confirmed; no verified audio/video breadth. Mid-range for image-in models.
- **Coding: 78/100.** DeepSWE 70.0% on a 30-task slice provides substantial evidence but discounted for small sample and vendor-only reporting; no SWE-bench Verified independent run found.
- **Cost efficiency: 65/100.** $2.50/$7.50 per 1M with $0.25 cache is ~25% of frontier input pricing; paid only, no free tier, blended routing adds opacity.
- **Overall Score: 74/100.** Half-up mean of 75, 78, 72, 65, 78. Provisional assessment of the revealed Pareto 26.9 service formerly known as Union Alpha.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-20
- Method: Public internet research using meta.json and Unbiased model card / release pages; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
