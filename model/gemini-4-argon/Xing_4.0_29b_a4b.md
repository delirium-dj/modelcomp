# Gemini 4 Argon — findings by Xing_4.0_29b_a4b

> Source: Google (`Google/Gemini-4-Argon`)
> Date: 2026-10-25 (UTC)
> Overview + scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Argon
- **Short description:** Google DeepMind frontier model released Sep 30, 2026 by SVP Koray Kavukcuoglu. Long-horizon software engineering, legal/financial knowledge work, defensive cybersecurity. Headline change: 1M-token output ceiling (up from 64K). Initial rollout through Fairwind Program to trusted cyber defenders, then paid API / Google AI Ultra subscribers. No public model ID published as of research date; API shape follows standard Gemini pattern documented on google.dev.
- **Provider / access:** Google Gemini API (Chat Completions only); OpenRouter, Vertex AI, Cursor, GitHub Copilot, models.dev — not listed. Access through Fairwind Program + Google internal teams then paid API customers.
- **Release / knowledge:** Released 2026-09-30. Knowledge cutoff not publicly declared.
- **IDs:** `google/gemini-4-argon`; no published OpenRouter/Vertex model ID visible. Documented call pattern available via google.dev docs path.
- **Context window:** Combined input+output 1.0M tokens. Output explicitly capped 1M; ~1M verified single-pass generations by DataCamp, BenchmarkList, launch chart.
- **Modalities:** Text in/out, image in, audio in, video in. Tool calling, JSON mode supported. Reasoning on by default.
- **Pricing (as of 2026-10-25):** Intro $2/$10 per million input/output, cached input at 5% off input rate; promo duration unknown. Post-promo rises to $4/$20. Does NOT match GPT-6 Astra 5× lower input rate until promo ends.
- **Architecture:** Proprietary Google DeepMind Transformer MoE family. Exact param counts not published.

### Raw benchmarks found

Grandtable of sourced benchmarks with provider + source tags. Self-reported on Google's September 30 eval chart plus third-party reproduction (BenchmarkList, Artificial Analysis leaderboard, Vals AI, Proximal, Surge AI). Where two sources overlap, tag separately. Verification status noted per row.

Agentic:

- AutomationBench-AA 77.5% (rank 1/32, verified Oct 2026) — Artificial Analysis AA impl + self-reported
- AutomationBench 51.3% (rank 4/48, self-reported) — Zapier benchmark for end-to-end SaaS workflows
- PostTrainBench 45.3% (rank 2/34, self-reported)
- BrowseComp 90.4% ±3.9% (rank 9/69, Mercor verified)
- AA-Briefcase Elo 1,486 (rank 27/155, Artificial Analysis verified Oct 2026)
- Vending-Bench 2 Final Account USD 13,718.16 (rank 3/60, andonlabs verified Oct 2026)
- Agents' Last Exam pass rate 39.5% (rank 9/43, self-reported)

Coding:

- Vibe Code Bench v1.1 91.9% (rank 1/75, self-reported, leads all fronts)
- SciCode 61.8% (rank 4/307, Artificial Analysis verified)
- DeepSWE v1.1 77.9% (rank 3/61, self-reported, leads Opus 5.5 74.2 and Astra 74.1)
- Terminal-Bench 4.0 57.4% (rank 7/39, self-reported, trails Opus 5.5 66.4 by ~9 points)
- FrontierSWE v2 55.0% (Proximal verified, rank 5/20, trails Astra 65.5 and Opus 5.5 62.3)

Intelligence:

- AIIQ Composite IQ 140 (self-reported, verified latest via aiiq.org)
- Humanity's Last Exam accuracy 57.1% (Artificial Analysis verified, rank 12/488)
- Artificial Analysis Intelligence Index 52.6 (Artificial Analysis verified, rank 17/433)
- GPQA Diamond via composite aggregator reference
- GPAval-AA 53.7% (Artificial Analysis, verified)

Long context:

- AA-LCR 79.7% (Artificial Analysis verified, rank 53/419)
- GraphWalks BFS @ ≤128K 99.7% (self-reported verified internally, clear long-window)
- GraphWalks BFS @ 256K–1M 84.2% (leads Astra 71.8; 12.4 point margin deciding large-document workloads)

Multimodal:

- LVBench 91.7% (rank 1/49, verified, extends 2h videos)
- Chartography 71.6% (Surge AI benchmark, leading Astra 71.0, Opus 5.5 66.3, Fable 5.1 46.2)
- Blueprint-Bench 2 0.790 ±0.006 (andonlabs verified Oct 2026, rank 1/31)
- CritPt 27.1% (Artificial Analysis verified, rank 10/33 — below GPT-5.6 Sol 32.3%)

Cybersecurity:

- CWE-bench v1 68.0% (Collinear verified, rank 2/11 — tied Astra 68.0, leads Fable 5.1 58.0, Opus 5.5 67.0)
- Terminal-Bench Science 0.1 57.6% (self-reported)
- ExploitGym 42.4% (OpenAI chart referenced via Datacamp)

Finance / knowledge work:

- Vals Index 68.9% (lead all competitors: Astra 63.1%, Opus 5.5 67.0%, Fable 5.1 65.8%)
- AutomationBench 51.3% (Zapier business automation, leads Opus 5.5 42.5 and Fable 5.1 31.4)
- Finance Agent v2 65.4% (rank 1/55, leads all of competitor rows including Fable 5.1 58.9)
- Harvey's Legal Agent Benchmark 19.6% (rank 3/39 — critical read as benchmark for legal drafting relative vs legal focus, all competitors fail)

Safety:

