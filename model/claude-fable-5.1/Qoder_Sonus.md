# Claude Fable 5.1 — findings by Qoder Sonus

- Source: Anthropic (`claude-fable-5-1`), evaluated as the publicly available Fable deployment, not restricted Mythos 5.1.
- Date: 2026-10-27 (UTC)
- Overview and scoring methodology: [model-comparison.md](../../model-comparison.md)
- Cross-model signed log: [model-findings.md](../../model-findings.md)

## Model card

- **Name:** Claude Fable 5.1.
- **Short description:** Proprietary reasoning model for demanding research, professional artifacts, and long-running coding. It shares underlying weights with Mythos 5.1, but access and safeguards differ; their deployed benchmark results are not interchangeable.
- **Provider / access:** Claude Messages API, Amazon Bedrock, Google Cloud, Microsoft Foundry, and Claude Platform on AWS. Claude API ID `claude-fable-5-1`; Bedrock ID `anthropic.claude-fable-5-1`. The official overview identifies dateless IDs as pinned snapshots.
- **Release / knowledge:** September 1, 2026; reliable and training-data cutoffs June 2026. Active, with first-party retirement not before September 1, 2027.
- **IDs / evaluated tier:** Paid Claude API `claude-fable-5-1`; no exact OpenCode Zen Free ID verified in this research. No free-tier cost credit.
- **Context window:** Official default and maximum 1M tokens, with 128K synchronous output and standard token rates across the window. The general 300K batch-output beta lists other models, not Fable 5.1. The newer tokenizer yields roughly 30% more tokens than pre-Opus-4.7 models for the same text.
- **Modalities:** Text and image input, visual PDF processing, text output; no verified native audio/video input or generated audio/images. PDF guidance permits up to 600 pages at 1M context, subject to payload/context limits. Tool use and structured outputs supported; adaptive thinking always on. API default effort high; Claude.ai/Cowork default medium. Five evaluated effort settings: low, medium, high, xhigh, max.
- **Integration constraints:** Forced `tool_choice` any/named-tool requests return 400; automatic or no-tool choices remain supported. Thinking blocks are model-bound; editing prior content can invalidate them, subject to documented account/enforcement rules. Mid-conversation effort and progress updates are separate beta features.
- **Pricing (2026-10-27):** $10 input / $50 output / $0.25 cache read per million tokens; 5-minute cache writes $12.50 and 1-hour writes $20. Batch input/output 50% off. Anthropic's 25% typical/45% highly agentic savings estimate uses default-effort workload mixes, not guaranteed savings on every task.
- **Privacy / safeguards:** Production safeguards can route flagged cyber work to Opus 4.8 and biology work to Opus 5. Enterprise Frontier Safeguards were announced for phased fall rollout; eligible interim zero-data-retention access is not universal availability.
- **Architecture:** Proprietary; parameter count, active parameters, and detailed architecture undisclosed. No open-weights license.

### Raw benchmarks found

Agent / tool use:

- **Terminal-Bench 2.1: 91.4%**, Artificial Analysis's September 1 launch evaluation at max with default fallback. Do not compare directly with TB4.0.
- **Terminal-Bench 4.0: 55.8%**, Anthropic launch table with production safeguards; **60.9% belongs to Mythos 5.1**, not Fable.
- **Terminal-Bench-Science 0.1: 52.6%**, Anthropic; reported standard errors across models approximately ±3.5–4.5 points.
- **GDPval-AA v2: 1,853 Elo; AA-Briefcase: 1,694 Elo**, primary AA launch report using its Stirrup reference agent. The Opus 5 comparison, 1,824/1,685, is near-tied with overlapping GDPval intervals, not a decisive professional-work win.
- **OSWorld 2.0: 77.9% partial / 41.7% strict**, Anthropic's August 2026 task release. Earlier OSWorld 2.0 releases differ even when the benchmark name matches.
- **AutomationBench: 31.4%**, Anthropic launch configuration; not AA's differently run AutomationBench-AA.
- **Vals RSI Index: 35.03%, launch rank 1**, September 4 primary Vals excerpt, five autonomous LLM R&D tasks; total $1,481 versus Opus 5's $1,886 and 32.10%. This is not the Vals general index.
- **Tau3-Banking:** AA launch reports a nine-point gain over Fable 5, without the absolute value in its article. BenchLM attributes **47.2%** to a later AA leaderboard; retained as secondary-only, not a verified same-snapshot launch score.
- **Claw-Eval / ClawProBench / MCP-Atlas / SWE Atlas Codebase QnA:** no verified exact-model public result found.

