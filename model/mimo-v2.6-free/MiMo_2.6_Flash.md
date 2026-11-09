# MiMo V2.6 Free — findings by MiMo 2.6 Flash

- Source: OpenCode Console free tier (`opencode/mimo-v2.6-flash-free`, aka MiMo-V2.6-Flash Free) / Xiaomi MiMo
- Date: 2026-11-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.6 Free — Xiaomi's MiMo-V2.6-**Flash** served as a **$0 OpenCode Console model** (official docs name: "MiMo-V2.6-Flash Free"; the docs surface was renamed **Zen → Console**, path now `/v2/docs/console/models`). Same MIT-licensed 309B-total/15B-active MoE weights as `mimo-v2.6-flash`, under a restricted gateway profile.
- **Short description:** OpenCode's zero-price pick for high-volume agentic coding — the full-modality Flash model at **$0 in/out**, an **ongoing** offer with no fixed end date (offer tracker, 2026-11-08); official privacy note: *"During its free period, collected data may be used to improve the model."* See our sibling `mimo-v2.6-flash` report for the model itself (release 2026-09-22, RL transparency run, TB2.1 87.6, OSWorld 80.8, AA-LCR 74.3).
- **Provider / access:** OpenCode Console only — endpoint `https://opencode.ai/inference/openai/v1/chat/completions` (OpenAI-compatible; prior pass recorded `https://opencode.ai/zen/v1/chat/completions` — docs migration, same route family), config id `opencode/mimo-v2.6-flash-free`. **App-only:** a keyless raw API call returns **HTTP 403 `FreeTierError`** (tested 2026-10-21) — the free model is reachable inside OpenCode apps, not as a bring-your-own-key endpoint. Pricing table lists **Free / Free / Free** (input/output/cache read).
- **Release / knowledge:** model released 2026-09-22 (Flash weights); free offering **still live on 2026-11-08, "ongoing — no fixed end date"** (offer tracker; official docs still frame it as a free-period promo that can be metered or revoked). Knowledge cutoff not published.
- **Context window:** the official Console model page **publishes no context/output numbers** in this pass — the prior **200,000 in / 32,000 out** serving-cap reading (models.dev + pi.dev, 2026-10-07) stands unrefuted; far below the weights' native 1,048,576/131,072 on paid routes.
- **Modalities:** **text, image, audio, video in; text out; reasoning yes** (models.dev `opencode` entry). ⚠ pi.dev's probed catalog lists only text+image for this endpoint — audio/video pass-through through the gateway remains unverified; the 200K/32K downgrade is already scored.
- **Pricing (as of 2026-11-08):** **$0** all charges on Console (official pricing table, Free/Free/Free). Fallback paid pricing if the promo ends: $0.14 / $0.28 per 1M (Xiaomi native, same as Flash).
- **Architecture:** proprietary-flash — 309B/15B sparse MoE, 681M vision encoder, audio tokenizer, MTP decoding; MIT weights self-hostable (irrelevant to this Console route's $0 price).

> **Affiliation flag:** this report is written by MiMo 2.6 Flash — a Xiaomi model evaluating a Xiaomi model, on the very model family being served. Treat scores and framing with that self-affiliation in mind.

### Raw benchmarks found

> Same underlying weights as `mimo-v2.6-flash` → benchmark evidence tracks that report's rows (vendor-run Xiaomi tables + independent catalogs). No separate free-tier benchmark suite exists — the free-specific evidence is the serving profile below. 2026-11-08 second pass: offer/endpoint re-verified, plus fresh independent rows for these weights (vision + long-context reads) via our sibling flash research.

Agent / tool use:

- Terminal-Bench 2.1: **87.6** (Xiaomi table; BenchmarkList 93rd pct, rank 15/194 — clears the 85 ref).
- AutomationBench v1.0.6: **52.3**; OSWorld-Verified: **80.8** (17/70); Toolathlon-Verified: 73.6; JobBench 61.2 (8/48); Agents' Last Exam pass 27.6; AA-Briefcase 1495 Elo (21/145).
- Terminal-Bench 4.0: **28.8** (17/29 — weak spot); ProgramBench 26.0; GDPval/MCP-Atlas: none.

Reasoning / knowledge:

- Humanity's Last Exam: **35.1** (88th pct, 58/478) — under the 40 ref.
- AA Intelligence Index: **27** (v5.0.1 rescale, independent) — the prior 37.9 was on v4.3.x; **the two scales are not comparable**, and both sit under the 60 ref.
- GPQA/MMLU/ARC-AGI: not published; AIIQ composite 122 (70th pct); GDPval-AA **55.4**; Omniscience **27.2 / 52.2** (fresh independent rows for these weights).

Coding:

- DeepSWE v1.1: 67.9 table / 65.7 launch post — under the 74 ref (RL lifted it ~17 pts from 48.8).
- SciCode: **51.3** (85th pct) — under the 55 ref; Terminal-Bench 2.1: 87.6 (clears); MiMo Code Bench 61.2 (custom).
- SWE-bench Verified: not on card; RankLLMs cites 67.2 (attribution uncertain); independent DevOps spot-check (ComputingForGeeks): 0/3 manifests served HTTP 200, "fine for drafts and not for merges."

Long context / multimodal:

- AA-LCR: **74.3%** (independent, 78th pct; leader Kimi K3 88.7) — retrieval evidence at **200K-capped** window on this route; no needle row ≥512K.
- **AA-MMMU-Pro: 73.1** — first independent vision row found for these weights (2026-11-08 pass): **mid-pack**, not a vision flagship reading.
- Full input modalities (text/image/audio/video per models.dev); no free-route-specific vision/audio rows (custom MiMo VisualCoding 71.5 only).

Free-route specifics (this entry only):

- Console pricing row **Free / Free / Free** for `mimo-v2.6-flash-free`; offer **ongoing, no fixed end date** as of 2026-11-08.
- **App-only access:** keyless API call → HTTP 403 `FreeTierError` (tested 2026-10-21) — no BYOK programmatic use.
- Official page publishes **no context/output caps** in this pass; models.dev/pi.dev 200K/32K/$0 reading stands.
- Privacy: data collected during the free period may be used to improve the model.
- BenchLM does **not** track this slug (`mimo-v2-6-free` → 404, 2026-11-08) — no independent harness row for the free route itself.

### Normalized scores (1–100)

- **Tool use: 86/100.** Held: identical weights → TB2.1 87.6 (93rd pct, ref-clearing), AutomationBench 52.3, OSWorld 80.8, JobBench 61.2; same deductions as flash: TB4.0 28.8, ALE 27.6, ProgramBench 26.0, no GDPval/MCP-Atlas. App-only access is a delivery restriction, not a capability change.
- **Reasoning: 77/100.** Held: HLE 35.1 and AIIQ 122 remain respectable mid-tier readings that miss the headline refs; AA Intelligence Index 27 (v5.0.1) is non-comparable to the old 37.9 (v4.3.x) but is under the 60 ref on either scale; no GPQA/ARC row.
- **Context window: 86/100.** Held: the weights' 1M native stays **capped to 200K on this route** (official page now publishes no cap at all — unrefuted 200K/32K reading); below the 262K→90 tier floor; AA-LCR 74.3% still proves real retrieval within the cap.
- **Multimodal: 90/100.** (was 92) The first independent vision row for these weights, **AA-MMMU-Pro 73.1**, reads mid-pack rather than flagship → −2. Still credited for full text/image/audio/video input per models.dev (audio band 90–100), docked for pi.dev's conflicting text+image-only listing on this endpoint, the 32K output cap, and no free-route vision/audio benchmark.
- **Coding: 84/100.** Held: same profile as flash — TB2.1 87.6 clears at the frontier edge; DeepSWE 67.9 and SciCode 51.3 miss refs; independent runtime test failed 2-of-3 checks; benchmark evidence not re-run on the free endpoint (identical-weights assumption flagged).
- **Cost efficiency: 100/100.** Held: **$0 in, $0 out, $0 cache** — theoretical maximum of the cost axis; the offer is still live with **no fixed end date** as of 2026-11-08 (caveats: promo nature, no SLA, can be metered/revoked, app-only access, 200K/32K caps — none is a per-token price).
- **Overall Score: 84.6/100.** (86+77+86+90+84)/5 = 84.6 — the flash model at literally zero price, with the catch spelled out: a 200K/32K serving cap, promo-conditioned availability, app-only access, mid-pack vision (AA-MMMU-Pro 73.1), and mid-tier independent reasoning that the price tag forgives rather than fixes.

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi — opencode/mimo-v2.6-flash)** — 2026-11-08
- **Affiliation:** reporter and subject are both Xiaomi MiMo models (this entry is my own weights on a free route) — self-evaluation; scores are normalized 1–100 interpretations, not official vendor scores.
- Method: fresh public internet research (2026-11-08 pass) — official OpenCode Console docs (pricing table Free/Free/Free, `inference/openai` endpoint, 403 FreeTierError app-only note, no published context/output), offer tracker (ongoing, no fixed end date), DuckDuckGo sweep, BenchLM coverage check (slug not tracked); independent benchmark rows (AA-MMMU-Pro 73.1, AA index v5.0.1 = 27, GDPval-AA 55.4, Omniscience) restated from our same-day `mimo-v2.6-flash` research (same weights).
- Future sources: add a new file next to this one, e.g. `MiMo_2.6_Flash.md`, using the same headings.

---

> **Preserved verbatim during the 2026-11-08 second-pass enrichment (archive not re-scored).** The section below is the merged duplicate `Mimo_v2.6_Flash.md` kept under the never-delete rule; only the first (canonical) score block above counts.

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
