# Qwen 3.5 9B — findings by Ling 3.1 Flash

- Source: Ling 3.1 Flash (opencode/ling-3.1-flash-free) / Qwen 3.5 9B
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **CAVEAT (from the evidence):** This model's factual reliability is its weak point — AA-Omniscience non-hallucination rate is 16.4% (reasoning variant), i.e. an ~80–82% hallucination rate on factual questions (AA; TokenCost: "roughly four out of five factual questions getting a wrong or made-up answer"). It is also very verbose (2–4× peers' output tokens), which inflates real-world output cost ~3×. Both facts are reflected in the scores.

## Model card

- **Name:** Qwen3.5-9B (Reasoning and Non-reasoning variants; HF: `Qwen/Qwen3.5-9B`, Apache 2.0)
- **Short description:** Alibaba's March 2026 small multimodal foundation model — a dense 9B (9.7B total) with Gated DeltaNet + Gated Attention hybrid layout, early-fusion multimodal tokens (text/image/video in one set of weights), and reasoning effort control; the headline of the Qwen3.5 small family (0.8B/2B/4B/9B), beating last-gen Qwen3-30B on several benchmarks at one-third the size.
- **Provider / access:** Qwen (Chat, DashScope), OpenRouter (`qwen/qwen3.5-9B` — Darkbloom, SiliconFlow, DeepInfra, Venice, Parasail, Together), local (Ollama ~6.6 GB, min 8 GB VRAM; single 20 GB GPU for API-class hosting).
- **Release / knowledge:** 2026-03-02 (HF page 2026-03-09; OpenRouter 2026-03-10). Knowledge cutoff not captured.
- **IDs:** `qwen/qwen3.5-9b`; repo folder `qwen-3.5-9b`.
- **Context window:** 262,144 tokens (AA, llm-stats, InsiderLLM; TokenCost claims "extends to 1M context" — unresolved conflict).
- **Modalities:** Text, image, video in; text out (unified early-fusion vision-language design).
- **Pricing (as of 2026-10):** OpenRouter $0.08/$0.13 per 1M (Darkbloom cheapest; most hosts $0.10/$0.15; Together $0.17/$0.25); AA median $0.14/$0.20; llm-stats $0.10/$0.15 (DeepInfra); TokenCost recorded $0.05/$0.15 (OpenRouter, March 2026). Effective output cost ≈$0.45/M after the 2–4× verbosity factor.
- **Architecture:** Dense — 9B (9.7B total), 32 layers, hidden 4096, vocab 248,320 (padded); layout 8 × (3 × (Gated DeltaNet → FFN) → 1 × (Gated Attention → FFN)).
- **Performance:** 58 t/s reasoning / 86 t/s non-reasoning (AA); TTFT 0.77s (non-reasoning); "notably slow and very verbose" on the Intelligence Index (220M tokens vs 82M median, AA).

### Raw benchmarks found

**Artificial Analysis (OpenRouter page):**
- Reasoning variant: Coding Index **28.7**; GPQA Diamond **80.6%**; HLE **14.9%**; IFBench **66.7%**; τ²-Bench Telecom **86.8%**; AA-LCR **70.0%**; GDPval-AA **0.0%**; CritPt **0.3%**; Terminal-Bench Hard **24.2%**; AA-Omniscience accuracy **16.4%** / non-hallucination **16.4%**.
- Non-reasoning variant: Coding Index 23.5; GPQA 78.6%; HLE 9.4%; IFBench 37.8%; τ²-Telecom 85.1%; AA-LCR 46.0%; CritPt 0.6%; TB Hard 18.2%; Omniscience 14.0%/1.6%.
- AA Intelligence Index **11** (model page, 2026-03-02) / **14** (release page; "well above average among comparable models", median 8); TokenCost reports **32** — conflicting snapshots across AA's page versions.

**Vendor HF card — Language (vs GPT-OSS-120B/20B, Qwen3-Next-80B-A3B, Qwen3-30B-A3B, Qwen3.5-4B):**
MMLU-Pro **82.5**, MMLU-Redux **91.1**, C-Eval **88.2**, SuperGPQA **58.2**, GPQA Diamond **81.7**, IFEval **91.5**, IFBench **64.5**, MultiChallenge **54.5**, AA-LCR **63.0**, LongBench v2 **55.2**, HMMT Feb 25 **83.2**, HMMT Nov 25 **82.9**, LiveCodeBench v6 **65.6**, OJBench **29.2**, BFCL-V4 **66.1**, TAU2-Bench **79.1** (official setup except the airline domain, fixed per the Claude Opus 4.5 system card), VITA-Bench **29.8**, DeepPlanning **18.0**, MMMLU **81.2**, MMLU-ProX **76.3**, NOVA-63 **55.9**, INCLUDE **75.6**, Global PIQA **83.2**, PolyMATH **57.3**, WMT24++ **72.6**, MAXIFE **83.4**.

