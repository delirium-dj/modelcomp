# Claude Sonnet 5.5 — findings by GPT-6.1 Sol

- Source: Anthropic / `claude-sonnet-5-5`
- Date: 2026-11-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5.5
- **Short description:** Proprietary reasoning and coding model positioned for scoped everyday work and rapid iteration, complementing Opus 5.5 on more open-ended tasks.
- **Provider / access:** Anthropic Messages API; Bedrock, Google Cloud and Microsoft Foundry. API default effort high; Claude apps/Code medium at launch.
- **Release / knowledge:** September 28, 2026; June 2026 reliable/training cutoff.
- **IDs:** `claude-sonnet-5-5`; Bedrock `anthropic.claude-sonnet-5-5`; publisher-qualified `anthropic/claude-sonnet-5-5`. No verified Zen Free route.
- **Context window:** 1M tokens; 128K synchronous output, 300K Message Batches output with beta header.
- **Modalities:** Text/image input, text output; adaptive reasoning and tools. `between_tools` disables up-front thinking, not all reasoning. Forced tool use unsupported; sampling parameters return errors; some computer-tool versions and advisor pairings unsupported.
- **Pricing (as of 2026-11-03):** Official $2 input / $10 output / $0.10 cache read per million; five-minute write $2.50, one-hour write $4; batch input/output half price. Zero-data-retention availability documented; no universal free service implied.
- **Architecture:** Proprietary; parameter counts undisclosed.

### Raw benchmarks found

Agent / tool use:

- Anthropic: Terminal-Bench 4.0 **70.6%**; GDPval-AA v2.1 **1844 Elo**; AA-Briefcase v1.1 **1811 Elo**; OSWorld 2.1 **80.1% partial**. AA ran the knowledge benchmarks on pre-release deployment with a subsequently fixed structured-output bug; no corrected value is invented.
- Vals current: Terminal-Bench 4.0 **64.14% ±1.01**, Finance Agent v2.1 **67.28% ±2.02**, SRE Bench **30.15% ±2.84**, HLAB-Vals-1.1 **10.42% ±2.57**.
- Vals launch terminal 4.0 **53.03%**, or **50.51%** without fallback credit; terminal 2.1 **83.15%**, or **80.52%** without fallback credit. Sonnet 5 served as fallback. SRE drops to **19.08%** without fallback credit, with **126/262** tasks fallback-assisted.
- Tau3, Claw, Toolathon and MCP-Atlas: no verified public score found in retrieved sources.

Reasoning / knowledge:

- Anthropic HLE with tools **64.5%**; Vals ProofBench v1.1 **100.00%**, MysteryMechanism **49.10% ±3.36**, BioMysteryBench **81.11% ±0.64**, Terminal-Bench-Science **47.14% ±6.01**.
- Vals current Index **70.85% ±0.93**, rank **1/32**, **$18.70/test**; launch Index **69.22%**, rank **2/66**, or **68.89%** excluding fallback credit. These are dated/cohort-dependent aggregates, not evidence of the exact same suite improving by 1.63 points.
- GPQA, CritPt, hallucination rate and current primary AA index: no verified public score found in directly retrieved pages. Search surfaces AA launch Index 56; not substituted for a fresh primary evaluation.

Coding:

- Anthropic FrontierCode 1.1 Main **52.1% xhigh / 46.2% max**, CursorBench 4.0 **55.5%**. More effort is not monotonically better: Anthropic attributes examined max failures to timeouts or out-of-scope edits from extra review.
- Vals Code Migration v1.1 **86.88% ±1.52**, Vibe Code Bench v1.1 **92.39% ±1.26**, IOI **83.06% ±3.74**, ProgramBench **6.50% ±1.75** fully resolved, SWE-bench Multimodal **58.33% ±2.25**. No verified exact-model SWE Verified/Pro or LiveCodeBench result retrieved.
- CodeRabbit independent Signal, 13 cases: thinking-on recall **6/13 (46.2%)**, precision **41.2%**, mean review **5:27**; Sonnet 5 **4/13**, precision **40.0%**, **9:55**. Thinking-off configuration **5/13**, precision **38.5%**. These use an effort ladder within a pipeline, not one fixed model effort.
- CodeRabbit 44-PR run: Sonnet 5.5 mean **6:33**, versus Sonnet 5 **13:31**; **111 versus 146** reported comments. Judge scoring pending: fewer comments are workload evidence, not proof of better recall. Reported Claude-only costs **$0.46/review** versus **$1.16** exclude shared smaller-model calls.

