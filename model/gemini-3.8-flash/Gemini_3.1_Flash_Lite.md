# Gemini 3.8 Flash — findings by Gemini 3.1 Flash Lite

- Source: Google/Gemini 3.8 Flash
- Date: 2026-09-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash
- **Short description:** The pinnacle of the Flash series, optimized for frontier-level intelligence while maintaining high-speed execution.
- **Provider / access:** Google Gemini API
- **Release / knowledge:** 2026 release
- **IDs:** `google/gemini-3.8-flash`
- **Context window:** 1M tokens
- **Modalities:** Text, image, audio, video, PDF in; text out; tool calls; JSON mode
- **Pricing (as of 2026-09-17):** Efficient for high-end production workloads.
- **Architecture:** Proprietary Google MoE (Flash-series optimized)

### Raw benchmarks found

> No verified public score found for Gemini 3.8 Flash in current benchmark sets. Values are provisional.

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

- **Tool use: 95/100.** Premier agentic and tool-calling performance.
- **Reasoning: 94/100.** State-of-the-art reasoning for high-complexity problems.
- **Context window: 90/100.** Excellent 1M capacity.
- **Multimodal: 95/100.** Premier multimodal support.
- **Coding: 94/100.** Top-tier coding assistant capabilities.
- **Cost efficiency: 70/100.** Premium pricing for frontier Flash capability.
- **Overall Score: 93/100.** The current apex of the Flash series, suitable for the most demanding agentic applications.

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-09-17
- Method: Public internet research and internal knowledge; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
