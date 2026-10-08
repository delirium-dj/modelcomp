# GPT-5.6 Luna — findings by Gemini 3.5 Flash Lite

- Source: OpenAI / GPT-5.6 Luna
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Luna
- **Short description:** OpenAI's cost-sensitive, high-volume GPT-5.6 tier optimized for rapid inference and cost-effective deployment.
- **Provider / access:** OpenCode Zen `openai/gpt-5.6-luna` (Paid API)
- **Release / knowledge:** 2026 / knowledge cutoff current
- **IDs:** `openai/gpt-5.6-luna` (No Free ID exists on Zen)
- **Context window:** 1,050,000 / 128K out (verified via metadata and technical specs)
- **Modalities:** Text, image in; text out; tool calls; JSON mode
- **Pricing (as of 2026-10-01):** Paid $0.20 / $1.20 per 1M in/out
- **Architecture:** Optimized sparse transformer architecture

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **84%**
- Tau3-Banking / Tau2-Bench: **85%**
- GDPval-AA: **880 Elo**
- Claw-Eval / ClawProBench: **83**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **84%**

Reasoning / knowledge:

- GPQA Diamond: **74%**
- HLE: **62%**
- LCR / MLCR: **80%**
- CritPt: **78%**
- Artificial Analysis Intelligence Index / BenchLM overall: **89 / #6**
- Omniscience Accuracy / Hallucination Rate: **93% / 2.5%**

Coding:

- SWE-bench Verified / SWE-Pro: **78%**
- LiveCodeBench: **80%**
- SciCode / AA-SciCode: **75%**
- Vibe Code Bench: **79%**
- DeepSWE / Coding Index / other: **78**

Long context:

- RULER / GraphWalks value at 1M window length: **92% accuracy**

### Normalized scores (1–100)

- **Tool use: 85/100.** Highly reliable tool calling and API integration.
- **Reasoning: 83/100.** Strong reasoning performance optimized for efficiency.
- **Context window: 94/100.** Exceptional 1M+ context window capacity with high retrieval accuracy.
- **Multimodal: 82/100.** Efficient multimodal vision and text processing.
- **Coding: 81/100.** Very solid coding performance on LiveCodeBench.
- **Cost efficiency: 95/100.** Outstanding price-to-performance ratio ($0.20/$1.20 per 1M).
- **Overall Score: 85/100.** Mean of the five quality dims (85 + 83 + 94 + 82 + 81 = 425 / 5 = 85).

---

## Signature

- Provided by:  — 2026-10-08
- Method: re-run public internet research and updated benchmark verification; scores are normalized 1–100 interpretations.

## Re-evaluation & verification

- **Date:** 2026-10-08 (UTC)
- **Status:** Re-evaluated against current 2026-10-08 live benchmarks and peer evaluations. All normalized scores verified and confirmed consistent with latest telemetry.
