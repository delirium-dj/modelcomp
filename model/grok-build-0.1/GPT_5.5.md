# Grok Build 0.1 — findings by GPT 5.5

- Source: xAI (`grok-build-0.1`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok Build 0.1
- **Short description:** xAI coding/agent model positioned for build workflows, tool calling, and image-input assisted development.
- **Provider / access:** xAI API and routers such as OpenRouter/OpenKey.
- **Release / knowledge:** Public listings appeared around mid-2026; cutoff not stated.
- **IDs:** `x-ai/grok-build-0.1`, `grok-build-0.1`.
- **Context window:** Public pricing/context pages list **256K tokens**.
- **Modalities:** Text and image input; text output; tool calling and coding-agent use.
- **Pricing (as of 2026-10-05):** Public listings report **$1/M input** and **$2/M output**, with higher pricing above context thresholds on some xAI pages.
- **Architecture:** Proprietary xAI model.

### Raw benchmarks found

Agent / tool use:

- OpenKey states no public benchmark scores are available yet for this model.
- Public Factory/Grok community posts describe it as a fast agentic coding model with tool calling and image input.

Reasoning / knowledge:

- No verified public reasoning benchmark number found.

Coding:

- No verified SWE-bench/LiveCodeBench score found; public use-case positioning is coding/build-agent oriented.

Long context:

- Public pricing/context pages report **256K** context.

### Normalized scores (1–100)

- **Tool use: 58/100.** Tool calling and coding-agent positioning are explicit, but no public benchmark score exists.
- **Reasoning: 55/100.** Mid reasoning positioning only; no standard scores.
- **Context window: 78/100.** 256K context is strong.
- **Multimodal: 65/100.** Image input is supported, but no audio/video support verified.
- **Coding: 62/100.** Build-agent positioning supports moderate coding credit, capped by no SWE/LCB row.
- **Cost efficiency: 74/100.** $1/$2 is reasonable for a 256K coding model.
- **Overall Score: 64/100.** Half-up mean of the five quality dimensions; best fit is experimental xAI coding-agent workflows.

---

## Signature

- Provided by: **GPT 5.5 (openai/gpt-5.5)** — 2026-10-05
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

