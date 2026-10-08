# Gemini 3 Flash — findings by Step 5 Preview

- Source: Google (`gemini-3-flash-preview`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Flash
- **Short description:** Google's December 2025 fast tier of the Gemini 3 series — built on the Gemini 3 Pro reasoning foundation with thinking levels (minimal/low/medium/high) to trade quality, cost and latency. Positions frontier-class reasoning at <1/4 of Gemini 3 Pro's price; succeeded in the line by Gemini 3.5/3.6 Flash but still served on the Gemini API and Vertex AI.
- **Provider / access:** Gemini API / AI Studio (`gemini-3-flash-preview`), Vertex AI (`gemini-3-flash-preview`), Google Antigravity, OpenRouter (`google/gemini-3-flash-preview`), Requesty. No OpenCode Zen Free ID found — paid API only.
- **Release / knowledge:** 2025-12-17; knowledge cutoff not disclosed in the model card.
- **IDs:** `gemini-3-flash-preview` (Gemini API / Vertex), `google/gemini-3-flash-preview` (OpenRouter route — provider ID only).
- **Context window:** 1,048,576 tokens (1M) input; 64K max output (model card; Vertex route lists 66K).
- **Modalities:** Text, images, audio, video and PDF in → text out (natively multimodal). Thinking levels minimal/low/medium/high; structured output, tool use, code execution (zoom/count/edit visual inputs), automatic context caching (up to 90% cost reduction), Batch API.
- **Pricing (as of 2026-10-09):** $0.50 / MTok input, $3.00 output (Gemini API; audio input $1.00); cached input $0.05; cache write ~$0.083. Google AI Studio/First-party listings show a discounted $0.25 / $1.50; Batch API 50% off.
- **Architecture:** Proprietary.

### Raw benchmarks found

Agent / tool use:

- τ²-Bench Telecom: **80.4%** (Artificial Analysis, reasoning config); non-reasoning 43.3%
- Claw-Eval: **49.2%** (Claw-Eval leaderboard via BenchLM)
- Terminal-Bench 2.1: **53.9%** (Vals AI); Terminal-Bench Hard: **38.6%** (AA, reasoning); Terminal-Bench 4.0: ~25% (ShawnHack aggregate); Google's TB 2.0 Terminus-2 submission was pending at publication
- GDPval-AA: **no verified public score found** (successor 3.5 Flash posts Elo 1349, 3.6 Flash 1421 — not comparable to this model)
- JobBench: **11.4%** (paper via BenchLM); Code Migration 6.4%, Harvey Legal Agent 0.0%, ProgramBench 0.0% (Vals AI — agentic legal/UI coding near zero)
- Tau3-Banking: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **90.4%** (Google launch blog); AA 89.8% (reasoning); Vals 87.9%; official Dec-2025 table 83.2% (evals.report)
- HLE: **33.7% without tools** (Google launch blog); AA 36.6% (reasoning); Benchgen aggregate 43.5%
- AIME 2025: **97.0%** (AA, reasoning); 95.6% (Vals)
- Math Index: **97.0%** (AA); MATH 94.6–97.5% (aggregators)
- AA-LCR: **78.0%** (AA, reasoning)
- AA Intelligence Index: **26.3** (AA, reasoning); non-reasoning 17.9
- CritPt: **8.6%** (AA); MMLU-Pro 88.6% (Vals) / 89.0% (AA); SimpleQA 68.7% (Benchgen)
- ARC-AGI: **34%** (ShawnHack aggregate); ARC-C 98.4%, HellaSwag 97.1%

Coding:

- SWE-bench Verified: **78%** (Google launch blog); official Dec-2025 card 75.4% (evals.report); Vals 75.0%
- SWE-bench Pro: **34.63%** (official, evals.report)
- LiveCodeBench: **85.6%** (Vals); AA (reasoning) 90.8%
- Vibe Code Bench v1.1: **20.2%** (Vals AI)
- HumanEval: **94.8%**; IOI v1: 39.1% (Vals)
- MMLU: 91.2% (aggregate)

Multimodal:

- MMMU-Pro: **87.6%** (Vals AI); AA 79.9% (reasoning)

Long context:

- 1M-token context standard; **no public MRCR/RULER number found for Gemini 3 Flash** — AA-LCR 78.0% (reasoning) is the only long-context reasoning measure found

### Normalized scores (1–100)

- **Tool use: 62/100.** τ²-Bench Telecom 80.4% and Claw-Eval 49.2% sit in the mid band while Terminal-Bench 2.1 53.9% (Vals; 38.6% AA Hard) is the middle of the 45–60% reference; capped hard by near-zero agentic professional benchmarks (Code Migration 6.4%, Legal Agent 0.0%, ProgramBench 0.0%, JobBench 11.4%) and no published GDPval-AA.
- **Reasoning: 79/100.** GPQA Diamond 90.4% and Math/AIME 97% are frontier-class, but HLE 33.7–43.5% sits below the 40% frontier bar on the no-tools figure, the AA Intelligence Index reads 26.3, and CritPt 8.6% drags — strong for the price tier, short of the top tier.
- **Context window: 92/100.** 1,048,576-token window with 64K output is the ≥1M tier; the 100 tier needs ≥98% retrieval at 512K+, and with no MRCR/RULER published for this model (only AA-LCR 78%) it lands just below the top of the band.
- **Multimodal: 82/100.** Text + image + audio + video + PDF in → text out is the 75–90 band, anchored by MMMU-Pro 87.6% (Vals) and native code execution over visual inputs; no non-text output caps it below 90.
- **Coding: 75/100.** SWE-bench Verified 75.4–78% and LiveCodeBench 85.6–90.8% are solidly frontier-adjacent for a Flash-tier model, but SWE-bench Pro 34.63% and Vibe Code Bench 20.2% show the long-horizon and end-to-end app-building gaps that keep it out of the 90s.
- **Cost efficiency: 92/100.** $0.50/$3 per MTok maps to the methodology's ~$0.60/$2.20 ≈ 92 tier (first-party $0.25/$1.50 listings are cheaper still), with 90%-off cache reads and 50%-off batch; the standout value point of the model.
- **Overall Score: 78/100.** Best-fit recommendation: the efficiency pick — near-frontier reasoning, coding and full multimodal input at Flash-tier pricing; pair with a Pro/Opus-tier model for long-horizon agentic and legal/document-coding work.

---

## Signature

- Provided by: **Step 5 Preview (StepFun)** — 2026-10-09
- Method: public internet research (Google DeepMind model card + evals PDF + launch blog, Gemini API docs, Artificial Analysis, Vals AI, BenchLM, OpenRouter/Requesty provider pages, evals.report, Benchgen); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Grok_4.6.md`, using the same headings.
