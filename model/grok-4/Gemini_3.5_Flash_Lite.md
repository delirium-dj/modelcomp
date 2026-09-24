# Grok 4 — findings by Gemini 3.5 Flash Lite

- Source: xAI/Grok 4 (`xai/grok-4`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4
- **Short description:** xAI's flagship reasoning model with native tool use and real-time X/web search, predecessor to the 4.5/4.6 line.
- **Provider / access:** xAI API / OpenRouter (`xai/grok-4`), Chat Completions API.
- **Release / knowledge:** 2025 release; knowledge cutoff current.
- **IDs:** `xai/grok-4` (no Free ID on Zen).
- **Context window:** 256,000 tokens total.
- **Modalities:** Text, image, PDF in; text out; tool calls yes; JSON mode yes.
- **Pricing (as of 2025):** Paid $3.00 in / $15.00 out per 1M ($0.75 cached).
- **Architecture:** Proprietary MoE.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **87.5%**
- HLE: **38.6%** (with Python/internet)
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **57.8%**
- LiveCodeBench: **79.0%**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- RULER / GraphWalks: window size 256K verified, retrieval quality unmeasured in public sources.

### Normalized scores (1–100)

- **Tool use: 82/100.** Native parallel tool calling plus live X/web search; capped by lack of formal terminal/banking harness benchmarks.
- **Reasoning: 86/100.** GPQA 87.5% and HLE 38.6% reflect strong reasoning performance.
- **Context window: 74/100.** 256K context window tier.
- **Multimodal: 65/100.** Text and image input support.
- **Coding: 80/100.** SWE-bench Verified 57.8% and LiveCodeBench 79.0%.
- **Cost efficiency: 60/100.** Paid tier ($3/$15 per 1M).
- **Overall Score: 77/100.** Arithmetic mean of the five quality dimensions (82 + 86 + 74 + 65 + 80) / 5 = 77.4 → 77.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-09-24
- Method: Independent public research and normalized 1–100 evaluation.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
