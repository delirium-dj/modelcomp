# Qwen3.5-35B-A3B — findings by GPT-5.6 Sol

- Source: Qwen/Qwen3.5-35B-A3B
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5-35B-A3B
- **Short description:** Alibaba Qwen's open-weight 35B-total, 3B-active native vision-language MoE for efficient reasoning, agents, coding, and multilingual work.
- **Provider / access:** Hugging Face `Qwen/Qwen3.5-35B-A3B`; hosted by DeepInfra and other providers through OpenAI-compatible APIs.
- **Release / knowledge:** Released 2026-02-23; no authoritative knowledge cutoff found.
- **IDs:** `Qwen/Qwen3.5-35B-A3B`; provider spellings include `qwen3-5-35b-a3b`.
- **Context window:** 262,144 tokens native, documented as extensible to 1,010,000; provider output limits vary.
- **Modalities:** Text, image, and video input; text output; thinking mode, tool calls, and structured output.
- **Pricing (as of 2026-10-25):** DeepInfra catalog data lists about $0.14 input / $1 output / $0.05 cached input per 1M tokens.
- **Architecture:** Apache-2.0 open weights; 35B total / 3B active, 256 routed experts with eight active plus one shared expert.

### Raw benchmarks found

Agent / tool use:

- BFCL-V4: **67.3**; TAU2-Bench: **81.2**; Terminal Bench 2: **40.5**.
- HLE with tool: **47.4**; BrowseComp: **61.0**; WideSearch: **57.1**.

Reasoning / knowledge:

- GPQA Diamond: **84.2%**; HLE with CoT: **22.4%**; MMLU-Pro: **85.3%**.

Coding:

- SWE-bench Verified: **69.2%**; LiveCodeBench v6: **74.6%**; Codeforces: **2028**.
- FullStackBench: **58.1** English / **55.0** Chinese.

Long context and multimodal:

- AA-LCR: **58.5**; LongBench v2: **59.0**.
- MMMU: **81.4%**; MMMU-Pro: **75.1%**; MathVision: **83.9%**.
- OmniDocBench 1.5: **89.3%**; MMLongBench-Doc: **59.5%**.

### Cross-source comparison

- Qwen's model card, Hugging Face, and provider catalogs agree on the exact checkpoint, 262K native context, multimodal interface, and 35B/3B MoE design.
- Qwen states that Qwen3.5-Flash is a hosted counterpart with extra production features; this report scores only the exact open checkpoint and does not transfer values to the separately tracked Flash entry.

### Normalized scores (1–100)

- **Tool use: 75/100.** TAU2 81.2 and BFCL 67.3 are strong, but Terminal Bench 2 at 40.5 caps autonomy.
- **Reasoning: 77/100.** GPQA 84.2 and HLE 22.4 support strong reasoning for 3B active parameters, with limited independent validation.
- **Context window: 72/100.** The 262K native window and LCR 58.5 are useful; the million-token extension was not scored as native.
- **Multimodal: 85/100.** Native image and video input plus strong vision/document results merit a high score, capped by text-only output and no audio.
- **Coding: 76/100.** SWE-bench 69.2 and LiveCodeBench 74.6 are strong, while Terminal Bench 2 remains moderate.
- **Cost efficiency: 96/100.** Approximately $0.14/$1 is exceptionally inexpensive for the measured capability.
- **Overall Score: 77/100.** Half-up mean `(75 + 77 + 72 + 85 + 76) / 5 = 77`; a high-value open multimodal agent model with moderate terminal autonomy.

---

## Signature

- Provided by: **GPT-5.6 Sol (openai/gpt-5.6-sol)** — 2026-10-25
- Method: independent public internet research using three exact-name searches and direct checks of Qwen's model card, Hugging Face, and provider catalogs; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
