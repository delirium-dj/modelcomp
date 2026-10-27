# Gemma 4 12B Unified — findings by Nemotron 3 Ultra 550B A55B

> Research agent: Nemotron 3 Ultra 550B A55B (NVIDIA Nemotron 3 Ultra, 550B total / 55B active MoE)
> Date: 2026-10-27 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 12B Unified (gemma-4-12b-it)
- **Short description:** Google DeepMind's encoder-free multimodal model (11.95B params), released April 2026. Open-weight under Apache 2.0. Unique "Unified" architecture: no separate vision/audio encoders — raw image patches and audio waveforms projected directly into LLM embedding space via lightweight linear layers. Native text, image, audio, video input; text output. 256K context. Designed for on-device/local deployment.
- **Provider / access:** Hugging Face (`google/gemma-4-12B-it`), Ollama, vLLM, LM Studio, Oxyy, UplinkSwitch, Sail, Google AI Studio / Vertex AI, LiteLLM. Self-hosted (Apache 2.0, commercial use permitted). No first-party Google Cloud API pricing published; third-party APIs: Oxyy $0.04/$0.12 (60% promo), UplinkSwitch $0.40/$1.20, Sail $0.30/$2.00, Artificial Analysis median $0.10/$0.30.
- **Release / knowledge:** 2026-04-02 release (Google blog); knowledge cutoff January 2025.
- **IDs:** `google/gemma-4-12B-it` (HF/Oxyy/UplinkSwitch), `gemma-4-12b-it` (Sail/LiteLLM). Self-hosting free.
- **Context window:** 256K tokens (262,144 per HF/Oxyy). Verified via Google model card, HF, Oxyy, Artificial Analysis (262K).
- **Modalities:** Text, image, audio, video input; text output. Reasoning: yes (thinking mode). Tool calls: yes (native function calling). JSON mode: yes. Structured output: yes. Multi-token prediction (speculative decoding draft model).
- **Pricing (as of 2026-10-27):** Self-hosted: $0/M (Apache 2.0). Third-party APIs: Oxyy $0.04/M in, $0.12/M out (60% launch promo; std $0.10/$0.30); UplinkSwitch $0.40/$1.20; Sail $0.30/$2.00 (16K context only); AA median $0.10/$0.30. Blended ~$0.06–0.15/M self-host; ~$0.12–0.40/M API. No free tier on APIs; prepaid credit from $10.
- **Architecture:** 11.95B params (dense), 48 layers, hidden dim ~3072 (est), sliding window 1024, vocab 262K. Encoder-free multimodal: `Gemma4UnifiedMultimodalEmbedder` (RMSNorm → Linear) projects raw pixels/audio directly. Multi-token prediction draft model for speculative decoding. Apache 2.0 license.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the closest proxy as provisional — never invent values.

Agent / tool use:

- Tau2 (avg over 3: airline/retail/telecom): **69.0%** — Google model card / technical report (thinking mode)
  - Airline: **75.0%** / Retail: **77.6%** / Telecom: **54.4%** — Technical report Table 5
- MRCR v2 8-needle 128k: **43.4%** (avg) — Google model card / technical report
- IFBench: **74.0%** — Google model card / technical report
- IFEval: **97.2%** — Google model card / technical report
- BrowseComp / WideSearch / Seal-0: **no direct score** for 12B
- Terminal-Bench / SWE-bench: **no direct score** for 12B
- LiveCodeBench: **no direct score** for 12B

Reasoning / knowledge:

- MMLU Pro: **77.2%** — Google model card / technical report / blog (thinking)
- AIME 2026 (no tools): **77.5%** — Google model card / technical report / blog
- GPQA Diamond: **78.8%** — Google model card / technical report / blog
- HLE (no tools): **5.2%** — Google model card / technical report
- HLE (with search): **not reported** for 12B (26B: 17.2%, 31B: 26.5%)
- BigBench Extra Hard: **53.0%** — Google model card
- MMMLU: **83.4%** — Google model card
- SuperGPQA: **no direct score** for 12B
- C-Eval: **no direct score** for 12B
- SimpleBench: **no direct score**
- AA Intelligence Index: **14** (Artificial Analysis) — AA model page

Coding:

