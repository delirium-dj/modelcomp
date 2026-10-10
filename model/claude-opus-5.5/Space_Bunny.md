# Claude Opus 5.5 — findings by Space Bunny

- Source: Anthropic (`claude-opus-5-5`)
- Date: 2026-10-10 (UTC) — second-pass research; first pass 2026-09-25
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5.5
- **Short description:** Anthropic's flagship model for demanding reasoning, long-running coding agents, knowledge work, and multimodal analysis — the first release of the Claude 5.5 family and the model Anthropic now recommends as the default starting point for most API workloads.
- **Provider / access:** Anthropic API `claude-opus-5-5`; Amazon Bedrock `anthropic.claude-opus-5-5`; Google Cloud `claude-opus-5-5`; Microsoft Foundry `claude-opus-5-5`; OpenRouter `anthropic/claude-opus-5.5`.
- **Release / knowledge:** Released 2026-09-22; reliable knowledge/training cutoff June 2026.
- **Context window:** 1,000,000 tokens; maximum output 128K tokens (300K on the Batch API, beta). Same tokenizer as Opus 5.
- **Modalities:** Text and image input, text output; adaptive thinking is always on and cannot be disabled, with effort (`low`/`medium`/`high`/`xhigh`/`max`, default `medium`) as the primary control; tool use supported, though **forced tool use now returns an error**. Production safeguards can fall back to Claude Opus 4.8 (cybersecurity) or Claude Opus 5 (biology, frontier LLM development).
- **Pricing (as of 2026-10-10):** $4 input / $0.20 cache read / $20 output per 1M; cache writes $5 (5-min TTL) and $8 (1h TTL); Batch API $2/$10 (50% off); fast mode $8/$40. Cache read is a 95% discount against uncached input.
- **Architecture:** Proprietary; parameter count and architecture not disclosed.

### Raw benchmarks found

> Anthropic's launch figures use adaptive thinking at max effort unless noted (Terminal-Bench 4.0 at xhigh), with production safeguards enabled — safeguard interventions route the task to an older Claude, which Anthropic says lowers its own scores. Competing figures below come from the public leaderboards and third-party aggregators.

Agent / tool use:

- Terminal-Bench 4.0: **66.4%** (Anthropic, xhigh effort, ±2.6 pts SE); public leaderboard 2026-09-30 confirms 66.4%, rank 2/29 (96th pct)
- Terminal-Bench-Science 0.1: **58.7%** (Anthropic) vs **63.3%** on the public leaderboard (2026-09-30, rank 2/10) — conflicting; the leaderboard figure is 4.8 pts behind GPT-6 Astra's 68.1%
- FrontierCode v1.1 (Main): **54.4%** (Anthropic); a third-party aggregator lists **65.3%** at rank 1/36 — likely a different variant/effort than Anthropic's "Main" row, so the two are not directly comparable
- CursorBench 4.0: **57.8%** (Anthropic)
- GDPval-AA v2.1: **1,846 Elo** (Anthropic; rank 1 on the AA leaderboard as of early October 2026)
- AA-Briefcase v1.1: **1,822 Elo** (independently run; rank 1)
- AutomationBench: **40.0%** (Zapier evaluation; safeguard interventions counted as failures — GPT-6 Astra leads at 41.4%)
- ProgramBench (Anthropic harness): **91.2%**
- OSWorld 2.0: **81.8% partial / 48.7% strict**
- Toolathlon Verified, DRACO, WANDR, multi-agent benchmarks: named in the system card, **no numeric values published**

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **58 at max effort — the highest measured score on the index** (xhigh 56, high 54, medium 51, low 42); median 26
- Humanity's Last Exam: **67.7% with tools / 64.4% without tools**
- Artificial Analysis HLE: 61.4%; AA-LCR: **84.7%** (rank 5/408, 99th pct — field leader Kimi K3 at 88.7); CritPt: 31.7%
- HealthBench Professional: **65.6%**
- GPQA Diamond: no exact public score found
- Anthropic reports ~40% lower typical-workload cost than Opus 5 and >30% faster output; Artificial Analysis finds Opus 5.5 at max effort uses ~119K output tokens per Index task vs ~73K for Opus 5 (1.6×) and is only level on cost per task

Coding:

- SWE-bench Pro: **89.9%** (system card, 2026-09-28; rank 1 of 58)
- SWE-bench Multilingual: **93.9%** (rank 1 of 49)
- SWE-bench Multimodal: **61.4%** (rank 1 of 17) — resolved issues containing screenshots, mockups and visual error context
- DeepSWE 1.1: **74.2%** (rank 4 of 52); SWE-Marathon: **74 of 160 passing trials** (rank 5 of 33); FrontierSWE v2: **62.3%** (rank 2 of 20)
- SciCode: **66.9%** (rank 1 of 296); KernelBench Mega: **35.46** (rank 1 of 28); Vibe Code Bench v1.1: **90.3%**
- Independent build-from-scratch benchmark (six projects, Elma, 2026-10-10): **57.8% overall, first place** — but with real defects flagged (container filesystem whiteout handling, misleading save-failure feedback)
- CodeRabbit production-pipeline test (80 shared bug patterns): Opus 5.5 Standard caught 51/80 vs the production baseline's 49/80, Max caught 50/80 — with **actionable precision falling** from 39.3% (baseline) to 38.6% / 35.7%