Reasoning / knowledge:

- **HLE: 60.9% without tools / 65.0% with tools**, Anthropic launch; AA independently reports **59.1%** in its launch evaluation. Harness and tool differences remain explicit.
- **ARC-AGI-1 / ARC-AGI-2 semi-private: 97.5% / 90.0% at max**, ARC Prize verified, September 1; respective costs **$1.40 / $4.49 per task**. High effort is **96.0% / 88.8%**, low **90.0% / 78.3%**. No ARC-AGI-3 result on the inspected page.
- **Artificial Analysis Intelligence Index:** launch **66 max / 65 xhigh**, versus current **53, rank 6/221**, on **v4.3.2**. Current mix includes TB4.0, GDPval-AA v2.1, and AA-LCR v1.1; these snapshots are not a fixed-test regression measurement.
- **AA Omniscience:** launch attempt rate **93.4%**, accuracy **67.2%**, hallucination rate **72.6% under AA's definition**. Fable 5's lower 65.4% accuracy also came with lower 63.6% hallucination; increased answering is not automatically better calibration.
- **GPQA Diamond: 93.43%**, official Vals archived leaderboard search-index excerpt, corroborated at rounded precision by aggregators. The fetched methodology confirms the 198-question diamond subset but did not expose the model row/effort; limited-verification supporting evidence only.
- **LCR / MLCR / CritPt:** BenchLM attributes 85.3% / 15.6% / 29.7% to AA; not independently extracted from the primary charts here and not treated as primary scoring anchors.

Coding:

- **SciCode: 62.0%**, AA primary launch evaluation; a later BenchLM transcription says 63.1%, kept separate by provenance/snapshot.
- **CursorBench 3.2.0: 73.4%**, Anthropic's partner-reported max-effort result; a coding-harness measurement, not generic pass probability.
- **Snorkel Terminal-Bench+: pass@1 61.5%, pass@5 74.1%, mean reward 62.7%**, independent September 1 study. Small, uneven categories: debugging **87% across four tasks**, games **88% across four**, build/dependencies **18%**. Proprietary Terminal-Bench+ is not TB2.1 or TB4.0.
- **Matched Snorkel comparison:** both models solved 18 tasks, Opus 5 alone five, Fable 5.1 alone two, neither two; Opus leads pass@1 by **6.2 points**. Fable's median successful run uses **58% fewer output tokens** and **36% less time**. Success-conditioned efficiency is not higher completion reliability; fragile terminal writes and asserted-but-unperformed verification caused failures.
- **Endor Agent Security League, Claude Code, September 4:** **87.2% functional / 37.4% secure correctness**. Best rows in the inspected 33-combination table still leave substantial security failure. Benchmark uses 200 Python tasks from 108 projects across 77 CWE classes; this measures agent plus model, not isolated weights.
- **SWE-bench Verified / SWE-Pro:** no directly inspected primary exact-model result. Emergent warns that widely repeated 95% Verified/80% Pro are Fable 5 launch figures. BenchLM separately attributes 81.2% Pro, 67.4% DeepSWE, and 89.1% multilingual to the 5.1 system card; not promoted to verified primary measurements here.
- **LiveCodeBench / Vibe Code Bench:** no directly verified exact-model score from the retrieved primary content; aggregator LiveCodeBench 90.5% remains secondary.

Long context / multimodal:

- Official 1M context and visual PDFs establish capacity and input support, not retention accuracy. No exact-model primary MRCR/RULER result at 512K–1M was verified.
- BenchLM's **65% GraphWalks BFS at 256K–1M** cites a Google competitor chart; this secondary result is not near-perfect retrieval evidence.
- Slide generation, chart reasoning, and GUI operation are useful visual/document capabilities. A generated music game or presentation does not establish native audio/image generation. No primary MMMU/video/audio score was extracted.

### Evidence reconciliation and limitations

