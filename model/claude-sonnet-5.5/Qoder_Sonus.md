# Claude Sonnet 5.5 — findings by Qoder Sonus

- Source: Anthropic (`claude-sonnet-5-5`), standard paid deployment; benchmark fallback settings stated individually.
- Date: 2026-10-27 (UTC)
- Overview and scoring methodology: [model-comparison.md](../../model-comparison.md)
- Cross-model signed log: [model-findings.md](../../model-findings.md)

## Model card

- **Name:** Claude Sonnet 5.5.
- **Short description:** Proprietary model for fast, well-scoped coding, agent workflows, and visual/document work. Not interchangeable with Sonnet 5; Anthropic still recommends Opus 5.5 for the hardest open-ended work requiring sustained judgment.
- **Provider / access:** Claude Messages API `claude-sonnet-5-5`; Bedrock `anthropic.claude-sonnet-5-5`; Google Cloud, Microsoft Foundry, and Claude Platform on AWS. Dateless IDs are pinned snapshots.
- **Release / knowledge:** September 28, 2026; reliable and training-data cutoff June 2026. Active latest Sonnet; first-party retirement not before September 28, 2027.
- **IDs / evaluated tier:** Standard paid Claude API. No exact Zen Free ID verified; subscription credits do not make the underlying API model free.
- **Context window:** Official 1M tokens, 128K synchronous output; 300K output only on Message Batches with `output-300k-2026-03-24` beta. Same tokenizer as Sonnet 5. No full-window retrieval guarantee inferred.
- **Modalities:** Text/image/visual-PDF input and text output; no verified native audio/video input or native non-text generation. Tool calling, strict tools, structured outputs, computer use, and adaptive thinking supported. Five effort levels; API default high, apps/Claude Code medium.
- **Migration constraints:** Explicit disabled thinking returns 400; `between_tools` removes up-front thinking at low/medium/high while retaining between-tool state. It is rejected at xhigh/max. Forced named/any tool choice, manual thinking budgets, and sampling parameters are rejected. Older computer tool `computer_20251124` is rejected on Claude API/Google-managed Cloud; use `computer_toolset_20260801`, with Bedrock compatibility different.
- **State handling:** Thinking blocks are bound to model, conversation prefix, and account; supported beta mid-conversation tool additions preserve state, but arbitrary edits to earlier tools/messages may not. Progress text may be returned in thinking blocks and appear empty unless configured appropriately.
- **Pricing (2026-10-27):** $2 input / $10 output / **$0.10 cache read** per million tokens; five-minute writes $2.50, one-hour writes $4; batch input/output 50% off. Cache reads fell from $0.20 on October 7. Current launch text reflects the reduction; September AA/CodeRabbit/Emergent rates remain historical.
- **Safeguards / privacy:** High-risk cyber and certain frontier-model-development refusals can fall back to Sonnet 5; the documented server-side beta does not retry every refusal category. Zero-data-retention access is available, not automatically a guarantee for every host/account.
- **Architecture:** Proprietary; parameter count and active-parameter architecture undisclosed, no open weights.

### Raw benchmarks found

Agent / tool use:

- **Terminal-Bench 4.0: 70.6%**, Anthropic launch; comparison Opus 5.5 **66.4% uses xhigh**, its best reported effort. AA independently reports **64% max**, and Vals **53.03% max**. Different harnesses and deployments remain separate; none is TB2.1.
- **Terminal-Bench 2.1: 83.15% high**, Vals, falling to **80.52%** when fallback-assisted tasks fail. Vals TB4.0 falls **53.03% → 50.51%** under that counterfactual.
- **GDPval-AA v2.1: 1,844 Elo; AA-Briefcase v1.1: 1,811 Elo**, independently run by AA and reproduced by Anthropic. Near Opus 5.5's 1,846/1,822, but tiny point gaps without confidence intervals do not establish a decisive ordering.
- **AutomationBench-AA: 71%**, AA September 28 article. Not vendor AutomationBench or a guarantee of end-to-end office automation success.
- **Terminal-Bench-Science: 53%**, AA standalone evaluation; Vals independently reports **38.57%**. AA explicitly excludes this test from its Intelligence Index.
- **OSWorld 2.1: 80.1% partial credit**, vendor launch. No equivalent strict-completion score extracted; partial credit is not all-tasks-complete accuracy.
- **Vals SRE Bench: 30.15%**, falling to **19.08%** when fallback assistance fails. CyberBench **59.58% → 41.97%**. Reported fallback-task counts: SRE 126/262, CyberBench 54/116; this is a large domain-specific effect despite AA's approximately 0.1% fallback frequency across its own index.
- **Vals specialist weaknesses:** Harvey Legal Agent Benchmark **2.92%**, versus Finance Agent v2 **58.10%**, Legal Research **48.08%**, BioMysteryBench **81.11%**. Different legal tests are not interchangeable and strong general averages hide weak task categories.
- **Tau3-Banking / Claw-Eval / ClawProBench / MCP-Atlas / SWE Atlas Codebase QnA:** no directly verified exact-model numerical score found.

