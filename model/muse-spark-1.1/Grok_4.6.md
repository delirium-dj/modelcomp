# Muse Spark 1.1 — findings by Grok 4.6

- Source: Meta (`muse-spark-1.1`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.1
- **Short description:** Meta's July 2026 paid Muse Spark release for agentic coding, computer use, and native image/video/document perception. Predecessor to Muse Spark 1.2 / 1.3; still listed on Meta's model catalog.
- **Provider / access:** Meta Model API (OpenAI-compatible). Public preview originally for US developers. Chat Completions-style access via Meta's developer docs.
- **Release / knowledge:** Released 2026-07-09 (Artificial Analysis article / third-party catalogs). Knowledge cutoff not stated on the Meta 1.1 product page.
- **IDs:** Muse Spark 1.1 on Meta Model API (docs path `dev.meta.ai/models/muse-spark-1-1`). No OpenCode Zen Free ID found for this SKU.
- **Context window:** 1M tokens (AA article: up from 262K on Muse Spark 1.0). Third-party catalogs list ~1.05M total and 256K max output (models.wtf). Not independently re-measured here.
- **Modalities:** Meta page: video, images, and documents in; computer use; text out. Tokens or Towers also lists audio in — not confirmed on the official 1.1 page, so treated as unverified.
- **Pricing (as of 2026-10-20):** $1.25 / $4.25 per 1M input/output; cache hits $0.15 per 1M (Artificial Analysis July 2026 article). Same Standard-tier list still cited by later aggregators.
- **Architecture:** Proprietary closed weights (Meta's first paid Muse Spark line after open Llama). Parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- MCP Atlas: **88.1** (Meta 1.1 product table)
- JobBench: **54.7** (Meta)
- Toolathlon-Verified: **75.6** (Meta)
- OSWorld-Verified: **80.8%** (Meta)
- Finance Agent v2: **57.2** (Meta)
- Terminal-Bench 2.1: **80.0%** (Meta); **52.2%** independent Vals AI Terminus 2 (models.wtf)
- Terminal-Bench 4.0: **6.1%** (Artificial Analysis harness, xhigh; Tokens or Towers)
- GDPval-AA: **1375** Elo (AA July 2026 article, v2); later AA listing **1208** (Tokens or Towers, xhigh)
- Tau3-Banking / Claw-Eval: **no verified public score found**

Reasoning / knowledge:

- HLE (with tools): **62.1%** (Meta table)
- HLE (AA, no tools): **45%** in the July AA article; **46.2%** on later AA listings (Tokens or Towers)
- GPQA Diamond: **88.4%** (AA, models.wtf); **89.8%** (later AA listing, Tokens or Towers)
- Artificial Analysis Intelligence Index: **51** (July 2026 article, xhigh); later **33.7** Index v4.3.2 (BenchLM / Tokens or Towers) — cite both, prefer the dated v4.3.2 figure for current-index comparisons
- CritPt: **15.1%** (AA, Tokens or Towers)
- AA-LCR: **77.7%** (BenchLM's AA row)
- AA-Omniscience Accuracy / hallucination rate: **41% / 38%** at the July article (accuracy roughly flat vs 1.0; hallucination down from 73%)
- CharXiv Reasoning: **88.4** (Meta)
- BabyVision: **76.3** (Meta)

Coding:

- SWE-bench Pro: **61.5%** (Meta; models.wtf flags provider-reported)
- SWE-bench Verified: **82.0%** (BenchmarkList mini-SWE-agent / Vals, models.wtf)
- DeepSWE 1.1: **53.3%** (Meta)
- Terminal-Bench 2.1: see tool-use row
- AA-SciCode: **58.8%** (AA, Tokens or Towers / BenchLM)
- LiveCodeBench (Vals): **85.9%** (BenchLM)
- AA Coding Index: **71.3%** (BenchLM)

Long context:

- 1M window. Meta eval report via BenchLM: MRCR 1M **54.1%**. AA-LCR **77.7%**. **no ≥98% retrieval at 512K+ found**

### Normalized scores (1–100)

- **Tool use: 83/100.** Vendor MCP Atlas 88.1, OSWorld 80.8%, Toolathlon 75.6, and TB 2.1 80.0% look frontier-adjacent, but independent Vals TB 2.1 52.2%, JobBench 54.7, GDPval ~1208–1375 (frontier ~1750+), and TB 4.0 6.1% cap the score.
- **Reasoning: 88/100.** Independent GPQA ~88–90% and AA HLE ~45–46% sit in the frontier GPQA / HLE band. Capped by CritPt 15.1%, later Index 33.7, and the large Index 51→33.7 methodology/date gap.
- **Context window: 95/100.** 1M (+256K max out in catalogs) is the ≥1M tier. Not higher: MRCR 1M 54.1% is far from a 98% retrieval claim.
- **Multimodal: 85/100.** Official image+video+document input maps to the +video/PDF 75–90 band. Capped because audio-in is not on the official 1.1 page and output is text.
- **Coding: 81/100.** SWE-Verified 82.0% (independent) and SciCode 58.8% are strong; SWE-Pro 61.5% is solid. Capped by DeepSWE 53.3% (below the 74% frontier ref) and the 80% vs 52% TB 2.1 vendor/independent split.
- **Cost efficiency: 88/100.** Matches the methodology ~$1.25/$4.25 ≈ 88 anchor. Cache $0.15 helps; no $0 tier.
- **Overall Score: 86/100.** Mean of 83 + 88 + 95 + 85 + 81 = 86.4 → 86 half-up. Best fit: paid multimodal agents and SWE-Verified coding at Standard Muse prices; verify TB 2.1 on your harness before treating vendor 80% as portable.

---

## Signature

- Provided by: **Grok 4.6 (xAI / grok-4.6)** — 2026-10-20
- Method: public internet research (Meta Muse Spark 1.1 product page, Artificial Analysis July 2026 article, AA/Vals aggregators); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
