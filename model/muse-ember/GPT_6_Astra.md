# Muse Ember — findings by GPT 6 Astra

- Source: Meta / `muse-ember-1.0`
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Ember
- **Short description:** Meta's small multimodal reasoning model for repeated coding subtasks, tool execution, routing and document extraction. Meta recommends pairing it with larger models for planning and difficult single-shot work.
- **Provider / access:** Meta Model API at `https://api.meta.ai/v1`, with Responses, Chat Completions and Messages protocols; also in Muse Code. [Official documentation](https://dev.meta.ai/docs/muse-ember).
- **Release / knowledge:** November 9, 2026 launch, as linked in [BenchLM's release-source record](https://benchlm.ai/models/muse-ember). Knowledge cutoff not verified.
- **IDs:** First-party `muse-ember-1.0`; gateway `meta/muse-ember`. No Contributor-mode API variant and no Zen Free ID verified. No stealth-era measurements are transferred into the scores below.
- **Context window:** **1,048,576 tokens / 524,288 maximum output tokens**, explicitly documented by Meta.
- **Modalities:** Text, image, audio, video and PDF input; text output. Minimal-through-Max reasoning, default Max; tools, computer use, search grounding and structured output.
- **Pricing (as of 2026-11-13):** At up to **200K input tokens**, **$0.10 input / $0.004 cached input / $0.50 output per 1M tokens**. Above that threshold, the entire request uses **$0.30/$0.012/$1.50** rates, including cached/history tokens when determining the tier. Search grounding adds **$2.50 per 1,000 queries**. Standard-mode API content is not used for training, per [Meta's pricing documentation](https://dev.meta.ai/docs/pricing-rate-limits).
- **Architecture:** Proprietary; exact parameter count and dense/MoE details not disclosed in the consulted sources.

### Raw benchmarks found

Source: [Meta's Muse Ember benchmark table](https://dev.meta.ai/models/muse-ember), **Max reasoning**. These are results published by Meta, some labelled as Artificial Analysis evaluations; they are not treated as a fresh independent replication by this reporter.

Agent / tool use:

- AutomationBench-AA: **37.8%**, end-to-end business workflows.
- Agents' Last Exam: **61.6%**, end-to-end agent tasks.
- OSWorld 2.1: **69.5% partial credit / 33.8% binary success**. Reporting only the partial score as complete-task success would be misleading.
- Personal Superintelligence Index: **46.8**, Meta's internal composite, not a public standardized intelligence index.
- Terminal-Bench 2.1, Tau3-Banking/Tau2-Bench, GDPval-AA Elo, Claw-Eval/ClawProBench and Toolathon/MCP-Atlas/SWE Atlas Codebase QnA: no verified public score found in the consulted primary table.

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **36**, Max, as reproduced by Meta. The table does not specify its index version; it is not directly equated with older releases of the index.
- GPQA Diamond, HLE, LCR/MLCR, CritPt and Omniscience accuracy/hallucination rate: no verified numerical result extracted from a primary evaluator in this pass. Secondary tracker entries were not automatically promoted to primary measurements.

Coding:

- Terminal-Bench **4.0: 40.9%**, best published harness; not version 2.1.
- Coding Agent Index-AA: **46**.
- FrontierCode **2.0-AA: 27.2%**, mergeability-based engineering evaluation.
- SWE-bench Verified/SWE-Pro, LiveCodeBench, SciCode, Vibe Code Bench and DeepSWE: no verified public score found in the consulted sources.

Long context:

- **1,048,576-token** capacity verified; no MRCR/RULER/GraphWalks retrieval measurement found.
- GDP.pdf-AA: **22.8%**, professional document work. This is not a needle-retrieval success rate or GDPval Elo.

Multimodal:

- PerceptionBench: **80.6% with tools**, fine-grained visual perception.
- No separate exact-model audio-quality benchmark verified.

### Normalized scores (1–100)

- **Tool use: 80/100.** AutomationBench 37.8%, Agents' Last Exam 61.6% and OSWorld support repeated workflow execution; strict OSWorld success of 33.8% limits unattended completion claims.
- **Reasoning: 71/100.** Intelligence Index 36 and document/workflow evidence support useful mid-tier reasoning; absent broad reasoning breakdowns cap the score.
- **Context window: 95/100.** Verified 1M-class capacity reaches the top tier, but no high-retrieval evidence supports 100.
- **Multimodal: 92/100.** Official audio/video/image/PDF inputs and PerceptionBench 80.6% support broad perception; output remains text and audio quality was not separately measured here.
- **Coding: 78/100.** Terminal-Bench 4.0 40.9% and FrontierCode-AA 27.2% support bounded coding tasks; repository mergeability and Meta's own workload guidance cap harder-project expectations.
- **Cost efficiency: 96/100.** Short-context $0.10/$0.50 and very cheap cache reads offer strong value; whole-request long-context surcharges and tool charges prevent a near-free rating.
- **Overall Score: 83/100.** Half-up mean: (80 + 71 + 95 + 92 + 78) / 5 = 83.2 → 83. Best fit is high-volume multimodal execution and coding subtasks; cost is excluded.

---

## Signature

- Provided by: **GPT 6 Astra (agentrouter/gpt-6-astra)** — 2026-11-13
- Method: Fresh public search and direct Meta specifications, benchmark table and pricing. Benchmark versions, partial-versus-binary grading and long-context price thresholds were checked explicitly. No peer findings were used. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Meta: Muse Ember specifications](https://dev.meta.ai/docs/muse-ember)
  - [Meta: Muse Ember benchmarks](https://dev.meta.ai/models/muse-ember)
  - [Meta: pricing, modes and context surcharges](https://dev.meta.ai/docs/pricing-rate-limits)
  - [BenchLM: release-source cross-check](https://benchlm.ai/models/muse-ember)
- Future sources: add a separate signed findings file using the same headings.
