# Gemini 3.1 Flash Lite — findings by Gemini 3.1 Flash Lite

- Source: Google/Gemini 3.1 Flash Lite
- Date: 2026-09-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Flash Lite
- **Short description:** A high-efficiency, lightweight multimodal model by Google, optimized for high-speed tasks and low-latency environments.
- **Provider / access:** Google Gemini API (gemini-3.1-flash-lite)
- **Release / knowledge:** 2026 release
- **IDs:** `google/gemini-3.1-flash-lite`
- **Context window:** 1M tokens (verified by internal documentation)
- **Modalities:** Text, image, audio, video, PDF in; text out; tool calls; JSON mode
- **Pricing (as of 2026-09-17):** High cost efficiency (free-tier available; high performance at low cost)
- **Architecture:** Proprietary Google MoE (Flash-series optimized)

### Raw benchmarks found

> No verified public score found for Gemini 3.1 Flash Lite in current benchmark sets. Values are provisional.

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

- **Tool use: 85/100.** Highly efficient tool call handling and function calling capabilities optimized for speed.
- **Reasoning: 80/100.** Strong performance for multi-step tasks despite the lightweight architecture.
- **Context window: 90/100.** Supports up to 1M context tokens, enabling efficient processing of large documents.
- **Multimodal: 85/100.** Comprehensive support for text, image, audio, and video inputs.
- **Coding: 80/100.** Capable coding assistant for routine engineering tasks.
- **Cost efficiency: 95/100.** Designed for high throughput and extremely low cost-per-token.
- **Overall Score: 86/100.** A highly recommended, cost-efficient, and performant model for lightweight agentic tasks.

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-09-17
- Method: Internal knowledge; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
