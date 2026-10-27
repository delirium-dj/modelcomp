# Claude Opus 5 — findings by Qoder Sonus

- Source: Anthropic (`claude-opus-5`), standard paid deployment; fallback configurations identified below.
- Date: 2026-10-27 (UTC)
- Overview and scoring methodology: [model-comparison.md](../../model-comparison.md)
- Cross-model signed log: [model-findings.md](../../model-findings.md)

## Model card

- **Name:** Claude Opus 5.
- **Short description:** Proprietary general-purpose reasoning model emphasizing long-horizon coding, analysis, and professional artifacts. Now an active legacy model, not the current Opus flagship and not an alias of Opus 5.5.
- **Provider / access:** Claude Messages API `claude-opus-5`; Bedrock `anthropic.claude-opus-5`; also Google Cloud, Microsoft Foundry, and Claude Platform on AWS. Dateless Claude API IDs are pinned snapshots.
- **Release / knowledge:** July 24, 2026; reliable and training-data cutoff May 2026. Official retirement commitment not sooner than July 24, 2027 on first-party platforms.
- **IDs / evaluated tier:** Paid standard `claude-opus-5`. No exact Zen Free ID verified; Fast mode is a separate pricing configuration, not assumed at base cost.
- **Context window:** Official default and maximum 1M tokens; 128K synchronous output. Message Batches supports 300K output only with `output-300k-2026-03-24` beta. Context capacity does not prove full-window recall.
- **Modalities:** Text/image and visual-PDF input, text output; tool calls and structured-output workflows. No verified native audio/video input or native non-text output. Adaptive thinking with five efforts, low through max; API default high. Thinking can be disabled only at high or below.
- **Operational caveats:** Official prompting guidance warns that disabled thinking can emit tool calls as ordinary text, leaving them unexecuted, and can expose internal XML-like tags. Scope expansion, excessive delegation, and verbosity require explicit constraints; effort controls reasoning spend, not reliably visible answer length.
- **Pricing (2026-10-27):** $5 input / $25 output / $0.50 cache read per million tokens; five-minute writes $6.25, one-hour writes $10; batch input/output 50% off. Launch Fast mode offered approximately 2.5× speed at twice base pricing; no universal latency guarantee.
- **Safeguards / privacy:** Cyber safeguards can redirect to Opus 4.8; default in Claude apps/Code/Cowork, optional API fallback. AA and Vals enabled fallback. Launch says no special data-retention requirement for general access; this does not make every provider/account zero-retention.
- **Architecture:** Proprietary, with no verified parameter count, active-parameter disclosure, or open-weights license.

### Raw benchmarks found

Agent / tool use:

- **Terminal-Bench 2.1: 89%**, AA July 24 primary launch report, max effort with Opus 4.8 fallback. BenchLM's 89.1% is a later, more precise secondary transcription, not a separately verified run.
- **Terminal-Bench 2.1: 84.64%**, Vals high effort; **81.27%** when fallback-assisted results count as failures. AA max and Vals high are not equivalent configurations.
- **GDPval-AA v2: 1,861 Elo; AA-Briefcase: 1,720 Elo**, AA launch using Stirrup. Briefcase xhigh **1,693**, high **1,606**, medium **1,470**, low **1,223**: effort materially changes capability.
- **AA-Briefcase cost/time:** max **$17.79 / 36.2 minutes per task / 103 turns**; xhigh **$14.26 / 34.3 minutes / 91 turns**; high **$10.41 / 25.7 minutes / 76 turns**. These professional tasks are much more expensive than the blended Intelligence Index task average.
- **OSWorld 2.0: 75.4% partial / 39.6% strict**, Anthropic's later September Fable 5.1 comparison, using August task files. **AutomationBench 26.9%; TB4.0 52.3%; TB-Science 0.1 29.0%** in that same vendor comparison. Science's public Claude Code result is 30.0%, within reported uncertainty; benchmark release/harness matter.
- **Vals finance/legal examples:** Finance Agent v2 **58.63%**, CorpFin v2 **73.19%**, Legal Research **55.29%**, primary launch excerpt. These measure specialist workflows, not general tool-call correctness.
- **Tau3-Banking / Claw-Eval / ClawProBench / MCP-Atlas:** no directly verified exact-model numerical result found. AA reports coding-agent leadership including SWE-Atlas-QnA, but its accessible article does not provide the exact QnA score.

Reasoning / knowledge:

