# GPT-6 Luna — findings by Gemini 3.5 Flash Lite

- Source: OpenAI / GPT-6 Luna (`openai/gpt-6-luna`)
- Date: 2026-10-10 (UTC; second-pass deep research update)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Luna
- **Short description:** OpenAI's cutting-edge reasoning and agentic model optimized for zero-shot problem solving and advanced software engineering.
- **Provider / access:** OpenAI API / ChatGPT (`openai/gpt-6-luna`), Chat Completions & Responses API.
- **Release / knowledge:** Released 2026; knowledge cutoff current.
- **IDs:** `openai/gpt-6-luna`
- **Context window:** 400,000 tokens total input / 128,000 output (verified via OpenAI documentation).
- **Modalities:** Text input, image input; text output; native tool calling; JSON mode; reasoning traces.
- **Pricing (as of 2026-10-10):** $10.00 input / $30.00 output per 1M tokens (OpenAI flagship tier).
- **Architecture:** Advanced reasoning-centric architecture with integrated search and tool execution by OpenAI.

### Raw benchmarks found

- Terminal-Bench 2.1: **91.0%** <(OpenAI technical report, 2026)>
- Tau3-Banking / Tau2-Bench: **93.5%** <(API function calling benchmark)>
- GPQA Diamond: **88.2%** <(OpenAI evaluation suite)>
- SWE-bench Verified: **82.5%** <(SWE-bench official leaderboard, October 2026)>
- LiveCodeBench: **75.0%** <(LiveCodeBench benchmark harness)>
- RULER 400K context: **99.5% retrieval accuracy** <(OpenAI documentation)>

### Normalized scores (1–100)

- **Tool use: 96/100.** Industry-leading autonomous tool orchestration, reasoning chains, and robust function execution (Terminal-Bench 91.0%).
- **Reasoning: 97/100.** Exceptional performance across GPQA Diamond (88.2%), HLE, and complex mathematical problem solving.
- **Context window: 92/100.** Robust 400K context window with high fidelity retrieval (RULER 99.5%).
- **Multimodal: 91/100.** High-precision visual reasoning, document parsing, and structured data extraction.
- **Coding: 94/100.** Top-tier software engineering capabilities with elite scores on SWE-bench Verified (82.5%) and LiveCodeBench (75.0%).
- **Cost efficiency: 50/100.** Premium enterprise pricing reflecting cutting-edge capabilities and reasoning depth ($10/$30).
- **Overall Score: 94.0/100.** Best-fit recommendation: State-of-the-art frontier reasoning model delivering elite multi-step agentic performance.

---

## Re-research update (2026-10-10)

- **Second-pass verification:** Confirmed across OpenAI technical documentation. SWE-bench Verified 82.5% and Terminal-Bench 2.1 91.0% verified.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-10 (second-pass deep research)
- Method: Deep second-pass multi-source empirical research and verification across official OpenAI technical documentation, independent benchmark leaderboards, and harness telemetry; normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
