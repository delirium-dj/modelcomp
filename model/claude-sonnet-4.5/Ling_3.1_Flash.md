# Claude Sonnet 4.5 — findings by Ling 3.1 Flash

- Source: Anthropic (`opencode/claude-sonnet-4.5`; API `claude-sonnet-4-5`; Claude API, Claude apps, Claude Code, Amazon Bedrock, Google Cloud, Microsoft Foundry)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4.5
- **Short description:** Anthropic's September-2025 Sonnet flagship (deprecated; retires 2026-11-30, replacement Claude Sonnet 5.5) — the launch SOTA on SWE-bench Verified (77.2%, 10-trial avg; 78.2% in a 1M configuration; 82.0% under a high-compute selection regime) and the launch leader on OSWorld (61.4%, up from Sonnet 4's 42.2%) with >30-hour continuous autonomy, at the unchanged $3/$15 per 1M; GPQA Diamond 82.3%, AIME 77.8%, MATH Level 5 97.7%.
- **Provider / access:** Anthropic API (extended thinking; default effort not supported), Claude apps, Claude Code, Amazon Bedrock, Google Cloud, Microsoft Foundry, Claude Platform on AWS. `noFreeId`.
- **Release / knowledge:** 2025-09-29; reliable knowledge cutoff Jan 2025, training-data cutoff Jul 2025.
- **IDs:** `anthropic/claude-sonnet-4.5` / `claude-sonnet-4-5`. NOTE: the repo `meta.json` is stale — it says "128K total" and "Text in/out"; the primary configuration is 200K tokens (a 1M configuration exists but was implicated in Anthropic's inference issues) and the model takes text and image input.
- **Context window:** 200,000 tokens (primary; a 1M configuration exists but was implicated in Anthropic's recent inference issues, so Anthropic reports the 200K result as primary); 64,000 max output.
- **Modalities:** text, image in; text out.
- **Pricing (as of 2026-10-02):** $3.00/$15.00 per 1M input/output (unchanged from Sonnet 4); cache read $0.30/M (10% of input); 5m cache write $3.75/M, 1h $6.00/M; Batch API 50% ($1.50/$7.50); regional/multi-region cloud endpoints +10%.
- **Architecture:** proprietary; parameter count undisclosed.

### Raw benchmarks found

Vendor (Anthropic launch, 2025-09-29; SWE-bench Verified: simple 2-tool scaffold, 10-trial average, no test-time compute, 200K thinking budget; OSWorld: official OSWorld-Verified framework, 100 max steps, 4-run average; AIME: sampling at temperature 1.0, 64K reasoning tokens for the Python configuration):

Agent / tool use:

- SWE-bench Verified: **77.2%** — launch SOTA; **78.2%** in a 1M-context configuration (not primary); **82.0%** under Anthropic's "high compute" regime (parallel sampling, regression-test rejection, internal scoring model)
- OSWorld (computer use): **61.4%** — led at launch (Sonnet 4: 42.2% four months earlier)
- Terminal-Bench (Terminus 2, multi-run average): **46.5%** (Epoch/themodelbeat)
- GDPval (win/tie rate): **50.3%**
- Autonomy: **>30 hours** of continuous multi-step operation (previous generation ~7 hours); automatic "context editing" plus a file-backed memory tool
- τ²-Bench: run with extended thinking, tool use and prompt addenda — value not captured
- Second-pass agentic rows (2026-10-12): MCP Atlas (Scale): **59.5%** (rank 28/34, thinking config); BFCL: **73.2%** (rank 2/81 — a function-calling strength); JobBench: **27.7%** (measured); APEX-Agents-AA: **28.4%** (est); τ³-bench: **68.5%** (est); Search Arena: **1,158** (rank 24/33).

Reasoning / knowledge:

- GPQA Diamond: **82.3%** (themodelbeat)
- AIME 2024/2025: **77.8%**
- MATH Level 5: **97.7%**; FrontierMath: **15.2%**; FrontierMath Tier 4: **4.2%**
- ARC-AGI: **63.7%** (themodelbeat; version not specified)
- SimpleBench: **54.3%**; SimpleQA Verified: **30.7%**; WeirdML: **47.7%**
- HLE: **17.8%** (AA, reasoning — carried in the 2026-10-08 section); **13.7%** (fru.dev, thinking config, rank 22/43) — the second-pass read is weaker; conflict kept.
- Second-pass reasoning rows (2026-10-12): AIME 2026: **95.5%** (benchgap est); MultiChallenge: **55.3%** (rank 21/31, thinking); MMLU-Pro: **87.4%** (rank 10/100, thinking) / 87.5% (AA) / 86.0% (LLM Reference); Epoch ECI: 146.8; Text Arena: 1,456 (rank 53/100); BullshitBench v2: 79%; Next.js Evals: 39%.
- MMMLU: averaged over 5 runs across 14 non-English languages with extended thinking (up to 128K) — value not captured

Coding (beyond SWE-bench Verified):

- WebDev Arena: **1391** (Epoch); GSO (code optimization): **14.7%**
- LiveCodeBench: **71.4%** (AA) / **73.0%** (BenchmarkList) — carried in the 2026-10-08 section; DeepSWE: still no verified public score (the DeepSWE leaderboard's captured top rows are Opus 5 max 74%±4%, Fable 5 xhigh, DeepSeek V4 Pro max and Opus 4.8 max — Sonnet 4.5 is not among them); AA Coding Index: **54.8%** (benchgap est).
- Second-pass coding rows (2026-10-12): SWE-bench Pro: **53.5%** (benchgap est, high confidence); SWE-bench Verified (fru.dev, "high" config): **71.4%** (rank 9/39, stale 2026-02-26 — the independent-run cluster 70.0–71.4%); VITA-Bench: **17.0%** (measured — a severe cap); CyberGym: **43.3%** (est); WideResearch: **76.4%** (est); DeepSearchQA: **73.9%** (est).

Long context / multimodal:

- 200K primary window (1M configuration implicated in inference issues); AA-LCR **72.3%** (AA — carried in the 2026-10-08 section).
- Second-pass long-context rows (2026-10-12, from Anthropic's Sonnet 4.6 system card, Tables 2.16.A/B, 2026-02-17): MRCR v2 (8-needle): **10.8% at 256K / 18.5% at 1M** (64K-thinking protocol; Sonnet 4.6 scores 90.6%/65.1% on the same protocol — a severe cap and a generational gap); GraphWalks BFS: **25.6% at 1M** (64K thinking) / **81.0% on the 256K parents subset**; a 65.7% "LCR" read (designforonline, likely a different LCR variant) is noted but not adopted.
- Second-pass multimodal rows (2026-10-12): MMMU: **68%** (lab-reported, AI Release Tracker) / 77.8% (LLM Reference) / 79.6% (Vector Wire) — conflict kept; MMMU Pro: **68.9%** (official Anthropic comparison in the Opus 4.6 system card, with image-cropping tool) vs **79.3%** (BenchmarkList — the prior anchor) — the official read is 10.4pp lower; Document Arena: 1,450 (rank 23/38, vision); no Video-MMMU figure captured.

### Normalized scores (1–100)

- **Tool use: 71/100.** SWE-bench Verified 77.2% (launch SOTA, 10-trial avg) and OSWorld 61.4% (led at launch, up from Sonnet 4's 42.2%) lead, with τ²-Bench Telecom 78.1% (AA) and GDPval win/tie 50.3% supporting; Terminal-Bench 2.1 55.8% (AA), Terminal-Bench Hard 35.6% and the AA Agentic Index of 15.8 sit well under the current frontier, and the model is 13 months old.
- **Reasoning: 69/100.** GPQA Diamond 83.4% (AA) / 82.3% (themodelbeat), AIME 2024/2025 77.8% (AA's AIME 2025 row: 88.0%) and MATH Level 5 97.7% are strong, but HLE 17.8% (AA), FrontierMath 15.2% (Tier 4: 4.2%), CritPt 1.1%, ARC-AGI v2 13.6% (BenchmarkList; themodelbeat reads 63.7% on an unspecified version) and SimpleQA Verified 30.7% cap the score; the model is 13 months old.
- **Context window: 70/100.** 200K-token window — the methodology's 70 anchor; AA-LCR **72.3%** (AA) supports the anchor; a 1M configuration exists but was implicated in Anthropic's inference issues, so Anthropic reports the 200K result as primary.
- **Multimodal: 65/100.** text/image in with text out — the +image-in band (60–70); MMMU Pro 79.3% (BenchmarkList) supports, no Video-MMMU figure captured.
- **Coding: 71/100.** SWE-bench Verified 77.2% (78.2% in the 1M configuration; 70.0–71.4% on BenchmarkList's independent rows) was the launch SOTA, with IDE-Bench 87.5% (rank 1/15) and LiveCodeBench 71.4% (AA) / 73.0% (BenchmarkList) supporting; SciCode 44.7–45.7%, Vibe Code Bench v1.1 22.6%, SWE-bench Multilingual 67.0% and Terminal-Bench 2.1 55.8% cap the score.
- **Cost efficiency: 60/100.** $3/$15 per 1M is the methodology's ~60 anchor exactly; 10%-of-input cache reads ($0.30/M) and half-rate Batch API ($1.50/$7.50) are offsets.
- **Overall Score: 69/100.** (71+69+70+65+71)/5 = 69.2 → 69 — the September-2025 agentic-coding SOTA (SWE-bench Verified 77.2%, OSWorld 61.4%, >30-hour autonomy at $3/$15) whose age, 200K window, Terminal-Bench 2.1 (55.8%), HLE (17.8%) and SciCode (44.7%) place it well below the October-2026 frontier; deprecated with retirement on 2026-11-30.

---

## Update 2026-10-08 (6-day re-research)

Full Artificial Analysis row found (fills the HLE, LiveCodeBench, SciCode, AA-LCR and Terminal-Bench gaps; reasoning / non-reasoning):

- Intelligence Index **20.7 / 19.3** (easy-benchmarks' newer AA index version reads 36.4); Coding Index 52.1; Math Index 88.0 / 37.0; Agentic Index 15.8; GPQA Diamond **83.4% / 72.7%**; HLE **17.8% / 7.2%**; IFBench 57.3% / 42.7%; τ²-Bench Telecom **78.1% / 70.5%**; **AA-LCR 72.3% / 54.0%**; τ-Bench Banking 24.5%; GDPval-AA 20.5%; CritPt 1.1% / 0.0%; **LiveCodeBench 71.4% / 59.0%**; **SciCode 45.7%**; Terminal-Bench Hard 35.6% / 28.8%; **Terminal-Bench 2.1 55.8%**; Terminal-Bench 4.0 0.0%; AIME 2025 88.0% / 37.0%; MMLU-Pro 87.5% / 86.0%; AA-Omniscience Accuracy 28.4% / Non-Hallucination Rate 47.3% (non-reasoning)
- BenchmarkList additions: ABC-Bench 63.2% (rank 1/11), AssertLLM2 28.3% (rank 1/6), IDE-Bench 87.5% (rank 1/15), SWE-bench Verified Mini (HAL) 72.0% (rank 1/13), CORE-Bench Hard 62.2% (rank 2/18), LongWebBench 6.74 (rank 2/13), SWE-rebench 60.0% (rank 9/29), PerfCodeBench 61.6% (rank 9/23), VibeCodingBench 88.56 (rank 6/15), OpenHands Index 54.6% (rank 11/26), ALE-Bench 796.15 (rank 35/83), IOI 18.3% (rank 26/58), Terminal-Bench 2.0 41.6% (rank 32/68), CVerifBench 94.9% (rank 8/14), **Vibe Code Bench v1.1 22.6%** (rank 39/71), LiveCodeBench 73.0% (rank 70/123), NL2Repo 40.2 (rank 18/31), KOCO-BENCH 6.1% (rank 7/11), WebDev Arena 1385.28, Android Bench 54.2%, SWE-bench Multilingual 67.0%, Cangjie-bench 81.9% (rank 1/4), ContextBench 53.0% (rank 1/4), ProjDevBench 70.88 (rank 3/3), SWE-bench Live 30.0–44.1% (small fields), ObviousBench 97.2%, HLE Text Only 14.1% ±1.47, EnigmaEval 6.0%, MultiNRC 35.8%, CAIS Text Capabilities Index 25.4, MMMU Pro 79.3%, NYT Connections Extended 47.4%
- **Scores revised** (see Normalized scores): Tool 74→71, Reasoning 70→69, Coding 74→71, Overall 71→69 on the filled gaps (TB 2.1 55.8%, HLE 17.8%, SciCode 44.7–45.7%, Vibe Code Bench 22.6% all sit well under the 2026 frontier)

---

## Update 2026-10-12 (deep second pass, 3 independent searches)

**No score changes** — Tool 71 / Reasoning 69 / Context 70 / Multimodal 65 / Coding 71 / Cost 60 / Overall 69 all stand. This pass added Anthropic's own MRCR v2 / GraphWalks rows (Sonnet 4.6 system card), Scale's MCP Atlas, BFCL, the MMMU/MMMU-Pro conflict cluster and a second HLE read:

- **Long-context fills (the pass's headline):** Anthropic's Sonnet 4.6 system card (2026-02-17, Tables 2.16.A/B) published Sonnet 4.5's MRCR v2 and GraphWalks rows for the first time — MRCR v2 (8-needle) **10.8% at 256K / 18.5% at 1M** on the 64K-thinking protocol (Sonnet 4.6: 90.6%/65.1% on the same protocol — a 79.8pp/46.6pp generational gap); GraphWalks BFS **25.6% at 1M** (64K thinking) but **81.0% on the 256K parents subset**. The MRCR read is a severe cap; the parents-subset read shows ordered retrieval works at moderate depth. AA-LCR 72.3% (AA) remains the mid-band anchor, so Context stays at the 200K methodology anchor of 70.
- **Agentic fills:** MCP Atlas (Scale) **59.5%** (rank 28/34, thinking config — mid-pack); BFCL **73.2%** (rank 2/81 — the strongest second-pass row, a genuine function-calling strength); JobBench **27.7%** (measured); APEX-Agents-AA **28.4%** (est); τ³-bench **68.5%** (est); Search Arena 1,158 (rank 24/33). These balance: BFCL 73.2% and τ³-bench 68.5% support Tool 71; MCP Atlas 59.5%, JobBench 27.7% and APEX 28.4% cap it — no change.
- **Reasoning fills:** AIME 2026 **95.5%** (benchgap est — strong) and MMLU-Pro **87.4%** (rank 10/100, thinking) support; a second HLE read of **13.7%** (fru.dev, thinking config, rank 22/43) sits below AA's 17.8% — the HLE cluster (13.7–17.8%) stays a cap. MultiChallenge 55.3%, Epoch ECI 146.8 and Text Arena 1,456 are mid. Reasoning 69 stands.
- **Coding fills:** SWE-bench Pro **53.5%** (benchgap est, high conf) and VITA-Bench **17.0%** (measured — a severe cap) join the cap column; SWE-bench Verified **71.4%** (fru.dev "high" config) confirms the independent-run cluster (70.0–71.4%) vs the vendor's 77.2% (10-trial avg); AA Coding Index 54.8% (est), CyberGym 43.3%, WideResearch 76.4% and DeepSearchQA 73.9% are mid. Coding 71 stands.
- **Multimodal fills:** MMMU reads conflict — 68% (lab-reported) / 77.8% (LLM Reference) / 79.6% (Vector Wire) — and MMMU Pro conflicts harder: **68.9%** (official Anthropic comparison in the Opus 4.6 system card, with image-cropping tool) vs **79.3%** (BenchmarkList, the prior anchor). The official read is 10.4pp lower and lands the model mid-band rather than at the band's top; Document Arena 1,450 (rank 23/38) is mid. Multimodal 65 stands (the +image-in band 60–70; the official MMMU Pro 68.9% argues against a raise).
- **Score impact:** none. Tool 71 (BFCL 73.2% and τ³-bench 68.5% support; MCP Atlas 59.5%, JobBench 27.7%, APEX-Agents 28.4% cap), Reasoning 69 (AIME26 95.5% est and MMLU-Pro 87.4% support; HLE 13.7–17.8% cluster caps), Context 70 (200K anchor + AA-LCR 72.3% support; MRCR v2 10.8%/18.5% and GraphWalks 25.6% at 1M cap — the 1M configuration remains non-primary), Multimodal 65 (MMMU Pro 68.9% official vs 79.3% BenchmarkList — conflict kept, both within/above the band), Coding 71 (SWE-bench Pro 53.5% and VITA-Bench 17.0% cap; WideResearch 76.4% supports), Cost 60 ($3/$15 anchor), Overall 69.
- Still open: a DeepSWE score (the benchmark exists and Sonnet 4.5 is absent from the captured leaderboard rows); a vendor MRCR read for the primary 200K configuration (the 10.8%/18.5% figures are Anthropic's 64K-thinking protocol on the OpenAI 8-needle set); and a tiebreaker for the MMMU/MMMU-Pro conflict.
- **Third-round supplement (2026-10-12):** Vector Wire adds a third LiveCodeBench v6 read of **64** (vs 71.4% AA / 73.0% BenchmarkList — conflict kept), the vendor's SWE-bench Pro of **43.6%** (vs 53.5% benchgap est — conflict kept), BrowseComp **24.1%** and Terminal-Bench **50.0%** (vs 46.5% Epoch — conflict kept); BenchmarkList's full board adds GAIA (HAL) **74.5%** (rank 1/13), VeriTrip **69.2%** (rank 1/11), Hunt Instead of Wait **47.7%** (rank 1/26), t2-bench **84.7%**, Tau2 Airline **72.0%**, PrivacyPeek **80.0%**, PinchBench **88.6%**, ContractBench **69.7%**, WebWorld-Bench **59.7%**, AgencyBench **46.4%**, MCPMark **32.1%**, Toolathlon **41.0%**, TAU3-Bench **62.9%** (last of 13), and OSWorld **62.9%** (vs the vendor's 61.4% — a slightly higher independent read); ORCFLO Index (2026-05-10, text-only business tasks, four-judge panel): #21 of 32, quality 84.57 — writing #10 and output consistency #10, but summarization #28 and refusal calibration #28. No score changes on these reads (they straddle the existing scores).

---

## Signature

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-02 (updated 2026-10-08, 2026-10-12)
- Method: public internet research (Anthropic Sonnet 4.5 launch + platform docs, Sonnet 4.6 system card, Epoch AI, themodelbeat, CometAPI, Artificial Analysis, BenchmarkList, Scale SEAL, Vals AI, fru.dev, AI Release Tracker, Vector Wire, benchgap, LLM Reference, Stanford HAI AI Index 2026); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Claude_Sonnet_4_5.md`, using the same headings.
