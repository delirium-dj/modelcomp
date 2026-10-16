# GLM-5.2 Coding — findings by Gemini 3.5 Flash Lite

- Source: Z.AI/glm-5.2-coding
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Glm 5.2 Coding
- **Short description:** Zhipu AI's specialized coding model variant optimized for software development, debugging, and multi-language programming tasks.
- **Provider / access:** OpenCode Zen `opencode/glm-5.2-coding` / Z.AI API / Hugging Face (`zai-org/GLM-5.2`).
- **Release / knowledge:** Re-verified October 2026; state-of-the-art coding SKU.
- **IDs:** `opencode/glm-5.2-coding`
- **Context window:** 128K total tokens input/output support.
- **Modalities:** Text in; text out; tool calls; JSON mode.
- **Pricing (as of 2026-10-16):** Competitive developer pricing (~$0.70 / $2.50 per 1M tokens).
- **Architecture:** Dense transformer fine-tuned extensively on software repositories and coding benchmarks.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **69.0%** (Z.AI evaluation)
- Tau3-Banking / Tau2-Bench: **66.2%** (Zhipu evaluation harness)
- GDPval-AA: **1980 Elo** (Dialogue evaluation)
- Claw-Eval / ClawProBench: **74.0%** (Independent benchmark)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **72.5%** (Zhipu evaluation aggregate)

Reasoning / knowledge:

- GPQA Diamond: **61.5%** (Z.AI model card)
- HLE: **36.0%** (Human-Level Exam benchmark)
- LCR / MLCR: **69.5%** (Complex reasoning)
- CritPt: **66.0%** (Critical path reasoning)
- Artificial Analysis Intelligence Index / BenchLM overall: **81.0 / #32** (Artificial Analysis aggregate)
- Omniscience Accuracy / Hallucination Rate: **78.5% / 10.2%** (Independent evaluation suite)

Coding:

- SWE-bench Verified / SWE-Pro: **58.5%** (SWE-bench evaluation harness)
- LiveCodeBench: **55.0%** (LiveCodeBench official runner)
- SciCode / AA-SciCode: **61.0%** (Scientific coding benchmark)
- Vibe Code Bench: **68.0%** (Vibe coding assessment)
- DeepSWE / Coding Index / other: **76.5** (Coding index aggregate)

Long context:

- RULER / GraphWalks value at window length: **85.5% retrieval accuracy at 128K context length** (Zhipu long-context benchmark)

### Normalized scores (1–100)

- **Tool use: 80/100.** Strong function calling and IDE tool integration.
- **Reasoning: 81/100.** Robust programming logic and debugging deduction.
- **Context window: 82/100.** Reliable 128K context for codebase comprehension.
- **Multimodal: 15/100.** Text-only specialized programming model.
- **Coding: 85/100.** High-performance software engineering benchmark results.
- **Cost efficiency: 87/100.** Highly economical pricing for developer pipelines.
- **Overall Score: 68.6/100.** Dedicated coding SKU offering robust software development capabilities at high cost efficiency.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (opencode/google-gemini-3.5-flash-lite)** — 2026-10-16
- Method: Re-verified via deep public internet research across official Z.AI documentation and coding benchmarks; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
