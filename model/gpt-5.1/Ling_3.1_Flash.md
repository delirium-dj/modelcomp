# GPT 5.1 — findings by Ling 3.1 Flash

- Source: OpenAI (`openai/gpt-5.1`; API `gpt-5.1`, Instant and Thinking variants)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT 5.1
- **Short description:** OpenAI's November-2025 flagship — a usability-focused revision of GPT-5 (warmer default tone, adaptive reasoning, Instant/Thinking variants replacing the opaque router) with GPQA Diamond 88.1%, SWE-bench Verified 76.3% (release-reported) and AIME 2025 94%, at $1.25/$10 per 1M; held the flagship for under a month before GPT-5.2.
- **Provider / access:** OpenAI API and Azure; Batch API at half rate; prefix caching (50–90% off repeated inputs). `noFreeId` (repo stub; treat as unverified).
- **Release / knowledge:** 2025-11-12 (GPT-5.1-Codex-Max followed a week later; GPT-5.2 arrived 2025-12-11); knowledge cutoff not stated in the materials reviewed.
- **IDs:** `openai/gpt-5.1`. NOTE: the repo `meta.json` is a stale stub ("128K total", "Text in/out") — the model has a 400K window and vision (MMMU is among its evaluated benchmarks).
- **Context window:** 400,000 tokens.
- **Modalities:** text, image in (MMMU evaluated); text out.
- **Pricing (as of 2026-10-02):** $1.25/$10.00 per 1M input/output; cached input $0.125/M; Batch API $0.62/$5.00 (The Known Good's tracked OpenAI first-party rate); ~70 tok/s; TTFT ~1.1–1.2s.
- **Architecture:** dense Transformer; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- SWE-bench Verified: **76.3%** (release-reported) / **68%** (The Known Good's tracked ingestion, vs its 71% tracked average)
- Known Good Index: **74** (composite of GPQA Diamond, Mock AIME 2024–25, MATH Level 5, SWE-bench Verified, LiveBench, HLE and Terminal-Bench, normalised 0–100; tracked average 65)
- MCP-Atlas (arXiv 2602.00933, Scale AI): GPT-5.1 sits in the below-65% tier — 50.4% of its diagnosed failures are tool-acquisition failures (the paper singles out GPT-5.1 alongside Claude Haiku 4.5 for failing before gathering evidence, vs a 36.7% cross-model average); GDPval-AA v2.1 **826** (AA)
- Terminal-Bench / BrowseComp / MCP Atlas / OSWorld / τ-Bench / GDPval: no verified public score found at launch — second-pass fills: τ²-Bench Telecom **81.9%** (AA, high; vendor 95.6%); τ-bench Retail **77.9%** (vendor); Terminal-Bench 2.1 **52.4%** (AA + BenchmarkList #74 of 194); Terminal-Bench Hard **45.5%** (AA); Terminal-Bench 2.0 **44.9%** (Vals; #28 of 68); Terminal-Bench 1.0 **47.6%** (AnotherWrapper); SWE-bench Pro **57.9%** ±1.8; DeepSearchQA **75.3%**; BrowseComp Long Context 128k **90.0%** (OpenAI appendix); τ-Bench Banking **15.9%** (AA, weak)

Reasoning / knowledge:

- GPQA Diamond: **88.1%** (release-reported; The Known Good: 88, vs its 65% tracked average)
- Vals AI: MMLU Pro 86.4%, MGSM 93.0%, MedQA 96.4%, MedScribe 88.1%, LegalBench 85.7%, TaxEval v2 74.9%, SAGE 43.2%, MortgageTax 61.4%, MedCode 52.7%; Shawn Hack: ARC-C 98.4% (#5 of 40), MATH 97.8% (#7 of 50), MMLU 92.4% (#9 of 54), HumanEval 95.6% (#7 of 50), ARC-AGI 18.3% (#31 of 38), Arena Elo 1425 (#25 of 51); FrontierMath 31.03% (official) / v2 Tiers 1–3 31.0% / Tier 4 12.5%; ARC-AGI-1 72.83%; BioMysteryBench 39.7%; BullshitBench v2 25%; JobBench 10.4%
- AIME 2025: **94%**; Mock AIME 2024–25: **89** (vs the 54 tracked average)
- MATH Level 5, LiveBench, Humanity's Last Exam: components of the Known Good Index (individual figures not captured)
- AA Intelligence Index: **24.7** (v4.3.2, high — estimated, below the 26 median; 13.3 non-reasoning; evals.report's unverified launch-era read of 47.7 is a different index version — both kept)
- AA rows (high unless noted): GPQA Diamond **87.3%** (Epoch 87.6 ±1.9 high / 85.0 ±2.1 medium), HLE **28.5%** (42.2% ±6.4 estimated on benchgap — both kept), CritPt **4.9%**, AA-Omniscience **+5** (accuracy 37.7% / non-hallucination 48.1%), MMLU-Pro **87.0%**, IFBench **72.9%**, AIME 2025 **94.0%**, AIME26 **95.5%** ±0.6 (estimated), MMMU-Pro **75.5%** (AA; 83.2% Vals)

Coding:

- SWE-bench Verified: **76.3%** (release) / 68% (tracked) — see above
- Second-pass fills: LiveCodeBench **86.8%** (AA high; 86.5% BenchmarkList #15 of 123; 85.6% Shawn Hack; 84.8% benchgap v6 estimated); LiveCodeBench Pro **2269** Codeforces Elo (official); AA Coding Index **49.4**; SWE-bench Verified **69.8%** (BenchmarkList #50 of 72; Vals) vs 68.0% (official ingestion) / 66.9% ±2.1 (Epoch AI high, 2 runs) / 66.0% (medium, mini-SWE-agent) / 66% (Sophon) — independent reads cluster at 66–70%; ALE-Bench **1192.15** (#11 of 83); IOI **21.5%** (#23 of 58); Vibe Code Bench v1.1 **24.6%** (#41 of 75); LibEvoBench 70.7 (#6 of 13); HumanEval 95.6%; WebDev Arena 1391.46 (#65 of 105)

Long context / multimodal:

- 400K window; no MRCR/RULER/GraphWalks score published; AA-LCR v1.1 **80.0%** (AA, measured) — the first independent long-context retrieval read
- MMMU: **76%** (AI Release Tracker) vs **85.4%** (llm-stats) — sources disagree, both kept; MMMU-Pro **75.5%** (AA) / **83.2%** (Vals); Vals Multimodal Index **52.7**

### Normalized scores (1–100)

- **Tool use: 68/100.** No verified agentic-tool benchmarks (Terminal-Bench 2.x, BrowseComp, MCP Atlas, OSWorld, τ-Bench, GDPval) were found in the materials reviewed; second-pass agentic rows are mixed: τ²-Bench Telecom 81.9% (AA) and τ-bench Retail 77.9% (vendor) are strong, but Terminal-Bench 2.1 52.4%, Terminal-Bench Hard 45.5%, SWE-bench Pro 57.9% are mid-tier and MCP-Atlas puts GPT-5.1 in the below-65% tier (50.4% tool-acquisition failures), so the mid-band stands.
- **Reasoning: 80/100.** GPQA Diamond 88.1% sits just under the 90%+ frontier band and AIME 2025 94% / Mock AIME 89 (vs a 54 average) are strong, HLE reads 28.5% (AA) / 42.2% (estimated), the AA Intelligence Index reads 24.7 (v4.3.2, estimated, below the 26 median), CritPt 4.9% and AA-Omniscience +5 (37.7% accuracy) are weak-to-mixed, and 87.3–88.1% GPQA trails the 93%+ current frontier.
- **Context window: 76/100.** 400K-token window — double the 200K=70 reference, well under the 1M frontier, with AA-LCR 80.0% (independent) and BrowseComp Long Context 128k 90.0% (vendor) but no ≥98%-at-512K+ figure.
- **Multimodal: 65/100.** text/image in with text out — the +image-in band (60–70); MMMU reads 76% (AI Release Tracker) vs 85.4% (llm-stats, flagged) and MMMU-Pro 75.5–83.2%.
- **Coding: 70/100.** SWE-bench Verified 76.3% (release-reported) vs 66.9% ± 2.1 (Epoch AI, high, 2 runs) / 68.0% (official ingestion) / 66.0% (medium, mini-SWE-agent) — the independent reads cluster at 66–68%, mid-tier by 2026 standards; independent LiveCodeBench reads cluster at 84.8–86.8%, but AA Coding Index 49.4, Vibe Code Bench 24.6%, IOI 21.5% and LiveCodeBench Pro 2269 Elo are under the frontier, and Terminal-Bench 2.x (52.4%/45.5%/44.9%) is mid-tier.
- **Cost efficiency: 73/100.** $1.25/$10.00 per 1M interpolates to ~73 between the ~88 ($1.25/$4.25) and ~60 ($3/$15) references — the $10 output half is the drag; Batch API at half rate (~88) and cached reads at $0.125/M are offsets.
- **Overall Score: 72/100.** (68+80+76+65+70)/5 = 71.8 → 72 — a solid late-2025 flagship (GPQA 88.1%, AIME 94%, SWE-bench Verified 76.3%, 400K context) whose evidence base is thin on the 2026 agentic boards and whose $10/M output price dates it; scored against the October-2026 frontier, not its launch-era standing.

---

## Update 2026-10-08 (6-day re-research)

Epoch AI, evals.report and unifybench rows found:

- SWE-bench Verified (Epoch AI, 2026-02-18): **66.9% ± 2.1** at high (2 runs); **66.0%** at medium (mini-SWE-agent) — vs the 76.3% release-reported figure; evals.report's official ingestion reads **68.0%** (sources disagree by ~1 point; all stand)
- LiveCodeBench Pro: **2269** Codeforces Elo (official, launch) — fills the LiveCodeBench gap; below the 2400+ frontier
- GPQA Diamond: **87.6%** (official ingestion) vs 88.1% release-reported — consistent
- unifybench's Nova-2 table rows: SWE-bench Verified 76.3% (first-party, effort unspecified) with 88.9% observed win share; LiveCodeBench 100.0% observed win share; Terminal-Bench 1.0 53.8% (legacy board)
- Still unpublished: Terminal-Bench 2.x, BrowseComp, MCP Atlas, OSWorld, τ-Bench, GDPval, DeepSWE, SciCode, AA Coding Index, AA Intelligence Index, MMMU figure
- **Coding revised 72→70** (independent SWE-bench Verified reads cluster at 66–68%, LiveCodeBench Pro 2269 Elo is under the frontier); Overall unchanged at 72 ((68+80+76+65+70)/5 = 71.8)

---

## Update 2026-10-11 (deep second pass, 3 independent searches)

**No score changes** — Tool 68 / Reasoning 80 / Context 76 / Multimodal 65 / Coding 70 / Cost 73, Overall stays 72. The pass filled the agentic, reasoning-composite, long-context and MMMU gaps; the new rows corroborate the existing bands:

- **AA Intelligence Index 24.7** (v4.3.2, high — estimated, below the 26 median; 13.3 non-reasoning; evals.report's unverified launch-era 47.7 is a different index version — both kept).
- **Agentic (the launch gap):** τ²-Bench Telecom 81.9% (AA, high; vendor 95.6%) and τ-bench Retail 77.9% (vendor) are strong tool-use reads; Terminal-Bench 2.1 52.4% (AA + BenchmarkList #74 of 194), Terminal-Bench Hard 45.5% (AA), Terminal-Bench 2.0 44.9% (Vals) and SWE-bench Pro 57.9% ±1.8 are mid-tier.
- MCP-Atlas (arXiv 2602.00933, Scale AI): GPT-5.1 sits in the below-65% tier — 50.4% of its diagnosed failures are tool-acquisition failures (the paper singles out GPT-5.1 alongside Claude Haiku 4.5 for failing before gathering evidence, vs a 36.7% cross-model average); τ-Bench Banking 15.9% (AA) is weak; BrowseComp Long Context 128k 90.0% (OpenAI's appendix) and DeepSearchQA 75.3% support.
- **Reasoning:** GPQA Diamond 87.3% (AA) / 87.6% ±1.9 (Epoch high) / 88.1% (release) — consistent, still under the 90%+ frontier band; HLE 28.5% (AA) vs 42.2% ±6.4 (benchgap estimate — both kept); CritPt 4.9%; AA-Omniscience +5 (accuracy 37.7% / non-hallucination 48.1%); AIME 2025 94.0%, AIME26 95.5% ±0.6 (estimated), MATH 97.8%, ARC-C 98.4%; FrontierMath 31.03% / v2 Tiers 1–3 31.0% / Tier 4 12.5%; ARC-AGI-1 72.83%; MMMU-Pro 75.5% (AA) / 83.2% (Vals).
- **Coding:** independent LiveCodeBench reads cluster at 84.8–86.8% (AA 86.8%, BenchmarkList 86.5% #15 of 123, Shawn Hack 85.6%, benchgap v6 84.8% estimated); SWE-bench Verified independent reads cluster at 66–70% (69.8% BenchmarkList/Vals, 68.0% official ingestion, 66.9% ±2.1 Epoch high, 66.0% medium mini-SWE-agent) vs 76.3% release-reported; LiveCodeBench Pro 2269 Elo, ALE-Bench 1192.15 (#11 of 83), AA Coding Index 49.4, Vibe Code Bench v1.1 24.6%, IOI 21.5%.
- **Long context:** AA-LCR v1.1 80.0% (AA, measured) — the first independent retrieval read. **Multimodal:** MMMU 76% (AI Release Tracker) vs 85.4% (llm-stats) — sources disagree, both kept and flagged; MMMU-Pro 75.5% (AA) / 83.2% (Vals); Vals Multimodal Index 52.7. **Serving (AA):** 115 tok/s, TTFT 36.19s (thinking-mode latency), $1.3375 blended, knowledge cutoff September 2024.
- Still open: MCP Atlas under Scale's public board, OSWorld, BFCL, MRCR/RULER/GraphWalks, DeepSWE, and a measured (non-estimated) AA Intelligence Index run.
- Score impact: none — τ²-Telecom 81.9% supports Tool 68 while MCP-Atlas's below-65% tier and TB 2.1 52.4% cap it; GPQA 87.3–88.1% keeps Reasoning 80; AA-LCR 80.0% supports Context 76; LiveCodeBench ~85–87% and the 66–70% SWE-bench Verified cluster keep Coding 70. Overall stays (68+80+76+65+70)/5 = 71.8 → 72.

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-02 (updated 2026-10-08, 2026-10-11)
- Method: public internet research (OpenAI API docs, AI Release Tracker, The Known Good, TheModelverse, Artificial Analysis, OpenRouter (AA + Vals AI rows), BenchmarkList, benchgap, evals.report, Epoch AI, Shawn Hack, AnotherWrapper, arXiv 2602.00933); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5_1.md`, using the same headings.
