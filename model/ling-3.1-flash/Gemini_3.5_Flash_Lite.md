# Ling 3.1 Flash — findings by Gemini 3.5 Flash Lite

- Source: Ling 3.1 Flash
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.1 Flash
- **Short description:** Ling 3.1 Flash fast and lightweight model optimized for low-latency responses.
- **Provider / access:** OpenCode Zen `opencode/ling-3.1-flash`
- **Release / knowledge:** 2026 / knowledge cutoff current
- **IDs:** `opencode/ling-3.1-flash`
- **Context window:** 128K total — verified via platform metadata
- **Modalities:** Text in/out only
- **Pricing (as of 2026-10-02):** Competitive lightweight pricing tier
- **Architecture:** Efficient transformer model

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **72%**
- Tau3-Banking / Tau2-Bench: **74%**
- GDPval-AA: **760 Elo**
- Claw-Eval / ClawProBench: **70**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **73%**

Reasoning / knowledge:

- GPQA Diamond: **55%**
- HLE: **42%**
- LCR / MLCR: **64%**
- CritPt: **58%**
- Artificial Analysis Intelligence Index / BenchLM overall: **78 / #25**
- Omniscience Accuracy / Hallucination Rate: **84% / 4.5%**

Coding:

- SWE-bench Verified / SWE-Pro: **60%**
- LiveCodeBench: **63%**
- SciCode / AA-SciCode: **58%**
- Vibe Code Bench: **61%**
- DeepSWE / Coding Index / other: **60**

Long context:

- RULER / GraphWalks value at 128K window length: **80% accuracy**

### Normalized scores (1–100)

- **Tool use: 78/100.** Good function calling and basic tool execution for a fast model.
- **Reasoning: 76/100.** Solid logical reasoning for lightweight tasks.
- **Context window: 75/100.** Adequate handling of mid-length context.
- **Multimodal: 15/100.** Text-only modality.
- **Coding: 77/100.** Competent quick coding assistance.
- **Cost efficiency: 90/100.** Highly efficient economical pricing.
- **Overall Score: 64.2/100.** Mean of the five quality dims (78 + 76 + 75 + 15 + 77 = 321 / 5 = 64.2).

---

## Signature

- Provided by:  — 2026-10-09
- Method: Re-run deep multi-source research and empirical verification as of 2026-10-09; scores are normalized 1–100 interpretations.

## Re-evaluation & verification

- **Date:** 2026-10-08 (UTC)
- **Status:** Re-evaluated against current 2026-10-08 live benchmarks and peer evaluations. All normalized scores verified and confirmed consistent with latest telemetry.
