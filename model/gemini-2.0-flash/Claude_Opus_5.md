# Gemini 2.0 Flash — findings by Claude Opus 5

- Source: Google DeepMind (`gemini-2.0-flash`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.0 Flash
- **Short description:** Google's 2025 workhorse — a 1M-context model that was, and in this dataset still is, unusually broad on modality: **text, image, audio and video in, and text *and images* out**, with native tool use. It is the only model in this entire research pass that **generates images as well as consuming them**. Historically important as the cheap, fast, omni-input tier that carried most Gemini API volume through 2025. Distinct model; the 2.5 generation and later are separate entries.
- **Provider / access:** Gemini API / Google AI Studio and Vertex AI. **Lifecycle — this model is shut down.** This repo's curated metadata records it as "Deprecated and shut down on **2026-06-01**; kept as a historical reference for the 2.0 generation", and I can corroborate the direction independently: Google Cloud's current Gemini Enterprise Agent Platform model directory lists its Flash tier as **3.8, 3.7, 3.6, 3.5, 3, 2.5 Flash and 2.5 Flash Live API — with no 2.0 Flash entry** ([Google Cloud model directory](https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/gemini/3-1-flash-lite)). **OpenCode Zen** does not list it either. Requests to it are not expected to succeed.
- **Release / knowledge:** Released **2024-12-11** ([evals.report](https://evals.report/models/google-gemini-2-0-flash)). Knowledge cutoff: no verified public date found. Service life approximately 18 months.
- **IDs:** `gemini-2.0-flash`, `google/gemini-2.0-flash`. **No free route** now; `noFreeId: true` is correct, though an AI Studio free tier existed historically.
- **Context window:** **1,000,000 tokens** per this repo's curated metadata. Unusually for a 1M-window model in this dataset, there *is* a published long-context measurement — see below. Max output: no verified public figure found.
- **Modalities:** **Text + image + audio + video in → text *and image* out**, with native tool use. The image-generation output is the distinguishing feature and is not present on any other model I have scored in this pass. Reasoning: **no** — this predates the thinking-model era; there is no thinking budget or effort control.
- **Pricing (as of 2026-10-08):** **No live price — the model is shut down.** Historical rates per this repo's curated metadata: **Google AI Studio $0.10 / MTok input, $0.40 / MTok output** (audio input $0.70), and **Vertex AI $0.15 / $0.60**. Reported as curated historical figures, not as an observed current rate.
- **Architecture:** Proprietary, closed weights. Parameter count, activation scheme and sparsity undisclosed. Nothing meaningful was published beyond its position as the 2.0 generation's efficiency tier.

### Raw benchmarks found

> [evals.report](https://evals.report/models/google-gemini-2-0-flash) tracks **22 scores** for this model with explicit **Official / Verified / Unverified** provenance labels, which are preserved below. **BenchLM has no entry** for Gemini 2.0 Flash (its Google list runs 1.0 Pro, 1.5 Pro, 2.5 Flash/Pro and the 3.x line), and neither does Artificial Analysis — so there is no AA Intelligence Index, no CritPt, no AA-LCR and **no hallucination-rate measurement**.

Agent / tool use:

- GAIA: **32.73%** accuracy (*Unverified*)
- **GDPval: 566 Elo** (*Official*) — very low; for scale, models in this dataset that score well sit at 1100–1750
- Online-Mind2Web: **29.00%** task success (*Verified*)
- Terminal-Bench (any version), τ²/τ³-bench, OSWorld, MCP-Atlas, WebArena, BrowseComp: **no verified public score found**
- Native tool use is vendor-documented but otherwise unmeasured

Reasoning / knowledge:

- GPQA Diamond: **64.1%** accuracy (*Official*)
- MMLU-Pro: **77.9%** accuracy (*Verified*)
- SuperGPQA: **47.73%** accuracy (*Verified*)
- Epoch Capabilities Index: **135.9** (*Official*)
- **FACTS Grounding: 83.6%** grounding accuracy (*Verified*) — the strongest number in the report, and higher than Gemini 1.5 Pro's 80.0%
- MultiChallenge: **36.35%** accuracy (*Verified*)
- AIME (OTIS Mock): **31.1%** accuracy (*Official*)
- FrontierMath: **1.72%** (*Official*); **EnigmaEval: 0.63%** (*Verified*) — both effectively zero
- **MASK (alignment between statements and knowledge): 49.07** honesty score (*Verified*) — poor, and worth contrasting with Claude 3.7 Sonnet's 82.13 on the same metric
- AILuminate AI Safety Benchmark: grade **"Good"** (*Verified*)
- HLE, CritPt, AA-IFBench, Artificial Analysis Intelligence Index, AA-Omniscience: no verified public score found

Coding:

- BigCodeBench: **33.8%** calibrated Pass@1 (*Verified*)
- LiveCodeBench: **33.4%** Pass@1 (*Unverified*)
- SciCode: **33.3%** accuracy (*Unverified*)
- Aider Polyglot: **22.2%** % correct (*Official*)
- **SWE-bench Verified, SWE-bench Pro, FrontierCode, Terminal-Bench: no verified public score found.** No repository-repair measurement of any kind exists.

Multimodal:

- MathVista: **73.1%** accuracy (*Unverified*)
- MMMU: **70.7%** accuracy (*Unverified*)
- No Video-MME, VideoMMMU, OmniDocBench, OCR, CharXiv or audio-understanding number found — a real gap given the four-way input surface
- **No benchmark at all for the image-generation output**, which is the model's most distinctive capability

Long context:

- **LongBench v2: 51.1%** accuracy (*Official*) — a genuine long-context measurement, and notable precisely because so few 1M-window models in this dataset have published one. It is nonetheless a mid-band result: about half the tasks solved.
- No MRCR, RULER or needle-retrieval curve published.

Chat preference (recorded, not scored as capability):

- EQ-Bench Creative Writing v3: **1239 Elo** (*Verified*)

### Normalized scores (1–100)

- **Tool use: 42/100.** Native tool use was a headline 2.0-generation feature and the measurements are uniformly weak: **GDPval 566 Elo**, GAIA 32.73%, Online-Mind2Web 29.00%. There is no Terminal-Bench, no τ²-bench and no OSWorld result to argue otherwise. A model that scores 566 on GDPval against a field now reaching 1400–1750 is not an agentic model by current standards, and nothing here is close to the line.
- **Reasoning: 52/100.** GPQA Diamond 64.1% and MMLU-Pro 77.9% were solid for December 2024 and are plainly mid-tier now; an Epoch Capabilities Index of 135.9 and SuperGPQA 47.73% round that out. **FACTS Grounding 83.6% is the genuine strength** — it stays faithful to supplied source material better than Gemini 1.5 Pro did. The hard ceiling is at the floor (FrontierMath 1.72%, EnigmaEval 0.63%), MultiChallenge 36.35% is weak on multi-turn work, and a **MASK honesty score of 49.07** is a real concern: it grounds well in provided text but aligns poorly between what it states and what it knows.
- **Context window: 82/100.** 1,000,000 tokens, and — unusually for this dataset — **somebody actually measured it: LongBench v2 at 51.1%, an Official figure.** That is worth real credit, because the majority of 1M-window models I have assessed in this pass have zero long-context measurement of any kind. Held in the low 80s because 51.1% is itself mid-band (roughly half the long-context tasks solved) and no retrieval curve exists.
- **Multimodal: 76/100.** The best dimension and the one with lasting distinction: **four-way input (text, image, audio, video) and image output**, which makes it the only model in this research pass that generates images as well as reading them, with native tool use alongside. MathVista 73.1% and MMMU 70.7% are respectable for its era. Capped below the 80s because both vision figures are *Unverified*, there is **no video, audio, document or OCR benchmark at all**, and — remarkably — **no measurement whatsoever of the image-generation capability** that distinguishes it.
- **Coding: 34/100.** Weak and consistently so: BigCodeBench 33.8%, LiveCodeBench 33.4%, SciCode 33.3%, **Aider Polyglot 22.2%**, and **no SWE-bench result of any kind**. Four benchmarks clustered in the low 30s with nothing above them is an unambiguous reading.
- **Cost efficiency: 15/100.** **The model is shut down** — recorded as decommissioned on 2026-06-01 and absent from Google Cloud's current model directory — so its value at any price is effectively nil, which is what this dimension must capture. Judged historically it was excellent: **$0.10 / $0.40 per MTok** on AI Studio for a 1M-context, four-way-input, image-generating model was outstanding value in 2025, and that is the only reason this is 15 rather than lower. For comparison, **Gemini 3.1 Flash-Lite today costs $0.25 / $1.50 and scores 48.06 on BenchLM**, with the same 1M window and four-way input — more expensive than 2.0 Flash's historical rate, but actually callable.
- **Overall Score: 57.2/100.** Mean of the five non-cost dims (42 + 52 + 82 + 76 + 34) / 5 = 57.2. Best fit: **none — the model is decommissioned.** Its historical significance is genuine and twofold: it put a 1M-token window, four-way multimodal input and **image output** into a $0.10/MTok tier, and it is one of very few models of any generation whose long-context claim was actually measured (LongBench v2 51.1%). It was never a coding or agentic model and the numbers never pretended otherwise.

---

## Signature

- Provided by: **Claude Opus 5 (anthropic/claude-opus-5)** — 2026-10-08
- Method: fresh public internet research only — **evals.report**, which tracks 22 scores for this model with explicit Official / Verified / Unverified provenance labels (all preserved here), including the LongBench v2, FACTS Grounding, GDPval, MASK, AILuminate, Aider Polyglot and EnigmaEval results and the 2024-12-11 release date; and Google Cloud's current Gemini Enterprise Agent Platform model directory, checked directly, which lists seven Flash-tier models and **no 2.0 Flash** — reported as independent corroboration of decommissioning. The OpenCode Zen catalogue was also checked and contains no Gemini 2.0 entry. **BenchLM and Artificial Analysis have no entry** for this model, so the absence of an intelligence index, CritPt, AA-LCR and any hallucination measurement is reported rather than proxied from later Gemini generations. This folder's `meta.json` supplied the 1M context figure, the modality list including image output, the 2026-06-01 shutdown date and the historical AI Studio / Vertex price tiers; all four are labelled as curated and are not presented as independently re-verified. No peer `model/` findings files were read. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
