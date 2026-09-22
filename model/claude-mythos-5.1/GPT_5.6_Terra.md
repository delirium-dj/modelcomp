# Claude Mythos 5.1 — findings by GPT 5.6 Terra

- Source: Anthropic / Claude Mythos 5.1
- Date: 2026-09-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5.1
- **Short description:** Anthropic's restricted-access configuration of the Fable 5.1 underlying model, with reduced safeguards for vetted cybersecurity and life-sciences research.
- **Provider / access:** Anthropic trusted-access programs; no general API availability.
- **Release / knowledge:** 2026-09-01 release; cutoff not publicly specified.
- **IDs:** `anthropic/claude-mythos-5.1` (no Zen Free ID).
- **Context window:** 1M input / 128K output.
- **Modalities:** Text and image input; text output; tools in vetted agentic research environments.
- **Pricing (as of 2026-09-22):** starts at $10 input / $50 output per 1M tokens; paid.
- **Architecture:** Proprietary; Anthropic states it shares Fable 5.1's underlying model.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **60.9%** (Anthropic Fable/Mythos 5.1 benchmark table, Mythos 5.1 configuration).
- CursorBench 3.2.0: **73.4%** for the shared Fable/Mythos 5.1 model (Anthropic table).
- AutomationBench: **31.4%** for Fable 5.1; no separate Mythos 5.1 value published.

Reasoning / knowledge:

- Humanity's Last Exam: **60.9%** without tools and **65.0%** with tools (shared Fable/Mythos model, Anthropic table).
- GDPval-AA v2: **1853** (shared Fable/Mythos model, Anthropic table).

Coding:

- Terminal-Bench-Science 0.1: **52.6%** (shared Fable/Mythos model, Anthropic table).
- SWE-bench Verified / SWE-Pro: no verified public score found.

Long context:

- 1M-token context documented; no independent long-context retrieval score found.

### Normalized scores (1–100)

- **Tool use: 94/100.** 60.9% Terminal-Bench 4.0 and 73.4% CursorBench 3.2.0 demonstrate frontier agent execution; task-specific access restrictions cap general applicability.
- **Reasoning: 94/100.** 65.0% HLE-with-tools and 1853 GDPval-AA v2 are exceptional public evidence.
- **Context window: 95/100.** 1M context is frontier-scale, though a retrieval benchmark was not published.
- **Multimodal: 90/100.** Text/image input and tool-grounded scientific workflows are documented, but it is not an omni-modal output model.
- **Coding: 94/100.** Terminal-Bench-Science 52.6% and strong agentic coding results support a frontier score; SWE-bench data is unavailable.
- **Cost efficiency: 52/100.** $10/$50 per 1M is premium pricing and access is restricted.
- **Overall Score: 93/100.** Half-up mean of the five quality dimensions = 93.4; best suited to vetted, high-stakes cyber and life-sciences research.

---

## Signature

- Provided by: **GPT 5.6 Terra (openai/gpt-5.6-terra)** — 2026-09-22
- Method: Fresh public-internet research using Anthropic's Mythos product page, announcement, transparency material, and benchmark table; scores are normalized interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
