# Ling 3.1 Flash — findings by Claude Opus 5

- Source: InclusionAI / Ant Group (`ling-3.1-flash`), served free via OpenCode Zen as `ling-3.1-flash-free`
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.1 Flash
- **Short description:** InclusionAI's newest Ling release and, by a wide margin, the strongest model in its family — BenchLM ranks it **#46 of 889 at 62.06**, against 47.43 for Ling 3.0 Flash VL and 45.47 for Ling 3.0 Flash. Its profile is unusual: an **Artificial Analysis Intelligence Index of 41.1** and **GDPval-AA normalizing to 56.1%** are frontier-adjacent figures from a model available free. **A licensing change worth flagging:** BenchLM classifies Ling 3.1 Flash as **Proprietary**, whereas Ling 3.0 Flash and 3.0 Flash VL are Open Weight under MIT — so this generation appears to have closed the weights.
- **Provider / access:** **OpenCode Zen** as `ling-3.1-flash-free` on `https://opencode.ai/zen/v1/chat/completions` ([Zen docs](https://opencode.ai/docs/zen/)); **Vercel AI Gateway** ([listing](https://vercel.com/ai-gateway/models/ling-3.1-flash), which BenchLM treats as the official model card). This repo records `opencode/ling-3.1-flash`.
- **Release / knowledge:** **2026-09-30** — the date of Ant Ling's launch materials. Knowledge cutoff: no verified public date found.
- **IDs:** `ling-3.1-flash` / `ling-3.1-flash-free` (Zen). **A genuine free ID exists on Zen**, which is the main reason to care about this model.
- **Context window:** **262,144 tokens (262K)** ([BenchLM](https://benchlm.ai/models/ling-3-1-flash)). Max output: no verified public figure found.
- **Modalities:** **Text in → text out** on the available evidence. No modality statement surfaced, no vision benchmark exists, and InclusionAI ships vision separately as **Ling 3.0 Flash VL** — which strongly implies the Flash line is text-only. Flagged as an inference rather than a vendor statement. Reasoning: **yes** (BenchLM classifies it a reasoning model). Tool calls: yes, and heavily evaluated.
- **Pricing (as of 2026-10-08):** **Free** on OpenCode Zen — $0 input, $0 output, $0 cached read. Two disclosed caveats from Zen's own documentation: the tier is **limited-time**, and **"during its free period, collected data may be used to improve the model"** — i.e. it sits outside Zen's zero-retention group. No paid rate card surfaced.
- **Architecture:** **Undisclosed.** No parameter count, activation scheme or training description surfaced; BenchLM's Proprietary classification and the absence of a Hugging Face checkpoint are consistent with closed weights for this generation, in contrast to the MIT-licensed 124B/5.5B-active Ling 3.0 line.

### Raw benchmarks found

> **Provenance warning, and it is a significant one:** every vendor figure below is sourced by BenchLM to **"Ant Ling: Ling 3.1 Flash launch screenshots, September 30, 2026"** on X (@AntLingAGI) — i.e. transcribed from social-media launch images, not from a model card, technical report or published table. That is the least auditable vendor source class I have encountered in this research pass, and I weight those figures accordingly. The Artificial Analysis rows are independent and carry the scoring.

Agent / tool use:

- **CyberGym: 87.9%** (Ant Ling launch screenshots) — the highest CyberGym figure I have recorded; for scale, GLM-5.1 measures 68.7% and Hy4 preview 78.4%
- **DRACO: 85.5%** (launch screenshots)
- **skillsBench: 68.7%** (launch screenshots)
- Finance Agent v2: **57.9%**; AutomationBench: **52.5%** (launch screenshots)
- **GDPval-AA: 56.1%** normalized ([Artificial Analysis](https://artificialanalysis.ai/models/ling-3-1-flash)) — **independent, and one of the highest normalized GDPval figures in this entire pass**; for comparison, Claude Fable 5 measures 55.6%
- τ²/τ³-bench, Terminal-Bench 2.x, OSWorld, MCP-Atlas, Claw-Eval, AA Agentic Index: no verified public score found

Reasoning / knowledge:

- **Artificial Analysis Intelligence Index: 41.1** (Artificial Analysis) — independent, and the highest AA index of any non-frontier model I have scored; Claude Haiku 5.5 measures 43.4 and GLM-5.2 33.7
- **AA-LCR: 83.0%** (Artificial Analysis) — excellent long-context reasoning
- **AA-HLE: 39.4%** (Artificial Analysis) — strong
- **CritPt: 18.0%** (Artificial Analysis) — high by this dataset's standards, where most models score 0–5%
- HealthBench Professional: **65.3%** (launch screenshots)
- **AA-Omniscience: Index +2.2, Accuracy 29.1%, Hallucination Rate 37.9%** — a positive index and sub-38% hallucination rate
- **GPQA Diamond, MMLU-Pro, AIME, AA-IFBench: no verified public score found** — a conspicuous gap, since GPQA is the most widely reported reasoning benchmark in this field

Coding:

- SWE-Atlas Codebase QnA: **55.9%** (launch screenshots)
- AA-SciCode: **54.1%** (Artificial Analysis)
- **Terminal-Bench 4.0: 40.4%** (launch screenshots) — worth noting because almost every model in this dataset collapses on Terminal-Bench 4.0 (GLM-5.2 scored 4.6%, Nemotron 3 Ultra and Muse Glimmer both 0.5%); if the 40.4% figure is sound it is a standout, but it rests on a launch screenshot
- **SWE-bench Verified / Pro, LiveCodeBench, NL2Repo, CursorBench: no verified public score found**

Multimodal:

- **Nothing.** No vision, audio or video benchmark, and no modality claim.

Long context:

- No MRCR, RULER or needle-retrieval number at any depth. **AA-LCR 83.0%** is the only quantified long-context signal — and at 83.0% against a 262K window it is one of the better ratios in this dataset.

### Normalized scores (1–100)

- **Tool use: 80/100.** Driven primarily by the one independently-measured figure, which is excellent: **GDPval-AA normalizing to 56.1%** puts it ahead of Claude Fable 5 on real professional work, which is a genuinely strong result for a free model. The vendor figures reinforce it — CyberGym 87.9%, DRACO 85.5%, skillsBench 68.7% — but they come from launch screenshots and I do not weight them as heavily. Capped below the mid-80s by that provenance problem and by the complete absence of τ²-bench, Terminal-Bench 2.x, OSWorld or MCP measurement.
- **Reasoning: 80/100.** The strongest independently-verified reasoning profile of any free model in this dataset: **AA Intelligence Index 41.1, AA-LCR 83.0%, AA-HLE 39.4%, and CritPt 18.0%** — all from Artificial Analysis, and CritPt at 18% is in Claude-Opus-class territory on a benchmark where most models here score under 5%. The **37.9% hallucination rate with a positive Omniscience Index** adds real reliability. Capped by 29.1% Omniscience accuracy and by the absence of **any GPQA Diamond or MMLU-Pro figure**, which leaves the most-compared reasoning benchmarks unmeasured.
- **Context window: 78/100.** 262,144 tokens is a solid upper-mid window, and **AA-LCR 83.0%** is among the best usable-quality signals in this dataset relative to window size — better than several 1M-context models. Held below 80 because no retrieval curve exists and no max-output figure is published.
- **Multimodal: 15/100.** **Text-only** on the available evidence — no modality statement, no vision benchmark, and InclusionAI ships vision as the separate Ling 3.0 Flash VL. Template floor, flagged as an inference. Costs roughly 13 points of Overall.
- **Coding: 66/100.** **Terminal-Bench 4.0 at 40.4%** would be a remarkable result if confirmed — most models in this dataset score under 5% on that harness — but it rests on a launch screenshot and I weight it cautiously. AA-SciCode 54.1% is independently measured and respectable, SWE-Atlas Codebase QnA 55.9% is vendor-reported. Capped firmly by the **complete absence of SWE-bench Verified, SWE-bench Pro or LiveCodeBench** — there is no repository-repair measurement of any kind.
- **Cost efficiency: 90/100.** **$0 on Zen** for a model posting an **AA Intelligence Index of 41.1, AA-LCR 83.0% and GDPval-AA 56.1%** — all independently measured — is outstanding value; on the independent figures alone this is the strongest free model in this dataset. Docked 10 points for three disclosed costs rather than price: the tier is **limited-time**, **collected data may be used to improve the model** (it is excluded from Zen's zero-retention group), and — unlike the Ling 3.0 line — **the weights appear to be closed**, so there is no self-host fallback when the promotion ends.
- **Overall Score: 63.8/100.** Mean of the five non-cost dims (80 + 80 + 78 + 15 + 66) / 5 = 63.8. Best fit: **free, high-quality text reasoning and professional knowledge work** — long-document analysis, security and finance agent tasks, health-professional Q&A — on non-confidential data. Its independently-measured reasoning and GDPval figures are frontier-adjacent and genuinely impressive for a zero-cost route. Two things to design around: its coding capability is essentially unmeasured on standard benchmarks, and its most eye-catching numbers (CyberGym 87.9%, Terminal-Bench 4.0 40.4%) come from launch screenshots rather than auditable publications. The Overall is suppressed ~13 points by the text-only floor.

---

## Signature

- Provided by: **Claude Opus 5 (anthropic/claude-opus-5)** — 2026-10-08
- Method: fresh public internet research only — BenchLM's aggregated Ling 3.1 Flash page (262K context, **Proprietary** source-type classification in contrast to the MIT Open Weight Ling 3.0 line, 17 of 625 benchmarks, overall 62.06 and rank #46, and the intra-family comparison), the Artificial Analysis leaderboards for every independently-measured figure (Intelligence Index, AA-LCR, AA-HLE, CritPt, SciCode, GDPval-AA, Omniscience accuracy and hallucination rate), the Vercel AI Gateway listing which BenchLM treats as the official model card, and the OpenCode Zen documentation for the free `ling-3.1-flash-free` ID, its $0 rates, its limited-time status and its placement in the "collected data may be used to improve the model" group rather than the zero-retention group. **A provenance limitation is reported prominently and acted on:** all vendor figures (CyberGym, DRACO, skillsBench, Finance Agent v2, AutomationBench, HealthBench Professional, SWE-Atlas Codebase QnA, Terminal-Bench 4.0) are sourced by BenchLM to Ant Ling's launch *screenshots* on X dated 2026-09-30 — not to a model card, technical report or published table — and are weighted below the Artificial Analysis rows accordingly, with the Terminal-Bench 4.0 outlier flagged explicitly. The text-only modality finding rests on the absence of any modality statement or vision benchmark plus InclusionAI shipping vision as a separate VL model, and is labelled an inference. No data was imported from `ling-3.0-flash-vl` or the `models_finance/` Ling Fin entry. No peer `model/` findings files were read. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
