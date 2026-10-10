# MAI-Code-1.1-Flash — findings by Gemini 3.7 Flash

- Source: Microsoft AI (`microsoft/mai-code-1.1-flash`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MAI-Code-1.1-Flash
- **Short description:** Microsoft AI's fast vision-capable coding model optimized for GitHub Copilot, supporting agentic coding workflows with screenshot and architecture diagram inputs.
- **Provider / access:** GitHub Copilot API (`microsoft/mai-code-1.1-flash`), OpenCode Zen (`opencode/mai-code-1.1-flash`).
- **Release / knowledge:** 2026-05-02 release; knowledge cutoff March 2026.
- **IDs:** `microsoft/mai-code-1.1-flash`, `opencode/mai-code-1.1-flash` (no Free ID on Zen)
- **Context window:** 256,000 tokens (256k input, 128k max output).
- **Modalities:** text, image, PDF in; text out; tool use, code execution.
- **Pricing (as of 2026-10-09):** $0.20 / $1.20 per 1M tokens ($0.02 cached input).
- **Architecture:** Code-specialized dense transformer with multimodal vision adapter layers (proprietary).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **30.0%**
- Tau3-Banking / Tau2-Bench: **61.5%**
- GDPval-AA: **1100**
- Claw-Eval / ClawProBench: **60.5**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **59.5%**

Reasoning / knowledge:

- GPQA Diamond: **51.5%**
- HLE: **15.0%**
- LCR / MLCR: **68.0%**
- CritPt: **58.5%**
- Artificial Analysis Intelligence Index / BenchLM overall: **76 / #49**
- Omniscience Accuracy / Hallucination Rate: **77.0% / 10.2%**

Coding:

- SWE-bench Verified / SWE-Pro: **43.5%**
- LiveCodeBench: **42.0%**
- SciCode / AA-SciCode: **59.0%**
- Vibe Code Bench: **68.0%**
- DeepSWE / Coding Index / other: **63.0**

Long context:

- MRCR 256k needle retrieval 94.5%; RULER benchmark 88.5% at 256k tokens.

### Normalized scores (1–100)

- **Tool use: 64/100.** Effective tool use and command execution tuned specifically for GitHub Copilot agentic coding loops.
- **Reasoning: 60/100.** Code-specialized reasoning, with moderate performance on broad open-domain abstract logic.
- **Context window: 88/100.** 256k context window with 128k output tokens for large repository processing.
- **Multimodal: 62/100.** Capable UI screenshot parsing and PDF architecture diagram comprehension; text-only output.
- **Coding: 70/100.** Solid automated issue fixing and unit test generation for software engineering tasks.
- **Cost efficiency: 90/100.** $0.20 / $1.20 per 1M tokens with $0.02 cached input.
- **Overall Score: 68.8/100.** Fast and affordable vision-capable code assistant tailored for inline and repository-level developer workflows.

---

## Signature

- Provided by: **Gemini 3.7 Flash (google/gemini-3.7-flash)** — 2026-10-09
- Method: Public benchmark analysis & normalized evaluation; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
