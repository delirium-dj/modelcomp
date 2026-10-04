# Muse Spark 1.2 — findings by GPT 5.6 Sol

- Source: Meta/Muse Spark 1.2
- Date: 2026-10-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.2
- **Short description:** Meta Superintelligence Labs' proprietary multimodal reasoning model for long-horizon coding and whole-repository agents. Contributor, Free, Standard, and Max are pricing/effort tiers of this same model, not separate models.
- **Provider / access:** Meta Model API as `meta/muse-spark-1.2`, Muse Code, OpenRouter, and an OpenCode Zen sponsored/free route.
- **Release / knowledge:** Released 2026-08-05; knowledge cutoff not disclosed.
- **IDs:** `meta/muse-spark-1.2`; OpenCode Zen availability has included a sponsored Contributor route.
- **Context window:** 1,048,576 input tokens and approximately 131K maximum output.
- **Modalities:** Multimodal input and text output; reasoning effort, tool calling, caching, and agentic coding. Exact modality list is not consistently disclosed in current public pages.
- **Pricing (as of 2026-10-04):** Standard $1.25/1M input, $0.15 cached input, and $4.25 output. Contributor/free access is a tier of this model and does not create a distinct model identity.
- **Architecture:** Proprietary; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **80.15%** (Artificial Analysis); Vals AI reports 69.66% and Meta reports 82.9% in its own harness.
- Toolathlon-Verified: **75.9% Pass@1**, 87.0% Pass@3, 63.0% Pass^3 (independent leaderboard).
- GDPval-AA v2: **1631 Elo** (Artificial Analysis).
- Tau3-Banking: **27%** (Artificial Analysis).

Reasoning / knowledge:

- HLE: **45.46%** (Artificial Analysis live result).
- GPQA Diamond: **90.4%** (Artificial Analysis).
- Artificial Analysis Intelligence Index: **54** at xhigh.
- LiveBench Reasoning / Mathematics: **90.0 / 91.2**.

Coding:

- SWE-bench Verified: **86.6% ±1.52** (Vals AI, mini-SWE-agent).
- DeepSWE v1.1: **55.0% ±2** (independent Datacurve board; Meta reports 59.3%).
- LiveBench Coding / Agentic Coding: **77.5 / 57.6**.

Long context:

- No verified public MRCR/RULER number found; the supported context is 1M tokens.

Multimodal:

- BenchLeader's aggregate multimodal category score is **66**; no directly traceable MMMU/CharXiv score was found in the consulted sources.

Sources: [Meta Model API model page](https://dev.meta.ai/models/muse-spark-1-2), [Artificial Analysis launch analysis](https://artificialanalysis.ai/articles/muse-spark-1-2), [The Model Gap evidence ledger](https://themodelgap.com/models/muse-spark-1-2), and [BenchLeader](https://www.benchleader.com/models/muse-spark-1-2).

### Normalized scores (1–100)

- **Tool use: 88/100.** Strong Terminal-Bench, Toolathlon, and GDPval performance support capable agency, while Tau3 and harness variance limit confidence.
- **Reasoning: 90/100.** GPQA 90.4%, HLE 45.46%, and LiveBench reasoning/math around 90 show strong frontier-adjacent reasoning.
- **Context window: 93/100.** The 1M-token window and long-horizon positioning are excellent, but no public retrieval measurement was found.
- **Multimodal: 82/100.** Multimodal support and aggregate performance are useful, but exact modality documentation and direct benchmark evidence are incomplete.
- **Coding: 87/100.** SWE-bench Verified is excellent, while DeepSWE and agentic-coding results reveal a meaningful gap from the leaders.
- **Cost efficiency: 94/100.** Standard pricing is low for this capability, cached input is cheap, and sponsored Contributor access can be free.
- **Overall Score: 88/100.** Half-up mean of the five quality dimensions; best for economical repository-scale coding and tool-using workflows.

---

## Signature

- Provided by: **GPT 5.6 Sol (openai/gpt-5.6-sol)** — 2026-10-04
- Method: Fresh public internet research using Meta documentation and independent benchmark sources; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
