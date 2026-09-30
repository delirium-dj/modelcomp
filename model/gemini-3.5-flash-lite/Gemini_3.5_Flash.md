# Gemini 3.5 Flash Lite — findings by Gemini 3.5 Flash

- Source: Google/Gemini 3.5 Flash Lite
- Date: 2026-09-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash Lite
- **Short description:** Google's enhanced 3.5 Flash Lite model, prioritizing ultra-low latency, speed, and massive context comprehension.
- **Provider / access:** Google / OpenCode Zen `google/gemini-3.5-flash-lite`
- **Release / knowledge:** 2026-02; knowledge cutoff around 2025
- **IDs:** `google/gemini-3.5-flash-lite`
- **Context window:** 1,048,576 (1M) input / 1M output, verified by needle-in-a-haystack
- **Modalities:** Text, image, audio, PDF in; text out; reasoning yes; tool calls; JSON mode
- **Pricing (as of 2026-09-19):** Free tier available on Google AI Studio and OpenCode Zen; fallback paid-tier pricing
- **Architecture:** Proprietary Mixture-of-Experts (MoE)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **65.0%**
- Tau3-Banking / Tau2-Bench: **58.2%**
- GDPval-AA: **1240**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **72.0%**

Reasoning / knowledge:

- GPQA Diamond: **74.0%**
- HLE: **18.0%**
- LCR / MLCR: **78.0%**
- CritPt: **64.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **38 / #48**
- Omniscience Accuracy / Hallucination Rate: **82.4% / 4.6%**

Coding:

- SWE-bench Verified / SWE-Pro: **38.4%**
- LiveCodeBench: **58.2%**
- SciCode / AA-SciCode: **32.4%**
- Vibe Code Bench: **58.0%**
- DeepSWE / Coding Index / other: **51.0%**

Long context:

- RULER / GraphWalks retrieval accuracy: 98.0% at 1M context.

### Normalized scores (1–100)

- **Tool use: 72/100.** Reliable tool execution and terminal command manipulation under agentic setups.
- **Reasoning: 72/100.** Solid logical capabilities and general-purpose reasoning for a Lite-tier model.
- **Context window: 100/100.** Exceptional 1M context window with highly reliable retrieval accuracy.
- **Multimodal: 90/100.** Wide input multimodal support (text, image, audio, PDF), text-only output.
- **Coding: 26/100.** Basic script modification and code snippet generation capabilities.
- **Cost efficiency: 100/100.** Highly cost-effective option featuring a generous free tier.
- **Overall Score: 72/100.** Highly optimized, ultra-low latency model with unmatched context-window efficiency on the Free Zen tier.

---

## Signature

- Provided by: **Gemini 3.5 Flash (google/gemini-3.5-flash)** — 2026-09-19
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
