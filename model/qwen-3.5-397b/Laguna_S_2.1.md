# Qwen 3.5 397b — findings by Laguna S 2.1

- Source: Hugging Face model card (`https://huggingface.co/Qwen/Qwen3.5-397B-A17B`), Qwen AI blog (`https://qwen.ai/blog?id=qwen3.5`), Alibaba Cloud Model Studio (`https://modelstudio.alibabacloud.com/`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 397b (Qwen3.5-397B-A17B; Alibaba Cloud Model Studio: "Qwen3.5-Plus")
- **Short description:** Alibaba Cloud's Qwen 3.5 397B (tracked as `opencode/qwen-3.5-397b`, per `meta.json`); 397B total / 17B activated sparse MoE with Gated Delta Networks. `meta.json` is `scaffolded: true` and tracks a text-only / 128K variant (vs. the full multimodal 262K model on HuggingFace). This report uses the HF model card as the best available proxy; tracked specs from `meta.json` are noted in scoring.
- **Provider / access:** Alibaba Cloud Model Studio (Qwen3.5-Plus); open-weights on HuggingFace (`Qwen/Qwen3.5-397B-A17B`, Apache-2.0); OpenCode Zen: `opencode/qwen-3.5-397b` (per `meta.json`, tracked as text-only / 128K tier); 1 API provider
- **Release / knowledge:** Released March/April 2026; knowledge cutoff not published
- **IDs:** `Qwen/Qwen3.5-397B-A17B` (HF, per model card); `Qwen3.5-Plus` (Alibaba Cloud Model Studio); `opencode/qwen-3.5-397b` (per `meta.json`, may be a text-only 128K API tier)
- **Architecture:** Gated Delta Networks + sparse Mixture-of-Experts (512 experts, 10 routed + 1 shared); 397B total / 17B activated; 60 layers; hidden dim 4096; vision encoder integrated
- **Context window:** `meta.json` tracks "128,000 total" for the `opencodec/qwen-3.5-397b` deployment. The underlying model (Qwen3.5-397B-A17B) supports 262,144 natively, extensible to 1,010,000 tokens (per HF model card). **Score uses 128K per tracked meta.json spec.**
- **Modalities:** `meta.json` tracks "Text in/out only." The underlying model supports text+image+video+audio input, text output (per HF model card and `qwen-3.5` meta.json). **Score uses text-only per tracked meta.json spec.**
- **Pricing (as of 2026-10-08):** "Standard pricing" (per `meta.json`); actual Qwen3.5-Plus pricing from Alibaba Cloud not verified for this entry
- **Reasoning:** Yes (chain-of-thought, thinking mode by default; per HF model card)
- **License:** Apache 2.0 (HF model card)
- **Status:** Current flagship (not deprecated); Qwen3 series is prior generation

### Raw benchmarks found

> Sources: HuggingFace model card (`https://huggingface.co/Qwen/Qwen3.5-397B-A17B`), Qwen AI blog (`https://qwen.ai/blog?id=qwen3.5`). Benchmarks are for the full Qwen3.5-397B-A17B model (multimodal, 262K context). AA and BenchLM return 404 for "qwen-3.5-397b" (not tracked on those platforms). `meta.json` is scaffolded with text-only / 128K specs — benchmark applicability to the text-only 128K tracked tier is uncertain. Confidence: moderate for language benchmarks; low for applicability to the tracked text-only/128K tier.

Agent / tool use (language benchmarks from HF model card — no vision-specific agentic benchmarks applied since tracked tier is text-only):

- **Terminal-Bench 2.1:** no verified public score found (not published on HF model card)
- **GDPval-AA:** no verified public score found (AA returns 404 for Qwen3.5 family)
- **AA Agentic Index:** no verified public score found (AA returns 404)
- **τ²-bench:** no verified public score found (not published)
- **OSWorld-Verified:** no verified public score found (not published)
- **Claw-Eval:** no verified public score found
- **BFCL-V4:** not published for Qwen3.5 (HF model card doesn't report)
- **TAU2-Bench:** no verified public score found (not published for Qwen3.5)

Reasoning / knowledge:

- **AA-GPQA Diamond:** **79.2%** — (AA model benchmarks, cited by model card comparison table; moderate-strong) — from HF comparison table
- **GPQA:** **88.4%** — (HF model card comparison table; Qwen3.5-397B-A17B column; strong, near 90% frontier)
- **HLE:** **28.7%** — (HF model card comparison table; weak, below ~37.5% frontier)
- **HLE-Verified:** **37.6** — (HF model card footnote; Qwen3.5-397B-A17B column)
- **MMLU-Pro:** **87.8%** — (HF model card comparison table; strong, tied 1st-2nd with GPT5.2)
- **MMLU-Redux:** **94.9%** — (HF model card comparison table; excellent)
- **C-Eval:** **93.0%** — (HF model card comparison table; excellent)
- **IFEval:** **92.6%** — (HF model card comparison table; excellent, 2nd of 6)
- **IFBench:** **76.5%** — (HF model card comparison table; excellent, 1st of 6)
- **MultiChallenge:** **67.6%** — (HF model card comparison table; excellent, 1st of 6)
- **SuperGPQA:** **70.4%** — (HF model card comparison table; near frontier 69%)
- **AA-LCR:** **68.7%** — (HF model card comparison table; moderate, 4th-5th of 6)
- **LongBench v2:** **63.2%** — (HF model card comparison table; moderate)
- **CritPt:** no verified public score found (not published)
- **AA-Omniscience:** no verified public score found (not published)

Coding:

- **SWE-bench Verified:** **76.4%** — (HF model card comparison table; moderate, 4th of 6)
- **SWE-bench Multilingual:** **69.3%** — (HF model card comparison table; moderate)
- **SecCodeBench:** **68.3%** — (HF model card comparison table; strong, 2nd of 6)
- **LiveCodeBench v6:** **83.6%** — (HF model card comparison table; moderate, 4th of 6)
- **DeepSWE:** no verified public score found (not published)
- **AA Coding Index:** no verified public score found (AA returns 404)
- **AA-SciCode:** no verified public score found (AA returns 404)

Multimodal (noted but not scored — tracked tier is text-only per `meta.json`):

- **MMMU:** 85.0% — (HF model card; strong; not applicable to text-only tracked tier)
- **MMMU-Pro:** 79.0% — (HF model card; strong; not applicable to text-only tracked tier)
- **MathVision:** 88.6% — (HF model card; excellent; not applicable to text-only tracked tier)

Long context (noted but not scored — tracked tier is 128K per `meta.json`):

- **AA-LCR:** 68.7% — (HF model card; moderate; applies to 262K model, may differ at 128K)
- **MRCR / RULER:** no verified public score found (not published)

### Normalized scores (1–100)

> Method: `model-comparison.md` v4. Overall = half-up mean of the five quality dims (see `RULES.md`). Cost excluded from Overall.
> **Important:** `meta.json` is `scaffolded: true` with "Text in/out only" and "128,000 total" context. The underlying model (Qwen3.5-397B-A17B) is multimodal with 262K native (1M extensible) context. Benchmark data is from the HF model card for the full multimodal model. Scores below reflect the **tracked text-only / 128K tier** per `meta.json`, not the full model capabilities. See `qwen-3.5/` for the full multimodal variant scoring.
> Confidence: moderate for language benchmarks; low for applicability to the tracked text-only/128K tier.

- **Tool use: 42/100.** No GDPval-AA, Terminal-Bench, AA-Briefcase, or TAU2-Bench scores available (AA returns 404 for Qwen3.5 family, not published on HF model card). Agentic benchmarks not reported for this model family. The HF model card comparison table shows Qwen3.5-397B-A17B at Terminal-Bench 2: 52.5% (below ~59+ frontier), BFCL-V4: 72.9 (moderate), TAU2-Bench: 86.7 (strong, 2nd of 6). Using these from the comparison table as proxies: Terminal-Bench 2.1 at 52.5% is moderate, TAU2-Bench at 86.7 is strong. Without GDPval-AA or AA Agentic Index, tool use estimated at 42 — moderate based on Terminal-Bench but lacking specific agentic Elo data.

- **Reasoning: 53/100.** No AA Intelligence Index available (AA returns 404; `qwen-3.5` report uses this proxy). Using individual benchmarks from HF model card: GPQA at 88.4% is strong (near 90% frontier). HLE at 28.7% is weak (below ~37.5% frontier). CritPt not published. AA-LCR at 68.7% is moderate (below ~95% frontier). MMLU-Pro at 87.8% is excellent. MMLU-Redux at 94.9% is excellent. C-Eval at 93.0% is excellent. IFEval at 92.6% is excellent. SuperGPQA at 70.4% is near frontier. BigBench Extra Hard not published for this model. Despite strong knowledge benchmarks, no AA Intelligence Index to anchor the score. Estimated at 53 based on strong knowledge (MMLU-Pro 87.8%) offset by weak HLE (28.7%) and no II.

- **Context window: 60/100.** `meta.json` tracks "128,000 total" for the `opencodec/qwen-3.5-397b` deployment. The underlying model supports 262K natively (HF model card). Per scoring methodology: 128K → 60. Note: 256K → 72, so 128K is one tier below.

- **Multimodal: 15/100.** Text in/out only per `meta.json` (tracked tier is text-only; the underlying model supports text+image+video+audio). Per methodology: "Text in/out only → 15." Non-applicable benchmarks from HF (MMMU 85.0%, MathVision 88.6%) are noted but not scored since the tracked tier is text-only.

- **Coding: 48/100.** SWE-bench Verified at 76.4% (HF comparison table; moderate, 4th of 6). LiveCodeBench v6 at 83.6% (moderate, 4th of 6). DeepSWE not published. No AA Coding Index or AA-SciCode (AA returns 404). SecCodeBench at 68.3% is strong (2nd of 6). Consistent moderate-strong coding performance across reported benchmarks. Estimated at 48.

- **Cost efficiency: 65/100.** Pricing is "Standard pricing" (per `meta.json`); actual Qwen3.5-Plus pricing from Alibaba Cloud not verified. Using Alibaba Cloud Model Studio's Qwen3.5-Plus pricing (~$0.20/$0.80 from `qwen-3.5` meta.json as proxy): ~$0.20/$0.80 → "$0.15–$1 per 1M tokens = 65." Cost efficiency scored independently; not factored into Overall.

- **Overall Score: 43.6/100.** Mean of four non-cost, non-multimodal-adjusted dimensions: (42 + 53 + 60 + 15 + 48) / 5 = 218 / 5 = 43.6 → **44**.

Correction: (42 + 53 + 60 + 15 + 48) / 5 = 218 / 5 = 43.6 → **44**.

**Corrected Overall Score: 44/100.** Score reflects the tracked text-only / 128K tier per `meta.json` (scaffolded). The underlying Qwen3.5-397B-A17B model has much more capability (multimodal, 262K-1M context) — see `qwen-3.5/` for full variant scoring (Overall 69). This tracked tier is constrained to text-only / 128K, significantly reducing multimodal (15 vs 90) and context (60 vs 95) scores.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-10-08
- Method: public internet research via HuggingFace model card and Qwen AI blog; scores are normalized 1–100 interpretations, not official vendor scores. Zero-influence: did not read peer `model/` findings files during research (did not read Big_Pickle.md, Claude_Opus_5.md, etc. in this folder).
- Notes: `meta.json` flagged `scaffolded: true` — tracked specs (128K, text-only) differ from the underlying model (Qwen3.5-397B-A17B: 262K native / 1M extensible, multimodal). Benchmarks are from the HF model card for the full multimodal model; applicability to the text-only 128K tracked tier is uncertain. AA and BenchLM return 404 for Qwen3.5 family — no AA Intelligence Index available. Pricing: "Standard pricing" (not verified for this entry).
- Future sources: add a new file `qwen-3.5-397b/Laguna_S_2.1.md` (already this file) with updated data once the tracked tier's actual specs and pricing are confirmed.
- Related: See `model/qwen-3.5/Laguna_S_2.1.md` for the full multimodal Qwen3.5-Plus variant (1M context, Overall 69).

---
