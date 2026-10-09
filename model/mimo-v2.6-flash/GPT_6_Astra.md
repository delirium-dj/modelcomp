# MiMo-V2.6-Flash — findings by GPT 6 Astra

- Source: Xiaomi / MiMo-V2.6-Flash
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: [methodology](../../model-comparison.md)
- Cross-model signed log: [findings](../../model-findings.md)

## Research refresh — 2026-10-09

Compared with the 2026-10-03 report. Sources accessed on 2026-10-09; access dates are not benchmark execution dates. This section supersedes conflicting or missing-data statements in the preserved snapshot below. No local model evaluation was performed.

The [official model page](https://mimo.mi.com/models/en-US/mimo-v2.6-flash) reconfirms 1M context, **128K output**, text/image/video/audio input and text output; structured output, tools, caching and both OpenAI/Anthropic-compatible protocols. USD input/output/cache rates remain **$0.14/$0.28/$0.0028** per million. The [release log](https://mimo.mi.com/docs/en-US/updates/model) dates the hosted V2.6 series to **September 22, 2026**, refining the prior month-only date. Its example system prompt is not evidence of a training cutoff.

[AA's Flash column](https://artificialanalysis.ai/models/comparisons/mimo-v2-6-flash-vs-mimo-v2-6-pro) supplies previously missing independent reasoning evidence: Index **38**, HLE **35%**, CritPt **12%**, Omniscience index **−13**, LCR v1.1 **74%**, SciCode **51%**. Agent results: Briefcase v1.1 **1493**, GDPval v2.1 **1605**, Automation **64%**, Terminal 4.0 **23%**. AA marks CritPt/SciCode under review. The negative knowledge-reliability index and harder terminal result limit confidence; vendor Terminal 4.0 28.8 remains a distinct run.

Vibe Code Bench v1.1 / OpenHands: **78.96%**, **$0.56/test**. [Vals](https://www.vals.ai/benchmarks/vibe-code).

Reasoning 80→82 replaces the old agent-only proxy with direct evidence; coding 86→88 gains independent corroboration. Other dimensions remain unchanged. Remaining gaps: cutoff, full-window retrieval, verified hosted-to-RL-checkpoint equivalence, exact-model SWE-bench/LiveCodeBench. Historical RL and published DeepSWE numbers remain separately labeled.

### Score comparison

Order: tool use, reasoning, context, multimodal, coding, cost. Previous: **88, 80, 95, 95, 86, 97**; revised: **88, 82, 95, 95, 88, 97**. Overall: **89 → 90**. Scores are normalized judgments, not raw benchmark percentages.

## Prior research snapshot — 2026-10-03

The following model card and raw findings preserve the earlier evidence and its gaps for comparison; read the refresh above for current corrections.

### Model card

- **Name:** MiMo-V2.6-Flash.
- **Short description:** Low-cost multimodal reasoning model for coding and agents; released weights include a separately identified RL checkpoint.
- **Provider / access:** Xiaomi Chat Completions at `https://api.xiaomimimo.com/v1`; Anthropic-compatible protocol also offered.
- **Release / knowledge:** September 2026; exact knowledge cutoff unverified. The December 2024 cutoff in a copied example system prompt is not reliable model metadata.
- **IDs:** `mimo-v2.6-flash`; open checkpoint `XiaomiMiMo/MiMo-V2.6-Flash-RL`; no verified Free Zen ID.
- **Context window:** 1M tokens; 128K maximum output.
- **Modalities:** Text/image/video/audio input, text output; thinking, tools, streaming, web search, structured output and caching.
- **Pricing (as of 2026-10-03):** $0.14 input / $0.28 output / $0.0028 cached input per million. Paid hosted API; self-hosting is not free compute. [Official API card](https://mimo.mi.com/models/en-US/mimo-v2.6-flash).
- **Architecture:** RL checkpoint is MIT-licensed sparse MoE, 309B total / 15B active parameters. [Publisher weights card](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL).

### Raw benchmarks found

Agent / tool use:

- Publisher table, MiMo-V2.6 Flash column: Terminal-Bench 2.1 **87.6%**, Terminal-Bench 4.0 **28.8%**, Toolathlon-Verified **73.6%**, AutomationBench v1.0.6 **52.3%**, OSWorld-Verified **80.8%**, Agents' Last Exam **27.6%**. [Weights card table](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL). Hosted post-training state and RL weights may differ; these are vendor results, not independent replications.
- Tau3/Tau2, GDPval-AA, Claw-Eval/ClawProBench, MCP Atlas and SWE Atlas: no verified public score found for Flash.

Reasoning / knowledge:

- GPQA, HLE, LCR/MLCR, CritPt, AA Intelligence Index, BenchLM and Omniscience: no verified public score found for Flash in reviewed sources. Agent results provide only a provisional reasoning proxy.

Coding:

- DeepSWE v1.1 **67.9%**, ProgramBench **26.0%**, MiMo Code Bench **61.2%** in the publisher table above.
- The [training announcement](https://mimo.mi.com/docs/en-US/news/latest/v2-6) instead reports DeepSWE **65.7%** at the end of the RL run. Keep this checkpoint/evaluation difference explicit.
- SWE-bench Verified/Pro, LiveCodeBench, SciCode and Vibe Code Bench: no verified public score found.

Long context:

- No verified full-window retrieval result found.

## Current normalized scores (1–100)

- **Tool use: 88/100.** Vendor agent results are now supplemented by independent AA automation and terminal measurements; mixed harder-task performance caps confidence.
- **Reasoning: 82/100.** Revised from 80; evidence and rationale are recorded in the dated refresh above.
- **Context window: 95/100.** Million-token capacity meets the size tier, without verified near-perfect retrieval.
- **Multimodal: 95/100.** Native image/video/audio input covers broad understanding; text-only output caps the score.
- **Coding: 88/100.** Revised from 86; evidence and rationale are recorded in the dated refresh above.
- **Cost efficiency: 97/100.** $0.14/$0.28 and low cache pricing offer unusually inexpensive hosted inference.
- **Overall Score: 90/100.** Half-up mean (88 + 82 + 95 + 95 + 88) / 5 = 89.6; cost excluded. See the refresh for the comparison with 89.

---

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-09
- Method: Independent public web research; normalized scores are interpretations, not vendor scores. Reasoning now includes direct independent measurements; checkpoint distinctions are retained.
- Future sources: Add a separate signed findings file alongside this report.
