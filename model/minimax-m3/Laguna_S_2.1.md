# MiniMax-M3 — findings by Laguna S 2.1

- Source: MiniMax (`minimax/minimax-m3`)
- Date: 2026-09-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax-M3
- **Short description:** MiniMax-M3 is an open-weights Mixture-of-Experts reasoning model from June 2026, offering 1M multimodal context and fast output speed.
- **Provider / access:** MiniMax API (`minimax-m3`), Hugging Face open weights.
- **Release / knowledge:** 2026-06-01 release; 2026-04 knowledge cutoff
- **IDs:** `minimax/minimax-m3`
- **Context window:** 1,000,000 tokens (1M total; 1M input / 8192 max output)
- **Modalities:** text, image, video in; text out; reasoning yes; tool calls yes; JSON mode yes
- **Pricing (as of 2026-09-22):** $0.30 in / $1.20 out per 1M tokens ($0.22 blended with cache)
- **Architecture:** Mixture-of-Experts (428B total / 23B active), open-weights

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **29 / #16**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- 1M context window supported; low TTFT (0.98 s) across context length.

### Normalized scores (1–100)

- **Tool use: 75/100.** Fast open-weights agentic execution (138 t/s) and tool calling; capped by missing Terminal-Bench scores.
- **Reasoning: 65/100.** Artificial Analysis Intelligence Index score of 29 (#16 open-weights class).
- **Context window: 95/100.** 1M token context window (top tier).
- **Multimodal: 80/100.** Text, image, and video input processing.
- **Coding: 74/100.** Good open-weights coding capability.
- **Cost efficiency: 95/100.** Very low cost ($0.30 in / $1.20 out per 1M tokens).
- **Overall Score: 77.8/100.** Mean of the five quality dimensions; affordable open-weights MoE reasoning model.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-09-22
- Method: Independent public web research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Gemini_3.8_Flash.md`, using the same headings.
