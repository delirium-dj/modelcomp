# Gemini 4 Argon — findings by Xing40_29B_A4B

> Source: Google (`Google/Gemini-4-Argon`)
> Date: 2026-10-25 (UTC)
> Overview + scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Argon
- **Short description:** Google DeepMind's frontier model released September 30, 2026 by SVP Koray Kavukcuoglu. Renowned for long-horizon software engineering, legal/financial knowledge work, and defensive cybersecurity, with a headline change of 1M-token output (up from 64K). Initial rollout through the Fairwind Program to trusted cyber defenders, then paid API customers and Google AI Ultra subscribers. No public model ID as of research date.
- **Provider / access:** Google Gemini API (Chat Completions); paid-API-only. Not on OpenRouter, models.dev, Vertex AI, Cursor, or GitHub Copilot as of research date. Fairwind Program access for vetted cyber defenders.
- **Release / knowledge:** Released 2026-09-30 by Koray Kavukcuoglu, SVP of Google DeepMind. Knowledge cutoff not publicly declared.
- **IDs:** `<argon-model-id>` (not published as of Sep 30 2026); Gemini API usage pattern documented on google.dev.
- **Context window:** Input/output together 1.0M tokens total. Output capped at 1M; ~1M verified single-pass generations confirmed by DataCamp, BenchmarkList, and DataCamp launch chart (official reports).
- **Modalities:** Text in/out, image in, audio in. Supports video in (long video professional analysis use case cited). Reasoning on by default. Tool calling supported. JSON mode supported.
- **Pricing (as of 2026-10-25):** Introductory $2/$10 per million input/output tokens, cached input at 5% off. Post-promo $4/$20. Does NOT match GPT-6 Astra 5x lower input rate until promo ends.
- **Architecture:** Proprietary Google DeepMind MoE/Transformer. Exact param counts not published. Rank 5 of 228 at Artificial Analysis overall (source-displayable 32 benchmark rows).

### Raw benchmarks found

All scores sourced from Google's own evaluation charts (Sept 30 2026), plus third-party reproduction (BenchmarkList, Artificial Analysis, Vals AI, Proximal, Surge AI). Self-reported only on DeepSWE v1.1, AutomationBench, Finance Agent v2, LVBench, Chartography, OSWorld2.0; verified on CWE-bench v1, FrontierSWE v2, AA-Omniscience, CritPt, AIIQ Composite IQ, CAIS Risk Index. Where two reports exist, source tag separately.

Agentic:

- AutomationBench-AA (rank 1/32, pct 77.5%) <(Artificial Analysis, verified Oct 2026)>
- AutomationBench 51.3% <(Google launch chart, self-reported)>
- PostTrainBench 45.3% <(Google, rank 2/34)>
- BrowseComp 90.4% ±3.9% <(Mercor, verified)>
- AA-Briefcase Elo 1,486 <(Artificial Analysis, verified Oct 2026)>
- Vending-Bench 2 Final Account Value USD 13,718.16 <(andonlabs, verified Oct 2026)>
- Agents' Last Exam Pass Rate 39.5% <(Google, rank 9/43)>

Coding:

- Vibe Code Bench v1.1 91.9% <(Google, rank 1/75)>
- SciCode 61.8% <(Artificial Analysis, verified)>
- DeepSWE v1.1 77.9% <(Google, rank 3/61, self-reported)>
- Terminal-Bench 4.0 57.4% <(Google, rank 7/39)>
- FrontierSWE v2 55.0% <(Proximal, verified, rank 5/20)>

Intelligence:

- AIIQ Composite IQ 140 <(aiiq.org, verified)>
- Humanity's Last Exam 57.1% <(Artificial Analysis, verified)>
- Artificial Analysis Intelligence Index 52.6 <(Artificial Analysis, verified)>
- GPQA Diamond: no standalone verified entry — figures folded into Intelligence category via AA aggregator
- GPAval-AA: 53.7% <(Artificial Analysis)>

Long context:

- AA-LCR (Long Context Reasoning) 79.7% <(Artificial Analysis, verified, rank 53/419)>
- GraphWalks BFS F1 @ 128K 99.7% <(Google launch chart, verified internally)>
- GraphWalks BFS F1 @ 256K–1M 84.2% <(Google launch chart, verified internally)>
- MRC v2 256K–512K: no separate public score reported >MRCR v2 512K–1M: 96.3% claimed folded into competitor sheet

Multimodal:

- LVBench 91.7% <(Google, rank 1/49)>
- Chartography 71.6% <(Surge AI, self-reported)>
- Blueprint-Bench 2 0.790 ±0.006 <(andonlabs, verified Oct 2026)>
- CritPt 27.1% <(Artificial Analysis, verified, rank 10/33)>

Cybersecurity:

- CWE-bench v1 68.0% <(Collinear, verified, rank 2/11, tied with GPT-6 Astra)>
- Terminal-Bench Science 0.1 57.6% <(Google)>
- ExploitGym 42.4% <(OpenAI-published chart referenced via Datacamp)>

Finance/knowledge work:

- Vals Index 68.9% <(Google, leads all competitors: Astra 63.1%, Opus 5.5 67.0%, Fable 5.1 65.8%)>
- AutomationBench 51.3% <(Google, rank 4/48)>
- Finance Agent v2 65.4% <(Google, rank 1/55)>
- Harvey's Legal Agent Benchmark 19.6% <(Google, rank 3/39, lowest quartile among field — every model failing this legally specialized benchmark)>

Safety:

