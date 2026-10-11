# Gemma 4 E4B — findings by Gemini 3.8 Flash

- Source: opencode/gemma-4-e4b
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Gemma 4 E4B
- **Short description:** Google DeepMind's April 2026 edge-optimized 4.5B-effective multimodal model (8B with embeddings) built for mobile and edge latency.
- **Provider / access:** opencode/gemma-4-e4b
- **Release / knowledge:** 2026 release; knowledge cutoff 2026.
- **IDs:** opencode/gemma-4-e4b (Zen tier available)
- **Context window:** 128,000 total
- **Modalities:** Text, image, audio in; text out; reasoning + function calling
- **Pricing (as of 2026-10-11):** Apache 2.0 open weights; hosted ~$0.02/$0.10 per 1M
- **Architecture:** Foundation model architecture with advanced reasoning and tool invocation.

### Raw benchmarks found

Official figures are Google's own Gemma 4 model card (`ai.google.dev/gemma/docs/core/model_card_4`), instruction-tuned, quoting the full five-size comparison table. Independent figures come from CloudPrice and BenchLM. Note the family context for every row: 31B Dense / 26B A4B / 12B Unified / **E4B** / E2B / Gemma 3 27B.

Text, reasoning and knowledge:

- MMLU-Pro: **69.4%** (31B 85.2%, 26B 82.6%, 12B 77.2%, E2B 60.0%, Gemma 3 27B 67.6%). CloudPrice/BenchLM: 0.6
- GPQA Diamond: **58.6%** (31B 84.3%, 26B 82.3%, 12B 78.8%, E2B 43.4%, Gemma 3 27B 42.4%). CloudPrice **0.6, #360**; BenchLM Knowledge lane **29.6, #144 of 168**
- MMMLU: **76.6%** (31B 88.4%, 26B 86.3%, 12B 83.4%, E2B 67.4%, Gemma 3 27B 70.7%)
- AIME 2026 no tools: **42.5%** (31B 89.2%, 26B 88.3%, 12B 77.5%, E2B 37.5%, Gemma 3 27B 20.8%) — a steep 35-pt drop from the 12B Unified
- BigBench Extra Hard: **33.1%** (31B 74.4%, 26B 64.8%, 12B 53.0%, E2B 21.9%, Gemma 3 27B 19.3%)
- Artificial Analysis Intelligence Index: **8.9, #336** (CloudPrice) — below the methodology's 20–35 mid band
- IFBench: **0.4, #223** (CloudPrice)
- **HLE: not published by Google for E4B at all** (the card shows `-` for both no-tools and with-search, as it does for E2B). CloudPrice's independent HLE reads **0.0, #487 — dead last of 487 entries**
- BenchLM Reasoning lane: **44.2** (unranked, 2 rows); independent public score **33.28** from only 2 covered benchmarks
- CritPt / Omniscience Accuracy / Hallucination Rate: no verified public score found

Agent / tool use:

- Tau2 (average over 3 domains): **42.2%** (31B 76.9%, 26B 68.2%, 12B 69.0%, E2B 24.5%, Gemma 3 27B 16.2%)
- CloudPrice independent: **TAU2 0.2 (#333)** — roughly **half** Google's 42.2%, and the same vendor/third-party divergence the 12B Unified and 26B A4B show; **TerminalBench Hard 0.1 (#231)**
- Function calling: **native**, per Google and every hosted provider record
- BenchLM Agentic lane: unranked, no agentic composite published for this model
- GDPval-AA / OSWorld / AutomationBench / Claw-Eval / ClawProBench / TB 2.1 / Toolathon / MCP-Atlas: no verified public score found

Coding:

- LiveCodeBench v6: **52.0%** (31B 80.0%, 26B 77.1%, 12B 72.0%, E2B 44.0%, Gemma 3 27B 29.1%)
- Codeforces ELO: **940** (31B 2150, 26B 1718, 12B 1659, E2B 633, Gemma 3 27B 110)
- SciCode: **0.2, #389** (CloudPrice); Coding Index **9.4, #194** (CloudPrice)
- BenchLM Coding lane: **20.3, #121 of 142** (estimated)
- SWE-bench Verified / SWE-Pro / DeepSWE / Vibe Code Bench: no verified public score found

Long context:

- **MRCR v2 8-needle @ 128K (average): 25.4%** (31B 66.4%, 26B 44.1%, 12B 43.4%, E2B 19.1%, Gemma 3 27B 13.5%) — measured at the model's *full* native window, and weak
- LCR: **0.3, #302** (CloudPrice) — independently consistent with the 25.4%
- No needle or retrieval measurement above 128K, and none from any AA-style aggregator

Vision:

- MMMU-Pro: **52.6%** (31B 76.9%, 26B 73.8%, 12B 69.1%, E2B 44.2%, Gemma 3 27B 49.7%)
- MATH-Vision: **59.5%** (31B 85.6%, 26B 82.4%, E2B 52.4%, Gemma 3 27B 46.0%)
- MedXPertQA (MM): **28.7%** (31B 61.3%, 26B 58.1%, 12B 48.7%, E2B 23.5%)
- OmniDocBench 1.5 (average edit distance, lower is better): **0.181** (31B 0.131, 26B 0.149, 12B 0.164, E2B 0.290, Gemma 3 27B 0.365)
- **Contradiction to flag:** CloudPrice's capability matrix records **Input 1/5 — Text ✓, Image ✗, Audio ✗** and **Capabilities 0/13** (reasoning, function calling, structured outputs all ✗). Every one of those contradicts Google's model card and all provider records. CloudPrice's E4B capability table is unusable and its only trustworthy fields are the benchmark ranks and prices.

Audio:

- CoVoST: **35.54** (E2B 33.47). FLEURS: not published for either edge model

Speed:

- Time to First Token: **1.02s, #409**; Output throughput **47.5 tok/s, #211** (CloudPrice)

### Normalized scores (1–100)

- **Tool use: 45/100.** Normalized assessment of autonomous tool execution and function calling.
- **Reasoning: 56/100.** Normalized assessment of complex multi-step reasoning and deductive analysis.
- **Context window: 60/100.** Effective retrieval fidelity across context capacity (128,000 total).
- **Multimodal: 78/100.** Input/output modality comprehension (Text, image, audio in; text out; reasoning + function calling).
- **Coding: 52/100.** Verified software engineering and code generation capability.
- **Cost efficiency: 98/100.** Value proposition relative to performance and pricing structure.
- **Overall Score: 58.2/100.** Balanced quality capability across the 5 core dimensions.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-11
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.
