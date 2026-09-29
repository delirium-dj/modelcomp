# Llama 3.2 Vision Instruct (11B) — findings by Space Bunny Alpha

- Source: Meta / Llama-3.2-11B-Vision-Instruct
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Llama 3.2 Vision Instruct (11B)
- **Short description:** Meta's 11B instruction-tuned multimodal model for image understanding, visual reasoning, document QA, captioning, and assistant-style image chat. It is now a two-year-old 2024 release, and the first independent composite row for it has appeared — and is weak.
- **Provider / access:** Hugging Face `meta-llama/Llama-3.2-11B-Vision-Instruct`; local Transformers, vLLM, and SGLang deployment; one third-party API provider is listed by Artificial Analysis. The model is gated under Meta's Llama 3.2 Community License.
- **Release / knowledge:** Model release 2024-09-25 on the Hugging Face model card (Artificial Analysis records the same date); pretraining knowledge cutoff December 2023, which Artificial Analysis dates more precisely as **2023-12-01**.
- **IDs:** `meta-llama/Llama-3.2-11B-Vision-Instruct`. Artificial Analysis tracks it as "Llama 3.2 Instruct 11B (Vision)", non-reasoning variant.
- **Context window:** 128K tokens (Meta model card; Artificial Analysis shows 128k and rounds it to 130k).
- **Modalities:** Text and image input, text output; the official chat template supports single function/tool calls, but no general agent or native reasoning mode is documented. Artificial Analysis confirms text-and-image input and explicitly records this as a **non-reasoning** model.
- **Pricing (as of 2026-09-29):** No first-party hosted token price. **New data:** Artificial Analysis now records the median across serving providers at **$0.34 input / $0.34 output per 1M** (blended 7:2:1 = $0.35), and calls the input rate "expensive" against a $0.15 class median. Local deployment uses the open weights under the Llama 3.2 Community License.
- **Architecture:** 11B (10.6B) dense autoregressive transformer with a separately trained vision adapter and cross-attention layers; the adapter supplies image representations to the Llama language model.

> **New since 2026-09-25: a real Artificial Analysis leaderboard row exists.** It is flagged on the site as **"Estimate (independent evaluation forthcoming)"** — i.e. the value is AA's own provisional figure for this model, not a completed independent run. It is reported here with that flag attached and must not be quoted as a measured score.

### Raw benchmarks found

> The official Meta model card reports the 11B and 90B instruction-tuned vision models side by side. The values below are the 11B column. Where Artificial Analysis now has a figure, both are shown and kept distinct: Meta's are vendor-run on Meta's internal evaluation library, AA's are independent.

Agent / tool use:

- No exact public agentic tool-use benchmark for the 11B vision model was found. The official chat template documents single function-call formatting, but that is capability documentation rather than a measured agent score. The AA Intelligence Index **estimate** of 5 blends agentic evaluations (AA-Briefcase, GDPval-AA, AutomationBench-AA, Terminal-Bench 4.0) with the rest, so no agentic sub-score can be extracted from it.

Reasoning / knowledge:

- **Artificial Analysis Intelligence Index: 5, rank #56/75** in its class — flagged on AA's page as an **estimate** pending its own evaluation run. The class (open-weight non-reasoning models of similar size) has a median of **6**, so the model sits *below* the median of its own peer group. The index version on this page is **v4.3.2**. This is the first independent composite measurement of this model and it does not flatter the vendor table below.
- GPQA: **32.8%**; MMLU (CoT): **73.0%**; MATH (CoT): **51.9%** (official Meta instruction-tuned vision table).
- MGSM (CoT): **68.9%** (official Meta instruction-tuned vision table).
- Knowledge cutoff: December 2023 (official model card; 2023-12-01 per Artificial Analysis).

Coding:

- No exact SWE-bench, LiveCodeBench, or coding benchmark for the 11B vision model was found. SciCode is included in the v4.3.2 index but no per-evaluation value is published for this model.

Long context:

- Context length is **128K** (official model card; AA rounds to 130k), but no exact-model long-context retrieval benchmark — no AA-LCR, MRCR, RULER or GraphWalks value — was found.

Multimodal:

- MMMU (val, CoT): **50.7%**; MMMU-Pro Standard: **33.0%**; MMMU-Pro Vision: **23.7%** (official Meta table).
- MathVista testmini: **51.5%**; ChartQA test CoT: **83.4%**; AI2 Diagram test: **91.1%** (official Meta table).
- DocVQA test: **88.4 ANLS**; VQAv2 test: **75.2%** (official Meta table).
- Artificial Analysis confirms text-and-image input / text output and runs MMMU-Pro among its evaluations, but publishes no per-evaluation value for this model.
- Base-model (not instruction-tuned) image-understanding figures for the same vision tower, for completeness: VQAv2 val 66.8, TextVQA val 73.1, DocVQA val (unseen) 62.3 ANLS, MMMU val 0-shot 41.7, ChartQA test 39.4, InfographicsQA val 43.2 ANLS, AI2 Diagram test 62.4. These are *not* scored here — the instruction-tuned column is the tracked model.

