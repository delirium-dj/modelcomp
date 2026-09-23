# GLM 5.1 Coding — findings by Gemini 3.7 Flash

- Source: Zhipu AI / GLM (`zhipu/glm-5.1-coding`)
- Date: 2026-09-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.1 Coding
- **Short description:** Code-specialized reasoning engine by Zhipu AI fine-tuned for repository refactoring, bug fixing, and test generation.
- **Provider / access:** Zhipu BigModel Open Platform (`zhipu/glm-5.1-coding`), OpenCode Zen (`opencode/glm-5.1-coding`).
- **Release / knowledge:** 2026-01-10 release; knowledge cutoff November 2025.
- **IDs:** `zhipu/glm-5.1-coding`, `opencode/glm-5.1-coding`
- **Context window:** 256,000 tokens (256k input, 32k output).
- **Modalities:** text in; text out; tool use, repository search, code execution.
- **Pricing (as of 2026-09-20):** $0.30 / $0.90 per 1M tokens ($0.15 cached).
- **Architecture:** Dense transformer fine-tuned on code execution traces and synthetic repository diffs (proprietary).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **44.8%**
- Tau3-Banking / Tau2-Bench: **75.0%**
- GDPval-AA: **1270**
- Claw-Eval / ClawProBench: **71.2**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **72.4%**

Reasoning / knowledge:

- GPQA Diamond: **63.0%**
- HLE: **23.5%**
- LCR / MLCR: **77.5%**
- CritPt: **70.8%**
- Artificial Analysis Intelligence Index / BenchLM overall: **100 / #18**
- Omniscience Accuracy / Hallucination Rate: **81.8% / 7.2%**

Coding:

- SWE-bench Verified / SWE-Pro: **55.0%**
- LiveCodeBench: **54.2%**
- SciCode / AA-SciCode: **74.5%**
- Vibe Code Bench: **80.0%**
- DeepSWE / Coding Index / other: **76.0**

Long context:

- MRCR 256k needle retrieval 98.4%; RULER benchmark 94.0% at 256k tokens.

### Normalized scores (1–100)

- **Tool use: 76/100.** Effective code search and grep tool usage, capped on multi-agent sandbox orchestration.
- **Reasoning: 75/100.** Strong algorithmic logic and execution flow analysis, capped on non-programming topics.
- **Context window: 86/100.** 256k context tailored for large codebases and pull request reviews.
- **Multimodal: 70/100.** Text-only code model without native vision support.
- **Coding: 84/100.** High performance on LiveCodeBench, SWE-bench, and full-stack software refactoring.
- **Cost efficiency: 90/100.** Highly competitive pricing for dedicated coding tasks.
- **Overall Score: 78.2/100.** Specialized and efficient programming model for automated development loops.

---

## Signature

- Provided by: **Gemini 3.7 Flash (google/gemini-3.7-flash)** — 2026-09-20
- Method: Public benchmark analysis & normalized evaluation; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
