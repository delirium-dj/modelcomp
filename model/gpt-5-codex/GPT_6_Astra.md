# GPT-5-Codex — findings by GPT 6 Astra

- Source: OpenAI / GPT-5-Codex
- Date: 2026-10-27 (UTC)
- Overview and scoring methodology: [Methodology](../../model-comparison.md)
- Cross-model signed log: [Findings](../../model-findings.md)

## Model card

- **Identity:** Coding-specialized GPT-5, distinct from GPT-5.1/5.2/5.3-Codex and the Codex application. Proprietary; parameter count undisclosed.
- **Access:** `gpt-5-codex`, Responses API only. The current [official model page](https://developers.openai.com/api/docs/models/gpt-5-codex) explicitly marks it **Shut down**; documented endpoint support and prices describe the historical service, not assured current availability. No verified Zen Free ID.
- **Release / cutoff:** September 15, 2025 product launch; September 23 API availability; September 30, 2024 knowledge cutoff. The alias was regularly updated, so results need not represent a frozen launch checkpoint.
- **Context:** 400,000 total, 272,000 maximum input, 128,000 maximum output. Conversation compaction is an agent feature rather than unlimited native context.
- **Modalities:** Text/image input, text output; reasoning, function calling, structured output and web search. No native audio/video generation.
- **Historical pricing:** $1.25 input/$10 output/$0.125 cached input per million tokens, recorded on the official page on 2026-10-27. ChatGPT subscription allowances are separate.

### Raw benchmarks and source reconciliation

1. [OpenAI launch](https://openai.com/index/introducing-upgrades-to-codex/) establishes engineering specialization and describes SWE-bench Verified evaluation on all 500 tasks, replacing an earlier 477-task infrastructure-limited evaluation. [BenchGen](https://benchgen.com/models/openai/gpt-5-codex) and [Holter's comparison](https://adam.holter.com/software-engineering-performance-swe-bench-verified-models-compared-sonnet-4-5-vs-gpt-5-codex/) attribute **74.5% SWE-bench Verified** to GPT-5-Codex. The numeric chart was not exposed in the primary text extraction, so this number is secondary reporting of vendor evidence, not an independent reproduction. A Medium review's approximately 77% conflicts and is not used.
2. [Artificial Analysis high-effort comparison](https://artificialanalysis.ai/models/comparisons/gpt-5-5-high-vs-gpt-5-codex) independently reports **HLE 28%, CritPt 5%, AA-Omniscience −8, AA-LCR v1.1 72%**. Omniscience is a signed reliability index, not accuracy. Current Intelligence Index v4.3.2 **25 is estimated**; it is not a measured composite and is not used as one.
3. The same AA table leaves SciCode, current GDPval, AutomationBench and TB4 blank for this model. No verified exact-model Tau2/Tau3, MCP-Atlas, Claw-Eval, Toolathon, DeepSWE, Vibe Code Bench, or quantitative vision result was recovered. Scores of later Codex models and ordinary GPT-5 are not transferred.
4. OpenAI reports 93.7% fewer generated tokens for the bottom decile of employee turns versus GPT-5, while the top decile spends twice as long reasoning. This is vendor-selected production traffic, not a universal cost reduction. Its seven-hour autonomous demonstration likewise is not a reliability percentage.
5. AA records approximately **199.8 tokens/s** and **9.21 seconds** first-answer latency. These are historical endpoint/workload measurements, not availability guarantees after shutdown. [Azure pricing](https://azure.microsoft.com/en-us/pricing/details/azure-openai/) corroborates $1.25/$10, rounding cache pricing to $0.13. An Apidog page quotes $0.25/$2; that is inconsistent with this exact model's primary pricing and is discarded.

### Interpretation

Repository repair and primary descriptions support coding-oriented tool use, but broad-agent coverage is limited. Independent HLE establishes general reasoning beyond branding. Image support and screenshot-based frontend workflows are verified qualitatively; absent vision benchmarks lower confidence. No full-window MRCR/RULER or high-recall 512K+ retrieval result was verified.

### Normalized scores (1–100)

- **Tool use: 68/100.** Repository repair and supported tool workflows justify capable coding agents; missing independent general-agent measurements cap confidence.
- **Reasoning: 77/100.** Independent HLE 28 and CritPt 5 support strong but non-frontier reasoning; negative Omniscience limits reliability.
- **Context window: 79/100.** Documented 400K total with 272K input and LCR 72; not a 512K or 1M model.
- **Multimodal: 65/100.** Verified image input and screenshot workflows; no quantitative vision result or audio/video breadth established.
- **Coding: 77/100.** Reported SWE Verified 74.5 and specialized engineering training support useful repository work; primary numerical extraction and independent coding coverage remain limited.
- **Cost efficiency: 78/100.** Historical $1.25/$10 with caching is reasonable for engineering but output-heavy reasoning is costly; shutdown prevents treating this as a current purchase recommendation.
- **Overall Score: 73/100.** (68 + 77 + 79 + 65 + 77) / 5 = 73.2 → 73. Historical coding specialist with useful reasoning and limited broad multimodal evidence.

## Signature

- Provided by: **GPT 6 Astra (openai/gpt-6-astra-ultrafast)** — 2026-10-27 UTC
- Method: Three targeted public web searches followed by primary documentation, launch-page and independent evaluator retrieval; scores are normalized interpretations, not official benchmark percentages.
