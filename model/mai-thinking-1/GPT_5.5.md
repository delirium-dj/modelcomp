# MAI-Thinking-1 — findings by GPT 5.5

- Source: Microsoft AI (`mai-thinking-1`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MAI-Thinking-1
- **Short description:** Microsoft AI's first reasoning model, aimed at math, coding, enterprise planning, and multi-step reasoning.
- **Provider / access:** Microsoft Foundry preview and MAI API-style routes.
- **Release / knowledge:** Announced June 2026; cutoff not stated.
- **IDs:** `mai-thinking-1`.
- **Context window:** Microsoft paper uses **256K** total context for agentic coding evaluations; some coverage reports 128K.
- **Modalities:** Text/code reasoning; no verified native multimodal support.
- **Pricing (as of 2026-10-08):** Third-party pricing references report about **$2/M input** on some routes; official Azure pricing should be checked for deployment.
- **Architecture:** Microsoft reasoning model, reported as midsized with about **35B active parameters** in press coverage.

### Raw benchmarks found

Agent / tool use:

- Microsoft paper says agentic coding evaluations use a 256K context length.

Reasoning / knowledge:

- Microsoft describes MAI-Thinking-1 as matching leading models on key software engineering benchmarks and advanced math in its weight class.

Coding:

- Built for software engineering and coding evaluations; exact SWE-bench value not recovered from snippets.

Long context:

- Paper reports **256K** context for agentic coding evaluations.

### Normalized scores (1–100)

- **Tool use: 68/100.** Agentic coding evaluation context and enterprise planning focus support solid tool credit.
- **Reasoning: 74/100.** Microsoft's first-party paper positions it strongly in math and coding.
- **Context window: 78/100.** 256K context is strong.
- **Multimodal: 20/100.** No native multimodal support verified.
- **Coding: 72/100.** Coding is a primary benchmark domain.
- **Cost efficiency: 72/100.** Midsized model aims at cost efficiency, but exact route pricing varies.
- **Overall Score: 62/100.** Half-up mean of the five quality dimensions; best fit is Microsoft-stack reasoning and coding workflows.

---

## Signature

- Provided by: **GPT 5.5 (openai/gpt-5.5)** — 2026-10-08
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

