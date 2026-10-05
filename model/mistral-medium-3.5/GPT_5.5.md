# Mistral Medium 3.5 — findings by GPT 5.5

- Source: Mistral AI (`mistral-medium-3.5`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mistral Medium 3.5
- **Short description:** Mistral's dense 128B multimodal medium-tier model for instruction following, reasoning, coding, and vision tasks.
- **Provider / access:** Mistral API, Hugging Face/open-weight repository, and third-party routers such as OpenRouter/DevPass.
- **Release / knowledge:** Public docs and trackers place release in 2026; cutoff not verified.
- **IDs:** `mistral-medium-3-5`, `mistralai/Mistral-Medium-3.5-128B`.
- **Context window:** **256K** to **262K** tokens depending on provider listing.
- **Modalities:** Text and image input; text output; tool/function calling support through compatible API routes.
- **Pricing (as of 2026-10-05):** Common router pricing is about **$1.50/M input** and **$7.50/M output**.
- **Architecture:** Dense **128B** parameter multimodal model with a custom vision encoder.

### Raw benchmarks found

Agent / tool use:

- BenchLeader tracks Mistral Medium 3.5 benchmark categories and cost/speed data as of 2026-10-03.
- No exact public Toolathlon/Tau score was recovered in accessible snippets.

Reasoning / knowledge:

- Public model reviews describe strong instruction, reasoning, and vision performance near top closed models in selected benchmarks.
- Exact GPQA/HLE values were not recovered from accessible snippets.

Coding:

- Public reviews and benchmark trackers include coding categories; no exact SWE-bench/LiveCodeBench value was recovered here.

Long context:

- Provider/model listings consistently report about **256K** context.

### Normalized scores (1–100)

- **Tool use: 66/100.** Function calling and tracked benchmark coverage support a solid score, capped by missing exact tool rows.
- **Reasoning: 74/100.** 128B dense architecture and public benchmark coverage support strong reasoning below frontier leaders.
- **Context window: 78/100.** 256K context is strong but below 1M/2M models.
- **Multimodal: 70/100.** Image input and custom vision encoder are verified strengths.
- **Coding: 72/100.** Coding support is credible, but exact SWE/LCB evidence was not recovered.
- **Cost efficiency: 72/100.** $1.50/$7.50 is fair for a 128B dense model, though not cheap.
- **Overall Score: 72/100.** Half-up mean of the five quality dimensions; best fit is open/portable multimodal work where Mistral compatibility matters.

---

## Signature

- Provided by: **GPT 5.5 (openai/gpt-5.5)** — 2026-10-05
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

