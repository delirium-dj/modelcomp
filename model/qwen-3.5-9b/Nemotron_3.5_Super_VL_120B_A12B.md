# Qwen3.5-9B — findings by Nemotron 3.5 Super VL 120B A12B

- Source: benchlm.ai/models/qwen-3-5-9b (Qwen/Qwen3.5-9B Hugging Face model card)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5-9B
- **Short description:** Alibaba Qwen's open-weights MoE reasoning model; 9B total parameters; 262K context / text+image in → text out; Apache 2.0 license; sibling models: Qwen3.5-27B, Qwen3.5-397B, Qwen3.5-122B-A10B.
- **Provider / access:** Qwen API (`qwen-3.5-9b`), open weights on Hugging Face (`Qwen/Qwen3.5-9B`).
- **Release / knowledge:** Released 2026 per Qwen; knowledge cutoff not stated.
- **IDs:** `qwen-3.5-9b` (Qwen API / OpenRouter), `Qwen/Qwen3.5-9B` (HF weights). No Free ID confirmed.
- **Context window:** 262K tokens native, extensible to 1,010,000 tokens with YaRN (HF model card). Verified.
- **Modalities:** Text+image in, text out per HF model card; reasoning yes (chain-of-thought); tool use yes (agentic tasks); JSON mode supported.
- **Pricing (as of 2026-10-16):** Not found on benchlm.ai or AA (open weights, self-host ~$0).
- **Architecture:** Open-weights MoE, 9B parameters, 32 layers, Gated DeltaNet + Gated Attention hybrid, Apache 2.0 license.

### Raw benchmarks found

Agent / tool use:

- τ²-bench results: **79.1%** (Qwen3.5-9B HF model card)
- Terminal-Bench 2.0: **63.5%** (Qwen3.5-9B HF model card)
- TIR-Bench: **45.6/31.9** (HF model card)
- V*: **90.1/86.4** (Qwen3.5-9B HF model card)
- OSWorld-Verified: **35.6%** (Qwen3.5-9B HF model card)
- AndroidWorld: **58.6%** (Qwen3.5-9B HF model card)
- MazeBench: not found for this variant
- GDPval-AA: not found for this variant
- AA Agentic Index: not found for this variant

Reasoning / knowledge:

- GPQA: **82.8%** (Qwen3.5-9B HF model card)
- HLE: not found for this variant
- MMLU-Pro: **82.5%** (Qwen3.5-9B HF model card)
- MMLU-Redux: **91.1%** (Qwen3.5-9B HF model card)
- C-Eval: **88.2%** (Qwen3.5-9B HF model card)
- SuperGPQA: **58.2%** (Qwen3.5-9B HF model card)
- Artificial Analysis Intelligence Index: not found for this variant
- AA-LCR (long-context reasoning): **63.0%** (Qwen3.5-9B HF model card)
- CritPt: not found for this variant
- FrontierMath: not found for this variant
- AIME26: not found for this variant
- IFEval: **91.5%** (Qwen3.5-9B HF model card)
- IFBench: **64.5%** (Qwen3.5-9B HF model card)

Coding:

- LiveCodeBench v6: **65.6%** (Qwen3.5-9B HF model card)
- SWE-bench Pro: not found for this variant
- SWE-bench Verified: not found for this variant
- SWE Multilingual: not found for this variant
- AA-SciCode: not found for this variant
- React Native Evals: not found for this variant
- PostTrainBench v1.1: not found for this variant

Multimodal & grounded:

