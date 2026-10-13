# GPT-5.4 mini — findings by GLM 5.3

- Source: OpenAI (`openai/gpt-5.4-mini`)
- Date: 2026-10-13 (UTC) — second-pass re-research of the 2026-10-01 report
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 mini
- **Short description:** OpenAI's most capable small model of the GPT-5.4 generation (released **2026-03-17**, a week after GPT-5.4's 03-05, alongside nano) — the "smart sub-agent" of the Codex delegation pattern: "the model you trust with the tasks that are too hard for a template but not worth burning full GPT-5.4 on" (dev.to); 30% of GPT-5.4's Codex quota. Second pass confirms the positioning with the settled ladder: **TB Hard 52.3% #19 (xhigh — an elite rank for a mini), AIME 95.6% #8, IFBench 73.3% #42** — against catastrophic honesty (non-hall 9.8% #416) and the 2026 agent-suite floor (τ³ 25.6% #77, TB 4.0 ~2%, HLAB 0.0%). A **batch tier at $0.375/$2.25** surfaced this pass.
- **Provider / access:** OpenAI Responses + Chat Completions APIs (`https://api.openai.com/v1`) — three OpenRouter tiers: **$0.375/$2.25 (batch/flex), $0.75/$4.50 (standard), $1.50/$9.00 (priority)**; Azure $0.75/$4.50; Codex (30% quota); ChatGPT Free/Go "Thinking". On OpenCode Zen via `https://opencode.ai/zen/v1/responses` (`opencode/gpt-5.4-mini`).
- **Release / knowledge:** **2026-03-17** (confirmed); knowledge cutoff not published.
- **IDs:** `gpt-5.4-mini`; Zen `opencode/gpt-5.4-mini`. No Free ID on Zen.
- **Context window:** 400K tokens (confirmed); measured retrieval degrades sharply above 128K.
- **Modalities:** text and image input, text output; reasoning (xhigh is its best config); tool use, function calling, web search, file search, computer use, skills.
- **Pricing (as of 2026-10-13):** $0.75/$4.50 standard; **$0.375/$2.25 batch/flex** (50% off — the G2-confirmed halving); Zen cached read $0.075; blended $1.69/M at standard; **236 tok/s at xhigh (fastest quarter)**, though 115 s first answer at xhigh — plan around the thinking latency; $0.447 per II-run.
- **Architecture:** proprietary, size undisclosed; system card addendum on OpenAI's Deployment Safety Hub.

### Raw benchmarks found

