# Grok 4.20 — findings by Kimi K3

- Source: xAI (now SpaceXAI) / Grok 4.20 (`grok-4.20-0309-reasoning` family)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.20
- **Short description:** xAI's early-2026 flagship — a four-agent parallel system where specialized agents debate before answering (launch coverage), claiming the market's lowest hallucination rate and strict prompt adherence (docs.x.ai). Despite the higher version number, it PRECEDED the 4.x mid-cycle line: beta 2026-02-17, full release 2026-03-09; succeeded by Grok 4.3 (2026-04-30), then 4.5/4.6/4.7. Docs pitch it for "industry-leading speed and agentic tool calling."
- **Provider / access:** xAI API `https://api.x.ai/v1` (OpenAI-compatible; Batch API supported, 20% discount); SuperGrok (~$30/mo) and X Premium+ subscriptions. **Not on OpenCode Zen** (Zen carries grok-4.5/4.6/4.7/grok-build-0.1, no 4.20 ID).
- **Release / knowledge:** experimental beta 2026-02-17; full release 2026-03-09 (the "0309" checkpoint date); current variants dated 0309 with a later "v2" respin referenced by Artificial Analysis. Knowledge cutoff not verified.
- **IDs:** `grok-4.20-0309-reasoning` and `grok-4.20-0309-non-reasoning` (xAI API), plus multi-agent variant `grok-4.20-multi-agent-0309`; aliases incl. `grok-4.20`, `grok-4.20-reasoning-latest`, `grok-4.20-beta-*` (docs.x.ai). Note: `logprobs` unsupported on grok-4.20 and newer (docs).
- **Context window:** 1,000,000 tokens (official docs.x.ai model page + pricing table). **Conflict:** Artificial Analysis lists "Grok 4.20 0309 v2" at 2M tokens and some trackers repeat a 2M figure; scored here on the official 1M.
- **Modalities:** text + image in → text out (official docs); function calling; structured outputs; reasoning Yes (dedicated reasoning/non-reasoning endpoints; multi-agent debate mode in beta coverage).
- **Pricing (as of 2026-09-29):** $1.25 in / $0.20 cached / $2.50 out per 1M below 200K prompt tokens; doubles to $2.50/$0.40/$5.00 at ≥200K (whole-request rate) — docs.x.ai; identical for reasoning, non-reasoning and multi-agent variants.
- **Architecture:** proprietary; four-agent parallel/ensemble inference (aimlapi/shawnhack/hokai launch coverage; "4-agent MoE"); parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- Tau2-Bench Telecom: **96.5%** (earlier aggregation — indicative; strong tool-calling corroborated by docs positioning)
- GDPval-AA: **1,171 Elo** (earlier aggregation — indicative)
- APEX-Agents / long-horizon terminal loops: **indicatively weak** across earlier aggregations; **no verified current public score found**

Reasoning / knowledge:

- Artificial Analysis Intelligence Index (v4.3): **26** for "Grok 4.20 0309 v2 (Reasoning)" — below the all-model median of 26 per AA's own model page; a third-party tracker (modelgrep) instead reports **38.0** rank 56/172 — **sources conflict; treat both with caution**
- GPQA Diamond: **88.6–91.1%** across vals.ai / Epoch / modelgrep listings
- AIME: **96.5%** (earlier aggregation — indicative)
- HLE: **34.5%** (earlier aggregation — indicative)
- MMLU: **91.2%** (tokenmix — single-source, unverified method)

Coding:

- SWE-bench Verified: **72.2%** (vals.ai listing) vs **78%** (tokenmix) vs **75%** (shawnhack) — **sources conflict; range reported verbatim**
- LiveCodeBench: **84.3%** (earlier aggregation — indicative)
- Vibe Code Bench: **~4–5%** (earlier aggregation — weak; 4.3 improved it +15 p.p. per vals.ai)

Long context:

- Official 1M window (docs); AA lists 2M for the v2 respin (see Model card conflict); AA-LCR ~62% (earlier aggregation — indicative); no MRCR/RULER public score found.

Multimodal:

- MMMU-Pro: **83.5%** (earlier aggregation — indicative); image input confirmed by docs; no audio/video input; text-only output.

### Normalized scores (1–100)

> Methodology: `../../model-comparison.md`. Overall = half-up mean of the five quality dims; Cost excluded.

- **Tool use: 68/100.** Indicative Tau2 96.5% matches the docs' "agentic tool calling" pitch; long-horizon agentic loops were its documented weakness in the beta line; no current verified agentic suite.
- **Reasoning: 74/100.** GPQA ~89–91% and AIME 96.5% are strong, but the current AA model page reads 26 on Intelligence Index v4.3 (vs a conflicting third-party 38) — below the 40s band; wide source disagreement caps confidence.
- **Context window: 95/100.** Verified official 1M window → 95–100 band; the 2M figure is AA/tracker-only and cannot justify 100-territory.
- **Multimodal: 68/100.** Image input verified (60–75 band) with indicative MMMU-Pro 83.5%; text-only output, no audio/video.
- **Coding: 75/100.** SWE-bench Verified reported anywhere from 72.2% to 78% across sources; indicative LiveCodeBench 84.3%; weak Vibe Code Bench keeps it out of the 80s.
- **Cost efficiency: 88/100.** $1.25/$2.50 is better than the $1.25/$5 (≈85) reference on the output side; ≥200K whole-request doubling and 4× agent token overhead temper it.
- **Overall Score: 76.0/100.** Mean of (68 + 74 + 95 + 68 + 75)/5 = 76.0. Best fit: cheap, reasoning-strong API workhorse for Q&A/batch analysis at 1M context; superseded by the 4.3→4.7 line and weak at long-horizon autonomous loops.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-29
- Method: public internet research (docs.x.ai grok-4.20 model page + pricing table; Artificial Analysis model page "Grok 4.20 0309 v2"; modelgrep, vals.ai, tokenmix, shawnhack, hokai, aimlapi, llm-stats listings/coverage; codersera's Grok 4.3 guide for the 4.20→4.3 succession). Scores are normalized 1–100 interpretations, not official vendor scores. Reverified 2026-09-29: corrected positioning (4.20 PRECEDES 4.3: beta 2026-02-17, full release 2026-03-09, succeeded by 4.3 on 2026-04-30); context corrected to official 1M (AA's 2M "0309 v2" figure flagged as conflicting); pricing verified tiered $1.25/$2.50 with $0.20 cached for all three variants (reasoning / non-reasoning / multi-agent); added current AA Intelligence Index 26 with the conflicting third-party 38 noted; Reasoning 82→74, Context 95 kept, Cost 91→88; Overall 77.6→76.0.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
