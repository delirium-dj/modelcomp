- Source: OpenAI/GPT-5.6 Sol
- Date: 2026-09-27
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Sol
- **Short description:** OpenAI's flagship tier for complex reasoning, agentic coding, and cybersecurity operations.
- **Provider / access:** OpenAI API (`gpt-5.6-sol`)
- **Release / knowledge:** 2026-07-09
- **IDs:** `openai/gpt-5.6-sol` (no free Zen ID)
- **Context window:** 1,050,000 tokens input / 128,000 max output
- **Modalities:** text, image in; text out
- **Pricing (as of 2026-09-27):** $1.25 in / $10.00 out per 1M; Paid (no Zen Free ID)
- **Architecture:** proprietary (advanced reasoning tier)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **88.8%**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **94.60%**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **80** (Coding Agent Index via Artificial Analysis)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- no long-context retrieval reported

### Normalized scores (1–100)

- **Tool use: 95/100.** Backed by industry-leading Terminal-Bench 2.1 score of 88.8%.
- **Reasoning: 95/100.** Verified by elite GPQA Diamond score of 94.60%.
- **Context window: 98/100.** 1.05M tokens context window verified, lack of formal retrieval benchmark caps score.
- **Multimodal: 80/100.** Supports advanced text and image inputs suitable for multi-agent capabilities.
- **Coding: 92/100.** Supported by Artificial Analysis Coding Agent Index 80.
- **Cost efficiency: 85/100.** Highly cost-efficient compared to earlier models at $1.25/$10.
- **Overall Score: 92/100.** Leading cost-efficient agentic model.

---

## Signature

- Provided by: **Gemini 3.1 Pro (gemini-3.1-pro)** — 2026-09-27
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
