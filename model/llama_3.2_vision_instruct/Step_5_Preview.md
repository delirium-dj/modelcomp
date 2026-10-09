# Llama 3.2 Vision (Instruct) — findings by Step 5 Preview

- Source: Meta (`meta-llama/Llama-3.2-11B-Vision-Instruct`, `meta-llama/Llama-3.2-90B-Vision-Instruct`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Llama 3.2 Vision Instruct (Meta's first natively multimodal Llama; 11B and 90B)
- **Short description:** The Meta Connect 2024 release that brought image reasoning to the open-weights ecosystem — a frozen Llama 3.1 text backbone (8B for the 11B, 70B for the 90B) plus a ~850M-parameter ViT-H/14 vision encoder (with 8 gated self-attention layers) wired in through cross-attention adapters after every fourth text block, pre-trained on 6B image-text pairs and instruction-tuned with public vision datasets plus 3M+ synthetic examples. Meta positioned the 90B as competitive with Claude 3 Haiku and GPT-4o-mini on image understanding while preserving the frozen backbone's text quality (MMLU 86.0) — "drop-in replacements for their corresponding text model equivalents." The multimodal weights carry the Llama 3.2 Community License's EU restriction. Two years on it is the historical reference for open vision models: the last Meta open-weights release before the Llama-4 era and the baseline every Qwen/Gemma VLM was measured against.
- **Provider / access:** Hugging Face / Meta (Llama 3.2 Community License); Bedrock, Vertex AI, Azure; Transformers (`MllamaForConditionalGeneration`).
- **Release:** 2024-09-25 (Meta Connect 2024).
- **Context window:** 128K tokens; knowledge cutoff December 2023.
- **Modalities:** Text and image in → text out; image captioning, document-level understanding (charts, graphs), OCR and visual grounding.
- **Pricing (as of 2026-10-09):** legacy hosted endpoints; weights free under the Llama 3.2 Community License (multimodal weights EU-restricted).
- **Architecture:** Llama 3.1 text backbone (frozen during vision training) + ViT-H/14 (8 gated SA layers) + cross-attention adapters; GQA.

### Raw benchmarks found

Vendor model card (instruct-tuned; 11B / 90B):

- MMMU (val, CoT): **50.7 / 60.3**; MMMU-Pro (Standard, 10 opts): **33.0 / 45.2**; MMMU-Pro (Vision): 23.7 / 33.8
- MathVista (testmini): **51.5 / 57.3**
- ChartQA (test, CoT): **83.4 / 85.5**; AI2 Diagram (test): **91.1 / 92.3**; DocVQA (test, ANLS): **88.4 / 90.1**
- VQAv2 (test): **75.2 / 78.1**
- MMLU (CoT): **73.0 / 86.0**; MATH (CoT): **51.9 / 68.0**; GPQA: **32.8 / 46.7**; MGSM (CoT): **68.9 / 86.9**
- Base models: VQAv2 66.8/73.6, MMMU (0-shot) 41.7/49.3, ChartQA 39.4/54.2

SWE-bench, Terminal-Bench, τ-bench, MCP Atlas, GDPval, HLE, ARC-AGI, MRCR/RULER: **no verified public score found** (the model predates those evals).

### Normalized scores (1–100)

- **Tool use: 35/100.** No agentic-harness benchmark exists (the model predates TB/τ³/MCP-Atlas); it has no native function-calling/tool-use training focus — a structural low score.
- **Reasoning: 42/100.** MMLU 73.0/86.0%, MATH 51.9/68.0% and GPQA 32.8/46.7% are low-mid even for 2024 (the frozen 2024 backbone shows); mid-low on today's scale.
- **Context window: 62/100.** 128K is the 100K–200K band (50–64) with no published retrieval curve (no MRCR/RULER/NIAH figure).
- **Multimodal: 62/100.** Text + image in → text out is the 60–70 band, at its bottom: MMMU 50.7/60.3% and MathVista 51.5/57.3% were mid-tier in 2024 and are weak now, though DocVQA 88.4/90.1% and AI2 Diagram 91.1/92.3% show genuine document strength.
- **Coding: 40/100.** No SWE-bench/HumanEval/LiveCodeBench figure was ever published for the vision models — structural low-mid.
- **Cost efficiency: 88/100.** Open weights (11B fits a single consumer GPU; 90B on one 80GB node) at no license fee — the ~$0.6/$2.2 ≈ 92 range docked for the Llama Community License's EU multimodal restriction and legacy status.
- **Overall Score: 48/100.** Best-fit recommendation: a historical baseline — the open-weights vision model of 2024, useful for document/chart understanding research on a single GPU; comprehensively outclassed by 2026 vision models (Gemma 4 E4B, Ling-3.0-flash-VL, Qwen3.5-9B) on every axis.

---

## Signature

- Provided by: **Step 5 Preview (StepFun)** — 2026-10-09
- Method: public internet research (Meta model cards on GitHub/Hugging Face for 11B and 90B Vision Instruct, NVIDIA NIM cards, AI Wiki architecture summary); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Llama_4_Vision.md`, using the same headings.
