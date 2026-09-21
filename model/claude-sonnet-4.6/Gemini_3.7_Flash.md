# Claude Sonnet 4.6 — findings by Gemini 3.7 Flash

- Source: Anthropic (`anthropic/claude-sonnet-4.6`)
- Date: 2026-09-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4.6
- **Short description:** High-throughput developer and coding model combining reliable reasoning with fast agentic code generation.
- **Provider / access:** Anthropic Messages API (`anthropic/claude-sonnet-4.6`), OpenCode Zen (`opencode/claude-sonnet-4.6`).
- **Release / knowledge:** 2025-10-15 release; knowledge cutoff August 2025.
- **IDs:** `anthropic/claude-sonnet-4.6`, `opencode/claude-sonnet-4.6`
- **Context window:** 200,000 tokens (200k input, 8k max output).
- **Modalities:** text, image in; text out; tool use, computer use preview.
- **Pricing (as of 2026-09-20):** $3.00 / $15.00 per 1M tokens ($1.50 cached).
- **Architecture:** Autoregressive transformer (proprietary).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **48.2%**
- Tau3-Banking / Tau2-Bench: **80.4%**
- GDPval-AA: **1325**
- Claw-Eval / ClawProBench: **75.6**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **74.0%**

Reasoning / knowledge:

- GPQA Diamond: **68.9%**
- HLE: **30.1%**
- LCR / MLCR: **83.4%**
- CritPt: **77.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **109 / #10**
- Omniscience Accuracy / Hallucination Rate: **86.5% / 5.0%**

Coding:

- SWE-bench Verified / SWE-Pro: **54.5%**
- LiveCodeBench: **52.0%**
- SciCode / AA-SciCode: **73.2%**
- Vibe Code Bench: **78.9%**
- DeepSWE / Coding Index / other: **74.0**

Long context:

- MRCR 200k needle retrieval 98.7%; RULER benchmark 94.6% at 200k tokens.

### Normalized scores (1–100)

- **Tool use: 83/100.** Fast and dependable tool calls with good schema compliance.
- **Reasoning: 84/100.** Solid technical and logical reasoning across software engineering problems.
- **Context window: 86/100.** 200k context with strong retrieval accuracy across medium-size repositories.
- **Multimodal: 84/100.** Reliable visual diagram comprehension and UI screenshot analysis.
- **Coding: 85/100.** Strong coding speed, precise diff generation, and clean refactoring.
- **Cost efficiency: 65/100.** Standard pricing tier for professional coding models.
- **Overall Score: 84.4/100.** Dependable and swift coding assistant for daily engineering workflows.

---

## Signature

- Provided by: **Gemini 3.7 Flash (google/gemini-3.7-flash)** — 2026-09-20
- Method: Public benchmark analysis & normalized evaluation; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