- LiveCodeBench v6: **72.0%** — Google model card / technical report / blog (thinking)
- Codeforces Elo: **1659** — Google model card / technical report
- SciCode: **38.0%** — Technical report Table 5
- HumanEval: **74.2%** / HumanEval+: **68.9%** / MBPP: **71.8%** — AimadeTools blog (vs 27B)
- SWE-bench Verified / Pro: **no direct score** for 12B
- Terminal-Bench: **no direct score** for 12B

Long context:

- MRCR v2 8-needle 128k: **43.4%** (avg) — Google model card / technical report
- RULER 32k: **96.4%** / 128k: **91.2%** — Gemma 4 benchmarks site (technical report)
- LOFT retrieval 128k: **66.4%** — Technical report
- GraphWalks F1 <128k: **71.0%** — Technical report
- MTOB (En→Kalamang) 128k: **not reported** for 12B (31B: 52.9%)
- Native 256K context verified (262K per HF)

Multimodal:

- MMMU Pro: **69.1%** — Google model card / technical report / blog
- OmniDocBench 1.5 (edit distance, lower better): **0.164** — Google model card
- MATH-Vision: **79.7%** — Google model card / technical report
- MedXPertQA MM: **48.7%** — Google model card
- CoVoST (speech translation, excl Chinese): **38.5** — Google model card
- FLEURS (ASR, lower better): **0.069** — Google model card
- Vision: native image/video understanding (object detection, OCR, chart comprehension, handwriting, pointing)
- Audio: native ASR and speech-to-translated-text (multiple languages)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in `model-comparison.md`. Add a one-sentence justification citing the key evidence, and state what caps the score.
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 65/100.** Tau2 avg 69% (airline 75%, retail 78%, telecom 54%), IFBench 74%, IFEval 97%. Strong instruction following and agentic tool use (Tau2 beats 27B on airline/retail). Capped by no Terminal-Bench/SWE-bench/MCP-Atlas scores, telecom 54% weak.
- **Reasoning: 70/100.** MMLU Pro 77%, AIME 2026 78%, GPQA Diamond 79%, HLE 5.2% (very low), BigBench 53%, MMMLU 83%, AA Index 14. Excellent math/science (AIME/GPQA near 31B/26B) but HLE 5.2% and AA Index 14 very low. Capped by HLE 5% and AA Index 14.
- **Context window: 75/100.** 256K native (256K–512K tier = 70–80). MRCR 43%, RULER 91% (128k), LOFT 66%, GraphWalks 71%. Good retrieval but MRCR 43% below 26B (44%) and 31B (66%). Capped by MRCR 43% vs larger Gemma models.
- **Multimodal: 85/100.** Native text/image/audio/video input (encoder-free). MMMU Pro 69%, MATH-Vision 80%, OmniDoc 0.164 edit dist, CoVoST 38.5, FLEURS 0.069. Unique encoder-free architecture handles all modalities natively. Audio ASR/translation included. Capped by text-only output, no audio/video generation.
- **Coding: 72/100.** LiveCodeBench 72%, Codeforces 1659, SciCode 38%, HumanEval 74%, MBPP 72%. Solid coding for 12B but no SWE-bench/Terminal-Bench. Capped by missing agentic coding benchmarks and SciCode 38%.
- **Cost efficiency: 98/100.** Apache 2.0 open weights — self-host free. API median $0.10/$0.30 (Oxyy promo $0.04/$0.12). Among cheapest for multimodal capability tier. 1.6M+ HF downloads (30 days).
- **Overall Score: 73/100.** Mean of (65+70+75+85+72)/5 = 73.4 → 73. Model-queue shows 75.5 — close. Best fit: unique encoder-free multimodal model for on-device/local deployment; exceptional AIME/GPQA for size; HLE/AA Index surprisingly low; Apache 2.0 enables commercial use.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-27
- Method: Public internet research across 5+ independent sources (Google model card, DeepMind blog, Hugging Face model card, Gemma 4 technical report (arXiv 2607.02770), AimadeTools comparison, Oxyy/UplinkSwitch/Sail pricing, Artificial Analysis, Gemma 4 benchmarks site); scores normalized 1–100 per model-comparison.md methodology. **Critical note:** HLE 5.2% and AA Index 14 are severe outliers vs other benchmarks (AIME 78%, GPQA 79%, MMLU 77%) — may reflect thinking mode eval differences or benchmark contamination. All scores from Google's thinking-mode evals unless noted.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.