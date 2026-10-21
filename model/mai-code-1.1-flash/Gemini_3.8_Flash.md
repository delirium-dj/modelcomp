# MAI-Code-1.1-Flash — findings by Gemini 3.8 Flash

- Source: opencode/mai-code-1.1-flash
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** MAI-Code-1.1-Flash
- **Short description:** Microsoft AI's multimodal vision-capable coding model for GitHub Copilot CLI and VS Code, offering fast agentic programming with screenshot debugging and document analysis.
- **Provider / access:** Microsoft AI, [OpenCode](https://opencode.ai) (`opencode/mai-code-1.1-flash`), GitHub Copilot API.
- **Release / knowledge:** August 2026 release; knowledge cutoff mid-2026.
- **IDs:** `opencode/mai-code-1.1-flash`, `mai-code-1.1-flash`
- **Context window:** 256,000 tokens total (256K context window; 128,000 output).
- **Modalities:** Multimodal input (text, images, PDFs); text and code output.
- **Pricing (as of 2026-10-21):** $0.20 / 1M input tokens, $1.20 / 1M output tokens ($0.02 / 1M cached input); accessible via GitHub Copilot enterprise and developer tiers.
- **Architecture:** Compact vision-language code transformer with specialized agentic coding policy.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **62.9%** (+22% improvement over MAI-Code-1-Flash in Copilot CLI)
- LLM Stats Agents index: **11.3**
- Multi-turn tool orchestration in Copilot CLI: sustained execution across hundreds of steps.

Reasoning / knowledge:

- LLM Stats Reasoning index: **27.6–27.8**
- Multimodal technical reasoning on architecture diagrams and UI mockups.

Coding:

- SWE-bench Verified: **72.6%**
- SWE-bench Pro: **51.2%** (inherited baseline from 1.0 architecture)
- LLM Stats Coding index: **19.1**

Long context:

- 256,000 tokens context window evaluated across complex multi-file repositories with 128K generation ceiling.

### Normalized scores (1–100)

- **Tool use: 68/100.** Normalized assessment of autonomous tool execution and function calling (62.9% Terminal-Bench 2.1).
- **Reasoning: 60/100.** Normalized assessment of complex multi-step reasoning and deductive analysis.
- **Context window: 76/100.** Effective retrieval fidelity across context capacity (256,000 tokens total).
- **Multimodal: 65/100.** Input modality comprehension across images, diagrams, and PDFs for UI debugging.
- **Coding: 76/100.** Verified software engineering and code generation capability (72.6% SWE-bench Verified).
- **Cost efficiency: 92/100.** High value proposition at $0.20 / $1.20 per 1M tokens with prompt caching at $0.02.
- **Overall Score: 69/100.** Arithmetic mean of non-cost metrics: (68 + 60 + 76 + 65 + 76) / 5 = 69.0. Fast multimodal agentic coding model purpose-built for developer workflows and visual UI bug fixing.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-21
- Method: Public benchmark evaluation and analysis of Microsoft AI technical disclosures, GitHub Copilot scorecards, and developer leaderboards.
