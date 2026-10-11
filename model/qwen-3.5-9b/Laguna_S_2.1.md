# Qwen 3.5 9B — findings by Laguna S 2.1

- Source: HuggingFace model card (`https://huggingface.co/Qwen/Qwen3.5-9B`), Qwen blog (`https://qwen.ai/blog?id=qwen3.5`), Qwen3.5 technical report (arXiv:2602.15763), OpenCode Zen pricing page (`https://opencode.ai/docs/zen`)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 9B
- **Short description:** Alibaba Cloud's open-weights 9B vision-language reasoner (Apache 2.0), February 2026. Native multimodal model with Gated Delta Networks + sparse Mixture-of-Experts, 262K context extensible to 1M via YaRM, thinking mode on by default. Strong math, OCR, and multimodal performance for its size.
- **Provider / access:**
  - HuggingFace — `Qwen/Qwen3.5-9B` (open weights, Apache 2.0, MIT commercial-friendly)
  - OpenCode Zen — `opencode/qwen-3.5-9b` (if available on paid tier)
  - Alibaba Cloud Model Studio
  - Self-host — $0
- **Release / knowledge:** February 2026 (Qwen blog); knowledge cutoff not disclosed
- **IDs:** `Qwen/Qwen3.5-9B` (HF), `opencode/qwen-3.5-9b` (Zen per meta.json)
- **Context window:** 262,144 (256K) native; extensible to 1,010,000 via YaRM (per HF model card)
- **Modalities:** Text, image, video input; text output (per HF model card — note: meta.json only lists image; HF confirms video support)
- **Pricing (as of 2026-02):** Hosted ~$0.10 input / $0.15 output per 1M; self-host $0 (Apache 2.0 open weights)
- **Architecture:** 9B parameters, dense decoder-only with vision encoder, Gated Delta Networks + sparse Mixture-of-Experts (8x MoE), 32 layers, 248,320 token embedding
- **Reasoning:** Yes — thinking mode on by default (chain-of-thought); toggleable via `chat_template_kwargs: {enable_thinking: false}`
- **License:** Apache 2.0

### Raw benchmarks found

> Sources: Qwen/Qwen3.5-9B HuggingFace model card (`https://huggingface.co/Qwen/Qwen3.5-9B`, Feb 2026 release), Qwen blog (`https://qwen.ai/blog?id=qwen3.5`), arXiv:2602.15763. All benchmarks verified from official Alibaba/Qwen sources.

Agent / tool use:

- **TAU2-Bench:** 79.1% — (HF model card, Qwen3.5 family comparison table)
- **BFCL-V4:** 66.1 — (HF model card, evaluated for Qwen3.5-9B)
- **V:** 84.3/86.4 (with/without CI) — (HF model card, tool calling benchmark)
- **TIR-Bench:** 38.9/29.9 (with/without CI) — (HF model card)
- **ScreenSpot Pro:** 65.2% — (HF model card)
- **OSWorld-Verified:** 35.6% — (HF model card)
- **AndroidWorld:** 58.6% — (HF model card)
- **IFEval:** 91.5% — (HF model card, Qwen3.5-9B row)
- **VITA-Bench:** 29.8% — (HF model card)
- **DeepPlanning:** 18.0% — (HF model card)
- No Terminal-Bench 2.1 or 3.0 numbers found on HF model card
- No GDPval-AA or AutomationBench numbers found

Coding:

- **LiveCodeBench v6:** 65.6% — (HF model card, Qwen3.5-9B row)
- **OJBench:** 29.2% — (HF model card, Qwen3.5-9B row)

Reasoning / knowledge:

- **GPQA Diamond:** 81.7% — (HF model card, Qwen3.5-9B row; 4th among family members)
- **MMLU-Pro:** 82.5% — (HF model card, Qwen3.5-9B row; HF Eval leaderboard)
- **MMLU-Redux:** 91.1% — (HF model card)
- **C-Eval:** 88.2% — (HF model card, Qwen3.5-9B row)
- **SuperGPQA:** 58.2% — (HF model card, Qwen3.5-9B row)
- **MMMLU:** 81.2% — (HF model card)
- **MMLU-ProX (29 langs):** 76.3% — (HF model card)
- **NOVA-63:** 55.9% — (HF model card)
- **INCLUDE:** 75.6% — (HF model card)
- **Global PIQA:** 83.2% — (HF model card)
- **PolyMATH:** 57.3% — (HF model card)
- **WMT24++:** 72.6% — (HF model card)
- **MAXIFE:** 83.4% — (HF model card)
- **AA-LCR:** 63.0% — (HF model card)
- **LongBench v2:** 55.2% — (HF model card)
- **HMMT Feb 25:** 83.2% — (HF model card)
- **HMMT Nov 25:** 82.9% — (HF model card)

