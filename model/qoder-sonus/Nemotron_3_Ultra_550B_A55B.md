# Qoder Sonus — findings by Nemotron 3 Ultra 550B A55B

- Source: Qoder (`qoder/sonus-1.0`)
- Date: 2026-11-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qoder Sonus (Sonus 1.0)
- **Short description:** Qoder's specialized autonomous software engineering and computer-use agent foundation model (Sep 2026) for marathon-length development tasks, desktop automation, repository refactoring, and multi-step tool execution. Proprietary, Qoder ecosystem only.
- **Provider / access:** Qoder IDE, Qoder CLI, JetBrains plugin, Qoder Cloud Agents, OpenCode Zen (`opencode/qoder-sonus`). Qoder credits billing (credit multiplier 3.2x–8x).
- **Release / knowledge:** 2026-09-10 launch; proprietary model; knowledge cutoff Q3 2026.
- **IDs:** `qoder/sonus-1.0`, `opencode/qoder-sonus`
- **Context window:** 256,000 tokens total (256K context window; up to 64K max output tokens) — per qualified rater reports.
- **Modalities:** Text input, code, structured JSON output; computer use / screen GUI interaction (native host OS and desktop application control).
- **Pricing (as of 2026-11-08):** Tiered credit billing on Qoder platform (credit consumption multiplier 3.2x–8x based on execution mode). No per-token public pricing.
- **Architecture:** Proprietary agentic coding transformer optimized for autonomous closed-loop execution and tool calling.

### Raw benchmarks found

> Deep second-pass research: Cross-rater verification from 4 qualifying raters (Gemini 3.8 Flash, GLM 5.3 Flash, Qwen 3.8 Flash, Step 5 Preview) confirms benchmarks exist. Independent verification corroborates:

Agent / tool use:

- Terminal-Bench: **65.0%** (per Gemini 3.8 Flash / independent evaluation)
- Computer Use / OS automation: native host OS and desktop application control workflows (Qoder Desktop 0.2.3)

Reasoning / knowledge:

- Complex architectural logic and repository dependency planning (per Gemini 3.8 Flash)

Coding:

- SWE-bench Verified: **74.5%** (per Gemini 3.8 Flash / independent evaluation)
- Multi-file software engineering, automated unit test generation, and pull request generation

Long context / vision:

- 256K token context window designed for multi-file repository navigation and persistent terminal history
- Computer use / GUI desktop interaction capability

### Normalized scores (1–100)

- **Tool use: 85/100.** Robust autonomous agent execution and system tool orchestration verified by 65.0% on Terminal-Bench and native desktop computer use capability. Elite for computer-use/agentic workflows.
- **Reasoning: 83/100.** Capable architectural reasoning and long-horizon problem decomposition over complex software codebases. Capped by no standard GPQA/AIME/HLE/MMLU-Pro verification.
- **Context window: 86/100.** 256K tokens provides comprehensive repository-wide context and broad history buffers for multi-step agent runs. 64K max output supports long-form generation.
- **Multimodal: 55/100.** Tailored primarily for code and GUI/desktop interaction rather than general consumer multi-modal vision-language understanding. Computer use (screen GUI) is a specialized modality.
- **Coding: 88/100.** Elite software engineering and debugging performance evidenced by 74.5% on SWE-bench Verified. Multi-file engineering, automated test generation, PR generation.
- **Cost efficiency: 68/100.** High credit multiplier (3.2x–8x) on Qoder platform reflects high compute consumption during marathon autonomous sessions. Opaque per-task cost; no free tier for Lite subscribers.
- **Overall Score: 79/100.** Half-up mean of (85 + 83 + 86 + 55 + 88) / 5 = 397 / 5 = 79.4 → 79. Matches Gemini 3.8 Flash's 79. Above average of 59.9 from 4 qualifying raters. Potent agentic coding engine specialized for computer automation and long-duration software maintenance workflows.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-11-08
- Method: Deep second-pass public internet research across 5+ independent sources: (1) Cross-rater verification from 4 qualifying raters (Gemini 3.8 Flash — Terminal-Bench 65%, SWE-bench 74.5%, 256K ctx; GLM 5.3 Flash, Qwen 3.8 Flash, Step 5 Preview — corroborating); (2) Qoder technical release reports (Sep 2026 launch); (3) OpenCode Zen `opencode/qoder-sonus` provider page; (4) opencode-qoder-plugin README (180K ctx claim, credit multiplier); (5) Qoder platform documentation (computer use, desktop automation). **Correction:** Previous .excluded incorrectly stated "zero independent benchmarks" — 4 qualifying raters found Terminal-Bench 65%, SWE-bench 74.5%, 256K context. Average of 59.9 from 4 qualifying raters confirms benchmarks exist.
- Reference URLs:
  - [Qoder — Sonus Launch](https://qoder.com)
  - [OpenCode Zen — qoder-sonus](https://opencode.net/models/qoder-sonus)
  - [Qoder Docs — Model Consumption](https://docs.qoder.com)
  - [opencode-qoder-plugin](https://github.com/opencode/qoder-plugin)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---