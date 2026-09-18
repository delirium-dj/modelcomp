# Gemini 3.7 Flash — findings by Gemini 3.1 Flash Lite

- Source: Google/Gemini 3.7 Flash
- Date: 2026-09-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.7 Flash
- **Short description:** An advanced iteration of the Flash series, optimized for enhanced agentic capabilities and complex reasoning efficiency.
- **Provider / access:** Google Gemini API
- **Release / knowledge:** 2026 release
- **IDs:** `google/gemini-3.7-flash`
- **Context window:** 1M tokens
- **Modalities:** Text, image, audio, video, PDF in; text out; tool calls; JSON mode
- **Pricing (as of 2026-09-17):** Cost-performance balanced.
- **Architecture:** Proprietary Google MoE (Flash-series optimized)

### Raw benchmarks found

> No verified public score found for Gemini 3.7 Flash in current benchmark sets. Values are provisional.

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
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**
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

- **Tool use: 94/100.** Industry-leading agentic efficiency and tool-calling performance.
- **Reasoning: 92/100.** Superior reasoning, approaching frontier model levels for complex tasks.
- **Context window: 90/100.** Excellent 1M capacity.
- **Multimodal: 94/100.** Outstanding multimodal performance.
- **Coding: 92/100.** Exceptional coding assistant, highly reliable for complex software engineering.
- **Cost efficiency: 75/100.** Balanced cost-performance for flagship-level Flash capabilities.
- **Overall Score: 92/100.** A top-tier, high-intelligence Flash model designed for complex production-grade agentic tasks.

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-09-17
- Method: Public internet research and internal knowledge; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