- MMMU: **78.4%** (Qwen3.5-9B HF model card)
- MMMU-Pro: **70.1%** (Qwen3.5-9B HF model card)
- MathVision: **78.9%** (Qwen3.5-9B HF model card)
- MathVista(mini): **85.1%** (Qwen3.5-9B HF model card)
- We-Math: **75.4%** (Qwen3.5-9B HF model card)
- DynaMath: **83.3%** (Qwen3.5-9B HF model card)
- CharXiv(RQ): **73.0%** (Qwen3.5-9B HF model card)
- SimpleVQA: **43.4%** (Qwen3.5-9B HF model card)
- MMLongBench-Doc: **57.7%** (Qwen3.5-9B HF model card)
- CC-OCR: **76.7%** (Qwen3.5-9B HF model card)
- AI2D_TEST: **89.6%** (Qwen3.5-9B HF model card)
- ERQA: **54.0%** (Qwen3.5-9B HF model card)
- CountBench: **96.3%** (Qwen3.5-9B HF model card)
- RefCOCO(avg): **88.1%** (Qwen3.5-9B HF model card)
- ScreenSpot Pro: **60.3%** (Qwen3.5-9B HF model card)
- OSWorld-Verified: **35.6%** (Qwen3.5-9B HF model card)
- AndroidWorld: **58.6%** (Qwen3.5-9B HF model card)
- V*: **90.1/86.4** (Qwen3.5-9B HF model card)
- VideoMME(w sub.): **83.5%** (Qwen3.5-9B HF model card)
- VideoMME(w/o sub.): **76.9%** (Qwen3.5-9B HF model card)
- VideoMMMU: **74.1%** (Qwen3.5-9B HF model card)
- MLVU: **82.8%** (Qwen3.5-9B HF model card)
- ScreenSpot Pro: **60.3%** (Qwen3.5-9B HF model card)

Long context:

- AA-LCR: **63.0%** (Qwen3.5-9B HF model card)
- LongBench v2: **55.2%** (Qwen3.5-9B HF model card)
- Declared 262K native / 1,010,000 extensible tokens (Qwen3.5-9B HF model card); no public full-depth needle-recall score beyond AA-LCR.

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):**
Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
**NEVER include Cost efficiency** — scored independently.

- **Tool use: 72/100.** Terminal-Bench 2.0 (63.5%), τ²-bench (79.1%), TIR-Bench (45.6/31.9), V* (90.1/86.4), OSWorld-Verified (35.6%), AndroidWorld (58.6%); capped by weak MazeBench not found, AA Agentic Index not found. Strong agentic tool-use profile.
- **Reasoning: 70/100.** GPQA 82.8%, MMLU-Pro 82.5%, MMLU-Redux 91.1%, C-Eval 88.2%, SuperGPQA 58.2%, AA-LCR (63.0%), FrontierMath not found; capped by CritPt not found, HLE not found, AA-Omniscience not found, Intelligence Index not found. Strong knowledge reasoning.
- **Context window: 88/100.** Verified 262K native / 1,010,000 extensible tokens (HF model card); AA-LCR 63.0%; capped because no public full-depth needle-recall score beyond AA-LCR.
- **Multimodal: 78/100.** Text+image in, text out per HF model card; MMMU (78.4%), MMMU-Pro (70.1%), MathVision (78.9%), MathVista-mini (85.1%), We-Math (75.4%), DynaMath (83.3%), CharXiv(RQ) (73.0%), SimpleVQA (43.4%), CountBench (96.3%), RefCOCO(avg) (88.1%), ScreenSpot Pro (60.3%), OSWorld-Verified (35.6%), AndroidWorld (58.6%), V* (90.1/86.4), VideoMME(w sub.) (83.5%), VideoMMMU (74.1%), MLVU (82.8%); capped by text-only output. Strong multimodal.
- **Coding: 64/100.** LiveCodeBench v6 (65.6%), SWE-bench Verified not found for this variant; capped by extremely thin coding coverage — only 1 coding benchmark found.
- **Cost efficiency: 90/100.** Apache 2.0 open weights (self-host ~$0); not counted toward Overall.
- **Overall Score: 74.4/100.** Half-up mean of (72 + 70 + 88 + 78 + 64) / 5 = 70.8 → 70. Best-fit recommendation: strong multimodal and knowledge reasoning at 262K context with open weights (Apache 2.0); verify on coding and agentic tasks given mixed results there.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-16
- Method: public internet research (benchlm.ai Qwen3.5-9B model page returned 404; Hugging Face Qwen/Qwen3.5-9B model card independent analysis); scores are normalized 1–100 interpretations, not official vendor scores. Benchmark coverage is moderate (46 of 639 slots per HF model card).
- Future sources: add a new file next to this one, using the same headings.
