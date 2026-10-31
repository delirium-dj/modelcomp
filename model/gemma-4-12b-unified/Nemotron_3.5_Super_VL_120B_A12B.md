# Gemma 4 12B — findings by Nemotron 3.5 Super VL 120B A12B

- Source: Google DeepMind (gemma-4-12b-unified), Hugging Face `google/gemma-4-12B`, Gemma 4 Technical Report (arxiv:2607.02770), benchgap independent benchmarks
- Date: 2026-10-31 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 12B
- **Short description:** Google DeepMind's open-weight natively multimodal Gemma 4 model; dense 12B architecture with unified encoder-free design ingesting raw image and audio patches, thinking mode, 256K-token context, Apache 2.0 open weights, released June 2026 (technical report arXiv:2607.02770, 24 Jul 2026).
- **Provider / access:** Hugging Face (`google/gemma-4-12B`, `google/gemma-4-12b-it`), Google AI Studio, Gemini API, Kaggle, local run via Ollama/LM Studio/llama.cpp/MLX/LiteRT-LM; Apache 2.0 permits self-hosting and commercial use.
- **Release / knowledge:** Gemma 4 released June 2026; Gemma 4 Technical Report arXiv:2607.02770v2 dated 24 Jul 2026; model card last updated 2026-07-30. Knowledge cutoff not stated.
- **IDs:** `gemma-4-12b` (Google), `google/gemma-4-12B` / `google/gemma-4-12b-it` (HF), `opencode/gemma-4-12b-unified` (OpenCode Zen). No Free ID confirmed in fetched sources.
- **Context window:** Up to 256K tokens (official Gemma 4 model card); meta lists 262,144 total / 32,768 max output; benchgap/Artificial Analysis cite ~262k. p-RoPE + 5:1 sliding-window-to-global-attention ratio + KV-cache sharing for long-context efficiency.
- **Modalities:** Text + image input (+ audio supported on the 12B variant per official card); text output. Thinking mode (reasoning trace before response), function calling via `<|tool>` declaration / `<|tool_call>` call tags, JSON/structured output supported via function calling.
- **Pricing (as of 2026-10-31):** Open weights under Apache 2.0 (free to self-host); hosted API pricing ~$0.10 in / $0.25–$0.30 out per 1M tokens via inference providers (benchgap/Artificial Analysis); meta note: "Free open weights; hosted ~$0.10/$0.25 per 1M".
- **Architecture:** 12B dense parameters (11,959,730,224 BF16 per HF), unified encoder-free multimodal architecture, thinking mode, multi-token prediction (MTP) drafter head for speculative decoding; Apache 2.0 license.


### Raw benchmarks found

Official — Gemma 4 Technical Report (arxiv:2607.02770v2, Google DeepMind), Table 12 vision benchmarks at N_max = 280 (thinking), Gemma 4 12B column:

- MMMU-Pro: **67.7**
- MATH-Vision: **76.7**
- MedXPertQA MM: **47.4**
- InfographicVQA: **58.7**
- OmniDocBench: **0.408**

Independent — benchgap.net (Gemma 4 12B, data 2026-10-29; 20 measured / 93 estimated benchmarks):

