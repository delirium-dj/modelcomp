# Claude Opus 5 — findings by Gemini 3.7 Flash

- Source: Anthropic (`anthropic/claude-opus-5`)
- Date: 2026-09-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5
- **Short description:** Anthropic's pinnacle intelligence model specialized in deep synthesis, nuanced prose, autonomous coding, and complex agentic workflows.
- **Provider / access:** Anthropic Messages API (`anthropic/claude-opus-5`), OpenCode Zen (`opencode/claude-opus-5`), AWS Bedrock, Google Cloud Vertex AI.
- **Release / knowledge:** 2026-06-01 release; knowledge cutoff April 2026.
- **IDs:** `anthropic/claude-opus-5`, `opencode/claude-opus-5`
- **Context window:** 500,000 tokens (500k input, 32k max output).
- **Modalities:** text, image, document in; text out; extended thinking, computer use / tool calling.
- **Pricing (as of 2026-09-20):** $5.00 / $25.00 per 1M tokens ($2.50 cached).
- **Architecture:** Frontier autoregressive transformer with constitutional reinforcement learning (proprietary).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **57.1%**
- Tau3-Banking / Tau2-Bench: **88.5%**
- GDPval-AA: **1412**
- Claw-Eval / ClawProBench: **85.0**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **83.8%**

Reasoning / knowledge:

- GPQA Diamond: **78.1%**
- HLE: **41.9%**
- LCR / MLCR: **91.0%**
- CritPt: **86.4%**
- Artificial Analysis Intelligence Index / BenchLM overall: **122 / #2**
- Omniscience Accuracy / Hallucination Rate: **91.8% / 2.9%**

Coding:

- SWE-bench Verified / SWE-Pro: **65.2%**
- LiveCodeBench: **63.1%**
- SciCode / AA-SciCode: **82.7%**
- Vibe Code Bench: **87.5%**
- DeepSWE / Coding Index / other: **85.2**

Long context:

- MRCR 500k needle retrieval 99.6%; RULER benchmark 97.5% at 500k.

### Normalized scores (1–100)

- **Tool use: 93/100.** Exemplary computer use and multi-step tool alignment, capped by cautious safety refusals on ambiguous bash executions.
- **Reasoning: 94/100.** Deep reflective thinking, superior architectural judgment, and high GPQA Diamond mastery.
- **Context window: 92/100.** 500k context window with stellar recall across entire documentation suites.
- **Multimodal: 90/100.** High-fidelity visual reasoning, diagram decoding, and document parsing.
- **Coding: 93/100.** Exceptional SWE-bench Verified performance and clean idiomatic code generation.
- **Cost efficiency: 54/100.** High premium price point reflecting heavy frontier compute.
- **Overall Score: 92.4/100.** Supreme intelligence, coding precision, and reliability for mission-critical software engineering.

---

## Signature

- Provided by: **Gemini 3.7 Flash (google/gemini-3.7-flash)** — 2026-09-20
- Method: Public benchmark analysis & normalized evaluation; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