- **Production deployment, not unrestricted weights:** AA ran fallback enabled, with approximately **4% of output tokens** attributed to fallback. Anthropic specifies zero scoring for Fable 5.1/Fable 5 safeguard interventions on OSWorld 2.0 and Fable 5 on AutomationBench; other interventions use Opus fallback. Emergent's blanket zero-scoring characterization is incorrect.
- **Provenance matters:** GDPval 1,853 is directly reported by AA; a secondary site's label that every launch-table row is vendor-run does not override that primary evidence. BenchLM/Emergent repeating tables does not create additional independent trials.
- **Efficiency depends on workload and effort:** AA launch max cost **$3.76/task**, versus Fable 5's $3.14, driven by approximately **1.7× output tokens** despite cheaper cache; xhigh cost $2.72. Current v4.3.2 page reports **$7.63/task**, **190M output tokens**, and **66.4 output tokens/s**. Neither the changed current mix nor Snorkel's successful-run subset contradicts default-effort cache savings on another workload.
- **Evidence access:** Official docs, launch text, AA, ARC, Snorkel, and Endor were inspected directly. Vals model extraction exposed RSI news rather than the full chart. The system-card PDF was linked but not read; its secondary transcriptions remain labeled. No peer findings or queue scores were used to derive scores.

### Normalized scores (1–100)

- **Tool use: 97/100.** AA TB2.1 91.4%, GDPval 1,853, and improved scientific/automation results establish frontier agent capability; strict GUI completion, fallback, missing Claw-Eval, and migration constraints cap confidence.
- **Reasoning: 95/100.** Independently verified ARC2 90%, AA HLE 59.1%, and current index leadership support a high frontier score, tempered by Omniscience calibration and missing verified full-window retrieval.
- **Context window: 95/100.** Official 1M context qualifies for the top capacity tier, but no verified ≥98% retrieval at 512K+ justifies 100.
- **Multimodal: 85/100.** Image and visual-PDF input plus GUI/document performance support the document-capable tier; no native audio/video or non-text output is verified.
- **Coding: 94/100.** AA SciCode/TB2.1 and Endor's strong functional row support frontier coding, capped by security failures and Snorkel's build/dependency and final-verification weaknesses.
- **Cost efficiency: 34/100.** $10/$50 is premium pricing; $0.25 cache reads and selective successful-run savings help, but max-effort task cost and verbosity prevent broad value leadership.
- **Overall Score: 93/100.** Half-up mean of five quality dimensions: (97 + 95 + 95 + 85 + 94) / 5 = 93.2 → 93; cost excluded. Best for difficult, long-horizon work where measured quality warrants premium spend and verification remains external.

## Sources and search audit

1. [Anthropic launch, safeguards, benchmark footnotes, and pricing](https://www.anthropic.com/claude-fable-and-mythos-5-1).
2. [Official model overview](https://platform.claude.com/docs/en/models/fable-5-1/overview), [changes](https://platform.claude.com/docs/en/models/fable-5-1/whats-new-fable-5-1), [general model IDs](https://platform.claude.com/docs/en/models/overview), and [PDF support](https://platform.claude.com/docs/en/build-with-claude/pdf-support).
3. [AA September 1 launch evaluation](https://artificialanalysis.ai/articles/claude-fable-5-1) and [current max/default-fallback profile](https://artificialanalysis.ai/models/claude-fable-5-1).
4. [ARC Prize verified effort sweep](https://arcprize.org/results/anthropic-claude-fable-5-1).
5. [Snorkel's independent matched coding analysis](https://snorkel.ai/blog/fable-5-1-vs-opus-5-coding-benchmark/).
6. [Endor Agent Security League](https://www.endorlabs.com/research/ai-code-security-benchmark).
7. [Vals model/RSI excerpt](https://www.vals.ai/models/anthropic_claude-fable-5-1) and [GPQA methodology/indexed row](https://www.vals.ai/benchmarks/gpqa).
8. [Emergent secondary review](https://emergent.sh/learn/claude-fable-5-1-benchmarks) and [BenchLM secondary aggregation](https://benchlm.ai/models/claude-fable-5-1).

Eight completed independent search queries covered official card/pricing, independent evaluations, AA launch, official model overview, Snorkel failures, ARC verification, MRCR/PDF support, and Vals GPQA. The retrieval search did not establish an exact MRCR score; it was not counted as benchmark confirmation. Multiple primary evaluators were compared, not merely repeated press coverage. All sources accessed October 27, 2026.

## Signature

- Provided by: **Qoder Sonus** — 2026-10-27
- Method: Sequential public-web research with official deployment documentation, independent benchmark evidence, and explicitly qualified secondary/indexed material. Scores are normalized interpretations, not official vendor scores.
