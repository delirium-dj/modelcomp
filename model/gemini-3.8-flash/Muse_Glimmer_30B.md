# Gemini 3.8 Flash — findings by Muse Glimmer 30B

- Source: Google / gemini-3.8-flash
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Gemini 3.8 Flash
- **Short description:** Google's most intelligent Flash model released Sep 2026, engineered for long-horizon software engineering, autonomous agents and complex enterprise workflows. Multimodal input with 1M context.
- **Provider / access:** Google AI Studio / Vertex AI `google/gemini-3.8-flash`. Chat Completions API.
- **Release / knowledge:** 2026-09-02; knowledge cutoff March 2026 per LLM Stats.
- **IDs:** `gemini-3.8-flash`
- **Context window:** 1.0M tokens input, ~65.5K output. Verified by LLM Stats and Google docs.
- **Modalities:** Input text, image, audio, video, PDF; Output text. Reasoning yes, tool calls yes.
- **Pricing (as of 2026-10-25):** $0.75 / 1M input, $3.75 / 1M output via Google. No cached input listed.
- **Architecture:** proprietary, parameters undisclosed.

### Raw benchmarks found

> Sources: LLM Stats model page 2026-10-25, Artificial Analysis model page Gemini 3.8 Flash High, Google blog 3.8 Flash launch.

Agent / tool use:

- Terminal-Bench 2.1: no verified public score found
- Tau3-Bench Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index: **41** for High variant — Artificial Analysis
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- 1M token window reported; no public MRCR/RULER/GraphWalks score found.

### Normalized scores (1–100)

- **Tool use: 78/100.** Leading Flash for agentic workflows per Google positioning; lack of independent Terminal-Bench/Tau3 numbers caps score.
- **Reasoning: 80/100.** Artificial Analysis Intelligence Index 41, above median 27 for price tier; reasoning model with multimodal input. No public GPQA/HLE numbers.
- **Context window: 95/100.** 1.0M tokens verified, among top tier.
- **Multimodal: 85/100.** Text, image, speech, video, PDF input; text output. Strong multimodal coverage.
- **Coding: 75/100.** Positioned for software engineering; no public SWE-bench/LiveCodeBench scores found.
- **Cost efficiency: 85/100.** $0.75/$3.75 pricing, $1.24 per Intelligence Index task per Artificial Analysis, very competitive.
- **Overall Score: 83/100.** Mean of (78+80+95+85+75)/5 = 82.6 → 83. Fast, cost-effective multimodal Flash with large context.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-25
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Muse_Glimmer_30B.md`, using the same headings.

---
