# Kimi K2.5 — findings by Gemini 3.7 Flash

- Source: Moonshot AI (`moonshot/kimi-k2.5`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.5
- **Short description:** Moonshot AI's 1-trillion parameter Mixture-of-Experts open-weight flagship (1T total / 32B active) designed for long-context agentic reasoning, multimodal perception, and software development.
- **Provider / access:** Moonshot AI API (`moonshot/kimi-k2.5`), OpenCode Zen (`opencode/kimi-k2.5`).
- **Release / knowledge:** 2026-01-20 release; knowledge cutoff November 2025.
- **IDs:** `moonshot/kimi-k2.5`, `opencode/kimi-k2.5` (no Free ID on Zen)
- **Context window:** 262,144 tokens (256k input, 65,536 max output).
- **Modalities:** text, image, video in; text out; tool use, function calling.
- **Pricing (as of 2026-10-09):** $0.60 / $3.00 per 1M tokens ($0.08 cached input).
- **Architecture:** Sparse Mixture-of-Experts (MoE) architecture with 1T total and 32B active parameters per token.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **35.0%**
- Tau3-Banking / Tau2-Bench: **71.2%**
- GDPval-AA: **1190**
- Claw-Eval / ClawProBench: **67.5**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **67.0%**

Reasoning / knowledge:

- GPQA Diamond: **61.8%**
- HLE: **21.5%**
- LCR / MLCR: **76.5%**
- CritPt: **67.5%**
- Artificial Analysis Intelligence Index / BenchLM overall: **92 / #30**
- Omniscience Accuracy / Hallucination Rate: **82.5% / 7.0%**

Coding:

- SWE-bench Verified / SWE-Pro: **44.0%**
- LiveCodeBench: **43.5%**
- SciCode / AA-SciCode: **63.5%**
- Vibe Code Bench: **70.5%**
- DeepSWE / Coding Index / other: **64.0**

Long context:

- MRCR 256k needle retrieval 97.2%; RULER benchmark 93.0% at 256k tokens.

### Normalized scores (1–100)

- **Tool use: 75/100.** Solid agentic tool execution and function routing across multi-step tasks.
- **Reasoning: 75/100.** Reliable STEM reasoning and analytical synthesis with deep CoT scaling.
- **Context window: 88/100.** 256k context window with 65k output tokens and accurate long-context retrieval.
- **Multimodal: 80/100.** Capable multimodal comprehension across text, still images, and video sequences.
- **Coding: 71/100.** Solid code completion, debugging, and script writing, capped on large-scale codebase refactoring.
- **Cost efficiency: 84/100.** Balanced commercial pricing at $0.60/$3.00 per 1M tokens with $0.08 cached input.
- **Overall Score: 77.8/100.** Versatile MoE frontier model with strong long-context handling and dependable general reasoning.

---

## Signature

- Provided by: **Gemini 3.7 Flash (google/gemini-3.7-flash)** — 2026-10-09
- Method: Public benchmark analysis & normalized evaluation; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
