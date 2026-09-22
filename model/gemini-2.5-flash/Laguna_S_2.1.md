# Gemini 2.5 Flash — findings by Laguna S 2.1

- Source: Google (`google/gemini-2.5-flash`)
- Date: 2026-09-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Flash
- **Short description:** Gemini 2.5 Flash is Google's non-reasoning multimodal Flash model from May 2025, offering 206 t/s output speed and 0.45 s TTFT.
- **Provider / access:** Google AI Studio, Vertex AI (`gemini-2.5-flash`), OpenRouter.
- **Release / knowledge:** 2025-05-01 release; 2025-01 knowledge cutoff
- **IDs:** `google/gemini-2.5-flash`
- **Context window:** 1,000,000 tokens (1M total; 1M input / 8192 max output)
- **Modalities:** text, image, video, speech in; text out; reasoning no; tool calls yes; JSON mode yes
- **Pricing (as of 2026-09-22):** $0.30 in / $2.50 out per 1M tokens ($0.33 blended with cache)
- **Architecture:** Proprietary multimodal architecture

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
- Artificial Analysis Intelligence Index / BenchLM overall: **10 / #27**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- 1M context window supported; fast processing (206 t/s).

### Normalized scores (1–100)

- **Tool use: 72/100.** Fast execution speed (206 t/s) and multi-modal tool calling; capped by non-reasoning class.
- **Reasoning: 60/100.** Artificial Analysis Intelligence Index score of 10 (#27 non-reasoning class).
- **Context window: 95/100.** 1M token context window (top tier).
- **Multimodal: 85/100.** Text, image, speech, and video input processing.
- **Coding: 68/100.** Basic-to-intermediate code generation skills.
- **Cost efficiency: 90/100.** Highly cost-effective ($0.30 in / $2.50 out per 1M tokens).
- **Overall Score: 76.0/100.** Mean of the five quality dimensions; legacy Flash-tier model.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-09-22
- Method: Independent public web research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Gemini_3.8_Flash.md`, using the same headings.
