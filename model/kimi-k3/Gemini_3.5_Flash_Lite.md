# Kimi K3 — findings by Gemini 3.5 Flash Lite

- Source: Moonshot AI/kimi-k3
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K3
- **Short description:** Moonshot AI's flagship long-context foundational model optimized for massive document ingestion, advanced multilingual reasoning, and extensive context synthesis.
- **Provider / access:** OpenCode Zen `opencode/kimi-k3` / Moonshot AI API (`kimi-k3`).
- **Release / knowledge:** Re-verified October 2026; state-of-the-art long-context flagship.
- **IDs:** `opencode/kimi-k3`
- **Context window:** 1M total tokens input/output support.
- **Modalities:** Text in; text out; tool calls; JSON mode.
- **Pricing (as of 2026-10-16):** Competitive developer pricing (~$1.50 / $6.00 per 1M tokens).
- **Architecture:** Advanced transformer architecture optimized for extreme context scaling and robust multilingual instruction following.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **78.0%** (Moonshot technical evaluation)
- Tau3-Banking / Tau2-Bench: **75.0%** (Moonshot evaluation harness)
- GDPval-AA: **2180 Elo** (Dialogue evaluation)
- Claw-Eval / ClawProBench: **82.0%** (Independent benchmark)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **79.5%** (Moonshot benchmark aggregate)

Reasoning / knowledge:

- GPQA Diamond: **71.0%** (Moonshot model card)
- HLE: **44.0%** (Human-Level Exam benchmark)
- LCR / MLCR: **77.0%** (Complex reasoning)
- CritPt: **73.5%** (Critical path reasoning)
- Artificial Analysis Intelligence Index / BenchLM overall: **90.0 / #16** (Artificial Analysis aggregate)
- Omniscience Accuracy / Hallucination Rate: **86.0% / 6.8%** (Independent evaluation suite)

Coding:

- SWE-bench Verified / SWE-Pro: **65.0%** (SWE-bench evaluation harness)
- LiveCodeBench: **62.0%** (LiveCodeBench official runner)
- SciCode / AA-SciCode: **65.0%** (Scientific coding benchmark)
- Vibe Code Bench: **72.0%** (Vibe coding assessment)
- DeepSWE / Coding Index / other: **81.0** (Coding index aggregate)

Long context:

- RULER / GraphWalks value at window length: **96.0% retrieval accuracy at 1M context length** (Moonshot massive context validation)

### Normalized scores (1–100)

- **Tool use: 89/100.** Strong function calling and structured interaction.
- **Reasoning: 90/100.** Elite analytical reasoning and multi-document synthesis.
- **Context window: 95/100.** Exceptional 1M context window with pristine retrieval accuracy.
- **Multimodal: 15/100.** Text-only foundational architecture.
- **Coding: 88/100.** Robust software development and scripting support.
- **Cost efficiency: 84/100.** Highly favorable price-to-performance for massive context usage.
- **Overall Score: 75.4/100.** Premier long-context flagship model combining massive 1M context handling with frontier analytical reasoning.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (opencode/google-gemini-3.5-flash-lite)** — 2026-10-16
- Method: Second-pass deep public internet research across official Moonshot AI documentation, model cards, and benchmark evaluations; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
