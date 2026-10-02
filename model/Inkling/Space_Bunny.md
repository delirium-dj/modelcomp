# Inkling — findings by Space Bunny Alpha

- Source: Thinking Machines / Inkling
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Inkling
- **Short description:** Thinking Machines' open-weight multimodal MoE model for agentic applications, coding assistants, tool use, retrieval, and general text/image/audio conversation. **Not deprecated** as of 2026-09-29; it is a current, actively benchmarked release available through 7 API providers.
- **Provider / access:** Hugging Face `thinkingmachines/Inkling`; Thinking Machines API/Tinker Playground; local SGLang, vLLM, TokenSpeed, Unsloth, and Hugging Face deployment. Artificial Analysis lists **7 API providers**.
- **Release / knowledge:** **Released 2026-07-15** per the Artificial Analysis FAQ (accessed 2026-09-29) — this is a correction: the previous revision recorded "no verified exact release date". No verified knowledge cutoff was found.
- **IDs:** `thinkingmachines/Inkling`; quantized variants include `thinkingmachines/Inkling-NVFP4`.
- **Context window:** **1,000,000 tokens** (Artificial Analysis, accessed 2026-09-29). **Changed from the previous revision, which recorded no verified limit** — this is now a confirmed specification, not curated metadata.
- **Modalities:** Text, image, and speech input; text output (Artificial Analysis). Image/video are encoded through a hierarchical patch encoder and audio through discrete token encoding in the official model card. Native tool declarations and reasoning effort are supported by the model template.
- **Pricing (as of 2026-09-29):** Thinking Machines API at **$1.00 per 1M input / $4.05 per 1M output**, with an **83% cache discount** and a blended $0.72 per 1M on a 7:2:1 ratio. Artificial Analysis flags both legs as "at the higher end" for open-weights models of similar size (class medians $0.44 in / $1.68 out). Weights are released under Apache 2.0.
- **Speed / latency:** **177.3 output tokens/s** (rank #9/116; class median 81.8 — "notably fast") and **TTFT 1.79 s** (class median 2.01 s — better than average). It generated 140M output tokens on the index, in line with the class median.
- **Architecture:** Multimodal autoregressive transformer with 66 decoder layers, sparse MoE routing to 6 of 256 experts plus 2 shared experts, hybrid local/global attention, and **975B total / 41B active** parameters (confirmed by Artificial Analysis); Apache 2.0. BF16 and NVFP4 are supported.

### Raw benchmarks found

> The official Thinking Machines model card reports Inkling at reasoning effort 0.99. All values in the benchmark subsections below are the Inkling column from that table. Separately, Artificial Analysis now publishes an independent v4.3.2 composite for the `xhigh` variant.

Agent / tool use:

- MCP Atlas: **74.1%**; Tau3 Banking: **23.7%**; Terminal-Bench 2.1 (best harness): **63.8** (official model card).
- SWE-bench Verified: **77.6%**; SWE-bench Pro public: **54.3%** (official model card).
- IFBench: **79.8%** (official model card).

Reasoning / knowledge:

- AIME 2026: **97.1%**; GPQA Diamond: **87.2%**; HLE text-only / with tools: **29.7% / 46.0%** (official model card).
- Global-MMLU-Lite: **88.7%**; BrowseComp with context: **77.1%** (official model card).
- SimpleQA Verified: **43.9%**; AA Omniscience: **1.0%** (official model card; the latter is a reported factuality metric, not a general knowledge score).
- **Artificial Analysis Intelligence Index v4.3.2: 25, rank #29/116** among open-weights models of similar size (accessed 2026-09-29; class median 18). **Newly recorded** — the previous revision cited no AA composite at all. No per-evaluation component rows are published for this model.

Coding:

- SWE-bench Verified: **77.6%**; SWE-bench Pro: **54.3%**; Terminal-Bench 2.1: **63.8** (official model card).
- No exact public LiveCodeBench, SciCode, or Aider result was found.

Long context:

- The 1M-token context window is now a **verified specification** (Artificial Analysis, 2026-09-29). **No exact-model long-context retrieval benchmark (MRCR, RULER, GraphWalks) was found**, so the window is scored on its documented size rather than on measured retrieval quality. BrowseComp with context at 77.1% is the closest available long-context-ish measurement.

Multimodal:

- MMMU-Pro Standard 10: **73.5%**; CharXiv RQ: **78.1%**; CharXiv RQ with Python: **82.0%** (official model card).
- Audio MC: **56.6%**; MMAU: **77.2%**; VoiceBench: **91.4%** (official model card).

### Normalized scores (1–100)

- **Tool use: 86/100.** Unchanged. MCP Atlas at 74.1%, SWE-bench Verified at 77.6%, and Terminal-Bench at 63.8 show strong agent/coding execution; Tau3 Banking at 23.7% and missing broader tool benchmarks cap the score.
- **Reasoning: 87/100.** Unchanged. AIME 2026 at 97.1%, GPQA at 87.2%, and Global-MMLU-Lite at 88.7% are excellent; HLE and the low AA Omniscience result reduce confidence in hard knowledge/factuality. The new independent AA composite of 25 is *below* these vendor numbers, which is a caution flag rather than a contradiction.
- **Context window: 95/100.** **Changed up from 50.** The previous score reflected a *missing* verified limit; the 1M window is now confirmed by Artificial Analysis, which places it in the methodology's top tier. Still short of the highest band because no retrieval-at-length benchmark was found.
- **Multimodal: 87/100.** Unchanged. Strong MMMU-Pro, CharXiv, audio, and voice results across text, image, and audio inputs demonstrate unusually broad multimodal capability.
- **Coding: 87/100.** Unchanged. SWE-bench Verified at 77.6%, SWE-bench Pro at 54.3%, and Terminal-Bench at 63.8 are strong; the lack of additional coding benchmarks prevents a top score.
- **Cost efficiency: 72/100.** **Changed down from 82.** The previous revision priced the model on open-weight availability alone. Now that hosted prices are verified, Thinking Machines charges $1.00 / $4.05 per 1M — above the $0.44 / $1.68 class medians — and the 975B / 41B-active MoE is hardware-intensive to self-host. The 83% cache discount and Apache 2.0 licence keep it in the upper band rather than the top.
- **Overall Score: 88.4/100.** (86 + 87 + 95 + 87 + 87) / 5 = 442 / 5 = 88.4. **Changed up from 79** — the entire delta is the Context window correction (50 → 95) once the 1M limit was verified; the other four quality dimensions are unchanged. Best for organizations able to operate large MoE infrastructure, with long-context *retrieval* evidence still the main gap.

---

## Signature

- Provided by: **Space Bunny Alpha (opencode/space-bunny-free)** — 2026-09-29
- Method: official Thinking Machines Hugging Face model card and model template, plus Artificial Analysis model page and Intelligence Index v4.3.2 data (accessed 2026-09-29); scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Future sources: add a new file next to this one, e.g. `Thinking_Machines_Inkling_Recheck.md`, using the same headings.
