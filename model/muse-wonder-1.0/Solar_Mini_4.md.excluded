# Muse Wonder (1.0) — findings by Solar Mini 4

> Research completed 2026-10-31 by Solar Mini 4 (independent research; scores are normalized 1–100 interpretations, not official vendor scores).

- **Source:** Meta / Muse Wonder (`muse-wonder-1.0`, Meta Model API)
- **Date:** 2026-10-31 (UTC)
- **Overview & methodology:** `../../model-comparison.md` · **Log:** `../../model-findings.md`

## Model card

- **Name:** Muse Wonder (1.0) — alias `muse-wonder-1.0`, `meta/muse-wonder` (OpenRouter)
- **Short description:** Meta's first frontier-class API model (2026-10-12, Meta Superintelligence Labs) — ~4 AA-index points above Muse Spark 1.3 (52 vs 48 at max) — with Active Memory + Active Focus agentic features. Pay-as-you-go API; not a Muse Code subscription product (that is Muse Wonder Full).
- **Provider / access:** Meta Model API, pay-as-you-go, Standard mode (no Contributor mode). Community route: OpenRouter `meta/muse-wonder`. Preview.
- **Release / knowledge:** Released 2026-10-12. Knowledge cutoff: undisclosed.
- **IDs:** `muse-wonder-1.0`; OpenRouter `meta/muse-wonder`.
- **Context window:** 1,048,576 tokens (1M). Max output: undisclosed.
- **Modalities:** Text, image, speech, video input; text output; tool calls, structured output, search grounding, computer use. Reasoning default on.
- **Pricing (2026-10-31):** $4.00/$0.20 cached/$20.00 per 1M tokens; web-search grounding $2.50/1,000 queries. Cost per AA-index task: $6.95 (AA).
- **Rate limits:** 3,000 RPM / 4M TPM per team per model (Meta; community-reported), background 600/min.
- **Architecture:** Proprietary, parameters undisclosed.

### Raw benchmarks found

**Agent / tool use:**
- Terminal-Bench 4.0 (max): **52.0%** (AA max-effort run, independent, 2026-10-13; vs Muse Spark 1.3 max 33.3% — gap clears the band by ~19 pts). llmboard: TB4.0-AA 52.0% (rank 5).
- DeepSWE 1.1: **78.8%** (llmboard rank 4/52) — unconfirmed: Meta's card attributes it to Datacurve, whose public board lists no Muse Wonder (The Model Gap). 
- SWE-Marathon: **53.1%** (rank 4/11, measured 2026-10-30).
- JobBench: **70.5%** (rank 4/6).
- MemoryBench: **85.6%** (rank 2/4).
- FocusBench: **44.9%** (rank 4/4).
- AutomationBench-AA: **39.1%** (rank 6/6).
- OSWorld 2.1: partial **72.6%** / strict **34.3%** (rank 6/7 and 6/6).
- GDPval-AA: not measured on public boards.

**Reasoning / knowledge:**
- HLE (no tools): **50.09** (AA max-effort, independent, 2026-10-13; tie with Muse Spark 1.3's 48.7, inside the 2-pt band).
- AA Intelligence Index v4.3.2 (max): **52** (vs Muse Spark 1.3 max 48); v5.0: **43** (#23/58, above median 37).
- GPQA / SciCode / CritPt: not measured on public boards (AA nulls).

**Coding:**
- SWE-bench Verified: not measured on public boards.
- Coding Agent Index (Muse Code, max): **63** (AA; vs Muse Spark 1.3 max 54).

**Multimodal / speed / cost:**
- 143.1 t/s (AA — notably fast); TTFT 30.09s.
- Verbosity: 110M output tokens per AA-index task.
- Multimodal: text + image + video + audio + PDF in, text out.

### Normalized scores (1–100)

- **Tool use: 85/100.** TB4.0 52.0% (max) clears the predecessor band by ~19 pts; DeepSWE 78.8% (rank 4), MemoryBench 85.6% (rank 2), OSWorld 2.1 partial 72.6%. GDPval-AA not measured — provisional.
- **Reasoning: 62/100.** HLE 50.09% (measured, independent; frontier bar 40%+ → 90–100, so upper-mid); AA v4.3.2 index 52 (mid-tier, <60). GPQA/CritPt/SciCode not measured.
- **Context window: 96/100.** 1M tokens — ≥1M tier (95–100); 100 only with ≥98% retrieval at 512K+.
- **Multimodal: 82/100.** Text + image + video + audio + PDF in — richest input set.
- **Coding: 70/100.** SWE-Marathon 53.1% (rank 4), JobBench 70.5% (rank 4), Coding Agent Index 63 vs 54 predecessor; no SWE-bench Verified on public boards.
- **Cost efficiency: 55/100.** $4.00/$20.00 per 1M is well above the $3/$15 reference (60) — AA-index-task cost $6.95.
- **Overall Score: 79/100.** (85+62+96+82+70)/5 = 395/5 = 79. Best fit: frontier agentic model for API-led teams; steep per-token price vs $2/$10 peers, though trivial dollar cost for small workloads.

## Signature

- Provided by: **Solar Mini 4 (Solar_Mini_4)** — 2026-10-31
- Method: independent public web research (2026-10-31); normalized interpretations, not official vendor scores.
- Reference URLs:
  - [Meta Newsroom — Introducing Muse Wonder and Muse Wonder Full](https://about.fb.com/news/2026/10/introducing-muse-wonder-and-muse-wonder-full/)
  - [Meta Developer docs — Pricing and rate limits](https://dev.meta.ai/docs/pricing-rate-limits)
  - [Artificial Analysis — Muse Wonder (max) model page](https://artificialanalysis.ai/models/muse-wonder)
  - [The Model Gap — Muse Wonder benchmarks & pricing](https://themodelgap.com/models/muse-wonder)
  - [llmboard.ai — Muse Wonder benchmarks & pricing](https://www.llmboard.ai/models/meta-muse-wonder)
  - [OpenRouter — Meta: Muse Wonder](https://openrouter.ai/meta/muse-wonder)
  - [Apidog — Muse Wonder rate limits](https://apidog.com/blog/muse-wonder-rate-limits/)
  - [All Things Muse — Muse Wonder API guide](https://www.allthingsmuse.com/articles/muse-wonder-api-guide/)

## Changelog

- 2026-10-31: created by Solar Mini 4 via independent research; spans all five quality dims; conflicts noted (DeepSWE attribution, AA v4.3.2 vs v5.0 index values).
