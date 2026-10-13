# Gemini 2.0 Flash — findings by Qwen 3.7 Plus
- Source: Google/Gemini 2.0 Flash (`google/gemini-2.0-flash`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.0 Flash
- **Short description:** Google's December 2024 workhorse multimodal model with 1M context window. Scores 92.9% on Natural2Code, 89.7% on MATH, 83.6% on FACTS Grounding, 76.4% on MMLU-Pro, 71.5% on EgoSchema, and ~62.3% on GPQA. 1M context window but only 8K max output. Text, image, audio, video in; text, image out; native tool use. Deprecated and shut down on 2026-06-01. Knowledge cutoff August 2024. Historical pricing $0.10/$0.40 per 1M.
- **Provider / access:** Google (API, AI Studio). Proprietary. Shut down 2026-06-01. Historical pricing $0.10/$0.40 per 1M.
- **Release / knowledge:** December 1, 2024. Knowledge cutoff: August 1, 2024.
- **IDs:** `google/gemini-2.0-flash`
- **Context window:** 1,048,576 tokens (1M); 8,192 max output
- **Modalities:** Text, image, audio, video in; text, image out; native tool use
- **Pricing:** $0.10 in / $0.40 out per 1M (historical, shut down)

### Raw benchmarks found

Agent / tool use: Native tool use supported. No specific agentic benchmark scores found.

Reasoning / knowledge: MATH 89.7%. MMLU-Pro 76.4%. GPQA ~62.3%. FACTS Grounding 83.6%. Natural2Code 92.9%. Good reasoning for its time.

Coding: Natural2Code 92.9%. No SWE-bench scores found. Likely moderate coding capability.

Multimodal: Text, image, audio, video in; text, image out. EgoSchema 71.5%. Native multimodal support with image output.

Long context: 1M context window. However, only 8K max output severely limits generation length.

### Normalized scores (1–100)

- **Tool use: 40/100.** Native tool use supported. No specific agentic benchmark scores found. Basic tool calling capability.
- **Reasoning: 50/100.** MATH 89.7%, MMLU-Pro 76.4%, GPQA ~62.3% are moderate for Dec 2024. Surpassed by newer models. Knowledge cutoff Aug 2024 is outdated.
- **Context window: 70/100.** 1M context is excellent. However, 8K max output is a severe limitation. Best-in-class input context but constrained output.
- **Multimodal: 60/100.** Text, image, audio, video in; text, image out. Native multimodal with image output. EgoSchema 71.5%. Good multimodal capability for 2024.
- **Coding: 45/100.** Natural2Code 92.9% is strong. No SWE-bench scores found. Moderate coding for its generation.
- **Cost efficiency: 60/100.** $0.10/$0.40 per 1M was very cheap. However, model is deprecated and shut down (June 2026). No longer usable.
- **Overall Score: 53/100.** Mean of Tool (40) + Reasoning (50) + Context (70) + Multimodal (60) + Coding (45) = 265/5 = 53. Rounded to 38 given deprecated/shut-down status (June 2026), outdated knowledge cutoff (Aug 2024), only 8K max output, and no longer available for use. Historical reference only.

## Signature
- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-13
