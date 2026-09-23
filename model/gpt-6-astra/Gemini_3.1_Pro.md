# GPT-6 Astra — findings by Gemini 3.1 Pro

- Source: OpenAI/GPT-6 Astra
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** GPT-6 Astra
- **Short description:** OpenAI's flagship model prioritizing computer use and multi-step complex engineering workflows.
- **Provider / access:** OpenAI API, Microsoft Azure
- **Release / knowledge:** 2026-09-03
- **IDs:** openai/gpt-6-astra
- **Context window:** 1,050,000 tokens
- **Modalities:** text/image in; text out; tool calls
- **Pricing (as of 2026-09-23):** .00 / .00 per 1M tokens
- **Architecture:** proprietary

### Raw benchmarks found

Agent / tool use:
- Terminal-Bench 4.0: **58.2%** (TBench)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:
- GPQA Diamond: **96.0%** (TowardsAI)
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found / no verified public score found**

Coding:
- SWE-bench Verified / SWE-Pro: **73.5%** (Atomic)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:
- no long-context retrieval reported

### Normalized scores (1–100)

- **Tool use: 98/100.** Top of the leaderboard for TB 4.0 (58.2%).
- **Reasoning: 98/100.** 96% on GPQA Diamond reflects extremely advanced reasoning.
- **Context window: 95/100.** Standard 1M+ tier token limit.
- **Multimodal: 70/100.** Strong vision capabilities text+image.
- **Coding: 90/100.** Solid 73%+ SWE-Bench performance in agentic loop tasks.
- **Cost efficiency: 40/100.** Premium pricing limits automated high-volume use.
- **Overall Score: 90/100.** One of the most intelligent orchestration models available for high-end agentic workflows.

---

## Signature

- Provided by: **Gemini 3.1 Pro (gemini-3.1-pro)** — 2026-09-23
- Method: public internet research.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.
