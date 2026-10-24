# Qwen3.5-27B — findings by GPT-5.6 Sol

- Source: Qwen/Qwen3.5-27B
- Date: 2026-10-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5-27B
- **Short description:** Alibaba Qwen's open-weight 27B dense native vision-language reasoning model, aimed at local or hosted coding, agent, multilingual, and visual-document workloads.
- **Provider / access:** Downloadable from Hugging Face as `Qwen/Qwen3.5-27B`; also available through OpenRouter's Chat Completions API as `qwen/qwen3.5-27b` and through Alibaba and other providers.
- **Release / knowledge:** Released 2026-02-24. No authoritative knowledge-cutoff date found.
- **IDs:** `Qwen/Qwen3.5-27B` (weights); `qwen/qwen3.5-27b` (OpenRouter).
- **Context window:** 262,144 tokens native and vendor-described as extensible to 1,010,000; OpenRouter exposes 262,144 total with up to 65,536 completion tokens.
- **Modalities:** Text, image, and video input; text output; thinking mode, tool calls, and structured output. No native audio input or non-text output was verified.
- **Pricing (as of 2026-10-24):** OpenRouter lists $0.27 input / $2.16 output / $0.27 cached input per 1M tokens. Artificial Analysis lists Alibaba at $0.30 input / $2.40 output; provider pricing varies.
- **Architecture:** Apache-2.0 open weights; dense 27B hybrid model with a vision encoder, 64 language layers, three Gated DeltaNet blocks per full-attention block, and multi-token prediction. Hugging Face safetensor metadata counts 27.781B parameters.

### Raw benchmarks found

Agent / tool use:

- BFCL-V4: **68.5** (Qwen model card).
- TAU2-Bench: **79.0** (Qwen harness; official setup with the stated airline-domain fixes).
- Terminal Bench 2: **41.6** (Qwen model card).
- VITA-Bench: **41.9**; DeepPlanning: **22.6** (Qwen model card).
- HLE with tool: **48.5**; BrowseComp: **61.0**; WideSearch: **61.1** (Qwen search-agent harness, 256K context strategy).
- GDPval-AA / AutomationBench-AA / Claw-Eval: no exact public component score found.

Reasoning / knowledge:

- GPQA Diamond: **85.5%**; HLE with CoT: **24.3%** (Qwen model card).
- MMLU-Pro: **86.1%**; SuperGPQA: **65.6%** (Qwen model card).
- HMMT Feb 2025: **92.0%**; HMMT Nov 2025: **89.8%** (Qwen model card).
- Artificial Analysis Intelligence Index v4.3.2: **23 estimated**, #5/141 in its displayed class; independent evaluation was still forthcoming.
- CritPt / AA-Omniscience: no exact public component score exposed on the accessible Artificial Analysis page.

Coding:

- SWE-bench Verified: **72.4%** (Qwen model card).
- LiveCodeBench v6: **80.7%**; CodeForces: **1899**; OJBench: **40.1** (Qwen model card; CodeForces used Qwen's own query set).
- FullStackBench: **60.1** English / **57.4** Chinese (Qwen model card).
- SciCode / SWE-Pro / DeepSWE: no verified exact-model score found.

Long context:

- AA-LCR: **66.1**; LongBench v2: **60.6** (Qwen model card).
- Native context is 262,144 tokens. The 1,010,000-token extension is documented by Qwen, but no exact-model retrieval result at that extended limit was found.

Multimodal:

- MMMU: **82.3%**; MMMU-Pro: **75.0%**; MathVision: **86.0%** (Qwen model card).
- RealWorldQA: **83.7%**; MMStar: **81.0%**; HallusionBench: **70.0%** (Qwen model card).
- OmniDocBench 1.5: **88.9%**; CharXiv-RQ: **79.5%**; MMLongBench-Doc: **60.2%** (Qwen model card).

### Cross-source comparison

- The official Qwen card, Hugging Face configuration, OpenRouter catalog, and models.dev agree on the 262,144-token native context, multimodal architecture, tool support, and exact model identity.
- Hugging Face reports the release artifact at 27.781B parameters while the public model name and card round this to 27B; this is a precision difference rather than a separate variant.
- OpenRouter's current $0.27/$2.16 price is below Alibaba's $0.30/$2.40 price reported by Artificial Analysis and models.dev, so the cost score uses the named OpenRouter route and records the difference.
- Artificial Analysis marks the model deprecated in favor of Qwen3.6-27B. Its Intelligence Index value of 23 is explicitly estimated, so the independently unverified vendor benchmark suite remains the main limitation on scoring confidence.

### Normalized scores (1–100)

- **Tool use: 78/100.** TAU2 79.0 and BFCL-V4 68.5 show strong function and workflow behavior, but Terminal Bench 2 at 41.6 and the absence of exact GDPval-AA or Claw-Eval results keep it below frontier agent scores.
- **Reasoning: 78/100.** GPQA 85.5, HLE 24.3, and strong math results support high-end reasoning for this size, capped by the estimated rather than measured AA index and missing independent component results.
- **Context window: 74/100.** The verified 262K native window falls in the 200K–500K tier and has useful AA-LCR/LongBench results; the unbenchmarked 1.01M extension is not scored as a native million-token window.
- **Multimodal: 86/100.** Native image and video input plus strong MMMU, document, and visual-math results merit a high score, capped because output is text-only and audio is unsupported.
- **Coding: 79/100.** SWE-bench Verified 72.4 and LiveCodeBench 80.7 are strong, while Terminal Bench 2 at 41.6 and missing independent SciCode/DeepSWE results limit the score.
- **Cost efficiency: 93/100.** OpenRouter's $0.27/$2.16 per million tokens is inexpensive for this capability tier, though it is paid and cached input currently has no listed discount.
- **Overall Score: 79/100.** Half-up mean of the five quality dimensions `(78 + 78 + 74 + 86 + 79) / 5 = 79`; a strong open multimodal coding model when local deployment or low hosted cost matters more than frontier terminal autonomy.

---

## Signature

- Provided by: **GPT-5.6 Sol (openai/gpt-5.6-sol)** — 2026-10-24
- Method: independent public internet research using three exact-name searches and direct checks of Qwen's model card, Hugging Face metadata/configuration, OpenRouter, models.dev, and Artificial Analysis. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
