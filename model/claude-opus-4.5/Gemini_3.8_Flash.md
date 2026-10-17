# Claude Opus 4.5 — findings by Gemini 3.8 Flash

- Source: Anthropic / Claude (`anthropic/claude-opus-4.5`)
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.5
- **Short description:** Anthropic's late-2025 Opus flagship that cut Opus-tier pricing by 67% ($5/$25) while being the first model to cross 80% on SWE-bench Verified; legacy status following the release of the Opus 5 and 5.5 series.
- **Provider / access:** Anthropic API (`claude-opus-4.5-20251124`), OpenRouter, Amazon Bedrock, Google Cloud Vertex AI.
- **Release / knowledge:** 2025-11-24 release; knowledge cutoff Q3 2025.
- **IDs:** `anthropic/claude-opus-4.5` (no Free ID on Zen)
- **Context window:** 200,000 tokens total (200K context window; 64K max output tokens).
- **Modalities:** Text and image input; text, code, structured JSON, tool-calling output; extended thinking with budget controls.
- **Pricing (as of 2026-10-17):** $5.00 / 1M input tokens, $25.00 / 1M output tokens ($0.50 / 1M prompt cache read; $2.50 / $12.50 batch pricing).
- **Architecture:** Frontier dense foundation transformer featuring token-efficient generation modes, extended reasoning budgets, and computer use.

### Raw benchmarks found

Agent / tool use:

- OSWorld: **66.3%**
- Terminal-Bench 2.1: **59.3%** (standard) / **40.9%** (hard variant)
- Tau3-Banking / Tau2-Bench: **88.9%** ($\tau^2$-Bench Retail) / **98.2%** ($\tau^2$-Bench Telecom)
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **87.0%** (with extended thinking budget)
- HLE: **30.8%** (without tools) / **43.4%** (with tools)
- ARC-AGI-2: **37.6%**
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified / SWE-Pro: **80.9%** (SWE-bench Verified)
- LiveCodeBench: **75.0%** (v6 overall) / **73.8%** (competitive subset)
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- 200K token context window with 64K max output tokens; robust retrieval across multi-file codebases and complex multi-turn conversation traces.

### Normalized scores (1–100)

- **Tool use: 88/100.** Outstanding autonomous tool execution, subagent orchestration, and desktop GUI navigation evidenced by 66.3% on OSWorld, 59.3% on Terminal-Bench, and 88.9%–98.2% on Tau2-Bench.
- **Reasoning: 90/100.** Top-tier complex multi-step reasoning, deductive logic, and frontier problem solving demonstrated by 87.0% on GPQA Diamond, 43.4% on HLE (with tools), and 37.6% on ARC-AGI-2.
- **Context window: 82/100.** 200K context capacity with 64K maximum output buffer covers extensive repository migrations and complex document parsing.
- **Multimodal: 70/100.** High-fidelity visual processing across diagrams, user interfaces, and document layouts; text + image in, text out.
- **Coding: 90/100.** Verified software engineering, repository refactoring, and code generation capability evidenced by historic 80.9% on SWE-bench Verified and 75.0% on LiveCodeBench.
- **Cost efficiency: 42/100.** Premium pricing at $5.00 / $25.00 per 1M tokens with prompt caching at $0.50 per 1M tokens.
- **Overall Score: 84/100.** Arithmetic mean of five quality dimensions: (88 + 90 + 82 + 70 + 90) / 5 = 84.0 → 84. Frontier software engineering and agentic reasoning model, superseded in speed, context, and cost by the Claude 5 and 5.5 generation.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-17
- Method: Public internet research into Anthropic releases, official model documentation, independent benchmarks, and OpenRouter listings; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
