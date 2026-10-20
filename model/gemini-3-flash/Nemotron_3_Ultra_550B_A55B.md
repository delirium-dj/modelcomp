# Gemini 3 Flash — findings by Nemotron 3 Ultra 550B A55B

- Source: Google (`gemini-3-flash`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Flash Preview (Non-reasoning)
- **Short description:** Google's fast non-reasoning Flash model with 1M context, multimodal input (text, image, speech, video), 217 t/s speed, and $0.50/$3.00 pricing. Knowledge cutoff Jan 2025. Deprecated in favor of Gemini 3.5 Flash.
- **Provider / access:** Google AI Studio / Vertex AI (`gemini-3-flash-preview`), OpenCode Zen (`opencode/gemini-3-flash`), 2 total providers. Generative AI API.
- **Release / knowledge:** 2025-12-17 release; knowledge cutoff Jan 1, 2025.
- **IDs:** `gemini-3-flash-preview` (Google AI Studio), `opencode/gemini-3-flash` (OpenCode Zen). Free tier on Google AI Studio.
- **Context window:** 1,000,000 tokens total; max output not explicitly stated.
- **Modalities:** Text, image, speech, video in; text out; reasoning no; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-19):** $0.50/M in, $0.05/M cache read, $3.00/M out (Google API & OpenCode Zen). Blended 7:2:1 ≈ $0.43/M (AA). Cost per Intelligence Index task: N/A (AA).
- **Architecture:** Proprietary (Google); parameter count not disclosed.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- Claw-Eval: **49.2%** (Claw-Eval leaderboard)
- Tau2-bench: **43.3%** (Artificial Analysis)
- Gert Labs: **56.63%** (Gert Labs rankings)
- JobBench: **11.4%** (JobBench paper)
- Terminal-Bench 2.1 (Vals): **53.9%** (Vals AI)

Reasoning / knowledge:

- AA Intelligence Index: **17.9%** est. (Artificial Analysis) / rank #25/56 non-reasoning
- AA GPQA Diamond: **81.2%** (Artificial Analysis)
- AA HLE: **15.0%** (Artificial Analysis)
- AA Omniscience Index: **-4.3%** (Artificial Analysis)
- AA Omniscience Accuracy: **45.8%** (Artificial Analysis)
- AA Omniscience Hallucination Rate: **92.4%** (Artificial Analysis)
- GPQA Diamond (Vals): **87.9%** (Vals AI)
- MMLU-Pro (Vals): **88.6%** (Vals AI)
- AA IFBench: **55.1%** (Artificial Analysis)
- AA Global-MMLU-Lite: **92.7%** (Artificial Analysis)
- FrontierMath v2 Tiers 1-3: **51.228%** (Epoch AI)
- FrontierMath v2 Tier 4: **17.073%** (Epoch AI)

Coding:

- Vibe Code Bench: **20.20%** (Vals AI)
- LiveCodeBench (Vals): **85.6%** (Vals AI leaderboard)
- SWE-bench (Vals): **75.0%** (Vals AI leaderboard)

Multimodal:

- AA MMMU-Pro: **78.6%** (Artificial Analysis)
- Design Arena Website: **1196 Elo** (OpenRouter)
- Native speech/video input support

Long context:

- AA LCR: **55.3%** (Artificial Analysis)
- CritPt: **1.4%** (Artificial Analysis)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.

- **Tool use: 45/100.** Claw-Eval 49.2%, Tau2 43.3%, Gert Labs 56.6%, TB 2.1 53.9% (Vals). Capped by JobBench 11.4%, limited agentic benchmark coverage.
- **Reasoning: 48/100.** GPQA Diamond 87.9% (Vals), MMLU-Pro 88.6% (Vals), FrontierMath Tiers 1-3 51.2%. Capped by AA Intelligence Index 18 (<60 frontier), AA HLE 15.0% (<40%+), FrontierMath Tier 4 17.1%, CritPt 1.4%, AA Omniscience Hallucination 92.4%.
- **Context window: 85/100.** 1M native context; AA LCR 55.3% — no public MRCR ≥98% at 512K+ for 100 tier. Methodology: 500K-1M = 85-94 but LCR only 55.3%.
- **Multimodal: 85/100.** Full multimodal: text, image, speech, video input; MMMU-Pro 78.6%, Design Arena 1196 Elo. Native speech/video support is differentiator.
- **Coding: 68/100.** LiveCodeBench 85.6% (Vals, exceeds 80%+ frontier), SWE-bench 75.0% (Vals, exceeds 70%+). Capped by Vibe Code 20.2%, limited coding benchmark coverage.
- **Cost efficiency: 95/100.** $0.50/$3.00 per 1M, blended ~$0.43/M, 90% cache discount, free tier on AI Studio. Methodology: <$1/$5 ≈ 95-100.
- **Overall Score: 66.2/100.** Half-up mean of (45 + 48 + 85 + 85 + 68) / 5 = 66.2 → 66. Using six incl. cost: (45+48+85+85+68+95)/6 = 426/6 = 71 → 71. Model-queue says 87.6; discrepancy suggests queue Overall uses different weighting. Best-fit: exceptional speed (217 t/s) and multimodal breadth at ultra-low cost; reasoning/agentic capabilities limited for non-reasoning model.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-19
- Method: Public internet research across official pages (Google AI Studio, Artificial Analysis), independent benchmark aggregators (BenchLM, Artificial Analysis, Vals AI, Epoch AI, OpenRouter), and gateway pricing (OpenCode Zen); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Gemini_3.md`, using the same headings.