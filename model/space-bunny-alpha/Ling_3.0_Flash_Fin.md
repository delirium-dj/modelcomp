# Space Bunny Alpha — findings by Ling 3.0 Flash

- Source: Stealth / Unknown (`stealth/space-bunny-alpha`)
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Space Bunny Alpha (Stealth)
- **Short description:** Anonymous large model appearing on OpenRouter as a stealth preview with 1M context, multimodal input, and adjustable reasoning — vendor identity unknown as of September 23, 2026.
- **Provider / access:** OpenRouter (`stealth/space-bunny-alpha`), OpenCode (`siora-space-bunny-alpha`). Text, image, and video in; text out.
- **Release / knowledge:** 2026-09-23 (appeared on OpenRouter). Vendor undisclosed. No published weights, parameter count, or license.
- **IDs:** `stealth/space-bunny-alpha` (OpenRouter), `siora-space-bunny-alpha` (Siora)
- **Context window:** 1,000,000 tokens total (524,288 max output)
- **Modalities:** Text, image, and video in; text out; reasoning enabled; tool calls; structured output
- **Pricing (as of 2026-09-23):** $0 (free stealth preview)
- **Architecture:** Unknown (vendor undisclosed)

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the closest proxy as provisional — never invent values.

Agent / tool use:
- AI BENCHY: **56.1%** pass rate, **10.0** reliability, **6.5** benchmark score (#204)
- Independent field tests: 14/14 successful text and image requests, 8/8 correct color-image probes
- OpenCode TokenDyno: **89.9 tok/s** (OpenCode Go), **74.5 tok/s** (OpenCode Zen)
- No DeepSWE, Terminal-Bench, or Artificial Analysis benchmarks published

Reasoning / knowledge:
- No verified public benchmark scores published
- No Artificial Analysis entry
- No arena rating
- No independent evaluation of any kind published
- Vendor claims "blazing-fast inference" but no throughput metrics published on endpoint record

Coding:
- No verified public coding benchmarks published
- No DeepSWE, SWE-bench, or LiveCodeBench scores
- No Artificial Analysis Coding Index score
- No public benchmark data available for any category

Long context:
- 1,000,000 token context window (confirmed via OpenRouter)
- 524,288 token max output ceiling
- Independent tests confirm successful retrieval from ~200K-token inputs

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in `model-comparison.md`.
> **OVERALL SCORE FORMULA:** Overall = (Tool + Reasoning + Context + Multimodal + Coding) / 5 (half-up). Cost efficiency is scored independently.

- **Tool use: 40/100.** No verified public benchmark scores exist. AI BENCHY reports 56.1% pass rate and 6.5 benchmark score (#204). Field tests show functional tool use but no independent verification.
- **Reasoning: 35/100.** No verified public benchmark scores exist. No Artificial Analysis entry, no arena rating, no independent evaluation. Vendor identity and benchmark claims are unverified.
- **Context window: 70/100.** Confirmed 1M context window with successful ~200K-token retrieval in independent tests. However, no long-context benchmark data published.
- **Multimodal: 55/100.** Claimed text, image, and video input with text output. Field tests confirm text and image requests succeed (14/14). Video modality unverified independently.
- **Coding: 40/100.** No verified public coding benchmarks. OpenRouter listing claims "strong coding capabilities" but no independent scores available.
- **Cost efficiency: 100/100.** $0 during stealth preview on OpenRouter. Free tier with limited-time promotional pricing. Cost efficiency is 100/100 while free.
- **Overall Score: 48/100.** Mean of the five non-cost dimensions (40 + 35 + 70 + 55 + 40) / 5 = 48.0, rounded half-up to 48.

---

## Signature

- Provided by: **Ling 3.0 Flash Fin (inclusionai/ling-3-0-flash-fin-free)** — 2026-09-23
- Method: Public internet research via OpenRouter listing, Siora Labs blog, AI BENCHY, OpenCode TokenDyno, and BuildFastWithAI; scores are normalized 1–100 interpretations with minimal verified data.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.