Sources consulted: [Meta Llama 3.2 Vision model card (GitHub)](https://github.com/meta-llama/llama-models/blob/main/models/llama3_2/MODEL_CARD_VISION.md) and [Hugging Face model card](https://huggingface.co/meta-llama/Llama-3.2-11B-Vision-Instruct), and [Artificial Analysis — Llama 3.2 11B (Vision)](https://artificialanalysis.ai/models/llama-3-2-instruct-11b-vision) (Intelligence Index v4.3.2 page, read 2026-09-29).

### Normalized scores (1–100)

- **Tool use: 48/100.** Unchanged. Single function-call formatting is documented, but no exact public agent/tool benchmark verifies reliable multi-step tool use, and the AA composite estimate of 5 gives nothing extractable to the contrary.
- **Reasoning: 45/100.** **Down from 55.** The Meta table (GPQA 32.8%, MMLU 73.0%, MATH 51.9%, MGSM 68.9%) is entirely vendor-run on Meta's own evaluation library, and it is now contradicted in direction by an independent composite: the **AA Intelligence Index 5 (estimate), rank #56/75, below the 6 class median**. That is not proof the vendor numbers are wrong, but it removes any basis for crediting them at face value, and a 2024 model at index 5 is genuinely at the bottom of even the small-model field. The drop is to reflect the new evidence, not a claim that GPQA dropped.
- **Context window: 58/100.** Unchanged. The 128K verified window is substantial for a 2024 11B vision model, but there is still no dedicated long-context retrieval result.
- **Multimodal: 76/100.** Unchanged. Strong DocVQA 88.4 ANLS, AI2 Diagram 91.1%, ChartQA 83.4%, MMMU 50.7% and VQAv2 75.2% show real image and document understanding, while MMMU-Pro Vision at 23.7% limits the top end. Artificial Analysis's confirmation of text-and-image input supports the modality, not the quality level.
- **Coding: 28/100.** Unchanged. No exact public coding benchmark was found, so the score reflects the absence of verified coding evidence rather than a measured coding failure.
- **Cost efficiency: 72/100.** **Down from 86.** The open-weight story still holds for self-hosting, but the first real hosted pricing data is unfavourable: **$0.34 in / $0.34 out per 1M at the provider median**, with input called expensive against a $0.15 class median, plus measured slowness — **15.0 output tokens/second (rank #29/75, class median 90.4) and TTFT 2.50 s** (class median 2.16 s). For a vision model that pays an image-token premium on input, a slow, high-rate hosted route is a poor trade; self-hosting on your own hardware is the only way this model earns its cost score.
- **Overall Score: 51.0/100.** (48 + 45 + 58 + 76 + 28) / 5 = 255 / 5 = 51.0 — **down from 53.0**, from Reasoning 55 → 45 and Cost efficiency 86 → 72 on the new independent evidence. Tool use, Context window, Multimodal and Coding are unchanged. A capable, economical **locally hosted** vision model for document and image QA, best for visual assistants and lightweight multimodal applications rather than frontier agents or coding — but the 2026 evidence base no longer supports calling it strong on general reasoning, and it should not be picked as a cheap hosted API route.

---

## Signature

- Provided by: **Space Bunny Alpha (opencode/space-bunny-free)** — 2026-09-29
- Method: Meta's official Llama 3.2 Vision model card and Hugging Face documentation, plus the Artificial Analysis model page (Intelligence Index **v4.3.2**, read 2026-09-29) for the independent composite, speed, latency and hosted-price data; scores are normalized 1–100 interpretations, not official vendor scores.
- **Re-validation 2026-09-29 (MATERIAL):** an Artificial Analysis row now exists for this model — **Intelligence Index 5 (flagged "Estimate (independent evaluation forthcoming)"), rank #56/75 against a class median of 6**, on v4.3.2. New hosted-price, output-speed and TTFT data accompanied it ($0.34/$0.34 per 1M; 15.0 t/s; 2.50 s TTFT). Reasoning 55 → 45, Cost efficiency 86 → 72; Overall 53.0 → 51.0. No benchmark from Meta's own table was found to have changed.
- Future sources: add a new file next to this one, e.g. `Llama_3_2_Vision_Recheck.md`, using the same headings.
