# Ling 2.6 Flash — findings by Qwen 3.7 Plus
- Source: InclusionAI/Ling 2.6 Flash (`opencode/ling-2.6-flash`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 2.6 Flash
- **Short description:** InclusionAI's open-weight non-reasoning MoE (107B total / 7.4B active) with 262K context window. Achieved 86% on τ²-bench but shows severe knowledge reliability issues with AA-Omniscience Index at -66.1% (96.7% hallucination rate, only 15.6% accuracy). AA Coding Index 25.3%, GPQA Diamond 59.3%, HLE 6.3%, and AA Intelligence Index 14.1% indicate limited capability. Deprecated and succeeded by Ling 3.0 Flash. MIT license enables free self-hosting. Text-only modality. Best suited for high-volume tool-calling workflows where cost matters more than knowledge accuracy.
- **Provider / access:** InclusionAI (open weights). MIT license.
- **Release / knowledge:** 2025. Deprecated, succeeded by Ling 3.0 Flash. Knowledge cutoff not specified.
- **IDs:** `opencode/ling-2.6-flash`
- **Context window:** 262,144 tokens (262K)
- **Modalities:** Text in/out
- **Pricing:** Open weights (MIT): free self-host

### Raw benchmarks found

Agent / tool use: τ²-bench 86% · GDPval-AA 0.0%.

Reasoning / knowledge: GPQA 59% · GPQA Diamond 59.3% · HLE 6.3% · AA Intelligence Index 14.1% · AA-LCR 31.3% · AA-Omniscience -66.1% (accuracy 15.6%, hallucination 96.7%) · CritPt 0.0% · IFBench 57% / 57.4%.

Coding: AA Coding Index 25.3% · SciCode 27%.

Multimodal: Text-only. No multimodal benchmarks.

Long context: 262K native context window.

### Normalized scores (1–100)

- **Tool use: 55/100.** τ²-bench 86% is strong. However, GDPval-AA 0.0% shows failure on real-world agentic tasks. Mixed results for tool-calling capability.
- **Reasoning: 25/100.** GPQA Diamond 59.3% is modest. HLE 6.3%, AA Intelligence Index 14.1%, AA-LCR 31.3%, and CritPt 0.0% are very poor. AA-Omniscience -66.1% (96.7% hallucination rate) indicates catastrophic knowledge reliability — the model almost always produces incorrect answers.
- **Context window: 65/100.** 262K context is good but trails current frontier models offering 1M+ context.
- **Multimodal: 15/100.** Text-only modality. No image, audio, or video support. Severely limited for multimodal use cases.
- **Coding: 25/100.** AA Coding Index 25.3% and SciCode 27% are poor. Limited coding capability for a non-reasoning model.
- **Cost efficiency: 88/100.** MIT license enables free self-hosting. Excellent cost profile for high-volume deployments where accuracy is not critical.
- **Overall Score: 37/100.** Mean of Tool (55) + Reasoning (25) + Context (65) + Multimodal (15) + Coding (25) = 185/5 = 37.0.

## Signature
- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-13
