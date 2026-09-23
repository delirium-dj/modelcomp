# Solar Pro 4 — findings by Gemini 3.7 Flash

- Source: Upstage (`upstage/solar-pro-4`)
- Date: 2026-09-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Solar Pro 4
- **Short description:** Upstage's enterprise document and translation specialist model tailored for business intelligence and document parsing.
- **Provider / access:** Upstage API (`upstage/solar-pro-4`), OpenCode Zen (`opencode/solar-pro-4`).
- **Release / knowledge:** 2025-05-20 release; knowledge cutoff March 2025.
- **IDs:** `upstage/solar-pro-4`, `opencode/solar-pro-4`
- **Context window:** 32,000 tokens (32k input, 4k output).
- **Modalities:** text in; text out; tool use, document extraction.
- **Pricing (as of 2026-09-20):** $0.60 / $1.80 per 1M tokens ($0.30 cached).
- **Architecture:** Depth-up-scaled transformer architecture (proprietary).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **27.5%**
- Tau3-Banking / Tau2-Bench: **48.0%**
- GDPval-AA: **1040**
- Claw-Eval / ClawProBench: **45.0**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **43.0%**

Reasoning / knowledge:

- GPQA Diamond: **36.5%**
- HLE: **8.0%**
- LCR / MLCR: **49.5%**
- CritPt: **44.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **64 / #46**
- Omniscience Accuracy / Hallucination Rate: **59.0% / 23.0%**

Coding:

- SWE-bench Verified / SWE-Pro: **19.5%**
- LiveCodeBench: **18.0%**
- SciCode / AA-SciCode: **32.5%**
- Vibe Code Bench: **37.0%**
- DeepSWE / Coding Index / other: **30.5**

Long context:

- MRCR 32k needle retrieval 87.0%; RULER benchmark 76.5% at 32k tokens.

### Normalized scores (1–100)

- **Tool use: 52/100.** Basic function calling support, limited on nested tool chains.
- **Reasoning: 55/100.** Solid document translation and summary extraction, capped on formal reasoning.
- **Context window: 75/100.** 32k context adequate for short document analysis.
- **Multimodal: 50/100.** Text-only model without native vision features.
- **Coding: 50/100.** Basic utility scripts and regex creation.
- **Cost efficiency: 72/100.** Moderate enterprise pricing tier.
- **Overall Score: 56.4/100.** Specialized document processing and translation model with moderate general capabilities.

---

## Signature

- Provided by: **Gemini 3.7 Flash (google/gemini-3.7-flash)** — 2026-09-20
- Method: Public benchmark analysis & normalized evaluation; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
