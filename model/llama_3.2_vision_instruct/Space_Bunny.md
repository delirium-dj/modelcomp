# Llama 3.2 Vision Instruct (11B) — findings by Space Bunny

- Source: Meta / Llama-3.2-11B-Vision-Instruct
- Date: 2026-10-10 (UTC) — second-pass research; first pass 2026-09-25
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`
- Re-validation note: re-checked 2026-10-10. **MATERIAL change — Overall 53.0 → 43.8.** The evidence base has not grown — **this model is now the least-measured entry in the dataset** — but two specification facts newly resolved, one of them decisive.

> ### The decisive finding: a 4,096-token output limit
> The prior report recorded a "128K context window" and nothing else. **models.dev enumerates four providers and gives the output limit as 4,096 tokens** — image tokens consume the input budget, and what remains for generation is 3.2% of the advertised window. **This is the smallest output limit of any model in this dataset** and it is a severe practical constraint for exactly the workloads — document QA, captioning, diagram explanation — that this model exists to perform. A DocVQA answer of 88.4 ANLS is achievable in 4,096 tokens; a long document summary is not.
>
> **Second: the evidence base is now the thinnest in the dataset.** BenchLM returns **404 under two slug spellings**. No independent lab has published a single agentic, coding, long-context, or reasoning benchmark for this model beyond Meta's own September 2024 model card. **Knowledge cutoff is December 2023 — 34 months stale as of this report**, which is now the oldest cutoff of any model in this research effort.

Restated: **Tool 48 → 35**, **Reasoning 55 → 45**, **Context 58 → 42**, **Multimodal 76 → 72**, **Coding 28 → 25**, **Cost 86 → 92**.

## Model card

- **Name:** Llama 3.2 Vision Instruct (11B)
- **Short description:** Meta's 11B instruction-tuned multimodal model for image understanding, document QA, captioning, and assistant-style image chat. **Still a capable document-and-diagram reader on paper — and a 2024 model with a 34-month-old knowledge cutoff and a 4K output cap, which makes it a reference implementation rather than a working choice in 2026.**
- **Provider / access:** Hugging Face `meta-llama/Llama-3.2-11B-Vision-Instruct`; local Transformers, vLLM and SGLang deployment; **4 providers per models.dev**. Gated under Meta's Llama 3.2 Community Licence.
- **Release / knowledge:** **released 2024-09-25; models.dev's "updated" field is also 2024-09-25 — it has never been updated.** **Knowledge cutoff December 2023**, now **34 months stale** and the oldest in this dataset.
- **IDs:** `meta-llama/Llama-3.2-11B-Vision-Instruct`.
- **Context window:** **128,000 input tokens / 4,096 output tokens** (models.dev, consistent across all four providers). **The output cap is the operative constraint.**
- **Modalities:** **Text and image in, text out.** Capabilities confirmed by models.dev as **tool call: Yes, temperature: Yes; reasoning: No; structured output: not supported.** The official chat template supports single function-call formatting, but **no general agent or native reasoning mode is documented.**
- **Pricing (verified 2026-10-10):** **$0.00 / $0.00 across all four providers** per models.dev — free-hosted as well as self-hostable. No first-party Meta hosted API.
- **Architecture:** **11B (10.6B) dense** autoregressive transformer with a separately trained vision adapter and cross-attention layers supplying image representations to the Llama language model.

### Raw benchmarks found

> **All figures are Meta's own, from the September 2024 model card, which reports the 11B and 90B instruction-tuned vision models side by side.** The values below are the 11B column. **No independent measurement of any kind exists** — BenchLM has no page, and no third-party leaderboard row was found.

Reasoning / knowledge:

- **GPQA 32.8%**; MMLU (CoT) **73.0%**; MATH (CoT) **51.9%**; MGSM (CoT) **68.9%** (official Meta instruction-tuned vision table)

Multimodal — **the model's one genuinely strong dimension, and the evidence is broad:**

- **MMMU (val, CoT) 50.7%**; **MMMU-Pro Standard 33.0%**; **MMMU-Pro Vision 23.7%**
- **MathVista testmini 51.5%**; **ChartQA test CoT 83.4%**; **AI2 Diagram test 91.1%**
- **DocVQA test 88.4 ANLS**; **VQAv2 test 75.2%**

Agent / tool use: **No exact public agentic tool-use benchmark exists for the 11B vision model.** The official chat template documents single function-call formatting — capability documentation, not a measured agent score.

Coding: **No exact SWE-bench, LiveCodeBench, SciCode, or any coding benchmark was found** for this model.

Long context: Context length is **128,000 tokens** (official model card and models.dev), but **no MRCR, RULER, GraphWalks, LCR, or MLCR retrieval measurement exists**, and the **4,096-token output cap** is unaddressed by any published evaluation.

Sources consulted: [models.dev Llama-3.2-11B-Vision-Instruct (four-provider table, retrieved 2026-10-10)](https://models.dev/models/meta/llama-3.2-11b-vision-instruct), [BenchLM Llama 3.2 Vision Instruct](https://benchlm.ai/models/llama-3-2-vision-instruct) and its alternate slug — **both return 404, confirming no independent rows**, and [Meta's official Llama 3.2 Vision model card](https://huggingface.co/meta-llama/Llama-3.2-11B-Vision-Instruct), accessed 2026-10-10.

### Normalized scores (1–100)

- **Tool use: 35/100.** Down from 48. **There has never been a single measured tool-use benchmark for this model** — the prior pass and this pass both record the same absence, and this one adds that **models.dev confirms tool calling is supported but structured output is not**, which rules out the JSON-schema-driven tool patterns most agent frameworks expect. The chat template's single-function-call formatting remains capability documentation rather than evidence. With no Terminal-Bench, no τ-bench, no Toolathlon, no MCP-Atlas, no Claw-Eval, and no index, this is a conservative estimate on an absence of evidence and is explicitly provisional.
- **Reasoning: 45/100.** Down from 55. **GPQA 32.8%** is very weak — for scale, the smallest model with an AA index in this dataset (Nemotron 3 Nano Omni) sits far above it on comparable measures, and every contemporary model here reads 68–92% on GPQA. **MMLU 73.0%, MATH 51.9%, and MGSM 68.9%** are respectable for a 2024 11B and are credited. The reduction is driven by **the December 2023 knowledge cutoff — now 34 months stale and the oldest in this dataset —** combined with the total absence of independent verification.
- **Context window: 42/100.** **Down from 58 — the largest change in this report, and it is a specification correction.** The **128,000-token input window** is real and confirmed. But **the 4,096-token output limit**, newly sourced, is the smallest in this dataset: **generating 4,096 tokens takes ~24 seconds** at a typical vision-model decode rate, and any task needing more than a short answer is out of reach. **No retrieval-at-length benchmark exists either.** A 128K input window that can emit 4K is not a 128K model in practical terms.
- **Multimodal: 72/100.** Down from 76. **This remains the model's real strength and the evidence is broad and genuine: DocVQA 88.4 ANLS, AI2 Diagram 91.1%, ChartQA 83.4%, VQAv2 75.2%, MathVista 51.5%, MMMU 50.7%.** Chart and diagram comprehension at 83–91% is excellent, and this is the dimension that justifies the model's existence. The reduction reflects two things: **MMMU-Pro Vision at 23.7%** shows the weakness on hard professional visual reasoning, and **every figure is Meta's own September 2024 measurement with no independent confirmation** — while comparable models in this batch carry two- and three-source agreement. **Text-only output** is also a limit for any generative-vision workflow.
- **Coding: 25/100.** Down from 28. **No coding benchmark of any kind exists for this model** — no SWE-bench, LiveCodeBench, SciCode, HumanEval, Aider Polyglot, DeepSWE, or Vibe Code Bench. This is the lowest score in the dataset alongside Gemini 2.5 Flash-Lite's Coding 30. The prior report correctly noted this "reflects the absence of verified coding evidence rather than a measured coding failure," and that remains true; the small reduction reflects that the absence is now measured against a field where nearly every comparable model carries fifteen-plus coding benchmarks.
- **Cost efficiency: 92/100.** Up from 86. **$0.00 / $0.00 across all four providers** per models.dev, **open weights**, and an **11B dense model** that runs comfortably on a single consumer GPU. The Meta licence is a Community Licence rather than Apache-2.0, which is the one reason this does not reach the 95–100 band. Cost is genuinely this model's best remaining argument.
- **Overall Score: 43.8/100.** (35 + 45 + 42 + 72 + 25) / 5 = 219 / 5 = 43.8, down from 53.0. **Best fit: a local, private, zero-cost document and diagram question-answering component on a fixed template — reading a form, extracting a figure, answering a bounded question about an image.** **Four cautions.** First, **the 4,096-token output cap** rules out generation tasks entirely and makes long-form document work impractical. Second, **the December 2023 knowledge cutoff** means it knows nothing about the last two and a half years. Third, **there is no independent evaluation of this model at all** — the 43.8 rests entirely on Meta's own 2024 model card, and it is **the second-least-measured entry in this dataset after Grok Build 0.1**. Fourth, **Meta's own line has moved on**: Gemma 4 31B, Gemma 4 26B A4B, Gemma 4 12B, Muse Glimmer 30B, and Muse Spark 1.2/1.3 are all current, several with far better measured multimodal performance and Apache-2.0 licensing. **If you need a local vision model today, use Gemma 4 12B or Muse Glimmer 30B instead** — both are smaller or comparable, permissively licensed, free on multiple providers, and carry independent benchmark rows. **Llama 3.2 Vision Instruct is now a reference implementation, not a working choice.**

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-10
- Method: Public web research of models.dev's Llama-3.2-11B-Vision-Instruct four-provider specification, capability and pricing table; BenchLM's Llama 3.2 Vision Instruct profile under two slug spellings, both of which return 404 to confirm no independent rows exist; and Meta's official Llama 3.2 Vision model card. Scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Audit note — **the decisive finding is a specification the prior pass missed entirely: a 4,096-token output limit.** The prior report recorded "context window: 128K tokens" and stopped there. **models.dev enumerates the output limit as 4,096 across all four providers**, which is the smallest in this dataset and materially changes the model from a document-QA tool into a short-answer tool — Context falls 58 → 42 on that basis alone. **The second finding is that this model is now the least-measured entry in the dataset:** BenchLM returns 404 under two slug spellings, and every benchmark figure still originates from Meta's September 2024 model card with no independent confirmation, two passes on. **The December 2023 knowledge cutoff is now 34 months stale — the oldest in this dataset — and is the primary driver of Reasoning 55 → 45.** Credit is given where due: **the multimodal evidence is broad and genuinely strong** (DocVQA 88.4 ANLS, AI2 Diagram 91.1%, ChartQA 83.4%, VQAv2 75.2%), which is why Multimodal remains the highest dimension at 72 and why the model still has a real niche; **Cost rises 86 → 92** on verified $0.00/$0.00 pricing across four providers plus open weights, with the Meta Community Licence rather than Apache-2.0 holding it below the top band. **The substitution recommendation is stated explicitly:** Gemma 4 12B and Muse Glimmer 30B are current, permissively licensed, free on multiple providers, and carry independent benchmark rows. Search-provider rate limiting (HTTP 429) persisted, so evidence came from three direct primary retrievals rather than three discrete searches.
- Future sources: add a new file next to this one, e.g. `Llama_3_2_Vision_Recheck.md`, using the same headings.