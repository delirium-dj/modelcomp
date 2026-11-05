# Gemini 3.5 Flash — findings by GLM 5.3 Flash

- Source: Google (`gemini-3.5-flash`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> Re-researched 2026-11-05 (prior passes 2026-09-18→10-05, 2026-10-11, 2026-10-16): the
> headline change is **deprecation** — since 2026-10-08 `gemini-3.5-flash` is routed to
> `gemini-3.6-flash` and no longer selectable. New weak independent rows (Vals TB 4.0 6.1%,
> TB-Science 5.7%, Harvey LAB 2.5%, ProgramBench 0.0%, Code Migration 26.8%) dock Tool use
> 90→89 and Coding 86→85; new strong rows (EnigmaEval #4, τ²-Telecom #19, MMMU-Pro #8)
> hold Reasoning/Multimodal. Overall 89→88.

## Model card

- **Name:** Gemini 3.5 Flash (Google's I/O 2026 Flash-tier flagship for agentic/coding work; superseded by Gemini 3.6 Flash on 2026-07-21; **deprecated 2026-10-08**)
- **Short description:** The first Flash-tier Gemini to outperform a previous Pro tier (Gemini 3.1 Pro) on Google's published coding and agentic benchmarks — TB2.1, MCP Atlas and Finance Agent v2 — at ~4x speed. Now a **routed alias**: API calls to `gemini-3.5-flash` are silently served by `gemini-3.6-flash`.
- **Provider / access:** Google — Gemini API / Vertex AI ID `gemini-3.5-flash`. **Deprecated (October 2026):** not selectable in Google AI Studio; requests auto-route to `gemini-3.6-flash`; endpoint stays up, shutdown "N/A" (deprecations page). OpenRouter/Cursor selections of this ID now serve 3.6 Flash.
- **Release / knowledge:** announced at Google I/O 2026, GA 2026-05-19; native browser/mobile/desktop computer-use agents added 2026-06-24. Knowledge cutoff January 2025 (Google recommends search grounding for newer info).
- **IDs:** `gemini-3.5-flash` (Google API / Vertex / OpenRouter — routed). Historical free tier no longer selectable.
- **Context window:** 1,048,576-token input / 65,536-token output (official docs page, verified this pass).
- **Modalities:** text, image, audio, video, PDF/document input; text out. `thinking_level` minimal/low/medium/high (medium default; note: the parameter family is deprecated on 3.6+ generations); function calling, structured output, code execution, search/Maps grounding, URL context, file search, batch/flex/priority serving.
- **Pricing (as of 2026-11-05):** the pricing page **no longer lists 3.5 Flash** — last-read rates were $1.50 in / $9.00 out / $0.15 cached per 1M (AI Signal, Oct 5 read). Routed requests are billed at the target model's rates — 3.6 Flash's promotional $0.75/$3.75 through 2026-12-31 (then $1.50/$7.50), i.e. **cheaper per token than 3.5 Flash ever was**, but the answering model is 3.6 Flash.

### Raw benchmarks found

> Rows attributed to the 3.5 Flash checkpoint as evaluated before the October 8 routing; afterwards the ID serves 3.6 Flash and fresh "3.5 Flash" runs are unobtainable.

Agent / tool use:

- Terminal-Bench 2.1 (Terminus-2): **76.2%** (Google launch) / **Vals 74.2%** (#19-20) — consistent
- Terminal-Bench 4.0: **6.1%** (Vals, mini-SWE-agent, #47 — NEW, very weak) / **6.6%** (AA run) / 13.9% (benchgap estimate — excluded); Terminal-Bench Hard: **46.2% minimal** (#30 — minimal beats high's 40.9%)
- Terminal-Bench-Science (Vals): **5.7%** (#22 — NEW, weak)
- τ²-bench Telecom: **95.3%** high / **95.6% medium** (#19) (AA — strong); τ³-Banking 32.2%
- MCP Atlas: **83.6%** (#6 of field, Scale AI SEAL)
- OSWorld-Verified: **78.4%** (Google launch); Toolathlon 56.5% (launch) / 76.6% (Toolathlon-Verified, benchgap estimate — excluded)
- Harvey's Legal Agent Benchmark v1 (Vals): **2.5%** (#46 — NEW, very weak); Legal Research 30.8%; SkillsBench 52.7%; Tax Agent 21.6%; Code Migration (Vals) 26.8%; ProgramBench **0.0%** (both harnesses); Web Search Index 37.0% (#8)
- Finance Agent v2: **57.9%** (Vals — was #1 at launch, now #14 as the field grew)
- GDPval-AA: **1345** (launch) / **42.2%** normalized (AA); AA Agentic Index **27.3%**; AA EnterpriseOps-Gym **50.1%** (#3); APEX-Agents-AA **47.0-47.1%** (#1); AA-Briefcase 875 (low); AA ITBench 40.3% (#17); Gert Labs 61.85%; ResearchClawBench 18.0%; Vending-Bench 2: 5396.4 (#30)

Reasoning / knowledge:

- GPQA Diamond: **92.2%** (AA high) / **92.7%** (Vals, #14) / 92.8% (Epoch high, #26); effort ladder: 86.4% minimal → 88.9% low → 92.8% high
- HLE: **40.2%** (launch) / **42.7%** (AA high, #68); ladder: 24.1% minimal → 42.7% high
- ARC-AGI-1: **92.5%** (ARC Prize verified, high); ARC-AGI-2: **72.1%** (high; 8.9% minimal — massive effort sensitivity)
- EnigmaEval: **25.4%** (#4, Scale AI SEAL — NEW, strong); ForecastBench: **64.4%** (#27); LMCA 47.1%; DTBench 94.7%; Chess Puzzles 45% (high)
- FrontierMath v2: **62.8%** Tiers 1–3 / **26.8%** Tier 4 (Epoch)
- IFBench: **76.3%**; SimpleBench: **76.7%** (#6); CritPt: 13.1% high
- Artificial Analysis Intelligence Index: **50.2** (AA board, 2026-10-10) — conflicts with the launch-era "55 (high)"; board recomposition, both cited
- AA-LCR v1.1: **69.3%**; AA-Omniscience: 51.9% accuracy / 60.7% non-hallucination / 21.2 index; MMLU-Pro: **89.5%** (Vals)

Coding:

- SWE-bench Pro (Public, single attempt): **55.1%** (launch); SWE-bench (Vals): **78.8%**; LiveCodeBench (Vals): **87.6%** (#12/92); Vibe Code Bench v1.1: **48.68%** (#10 at publication)
- AA Coding Index: **70.1%** (#25/116); AA-SciCode: **53.9%** / SciCode 53.1%; WeirdML: **62.6%** (#27); ALE-Bench 911
- CursorBench 3.1: **49.8%**; CursorBench 3.2: **48.8%**; LMArena coding 1493 / WebDev-HTML 1522
- SWE-bench Verified: no verified public score found

Long context:

- Window: 1,048,576 in / 65,536 out; MRCR v2: **77.3%** @128K average but **26.6% @1M** (launch — very weak at full window); AA-LCR 69.3%

Multimodal:

- MMMU-Pro: **83.6%** (Google) / **84.3%** (AA) / **88.3%** (Vals, #8 of 61 — NEW, strongest reading); CharXiv: **84.2%**; Blueprint-Bench 2: 33.6%; Design Arena Website: **1271**; LMArena Vision diagrams 1323 (#13)

### Normalized scores (1–100)

- **Tool use: 89/100.** CHANGED from 90 — the new Vals TB 4.0 6.1%, TB-Science 5.7% and Harvey-LAB 2.5% rows are genuinely weak and join Toolathlon 56.5% on the debit side; τ²-Telecom 95.6% (#19), MCP Atlas #6, OSWorld 78.4% and EnterpriseOps #3 keep it elite-adjacent.
- **Reasoning: 87/100.** Unchanged — GPQA 92.2–92.8%, EnigmaEval #4, ForecastBench #27, FrontierMath 62.8%/26.8% and ARC-AGI-2 72.1% (with an extreme 8.9% minimal-effort floor) hold the band; AA Index 50.2 and AA-LCR 69.3% cap it.
- **Context window: 93/100.** Unchanged — 1M input top-tier but MRCR at 1M measures 26.6% (vs 77.3% @128K) and AA-LCR 69.3%; the full-window claim stays docked.
- **Multimodal: 88/100.** Unchanged — omni-input set with MMMU-Pro now triple-sourced (83.6/84.3/88.3) and CharXiv 84.2%; text-only output.
- **Coding: 85/100.** CHANGED from 86 — ProgramBench 0.0% (two harnesses) and Code Migration 26.8% are new weak rows; Vals LCB 87.6% (#12), SWE-bench 78.8% and WeirdML 62.6% hold the rest of the band.
- **Cost efficiency: 78/100.** Unchanged premise, changed status — the SKU is retired from the pricing page ($1.50/$9.00 last-read) and routed traffic now bills at 3.6 Flash's cheaper promotional rate; the historical rate sits well above open-weights paid tiers, and the free tier is no longer selectable.
- **Overall Score: 88/100.** CHANGED from 89 — (89 + 87 + 93 + 88 + 85) / 5 = 442/5 = 88.4 → 88. Best fit: as a selectable model it no longer exists — pinned integrations are silently served by 3.6 Flash; the scores above describe the May–September checkpoint those integrations were built against.

---

## Signature

- Provided by: **GLM 5.3 Flash (z.ai/glm-5.3-flash)** — 2026-11-05 (re-research pass; prior 2026-10-16)
- Method: public internet re-research (3 web searches: Google model page + deprecations page + changelog, S5 Labs/askgpu/AI Signal retirement + routing coverage, BenchLM 2026-11-04 refresh + BenchLeader effort ladders + Vals/llmbenchmark/badinfluence rows + benchgap measured-vs-estimated screen); estimates excluded; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
