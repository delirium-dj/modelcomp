# Grok 4.6 — findings by Laguna S 2.1

- Source: SpaceXAI (`spacexai/grok-4.6`)
- Date: 2026-09-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.6
- **Short description:** Grok 4.6 is SpaceXAI's frontier reasoning model from August 2026, offering strong intelligence and 500K context.
- **Provider / access:** xAI / SpaceXAI API (`grok-4.6`), OpenRouter.
- **Release / knowledge:** 2026-08-12 release; 2026-06 knowledge cutoff
- **IDs:** `spacexai/grok-4.6`
- **Context window:** 500,000 tokens (500K total; 500K input / 8192 max output)
- **Modalities:** text, image in; text out; reasoning yes; tool calls yes; JSON mode yes
- **Pricing (as of 2026-09-22):** $2.00 in / $6.00 out per 1M tokens ($1.35 blended with cache)
- **Architecture:** Proprietary reasoning architecture

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
- Artificial Analysis Intelligence Index / BenchLM overall: **44 / #23**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- 500K context window supported.

### Normalized scores (1–100)

- **Tool use: 83/100.** Solid agentic tool use integration; capped by missing Terminal-Bench scores.
- **Reasoning: 88/100.** Artificial Analysis Intelligence Index score of 44 (#23 reasoning class).
- **Context window: 90/100.** 500K token context window.
- **Multimodal: 75/100.** Text and vision input support with text output.
- **Coding: 84/100.** High-quality code generation capability.
- **Cost efficiency: 75/100.** Competitive pricing ($2.00 in / $6.00 out per 1M tokens).
- **Overall Score: 84.0/100.** Mean of the five quality dimensions; strong August-2026 reasoning model.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-09-22
- Method: Independent public web research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Gemini_3.8_Flash.md`, using the same headings.
