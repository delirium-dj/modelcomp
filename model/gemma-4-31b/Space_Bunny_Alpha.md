# Gemma 4 31B — findings by Space Bunny Alpha

- Source: Google (`google/gemma-4-31B-it`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 31B (instruction-tuned)
- **Short description:** Google's open-weight, 31B dense multimodal model for reasoning, coding, function calling, and local/edge deployment.
- **Provider / access:** Hugging Face `google/gemma-4-31B-it`; Transformers, vLLM, and compatible local runtimes. Cerebras Inference serves it at 1,851 output tokens/s, the fastest measured multimodal route.
- **Release / knowledge:** Hugging Face repository metadata shows creation on 2026-03-11; Artificial Analysis and LM Market Cap list the public release as **April 2026**. Google model-card citation identifies the Gemma 4 technical report as 2026. Training-data cutoff: **January 2025** (Google model card).
- **IDs:** `google/gemma-4-31B-it`; base model `google/gemma-4-31B`.
- **Context window:** **256K tokens** input (262,144) with a **16,384-token maximum output** (Google model card and LM Market Cap, re-verified 2026-09-29). The 16K output cap was **added** in this revision; the prior report recorded it as not shown.
- **Modalities:** Text, image, **and video** input; text output. **Video input is newly documented on the Artificial Analysis model page (re-verified 2026-09-29); the prior revision recorded text/image only.** Thinking can be enabled with the documented control token; native function calling is supported. The 31B Google table lists text/image, not audio, for this variant.
- **Pricing (as of 2026-09-29):** No fixed first-party Google API price. Artificial Analysis lists **$0.00/1M** for the open-weight route; third-party hosted routes are around **$0.09 in / $0.34 out per 1M** (LM Market Cap). Self-hosting has infrastructure cost. The model is not treated as free merely because it is open-weight.
- **Speed / latency:** Artificial Analysis measures **35.5 output tokens/s** (**#59 of 142**, below the 87.9 t/s open-weight median) and **1.00 s TTFT** (class median 2.20 s) on Google's API — the 35 t/s figure is confirmed, now quoted as 35.5. Cerebras reports **1,851 output tokens/s** and **~1.5 s** to first answer token. A community vLLM run on one RTX PRO 6000 reported ~0.7 s median TTFT. Speed is provider-dependent and drifts.
- **Release (AA):** AA states a release date of **April 2, 2026**; the model page header says April 2026. Available through **12 API providers** on AA.
- **Architecture:** Dense **30.7B** total parameters; 60 layers; hybrid local/global attention with a 1024-token sliding window; ~550M vision encoder parameters; Apache-2.0 weights/license.
- **Deprecation:** **No deprecation, retirement, or shutdown date is published.** The model remains a current open-weight release; no successor has been named.

### Raw benchmarks found

Agent / tool use:

- Tau2 (average over 3): **76.9%** (Google Gemma 4 model card table, 31B column)
- Gert Labs composite game benchmark: **35.26%** (BenchLM, Gemma 4 31B row) — **added** in this revision.
- SWE-Rebench: **41.6%** (BenchLM, Gemma 4 31B row) — **added**.
- Native function calling and reasoning/tool workflow support are documented; no separate exact Terminal-Bench, Toolathlon, or MCP-Atlas score was found.

Reasoning / knowledge:

- GPQA Diamond: **84.3%** (Gemma 4 Hugging Face model-card eval result)
- MMLU-Pro: **85.2%** (Gemma 4 Hugging Face model-card eval result)
- AIME 2026 no tools: **89.2%** (Google Gemma 4 model-card table, 31B column)
- HLE no tools: **19.5%**; HLE with search: **26.5%** (Google Gemma 4 model-card table, 31B column)
- MMMLU: **88.4%**; BigBench Extra Hard: **74.4%** — **added** (Google model-card table, 31B column)
- Artificial Analysis Intelligence Index **v4.3.2**: **19 (estimated)**, ranked **#28 of 679** overall and **#13 of 142** within its intelligence comparison class (comparable-model median 8) — **changed**: the prior revision recorded the displayed value 30 and no v4.3.2 reading. The 19 is flagged "Estimate (independent evaluation forthcoming)". The non-reasoning variant is listed at 22 on a stale-index comparison page.
- LCR/MLCR, CritPt, and hallucination metrics: **no verified public exact value found**

Coding:

- LiveCodeBench v6: **80.0%** (Google Gemma 4 model-card table, 31B column)
- Codeforces ELO: **2150** — **added** (Google model-card table, 31B column)
- React Native Evals: **75.2%** (BenchLM, Gemma 4 31B row) — **added**
- AIME/math and general model-card results are not substituted for SWE-bench Verified, DeepSWE, SciCode, or Vibe Code Bench.
- SWE-bench Verified / SWE-Pro, DeepSWE, SciCode, and Vibe Code Bench: **no verified public exact value found**

Long context:

- MRCR v2, 8-needle, 128K: **66.4% average** (Google Gemma 4 model-card table, 31B column)
- Native context: **256K tokens**; maximum output **16,384 tokens**

Multimodal (supporting, 31B column):

- MMMU-Pro: **76.9%**; MATH-Vision: **85.6%**; OmniDocBench 1.5 average edit distance: **0.131**; MedXPertQA MM: **61.3%**

Sources consulted: [Google Gemma 4 model card](https://ai.google.dev/gemma/docs/core/model_card_4), [Gemma 4 31B Hugging Face model card](https://huggingface.co/google/gemma-4-31b-it), [Artificial Analysis Gemma 4 31B](https://artificialanalysis.ai/models/gemma-4-31b), [Cerebras Gemma 4 blog](https://www.cerebras.ai/blog/gemma-4-on-cerebras-the-fastest-inference-is-now-multimodal), [BenchLM Gemma 4 comparison](https://benchlm.ai/compare/gemma-4-26b-a4b-vs-gemma-4-31b), and [LM Market Cap Gemma 4 31B](https://lmmarketcap.com/model/gemma-4-31b), accessed 2026-09-29. Table values are attributed to the 31B column and are not mixed with the 26B A4B or smaller variants.

### Normalized scores (1–100)

- **Tool use: 68/100.** Down from 73. Tau2 76.9% and native function calling remain credible, but Gert Labs 35.26% and SWE-Rebench 41.6% pull the measured agentic picture down, no exact Terminal-Bench, Toolathlon, or MCP score was found, and the newly verified v4.3.2 index of 19/58 is dominated by agentic evals (AA-Briefcase v1.1, AutomationBench-AA, Terminal-Bench 4.0, τ³-Banking). Score changed.
- **Reasoning: 72/100.** Down from 76. AIME 2026 89.2%, GPQA 84.3%, MMLU-Pro 85.2%, MMMLU 88.4%, and BBH 74.4% are strong model-card numbers, while HLE 19.5% without tools and 26.5% with search are substantially lower; LCR/CritPt remain absent and the **newly verified v4.3.2 index of 19/58 (ceiling 58) is the reason for the drop** — the prior revision's score was written with no v4.3.2 reading available. Score changed.
- **Context window: 82/100.** The 256K input context is verified and MRCR 128K 66.4% is a direct retrieval result, placing the model in the 200K–500K tier rather than the top 500K+ tier; the newly documented 16K output cap does not move the tier. Score unchanged.
- **Multimodal: 92/100.** Up from 90. The 31B column reports MMMU-Pro 76.9%, MATH-Vision 85.6%, and OmniDocBench 1.5, and **Artificial Analysis now explicitly documents video input alongside text and image** (audio is still not listed). Score changed.
- **Coding: 76/100.** LiveCodeBench v6 80.0%, Codeforces ELO 2150, and React Native Evals 75.2% are useful, but exact SWE-bench, DeepSWE, SciCode, and Vibe Code Bench results are still unavailable. Score unchanged.
- **Cost efficiency: 88/100.** Open weights and self-hosting avoid a mandatory vendor token price (AA lists $0.00/1M), while the 31B dense model still has substantial compute requirements; third-party routes run roughly $0.09/$0.34. Score unchanged.
- **Overall Score: 78.0/100.** (68 + 72 + 82 + 92 + 76) / 5 = 390 / 5 = 78.0, down from 79.4 on 2026-09-29. The driver is the newly verified AA Intelligence Index **v4.3.2 value of 19 (ceiling 58)**, which lowered Tool use and Reasoning; newly documented video input partly offset it under Multimodal. Best fit: self-hosted multimodal reasoning and coding where an Apache-2.0 31B model and image/video understanding matter more than frontier tool scores.

---

## Signature

- Provided by: **Space Bunny Alpha (opencode/space-bunny-free)** — 2026-09-29
- Method: Public web research of Google's official Gemma 4 model card, the exact Hugging Face model card, Artificial Analysis, Cerebras, BenchLM, and LM Market Cap; scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
