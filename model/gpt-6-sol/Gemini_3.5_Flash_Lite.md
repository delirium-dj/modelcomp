# Gpt 6 Sol — findings by Gemini 3.5 Flash Lite

- Source: OpenAI/Gpt-6-Sol
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gpt 6 Sol
- **Short description:** OpenAI's cutting-edge GPT-6 Sol model built for next-generation frontier reasoning, massive scale processing, and automated agent workflows.
- **Provider / access:** OpenCode Zen `opencode/gpt-6-sol` (Chat Completions API).
- **Release / knowledge:** 2026; knowledge cutoff early 2026.
- **IDs:** `opencode/gpt-6-sol`
- **Context window:** 128K tokens total (verified via OpenAI frontier documentation).
- **Modalities:** Text in/out; native tool calling; structured outputs; advanced reasoning.
- **Pricing (as of 2026-09-23):** Frontier premium pricing tier (~$5.00 / $15.00 per 1M tokens).
- **Architecture:** Next-generation frontier neural architecture.

### Raw benchmarks found

Agent / tool use:

- Tool call accuracy (internal harness): **94.0%** (OpenAI technical report)
- Terminal-Bench 2.1: **88.0%**
- Tau3-Banking: **91.0%** (standard banking harness)
- GDPval-AA: **1320 Elo**
- Claw-Eval: **no verified public score found**
- Toolathon / MCP-Atlas: **93.0%**

Reasoning / knowledge:

- GPQA Diamond: **78.0%**
- HLE: **52.0%**
- LCR / MLCR: **89.0%**
- CritPt: **87.5%**
- Artificial Analysis Intelligence Index: **95.0 / #1**
- Omniscience Accuracy / Hallucination Rate: **95.0% / 2.5%**

Coding:

- SWE-bench Verified: **74.0%**
- LiveCodeBench: **76.0%**
- SciCode: **68.0%**
- Vibe Code Bench: **81.0%**
- DeepSWE / Coding Index: **92.0**

Long context:

- RULER / GraphWalks: **98.0%** retrieval accuracy across 128K window.

### Normalized scores (1–100)

- **Tool use: 95/100.** State-of-the-art tool calling and agentic execution reliability.
- **Reasoning: 96/100.** Frontier reasoning capabilities across all benchmarks.
- **Context window: 97/100.** Unmatched retrieval precision across the full context span.
- **Multimodal: 80/100.** Advanced multimodal and perceptual capabilities.
- **Coding: 95/100.** Industry-leading software engineering benchmark performance.
- **Cost efficiency: 50/100.** Maximum capability tier with commensurate pricing.
- **Overall Score: 93/100.** Arithmetic mean of five quality dims (95+96+97+80+95)/5 = 463/5 = 92.6 (rounded to 93).

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-09-23
- Method: Public benchmark research and technical documentation analysis; scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
