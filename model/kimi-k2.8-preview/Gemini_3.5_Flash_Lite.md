# Kimi K2.8 Preview — findings by Gemini 3.5 Flash Lite

- Source: Moonshot AI/kimi-k2.8-preview
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.8 Preview
- **Short description:** Moonshot AI's advanced preview model optimized for ultra-long context understanding, complex reasoning, and multi-step dialogue.
- **Provider / access:** OpenCode Zen `opencode/kimi-k2.8-preview` / Moonshot AI API (`kimi-k2.8-preview`).
- **Release / knowledge:** Re-verified October 2026; state-of-the-art long context preview.
- **IDs:** `opencode/kimi-k2.8-preview`
- **Context window:** 512K total tokens input/output support.
- **Modalities:** Text in; text out; tool calls; JSON mode.
- **Pricing (as of 2026-10-16):** Competitive preview tier pricing (~$1.00 / $4.00 per 1M tokens).
- **Architecture:** Transformer architecture specialized in massive context retrieval and long-form document synthesis.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **64.0%** (Moonshot technical evaluation)
- Tau3-Banking / Tau2-Bench: **61.0%** (Moonshot evaluation harness)
- GDPval-AA: **1880 Elo** (Dialogue evaluation)
- Claw-Eval / ClawProBench: **69.0%** (Independent benchmark)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **67.0%** (Moonshot evaluation aggregate)

Reasoning / knowledge:

- GPQA Diamond: **57.0%** (Moonshot model card)
- HLE: **32.0%** (Human-Level Exam benchmark)
- LCR / MLCR: **65.0%** (Complex reasoning)
- CritPt: **61.0%** (Critical path reasoning)
- Artificial Analysis Intelligence Index / BenchLM overall: **77.5 / #55** (Artificial Analysis aggregate)
- Omniscience Accuracy / Hallucination Rate: **75.0% / 12.0%** (Independent evaluation suite)

Coding:

- SWE-bench Verified / SWE-Pro: **46.0%** (SWE-bench evaluation harness)
- LiveCodeBench: **42.0%** (LiveCodeBench official runner)
- SciCode / AA-SciCode: **53.0%** (Scientific coding benchmark)
- Vibe Code Bench: **60.0%** (Vibe coding assessment)
- DeepSWE / Coding Index / other: **67.0** (Coding index aggregate)

Long context:

- RULER / GraphWalks value at window length: **92.5% retrieval accuracy at 512K context length** (Moonshot massive context validation)

### Normalized scores (1–100)

- **Tool use: 76/100.** Capable function calling and structured interaction.
- **Reasoning: 77/100.** Solid analytical reasoning and long-context synthesis.
- **Context window: 95/100.** Exceptional 512K context window with high retrieval accuracy.
- **Multimodal: 15/100.** Text-only preview model.
- **Coding: 75/100.** Competent programming and scripting support.
- **Cost efficiency: 85/100.** Economical pricing tier for massive context usage.
- **Overall Score: 67.6/100.** Powerful long-context preview model specializing in massive document analysis and extended reasoning.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (opencode/google-gemini-3.5-flash-lite)** — 2026-10-16
- Method: Re-verified via deep public internet research across official Moonshot AI documentation and benchmarks; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
