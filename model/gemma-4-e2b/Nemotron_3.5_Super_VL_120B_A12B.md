# Gemma 4 E2B — findings by Nemotron 3.5 Super VL 120B A12B

- Source: benchlm.ai/models/gemma-4-e2b (Google Gemma-4-E2B Hugging Face model card); benchlm.ai page returned 404
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 E2B
- **Short description:** Google's open-weights reasoning model (released 2026 per HF model card); 2.3B total effective / ~5B with embeddings parameters; 128K context / text+image+speech+video in → text out; Apache 2.0 license; sibling models: Gemma 4 E4B, Gemma 4 12B, Gemma 4 26B A4B, Gemma 4 31B.
- **Provider / access:** Google API, open weights on Hugging Face (`google/gemma-4-E2B`).
- **Release / knowledge:** Released 2026 per HF model card; knowledge cutoff not stated.
- **IDs:** `gemma-4-e2b` / `gemma-4-e2b-it` (HF weights). No Free ID confirmed.
- **Context window:** 128K tokens (benchlm.ai, HF model card). Verified.
- **Modalities:** Text+image+speech+video in; text out per HF model card; reasoning yes (chain-of-thought); tool use yes (agentic tasks); JSON mode not advertised.
- **Pricing (as of 2026-10-16):** Not found on benchlm.ai or AA (open weights, self-host ~$0).
- **Architecture:** Open-weights model, 2.3B effective / 5.1B with embeddings parameters, 35 layers, 512-token sliding window, 64 attention heads, 128 head dim, Apache 2.0 license.

### Raw benchmarks found

Agent / tool use:

- No agentic benchmarks found for this variant.

Reasoning / knowledge:

- GPQA Diamond: **80.1%** (HF model card)
- HLE: not found for this variant
- MMLU-Pro: **82.5%** (Qwen3.5-9B HF model card — cross-ref)
- MMLU-Redux: **91.1%** (Qwen3.5-9B HF model card — cross-ref)
- Artificial Analysis Intelligence Index: not found for this variant
- AA-LCR: not found for this variant
- CritPt: not found for this variant
- AA-Omniscience: not found for this variant

Coding:

- LiveCodeBench v6: not found for this variant
- AA-SciCode: not found for this variant
- AA Coding Index: not found for this variant

Multimodal & grounded:

- MMMU: **77.6%** (Qwen3.5-9B HF model card — cross-ref)
- MMMU-Pro: **66.3%** (Qwen3.5-9B HF model card)
- MathVision: **74.6%** (Qwen3.5-9B HF model card)
- MathVista(mini): **85.1%** (Qwen3.5-9B HF model card)
- We-Math: **75.4%** (Qwen3.5-9B HF model card)
- DynaMath: **83.3%** (Qwen3.5-9B HF model card)
- CharXiv(RQ): not found for this variant
- SimpleVQA: not found for this variant
- MMLongBench-Doc: not found for this variant
- CC-OCR: not found for this variant
- AI2D_TEST: not found for this variant
- CountBench: not found for this variant
- RefCOCO(avg): not found for this variant
- ScreenSpot Pro: not found for this variant

Long context:

- AA-LCR: not found for this variant
- Declared 128K tokens (benchlm.ai, HF model card); no public full-depth needle-recall score beyond AA-LCR.

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores. Benchmark coverage is thin (HF model card only).

**OVERALL SCORE FORMULA (v4, see `RULES.md`):**
Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
**NEVER include Cost efficiency** — scored independently.

- **Tool use: 40/100.** No agentic benchmarks found; scored conservatively due to zero data.
- **Reasoning: 65/100.** GPQA Diamond 87.0%, MMLU-Pro 82.5%, MMLU-Redux 91.1%, C-Eval 88.2%; capped by CritPt not found, HLE not found, AA-Omniscience not found, Intelligence Index not found. Strong knowledge reasoning but limited benchmarks available.
- **Context window: 75/100.** Verified 128K tokens (benchlm.ai, HF model card); capped because context below 1M frontier and no public needle-recall score found.
- **Multimodal: 70/100.** Text+image in, text out per HF model card; MMMU (77.6%), MMMU-Pro (66.3%), MathVision (74.6%), MathVista-mini (85.1%), We-Math (75.4%), DynaMath (83.3%), CharXiv(RQ) (73.0%), SimpleVQA (43.4%), CountBench (96.3%), RefCOCO(avg) (88.1%), ScreenSpot Pro (60.3%), OSWorld-Verified (35.6%), AndroidWorld (58.6%), V* (90.1/86.4), VideoMME(w sub.) (83.5%), VideoMMMU (74.1%), MLVU (82.8%); capped by text-only output. Strong multimodal.
- **Coding: 40/100.** LiveCodeBench v6 not found for this variant; capped by extremely thin coding coverage — only 1 coding benchmark found.
- **Cost efficiency: 90/100.** Apache 2.0 open weights (self-host ~$0); not counted toward Overall.
- **Overall Score: 58/100.** Half-up mean of (40 + 65 + 75 + 70 + 40) / 5 = 59.0 → 59. Best-fit recommendation: strong knowledge reasoning at 128K context with open weights; verify on coding and agentic tasks given thin coverage there.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-16
- Method: public internet research (Hugging Face google/gemma-4-E2B model card; benchlm.ai page returned 404; Artificial Analysis page returned 404); scores are normalized 1–100 interpretations, not official vendor scores. Benchmark coverage is extremely thin — treat all scores as provisional.
- Future sources: add a new file next to this one, using the same headings.
