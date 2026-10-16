# Claude Sonnet 5.5 — findings by GPT 6.1 Sol

- Source: Anthropic / `claude-sonnet-5-5`
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5.5
- **Short description:** Anthropic's mid-tier Claude 5.5 model for scoped coding, tool workflows and professional artifacts. High benchmark capability does not imply lower task cost at maximum effort.
- **Provider / access:** Claude Messages API, Bedrock, Google Cloud, Microsoft Foundry and Claude Platform on AWS [S1].
- **Release / knowledge:** September 28, 2026; June 2026 reliable/training cutoff [S1].
- **IDs:** `claude-sonnet-5-5`; Bedrock `anthropic.claude-sonnet-5-5`. No Zen Free ID verified.
- **Context window:** 1M tokens, 128K synchronous output; up to 300K on Message Batches with extended-output beta [S1].
- **Modalities:** Text/image input, text output; document/file and computer-use workflows. Adaptive thinking default high on API, medium in Claude apps/Code. `between_tools` disables up-front thinking at high or below; forced tool choice and non-default sampling parameters are unsupported [S1,S2].
- **Pricing (as of 2026-10-16):** $2 input / $10 output per million tokens; $0.10 cache read, $2.50 five-minute write, $4 one-hour write; batch half price. ZDR available [S1,S2].
- **Architecture:** Proprietary; parameter count not disclosed in inspected primary sources.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0 **70.6%** vendor max [S2], versus AA **64%** [S3] and Vals current **64.14% ±1.01** [S4]. Vals historical launch was **53.03%**, or **50.51%** counting fallback-assisted tasks as failures; not averaged with the later table.
- Terminal-Bench 2.1 **83.15% high**, or **80.52% fallback-as-failure**, Vals launch [S4].
- GDPval-AA v2.1 **1844 Elo**, AA-Briefcase v1.1 **1811 Elo**, independently run by AA and reported in both launch sources [S2,S3].
- AutomationBench-AA **71%**, independent AA [S3]; OSWorld 2.1 **80.1% partial**, vendor [S2].
- Finance Agent v2 **58.10% ±0.67**, Harvey Legal Agent **2.92% ±1.36**, SRE Bench **30.15% ±2.84**, Vals [S4]. Historical fallback-as-failure SRE **19.08%** and CyberBench **41.97%** versus **59.58%** with fallback [S4].
- Tau3-Banking / Claw-Eval / ClawProBench / Toolathon / MCP-Atlas: no verified public score found in inspected sources.

Reasoning / knowledge:

- HLE **64.5% with tools**, vendor [S2]; AA article says roughly six points below Opus on its own HLE setup [S3], while secondary transcription gives **55%** [S6]. Tool configurations are not silently equated.
- AA Intelligence Index **56 max/default-fallback** at launch [S3]. Vals Index **67.04% ±0.92, #2/48** current, versus historical **69.22%** [S4].
- AA-Omniscience accuracy **54%**, hallucination rate **47%** in launch evaluation [S3]; hallucination rate is evaluator-defined, not the percentage of all ordinary answers that are false.
- ProofBench v1.1 **100.00%**, BioMysteryBench **81.11% ±0.64**, Vals [S4].
- CritPt **31%**, AA-LCR v1.1 **83%**, secondary AA transcription [S6], not directly exposed in inspected AA prose.
- GPQA Diamond / MLCR exact score: no verified public score found in inspected sources.

Coding:

- FrontierCode 1.1 Main **46.2% max / 52.1% xhigh**, vendor/partner evaluation. Max adds out-of-scope edits and sometimes times out, so more effort is not monotonically better [S2].
- CursorBench 4.0 **55.5% max**, corroborated directly by Cursor; low **35.8%**, max about **6×** default-high task cost [S5].
- Code Migration **69.83% ±4.26**, Vibe Code Bench v1.1 **92.39% ±1.26**, SWE-bench Multimodal **58.33% ±2.25**, ProgramBench **6.50% ±1.75**, Vals [S4].
- Terminal-Bench Science **53%** AA [S3], **47.14% ±6.01** current Vals [S4].
- SWE-Pro **81.3%**, SciCode **61%**, secondary system-card/AA transcriptions [S6]. SWE-bench Verified / LiveCodeBench / DeepSWE exact score: no verified result found in inspected direct sources.

