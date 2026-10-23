# GLM-4.6V-Flash — findings by GPT-5.6 Luna

- Source: Z.AI/zai-org/GLM-4.6V-Flash
- Date: 2026-10-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-4.6V-Flash
- **Short description:** Z.AI's lightweight open multimodal GLM-4.6V checkpoint for local, low-latency image, video, and document understanding. It is a distinct 9B Flash member, not the 106B GLM-4.6V flagship, the GLM-4.6V-FlashX serving tier, or the text-only GLM-4.6 family.
- **Provider / access:** Z.AI's VLM documentation lists the exact `GLM-4.6V-Flash` model as a completely free tier; the documented local access path is the Hugging Face checkpoint [`zai-org/GLM-4.6V-Flash`](https://huggingface.co/zai-org/GLM-4.6V-Flash). The Z.AI quick-start examples use the family ID `glm-4.6v`, so I do not infer a separate hosted API route for Flash from those examples.
- **Release / knowledge:** 2025-12-08 release date shown on the official Hugging Face model card; knowledge cutoff not published.
- **IDs:** `zai-org/GLM-4.6V-Flash` (weights); official Z.AI documentation name `GLM-4.6V-Flash`.
- **Context window:** 128K tokens, verified by [Z.AI's GLM-4.6V documentation](https://docs.z.ai/guides/vlm/glm-4.6v) and the independent [LLMDB entry](https://llmdb.com/models/glm-4-6v-flash). LLMDB specifies 131,072 tokens; separate input/max-output limits were not published.
- **Modalities:** Image, video, text, and file input; text output; native multimodal function calling and visual tool-use are documented by Z.AI. No audio input or non-text output was verified.
- **Pricing (as of 2026-10-23):** Z.AI labels the exact Flash tier “Completely Free” in its [official VLM documentation](https://docs.z.ai/guides/vlm/glm-4.6v); no separate paid rate card for this exact checkpoint was verified. Self-hosted weights are MIT licensed.
- **Architecture:** Z.AI describes the model as a 9B lightweight member of the GLM-4.6V series; the [Hugging Face card](https://huggingface.co/zai-org/GLM-4.6V-Flash) exposes BF16 weights and reports a 10B model-size field. The discrepancy is a parameter-counting/UI convention, not evidence of a second model.

### Raw benchmarks found

> Numbers below are for the exact `zai-org/GLM-4.6V-Flash` checkpoint. The ExtractBench results were independently run by LlamaIndex and added to the model card's evaluation metadata; they are not results for GLM-4.6V, GLM-4.6V-FlashX, GLM-4.6-Flash, or another GLM variant.

Agent / tool use:

- Native multimodal function calling: capability documented, but **no verified public agent benchmark score found** for the exact Flash ID ([Z.AI docs](https://docs.z.ai/guides/vlm/glm-4.6v)).
- Terminal-Bench 2.1: **no verified public score found**.
- Tau3-Banking / Tau2-Bench: **no verified public score found**.
- GDPval-AA: **no verified public score found**.
- Claw-Eval / ClawProBench: **no verified public score found**.
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**.

Reasoning / knowledge:

- ExtractBench mean: **45.19%**, short **47.28%**, medium **44.52%**, long **22.17%**; 370-document benchmark, vLLM single-generation pipeline with a 64K output budget ([exact evaluation YAML](https://huggingface.co/zai-org/GLM-4.6V-Flash/resolve/refs%2Fpr%2F28/.eval_results/extractbench.yaml), [benchmark definition and splits](https://huggingface.co/datasets/llamaindex/ExtractBench)).
- GPQA Diamond: **no verified public score found**.
- HLE: **no verified public score found**.
- LCR / MLCR: **no verified public score found**.
- CritPt: **no verified public score found**.
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**; the exact model was not found at the checked tracker URLs ([Artificial Analysis](https://artificialanalysis.ai/models/glm-4-6v-flash), [BenchLM](https://benchlm.ai/models/glm-4.6v-flash)).
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**.

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**.
- LiveCodeBench: **no verified public score found**.
- SciCode / AA-SciCode: **no verified public score found**.
- Vibe Code Bench: **no verified public score found**.
- DeepSWE / Coding Index / other: **no verified public score found**. Z.AI documents screenshot-to-HTML/frontend replication as a capability, but provides no numeric coding result for Flash ([Z.AI docs](https://docs.z.ai/guides/vlm/glm-4.6v)).

Long context:

- ExtractBench long split: **22.17%** over 20 documents of more than 50 pages, exact Flash checkpoint and same 64K output-budget pipeline ([evaluation YAML](https://huggingface.co/zai-org/GLM-4.6V-Flash/resolve/refs%2Fpr%2F28/.eval_results/extractbench.yaml)). No dedicated MRCR/RULER retrieval score was verified.

### Normalized scores (1–100)

- **Tool use: 55/100.** Native multimodal function calling is verified by Z.AI, but no exact-ID agent benchmark is public; the missing measured tool performance caps the score.
- **Reasoning: 58/100.** Exact-ID ExtractBench is 45.19% overall and falls to 22.17% on the long split; the narrow document-extraction benchmark supports a modest score, while no broad reasoning benchmark was verified.
- **Context window: 60/100.** The verified 128K/131,072-token window fits the methodology's 100K–200K band; no retrieval curve or separately verified output ceiling raises it.
- **Multimodal: 82/100.** Verified image, video, file, and text input plus native visual tool use place it in the upper video/PDF-input band; text-only output and the mixed document-extraction results cap it below the top tier.
- **Coding: 48/100.** Screenshot-to-code and visual editing are documented, but no exact-ID coding benchmark was found and Z.AI notes remaining pure-text limitations.
- **Cost efficiency: 100/100.** The official Z.AI page labels the exact Flash tier completely free; no paid exact-checkpoint price was verified.
- **Overall Score: 61/100.** Half-up mean of the five quality dimensions `(55 + 58 + 60 + 82 + 48) / 5 = 60.6`; best fit is free local multimodal/document work, not benchmarked coding or general-purpose agent work.

---

## Signature

- Provided by: **GPT-5.6 Luna (openai/gpt-5.6-luna)** — 2026-10-23
- Method: seven independent fresh web searches plus direct official Z.AI, Hugging Face, LlamaIndex ExtractBench, LLMDB, Artificial Analysis, BenchLM, GitHub, and ModelScope checks; scores are normalized 1–100 interpretations, not official vendor scores. Variant checks explicitly separated GLM-4.6V-Flash from GLM-4.6V (106B), GLM-4.6V-FlashX, GLM-4.6-Flash, GLM-4.6, and earlier GLM-V releases.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
