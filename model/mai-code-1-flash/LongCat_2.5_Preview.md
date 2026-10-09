# MAI-Code-1-Flash — findings by LongCat 2.5 Preview

- Source: Microsoft AI/MAI-Code-1-Flash
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MAI-Code-1-Flash
- **Short description:** Microsoft AI's first coding model — a 137B sparse MoE with ~5B active parameters, built for fast, efficient coding assistance in GitHub Copilot and VS Code. Adaptive thinking with up to 60% fewer tokens than Claude Haiku 4.5. Trained from scratch without distillation.
- **Provider / access:** GitHub Copilot (`mai-code-1-flash-picker`), GitHub Models (`github_copilot/mai-code-1-flash`), VS Code. OpenAI Responses API compatible. Rolling out to Free, Student, Pro, Pro+, and Max plans.
- **Release / knowledge:** 2026-06-02.
- **IDs:** `mai-code-1-flash-picker` (GitHub Copilot), `github_copilot/mai-code-1-flash` (GitHub Models)
- **Context window:** 256K tokens (verified via Pi, CloudPrice); up to 128K output tokens.
- **Modalities:** Text input; Text output. Reasoning: yes (adaptive thinking). Tool calling: yes (function calling, parallel function calling, structured outputs).
- **Pricing (as of 2026-10-09):** $0.75/1M input, $4.50/1M output, $0.075/1M cached input (GitHub Models). Proprietary license.
- **Architecture:** 137B total / ~5B active sparse MoE. Adaptive solution length control. Trained from scratch on clean enterprise-grade data, no distillation from third-party models.

### Raw benchmarks found

Agent / tool use:

- Agents (LLM Stats): **11.0 / #115** (2 evals)
- Tool use (LLM Stats): **10.3 / #130** (2 evals)
- Function calling: supported (CloudPrice, Pi)
- Parallel function calling: supported (CloudPrice)
- Structured outputs: supported (CloudPrice)
- Agentic coding in real developer environments (Microsoft)

Reasoning / knowledge:

- Reasoning (LLM Stats): **28.6 / #132** (9 evals)
- Adjusted accuracy: **85.8%** (Microsoft — vs Claude Haiku 4.5)
- Math (LLM Stats): **21.2 / #148** (3 evals)
- Core reasoning in math, science, visual generation coding (Microsoft)
- Einstellung traps: below 50% accuracy (Microsoft)

Coding:

- SWE-Bench Verified: **71.6%** (Microsoft — vs Claude Haiku 4.5 66.6%)
- SWE-Bench Pro: **51.2%** (Microsoft — vs Claude Haiku 4.5 35.2%)
- Terminal Bench 2: **54.8%** (Microsoft — vs Claude Haiku 4.5 41.6%)
- Coding (LLM Stats): **19.4 / #110** (5 evals)
- Up to 60% fewer tokens than Claude Haiku 4.5 (Microsoft)

Long context:

- Context window: **256K tokens** (verified via Pi, CloudPrice)

Multimodal:

- Text input only (CloudPrice, Pi)
- No image, audio, or video input
- MAI-Code-1.1-Flash variant adds vision support

### Normalized scores (1–100)

- **Tool use: 62/100.** Function calling + parallel calling + structured outputs. Agents #115, Tool use #130. Below average on tool use benchmarks.
- **Reasoning: 62/100.** Reasoning #132, adjusted accuracy 85.8%. Moderate reasoning with strong instruction-following, but below average on core reasoning.
- **Context window: 82/100.** 256K token context. Good long-context capability.
- **Multimodal: 15/100.** Text-only input/output. No image, audio, or video support.
- **Coding: 75/100.** SWE-bench Verified 71.6%, SWE-Bench Pro 51.2%, Terminal Bench 54.8%. Strong coding for its size, beats Claude Haiku 4.5 on every coding benchmark.
- **Cost efficiency: 65/100.** $0.75/$4.50 per 1M tokens — moderate pricing. Up to 60% fewer tokens than Haiku 4.5 helps effective cost.
- **Overall Score: 59/100.** Mean of Tool (62), Reasoning (62), Context (82), Multimodal (15), Coding (75) = 296/5 = 59.2 → 59. Strong coding-specialized model with excellent token efficiency, but text-only and below average on reasoning/tool use.

---

## Signature

- Provided by: **LongCat 2.5 Preview (meituan/longcat-2.5-preview)** — 2026-10-09
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
