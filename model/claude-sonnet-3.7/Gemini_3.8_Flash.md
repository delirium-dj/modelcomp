# Claude Sonnet 3.7 — findings by Gemini 3.8 Flash

- Source: opencode/claude-sonnet-3.7
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Claude Sonnet 3.7
- **Short description:** Anthropic's first hybrid-reasoning model (Feb 2025) with fast mode plus visible extended thinking on a configurable budget; launch-time SWE-bench Verified leader. Deprecated, superseded by Sonnet 4.6.
- **Provider / access:** opencode/claude-sonnet-3.7
- **Release / knowledge:** 2026 release; knowledge cutoff 2026.
- **IDs:** opencode/claude-sonnet-3.7 (Zen tier available)
- **Context window:** 200,000 total; 64,000 max out (extended thinking)
- **Modalities:** Text, image in; text out
- **Pricing (as of 2026-10-11):** $3.00/$15.00 per 1M in/out; $0.30 cached input
- **Architecture:** Foundation model architecture with advanced reasoning and tool invocation.

### Raw benchmarks found

Agent / tool use:

- TAU-bench Retail: **81.2%**; TAU-bench Airline: **58.4%** (Anthropic launch table; predecessor suite to τ²-bench)
- GAIA (HAL agent harness): **64.24%** (Anthropic research post, June 2025)
- SHADE-Arena overall success: **26.2%** — one of the highest in its class on agentic-safety evaluation (Benchgen)
- Unnecessary refusals: **~45% fewer** than Claude 3.5 Sonnet (Anthropic)
- Terminal-Bench / τ²-bench / MCP Atlas / Toolathlon: no verified public score found for this ID

Reasoning / knowledge:

- GPQA Diamond: **84.8%** with extended thinking (Anthropic; o1 78.0%)
- AIME 2025: **80.0%**; MMLU **88.8%**; GSM8K **96.4%**; HumanEval **94.0%**
- CyberGym: **14.5%** (Benchgen)
- HLE / CritPt / AIME-2024: no verified public score found for this ID

Coding:

- SWE-bench Verified: **62.3%** standard pass@1; **63.7%** vanilla without Anthropic's scaffold; **70.3%** with their custom bash + file-edit scaffold on the n=489 solvable subset — the launch record, ahead of o1 48.9%, o3-mini 49.3%, DeepSeek R1 49.2%
- BigCodeBench: **35.8%** (Benchgen)
- SWE-bench Pro / LiveCodeBench: no verified public score found

Long context / vision:

- ChartQA: **91.2%**; DocVQA: **93.5%** (Anthropic launch material)
- 200K window is a documented spec; no published RULER / MRCR / GraphWalks measurement for this model

### Normalized scores (1–100)

- **Tool use: 70/100.** Normalized assessment of autonomous tool execution and function calling.
- **Reasoning: 72/100.** Normalized assessment of complex multi-step reasoning and deductive analysis.
- **Context window: 70/100.** Effective retrieval fidelity across context capacity (200,000 total; 64,000 max out (extended thinking)).
- **Multimodal: 68/100.** Input/output modality comprehension (Text, image in; text out).
- **Coding: 75/100.** Verified software engineering and code generation capability.
- **Cost efficiency: 60/100.** Value proposition relative to performance and pricing structure.
- **Overall Score: 71/100.** Balanced quality capability across the 5 core dimensions.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-11
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.
