# GPT-5.4 nano — findings by GLM 5.3

- Source: OpenAI (`openai/gpt-5.4-nano`)
- Date: 2026-10-13 (UTC) — second-pass re-research of the 2026-10-01 report
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 nano
- **Short description:** The smallest, cheapest member of the GPT-5.4 family (released **2026-03-17**, alongside mini — confirmed) — "for tasks where speed and cost matter most": classification, extraction, ranking, and simple coding subagents. Second pass adds the settled ladder (xhigh best **53.4 #270/760**): the elite-for-class rows (**AIME 88.8% #28, LiveCodeBench 84.0% #40, TB Hard 42.4% #46, APEX-AA 24.9% #18, IFBench 75.9% #24**) hold up — while the 2026 floors (τ³ 27.4% #73, GDPval 22.4% #164, HLAB 0.0% #53, TB 4.0 0.5%, ARC-AGI-2 5.7%) confirm the small-model ceiling. The official τ² 92.5% claim settled at 76% #133. Top use case: the cheapest 5.4-family executor — never the driver.
- **Provider / access:** OpenAI Responses + Chat Completions APIs (`https://api.openai.com/v1`); Azure ($0.20/$1.25, 55 tok/s); not in ChatGPT/Codex. On OpenCode Zen via `https://opencode.ai/zen/v1/responses` (`opencode/gpt-5.4-nano`).
- **Release / knowledge:** **2026-03-17** (confirmed); knowledge cutoff not published.
- **IDs:** `gpt-5.4-nano`; Zen `opencode/gpt-5.4-nano`. No Free ID on Zen.
- **Context window:** 400K tokens (confirmed) — with the measured MRCR cliff standing (44.2% at 64K-128K, 33.1% at 128K-256K).
- **Modalities:** text and image input, text output; reasoning (xhigh is its best config; 6 settings measured); tool use.
- **Pricing (as of 2026-10-13):** **$0.20 in / $1.25 out per 1M** (confirmed; Zen cached read $0.02); blended $0.463/M — "cheaper than most"; **172 tok/s at xhigh (fastest quarter)** but 107 s first answer (the xhigh latency cost — medium answers in 5.7 s); $0.017 per agentic session; $0.183 per II-run.
- **Architecture:** proprietary, size undisclosed; system card addendum on OpenAI's Deployment Safety Hub.

### Raw benchmarks found

> Second pass adds the BenchLeader 6-setting ladder (best = xhigh **53.4 #270/760**, last measured 2026-06-25). Category scores (xhigh): **Instruction following 74 (best)**, Agents & tools 61, Long context 63, Coding 51, Knowledge 48, Multimodal 48, Reasoning 46, **Composite 43 (worst)**.

Agent / tool use:

- **τ²-Bench: 76.0% #133 (xhigh)** — the official 92.5% claim settled lower; **τ³-Banking: 27.4% #73** (weak — gap filled); **GDPval-AA: 22.4% #164** (weak); **APEX-Agents (AA): 24.9% #18** (good rank); **TB Hard: 42.4% #46 (xhigh — good for the class)**
- Terminal-Bench: 2.0 official 46.3% / Vals 39.9% #34; 2.1 Vals 41.6% #66 / **AA 60.7% #94**; **TB 4.0 (AA): 0.5% #132**; ITBench SRE 24.4% #37
- **HLAB: 0.0% #53**; Legal Research 6.3% #62; Tax 26.6% #56; Finance 38.2% #54; LiveBench Agentic 46.8% #50; MCP Atlas 56.1% (official, retained); OSWorld 39.0% (official, retained); Claw-Eval: still unmeasured

Reasoning / knowledge:

- GPQA Diamond: Epoch 78.5% #130 (high) / AA **81.7% #174 (xhigh)** / Vals 77.5% #73 — below the bar on every harness
- HLE: AA **28.3% #156 (xhigh)** — below the 40% reference (the with-tools 37.7% official row retained); **CritPt: 9.3% #119** (weak); ARC-AGI-1 51.5% #156; ARC-AGI-2 5.7% #153
- Math — the class strength: **AIME (Vals): 88.8% #28; LiveBench Mathematics: 91.0% #33; OTIS 87.8% #78**; FrontierMath T1-3 44.9% #52 (high) / T4 12.2% #57; ProofBench 5.0% #68 (weak); LiveBench Reasoning 81.1% #51
- **IFBench: 75.9% #24 (xhigh)** — good; DTBench 80.3% #111; ForecastBench 57.3% #61; LMCA 36.9% #102; Chess 30% #51 (high)
- Honesty poor: **non-hallucination 25.8% #230 (xhigh)** / 48.9% #117 (medium — the best read); accuracy 25.7% #216; Omniscience −29.5 #268; SimpleQA 11.7% #79 (weak)
- **AA II 20.7 #215** (confirms); ECI 145.8 #78; LiveBench global 69.6% #55; MMLU-Pro 77.2% #101; LegalBench 77.9% #99; MedScribe 77.1% #67; CorpFin 61.2% #56; TaxEval 67.4% #103; EMB 44.8% #49

Coding:

- **LiveCodeBench (Vals): 84.0% #40** (confirmed — above the mini's 81.5%); **SWE-bench (Vals): 69.8% #61** (confirmed); LiveBench Coding 70.8% #60; WeirdML 49.2% #72 (high); SWE-Bench Pro 52.4% (official — 2 points under the mini, retained)
- Caps: SciCode 46.9-47.2% #120-125 (below the 55% reference); **Vibe Code v1.1: 26.1% #63** (weak, confirmed); **Code Migration: 14.5% #47** (weak); ALE 1004.5 #51; **TB 4.0 0.5%**; LMArena Coding 1460 #126; the official OmniDocBench weak-document-parsing row retained

Long context:

- 400K nominal with the **MRCR cliff standing** (44.2% at 64K-128K; 33.1% at 128K-256K); **AA-LCR: 76.7% #134 (xhigh)** — good in-window; GraphWalks BFS 73.4% 0-128K / parents 50.8% (official, retained).

Multimodal:

- MMMU-Pro: Vals 73.6% #57 / AA 65.4% #171 (xhigh); LMArena Vision 1196 #92 (weak); **SAGE 38.1% #62** (weak); MortgageTax 59.1% #65; **Vals MM Index 47.6% #26**; category 48. Text+image in, text out.

Preference/IF:

- **IF-74 is its best category** (IFBench 75.9% #24; LiveBench IF 67.2% #37; Language 62.5% #66); preference weak-mid (Text 1401 #147, Multi-turn 1413 #134, Creative 1337 #176).

### Normalized scores (1–100)

- **Tool use: 58/100.** Raised from 55: the settled ladder added good-for-class rows — TB Hard 42.4% #46, APEX-AA 24.9% #18, τ² 76% #133, and the official MCP Atlas 56.1% — against τ³ 27.4% #73, GDPval 22.4% #164, HLAB 0.0% #53, TB 4.0 0.5%, and OSWorld 39.0%.
- **Reasoning: 62/100.** Raised from 60: the class-elite math (AIME 88.8% #28, LiveBench Math 91% #33, LiveBench Reasoning 81.1% #51) and IFBench 75.9% #24 hold — while GPQA 77.5-81.7% below bar, HLE 28.3%, CritPt 9.3%, ARC-AGI-2 5.7%, and poor honesty (25.8% #230 at xhigh) confirm the ceiling.
- **Context window: 64/100.** Held: 400K nominal but the MRCR cliff (33.1% at 128K-256K) makes the reliable window a fraction of the spec; AA-LCR 76.7% #134 is good within it.
- **Multimodal: 62/100.** Lowered from 65: Vals MMMU-Pro 73.6% #57 is decent — Vision 1196 #92, SAGE 38.1% #62, and MM Index 47.6% #26 measure the depth floor; category 48.
- **Coding: 64/100.** Lowered from 66: LCB 84.0% #40 and SWE-V 69.8% #61 remain strong for the size — but SciCode ~47% below the reference, Vibe 26.1% #63, Code Migration 14.5% #47, ALE #51, and TB 4.0 0.5% cap it.
- **Cost efficiency: 94/100.** Held: $0.20/$1.25 with $0.02 cached reads, 172 tok/s, $0.017/session — the cheapest 5.4-family executor; the caveat is the 107 s xhigh first-answer latency (medium answers in 5.7 s for latency-sensitive work).
- **Overall Score: 62/100.** (58 + 62 + 64 + 62 + 64) / 5 = 62.0, unchanged. Best-fit: the cheapest 5.4-family sub-agent — class-elite math and LiveCodeBench at $0.20/$1.25, good instruction following and TB-Hard-for-the-class — but its knowledge honesty is poor (25.8% non-hall at xhigh), the MRCR cliff shrinks the effective window below 128K, and the 2026 agent/legal floors (τ³, HLAB 0.0%) confirm it was built to be delegated to, never to drive.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-10-13
- Method: public internet research, second pass over the 2026-10-01 report (BenchLeader full 6-setting effort-ladder, last measured 2026-06-25, aggregating Epoch AI Benchmarking Hub, Artificial Analysis, Vals AI, LiveBench, LMArena, ARC Prize, ForecastBench; OpenAI + Azure provider rows confirming pricing and the 172 tok/s / 107 s latency profile; the official announcement rows retained where not contradicted, with the τ² 92.5%-vs-76.0% gap flagged; the sub-agent family positioning corroborated by this cycle's gpt-5.4-mini pass); scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
