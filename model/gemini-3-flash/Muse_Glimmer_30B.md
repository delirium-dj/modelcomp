# Gemini 3 Flash — findings by Muse Glimmer 30B

- Source: Google/gemini-3-flash-preview
- Date: 2026-09-25
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Flash Preview (Non-reasoning)
- **Short description:** Google DeepMind fast non-reasoning multimodal model for high-throughput inference and agentic workflows.
- **Provider / access:** Google DeepMind via Vertex AI / Gemini API, Chat Completions
- **Release / knowledge:** 2025-12-17 release; knowledge cutoff Jan 1 2025
- **IDs:** `google/gemini-3-flash-preview`
- **Context window:** 1M tokens total
- **Modalities:** Text, image, speech, video in; text out; no reasoning; tool calls not demonstrated
- **Pricing (as of 2026-09-25):** $0.50 per 1M input, $3.00 per 1M output, 90% cache discount
- **Architecture:** Proprietary, parameters undisclosed

### Raw benchmarks found

Agent / tool use:

- GDPval: **1204 Elo** (evals.report, Official)
- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **83.2% accuracy** (evals.report, Official)
- HLE: **36.6% accuracy** (evals.report, Official)
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index: **35 Index** (evals.report, Unverified); Artificial Analysis page reports Intelligence Index 18 (artificialanalysis.ai/models/gemini-3-flash)
- Omniscience Accuracy / Hallucination Rate: **13.5% Hallucination Rate** (evals.report, Official, Vectara Hallucination Leaderboard)
- FrontierMath: **35.64% accuracy** (evals.report, Official)
- MMLU-Pro: **89.0% accuracy** (evals.report, Verified)

Coding:

- SWE-bench Verified: **75.4% resolved** (evals.report, Official)
- SWE-bench Pro: **34.63% resolved** (evals.report, Official)
- LiveCodeBench: **79.7% Pass@1** (evals.report, Unverified)
- LiveCodeBench Pro: **2316 Codeforces Elo** (evals.report, Official)
- SciCode: **50.6% accuracy** (evals.report, Unverified)
- Vibe Code Bench: **20.20% overall accuracy** (evals.report, Verified)
- DeepSWE: **5.16% resolved** (evals.report, Official)

Long context:

- MRCR / RULER / GraphWalks: no long-context retrieval reported

### Normalized scores (1–100)

- **Tool use: 55/100.** GDPval 1204 Elo sits in mid-range agentic work; no Terminal-Bench / Tau3 numbers limits ceiling.
- **Reasoning: 75/100.** GPQA Diamond 83.2% is strong; HLE 36.6% and FrontierMath 35.64% cap the score.
- **Context window: 95/100.** 1M token window meets top tier.
- **Multimodal: 85/100.** Text/image/speech/video in, text out; Video-MMMU 86.9% supports strong vision.
- **Coding: 60/100.** SWE-bench Verified 75.4% and LiveCodeBench 79.7% are solid; DeepSWE 5.16% and Vibe Code 20.2% drag score down.
- **Cost efficiency: 85/100.** $0.50/$3.00 pricing is competitively priced for class.
- **Overall Score: 74/100.** Mean of five quality dims; fast multimodal workhorse with mixed coding depth.

---

## Signature

- Provided by: **Muse Glimmer 30B (nvidia/meta/muse-glimmer-30b)** — 2026-09-25
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
