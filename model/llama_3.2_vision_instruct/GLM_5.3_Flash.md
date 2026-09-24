# Llama 3.2 Vision — findings by GLM 5.3 Flash

- Source: Meta (`meta-llama/Llama-3.2-11B-Vision-Instruct` / `meta-llama/Llama-3.2-90B-Vision-Instruct`, open weights)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Llama 3.2 Vision (Instruct) — collection of 11B and 90B vision-language models
- **Short description:** Meta's first open-weight multimodal Llama family (September 2024): pretrained and instruction-tuned image-reasoning models in 11B and 90B sizes, optimized for visual recognition, image reasoning, captioning and visual question answering. Built on the Llama 3.1 text backbone with an image adapter. Superseded by later multimodal Llama/Muse generations.
- **Provider / access:** Open weights under the Llama 3.2 Community License on Hugging Face (`meta-llama/Llama-3.2-11B-Vision-Instruct`, `meta-llama/Llama-3.2-90B-Vision-Instruct`); partner platforms named by Meta: AWS, Databricks, Google Cloud, Groq, IBM watsonx, Microsoft Azure, NVIDIA NIM, Oracle Cloud, Snowflake; local vLLM OpenAI-compatible `/v1/chat/completions` serving. No Free ID on OpenCode Zen.
- **Release / knowledge:** Released late September 2024 (2024-09-25 per gate.ai); knowledge cutoff December 2023 (pretraining data cutoff, per the official model card).
- **IDs:** `meta-llama/Llama-3.2-11B-Vision-Instruct`; `meta-llama/Llama-3.2-90B-Vision-Instruct` (Hugging Face / partner platforms).
- **Context window:** 128,000 tokens (128K) for both 11B and 90B Vision variants (verified via the official Meta model card as cited by gate.ai).
- **Modalities:** text and image input; text output; reasoning no (not a reasoning model — no extended chain-of-thought); tool/function calling and structured output not confirmed for the Vision variants; no audio/video input; English-only for image tasks (text-only tasks support 8 languages).
- **Pricing (as of 2026-09-24):** open weights, free to self-host within Llama Community License terms (custom commercial license conditions apply); official Meta hosted-API token pricing not confirmed — third-party provider rates vary.
- **Architecture:** Open weights; 11B and 90B sizes built on the Llama 3.1 text backbone; Llama 3.2 Community License.

### Raw benchmarks found

Agent / tool use:

- No verified public Terminal-Bench, Tau3, GDPval-AA, MCPAtlas, Claw-Eval or Toolathon score found; tool/function calling is not confirmed for the Vision variants

Reasoning / knowledge:

- MMMU (90B, validation, chain-of-thought): **60.3** (Meta model-card numbers, cited by aiwiki.ai; visual reasoning)
- MMLU (90B, frozen Llama 3.1 70B backbone): **86.0** macro-average (aiwiki.ai)
- MMMU (11B): **50.7** (aimodels.fyi / Meta model card)
- GPQA Diamond, HLE: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- No verified public SWE-bench Verified/SWE-Pro, LiveCodeBench, SciCode, Vibe Code Bench or DeepSWE score found — these are vision models, not coding models

Multimodal / vision:

- DocVQA (90B): **90.1** (Meta model card, cited by aiwiki.ai/anakin.ai — slightly edging Claude 3 Haiku)
- ChartQA (90B): **85.5**; AI2 Diagram (90B): **92.3** (aiwiki.ai)
- VQAv2 (90B): **78.1** (aimodels.fyi)
- DocVQA (11B): **88.4**; ChartQA (11B): **83.4**; VQAv2 (11B): **75.2** (aimodels.fyi / IBM watsonx reporting)

Long context:

- No long-context retrieval value verified (128K window claimed; no MRCR/RULER value found)

### Normalized scores (1–100)

- **Tool use: 45/100.** Tool/function calling is not confirmed for the Vision variants and zero verified agentic benchmark numbers — score rests on thin evidence, conservative.
- **Reasoning: 62/100.** MMMU 60.3 (90B, CoT) is mid-band visual reasoning and MMLU 86.0 reflects the frozen 3.1 backbone; no GPQA/HLE or independent index run — 2024-era multimodal reasoning, superseded by every current model.
- **Context window: 58/100.** 128K tokens maps to the 100K–200K tier (50–64); no measured retrieval.
- **Multimodal: 65/100.** Text + image input with strong document/chart benchmarks (DocVQA 90.1, AI2D 92.3); text-only output, no audio/video — per methodology the image-in band is 60–70.
- **Coding: 50/100.** Zero verified public coding benchmarks — these are vision models, not coding models; score rests on thin evidence.
- **Cost efficiency: 95/100.** Free open weights under the Llama Community License with free self-hosting; official API pricing unconfirmed but third-party rates are low; license restrictions apply for large firms.
- **Overall Score: 56/100.** Mean of the five quality dims (45 + 62 + 58 + 65 + 50) / 5 = 56 → 55. Best-fit: open-weight document/chart understanding and image captioning for local or privacy-controlled deployments — not a competitor for agentic or coding workloads.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-09-24
- Method: public internet research (official Meta model card as cited by gate.ai, aiwiki.ai, aimodels.fyi, IBM watsonx coverage, DuckDuckGo web search); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Llama_3.md`, using the same headings.
