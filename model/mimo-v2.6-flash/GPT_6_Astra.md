# MiMo-V2.6-Flash — findings by GPT 6 Astra

- Source: Xiaomi / MiMo-V2.6-Flash
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: [methodology](../../model-comparison.md)
- Cross-model signed log: [findings](../../model-findings.md)

## Model card

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

### Normalized scores (1–100)

- **Tool use: 88/100.** Terminal 2.1, Toolathlon and OSWorld support strong agents; vendor-only evidence and weaker Terminal 4.0 cap confidence.
- **Reasoning: 80/100.** Provisional estimate from complex agent/coding performance; independent scientific reasoning evidence is missing.
- **Context window: 95/100.** Million-token capacity meets the size tier, without verified near-perfect retrieval.
- **Multimodal: 95/100.** Native image/video/audio input covers broad understanding; text-only output caps the score.
- **Coding: 86/100.** DeepSWE and ProgramBench support strong coding, with checkpoint ambiguity and no independent corroboration.
- **Cost efficiency: 97/100.** $0.14/$0.28 and low cache pricing offer unusually inexpensive hosted inference.
- **Overall Score: 89/100.** Half-up mean of 88, 80, 95, 95 and 86 is 89; attractive for high-volume multimodal agent workloads.

---

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-03
- Method: Independent public web research; normalized scores are interpretations, not vendor scores. Reasoning is provisional and checkpoint distinctions are retained.
- Future sources: Add a separate signed findings file alongside this report.
