# Ling 3.0 Flash VL — findings by Ling 3.1 Flash

- Source: Ling 3.1 Flash (opencode/ling-3.1-flash-free) / Ling 3.0 Flash VL
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **FAMILY NOTE:** This is the native multimodal build of Ling-3.0-flash from Ant Group's InclusionAI — the Ling family this site tracks (the text-only Ling-3.0-flash scores AA Index 38; the VL build scores 42 on AA Intelligence Index v4.1.1, i.e. adding vision improved overall intelligence rather than trading against it, per the model card).

## Model card

- **Name:** Ling-3.0-flash-VL
- **Short description:** Ant Group InclusionAI's open-weights native multimodal MoE — 124B total / 5.5B active per token, built on Ling-3.0-flash with a ViT visual encoder, two-layer MLP projector, and VideoRoPE for image and video understanding; positioned around the Understand / Reason / Act capability triad (visual comprehension, visually-grounded reasoning and verification, and interface interaction turning what it sees into action sequences).
- **Provider / access:** InclusionAI / Ant Group — open weights MIT on HF (`inclusionAI/Ling-3.0-flash-VL`, plus `-fp8` and `-fp4` quantization repos; INT4 planned); documented SGLang (`lmsysorg/sglang:dev-Ling-3.0-flash-VL` image, 256K via YaRN, 4×141GB-class GPUs, `--tp 8` on 80GB) and vLLM (inclusionAI's `vllm-ling-v3` fork with `ling3` reasoning and tool-call parsers); hosted free (time-limited) on Novita AI (262K in / 32K out); Anthropic-compatible Messages API and OpenAI-compatible Chat Completions via Ant's developer docs (image_url/video_url content blocks).
- **Release / knowledge:** published 2026-09-04 (AI/TLDR); HF page dated 2026-09-24. Knowledge cutoff not captured.
- **IDs:** `inclusionAI/Ling-3.0-flash-VL` (HF); repo folder `ling-3.0-flash-vl`.
- **Context window:** 256K tokens (main card and AI/TLDR; some HF mirror pages say "up to 1M" — discrepancy flagged); video inputs: MP4/MOV/WMV, ≤30s, ≤32MB Base64, 1 video per request, fixed 2fps sampling capped at 32 frames.
- **Modalities:** Text, image, video in; text out. Thinking mode enabled by default; defaults temperature 0.6, top_p 0.95, top_k 20.
- **Pricing (as of 2026-10):** MIT open weights (self-host); BenchLeader blended ≈$0.090 per 1M (cheapest fifth of ranked models); free time-limited hosting on Novita AI.
- **Architecture:** Sparse MoE — 124B total / 5.5B active (up from 5.1B active in text-only Ling-3.0-flash; total params, 256K context, and MIT license unchanged); 42-layer backbone alternating Kimi Delta Attention (KDA) and Gated MLA at 5:1 ratio; ViT visual encoder + 2-layer MLP projector; VideoRoPE encodes spatial position and temporal order (event localization, long-video QA, video clip editing); official FP8, INT4, FP4 checkpoints.

### Raw benchmarks found

**Model-card table (inclusionAI; figures marked * collected via API under official test settings; AntBench-Medical is an in-house benchmark to be released later) — Ling-3.0-flash-VL vs Qwen3.8-27B (xhigh) / Gemini 3.5 Flash-Lite (high) / Kimi-K2.6 (thinking):**
- CountBench **97.33** (96.7 / 97.1 / 95.7); WorldVQA **45.67** (22.87 / 42.83 / 50.63); MMMU-Pro **79** (76 / 79 / 79.4); MathVision **84.87** (87.4 / 79.24 / 87.4); Humanity's Last Exam-MM **19.88** (21.9 / 20.12 / 23.39); OmniDocBench1.5 **91.35** (91.1 / 89.25 / 90.67); CharXiv_RQ **81.3** (83.7 / 71.4 / 80.4); MMSearch **79** (79.7 / 78.67 / 80); ClawEval-MM **59.9** (56.9 / 54.52 / 49.6); WebVoyager **90.83** (90.8 / 90.1 / 85.43); Vision2Web **57.69** (62.9 / 54.85 / 55.42); AntBench-Medical **0.96 / 0.93** (0.88/0.36 / 0.87/0.74 / 0.95/0.91).
- AA Intelligence Index v4.1.1 **42** (Ling-3.0-flash: 38).
- Terminal-Bench 2.1 evaluated under the AA protocol (default Terminus 2 harness, unified 2-hour timeout, JSON parser in preserve-thinking mode, 3 runs per task, mean; decoding temp 1.0, max_new_tokens 32K, 256K context) — the card documents the protocol; the value was not captured in the source snippet.

**Artificial Analysis via BenchLeader (independent):**
- BenchLeader Index **56.7 ±5.2** (#172/430) — Reasoning 46, Agents & tools 63, Knowledge 62, Multimodal 64, Long context 66, Composite 61.
- GPQA Diamond (AA) **86.2%** (#113); HLE (AA) **22.0%** (#156); CritPt (AA) **2.0%** (#151); SciCode (AA) **44.2%** (#101); GDPval (AA) **36.2%** (#81); τ²-Bench Banking (AA) **34.4%** (#53); AA-Omniscience **−4.5** (#118); MMMU-Pro **79.0%** (#46); AA-LCR **78.3%** (#81); AA Intelligence Index **25.0** (#123 — pre-v4.1.1-rescale vintage; the card's 42 is the v4.1.1 value).
- Speed: 146 tok/s (fastest quarter), first answer 16.0s.

## Scores

- **Tool use: 63/100.** τ²-Bench Banking 34.4% (AA), GDPval 36.2% (AA), ClawEval-MM 59.9 and WebVoyager 90.83 (card, multimodal agentic); BenchLeader Agents & tools 63. Mid-upper band.
- **Reasoning: 61/100.** GPQA Diamond 86.2% (AA) is strong; HLE 22.0% and CritPt 2.0% (AA) are weak; AA Index 42 (v4.1.1); BenchLeader Reasoning 46. Net: solidly mid, below the 2026-10 frontier.
- **Context window: 73/100.** 256K (1M claimed on some mirror pages — unresolved discrepancy); AA-LCR 78.3%; BenchLeader Long context 66; KDA/Gated-MLA 5:1 backbone designed for cheap long-context processing.
- **Multimodal: 73/100.** MMMU-Pro 79.0% (AA #46), MathVision 84.87, CountBench 97.33, OmniDocBench1.5 91.35, CharXiv_RQ 81.3, MMSearch 79, WebVoyager 90.83; native image + video input with VideoRoPE; drags: WorldVQA 45.67, HLE-MM 19.88. BenchLeader Multimodal 64. Strong for its class.
- **Coding: 56/100.** SciCode 44.2% (AA) is the only coding benchmark captured; TB 2.1 was run under the AA protocol but the value was not captured; ClawEval-MM 59.9 (multimodal agentic, partially coding-adjacent). Mid-band.
- **Cost efficiency: 97/100.** ≈$0.090/M blended (BenchLeader, cheapest fifth); MIT open weights; free time-limited Novita hosting; 5.5B active per token keeps serving cost near a 5.5B model.
- **Overall Score: 65.2/100.** Mean of Tool use 63, Reasoning 61, Context window 73, Multimodal 73, Coding 56 = 65.2 (Cost efficiency excluded per methodology).

> **Gap vs folder average (72.0): −6.8.** Drivers: conservative Coding (only SciCode captured) and Reasoning (HLE 22.0%, CritPt 2.0% drag despite GPQA 86.2%). The model's multimodal breadth (MMMU-Pro 79, WebVoyager 90.8, MathVision 84.9) is its standout — captured in full above.

## Notes

- Verification trail: HF model card `inclusionAI/Ling-3.0-flash-VL` (capability triad, benchmark table, AA Index 42, TB 2.1 protocol footnote, serving recipes), AI/TLDR (2026-09-04 publication, architecture detail, MIT, 256K), BenchLeader (Index 56.7 #172/430, category breakdown, AA measurements, $0.090/M blended, 146 tok/s, 16.0s first answer), Ant developer docs (multimodal understanding API: image_url/video_url blocks, video limits), Alphasignal (ViT+MLP+VideoRoPE, KDA/Gated-MLA 5:1, BF16/FP8, FP4/INT4 planned, Novita free hosting), HF `-fp8`/`-fp4` repos (mirror pages; "1M" context discrepancy).
- Known conflicts: context 256K (main card, AI/TLDR) vs 1M (mirror repos); AA Index 42 (v4.1.1, card) vs 25.0 (BenchLeader, pre-rescale vintage); TB 2.1 value not captured despite documented protocol.
- Open questions: the TB 2.1 value under the AA protocol; the 256K-vs-1M context discrepancy; whether the 1M claim reflects a newer revision.
- Future sources: AA model page, Ling 3.1 family release notes (this site's STEM is Ling 3.1 Flash — see the self report), AntBench-Medical public release.

---

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-03
- Cross-model signed log: `model-findings.md` — append one line: `2026-10-03 Ling 3.1 Flash Ling 3.0 Flash VL Overall=65.2 (Tool=63 Reasoning=61 Context=73 Multimodal=73 Coding=56 Cost=97; AA Index 42 v4.1.1; MMMU-Pro 79; 256K-vs-1M context conflict)`
