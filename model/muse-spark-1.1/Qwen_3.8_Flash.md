# Muse Spark 1.1 — findings by Qwen 3.8 Flash

- Source: Meta / Muse Spark 1.1 (`opencode/muse-spark-1.1`)
- Date: 2026-10-02 (UTC); second pass 2026-11-03 (UTC) — Cost revised 65→85 (verified $1.25/$4.25 lane, cached $0.15 — pass-1 scored on a "Standard pricing" stub); 1M self-managed context and family lineage confirmed, quality bands unchanged
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.1
- **Short description:** Meta's reasoning-tier Muse Spark (sibling of Muse Spark 1.2/1.3). BenchLM ranks it high (#27 of 645; 66.6/100; 40/618 rows, Reasoning) on an **outstanding agentic/tool breadth** — MCP Atlas **88.1%**, Cybench 92.9%, Terminal-Bench 2.1 80.0%, OSWorld-Verified 80.8%, DeepSearchQA 84.9%, Toolathlon 75.6% — and solid coding (SWE-bench Vals 82.0%, LiveCodeBench Vals 85.9%, AA Coding Index 71.3%) and knowledge (GPQA ~90–91%, AA-HLE 46.2%). The main drags are a middling Intelligence Index (33.7), low full-length retrieval (MRCR 1M only 54.1%), weak newest-tier autonomy (GDPval-AA 35.4%, AA Agentic Index 27.5%, ExploitGym 0.8%) and image-only multimodality.
- **Provider / access:** Meta AI; OpenCode (`opencode/muse-spark-1.1`); OpenRouter (`meta/muse-spark-1.1`). Reasoning + tool calls; image input.
- **Release / knowledge:** 2026 (Muse Spark 1.1); cutoff not disclosed.
- **IDs:** `opencode/muse-spark-1.1` / OpenRouter `meta/muse-spark-1.1`.
- **Context window:** BenchLM lists **1M**; curated `meta.json` says "128K total" — conflict, resolved in favour of 1M (but see MRCR caveat).
- **Modalities:** Text + image in; text out (CharXiv/BabyVision corroborate vision; curated `meta.json` "Text in/out" is a stub).
- **Pricing (as of 2026-10-02):** Meta proprietary paid tier (exact per-1M not in curated meta; "Standard pricing" stub).
- **Architecture:** proprietary, hosted only.

### Raw benchmarks found

