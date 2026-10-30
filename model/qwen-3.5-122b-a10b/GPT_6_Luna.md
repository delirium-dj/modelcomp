# Qwen 3.5 122B A10B — findings by GPT-6 Luna

- Source: Alibaba/Qwen 3.5 122B A10B (`Qwen/Qwen3.5-122B-A10B`)
- Date: 2026-10-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 122B A10B
- **Short description:** Alibaba's February 2026 Apache-2.0 open-weight MoE, approximately 122B/125B total and 10B active, for multimodal reasoning and tool-using agents; this is the A10B size, not the Qwen 3.5 family shorthand.
- **Provider / access:** Hugging Face `Qwen/Qwen3.5-122B-A10B`; vLLM/SGLang and hosted OpenRouter/SiliconFlow/Alibaba Model Studio routes. Chat Completions-compatible hosted access is documented.
- **Release / knowledge:** Released 2026-02; knowledge cutoff not published in the reviewed sources.
- **IDs:** `Qwen/Qwen3.5-122B-A10B` and the matching hosted route `qwen/qwen3.5-122b-a10b`.
- **Context window:** 262,144 native tokens, extensible to approximately 1,010,000 with the documented long-context method; 65,536 maximum output in the curated route metadata.
- **Modalities:** Text, image and video input; text output; thinking/reasoning and tool calling supported.
- **Pricing (as of 2026-10-30):** $0.26/$2.08 per 1M input/output on the collected OpenRouter snapshot, $0.40/$3.20 on Model Studio; Apache-2.0 self-hosting is free; no Zen Free ID.
- **Architecture:** Apache-2.0 sparse MoE, approximately 122B total / 10B active; exact layer and routing details are taken from the upstream model card.

### Raw benchmarks found

Agent / tool use:

- Artificial Analysis Tau2: **93.57%**; Tau3-Banking: **15.26%**; Terminal-Bench 2.1: **47.57%**; GDPval-AA: **814.01 Elo** (exact Qwen3.5 122B A10B page).
- No exact-model Claw-Eval or Toolathlon result was verified.

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **16**; GPQA: **85.66%**; AA-LCR: **76.33%**; IFBench: **75.71%**; HLE: **25.21%**; CritPt: **0.57%**.

Coding:

- Curated upstream metadata reports SWE-bench Verified **72.0%** and Terminal-Bench 2.0 **49.4%**; Artificial Analysis reports SciCode **39.70%**. Harness and snapshot differences are kept separate.

Long context:

- 262K native / approximately 1.01M extensible; AA-LCR **76.33%**. No exact-model MRCR curve was verified.

Multimodal:

- Artificial Analysis MMMU-Pro: **74.97%**; the upstream route supports image and video input.

### Normalized scores (1–100)

- **Tool use: 62/100.** Tau2 93.57% is strong, but Tau3-Banking 15.26%, Terminal-Bench 47.57%, GDPval 814 and no Claw-Eval cap general tool use.
- **Reasoning: 72/100.** GPQA 85.66% and LCR 76.33% are solid, while the AA index 16, HLE 25.21% and CritPt 0.57% cap the score.
- **Context window: 72/100.** Native 262K reaches the 200K-to-500K tier; the 1.01M extension is not scored as native and retrieval evidence is limited to 76.33% LCR.
- **Multimodal: 76/100.** Image/video input and 74.97% MMMU-Pro place it in the strong multimodal band; text-only output and no audio result cap it.
- **Coding: 66/100.** SWE-bench 72.0% is useful, but Terminal-Bench 49.4% and SciCode 39.70% keep general coding below the frontier.
- **Cost efficiency: 85/100.** Hosted prices are moderate and self-hosting is free under Apache 2.0, but the 122B stack is expensive to operate locally.
- **Overall Score: 69.6/100.** Mean of the five non-cost quality dimensions: (62 + 72 + 72 + 76 + 66) / 5 = 69.6. Cost efficiency is excluded. Best for multimodal open-weight agents with enough memory for a large MoE.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna)** — 2026-10-30 UTC
- Method: Public web research using the upstream Qwen card, Artificial Analysis exact-model measurements and hosted pricing records; variant-specific figures are not substituted. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Source 1](https://huggingface.co/Qwen/Qwen3.5-122B-A10B)
  - [Source 2](https://openrouter.ai/qwen/qwen3.5-122b-a10b)
  - [Source 3](https://artificialanalysis.ai/models/qwen3-5-122b-a10b)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
