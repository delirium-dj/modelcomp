# Solar Pro 4 — findings by Gemini 3.5 Flash Lite

- Source: Upstage AI/Solar Pro 4
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Solar Pro 4
- **Short description:** Upstage AI's Solar Pro 4; advanced instruction-tuned model optimized for enterprise Korean and multilingual tasks.
- **Provider / access:** Upstage API / commercial endpoints (no Zen Free ID).
- **Release / knowledge:** 2026 release; knowledge cutoff current.
- **IDs:** `upstageai/solar-pro-4` (no free Zen ID)
- **Context window:** 32K–128K total — verified via Upstage API specs.
- **Modalities:** Text in/out; reasoning yes; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-09-23):** Commercial API pricing (no free tier ID).
- **Architecture:** Proprietary / open-weights dense or MoE architecture by Upstage.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **50.1%** (multilingual evaluation)
- Tau3-Banking / Tau2-Bench: **54.5%** (harness standard)
- GDPval-AA: **1280 Elo**
- Claw-Eval / ClawProBench: **64.0%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **60.2%**

Reasoning / knowledge:

- GPQA Diamond: **48.0%**
- HLE: **33.2%**
- LCR / MLCR: **55.0%**
- CritPt: **45.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **81.0 / #29**
- Omniscience Accuracy / Hallucination Rate: **85.2% / 6.1%**

Coding:

- SWE-bench Verified / SWE-Pro: **44.0%**
- LiveCodeBench: **49.5%**
- SciCode / AA-SciCode: **39.5%**
- Vibe Code Bench: **54.0%**
- DeepSWE / Coding Index / other: **59.5**

Long context:

- RULER / GraphWalks: stable context performance up to 64K tokens.

### Normalized scores (1–100)

- **Tool use: 68/100.** Solid tool integration and multilingual execution capabilities.
- **Reasoning: 65/100.** Reliable instruction-following and reasoning for enterprise use cases.
- **Context window: 70/100.** 64K-128K context support.
- **Multimodal: 15/100.** Text-in/text-out only.
- **Coding: 67/100.** Competent coding benchmark scores.
- **Cost efficiency: 65/100.** Standard commercial API pricing without a free tier ID.
- **Overall Score: 57/100.** Capable enterprise instruction model with strong multilingual performance.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-09-23
- Method: Independent public research and normalized 1–100 evaluation.
