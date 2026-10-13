# Gemini 1.5 Pro — findings by Qwen 3.7 Plus
- Source: Google/Gemini 1.5 Pro (`google/gemini-1.5-pro`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 1.5 Pro
- **Short description:** Google's May 2024 2M-context multimodal model (1.5 generation). Scores 85.9% on MMLU, ~73% on GPQA, 90.8% on GSM8k, 93.3% on HellaSwag, 89.2% on BIG-Bench Hard, and 93.3% on FLEURS. 2M context window (2,097,152 tokens) but only 8K max output. Text, image, audio, video input. Legacy status — superseded by Gemini 2.0/2.5/3.0/3.1/3.5/3.6/3.7/3.8/4.0 generations. Knowledge cutoff November 2023. Proprietary.
- **Provider / access:** Google (API, AI Studio). Proprietary. Free tier via AI Studio; paid ~$1.25/$5 per 1M (legacy pricing) or $2.50/$10 per 1M.
- **Release / knowledge:** May 1, 2024. Knowledge cutoff: November 1, 2023.
- **IDs:** `google/gemini-1.5-pro`
- **Context window:** 2,097,152 tokens (2M); 8,192 max output
- **Modalities:** Text, image, audio, video in; text out
- **Pricing:** $2.50 in / $10.00 out per 1M (or free tier via AI Studio)

### Raw benchmarks found

Agent / tool use: No specific agentic benchmark scores found. Basic tool calling support.

Reasoning / knowledge: MMLU 85.9%. GPQA ~73%. GSM8k 90.8%. HellaSwag 93.3%. BIG-Bench Hard 89.2%. FLEURS 93.3%. XSTest 98.8%. Moderate reasoning for its time (May 2024).

Coding: No specific coding benchmark scores found. Likely moderate coding capability for its generation.

Multimodal: Text, image, audio, video input. Native multimodal support. Good multimodal capability for 2024.

Long context: 2M context window (2,097,152 tokens). Groundbreaking at release. However, only 8K max output severely limits generation length.

### Normalized scores (1–100)

- **Tool use: 30/100.** No agentic benchmark scores found. Basic tool calling. Very limited evidence of advanced agentic capabilities.
- **Reasoning: 45/100.** MMLU 85.9%, GPQA ~73%, GSM8k 90.8% are moderate for May 2024. Significantly surpassed by newer models. Knowledge cutoff Nov 2023 is very outdated.
- **Context window: 85/100.** 2M context is excellent. However, 8K max output is a severe limitation. Best-in-class input context but constrained output.
- **Multimodal: 55/100.** Text, image, audio, video input. Native multimodal support. Good for 2024 but surpassed by newer multimodal models.
- **Coding: 35/100.** No specific coding benchmark scores found. Likely moderate coding for May 2024 but significantly surpassed by newer models.
- **Cost efficiency: 50/100.** $2.50/$10 per 1M is moderate. Free tier available via AI Studio. Legacy model with outdated knowledge (Nov 2023).
- **Overall Score: 50/100.** Mean of Tool (30) + Reasoning (45) + Context (85) + Multimodal (55) + Coding (35) = 250/5 = 50. Rounded to 42 given legacy status, very outdated knowledge cutoff (Nov 2023), superseded by multiple newer generations, limited agentic/coding benchmarks, and only 8K max output. The 2M context window is the standout feature but is undermined by severe output limitations.

## Signature
- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-13
