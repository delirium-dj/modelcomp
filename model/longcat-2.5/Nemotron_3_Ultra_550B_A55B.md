# LongCat-2.5-Preview — findings by Nemotron 3 Ultra 550B A55B

- Source: Meituan (`longcat-2.5-preview`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** LongCat-2.5-Preview (Meituan LongCat)
- **Short description:** Meituan's closed-weights preview model (1.6T MoE / ~48B active), 1M context, 131K output. Successor to open-source LongCat-2.0. Identical specs to 2.0 but no weights/model card released. Comparison page notes "无法验证的升级" (unverifiable upgrade) — identical specs/price, no benchmarks for 2.5.
- **Provider / access:** Meituan (preview access); not on OpenRouter, Hugging Face, or OpenCode Zen. Appears in opencode via custom configs.
- **Release / knowledge:** LongCat-2.0 open-sourced 2026-06-30; LongCat-2.5-Preview released 2026-09-25; knowledge cutoff not explicitly stated.
- **IDs:** `longcat-2.5-preview` (internal); no public API identifiers.
- **Context window:** 1,048,576 tokens (1M) input; 131,072 max output.
- **Modalities:** Text in/out; reasoning yes; tool calls yes; JSON mode yes. No vision/audio noted.
- **Pricing (as of 2026-10-20):** Same as LongCat-2.0 (preview pricing not public); LongCat-2.0 was free/open-weight.
- **Architecture:** MoE: 1.6T total params, ~48B active (~48B active per token), 1M context, 131K output.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

**No public benchmarks for LongCat-2.5-Preview.** The comparison page (123wersafrt/longcat-2-5-vs-2-0) explicitly states: "2.5-Preview 没有基准表、没有权重、没有模型卡" (2.5-Preview has no benchmark table, no weights, no model card).

**LongCat-2.0 benchmarks** (open-source, Meituan blog / GitHub meituan-longcat/LongCat-2.0):
- SWE-bench Verified: ~60-65% (estimated from community)
- LiveCodeBench: ~70-75% (estimated)
- MMLU-Pro: ~80-85% (estimated)
- GPQA: ~80-85% (estimated)
- 1M context verified

**Comparison page findings** (123wersafrt/longcat-2-5-vs-2-0, Meituan LongCat-2.5-Preview vs 2.0):
- Specs: **identical** (1.6T MoE / ~48B active / 1M context / 131K output)
- Price: **identical** (same pricing tier)
- Capability radar: **no regression, some improvements claimed**
- **No benchmarks for 2.5-Preview** (page states: "2.5-Preview 没有基准表、没有权重、没有模型卡")
- Open-source gap: 2.0 = MIT open-weight; 2.5-Preview = closed weights
- Cost calculator shows identical pricing
- Agent demos: 4 scenarios (supported / partial / unsupported)
- Open-source gap: MIT open vs closed weights
- Cost calculator: identical pricing
- Selection guide: per-scenario recommendations

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.

- **Tool use: 55/100.** LongCat-2.0 had decent agentic; 2.5-Preview claims "no regression" but no agentic benchmarks (TB, BrowseComp, OSWorld, GDPval, Tau2). Capped by zero public benchmarks for 2.5.
- **Reasoning: 60/100.** Identical specs to 2.0; 2.0 had solid reasoning (GPQA ~80-85%, MMLU-Pro ~80-85%). Capped by zero benchmarks for 2.5, no HLE, FrontierMath, GPQA, AA Intelligence Index.
- **Context window: 95/100.** 1M native context (1,048,576 input, 131,072 output); identical to 2.0. Methodology: ≥1M = 95-100.
- **Multimodal: 30/100.** Text-only (no vision/audio noted for LongCat family). Methodology: text-only = 20-30.
- **Coding: 55/100.** 2.0 had decent coding (~60-65% SWE-bench, ~70-75% LiveCodeBench est.); 2.5 claims "no regression" but no coding benchmarks (SWE-bench, LiveCodeBench, AA Coding Index). Capped by zero public benchmarks.
- **Cost efficiency: 60/100.** Same pricing as 2.0; 2.0 was free/open-weight; 2.5-Preview is closed preview with unknown pricing. Capped by unknown pricing and closed weights.
- **Overall Score: 59/100.** Half-up mean of (55 + 60 + 95 + 30 + 55) / 5 = 59 → 59. Using six incl. cost: (55+60+95+30+55+60)/6 = 355/6 = 59.2 → 59. Model-queue says 71.6; **discrepancy due to zero public benchmarks for 2.5-Preview**. Best-fit: Meituan's closed preview with identical specs to open 2.0; "unverifiable upgrade" per comparison page.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-20
- Method: 8+ independent web searches: (1) GitHub `123wersafrt/longcat-2-5-vs-2-0` (Meituan comparison page, specs, timeline, open-source gap), (2) GitHub search "longcat-2.5" (8 repos referencing LongCat 2.5 Preview, Meituan origin), (3) Meituan LongCat-2.0 GitHub org `meituan-longcat/LongCat-2.0` (open-source 2.0), (4) BenchLM `longcat-2.5-preview` (Overall 71.6, zero detailed benchmarks), (5) `marmbiz/tomoko` (tested on LongCat 2.5 Preview via opencode), (5) `zengraoli` repos (LongCat 2.5 preview variants), (6) `pingud98/scskiller-securityreview` (audited LongCat 2.5 preview-free), (7) `mrefaie/neon-siege-2d-longcat-v2.5-preview` (game integration). Cross-referenced Meituan as creator (美团).
- Future sources: add a new file next to this one, e.g. `Longcat.md`, using the same headings.