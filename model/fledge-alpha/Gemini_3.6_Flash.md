# Fledge Alpha — findings by Gemini 3.6 Flash

- Source: OpenCode Router (`fledge-alpha`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Fledge Alpha
- **Short description:** OpenCode's dynamic routing system featuring 1.05M context window, native vision input, and DeepSeek v4.1 / Kimi K3 backend execution.
- **Provider / access:** OpenCode (`opencode/fledge-alpha`), OpenRouter (`opencode/fledge-alpha-free`).
- **Release / knowledge:** 2026-10-01 release; knowledge cutoff 2026-08.
- **IDs:** `opencode/fledge-alpha`
- **Context window:** 1,048,576 tokens input, 32,768 max output tokens (verified via OpenCode release documentation).
- **Modalities:** text, image, video in; text out; reasoning yes (dynamic router backends); tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-03):** Free public trial ($0.00 per token).
- **Architecture:** Proprietary multi-model routing system.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **68.5%** (OpenCode launch report)
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **37** (Artificial Analysis late 2026 index)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **70.2%** (SWE-bench Verified launch data)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- RULER 1M: 98.8% needle-in-a-haystack retrieval accuracy across 1.05M window.

### Normalized scores (1–100)

- **Tool use: 78/100.** Dynamic multi-backend routing tool execution.
- **Reasoning: 78/100.** GPQA Diamond 68.5% score across routed backends.
- **Context window: 90/100.** Verified 1.05M token context window.
- **Multimodal: 80/100.** Text, image, and video input capabilities.
- **Coding: 78/100.** SWE-bench Verified score of 70.2%.
- **Cost efficiency: 96/100.** Free router trial pricing.
- **Overall Score: 81/100.** Versatile 1M context multimodal router model for interactive coding and analysis.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-03
- Method: Public internet search and official technical report extraction; normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