Reasoning / knowledge:

- **HLE with tools: 64.5%**, Anthropic launch. AA says its own HLE and SciCode scores each trail Opus 5.5 by approximately six points; no absolute no-tool HLE or SciCode number was extracted from that primary article, so none is calculated from the comparison.
- **AA Intelligence Index: 56, launch and current rank 2**, with current **2/221 on v4.3.2** for max/default-fallback. This composite strongly weights agentic work and does not erase weaker factual recall.
- **AA Omniscience: 54% factual accuracy / 47% hallucination rate**, launch primary article; Opus 5.5 66%/59%. Lower accuracy and lower benchmark-defined hallucination can coexist.
- **ARC Prize semi-private:** ARC1 **96.5% at max or xhigh**, ARC2 **83.9% xhigh**, **67.4% high**, **32.8% medium**. No max ARC2 result on the inspected table.
- **ARC3:** xhigh **24.3% Standard / 72.4% Provider Adapter**; high **1.2% / 35.5%**; medium **0.4% / 4.9%**. Adapter preserves opaque state and compacts conversations, while Standard carries explicit notes; these are not identical reasoning conditions.
- **ProofBench v1.1: 100.00%**, Vals, matching several models on that test rather than proving universal formal-math competence.
- **GPQA Diamond / LCR / MLCR / CritPt:** no directly verified primary absolute scores extracted. Secondary search snippets were not promoted to primary evidence.

Coding:

- **FrontierCode 1.1 Main: 52.1% xhigh / 46.2% max**, vendor/partner launch comparison. Anthropic's footnote reports more delegation at max, and two inspected Cognition cases involved timeout or out-of-scope edits. More effort can reduce mergeability.
- **CursorBench 4.0: 55.5%**, launch partner benchmark, versus Opus 5.5 57.8%; a versioned agent evaluation, not isolated code generation.
- **Vals Vibe Code Bench: 92.39%; Code Migration: 69.83%; IOI: 83.06%**, primary launch excerpt. No exact LiveCodeBench, SWE-bench Verified/Pro, or DeepSWE figure extracted from primary content.
- **CodeRabbit Signal, 13 hard known-bug cases:** adaptive thinking catches **6/13 (46.2%) actionable issues**, **8/13 including outside-diff**, at **41.2% actionable precision**, **17 comments**, mean **5:27 per review**. Sonnet 5 catches 4/13 at 40% precision and 9:55; Opus 5.5 Standard catches 8/13. Small sample, frozen inputs, independently judged comments with majority of three votes, post-pipeline results.
- **CodeRabbit reduced-thinking configuration:** **5/13**, 38.5% precision, 13 comments, mean 5:58. The article calls this thinking off; current docs require `between_tools`, not disabled. A one-case difference is weak evidence of a universal ranking.
- **CodeRabbit OSS August, 44 PRs / 85 known issues:** **111 comments / nine nitpicks / mean 6:33**, versus Sonnet 5 **146 / 30 / 13:31**. Judge scoring was pending; the larger set validates latency/comment volume, not yet improved bug recall.
- **CodeRabbit modeled Claude-call cost:** approximately **$0.47 Signal / $0.46 OSS per review**, versus Sonnet 5 $1.16, at the then-current $0.20 cache-read rate. Shared summary/verification models excluded; this is not the full product bill.
- **AA FrontierCode 1.1 cost study, October 12:** max/default-fallback uses approximately **236K output tokens per task**, costing **$8.26**, versus Opus 5.5 approximately 157K/$10.15. AA uses Stirrup, 100 Main tasks, three attempts each, 250-turn cap, and separates mean score from passing all blocking criteria. No Sonnet-specific score was exposed in the article text.
- **Security correctness:** no Sonnet 5.5 row in the inspected Endor table. Sonnet 5's numbers were not transferred to this model; Vals fallback-sensitive CyberBench is also not secure code-generation accuracy.

Long context / multimodal:

- **Chartography: 61.6% without tools**, vendor launch, versus Sonnet 5 15.6%. Visual PDFs, screenshots, GUI work, and code-rendered artifacts support broad document capability.
- **AA-3D:** official search-index excerpt reports **1,194 Elo**, with overlapping 95% intervals among the top four. The fetched page exposed general visual-inspection methodology but not that model row, so this remains indexed supporting evidence, not a precise primary scoring anchor.
- No verified primary MRCR/RULER at 512K–1M found. Context searches surfaced other models; their scores were rejected. Generated HTML scenes, rendered videos, or screenshots from tools are not native video/image generation.

