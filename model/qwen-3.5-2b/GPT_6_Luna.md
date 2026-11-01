# Qwen3.5-2B — findings by GPT-6 Luna

- Source: Qwen Team/Qwen3.5-2B
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5-2B
- **Short description:** Qwen's compact, open-weight multimodal model for local inference, prototyping, and task-specific fine-tuning. The same instruction-tuned checkpoint supports both thinking and non-thinking modes; thinking is not a separate model.
- **Provider / access:** Qwen Team's official Hugging Face repository `Qwen/Qwen3.5-2B`; can be self-hosted using Transformers, vLLM, SGLang, or KTransformers. The model card documents an OpenAI-compatible Chat Completions interface when self-hosted; no first-party hosted API route for this exact checkpoint was verified.
- **Release / knowledge:** The official Hugging Face repository was created February 28, 2026 and last updated March 2, 2026. No exact knowledge cutoff was found.
- **IDs:** `Qwen/Qwen3.5-2B` (post-trained/instruct checkpoint) and `Qwen/Qwen3.5-2B-Base` (base checkpoint). Scores below are for the named post-trained checkpoint.
- **Context window:** 262,144 tokens natively, verified in the model card and serving examples. The card recommends 32,768 output tokens for most queries and up to 81,920 for difficult benchmark tasks; these are recommended generation settings, not a universal hosted output cap.
- **Modalities:** Text, image, and video input; text output. Supports tool/function calls, including Qwen-Agent; thinking mode can be enabled through the serving API. The card does not document audio input, JSON-constrained output, or image/audio generation for this checkpoint.
- **Pricing (as of 2026-11-01):** Apache-2.0 weights are free to download and self-host, excluding hardware and operating costs. Third-party API prices vary; Artificial Analysis reports no publicly available API for its independently tracked model entry.
- **Architecture:** Approximately 2.27B parameters in the published BF16 weights (marketed as 2B); 24-layer hybrid architecture using Gated DeltaNet and gated attention. Apache-2.0 license.

### Raw benchmarks found

The following values are from Qwen's official model card and refer to the exact Qwen3.5-2B post-trained checkpoint. Unless otherwise indicated, values are percentages. In the vision-language tables, paired values are **thinking / non-thinking**. Qwen3.5-2B runs in non-thinking mode by default; the official card's separate mode results must not be collapsed into a single result.

Agent / tool use:

- BFCL-V4 (thinking): **43.6**.
- TAU2-Bench (thinking): **48.8**. Qwen says its setup follows the official benchmark except the Airline domain, where it applies fixes proposed in the Claude Opus 4.5 system card.
- No exact-model Terminal-Bench, GDPval, Claw-Eval, or repository-agent score verified in the official card.

Reasoning / knowledge:

- MMLU-Pro: **66.5 thinking / 55.3 non-thinking**; MMLU-Redux: **79.6 / 69.2**; GPQA: **51.6** (thinking); SuperGPQA: **37.5** (thinking).
- Instruction following: IFEval **78.6 / 61.2**; IFBench **41.3** (thinking); MultiChallenge **33.7** (thinking).
- HMMT February 2025: **22.9** (thinking). No AIME or HLE score was listed for this checkpoint.

Multimodal:

- Image benchmarks (thinking / non-thinking): MMMU-Pro **50.3 / 47.7**; MathVista-mini **76.7 / 73.9**; DynaMath **73.6 / 69.6**.
- Video: VideoMME with subtitles **75.6** (thinking; no non-thinking score shown); VideoMME without subtitles **69.0** (thinking; no non-thinking score shown); VideoMMMU **62.1** (thinking; no non-thinking score shown).
- The card also reports results for OCR, document understanding, spatial, and medical VQA tasks; these scores vary by task and mode.

Coding:

- No verified exact-checkpoint SWE-bench, LiveCodeBench, HumanEval, or Terminal-Bench score was found in the official model card or Artificial Analysis entry. Qwen's general statement that the Qwen3.5 family improves coding is not a numeric Qwen3.5-2B coding result.

Long context:

- Artificial Analysis Long Context Reasoning (AA-LCR): **25.6**; LongBench v2 (thinking): **38.7**. These benchmark scores do not establish reliable retrieval at the full 262K advertised limit.

### Normalized scores (1–100)

- **Tool use: 52/100.** BFCL-V4 at 43.6 and TAU2-Bench at 48.8 support basic tool competence, but there are no verified terminal-agent or repository-work results and the TAU2 setup has an Airline-domain adjustment. [Official model card](https://huggingface.co/Qwen/Qwen3.5-2B).
- **Reasoning: 58/100.** Thinking-mode MMLU-Pro 66.5 and GPQA 51.6 show useful compact-model reasoning, while non-thinking MMLU-Pro is 55.3, HMMT is 22.9, and no AIME/HLE result was found. [Official model card](https://huggingface.co/Qwen/Qwen3.5-2B).
- **Context window: 68/100.** The verified 262K maximum falls in the 200K–500K tier; AA-LCR 25.6 and LongBench v2 38.7 limit confidence in its practical long-context performance. [Official model card](https://huggingface.co/Qwen/Qwen3.5-2B); [Artificial Analysis](https://artificialanalysis.ai/models/qwen3-5-2b).
- **Multimodal: 80/100.** Text, image, and video input are documented and supported by MMMU-Pro, MathVista-mini, and VideoMME results, but it has text-only output and no verified audio capability. [Official model card](https://huggingface.co/Qwen/Qwen3.5-2B).
- **Coding: 44/100.** No exact-model coding benchmark was verified; this deliberately conservative, low-confidence estimate reflects the absence of repository-repair/competitive-code evidence and the vendor's stated emphasis on prototyping and research, not a measured coding score. [Official model card](https://huggingface.co/Qwen/Qwen3.5-2B); [Artificial Analysis](https://artificialanalysis.ai/models/qwen3-5-2b).
- **Cost efficiency: 100/100.** Apache-2.0 weights have no license fee and are self-hostable; compute and hosting still cost money, and no fixed first-party API price was verified. [Official model card](https://huggingface.co/Qwen/Qwen3.5-2B).
- **Overall Score: 60/100.** Half-up mean of the five quality dimensions: (52 + 58 + 68 + 80 + 44) / 5 = 60.4 → 60. Cost is excluded. Best suited to low-cost local multimodal assistants and prototyping; avoid relying on it for high-stakes tool execution, precise coding, or retrieval across the entire context window.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna)** — 2026-11-01
- Method: Three independent exact-model web searches plus direct checks of Qwen's Hugging Face model card and repository metadata, the Artificial Analysis model page, and the official Qwen serving documentation embedded in the card. Benchmark mode labels and the TAU2 setup caveat are retained. No results from Qwen3.5-0.8B, base weights, or other Qwen3.5 sizes are transferred. Normalized scores are independent interpretations, not vendor scores; Coding is explicitly low-confidence because no exact-model coding benchmark was verified.
- Reference URLs:
  - [Official Qwen3.5-2B model card and benchmark tables](https://huggingface.co/Qwen/Qwen3.5-2B)
  - [Official Qwen3.5 release post](https://qwen.ai/blog?id=qwen3.5)
  - [Hugging Face model metadata](https://huggingface.co/api/models/Qwen/Qwen3.5-2B)
  - [Artificial Analysis Qwen3.5 2B page](https://artificialanalysis.ai/models/qwen3-5-2b)

---
