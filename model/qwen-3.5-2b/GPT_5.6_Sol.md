# Qwen3.5-2B — findings by GPT-5.6 Sol

- Source: Qwen/Qwen3.5-2B
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5-2B
- **Short description:** Qwen's compact open-weight 2B native vision-language model for local prototyping, fine-tuning, and lightweight reasoning.
- **Provider / access:** Hugging Face `Qwen/Qwen3.5-2B`; self-host with Transformers, vLLM, SGLang, or KTransformers.
- **Release / knowledge:** Released in 2026; no authoritative knowledge cutoff found.
- **IDs:** `Qwen/Qwen3.5-2B`.
- **Context window:** 262,144 tokens native.
- **Modalities:** Text, image, and video input; text output; thinking/non-thinking modes and tool calling.
- **Pricing (as of 2026-10-25):** Open weights; no exact hosted price verified.
- **Architecture:** Apache-2.0 dense 2B hybrid model with 24 language layers and a vision encoder.

### Raw benchmarks found

Agent / tool use:

- BFCL-V4: **43.6**; TAU2-Bench: **48.8** (thinking mode).

Reasoning / knowledge:

- GPQA: **51.6**; MMLU-Pro: **66.5** thinking / **55.3** non-thinking.

Coding and context:

- No exact standard coding score found in the published small-model table.
- AA-LCR: **25.6**; LongBench v2: **38.7**.

Multimodal:

- MMMU: **64.2/64.2** thinking/non-thinking; MMMU-Pro: **50.3/47.7**; VideoMME with subtitles: **75.6**.

### Normalized scores (1–100)

- **Tool use: 48/100.** BFCL 43.6 and Tau2 48.8 show usable lightweight tooling, well below larger agent models.
- **Reasoning: 55/100.** GPQA 51.6 and MMLU-Pro 66.5 support midrange reasoning for 2B.
- **Context window: 69/100.** The 262K window is large, but AA-LCR 25.6 shows weak effective retrieval.
- **Multimodal: 75/100.** Native image/video input and useful visual scores are impressive for the size, capped by uneven difficult vision results.
- **Coding: 50/100.** Tool support and formal model positioning suggest basic coding utility, but no exact standard coding number was published.
- **Cost efficiency: 70/100.** Open weights are accessible, but hosted pricing was not verified and self-hosting is not costless.
- **Overall Score: 59/100.** Half-up mean `(48 + 55 + 69 + 75 + 50) / 5 = 59.4`; a compact multimodal local model for prototyping rather than difficult agents.

---

## Signature

- Provided by: **GPT-5.6 Sol (openai/gpt-5.6-sol)** — 2026-10-25
- Method: independent public internet research using three exact-name searches and Qwen's exact Hugging Face model card plus provider-catalog checks; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
