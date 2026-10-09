# Gemini 1.5 Pro — findings by Claude Opus 5

- Source: Google DeepMind (`gemini-1.5-pro`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 1.5 Pro
- **Short description:** The model that introduced long context to the industry — a natively multimodal Gemini-generation model with a **2,000,000-token context window** that, more than two and a half years later, is still among the largest in this entire dataset. Its historical significance is the window and the four-way input surface; its benchmark profile is that of a pre-agentic, pre-reasoning-model era. Distinct model; the 2.5, 3.x and 4 generations are separate entries with their own folders.
- **Provider / access:** Gemini API / Google AI Studio and Vertex AI. **Lifecycle — effectively retired:** Google Cloud's current Gemini Enterprise Agent Platform model directory lists its Pro tier as **3.1 Pro and 2.5 Pro only**, with no 1.5 Pro entry ([Google Cloud model directory](https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/gemini/3-1-flash-lite)), and **OpenCode Zen does not list it** (its Gemini line starts at Gemini 3 Flash). This repo's `meta.json` describes it as "legacy status, superseded by newer generations", which matches what I could verify.
- **Release / knowledge:** Released **2024-02-15** ([evals.report](https://evals.report/models/google-gemini-1-5-pro)). Knowledge cutoff: no verified public date found. At over two and a half years old it is the oldest model in my queue by a wide margin.
- **IDs:** `gemini-1.5-pro`, `google/gemini-1.5-pro`. The folder's metadata sets `noFreeId: true` while noting a historical "free tier via AI Studio"; I could not verify a live free route today.
- **Context window:** **2,000,000 tokens** ([BenchLM](https://benchlm.ai/models/gemini-1-5-pro)), corroborated by this repo's curated metadata. For scale, that still matches or beats every model in this research pass except Grok 4 Fast — a remarkable fact about a February 2024 release. Max output: no verified public figure found.
- **Modalities:** **Text + image + audio + video in → text out** — genuine four-way input, and unusually for this dataset, the video pathway is actually *measured* (see benchmarks). No generated media. Reasoning: **no** — BenchLM classifies it Non-Reasoning, and it predates the thinking-model era entirely; there is no thinking budget or effort control. Tool calls: function calling existed in this generation, but there is no public measurement of it whatsoever.
- **Pricing (as of 2026-10-08):** **No live price verified.** This repo's curated metadata records "paid equiv. ~$1.25/$5 per 1M" and a historical AI Studio free tier; I am reporting that as second-hand rather than restating it as an observed current rate, since the model is absent from Google Cloud's current model directory.
- **Architecture:** Proprietary, closed weights. Parameter count, activation scheme and sparsity undisclosed. The 1.5 generation's public claim to fame was a mixture-of-experts design enabling the long context, but Google published no size.

### Raw benchmarks found

> Two sources, with usefully different coverage. [evals.report](https://evals.report/models/google-gemini-1-5-pro) tracks **14 scores** with explicit Official / Verified / Unverified provenance labels, which are preserved below; Artificial Analysis via [BenchLM](https://benchlm.ai/models/gemini-1-5-pro) adds five more. Note the two sources carry **different Artificial Analysis Intelligence Index values** (16 vs 7.9), almost certainly different index vintages — both are reported.

Agent / tool use:

- **Nothing. No agentic benchmark of any kind exists for this model.** No Terminal-Bench at any version, no τ²/τ³-bench, no WebArena, no GAIA, no OSWorld, no MCP-Atlas, no GDPval, no BrowseComp, no Online-Mind2Web. This is not a gap in my searching — the model predates essentially the entire agentic-benchmark ecosystem, and no one has retroactively run it.

Reasoning / knowledge:

- GPQA Diamond: **57.2%** accuracy (*Official*, evals.report); independently **AA-GPQA Diamond 58.9%** ([Artificial Analysis](https://artificialanalysis.ai/models/gemini-1-5-pro)) — close agreement across two sources
- **FACTS Grounding: 80.0%** grounding accuracy (*Verified*) — the strongest number in the whole report, and a genuinely useful property: it stays faithful to supplied source material
- Epoch Capabilities Index: **132.8** (*Official*)
- AIME (OTIS Mock): **23.1%** accuracy (*Official*)
- AA-HLE: **4.6%** (Artificial Analysis)
- Artificial Analysis Intelligence Index: **16** (*Unverified*, evals.report) / **7.9** (Artificial Analysis via BenchLM)
- BenchLM overall: **27.84/100, rank #190 of 889** (5 of 625 benchmarks, flagged conservative)
- AILuminate AI Safety Benchmark: grade **"Good"** (*Verified*)
- **No CritPt, no AA-LCR, no AA-IFBench, no MMLU-Pro and no AA-Omniscience hallucination measurement exists.**

Coding:

- **SciCode: 1.5%** accuracy (*Official*) — effectively zero
- BigCodeBench: **32.4%** calibrated Pass@1 (*Verified*)
- AA Coding Index: **23.6%** (Artificial Analysis)
- **SWE-bench Verified, SWE-bench Pro, LiveCodeBench, Aider Polyglot, Terminal-Bench: no verified public score found.** There is no repository-repair measurement of any kind.

Multimodal:

- **Video-MME: 75.0%** accuracy (*Official*) — a real, strong video result, and one of very few genuine video measurements anywhere in this dataset
- **Video-MMMU: 53.9%** (*Official*)
- MMMU: **65.9%** (*Unverified*); **AA-MMMU-Pro: 55.0%** (Artificial Analysis)
- MathVista: **63.9%** (*Verified*)
- OCRBench v2: **51.6** (*Verified*)
- **ZeroBench: 0.0%** pass@1 (*Verified*) — a literal zero on the hardest visual-reasoning set
- No audio benchmark found, despite audio being a supported input modality

Long context:

- **No MRCR, RULER, LongBench or needle-retrieval number at any depth, and no AA-LCR entry.** The 2M window — the model's single most distinctive feature — has **no public retrieval validation in any source I consulted.**

### Normalized scores (1–100)

- **Tool use: 35/100.** Scored on complete absence of evidence rather than on bad evidence: **not one agentic benchmark exists**. Function calling was available in this generation, so the capability is not zero, but a dataset dimension with no measurement at all cannot be credited above the bottom third. The honest reading is that this model was built before "agent" meant what it means now, and nobody has gone back to measure it.
- **Reasoning: 48/100.** GPQA Diamond 57.2% (independently 58.9%) and an Epoch Capabilities Index of 132.8 were respectable for early 2024 and are plainly mid-tier now; AIME 23.1% and **AA-HLE 4.6%** place the hard ceiling low, and an AA Intelligence Index of 7.9 is near the bottom of this dataset. **FACTS Grounding at 80.0% is the redeeming number** — it does not drift from supplied sources — and is the reason this sits at 48 rather than lower. No CritPt, no IFBench, no hallucination measurement.
- **Context window: 86/100.** **2,000,000 tokens**, and this is not a historical curiosity — it remains larger than all but one model in this entire research pass, two and a half years later. That earns a high score on capacity alone. Held below 90 for the same reason as every other large-window model here, and more sharply: there is **zero** public retrieval validation of the 2M window, no MRCR, no needle test, not even an AA-LCR entry. The industry's most famous long-context claim is, in the public record I can find, entirely unmeasured.
- **Multimodal: 68/100.** The dimension that has aged best. Four-way input — text, image, **audio** and **video** — and crucially the video pathway is genuinely measured rather than merely advertised: **Video-MME 75.0%** and Video-MMMU 53.9%, both Official, alongside MathVista 63.9%, MMMU 65.9% and OCRBench v2 51.6. That is more real video evidence than most 2026 models in this dataset can show. Capped by text-only output, by AA-MMMU-Pro landing 11 points below the vendor MMMU figure, by **ZeroBench 0.0%** on hard visual reasoning, and by the audio modality having no benchmark at all.
- **Coding: 30/100.** The weakest dimension by a distance, and the evidence is unambiguous: **SciCode 1.5%** (Official), BigCodeBench 32.4%, an AA Coding Index of 23.6%, and **no SWE-bench result of any kind**. This model was not built for code and the numbers say so plainly.
- **Cost efficiency: 26/100.** No live price could be verified — the model is absent from Google Cloud's current Gemini model directory and from OpenCode Zen — so this is scored on value rather than rate. The curated ~$1.25 / $5 per MTok would be poor value regardless: **Gemini 3.1 Flash-Lite costs $0.25 / $1.50 and scores 48.06 on BenchLM against this model's 27.84**, i.e. a fifth of the input price, under a third of the output price, and 1.7× the aggregate score, from the same vendor, with the same 1M-class context and the same four-way input. Credit retained for the historical AI Studio free tier.
- **Overall Score: 53.4/100.** Mean of the five non-cost dims (35 + 48 + 86 + 68 + 30) / 5 = 53.4. Best fit: **essentially historical.** Its enduring significance is that it put a 2M-token window and genuine audio+video input into production in February 2024 — a combination most 2026 models in this dataset still cannot match on input breadth — and that it grounds faithfully in supplied material (FACTS 80.0%). Everything else about it has been superseded by cheaper, better models from its own vendor. I would not deploy it new, and the 2M window should not be relied upon without running your own retrieval test, because nobody has published one.

---

## Signature

- Provided by: **Claude Opus 5 (anthropic/claude-opus-5)** — 2026-10-08
- Method: fresh public internet research only — **evals.report**, which tracks 14 scores for this model with explicit Official / Verified / Unverified provenance labels (all preserved here), including the Video-MME, Video-MMMU, FACTS Grounding, SciCode, ZeroBench and AILuminate results and the 2024-02-15 release date; BenchLM's aggregated page and the underlying Artificial Analysis leaderboard (Coding Index, MMMU-Pro, GPQA Diamond, HLE, Intelligence Index); and Google Cloud's current Gemini Enterprise Agent Platform model directory, which was checked directly and lists only 3.1 Pro and 2.5 Pro under its Pro tier — reported as evidence of retirement. The OpenCode Zen catalogue was also checked and contains no Gemini 1.5 entry. The two differing Artificial Analysis Intelligence Index values (16 vs 7.9) are both reported rather than reconciled. The repo's `meta.json` pricing figure is labelled second-hand and explicitly not presented as a verified current rate. The complete absence of agentic and long-context retrieval measurement is reported as the finding it is, rather than proxied from later Gemini generations. No peer `model/` findings files were read. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
