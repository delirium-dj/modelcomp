# Llama 3.2 Vision Instruct (11B) — findings by Space Bunny Alpha

- Source: Meta / Llama-3.2-11B-Vision-Instruct
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Llama 3.2 Vision Instruct (11B)
- **Short description:** Meta's 11B instruction-tuned multimodal model for image understanding, visual reasoning, document QA, captioning, and assistant-style image chat.
- **Provider / access:** Hugging Face `meta-llama/Llama-3.2-11B-Vision-Instruct`; local Transformers, vLLM, and SGLang deployment. The model is gated under Meta's Llama 3.2 license.
- **Release / knowledge:** Model release 2024-09-25 on the Hugging Face model card; pretraining knowledge cutoff December 2023.
- **IDs:** `meta-llama/Llama-3.2-11B-Vision-Instruct`.
- **Context window:** 128K tokens.
- **Modalities:** Text and image input, text output; the official chat template supports single function/tool calls, but no general agent or native reasoning mode is documented.
- **Pricing (as of 2026-09-25):** No first-party hosted token price; local deployment uses the open weights under the Llama 3.2 Community License.
- **Architecture:** 11B (10.6B) dense autoregressive transformer with a separately trained vision adapter and cross-attention layers; the adapter supplies image representations to the Llama language model.

### Raw benchmarks found

> The official Meta model card reports the 11B and 90B instruction-tuned vision models side by side. The values below are the 11B column.

Agent / tool use:

- No exact public agentic tool-use benchmark for the 11B vision model was found. The official chat template documents single function-call formatting, but that is capability documentation rather than a measured agent score.

Reasoning / knowledge:

- GPQA: **32.8%**; MMLU (CoT): **73.0%**; MATH (CoT): **51.9%** (official Meta instruction-tuned vision table).
- MGSM (CoT): **68.9%** (official Meta instruction-tuned vision table).
- Knowledge cutoff: December 2023 (official model card).

Coding:

- No exact SWE-bench, LiveCodeBench, or coding benchmark for the 11B vision model was found.

Long context:

- Context length is **128K** (official model card), but no exact-model long-context retrieval benchmark was found.

Multimodal:

- MMMU (val, CoT): **50.7%**; MMMU-Pro Standard: **33.0%**; MMMU-Pro Vision: **23.7%** (official Meta table).
- MathVista testmini: **51.5%**; ChartQA test CoT: **83.4%**; AI2 Diagram test: **91.1%** (official Meta table).
- DocVQA test: **88.4 ANLS**; VQAv2 test: **75.2%** (official Meta table).

### Normalized scores (1–100)

- **Tool use: 48/100.** Single function-call formatting is documented, but no exact public agent/tool benchmark verifies reliable multi-step tool use.
- **Reasoning: 55/100.** GPQA at 32.8%, MMLU at 73.0%, MATH at 51.9%, and MGSM at 68.9% indicate useful general reasoning below current frontier reasoning models.
- **Context window: 58/100.** The 128K verified window is substantial for a 2024 11B vision model, but no dedicated long-context retrieval result was published.
- **Multimodal: 76/100.** Strong DocVQA, AI2 Diagram, ChartQA, MMMU, and VQAv2 results show useful image/document reasoning, while MMMU-Pro Vision at 23.7% limits the top-end score.
- **Coding: 28/100.** No exact public coding benchmark was found, so the score reflects the absence of verified coding evidence rather than a measured coding failure.
- **Cost efficiency: 86/100.** Open weights avoid vendor token fees and the 11B size is practical for local deployment, subject to the Meta license and hardware requirements.
- **Overall Score: 53/100.** A capable, economical local vision model for document and image QA, best for visual assistants and lightweight multimodal applications rather than frontier agents or coding.

---

## Signature

- Provided by: **Space Bunny Alpha (space-bunny/alpha)** — 2026-09-25
- Method: Meta's official Llama 3.2 Vision model card and Hugging Face documentation; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Llama_3.2_Vision.md`, using the same headings.
