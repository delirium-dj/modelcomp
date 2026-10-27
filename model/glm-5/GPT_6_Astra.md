# GLM-5 — findings by GPT 6 Astra

- Source: Z.ai / GLM-5
- Date: 2026-10-27 (UTC)
- Overview and scoring methodology: [Methodology](../../model-comparison.md)
- Cross-model signed log: [Findings](../../model-findings.md)

## Model card

- **Identity:** Open-weight text agent model, distinct from GLM-5.1, GLM-5.2 and GLM-5V-Turbo. February 2026 release; exact launch day and knowledge cutoff not independently resolved here.
- **Architecture:** 744B total/40B activated MoE, DeepSeek Sparse Attention, 28.5T pretraining tokens, asynchronous Slime reinforcement-learning framework. [Official guide](https://docs.z.ai/guides/llm/glm-5) and [technical report](https://arxiv.org/html/2602.15763v1). Weight redistribution terms should be checked in the checkpoint license rather than inferred from the phrase open source.
- **Access:** `glm-5` at `https://api.z.ai/api/paas/v4/chat/completions`; OpenRouter `z-ai/glm-5`, open-weight hosting. No distinct Zen Free ID verified.
- **Context / output:** Official 200K context/128K output. Generic Z.ai marketing of up to 1M covers newer models and does not override this model's specification.
- **Modalities:** Text in/out, thinking toggle, streaming, function calling, caching and structured output. GLM-5V-Turbo's vision belongs to a separate model.
- **Pricing (2026-10-27):** $1 input/$3.20 output per million, corroborated by [OpenRouter-linked calculator](https://explainx.ai/models/z-ai/glm-5/cost) and [Puter's September pricing review](https://developer.puter.com/tutorials/zai-glm-api-pricing/), which gives $0.20 cached input. This is secondary pricing corroboration; plan quotas and host prices can differ.

### Raw benchmarks and assessment

- **Official engineering:** SWE-bench Verified **77.8%**, Terminal-Bench 2.0 **56.2%**, directly stated in the model guide. These support coding and tool execution rather than guaranteeing fully autonomous engineering.
- **Vendor reasoning as summarized by [HF technical overview](https://huggingface.co/blog/mlabonne/glm-5):** GPQA Diamond **86.0%**, AIME 2026 **92.7%**. This is secondary reporting of vendor tests, not an independent replication.
- **Independent [AA reasoning comparison](https://artificialanalysis.ai/models/comparisons/glm-5-vs-qwen3-vl-32b-reasoning):** HLE **29%**, CritPt **2%**, AA-Omniscience **0**, AA-LCR v1.1 **76%**. Omniscience is an index, not zero factual accuracy.
- **Independent [Vals](https://www.vals.ai/models/zai_glm-5-thinking):** exact-model evaluations exist, but the retrieved extract did not expose numeric results. Its methodology specifies temperature 0.7 and 16K maximum output on SWE Verified/8K on TB2.0. Its split and token budget therefore cannot be presumed identical to vendor evaluation.
- **Independent [LayerLens](https://layerlens.ai/blog/glm-5-benchmark-review):** describes 20 runs across 13 benchmarks and score changes between February and March. Retrieved text did not establish an unambiguous model/result pair for every percentage; no unlabeled numbers imported.

Official claims of leading MCP-Atlas, BrowseComp and Tau2 performance were visible, but their image-only numerical chart was not recovered. No verified numerical exact-model Claw-Eval, Toolathon, DeepSWE, Vibe Code Bench or full-window retrieval score found. Tool-assisted HLE claims are not substituted for AA's unaided HLE. The technical report's appendix **base-model** MMLU/BBH results describe a different training stage and are not assigned to this instruction checkpoint. Later GLM-5.2 tables dominating search results were excluded from this model's evidence.

### Normalized scores (1–100)

- **Tool use: 69/100.** TB2.0 56.2 and repository repair support useful agents; missing recovered general-tool numerical coverage caps confidence.
- **Reasoning: 79/100.** GPQA 86 and independent HLE 29 support strong reasoning; CritPt 2 limits research-level claims.
- **Context window: 71/100.** Native 200K and independent LCR 76; neither 1M capacity nor lossless full-window retrieval established.
- **Multimodal: 15/100.** Text-only native model.
- **Coding: 78/100.** Verified 77.8 and terminal 56.2 support strong assistance and moderate autonomy; independent harness differences matter.
- **Cost efficiency: 88/100.** Referenced $1/$3.20 with caching is attractive for large-model engineering; reasoning-token and hosting costs remain workload-dependent.
- **Overall Score: 62/100.** (69 + 79 + 71 + 15 + 78) / 5 = 62.4 → 62. Capable text reasoning/coding with limited native modality breadth.

## Signature

- Provided by: **GPT 6 Astra (openai/gpt-6-astra-ultrafast)** — 2026-10-27 UTC
- Method: Three initial targeted searches, focused independent searches and direct primary specification retrieval; normalized scores are interpretations.
