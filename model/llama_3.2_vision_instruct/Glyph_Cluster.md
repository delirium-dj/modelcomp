# Llama 3.2 Vision Instruct — findings by Glyph Cluster

- Source: Meta (`meta-llama/Llama-3.2-11B-Vision-Instruct`, `meta-llama/Llama-3.2-90B-Vision-Instruct`)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Llama 3.2 Vision Instruct
- **Short description:** Meta's open-weight multimodal vision-language instruction-tuned models (11B and 90B) for visual recognition, image reasoning, captioning, document/chart understanding, and image-grounded assistant tasks.
- **Provider / access:** Open weights on Hugging Face (`meta-llama/Llama-3.2-11B-Vision-Instruct`, `meta-llama/Llama-3.2-90B-Vision-Instruct`) under Llama 3.2 Community License. Historically hosted by various providers; repo meta notes delisting by some hosts (Together, Groq, Cerebras, OpenRouter) for both sizes.
- **Release / knowledge:** Model release date 2024-09-25 (per HF model card). Pretraining data cutoff December 2023 (per HF model card).
- **IDs:** `meta-llama/Llama-3.2-11B-Vision-Instruct`, `meta-llama/Llama-3.2-90B-Vision-Instruct` (HF). Repo folder/meta also references `llama-3.2-vision-instruct` naming.
- **Context window:** 128,000 tokens total; 4,096 max output (per repo meta/HF model card).
- **Modalities:** Text and image input; text output. No native audio/video input or image generation.
- **Pricing (as of 2026-11-11):** Open weights (self-host $0 under Llama 3.2 Community License; EU multimodal clause applies per license text on HF). Hosted pricing historically varied by provider (repo meta cites examples ~$0.0485–$0.35/M in and ~$0.055–$0.676/M out depending on size/provider); availability/pricing may have changed.
- **Architecture:** Multimodal LLM built on Llama 3.1 text model with a vision adapter (cross-attention layers integrating image encoder representations). Instruction-tuned with SFT and RLHF. GQA enabled. 11B and 90B sizes (per HF model card).

### Raw benchmarks found

> Source: Hugging Face model card for `meta-llama/Llama-3.2-11B-Vision-Instruct` (instruction-tuned benchmark tables; values shown for 11B and 90B where available).

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found**.
- Tau3-Banking / Tau2-Bench: **no verified public score found**.
- GDPval-AA: **no verified public score found**.
- Claw-Eval / ClawProBench: **no verified public score found**.
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**.

Reasoning / knowledge:

- MMMU (val, CoT, 0-shot, micro avg accuracy): **50.7%** (11B) / **60.3%** (90B).
- MMMU-Pro Standard (test): **33.0%** (11B) / **45.2%** (90B).
- MMMU-Pro Vision (test): **23.7%** (11B) / **33.8%** (90B).
- MathVista (testmini, 0-shot): **51.5%** (11B) / **57.3%** (90B).
- MMLU (CoT, 0-shot): **73.0%** (11B) / **86.0%** (90B).
- MATH (CoT, 0-shot): **51.9%** (11B) / **68.0%** (90B).
- GPQA (0-shot): **32.8%** (11B) / **46.7%** (90B).
- MGSM (CoT, 0-shot): **68.9%** (11B) / **86.9%** (90B).
- HLE / LCR / MLCR / CritPt: **no verified public score found**.
- Artificial Analysis Intelligence Index / Omniscience: **no verified public score found**.

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**.
- LiveCodeBench: **no verified public score found**.
- SciCode / AA-SciCode: **no verified public score found**.
- Vibe Code Bench: **no verified public score found**.
- DeepSWE / Coding Index / other: **no verified public score found**.

Long context:

- 128,000-token context window reported (HF/repo meta); specific MRCR/RULER/GraphWalks long-context retrieval benchmark scores: **no verified public score found**.

Vision/document understanding (relevant to multimodal/reasoning context):

- ChartQA (test, CoT): **83.4%** (11B) / **85.5%** (90B).
- AI2 Diagram (test): **91.1%** (11B) / **92.3%** (90B).
- DocVQA (test, ANLS): **88.4%** (11B) / **90.1%** (90B).
- VQAv2 (test): **75.2%** (11B) / **78.1%** (90B).

### Normalized scores (1–100)

> Scores are normalized interpretations from verified benchmark evidence for the 11B/90B instruction-tuned models and may vary by size/deployment. Overall = half-up mean of the five quality dimensions (Cost efficiency excluded).

- **Tool use: 44/100.** No verified standardized tool-use/agentic benchmark results were found; the model family is primarily optimized for visual question answering, document/chart reasoning, and assistant chat rather than autonomous tool orchestration.
- **Reasoning: 60/100.** Solid mid-range reasoning/knowledge for its generation (MMLU 73.0/86.0, MATH 51.9/68.0, MGSM 68.9/86.9; 90B stronger) but limited on harder reasoning benchmarks (GPQA 32.8/46.7, MMMU/MMMU-Pro moderate), indicating capable but not frontier reasoning.
- **Context window: 72/100.** 128K total context is useful for long documents/multimodal prompts, but the 4,096-token max output and lack of verified long-context retrieval benchmarks cap practical long-context performance.
- **Multimodal: 74/100.** Strong image+text understanding for document/chart/diagram tasks (DocVQA 88.4/90.1, ChartQA 83.4/85.5, AI2D 91.1/92.3, VQAv2 75.2/78.1) with text-only output; capped by absence of audio/video modalities and by age relative to newer multimodal systems.
- **Coding: 46/100.** No verified coding benchmark scores (SWE-bench, LiveCodeBench, etc.) were found; as a general/vision instruct model it can assist with code in text form but is not evidenced as a specialized coding model.
- **Cost efficiency: 90/100.** Open weights under Llama 3.2 Community License enable free self-hosting, and historical hosted pricing has been low; availability has shifted across providers over time. Not included in Overall.
- **Overall Score: 59/100.** Mean of the five non-cost dimensions (Tool 44, Reasoning 60, Context 72, Multimodal 74, Coding 46) = 296/5 = 59.2, rounded to 59 (half-up). Best fit: open-weight image/document/chart question answering and visual reasoning tasks where multimodal understanding matters more than frontier coding or autonomous tool use.

---

## Signature

- Provided by: **Glyph Cluster (glyph-cluster-free)** — 2026-11-11
- Method: Public-source synthesis from fetched Hugging Face model card and repo metadata; web search unavailable in-session (HTTP 402). Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Hugging Face — meta-llama/Llama-3.2-11B-Vision-Instruct](https://huggingface.co/meta-llama/Llama-3.2-11B-Vision-Instruct)
  - [Hugging Face — meta-llama/Llama-3.2-90B-Vision-Instruct](https://huggingface.co/meta-llama/Llama-3.2-90B-Vision-Instruct)
  - [Meta Llama models (official downloads/docs)](https://www.llama.com/llama-downloads)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
