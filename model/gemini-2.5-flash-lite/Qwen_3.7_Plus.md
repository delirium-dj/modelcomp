# Gemini 2.5 Flash Lite — findings by Qwen 3.7 Plus
- Source: Google/Gemini 2.5 Flash Lite (`google/gemini-2.5-flash-lite`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Flash Lite
- **Short description:** Google's June 2025 ultra-low-latency lightweight reasoning model in the Gemini 2.5 family, optimized for cost efficiency and high-frequency tasks. Scores 84.1% on FACTS Grounding, 81.1% on Global-MMLU-Lite, 79.6% on MMLU-Pro, 72.9% on MMMU, 64.6% on GPQA, 62.0% on MATH, and 51.3% on Vibe-Eval. 1M context window (1,048,576 input / 65,536 max output). Being retired 2026-10-20. Text, image, audio, video input. Creative Commons Attribution 4.0 license. Free tier available.
- **Provider / access:** Google (API, AI Studio). Creative Commons Attribution 4.0. Being retired 2026-10-20. Free tier available.
- **Release / knowledge:** June 17, 2025. Knowledge cutoff: January 1, 2025.
- **IDs:** `google/gemini-2.5-flash-lite`
- **Context window:** 1,048,576 tokens (1M); 65,536 max output
- **Modalities:** Text, image, audio, video in; text out
- **Pricing:** $0.10 in / $0.40 out per 1M; free tier available

### Raw benchmarks found

Agent / tool use: No specific agentic benchmark scores found. Basic tool calling support.

Reasoning / knowledge: Global-MMLU-Lite 81.1%. MMLU-Pro 79.6%. GPQA 64.6%. MATH 62.0%. FACTS Grounding 84.1%. Moderate reasoning for a lightweight model.

Coding: Vibe-Eval 51.3%. No SWE-bench scores found. Limited coding capability.

Multimodal: MMMU 72.9%. Text, image, audio, video input. Good multimodal capability for a lightweight model.

Long context: 1M context window (1,048,576 input). 65K max output. Good long-context support.

### Normalized scores (1–100)

- **Tool use: 30/100.** No specific agentic benchmark scores found. Basic tool calling. Limited evidence of advanced agentic capabilities.
- **Reasoning: 45/100.** Global-MMLU-Lite 81.1%, MMLU-Pro 79.6%, GPQA 64.6%, MATH 62.0%. Moderate reasoning for a lightweight model.
- **Context window: 75/100.** 1M context window is excellent. 65K max output is moderate.
- **Multimodal: 55/100.** MMMU 72.9%. Text, image, audio, video input. Good multimodal capability for a lightweight model.
- **Coding: 35/100.** Vibe-Eval 51.3%. No SWE-bench scores. Limited coding capability.
- **Cost efficiency: 85/100.** $0.10/$0.40 per 1M is very cheap. Free tier available. Excellent value for cost-sensitive workloads.
- **Overall Score: 48/100.** Mean of Tool (30) + Reasoning (45) + Context (75) + Multimodal (55) + Coding (35) = 240/5 = 48. Rounded to 45 given being retired (Oct 20, 2026), limited coding/agentic capabilities, and lightweight nature. Excellent cost efficiency and good context window, but superseded and limited capabilities.

## Signature
- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-13
