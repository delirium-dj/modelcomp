# LongCat 2.0 — findings by Qwen 3.8 Flash

- Source: Meituan (`meituan-longcat/LongCat-2.0`, HF/GitHub; LongCat API platform)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** LongCat 2.0
- **Short description:** Meituan's open-weight **1.6T-total / ~48B-active MoE** coding/agent model — trained on 50K+ in-house AI ASICs over 35T+ tokens with LongCat Sparse Attention, a 135B N-gram Embedding layer and MTP decoding, MIT-licensed. Genuinely frontier-adjacent on vendor-harness columns (SWE-bench Pro 59.5 beats GPT-5.5's external 58.6), but **every number is Meituan-harness directional — no independent AA/BenchLM rows exist for this exact model**, and image input didn't arrive until the 2.5 Preview successor.
- **Provider / access:** LongCat API (`longcat.chat/platform`, international payment limited); longcat.ai web demo; Vercel AI Gateway; self-host from HF (reference recipe ~16× H20; ≥400 GB weights even heavily quantized). **Not on OpenCode Zen** — Zen carries only `longcat-2.5-preview-free`, a different model.
- **Release / knowledge:** launched 2026-06-30; MIT weights + inference code 2026-07-05; cutoff not stated.
- **IDs:** `meituan-longcat/LongCat-2.0`.
- **Context window:** **1M** — vendor-verified via dedicated 1M-context training (CP parallelism scaled to 512+); max output unspecified. **No MRCR/RULER/GraphWalks percentage was ever published** for retrieval-at-length.
- **Modalities:** **Text in / text out only** (curated `meta.json` agrees — one of the honest folders); reasoning via MOPD expert groups (Agent/Reasoning/Interaction); harness-native tool calls (Claude Code / OpenClaw / Hermes integrations).
- **Pricing (as of 2026-10-02):** **disputed within the cohort:** curated `meta.json` carries $0.30/$1.20 per 1M (cached $0.006) for this folder, but Kimi K3's fresh pass attributes those limited-time rates to the **2.5 Preview** and found *no verified 2.0 API price* — cross-model conflation risk flagged (a recurring pattern in these folders). MIT weights are free; hardware is datacenter-class. Cost excluded from Overall.
- **Architecture:** 1.6T/48B MoE, LSA sparse attention, 135B N-gram Embedding, Muon optimizer, deterministic operators, zero irrecoverable loss spikes on ASIC pretraining.

### Raw benchmarks found

> From the qualifying `Kimi_K3.md` (Meituan launch table via explainx.ai reproduction with methodology notes; TB 2.1 in Claude Code 8c16g sandbox, SWE series 4c8g). Starred (*) values are Meituan's own citations of competitors' externally reported numbers. No independent-lane row (AA/BenchLM/Epoch) exists for this model as of 2026-10-02 — this whole table is vendor harness.

Agent / tool use:

- Terminal-Bench 2.1: **70.8%** (vs Gemini 3.1 Pro 70.7*, GPT-5.5 73.8*, Opus 4.8 78.9*)
- FORTE (office real-world, 15 professions): **73.2** (GPT-5.5 77.8*); BrowseComp: **79.9**; RWSearch: **78.8**
- τ²/τ³ / GDPval-AA / Claw-Eval / MCP-Atlas: **no public score**

Reasoning / knowledge:

- GPQA Diamond: **88.9%** (Opus 4.8 reference 92.4); IMO-AnswerBench: **81.8** (beats Opus 4.8's reported 75.3); IFEval: **90.0**
- HLE / LCR / CritPt / AA Intelligence Index / BenchLM: **no verified public score found** — the folder's core evidence gap

Coding:

- SWE-bench Pro: **59.5%** (Claude Code harness; beats GPT-5.5's external 58.6; Opus 4.7 64.3*, 4.8 69.2* lead)
- SWE-bench Multilingual: **77.3%** (Opus 4.8 84.8*); LiveCodeBench / SciCode / DeepSWE / SWE-Verified: **no public score**

Long context:

- 1M training verified at infrastructure level; **zero published retrieval-at-length percentages** — spec-sheet context, not measured context.

### Normalized scores (1–100)

> Derived using `model-comparison.md` v4 methodology. Overall = half-up mean of the five quality dims; Cost excluded. All capability rows rest on the vendor's own harness — bands are discounted for the missing independent lane, per how I've scored every launch-table-only folder.

- **Tool use: 76/100.** TB 70.8 / FORTE 73.2 / BrowseComp 79.9 is a strong presented stack and harness-native tooling is real, but it trails the external frontier on every shared column and no τ/GDPval/Claw independent row exists — vendor-harness discount applied (Kimi K3's 79 is the generous end).
- **Reasoning: 74/100.** GPQA 88.9 and IMOAnswerBench 81.8 are near-frontier *as self-reported*; with HLE absent, AA Index absent and community notes of niche factual-chain gaps, the honest read is low-to-mid 70s rather than the cohort's 79.8.
- **Context window: 92/100.** 1M trained and infrastructure-verified, but the ≥95 top band demands at least one measured retrieval percentage and none exists — scored just below Kimi K3's 95, which credited the training story in full.
- **Multimodal: 15/100.** Text in/out, period (band 10–20); image input is a 2.5-Preview feature and borrowing it across models is disallowed. The cohort's 26.3 partially did exactly that.
- **Coding: 78/100.** SWE-Pro 59.5 > GPT-5.5 external is a genuine headline for an open model, and Multilingual 77.3 corroborates; but Opus leads every shared column, SWE-V/LCB/DeepSWE are absent, and everything is one sandbox. Mid-70s–80 range → 78.
- **Cost efficiency: 92/100.** If the curated $0.30/$1.20 (cached $0.006) applies, this is near-anchor-cheap; MIT weights make marginal cost hardware-only. Scored between Kimi's hardware-heavy 70 and the cohort's 84.5 since the rate-card attribution is unresolved. Cost excluded from Overall.
- **Overall Score: 67/100.** Mean of Tool 76, Reasoning 74, Context 92, Multimodal 15, Coding 78 = 335/5 = 67.0 → **67**. Best fit: **self-hosted, MIT-licensed, repo-scale agentic coding where data residency and license freedom outrank verified accuracy** — a genuinely impressive vendor panel that has never been checked by an independent lane. Sits below the cohort's 72 because this file discounts the vendor-only evidence and the unmeasured 1M window rather than inheriting their credit.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-02
- Method: qualifying `Kimi_K3.md` (Meituan launch table with sandbox methodology, explainx.ai reproduction, 2026-07-05 weight release, Zen-catalog absence check) + curated `meta.json`. Scores are normalized 1–100 interpretations, not official vendor scores. Flagged: (a) **100% vendor-harness evidence — zero AA/BenchLM/Epoch rows for this exact model**, (b) the $0.30/$1.20 rate is attributed to the 2.5 Preview by the freshest sibling pass — curated meta may be conflating generations, (c) 1M context is training-verified but never retrieval-measured, (d) do not borrow 2.5 Preview's image input or Zen-free lane into this folder.
- Revisit trigger: if Artificial Analysis or BenchLM rank LongCat-2.0 (GPQA/HLE/index rows), re-score Reasoning immediately — it is the dim most exposed to the vendor-only lane; likewise if an official 2.0 rate card is confirmed.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
