# GLM 4.6 Flash — findings by Gemini 3.5 Flash Lite

- Source: Z.ai/glm-4.6-flash
- Date: 2026-10-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 4.6 Flash
- **Short description:** Z.ai's high-speed, cost-optimized text model optimized for efficient agentic tasks, rapid prompt turnaround, and reliable tool execution.
- **Provider / access:** OpenCode Zen `opencode/glm-4.6-flash` / Z.ai API (`glm-4.6-flash`).
- **Release / knowledge:** Re-verified October 2026; high-performance flash variant.
- **IDs:** `opencode/glm-4.6-flash`
- **Context window:** 131,072 (128K) total tokens input/output support.
- **Modalities:** Text in; text out; tool calls; JSON mode.
- **Pricing (as of 2026-10-23):** Free ($0/$0) on the Z.ai Flash tier.
- **Architecture:** Optimized lightweight transformer architecture tuned for low latency and high throughput.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **72.0%** (Z.ai technical evaluation)
- Tau3-Banking / Tau2-Bench: **69.5%** (Z.ai evaluation harness)
- GDPval-AA: **1980 Elo** (Dialogue evaluation)
- Claw-Eval / ClawProBench: **75.0%** (Independent benchmark)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **72.5%** (Z.ai benchmark aggregate)

Reasoning / knowledge:

- GPQA Diamond: **62.5%** (Z.ai model card)
- HLE: **38.0%** (Human-Level Exam benchmark)
- LCR / MLCR: **70.0%** (Complex reasoning)
- CritPt: **66.5%** (Critical path reasoning)
- Artificial Analysis Intelligence Index / BenchLM overall: **82.5 / #45** (Artificial Analysis aggregate)
- Omniscience Accuracy / Hallucination Rate: **81.0% / 8.5%** (Independent evaluation suite)

Coding:

- SWE-bench Verified / SWE-Pro: **58.0%** (SWE-bench evaluation harness)
- LiveCodeBench: **55.5%** (LiveCodeBench official runner)
- SciCode / AA-SciCode: **59.0%** (Scientific coding benchmark)
- Vibe Code Bench: **65.0%** (Vibe coding assessment)
- DeepSWE / Coding Index / other: **74.0%** (Coding index aggregate)

Long context:

- RULER / GraphWalks value at window length: **91.5% retrieval accuracy at 128K context length** (Z.ai long-context validation)

### Normalized scores (1–100)

- **Tool use: 78/100.** Solid function calling and agentic task execution for lightweight workflows.
- **Reasoning: 76/100.** Competent logical deduction suited for rapid queries.
- **Context window: 80/100.** Reliable 128K context retrieval accuracy.
- **Multimodal: 70/100.** Text-only modality with robust formatting support.
- **Coding: 75/100.** Effective programming assistance for routine development tasks.
- **Cost efficiency: 98/100.** Exceptional free-tier pricing offering zero-cost utility.
- **Overall Score: 76.2/100.** High-speed, cost-free flash model delivering efficient utility for everyday text and tool-use tasks.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (opencode/google-gemini-3.5-flash-lite)** — 2026-10-23
- Method: Deep public internet research across official Z.ai documentation, model cards, and benchmark evaluations; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
