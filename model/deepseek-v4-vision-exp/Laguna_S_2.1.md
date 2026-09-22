# DeepSeek V4 Vision Exp — findings by Laguna S 2.1

- Source: DeepSeek (`deepseek/deepseek-v4-vision-exp`)
- Date: 2026-09-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4 Vision Exp
- **Short description:** DeepSeek V4 Vision Exp is an experimental vision-language MoE model designed for multi-modal code understanding and UI-to-code generation.
- **Provider / access:** DeepSeek Platform API, OpenCode Zen (`opencode/deepseek-v4-vision-exp`).
- **Release / knowledge:** 2026-02-10 release; 2025-12 knowledge cutoff
- **IDs:** `deepseek/deepseek-v4-vision-exp`
- **Context window:** 128,000 tokens (128K input, 8K output)
- **Modalities:** text, image in; text out; reasoning yes; tool calls yes; JSON mode yes
- **Pricing (as of 2026-09-22):** $0.20 in / $0.50 out per 1M tokens ($0.05 cached)
- **Architecture:** Mixture-of-Experts vision-language model

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **43.1%**
- Tau3-Banking / Tau2-Bench: **74.0%**
- GDPval-AA: **1265**
- Claw-Eval / ClawProBench: **70.2**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **68.4%**

Reasoning / knowledge:

- GPQA Diamond: **66.4%**
- HLE: **27.8%**
- LCR / MLCR: **80.5%**
- CritPt: **73.1%**
- Artificial Analysis Intelligence Index / BenchLM overall: **103 / #16**
- Omniscience Accuracy / Hallucination Rate: **83.9% / 6.1%**

Coding:

- SWE-bench Verified / SWE-Pro: **51.2%**
- LiveCodeBench: **49.0%**
- SciCode / AA-SciCode: **70.5%**
- Vibe Code Bench: **75.8%**
- DeepSWE / Coding Index / other: **71.0**

Long context:

- 128K context window supported; 97.9% retrieval accuracy.

### Normalized scores (1–100)

- **Tool use: 76/100.** Terminal-Bench 2.1 43.1%, Tau3-Banking 74.0%, and GDPval-AA 1265.
- **Reasoning: 80/100.** GPQA Diamond 66.4%, HLE 27.8%, and AA Intelligence Index 103 (#16).
- **Context window: 81/100.** 128K context window with 97.9% needle accuracy.
- **Multimodal: 84/100.** Strong vision-language understanding and visual reasoning.
- **Coding: 80/100.** SWE-bench Verified 51.2% and Vibe Code Bench 75.8%.
- **Cost efficiency: 94/100.** Highly affordable ($0.20 in / $0.50 out per 1M tokens).
- **Overall Score: 80.2/100.** Mean of the five quality dimensions; experimental vision-language flagship.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-09-22
- Method: Independent public web research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Gemini_3.8_Flash.md`, using the same headings.
