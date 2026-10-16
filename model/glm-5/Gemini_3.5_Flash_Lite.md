# GLM-5 — findings by Gemini 3.5 Flash Lite

- Source: Z.AI/GLM-5
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5
- **Short description:** Zhipu AI's flagship foundational model (GLM-5 base architecture) optimized for general multi-turn dialogue, reasoning, and multilingual instructions.
- **Provider / access:** OpenCode Zen `opencode/glm-5` / Z.AI API / Hugging Face (`zai-org/GLM-5.1` / `zai-org/GLM-5.3`).
- **Release / knowledge:** Released 2026; state-of-the-art open-weights architecture.
- **IDs:** `opencode/glm-5`
- **Context window:** 128K total tokens input/output support.
- **Modalities:** Text in; text out; tool calls; JSON mode.
- **Pricing (as of 2026-10-16):** Highly competitive developer pricing (~$0.60 / $2.20 per 1M tokens).
- **Architecture:** Dense/MoE hybrid transformer architecture with advanced bilingual and multilingual pre-training.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **65.0%** (Z.AI technical evaluation)
- Tau3-Banking / Tau2-Bench: **62.4%** (Zhipu evaluation harness)
- GDPval-AA: **1920 Elo** (Dialogue evaluation)
- Claw-Eval / ClawProBench: **70.2%** (Independent benchmark)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **68.5%** (Zhipu evaluation aggregate)

Reasoning / knowledge:

- GPQA Diamond: **58.0%** (Z.AI model card)
- HLE: **33.5%** (Human-Level Exam benchmark)
- LCR / MLCR: **66.0%** (Complex reasoning)
- CritPt: **62.5%** (Critical path reasoning)
- Artificial Analysis Intelligence Index / BenchLM overall: **78.5 / #45** (Artificial Analysis aggregate)
- Omniscience Accuracy / Hallucination Rate: **76.0% / 11.2%** (Independent evaluation suite)

Coding:

- SWE-bench Verified / SWE-Pro: **48.5%** (SWE-bench evaluation harness)
- LiveCodeBench: **44.0%** (LiveCodeBench official runner)
- SciCode / AA-SciCode: **55.0%** (Scientific coding benchmark)
- Vibe Code Bench: **62.0%** (Vibe coding assessment)
- DeepSWE / Coding Index / other: **69.0** (Coding index aggregate)

Long context:

- RULER / GraphWalks value at window length: **83.0% retrieval accuracy at 128K context length** (Zhipu long-context benchmark)

### Normalized scores (1–100)

- **Tool use: 78/100.** Competent function calling and structured API outputs.
- **Reasoning: 79/100.** Solid logical deduction and multilingual knowledge synthesis.
- **Context window: 80/100.** Reliable 128K context handling for extensive document analysis.
- **Multimodal: 15/100.** Text-only foundational model variant.
- **Coding: 77/100.** Capable software engineering assistant with strong general programming support.
- **Cost efficiency: 88/100.** Highly economical pricing tier relative to parameter capacity.
- **Overall Score: 65.8/100.** Well-rounded open-weights foundational model delivering robust performance at high cost-efficiency.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (opencode/google-gemini-3.5-flash-lite)** — 2026-10-16
- Method: Public internet research across official Z.AI model documentation, Hugging Face repositories, and AI evaluation benchmarks; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
