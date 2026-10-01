# Gemini 3.1 Pro — findings by Qwen 3.8 Flash

- Source: Google / Gemini 3.1 Pro (`google/gemini-3.1-pro`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Pro
- **Short description:** Google's Gemini 3.1 Pro multimodal reasoning model with a very large context window, offered as a preview during staged rollout; strong vision/knowledge but uneven agentic numbers in the preview harness.
- **Provider / access:** Google AI Studio / Vertex AI (`gemini-3.1-pro`, tracked as `gemini-3-1-pro-preview` on Artificial Analysis). Free tier available plus paid.
- **Release / knowledge:** 2026 (Gemini 3.1 family preview); knowledge cutoff not disclosed.
- **IDs:** `google/gemini-3.1-pro`.
- **Context window:** 2,000,000 in / 64,000 max out (curated meta; note max-output is only 64K).
- **Modalities:** text, image, audio, video, PDF in; text out; reasoning on; tool calls; JSON mode. Full multimodal input; no non-text output.
- **Pricing (as of 2026-10-02):** Free tier on AI Studio / Zen plus paid tier; exact per-1M not verified in fetched sources.
- **Architecture:** proprietary, hosted only.

### Raw benchmarks found

> Independently verified against BenchLM (47 of 618 rows), citing the Google Gemini 3.1 Pro post, Meta Muse Spark comparison charts, Artificial Analysis, Vals AI, Epoch AI and Claw-Eval leaderboards (fetched 2026-10-02). Preview-harness agentic numbers are volatile.

Agent / tool use:

- τ²-bench: **95.6%** (Meta chart) — standout; Terminal-Bench 2.1 (Vals) **70.8%**
- Claw-Eval: **57.8%**; DeepSearchQA 69.7%; Gert Labs 56.87%
- GDPval-AA: **904** (AA; normalized 13.8%) — weak in preview; AA Agentic Index **10.3%**; APEX-Agents-AA 32.0%
- ResearchClawBench 13.3%

Reasoning / knowledge:

- GPQA-Diamond: **94.3%** (Vals 95.5%, AA 94.1%); MMLU-Pro (Vals) 91.0%
- HLE (no tools / AA): **45.4% / 47.0%**; AA-LCR 82.0%
- ARC-AGI-2: **77.1%** (Google); ARC-AGI-3 **0.4%** (near zero)
- CritPt: **17.7%**; Artificial Analysis Intelligence Index **29.7**
- FrontierMath v2 Tiers1-3 / Tier-4: **36.9% / 16.7%** (Epoch); AA-Omniscience accuracy 54.9 / halluc 50.9

Coding:

- LiveCodeBench Pro: **82.9%**; LiveCodeBench (Vals) **88.5%**; SWE-bench (Vals) **78.8%**
- AA-SciCode: **58.7%**; AA Coding Index **68.8%**; React Native Evals 78.9%
- Vibe Code Bench 32.03%; PostTrainBench v1.1 22.0%

Multimodal / long context:

- MMMU-Pro 83.9, CharXiv 80.2, ScreenSpot Pro 84.4, MedXpertQA (MM) 81.3, ERQA 69.4, SimpleVQA 72.4; AA Global-MMLU-Lite 93.2; 2M window (no ≥98% MRCR reported).

### Normalized scores (1–100)

> Derived from the raw numbers above using `model-comparison.md` v4 methodology. Overall = half-up mean of the five quality dims; Cost excluded.

- **Tool use: 72/100.** τ²-bench 95.6% and Claw-Eval 57.8% are solid, but the preview GDPval-AA (904) and AA Agentic Index (10.3%) collapse — agentic reliability is unproven in this harness, capping the dimension well below the Pro label.
- **Reasoning: 82/100.** GPQA-Diamond 94.3%, MMLU-Pro 91% and ARC-AGI-2 77.1% are frontier; pulled down by ARC-AGI-3 0.4%, a low Intelligence Index (29.7), CritPt 17.7% and only mid FrontierMath (36.9%/16.7%).
- **Context window: 95/100.** 2M-token window is the largest tier (95–100), tempered by a short 64K max-output and no ≥98% long-context retrieval metric reported.
- **Multimodal: 92/100.** Full text/image/audio/video/PDF input with strong vision scores (MMMU-Pro 83.9, CharXiv 80.2, MedXpertQA MM 81.3); top of the multimodal-input band since output remains text-only.
- **Coding: 85/100.** LiveCodeBench Pro 82.9 / Vals 88.5 and SWE-bench 78.8 are strong; AA Coding Index 68.8 (just under the 70 frontier ref), SciCode 58.7 and Vibe 32% hold it mid-80s.
- **Cost efficiency: 85/100.** Free AI Studio / Zen tier plus paid Flash-class pricing (exact rate unverified); scored near the strong-value band. Cost is excluded from Overall.
- **Overall Score: 85/100.** Mean of Tool 72, Reasoning 82, Context 95, Multimodal 92, Coding 85 = 85.2 → 85. Best fit: multimodal + huge-context document/video analysis where vision and long input dominate; re-verify agentic numbers after the preview leaves staged rollout, since tool-use is the weak spot today.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-02
- Method: public internet research (BenchLM rows citing the Google Gemini 3.1 Pro post, Meta Muse Spark comparison charts, Artificial Analysis, Vals AI, Epoch AI, Claw-Eval); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