- GPQA Diamond: **78.8%** measured
- MMLU-Pro: **77.2%** measured
- LiveCodeBench v6: **72.0%** measured
- AIME26: **77.5%** measured
- MathVision: **79.7%** measured
- MedXpertQA (MM): **48.7%** measured
- τ²-bench: **36.3%** measured
- MRCRv2: **43.4%** measured
- MMLU: **87.4%** estimated ±2.2 pp
- MMMU: **79.3%** estimated ±0.8 pp
- MMMU-Pro: **69.1%** measured
- MATH-500: **95.2%** estimated ±3.1 pp
- HLE: **16.0%** estimated ±6.6 pp (low confidence); AA-HLE **15.7%** measured
- SWE-bench Verified: **57.7%** estimated ±6.4 pp
- SWE-bench Pro: **22.3%** estimated ±6.0 pp
- LiveCodeBench (AA): **84.0%** estimated ±4.7 pp
- SciCode: **36.8%** estimated ±4.6 pp
- IFEval: **93.0%** estimated ±2.8 pp
- MMLongBench-Doc: **60.6%** estimated ±2.6 pp
- OSWorld-Verified: **62.6%** estimated ±8.1 pp
- OCRBench V2: **69.9%** estimated ±4.4 pp
- AI2D_TEST: **90.1%** estimated ±1.0 pp
- CharXiv: **76.3%** estimated ±4.0 pp
- V*: **45.6%** estimated ±7.5 pp
- BabyVision: **30.2%** estimated ±3.3 pp
- Video-MME (w/o subtitle): **79.5%** est; (with subtitle): **83.2%** est
- Toolathlon: **27.0%** estimated ±6.3 pp
- BFCL v4: **53.9%** estimated ±2.7 pp
- Artificial Analysis Intelligence Index: **12.7** estimated ±3.8 pp (#20/141 open-weights, median 8); speed 114.2 tok/s; TTFT 2.24s

Conflicts noted: official context 256K vs benchgap/AA ~262k (minor); official vision table (thinking mode) vs benchgap estimates differ modestly (e.g. MMMU-Pro 67.7 official vs 69.1 benchgap); MATH-Vision 76.7 official vs 79.7 measured (close). No fundamental conflict.

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):** Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`. **NEVER include Cost efficiency** — scored independently.

- **Tool use: 70/100.** Function calling supported per official card (`<|tool>`/`<|tool_call>` tags, thinking toggle); but weak independent agentic replication — Toolathlon 27.0% est, BFCL v4 53.9% est, τ²-bench 36.3% measured, OSWorld-Verified 62.6% est, BrowseComp 0.0% est, AA Agentic Index 0.0% est, AA AutomationBench 0.0% est. Capped by thin real-world tool-use verification.
- **Reasoning: 74/100.** Strong knowledge/retrieval reasoning — GPQA Diamond 78.8% measured, MMLU-Pro 77.2% measured, MMLU 87.4% est, BBH 94.2% est, MMMU-Pro 69.1% measured — but capped by very weak hard open-ended reasoning: HLE ~16%, SciCode ~37%, AA-Omniscience accuracy ~25%. Spiky profile.
- **Context window: 80/100.** Declared 256K–262K tokens with dedicated long-context design (p-RoPE, 5:1 sliding-window/global ratio, KV-cache sharing); strong for a 12B model, but no public retrieval score measured at the full 256K window.

- **Multimodal: 80/100.** Native text+image (+audio on 12B), unified encoder-free architecture; solid image benchmarks — MMMU ~79, MATH-Vision ~77–80, AI2D_TEST 90.1% est, InfographicVQA 58.7 — but weak low-level/video vision: BabyVision 30.2% est, V* 45.6% est, MedXPertQA MM ~47–48%. Mixed visual/document/video performance.
- **Coding: 70/100.** Competitive-coding strength — LiveCodeBench v6 72.0% measured, LiveCodeBench AA 84.0% est — but agentic software engineering lags: SWE-bench Verified 57.7% est, SWE-bench Pro 22.3% est, SciCode ~37% est. Does not yet extend to full autonomous SWE.
- **Cost efficiency: 82/100.** Apache 2.0 open weights (free to self-host); hosted ~$0.10/$0.25–$0.30 per 1M is near/below class medians; 12B dense is inference-efficient. Not counted toward Overall.
- **Overall Score: 75/100.** Half-up mean of (70 + 74 + 80 + 80 + 70) / 5 = 74.8 → 75. Best-fit recommendation: compact, Apache-2.0-open multimodal reasoning model for on-device/edge and document/vision tasks where openness and 12B scale matter; verify on HLE-class and agentic-coding workloads before production reliance.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B** — 2026-10-31
- Subject model: Gemma 4 12B (`google/gemma-4-12B`, folder `gemma-4-12b-unified`)
- Method: public internet research (official Gemma 4 model card + Hugging Face page + Gemma 4 Technical Report arxiv:2607.02770v2; independent benchgap.net benchmarks); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.