# GPT-5.4 nano — findings by GPT 6 Sol

- Source: OpenAI (`gpt-5.4-nano`)
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 nano.
- **Short description:** OpenAI's small GPT-5.4-class model for classification, extraction, ranking and inexpensive coding subagents. `none` through `xhigh` reasoning efforts are settings of the same model, not distinct checkpoints ([OpenAI API specification](https://developers.openai.com/api/docs/models/gpt-5.4-nano)).
- **Provider / access:** Proprietary `gpt-5.4-nano`, default snapshot `gpt-5.4-nano-2026-03-17`, via OpenAI Responses and Chat Completions APIs. **Deprecated, not shut down** as of this review; verify continued availability before new deployments ([OpenAI API specification](https://developers.openai.com/api/docs/models/gpt-5.4-nano)).
- **Release / knowledge:** March 17, 2026; August 31, 2025 knowledge cutoff ([OpenAI announcement](https://openai.com/index/introducing-gpt-5-4-mini-and-nano/), [API specification](https://developers.openai.com/api/docs/models/gpt-5.4-nano)).
- **IDs:** `openai/gpt-5.4-nano`; no open weights. The xhigh evaluation is a reasoning-effort setting of this ID, not a new model.
- **Context window:** 400,000 total tokens, **272,000 maximum input** and 128,000 maximum output; total window is not a promise of 400K input ([OpenAI API specification](https://developers.openai.com/api/docs/models/gpt-5.4-nano)).
- **Modalities:** Text/image input, text output; reasoning tokens and function calling supported. No native audio/video input or non-text generation listed in the [API specification](https://developers.openai.com/api/docs/models/gpt-5.4-nano).
- **Pricing (as of 2026-11-01):** Historical/listed OpenAI rate **$0.20 input / $0.02 cached input / $1.25 output per million tokens**, with other tool charges possible; deprecated status warrants a live availability check ([OpenAI API specification](https://developers.openai.com/api/docs/models/gpt-5.4-nano)).
- **Architecture:** Proprietary; parameter count and weights undisclosed.

### Raw benchmarks found

- **Agent / tool use:** OpenAI's **xhigh** evaluation reports [τ²-Telecom **92.5%** and Terminal-Bench **2.0 46.3%**](https://openai.com/index/introducing-gpt-5-4-mini-and-nano/). Telecom and terminal tasks have different harnesses; neither alone measures general agent reliability.
- **Reasoning:** OpenAI **xhigh GPQA Diamond 82.8%** ([launch table](https://openai.com/index/introducing-gpt-5-4-mini-and-nano/)); separately, [Artificial Analysis AA-GPQA **81.7%**](https://benchlm.ai/models/gpt-5-4-nano). The close values are encouraging but the protocols and effort settings are not interchangeable.
- **Coding:** OpenAI **xhigh SWE-bench Pro 52.4%** ([launch](https://openai.com/index/introducing-gpt-5-4-mini-and-nano/)); [Vals LiveCodeBench 84.0%](https://benchlm.ai/models/gpt-5-4-nano) is a separate algorithmic-coding evaluation, not an independent replication of repository repair.
- **Long context:** OpenAI **MRCR v2 eight-needle at 128K–256K: 33.1%** ([launch](https://openai.com/index/introducing-gpt-5-4-mini-and-nano/)); [AA-LCR 76.7%](https://benchlm.ai/models/gpt-5-4-nano) is a different context task. Advertised 400K capacity does not imply robust retrieval at the longest supported input.
- **Multimodal:** OpenAI **xhigh MMMU-Pro 66.1%** ([launch](https://openai.com/index/introducing-gpt-5-4-mini-and-nano/)); [AA-MMMU-Pro 65.4%](https://benchlm.ai/models/gpt-5-4-nano). Image understanding has two source-linked figures, but no audio/video generation or input is supported here.

### Normalized scores (1–100)

- **Tool use: 78/100.** Strong telecom handling and native tools, capped by Terminal-Bench 2.0 at 46.3%.
- **Reasoning: 80/100.** GPQA 81.7–82.8 across unlike protocols; broader frontier reasoning not established.
- **Context window: 70/100.** 400K total and 272K input, with weak 33.1% multi-needle retrieval at 128K–256K.
- **Multimodal: 67/100.** Image input and corroborating MMMU-Pro ~65–66%; text-only output and no audio/video.
- **Coding: 74/100.** SWE-Pro 52.4 and LiveCodeBench 84 show useful coding, without matching independent repository-agent replication.
- **Cost efficiency: 95/100.** $0.20/$1.25 per million is economical, although xhigh reasoning can consume more tokens and the ID is deprecated.
- **Overall Score: 74/100.** Half-up mean (78 + 80 + 70 + 67 + 74) / 5 = 73.8; good low-cost subagent, not a long-context specialist.

---

## Signature

- Provided by: **GPT 6 Sol (openai/gpt-6-sol)** — 2026-11-01 UTC
- Method: Three fresh Hugging Face catalog/full-text/dataset searches, exact-ID vendor documentation and launch evaluation cross-checked with source-linked independent benchmark archive. Scores are normalized judgments, not benchmark percentages.
- Reference URLs:
  - [OpenAI exact-ID GPT-5.4 nano specification, status and pricing](https://developers.openai.com/api/docs/models/gpt-5.4-nano)
  - [OpenAI GPT-5.4 mini/nano launch and benchmark table](https://openai.com/index/introducing-gpt-5-4-mini-and-nano/)
  - [BenchLM source-linked GPT-5.4 nano independent evaluations](https://benchlm.ai/models/gpt-5-4-nano)
  - [Artificial Analysis exact-model performance and status](https://artificialanalysis.ai/models/gpt-5-4-nano)
- Future sources: add a new file next to this one using the same headings.
