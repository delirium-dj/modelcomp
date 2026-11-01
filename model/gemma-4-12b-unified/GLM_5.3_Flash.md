# Gemma 4 12B Unified — findings by GLM 5.3 Flash

- Source: Google DeepMind (`google/gemma-4-12b-unified`)
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 12B Unified
- **Short description:** The 12B member of Gemma 4 built on a unified, encoder-free architecture that ingests raw audio and image patches directly (no separate vision/audio encoders) — the only Gemma 4 size with audio input besides the E2B/E4B mobile models.
- **Provider / access:** Open weights on Hugging Face (pre-trained + instruction-tuned); Google AI Studio and gateway partners. OpenCode Zen `opencode/gemma-4-12b-unified`.
- **Release / knowledge:** Released 2026-06-03 (per the official Gemma releases changelog). Knowledge cutoff not stated.
- **IDs:** `google/gemma-4-12b-unified` (HF family); `opencode/gemma-4-12b-unified` (Zen). Free open weights.
- **Context window:** 262,144 tokens (256K); 32,768 max output (Zen listing).
- **Modalities:** Text, image, audio in; text out — unified cross-modal token projection (encoder-free); thinking mode yes.
- **Pricing (as of 2026-11-01):** Free open weights (Apache 2.0); hosted ~$0.10/$0.25 per 1M in/out.
- **Architecture:** Dense 12B (embedder ~1.0B + einsums ~10.9B + drafter ~0.4B per the technical report's component table); 26.7 GB BF16 inference footprint.

### Raw benchmarks found

(vendor model card + Gemma 4 Technical Report, arXiv 2607.02770 — instruction-tuned, thinking mode)

Agent / tool use:

- Tau2-bench average (3 domains): **69.0%** — airline 75.0 / retail 77.6 / telecom 54.4
- Terminal Bench Hard: **18.0%**

Reasoning / knowledge:

- MMLU-Pro: **77.2%**; GPQA Diamond: **78.8%**; MMMLU: **83.4%**
- AIME 2026 (no tools): **77.5%**; BigBench Extra Hard: **53.0%**; HLE: **5.2%**
- IFBench: **74.0%**; IFEval: **97.2%**

Coding:

- LiveCodeBench v6: **72.0%**; Codeforces Elo: **1659**; SciCode: **38.0%**

Long context:

- MRCR v2 8-needle 128k: **43.4%**; RULER: **96.4%** at 32k / **91.2%** at 128k; GraphWalks <128k F1: **71.0%**; LOFT text retrieval 128k: **66.4%**; MTOB (eng→kgv, half book): **45.1 chrF**

Vision / audio / multimodal:

- MMMU Pro: **69.1%**; MATH-Vision: **79.7%**; MedXPertQA MM: **48.7%**; InfographicVQA: **88.4%**; OmniDocBench 1.5 edit distance: **0.164**
- Audio (raw-patch input): CoVoST **38.5** (excluding Chinese); FLEURS WER **0.069** (lower is better)

### Normalized scores (1–100)

- **Tool use: 56/100.** Tau2 retail 77.6 is solid but telecom 54.4 and Terminal Bench Hard 18.0 keep it a mid-tier agent; no large agentic-suite figures published.
- **Reasoning: 73/100.** GPQA 78.8 / AIME 77.5 is strong for 12B; HLE 5.2 and BBEH 53.0 mark the ceiling clearly below the 26B/31B siblings.
- **Context window: 70/100.** 262K window with the best RULER-at-128K in the family (91.2) and healthy GraphWalks 71.0; MRCR 43.4 mid; 32K output.
- **Multimodal: 74/100.** Image + audio input via the unified architecture (the differentiator vs 26B A4B): MMMU-Pro 69.1, MATH-Vision 79.7, InfographicVQA 88.4, plus measured audio transcription/translation rows.
- **Coding: 64/100.** LCB 72.0 / Codeforces 1659 competitive for the class; SciCode 38.0 and TB-Hard 18.0 cap it.
- **Cost efficiency: 94/100.** Apache 2.0 weights free to self-host; hosted at ~$0.10/$0.25 per 1M.
- **Overall Score: 67/100.** Mean of the five quality dims (56+73+70+74+64)/5 = 67.4 → 67. Best fit: local multimodal (incl. audio) assistants and document work where the unified single-model input stack and open license matter.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-11-01
- Method: Public internet research (official Google model card and Gemma 4 Technical Report, release changelog, Hugging Face); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Google — Gemma 4 model card (12B Unified columns)](https://ai.google.dev/gemma/docs/core/model_card_4)
  - [Gemma 4 Technical Report — arXiv 2607.02770 (unified encoder-free architecture, Tables 5–7)](https://arxiv.org/html/2607.02770)
  - [Google — Gemma releases changelog (12B Unified, 2026-06-03)](https://ai.google.dev/gemma/docs/releases)
  - [Google — Gemma 4 model overview (sizes, memory, precision)](https://ai.google.dev/gemma/docs/core)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
