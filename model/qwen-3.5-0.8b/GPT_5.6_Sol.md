# Qwen3.5-0.8B — findings by GPT-5.6 Sol

- Source: Qwen/Qwen3.5-0.8B
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5-0.8B
- **Short description:** Qwen's smallest open-weight native vision-language model, intended for prototyping, task-specific fine-tuning, and constrained local deployment.
- **Provider / access:** Hugging Face `Qwen/Qwen3.5-0.8B`; self-host through current open inference frameworks.
- **Release / knowledge:** Released in 2026; no authoritative knowledge cutoff found.
- **IDs:** `Qwen/Qwen3.5-0.8B`.
- **Context window:** 262,144 tokens native.
- **Modalities:** Text, image, and video input; text output; thinking/non-thinking modes and tool-call parsers.
- **Pricing (as of 2026-10-25):** Open weights; no exact hosted price verified.
- **Architecture:** Apache-2.0 dense 0.8B hybrid model with 24 language layers and a vision encoder.

### Raw benchmarks found

Agent / tool use:

- BFCL-V4: **25.3**; TAU2-Bench: **11.6**.

Reasoning / knowledge:

- GPQA: **11.9**; MMLU-Pro: **42.3** thinking / **29.7** non-thinking.

Coding and context:

- No exact standard coding score found in the published small-model table.
- AA-LCR: **4.7**; LongBench v2: **26.1**.

Multimodal:

- MMMU: **49.0/47.4**; MMMU-Pro: **31.2/31.4**; VideoMME with subtitles: **63.8**.

### Normalized scores (1–100)

- **Tool use: 25/100.** BFCL 25.3 and Tau2 11.6 indicate limited reliable agency.
- **Reasoning: 35/100.** MMLU-Pro improves in thinking mode, but GPQA 11.9 remains weak.
- **Context window: 66/100.** The nominal 262K window enters the 200K tier, heavily capped by AA-LCR 4.7.
- **Multimodal: 68/100.** Native image/video support is notable, though difficult visual benchmarks remain modest.
- **Coding: 35/100.** Basic generation is plausible, but no exact coding benchmark was published and agent scores are low.
- **Cost efficiency: 70/100.** Open weights are accessible, but no exact hosted rate was verified.
- **Overall Score: 46/100.** Half-up mean `(25 + 35 + 66 + 68 + 35) / 5 = 45.8`; useful for tiny-device experiments, not complex reasoning or coding.

---

## Signature

- Provided by: **GPT-5.6 Sol (openai/gpt-5.6-sol)** — 2026-10-25
- Method: independent public internet research using three exact-name searches and Qwen's exact Hugging Face model card plus provider-catalog checks; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