### Evidence reconciliation and limitations

- **Savings depend on effort:** vendor up-to-30% task savings and CodeRabbit approximately 60% savings concern specific workloads/settings. AA's September max evaluation cost **$7.60/task**, about 50% more than Sonnet 5, with approximately **193K output tokens/task**. This is compatible with faster token generation but longer total reasoning.
- **Current versus historical price/cost:** current AA profile shows **$5.46/task**, **420M total evaluation output tokens**, and **140.1 output tokens/s**; $0.10 cache reads are current. No claim that the entire change from $7.60 is caused by the cache cut: evaluation versions/deployments and workload mixes also matter.
- **Pre-release bug:** AA and Anthropic disclose a structured-output bug affecting AA's pre-release deployment, fixed before public release. Its exact score impact is unknown; no invented corrected score or uplift is applied.
- **Documentation controls integration facts:** Vals states temperature 1.0, but current official docs reject explicit temperature/top-p/top-k. That historical evaluator description does not authorize passing the parameter today. Likewise, CodeRabbit's shorthand thinking-off and tool-change descriptions do not override current state-binding/migration rules.
- **Source independence:** Emergent repeats vendor and AA values and is useful reconciliation, not another experiment. CodeRabbit is a launch partner and product vendor but publishes its own test methodology and negative results; its 13-case findings are not population-wide proof.

### Normalized scores (1–100)

- **Tool use: 96/100.** AA TB4.0, GDPval/Briefcase, and automation results establish frontier agent strength; fallback sensitivity, strict completion gaps, and missing Claw-Eval cap the score.
- **Reasoning: 91/100.** Current AA index and HLE support strong reasoning, tempered by lower factual accuracy and ARC's large effort/harness sensitivity.
- **Context window: 95/100.** Official 1M context qualifies for the top capacity tier; no verified ≥98% retrieval at 512K+ supports 100.
- **Multimodal: 87/100.** Strong chart, image, visual-PDF, and GUI capability supports the document tier; native audio/video and non-text output remain unverified.
- **Coding: 94/100.** Strong terminal, migration, and Vibe results plus independent review gains support frontier coding, capped by mergeability regressions at max and missed known bugs.
- **Cost efficiency: 69/100.** $2/$10 with $0.10 cache reads and measured routine-review savings gives useful value; heavy max-effort token consumption prevents low-cost frontier status across workloads.
- **Overall Score: 93/100.** Half-up mean: (96 + 91 + 95 + 87 + 94) / 5 = 92.6 → 93, cost excluded. Best for well-scoped iterative work at calibrated effort, with independent verification and escalation for difficult judgment calls.

## Sources and search audit

1. [Anthropic launch, benchmark table and footnotes](https://www.anthropic.com/claude-sonnet-5-5), [model overview](https://platform.claude.com/docs/en/models/sonnet-5-5/overview), and [migration/feature changes](https://platform.claude.com/docs/en/models/sonnet-5-5/whats-new-sonnet-5-5).
2. [October 7 official Sonnet cache-price reduction](https://www.anthropic.com/claude-haiku-5-5).
3. [AA September launch](https://artificialanalysis.ai/articles/claude-sonnet-5-5) and [current max/default-fallback profile](https://artificialanalysis.ai/models/claude-sonnet-5-5).
4. [ARC Prize effort and harness results](https://arcprize.org/results/anthropic-claude-sonnet-5-5).
5. [Vals benchmark and fallback report](https://www.vals.ai/models/anthropic_claude-sonnet-5-5).
6. [CodeRabbit independent code-review study](https://www.coderabbit.ai/blog/sonnet-5-5-model-review).
7. [AA FrontierCode methodology/cost](https://artificialanalysis.ai/articles/frontiercode) and [AA-3D indexed result/partial extraction](https://artificialanalysis.ai/articles/aa-3d).
8. [Emergent secondary comparison](https://emergent.sh/learn/claude-sonnet-5-5-benchmarks) and [Endor leaderboard checked for exact-model coverage](https://www.endorlabs.com/research/ai-code-security-benchmark).

Eight completed searches covered official launch, independent reviews, AA, independent coding/security studies, targeted CodeRabbit results, long-context retrieval, the dated cache-price change, and GPQA/SciCode. Retrieval searches did not establish a primary long-context score. Primary evaluators were compared individually; no peer reports or queue averages supplied scores. Accessed October 27, 2026.

## Signature

- Provided by: **Qoder Sonus** — 2026-10-27
- Method: Sequential public-web research with official deployment documentation, independent evaluations, benchmark-condition reconciliation, and explicitly limited secondary/indexed evidence. Normalized scores are interpretations, not vendor scores.
