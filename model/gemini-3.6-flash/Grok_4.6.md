# Gemini 3.6 Flash — findings by Grok 4.6

- Source: Google (`google/gemini-3.6-flash`)
- Date: 2026-09-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.6 Flash
- **Short description:** Google workhorse Flash (2026-07-21) improving coding/knowledge-work vs 3.5 Flash at lower output price. Not a Free SKU.
- **Provider / access:** Gemini API `gemini-3.6-flash`. Native multimodal generateContent + gateway IDs.
- **Release / knowledge:** **2026-07-21** (DeepMind card). WaitWhichModel lists knowledge cutoff **2026-03**.
- **IDs:** `google/gemini-3.6-flash`. No Zen Free ID found.
- **Context window:** 1M / ~65–66K max output (WaitWhichModel 66K; family 65,536).
- **Modalities:** Native multimodal (text/image/audio/video) per DeepMind Flash line; text out.
- **Pricing (as of 2026-09-19):** **$1.50 / $7.50** per 1M (output down from 3.5’s $9). 3.7/3.8 intro $0.75/$3.75 is a later promo, not this card’s list. Paid.
- **Architecture:** Proprietary closed weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **78.0%** (DeepMind Terminus-2); BenchmarkList **78.9%**.
- Tau3-Banking: **no verified public score found**.
- GDPval-AA v2: **1421 Elo** (DeepMind).
- OSWorld-Verified: **83.0%** (DeepMind).
- Claw-Eval: **no verified public score found**.
- Toolathon / MCP-Atlas: **no verified public score found**.

Reasoning / knowledge:

- GPQA Diamond: **92.8%** (WaitWhichModel / AA); BenchmarkList ~**93%** (Vals-style).
- HLE: **38.3%** (WaitWhichModel / AA).
- LCR / MLCR: **no verified public AA-LCR found**.
- CritPt: **no verified public score found**.
- Artificial Analysis Intelligence Index: **50** (Fello / WaitWhichModel).
- Omniscience: **no verified public score found**.

Coding:

- SWE-bench Verified: **79.6%** (BenchmarkList).
- LiveCodeBench: **88.1%** (BenchmarkList).
- SciCode: **52.7%** (BenchmarkList).
- Vibe Code Bench v1.1: **57.3%** (BenchmarkList).
- DeepSWE v1.1: **49%** (DeepMind).
- SWE-Bench Pro: **58.7%** (DeepMind).

Long context:

- GDM-MRCR v2: **91.8%** at 128k average; **54.0%** at 1M pointwise (DeepMind). Window 1M.

### Normalized scores (1–100)

- **Tool use: 82/100.** TB ~78% and OSWorld-Verified 83% are solid mid-high. Caps: GDPval 1421, missing Tau3/Claw-Eval.
- **Reasoning: 88/100.** GPQA ~93% meets 90%+; HLE 38.3% is just under the 40%+ frontier ref; Index 50 caps 90+.
- **Context window: 95/100.** 1M tier; 1M pointwise MRCR 54% ≠ ≥98% at 512K+.
- **Multimodal: 92/100.** Flash-family audio/video/image in, text out.
- **Coding: 78/100.** SWE-Verified 79.6% and LiveCode 88.1% vs DeepSWE 49% and SciCode 52.7% (near 55%+) average to high 70s.
- **Cost efficiency: 80/100.** **$1.50 / $7.50** between ~$1.25/$4.25 ≈88 and ~$3/$15 ≈60.
- **Overall Score: 87/100.** Mean of (82 + 88 + 95 + 92 + 78) / 5 = 87.0. Best-fit: cheaper-output Flash vs 3.5; 3.7+ is stronger on DeepSWE.

---

## Signature

- Provided by: **Grok 4.6 (xAI/grok-4.6)** — 2026-09-19
- Method: public internet research (DeepMind 3.6 card, Google blog, BenchmarkList, WaitWhichModel, FelloAI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
