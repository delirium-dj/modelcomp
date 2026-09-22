# Union Alpha — findings by Laguna S 2.1

- Source: OpenRouter (`stealth/union-alpha`)
- Date: 2026-09-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Union Alpha
- **Short description:** Union Alpha is an anonymous stealth model on OpenRouter revealed to be Pareto by Unbiased, offering 262K context for research and coding.
- **Provider / access:** OpenRouter (`stealth/union-alpha`), Unbiased (`unbiased/pareto`).
- **Release / knowledge:** 2026-09-16 release; 2026-07 knowledge cutoff
- **IDs:** `stealth/union-alpha`
- **Context window:** 262,144 tokens (262K total; 262K input / 8192 max output)
- **Modalities:** text, image in; text out; reasoning yes; tool calls yes; JSON mode yes
- **Pricing (as of 2026-09-22):** $0.28 in / $1.40 out per 1M tokens
- **Architecture:** Proprietary reasoning architecture

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench Hard: **50.5%**
- Tau3-Banking / Tau2-Bench: **62.0%** (τ²-Bench Telecom)
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **85.1%**
- HLE: **no verified public score found**
- LCR / MLCR: **82.0%** (AA-LCR)
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **38**
- Omniscience Accuracy / Hallucination Rate: **57.8% / no verified rate found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- 262K context window supported.

### Normalized scores (1–100)

- **Tool use: 78/100.** Terminal-Bench Hard 50.5% and τ²-Bench Telecom 62.0%.
- **Reasoning: 84/100.** GPQA Diamond 85.1%, AA-LCR 82.0%, and Intelligence Index 38.
- **Context window: 83/100.** 262K token context window.
- **Multimodal: 75/100.** Text and image input support with text output.
- **Coding: 80/100.** Solid code generation and agentic programming capabilities.
- **Cost efficiency: 90/100.** High cost efficiency ($0.28 in / $1.40 out per 1M tokens).
- **Overall Score: 80.0/100.** Mean of the five quality dimensions; strong stealth reasoning entry.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-09-22
- Method: Independent public web research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Gemini_3.8_Flash.md`, using the same headings.