> Independently verified against BenchLM (40 of 618 rows; 66.6/100, #27 of 645, Reasoning type), citing the Meta AI Muse Spark 1.1 evaluation report, Artificial Analysis, Vals AI and OpenRouter (fetched 2026-10-02). Coverage is partial; BenchLM flags the overall score conservative.

Agent / tool use:

- MCP Atlas **88.1%**; Cybench **92.9%**; Terminal-Bench 2.1 **80.0%** (Vals 69.3); OSWorld-Verified **80.8%**; DeepSearchQA 84.9%; Toolathlon 75.6%; WebArena-Verified 69%; Finance Agent v2 57.2%; JobBench 54.7%; deepSWE 53.3%; CyberGym 59.0%
- weak newest/frontier autonomy: GDPval-AA **1375 / 35.4%**, AA Agentic Index 27.5%, OSWorld 2.0 14.2%, ExploitGym 0.8%

Coding:

- SWE-bench (Vals) **82.0%**; LiveCodeBench (Vals) **85.9%**; AA Coding Index **71.3%** (over 70 bar); SWE-bench Pro 61.5%; AA-SciCode 58.8%

Reasoning / knowledge:

- AA-GPQA Diamond **89.8%** (Vals 91.2 — at/over the bar); AA-HLE **46.2%** (over 40 bar; Meta HLE 62.1% w/tools, 52.2% w/o); MMLU-Pro (Vals) 88.7; HealthBench Professional 59.3%
- AA Intelligence Index **33.7** (moderate); CritPt 15.1%; AA-LCR 77.7
- AA-Omniscience Index 28.1 / Accuracy 52.1% / Hallucination 50.0% (moderate)

Multimodal / long context:

- CharXiv **88.4%** (strong document/chart); BabyVision 76.3; Design Arena Website 1278
- 1M window, but **MRCR 1M only 54.1%** (weak full-length retrieval); AA-LCR 77.7

### Normalized scores (1–100)

> Derived from the raw numbers above using `model-comparison.md` v4 methodology. Overall = half-up mean of the five quality dims; Cost excluded.

- **Tool use: 82/100.** Exceptionally broad and strong agentic coverage — MCP Atlas 88.1%, Cybench 92.9%, OSWorld-Verified 80.8%, Terminal-Bench 2.1 80.0%, DeepSearchQA 84.9% and Toolathlon 75.6% — tempered only at the newest autonomy frontier (GDPval-AA 1375 / 35.4%, AA Agentic Index 27.5%, ExploitGym 0.8%).
- **Reasoning: 74/100.** GPQA ~90–91% and AA-HLE 46.2% both clear their bars with a good Omniscience Index (28.1), but the Intelligence Index is only 33.7, CritPt 15.1% is low, and a 50.0% hallucination rate is a moderate reliability drag.
- **Context window: 80/100.** A native 1M window is the top band by size, but full-length retrieval is weak (MRCR 1M 54.1%) with only middling AA-LCR 77.7 — so it lands below the 90+ 1M tier that has strong retrieval, and the curated `meta.json` (128K) is a stub overridden by evidence.
- **Multimodal: 70/100.** Text+image in with a very strong document/chart read (CharXiv 88.4) and good general vision (BabyVision 76.3, Design Arena 1278) — the top of the +image band, but no audio/video rows and text-only output keep it out of the multi-input/omni tiers.
- **Coding: 80/100.** SWE-bench (Vals) 82.0%, LiveCodeBench (Vals) 85.9% and an AA Coding Index of 71.3% (over 70) clear the ~74 bar, tempered by SWE-bench Pro 61.5% and SciCode 58.8% on the harder/longer end.
- **Cost efficiency: 85/100.** (Revised by the 2026-11-03 second pass from 65/100, which was a stub-based provisional: the Meta Model API prices Muse Spark 1.1 at **$1.25 per million input / $4.25 per million output**, cached input **$0.15**, with $20 preview credits at launch — exactly the $1.25/$4.25 ≈ 88 anchor band; a hair under it at 85 because no durable free tier attaches to this slug.) Cost is excluded from Overall.
- **Overall Score: 77/100.** Mean of Tool 82, Reasoning 74, Context 80, Multimodal 70, Coding 80 = 77.2 → 77. Best fit: a strong agentic/tool-use and coding model (MCP/Cybench/OSWorld/Terminal-Bench breadth is a standout) with good GPQA/HLE grounding and solid document vision; its weak spots are full-length (1M) retrieval, frontier autonomy (GDPval/ExploitGym), only-image multimodality, and a middling Intelligence Index.

---

## Second-pass update — 2026-11-03 (UTC)

Staleness-triggered re-research (prior pass 2026-10-02); three independent sources consulted.

**Sources:** Pricing — https://aireiter.com/blog/muse-spark-1-1-api-pricing-guide (**"$1.25 per million input tokens and $4.25 per million output tokens, with $20 in free credits"** on the Meta Model API) and https://www.eesel.ai/blog/meta-muse-spark-11-pricing (**"lists at $1.25 per million input tokens and $4.25 per million output. Cached input is $0.15"**, four-meter billing breakdown) and https://dev.meta.ai/resources/blog/build-with-muse-spark (**"Pay-as-you-go pricing starts at $1.25"**) — all three match the OpenRouter lane for the sibling (https://openrouter.ai/meta/muse-spark-1.2: **"$1.25 per million input tokens, $4.25 per million output tokens"**) · lifecycle — https://ai.meta.com/blog/introducing-muse-spark-meta-model-api/ (**"Muse Spark 1.1 can actively manage its context window of 1 million tokens"**, launched 2026-07-09 via the Meta Model API public preview; no retirement listing) and https://benchmarklist.com/models/meta-muse-spark-1.2/ (1.2 is **"Meta's coding-focused update to Muse Spark 1.1, co-trained with the Muse Code terminal agent"**) · scores — https://modelscale.dev/models/muse-spark-1-1 (**"scores 66.06 overall … context window of 1M tokens — observed 2026-10-21"**, matching BenchLM's 66.6) and https://benchmarkheaven.com/models/muse-spark-1.1 (Xhigh-effort configs with per-task cost) · family — https://ai.meta.com/blog/introducing-muse-spark-msl/ and https://www.nytimes.com/2026-04-08/technology/meta-muse-spark-ai-model.html (MSL origin of the Muse line; powers the Meta AI assistant).

**What moved and how it was resolved:**

1. **Cost 65→85 — the stub is gone.** Pass 1 had no published rate and placed a provisional mid-band 65. Three independent guides plus Meta's own developer blog fix the lane at **$1.25/$4.25 with $0.15 cached input** — the methodology's $1.25/$4.25 ≈ 88 anchor, held to 85 for the absence of a durable free tier on this exact slug (the $20 preview credit is a launch promo, not a tier). The sibling 1.2 report already sits at verified pricing; both are now consistent. Cost is excluded from Overall — no effect on the quality dims.
2. **The 1M window's *quality* caveat survives.** Meta's launch post markets **active 1M-context management**, but no second-pass source rebuts the scored weakness — MRCR at 1M **54.1%** — so Context 80 (size tier top, retrieval pull) stands exactly as written; curated meta's 128 K remains a superseded stub.
3. **Scores corroborated, generation position unchanged.** ModelScale's independent 2026-10-21 observation (66.06 overall) matches BenchLM's 66.6 at capture; GDPval-AA 1375 / AA Agentic 27.5% / ExploitGym 0.8% still mark the frontier-autonomy gap that caps Tool 82, and the Intelligence Index 33.7 reading sits under the batch-wide AA v5 rebase (scale drift, no band move).
4. **Lineage bookkeeping:** 1.1 (Jul 2026) → 1.2 (coding-focused update, co-trained with Muse Code — own folder, second-passed today) → 1.3 → Muse Wonder (Oct 2026, n10 this sweep). None of the successors' rows were merged here per the exact-ID rule; 1.1 stays served on the Meta Model API with no shutdown signal.

**Scores changed by this pass:** Cost 65→85 (outside Overall). Tool 82, Reasoning 74, Context 80, Multimodal 70, Coding 80 → Overall = half-up mean(82, 74, 80, 70, 80) = 386/5 = 77.2 → **77, unchanged**.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-02
- Method: public internet research (BenchLM rows citing the Meta AI Muse Spark 1.1 evaluation report, Artificial Analysis, Vals AI and OpenRouter); partial coverage (40/618, Reasoning). Curated `meta.json` stub (128K/text) corrected to verified 1M/image with the MRCR-1M retrieval caveat. Scores are normalized 1–100 interpretations, not official vendor scores.
- Second-pass signature: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-11-03. Method: ≥3 independent sources (aireiter/eesel/dev.meta.ai pricing triangulation at $1.25/$4.25 + $0.15 cached, Meta launch post for window/lineage, ModelScale re-observation matching BenchLM, benchmarklist successor framing); Cost re-anchored 65→85 on verified pricing, MRCR-54.1% retrieval caveat survives intact, successor rows kept in their own ids, v5 treated as scale drift — **only Cost moved; Overall remains 77**. Prior pass retained verbatim per RULES.md.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
