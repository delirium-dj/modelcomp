# Claude Fable 5.1 — findings by Qwen 3.8 Flash

- Source: Anthropic / Claude Fable 5.1 (`anthropic/claude-fable-5.1`)
- Date: 2026-10-02 (UTC); deep second pass 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5.1
- **Short description:** Anthropic's Mythos-class model above Opus 5 for the most demanding reasoning and long-horizon agentic work, with 1M context and 128K output.
- **Provider / access:** Anthropic API (`claude-fable-5-1`); no OpenCode Zen free ID (`noFreeId`). Reasoning + tool calls. *(Second pass 2026-10-09: also on Amazon Bedrock (`anthropic.claude-fable-5-1`), Google Cloud, Microsoft Foundry and Claude Platform on AWS. **Claude Mythos 5.1 "offers the same capabilities" only to organizations verified through Anthropic's verification programs (e.g. the Cyber Verification Program) and "shares Claude Fable 5.1's specifications and pricing"** — so this folder and `claude-mythos-5.1` are the same model with different access gates. Anthropic's own guidance: "For most workloads, start with Claude Opus 5.5 … Use Claude Fable 5.1 for demanding reasoning and long-horizon agentic work, or when your evals on Claude Opus 5.5 at higher effort still fall short.")*
- **Release / knowledge:** 2026 (Fable 5.1 system card, with Mythos 5.1); knowledge cutoff not disclosed. *(Second pass: **released September 1, 2026**, status **Active (latest)**, retirement not sooner than **September 1, 2027**, and **reliable + training data cutoffs = Jun 2026**.)*
- **IDs:** `anthropic/claude-fable-5.1`.
- **Context window:** 1M in / 128K max out (curated meta). *(Second pass: confirmed by Anthropic. Note Fable 5.1 is **absent from the Message-Batches 300K-output beta list** that covers Opus 5.5 / Opus 5 / Sonnet 5.5 / Haiku 5.5 / Opus 4.8, so 128K is a hard output ceiling here. Thinking = **Adaptive (always on)**, default effort `high`; comparative latency **"Slower"** — Anthropic's slowest current model.)*
- **Modalities:** text, image, PDF in; text out; reasoning on; tool calls. No audio/video in, no non-text output. *(Second pass: Anthropic's capability table reads "Text and images → text"; PDF arrives through the API's `document` content block (100 pages / 32 MB per file), as documented for Opus 5.)*
- **Pricing (as of 2026-10-02):** Paid $10 / $50 per 1M; no free tier. *(Second pass: verified — $10 in / $50 out, **cache read $0.25 (2.5% of input, i.e. a 97.5% discount — the deepest in Anthropic's lineup)**, cache writes **$12.50 (5m) / $20.00 (1h)**, Batch API 50% off. The 5.1 release explicitly cut cache reads from Fable 5's rate. Artificial Analysis nonetheless measures **$7.63 per Intelligence-Index task (#109 of 226)** because the model is **very verbose: 190 M Index output tokens (#101/226, median 81 M)** at **70.3 tok/s (#100/226)**.)*
- **Architecture:** proprietary, hosted only.

### Raw benchmarks found

> Independently verified against BenchLM (54 of 618 rows), citing the Anthropic Claude Fable 5.1 & Mythos 5.1 system card, Artificial Analysis, Vals AI, Cursor, NeoCognition and OpenRouter (fetched 2026-10-02).
>
> **Second pass 2026-10-09:** BenchLM re-pulled (**54 of 625** tracks, page updated October 9, 2026, **Overall 81.86/100 — #4 of 889**) — every pass-1 row reproduced (TB 2.1 91.4 (AA) / 85.0 (Vals), TB 4.0 55.8 / AA 52.0, Toolathlon 77.8 / Pass@3 81.5 / 23.7 turns, τ³-Banking 47.2, AA Briefcase 1675–1678, Harvey LAB 93.0, AA Agentic 58.0, ApprenticeBench 72, OSWorld 41.7, AutomationBench 31.4 / AA 59.4, CWE-bench 58.0, HLE 65/60.9/59.1, GPQA 93.7/93.4, ARC-AGI-1 97.50 / ARC-AGI-2 90, MLCR 71.1, AA-LCR 85.3, Index 53.4, MMLU-Pro 92.4, CritPt 29.7, Omniscience 67.2/72.6, SWE-bench Pro 81.2, SWE Multilingual 89.1, SWE Multimodal 54.7, LCB 90.5, ProgramBench 87.6, Coding Index 81.6, DeepSWE 67.4, FrontierSWE 56.3, CursorBench 73.4/51.8, SciCode 63.1, Bug Hunt 43.0, GraphWalks 65.0). **One row moved: GDPval-AA 1735 → 1758** (AA normalized 61.7% → **62.9%**).

Agent / tool use:

- Terminal-Bench 2.1: **91.4%** (AA; Vals 85.0%) — TB 4.0 **55.8%** (AA 52.0%) — elite on the hard new tier
- Toolathlon-Verified: **77.8%** (Pass@3 81.5%, avg 23.7 turns); τ³-Banking 47.2%
- GDPval-AA: **1735** (AA normalized 61.7%); AA Briefcase Elo 1678; AA Harvey LAB 93.0%
- AA Agentic Index **58.0%**; ApprenticeBench 72%; OSWorld 2.0 41.7%; AutomationBench 31.4% (AA 59.4%); CWE-bench v1 58.0%
- *(2026-10-09)* **GDPval-AA 1758** (AA leaderboard; normalized 62.9%) · **Toolathlon Pass³ 73.1%** · **Terminal-Bench-Science 0.1 52.6%** · **AA-AnalystAgent 57.5%** · **GDP.pdf (AA) 26.2%** · **AA ITBench 49.5%**

Reasoning / knowledge:

- HLE: **65%** (w/o tools 60.9%, AA 59.1%); GPQA-Diamond **93.7%** (Vals 93.4%)
- ARC-AGI-1 **97.50%** / ARC-AGI-2 **90%** (system card); MLCR-AA **71.1%**; AA-LCR 85.3%
- Artificial Analysis Intelligence Index **53.4**; MMLU-Pro (Vals) 92.4; CritPt 29.7%
- Omniscience Accuracy / **Hallucination Rate: 67.2% / 72.6%** (high hallucination flag)
- *(2026-10-09)* **AA-Omniscience Index 43.5** · AA live page ranks the **"(max, default fallback)"** variant at **Index 53, #5 of 226** (class median 26)

Coding:

- SWE-bench Pro **81.2%**; SWE Multilingual 89.1%; SWE Multimodal 54.7%
- LiveCodeBench (Vals) **90.5%**; ProgramBench **87.6%**; AA Coding Index **81.6%**
- DeepSWE 67.4% (under 74 ref); FrontierSWE v2 56.3%; CursorBench 3.2 73.4% / 4.0 51.8%; AA-SciCode 63.1%; Bug Hunt 43 fixes

Multimodal / long context:

- Design Arena Website 1319 (OpenRouter); GraphWalks BFS 256K–1M 65.0%; MLCR 71.1 at 1M window.
- *(2026-10-09)* Design Arena **1318** (immaterial drift); **no new vision rows were published** for this id, so the multimodal evidence base stays thin — still only OpenRouter's design-arena Elo plus the OOD long-context probes (GraphWalks 65.0 is reported from **a rival's launch chart**).

### Normalized scores (1–100)

> Derived from the raw numbers above using `model-comparison.md` v4 methodology. Overall = half-up mean of the five quality dims; Cost excluded.

- **Tool use: 95/100.** Terminal-Bench 2.1 91.4% plus a benchmark-leading TB 4.0 55.8%, Toolathlon-Verified 77.8% and GDPval-AA 1735 sit in the 90–100 frontier band; mid OSWorld 41.7% and AutomationBench 31.4% keep it shy of the ceiling. *(2026-10-09: GDPval-AA has drifted up to **1758 / 62.9% normalized**, and the new rows are mixed — AnalystAgent 57.5% and TB-Science 52.6% are strong, GDP.pdf 26.2% and ITBench 49.5% are middling — so the band holds at 95 rather than moving.)*
- **Reasoning: 93/100.** HLE 65%, GPQA-Diamond 93.7%, ARC-AGI-1 97.5% / ARC-AGI-2 90% and MLCR-AA 71.1% all clear the high bars; capped by CritPt 29.7%, Index 53.4 and a 72.6% Omniscience hallucination rate.
- **Context window: 96/100.** 1M-token window / 128K output meets the ≥1M tier; MLCR 71.1, AA-LCR 85.3 and GraphWalks 65% at 256K–1M are strong but no ≥98% retrieval metric is reported, so short of 100.
- **Multimodal: 76/100.** Text+image+PDF in / text out — PDF ingestion puts it in the 75–90 band, but evidence is thin (Design Arena 1319 only), no audio/video in and no non-text output, so the floor of the band.
- **Coding: 92/100.** SWE-bench Pro 81.2%, LiveCodeBench 90.5%, ProgramBench 87.6%, AA Coding Index 81.6% and SciCode 63.1% clear the frontier refs; DeepSWE 67.4% (under the 74 ref) and SWE Multimodal 54.7% trim it.
- **Cost efficiency: 30/100.** $10 / $50 per 1M lands exactly on the $10/$50 ≈ 30 anchor; no free tier. *(2026-10-09: held at 30 despite the official **cache-read rate dropping to $0.25 (97.5% off — the deepest discount in Anthropic's lineup)** and Batch at 50%, because the measured economics are worse, not better: Artificial Analysis puts it at **$7.63 per Index task (#109 of 226)** — above Opus 5's $5.86 and GPT-6 Astra's $3.26 — on **190 M Index output tokens (#101/226, median 81 M)** at 70.3 tok/s, with cache writes at $12.50/$20.00. Anthropic's own docs and independent coverage ("One overthinks, the other cuts corners") both flag the overthinking. Cost is excluded from Overall.)*
- **Overall Score: 90/100.** *(re-derived 2026-10-09: Tool 95 + Reasoning 93 + Context 96 + Multimodal 76 + Coding 92 = 452 / 5 = 90.4 → 90 — no dimension moved, so the first pass's result stands.)* Best fit: the toughest long-horizon agentic coding and reasoning jobs where price is no object; ground factual recall (72.6% Omniscience hallucination) and route heavy multimodal/audio work elsewhere.

---

## Second-pass update — 2026-10-09 (UTC)

**Sources consulted (≥3 independent):** Anthropic model page — https://platform.claude.com/docs/en/models/fable-5-1/overview (released **Sep 1, 2026**, Active (latest), retirement ≥ Sep 1, 2027, 1M / **128K max output**, $10/$50, **cache read $0.25**, cache write $12.50/$20.00, Batch 50%, Adaptive-always-on, default effort `high`, latency "Slower", **cutoffs Jun 2026**, 5 platforms, Mythos 5.1 = same specs/pricing behind verification, "start with Opus 5.5 for most workloads", breaking changes: forced tool use errors, thinking blocks tied to the producing model and invalidated by editing earlier turns; additives: per-message effort, turn-scoped system messages, `display:"updates"`, lower cache-read price, content provenance) · Anthropic models overview — https://platform.claude.com/docs/en/models/overview · Anthropic announcement — https://www.anthropic.com/claude-fable-and-mythos-5-1 · **Fable 5.1 & Mythos 5.1 System Card (PDF)** — https://www-cdn.anthropic.com/0339e6a7c5c7b87f5c07798616dc32c215d14235/Claude%20Fable%205.1%20&%20Claude%20Mythos%205.1%20System%20Card.pdf · Artificial Analysis — https://artificialanalysis.ai/models/claude-fable-5-1 (**"(Max, Default Fallback)": Index 53 #5/226, 70.3 tok/s #100/226, $10.00/$50.00, 98% cache discount, $7.63/task #109/226, 190 M tokens #101/226, 1M ctx, text+image in**) · BenchLM — https://benchlm.ai/models/claude-fable-5-1 (**Overall 81.86/100, #4 of 889**, 54 of 625 tracks, Context Window 1M, updated October 9, 2026) · independent coverage — https://thenewstack.io/claude-opus-5-5-vs-fable-5-1/ ("One overthinks, the other cuts corners"), https://emergent.sh/learn/claude-fable-5-1-vs-opus-5 ("Fable 5.1 leads Anthropic's benchmark table on agentic and long-horizon work, but most gaps are a few points"), https://miraflow.ai/blog/claude-fable-5-1-benchmarks-pricing-explained-2026 ("cheaper cache pricing"), https://geotoolbox.ai/blog/claude-fable-5-1 ("Real Cost … the Catch"), https://www.aiagentslibrary.com/blog/claude-fable-5-1/

**Conflicts found and how they were resolved:**

1. **GDPval-AA 1735 (2026-10-02) vs 1758 (Oct 9).** Leaderboard drift as AA adds matches; normalized pairing moved 61.7% → 62.9%. Directionally favourable but within noise next to Opus 5's 1862, so **Tool use holds at 95** rather than rising.
2. **Cache economics vs measured cost.** Anthropic's list price is unchanged and the cache-read rate is now the cheapest in its lineup ($0.25 = 97.5% off), which naively looks like a cost improvement; AA's **measured** $7.63/task (#109/226) is the worst per-task figure in this batch — worse than Opus 5 ($5.86) and Astra ($3.26) — because the model emits **190 M** Index tokens. Scored on measured cost: **Cost stays 30**, with both facts recorded.
3. **"128K max output" vs the 300K batch beta.** The batches beta list includes Opus 5.5/5, Sonnet 5.5/5, Haiku 5.5 and Opus 4.8/4.7/4.6/Sonnet 4.6 — **not Fable 5.1**. So the output ceiling here is harder than the sibling Opus ids'; Context remains 96 (the dimension was already tempered by missing retrieval metrics, not by the output cap).
4. **Fable 5.1 vs Mythos 5.1 identity.** Anthropic states Mythos 5.1 "offers the same capabilities" and "shares Claude Fable 5.1's specifications and pricing" but is verification-gated. The two folders must therefore not be scored as if one were stronger; only the access gate differs. Flagged for the `claude-mythos-5.1` pass.
5. **GraphWalks BFS 65.0% and PostTrainBench v1.1 40.2%** are attributed on BenchLM to **Google's Gemini 4 Argon launch chart** — rival-reported, so used only as caveats (same treatment as in the Opus 5 / Astra / Gemini 3.8 Flash passes). **Gray Swan IPI 1.0%** (also rival-sourced) would be the best injection resistance in this batch if verified; not scored.
6. **BenchLM Briefcase 1675 vs the pass-1 1678 Elo** — leaderboard drift, immaterial.

**New rows this pass (absent from the 2026-10-02 report):** BenchLM composite **81.86/100, #4/889** · **GDPval-AA 1758 / 62.9% normalized** · **Toolathlon Pass³ 73.1%** · **Terminal-Bench-Science 0.1 52.6%** · **AA-AnalystAgent 57.5%** · **GDP.pdf (AA) 26.2%** · **AA ITBench 49.5%** · **AA-Omniscience Index 43.5** · full official spec block (Sep 1 2026 release, Jun 2026 cutoffs, $0.25 cache read, $12.50/$20 cache write, Batch 50%, no 300K batch output, `high` default effort, "Slower" latency, Mythos equivalence, the three breaking API changes) · AA measured economics (**$7.63/task, 190 M tokens, 70.3 tok/s**) · Design Arena **1318**.

**Scores changed by this pass:** **none.** Every quality dimension's evidence base either reproduced exactly (Tool 95, Reasoning 93, Context 96, Multimodal 76, Coding 92) or moved in a direction already priced in (GDPval up, GDP.pdf/ITBench middling, cache discount up but measured per-task cost still worst-in-batch). **Overall stays 90/100** (95 + 93 + 96 + 76 + 92 = 452 / 5 = 90.4 → 90, Cost excluded), and **Cost stays 30/100**. Curated queue Overall for this slug is 90.8 — within one point of the computed 90, so no queue reordering is implied beyond what the sync will recompute.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-02
- Method: public internet research (BenchLM rows citing the Anthropic Fable 5.1/Mythos 5.1 system card, plus Artificial Analysis, Vals AI, Cursor, NeoCognition and OpenRouter); scores are normalized 1–100 interpretations, not official vendor scores.
- Second-pass signature: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-09. Method: Anthropic's own Fable 5.1 model page + models overview + announcement + System Card, cross-checked against Artificial Analysis (live "(max, default fallback)" page) and BenchLM's October 9 snapshot, plus five independent write-ups; ≥3 independent sources, conflicts compared rather than averaged. **No score changed** — the single moving benchmark row (GDPval-AA 1735 → 1758) and the newly verified economics (cache reads $0.25 against a measured $7.63/task on 190 M tokens) both land inside bands already priced in, so **Overall holds at 90** and **Cost holds at 30**. New structural facts recorded: Sep 1 2026 release, Jun 2026 cutoffs, hard 128K output (no batch 300K beta), Mythos 5.1 spec/price equivalence, and Anthropic's own "start with Opus 5.5" guidance. Original 2026-10-02 findings retained verbatim above per `RULES.md`.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
