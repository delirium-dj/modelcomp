# Muse Wonder 1.0 — findings by GPT 6 Astra

- Source: Meta / `muse-wonder-1.0`
- Date: 2026-10-26 (UTC)
- Methodology: `../../model-comparison.md`; signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Wonder 1.0 (standard API model, not Wonder Full).
- **Description:** Proprietary frontier reasoning model emphasizing persistent agents, computer use and long-horizon software engineering. Wonder Full is a separate offering; requesting maximum reasoning does not select it.
- **Provider / access:** Meta Model API and Muse Code; native ID `muse-wonder-1.0`. Exact wire protocol and a Zen Free route were not independently verified.
- **Release / knowledge:** October 12, 2026; knowledge cutoff not disclosed in the sources reviewed.
- **Context window:** 1M tokens, corroborated by Meta and Artificial Analysis (AA); secondary catalog reports approximately 131K maximum output.
- **Modalities:** Text, image, video and audio input; text output. Reasoning, tool use and computer-use workflows supported. Structured-output contract not separately verified.
- **Pricing:** $4 input / $20 output / $0.20 cached input per million tokens, October 26, 2026. No Contributor discount for Wonder API. Standard API data is not used for training according to the cited pricing review; Muse Code subscription settings differ.
- **Architecture:** Proprietary; parameter count and active-parameter count undisclosed.

### Raw benchmarks found

| Evaluation | Result | Provenance and interpretation |
|---|---:|---|
| AA Intelligence Index | 52 | AA independently evaluated max effort; current page describes v4.3.2. Composite, not percentage accuracy. |
| Terminal-Bench 4.0-AA | 52.0% | AA result republished by Meta, corroborated by AA's launch analysis. Not Terminal-Bench 2.1. |
| DeepSWE 1.1 | 78.8% | Meta attributes pass@1 to Datacurve; 113 tasks across 91 repositories. Secondary reports corroborate publication, not independent reruns. |
| SWE-Marathon | 53.1% | Abundant AI result as published by Meta; competitor products/harnesses differ. |
| ProgramBench | 50.0% | Meta comparison uses mini-swe-agent for all models; rollouts passing at least 95% of tests. |
| AutomationBench-AA | 39.1% strict; 68.1% partial | Meta strict pass@1 versus BenchmarkList's October 18 AA partial-score record. Distinct metrics, not a 29-point improvement. |
| OSWorld V2.1 | 72.6% partial; 34.3% binary | Meta internal evaluation; partial reward substantially exceeds complete-workflow success. |
| JobBench | 70.5% | Meta-run mean reward; not an independently reproduced score. |
| MemoryBench | 85.6% | Meta internal 64K–100K multi-turn-memory evaluation; not 1M retrieval verification. |
| SciCode | 60.3% | BenchmarkList secondary AA-linked record, October 18; lower confidence than directly inspected AA headline. |

GPQA, HLE, CritPt, Tau2/Tau3, Claw-Eval, SWE-bench Verified and 512K+ retrieval: no verified public score found in the inspected evidence. These gaps are not zero scores.

### Cross-source reconciliation

Meta's official model page and independent AA agree on the standard model's index of 52 and $4/$20 pricing. Wonder Full's 56 index and 79.0% DeepSWE must not be attached to this API ID. VentureBeat explicitly distinguishes Meta-run tests from third-party results and cautions against common-harness assumptions. BenchmarkList's “self-reported” label describes its ingestion provenance; Meta attributes the underlying DeepSWE measurement to Datacurve, so neither label alone establishes a fresh independent replication.

AA's current model page gives $8.63 per index task and 130M evaluation output tokens; an October 13 secondary review quotes $4.52 per task. Different captures/methodology versions cannot establish a price rise or efficiency regression. Use verified token prices and date-specific task-cost measurements separately. DeepSWE strength does not imply universal coding leadership: ProgramBench and terminal tasks are weaker. MemoryBench does not establish reliable retrieval across the advertised full window.

### Normalized scores (1–100)

- **Tool use: 88/100.** Strong workflow/computer-use evidence, capped by 34.3% binary OSWorld completion and mixed evaluation provenance.
- **Reasoning: 88/100.** Independent AA index 52 supports high capability; incomplete individual reasoning evidence limits precision.
- **Context window: 95/100.** Official 1M tier; no verified 98% retrieval at 512K+ to justify 100.
- **Multimodal: 95/100.** Text/image/video/audio inputs verified; no native non-text output demonstrated.
- **Coding: 93/100.** DeepSWE 78.8% and SciCode 60.3% support frontier coding, tempered by ProgramBench 50% and harness variation.
- **Cost efficiency: 52/100.** $4/$20 pricing and high measured token consumption limit value despite a large cache discount.
- **Overall Score: 92/100.** Half-up mean of (88 + 88 + 95 + 95 + 93) / 5 = 91.8; best suited to long-horizon multimodal engineering agents.

## Sources and research audit

Three independent searches: `Meta Muse Wonder 1.0 official model benchmark model card`; `Muse Wonder 1.0 Artificial Analysis independent benchmark 52 October 2026`; `Muse Wonder DeepSWE 78.8 SWE Marathon 53.1 benchmark review context pricing`.

1. https://dev.meta.ai/models/muse-wonder — official specifications and scorecard.
2. https://research.meta.ai/static/muse-wonder-model-card — official methods retrieved through search; direct fetch returned unsupported PDF content, not a successful full-document inspection.
3. https://artificialanalysis.ai/articles/muse-wonder — independent evaluation and version context.
4. https://artificialanalysis.ai/models/muse-wonder — current independent performance/cost record.
5. https://benchmarklist.com/models/meta-muse-wonder/ — metric definitions and secondary benchmark records.
6. https://venturebeat.com/technology/metas-new-muse-wonder-and-muse-wonder-full-models-achieve-frontier-performance-but-only-the-weaker-one-is-available-via-api — independent reporting, not a new benchmark run.
7. https://awaited.dev/releases/muse-wonder-api-vs-full/ — API-versus-Full and pricing analysis.
8. https://xenospectrum.com/en/meta-muse-wonder-claude-gpt-comparison/ — dated cost-per-task comparison.

## Signature

- Provided by: **GPT 6 Astra (openai/gpt-6-astra-ultrafast)** — 2026-10-26
- Method: Fresh public-web research; normalized scores are interpretations, not official vendor scores. No peer findings used.
