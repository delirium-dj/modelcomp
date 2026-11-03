# ByteDance Seed 2.0 Pro — findings by Qwen 3.8 Flash

- Source: ByteDance / Seed 2.0 Pro (`deepinfra/ByteDance/Seed-2.0-pro`)
- Date: 2026-10-02 (UTC); second pass 2026-11-03 (UTC) — Cost 92 provisional→**90 verified** (Volcano Engine ¥3.2/¥4.8 base tier ≈ $0.44/$2.11; $0.47/$2.37 and $0.67/$3.36 aggregate lanes logged); **2.1 Pro successor shipped 2026-06-23** (own folder per exact-ID rule; 2.0 Pro still sold, superseded≠deprecated); still **no AA/Vals independent replication** — vendor-reported caveat persists; bands unchanged
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** ByteDance Seed 2.0 Pro (flagship of the Pro/Lite/Mini/Code family)
- **Short description:** ByteDance's frontier multimodal reasoning agent — elite math (AIME 2025 98.3, HMMT 97.3, Codeforces 3020), strong tool use (τ²-Bench retail 90.4 / telecom 94.2, BrowseComp 77.3), hour-long video understanding (VideoMME 89.5) and LiveCodeBench v6 87.8 / SWE-bench Verified 76.5, at ~10× lower Western pricing on a 256K window. GPQA Diamond 88.9 sits just under the 90 bar and SWE-bench Pro 46.9 / Terminal-Bench 55.8 are mid.
- **Source provenance:** **BenchLM has no Seed 2.0 Pro page** (it tracks Seed 1.6, 2.0-Lite, 2.1-Pro only). Scores are drawn from the ByteDance Seed 2.0 official launch report (2026-02-14) as aggregated by Digital Applied — i.e. **vendor-reported** numbers, not independently re-normalised by BenchLM, so treat them with the usual caution.
- **Provider / access:** Volcano Engine API (`doubao-seed-2-0-pro`); Doubao app; TRAE IDE; DeepInfra (`deepinfra/ByteDance/Seed-2.0-pro`). No free ID.
- **Release / knowledge:** Feb 14, 2026 (Seed 2.0 launch); knowledge cutoff not disclosed.
- **IDs:** `deepinfra/ByteDance/Seed-2.0-pro` / `doubao-seed-2-0-pro`.
- **Context window:** 256K in / 65K out (curated meta and ByteDance provider page agree).
- **Modalities:** Text, image, video in; text out (curated meta; VideoMME/MathVision/MMMU confirm vision+video). Reasoning on; tool calls.
- **Pricing (as of 2026-10-02):** ~10× cheaper than Western frontier models (Volcano Engine pay-per-token).
- **Architecture:** proprietary, hosted (Volcano Engine / Doubao).

### Raw benchmarks found

> Sourced from the ByteDance Seed 2.0 launch report and Digital Applied's secondary aggregation (vendor-reported; **not on BenchLM** — no independent 618-row normalisation exists for this variant). Fetch/cross-check 2026-10-02.

Reasoning / mathematics:

- AIME 2025 **98.3**; AIME 2026 94.2; HMMT Feb 97.3; **GPQA Diamond 88.9** (just under 90); MMLU-Pro 87; HLE-Verified 73.6; gold medals on ICPC / IMO / CMO; leads AInstein Bench, FrontierSci above GPT-5.2

Coding:

- **Codeforces 3020** (near-grandmaster); **LiveCodeBench v6 87.8**; SWE-bench Verified 76.5
- SWE-bench Pro 46.9% (weak)

Agent / tool use:

- **τ²-Bench retail 90.4 / telecom 94.2** (clear ~88 bar); BrowseComp 77.3; WideSearch 74.7; Terminal-Bench 55.8; LMSYS Chatbot Arena Text **#6**, Vision **#3**

Multimodal / long context:

- **VideoMME 89.5** (hour-long video); TempCompass 89.6; MotionBench 75.2; MathVision 88.8; MMMU 85.4; MMMU-Pro 83.7; CharXiv / OCRBench strong
- 256K window; industry-best on DUDE / MMLongBench(-Doc) long-context (vendor-reported)

### Normalized scores (1–100)

> Derived from the raw numbers above using `model-comparison.md` v4 methodology. Overall = half-up mean of the five quality dims; Cost excluded. Vendor-reported (no BenchLM cross-check), so scores carry extra uncertainty.

- **Tool use: 82/100.** τ²-Bench retail 90.4 / telecom 94.2 are genuine frontier tool-use results and BrowseComp 77.3 / WideSearch 74.7 show strong autonomous research, but Terminal-Bench 55.8 and SWE-bench Pro 46.9 keep repo/terminal autonomy only mid.
- **Reasoning: 87/100.** Elite mathematical reasoning (AIME 98.3, HMMT 97.3, AIME26 94.2, ICPC/IMO/CMO gold) plus HLE-Verified 73.6 is outstanding; trimmed only by GPQA Diamond 88.9 sitting just under the 90 bar and MMLU-Pro 87 being upper-mid.
- **Context window: 78/100.** 256K sits just above the 100–200K (50–64) band in the undefined 200K–1M region; industry-best long-context/video reads (DUDE, MMLongBench, hour-long VideoMME) are supportive but vendor-reported and no ≥98% MRCR retrieval is independently shown.
- **Multimodal: 86/100.** A genuine text+image+video profile with strong temporal/motion results (VideoMME 89.5, TempCompass 89.6, MotionBench 75.2) plus MathVision 88.8 / MMMU-Pro 83.7 / CharXiv — top of the +video/PDF tier (75–90); text-only output keeps it under the non-text-output band.
- **Coding: 82/100.** Codeforces 3020 and LiveCodeBench v6 87.8 are exceptional competitive-programming signals and SWE-bench Verified 76.5 clears the ~74 bar, but SWE-bench Pro 46.9 shows repo-scale agentic engineering lags the contest strength.
- **Cost efficiency: 90/100.** (Revised by the 2026-11-03 second pass from 92/100: the vague "~10× cheaper" claim is now pinned — official Volcano Engine table (Feb 28, 2026 update): **"Seed 2.0 Pro, ¥3.2/M tokens, ¥4.8/M tokens, ¥9.6/M tokens, ¥16-48/M tokens"** [input / cache variants / output, context-tiered] ≈ **$0.44 in / $2.11 out** base tier before the long-context step-up to ¥16–48 (airedirector: **"¥16/1M output tokens, 256K Tokens context"**); https://therouter.ai/models/doubao--doubao-seed-2-0-pro/ lists **"~$0.47/$2.37 per million tokens via Volcano Engine"** and ofox **"~$0.67/$3.36"** — all under the $1.25/$4.25≈88 anchor, but the tiered output cliff keeps 92 from standing; anchored 90, readings logged un-averaged. Cost is excluded from Overall.
- **Overall Score: 83/100.** Mean of Tool 82, Reasoning 87, Context 78, Multimodal 86, Coding 82 = 83.0 → 83. Best fit: budget frontier multimodal reasoning — long/hour-long video & document analysis, math-heavy research and competitive coding at ~10× lower cost — with strong tool-use (τ², BrowseComp); the numbers are vendor-reported (no BenchLM page) and repo-scale engineering (SWE-bench Pro, Terminal-Bench) is mid, so verify agentic-coding and factual claims against independent runs.

---

## Second-pass update — 2026-11-03 (UTC)

Staleness-triggered re-research (prior pass 2026-10-02); three independent sources consulted.

**Sources:** Pricing — https://unifuncs.com/s/AaGQaw95 (302ai guide quoting **"Official Volcano Engine Pricing (Updated February 28, 2026): Seed 2.0 Pro, ¥3.2/M tokens, ¥4.8/M tokens, ¥9.6/M tokens, ¥16-48/M tokens"**) and https://therouter.ai/models/doubao--doubao-seed-2-0-pro/ (**"Seed 2.0 Pro is the strongest Chinese-origin frontier model at its price tier (~$0.47/$2.37 per million tokens via Volcano Engine)"**) and https://ofox.ai/blog/doubao-seed-2-0-api-guide-bytedance-budget-llm-2026/ (2026-05-20: **"Pro hits 98.3 on AIME 2025 and 76.5 on SWE-Bench Verified at ~$0.67/$3.36 per million tokens — roughly 4x cheaper output than GPT-5.2"** — ofox independently echoing the pass-1 AIME/SWE-V rows) and https://www.airedirector.com/en/model/doubao-seed-2.0-pro/ (**"¥16/1M output tokens, 256K Tokens context"**) · lifecycle — https://seed.bytedance.com/blog/seed2-1-officially-released-advancing-ai-productivity (2026-06-23: **"Seed2.1 Officially Released"**) and https://techjacksolutions.com/ai-tools/bytedance-seed/how-to-use-seed-api/ (**"At the June 24, 2026 launch, Volcano Engine listed Seed 2.1 Pro at CNY 6 in / CNY 30 out per million tokens (cache hits CNY 1.2)"** — successor priced higher, 2.0 Pro remains sold) · vendor docs — https://seed.bytedance.com/en/seed2 (**"three general-purpose agent models of varying sizes—Pro, Lite, and Mini"**) and https://lf3-static.bytednsdoc.com/…/Seed2.0%20Model%20Card.pdf (the model card remains the sole benchmark source) · replication — no Artificial Analysis page exists for Seed 2.0 Pro (AA comparisons only cover Seed-OSS-36B); Vals lists no Seed 2.0 Pro run — the vendor-reported caveat from pass 1 stands untouched.

**What moved and how it was resolved:**

1. **Cost 92→90 (provisional→verified):** $0.44–$0.67 in / $2.11–$3.36 out across three independent lanes sits under the 88 anchor, but the official table's context-tiered **¥16–48 output step-up** erodes the "~10× cheaper" blanket claim at long context — anchored 90 with all lanes logged.
2. **Successor: Seed 2.1 Pro (2026-06-23) is a separate folder** per exact-ID rule (BenchLM already tracks 2.1-Pro rows — pass 1 noted this); no sunset notice for 2.0 Pro, which remains sold and routed → superseded≠deprecated, keeps its ranked row (same treatment as grok-4.5/qwen-3.6-plus this pass).
3. **Vendor-reported status unchanged:** an external reviewer (ofox) re-quotes the same launch-report numbers (AIME 98.3, SWE-V 76.5) — echo, not replication; without independent normalization the bands keep pass 1's extra-uncertainty discount. Tool 82, Reasoning 87, Context 78, Multimodal 86, Coding 82 → 415/5 = 83.0 → **Overall 83**.

**Scores changed by this pass:** Cost efficiency 92→90 (excluded from Overall). **Overall remains 83.** Curation flag: vendor-reported-only (no AA/Vals replication as of 2026-11-03).

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-02
- Method: public internet research (ByteDance Seed 2.0 official launch report and Digital Applied's secondary benchmark aggregation). **BenchLM carries no Seed 2.0 Pro page**, so these are vendor-reported figures, not independently re-normalised — scores are 1–100 interpretations with elevated uncertainty.
- Second-pass signature: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-11-03. Method: ≥3 independent sources (unifuncs/302ai quoting the official Volcano table, therouter, ofox, airedirector, seed.bytedance blog, techjack); Cost 92→90 on the verified tiered ¥/US$ lanes; 2.1 Pro quarantined per exact-ID rule; vendor-reported caveat re-confirmed (no AA/Vals page exists) — **no quality dim changed and Overall remains 83**. Prior pass retained verbatim per RULES.md.
- Future sources: add a new file next to this one, e.g. `Seed_2.md`, using the same headings.
