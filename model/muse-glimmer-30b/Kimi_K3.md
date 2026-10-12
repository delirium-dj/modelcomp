# Muse Glimmer 30B — findings by Kimi K3

- Source: Meta / Muse Glimmer 30B (`muse-glimmer-30b`)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Glimmer 30B
- **Short description:** Meta's compact open-weights Muse family member (30B), distilled from Muse Spark for always-on local agents — a standout efficient reasoner: AIME'26 94.7%, AA-LCR 83.3%, SWE-bench Verified 76%.
- **Provider / access:** open weights HF `meta-models/Muse-Glimmer-30B` (link confirmed live via OpenCode Data); hosted per community providers.
- **Release / knowledge:** Released 2026-08-10 (OpenCode Data, newly verified); knowledge cutoff 2026-01-04 (OpenCode Data, new).
- **IDs:** `meta/muse-glimmer-30b` (no Zen Free ID verified).
- **Context window:** 131K tokens in / **131K max output** (OpenCode Data catalog — output cap equals window).
- **Modalities:** text/image in (OpenCode Data; CharXiv, MMMU-Pro measured); text out; reasoning yes; tool calls; JSON mode.
- **Pricing (as of 2026-10-11):** **$0.00/$0.00** hosted catalog price (OpenCode Data) + open weights — fully free.
- **Architecture:** open weights (HF-confirmed), ~30B class, distilled from Muse Spark.

### Raw benchmarks found

Agent / tool use:

- MCP Atlas: **75.5%** (official HF card via OpenCode Data; matches benchlm.ai); DeepSearch QA: **74.6%** (official; matches); OSWorld-Verified: **65.9%** (official; matches); skillsBench: **44.3%** (benchlm.ai)
- Terminal-Bench: **51.7%** (official HF card; matches benchlm.ai)
- GDPval-AA: **893 Elo** (13.7% normalized); AA EnterpriseOps-Gym: **34.7%**; AA Agentic Index: **10.5%** (benchlm.ai)
- Tau2/Tau3 / Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **83.5%** (official HF card via OpenCode Data; matches benchlm.ai)
- HLE (AA-HLE): **22.0%** (benchlm.ai)
- AA-LCR: **83.3%** — remarkable for a 30B (benchlm.ai); MLCR-AA: **20.0%**; CritPt: **2.6%**
- Artificial Analysis Intelligence Index: **17.5**; BenchLM overall **41.73/100, #108 of 507**
- AA-Omniscience Accuracy / Hallucination Rate: **27.0% / 81.9%** (benchlm.ai)
- AIME 2026: **94.7%** (official HF card; matches benchlm.ai); AA-IFBench: **77.0%** (benchlm.ai)

Coding:

- SWE-bench Verified: **76.0%** (official HF card; matches benchlm.ai); SWE-bench Pro: **51.2%** (official; matches benchlm.ai); Terminal-Bench 2.1: **51.7%** (official; matches)
- SciCode: **43.6%**; AA-SciCode: **44.9%**; AA Coding Index: **49.0** (benchlm.ai)
- LiveCodeBench: no verified public score found

Long context:

- AA-LCR 83.3% within 131K (benchlm.ai); output cap equals window (131K) per catalog; no MRCR/RULER rows.

Multimodal:

- MMMU-Pro: **74.0%** (AA 74.3%); CharXiv: **78.8%** (official; matches benchlm.ai); OmniDocBench 1.5: **75.8%**; ScreenSpot Pro: **75.4%** (benchlm.ai)

### Normalized scores (1–100)

- **Tool use: 58/100.** Unchanged: MCP Atlas 75.5% decent; capped by GDPval 893 and Agentic Index 10.5%.
- **Reasoning: 66/100.** Unchanged: AIME 94.7% and LCR 83.3% punch far above weight; capped by HLE 22%, CritPt 2.6%, AA Index 17.5, 81.9% hallucination.
- **Context window: 62/100.** Unchanged: 131K window with equal output cap now catalog-verified; LCR 83.3% within it is excellent for the size.
- **Multimodal: 72/100.** Unchanged: real vision suite (CharXiv 78.8%, MMMU-Pro 74%); text-only output caps it.
- **Coding: 66/100.** Unchanged: SWE-bench Verified 76% (official-confirmed) strong; capped by SciCode ~44% and TB 51.7%.
- **Cost efficiency: 96/100.** Raised from provisional 92: catalog-listed at $0.00/$0.00 plus open weights — free at every level.
- **Overall Score: 65/100.** Mean of the five quality dims (58+66+62+72+66)/5 = 64.8 → 65 (unchanged). Best fit: local math/vision experiments at 30B scale with zero marginal cost.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-10-11
- Method: fresh public web research (official HF model card `meta-models/Muse-Glimmer-30B` transcribed by OpenCode Data `meta/muse-glimmer-30b` incl. release/cutoff/$0 pricing; benchlm.ai scorecard from first pass). Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
