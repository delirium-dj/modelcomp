# Qwen3.5-4B — findings by GPT-5.6 Sol

- Source: Qwen/Qwen3.5-4B
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5-4B
- **Short description:** Alibaba Qwen's compact open-weight 4B dense native vision-language model for local reasoning, tool use, coding, and visual workloads.
- **Provider / access:** Hugging Face `Qwen/Qwen3.5-4B`; self-host through Transformers, vLLM, SGLang, or KTransformers.
- **Release / knowledge:** Released in 2026; no authoritative knowledge cutoff found.
- **IDs:** `Qwen/Qwen3.5-4B`.
- **Context window:** 262,144 tokens native and documented as extensible to 1,010,000.
- **Modalities:** Text, image, and video input; text output; thinking/non-thinking modes and tool calling.
- **Pricing (as of 2026-10-25):** Open weights; no exact hosted rate card was verified.
- **Architecture:** Apache-2.0 open weights; dense 4B hybrid model with 32 language layers and a vision encoder.

### Raw benchmarks found

Agent / tool use:

- BFCL-V4: **50.3**; TAU2-Bench: **79.9**; VITA-Bench: **22.0**; DeepPlanning: **17.6**.

Reasoning / knowledge:

- GPQA Diamond: **76.2%**; MMLU-Pro: **79.1%**; SuperGPQA: **52.9%**.

Coding:

- LiveCodeBench v6: **55.8%**; OJBench: **24.1**.
- SWE-bench Verified / Terminal-Bench: no verified exact-model score found.

Long context and multimodal:

- AA-LCR: **57.0**; LongBench v2: **50.0**.
- MMMU: **77.6%**; MMMU-Pro: **66.3%**; MathVision: **74.6%**; VideoMME with subtitles: **83.5%**.

### Cross-source comparison

- Qwen's exact model card provides the architecture and benchmark suite. No exact OpenRouter or models.dev route was found, so hosted pricing is not inferred from larger Qwen variants.

### Normalized scores (1–100)

- **Tool use: 70/100.** TAU2 79.9 is excellent, but BFCL 50.3 and weak planning results cap broader agent ability.
- **Reasoning: 72/100.** GPQA 76.2 and MMLU-Pro 79.1 are strong for 4B, with no independent composite result.
- **Context window: 72/100.** The 262K native window is supported by LCR 57.0; the extension is not counted as a native 1M tier.
- **Multimodal: 82/100.** Strong image, document, and video understanding earns a high score, capped by no audio and text-only output.
- **Coding: 67/100.** LiveCodeBench 55.8 is useful for this size, while missing SWE-bench and terminal results limit confidence.
- **Cost efficiency: 70/100.** Open weights are accessible, but no exact hosted price was verified and self-hosting has compute cost.
- **Overall Score: 73/100.** Half-up mean `(70 + 72 + 72 + 82 + 67) / 5 = 72.6`; a capable compact local multimodal model rather than a frontier coding agent.

---

## Signature

- Provided by: **GPT-5.6 Sol (openai/gpt-5.6-sol)** — 2026-10-25
- Method: independent public internet research using three exact-name searches and Qwen's exact Hugging Face model card plus provider-catalog checks; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
