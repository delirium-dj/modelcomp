# Gemma 4 E2B — findings by Gemini 3.8 Flash

- Source: opencode/gemma-4-e2b
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Gemma 4 E2B
- **Short description:** Google DeepMind's 2.3B-effective edge variant of Gemma 4 (April 2026) for phones, laptops and Jetson/Pi-class hardware, with native image and audio input.
- **Provider / access:** opencode/gemma-4-e2b
- **Release / knowledge:** 2026 release; knowledge cutoff 2026.
- **IDs:** opencode/gemma-4-e2b (Zen tier available)
- **Context window:** 128,000 total
- **Modalities:** Text, image, audio in; text out
- **Pricing (as of 2026-10-11):** Apache 2.0 open weights; hosted ~$0.04/$0.08 per 1M
- **Architecture:** Foundation model architecture with advanced reasoning and tool invocation.

### Raw benchmarks found

Official figures are Google's own Gemma 4 model card (`ai.google.dev/gemma/docs/core/model_card_4`), instruction-tuned, from the full five-size comparison table. Independent figures come from ApX, BenchLM, CloudPrice and DataLearner. Family context for every row: 31B Dense / 26B A4B / 12B Unified / E4B / **E2B** / Gemma 3 27B.

Text, reasoning and knowledge:

- MMLU-Pro: **60.0%** (31B 85.2%, 26B 82.6%, 12B 77.2%, E4B 69.4%, Gemma 3 27B 67.6%). ApX **0.6, #53**; DataLearner 112/133 = 60
- GPQA Diamond: **43.4%** (31B 84.3%, 26B 82.3%, 12B 78.8%, E4B 58.6%, Gemma 3 27B 42.4%). ApX **0.434, #112**; DataLearner 205/224 = 43.40; BenchLM 43.4%
- MMMLU: **67.4%** (31B 88.4%, 26B 86.3%, 12B 83.4%, E4B 76.6%, Gemma 3 27B 70.7%)
- AIME 2026 no tools: **37.5%** (31B 89.2%, 26B 88.3%, 12B 77.5%, E4B 42.5%, Gemma 3 27B 20.8%)
- BigBench Extra Hard: **21.9%** (31B 74.4%, 26B 64.8%, 12B 53.0%, E4B 33.1%, Gemma 3 27B 19.3%)
- Artificial Analysis Intelligence Index: **0.08 standard / 0.07, #259** (ApX) — far below the methodology's 20–35 mid band, and consistent with E4B's 8.9 (#336)
- BenchLM: Reasoning lane **33.3** (unranked, 2 rows), Knowledge lane **27.8, #153 of 168**, Instruction Following **42.4, #96 of 124**, independent public score **32.46** from only 2 covered benchmarks
- **HLE: not published by Google for E2B** (the card shows `-` for both no-tools and with-search, as it does for E4B). No independent HLE figure for E2B specifically was found; the sibling E4B reads 0.0 (#487 of 487) on CloudPrice
- CritPt / Omniscience Accuracy / Hallucination Rate / IFBench: no verified public score found

Agent / tool use:

- Tau2 (average over 3 domains): **24.5%** (31B 76.9%, 26B 68.2%, 12B 69.0%, E4B 42.2%, Gemma 3 27B 16.2%) — the top of the methodology's mid-band `Tau3 10–25%` marker, on 2.3B effective parameters
- Function calling: **native**, per Google and both hosted provider records
- No independent TAU2, Terminal-Bench, GDPval, OSWorld, AutomationBench or Claw-Eval measurement was found for E2B on any aggregator — the third-party coverage is thinner than even the E4B's
- BenchLM Agentic lane: no agentic composite published for this model

Coding:

- LiveCodeBench v6: **44.0%** (31B 80.0%, 26B 77.1%, 12B 72.0%, E4B 52.0%, Gemma 3 27B 29.1%). DataLearner 101/126 = 44
- Codeforces ELO: **633** (31B 2150, 26B 1718, 12B 1659, E4B 940, Gemma 3 27B 110)
- Coding Index: **0.07, #154** (ApX / Artificial Analysis)
- BenchLM Coding lane: **19.3, #128 of 142** (estimated)
- SWE-bench Verified / SWE-Pro / DeepSWE / SciCode / Vibe Code Bench: no verified public score found

Long context:

- **MRCR v2 8-needle @ 128K (average): 19.1%** (31B 66.4%, 26B 44.1%, 12B 43.4%, E4B 25.4%, Gemma 3 27B 13.5%) — measured at the model's *full* native window
- No LCR, RULER or AA-LCR figure, and no needle measurement at any other length

Vision:

- MMMU-Pro: **44.2%** (31B 76.9%, 26B 73.8%, 12B 69.1%, E4B 52.6%, Gemma 3 27B 49.7%)
- MATH-Vision: **52.4%** (31B 85.6%, 26B 82.4%, E4B 59.5%, Gemma 3 27B 46.0%)
- MedXPertQA (MM): **23.5%** (31B 61.3%, 26B 58.1%, 12B 48.7%, E4B 28.7%)
- OmniDocBench 1.5 (average edit distance, lower is better): **0.290** (31B 0.131, 26B 0.149, 12B 0.164, E4B 0.181, Gemma 3 27B 0.365) — the **worst of any Gemma 4 size**, though still better than Gemma 3 27B

Audio:

- CoVoST: **33.47** (E4B 35.54) — lower is better, so E2B's audio recognition is marginally the better of the two edge models. FLEURS not published for either

### Normalized scores (1–100)

- **Tool use: 40/100.** Normalized assessment of autonomous tool execution and function calling.
- **Reasoning: 45/100.** Normalized assessment of complex multi-step reasoning and deductive analysis.
- **Context window: 58/100.** Effective retrieval fidelity across context capacity (128,000 total).
- **Multimodal: 70/100.** Input/output modality comprehension (Text, image, audio in; text out).
- **Coding: 42/100.** Verified software engineering and code generation capability.
- **Cost efficiency: 98/100.** Value proposition relative to performance and pricing structure.
- **Overall Score: 51/100.** Balanced quality capability across the 5 core dimensions.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-11
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.