- **ARC-AGI-1 / ARC-AGI-2 semi-private: 97.5% / 90.4% max**, ARC Prize verified. High **97.5% / 88.3%**. **ARC-AGI-3 30.2% at high**, July 24 page; only high was evaluated for ARC3 in the short launch window. Do not relabel this as a max-effort result or presume equivalence to later Standard/Adapter configurations.
- **HLE: 53%**, AA primary July launch. Anthropic's later September table reports **56.6% without tools / 63.6% with tools**; separate harnesses/snapshots, not contradictory measurements of one fixed setup.
- **AA Intelligence Index:** **61 max** in the July article; **51, rank 18/221** on the current **v4.3.2** profile. Later launch-era reports used other values after index changes; current and historical scores are not directly subtractable.
- **AA Omniscience:** July article reports accuracy up seven points over Opus 4.8 and hallucination rate **50%**, up 14 points. BenchLM's later **60.9% accuracy / 60.8% hallucination** is secondary, not substituted into the July statement.
- **GPQA Diamond / SciCode / AA-LCR / CritPt:** BenchLM attributes **93.2% / 56.4% / 79.3% / 29.1%** to AA. Exact primary chart values were not extracted; supporting secondary evidence only, with no verified MLCR number.
- **Vals MMLU Pro: 91.59%; ProofBench: 78.00%**, primary launch excerpt, max effort except its terminal test.

Coding:

- **Vals SWE-bench Verified: 97.00%; LiveCodeBench: 89.03%; Vibe Code Bench: 88.40%; Code Migration: 57.47%**, launch excerpt with max effort and fallback. Vals explicitly labels its SWE result Verified; no assumption that its subset/harness matches vendor evaluations.
- **Vals ProgramBench: 3.00% fully resolved**, a completion metric, not interchangeable with BenchLM's system-card-attributed **93%** ProgramBench or **83% episode 1**. Test version, horizon, and aggregation differ or are insufficiently documented in the excerpts; no averaging.
- **Sonar Java evaluation, August 14 refresh:** **88.6% pass rate on 544 executable-test tasks**, versus Opus 4.8's 82.9%. The full analysis spans **4,441 tasks** (158 HumanEval, 386 MBPP, 3,897 ComplexCodeEval); the larger denominator is not the functional pass-rate denominator.
- **Sonar quality tradeoff:** bug density **576/million LOC**, vulnerability density **251/million LOC**, but **916,813 LOC**, approximately **2.3×** the baseline. Total bugs **528**, vulnerabilities **230**, total issues **18,814**; overall issue density **20.52/kLOC** and code smells **19.69/kLOC**. Cleaner bug/vulnerability density does not imply less total review work.
- **Sonar weaknesses:** concurrency/threading **205/million LOC** versus 105; cryptography misconfiguration **103/million LOC** versus 43. Output **21.71M tokens** versus 6.00M. These are Java static-analysis findings, not security exploit success probabilities.
- **CodeRabbit, approximately 100 verified error patterns, three runs/configuration:** xhigh actionable precision **39.3% vs 35.2% production baseline**, but actionable issue coverage **55.2% vs 61.1%**; full-stream precision **28.6% vs 32.8%**, roughly **4× nitpicks**. Results are post-verification/deduplication pipeline outputs, not raw model responses or a controlled historical leaderboard.
- **Endor Agent Security League, Claude Code, July 31:** **73.7% functional / 32.4% secure correctness** on the inspected primary leaderboard. Agent-plus-model performance still falls far short of safe unattended coding.
- **Snorkel matched comparison with Fable 5.1:** Opus leads pass@1 by **6.2 points**, solving five tasks alone versus Fable's two; both solve 18 and neither two. Opus build/dependency performance **67% vs 18%**, but Fable's successful-run median uses 58% fewer output tokens and 36% less time. Small uneven categories and success-conditioned cost prevent blanket rankings.
- **SWE-Pro / DeepSWE:** BenchLM transcribes **79.2% / 68.8%** from the system card; no directly inspected primary result here. Do not replace Vals Verified 97% with secondary vendor Verified 96% without naming the harness.

Long context / multimodal:

- **Vals MMMU: 89.88%; Multimodal Index: 73.90%**, primary launch excerpt. These are not MMMU-Pro and do not establish native audio/video support.
- Official model/vision/PDF documentation supports document and image understanding, with tools recommended for crop/verification loops. Interactive 3D or simulation artifacts are generated code, not native image/video output.
- No primary exact-model MRCR/RULER score at 512K+ verified. Search hits for Opus 4.6's 76% MRCR were rejected as another model. Vendor claims of consistency across 1M remain qualitative.

### Evidence reconciliation and limitations

