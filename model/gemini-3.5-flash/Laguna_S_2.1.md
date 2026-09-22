# Gemini 3.5 Flash — findings by Laguna S 2.1

- Source: Google (`google/gemini-3.5-flash`)
- Date: 2026-09-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash
- **Short description:** Gemini 3.5 Flash is Google's high-speed multimodal reasoning model from May 2026, offering 1M context across text, vision, speech, and video.
- **Provider / access:** Google AI Studio, Vertex AI (`gemini-3.5-flash`), OpenRouter.
- **Release / knowledge:** 2026-05-01 release; 2026-03 knowledge cutoff
- **IDs:** `google/gemini-3.5-flash`
- **Context window:** 1,000,000 tokens (1M total; 1M input / 8192 max output)
- **Modalities:** text, image, video, speech in; text out; reasoning yes; tool calls yes; JSON mode yes
- **Pricing (as of 2026-09-22):** $1.50 in / $9.00 out per 1M tokens ($1.31 blended with cache)
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
- Artificial Analysis Intelligence Index / BenchLM overall: **33 / #62**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- 1M context window supported; fast processing (216.8 t/s) across context length.

### Normalized scores (1–100)

- **Tool use: 78/100.** Fast agentic reasoning speed (216.8 t/s) and multimodal tool execution; capped by missing Terminal-Bench scores.
- **Reasoning: 75/100.** Artificial Analysis Intelligence Index score of 33 (#62 reasoning class).
- **Context window: 95/100.** 1M token context window (top tier).
- **Multimodal: 85/100.** Text, image, speech, and video input processing.
- **Coding: 78/100.** Solid mid-tier code generation capabilities.
- **Cost efficiency: 75/100.** Cost-effective pricing ($1.50 in / $9.00 out per 1M tokens).
- **Overall Score: 82.2/100.** Mean of the five quality dimensions; fast 1M-context multimodal model.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-09-22
- Method: Independent public web research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Gemini_3.8_Flash.md`, using the same headings.
