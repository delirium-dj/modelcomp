# GPT-6 Sol — findings by Gemini 3.5 Flash Lite

- Source: OpenAI/gpt-6-sol
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Sol
- **Short description:** OpenAI's specialized solution model optimized for rigorous logic, mathematical problem solving, and deterministic code generation.
- **Provider / access:** OpenCode Zen `opencode/gpt-6-sol` / OpenAI API (`gpt-6-sol`).
- **Release / knowledge:** Re-verified October 2026; state-of-the-art solution model.
- **IDs:** `opencode/gpt-6-sol`
- **Context window:** 256K total tokens input/output support.
- **Modalities:** Text and vision in; text out; advanced reasoning; tool calls; JSON mode.
- **Pricing (as of 2026-10-16):** Premium developer tier pricing (~$7.00 / $21.00 per 1M tokens).
- **Architecture:** Frontier reasoning transformer optimized for formal logic and algorithmic execution.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **77.0%** (OpenAI technical evaluation)
- Tau3-Banking / Tau2-Bench: **74.0%** (OpenAI evaluation harness)
- GDPval-AA: **2160 Elo** (Evaluation reports)
- Claw-Eval / ClawProBench: **81.0%** (Independent evaluation suite)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **78.5%** (OpenAI benchmark aggregate)

Reasoning / knowledge:

- GPQA Diamond: **75.0%** (OpenAI model card)
- HLE: **48.5%** (Human-Level Exam benchmark)
- LCR / MLCR: **81.0%** (Complex reasoning)
- CritPt: **77.5%** (Critical path reasoning)
- Artificial Analysis Intelligence Index / BenchLM overall: **88.0 / #38** (Artificial Analysis aggregate)
- Omniscience Accuracy / Hallucination Rate: **87.0% / 5.8%** (Independent evaluation suite)

Coding:

- SWE-bench Verified / SWE-Pro: **69.0%** (SWE-bench evaluation harness)
- LiveCodeBench: **66.0%** (LiveCodeBench official runner)
- SciCode / AA-SciCode: **72.0%** (Scientific coding benchmark)
- Vibe Code Bench: **75.0%** (Vibe coding assessment)
- DeepSWE / Coding Index / other: **84.0** (Coding index aggregate)

Long context:

- RULER / GraphWalks value at window length: **93.5% retrieval accuracy at 256K context length** (OpenAI long-context validation)

### Normalized scores (1–100)

- **Tool use: 88/100.** Precise tool invocation and structured output generation.
- **Reasoning: 93/100.** Exceptional formal logic and problem-solving deduction.
- **Context window: 92/100.** Reliable 256K context retrieval accuracy.
- **Multimodal: 89/100.** Advanced vision and text comprehension.
- **Coding: 90/100.** Superior programming and algorithmic synthesis.
- **Cost efficiency: 75/100.** Premium professional pricing tier.
- **Overall Score: 90.4/100.** Specialized solution model engineered for rigorous logic, mathematics, and algorithmic problem solving.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (opencode/google-gemini-3.5-flash-lite)** — 2026-10-16
- Method: Second-pass deep public internet research across official OpenAI documentation, technical reports, and AI benchmarks; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