**Vendor HF card — Vision Language (vs GPT-5-Nano-2025-08-07, Gemini-2.5-Flash-Lite, Qwen3-VL-30B-A3B, Qwen3.5-4B):**
MMMU **78.4**, MMMU-Pro **70.1**, MathVision **78.9**, MathVista(mini) **85.7**, We-Math **75.2**, DynaMath **83.6**, ZEROBench **3.0** (sub 31.1), VlmsAreBlind **93.7**, BabyVision 28.6/25.8, RealWorldQA **80.3**, MMStar **79.7**, MMBench EN-DEV **90.1**, SimpleVQA **51.2**, HallusionBench **69.3**, OmniDocBench1.5 **87.7**, CharXiv(RQ) **73.0**, MMLongBench-Doc **57.7**, CC-OCR **79.3**, AI2D_TEST **90.2**, OCRBench **89.2**, ERQA **55.5**, CountBench **97.2**, RefCOCO(avg) **89.7**, EmbSpatialBench **83.0**, RefSpatialBench **58.5**, LingoQA **80.4**, Hypersim 13.5, Nuscene 11.8, VideoMME (w/ sub) **84.5** / (w/o sub) **78.4**, VideoMMMU **78.9**, MLVU **84.4**, MVBench **74.4**, LVBench **70.0**, MMVU **67.8**, ScreenSpot Pro **65.2**, OSWorld-Verified **41.8**, AndroidWorld **57.8**, TIR-Bench 45.6/31.9, V* 90.1/88.5, SLAKE **79.0**, PMC-VQA **57.9**, MedXpertQA-MM **49.9**.

## Scores

- **Tool use: 71/100.** TAU2-Bench 79.1 (vendor) and τ²-Bench Telecom 86.8% (AA) are strong; BFCL-V4 66.1, OSWorld-Verified 41.8, AndroidWorld 57.8, ScreenSpot Pro 65.2, TIR-Bench 45.6 round out the agentic picture.
- **Reasoning: 63/100.** GPQA Diamond 81.7 (vendor) / 80.6% (AA), HMMT Feb 83.2 / Nov 82.9, MMLU-Pro 82.5, MMLU-Redux 91.1 are strong for 9B; drags: HLE 14.9% (AA), CritPt 0.3%, AA-Omniscience non-hallucination 16.4% (~80–82% hallucination rate), AA Intelligence Index 11–14 (TokenCost's 32 conflicts).
- **Context window: 73/100.** 262K (1M claim per TokenCost — unresolved); AA-LCR 63.0–70.0%, LongBench v2 55.2 — mid-pack long-context.
- **Multimodal: 76/100.** MMMU 78.4, MMMU-Pro 70.1, MathVision 78.9, MathVista 85.7, OmniDocBench1.5 87.7, VideoMME 84.5, MLVU 84.4, CountBench 97.2, VlmsAreBlind 93.7 — exceptional for a 9B; drags: ZEROBench 3.0, SimpleVQA 51.2.
- **Coding: 56/100.** LiveCodeBench v6 65.6 (vendor) and OJBench 29.2; AA Coding Index 28.7 and Terminal-Bench Hard 24.2%; no SWE-bench score captured.
- **Cost efficiency: 90/100.** $0.08/$0.13 per 1M (OpenRouter cheapest) with Apache 2.0 weights and 8 GB VRAM local deployment — deep-discount tier; docked for the 2–4× verbosity factor (effective ≈$0.45/M) and the hallucination-driven rework cost on factual tasks.
- **Overall Score: 67.8/100.** Mean of Tool use 71, Reasoning 63, Context window 73, Multimodal 76, Coding 56 = 67.8 (Cost efficiency excluded per methodology).

> **Gap vs folder average (70.1): −2.3.** Small gap. The model's real strengths (multimodal breadth for 9B, TAU2 79.1, GPQA 81.7, $0.08/M input) are credited; the ~80% factual hallucination rate and weak coding-evals cap Reasoning and Coding.

## Notes

- Verification trail: HF `Qwen/Qwen3.5-9B` (architecture, language + vision-language tables, Apache 2.0), OpenRouter listing (AA measurements, providers, pricing), AA model/release pages (Index 11/14, 262K, 9.7B, verbosity, pricing medians), llm-stats ($0.10/$0.15, 262.1K), InsiderLLM (family table, Ollama sizes, GPQA/IFEval/LongBench gaps vs Qwen3-30B), TokenCost ($0.05/$0.15 March rates, AA Index 32 conflict, hallucination 80–82%, verbosity 230–390M vs 86–109M tokens, 1M-context claim).
- Known conflicts: AA Intelligence Index 11/14 (AA pages) vs 32 (TokenCost); context 262K (most sources) vs 1M (TokenCost); GDPval-AA 0.0% (AA) — likely an unrun/zero entry rather than a measured zero.
- Open questions: the hallucination rate's impact on retrieval-augmented workloads; whether the 1M-context claim reflects a newer revision; SWE-bench-class coding evals.
- Future sources: AA re-measurements, Qwen3.6 small-model releases, third-party harness runs.

---

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-03
- Cross-model signed log: `model-findings.md` — append one line: `2026-10-03 Ling 3.1 Flash Qwen 3.5 9B Overall=67.8 (Tool=71 Reasoning=63 Context=73 Multimodal=76 Coding=56 Cost=90; 80-82% hallucination rate on Omniscience; 2-4x verbose)`
