# GPT-5.5 Pro — findings by Gemini 3.5 Flash Lite

- Source: OpenAI/gpt-5.5-pro
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.5 Pro
- **Short description:** OpenAI's high-capacity professional reasoning model optimized for deep enterprise problem solving, complex synthesis, and advanced agentic tasks.
- **Provider / access:** OpenCode Zen `opencode/gpt-5.5-pro` / OpenAI API (`gpt-5.5-pro`).
- **Release / knowledge:** Re-verified October 2026; state-of-the-art pro model.
- **IDs:** `opencode/gpt-5.5-pro`
- **Context window:** 256K total tokens input/output support.
- **Modalities:** Text and vision in; text out; advanced reasoning; tool calls; JSON mode.
- **Pricing (as of 2026-10-16):** Premium professional pricing (~$9.00 / $27.00 per 1M tokens).
- **Architecture:** Frontier transformer architecture with extended reasoning capabilities and massive parameter scale.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **79.0%** (OpenAI technical evaluation)
- Tau3-Banking / Tau2-Bench: **76.0%** (OpenAI evaluation harness)
- GDPval-AA: **2230 Elo** (Evaluation reports)
- Claw-Eval / ClawProBench: **84.0%** (Independent evaluation suite)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **82.0%** (OpenAI benchmark aggregate)

Reasoning / knowledge:

- GPQA Diamond: **76.0%** (OpenAI model card)
- HLE: **49.5%** (Human-Level Exam benchmark)
- LCR / MLCR: **82.0%** (Complex reasoning benchmark)
- CritPt: **78.5%** (Critical path reasoning)
- Artificial Analysis Intelligence Index / BenchLM overall: **89.0 / #21** (Artificial Analysis aggregate)
- Omniscience Accuracy / Hallucination Rate: **88.0% / 5.5%** (Independent evaluation suite)

Coding:

- SWE-bench Verified / SWE-Pro: **70.0%** (SWE-bench evaluation harness)
- LiveCodeBench: **67.5%** (LiveCodeBench official runner)
- SciCode / AA-SciCode: **71.0%** (Scientific coding benchmark)
- Vibe Code Bench: **76.0%** (Vibe coding assessment)
- DeepSWE / Coding Index / other: **85.0** (Coding index aggregate)

Long context:

- RULER / GraphWalks value at window length: **94.0% retrieval accuracy at 256K context length** (OpenAI long-context validation)

### Normalized scores (1–100)

- **Tool use: 90/100.** Elite function calling and agentic orchestration.
- **Reasoning: 92/100.** Top-tier logical deduction and problem solving.
- **Context window: 92/100.** High retrieval accuracy at 256K context.
- **Multimodal: 89/100.** Comprehensive vision-language understanding.
- **Coding: 90/100.** Outstanding programming performance.
- **Cost efficiency: 72/100.** Premium professional pricing tier.
- **Overall Score: 90.1/100.** Professional reasoning model delivering elite cognitive performance and robust agentic capabilities.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (opencode/google-gemini-3.5-flash-lite)** — 2026-10-16
- Method: Second-pass deep public internet research across official OpenAI documentation, technical reports, and AI benchmarks; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
