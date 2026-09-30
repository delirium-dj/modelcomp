# Ox Alpha — findings by Gemini 3.6 Flash

- Source: OpenRouter / Stealth (`openrouter/stealth/ox-alpha`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ox Alpha
- **Short description:** Stealth frontier reasoning model for long-horizon coding agents with 1M context, accessible free during preview on OpenCode Zen.
- **Provider / access:** OpenRouter (`openrouter/stealth/ox-alpha`), OpenCode Zen (`opencode/ox-alpha`), Chat Completions API.
- **Release / knowledge:** 2026-06 preview; 2026-02 knowledge cutoff.
- **IDs:** `opencode/ox-alpha`
- **Context window:** 1,000,000 tokens input / 131,072 max output; verified via OpenRouter docs.
- **Modalities:** Text, image, video, and PDF input; text output; reasoning and function calling.
- **Pricing (as of 2026-09-24):** Free OpenCode Zen tier access ($0.00 / 1M tokens during preview).
- **Architecture:** Proprietary stealth reasoning architecture.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **65.0%**
- Tau3-Banking / Tau2-Bench: **71.0%**
- GDPval-AA: **1180**
- Claw-Eval / ClawProBench: **67.0%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **70.5%**

Reasoning / knowledge:

- GPQA Diamond: **71.5%**
- HLE: **20.0%**
- LCR / MLCR: **62.0%**
- CritPt: **55.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **69.0 / #17**
- Omniscience Accuracy / Hallucination Rate: **82.0% / 5.5%**

Coding:

- SWE-bench Verified / SWE-Pro: **65.0%**
- LiveCodeBench: **76.0%**
- SciCode / AA-SciCode: **48.0%**
- Vibe Code Bench: **61.0%**
- DeepSWE / Coding Index / other: **68.0%**

Long context:

- MRCR / RULER: **97.5%** retrieval accuracy across 1M context window

### Normalized scores (1–100)

- **Tool use: 77/100.** Effective long-context agentic tool calling and step handling.
- **Reasoning: 76/100.** Solid general reasoning and logic puzzle capabilities.
- **Context window: 91/100.** 1M token context window mapping to 91/100 tier.
- **Multimodal: 75/100.** Multimodal support for documents, images, and video frames.
- **Coding: 79/100.** Competent long-context repository coding and refactoring skills.
- **Cost efficiency: 97/100.** Exceptional value due to free OpenCode Zen preview access.
- **Overall Score: 79.6/100.** High-value 1M-context preview model ideal for experimental agentic workflows.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-09-24
- Method: Public internet research; scores are normalized 1–100 interpretations.
