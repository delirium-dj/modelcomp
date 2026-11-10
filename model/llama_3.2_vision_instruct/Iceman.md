# Llama 3.2 Vision Instruct — findings by Iceman

- Source: Meta/Llama-3.2-11B-Vision-Instruct
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Llama 3.2 11B Vision Instruct
- **Short description:** Meta’s Llama 3.2 Vision Instruct (11B/90B family) is an open-weight multimodal model (128K context, 4K max output) for image+text reasoning, document/chart QA, and visual understanding tasks.
- **Provider / access:** Open weights on Hugging Face (`meta-llama/Llama-3.2-11B-Vision-Instruct`, Llama 3.2 Community License) and various hosted providers (many delisted per metadata). Local metadata/folder covers `llama_3.2_vision_instruct`.
- **Release / knowledge:** Hugging Face model card reviewed 2026-11-10. Knowledge cutoff December 2023 (card).
- **IDs:** `Llama-3.2-11B-Vision-Instruct`, `meta-llama/Llama-3.2-11B-Vision-Instruct`.
- **Context window:** 128,000 tokens total; 4,096 max output.
- **Modalities:** Text and image input; text output.
- **Pricing (as of 2026-11-10):** Open weights (self-host $0, Llama 3.2 Community License). Hosted pricing varies widely by provider (~$0.0485–$0.35/M in per metadata).
- **Architecture:** Multimodal LLM based on Llama 3.1 with vision adapter/cross-attention layers; 11B variant evaluated here (HF card).

### Raw benchmarks found

> Verified figures below are from the Hugging Face model card for `meta-llama/Llama-3.2-11B-Vision-Instruct` (instruction-tuned 11B).

Agent / tool use:

- No standardized agentic/tool-use benchmarks (Terminal-Bench, Tau, Toolathon, MCP-Atlas) reported.
- Tool use not a primary focus of this legacy vision model.

Reasoning / knowledge:

- MMMU (val, CoT): **50.7%** (micro average accuracy)
- MMMU-Pro Standard (10 opts, test): **33.0%**
- MMMU-Pro Vision (test): **23.7%**
- MathVista (testmini): **51.5%**
- MMLU (CoT): **73.0%** (macro avg/acc)
- MATH (CoT): **51.9%** (final_em)
- GPQA: **32.8%** (accuracy)
- MGSM (CoT): **68.9%** (em)

Coding:

- No standardized coding benchmarks (SWE-bench, LiveCodeBench, Terminal-Bench) reported.

Long context:

- 128K context supported; 4,096 max output cap. No standalone MRCR/RULER/AA-LCR numeric benchmark reported.

Multimodal:

- ChartQA (test, CoT): **83.4%** (relaxed accuracy)
- AI2 Diagram (test): **91.1%**
- DocVQA (test): **88.4%** (ANLS)
- VQAv2 (test): **75.2%**

### Normalized scores (1–100)

> Derived from verified evidence above using `model-comparison.md` methodology. Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5` (Cost excluded). Legacy 2024-era vision model.

- **Tool use: 45/100.** No standardized agentic/tool-use benchmark evidence; not designed as a modern tool-using agent.
- **Reasoning: 70/100.** Moderate reasoning/knowledge for its era and size (MMLU 73.0%, MATH 51.9%, GPQA 32.8%, MMMU 50.7%, MathVista 51.5%).
- **Context window: 70/100.** 128K context available but severely constrained by 4,096-token max output and no long-context retrieval benchmark evidence.
- **Multimodal: 82/100.** Strong document/chart/diagram understanding (DocVQA 88.4%, AI2D 91.1%, ChartQA 83.4%, VQAv2 75.2%) for a legacy open vision model.
- **Coding: 45/100.** No standardized coding/agentic coding benchmark evidence reported.
- **Cost efficiency: 90/100.** Open weights with broad self-hosting options, though many hosted providers have delisted it.
- **Overall Score: 62/100.** Mean of the five non-cost dims (45, 70, 70, 82, 45) = 62.4 → 62. Best fit for legacy open-weight image/document/chart QA rather than modern agentic coding or tool use.

---

## Signature

- Provided by: **Iceman (opencode/iceman-free)** — 2026-11-10
- Method: Independent public research using alternative web access (`webfetch`) to Hugging Face model card; scores are normalized 1–100 interpretations from verified benchmark figures, not official vendor scores.
- Reference URLs:
  - [Llama-3.2-11B-Vision-Instruct model card (Hugging Face)](https://huggingface.co/meta-llama/Llama-3.2-11B-Vision-Instruct)
  - Local repository metadata consulted: `model/llama_3.2_vision_instruct/meta.json`
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
