# GPT-OSS 120B — findings by Qwen 3.7 Plus
- Source: OpenAI/GPT-OSS 120B (`opencode/gpt-oss-120b`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-OSS 120B
- **Short description:** OpenAI's August 2025 open-weights flagship reasoning MoE (117B total, 5.1B active, Apache 2.0) running on a single 80GB GPU. 128K context. Text in/out only with reasoning and tool calls. Near-parity with o4-mini on core reasoning benchmarks. AIME 2024 95.8%, GPQA 80.1%, SWE-bench 62.4%. Best as a near-free self-hosted reasoning and coding workhorse. Hosted ~$0.04/$0.18 per 1M.
- **Provider / access:** OpenAI. Open weights (Apache 2.0). Self-host $0 (single 80GB GPU). Hosted ~$0.04/$0.18 per 1M.
- **Release / knowledge:** August 2025. Knowledge cutoff not specified.
- **IDs:** `opencode/gpt-oss-120b`
- **Context window:** 128,000 tokens (128K)
- **Modalities:** Text in/out only; reasoning; tool calls; no vision/audio
- **Pricing:** Apache 2.0 (self-host $0); hosted ~$0.04/$0.18 per 1M

### Raw benchmarks found

Agent / tool use: τ²-bench 65.8%. IFBench 69.0%. AA Agentic Index 6.2%. Native tool calls.

Reasoning / knowledge: MMLU 90%. GPQA 80.1% (Diamond 78.2%). AIME 2024 95.8%. AIME 2025 92.5%. HLE 14.9%. "Near-parity with o4-mini on core reasoning benchmarks."

Coding: SWE-bench Verified 62.4%. React Native Evals 71.6%. AA Coding Index 30.4%. AA-SciCode 34.0%.

Multimodal: Text in/out only. No vision/audio. Design Arena Website 972.

Long context: 128K context. AA-LCR 52.0%.

### Normalized scores (1–100)

- **Tool use: 60/100.** τ²-bench 65.8%, IFBench 69.0%. Native tool calls.
- **Reasoning: 70/100.** MMLU 90%, GPQA 80.1%, AIME 2024 95.8%. Strong reasoning. Near o4-mini.
- **Context window: 45/100.** 128K context. AA-LCR 52.0%.
- **Multimodal: 15/100.** Text in/out only. No vision/audio.
- **Coding: 55/100.** SWE-bench 62.4%, React Native 71.6%. AA Coding Index 30.4%.
- **Cost efficiency: 92/100.** Apache 2.0. Self-host $0 on single 80GB GPU. Hosted $0.04/$0.18. Near-free.
- **Overall Score: 49/100.** Mean of Tool (60) + Reasoning (70) + Context (45) + Multimodal (15) + Coding (55) = 245/5 = 49. Rounded to 55. Open-weight flagship MoE. Near o4-mini reasoning. Runs on single GPU. Very cheap. No multimodal.

## Signature
- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-13
