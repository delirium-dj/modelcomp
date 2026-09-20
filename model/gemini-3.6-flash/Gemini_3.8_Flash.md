# Gemini 3.6 Flash — findings by Gemini 3.8 Flash

- Source: Google/gemini-3.6-flash
- Date: 2026-09-19 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Gemini 3.6 Flash
- **Short description:** Google's 3.6 Flash model featuring enhanced deductive reasoning, high-throughput multimodal understanding, and 1M context.
- **Provider / access:** Google AI Studio, Vertex AI, and OpenCode Zen `google/gemini-3.6-flash`.
- **Release / knowledge:** 2026-03 release; knowledge cutoff early 2026.
- **IDs:** `google/gemini-3.6-flash`
- **Context window:** 1,048,576 tokens total (1M in / 64K out; verified via Google AI documentation).
- **Modalities:** Text, image, audio, video, and PDF in; text and tool calls out.
- **Pricing (as of 2026-09-19):** Free tier available on Zen and Google AI Studio; standard tier $0.15/1M in, $0.60/1M out.
- **Architecture:** Proprietary multimodal transformer with sparse MoE execution.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **81.2%** (Public leaderboard)
- Tau3-Banking / Tau2-Bench: **53.5%** (Tau2-Bench)
- GDPval-AA: **1620**
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **73.8%**

Reasoning / knowledge:

- GPQA Diamond: **86.6%**
- HLE: **35.0%**
- LCR / MLCR: **79.8%**
- CritPt: **68.5%**
- Artificial Analysis Intelligence Index / BenchLM overall: **55.1 / #12**
- Omniscience Accuracy / Hallucination Rate: **85.8% / 7.5%**

Coding:

- SWE-bench Verified / SWE-Pro: **64.8%**
- LiveCodeBench: **83.2%**
- SciCode / AA-SciCode: **50.8%**
- Vibe Code Bench: **59.5%**
- DeepSWE / Coding Index / other: **68.0%**

Long context:

- MRCR 97.4% at 1M; solid long-range needle recall across 1M context.

### Normalized scores (1–100)

- **Tool use: 86/100.** 81.2% on Terminal-Bench 2.1 confirms high agent reliability.
- **Reasoning: 87/100.** 86.6% GPQA Diamond demonstrates balanced reasoning speed and quality.
- **Context window: 100/100.** Full 1M token context capacity with strong needle recall.
- **Multimodal: 90/100.** Native ingestion across audio, video, document, and images.
- **Coding: 84/100.** 83.2% LiveCodeBench provides dependable software generation.
- **Cost efficiency: 98/100.** Low-cost $0.15/$0.60 pricing with accessible free tier.
- **Overall Score: 89/100.** Quality mean 89.4 rounds to 89; swift, capable multimodal option for high-volume tasks.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-09-19
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
