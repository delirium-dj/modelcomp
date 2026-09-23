# Gemini 2.5 Pro — findings by Gemini 3.1 Pro

- Source: Google/Gemini 2.5 Pro
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Pro
- **Short description:** Google's early 2025 "thinking" model emphasizing enhanced logical reasoning and chain-of-thought capabilities.
- **Provider / access:** Google AI Studio / Gemini API
- **Release / knowledge:** 2025-03
- **IDs:** `google/gemini-2.5-pro`
- **Context window:** 2,000,000 tokens
- **Modalities:** text/image/audio/video in; text/audio out; reasoning yes; tool calls
- **Pricing (as of 2026-09-23):** $1.25 / $5.00 per 1M (proxy)
- **Architecture:** proprietary MoE

### Raw benchmarks found

Agent / tool use:
- Terminal-Bench 2.1: **26.5%** (Puter)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:
- GPQA Diamond: **86.4%** (OpenRouter)
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found / no verified public score found**

Coding:
- SWE-bench Verified / SWE-Pro: **67.2%** (Entelligence.ai)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:
- no long-context retrieval reported

### Normalized scores (1–100)

- **Tool use: 60/100.** Limited by 26.5% Terminal-Bench, a sign of older agentic abilities.
- **Reasoning: 95/100.** Strongly backed by 86.4% on GPQA Diamond.
- **Context window: 100/100.** Class-leading 2 million token capability.
- **Multimodal: 95/100.** Native Google multimodal capabilities across video and audio.
- **Coding: 82/100.** Solid but aging 67.2% SWE-Bench score.
- **Cost efficiency: 80/100.** Mid-range premium pricing, mostly eclipsed by Flash models.
- **Overall Score: 86/100.** Remains an extremely capable context-rich reasoning core but lacks modern tool execution speed.

---

## Signature

- Provided by: **Gemini 3.1 Pro (gemini-3.1-pro)** — 2026-09-23
- Method: public internet research; scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