> Second pass adds the full BenchLeader 6-setting ladder (best = xhigh **54.8 #225/760**, trend 39→50→62 rising, last measured 2026-09-01). Category scores (xhigh): **Instruction following 72 (best)**, Long context 64, Knowledge 54, Reasoning 53, Maths 52, Multimodal 56, Coding 57, Agents & tools 50, **Composite 41 (worst)**.

Agent / tool use:

- **Terminal-Bench Hard: 52.3% #19 (xhigh)** — an elite rank for a mini; TB 2.1: AA **59.2% #97 (xhigh)** / Vals 54.7% #49; TB 2.0: official 60.0% vs **Vals 44.9% #24** (harness spread, both retained); **TB 4.0: 2.0% #111 (AA) / 2.5% #34 (Vals)** — the 2026 suite is a wall
- **τ²-Bench: 83.3% #109 (xhigh)** (the official 93.4% claim lands lower but strong); **τ³-Banking: 25.6% #77** (weak — gap filled); **GDPval-AA: 25.6% #152 (xhigh)** (confirms weak); **APEX-Agents (AA): 28.2% #14** (good rank)
- **MCP Atlas: 56.7% #30**; ITBench 35.2% #27; Analyst 15.0% #30; **HLAB 0.0% #53**; Legal Research 12.5% #58; Tax 36.6% #49; Finance 45.4% #46; LiveBench Agentic 41.7% #59; DeepResearch 36.3% #38; OSWorld-Verified 72.1% (official, retained — near-5.4 computer use); Toolathlon 42.9% (official, retained); Claw-Eval: still unmeasured

Reasoning / knowledge:

- GPQA Diamond: Epoch 86.9% #73 (xhigh) / AA 87.5% #93 / Vals 83.1% #57 — below the bar on every harness
- HLE: **28.1% #158 (xhigh, without tools)** — below the 40% reference; the with-tools 41.5% official row retained; **CritPt 10.0% #113** (weak); ARC-AGI-2 18.9% #127; ARC-AGI-1 63.7% #136; Kagi 37.9% #109 (weak); Chess 24% #68; LMCA 40.8% #87; DTBench 80% #113; ForecastBench 57.0% #65
- Math: **AIME (Vals): 95.6% #8 (xhigh)** — elite; OTIS 88.9% #71; **FrontierMath T1-3: 51.2% #48 (xhigh — much better than the first-pass 28.3% mixed-effort read) / T4 9.8% #60**; LiveBench Math 78.5% #63; ProofBench 21.0% #47
- **Honesty catastrophic: AA-Omniscience non-hallucination 9.8% #416 (xhigh)** (4.4% #517 no-reasoning; effort barely helps); accuracy 37.5% #136; Omniscience −18.9 #230; SimpleQA 29.4% #64 (weak)
- **AA II 24.1 #172 (xhigh)**; ECI 148.8 #60; Vals Index 33.2 #36; **Vals Multimodal Index 54.2% #21**; MMLU-Pro 84.5% #61; TaxEval 71.2% #77; CorpFin 60.9% #62; CaseLaw 51.7% #46; EMB 45.4% #48

Coding:

- LiveCodeBench (Vals) **81.5% #59**; SWE-bench (Vals) **73.0% #51**; **Vibe 48.0% #51** (all confirmed); WeirdML 60.3% #50 (high); ALE-Bench 1188.6 #37; SWE-Bench Pro 54.4% (official — near the full 5.4's 57.7%, retained)
- Caps: SciCode 49.9-52.1% #84-102 (below the 55% reference); **Code Migration 12.9% #51**; ProgramBench 0.0%; **TB 4.0 ~2%**; FrontierCode 27.0% #30; LMArena Coding 1495 #85 / WebDev 1397 #86

Long context:

- 400K nominal; **AA-LCR 77.0% #132 (xhigh)** — good in-window; but the official MRCR v2 cliff stands: **33.6% at 128K-256K** (vs 47.7% at 64K-128K), so the effective window is ~128K; GraphWalks BFS 76.3% 0-128K (retained).

Multimodal:

- **MMMU-Pro (Vals): 79.3% #48** / AA 73.3% #119 (xhigh); **SAGE: 50.8% #15** (good grounding); LMArena Vision 1245 #67; MortgageTax 63.5% #50; Vals MM Index 54.2% #21. Text+image in, text out.

Preference/IF:

- **IFBench 73.3% #42 (xhigh)** — IF-72 is its best category; LiveBench Language 71.0% #59; preference mid-weak (Text 1447 #82, Multi-turn 1466 #68, Maths 1440 #90, IF 1434 #87, Creative 1402 #103).

### Normalized scores (1–100)

- **Tool use: 64/100.** Raised from 62: the xhigh rows landed strong — TB Hard 52.3% #19 (elite for a mini), τ² 83.3% #109, APEX-AA 28.2% #14, MCP Atlas #30, and the official OSWorld 72.1% — offset by τ³ 25.6% #77, GDPval 25.6% #152, HLAB 0.0% #53, Analyst 15% #30, and TB 4.0 ~2%.
- **Reasoning: 64/100.** Lowered from 68: GPQA 83.1-87.5% misses the bar, HLE 28.1% (without tools), CritPt 10%, ARC-AGI-2 18.9%, and the catastrophic honesty (9.8% #416) — offset by AIME 95.6% #8, FrontierMath 51.2% #48, OTIS 88.9% #71, and ForecastBench #65.
- **Context window: 68/100.** Held: 400K nominal but the MRCR cliff past 128K caps the effective window; AA-LCR 77.0% #132 is good within it.
- **Multimodal: 72/100.** Raised from 68: Vals MMMU-Pro 79.3% #48, SAGE 50.8% #15, and Vals MM Index 54.2% #21 measure better than the first-pass picture; text+image in, text out.
- **Coding: 68/100.** Lowered from 72: LCB 81.5% #59, SWE-V 73.0% #51 and WeirdML 60.3% #50 hold — but SciCode ~50% below the reference, Code Migration 12.9%, ProgramBench 0%, and TB 4.0 ~2% confirm the small-model ceiling.
- **Cost efficiency: 90/100.** Raised from 88: the **$0.375/$2.25 batch tier** halves the already-cheap standard rate, 236 tok/s leads its class, and the 30% Codex quota multiplier compounds the per-task value.
- **Overall Score: 67/100.** (64 + 64 + 68 + 72 + 68) / 5 = 67.2 → 67, essentially unchanged from 67.6. Best-fit: the sub-agent era's middle manager — elite-for-its-class terminal-hard results, frontier-adjacent math, and near-5.4 computer use at $0.375/$2.25 batch rates with 30% quota cost; never trust its facts unverified (non-hall #416), and keep it out of the 2026 agent suites (τ³, TB 4.0, legal agents) — pair it with a frontier planner exactly as OpenAI designed.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-10-13
- Method: public internet research, second pass over the 2026-10-01 report (BenchLeader full 6-setting effort-ladder as of 2026-09-01 aggregating Epoch AI Benchmarking Hub, Artificial Analysis, Vals AI, Scale AI SEAL incl. MCP Atlas, LiveBench, LMArena, ARC Prize, ForecastBench; four OpenRouter provider rows surfacing the $0.375/$2.25 batch tier; DDG-lite searches surfacing dev.to's "capable middle manager" framing, thenewstack's 30%-quota confirmation, codex.danielvaughan's subagent-delegation analysis, and the mindstudio sub-agent comparisons — all corroborating the first-pass positioning; first-pass official rows retained where not contradicted); scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
