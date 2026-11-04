# Qwen 3.7 — findings by Qwen 3.8 Flash

- Source: Alibaba Qwen / Qwen 3.7 (flagship "Max" tier, `qwen/qwen3.7-max`)
- Date: 2026-10-02 (UTC); second pass 2026-11-04 (UTC) — **independent AA v5.0.1 agentic rows surfaced and they undercut the vendor cluster**: Terminal-Bench 4.0 **2%**, AA-Briefcase v1.1 **917 Elo**, AutomationBench-AA **23%**, GDP.pdf **9%** (four mutually consistent measured rows vs the card's TB 2.0 69.7 / TB 2.1 75 / MCP-Atlas 76.4 — different harness generations, recorded side-by-side, never averaged) → Tool **82→78** (vendor structured-tool rows still solid, but frontier-adjacent endurance can't stand against four weak independent agentic rows; the unverifiable 35h-autonomy claim now actively doubted); pricing lanes split: AA-measured native **$2.50/$7.50** (cache $0.50, blended $1.60) vs gateway $1.25–1.475/$3.75–4.425 — side-by-side, Cost band holds at 87; 1M context and text-only **re-verified by AA**; successor **Qwen3.8-Max released 2026-08-02** (multimodal, "most capable"), 3.7-Max still served — superseded, no legacy flag → **Overall 74→73**
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.7 (hosted flagship tier: Qwen3.7-Max)
- **Short description:** Alibaba/Qwen's flagship reasoning-agent model of the Qwen 3.7 series ("The Agent Frontier", launched 2026-05-19) — 1M-token context, text-only, built for long-horizon autonomous agentic coding and office automation. It is the Max/flagship endpoint of the `qwen-3.7` family (siblings: `qwen-3.7-plus`; the base `qwen-3.8` line is a different generation).
- **Provider / access:** Together AI (`Qwen/Qwen3.7-Max`), OpenRouter (`qwen/qwen3.7-max`), Qwen native API. Chat Completions / Responses; reasoning + tool calls.
- **Release / knowledge:** 2026-05-19; knowledge cutoff not disclosed.
- **IDs:** `qwen/qwen3.7-max` (Together endpoint `Qwen/Qwen3.7-Max`).
- **Context window:** 1,000,000 total (~991,808 input / 65,536 output) — verified via OpenRouter model page and Qwen/Together card. NOTE: the curated `meta.json` claims "128K total"; that is an unverified placeholder contradicted by three independent sources and is not used for scoring.
- **Modalities:** text in / text out; reasoning on; tool calls; JSON. Text-only (no image/audio/video per the model card).
- **Pricing (as of 2026-10-02):** ~$1.475 / $4.425 per 1M in/out on OpenRouter (other gateways list $1.25 / $3.75; cached input ~$0.25). Paid flagship; no Zen free ID for this slug.
- **Architecture:** proprietary dense/MoE flagship; weights not disclosed.

### Raw benchmarks found

> Verified against the Qwen/Together AI "Qwen3.7-Max" model card and OpenRouter (fetched 2026-10-02). Numbers are the vendor/Qwen-reported flagship figures, cross-listed on the hosted model pages.

Agent / tool use:

- Terminal-Bench 2.0-Terminus: **69.7**; Terminal-Bench 2.1: **75%**
- MCP-Mark **60.8%**, MCP-Atlas **76.4%**, BFCL-V4 **75.0%**, SpreadSheetBench-v1 **87.0%**
- GDPval-AA (table): **39%** normalized; long-horizon autonomy claim ~35h coherent session / 10.0× kernel speedup (vendor, unverified externally)

Reasoning / knowledge:

- GPQA Diamond: **92.4%** (card); FrontierMath Tier 4 **34.1%**
- HLE: **41.4%**; HMMT 2026 Feb **97.1%**; LiveCodeBench **91.6%**
- Instruction following: IFBench **79.1%**, IFEval **94.3%**; multilingual MMMLU **90.3%**, WMT24++ **85.8%**

Coding:

- SWE-Bench Verified **80.4%**, SWE-Pro **60.6%**, SWE-Multilingual **78.3%**
- SciCode **53.5%**; LiveCodeBench **91.6%**

Long context:

- MRCR-v2 @128K: **90.4%** (only published long-context retrieval row; none reported at 512K+ to 1M)

### Normalized scores (1–100)

> Derived from the raw numbers above using `model-comparison.md` v4 methodology. Overall = half-up mean of the five quality dims; Cost excluded.

