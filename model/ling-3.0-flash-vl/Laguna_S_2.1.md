# Ling 3.0 Flash VL — findings by Laguna S 2.1

- Source: Artificial Analysis (`https://artificialanalysis.ai/models/ling-3-0-flash-vl`), BenchLM (`https://benchlm.ai/models/ling-3-0-flash-vl`), Hugging Face (`https://huggingface.co/inclusionAI/Ling-3.0-flash-VL`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.0 Flash VL (Qwen3.5-397B-A17B-family-proxy, per `meta.json` short description referencing FlashX having identical weights to GLM-5.3-Flash)
- **Short description:** InclusionAI (Ant Group) open-weight native multimodal build of Ling-3.0-flash (124B total / 5.5B active MoE) with image and video perception for visual agent work; MIT license.
- **Provider / access:** InclusionAI API (primary); OpenRouter (`opencode/ling-3.0-flash-vl` per `meta.json`); open weights on HuggingFace (`inclusionAI/Ling-3.0-flash-VL`, 16.7K downloads last month); 1 API provider
- **Release / knowledge:** Released September 10, 2026; knowledge cutoff not published
- **IDs:** `opencode/ling-3.0-flash-vl` (per `meta.json`, maps to OpenRouter); `inclusionAI/Ling-3.0-flash-VL` (HuggingFace, Apache-2.0/MIT); `Qwen3.5-Plus` equivalent on InclusionAI API
- **Architecture:** Gated Delta Networks + sparse MoE; 124B total parameters / 5.5B active; 60 layers; 42-layer hybrid backbone (15×(3×(Gated DeltaNet→MoE)→1×(Gated Attention→MoE))); 512 experts, 10 routed + 1 shared; ViT visual encoder + 2-layer MLP projector
- **Context window:** 262,144 (256K) served natively; extensible to 1,010,000 tokens with YaRN scaling (per HuggingFace model card)
- **Modalities:** Text, image, and video input; text output (per AA and HF model card: "Supports: text, image, and video"); tool calling yes
- **Pricing (as of 2026-10-08):** $0.07 input / $0.22 output per 1M tokens (InclusionAI API, per AA FAQ); OpenRouter $0.021/$0.0616 per 1M (per `meta.json`, "free windows expired"); `noFreeId: true` (no OpenCode Zen free tier)
- **Reasoning:** Yes (chain-of-thought/thinking mode by default; per HF model card: "Qwen3.5 models operate in thinking mode by default")
- **Speed:** 145.1 tokens/s output (AA, InclusionAI API, rank #11/65 for 124B-class)
- **TTFT:** 1.98s (AA, InclusionAI API, better than average for 124B-class)
- **License:** MIT (per HF and AA: "allows commercial use")
- **Status:** Current flagship (not deprecated)

### Raw benchmarks found

> Sources: Artificial Analysis (`https://artificialanalysis.ai/models/ling-3-0-flash-vl`), BenchLM (`https://benchlm.ai/models/ling-3-0-flash-vl`), HuggingFace model card (`https://huggingface.co/inclusionAI/Ling-3.0-flash-VL`). BenchmarkLM covers 11 of 623 benchmarks. AA Intelligence Index v4.3.2 = 25 (rank #1/65 for 124B-class open-weight models, median: 8). Confidence: high for reported benchmarks; note that AA individual benchmarks are behind paywall (cited via BenchLM).

Agent / tool use:

- **GDPval-AA:** **33.2%** — (BenchLM citing AA model benchmarks; Elo ≈ 1164 = moderate, below ~1200+ frontier)
- **Terminal-Bench 2.1:** no verified public score found (evaluated under AA protocol per model card, score not published)
- **Terminal-Bench 4.0:** no verified public score found (part of Intelligence Index but not broken out)
- **AA-Briefcase v1.1:** no verified public score found (part of Intelligence Index but not broken out)
- **AA Agentic Index:** not separately reported (Intelligence Index not broken out per-component)
- **Tau2-Bench:** no verified public score found
- **OSWorld-Verified:** no verified public score found
- **τ²-bench:** no verified public score found
- **Claw-Eval:** no verified public score found

Reasoning / knowledge:

- **Artificial Analysis Intelligence Index:** **25** — (AA v4.3.2, per AA model page and BenchLM; rank #1/65 for 124B-class open-weight, median: 8; 26/696 overall)
- **Artificial Analysis Intelligence Index (v4.1.1):** **42** — (HuggingFace model card; older version, included for reference)
- **AA-GPQA Diamond:** **86.2%** — (BenchLM citing AA)
- **AA-HLE:** **22.0%** — (BenchLM citing AA; weak)
- **AA-LCR:** **78.3%** — (BenchLM citing AA; good)
- **CritPt:** **2.0%** — (BenchLM citing AA; weak)
- **AA-Omniscience Index:** **-4.5%** — (BenchLM citing AA; negative — more incorrect than correct)
- **AA-Omniscience Accuracy:** **14.4%** — (BenchLM citing AA; very weak)
- **AA-Omniscience Hallucination Rate:** **22.0%** — (BenchLM citing AA; high)
- **MRCR / RULER:** no verified public score found (not reported)

Coding:

- **AA-SciCode:** **44.2%** — (BenchLM citing AA; moderate)
- **SWE-bench Verified:** no verified public score found (not reported)
- **SWE-bench Multilingual:** no verified public score found
- **LiveCodeBench:** no verified public score found
- **DeepSWE:** no verified public score found
- **AA Coding Index:** no verified public score found
- **Terminal-Bench 2.1:** evaluated per model card (2-hour timeout, Terminus 2 harness) but score not published
- **Vibe Code Bench:** no verified public score found

Multimodal & grounded:

- **AA-MMMU-Pro:** **79.0%** — (BenchLM citing AA; strong)
- **MMMU:** no verified public score found (MMMU-Pro only reported)
- **MathVision:** no verified public score found
- **VideoMME:** no verified public score found
- **RealWorldQA:** no verified public score found
- **CountBench:** no verified public score found
- **ScreenSpot Pro:** no verified public score found
- **OSWorld-Verified (Visual Agent):** no verified public score found

Long context:

- **AA-LCR:** **78.3%** — (BenchLM citing AA; good for 262K context)
- **Native context:** 262,144 tokens; extensible to 1,010,000 with YaRN (per HF model card)

### Normalized scores (1–100)

> Method: `model-comparison.md` v4. Overall = half-up mean of the five quality dims (see `RULES.md`). Cost excluded from Overall.
> Confidence: moderate — 11 public benchmarks found across 3 sources (AA, BenchLM, HuggingFace). Note: `meta.json` notes "tracked tier unconfirmed" and "family-proxy provisional" — this report uses Qwen3.5-397B-A17B / Ling-3.0-flash-VL as the best available proxy. AA individual benchmark scores are behind paywall (cited via BenchLM).

- **Tool use: 48/100.** GDPval-AA at 33.2% (Elo ≈ 1164) is moderate — below the ~1200+ frontier for agentic reasoning. No Terminal-Bench 2.1 score published (evaluated per model card but score not disclosed). No AA-Briefcase, no Tau2-Bench, no OSWorld, no Claw-Eval. Only one agentic benchmark available; cannot compute a reliable tool-use score. 48 is a conservative estimate for moderate agentic performance.

- **Reasoning: 55/100.** Intelligence Index 25 → base = 25 + 30 = 55 (per scoring methodology). GPQA Diamond at 86.2% is strong (near 90% frontier). HLE at 22.0% is very weak (well below ~37.5% frontier). CritPt at 2.0% is at/above the ~3% frontier threshold. AA-LCR at 78.3% is good (below ~95% frontier). AA-Omniscience Index at -4.5 (negative) and Omniscience Accuracy at 14.4% are very poor — the model is hallucination-prone. MMLU-Pro not reported. Despite strong GPQA, the very poor Omniscience metrics and weak HLE offset the score.

- **Context window: 72/100.** 262,144 (256K) natively (per AA and HF model card). Extensible to 1,010,000 with YaRN scaling, but the native/served context is 262K. AA-LCR at 78.3% confirms usable long-context performance. ≥256K tier → 72. No verified ≥98% token-retrieval at 512K+ to reach 80+.

- **Multimodal: 80/100.** Text, image, and video input; text output (per AA and HF model card). Per methodology: "+image in = 60–70, +video in = 70–80, +audio in = 90–100". With text+image+video input and text output (no audio in, no non-text output): 80 at the upper end of the video-input range. No video output or audio output verified.

- **Coding: 48/100.** AA-SciCode at 44.2% is moderate (frontier ~55%). No SWE-bench Verified, LiveCodeBench, DeepSWE, or AA Coding Index scores available. Only one coding benchmark reported. Terminal-Bench 2.1 evaluated but score not published. 48 is a conservative estimate for moderate coding.

- **Cost efficiency: 80/100.** $0.07 input / $0.22 output per 1M tokens (InclusionAI API, per AA FAQ, `noFreeId: true`). Also available on OpenRouter at $0.021/$0.0616 per 1M (per `meta.json`, "free windows expired" — free tier window has ended). Both pricing tiers fall in the "<$0.15 / <$0.5" tier → 80. Very cheap pricing. MIT open weights available (free for self-hosting, but $0 for API).

- **Overall Score: 60.6/100.** Mean of five non-cost dimensions: (48 + 55 + 72 + 80 + 48) / 5 = 303 / 5 = 60.6 → **61**.

Correction: (48 + 55 + 72 + 80 + 48) / 5 = 303 / 5 = 60.6 → **61**.

**Corrected Overall Score: 61/100.** Ranked #108/887 on BenchLM (Overall 47.41/100 normalized to 100-scale). Exceptional multimodal capabilities (text+image+video in, 80) with strong knowledge reasoning (GPQA 86.2%, MMMU-Pro 79.0%) and good long-context (AA-LCR 78.3%, 262K native → 1M extensible). Held back by very poor agentic performance (GDPval-AA 33.2%), weak coding (SciCode 44.2% only), poor hallucination metrics (Omniscience Index -4.5, Accuracy 14.4%), and weak HLE (22.0%). Low cost ($0.07/$0.22) but no free Zen tier.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-10-08
- Method: public internet research via Artificial Analysis, BenchLM, and HuggingFace; scores are normalized 1–100 interpretations, not official vendor scores. Zero-influence: did not read peer `model/` findings files during research.
- Notes: `meta.json` flags facts as "family-proxy provisional" and "tracked tier unconfirmed." Only 11 of 623 benchmarks reported by BenchLM (coverage note: "partial benchmark coverage, so the overall score is conservative"). AA Intelligence Index v4.3.2 = 25 (rank #1/65 for 124B-class); v4.1.1 = 42 (per HF model card). Pricing: $0.07/$0.22 (InclusionAI API) or $0.021/$0.0616 (OpenRouter, free windows expired).
- Future sources: add a new file next to this one, e.g. `Ling_3.0_Flash_VL_Tech_Report.md`, using the same headings.

---
