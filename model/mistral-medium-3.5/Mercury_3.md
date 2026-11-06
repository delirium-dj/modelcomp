# Mistral Medium 3.5 — findings by Mercury 3

- Source: Mistral AI (Mistral Medium 3.5)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mistral Medium 3.5
- **Short description:** Mistral AI's dense 128B instruction-following model (released April 2026), open-weight under a modified MIT license, powering Le Chat and Vibe. Designed for agentic workflows, coding, and complex multi-step reasoning.
- **Provider / access:** Mistral API (`mistral-medium-3.5`), Mistral AI Studio (Le Chat/Vibe); OpenRouter and other providers (~4).
- **Release / knowledge:** Released April 2026; knowledge cutoff not published.
- **IDs:** `mistralai/mistral-medium-3.5`.
- **Context window:** 256K tokens (262K per some listings).
- **Modalities:** text + image input; text output; reasoning; tool calling; structured outputs; modified MIT open weights.
- **Pricing (as of 2026-11):** $1.50 in / $7.50 out per 1M.
- **Architecture:** dense, 128B (modified MIT).

### Raw benchmarks found

Reasoning / knowledge:

- Instruction Following: strongest eligible category (#55, BenchLM)
- No AA Intelligence Index figure captured in fetched sources

Coding:

- SWE-bench Verified: **77.6%** (The AI Rankings)
- BenchLM composite: 29.6/100 (#181/216, estimated); coding composite 40/100 (LM Market Cap, #312)

Long context:

- 256K verified; no independent long-context retrieval benchmark captured

Multimodal:

- Text+image input, text output

### Normalized scores (1–100)

- **Tool use: 74/100.** Tool calling and structured outputs supported; no verified agentic benchmark captured.
- **Reasoning: 76/100.** Instruction-following strength; no independent index captured.
- **Context window: 80/100.** 256K verified.
- **Multimodal: 74/100.** Text+image input, text output.
- **Coding: 84/100.** SWE-bench Verified 77.6% — strong for an open 128B.
- **Cost efficiency: 62/100.** $1.50/$7.50 — mid-premium for the class; open weights soften total cost for self-hosting.
- **Overall Score: 78/100.** Mean of the five non-cost dims (74+76+80+74+84)/5 = 77.6 → 78. Best-fit: a solid European open-weight mid-tier with strong coding; verify agentic performance before heavy agent use.

---

## Signature

- Provided by: **Mercury 3 (inception/mercury-3)** — 2026-11-06
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Mistral AI Studio docs: Mistral Medium 3.5](https://docs.mistral.ai/get-started/models/)
  - [The AI Rankings: Mistral Medium 3.5 review](https://theairankings.com/mistral/mistral-medium-3-5/)
  - [llm-stats: Mistral Medium 3.5](https://llm-stats.com/models/mistral-medium-3-5)
  - [OpenRouter: mistralai/mistral-medium-3-5](https://openrouter.ai/mistralai/mistral-medium-3-5)
  - [BenchLM: Mistral Medium 3.5 128B](https://benchlm.ai/models/mistral-medium-3-5-128b)
  - [Artificial Analysis: Mistral Medium 3.5](https://artificialanalysis.ai/models/mistral-medium-3-5)
- Future sources: add a new file next to this one using the same headings.
