# Gemini 3.1 Flash-Lite — findings by Nemotron 3 Ultra 550B A55B

- Source: Google (`gemini-3.1-flash-lite`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Flash-Lite (High effort tier)
- **Short description:** Google's cost-efficient non-reasoning model (Gemini 3.1 family) with native multimodal input (text, image, audio, video), 1M context, and exceptional 363 tok/s output speed at competitive pricing.
- **Provider / access:** Google AI Studio / Gemini API (`gemini-3.1-flash-lite` via `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-flash-lite`), Google Cloud Vertex AI, Google AI App. Google GenAI API (not OpenAI-compatible).
- **Release / knowledge:** 2026-03-03 release; knowledge cutoff not publicly disclosed.
- **IDs:** `google/gemini-3.1-flash-lite` (Google AI Studio/Vertex). No Free tier on any platform.
- **Context window:** 1,000,000 tokens input; 65,536 tokens max output (64K).
- **Modalities:** Text, image, audio, video in; text out; reasoning no (non-reasoning per BenchLM); tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-19):** $0.25/M in, $1.50/M out (Google AI Studio). Output speed 363 tok/s (Google model card). No cache pricing reported.
- **Architecture:** Proprietary (Google DeepMind); based on Gemini 3 Pro; parameter count not disclosed.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- Gert Labs: **38.46%** (Gert Labs rankings)
- Terminal-Bench 2.1 (Vals): **34.1%** (Vals AI leaderboard)

Reasoning / knowledge:

- GPQA Diamond (Vals): **81.1%** (Vals AI leaderboard)
- MMLU-Pro (Vals): **86.2%** (Vals AI leaderboard)
- HLE: **16.0%** (Google model card)
- GPQA Diamond: **86.9%** (Google model card)
- MMMU-Pro: **76.8%** (Google model card)
- CharXiv: **73.2%** (Google model card)
- Video-MMMU: **84.8%** (Google model card)
- SimpleQA Verified: **43.3%** (Google model card)
- FACTS: **40.6%** (Google model card)
- MMMLU: **88.9%** (Google model card)
- LiveCodeBench: **72.0%** (Google model card)
- MRCR v2 128K: **60.1%** (Google model card)
- MRCR v2 1M: **12.3%** (Google model card)
- FrontierMath v2 Tiers 1-3: **27.719%** (Epoch AI)
- JevBench 1.4: **14.26** (JevBench)
- JevBench 1.5: **19.58** (JevBench)

Coding:

- LiveCodeBench (Vals): **80.1%** (Vals AI leaderboard)
- SWE-bench (Vals): **62.8%** (Vals AI leaderboard)
- Vibe Code Bench: **0.00%** (Vals AI leaderboard)

Multimodal:

- CharXiv: **73.2%** (BenchLM)
- MMMU-Pro: **76.8%** (Google model card)
- Video-MMMU: **84.8%** (Google model card)
- CharXiv: **73.2%** (Google model card)

Long context:

- MRCR v2 128K: **60.1%** (Google model card)
- MRCR v2 1M: **12.3%** (Google model card)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.

- **Tool use: 40/100.** TB 2.1 34.1% (weak), Gert Labs 38.5%. No TB 2.0/4.0, GDPval, OSWorld, MCP Atlas, Toolathlon, Tau2, BrowseComp data. Capped by minimal agentic benchmark coverage and weak TB 2.1.
- **Reasoning: 55/100.** GPQA Diamond 81.1-86.9% (near 90%+ frontier), MMLU-Pro 86.2%, MMMU-Pro 76.8%, Video-MMMU 84.8%, SimpleQA 43.3%, MMMLU 88.9%. Capped by HLE 16.0% (below 40%+ frontier), MRCR 1M 12.3%, FrontierMath Tiers 1-3 27.7%, no AA Intelligence Index.
- **Context window: 95/100.** 1M native context; MRCR 60.1% at 128K, 12.3% at 1M — no public MRCR ≥98% at 512K+ for 100 tier. Methodology: ≥1M = 95-100.
- **Multimodal: 90/100.** Native text/image/audio/video input; MMMU-Pro 76.8%, Video-MMMU 84.8%, CharXiv 73.2%, Video-MMMU 84.8%. Methodology: +video/PDF in = 75-90; +audio in = 90-100.
- **Coding: 50/100.** LiveCodeBench 80.1% (Vals), SWE-bench 62.8% (Vals), LiveCodeBench 72.0% (Google). Capped by Vibe Code 0%, no SWE-bench Verified/Pro/DeepSWE/FrontierCode/CursorBench data.
- **Cost efficiency: 75/100.** $0.25/$1.50 per 1M, output speed 363 tok/s. Methodology: $1.25/$4.25 ≈ 88, $3/$15 ≈ 60 → $0.25/$1.50 interpolates to ~75.
- **Overall Score: 66/100.** Half-up mean of (40 + 55 + 95 + 90 + 50) / 5 = 66.0 → 66. Best-fit: exceptional value for high-volume multimodal tasks; 363 tok/s output speed and native audio/video at $0.25/$1.50 are unmatched; weak agentic (TB 2.1 34%) and HLE (16%) limit complex reasoning.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-19
- Method: Public internet research across official model card (Google DeepMind), independent benchmark aggregators (BenchLM, Vals AI, Epoch AI), and gateway pricing; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.