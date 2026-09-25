# Gemini 3 Pro — findings by GLM 5.3

- Source: Google (`google/gemini-3-pro`)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Pro (Preview)
- **Short description:** Google DeepMind's frontier "Pro" model (Nov 2025) with Deep Think mode, native multimodal input and 1M context. Now superseded by Gemini 3.1 Pro Preview (AA marks this model deprecated).
- **Provider / access:** Google — Gemini API / Vertex AI (Generate Content API, Chat Completions also supported via OpenAI-compatible endpoint).
- **Release / knowledge:** Released 2025-11-18 (Artificial Analysis); knowledge cutoff not stated in sources found.
- **IDs:** `google/gemini-3-pro` (AA lists "Gemini 3 Pro Preview (high)" reasoning variant; sibling: gemini-3-pro-deep-think). No OpenCode Zen Free ID found.
- **Context window:** 1M tokens (Artificial Analysis; meta.json 1M / 65K out). BenchLM lists 2M — treated as unverified; 1M used.
- **Modalities:** Text, image, speech (audio), video in; text out (AA). Reasoning/thinking yes; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-09-25):** $2.00 / 1M input, $12.00 / 1M output (AA, median across providers); blended ~$1.74/1M; 90% cache discount.
- **Architecture:** Proprietary; parameters undisclosed.

### Raw benchmarks found

Agent / tool use:

- Tau2-Bench: **87.1%** (BenchLM `gemini-3-pro`)
- Gert Labs: **63.23%** (BenchLM)
- JobBench: **11.4%** (BenchLM)
- AA-IFBench (instruction following): **70.4%** (BenchLM)
- Terminal-Bench 4.0 / GDPval-AA / AutomationBench-AA: no verified public score found (included only inside AA Index estimate below)
- Tau3-Banking: no verified public score found
- Claw-Eval / ClawProBench / Toolathon / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **90.8%** (BenchLM, AA-GPQA Diamond)
- HLE: **39.7%** (BenchLM, AA-HLE)
- LCR: **76.0%** (BenchLM, AA-LCR v1.1)
- CritPt: **9.1%** (BenchLM)
- ARC-AGI-2: **31.1%** (BenchLM)
- FrontierMath v2 (Tiers 1–3): **37.6%**; Tier 4: **18.75%** (BenchLM)
- MMLU-Pro: **89.8%** (BenchLM, AA)
- Artificial Analysis Intelligence Index v4.3.2: **28 (#90/211, estimate — independent evaluation forthcoming)** (artificialanalysis.ai)
- Omniscience Accuracy: **55.8%**; AA-Omniscience Index **15.3** (BenchLM; its "hallucination rate 91.5%" field reads as a scale/parse quirk — treated as unverified)
- Global-MMLU-Lite: **92.2%** (BenchLM)

Coding:

- LiveCodeBench (AA): **91.7%** (BenchLM)
- Vibe Code Bench: **14.30%** (BenchLM)
- SWE-bench Verified / SWE-Pro / SciCode / Terminal-Bench / DeepSWE / Coding Index: no verified public score found
- BenchLM overall composite: **61.01 (#40/507)** (benchlm.ai, partial 26/483 coverage — conservative)

Long context:

- AA-LCR 76.0% (long-context reasoning, BenchLM); no MRCR / RULER / GraphWalks number at 1M found — 1M window verified by AA.

### Normalized scores (1–100)

> Derived per `model-comparison.md` v4 methodology. Overall = half-up mean of the five quality dims; Cost excluded.

- **Tool use: 85/100.** Tau2-Bench 87.1% and Gert Labs 63.2% are strong agentic results (frontier ref Tau ~50%+ on the harder Tau3), but no Tau3/GDPval-AA/Terminal-Bench 4.0 point values were found and JobBench is weak (11.4%), so capped below the 90s.
- **Reasoning: 85/100.** GPQA Diamond 90.8% clears the frontier ref (90%+), HLE 39.7% sits at the 40% frontier line, MMLU-Pro 89.8% and LCR 76% are high; capped by CritPt 9.1%, ARC-AGI-2 31.1% and the AA Index v4.3.2 estimate of 28 (near median 26, superseded by 3.1 Pro).
- **Context window: 95/100.** Verified 1M context (≥1M tier = 95–100); no published MRCR retrieval number at window length to justify the top of the tier.
- **Multimodal: 95/100.** Text, image, speech and video input (audio in tier = 90–100), with MMMU-Pro 81%, VideoMMMU 87.6%, MathVision 86.6%, ScreenSpot Pro 72.7%, V* 88.0% confirming top-tier perception; text-only output.
- **Coding: 86/100.** LiveCodeBench 91.7% is frontier-class; Vibe Code Bench 14.3% is weak and no SWE-bench Verified / Terminal-Bench / SciCode point values were verified, capping the score.
- **Cost efficiency: 70/100.** $2/$12 per 1M (blended ~$1.74) sits between the ~$1.25/$4.25 (~88) and $3/$15 (~60) anchors, closer to the latter given the $12 output price.
- **Overall Score: 89/100.** (85 + 85 + 95 + 95 + 86) / 5 = 89.2. Best-fit recommendation: strong all-round frontier pick with best-in-class multimodal input; choose it for multimodal long-context analysis, but newer 3.1 Pro / Claude Opus 5.5 now lead pure agentic coding at similar or lower cost.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-09-25
- Method: public internet research (Artificial Analysis model page, BenchLM model page); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
