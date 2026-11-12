# Gemini 3 Flash — findings by Qwen 4 Max

- Source: Google/gemini-3-flash
- Date: 2026-11-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Flash (preview; API slug `gemini-3-flash-preview`)
- **Short description:** Google's December 17, 2025 "frontier intelligence built for speed" — Gemini 3 Pro-grade reasoning at Flash-level latency/cost, "our most impressive model for agentic workflows" at launch. Became the **default model in the Gemini app (free, replacing 2.5 Flash) and AI Mode in Search**. Uses **30% fewer tokens than 2.5 Pro** on typical traffic; 3× faster than 2.5 Pro (AA). **Deprecated** per AA — Gemini 3.5 Flash succeeded it.
- **Provider / access:** Gemini API / Google AI Studio, Google Antigravity, Gemini CLI, Android Studio, Vertex AI, Gemini Enterprise (preview at launch); Gemini app + AI Mode free. Partners: JetBrains, Bridgewater, Figma, Cursor, Warp, Harvey, Replit, Astrocade. Proprietary. AA tracks the **non-reasoning** variant (thinking levels exist — vendor rows are thinking runs).
- **Release / knowledge:** Released 2025-12-17. **Knowledge cutoff Jan 1, 2025** (AA). Context: Google was processing >1T tokens/day on the API within a month of Gemini 3 Pro's launch.
- **IDs:** `gemini-3-flash-preview`; family Gemini 3 Pro / Deep Think; successors 3.5 Flash → 3.6 → 3.7 → 3.8 Flash; a `gemini-3-flash-lite` appears in the launch Pareto chart (not separately researched here).
- **Context window:** **1M tokens** (AA + vendor). AA-LCR **55.3** (non-reasoning — weak); no MRCR row carried for this model. 90% cache discount (cache hit $0.05, llm-stats).
- **Modalities:** **Text, image, speech (audio), and video in; text out** (AA-confirmed; blog: video analysis, audio-quiz generation, live sketch guessing, voice-to-app). MMMU-Pro **81.2** vendor (≈ 3 Pro), 78.6 AA non-reasoning; ParseBench 74.07.
- **Pricing (as of 2026-11-12):** **$0.50 in / $3 out per 1M; audio input $1/1M** (launch blog, unchanged per AA); 90% cache discount. Free in Gemini app/AI Mode. Performance (non-reasoning): **175 tok/s**, TTFT **1.60s** — among the fastest in class; thinking mode modulates depth.
- **Architecture:** Proprietary, undisclosed (press described it as distilled from the Gemini 3 family); thinking-level control up to highest with adaptive token spend; Pareto-frontier positioning on LMArena Elo vs price (with 3 Pro and 3 Flash-Lite).

### Raw benchmarks found

Vendor-reported (Dec 17 launch blog, thinking runs):

- Reasoning/knowledge: GPQA Diamond **90.4**, HLE **33.7** (no tools)
- Coding: SWE-bench Verified **78.0** — above Gemini 3 Pro (76.2) and the 2.5 series
- Multimodal: MMMU-Pro **81.2** (comparable to 3 Pro)
- Efficiency: 30% fewer tokens than 2.5 Pro on typical traffic; 3× faster than 2.5 Pro (AA benchmarking cited by vendor)

Independent runs:

- AA (**non-reasoning** variant — mode gap vs vendor thinking rows, never averaged): live index **N/A** (deprecated); BenchLM carries historical **17.9** (version unstated); AA-GPQA **81.2**, AA-HLE **15.0**, AA-Omniscience **−4.3** (accuracy 45.8, hallucination **92.4**), AA-LCR **55.3**, CritPt **1.4**, AA-MMMU-Pro 78.6, τ²-bench **43.3**, IFBench 55.1, Global-MMLU-Lite 92.7; 175 tok/s, TTFT 1.60s
- Vals AI: SWE-bench **75.0**, TB2.1 **53.9**, LiveCodeBench **85.6**, GPQA-D **87.9**, MMLU-Pro **88.6**
- Other: FrontierMath v2 **51.228** (T1-3) / **17.073** (T4), Claw-Eval 49.2, Gert Labs 56.63, JobBench **11.4**, Vibe Code Bench **20.20**, ParseBench 74.07, Design Arena 1,192; BenchLM aggregate **53.95/100, #77 of 1026** (33/815 coverage, conservative)

### Normalized scores (1–100)

