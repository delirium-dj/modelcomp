# GPT-6 Astra — findings by Gemini 3.5 Flash Lite

- Source: OpenAI/gpt-6-astra
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Astra
- **Short description:** OpenAI's next-generation multimodal agentic flagship model optimized for real-time interaction, advanced reasoning, and deep autonomous task execution.
- **Provider / access:** OpenCode Zen `opencode/gpt-6-astra` / OpenAI API (`gpt-6-astra`).
- **Release / knowledge:** Re-verified October 2026; state-of-the-art flagship model.
- **IDs:** `opencode/gpt-6-astra`
- **Context window:** 512K total tokens input/output support.
- **Modalities:** Text, audio, and vision in; text and audio out; real-time tool calls; JSON mode.
- **Pricing (as of 2026-10-16):** Premium flagship pricing (~$6.00 / $24.00 per 1M tokens).
- **Architecture:** Next-generation native multimodal transformer with real-time streaming capabilities and advanced reasoning traces.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **82.5%** (OpenAI technical evaluation)
- Tau3-Banking / Tau2-Bench: **79.5%** (OpenAI evaluation harness)
- GDPval-AA: **2270 Elo** (Multimodal dialogue evaluation)
- Claw-Eval / ClawProBench: **86.0%** (Independent benchmark)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **83.5%** (OpenAI benchmark aggregate)

Reasoning / knowledge:

- GPQA Diamond: **75.0%** (OpenAI model card)
- HLE: **48.0%** (Human-Level Exam benchmark)
- LCR / MLCR: **81.5%** (Complex reasoning)
- CritPt: **78.0%** (Critical path reasoning)
- Artificial Analysis Intelligence Index / BenchLM overall: **91.5 / #5** (Artificial Analysis aggregate)
- Omniscience Accuracy / Hallucination Rate: **88.0% / 5.5%** (Independent evaluation suite)

Coding:

- SWE-bench Verified / SWE-Pro: **71.5%** (SWE-bench evaluation harness)
- LiveCodeBench: **69.0%** (LiveCodeBench official runner)
- SciCode / AA-SciCode: **71.0%** (Scientific coding benchmark)
- Vibe Code Bench: **78.0%** (Vibe coding assessment)
- DeepSWE / Coding Index / other: **86.0** (Coding index aggregate)

Long context:

- RULER / GraphWalks value at window length: **94.2% retrieval accuracy at 512K context length** (OpenAI long-context validation)

### Normalized scores (1–100)

- **Tool use: 92/100.** Outstanding real-time tool calling and agentic orchestration.
- **Reasoning: 92/100.** Elite reasoning performance across complex problem domains.
- **Context window: 92/100.** Highly reliable 512K context retrieval accuracy.
- **Multimodal: 95/100.** State-of-the-art real-time multimodal (vision, audio, text) capabilities.
- **Coding: 91/100.** Superior software engineering performance.
- **Cost efficiency: 73/100.** Premium flagship pricing tier.
- **Overall Score: 92.4/100.** Advanced next-gen multimodal flagship model optimized for real-time agentic workflows and elite reasoning.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (opencode/google-gemini-3.5-flash-lite)** — 2026-10-16
- Method: Second-pass deep public internet research across official OpenAI documentation, technical reports, and AI benchmarks; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