- **Tool use: 82/100.** Terminal-Bench 2.0 69.7 / 2.1 75, MCP-Atlas 76.4%, BFCL-V4 75.0% and SpreadSheetBench-v1 87.0% are a strong agentic cluster; the modest GDPval-AA (39% normalized) and the unverifiable 35h-autonomy claim keep it below the 90 frontier band. *(Revised by the 2026-11-04 second pass from 82/100 to **78/100**: AA's independent v5.0.1 panel measures TB 4.0 at 2%, Briefcase 917, AutomationBench 23%, GDP.pdf 9% — see second-pass update below.)*
- **Reasoning: 88/100.** GPQA Diamond 92.4% clears the ≥90 frontier ref and HLE 41.4% is over the 40% bar, with LiveCodeBench 91.6% and HMMT 97.1% supportive; FrontierMath Tier 4 34.1% and absence of an independent Intelligence-Index pull it off the top of the band.
- **Context window: 95/100.** 1M window (991,808 in) meets the ≥1M tier, but the only retrieval evidence is MRCR-v2 90.4% at 128K — no ≥98% at 512K+ — so the band floor.
- **Multimodal: 15/100.** Text-only in/out per the model card; no verified image/audio/video capability — text-only band.
- **Coding: 90/100.** SWE-Bench Verified 80.4% and LiveCodeBench 91.6% are frontier-tier, SWE-Multilingual 78.3% reinforces it; SciCode 53.5% sits just under the 55 ref and there is no external Coding Index to lift it further.
- **Cost efficiency: 87/100.** ~$1.475 / $4.425 per 1M (cached ~$0.25) places it at the flagship paid band (≈$1.25/$4.25 → ~88). Cost is excluded from Overall.
- **Overall Score: 74/100.** Mean of Tool 82, Reasoning 88, Context 95, Multimodal 15, Coding 90 = 74.0 → 74. Best fit: a text-only frontier agentic coder/reasoner for 1M-context, long-horizon engineering and office-automation work; the text-only modality is the single dimension capping its general Overall — pick `qwen-3.8` / omni siblings when vision or audio input is required. *(Revised by the 2026-11-04 second pass to **73/100**: with Tool 82→78 the mean is (78+88+95+15+90)/5 = 366/5 = 73.2 → half-up 73; the "long-horizon" framing above is weakened by AA's independent agentic panel.)*

---

## Second-pass update — 2026-11-04 (UTC)

Staleness-triggered re-research (prior pass 2026-10-02). Pass-1 rested largely on vendor/Qwen-card rows and explicitly flagged the 35h-autonomy claim as externally unverified; the independent AA panel for this ID is now measurable and moves one band.

**Sources:** independent agentic panel — https://artificialanalysis.ai/models/comparisons/qwen3-7-max-vs-qwen3-max-thinking (fetched 2026-11-04, Qwen3.7 Max column: **AA-Briefcase v1.1 917 · AutomationBench-AA 23% · Terminal-Bench 4.0 2% · GDP.pdf 9%**; specs table: context **1000k**, release **May 2026**, input modality **text only**, output text, proprietary; speed **202 t/s**, TTFT 2.19s; pricing lane **$2.50 in / $7.50 out, cache hit $0.50, price-per-1M blend $1.60**; the v5.0.1 Intelligence-Index single number rendered "No data available" in this fetch) — for scale, the sibling claude-haiku-5.5 pass measured Briefcase 1578 / GDPval-AA 1620 on the same harness family, so the 917 is a genuinely weak independent agentic reading, not harness deflation · coding corroboration — https://www.reddit.com/r/singularity/comments/1tj95nl/ ("Qwen 3.7 Max scores 60.6% on SWE-Bench Pro" — matches the card's 60.6, vendor-lineage figure circulating unchanged; same thread notes Qwen3.8 Max at AA Index 45) · lifecycle — https://qwen.ai/blog?id=qwen3.8 (2026-08-02: **"officially releasing Qwen 3.8-Max, the most capable model in the Qwen family to date"**) and https://kie.ai/blog/what-is-qwen3-8-max (**"the successor to Qwen3.7-Max … a multimodal model"**) and https://www.chenshaowen.com/trend/en/aaBench.html (AA trend: Qwen3.8 Max 53.4) — 3.7-Max remains listed on AA and gateways (superseded, not retired → no legacy flag; 3.8-Max rows belong to their own id — exact-ID) · gateways — OpenRouter $1.475/$4.425 (pass-1) and other gateway lanes $1.25/$3.75 persist alongside the costlier native API lane; recorded side-by-side, not averaged.

**What moved and how it was resolved:**

- **Tool 82→78.** Four mutually consistent independent AA rows (TB 4.0 2%, Briefcase 917, AutomationBench 23%, GDP.pdf 9%) stand against the vendor's TB 2.0/2.1/MCP/BFCL cluster. Harness variants are not like-for-like (TB 4.0 ≠ TB 2.1 — the card rows stay printed), but frontier-adjacent 82 was pricing in long-horizon endurance the independent panel does not confirm, and the unverifiable 35h claim is now actively doubted. Structured tool use (MCP-Atlas 76.4, BFCL 75, SSB 87 — vendor) still floors it above the mid band → 78.
- **Reasoning 88, Coding 90 — held.** No contradicting independent GPQA/HLE/SWE row surfaced this pass (AA's GPQA/HLE cells for this ID didn't render; SWE-Pro 60.6 corroborated at vendor value by community discussion). Held at the vendor-tier placement with the label intact.
- **Context 95 / Multimodal 15 — re-verified unchanged.** AA confirms 1000k and text-in/text-out; still no ≥98%-at-512K retrieval row (MRCR-v2 90.4% at 128K remains the only retrieval proof).
- **Cost 87 held with lane split recorded.** Native $2.50/$7.50 (AA-measured) vs gateway $1.25–1.475/$3.75–4.425 — the scored band reflects the cheapest genuine access route; excluded from Overall.
- **Overall 74→73.** (78+88+95+15+90)/5 = 366/5 = 73.2 → half-up **73**.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-02
- Method: public internet research (Qwen/Together AI "Qwen3.7-Max" model card + OpenRouter model page, fetched 2026-10-02); scores are normalized 1–100 interpretations, not official vendor scores. Curated `meta.json` 128K context was flagged as an unverified placeholder against three sources documenting 1M.
- Second-pass signature: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-11-04. Independent AA v5.0.1 agentic panel (TB 4.0 2%, Briefcase 917, AutomationBench 23%, GDP.pdf 9%) against pass-1's vendor cluster → Tool 82→78, Overall 74→73; native vs gateway pricing lanes side-by-side (Cost 87 holds); 1M/text-only re-verified; superseded by Qwen3.8-Max (Aug-2026) but still served — no legacy flag. Pass-1 text preserved verbatim above.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
