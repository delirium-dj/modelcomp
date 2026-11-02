# Gemini 3.7 Flash

## Model Card

Google's August 2026 Flash model for fast coding, agents, knowledge work, and multimodal understanding, based on Gemini 3.6 Flash. The OpenRouter model ID is `google/gemini-3.7-flash`. It accepts text, image, speech, and video input and produces text, with a 1,048,576-token context window and 65,536-token output limit. Google offered introductory pricing through the end of 2026 at $0.75 per million input tokens and $3.75 per million output tokens.

## Raw Benchmark Data (as reported)

| Benchmark | Score | Notes |
|-----------|-------|-------|
| Artificial Analysis Intelligence Index | **56** | Source-linked launch evaluation; index version predates current v5.0 |
| GPQA Diamond | **94.5%** | Source-linked reasoning result |
| HLE | **47.9%** | Later source record |
| HLE-Verified | **53.6%** | Revised 1,811-item set; not comparable directly with original HLE |
| ARC-AGI-2 | **84.6%** | Abstract reasoning |
| MRCR-v2 | **97.0% at 128K** | Eight-needle long-context subset |
| Context Arena / GDM-MRCRv2 | **83.0% high / 79.6% medium / 74.5% low** | High-effort AUC: 93.9% at 128K and 78.9% at 1M |
| AA-LCR | **83.0%** | Independent long-context reasoning |
| Terminal-Bench 2.1 | **85.8%** | Launch and best-reported-harness records agree |
| Terminal-Bench 4.0 | **11.2%** | Later, distinct terminal-benchmark version |
| FrontierCode 1.1 Main | **43.6%** | Vendor launch result |
| DeepSWE 1.1 | **65.3% vendor / 65.5% independent medium** | Different runs; independent result reports four whole-benchmark runs |
| CursorBench 3.2 | **61.6% high / 59.0% medium / 53.8% low** | Verified production Cursor harness |
| SciCode | **59.8%** | Scientific coding |
| AutomationBench | **30.4% launch / 52.3% later record** | Different dated runs; not silently reconciled |
| GDPval-AA | **1,527 Elo** | Professional knowledge work |
| AA-Briefcase | **1,113 Elo** | High effort; 36.4% rubric pass rate |
| Tau3-Banking | **35.5% Pass@1** | Agentic banking workflows |
| MMMU-Pro | **85.5%** | High effort, verified |
| LVBench | **85.4%** | Long-video understanding |
| MMVU | **82.3%** | Multidisciplinary video understanding |
| MVBench | **82.2% average accuracy** | Temporal video, speech, and audio understanding |
| CharXiv-R | **88.7% with tools** | Scientific-chart reasoning |
| GDP.pdf | **34.0% strict pass** | Expert PDF comprehension |

## Normalized Scores

- **Tool use: 83/100.**
- **Reasoning: 92/100.**
- **Context window: 93/100.**
- **Multimodal: 93/100.**
- **Coding: 89/100.**
- **Cost efficiency: 94/100.**
- **Overall Score: 90.0/100.**

Provided by: **Kimi K3.1 Pro (Moonshot AI/kimi-k3.1-pro)** — 2026-11-02

## References

- [Google — Introducing Gemini 3.7 Flash](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-3-7-flash/)
- [Google DeepMind — Gemini 3.7 Flash model card](https://deepmind.google/models/model-cards/gemini-3-7-flash/)
- [OpenRouter — Gemini 3.7 Flash API and specifications](https://openrouter.ai/google/gemini-3.7-flash)
- [Artificial Analysis — Gemini 3.7 Flash](https://artificialanalysis.ai/models/gemini-3-7-flash-medium)
- [BenchmarkList — Gemini 3.7 Flash source-linked evaluations](https://benchmarklist.com/models/google-gemini-3.7-flash/)
