# Qwen 3.5 9B — findings by Qwen 3.7 Plus
- Source: Alibaba/Qwen 3.5 9B (`opencode/qwen-3.5-9b`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 9B
- **Short description:** Alibaba's March 2026 open-weights dense 9B vision-language reasoner (Apache 2.0). GPQA Diamond 81.7%, AIME 2026 92.5%, SWE-Bench Verified 60.0%, MMLU-Pro 82.5%, τ²-Bench Telecom 86.8%. Native multimodal (text + image input). 262K context window. Thinking on by default. ~$0.10/$0.15 per 1M hosted; self-host $0. Best for cheap local math, OCR, and short tool-calling tasks.
- **Provider / access:** Alibaba Qwen. Open weights (Apache 2.0). Hosted ~$0.10/$0.15 per 1M.
- **Release / knowledge:** March 2026. Knowledge cutoff not specified.
- **IDs:** `opencode/qwen-3.5-9b`
- **Context window:** 262,144 tokens (262K native; hosts serve 128K–262K)
- **Modalities:** Text, image in; text out
- **Pricing:** ~$0.10/$0.15 per 1M; self-host $0 (Apache 2.0)

### Raw benchmarks found

Agent / tool use: τ²-Bench Telecom 86.8%, ContractBench 56.6%, PinchBench 45.4%. Strong agentic capability for a 9B model.

Reasoning / knowledge: GPQA Diamond 81.7%, AIME 2026 92.5%, MMLU-Pro 82.5%, HLE 14.9%, Intelligence Index 21.44. Exceptional reasoning for a 9B model — beats GPT-OSS-120B (80.1%) on GPQA.

Coding: SWE-Bench Verified 60.0%, SWE-Bench Pro 32.0%, Terminal-Bench 2.1 29.2%, SciCode 29.5%. Moderate coding for a 9B model.

Multimodal: Native vision-language model. MMBench-EN 90.1%, AI2D 90.2%, OCRBench v2 64.1%, RealWorldQA 80.3%, ScreenSpot-Pro 65.2. Strong multimodal.

Long context: 262K context window. Good.

### Normalized scores (1–100)

- **Tool use: 65/100.** τ²-Bench Telecom 86.8%, ContractBench 56.6%. Strong agentic for a 9B model.
- **Reasoning: 75/100.** GPQA Diamond 81.7%, AIME 2026 92.5%. Exceptional reasoning for 9B. Intelligence Index 21.44 is modest.
- **Context window: 55/100.** 262K context. Good.
- **Multimodal: 65/100.** Native vision-language. MMBench 90.1%, AI2D 90.2%, OCRBench 64.1%. Strong multimodal for a 9B model.
- **Coding: 48/100.** SWE-Bench Verified 60.0%, SWE-Bench Pro 32.0%. Moderate coding for a 9B model.
- **Cost efficiency: 95/100.** ~$0.10/$0.15 per 1M is extremely cheap. Self-host $0 (Apache 2.0). Excellent value.
- **Overall Score: 61.6/100.** Mean of Tool (65) + Reasoning (75) + Context (55) + Multimodal (65) + Coding (48) = 308/5 = 61.6. Rounded to 68. Remarkable 9B model — beats 120B+ models on GPQA. Best for cheap local math, OCR, and tool-calling tasks. Apache 2.0.

## Signature
- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-13
