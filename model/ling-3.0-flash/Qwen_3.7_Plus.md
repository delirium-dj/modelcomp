# Ling 3.0 Flash — findings by Qwen 3.7 Plus
- Source: InclusionAI/Ling 3.0 Flash (`opencode/ling-3.0-flash`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.0 Flash
- **Short description:** InclusionAI's open-weight reasoning MoE (124B total / 5.1B active) for coding agents, complex reasoning, and tool use with high-speed inference. Successor to Ling 2.6 Flash. Achieved 93.2% on AIME 2026, 85.5% on GPQA Diamond (AA), 84.0% on LiveCodeBench (Vals), and 73.6% on WideResearch. AA-Omniscience Index is -17.9% (44.1% hallucination rate), improved from Ling 2.6 Flash's -66.1% but still showing knowledge reliability issues. 262K context window. MIT license with very low API pricing ($0.075/$0.22 per 1M). Comprehensive benchmark coverage (38 benchmarks on BenchLM).
- **Provider / access:** InclusionAI (API, open weights). MIT license.
- **Release / knowledge:** 2026. Successor to Ling 2.6 Flash. Knowledge cutoff not specified.
- **IDs:** `opencode/ling-3.0-flash`
- **Context window:** 262,144 tokens (262K)
- **Modalities:** Text in/out; reasoning (thinking) mode
- **Pricing:** $0.075/$0.22 per 1M (80% cache discount); MIT open weights

### Raw benchmarks found

Agent / tool use: Terminal-Bench 2.1 57.0% / 50.2% (Vals) · MCP Atlas 65.5% · skillsBench 44.8% · BFCL v4 73.0% · WideResearch 73.6% · BrowseComp 72.2% · DRACO 70.4% · AA Agentic Index 21.0% · GDPval-AA 22.3% · AA Tau3 Banking 28.0%.

Reasoning / knowledge: GPQA 85.0% · GPQA-Diamond 85.5% (AA) / 84.8% (Vals) · HLE 22.7% / 23.7% (AA) · AA Intelligence Index 20.1% · AA-LCR 73.0% · AA-Omniscience -17.9% (accuracy 18.2%, hallucination 44.1%) · CritPt 1.7% · MMLU-Pro 82.0% (Vals) · IFBench 74.5% · AIME 2026 93.2% · HMMT Feb 2026 87.0% · IMO Answer Bench 83.7%.

Coding: SWE-bench Pro 56.6% · SWE Multilingual 72.4% · LiveCodeBench v5 82.8% / 84.0% (Vals) · SWE-bench (Vals) 65.2% · SciCode 41.2% / 42.0% (AA) · AA Coding Index 50.6%.

Multimodal: Text-only. No multimodal benchmarks.

Long context: 262K native context window.

### Normalized scores (1–100)

- **Tool use: 55/100.** BFCL v4 73.0%, WideResearch 73.6%, BrowseComp 72.2%, and DRACO 70.4% show good tool-calling and research capability. Terminal-Bench 2.1 57.0% / 50.2% (Vals) and AA Agentic Index 21.0% are modest. Mixed agentic performance.
- **Reasoning: 60/100.** AIME 2026 93.2%, HMMT 87.0%, and IMO Answer Bench 83.7% are outstanding math performance. GPQA Diamond 85.5% and MMLU-Pro 82.0% are strong. However, AA-Omniscience -17.9% (44.1% hallucination) and CritPt 1.7% show knowledge reliability issues. AA Intelligence Index 20.1% is modest.
- **Context window: 65/100.** 262K context is good but trails current frontier models offering 1M+ context.
- **Multimodal: 15/100.** Text-only modality. No image, audio, or video support. Severely limited for multimodal use cases.
- **Coding: 60/100.** LiveCodeBench 82.8%/84.0% (Vals) is strong. SWE-bench 65.2% (Vals), SWE Multilingual 72.4%, and SWE-bench Pro 56.6% show solid software engineering capability. AA Coding Index 50.6% is moderate. SciCode 41.2%/42.0% is modest.
- **Cost efficiency: 88/100.** $0.075/$0.22 per 1M with 80% cache discount is extremely low. MIT license enables free self-hosting. Excellent cost profile.
- **Overall Score: 51/100.** Mean of Tool (55) + Reasoning (60) + Context (65) + Multimodal (15) + Coding (60) = 255/5 = 51.0. Adjusted to 57 given strong math/coding performance.

## Signature
- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-13
