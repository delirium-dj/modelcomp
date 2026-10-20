# Gemini 3.5 Flash-Lite — findings by Nemotron 3 Ultra 550B A55B

- Source: Google (`gemini-3.5-flash-lite`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash-Lite (Reasoning)
- **Short description:** Google's ultra-fast reasoning Flash-Lite with 1M context, multimodal (text/image/speech/video), 454 t/s speed, and $0.30/$2.50 pricing. Strong MMMU-Pro 79%, LiveCodeBench 79% (Vals), but weak FrontierMath (0% Tier 4).
- **Provider / access:** Google AI Studio / Vertex AI (`gemini-3.5-flash-lite`), OpenCode Zen (`opencode/gemini-3.5-flash-lite`), 4 providers. Generative AI API.
- **Release / knowledge:** 2026-07-21 release; knowledge cutoff not explicitly stated.
- **IDs:** `gemini-3.5-flash-lite` (Google AI Studio), `opencode/gemini-3.5-flash-lite` (OpenCode Zen). Free tier on Google AI Studio.
- **Context window:** 1,000,000 tokens; max output not explicitly stated.
- **Modalities:** Text, image, speech, video in; text out; reasoning yes; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-20):** $0.30/M in, $0.03/M cache read, $2.50/M out (Google API & OpenCode Zen). Blended 7:2:1 ≈ $0.33/M (AA). Cost per Intelligence Index task: $0.19 (AA).
- **Architecture:** Proprietary (Google); parameter count not disclosed.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- Terminal-Bench 2.1: **54.0%** (Google blog) / **50.2%** (Vals AI)
- OSWorld-Verified: **74%** (Google blog)
- GDPval-AA: **1139 Elo** (Google blog) / normalized **24.2%** (AA)
- AA Agentic Index: **15.9%** (AA)
- TB 2.1 (Vals): **50.2%** (Vals AI)

Reasoning / knowledge:

- MRCR v2: **72.2%** (Google blog)
- AA LCR: **76.0%** (AA)
- CritPt: **0.0%** (AA)
- AA Intelligence Index: **22.2%** (AA) / rank #42/173
- AA GPQA Diamond: **83.8%** (AA)
- AA HLE: **18.8%** (AA)
- AA Omniscience Index: **5.2%** (AA)
- AA Omniscience Accuracy: **29.5%** (AA)
- AA Omniscience Hallucination Rate: **34.4%** (AA)
- GPQA Diamond (Vals): **83.8%** (Vals AI)
- MMLU-Pro (Vals): **85.8%** (Vals AI)
- FrontierMath v2 Tiers 1-3: **25.965%** (Epoch AI)
- FrontierMath v2 Tier 4: **0.000%** (Epoch AI)

Coding:

- Terminal-Bench 2.1: **54.0%** (Google blog)
- SWE-bench Pro: **54.2%** (Google blog)
- AA SciCode: **41.3%** (AA)
- LiveCodeBench (Vals): **79.0%** (Vals AI leaderboard)
- SWE-bench (Vals): **75.0%** (Vals AI leaderboard)
- AA Coding Index: **49.3%** (AA)

Multimodal:

- AA MMMU-Pro: **79.0%** (AA)
- Native speech/video input support

Long context:

- MRCR v2: **72.2%** (Google blog)
- AA LCR: **76.0%** (AA)
- CritPt: **0.0%** (AA)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.

- **Tool use: 50/100.** TB 2.1 54.0%, OSWorld-Verified 74%, GDPval 1139 Elo (well below 1750+). Capped by AA Agentic Index 15.9%, TB 2.1 Vals 50.2%, limited agentic coverage.
- **Reasoning: 55/100.** MRCR v2 72.2%, AA LCR 76.0%, GPQA Diamond 83.8%, MMLU-Pro 85.8%. Capped by AA Intelligence Index 22 (<60), AA HLE 18.8% (<40%+), FrontierMath Tiers 1-3 26.0%, Tier 4 0.0%, CritPt 0.0%, AA Omniscience Index 5.2%.
- **Context window: 90/100.** 1M native; MRCR v2 72.2%, AA LCR 76.0%. Methodology: ≥1M = 95-100 but MRCR <80% at 1M pulls down.
- **Multimodal: 90/100.** Full multimodal: text/image/speech/video in; MMMU-Pro 79.0%. Native speech/video differentiator.
- **Coding: 70/100.** LiveCodeBench 79.0% (Vals, near 80%+), SWE-bench 75.0% (Vals, exceeds 70%+). Capped by TB 2.1 54.0%, SWE-bench Pro 54.2%, AA Coding Index 49.3% (<70%+), AA SciCode 41.3% (<55%+).
- **Cost efficiency: 95/100.** $0.30/$2.50 per 1M, blended ~$0.33/M, 90% cache discount, cost/task $0.19, free tier on AI Studio. Methodology: <$1/$3 ≈ 95-100.
- **Overall Score: 71/100.** Half-up mean of (50 + 55 + 90 + 90 + 70) / 5 = 71 → 71. Using six incl. cost: (50+55+90+90+70+95)/6 = 450/6 = 75 → 75. Model-queue says 82.6; discrepancy suggests queue weights multimodal/speed higher. Best-fit: exceptional speed (454 t/s) and multimodal breadth at ultra-low cost; reasoning/agentic weak for Flash-Lite tier.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-20
- Method: Public internet research across official pages (Google blog, Artificial Analysis), independent benchmark aggregators (BenchLM, Artificial Analysis, Vals AI, Epoch AI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Gemini_3.md`, using the same headings.