Long context / multimodal:

- Official 1M capacity; no verified MRCR/RULER result retrieved. Anthropic Chartography **61.6% no tools**, plus independent multimodal SWE results. Text-only output and absent native audio/video input limit modality breadth.

### Conflicts and limitations

Vendor terminal 70.6%, Vals current 64.14% and Vals launch 53.03% are separate runs/snapshots, not values to average. Fallback and effort/harness settings matter. Sonnet's strong aggregate scores do not make it an Opus replacement: CodeRabbit's same 13 hard cases yield 6 catches against Opus Standard's 8 and Max's 10, with higher Opus precision. The sample is small; judge instability can change Sonnet precision to 35.3% when one marginal passing comment is excluded.

CodeRabbit's historical cost calculation uses $0.20 cache reads, whereas the current official reference says $0.10. Retain its measured token/latency evidence and label dollar totals as source-calculated historical figures; do not promise the same savings on every workload. Its wording “thinking off” refers to `between_tools`. Official docs also reject forced tool calls and sampling parameters, so migration is not parameter-identical. Cyber tasks may route to Sonnet 5; log the serving model rather than credit fallback work exclusively to Sonnet 5.5.

### Normalized scores (1–100)

- **Tool use: 94/100.** Strong terminal and knowledge-work evidence, capped by fallback dependence, legal/SRE gaps and breaking tool behavior.
- **Reasoning: 93/100.** Strong HLE, proof and scientific reasoning, with tool assistance and domain-specific failures limiting generality.
- **Context window: 95/100.** Large official window/output limits, but no verified edge-window retrieval result in this source set.
- **Multimodal: 87/100.** Strong image/chart and multimodal coding evidence; no native audio/video breadth established.
- **Coding: 94/100.** Excellent independent migration/Vibe Code results, moderated by small-sample hard-review misses, effort regressions and low full ProgramBench completion.
- **Cost efficiency: 87/100.** Good $2/$10 rates and strong independent efficiency gains; full-pipeline costs, max-effort use and fallback can erase part of savings.
- **Overall Score: 93/100.** Half-up mean of 94, 93, 95, 87 and 94 is 92.6; best for fast, scoped coding and knowledge agents with explicit checks and escalation for hard review.

## Signature

- Provided by: **GPT-6.1 Sol (openai/gpt-6.1-sol-ultrafast)** — 2026-11-03 UTC
- Method: Three successful separate searches followed by official launch/model documentation, independent Vals and CodeRabbit comparisons. No peer findings read; normalized scores are interpretations.
- Search queries: `"Claude Sonnet 5.5" Anthropic official benchmarks`; `"Claude Sonnet 5.5" independent Artificial Analysis Vals review`; `"Claude Sonnet 5.5" context pricing limitations tools`.
- Reference URLs:
  - [Official launch and evaluation footnotes](https://www.anthropic.com/claude-sonnet-5-5)
  - [Official current specifications, pricing and API limits](https://platform.claude.com/docs/en/models/sonnet-5-5/overview)
  - [Vals independent results and fallback sensitivity](https://www.vals.ai/models/anthropic_claude-sonnet-5-5)
  - [CodeRabbit independent same-input review evaluation](https://www.coderabbit.ai/blog/sonnet-5-5-model-review)
