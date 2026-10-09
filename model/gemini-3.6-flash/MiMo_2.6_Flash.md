# Gemini 3.6 Flash — findings by MiMo 2.6 Flash

- Source: Google DeepMind (`gemini-3.6-flash`)
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.6 Flash
- **Short description:** The "workhorse" Flash refresh (released 2026-07-21 alongside Gemini 3.5 Flash-Lite and the pilot-only 3.5 Flash Cyber) — beats 3.5 Flash on **every** published benchmark while using ~17% fewer output tokens on the AA index (up to 65% fewer on DeepSWE) and cutting the output price. Big leaps: MLE-Bench 49.7→63.9, DeepSWE 37→49, OSWorld 78.4→83.0, MRCR-v2 1M 26.6→54.0. Computer use became a built-in client-side Gemini API tool. Knowledge cutoff moved to March 2026.
- **Provider / access:** Gemini API / AI Studio / Vertex AI, Gemini app, Antigravity, Android Studio, GitHub Copilot, OpenRouter (Google AI Studio + Vertex providers).
- **Release / knowledge:** released 2026-07-21 (GA stable); knowledge cutoff **March 2026**.
- **IDs:** `google/gemini-3.6-flash` (gateway routes) / `gemini-3.6-flash` (native).
- **Context window:** 1,048,576 tokens; max output 65,536.
- **Modalities:** text, images, video, audio, PDF in; text out; reasoning yes (fewer reasoning steps/tool calls per task than 3.5 Flash); tool calls yes (function calling, structured outputs, code execution, search grounding, **Computer Use built-in**); no image/audio generation.
- **Pricing (as of 2026-10-07):** launch was $1.50/$7.50; Google's 2026-08-24 price cut makes standard **$0.75 in / $3.75 out** per 1M (cached input **$0.075**), Batch/Flex $0.375/$1.875, Priority $1.35/$6.75 — promotional, **returns to $1.50/$7.50 on 2027-01-01**. AA blended ≈ $0.63/M (3:1). Free tier. Paid.
- **Architecture:** proprietary (dense-vs-MoE and parameters undisclosed).

### Raw benchmarks found

Agent / tool use:

- OSWorld-Verified: **83.0** (Google — beats Sonnet 5's 81.2; 3.5 Flash 78.4). MLE-Bench: **63.9** (Google — near Sonnet 5's 66.9, roughly best-in-class per release trackers).
- GDPval-AA v2: **1421** Elo (Google; 3.5 Flash 1349, GPT-5.6 Luna 1584, Sonnet 5 1607 — mid-pack; v2 scale, not the v1 1750 ref).
- Terminal-Bench 2.1: **78.0** (Google) / **77.5** (AA, high effort) / **73.8** (Vals AI) — all below the 88% ref. Terminal-Bench 4.0 (AA): **7.1** (next-gen harness crushes it; frontier-tier models land in the 40s–70s on that board).
- τ-Bench Banking (AA): 29.9. Finance Agent v2 (Vals): 56.3. Design Arena Agents-arena Elos: 1146–1217.
- Claw-Eval / AutomationBench / ExploitBench: no verified public score found.

Reasoning / knowledge:

- GPQA Diamond: **92.8** (AA, high effort) and **93.4** (Vals AI) — both clear the 90%+ ref (not in Google's own table).
- HLE: **40.8** (AA, high effort) — clears the 40%+ ref by a thread. CritPt: 10.6.
- AA Intelligence Index: **50** at launch (press/Google-cited) vs **34.0** on AA's current methodology (high effort, OpenRouter — the index was re-based) — either reading is under the 60+ ref. Vals Index: 64.9 (their own scale).
- MMLU-Pro (Vals): 89.3. AA-Omniscience: 50.0 accuracy / 44.4 non-hallucination.

Coding:

- SWE-bench Pro (Public): **58.7** (Google; 3.1 Pro 54.2 — but GPT-5.6 Luna 62.7, Grok 4.5 64.7, Sonnet 5 63.2 above). DeepSWE v1.1: **49** (Google — big jump from 37, still under the 74 ref; Luna 67, Sonnet 5 54).
- LiveCodeBench (Vals): **88.1**. SWE-bench (Vals): 79.6. Vibe Code Bench: 64.0. AA Coding Index (high): **69.2** (just under the 70+ ref). SciCode (AA): 53.4 (just under the 55+ ref). IOI (Vals): 35.1.
- Terminal-Bench 2.1/4.0 as above. Code Migration (Vals): 30.9.

Long context:

- GDM-MRCR v2 (8-needle): **91.8% at 128K**, **54.0% at 1M pointwise** (Google) — roughly double 3.5 Flash and every peer's 1M row (3.1 Pro 26.3, GPT-5.6 Luna 74.8@128K only).
- AA-LCR (high effort): **80.0**. Still short of the ≥98%-at-512K+ condition, but clearly the strongest 1M retrieval among Flash-class peers.

Multimodal (Google-run unless noted):

- CharXiv Reasoning: **85.2** no tools / **89.4** with tools (top of Google's table). MMMU-Pro (Vals): **88.4**. Vals Multimodal Index: 65.1.

### Normalized scores (1–100)

- **Tool use: 85/100.** OSWorld 83.0 is board-topping, MLE-Bench 63.9 near-best, and TB2.1 ~78 solid; GDPval-AA v2 1421 is mid-pack, TB4.0 7.1 exposes a next-gen-terminal weakness, and τ-bank/DATA rows are mid.
- **Reasoning: 86/100.** Both hard refs cleared — GPQA 92.8/93.4 (90+) and HLE 40.8 (40+) — with MMLU-Pro 89.3; the AA Index (50 launch / 34 current) stays well under 60+ and CritPt is weak.
- **Context window: 96/100.** 1M capacity plus MRCR-v2 91.8/54.0 and AA-LCR 80 — the best long-context evidence in this tier, one notch above the 95 floor, still not the ≥98% condition.
- **Multimodal: 89/100.** Text + image + video + audio + PDF in (upper band); CharXiv 85.2/89.4 and MMMU-Pro 88.4 lead their tables; text-only out keeps it just under 90.
- **Coding: 80/100.** LiveCodeBench 88.1 and Vals SWE 79.6 are strong, SWE-Pro 58.7 and DeepSWE 49 are clear generational gains but trail frontier refs (…/74), AA Coding Index 69.2 and SciCode 53.4 each sit a hair under their refs, and TB4.0 7.1 is a hard miss.
- **Cost efficiency: 91/100.** Current $0.75/$3.75 promo sits just under the $0.60/$2.20 ≈ 92 anchor, with $0.075 cache reads, half-price Batch/Flex, free tier, and 17% fewer output tokens per task; the scheduled 2027-01-01 return to $1.50/$7.50 is the only reason it isn't higher.
- **Overall Score: 87/100.** (85+86+96+89+80)/5 = 87.2 → 87 — the efficiency sweet spot of the batch: every generational benchmark improved while price and token usage fell, with real 1M retrieval; mid-pack GDPval and the sub-ref long-horizon coding rows are the offsets.

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi — opencode/mimo-v2.6-flash)** — 2026-10-07
- Method: fresh public internet research (Google blog, DeepMind model card, benchr, DataNorth, HokAI, OpenRouter, AI Release Tracker, Kie.ai); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `MiMo_2.6_Flash.md`, using the same headings.

---

## Merged duplicate - Mimo_v2.6_Flash.md (same rater, spelling variant, merged 2026-10-09)

> This section preserves the full content of the deleted duplicate Mimo_v2.6_Flash.md (same Xiaomi MiMo 2.6 Flash rater; variant spelling _v2.6 vs _2.6 plus case). No benchmarks lost; canonical scores above remain the single parsed source (parser reads first score block).

# Gemini 3.6 Flash — findings by Mimo V2.6 Flash

- Source: Google DeepMind (`gemini-3.6-flash`)
- Date: 2026-10-06 (UTC) — re-run of the 2026-09-23 research
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.6 Flash
- **Short description:** Google DeepMind's July 2026 mid-tier Flash workhorse — multimodal agentic coding model sitting below 3.1 Pro, beat its 3.5 Flash predecessor on every published benchmark while cutting output price. Distinct from `gemini-3.5-flash` and later 3.7 Flash.
- **Provider / access:** Gemini API / Google AI Studio (`gemini-3.6-flash`), Vertex AI, Gemini Enterprise, Gemini app, GitHub Copilot (HokAI / Requesty). Chat-style generateContent API.
- **Release / knowledge:** Released 2026-07-21 (DeepMind model card; WaitWhichModel). Knowledge cutoff 2026-03 (WaitWhichModel).
- **IDs:** `google/gemini-3.6-flash`. Free tier available in Google AI Studio with account-specific rate limits (HokAI).
- **Context window:** 1,000,000 tokens; max output 66K tokens (Requesty / DeepMind).
- **Modalities:** multimodal input (image/audio/video supported per Flash-series lineage and product pages; text out); reasoning yes; tool calls yes; Computer Use built into Gemini API (HokAI); JSON/structured outputs yes.
- **Pricing (as of 2026-10-06):** DeepMind card cited **$1.50 in / $7.50 out** at launch; BenchLeader provider table (2026-10-06) now shows **$0.75 in / $3.75 out standard**, priority $1.35/$6.75, batch $0.375/$1.88 — likely a price cut or tier restructure since launch, **conflict flagged** (Requesty had listed $1.50/$7.00). Batch 50% off; cache input $0.075–$0.15 / 1M depending on tier (HokAI). Free Studio tier.
- **Architecture:** proprietary (dense/MoE undisclosed).

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- Terminal-Bench 2.1 (**agent**): **78.0%** (DeepMind model card, Terminus-2 harness); **78.9%** independent (BenchmarkList, 85th pct, rank 29/182)
- OSWorld-Verified: **83.0%** (DeepMind/HokAI vs 78.4% on 3.5 Flash)
- GDPval-AA v2: **1421** (DeepMind/HokAI)
- MLE-Bench: **63.9%** (HokAI)
- Tau3-Banking / Tau2-Bench / Claw-Eval / MCP-Atlas / Toolathon: no verified public score found for this ID in sources consulted

Reasoning / knowledge:

- GPQA Diamond: **92.8%** (AA-measured via WaitWhichModel); **93.4%** independent 2026-07-28 (BenchmarkList)
- HLE: **38.3%** (Artificial Analysis measurement via WaitWhichModel — not Google-reported)
- Artificial Analysis Intelligence Index: **50** third-party (WaitWhichModel; HokAI cites 34 under a later v4.3 methodology — methodology shift, both noted); BenchLeader AA row (2026-10-06): **34.0, #87 of tracked configs** at high effort
- BenchLeader composite index (2026-10-06): **60.5, #103 of 750** (high effort, best config) — categories Reasoning 63 / Knowledge 66 / Human-preference 68 / Long-context 65 / Multimodal 66 / Maths 60 / Coding 57 / Agents&tools 52
- LiveBench: **73.6% (#43)**; LiveBench Language **83.9% (#17)**; LiveBench IF **75.4% (#9)**; LMArena Text **1483 (#22)**, Vision **1297 (#20)**, IF **1472 (#34)**; Epoch Capabilities Index **154.3 (#36)**; MMMU-Pro **83.2% (#26, AA) / 88.4% (#7, Vals)** (BenchLeader 2026-10-06)
- LMArena Text Elo: **1485** rank 12 (WaitWhichModel / arena.ai)
- CritPt / Omniscience numeric: no verified public score found in sources consulted

Coding:

- SWE-bench Verified: **79.6%** (BenchmarkList independent, 82nd pct, rank 14/72, thinking high)
- SWE-bench Pro (Public): **58.7%** (DeepMind model card, self-reported)
- DeepSWE v1.1: **49%** (DeepMind card; BenchmarkList 49.0%)
- LiveCodeBench: **88.1%** (BenchmarkList, 98th pct, rank 4/123)
- SciCode: **52.7%** (BenchmarkList, 95th pct)
- Vibe Code Bench v1.1: **57.3%** (BenchmarkList, 77th pct)
- ProgramBench: **55.7%** raw pass (BenchmarkList); CursorBench 3.2: **53.5%** (6th pct); FrontierCode: **34.4%** (BenchmarkList); Android Bench: **75.6%** (BenchmarkList)

Long context:

- GDM-MRCR v2 128K: **91.8%**; 1M: **54%** (DeepMind/HokAI vendor-reported). AA-LCR: **80.0% (#71)** (Artificial Analysis via BenchLeader, 2026-10-06 — independent long-context confirmation)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`.

- **Tool use: 85/100.** TB2.1 78.0/78.9% is above the mid band and approaching the ~88% frontier line, with OSWorld-Verified 83.0% and GDPval-AA v2 1421 showing strong computer-use/knowledge-work agentic skill; capped below 90 because GDPval still trails Claude-class 1800+ ElOs and no Tau3/MCP-Atlas/Claw-Eval rows exist for this ID.
- **Reasoning: 90/100.** GPQA 92.8–93.4% is in the frontier 90%+ band and LMArena 1485 is competitive; held to 90 because HLE 38.3% sits just under the 40%+ frontier reference and AA Index 50 (or 34 on v4.3) remains below the top proprietary cluster (60+ on older scale / GPT-5.5-class).
- **Context window: 93/100.** Full 1M window with excellent mid-window retrieval (MRCR 128K 91.8%) but only 54% at 1M pointwise — far short of the ≥98%-at-512K+ bar for a top tier score; lands at 93 for large usable window + strong 128K recall.
- **Multimodal: 88/100.** Multimodal Flash-series input (image/audio/video lineage; computer use) with competitive multimodal reasoning; no single MMMU-Pro figure published for 3.6 in sources consulted (3.5 Flash hit 84.2) — score reflects confirmed multimodal product surface, not a 3.6-specific MMMU peak; text-only out caps it below 90+.
- **Coding: 88/100.** Independent SWE-V 79.6% + SWE-Pro 58.7% + LiveCodeBench 88.1% + TB2.1 ~78% make this a top Flash-tier coding stack; capped below 90+ because DeepSWE 49% and FrontierCode 34.4% still trail frontier agents (GPT-5.6 Sol DeepSWE ~73, Fable ~70), and CursorBench 53.5% is only 6th percentile of its field.
- **Cost efficiency: 78/100.** $1.50/$7.50 per 1M is well below frontier Opus/Fable pricing and cheaper than 3.5 Flash output ($9), with batch 50% and free Studio tier — but not in the sub-$1 Flash-Lite/cheap band (methodology ~$0.60/$2.20 ≈ 92), so ~78.
- **Overall Score: 89/100.** Mean of the five quality dims: (85 + 90 + 93 + 88 + 88) / 5 = 88.8 → 89. Best-fit: default high-volume agentic coding + multimodal workhorse when you want near-Pro terminal/SWE numbers at Flash prices.

---

## Signature

- Provided by: **Mimo V2.6 Flash (opencode/mimo-v2.6-flash)** — 2026-10-06
- Method: public internet research (DeepMind Gemini 3.6 Flash model card, BenchmarkList independent runs, WaitWhichModel/HokAI/Requesty aggregations); re-run 2026-10-06 (user-approved enrichment): BenchLeader model page (index 60.5 #103/750, AA 34.0 #87, LiveBench 73.6, AA-LCR 80.0 #71, MMMU-Pro 83.2/88.4, Epoch 154.3, provider price table showing $0.75/$3.75 standard — conflict with launch $1.50/$7.50 flagged). Scores unchanged: (85+90+93+88+88)/5 = 88.8 → 89. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

