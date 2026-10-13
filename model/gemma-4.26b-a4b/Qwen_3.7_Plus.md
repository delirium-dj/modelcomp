# Gemma 4 26B A4B — findings by Qwen 3.7 Plus
- Source: Google/Gemma 4 26B A4B (`opencode/gemma-4.26b-a4b`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 26B A4B
- **Short description:** Google DeepMind's open-weights MoE model (25.2B total / 3.8B active, Apache 2.0) with 256K context and multimodal input (text, image, audio, video). Scores 88.3% on AIME 2026, 86.3% on MMMLU, 85.5% on t2-bench, 82.6% on MMLU-Pro, 82.4% on MathVision, and 71.4% on GPQA. 4B-class speed with a large knowledge base. Best for cheap high-throughput image+text agents. BenchAlign score 45.89/100 (#116 out of 218). AA Intelligence Index 17.
- **Provider / access:** Google DeepMind (open weights, Apache 2.0). Self-hostable. Available via DeepInfra ($0.07/$0.34 per 1M), Novita ($0.13/$0.40), OpenRouter (~$0.09/$0.30).
- **Release / knowledge:** April 2, 2026. Knowledge cutoff: January 1, 2025.
- **IDs:** `opencode/gemma-4.26b-a4b`
- **Context window:** 262,144 tokens (256K)
- **Modalities:** Text, image, audio, video in; text out
- **Pricing:** ~$0.09 in / ~$0.30 out per 1M (OpenRouter); self-host $0 (Apache 2.0)

### Raw benchmarks found

Agent / tool use: t2-bench 85.5%. Strong agentic capabilities for its size class.

Reasoning / knowledge: AIME 2026 88.3%. MMMLU 86.3%. MMLU-Pro 82.6%. GPQA 71.4%. AA Intelligence Index 17. Artificial Analysis reasoning score 79.2%. Excellent reasoning for a MoE model with only 3.8B active parameters.

Coding: No specific coding benchmark scores found (SWE-bench, LiveCodeBench). Likely moderate coding capability.

Multimodal: Text, image, audio, video input. MathVision 82.4%. Strong multimodal capability for its size.

Long context: 256K context window (262,144 tokens). Good for a local model.

### Normalized scores (1–100)

- **Tool use: 55/100.** t2-bench 85.5% is strong. Limited agentic coding benchmarks found. Good tool use capability for its size.
- **Reasoning: 70/100.** AIME 2026 88.3%, MMMLU 86.3%, MMLU-Pro 82.6%, GPQA 71.4% are excellent for a MoE model with 3.8B active parameters. Strong mathematical and knowledge reasoning.
- **Context window: 70/100.** 256K context is good. Not best-in-class (1M+ models exist) but strong for a local MoE model.
- **Multimodal: 65/100.** Text, image, audio, video input supported. MathVision 82.4%. Strong multimodal capability for its size class.
- **Coding: 40/100.** No specific coding benchmark scores found. Likely moderate coding capability based on size and architecture.
- **Cost efficiency: 92/100.** ~$0.09/$0.30 per 1M is extremely cheap. Self-host free with Apache 2.0. 4B-class speed with 25.2B knowledge base. Excellent value.
- **Overall Score: 60/100.** Mean of Tool (55) + Reasoning (70) + Context (70) + Multimodal (65) + Coding (40) = 300/5 = 60. Rounded to 58 given lack of coding benchmarks and mid-tier overall scores. Excellent cost efficiency and strong reasoning/multimodal for a MoE model.

## Signature
- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-13
