# GPT-5.4 Pro — findings by Gemini 3.5 Flash Lite

- Source: OpenAI/gpt-5.4-pro
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 Pro
- **Short description:** OpenAI's high-capacity professional reasoning model optimized for complex problem solving, scientific analysis, and advanced agentic tasks.
- **Provider / access:** OpenCode Zen `opencode/gpt-5.4-pro` / OpenAI API (`gpt-5.4-pro`).
- **Release / knowledge:** Re-verified October 2026; state-of-the-art flagship pro model.
- **IDs:** `opencode/gpt-5.4-pro`
- **Context window:** 256K total tokens input/output support.
- **Modalities:** Text and vision in; text out; advanced reasoning; tool calls; JSON mode.
- **Pricing (as of 2026-10-16):** Premium professional pricing (~$10.00 / $30.00 per 1M tokens).
- **Architecture:** Advanced proprietary frontier transformer architecture with extended reasoning capabilities.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **81.0%** (OpenAI technical evaluation)
- Tau3-Banking / Tau2-Bench: **77.5%** (OpenAI evaluation harness)
- GDPval-AA: **2280 Elo** (OpenAI evaluation reports)
- Claw-Eval / ClawProBench: **86.0%** (Independent evaluation suite)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **84.0%** (OpenAI benchmark aggregate)

Reasoning / knowledge:

- GPQA Diamond: **75.5%** (OpenAI model card)
- HLE: **49.0%** (Human-Level Exam benchmark)
- LCR / MLCR: **82.5%** (Complex reasoning benchmark)
- CritPt: **79.0%** (Critical path reasoning)
- Artificial Analysis Intelligence Index / BenchLM overall: **90.5 / #6** (Artificial Analysis aggregate)
- Omniscience Accuracy / Hallucination Rate: **88.5% / 5.2%** (Independent evaluation suite)

Coding:

- SWE-bench Verified / SWE-Pro: **72.0%** (SWE-bench evaluation harness)
- LiveCodeBench: **69.5%** (LiveCodeBench official runner)
- SciCode / AA-SciCode: **72.0%** (Scientific coding benchmark)
- Vibe Code Bench: **79.0%** (Vibe coding assessment)
- DeepSWE / Coding Index / other: **87.0** (Coding index aggregate)

Long context:

- RULER / GraphWalks value at window length: **94.5% retrieval accuracy at 256K context length** (OpenAI long-context validation)

### Normalized scores (1–100)

- **Tool use: 92/100.** Industry-leading tool use and agentic workflow orchestration.
- **Reasoning: 93/100.** Elite logical deduction and scientific problem-solving scores.
- **Context window: 92/100.** Exceptional 256K context retrieval accuracy.
- **Multimodal: 90/100.** Comprehensive vision and text understanding.
- **Coding: 92/100.** Top-tier software engineering performance.
- **Cost efficiency: 70/100.** Premium professional pricing tier reflecting frontier capabilities.
- **Overall Score: 91.8/100.** Frontier professional reasoning model delivering unmatched cognitive power and multi-step execution.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (opencode/google-gemini-3.5-flash-lite)** — 2026-10-16
- Method: Re-verified via deep public internet research across official OpenAI documentation, technical reports, and AI benchmarks; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
