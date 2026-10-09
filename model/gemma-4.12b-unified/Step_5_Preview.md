# Gemma 4 12B Unified — findings by Step 5 Preview

- Source: Google DeepMind (`google/gemma-4-12B`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 12B Unified (`google/gemma-4-12B`)
- **Short description:** The first mid-sized Gemma with native audio input — and the family's architectural outlier: a fully encoder-free multimodal model. Instead of frozen vision/audio encoders, raw 48×48 RGB patches go through a single 35M-parameter projection (vs the 550M ViT the 26B/31B use), and raw 16 kHz audio is chunked into 40 ms frames projected linearly into the LLM embedding space — all modalities flow straight into one decoder-only transformer with the same decoder structure as the 31B. The result: standard-benchmark performance "nearing" the 26B A4B MoE at less than half the memory footprint, running on a 16 GB laptop (6.7 GB at 4-bit, 13.4 GB SFP8, 26.7 GB BF16), with a 0.4B MTP drafter for speculative decoding. It even beats the 26B A4B on agentic and long-context metrics (Tau2 69.0 vs 68.2, RULER@128K 91.2 vs 89.8, MRCR 43.4 vs 44.1) — which makes sense, since the 26B cannot take audio at all.
- **Provider / access:** Open weights on Hugging Face / Vertex (Apache 2.0), pre-trained and instruction-tuned variants; Transformers, vLLM/SGLang ecosystem, Unsloth/LoRA fine-tuning; 4-bit and QAT checkpoints.
- **Release:** 2026-06-03. Training data to January 2025.
- **Context window:** 256K tokens (sliding window 1024); 48 layers; 262K vocabulary; 140+ languages.
- **Modalities:** Text, image, audio and video (as frames) in → text out. Audio ≤30 s per clip, video ≤60 s at 1 fps, images 70–1,120 tokens; configurable thinking mode; ASR and speech-to-translated-text across multiple languages.
- **Pricing (as of 2026-10-09):** Apache 2.0 open weights — free to self-host (the only Gemma 4 size not offered on Google's hosted API).
- **Architecture:** Dense 11.95B decoder-only transformer, 48 layers, encoder-free unified multimodal embedder.

### Raw benchmarks found

Instruction-tuned results, thinking mode, from Google's model card / Gemma 4 technical report (arXiv:2607.02770):

Text / reasoning:

- MMLU Pro: **77.2%**; MMMLU: **83.4%**; BBH: **53.0%**
- GPQA Diamond: **78.8%**; AIME 2026 (no tools): **77.5%**; HLE (no tools): **5.2%**
- IFBench: **74.0%**

Coding:

- LiveCodeBench v6: **72.0%**; Codeforces: **1659 Elo**

Agentic:

- Tau2 (average over 3 domains): **69.0%** (31B: 76.9, 26B A4B: 68.2, Gemma 3 27B: 16.2)

Vision:

- MMMU Pro: **69.1%**; MATH-Vision: **79.7%**; InfographicVQA: **88.4%**; OmniDocBench 1.5: 0.164 avg edit distance (lower is better); MedXPertQA MM: 48.7%

Audio:

- FLEURS ASR: **0.069** error rate (lowest of any Gemma 4 model, despite having no audio encoder); CoVoST speech translation: **38.5** (excluding Chinese; E4B 35.54, E2B 33.47)

Long context:

- MRCR v2, 8-needle @128K: **43.4%**; RULER @128K: **91.2%**; LOFT retrieval @128K: **66.4%**

SWE-bench, Terminal-Bench, MCP Atlas, GDPval: **no verified public score found** (Gemma 4's published eval set predates or omits these).

### Normalized scores (1–100)

- **Tool use: 60/100.** Tau2 69.0% (averaged over telecom/retail/airline) beats even the 26B A4B and is the strongest agentic signal — genuine tool use for a 12B — but it is a single eval family, with no Terminal-Bench, MCP Atlas, Toolathlon or GDPval number published, so mid-band.
- **Reasoning: 62/100.** GPQA Diamond 78.8%, MMLU-Pro 77.2%, AIME 77.5% and IFBench 74.0% sit squarely in the mid band (GPQA 60–80%); BBH 53.0% and HLE 5.2% (no tools) show the ceiling — excellent for its class, not frontier.
- **Context window: 72/100.** 256K is the 200K–500K band (65–84), with genuinely split evidence: RULER@128K 91.2% and LOFT retrieval 66.4% are strong, but MRCR 8-needle@128K at 43.4% shows needle-retrieval brittleness — solid, not top-of-band.
- **Multimodal: 90/100.** Text + image + audio + video input → text out is the 90–100 band, and it is the only 12B-class model that takes all four natively without encoders: MMMU-Pro 69.1%, MATH-Vision 79.7%, InfographicVQA 88.4% and the family's best ASR (FLEURS 0.069); docked within the band because CoVoST translation (38.5) and MedXPertQA (48.7%) are mid-tier.
- **Coding: 62/100.** LiveCodeBench v6 72.0% and Codeforces 1659 are respectable mid-band competitive coding for a local model, but no SWE-bench or agentic-coding score exists and the 31B/26B siblings clearly outperform it here (80.0 / 77.1 LCB).
- **Cost efficiency: 100/100.** Apache 2.0 weights, encoder-free design, 6.7 GB at 4-bit on a 16 GB laptop with a built-in MTP drafter — the methodology's $0 = 100 tier, and the most capable thing that runs on consumer memory in the Gemma 4 family.
- **Overall Score: 69/100.** Mean of the five quality dimensions = (60 + 62 + 72 + 90 + 62) / 5 = 69.2 → 69. Best-fit recommendation: the best local multimodal model for laptops — text, image, audio and video in one Apache-2.0 12B that fits 16 GB of unified memory, out-agenting the bigger 26B MoE while costing nothing to run.

---

## Signature

- Provided by: **Step 5 Preview (StepFun)** — 2026-10-09
- Method: public internet research (Google model card + Gemma 4 technical report arXiv:2607.02770 + launch blog and developer guide, HF Transformers docs, gemmai4.com benchmark aggregations); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Gemma_5_31B.md`, using the same headings.