Long context:

- AA-LCR: **84.7%** with a 1M context window (Artificial Analysis; rank 5/408)
- 1M-token context documented and billed at the standard rate; no standalone RULER, MRCR, or GraphWalks result found

Multimodal:

- Chartography (with tools): **89.0%**; SWE-bench Multimodal: **61.4%** (rank 1 of 17); OSWorld 2.0: **81.8% partial / 48.7% strict**
- Text/image input verified by the Anthropic models overview; no separate exact-model visual benchmark beyond these rows

### Normalized scores (1–100)

- **Tool use: 96/100.** Terminal-Bench 4.0 at 66.4% (leaderboard-confirmed), GDPval-AA v2.1 at 1,846 Elo and AA-Briefcase at 1,822 Elo both ranked first, ProgramBench 91.2%, OSWorld 2.0 at 81.8% partial — plus new SWE-bench Pro/Multilingual/Multimodal results that all rank first. Capped by AutomationBench (40.0%) and Terminal-Bench-Science, where GPT-6 Astra leads.
- **Reasoning: 95/100.** The highest Artificial Analysis Intelligence Index score ever measured (58), HLE 67.7% with tools and 64.4% without, and first place on AA-Briefcase. Still no verified exact GPQA Diamond figure, which keeps it off the ceiling.
- **Context window: 98/100.** 1M tokens with 128K output (300K on Batch), and an independent AA-LCR of 84.7% at full length — the practical long-context ceiling is the model's verbosity at 260M output tokens across the Index run, not the window.
- **Multimodal: 90/100.** Image input is verified, and the new SWE-bench Multimodal result (61.4%, rank 1 of 17) shows genuine screenshot/diagram-driven software work, alongside Chartography 89.0% and OSWorld 2.0 computer use. Public visual evidence remains narrower than text/agent evidence.
- **Coding: 96/100.** A clean sweep of independent-leaderboard rank-1 results: SWE-bench Pro 89.9%, Multilingual 93.9%, Multimodal 61.4%, SciCode 66.9%, KernelBench Mega. Tempered by DeepSWE 1.1 at 74.2% (4th), SWE-Marathon 74/160 (5th), the Terminal-Bench-Science deficit to GPT-6 Astra, and independent build-from-scratch testing that found real defects despite the win.
- **Cost efficiency: 80/100.** $4/$20 is expensive against the class median, and Artificial Analysis explicitly flags it as "particularly expensive when comparing to other models of similar price" and "very verbose" (260M output tokens vs an 82M median). Offsetting that: a 95% cache-read discount, Batch at $2/$10, and a first-party-independent measurement of 64% fewer total tokens than Opus 5 on an identical task.
- **Overall Score: 95/100.** The strongest all-round model measured on independent benchmarks — best fit for demanding autonomous agents, long migrations, multimodal computer use and knowledge work where the 1M window and cache economics justify frontier pricing.

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-10
- Method: second-pass public internet research across Anthropic's official Opus 5.5 announcement, model documentation and System Card, Artificial Analysis model and index pages, BenchmarkList leaderboard rows dated 2026-09-28 to 2026-10-03, CodeRabbit's published code-review test, an independent six-project build benchmark, and independent cost measurements; conflicting figures (FrontierCode, Terminal-Bench-Science) are reported side by side rather than merged; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Claude_Opus_5.5.md`, using the same headings.

---

## Sources

- Anthropic — Introducing Claude Opus 5.5 (2026-09-22): https://www.anthropic.com/claude-opus-5-5
- Claude Platform model overview (`claude-opus-5-5`: context, pricing, effort, breaking changes): https://platform.claude.com/docs/en/models/opus-5-5/overview.md
- Claude Opus 5.5 System Card (capability tables, safeguards): https://www-cdn.anthropic.com/fc1b44717c85dc068bc6ba5024219938094694bd/Claude%20Opus%205.5%20System%20Card.pdf
- Artificial Analysis — Claude Opus 5.5 (max with fallback): index 58, speed 97 t/s, $5.98/task: https://artificialanalysis.ai/models/claude-opus-5-5
- Artificial Analysis — Opus 5.5 takes the top spot on the Intelligence Index: https://artificialanalysis.ai/articles/claude-opus-5-5
- Artificial Analysis effort ladder and provider table: https://artificialanalysis.ai/models/releases/claude-opus-5-5
- BenchmarkList — Opus 5.5 leaderboard rows (SWE-bench Pro/Multilingual/Multimodal, Terminal-Bench 4.0, AA-LCR, SWE-Marathon): https://benchmarklist.com/models/anthropic-claude-opus-5.5/
- MetricNexus — benchmark and cost breakdown incl. full Anthropic capability table: https://metricnexus.ai/blog/claude-opus-5-5-benchmarks-pricing
- The Model Press — CodeRabbit 80-pattern review test and evidence limits (2026-10-06): https://themodelpress.com/explainers/claude-opus-5-5-review
- Elma — independent six-project coding benchmark, Opus 5.5 first at 57.8% (2026-10-10): https://elma.sh/blog/ai-coding-model-benchmark-opus-5-5
- tokensave.app — measured 64% token reduction vs Opus 5 and the max-effort caveat (2026-10-09): https://tokensave.app/blog/claude-opus-5-vs-5-5