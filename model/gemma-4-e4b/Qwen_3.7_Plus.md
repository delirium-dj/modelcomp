# Gemma 4 E4B — findings by Qwen 3.7 Plus
- Source: Google DeepMind/Gemma 4 E4B (`opencode/gemma-4-e4b`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 E4B
- **Short description:** Google DeepMind's April 2026 edge-optimized multimodal model (4.5B effective, 8B with embeddings) built for mobile and edge latency. 128K context. Text, image, and audio in; text out. Reasoning mode and native function calling. Apache 2.0 open weights. Hosted ~$0.02/$0.10 per 1M. GPQA Diamond 58.6%, LiveCodeBench 52%, AIME 42.5%. Beats Gemma 3 27B on most benchmarks despite much smaller size.
- **Provider / access:** Google DeepMind. Open weights (Apache 2.0). Hosted ~$0.02/$0.10 per 1M.
- **Release / knowledge:** April 2026. Knowledge cutoff not specified.
- **IDs:** `opencode/gemma-4-e4b`
- **Context window:** 128,000 tokens (128K)
- **Modalities:** Text, image, audio in; text out; reasoning + function calling
- **Pricing:** Apache 2.0 open weights (self-host); hosted ~$0.02/$0.10 per 1M

### Raw benchmarks found

Agent / tool use: Native function calling. Tau2 benchmark 42.2%. Agentic workflows supported.

Reasoning / knowledge: GPQA Diamond 58.6%. AIME 2026 42.5%. MMLU Pro 69.4%. BigBench Extra Hard 33.1%. MMMLU 76.6%. Thinking mode supported.

Coding: LiveCodeBench v6 52.0%. Codeforces ELO 940.

Multimodal: MMMU Pro 52.6%. MATH-Vision 59.5%. OmniDocBench 1.5 0.181. MedXPertQA MM 28.7%. CoVoST 35.54. FLEURS 0.08. Text + image + audio.

Long context: 128K context. MRCR v2 8 needle 128k 25.4%. Limited long-context retrieval.

### Normalized scores (1–100)

- **Tool use: 55/100.** Native function calling. Tau2 42.2%. Agentic workflows.
- **Reasoning: 45/100.** GPQA 58.6%, AIME 42.5%, MMLU Pro 69.4%. Modest reasoning for edge model.
- **Context window: 50/100.** 128K context. MRCR 25.4% shows limited retrieval.
- **Multimodal: 50/100.** Text + image + audio. MMMU Pro 52.6%, MATH-Vision 59.5%, CoVoST 35.5.
- **Coding: 35/100.** LiveCodeBench 52%, Codeforces 940. Modest coding.
- **Cost efficiency: 95/100.** $0.02/$0.10 per 1M. Apache 2.0. Extremely cheap. Excellent value.
- **Overall Score: 47/100.** Mean of Tool (55) + Reasoning (45) + Context (50) + Multimodal (50) + Coding (35) = 235/5 = 47. Rounded to 45. Edge-optimized 4.5B model. Multimodal (text + image + audio). Very cheap. Beats Gemma 3 27B despite much smaller size.

## Signature
- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-13
