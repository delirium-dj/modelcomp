# GPT-5 — findings by Ling 3.1 Flash

- Source: OpenAI (`openai/gpt-5`; API `gpt-5`, `gpt-5-chat-latest`; GPT-5 Pro variant)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5
- **Short description:** OpenAI's August-2025 unified flagship (quick + thinking in one system) — launch SOTA in math (AIME 94.6% no-tools), coding (SWE-bench Verified 74.9%, Aider Polyglot 88%) and multimodal understanding (MMMU 84.2%); GPT-5 Pro (extended parallel test-time reasoning) set a GPQA SOTA of 88.4% no-tools; superseded by GPT-5.1 within a month.
- **Provider / access:** OpenAI API (Responses, Chat Completions; default in Codex CLI), ChatGPT (all tiers; free users fall back to GPT-5 mini at limits), OpenCode Zen. `noFreeId`.
- **Release / knowledge:** 2025-08-07; knowledge cutoff not stated in the materials reviewed.
- **IDs:** `openai/gpt-5` / `gpt-5` / `gpt-5-chat-latest`.
- **Context window:** 400,000 tokens (272K input + 128K max output; reasoning tokens count toward the output cap); GPT-5 Pro: 400K window, 272K max output.
- **Modalities:** text, image, file (PDF) in; text out.
- **Pricing (as of 2026-10-02):** $1.25/$10.00 per 1M input/output; cached input $0.125/M; OpenCode Zen $1.07/$8.50; mini $0.25/$2, nano $0.05/$0.40.
- **Architecture:** unified quick/thinking system; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- SWE-bench Verified: **74.9%** (fixed n=477 subset, internal infra; o3 high: 69.1%) — with 22% fewer output tokens and 45% fewer tool calls than o3 at high effort
- Aider Polyglot: **88.0%** (o3: 79.6%)
- OSWorld **72.6%** (#7 of 72; sub-scores: VS Code 82.6%, LibreOffice Calc 87.2%, Thunderbird 73.3%, Gimp 73.1%, Writer 86.8%, Chrome 63.0%; OSWorld-Verified also 72.6%, #29 of 70); AndroidWorld **91.4%** (#3 of 22); MiniWoB++ **71.5%** (#1 of 6); WorkArena-L1 79.1% / L2 69.4% / L3 11.5%; DeepResearch Bench **50.6%** (#2 of 12); OmniGAIA **72.8%** (#3 of 15); GAIA (HAL) **62.8%** (#3 of 13); DeepPlanning 31.6%; EnterpriseOps-Gym 29.2%; Terminal-Bench Hard **37.9%** (#36 of 326); Terminal-Bench 2.0 **37.1%** (Vals; #43 of 68); Terminal-Bench 2.1 **35.2%** (AA + BenchmarkList, #105 of 194)
- Front-end web development: beats o3 **70%** of the time (internal testing)
- Terminal-Bench / BrowseComp / MCP Atlas / OSWorld / τ-Bench: no verified public score found at launch — second-pass fills: BrowseComp **54.9%** (vendor, thinking mode, 2025-08, steel.dev); τ²-Bench Telecom **84.8%** (AA, high); τ-Bench Banking **22.1%** (AA); MCP-Universe **44.2%** and MCP-Bench 0.75 (both #1 of their fields at release, BenchmarkList); MCPMark **52.6%** (#9 of 41); MultiChallenge **63.2%** (#15 of 41); APEX-Agents **33.0%** (#22 of 44); VitaBench 2.0 44.1%; CAR-bench 54.0%; MobileWorld 51.7%; AgentFloor 59.9%

Reasoning / knowledge:

- AIME 2025 (no tools): **94.6%** — launch SOTA (o3: 88.9%)
- HMMT 2025 (no tools): **93.3%** (o3: 81.7%)
- GPQA Diamond (no tools): **85.7%**; GPT-5 Pro: **88.4%** — launch SOTA (o3: 83.3%)
- HLE (no tools): **24.8%** (o3: 20.2%)
- FrontierMath (python tool only): **26.3%** (o3: 15.8%)
- External experts preferred GPT-5 Pro over GPT-5 thinking **67.8%** of the time across 1000+ economically valuable prompts; Pro made **22% fewer major errors**
- AA Intelligence Index: **23** (v4.3.2, high/medium; 21 low, 11 minimal — estimated, "independent evaluation forthcoming"; #138 of 227, below the 26 median)
- AA rows (high unless noted): GPQA Diamond **85.4%**, HLE **28.5%** (25.4% medium), CritPt **5.7%**, AA-Omniscience accuracy **40.3%** / non-hallucination **17.8%**, MMLU-Pro **87.1%**, IFBench **73.1%**, AIME 2025 **94.3%**, AIME **95.7%**, MATH-500 **99.4%**; Vals AI: GPQA 85.6%, MMLU-Pro 86.5%, MMMU-Pro 81.5%, MGSM 92.8%, MedQA 96.3%, LegalBench 86.0%, CaseLaw v2 66.5%, Finance Agent v1.1 52.2%, SAGE 43.7%; ARC-AGI-1 **65.7%** (#50 of 97), ARC-AGI-2 **9.9%** (#53 of 99)

Coding:

- SWE-bench Verified: **74.9%**; Aider Polyglot: **88.0%** — see above
- Second-pass fills: LiveCodeBench **85.9%** (BenchmarkList #20 of 123; AA 84.6% high; Vals 85.9%); SciCode **42.9%** (#90 of 296); AA Coding Index **37.8**; Vibe Code Bench v1.1 **20.1%** (#47 of 75); NL2Repo **21.7%** (#31 of 34); IOI **20.0%** (#25 of 58); ProofBench v1 **18.0%** (Vals); ALE-Bench **1162.45** (#14 of 83); SWE-bench Full **44.3%** (#2 of 9); SWE-bench Verified Mini (HAL) **46.0%**; SWT-Bench **79.8%** (#4 of 18); ArtifactsBench **72.55** (#2 of 8); PerfCodeBench **74.0%** (#1 of 23); USACO (HAL) **69.7%** (#1 of 10); WebCoderBench **13.8%** (#1 of 14); ABC-Bench 49.4% ±1.9; WebIGBench 60.2%; CORE-Bench Hard 26.7%

Long context / multimodal:

- 400K window; no MRCR/RULER/GraphWalks score published; AA-LCR v1.1 **78.2%** (high) / **76.0%** (medium) — the first independent long-context retrieval reads
- MMMU: **84.2%** — launch SOTA in multimodal understanding; second-pass: MMMU-Pro **81.5%** (Vals), MedQA 96.3%, MedScribe 83.7%, Vals Multimodal Index 49.9%, ScreenSpot-Pro 0.185 (#51 of 59)

### Normalized scores (1–100)

- **Tool use: 70/100.** SWE-bench Verified 74.9% (vendor, fixed n=477 subset; 65.9% on TrustTheBench's independent run) and Aider Polyglot 88.0% are strong coding-agent signals, Terminal-Bench 59.2% (TrustTheBench) and the second-pass agentic board (τ²-Telecom 84.8%, MCP-Universe 44.2% launch-SOTA, OSWorld 72.6%, BrowseComp 54.9%, DeepResearch Bench 50.6%, AndroidWorld 91.4%) support, while Terminal-Bench 2.1 35.2%, Terminal-Bench Hard 32.6–37.9%, τ-Bench Banking 22.1%, APEX-Agents 33.0% and VitaBench 2.0 44.1% cap; no MCP Atlas figure exists.
- **Reasoning: 78/100.** AIME 94.6% and HMMT 93.3% (no tools) are top-tier and GPT-5 Pro's GPQA 88.4% was a launch SOTA, base GPQA 85.4–85.7% sits under the 90%+ frontier band, HLE 24.8–28.5% is weak, CritPt 5.7% and AA-Omniscience (40.3% accuracy / 17.8% non-hallucination) are weak, and the AA Intelligence Index reads 23 (v4.3.2, estimated).
- **Context window: 76/100.** 400K-token window (272K in + 128K out) — double the 200K=70 reference, well under the 1M frontier, with AA-LCR 76.0–78.2% (independent) but no ≥98%-at-512K+ figure.
- **Multimodal: 68/100.** text/image/file in with text out — the +image/PDF band (60–70), corroborated by MMMU 84.2% and MMMU-Pro 81.5% (Vals).
- **Coding: 72/100.** SWE-bench Verified 74.9% (vendor) / 65.9% (independent) and Aider Polyglot 88.0% are solid, with SWE-Lancer $112K, FireBench 80.2% and the 70% front-end win over o3 supporting; independent LiveCodeBench reads cluster at 84.6–85.9%, but SciCode 42.9%, AA Coding Index 37.8, Vibe Code Bench 20.1%, NL2Repo 21.7% and IOI 20.0% cap, and SWE-bench Pro 52.4% and SWE-bench 57.5% (independent rows) are mid-tier.
- **Cost efficiency: 73/100.** $1.25/$10.00 per 1M (cached $0.125/M; Zen $1.07/$8.50) interpolates to ~73 between the ~88 ($1.25/$4.25) and ~60 ($3/$15) references — the $10 output half is the drag.
- **Overall Score: 73/100.** (70+78+76+68+72)/5 = 72.8 → 73 — a landmark August-2025 flagship (AIME 94.6%, SWE-bench Verified 74.9%, Aider 88%, MMMU 84.2%, 400K context) scored against the October-2026 frontier, where the independent Terminal-Bench 59.2% and SWE-bench Verified 65.9% reads, missing agentic-board evidence and the $10/M output price place it mid-pack.

---

## Update 2026-10-08 (6-day re-research)

Independent board rows found (TrustTheBench, 2026-08-15→23):

- Terminal-Bench: **59.2%** (independent, rank 80) — fills the Terminal-Bench gap; mid-band
- SWE-bench Verified: **65.9%** (independent, rank 25 of the saturated board, 2026-08-16) vs the vendor's 74.9% (fixed n=477 subset — the gap is config-driven)
- SWE-bench Pro: **52.4%** (independent, rank 90); SWE-bench (deprecated board): **57.5%**; FireBench: **80.2%** (rank 95); MMLU-Redux: saturated
- **Scores revised**: Tool 72→70 and Coding 75→72 on the independent reads (TB 59.2% mid-band, SWE-bench Verified 65.9%); Overall 74→73 ((70+78+76+68+72)/5 = 72.8)

---

## Update 2026-10-11 (deep second pass, 3 independent searches)

**No score changes** — Tool 70 / Reasoning 78 / Context 76 / Multimodal 68 / Coding 72 / Cost 73, Overall stays 73. The pass filled nearly every gap in the August-2025 evidence base; the new rows corroborate the existing bands:

- **AA Intelligence Index v4.3.2: 23** (high/medium; 21 low, 11 minimal — estimated, "independent evaluation forthcoming"; #138 of 227, below the 26 median) — a 2026-era composite cap, consistent with the model's 2025-era standing.
- **Agentic (the launch gap):** τ²-Bench Telecom 84.8% (AA, high) and MCP-Universe 44.2% / MCP-Bench 0.75 (both #1 of their fields at release) show era-leading tool use; OSWorld 72.6% (#7 of 72), AndroidWorld 91.4% and BrowseComp 54.9% (vendor) are solid; Terminal-Bench 2.1 35.2% (#105 of 194), Terminal-Bench Hard 32.6–37.9%, τ-Bench Banking 22.1%, APEX-Agents 33.0% and VitaBench 2.0 44.1% are the 2026-era caps.
- **Reasoning:** AA GPQA Diamond 85.4% (vs the 85.7% vendor read — consistent), HLE 28.5% (AA, vs 24.8% vendor — both weak), CritPt 5.7%, AA-Omniscience 40.3% accuracy / 17.8% non-hallucination (weak), MMLU-Pro 87.1%, IFBench 73.1%, AIME 95.7% / MATH-500 99.4% (AA); Vals: MMMU-Pro 81.5%, MGSM 92.8%, MedQA 96.3%, LegalBench 86.0%; ARC-AGI-1 65.7% / ARC-AGI-2 9.9%.
- **Coding:** LiveCodeBench 84.6% (AA high) / 85.9% (BenchmarkList #20 of 123 and Vals) — three independent reads; SciCode 42.9% (#90 of 296), AA Coding Index 37.8, Vibe Code Bench v1.1 20.1%, NL2Repo 21.7% and IOI 20.0% cap.
- **Long context:** AA-LCR v1.1 78.2% (high) / 76.0% (medium) — the first independent retrieval reads; supports the 400K-window band, no ≥98%-at-depth figure. **Multimodal:** MMMU-Pro 81.5% (Vals), MedQA 96.3%, MedScribe 83.7%, Vals Multimodal Index 49.9%. **Serving (AA):** 89 tok/s, TTFT 68.95s (thinking-mode latency), $1.3375 blended.
- Still open: MCP Atlas, BFCL, MRCR/RULER/GraphWalks, DeepSWE, and a measured (non-estimated) AA Intelligence Index run.
- Score impact: none — the strong era-dated rows (τ²-Telecom 84.8%, MCP-Universe 44.2%, LiveCodeBench ~85%) support Tool 70 / Coding 72, and the 2026-era caps (TB 2.1 35.2%, AA Coding Index 37.8, AA Index 23) prevent any raise; Overall stays (70+78+76+68+72)/5 = 72.8 → 73.

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-02 (updated 2026-10-08, 2026-10-11)
- Method: public internet research (OpenAI GPT-5 launch + developer docs, OpenAI API model docs, Vercel AI Gateway, allthings.how, Artificial Analysis, OpenRouter (AA + Vals AI rows), BenchmarkList, steel.dev, llmbase); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
