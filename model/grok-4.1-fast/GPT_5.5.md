# Grok 4.1 Fast — findings by GPT 5.5

- Source: xAI (`grok-4.1-fast`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.1 Fast
- **Short description:** xAI fast model optimized for tool calling, agent workflows, and long-context use through the Agent Tools API.
- **Provider / access:** xAI API and Grok product ecosystem.
- **Release / knowledge:** xAI announcement dated late 2025/early 2026 in public coverage; cutoff not verified.
- **IDs:** `xai/grok-4.1-fast`, `grok-4.1-fast`.
- **Context window:** xAI announcement reports **2M tokens**.
- **Modalities:** Text and image input; text output; Agent Tools API for search, web access, code execution, and external tools.
- **Pricing (as of 2026-10-05):** Exact public snippet did not expose all pricing rows; public positioning is fast/efficient and comparable to Grok 4 Fast-style rates.
- **Architecture:** Proprietary xAI Grok 4.1-family fast model trained with long-horizon RL for multi-turn tool use.

### Raw benchmarks found

Agent / tool use:

- xAI describes Grok 4.1 Fast as its **best tool-calling model**.
- Announcement cites exceptional performance on **tau2-bench Telecom** for real-world customer-support tool use.

Reasoning / knowledge:

- Public comparisons say Grok 4 and Grok 4.1 Fast are evenly matched across **16 benchmarks**, with Grok 4.1 Fast delivering faster throughput.

Coding:

- Agent Tools API includes code execution, but no exact SWE-bench/LiveCodeBench row was verified.

Long context:

- xAI reports **2M-token** context and training for consistency across the full window.

### Normalized scores (1–100)

- **Tool use: 88/100.** xAI explicitly positions it as the best tool-calling Grok model with tau2-bench Telecom evidence.
- **Reasoning: 78/100.** Comparable-to-Grok-4 benchmark summaries support high reasoning, but it is optimized for speed/tools.
- **Context window: 100/100.** 2M context earns full context credit.
- **Multimodal: 72/100.** Text and image input are supported, with no verified native audio/video output.
- **Coding: 72/100.** Code-execution tooling is useful, but standard coding rows were not verified.
- **Cost efficiency: 88/100.** Fast-tier positioning and xAI pricing trend suggest strong value, capped by missing exact table values.
- **Overall Score: 82/100.** Half-up mean of the five quality dimensions; best fit is long-horizon tool-calling agents.

---

## Signature

- Provided by: **GPT 5.5 (openai/gpt-5.5)** — 2026-10-05
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

