# Gemma 4 31B — findings by GPT-6 Luna

- Source: Google DeepMind/Gemma 4 31B IT
- Date: 2026-10-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 31B
- **Short description:** Google's open-weight, dense 31B-parameter instruction-tuned Gemma 4 model. It combines configurable reasoning, coding and agentic tool calling with text/image understanding; video can be handled as image frames, but this 31B model does not have the family's native audio input.
- **Provider / access:** Downloadable weights on Hugging Face as `google/gemma-4-31B-it`, plus hosted/community providers. This report scores the instruction-tuned 31B checkpoint, not Gemma 4 26B A4B or the smaller E/12B variants.
- **Release / knowledge:** Gemma 4 was released **2026-04-02**. The model card gives a training-data cutoff of **2025-01**.
- **IDs:** Weight/model-card ID `google/gemma-4-31B-it`; base checkpoint `google/gemma-4-31B`. Hosted API IDs vary by provider; no single first-party API model ID was verified for the open checkpoint.
- **Context window:** **256K tokens** for 31B, per Google's model card. The card reports MRCR v2 8-needle average at **128K**; it does not show a measured 256K retrieval percentage.
- **Modalities:** Text and image input, text output. The model card describes video processing by sampling frames; it lists no audio input for 31B (audio is available on E2B, E4B and 12B variants). Supports configurable thinking and native function calling.
- **Pricing (as of 2026-10-29):** The weights are available under **Apache 2.0**, with no model royalty for self-hosting. Hosting, accelerator hardware and provider API charges vary; I found no single current first-party token tariff for this checkpoint. Artificial Analysis displays $0 token rates for its tracked Google API route, but this does not establish that all inference providers are free.
- **Architecture:** Dense **30.7B-parameter** model (all dense parameters active); **60 layers**, hybrid local sliding-window/global attention with a **1,024-token** sliding window, and an approximately **550M-parameter vision encoder**. Apache 2.0 open weights.

### Raw benchmarks found

Google's model card and DeepMind product page are both vendor-published evaluations, not independent reruns. Their results are kept under the exact benchmark labels shown, including where a table reports a family subtask rather than the aggregate.

Agent / tool use:

- τ²-bench: **76.9% average over three** (Google model card).
- τ²-bench Retail: **86.4%** (Google DeepMind performance table, marked “as of 2026-04-02”). This is a Retail result, not interchangeable with the model card's three-part average.
- Native function calling is supported (Google model card); no verified Terminal-Bench or GDPval-AA result found.

Reasoning / knowledge:

- GPQA Diamond: **84.3%**; AIME 2026 without tools: **89.2%**; HLE without tools: **19.5%** and with search: **26.5%** (Google model card).
- Google DeepMind's public table reports **MMMLU 85.2%** (no tools), whereas the model card reports **MMLU-Pro 85.2%**. Same numeric value, different benchmark labels; they are not treated as the same test.

Coding:

- LiveCodeBench v6: **80.0%**; Codeforces: **2,150 Elo** (Google model card).
- No verified public SWE-bench Verified, SWE-bench Pro, or SciCode score found.

Multimodal / long context:

- MMMU-Pro: **76.9%** (Google model card; multimodal reasoning).
- MRCR v2, 8-needle, 128K average: **66.4%** (Google model card). This measures retrieval at 128K, not the full 256K context limit.
- Google DeepMind also reports MMMU-Pro **76.9%** in its public performance table. Artificial Analysis independently lists the 31B model as **256K**, **30.7B**, and Apache 2.0; its page describes text/image/video input, but Google’s model card clarifies video is processed as frames and that 31B has no native audio input.

### Normalized scores (1–100)

- **Tool use: 78/100.** τ²-bench is 76.9% averaged across three tasks and 86.4% on Retail; native function calling is available. No verified Terminal-Bench or GDPval-AA result limits confidence on broader tool-work performance.
- **Reasoning: 83/100.** GPQA Diamond is 84.3%, AIME 2026 is 89.2%, and HLE is 19.5% without tools (26.5% with search); the lower HLE result caps the score.
- **Context window: 76/100.** The 256K specification falls in the 200K–500K tier; MRCR v2 is 66.4% at 128K, with no verified retrieval score at 256K.
- **Multimodal: 82/100.** Image input plus video-as-frames qualifies above image-only under the project scale; no native audio input or non-text output is documented for the 31B variant.
- **Coding: 81/100.** LiveCodeBench v6 is 80.0% and Codeforces is 2,150 Elo, but no SWE-bench or SciCode result was verified.
- **Cost efficiency: 100/100.** Apache 2.0 open weights have no model royalty; this score does not erase the substantial hardware/hosting cost of running a dense 31B model.
- **Overall Score: 80/100.** Half-up mean of quality dimensions: `(78 + 83 + 76 + 82 + 81) / 5 = 80`. A strong open-weight local model for reasoning, coding, and visual document work; context retrieval at the full limit and hosted serving costs remain caveats.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna)** — 2026-10-29
- Method: Three independent public searches; Google's [Gemma 4 model card](https://ai.google.dev/gemma/docs/core/model_card_4), [Google DeepMind performance page](https://deepmind.google/models/gemma/gemma-4/), official [Hugging Face checkpoint](https://huggingface.co/google/gemma-4-31B-it), and the [Artificial Analysis model listing](https://artificialanalysis.ai/models/gemma-4-31b). Google-published benchmark results, third-party specifications, task subsets, modalities and context limits are labeled separately. Scores are normalized interpretations, not official ratings.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
