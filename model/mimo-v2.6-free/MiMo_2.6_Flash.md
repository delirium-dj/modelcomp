# MiMo V2.6 Free — findings by MiMo 2.6 Flash

- Source: OpenCode Zen free tier (`opencode/mimo-v2.6-flash-free`, aka MiMo-V2.6-Flash Free) / Xiaomi MiMo
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.6 Free — Xiaomi's MiMo-V2.6-**Flash** served as a **free OpenCode Zen model** (official Zen docs name: "MiMo-V2.6-Flash Free"). Same MIT-licensed 309B-total/15B-active MoE weights as `mimo-v2.6-flash`, under a restricted gateway profile.
- **Short description:** Zen's "top pick for high-volume agentic coding at near-zero cost" (repo meta): the full-modality Flash model at **$0 in/out**, promoted by OpenCode as a limited-time offer — "the team is using this time to collect feedback and improve the model." See our sibling `mimo-v2.6-flash` report for the model itself (release 2026-09-22, RL transparency run, TB2.1 87.6, OSWorld 80.8, AA-LCR 74.3).
- **Provider / access:** OpenCode Zen only — endpoint `https://opencode.ai/zen/v1/chat/completions` (OpenAI-compatible), config id `opencode/mimo-v2.6-flash-free` (repo meta uses `opencode/mimo-v2-6-free` — id variance flagged; Zen `/v1/models` returns only id/owner). Not billed: pricing table lists **Free / Free / Free** (input/output/cache read).
- **Release / knowledge:** model released 2026-09-22 (Flash weights); Zen free offering live as of 2026-10-07, **limited-time** per official docs (can be revoked or metered at any time). Knowledge cutoff not published.
- **Context window:** **200,000 tokens** on this route / max output **32,000** (models.dev registry for `opencode` provider; pi.dev independently lists the same 200K/32K) — a **serving cap**, far below the weights' native 1,048,576/131,072 on paid routes.
- **Modalities:** **text, image, audio, video in; text out; reasoning yes** (models.dev `opencode` entry). ⚠ pi.dev's probed catalog lists only text+image for this endpoint — the wider input set may or may not pass through the Zen proxy; flagged, +1M→200K downgrade already scored.
- **Pricing (as of 2026-10-07):** **$0** all charges on Zen (official docs). Fallback paid pricing if the promo ends: $0.14 / $0.28 per 1M (Xiaomi native, same as Flash; repo meta's paid fallback).
- **Architecture:** proprietary-flash — 309B/15B sparse MoE, 681M vision encoder, audio tokenizer, MTP decoding; MIT weights self-hostable (irrelevant to this Zen route's $0 price).

> **Affiliation flag:** this report is written by MiMo 2.6 Flash — a Xiaomi model evaluating a Xiaomi model, on the very model family being served. Treat scores and framing with that self-affiliation in mind.

### Raw benchmarks found

> Same underlying weights as `mimo-v2.6-flash` → benchmark evidence is identical (all
> vendor-run Xiaomi tables + independent catalogs, researched fresh for our flash report
> on 2026-10-07 and restated here). No separate free-tier benchmark suite exists — the
> only free-specific evidence is the serving profile below.

Agent / tool use:

- Terminal-Bench 2.1: **87.6** (Xiaomi table; BenchmarkList 93rd pct, rank 15/194 — clears the 85 ref).
- AutomationBench v1.0.6: **52.3**; OSWorld-Verified: **80.8** (17/70); Toolathlon-Verified: 73.6; JobBench 61.2 (8/48); Agents' Last Exam pass 27.6; AA-Briefcase 1495 Elo (21/145).
- Terminal-Bench 4.0: **28.8** (17/29 — weak spot); ProgramBench 26.0; GDPval/MCP-Atlas: none.

Reasoning / knowledge:

- Humanity's Last Exam: **35.1** (88th pct, 58/478) — under the 40 ref.
- AA Intelligence Index: **37.9** (v4.3.2, independent, 85th pct) — under the 60 ref.
- GPQA/MMLU/ARC-AGI: not published; AIIQ composite 122 (70th pct).

Coding:

- DeepSWE v1.1: 67.9 table / 65.7 launch post — under the 74 ref (RL lifted it ~17 pts from 48.8).
- SciCode: **51.3** (85th pct) — under the 55 ref; Terminal-Bench 2.1: 87.6 (clears); MiMo Code Bench 61.2 (custom).
- SWE-bench Verified: not on card; RankLLMs cites 67.2 (attribution uncertain); independent DevOps spot-check (ComputingForGeeks): 0/3 manifests served HTTP 200, "fine for drafts and not for merges."

Long context / multimodal:

- AA-LCR: **74.3%** (independent, 78th pct; leader Kimi K3 88.7) — retrieval evidence at **200K-capped** window on this route; no needle row ≥512K.
- Full input modalities (text/image/audio/video per models.dev); no third-party vision/audio rows (custom MiMo VisualCoding 71.5 only).

Free-route specifics (this entry only):

- models.dev `opencode/mimo-v2.6-flash-free`: context **200,000**, output **32,000**, cost **0/0/0**, modalities text+image+audio+video, reasoning true.
- pi.dev: same 200K/32K/$0, but input listed **text+image only** (discrepancy flagged), `thinkingFormat: openai`, strict-mode compatible.
- Official Zen docs: pricing row "Free"; limited-time promo note; no published rate limits or monthly caps for this specific model (workspace-level monthly limits exist platform-wide).

### Normalized scores (1–100)

- **Tool use: 86/100.** Identical weights → TB2.1 87.6 (93rd pct, ref-clearing), AutomationBench 52.3, OSWorld 80.8, JobBench 61.2; same deductions as flash: TB4.0 28.8, ALE 27.6, ProgramBench 26.0, no GDPval/MCP-Atlas.
- **Reasoning: 77/100.** HLE 35.1 and AA 37.9 remain respectable 85th-percentile mid-tier readings that miss both headline refs; no GPQA/ARC row.
- **Context window: 86/100.** The weights' 1M native is **capped to 200K on the free route** — below the 262K→90 tier floor; AA-LCR 74.3% still proves real retrieval within reach of the cap, but the gateway window is what users get → 86.
- **Multimodal: 92/100.** Full text/image/audio/video input per opencode's own registry (audio band 90–100 applies) — docked for (a) pi.dev's conflicting text+image-only listing on this endpoint (audio/video pass-through unverified through the Zen proxy) and (b) the 32K output cap and absence of any free-route vision/audio benchmark.
- **Coding: 84/100.** Same profile as flash: TB2.1 87.6 clears at the frontier edge; DeepSWE 67.9 and SciCode 51.3 miss refs; independent runtime test failed 2-of-3 checks; benchmark evidence not re-run on the free endpoint (identical weights assumption flagged).
- **Cost efficiency: 100/100.** **$0 in, $0 out, $0 cache** — the theoretical maximum of the cost axis; only caveats are its *limited-time* promotional nature (no SLA; can be metered/revoked) and the 200K/32K caps, neither of which is a per-token price.
- **Overall Score: 85/100.** (86+77+86+92+84)/5 = 85.0 → 85 — the flash model at literally zero price, with the catch spelled out: a 200K/32K serving cap, promo-conditioned availability, and mid-tier independent reasoning that the price tag forgives rather than fixes.

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi — opencode/mimo-v2.6-flash)** — 2026-10-07
- **Affiliation:** reporter and subject are both Xiaomi MiMo models (this entry is my own weights on a free route) — self-evaluation; scores are normalized 1–100 interpretations, not official vendor scores.
- Method: fresh public internet research — official OpenCode Zen docs (endpoint table, pricing, limited-time notes), models.dev registry API (authoritative 200K/32K/$0/full-modality spec for `opencode/mimo-v2.6-flash-free`), pi.dev independent catalog (conflicting modality list flagged), Zen `/v1/models` probe; benchmark rows restated from our same-day `mimo-v2.6-flash` research (same weights).
- Future sources: add a new file next to this one, e.g. `MiMo_2.6_Flash.md`, using the same headings.

---

## Merged duplicate - Mimo_v2.6_Flash.md (same rater, spelling variant, merged 2026-10-09)

> This section preserves the full content of the deleted duplicate Mimo_v2.6_Flash.md (same Xiaomi MiMo 2.6 Flash rater; variant spelling _v2.6 vs _2.6 plus case). No benchmarks lost; canonical scores above remain the single parsed source (parser reads first score block).

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

