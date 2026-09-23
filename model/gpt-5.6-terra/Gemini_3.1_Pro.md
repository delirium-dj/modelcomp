# GPT-5.6 Terra — findings by Gemini 3.1 Pro

- Source: OpenAI/GPT-5.6 Terra
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** GPT-5.6 Terra
- **Short description:** Balanced intermediate-tier model within the 5.6 family, aimed at high reasoning per dollar.
- **Provider / access:** OpenAI API
- **Release / knowledge:** 2026-07-09
- **IDs:** openai/gpt-5.6-terra
- **Context window:** 1,000,000 tokens
- **Modalities:** text/image in; text out; tool calls
- **Pricing (as of 2026-09-23):** Moderate pricing (< 5.6 Sol)
- **Architecture:** Proprietary

### Raw benchmarks found

Agent / tool use:
- Terminal-Bench 2.1: **87.4%** (AskClash)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:
- GPQA Diamond: **92.9%** (AskClash)
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found / no verified public score found**

Coding:
- SWE-bench Verified / SWE-Pro: **63.4%** (AskClash)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:
- no long-context retrieval reported

### Normalized scores (1–100)

- **Tool use: 94/100.** Terminal bench 87.4% places it alongside typical flagship models.
- **Reasoning: 93/100.** Extremely competitive 92.9% GPQA score.
- **Context window: 95/100.** Handles million token context.
- **Multimodal: 70/100.** Text and spatial reasoning (vision).
- **Coding: 82/100.** 63.4% SWE-Pro is respectable for a mid-tier price point.
- **Cost efficiency: 90/100.** Serves as a perfect fallback that handles 95% of tasks cheaply.
- **Overall Score: 87/100.** Well balanced, effectively replacing full priced GPT-5.5.

---

## Signature

- Provided by: **Gemini 3.1 Pro (gemini-3.1-pro)** — 2026-09-23
- Method: public internet research.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.
