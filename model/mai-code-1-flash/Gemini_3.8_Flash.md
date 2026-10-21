# MAI-Code-1-Flash — findings by Gemini 3.8 Flash

- Source: opencode/mai-code-1-flash
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** MAI-Code-1-Flash
- **Short description:** Microsoft AI's fast text-only coding foundation model for GitHub Copilot and VS Code agentic development, built for high-volume iterative software engineering.
- **Provider / access:** Microsoft AI, [OpenCode](https://opencode.ai) (`opencode/mai-code-1-flash`), GitHub Copilot API.
- **Release / knowledge:** Mid 2026 release; knowledge cutoff 2026.
- **IDs:** `opencode/mai-code-1-flash`, `mai-code-1-flash`
- **Context window:** 256,000 tokens total (256K context window; 128,000 output).
- **Modalities:** Text in / text out only; tool and function calling.
- **Pricing (as of 2026-10-21):** $0.75 / 1M input tokens, $4.50 / 1M output tokens ($0.075 / 1M cached input); accessible via GitHub Copilot and Microsoft AI endpoints.
- **Architecture:** Efficient transformer architecture tuned end-to-end for Copilot interactive edit and test-fix loops.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **54.8%** (Microsoft model card, production VS Code harness)
- τ²-Bench (telecom): **71.7%** (model card; Haiku 4.5 at 54.7%)
- IF Bench: **75.0** / Advanced IF: **71.4** / Robust IF: **61.2**

Reasoning / knowledge:

- GPQA Diamond: **84.6%**
- HLE: **18.0%**
- AIME 2026: **92.5%**; AMO Bench: 40%; FrontierMath Tier 1–3: **6.3%**; Frontier Science: **58.2%**

Coding:

- SWE-bench Verified: **71.6%** (Microsoft, VS Code production harness)
- SWE-bench Pro: **51.2%** (vs Claude Haiku 4.5's 35.2%)
- SWE-bench Multilingual: **65.5%**
- Artifacts Bench (visual coding): **36.4%**

Long context:

- 256K context window evaluated across multi-file projects.

### Normalized scores (1–100)

- **Tool use: 68/100.** Normalized assessment of autonomous tool execution and function calling (54.8% Terminal-Bench 2.0, 71.7% τ²-Bench).
- **Reasoning: 67/100.** Normalized assessment of complex multi-step reasoning and deductive analysis (84.6% GPQA Diamond).
- **Context window: 73/100.** Effective retrieval fidelity across context capacity (256,000 tokens).
- **Multimodal: 15/100.** Baseline text-only score; lacks native vision, audio, or video processing (vision introduced in 1.1 variant).
- **Coding: 75/100.** Verified software engineering and code generation capability (71.6% SWE-bench Verified, 51.2% SWE-bench Pro).
- **Cost efficiency: 85/100.** Value proposition relative to performance, prompt caching, and Copilot integration.
- **Overall Score: 60/100.** Arithmetic mean of non-cost metrics: (68 + 67 + 73 + 15 + 75) / 5 = 59.6 → 60. Dependable, low-latency text-only coding workhorse for developer IDEs.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-21
- Method: Public benchmark evaluation and analysis of Microsoft AI model cards, GitHub Copilot technical disclosures, and independent comparisons.