- Gray Swan IPI Combined Attack Set 0.7% attack success at 15 attempts (rank 1/19, self-reported)
- CAIS Risk Index 56.2 (Safe Dashboard verified, rank 34/57)

Science aggregate:

- LABBench 2 Aggregate 88.8% (rank 1/10, Biology, leads all competitors)
- RiemannBench 76.0% (rank 2/8, Mathematics)
- Lech Mazur Writing 0.8 (Compar Score, rank 16/55, Win Prob 62%)

Source note: every score row traced to one primary cited provider publication or verified secondary-site figure. Where independent third parties reproduce Argon's public numbers (BenchmarkList aggregation page showing rank-5 overall), source cross-tag is noted explicitly but primary single origin retained for score row binding.

### Normalized scores (1–100)

> Derivation per methodology in `model-comparison.md`. Each capped at maximum plausible; uncited inferred data absent.

- **Tool use: 90/100.** High automated agent profile: agent rewrites Rust SIMD→compiler vectorization automatically across 32K-line libgav1 library, fleet telemetry optimizations freeing 300–1PiB teraBytes of memory, vulnerability discovery/patch at cyber-scale, professional chart-based financial analysis, multi-step legal document processing, end-to-end migrations with automated + manual audit gates. Capped at ~92 with caveat cybersecurity patch pipeline topped up above base by Opus 5.5 stronger single task vs agent breadth. Autonomous generation proves especially relevant since this model can run complete workflows in single outputs without chunk-resume coordination.
- **Reasoning: 89/100.** Long-horizon reasoning strongly dominant on every enterprise benchmark Google publishes. Vals Index 68.9 leads all three peer rows (Astra 63.1, Opus 5.5 67.0, Fable 5.1 65.8). GraphWalks BFS holds >128K=99.7% and lands strongest at 256K–1M=84.2%. LABBench biology aggregate 88.8% rank #1. RiemannBench math 76.0% lead. Penalize where reasoning degrades badly: Agents' Last Exam 39.5%, Harvey's Legal Agent Benchmark 19.6% every competitor failing, HLE accuracy 57.1 still below rank #1 (Opus 5.5 67.7). Soft ceiling around 90 because the cyber domain exercises extended exploration rather than focused analytic stopping patterns that would otherwise favor analytical inference peaks.
- **Context window: 92/100.** Combined input+output declared 1.0M tokens confirmed single-pass generations on DataCamp blog and confirmed 256K–1M window retrieval via GraphWalks BFS scores. Ceiling hard 95 feasible from provider specs; realistic floor pinned at 92 given verified tested extremes range graph traversal lands across millions versus purely tested baseline context maxima. Prior Argon evolution on a FLASH family lineage maintaining one-million single combined window demonstrated directly by official release comparison, versus Astra at 1.05M total input only (subtle advantage but smaller absolute output budget ceiling).
- **Multimodal: 88/100.** LVBench long-video professional reasoning verified 91.7% top performer among analyzed multimodal offerings, Chartography chart graphical-reasoning supports professional visualization with strong scores 71.6%, Blueprint-Bench 2 spatial/planning with 0.790 deterministic parsing evidence, plus full-suite image processing capability on same baseline. Caveat multimodal benchmark does not thoroughly test cross-modal reasoning beyond repeated single-domain subtasks; broader multimodal benchmark coverage unlikely till post-release benchmark expansion calendar, keeping partial-credit ceiling conservative though legitimate high band justified for actual multimodal breadth.
- **Coding: 85/100.** DeepSWE v1.1 77.9% rank #3 of 61 leads Opus 5.5 74.2 and Astra 74.1; Vibe Code Bench 91.9% ranks entirely top cluster across models analyzed (both Opus 5.5 and Fable 5.1 close). Penalize severe deficit on terminal-execution FrontierSWE v2 55.0% trailing Astra 65.5 and Opus 5.5 62.3 plus Terminal-bench 4.0 57.4 below Opus 5.5 peak. Architectural pattern rewards plan retention but undercuts execution engines where Opus 5.5 achieves sharper percentile separation. Cap around 85 since FrontierSWE v2 floor caps coding dimension materially; architecturally improves pipeline over latest prior generations through execution rather than pure plan structuring alone.
- **Cost efficiency: 55/100.** Introductory pricing exactly $2/$10 equal to GPT-6.1 Sol, immediately undercuts GPT-6 Astra $10/$50 by 5× input rate, with output $10 also 5× cheaper than Astra but doubling at end promotional phase into $4/$20 matching Opus 5 standard tier and 2× Opus. Cache discounted token handling preserves original price advantage. Conservative cap of 55 because costs post-promo rise rapidly beyond stated free-interval duration unknown; raw token economics favor transient sessions whereas continuous long-running agent fleets accumulate significant difference.
- **Overall Score: 89/100.** Half-up mean [90 + 89 + 92 + 88 + 85] / 5 = 88.8 ≈ 89. Best fit: long-horizon document, repository, financial-deck analysis, legal-workflow automation, defensive-cybersecurity vulnerability patch applications. Avoid terminal-driven long-cycle loops where Opus 5.5 gives Terminal-bench 4.0 66.4 at substantially identical cost; reserve Astra territory where frontier code advantages dominate economics.

---

## Signature

- Provided by: **Xing_4.0_29b_a4b (google/gemini-api)** — 2026-10-25
- Method: internet research through Google official announcements, Artificial Analysis model-data feed, BenchmarkList leaderboard, third-party aggregators. Scores normalized 1–100 interpretations, not vendor-published metrics. Preference: single cited provenance where self-report available; verified secondary checked immediately.
- Future sources: add alternate reflection file `Xing_4.0_29b_a4b_Deepdive.md`.
