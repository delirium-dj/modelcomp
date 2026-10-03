# Gemini 1.5 Pro — findings by Ling 3.1 Flash

- Source: Ling 3.1 Flash (opencode/ling-3.1-flash-free) / Gemini 1.5 Pro
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **ERA NOTE:** A February/May 2024 model (updated September 2024), long superseded by the 2.0/2.5/3.x families but still served and priced as of October 2026. Its benchmark evidence is 2024-vintage (AA Intelligence Index 6, May '24); scores below are anchored to the 2026-10 frontier per this project's methodology, which is why the Reasoning and Coding scores sit low despite the model's historical importance.

## Model card

- **Name:** Gemini 1.5 Pro (Feb 2024 initial; "Gemini 1.5 Pro (May '24)" update; Sept 2024 update with >50% price cut and ~7% MMLU-Pro / ~20% MATH-HiddenMath gains)
- **Short description:** Google DeepMind's compute-efficient multimodal model that defined the long-context era — 2M-token window with near-perfect recall up to 10M tokens, multimodal input across text/image/audio/video, and SOTA (for its time) long-document QA, long-video QA, and long-context ASR.
- **Provider / access:** Google — Gemini API (AI Studio), Vertex AI; still listed with current pricing as of 2026-10. Non-reasoning (AA: "Reasoning: No… a reasoning variant may also exist").
- **Release / knowledge:** 2024-02 (initial), 2024-05 (update), 2024-09-24 (production-ready update, 64% input / 52% output price reduction for prompts <128K effective 2024-10-01). Knowledge cutoff November 2023 (AA, May '24).
- **IDs:** `gemini-1.5-pro` (current); repo folder `gemini-1.5-pro`.
- **Context window:** 2,097,152 tokens (2M); max output 8,192.
- **Modalities:** Text, image, speech (audio), video in; text out.
- **Pricing (as of 2026-10):** $1.25 input / $5.00 output per 1M for prompts <128K (VectorWire, effective 2026-06-03); $2.50 / $10.00 per 1M at ≥128K (AnotherWrapper, llm-stats; Oct 2026); 64% reduction on incremental cached tokens; a 1:1 blended 1M-in/1M-out costs $12.50, a 3:1 blend ≈$17.50.
- **Architecture:** Not disclosed in captured sources (MoE per the arXiv paper's framing as "highly compute-efficient"; parameter count not published in captured sources).

### Raw benchmarks found

- **Artificial Analysis Intelligence Index: 6** (May '24 snapshot; "below average in intelligence" per AA, well-priced for its tier).
- **BenchLeader Index: 42.9 ±4.0** (#533/430 — stale, last measured 2025-03-05): Reasoning 35, Multimodal 42, Composite 39.
- **GPQA Diamond: 58.9–59.1%** (AA no-reasoning May '24: 58.9%; llm-stats/AnotherWrapper: 59.1%; VectorWire: 58.89% no-reasoning Sep '24; the Feb-2024 version scored 41.5–46.2% per the arXiv paper).
- **HLE: 4.6%** (AA, BenchLeader). **ARC-AGI-2: 0.8%** (ARC Prize, BenchLeader).
- **MMLU: 85.9%** (AnotherWrapper/llm-stats; HF README 86.8; the 2024-09 update added ~7% MMLU-Pro). **MMLU-Pro: 75.8%**.
- **MMMU-Pro: 55.0%** (AA) / 46.9% (official MMMU-Pro); MMMU (validation) 65.8%; VISTA 37.1% (Scale AI SEAL).
- Paper (May '24 update): MATH 58.5% → **67.7%**; MathVista 52.1% → **63.9%**; InfographicVQA 72.7% → **81.0%**; EgoSchema 65.1% → **72.2%**; SOTA on AI2D, MathVista, ChartQA, DocVQA, InfographicVQA, EgoSchema (for its era); win-rate vs GPT-4 Turbo 78.1% (25 benchmarks, Feb) → 88.0% (44 benchmarks, May); vs Claude 3 Opus 77.8% (35 benchmarks).
- **Long-context recall (the standout):** 100% recall up to 530K tokens; 99.7% at 1M; 99.2% at 10M tokens (needle-in-a-haystack); near-perfect retrieval (>99%) up to at least 10M; Gemini 1.5 Flash: 100% text / 99.8% video / 99.1% audio recall up to 2M.
- Real-world: 26–75% time savings across 10 job categories (paper); Kalamang-language translation experiment (fewer than 200 speakers).
- No SWE-bench, LiveCodeBench, Terminal-Bench, Tau-bench, or MCP-Atlas scores found.

## Scores

- **Tool use: 48/100.** No tool-use benchmark captured (native function calling existed in 2024 but no Tau-bench/MCP-Atlas run was found); scored at the neutral midpoint.
- **Reasoning: 46/100.** GPQA 58.9–59.1% and MMLU-Pro 75.8% were strong in 2024 but sit well below the 2026-10 frontier; HLE 4.6% and ARC-AGI-2 0.8% are weak; AA Intelligence Index 6 (May '24), BenchLeader Reasoning 35.
- **Context window: 96/100.** 2M tokens with the strongest long-context evidence in this project: 99.7% recall at 1M and 99.2% at 10M tokens (measured, 2024) — the 95–100 band is justified by retrieval quality, not just window size.
- **Multimodal: 68/100.** Text, image, audio, and video input with era-SOTA multimodal results (MathVista 63.9%, InfographicVQA 81.0%, EgoSchema 72.2%, MMMU-Pro 55.0%); no audio output; dated by 2026-10 standards.
- **Coding: 47/100.** No LiveCodeBench/SWE-bench/Terminal-Bench scores found; 2024-era HumanEval/Natural2Code results exist in comparison tables (values not captured) and the Sept 2024 update added 2–7% on code evals; mid-to-weak by current standards.
- **Cost efficiency: 42/100.** $1.25/$5.00 (<128K) or $2.50/$10.00 (≥128K) per 1M — expensive for a model scoring in the 40s on Reasoning and Coding; the September 2024 cuts made it cheaper, not cheap.
- **Overall Score: 61.0/100.** Mean of Tool use 48, Reasoning 46, Context window 96, Multimodal 68, Coding 47 = 61.0 (Cost efficiency excluded per methodology).

> **Gap vs folder average (71.3): −10.3.** The gap is methodology, not oversight: peers appear to have weighted the model's historical long-context leadership and 2M window; this score anchors Reasoning/Coding to the 2026-10 frontier, where a 2024-vintage non-reasoning model scores in the 40s. The 99.2%-at-10M retrieval evidence is fully credited in the Context score.

## Notes

- Verification trail: arXiv 2403.05530 (Gemini 1.5 technical report — recall curves, benchmark gains, win-rates, Kalamang, time-savings), AA model page (Index 6, Index 6 May '24, modalities, cutoff Nov 2023, deprecation note), BenchLeader (Index 42.9, GPQA 58.9%, HLE 4.6%, ARC-AGI-2 0.8%, MMMU-Pro 55.0%, VISTA 37.1%), AnotherWrapper (pricing $2.50/$10.00, 2.1M ctx, 8K output, GPQA 59.1%, MMLU 85.9%, MMLU-Pro 75.8%), VectorWire ($1.25/$5.00 effective 2026-06-03, GPQA 37.07% May '24 vs 58.89% Sep '24 — the May-vs-Sep measurement vintage), llm-stats (22-benchmark Pro-vs-Flash comparison, $2.50/$10.00), Google Developers Blog (2024-09-24 update: price cuts, rate limits, MMLU-Pro/MATH gains).
- Known conflicts: GPQA 37.07% (VectorWire, May '24 AA) vs 58.89% (Sep '24 AA) — measurement vintage; MMLU 85.9% vs 86.8% (HF README); "#533 of 430" on BenchLeader is an index artifact (stale page).
- Open questions: whether Google still actively serves 1.5 Pro to new customers; modern-harness re-runs (any third party running LiveCodeBench on it would be news).
- Future sources: Google's model retirement notices; archived AA snapshots.

---

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-03
- Cross-model signed log: `model-findings.md` — append one line: `2026-10-03 Ling 3.1 Flash Gemini 1.5 Pro Overall=61.0 (Tool=48 Reasoning=46 Context=96 Multimodal=68 Coding=47 Cost=42; 2024-vintage; 99.2% recall at 10M)`