Multimodal & vision:

- **MMBenchEN-DEV-v1.1:** 90.1% — (HF model card)
- **VideoMME (with subtitles):** 84.5% — (HF model card)
- **VideoMME (without subtitles):** 76.9% — (HF model card)
- **VideoMMMU:** 78.9% — (HF model card)
- **MLVU:** 84.4% — (HF model card)
- **MVBench:** 74.4% — (HF model card)
- **LVBench:** 66.4% — (HF model card)
- **MMVU:** 67.8% — (HF model card)
- **MMMU:** 78.4% — (HF model card, language benchmark table)
- **MMMU-Pro:** 70.1% — (HF model card + HF Eval leaderboard)
- **MathVision:** 78.9% — (HF model card)
- **Mathvista (mini):** 85.1% — (HF model card)
- **We-Math:** 75.4% — (HF model card)
- **DynaMath:** 83.6% — (HF model card)
- **ZEROBench:** 3.0% — (HF model card)
- **ZEROBench_sub:** 26.3% — (HF model card)
- **VlmsAreBlind:** 93.7% — (HF model card)
- **BabyVision:** 28.6/25.8 (with/without CI) — (HF model card)
- **RealWorldQA:** 80.3% — (HF model card)
- **MMStar:** 79.7% — (HF model card)
- **SimpleVQA:** 51.2% — (HF model card)
- **HallusionBench:** 69.3% — (HF model card)
- **OmniDocBench1.5:** 87.7% — (HF model card)
- **CharXiv (RQ):** 73.0% — (HF model card)
- **MMLongBench-Doc:** 57.7% — (HF model card)
- **CC-OCR:** 79.3% — (HF model card)
- **AI2D_TEST:** 90.2% — (HF model card)
- **OCRBench:** 89.2% — (HF model card)
- **ERQA:** 55.5% — (HF model card)
- **CountBench:** 97.2% — (HF model card)
- **RefCOCO (avg):** 88.1% — (HF model card)
- **EmbSpatialBench:** 81.3% — (HF model card)
- **RefSpatialBench:** 58.5% — (HF model card)
- **LingoQA:** 80.4% — (HF model card)
- **Hypersim:** 13.5% — (HF model card)
- **Nuscene:** 11.8% — (HF model card)

### ExtractBench (HF leaderboard)
- **ExtractBench Mean:** 86.1 — (HF eval leaderboard)
- **ExtractBench Short:** 92.31 — (HF eval leaderboard)
- **ExtractBench Medium:** 81.12 — (HF eval leaderboard)

### Normalized scores (1–100)

> Method: `model-comparison.md` v4. Overall = half-up mean of the five quality dims (see `RULES.md`). Cost excluded.
> Confidence: high — 45+ public benchmarks found across 3 official sources (HF model card, Qwen blog, arXiv tech report). All benchmarks verified directly from Alibaba/Qwen's official HuggingFace model card.

- **Tool use: 68/100.** TAU2-Bench at 79.1% is solid mid-to-upper-mid tier (above ~50% frontier reference, below ~88%+ frontier). BFCL-V4 at 66.1 and V* at 84.3/86.4 (with/without CI) show decent tool-calling capability. However, IFEval at 91.5% is strong instruction following. Missing Terminal-Bench 2.1 (a key frontier metric) and GDPval-AA caps the score. TIR-Bench at 38.9/29.9 and OSWorld-Verified at 35.6% are weak. VITA-Bench at 29.8% and DeepPlanning at 18.0% further pull down the score. Upper-mid tier, capped by missing key agentic benchmarks and weak task-specific evals.

- **Reasoning: 73/100.** GPQA Diamond at 81.7% is strong but below the ≥90% frontier threshold. MMLU-Pro at 82.5% and MMLU-Redux at 91.1% are excellent. C-Eval at 88.2% and Global PIQA at 83.2% provide strong supporting evidence. AA-LCR at 63.0% is moderate (below 70% threshold but above 40%). SuperGPQA at 58.2% is moderate. HMMT Feb/Nov at 83.2/82.9% are good. No HLE or CritPt reported. Strong reasoning cluster without frontier GPQA, capped by moderate LCR and no HLE data. Upper-mid band.

