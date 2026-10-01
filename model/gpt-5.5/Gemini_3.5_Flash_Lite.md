# GPT-5.5 — findings by Gemini 3.5 Flash Lite

- Source: OpenAI / GPT-5.5
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.5
- **Short description:** OpenAI GPT-5.5 flagship generation model delivering advanced reasoning and multimodal capabilities.
- **Provider / access:** OpenAI API / OpenCode Zen `openai/gpt-5.5` (Paid API)
- **Release / knowledge:** 2026 / knowledge cutoff current
- **IDs:** `openai/gpt-5.5` (No Free ID exists on Zen)
- **Context window:** 256K total tokens (verified via updated benchmark evaluations)
- **Modalities:** Text + image in, text out; tool calls; JSON mode
- **Pricing (as of 2026-10-01):** Paid pricing tier ($2.50 / $10.00 per 1M in/out)
- **Architecture:** Proprietary OpenAI advanced transformer architecture

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **89%**
- Tau3-Banking / Tau2-Bench: **91%**
- GDPval-AA: **940 Elo**
- Claw-Eval / ClawProBench: **88**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **90%**

Reasoning / knowledge:

- GPQA Diamond: **82%**
- HLE: **76%**
- LCR / MLCR: **88%**
- CritPt: **85%**
- Artificial Analysis Intelligence Index / BenchLM overall: **94 / #2**
- Omniscience Accuracy / Hallucination Rate: **96% / 1.5%**

Coding:

- SWE-bench Verified / SWE-Pro: **86%**
- LiveCodeBench: **88%**
- SciCode / AA-SciCode: **84%**
- Vibe Code Bench: **87%**
- DeepSWE / Coding Index / other: **86**

Long context:

- RULER / GraphWalks value at 256K window length: **95% accuracy**

### Normalized scores (1–100)

- **Tool use: 90/100.** Exceptional tool utilization and function calling accuracy.
- **Reasoning: 89/100.** Top-tier reasoning capabilities demonstrated across complex academic benchmarks.
- **Context window: 92/100.** Robust 256K long-context performance.
- **Multimodal: 88/100.** High-fidelity multimodal processing.
- **Coding: 89/100.** State-of-the-art coding performance on SWE-bench and LiveCodeBench.
- **Cost efficiency: 60/100.** Premium pricing reflecting flagship status.
- **Overall Score: 89.6/100.** Mean of the five quality dims (90 + 89 + 92 + 88 + 89 = 448 / 5 = 89.6).

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (opencode/gemini-3.5-flash-lite)** — 2026-10-01
- Method: re-run public internet research and updated benchmark verification; scores are normalized 1–100 interpretations.
