# Mimo V2 6 Free — findings by Mimo v2.6 Flash

- Source: Xiaomi MiMo/`opencode/mimo-v2-6-free` (MiMo-V2.6-Flash free tier)
- Date: 2026-09-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mimo V2 6 Free (Zen free tier of **MiMo-V2.6-Flash**)
- **Short description:** Xiaomi's fully multimodal open MoE Flash tier (Sept 2026) — 309B total / 15B active, 1M window, text+image+video+audio in; large RL jump over V2.5 (DeepSWE 48.8→65.7 during Flash RL per Xiaomi); **Free promo tier on OpenCode Zen** (data may improve the model during free period). **Author of this report is `xiaomi/mimo-v2.6-flash` — scores below are self-attribution-biased; treat peer `average.md` as a check.**
- **Provider / access:** OpenCode Zen `opencode/mimo-v2-6-free` (**Free** — limited-time feedback promo, meta); Xiaomi MiMo API `mimo-v2.6-flash` (all-lowercase); open weights (MIT per LLM Stats); HF/GitHub XiaomiMiMo.
- **Release / knowledge:** MiMo-V2.6 series **September 2026** (mimo.mi.com news; llm-stats 2026-09-21). Knowledge cutoff not published in extracts.
- **IDs:** `opencode/mimo-v2-6-free` (Zen free); API `mimo-v2.6-flash` (also `mimo-v2.6-pro`, `mimo-v2.6-pro-ultraspeed`).
- **Context window:** meta **128K total** for this Zen entry; flagship model card / LLM Stats: **1,048,576** — **conflict** (free tier may cap below 1M). Score **75** on meta's 128K served claim; note full model is 1M.
- **Modalities:** **text + image + video + audio in; text out** (LLM Stats "omnimodal", mimo.mi.com "native fully multimodal") — meta's "Text in/out" is understated for the underlying model; if the free endpoint strips vision, effective modality drops — score the published model surface **90**, flag endpoint risk.
- **Pricing (as of 2026-09-22):** **Free** on Zen (meta; standard promo language); paid API rates for `mimo-v2.6-flash` not transcribed in this pass.
- **Architecture:** Sparse MoE **309B total / 15B active**; 256 routed experts top-8; 48 layers; MIT open weights (LLM Stats/aiidelist).

### Raw benchmarks found

> Measured numbers with (source, rank, harness). Xiaomi official tables (vendor-reported, not independently audited — TPS notes comparison rows unverified); BenchLM partial coverage; **do not use V2 (prior gen) rows as V2.6 scores except where labeled lineage**.

Agent / tool use:

- Terminal-Bench 2.1: **87.6** (Xiaomi V2.6 Flash table via orcarouter/aiidelist/BenchLM — vendor harness; same table: Pro 89.9, Claude Opus 5 89.1, GPT-5.6 Sol 88.8, Fable 5 84.3)
- Terminal-Bench 4.0: **28.8** Flash (aiidelist; Pro 34.9 — harder variant much lower)
- Toolathlon-Verified: **73.6** (Xiaomi; V2.5 Pro was 49.1)
- AutomationBench v1.0.6: **52.3** (Xiaomi)
- OSWorld-Verified: **80.8** (Xiaomi/orcarouter — GUI agent)
- JobBench: **61.2** (Xiaomi)
- GDPval / MCP-Atlas / Tau3 for V2.6 Flash: no verified public score found in this pass

Reasoning / knowledge:

- AA Intelligence Index: **46 for V2.6 Pro** (mimo.mi.com — "most powerful open-source" claim); **Flash Index not separately extracted** — Pro 46 anchors the family; Flash expected slightly below (no number invented — mark Flash Index as **no verified public score** and score reasoning from agent/math proxies)
- CyberGym: **95.1** Flash (Xiaomi — security agent)
- MiMo Cyber Bench: **77.2** Flash (Xiaomi)
- GPQA / HLE / MMLU-Pro for V2.6 Flash chat: no verified public score found in this pass (V2 Flash prior gen had GPQA ~84 / MMLU-Pro 84.9 — **lineage only, not V2.6**)

Coding:

- DeepSWE v1.1: **67.9** Flash (Xiaomi/orcarouter; Pro 71.9; RL path improved Flash line 48.8→65.7 during training per mimo.mi.com — slight table drift 65.7 vs 67.9 noted)
- MiMo Code Bench: **61.2** (Xiaomi)
- MiMo Visual Coding: **71.5** (Xiaomi — visual coding agent)
- SWE-Verified / SWE-Pro for V2.6 Flash: no verified public score found in this pass (V2 Flash prior gen SWE-V 73.4 — **not transferred**)
- Distill-Qwen-9B RL ablation (mimo.mi.com, smaller student not Flash): SWE-V 61.1→66.2, TB2.1 37.1→52.8 — family recipe evidence only

Long context:

- Model: **1M**; this Zen meta: **128K**; no MRCR/RULER for V2.6 in extracts

Multimodal:

- **Text/image/video/audio in** (llm-stats, mimo.mi.com) — upper multimodal band; meta text-only caveat flagged above

### Normalized scores (1–100)

- **Tool use: 88/100.** TB2.1 **87.6** (vendor) sits with Opus 5 / Sol on Xiaomi's table; Toolathlon 73.6, OSWorld 80.8, AutomationBench 52.3 — elite agentic stack **if vendor harness holds**; TB4.0 28.8 is the humility check on harder terminals.
- **Reasoning: 82/100.** Family Pro hits AA Index 46; Flash lacks its own Index/GPQA/HLE rows in this pass — scored high on agent breadth + CyberGym 95.1 + open-lineage strength, **not** on a measured Flash GPQA.
- **Context window: 75/100.** **Scored on this repo's meta 128K** (methodology 128K ≈ 75); full model advertises 1M (would be ~94) — free endpoint may be the limiter; no retrieval curve.
- **Multimodal: 90/100.** Native text+image+video+audio in on the model card (upper band); discount only for possible free-endpoint modality stripping (meta's text-only line).
- **Coding: 85/100.** DeepSWE 67.9 and MiMo Code Bench 61.2 are strong agentic coding (vendor); Visual Coding 71.5 unique; no public SWE-Verified row for V2.6 Flash specifically — high but one tier below measured frontier SWE-Pro leaders.
- **Cost efficiency: 100/100.** **Free Zen tier** (meta) → maximum (promo/data-collection caveat).
- **Overall Score: 84/100.** Mean of five quality dims (88+82+75+90+85)/5 = 84.0 → **84**. **Deviation note:** single peer (`Gemini_3.6_Flash`) averaged **71.2** here — this report weights Xiaomi's much higher agentic tables (TB2.1 87.6, Toolathlon 73.6) and full omnimodal surface; **self-evaluation bias possible** — recommend a third-party re-score after independent AA/GPQA rows for V2.6 Flash appear. Best-fit: free multimodal agent coding + OSWorld-style GUI work on Zen while the promo lasts.

---

## Signature

- Provided by: **Mimo v2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-09-22
- Method: public internet research (mimo.mi.com V2.6 announcement, orcarouter Pro-vs-Flash bench split, aiidelist benchmark tables, llm-stats model page, BenchLM partial rows, TPS vendor-verification caveat); scores are normalized 1–100 interpretations, not official vendor scores; **disclosed self-model conflict of interest**.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