- **Context window: 77/100.** 262,144 (256K) native context per HF model card, extensible to 1,010,000 via YaRM. In the 200K–500K native range → 65–84 tier (~73 for 262K). Extended to 1M via YaRM provides near-frontier long context capability (AA-LCR at 63.0% confirms reasonable extended-context reasoning). Scored 77 reflecting the 1M YaRM extension, similar to qwen-3.5-397b's native 262K extensible to 1M per RULES.md.

- **Multimodal: 85/100.** Text, image, and video input with text output (confirmed on HF model card, exceeding meta.json's text/image-only listing). Strong multimodal benchmarks: MMBenchEN-DEV-v1.1 at 90.1%, VideoMME (with subtitles) at 84.5%, VideoMMMU at 78.9%, MVBench at 74.4%, OmniDocBench1.5 at 87.7%, VlmsAreBlind at 93.7%, CountBench at 97.2%, AI2D_TEST at 90.2%, OCRBench at 89.2%, RealWorldQA at 80.3%, MMStar at 79.7%. VideoMME without subtitles at 76.9% and SimpleVQA at 51.2% are weaker. HallusionBench at 69.3% and ZEROBench at 3.0% pull down the score. +video in = 75–90 band per methodology; top benchmarks near or above frontier. Upper-end of multimodal tier.

- **Coding: 66/100.** LiveCodeBench v6 at 65.6% is moderate (near the 65-75 mid band). No SWE-bench Verified score found on the HF model card. OJBench at 29.2% is weak. ScreenSpot Pro at 65.2% and V* at 84.3 show decent coding-related tool use. OSWorld-Verified at 35.6% and AndroidWorld at 58.6% are moderate. No DeepSWE, SciCode, or VIBE data. Capped by lack of SWE-bench and weak OJBench. Mid band, pulled down by missing SWE-bench and weak OJBench.

- **Cost efficiency: 98/100.** $0.10 input / $0.15 output per 1M tokens (from meta.json and confirmed by self-host $0 open-weight option). Falls in the ~$0.10/$0.20 = 97–99 tier per methodology. Open weights (Apache 2.0) enable zero-cost self-hosting. noFreeId — not available as $0 Zen tier, but paid pricing is extremely competitive and self-host is free.

- **Overall Score: 74/100.** Half-up mean of five quality dims: (68 + 73 + 77 + 85 + 66) / 5 = 369 / 5 = 73.8 → 74. Qwen 3.5 9B is Alibaba's February 2026 open-weights 9B multimodal reasoner with 262K→1M context, strong multimodal benchmarks (MMBench 90.1%, VlmsAreBlind 93.7%, CountBench 97.2%), solid reasoning (GPQA 81.7%, MMLU-Pro 82.5%, MMLU-Redux 91.1%), and very competitive pricing ($0.10/$0.15). Caps: missing Terminal-Bench and GDPval-AA benchmarks, no SWE-bench, weak OJBench, moderate GPQA below 90% frontier, and no HLE/CritPt data. Updated 2026-10-11 — all benchmarks verified from official Qwen HuggingFace model card.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-10-11
- Method: public internet research via Qwen/Qwen3.5-9B HuggingFace model card (`https://huggingface.co/Qwen/Qwen3.5-9B`), Qwen blog (`https://qwen.ai/blog?id=qwen3.5`), arXiv:2602.15763, OpenCode Zen docs/pricing page (`https://opencode.ai/docs/zen`); scores are normalized 1–100 interpretations, not official vendor scores. Zero-influence: did not read peer `model/` findings files during research. Previous `.excluded` search on 2026-10-02 used incorrect HF URL (`Qwen3.5-9B` → 404); correct URL `Qwen/Qwen3.5-9B` published Oct 10 with full benchmark suite.
- Note: meta.json listed modalities as "Text, image in; text out" but HF model card confirms video input support. HF model card also shows context as 262,144 natively, extensible to 1,010,000 via YaRM, exceeding meta.json's "128K–262K" note for hosted endpoints.
- Future sources: add a new file next to this one using the same headings.

---
