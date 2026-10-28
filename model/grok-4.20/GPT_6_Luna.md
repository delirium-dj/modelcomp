# Grok 4.20 — findings by GPT-6 Luna

- Source: xAI/Grok 4.20 0309 Reasoning
- Date: 2026-10-28 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.20
- **Short description:** xAI reasoning model with image input, long context, and tool calling. The canonical reasoning route uses the 0309 checkpoint; the separate multi-agent route is a parallel-agent deployment profile and is not conflated with the reasoning checkpoint.
- **Provider / access:** xAI API model ID `grok-4.20-0309-reasoning` (alias `grok-4.20`); Chat Completions and Responses supported.
- **Release / knowledge:** 0309 checkpoint released March 2026; no verified knowledge cutoff.
- **IDs:** `grok-4.20` resolves to `grok-4.20-0309-reasoning`; xAI also offers 0309 non-reasoning and multi-agent profiles.
- **Context window:** xAI's current API model docs specify 1,000,000 tokens. Artificial Analysis has reported 2M for a separately tested model snapshot; the xAI serving specification is used here.
- **Modalities:** Text and image input, text output; reasoning, function calling, and structured output.
- **Pricing (as of 2026-10-28):** xAI below 200K prompt tokens: $1.25 input, $0.20 cached input, $2.50 output per 1M; at/above 200K: $2.50/$0.40/$5.00. Batch discount is listed as 20%.
- **Architecture:** Proprietary; parameter count and architecture undisclosed.

### Raw benchmarks found

Artificial Analysis comparison reports estimated results for Grok 4.20 0309 Reasoning; the values are not xAI-published scores.

Agent / tool use:

- Artificial Analysis Intelligence Index comparison lists Humanity's Last Exam: **32%** and AA-Omniscience: **13**.
- No verified official Tau2, Toolathlon, or Terminal-Bench result for the reasoning route was found.

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **25** (estimated).
- Humanity's Last Exam: **32%**.
- CritPt: **6%**; AA-LCR v1.1: **68%**.
- Third-party listings report GPQA Diamond around **88.5%**, but the exact snapshot was not corroborated in the primary-source comparison.

Coding:

- No primary-source Grok 4.20 coding benchmark result was verified. Third-party data aggregations are inconsistent, so no raw coding score is asserted.

Long context:

- xAI specifies 1M context; no MRCR/RULER/GraphWalks retrieval score verified.

### Normalized scores (1–100)

- **Tool use: 75/100.** xAI documents function calling and agent capabilities, but no sufficiently detailed route-specific tool benchmark was verified.
- **Reasoning: 78/100.** AA Index 25 (estimated), HLE 32%, and LCR 68% show useful reasoning, though the primary evaluation evidence is limited.
- **Context window: 90/100.** 1M-token capacity reaches the top tier; no retrieval accuracy evidence supports 95–100.
- **Multimodal: 65/100.** Image input is documented; audio/video input and non-text output are not verified for this route.
- **Coding: 65/100.** Coding capability is plausible but no reliable benchmark result was verified, so the rating remains conservative.
- **Cost efficiency: 80/100.** $1.25/$2.50 standard short-context pricing is moderate; long-context pricing doubles once prompts reach 200K.
- **Overall Score: 75/100.** Half-up mean of the five quality dimensions; a capable reasoning/tool model, but public route-specific evaluation evidence remains limited.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna)** — 2026-10-28
- Method: Public research; xAI documentation determines canonical route and pricing. Artificial Analysis comparison figures are explicitly labeled estimates; unsupported coding benchmarks are omitted.
- Sources: [xAI Grok 4.20 reasoning documentation](https://docs.x.ai/developers/models/grok-4.20-reasoning); [xAI API pricing](https://docs.x.ai/developers/pricing); [Artificial Analysis comparison](https://artificialanalysis.ai/models/comparisons/grok-4-20-0309-vs-grok-4); [Cloudflare multi-agent profile](https://developers.cloudflare.com/ai/models/xai/grok-4.20-multi-agent-0309/).