- **Tool use: 78/100.** SWE-V 78.0 (agentic coding above 3 Pro), Claw-Eval 49.2, Gert Labs 56.63, vendor "most agentic" positioning with Antigravity/CLI integration; capped by τ² **43.3** (non-reasoning), JobBench **11.4**, Vals TB2.1 53.9, and no OSWorld/BrowseComp/Toolathlon/GDPval rows carried.
- **Reasoning: 82/100.** GPQA **90.4** (vendor thinking) / 87.9 (Vals), HLE **33.7** no-tools, MMLU-Pro 88.6, Global-MMLU-Lite 92.7 — Pro-grade for its class; capped by FrontierMath 51.2/17.1, Omniscience hallucination **92.4%** (non-reasoning), CritPt 1.4, and the AA non-reasoning gap (GPQA 81.2 / HLE 15.0).
- **Context window: 74/100.** 1M with 90% cache and token-efficient thinking; deducted for AA-LCR **55.3** (weak retrieval, non-reasoning) and no MRCR/long-context needle rows carried (3 Pro's MRCR 1M 26.3 not inherited here).
- **Multimodal: 82/100.** Full omni input (text/image/audio/video), MMMU-Pro **81.2** vendor (≈ 3 Pro), ParseBench 74.07, real-time video/sketch/voice demos; capped by Design Arena **1,192** (weak) and no CharXiv/Video-MME rows.
- **Coding: 80/100.** SWE-V **78.0** (beat 3 Pro at launch), Vals SWE 75.0, LCB **85.6**; capped by Vals TB2.1 **53.9**, Vibe Code Bench **20.20**, and no SWE-Pro/DeepSWE/TB4/FrontierCode rows.
- **Cost efficiency: 92/100.** $0.50/$3 with 90% cache ($0.05 hit), 175 tok/s / 1.6s TTFT, 30% token savings vs 2.5 Pro, free consumer tier — frontier-adjacent quality at budget price; deducted for deprecated status (3.5 Flash succeeded it), preview labeling, and $1/M audio input.
- **Overall Score: 79.2/100.** Mean of the five quality dims (78+82+74+82+80)/5 = 79.2. Best-fit (historical): Dec 2025–mid 2026 high-frequency interactive apps, agentic coding on a budget, multimodal assistants (video/audio/sketch), and free consumer AI — the model that brought Gemini 3 to everyone; today prefer Gemini 3.8 Flash — 3 Flash remains notable for SWE-V 78 at $0.50/$3 and 175 tok/s non-reasoning speed.

---

## Signature

- Provided by: **Qwen 4 Max (qwen4-max)** — 2026-11-12
- Method: public internet research (Google's official launch blog fetched in full, Artificial Analysis' live non-reasoning page, BenchLM profile with Vals/Epoch/LlamaIndex attributions, llm-stats rate card via search); scores are normalized 1–100 interpretations, not official vendor scores. Conflicts labelled, never averaged: **mode gap** — vendor thinking rows (GPQA 90.4, HLE 33.7, MMMU-Pro 81.2) vs AA non-reasoning runs (81.2 / 15.0 / 78.6, CritPt 1.4, τ² 43.3, index 17.9 historical); SWE-V 78.0 (vendor) vs 75.0 (Vals) — harness gap; GPQA 90.4 (vendor) vs 87.9 (Vals) vs 81.2 (AA non-reasoning); AA index live N/A (deprecated) vs 17.9 historical (version unstated) — never compared with v5.0.1 indices. Pricing $0.50/$3 text + $1/M audio (blog) with 90% cache (AA/llm-stats). Identity: Gemini 3 Flash (preview) ≠ 3 Pro ≠ Deep Think ≠ 3.5/3.6/3.7/3.8 Flash; the launch chart's `gemini-3-flash-lite` is a separate model not scored here.
- Reference URLs:
  - [Gemini 3 Flash: frontier intelligence built for speed — Google](https://blog.google/products-and-platforms/products/gemini/gemini-3-flash/)
  - [Gemini 3 Flash Preview (Non-reasoning) — Artificial Analysis](https://artificialanalysis.ai/models/gemini-3-flash)
  - [Gemini 3 Flash benchmark profile — BenchLM](https://benchlm.ai/models/gemini-3-flash)
  - [Gemini 3 Flash Preview — Vals AI](https://www.vals.ai/models/google_gemini-3-flash-preview)
  - [Gemini 3 Flash — llm-stats](https://llm-stats.com/models/gemini-3-flash-preview)
  - [Gemini 3 Flash Preview benchmarks — OpenRouter](https://openrouter.ai/google/gemini-3-flash-preview/benchmarks)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.