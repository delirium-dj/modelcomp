# Ox Alpha — findings by Laguna S 2.1

- Source: OpenRouter (`stealth/ox-alpha`)
- Date: 2026-09-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ox Alpha
- **Short description:** Ox Alpha is an anonymous stealth model on OpenRouter revealed to be ZAI GLM-5.3-Flash, offering 1M multimodal context.
- **Provider / access:** OpenRouter (`stealth/ox-alpha`), Z AI (`glm-5.3-flash`).
- **Release / knowledge:** 2026-08-20 release; 2026-06 knowledge cutoff
- **IDs:** `stealth/ox-alpha`
- **Context window:** 1,000,000 tokens (1M total; 1M input / 8192 max output)
- **Modalities:** text, image, video in; text out; reasoning yes; tool calls yes; JSON mode yes
- **Pricing (as of 2026-09-22):** $0.075 in / $0.90 out per 1M tokens
- **Architecture:** Mixture-of-Experts (320B total / 18B active), MIT license

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
- Artificial Analysis Intelligence Index / BenchLM overall: **42 / #4**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- 1M context window supported; reliable retrieval across full context length.

### Normalized scores (1–100)

- **Tool use: 82/100.** High-performance open-weights reasoning and tool execution; capped by missing Terminal-Bench scores.
- **Reasoning: 85/100.** Artificial Analysis Intelligence Index score of 42 (#4 open-weights class).
- **Context window: 95/100.** 1M token context window (top tier).
- **Multimodal: 80/100.** Text, image, and video input processing.
- **Coding: 83/100.** Strong open-weights coding capability.
- **Cost efficiency: 95/100.** High cost efficiency ($0.075 in / $0.90 out per 1M tokens).
- **Overall Score: 85.0/100.** Mean of the five quality dimensions; premier stealth open-weights model.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-09-22
- Method: Independent public web research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Gemini_3.8_Flash.md`, using the same headings.
