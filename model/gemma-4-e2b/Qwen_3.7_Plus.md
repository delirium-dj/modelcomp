# Gemma 4 E2B — findings by Qwen 3.7 Plus
- Source: Google DeepMind/Gemma 4 E2B (`opencode/gemma-4-e2b`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 E2B
- **Short description:** Google DeepMind's April 2026 2.3B-effective edge variant of Gemma 4 (5.1B with embeddings) for phones, laptops and Jetson/Pi-class hardware. 128K context. Text, image, audio in; text out. Native multimodal (image + audio). Apache 2.0. Hosted ~$0.04/$0.08 per 1M. GPQA Diamond 43.4%, LiveCodeBench 44%, AIME 37.5%. Smallest Gemma 4 model.
- **Provider / access:** Google DeepMind. Open weights (Apache 2.0). Hosted ~$0.04/$0.08 per 1M.
- **Release / knowledge:** April 2026. Knowledge cutoff not specified.
- **IDs:** `opencode/gemma-4-e2b`
- **Context window:** 128,000 tokens (128K)
- **Modalities:** Text, image, audio in; text out; no function calling on E2B
- **Pricing:** Apache 2.0 (self-host); hosted ~$0.04/$0.08 per 1M

### Raw benchmarks found

Agent / tool use: No native function calling on E2B. Tau2 benchmark 24.5%.

Reasoning / knowledge: GPQA Diamond 43.4%. AIME 2026 37.5%. MMLU Pro 60.0%. BigBench Extra Hard 21.9%. MMMLU 67.4%.

Coding: LiveCodeBench v6 44.0%. Codeforces ELO 633.

Multimodal: MMMU Pro 44.2%. MATH-Vision 52.4%. OmniDocBench 1.5 0.290. MedXPertQA MM 23.5%. CoVoST 33.47. FLEURS 0.09. Text + image + audio.

Long context: 128K context. MRCR v2 8 needle 128k 19.1%. Limited retrieval.

### Normalized scores (1–100)

- **Tool use: 35/100.** No native function calling on E2B. Tau2 24.5%.
- **Reasoning: 35/100.** GPQA 43.4%, AIME 37.5%, MMLU Pro 60%. Small model.
- **Context window: 50/100.** 128K context. MRCR 19.1% shows limited retrieval.
- **Multimodal: 40/100.** Text + image + audio. MMMU Pro 44.2%, MATH-Vision 52.4%.
- **Coding: 30/100.** LiveCodeBench 44%, Codeforces 633. Small model.
- **Cost efficiency: 95/100.** $0.04/$0.08 per 1M. Apache 2.0. Extremely cheap.
- **Overall Score: 38/100.** Mean of Tool (35) + Reasoning (35) + Context (50) + Multimodal (40) + Coding (30) = 190/5 = 38. Rounded to 35. Smallest Gemma 4. 2.3B effective. Edge device model. Multimodal. Very cheap.

## Signature
- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-13
