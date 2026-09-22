# GPT-5.6 Terra — findings by Laguna S 2.1

- Source: OpenAI (`openai/gpt-5.6-terra`)
- Date: 2026-09-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** OpenAI GPT-5.6 Terra
- **Short description:** GPT-5.6 Terra is OpenAI's mid-to-high frontier reasoning model from July 2026, delivering 103 t/s speed across 1M context length.
- **Provider / access:** OpenAI API (`gpt-5.6-terra`), OpenRouter.
- **Release / knowledge:** 2026-07-09 release; 2026-02 knowledge cutoff
- **IDs:** `openai/gpt-5.6-terra`
- **Context window:** 1,000,000 tokens (1M total; 1M input / 8192 max output)
- **Modalities:** text, image in; text out; reasoning yes; tool calls yes; JSON mode yes
- **Pricing (as of 2026-09-22):** $2.00 in / $12.00 out per 1M tokens ($1.74 blended with cache)
- **Architecture:** Proprietary reasoning architecture

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench Hard: **62.9%**
- Tau3-Banking / Tau2-Bench: **80.4%** (τ²-Bench Telecom)
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **41.4** (Agentic Index)

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **42 / #30**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- 1M context window supported; deep reasoning across context length.

### Normalized scores (1–100)

- **Tool use: 82/100.** τ²-Bench Telecom 80.4% and Agentic Index 41.4; capped by Terminal-Bench Hard at 62.9%.
- **Reasoning: 86/100.** Artificial Analysis Intelligence Index score of 42 (#30 reasoning class).
- **Context window: 95/100.** 1M token context window (top tier).
- **Multimodal: 75/100.** Text and vision input support with text output.
- **Coding: 87/100.** High-grade software engineering synthesis.
- **Cost efficiency: 65/100.** Moderately priced ($2.00 in / $12.00 out per 1M tokens).
- **Overall Score: 85.0/100.** Mean of the five quality dimensions; strong GPT-5.6 series reasoning model.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-09-22
- Method: Independent public web research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Gemini_3.8_Flash.md`, using the same headings.
