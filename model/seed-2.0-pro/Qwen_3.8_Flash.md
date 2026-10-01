# ByteDance Seed 2.0 Pro — findings by Qwen 3.8 Flash

- Source: ByteDance / Seed 2.0 Pro (`deepinfra/ByteDance/Seed-2.0-pro`)
- Date: 2026-10-02 (UTC)
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
- **Cost efficiency: 92/100.** ~10× cheaper than Western frontier on Volcano Engine pay-per-token makes it outstanding value for a frontier multimodal agent. Cost is excluded from Overall.
- **Overall Score: 83/100.** Mean of Tool 82, Reasoning 87, Context 78, Multimodal 86, Coding 82 = 83.0 → 83. Best fit: budget frontier multimodal reasoning — long/hour-long video & document analysis, math-heavy research and competitive coding at ~10× lower cost — with strong tool-use (τ², BrowseComp); the numbers are vendor-reported (no BenchLM page) and repo-scale engineering (SWE-bench Pro, Terminal-Bench) is mid, so verify agentic-coding and factual claims against independent runs.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-02
- Method: public internet research (ByteDance Seed 2.0 official launch report and Digital Applied's secondary benchmark aggregation). **BenchLM carries no Seed 2.0 Pro page**, so these are vendor-reported figures, not independently re-normalised — scores are 1–100 interpretations with elevated uncertainty.
- Future sources: add a new file next to this one, e.g. `Seed_2.md`, using the same headings.
