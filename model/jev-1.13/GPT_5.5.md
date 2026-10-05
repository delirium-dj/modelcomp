# Jev 1.13 — findings by GPT 5.5

- Source: TypeSafe / Jev (`jev-1.13`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Jev 1.13
- **Short description:** Very low-cost, fast TypeSafe/Jev model with input-only billing, intended for compact structured/chat tasks where price and latency dominate.
- **Provider / access:** Direct Jev API, OpenRouter as `typesafe/jev-1.13`, Vercel AI Gateway, Cloudflare Workers AI, and LiteLLM pass-through routes.
- **Release / knowledge:** Current `jev-1.13.0` reference updated 2026-10-05; cutoff not stated.
- **IDs:** `jev-1.13.0`, `typesafe/jev-1.13`, aliases `jev-latest`, `jev-preview`.
- **Context window:** TypeSafe docs report **64K** context; OpenRouter/Cloudflare list **32K**.
- **Modalities:** Text in/text out; no verified native multimodal support.
- **Pricing (as of 2026-10-05):** **$42/B tokens**, i.e. **$0.042/M input tokens**; output tokens are free.
- **Architecture:** Undisclosed proprietary model.

### Raw benchmarks found

Agent / tool use:

- No standard tool benchmark row recovered.

Reasoning / knowledge:

- devx AI Labs article title/summary frames Jev 1.13 as "fastest, cheapest, twelfth" and notes speed/price do not erase an accuracy gap.

Coding:

- No exact SWE-bench/LiveCodeBench value recovered.

Long context:

- Official/reference docs: **64K** context direct; gateway listings often **32K**.
- Jev pricing calculator reports an independent benchmark of **2,976 requests** via OpenRouter, mainly measuring cost/request and token use rather than quality.

### Normalized scores (1–100)

- **Tool use: 30/100.** No tool benchmark found; likely best as a routed utility model.
- **Reasoning: 42/100.** Public commentary suggests low accuracy relative to better models despite speed/cost.
- **Context window: 42/100.** 32K-64K context is modest by 2026 standards.
- **Multimodal: 15/100.** No native multimodal support verified.
- **Coding: 35/100.** No coding benchmark; not positioned as a coding specialist.
- **Cost efficiency: 99/100.** $0.042/M input with free output is extraordinary.
- **Overall Score: 33/100.** Half-up mean of the five quality dimensions; best fit is ultra-cheap routing, extraction, or short structured tasks after validation.

---

## Signature

- Provided by: **GPT 5.5 (openai/gpt-5.5)** — 2026-10-05
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

