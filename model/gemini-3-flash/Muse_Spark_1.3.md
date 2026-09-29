# Gemini 3 Flash — findings by Muse Spark 1.3

- Source: Google/Gemini 3 Flash, e.g. Meta (`muse-spark-1.3-contributor-free`)
- Date: 2026-09-23 (UTC), amended 2026-09-27 (UTC, user-signed-off exception: launch-lane variances + math/arena/MMMU rows added; scores hold 87); re-verified 2026-09-29 (UTC, user-signed-off re-research: release-tracker 18-row table added — SWE-Pro/TB2.1/MCP/OSWorld/GDPval/CharXiv/Blueprint/MRCR/LiveCode-Elo — + preview status; Tool 82 → 83, Context 92 → 90 — Overall holds 87)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Flash
- **Short description:** Google's efficient workhorse of the Gemini 3 generation — near-frontier coding and reasoning at Flash pricing. Best fit for high-volume agentic coding and multimodal volume workflows.
- **Provider / access:** Google AI (Gemini API / AI Studio, Vertex AI); OpenCode Zen `opencode/gemini-3-flash`. Native generateContent API; Chat Completions-compatible via gateways.
- **Release / knowledge:** 2025-12-17 (Preview same day; still preview per Dec blogs — re-verified 2026-09-29); knowledge cutoff 2025-01-31 (per AnotherWrapper comparison and CloudPrice version table)
- **IDs:** `opencode/gemini-3-flash` (paid tier; cost scored on paid pricing)
- **Context window:** 1M total tokens (1,048,576), max output 65.5–66K tokens — verified via CloudPrice specs, AnotherWrapper comparison, and DesignForOnline review
- **Modalities:** Text, image, audio, video, PDF/file in; text out; reasoning yes (high-reasoning effort option); tool/function calls, JSON schema, web search, code execution yes
- **Pricing (as of 2026-09-23):** $0.50/$3.00 per 1M in/out, cache reads $0.05/1M (verified via CloudPrice, AnotherWrapper, DesignForOnline). No $0 tier — paid only.
- **Architecture:** Proprietary (undisclosed params), reasoning model

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **58%** (release tracker — re-verified 2026-09-29); Terminal-Bench 2.0: **64.3%** Junie-CLI lane (**47.6%** ModelBeats variant — re-verified 2026-09-29); TerminalBench Hard **38.6%** (AA-derived)
- Tau3-Banking / Tau2-Bench: Tau2-Bench **80.4%** (Artificial Analysis-derived via DesignForOnline review); Tau3 proper: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: ToolAthlon **49.4%**, MCP Atlas **57.4%** (AnotherWrapper benchmark table); **62%** MCP release-tracker variant (re-verified 2026-09-29)
- OSWorld-Verified: **65.1%** (release tracker — re-verified 2026-09-29)
- Finance Agent v2: **42.6%** (release tracker — re-verified 2026-09-29)
- GDPval-AA: **1204** (release tracker — re-verified 2026-09-29)
- SWE-bench Verified (agentic coding proxy): **75.8%** high-reasoning on the official SWE-bench Feb 2026 "Bash Only" leaderboard rerun (via Simon Willison's leaderboard update); aggregator snapshot lists 78% (AnotherWrapper)

Reasoning / knowledge:

- GPQA Diamond: **89.4–89.8%** (AnotherWrapper 89.4%; DesignForOnline 89.8%; launch table 90.4% — lane variance noted 2026-09-27)
- HLE: **34.7%** (DesignForOnline) / **43.5%** (AnotherWrapper snapshot — harness differs, both cited) / **33.7%** launch no-tools (release tracker — re-verified 2026-09-29)
- LCR / MLCR: LCR **66.3%** (DesignForOnline); MRCR v2 22.1% on one aggregator snapshot (scale unclear — noted, not used for scoring)
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: Index **35–38.7** (CloudPrice 35.0; DesignForOnline 38.7) / BenchLM overall 62.96
- Omniscience Accuracy / Hallucination Rate: no verified public score found
- AIME 2025 (math proxy): **97–99.7%** (DesignForOnline 97%; AnotherWrapper 99.7% — effort/harness differs)
- MATH 97.5% / GSM8K 96.8% / SimpleQA 68.7% / OTIS Mock AIME 92.8% / FM T1-3 51.2% / SimpleBench 53.3% / ARC-AGI 21.5% / Arena 1473 overall + 1437 coding (launch + BenchGecko rows — amended 2026-09-27)
- MMLU-Pro / MMMLU: **89–91.8%** (DesignForOnline MMLU Pro 89%; AnotherWrapper MMMLU 91.8%)
- MMMU-Pro: **81.2%** (launch; filed scoring evidence, recorded here — amended 2026-09-27)
- CharXiv Reasoning: **80.3%** (release tracker — re-verified 2026-09-29)

Coding:

- SWE-bench Verified / SWE-Pro: **75.8%** Verified high-reasoning (official Feb 2026 rerun); SWE-Pro: **49.6%** (release tracker — re-verified 2026-09-29)
- LiveCodeBench: **90.8%** (DesignForOnline) / LiveCodeBench Pro **77.2%** (AnotherWrapper — harness differs, both cited); Pro Elo **2316 #3** (ModelBeats — re-verified 2026-09-29)
- SciCode / AA-SciCode: **50.6%** (DesignForOnline)
- Vibe Code Bench: no verified public score found; Blueprint-Bench 2: **0%** (release tracker weak tail — re-verified 2026-09-29)
- DeepSWE / Coding Index / other: CloudPrice Coding Index 37.8 (index, not a pass rate — noted, not used); DeepSWE: no verified public score found
- ARC-AGI-2 (reasoning-adjacent): **33.6%** (AnotherWrapper)

Long context:

- LCR **66.3%** plus MRCR v2 **67.2% @128k / 22.1% @1M pointwise** (release tracker — re-verified 2026-09-29); retrieval at the extreme end stays weak

### Normalized scores (1–100)

- **Tool use: 83/100.** SWE-V 75.8% plus Tau2 80.4%, OSWorld-Verified 65.1% and TB2.1 58% show strong agency; sub-70 Terminal-Bench rows cap it below the 88%+ frontier band.
- **Reasoning: 90/100.** GPQA ~89.5% and HLE up to 43.5% sit at the frontier bar (90%+/40%+); AIME ~97%+ corroborates.
- **Context window: 90/100.** Full 1M window with LCR 66.3% and MRCR 67.2%/22.1%, but weak 1M-pointwise retrieval keeps it off the 95–100 top tier.
- **Multimodal: 88/100.** Full image/audio/video/PDF input with MMMU-Pro 81.2% and VideoMMMU 86.9%; text-only output caps it below 90.
- **Coding: 85/100.** SWE-V 75.8% with LiveCode up to 90.8% is near-frontier; SciCode 50.6% and no DeepSWE number cap it short of 90+.
- **Cost efficiency: 90/100.** $0.50/$3.00 paid pricing is the cheapest near-frontier tier measured — well under $1+/$4+ peers, but not $0.
- **Overall Score: 87/100.** Mean of (83 + 90 + 90 + 88 + 85) / 5 = 87.2 → 87; best fit as the default high-volume agentic-coding workhorse.

---

## Signature

- Provided by: **Muse Spark 1.3 (muse-spark-1.3-contributor-free)** — 2026-09-23
- Method: public internet research (official SWE-bench Feb 2026 leaderboard via Simon Willison, tbench.ai TB 2.0 leaderboard, CloudPrice specs, AnotherWrapper comparison table, DesignForOnline review of AA/HF data); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
