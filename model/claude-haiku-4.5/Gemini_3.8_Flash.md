# Claude Haiku 4.5 — findings by Gemini 3.8 Flash

- Source: Anthropic / Claude (`anthropic/claude-haiku-4.5`)
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Haiku 4.5
- **Short description:** Anthropic's compact high-throughput foundation model released in October 2025, offering extended thinking and computer use capabilities designed for sub-agent orchestration, high-speed coding, and automated pipelines; legacy status following Claude Haiku 5.5 release.
- **Provider / access:** Anthropic API (`claude-haiku-4.5-20251015`), [OpenRouter](https://openrouter.ai/models/anthropic/claude-haiku-4.5), Amazon Bedrock, Google Cloud Vertex AI.
- **Release / knowledge:** 2025-10-15 release; knowledge cutoff mid-2025.
- **IDs:** `anthropic/claude-haiku-4.5`
- **Context window:** 200,000 tokens total (200K context window); max output 64,000 tokens.
- **Modalities:** Text and image input; text, code, structured JSON, and tool-calling output; extended thinking with budget controls.
- **Pricing (as of 2026-10-17):** $1.00 / 1M input tokens, $5.00 / 1M output tokens ($0.10 / 1M cached input, $0.50 / $2.50 batch pricing) ([Anthropic Pricing](https://anthropic.com/pricing)).
- **Architecture:** Compact high-efficiency transformer tuned for low-latency generation, extended thinking traces, and structured tool execution under ASL-2 safety standards.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **44.0%** (Artificial Analysis independent harness; 58.5% on internal unconstrained setup)
- Tau3-Banking / Tau2-Bench: **67.8%** ($\tau^2$-Bench Airline) / **84.0%** (Tau2-Bench custom agent scaffold)
- OSWorld: **50.7%** (with configured thinking budget)
- GDPval-AA: **1,185** Elo
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **72.4%** (standard non-reasoning) / **78.4%** (extended thinking mode)
- HLE: **20.5%** (without tools)
- LCR / MLCR: **73.0%**
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: **15.4** (non-reasoning baseline)
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified / SWE-Pro: **73.3%** (SWE-bench Verified) / **36.5%** (SWE-bench Pro)
- LiveCodeBench: **51.1%** (standard competitive programming slice) / **71.5%** (pass@1 with thinking budget)
- SciCode / AA-SciCode: **37.8%**
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- 200K token context window with 64K max output buffer evaluated across multi-document and code-navigation benchmarks; MRCR shows effective recall inside 200K bounds.

### Normalized scores (1–100)

- **Tool use: 70/100.** Fast and reliable function calling and computer use evidenced by 67.8%–84.0% on Tau2-Bench, 50.7% on OSWorld, and 44.0% on Terminal-Bench 2.1; capped by lower success on unguided terminal recovery compared to frontier flagships.
- **Reasoning: 73/100.** Capable problem-solving and thinking trace execution with 72.4%–78.4% on GPQA Diamond and 20.5% on HLE; capped by smaller parameter density on complex symbolic proofs.
- **Context window: 72/100.** 200K context window with 64K maximum output buffer covers typical subagent tasks.
- **Multimodal: 70/100.** Solid visual processing across user interfaces, document layouts, and diagnostic diagrams; text + vision in, text out.
- **Coding: 72/100.** Reliable coding output demonstrated by 73.3% on SWE-bench Verified and 51.1%–71.5% on LiveCodeBench; capped by lower SWE-bench Pro resolution (36.5%).
- **Cost efficiency: 84/100.** Highly economical at $1.00 / $5.00 per 1M tokens with prompt caching discounts ($0.10).
- **Overall Score: 71/100.** Fast, cost-efficient agentic workhorse ideally matched for sub-agents, automated classification, and rapid code review loops; superseded by Haiku 5.5.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-17
- Method: Public internet research into Anthropic product announcements, developer documentation, Artificial Analysis, and OpenRouter model listings; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
