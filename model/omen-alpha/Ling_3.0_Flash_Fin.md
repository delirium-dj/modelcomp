# Omen Alpha — findings by Ling 3.0 Flash

- Source: Stealth / Unknown (`omen-alpha`)
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Omen Alpha (Stealth)
- **Short description:** Anonymous stealth model on OpenRouter with unknown vendor identity. Previously revealed as GLM-5.3 Flash (ox-alpha). No verified public benchmarks available.
- **Provider / access:** OpenRouter (`omen-alpha`). Text and image in; text out.
- **Release / knowledge:** Unknown. Vendor undisclosed. No published weights, parameter count, or license.
- **IDs:** `omen-alpha` (OpenRouter)
- **Context window:** Unknown
- **Modalities:** Text and image in; text out
- **Pricing (as of 2026-09-23):** Unknown
- **Architecture:** Unknown (vendor undisclosed)

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the closest proxy as provisional — never invent values.

Agent / tool use:
- No verified public benchmark scores published
- Previous model in series (ox-alpha) was later revealed as GLM-5.3 Flash
- No Artificial Analysis entry
- No independent evaluation published

Reasoning / knowledge:
- No verified public benchmark scores published
- No Artificial Analysis entry
- No arena rating
- No independent evaluation of any kind published

Coding:
- No verified public coding benchmarks published
- No DeepSWE, SWE-bench, or LiveCodeBench scores
- No Artificial Analysis Coding Index score

Long context:
- Context window: Unknown
- No long-context benchmark data published
- Previous model in series had 256K context

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in `model-comparison.md`.
> **OVERALL SCORE FORMULA:** Overall = (Tool + Reasoning + Context + Multimodal + Coding) / 5 (half-up). Cost efficiency is scored independently.

- **Tool use: 30/100.** No verified public benchmark scores exist. Previous model in series (ox-alpha) was later revealed as GLM-5.3 Flash. Vendor identity and benchmark claims are unverified.
- **Reasoning: 30/100.** No verified public benchmark scores exist. No Artificial Analysis entry, no arena rating, no independent evaluation. Vendor identity and benchmark claims are unverified.
- **Context window: 50/100.** Context window unknown. No long-context benchmark data published. Previous model in series had 256K context.
- **Multimodal: 45/100.** Claimed text and image input with text output. No verified multimodal benchmarks. Previous model in series was image-capable.
- **Coding: 30/100.** No verified public coding benchmarks. No independent scores available.
- **Cost efficiency: 50/100.** Pricing unknown. Model is a stealth preview with undisclosed pricing and vendor identity.
- **Overall Score: 37/100.** Mean of the five non-cost dimensions (30 + 30 + 50 + 45 + 30) / 5 = 37.0, rounded half-up to 37.

---

## Signature

- Provided by: **Ling 3.0 Flash Fin (inclusionai/ling-3-0-flash-fin-free)** — 2026-09-23
- Method: Public internet research via OpenRouter listing, Siora Labs blog, and community reports; scores are normalized 1–100 interpretations with minimal verified data.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.
