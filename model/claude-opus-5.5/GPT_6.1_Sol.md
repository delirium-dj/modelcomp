# Claude Opus 5.5 — findings by GPT 6.1 Sol

- Source: Anthropic / `claude-opus-5-5`
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5.5
- **Short description:** Anthropic's Opus-generation model for long-running coding and professional work. Production fallback routing means some endpoint benchmark results include earlier models; they are not all isolated-weight results.
- **Provider / access:** Claude Messages API; also Amazon Bedrock, Google Cloud, Microsoft Foundry and Claude Platform on AWS [S1].
- **Release / knowledge:** September 22, 2026; reliable knowledge/training cutoff June 2026 [S1].
- **IDs:** Claude API `claude-opus-5-5`; Bedrock `anthropic.claude-opus-5-5` [S1]. No Zen Free ID verified.
- **Context window:** 1M tokens; 128K synchronous output; up to 300K on Message Batches with extended-output beta [S1]. These are distinct API limits.
- **Modalities:** Text/image input and text output, with document/file use corroborated by Vals; adaptive thinking always on, default effort medium. Tool use is available, but forced tool choice is unsupported [S1,S4]. Native audio/video output not verified.
- **Pricing (as of 2026-10-16):** $4 input / $20 output per million tokens; cache read $0.20; five-minute/one-hour writes $5/$8. Batch 50% discount; Fast mode $8/$40. ZDR access supported [S1,S2,S5].
- **Architecture:** Proprietary; parameter count undisclosed [S3].

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **66.4% ±2.6 points standard error**, vendor xhigh effort, production fallback enabled [S2]. Vals current table: **65.15%**; its dated launch update: **61.62% with fallbacks / 53.54% counting fallback-assisted tasks as failures** [S4]. Different snapshots must not be averaged.
- Terminal-Bench 2.1: Vals launch **87.64%**, high effort, or **79.77%** with fallback-assisted tasks counted as failures [S4].
- GDPval-AA v2.1: **1846 Elo**, reported in vendor launch table [S2].
- AutomationBench: **40.0%**, run by Zapier without fallback, refusals count as failures [S2].
- OSWorld 2.1: **81.8% partial credit**, not binary task success [S2].
- Claw-Eval / ClawProBench / Tau3-Banking / MCP-Atlas / Toolathon: no verified public score found.

Reasoning / knowledge:

- HLE: **67.7% with tools**, vendor max-effort production configuration [S2]. Not a no-tools score.
- Artificial Analysis Intelligence Index **58**, **#1/217**, v4.3.2, explicitly **Max, Default Fallback** [S3].
- Vals Index **66.97% ±0.89**, **#3/48** in the current table, versus historical launch **69.69%, #1/63** [S4]. Index composition/snapshot differences are retained, not interpreted as a measured regression.
- ProofBench v1.1 **100%**; MysteryMechanism **49.55%**; BioMysteryBench **79.26%** [S4].
- GPQA Diamond / AA-LCR / MLCR / CritPt / AA-Omniscience accuracy and hallucination rate: no verified public score found in inspected text.

Coding:

- FrontierCode v1.1 Main **54.4% max**; vendor separately reports **54.6% medium** [S2].
- CursorBench 4.0 **57.8% max**, **52.5% medium**, reported by Anthropic; Cursor independently confirms launch leadership without publishing a numeric result on its documentation page [S2,S5].
- Vibe Code Bench v1.1 **90.29% ±1.53**, fallback-enabled; launch fallback-as-failure result **83.34%** [S4].
- Code Migration **66.65% ±4.33**; SWE-bench Multimodal **70.21% ±2.09**; ProgramBench fully resolved **18.50%** [S4].
- SWE-bench Verified / SWE-Pro / LiveCodeBench / SciCode: no verified public score found.

Long context:

- Verified 1M-token API capacity [S1]; no exact-model MRCR/RULER/full-window retrieval percentage verified in inspected sources.

### Evidence comparison and research trail

Three independent search queries: `"Claude Opus 5.5" official Anthropic`; `"Claude Opus 5.5" Artificial Analysis benchmark`; `"Claude Opus 5.5" review pricing context` (DuckDuckGo). Directly compared official API docs and announcement, AA, Vals, Cursor, and CodingFleet. The linked system card exceeded the fetch tool's 5MB limit and was not treated as read.

The most important conflict is fallback attribution: Vals discloses older-model assistance and large differences when those tasks count as failures. Its SRE launch result falls from 33.59% to 5.34% under that convention [S4]. Accordingly, the scores below describe the accessible production system and are capped for uncertain isolated-model attribution. Terminal-Bench 2.1 and 4.0 are different tests; their percentages are not interchangeable. CodingFleet repeats the vendor's 40% typical-workload cost reduction, while AA measures $5.98/task at max fallback effort [S2,S3,S6]. Both can hold: default-medium workload savings are not guaranteed max-effort savings. The review calls the desktop benchmark OSWorld 2.0, but the current primary announcement says 2.1; primary version label is retained [S2,S6].

### Normalized scores (1–100)

- **Tool use: 94/100.** GDPval 1846, strong terminal results and OSWorld support frontier production agents, capped by fallback attribution and domain-specific weaknesses [S2,S4].
- **Reasoning: 95/100.** AA's current leading index and HLE 67.7% with tools show high capability; absent no-tools results and fallback reliance prevent a ceiling score [S2,S3,S4].
- **Context window: 95/100.** Official 1M capacity meets the top context tier, but no ≥98% full-window retrieval result was verified [S1].
- **Multimodal: 80/100.** Vision and document/file workflows, Chartography 89.0% with tools and multimodal SWE results support practical document vision; no verified native audio/video coverage [S1,S2,S4].
- **Coding: 95/100.** Strong FrontierCode, terminal, Cursor and Vibe evidence across multiple harnesses, capped by fallback-assisted results [S2,S4,S5].
- **Cost efficiency: 55/100.** $4/$20 is premium pricing despite cheap cache reads; measured max-effort cost $5.98/task prevents treating default-workload savings as universal [S1,S3].
- **Overall Score: 92/100.** (94 + 95 + 95 + 80 + 95) / 5 = 91.8 → 92; best fit is difficult professional coding with explicit effort and fallback monitoring. Cost excluded.

### Sources

- [S1] https://platform.claude.com/docs/en/models/opus-5-5/overview — primary specifications and API compatibility.
- [S2] https://www.anthropic.com/claude-opus-5-5 — primary scorecard, effort/fallback footnotes and pricing.
- [S3] https://artificialanalysis.ai/models/claude-opus-5-5 — independent current index and task economics.
- [S4] https://www.vals.ai/models/anthropic_claude-opus-5-5 — independent suite, uncertainty, launch history and fallback sensitivity.
- [S5] https://cursor.com/docs/models/claude-opus-5-5 — integration/provider assessment and pricing corroboration.
- [S6] https://codingfleet.com/blog/claude-opus-5-5-review/ — secondary review; vendor numbers are not independent reruns.

---

## Signature

- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-16
- Method: Independent public-web research using three separate searches and direct cross-source comparison; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new independently signed file next to this one using the same headings.
