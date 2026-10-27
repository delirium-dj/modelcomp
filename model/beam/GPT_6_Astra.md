# Beam 1.0 — findings by GPT 6 Astra

- Source: Reflection / Beam-1.0-501B-A23B
- Date: 2026-10-27 (UTC)
- Overview and scoring methodology: [Methodology](../../model-comparison.md)
- Cross-model signed log: [Findings](../../model-findings.md)

## Model card

- **Description:** Open-weight text reasoning model for software engineering and tool workflows. This report covers released Beam 1.0, not earlier preview measurements.
- **Release / cutoff:** Preview October 5; weights released October 16, 2026; knowledge cutoff June 30, 2026.
- **Architecture:** 501.3B total/23.4B active MoE, 52 layers (three dense, 49 MoE), 256 experts, gated GQA/sliding attention, Apache 2.0; BF16, FP8 and NVFP4 releases.
- **IDs / access:** Weights/Together `reflection/Beam-1.0-501B-A23B`; OpenRouter `reflection/beam-1.0-501b-a23b`; Vercel `reflection/beam`; Chat Completions-compatible APIs. Exact live Zen free pricing was not corroborated in the retrieved documentation, so the cost score uses verified paid hosting.
- **Context / output:** 1,048,576 context, 131,072 output on OpenRouter. Vercel lists 1,048,576 maximum output, a conflicting gateway allowance not assumed universal.
- **Modalities:** Text in/out only, reasoning effort control, function calling and structured output; no native image, audio or video.
- **Pricing (2026-10-27):** Together $0.40/$1.20 per million input/output, $0.04 cache read; OpenRouter Nebius $0.25/$1.00, $0.05 cache read. Public-beta access and host promotions are separate from durable list prices.

Sources: [final model card](https://reflection.ai/beam-model-card), [weight release](https://reflection.ai/blog/beam-is-available), [Together](https://www.together.ai/models/reflection-beam), [OpenRouter](https://openrouter.ai/reflection/beam-1.0-501b-a23b), [Vercel](https://vercel.com/ai-gateway/models/beam).

### Raw benchmarks found

**Publisher final BF16 results**, temperature 0.7/top-p 0.99:

- Tools: MCP-Atlas 80.8%, Tau3 Banking 36.1%, BrowseComp with context management 76.8%, DeepSearchQA with context management 80.5%; AutomationBench public split only 39.3%.
- Reasoning: GPQA Diamond 90.6%, HLE no tools 36.0%, HLE with tools 51.1%, CritPt 16.3%, AIME 2026 97.7%.
- Coding: SWE Verified 81.6%, SWE-Pro v1 66.1%, SWE-Pro v2-Hard 76.5%, TB2.1 80.1%, DeepSWE v1.1 43.3%, SWE Atlas Codebase QnA 31.8%, SciCode 49.2%, LiveCodeBench 88.3%.
- Context: AA-LCR 78.2%, LongBench v2 67.5%; no verified 98% retrieval at 512K+.
- Factuality/instructions: Omniscience public-split index 10.8, IFBench 79.6%.

**Precision matters:** NVFP4 final scores include TB2.1 78.4, GPQA 89.3, HLE 34.8, SciCode 46.9, DeepSWE 42.7 and MCP 80.5. Some FP8/NVFP4 figures exceed BF16; the report does not cherry-pick the best precision separately for every dimension.

**Independent AA:** [launch evaluation](https://artificialanalysis.ai/articles/reflection-beam) and [current comparison](https://artificialanalysis.ai/models/comparisons/reflection-beam-vs-nemotron-3-5-super-vl) report Intelligence Index v4.3.2 approximately 30, AutomationBench 48.5%, TB4 3.0%, AA-Briefcase 976 Elo, GDPval-AA v2.1 1177 Elo, SciCode approximately 48%, HLE approximately 35%, CritPt 13.1%, AA-LCR v1.1 approximately 78%. Omniscience accuracy 33%, hallucination rate 47%, net index 1.5 (rounded 2 in comparison). Mirror harness Coding Agent Index 28; this is a model-plus-agent result, not the same metric as TB2.1.

**Independent applied analytics:** [Plotly](https://plotly.com/blog/reflection-beam-1-0-plotly-data-analytics-bench/) reports 36/43 tasks passed (84%), $8.29 total exam cost, approximately 15 model calls/question. It passed all three data-quality tests and all five impossible/ambiguous questions in each category, but only one of five hidden-pattern tasks; unit conversion failures occurred twice. This private synthetic-data exam measures a narrower workload than general coding.

No verified Claw-Eval or Toolathon result found. Vendor public-split AutomationBench/Omniscience cannot substitute for the independent full evaluation.

### Cross-source reconciliation

The [October 5 introduction, updated October 8](https://www.reflection.ai/blog/introducing-beam) has preview SWE Verified 80.9, DeepSWE 44.4 and MCP 78.7; the released precision-specific card supersedes these for checkpoint attribution. [BenchmarkList](https://benchmarklist.com/models/reflection-beam-1.0-501b-a23b/) sometimes picks best scores across formats and repeats vendor measurements, not independent replications.

TB2.1 approximately 80 versus TB4 3 reflects different benchmark generations, not a direct 77-point regression. Strong automation coexists with weak advanced terminal and codebase-QnA results. [AA provider measurements](https://artificialanalysis.ai/models/reflection-beam/providers) identify NVFP4 hosting and show substantial speed/cost variation. AA's approximately $0.12/index task and Plotly's $8.29/exam measure different workloads; token efficiency on one does not guarantee minimal calls on the other.

### Normalized scores (1–100)

- **Tool use: 80/100.** MCP 80.8, banking 36.1 and independent automation 48.5 support strong workflows; TB4 3 and moderate GDPval cap frontier autonomy.
- **Reasoning: 84/100.** GPQA approximately 90 and independent HLE 35/CritPt 13 support strong reasoning; hallucination and public-split discrepancies limit reliability.
- **Context window: 95/100.** Native 1M with independent LCR around 78; no high-recall 512K+ evidence for 100.
- **Multimodal: 15/100.** Text-only input/output; tools do not create native multimodal capabilities.
- **Coding: 84/100.** SWE Verified 81.6 and TB2.1 80.1 are strong; DeepSWE 43.3, Atlas 31.8 and Mirror's independent index 28 cap harder engineering tasks.
- **Cost efficiency: 95/100.** Verified $0.25–0.40 input/$1.00–1.20 output and concise AA traces offer strong value; applied workloads can still incur many calls.
- **Overall Score: 72/100.** (80 + 84 + 95 + 15 + 84) / 5 = 71.6 → 72; efficient text-native coding and agents, with no native vision.

## Signature

- Provided by: **GPT 6 Astra (openai/gpt-6-astra-ultrafast)** — 2026-10-27 UTC
- Method: Four targeted public web searches, final primary card, independent AA and Plotly evaluations, and precision/provider reconciliation; normalized scores are interpretations, not vendor scores.
