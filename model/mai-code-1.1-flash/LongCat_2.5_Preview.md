# MAI-Code-1.1-Flash — findings by LongCat 2.5 Preview

- Source: Microsoft AI/MAI-Code-1.1-Flash
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MAI-Code-1.1-Flash
- **Short description:** Microsoft AI's inference-efficient agentic coding model with native vision, optimized for GitHub Copilot, VS Code, and Copilot CLI. Text-to-text and image-to-text. On-device capable with 3-bit quantization. ~73% lower Copilot list price than MAI-Code-1-Flash.
- **Provider / access:** Microsoft Foundry (`MAI-Code-1.1-Flash`), GitHub Copilot (app, CLI, VS Code), Azure AI. Chat Completions API compatible.
- **Release / knowledge:** 2026-08-11.
- **IDs:** `microsoft/mai-code-1.1-flash` (also `MAI-Code-1.1-Flash` on Azure)
- **Context window:** 256,000 tokens (verified via Azure, LLM Stats, models.dev); up to 64,000 output tokens.
- **Modalities:** Text, Image input; Text output. Reasoning: yes. Tool calling: yes (agentic coding, tool-using developer scenarios).
- **Pricing (as of 2026-10-09):** $0.20/1M input, $1.20/1M output, $0.02/1M cached input. On-device option with 3-bit quantization (120GB+ RAM). Proprietary license.
- **Architecture:** 138B parameters (LLM Stats). Text-to-text and image-to-text coding model. Optimized for fast, efficient assistance in everyday developer workflows.

### Raw benchmarks found

Agent / tool use:

- Agents (LLM Stats): **10.7–11.3 / #108–119** (1 eval)
- Agentic coding in real developer environments, trained with GitHub Copilot harness (Azure)
- Tool-using developer scenarios (Azure)

Reasoning / knowledge:

- Reasoning (LLM Stats): **27.8 / #131** (2 evals)
- Competitive reasoning across math, science, and visual coding tasks (Azure)
- Adaptive solution-length control (Azure)

Coding:

- SWE-Bench Verified: **72.6%** (LLM Stats — vs GPT-5 Codex, MiniMax M3)
- Terminal-Bench 2.1: **62.9%** (LLM Stats — vs MiniMax M3)
- Coding (LLM Stats): **19.1 / #107** (2 evals)
- SWE-Bench Pro: **51.2%** (Microsoft blog — vs Claude Haiku 4.5 35.2%, predecessor MAI-Code-1-Flash)
- Terminal Bench 2: **54.8%** (Microsoft blog — vs Claude Haiku 4.5 41.6%, predecessor)

Long context:

- Context window: **256,000 tokens** (verified via Azure, LLM Stats, models.dev)

Multimodal:

- Text, Image input (Azure, LLM Stats)
- Screenshots to prototypes: understand screenshots, diagrams, designs (Azure)
- Native vision support (models.dev)

### Normalized scores (1–100)

- **Tool use: 62/100.** Agentic coding in real repositories, tool-using scenarios. Agents #108-119. Capable but below frontier on complex agent tasks.
- **Reasoning: 68/100.** Reasoning #131, competitive across math/science/visual coding. Good reasoning for a coding-specialized model.
- **Context window: 82/100.** 256K token context. Good long-context capability for coding workflows.
- **Multimodal: 72/100.** Text, Image input. Screenshots to prototypes. Good visual coding understanding.
- **Coding: 75/100.** SWE-bench Verified 72.6%, Terminal-Bench 2.1 62.9%, SWE-Bench Pro 51.2%. Strong coding for its size, beats Claude Haiku 4.5 on coding benchmarks.
- **Cost efficiency: 90/100.** $0.20/$1.20 per 1M tokens — very affordable, 4.4x cheaper than Claude Haiku 4.5. On-device option with 3-bit quantization.
- **Overall Score: 72/100.** Mean of Tool (62), Reasoning (68), Context (82), Multimodal (72), Coding (75) = 359/5 = 71.8 → 72. Excellent value coding-specialized model with native vision and strong cost efficiency.

---

## Signature

- Provided by: **LongCat 2.5 Preview (meituan/longcat-2.5-preview)** — 2026-10-09
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
