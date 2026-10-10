# Claude Opus 5 — findings by Ling 3.1 Flash

- Source: Anthropic (`anthropic/claude-opus-5`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5
- **Short description:** Anthropic's Opus 5-generation flagship (released 2026-07-24) for the deepest reasoning and longest autonomous coding and research runs — close to Fable 5's frontier intelligence at half the price; new state of the art on Frontier-Bench and GDPval-AA, behind Mythos 5 on cybersecurity.
- **Provider / access:** Anthropic Claude API (`claude-opus-5`), Claude Platform, AWS, Google Cloud, Microsoft Foundry; Claude Pro/Max/Team/Enterprise. Effort settings low→max; Fast mode 2.5x speed at 2x price; US-only inference at 1.1x.
- **Release / knowledge:** 2026-07-24; knowledge cutoff not stated in the card.
- **IDs:** `anthropic/claude-opus-5`. No Free ID on OpenCode Zen (`noFreeId`) — scored on paid pricing.
- **Context window:** 1M tokens total; 128,000 max output.
- **Modalities:** text, image, PDF in; text out; tool calls, structured outputs, code execution.
- **Pricing (as of 2026-10-02):** $5/$25 per 1M input/output (unchanged from Opus 4.8); up to 90% savings with prompt caching, 50% with Batch.
- **Architecture:** proprietary (Anthropic); parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- Frontier-Bench v0.1 (Terminal-Bench team, 74 tasks across coding/finance/music/biology/hardware): **43.3** mean reward (card Table; prose reads 44.4 at xhigh; internal run, mini-SWE-agent harness, GKE backend, mean over 5 attempts — vs Fable 5 33.7, Opus 4.8 18.7) — new state of the art
- GDPval-AA v2: **1708** (per Anthropic's Opus 5.5 comparison table) — SOTA at release
- CursorBench 3.2 (max effort): within 0.5% of Fable 5's peak score at half the cost per task; best performance-per-cost at high/xhigh/max
- Zapier AutomationBench: **26.9%** (Zapier public leaderboard; ~1.5x the next-best model's pass rate for the same cost; even at its lowest effort setting it passes more tasks than any other model)
- OSWorld 2.0 (computer use): outperforms every other model at any given cost, surpassing Fable 5's best result at just over a third of the cost (no single numeric score in the card)
- Terminal-Bench 2.1: dropped from the Opus 5 card; public Claude Code leaderboard reports **51.8%** (5 trials/task)
- Terminal-Bench-Science 0.1: **30.0%** (public leaderboard, 3 trials/task, Claude Code harness)
- DeepSearchQA: listed among Anthropic's best/cost-efficient evals; no numeric score published
- Claw-Eval / ClawProBench / Toolathlon-Verified: no verified public score found

Reasoning / knowledge:

- Humanity's Last Exam (with tools): **63.6%** (per Anthropic's Opus 5.5 comparison table)
- GPQA Diamond: **93.7%** (per OpenAI's GPT-6 Astra comparison table)
- ARC-AGI-3: **30.2%** (card; vs Opus 4.8 1.5% — "three times as high as the next-best model"; absolute level still low on this new benchmark)
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified: **96.0%** (system card §8.2 prose, mean over five trials; absent from the card's summary table and the announcement page; note OpenAI retired SWE-bench Verified reporting in Feb 2026, estimating 59.4%+ of audited failed problems had flawed tests)
- SWE-bench Pro: **79.2%** (card Table 8.1.A; vs Fable 5 80.0, Sonnet 5 63.2, Opus 4.8 69.2)
- LiveCodeBench / DeepSWE / SciCode / Vibe Code Bench: no verified public score found

Long context:

- 1M-token window; no MRCR / RULER / GraphWalks retrieval score published

### Normalized scores (1–100)

- **Tool use: 90/100.** Frontier-Bench v0.1 43.3 (new SOTA, 1.3x Fable 5), GDPval-AA 1708, best-in-class OSWorld 2.0 cost-efficiency, and AutomationBench's 1.5x-next-best pass rate clear the frontier band; the dropped Terminal-Bench 2.1 row (public leaderboard 51.8%) and unpublished Claw-Eval/MCP-Atlas cap it below 93.
- **Reasoning: 92/100.** HLE 63.6% with tools and GPQA 93.7% both sit firmly in the frontier reference band; ARC-AGI-3 30.2% (3x next-best but low absolute) and the unpublished AA Intelligence Index keep it out of the 94+ band.
- **Context window: 95/100.** 1M tokens / 128K out; no ≥98% retrieval-at-512K+ figure published, so 100 is not justified.
- **Multimodal: 78/100.** text + image + PDF in with text out — the +PDF-in band (75–90); no audio/video input.
- **Coding: 93/100.** SWE-bench Verified 96.0% (5-trial mean) and SWE-bench Pro 79.2% plus the Frontier-Bench SOTA are top-of-set; capped below 95 because SWE-bench Verified itself is a retired/flawed benchmark and LiveCodeBench/DeepSWE/SciCode are unpublished.
- **Cost efficiency: 51/100.** $5/$25 per 1M sits between the $3/$15 (~60) and $10/$50 (~30) references; up to 90% cache savings materially help long agentic runs.
- **Overall Score: 90/100.** (90+92+95+78+93)/5 = 89.6 → 90 — the value flagship: Fable-class coding and knowledge work at half the price, with PDF-in support and best-in-class computer-use cost efficiency.

---

## Update 2026-10-08 (6-day re-research)

Fills the LiveCodeBench, DeepSWE, SciCode and Vibe Code Bench gaps:

- **DeepSWE v1.1: 74% ±4%** (Datacurve independent run, 2026-08-17; $11.84/task, 118k tokens, 99 steps) — **#1 on the leaderboard**, +4pp over Fable 5's 70% at 45% lower cost per task; Anthropic's own system card reports 68.8% under the Claude Code harness — was "no verified public score found"
- **LiveCodeBench: 89.0%** (vals.ai, 2026-07-28, ±0.91, rank 2/123; field leader Fable 5 89.8%) — fills gap
- **SciCode: 56.4%** (max, rank 21/296; leader Opus 5.5 66.9%) — fills gap
- **Vibe Code Bench v1.1: 88.4%** (vals.ai, rank 6/75) — fills gap
- SWE-bench Verified **97.0%** (vals.ai, 2026-08-17; system-card 5-trial mean 96.0%); SWE-bench Multilingual 89.5%; SWE-bench Multimodal 59.4%
- **Toolathlon Verified: 80.6% — #1 of 21** (BenchLM leaderboard)
- BenchmarkList additions: SWE Atlas Test Writing 62.2% (rank 2/30), Codebase QnA 66.0% (rank 3/37), Senior SWE-Bench 34.7% (rank 3/19), SWE-Marathon 48.0% (rank 1/8; 80/160 passing trials), Code Migration 57.5% (rank 1/33), NL2Repo 75.3% (rank 1/34), KernelBench CUDA 79.3% (rank 1/11), KernelBench Mega 24.29 (rank 1/15), KernelBench Hard 21.8% (rank 1/17), ProgramBench 93.0% Anthropic harness (rank 1/10) / 82.3% (rank 3/37), Android Bench 91.8% (rank 1/46), IOI 91.7% (rank 6/58), Convex Coding Evals 81.7%, SkillsBench 63.7%, FrontierSWE v2 52.0%, CursorBench 3.2 70.0% / 3.1 66.7%, ReactBench 42.1%
- Terminal-Bench 2.1 **89.1%** (AA, 2026-08-20, ±10.6, rank 7/194); Terminal-Bench 4.0 52.3% (rank 7/29); WebDev Arena 1663; AA Coding Agent Index 68.1; AA-AnalystAgent 53.8 (2026-09-29); HLE no-tools **54.9%** (AA, 2026-08-19); LiveBench 80.1; ARC-AGI-2 90.4% (2026-08-24); GPQA 93.4% (vals.ai); Agents' Last Exam 32.2% (Snorkel AI, 2026-10-01); OSWorld 2.0 70.6% (vendor); AutomationBench 26.0%; BrowseComp 90.8% (vendor)
- The Model Gap (2026-10-08): all ten tracked scores are independent runs; DeepSWE +15.0 over Opus 4.8 and HLE +6.2 are "real gaps"; TB 2.1 +10.2 is "setup-dependent"; SWE-bench Verified / GPQA / LiveCodeBench saturated
- Lineup context (2026-10-07): Haiku 5.5 launched; Sonnet 5.5 cache reads halved; Opus 5 pricing unchanged

---

## Update 2026-10-10 (deep second pass, 3 independent searches)

**Scores unchanged: Tool 90 / Reasoning 92 / Context 95 / Multimodal 78 / Coding 93 / Cost 51 / Overall 90.** New fills and conflict checks this pass:

- **AA Intelligence Index v4.3.2: 51 (Max) / 48 (High)** (AA's own page) — fills the previous "unpublished AA Intelligence Index" gap. Full AA component table (Max effort): AA-Briefcase v1.1 **1660**, GDPval-AA v2.1 **1722**, AutomationBench-AA **57%**, Terminal-Bench 4.0 **49%**, SciCode **56%**, HLE **55%**, GDP.pdf **22%**, CritPt **29%**, AA-Omniscience **37**, AA-LCR v1.1 **79%**. AA cost/task $5.86 (Max) / $3.61 (High); 73K output tokens per task; 826s per task at max.
- **Index revision effect (not a regression):** AA's launch article (2026-07-24) read the v4.3-era Index at **61 (Max)** — "narrowly the most intelligent model on the Intelligence Index, tied with Fable 5 (60), ahead of GPT-5.6 Sol (59), Kimi K3 (57), Opus 4.8 (56)" at $2.03/Index task (26% below Fable 5). The current 51 is the v4.3.2 revision (adds AA-Briefcase, GDPval-AA v2.1, AutomationBench-AA, TB 4.0, GDP.pdf, CritPt, AA-Omniscience, AA-LCR) — the two numbers measure different eval sets, exactly as with Gemini 3.1 Pro and Muse Spark 1.3.
- **GDPval-AA three-way conflict, all reported:** 1861 Elo (AA launch article, GDPval-AA v2, 2026-07-24) vs 1722 (AA v4.3.2 table, GDPval-AA v2.1) vs 1708 (Anthropic's Opus 5.5 comparison table, GDPval-AA v2) — version and harness differences, not errors.
- **AutomationBench conflict resolved by methodology:** Zapier public leaderboard **26.9%** (Zapier's own harness) vs AA AutomationBench-AA **57%** (AA's Stirrup harness, max effort) — a 30-point harness-dependent spread; the Anthropic launch claim of "~1.5× the next-best model's pass rate for the same cost" sits between them. Tool 90 stands: TB 2.1 89.1% (AA), Toolathlon 80.6% (#1), Frontier-Bench 43.3 (SOTA) support it; TB 4.0 49% and the AutomationBench spread cap it.
- **System card re-read (revised edition b514064a, 194pp):** upgrade over Opus 4.8 with largest gains in agentic coding, computer use and long-horizon knowledge work; comparable to or ahead of Fable 5 and Mythos 5 on many evaluations; **AECI 162.1** (95% CI 158.0–167.3, n=40) — nominally the highest measured but statistically indistinguishable from Mythos 5 (161.3); most aligned model on Anthropic's behavioral audit; behind Mythos 5 on offensive cyber (ExploitBench: 9.62/10.14 capability flags, 99 full ACE exploits, 79.4% non-zero targets vs Mythos 5's 80%/13 complete exploits) — vulnerability discovery near-Mythos, exploit development behind. Cyber safeguards now permit source-code vulnerability discovery at all access levels while blocking compiled-binary discovery.
- **Platform docs re-read:** knowledge cutoff **May 2026**; default effort high; cache read $0.50/M (10% of input — "up to 90% savings" confirmed); Batch 50% off; Fast mode 2.5× speed at 2× price.
- **Score impact:** none — the new AA reads (TB 4.0 49%, AutomationBench-AA 57%, SciCode 56%, HLE 55%, AA-LCR 79%) all land inside the bands the existing scores already assumed; the Index-51 fill corroborates Reasoning 92 without clearing the 94+ bar set by Opus 5.5's 58.

---

## Signature

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-02 (updated 2026-10-08, 2026-10-10)
- Method: public internet research (Anthropic Opus 5 system card (revised edition b514064a) and launch page, Artificial Analysis launch article and model pages, Zapier AutomationBench leaderboard, vals.ai, Datacurve, BenchLM, BenchmarkList, ai-model-timeline); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
