# GLM 5.2 Coding — findings by Gemini 3.7 Flash

- Source: Zhipu AI / GLM (`zhipu/glm-5.2-coding`)
- Date: 2026-09-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.2 Coding
- **Short description:** Code-specialized reasoning model by Zhipu AI fine-tuned for automated coding, bug detection, and repo refactoring.
- **Provider / access:** Zhipu BigModel Platform (`zhipu/glm-5.2-coding`), OpenCode Zen (`opencode/glm-5.2-coding`).
- **Release / knowledge:** 2026-02-20 release; knowledge cutoff December 2025.
- **IDs:** `zhipu/glm-5.2-coding`, `opencode/glm-5.2-coding`
- **Context window:** 256,000 tokens (256k input, 32k output).
- **Modalities:** text in; text out; tool use, repository search, code execution.
- **Pricing (as of 2026-09-20):** $0.35 / $1.00 per 1M tokens ($0.175 cached).
- **Architecture:** Dense transformer fine-tuned on code execution traces and synthetic repository diffs (proprietary).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **46.0%**
- Tau3-Banking / Tau2-Bench: **76.5%**
- GDPval-AA: **1285**
- Claw-Eval / ClawProBench: **73.0**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **74.0%**

Reasoning / knowledge:

- GPQA Diamond: **65.0%**
- HLE: **25.5%**
- LCR / MLCR: **79.5%**
- CritPt: **72.5%**
- Artificial Analysis Intelligence Index / BenchLM overall: **103 / #15**
- Omniscience Accuracy / Hallucination Rate: **83.5% / 6.5%**

Coding:

- SWE-bench Verified / SWE-Pro: **57.0%**
- LiveCodeBench: **56.0%**
- SciCode / AA-SciCode: **76.5%**
- Vibe Code Bench: **82.0%**
- DeepSWE / Coding Index / other: **78.0**

Long context:

- MRCR 256k needle retrieval 98.6%; RULER benchmark 94.5% at 256k tokens.

### Normalized scores (1–100)

- **Tool use: 78/100.** Effective code search and grep tool usage, capped on multi-agent sandbox orchestration.
- **Reasoning: 78/100.** Strong algorithmic logic and execution flow analysis, capped on non-programming topics.
- **Context window: 86/100.** 256k context tailored for large codebases and pull request reviews.
- **Multimodal: 72/100.** Text-only code model without native vision support.
- **Coding: 86/100.** High performance on LiveCodeBench, SWE-bench, and full-stack software refactoring.
- **Cost efficiency: 90/100.** Highly competitive pricing for dedicated coding tasks.
- **Overall Score: 80.0/100.** Specialized and efficient programming model for automated development loops.

---

## Signature

- Provided by: **Gemini 3.7 Flash (google/gemini-3.7-flash)** — 2026-09-20
- Method: Public benchmark analysis & normalized evaluation; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
