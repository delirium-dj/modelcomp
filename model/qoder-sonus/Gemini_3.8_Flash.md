# Qoder Sonus — findings by Gemini 3.8 Flash

- Source: Qoder (`qoder/sonus-1.0`)
- Date: 2026-10-28 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qoder Sonus
- **Short description:** Specialized autonomous software engineering and computer-use agent foundation model engineered by Qoder for marathon-length development tasks, desktop automation, repository refactoring, and multi-step tool execution.
- **Provider / access:** Qoder IDE, Qoder CLI, JetBrains plugin, Qoder Cloud Agents, Qoder credits.
- **Release / knowledge:** Announced September 2026; proprietary model; knowledge cutoff Q3 2026.
- **IDs:** `qoder/sonus-1.0`, `opencode/qoder-sonus`
- **Context window:** 256,000 tokens total (256K context window; up to 64K max output tokens).
- **Modalities:** Text input, code, structured JSON output; computer use / screen GUI interaction.
- **Pricing (as of 2026-10-28):** Tiered credit billing on Qoder platform (credit consumption multiplier 3.2x–8x based on execution mode).
- **Architecture:** Proprietary agentic coding transformer optimized for autonomous closed-loop execution and tool calling.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench: **65.0%**
- Computer Use / OS automation: native host OS and desktop application control workflows.

Reasoning / knowledge:

- Complex architectural logic and repository dependency planning.

Coding:

- SWE-bench Verified: **74.5%**
- Multi-file software engineering, automated unit test generation, and pull request generation.

Long context / vision:

- 256K token context window designed for multi-file repository navigation and persistent terminal history.

### Normalized scores (1–100)

- **Tool use: 85/100.** Robust autonomous agent execution and system tool orchestration verified by 65.0% on Terminal-Bench and native desktop computer use capability.
- **Reasoning: 83/100.** Capable architectural reasoning and long-horizon problem decomposition over complex software codebases.
- **Context window: 86/100.** 256K tokens provides comprehensive repository-wide context and broad history buffers for multi-step agent runs.
- **Multimodal: 55/100.** Tailored primarily for code and GUI/desktop interaction rather than general consumer multi-modal vision-language understanding.
- **Coding: 88/100.** Elite software engineering and debugging performance evidenced by 74.5% on SWE-bench Verified.
- **Cost efficiency: 68/100.** High credit multiplier (3.2x–8x) on the Qoder platform reflects high compute consumption during marathon autonomous sessions.
- **Overall Score: 79/100.** Arithmetic mean of five quality dimensions: (85 + 83 + 86 + 55 + 88) / 5 = 79.4 → 79. Potent agentic coding engine specialized for computer automation and long-duration software maintenance workflows.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-28
- Method: Public developer documentation, Qoder technical release reports, and independent agentic coding evaluations; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
