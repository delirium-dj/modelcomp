- Source: Z.ai/GLM-5.3-FlashX
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.3-FlashX
- **Short description:** Z.ai's 2026-09-18 high-speed serving tier of GLM-5.3-Flash — the **same model** at up to 200 tokens/s (5x faster), priced 2.5x higher to absorb surging demand. A distinct priced SKU in this dataset; the `glm-5.3-flash-x` hyphen spelling is a forbidden duplicate merged into this folder per the project identity roster, and the `Ox Alpha` stealth name belongs to the underlying Flash model.
- **Provider / access:** Z.ai API with Model Key `GLM-5.3-FlashX`, ZCode and the GLM ecosystem; served by a cluster of **100,000 domestic Chinese accelerator chips** that ran at full load from launch.
- **Release / knowledge:** 2026-09-18; knowledge cutoff: no verified public score found.
- **IDs:** `GLM-5.3-FlashX` (API Model Key). No free Zen ID verified.
- **Context window:** the underlying GLM-5.3-Flash supports **1,048,576 tokens**; no FlashX-specific re-verification in the retrieved page — reported as the base model's verified window.
- **Modalities:** the underlying GLM-5.3-Flash is natively multimodal — **text, image, video and file in; text out** — with visual coding (inspect rendered pages, game bugs, 3D scene coherence) and Office document handling. No verified audio input or non-text output.
- **Pricing (as of 2026-11-14):** **2.5x GLM-5.3-Flash's price**. Flash's launch promotional rate was **$0.075 / 1M input, $0.25 / 1M output** (1/10 of GLM-5.3, 1/20 promo) → FlashX is approximately $0.19 / $0.63 per 1M on that basis (derived, not a vendor quote). Flash itself is MIT-licensed open weights; FlashX is a hosted speed tier.
- **Architecture:** Same weights as GLM-5.3-Flash (320B total / 18B active MoE, 45 layers, hybrid sparse+linear attention, IndexPool, mHC). Z.ai's Infra Agent completed full domestic-accelerator deployment in two weeks with **3.2x throughput** gain, using layered verification interfaces built on real infrastructure tasks.

### Raw benchmarks found

Agent / tool use:

- Inference speed: up to **200 tokens/s**, **5x** GLM-5.3-Flash
- Domestic-accelerator full deployment throughput gain: **3.2x** in two weeks
- Underlying Flash lineage (measured under the `GLM-5.3-Flash` ID): AA Intelligence Index **57**, 62 trillion tokens processed in six days during the Ox Alpha stealth run, 16-hour autonomous Blender build — lineage only, not FlashX scores
- Tau3-Banking / Tau2-Bench / GDPval-AA / OSWorld / Terminal-Bench / AutomationBench / Claw-Eval / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- Same underlying model as GLM-5.3-Flash (AA index 57, tied with Claude Opus 4.8) — lineage figure, not a separately measured FlashX score
- GPQA Diamond / HLE / LCR / CritPt / Omniscience: no verified public score found

Coding:

- Same underlying weights, so Z.ai Code Bench parity with Claude Opus 4.8 and visual-coding capability carry over — lineage, not a new measurement
- SWE-bench Verified / Terminal-Bench / LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE: no verified public score found

Long context:

- 1,048,576-token window from the underlying Flash; no MRCR / RULER / GraphWalks figure found — no verified public score found

### Normalized scores (1–100)

- **Tool use: 87/100.** 200 tok/s with a 100K-chip serving cluster, a 3.2x infra throughput gain, and inherited visual-coding/agent capability; capped by no scored agent benchmark measured specifically for FlashX.
- **Reasoning: 87/100.** Inherits the AA index 57 (tied with Opus 4.8) from identical weights; capped by no independent FlashX measurement and no GPQA/HLE figure.
- **Context window: 92/100.** The underlying model's verified 1,048,576-token window with a hybrid attention stack; capped by no FlashX-specific re-verification and no retrieval benchmark.
- **Multimodal: 92/100.** Inherited native text/image/video/file input with visual coding and Office self-review; capped by text-only output and no verified audio input.
- **Coding: 87/100.** Inherited Z.ai Code Bench parity with Opus 4.8 and visual coding; capped by no SWE-bench/Terminal-Bench figure and no new FlashX measurement.
- **Cost efficiency: 88/100.** 5x the speed for 2.5x the price of an already extremely cheap Flash tier (≈$0.19/$0.63 derived per 1M), with MIT open weights available for self-hosting; capped by the price increase itself. Excluded from Overall.
- **Overall Score: 89/100.** Half-up mean of 87, 87, 92, 92, 87 = 89.0 → 89. Best fit: latency-sensitive, high-volume multimodal agent and visual-coding workloads where 200 tok/s response matters more than the lowest unit price.

---

## Signature

- Provided by: **Hy4 (tencent/hy4)** — 2026-11-14 UTC
- Method: Fresh public-web research this pass, conducted independently (no peer findings files consulted). Primary evidence: the Baidu Baike GLM-5.3-FlashX article (release, 200 tok/s, 5x speed, 2.5x pricing, 100K domestic chips, 3.2x infra throughput, API Model Key), plus the Baidu Baike GLM-5.3-Flash (320B-A18B) article for the underlying architecture, 1M context, modalities, AA index 57 and MIT weights. All underlying-Flash figures are explicitly labelled lineage measured under that ID, and the derived per-1M price is labelled derived rather than a vendor quote. Identity handling follows the project's generated roster: `glm-5.3-flash-x` is a merged duplicate spelling and `ox_alpha` is a deleted phantom — neither is scaffolded or written. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually fetched this pass.
  - [GLM-5.3-FlashX — 百度百科 (speed, pricing, infrastructure, API key)](https://baike.baidu.com/item/GLM-5.3-FlashX/69084140)
  - [GLM-5.3-Flash (320B-A18B) — 百度百科 (underlying architecture, 1M context, AA 57)](https://baike.baidu.com/item/GLM-5.3-Flash%20(320B-A18B)/68738632)
