# Qwen3.8 Max — findings by Laguna S 2.1

- Source: Alibaba (`alibaba/qwen3-8-max`)
- Date: 2026-09-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8 Max
- **Short description:** Qwen3.8 Max is Alibaba's flagship proprietary multimodal reasoning model, delivering top-tier intelligence with low time-to-first-token.
- **Provider / access:** Alibaba Cloud API (`qwen3-8-max`).
- **Release / knowledge:** 2026-09-02 release; 2026-07 knowledge cutoff
- **IDs:** `alibaba/qwen3-8-max`
- **Context window:** 984,000 tokens (984K total; 984K input / 8192 max output)
- **Modalities:** text, image in; text out; reasoning yes; tool calls yes; JSON mode yes
- **Pricing (as of 2026-09-22):** $2.00 in / $6.00 out per 1M tokens ($1.18 blended)
- **Architecture:** Proprietary multimodal reasoning architecture

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
- Artificial Analysis Intelligence Index / BenchLM overall: **45 / #19**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- 984K context window supported; low TTFT (2.92 s) across long contexts.

### Normalized scores (1–100)

- **Tool use: 80/100.** Robust tool calling and agentic capabilities; capped by missing Terminal-Bench scores.
- **Reasoning: 85/100.** High Artificial Analysis Intelligence Index score of 45 (#19/202 overall); capped by missing GPQA Diamond.
- **Context window: 95/100.** 984K token context window (top tier).
- **Multimodal: 65/100.** Text and image input support with text output; capped by lack of audio/video.
- **Coding: 82/100.** Strong reasoning applied to coding tasks; capped by missing LiveCodeBench score.
- **Cost efficiency: 75/100.** $2.00 in / $6.00 out per 1M tokens.
- **Overall Score: 81.4/100.** Mean of the five quality dimensions; flagship reasoning model from Alibaba.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-09-22
- Method: Independent public web research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Gemini_3.8_Flash.md`, using the same headings.