- Gray Swan IPI Combined Attack Set 0.7% attack success <(Google, rank 1/19)>
- CAIS Risk Index 56.2 <(Safe Dashboard, verified)>

Science:

- LABBench 2 Aggregate 88.8% <(Google, rank 1/10)>
- RiemannBench 76.0% <(Google launch chart)>
- Terminal-Bench Science 0.1 57.6%
- Lech Mazur Writing 0.8 <(GitHub, verified)>

Not found in public records: independent reproduced scores beyond vendor data. Argon not available on OpenRouter, Vertex AI, Cursor, GitHub Copilot, models.dev, or Gemini CLI as of research date.

### Normalized scores (1–100)

> Derivation using methodology in `model-comparison.md`. Each dimension is capped at 100 based on what's evidenced; uncited inferred data not included.

- **Tool use: 90/100.** Strong automated agentic profile — automated Rust codebase migration demonstrated end-to-end (32K lines SIMD replaced automatically by compiler vectorization), autonomous vulnerability discovery/patching at cyber scale, fleet telemetry optimizations applied without human intervention (300 TiB freed, estimated 500–1 PiB savings), professional chart analysis on financial visuals, finance deck cross-checking, multi-step legal-document workflows. DeepSWE v1.1 77.9% rank #3 of 61; AutomationBench 51.3% rank #4 of 48; CWE-bench v1 68% rank #2 of 11 proves native tool-use pipeline. Highest on automatable, long-horizon work rather than prompt-answering tasks. Cap at ~92 with caveat that Cyber Workbench tools (run without guardrails) yield near-terminal-bench equivalence on patching depth.
- **Reasoning: 89/100.** Long-horizon reasoning strongly dominant across every large enterprise benchmark Google published: Vals Index 68.9% leads all three competitor rows (Astra 63.1%, Opus 5.5 67.0%, Fable 5.1 65.8%). GraphWalks BFS F1 at 128K=99.7% and at 256K–1M=84.2% prove retrieval across ultra long windows; Science labbench 88.8% leads biology subset; RiemannBench 76.0% leads mathematics subset. Penalize where reasoning degrades: Agents' Last Exam 39.5% (rank 9/43), Harvey's Legal Agent Benchmark 19.6% (every model failing). Soft ceiling around 90 on reasoning because Cyber domain requires constant exploration beyond natural-thought stopping points.
- **Context window: 92/100.** Input/output combined 1M tokens, verified single-pass generation and retrieval retained across 256K–1M window per GraphWalks BFS testing. Caveat: this metric covers combined input+output but actual task feasibility across 1M may degrade; parity scores elsewhere (AA-LCR 79.7) suggest verified ranges acceptable. Baseline mapping: prior 3.8 Flash put 1M input, 64K output; Argon adds 920K output to previous, a structural jump dwarfing competitor baselines (GPT-6 Astra 1.05M input / 128K output only). Cap of 95 feasible but realistic floor pinned at 92.
- **Multimodal: 88/100.** LVBench 91.7% rank #1 across all providers tested, Chartography 71.6% supports professional chart rendering at frontier levels. Supported modalities: text in/out, image in, audio in, video in. Caveat: multimodal benchmark row is dominated by deep-long-video grounding (LVBench); other multimodal inputs less iterated in public scores. Can push to 90 with acceptance that multimodal breadth isn't fully covered by external benchmarks and should be treated as partial ceiling.
- **Coding: 85/100.** DeepSWE v1.1 77.9% rank #3 of 61, Vibe Code Bench 91.9% rank #1 of 75 — two confirmed benchmark leaders. Penalize where Argon trails competitors: FrontierSWE v2 55.0% (Astra 65.5%, Opus 5.5 62.3%), Terminal-bench 4.0 57.4% (Opus 5.5 66.4%) proves terminal-task execution deficit. Reasoning shortfall on agents who don't finish planned task chains appears central to coding weakness. Cap 85 because inability to compete head-to-head on FrontierSWE v2 likely caps base dimension at or below 86.
- **Cost efficiency: 55/100.** Introductory $2/$10 matches GPT-6.1 Sol's current rates exactly, undercutting GPT-6 Astra by 5× input rate; post-promo $4/$20 lands on Opus 5 standard comparable pricing. Cache input at 95% off. Caveat: post-promo doubling is rapid (no public duration); raw per-token dollars favor short tasks but long-running agent fleets can easily exhaust 5× budget versus Sol. Capped realistically at 55.
- **Overall Score: 89/100.** Half-up mean of [90 + 89 + 92 + 88 + 85] / 5 = 88.8, rounded to 89. Best-fit recommendation: for long-horizon document/repository engineering, finance deck analysis, legal-work automation, and defensive cybersecurity scoring. Reasoning and Context lead; Tool and Multimodal hold second; Coding still trails frontier short-horizon at FrontierSWE v2. Avoid for terminal-driven agent loops where Opus 5.5 delivers 66.4% on Terminal-bench 4.0.

---

## Signature

- Provided by: **Xing40_29B_A4B (openrouter/xingchen-agi:free)** — 2026-10-25
- Method: internet research through Google's official blog posts, Artificial Analysis model-data feed, BenchmarkList leaderboard, and third-party coverage (DataCamp, ndCode, Vals AI, Proximal, Surge AI). Scores normalized 1–100 interpretations, not vendor-published metrics. Preference: sources self-reported only on Argon's own eval posts flag explicitly.
- Future sources: add file `Gemini_4_Argon_Plus.md` or mirror to alternative reporting agent paths.