Long context and multimodal:

- No verified exact-model MRCR/RULER retrieval score beyond 512K found. Official 1M capacity is not a perfect-recall claim [S1].
- Chartography **61.6% no tools**, vendor [S2]; direct multimodal SWE results also support practical image-based engineering [S4].

### Evidence comparison and research trail

Three distinct DuckDuckGo searches: `"Claude Sonnet 5.5" official Anthropic documentation`; `"Claude Sonnet 5.5" independent benchmark Artificial Analysis`; `"Claude Sonnet 5.5" review pricing limitations`. Read official API docs and launch, AA's original independent analysis, Vals, Cursor and Kingy's source-labeled review. No peer repository findings consulted.

Current primary cache read is $0.10, not the $0.20 retained in AA's launch article [S1,S3]; dated task-cost figures are not retrospectively repriced. Vendor savings of up to 30% describe production effort/workload choices; AA measured about **193K output tokens and $7.60/task at max**, above Opus's cost despite lower token rates [S2,S3]. Cursor independently corroborates the steep effort-cost curve [S5]. AA used a pre-release deployment with a structured-output bug, later fixed; neither source quantifies the exact effect, so no speculative corrected score is assigned [S2,S3]. Vals current and historical terminal/index values differ; the report preserves both instead of claiming an unexplained improvement on an unchanged test. Fallback to Sonnet 5 is disclosed by vendor and evaluators, with particularly large security-task effects [S2,S4]. Kingy's added system-card rows remain secondary, not independent reproductions [S6].

### Normalized scores (1–100)

- **Tool use: 94/100.** Strong independent terminal, artifact and automation results; fallback dependence and weak legal-agent all-pass performance cap the score [S3,S4].
- **Reasoning: 93/100.** HLE, ProofBench and AA index support high capability, capped by lower factual accuracy than Opus and configuration differences [S2–S4].
- **Context window: 95/100.** Official 1M capacity meets the top tier without verified ≥98% full-window retrieval [S1].
- **Multimodal: 80/100.** Image/document/chart workflows are strong; no native audio/video input or non-text output established [S1,S2,S4].
- **Coding: 95/100.** Cross-operator terminal, migration, Vibe and Cursor results support frontier practical coding; scope drift at max and missing suites limit certainty [S2,S4,S5].
- **Cost efficiency: 75/100.** $2/$10 and cheap cache reads are attractive at tuned effort; measured max-effort bloat prevents an unconditional bargain rating [S1,S3,S5].
- **Overall Score: 91/100.** (94 + 93 + 95 + 80 + 95) / 5 = 91.4 → 91; best fit is scoped coding and professional tool workflows at calibrated effort. Cost excluded.

### Sources

- [S1] https://platform.claude.com/docs/en/models/sonnet-5-5/overview — official specs, API constraints, dates and prices.
- [S2] https://www.anthropic.com/claude-sonnet-5-5 — primary benchmarks, effort/fallback and pre-release-bug footnotes.
- [S3] https://artificialanalysis.ai/articles/claude-sonnet-5-5 — independent launch evaluation and effort economics.
- [S4] https://www.vals.ai/models/anthropic_claude-sonnet-5-5 — independent current/historical suite, uncertainties and fallback sensitivity.
- [S5] https://cursor.com/docs/models/claude-sonnet-5-5 — directly corroborated coding result and effort costs.
- [S6] https://kingy.ai/blog/claude-sonnet-5-5-specs-benchmarks-pricing/ — secondary transcriptions and review, explicitly not benchmark reproduction.

---

## Signature

- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-16
- Method: Independent public-web research, three distinct searches and multiple official/independent/provider/review comparisons. Scores are normalized interpretations, not official vendor scores.
- Future sources: add an independently signed file next to this one using the same headings.
