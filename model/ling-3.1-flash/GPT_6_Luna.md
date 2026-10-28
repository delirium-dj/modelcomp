# Ling 3.1 Flash — findings by GPT-6 Luna

- Source: inclusionAI/Ling-3.1-flash
- Date: 2026-10-28 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.1 Flash
- **Short description:** inclusionAI's hybrid reasoning MoE for agentic coding, search, office productivity, and long-horizon workflows. The model is open-weight and supports optional reasoning.
- **Provider / access:** Hugging Face weights `inclusionAI/Ling-3.1-flash`; serving with SGLang or vLLM. OpenRouter serves `inclusionai/ling-3.1-flash`.
- **Release / knowledge:** Released 2026-09-29; cutoff not stated.
- **IDs:** `inclusionAI/Ling-3.1-flash` (weights); `inclusionai/ling-3.1-flash` (hosted route).
- **Context window:** 1,000,000 tokens; hosted providers may impose lower limits.
- **Modalities:** Text input/output; hybrid reasoning, tool calling and structured outputs supported. No image/audio/video input documented for this checkpoint.
- **Pricing (as of 2026-10-28):** Open weights; hosting prices vary. OpenRouter catalog rate: $0.075 input, $0.225 output, $0.015 cached input per 1M tokens. Self-hosted inference requires high-end multi-GPU hardware (example: 8×H200).
- **Architecture:** Hybrid-linear MoE, 560B total / 25B active parameters; 63 KDA + 9 Gated MLA layers, 512 routed experts with 8 active and one shared; MIT license.

### Raw benchmarks found

Hugging Face's model page surfaces leaderboard-linked results. These values are from the listed evaluation results; the page does not expose full harness/configuration metadata for each result.

Agent / tool use:

- Terminal-Bench 4.0: **46.03**.
- Terminal-Bench 2.1: **81.18**.
- SkillsBench v1: **68.7**.

Reasoning / knowledge:

- Humanity's Last Exam: **37.44** (Hugging Face result listing).
- No exact GPQA Diamond or Artificial Analysis Intelligence Index score verified.

Coding:

- SWE-bench Pro: **68.74**.
- SWE-bench Multilingual: **88.5**.
- DeepSWE: **59.7**.

Long context:

- 1M-token capacity specified; no MRCR/RULER/GraphWalks retrieval score found.

### Normalized scores (1–100)

- **Tool use: 84/100.** Terminal-Bench 2.1 81.18 and SkillsBench 68.7 are strong; the much lower Terminal-Bench 4.0 score and incomplete harness information cap the rating.
- **Reasoning: 80/100.** HLE 37.44 is positive evidence, but GPQA and an independent broad reasoning index were not verified.
- **Context window: 90/100.** 1M capacity reaches the top tier, but retrieval accuracy at that span is unreported.
- **Multimodal: 15/100.** The checkpoint is documented for text input/output only.
- **Coding: 88/100.** SWE-bench Pro 68.74, multilingual SWE 88.5, and DeepSWE 59.7 indicate strong coding; missing harness detail and Terminal-Bench 4.0 variance cap the score.
- **Cost efficiency: 85/100.** Open weights and low hosted token rates support value, but the large model has a substantial self-hosting hardware footprint.
- **Overall Score: 71/100.** Half-up mean of the five quality dimensions (84+80+90+15+88)/5 = 71.4; strong for hosted or well-provisioned text-agent workloads, not multimodal tasks.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna)** — 2026-10-28
- Method: Public research from the inclusionAI Hugging Face model card and provider listing. Benchmark values retain the source's listed test versions; limited harness details are noted. Normalized scores are independent interpretations.
- Sources: [inclusionAI Ling 3.1 Flash model card](https://huggingface.co/inclusionAI/Ling-3.1-Flash); [OpenRouter listing](https://openrouter.ai/inclusionai/ling-3.1-flash); [models.dev provider catalog](https://models.dev).
