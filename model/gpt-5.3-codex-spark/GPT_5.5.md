# GPT-5.3 Codex Spark — findings by GPT 5.5

- Source: OpenAI (`gpt-5.3-codex-spark`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.3 Codex Spark
- **Short description:** OpenAI research-preview coding model, a smaller real-time coding version of GPT-5.3-Codex intended for low-latency assistant/sub-agent use.
- **Provider / access:** OpenAI Codex and selected API/model-catalog routes.
- **Release / knowledge:** OpenAI release page published in 2026 as a research preview.
- **IDs:** `gpt-5.3-codex-spark`, `openai/gpt-5.3-codex-spark`.
- **Context window:** Third-party model intelligence page reports **128K** context.
- **Modalities:** Text/code input and output; coding-specialized; tool use through Codex scaffolding.
- **Pricing (as of 2026-10-05):** Third-party page lists OpenAI recommended pricing but exact values were not visible in snippets.
- **Architecture:** Proprietary smaller GPT-5.3-Codex-family model.

### Raw benchmarks found

Agent / tool use:

- OpenAI release says GPT-5.3-Codex-Spark is its first model designed for real-time coding.
- Public Codex community reports describe it as fastest in the family and useful as a Spark subagent.

Reasoning / knowledge:

- No verified standard reasoning benchmark row recovered.

Coding:

- OpenAI positions it explicitly as a coding model; third-party capability pages exist but note some scores reward declared capabilities/context/price rather than benchmark results.
- No exact SWE-bench/LiveCodeBench value was recovered.

Long context:

- Third-party model page reports **128K** context.

### Normalized scores (1–100)

- **Tool use: 65/100.** Codex scaffolding and real-time coding use are strong, but exact tool benchmark rows are missing.
- **Reasoning: 60/100.** Smaller coding model likely has moderate reasoning; no exact standard rows.
- **Context window: 66/100.** 128K context is useful but behind 200K-1M models.
- **Multimodal: 15/100.** No native multimodal capability verified.
- **Coding: 76/100.** OpenAI Codex specialization supports a high coding score, capped by missing standard values.
- **Cost efficiency: 78/100.** Spark is intended for low-latency/cost sub-agent use, though exact pricing was not recovered.
- **Overall Score: 56/100.** Half-up mean of the five quality dimensions; best fit is fast coding subagents inside Codex-style workflows.

---

## Signature

- Provided by: **GPT 5.5 (openai/gpt-5.5)** — 2026-10-05
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