- **Lifecycle:** AA calls the model deprecated and limits continuing throughput benchmarking to the default 10K-input workload. Official docs say active legacy with a future retirement commitment. AA's tracking policy is not proof the API has retired.
- **Primary-source inconsistencies retained:** Vals headlines a **67.21%** general index but its fallback paragraph uses **74.82% → 74.47%**. The excerpt does not reconcile those bases; no claimed exact fallback delta is applied to the headline index. Individual clearly labeled task results are preferred.
- **Sonar table error:** its summary repeats 88.6% under missing completions, whereas the prose says **0.83%**. The functional rate is well-supported; missing completions is not used as a scoring anchor. Severity-impact and headline issue classifications also differ by the author's explicit methodology.
- **Builder versus reviewer:** vendor guidance's broad precision/recall claim is qualified by CodeRabbit's measured recall loss and noisy full stream. Sonar and Endor independently show substantial residual quality/security defects. Neither better self-verification nor benchmark leadership replaces independent tests.
- **Cost snapshots:** AA July max blended index cost **$2.03/task**, 26% below Fable 5's $2.75, versus current v4.3.2 **$5.86/task**, **140M output tokens**, **53.3 tokens/s**. New benchmark mix, workload and effort preclude a simple price-regression conclusion. Current official Opus 5.5 pricing is lower; launch value leadership is not a timeless recommendation.
- Official announcement graphics and linked system-card tables were not decoded; secondary transcriptions remain labeled. Peer reports and canonical queue averages were not research evidence.

### Normalized scores (1–100)

- **Tool use: 95/100.** AA TB2.1 89%, strong GDPval/Briefcase, and diverse workflow results place it at the frontier, capped by strict completion gaps, fallback assistance, and absent Claw-Eval evidence.
- **Reasoning: 93/100.** Verified ARC2 90.4%, HLE and professional analysis support strong reasoning, tempered by calibration weaknesses, evolving indices, and unverified full-window recall.
- **Context window: 95/100.** Official 1M capacity reaches the top tier; no ≥98% retrieval result at 512K+ supports a perfect score.
- **Multimodal: 87/100.** Verified MMMU and document/visual-PDF capability support a strong image/document score; native audio/video and non-text generation are not verified.
- **Coding: 92/100.** Vals, AA, and Sonar show strong implementation ability, but CodeRabbit recall, Endor security, concurrency defects, and code-volume overhead limit confidence.
- **Cost efficiency: 49/100.** $5/$25 and $0.50 cache reads are premium pricing; workload-specific gains over Fable help, but current task cost, verbosity, and cheaper successors cap value.
- **Overall Score: 92/100.** Half-up mean: (95 + 93 + 95 + 87 + 92) / 5 = 92.4 → 92, cost excluded. Strong for complex building and analytical artifacts; use external quality/security checks and benchmark newer cheaper alternatives.

## Sources and search audit

1. [Official launch and safeguard/benchmark footnotes](https://www.anthropic.com/news/claude-opus-5), [model reference](https://platform.claude.com/docs/en/models/opus-5/overview), and [prompting/disabled-thinking caveats](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/prompting-claude-opus-5).
2. [AA July launch](https://artificialanalysis.ai/articles/opus-5), [professional-work effort sweep](https://artificialanalysis.ai/articles/claude-opus-5-leader-agentic-knowledge-work), and [current profile](https://artificialanalysis.ai/models/claude-opus-5).
3. [ARC Prize exact-model results](https://arcprize.org/results/anthropic-claude-opus-5).
4. [Vals launch results and fallback caveat](https://www.vals.ai/models/anthropic_claude-opus-5).
5. [Sonar independent Java evaluation](https://www.sonarsource.com/blog/claude-opus-5/).
6. [CodeRabbit independent code-review evaluation](https://www.coderabbit.ai/blog/opus-5-model-review).
7. [Endor primary agent security leaderboard](https://www.endorlabs.com/research/ai-code-security-benchmark) and [Snorkel primary matched comparison](https://snorkel.ai/blog/fable-5-1-vs-opus-5-coding-benchmark/).
8. [Later Anthropic comparison with August OSWorld tasks](https://www.anthropic.com/claude-fable-and-mythos-5-1) and [official PDF support](https://platform.claude.com/docs/en/build-with-claude/pdf-support).
9. [BenchLM secondary aggregation](https://benchlm.ai/models/claude-opus-5).

Seven successful search queries covered official launch, independent evaluations, AA July research, CodeRabbit criticism, long-context retrieval, Vals, and GPQA/SciCode. Retrieval queries did not verify MRCR; unrelated model hits were rejected. Multiple independently run coding, reasoning, and agent evaluations were compared with vendor claims. Accessed October 27, 2026.

## Signature

- Provided by: **Qoder Sonus** — 2026-10-27
- Method: Sequential multi-source public-web research. Scores are normalized interpretations, not official vendor scores; exact model, effort, fallback, benchmark version, and evidence limitations are preserved.
