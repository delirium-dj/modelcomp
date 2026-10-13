# Gemma 4 E4B — findings by Claude Opus 5

- Source: Google DeepMind (`gemma-4-e4b`, HF `google/gemma-4-E4B-it`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 E4B
- **Short description:** Google's **edge-optimized Gemma 4 variant**, and the naming is the key to understanding it: "**The 'E' in E2B and E4B stands for 'effective' parameters. The smaller models incorporate Per-Layer Embeddings (PLE) to maximize parameter efficiency in on-device deployments**" ([Google model card](https://huggingface.co/google/gemma-4-E4B-it/blob/main/README.md)). So this is roughly a 4B-effective model carrying a larger parameter store, designed to run on phones and edge hardware rather than in a datacentre — and it is **natively multimodal with audio input**, which is unusual at this size. Distinct model; `gemma-4-e2b`, `gemma-4-31b`, `gemma-4.26b-a4b`, `gemma-4.12b-unified` and `diffusiongemma-26b-a4b` all have their own folders.
- **Provider / access:** **Open weights on Hugging Face** under **Apache 2.0** (`google/gemma-4-E4B` base and `-it` instruction-tuned), plus hosted routing including **OpenCode Zen**. Designed for on-device deployment via the usual Gemma ecosystem.
- **Release / knowledge:** **April 2026** (the Gemma 4 generation). Knowledge cutoff: no verified public date found for this variant.
- **IDs:** `google/gemma-4-E4B-it` (Hugging Face), `gemma-4-e4b` (Zen). Free in the meaningful sense — Apache 2.0 weights, and it is small enough to run locally.
- **Context window:** **128,000 tokens** ([BenchLM](https://benchlm.ai/models/gemma-4-e4b)). Max output: no verified public figure found. Note this is **half the 256K quoted for the larger Gemma 4 variants** — the edge models carry a smaller window.
- **Modalities:** **Text + image + audio in, video as frames → text out.** Google's own statement is precise: "**All models support image inputs and can process videos as frames whereas the E2B, E4B, and 12B models also support audio inputs. Audio supports a maximum length of 30 seconds.**" Reasoning: **yes** — BenchLM classifies it Reasoning, and the Gemma 4 generation ships a configurable thinking mode. Tool calls: function calling supported.
- **Pricing (as of 2026-10-08):** **Apache 2.0 open weights (self-host free)**; hosted routing at roughly **$0.02 / MTok input and $0.10 / MTok output** — about as cheap as hosted inference gets.
- **Architecture:** ~**4B effective parameters** using **Per-Layer Embeddings (PLE)**, the mechanism that lets a larger parameter store be served from a much smaller active memory footprint on-device. I did not find a verified figure for the raw (pre-PLE) parameter total, so I am not asserting one. Vision and audio encoders are integrated natively rather than bolted on.

### Raw benchmarks found

> **Coverage is decent and partly cross-verified.** BenchLM holds **20 of 626 benchmarks**, ranking it **#173 of 891 at 30.93/100**, combining Google's own model card and the Hugging Face Gemma 4 blog with **Artificial Analysis** measurements. The two overlaps both agree closely, with the independent figure marginally lower each time: **MMMU-Pro 52.6% (Google) vs 51.4% (AA)** and **GPQA 58.6% (Google) vs 57.6% (AA)**.

Knowledge / reasoning:

- **MMLU-Pro: 69.4%** (Hugging Face Gemma 4 blog) — **the standout result; 69.4% from a ~4B-effective on-device model is genuinely strong**
- **GPQA: 58.6%** (Google) / **AA-GPQA Diamond: 57.6%** ([Artificial Analysis](https://artificialanalysis.ai/models/gemma-4-e4b))
- **AA-IFBench: 44.2%** — instruction following
- **Artificial Analysis Intelligence Index: 8.9**; **AA-HLE: 3.8%**; **CritPt: 0.6%**
- **AA-Omniscience: Index −19.7%, Accuracy 8.6%, Hallucination Rate 30.9%.** That hallucination rate deserves highlighting: **it is among the lowest I have recorded in this entire research pass** (against 93.3% for DeepSeek V3.2 and 89.9% for Qwen3-Max). Low accuracy with low hallucination means the model **declines rather than fabricates** — the right failure mode for an on-device assistant.

Multimodal:

- **MMMU-Pro: 52.6%** (Google) / **51.4%** (Artificial Analysis) — independently confirmed, and high for the size class
- **No OCR, chart, document, video or audio-specific benchmark found** despite audio and video-as-frames input being supported

Coding:

- **LiveCodeBench v6: 52.0%** (Google) — respectable for a 4B-effective model
- **AA-SciCode: 24.4%**; **AA Coding Index: 9.4%**
- **No SWE-bench, Terminal-Bench or DeepSWE figure found**

Long context:

- **MRCRv2: 25.4%** (Google's own figure) — credit for publishing a real multi-needle retrieval number rather than a bare window size, even though the number is weak
- **AA-LCR: 32.0%** (Artificial Analysis)

Agent / tool use:

- **τ²-bench: 20.8%** (Artificial Analysis)
- **GDPval-AA: 177 Elo, 0.0% normalized** (Artificial Analysis) — a floor result
- **No Terminal-Bench, BFCL, Toolathlon, MCP or BrowseComp figure found**

### Normalized scores (1–100)

- **Tool use: 30/100.** Weak, and the weakness is structural rather than surprising for a 4B-effective edge model. **τ²-bench 20.8%** shows basic multi-turn tool dialogues partly work, and **AA-IFBench 44.2%** means instructions are followed about as often as not. But **GDPval-AA at 177 Elo and 0.0% normalized is a floor result** — it cannot produce economically useful knowledge-work deliverables at all — and there is **no Terminal-Bench, BFCL, Toolathlon or MCP figure** to find anything more favourable. Function calling exists as a capability; agentic execution does not.
- **Reasoning: 52/100.** **MMLU-Pro at 69.4% is the headline and it is impressive for this size class**, with **GPQA Diamond at 57.6–58.6% independently corroborated** — both well above what a ~4B active footprint would normally deliver, which is PLE and the Gemma 4 recipe doing real work. The hard-benchmark results are correspondingly poor — **Intelligence Index 8.9, HLE 3.8%, CritPt 0.6%** — and that is the expected ceiling. What lifts this above a pure size-adjusted score is **calibration: a 30.9% hallucination rate is among the lowest in this dataset**, so when it does not know something it tends to say so. For an on-device assistant that property is worth more than a few points of raw accuracy.
- **Context window: 46/100.** **128K is reasonable for an edge model** — and notably **half what the larger Gemma 4 variants carry**, so the trade is explicit. Google deserves credit for publishing **MRCRv2 at 25.4%**, a genuine multi-needle retrieval measurement, rather than advertising the window alone; most vendors in this dataset publish nothing. But the number itself is weak, **AA-LCR 32.0%** agrees, and there is no max-output figure. Scored on measured recall, with credit for the disclosure.
- **Multimodal: 62/100.** The strongest dimension, and legitimately so. **MMMU-Pro at 51.4–52.6%, independently confirmed by Artificial Analysis**, is a strong visual-reasoning result at this scale. More distinctive is the **input breadth: text, image, audio up to 30 seconds, and video processed as frames** — Google explicitly limits audio support to the E2B, E4B and 12B variants, so this is one of the few models in this dataset at any size that takes audio natively, and it does so on-device. Capped because **output is text only** and because **no OCR, chart, document, video or audio benchmark exists at all** — the audio capability in particular is entirely unmeasured.
- **Coding: 40/100.** **LiveCodeBench v6 at 52.0%** is a fair result for a 4B-effective model and means short, self-contained code generation works. Everything beyond that falls away: **AA-SciCode 24.4%**, **AA Coding Index 9.4%**, and **no SWE-bench, Terminal-Bench or DeepSWE figure of any kind** — so there is no evidence it can operate on a repository or in a terminal, and the composite index strongly suggests it cannot. Useful for snippets and completion, not for engineering.
- **Cost efficiency: 92/100.** Excellent, and on more than just price. **Apache 2.0 open weights** are maximally permissive, **~$0.02 / $0.10 per MTok hosted** is at the very bottom of this dataset, and crucially **PLE makes it genuinely deployable on-device** — which means zero marginal inference cost, no network round trip and no data leaving the device, for a model that still returns MMLU-Pro 69.4% and MMMU-Pro 52%. Native audio input at this footprint adds real product value for phone assistants. The **30.9% hallucination rate** is a cost factor too: an edge model that declines rather than invents needs less downstream verification. Docked only because the capability ceiling is low enough that many tasks will still require a round trip to a larger model.
- **Overall Score: 46.0/100.** Mean of the five non-cost dims (30 + 52 + 46 + 62 + 40) / 5 = 46.0. Read this as a **size-class result, not a quality verdict** — the number is held down by agentic and coding dimensions that a 4B-effective on-device model is not intended to serve. Best fit: **on-device and edge assistants** — image and short-audio understanding, visual question answering, multilingual knowledge lookup at MMLU-Pro-69% quality, snippet-level code completion, and summarization — where Apache 2.0 licensing, local execution, privacy and near-zero marginal cost matter more than frontier capability. Avoid it for agents (GDPval-AA 0.0% normalized), repository-scale coding (Coding Index 9.4%), deep retrieval (MRCRv2 25.4%) or hard reasoning (CritPt 0.6%). The genuinely notable technical facts are **native 30-second audio input at this footprint** and a **hallucination rate low enough to trust the model's own uncertainty**.

---

## Signature

- Provided by: **Claude Opus 5 (anthropic/claude-opus-5)** — 2026-10-08
- Method: fresh public internet research only — Google's official Hugging Face model card for `google/gemma-4-E4B-it` (the authoritative **"the 'E' in E2B and E4B stands for 'effective' parameters… Per-Layer Embeddings (PLE) to maximize parameter efficiency in on-device deployments"** statement, and the precise modality statement that "**all models support image inputs and can process videos as frames whereas the E2B, E4B, and 12B models also support audio inputs. Audio supports a maximum length of 30 seconds**"), the Hugging Face Gemma 4 blog (MMLU-Pro 69.4%, GPQA 58.6%), and BenchLM's aggregated page (Open Weight source type, Reasoning type, **128K context**, 20 of 626 benchmarks, overall 30.93 / rank #173 of 891) together with every underlying measurement it cites from Google's card and **Artificial Analysis** — MMMU-Pro 52.6% vendor / 51.4% independent, AA-GPQA Diamond 57.6%, LiveCodeBench v6 52.0%, AA-IFBench 44.2%, AA-LCR 32.0%, MRCRv2 25.4%, AA-SciCode 24.4%, τ²-bench 20.8%, AA Coding Index 9.4%, Intelligence Index 8.9, AA-HLE 3.8%, CritPt 0.6%, GDPval-AA 177 Elo / 0.0% normalized, and AA-Omniscience −19.7% index / 8.6% accuracy / **30.9% hallucination rate**. The two vendor-versus-independent overlaps (MMMU-Pro and GPQA, both marginally lower on Artificial Analysis) are reported explicitly and used to calibrate trust in the vendor-only rows. **The 30.9% hallucination rate is called out as a positive calibration finding rather than buried**, since low accuracy paired with low fabrication is a materially different — and for on-device use, better — failure mode than the 89–93% rates recorded elsewhere in this pass. **No raw parameter total is asserted**, because I found no verified figure for the pre-PLE count and the repo's "4.5B-effective (8B with embeddings)" note could not be corroborated; the effective-parameter framing is used instead. Absent evidence is named, not filled: **no OCR, chart, document, video or audio benchmark exists despite audio and video-as-frames input being supported**, and there is no SWE-bench, Terminal-Bench, DeepSWE, BFCL, Toolathlon, MCP, BrowseComp or max-output figure. The smaller 128K window relative to the larger Gemma 4 variants is flagged as a deliberate edge-model trade rather than an error. No data was imported from `gemma-4-e2b`, `gemma-4-31b`, `gemma-4.26b-a4b`, `gemma-4.12b-unified` or `diffusiongemma-26b-a4b`, and no peer `model/` findings files were read. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
