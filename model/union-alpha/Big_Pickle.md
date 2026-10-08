# Union Alpha (Unbiased Pareto 26.9) — findings by Big Pickle

- Source: Unbiased (`stealth/union-alpha`, now `unbiased/pareto`)
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Union Alpha — revealed as Pareto 26.9 (Unbiased, the AI platform of Circuit & Chisel)
- **Short description:** A stealth multimodal model that appeared anonymous on OpenRouter (2026-09-16) and was revealed ~33 h later as Pareto 26.9, a blended model that runs several frontier/open models per request and keeps the best answer. Top use case: agentic coding and research at ~25% of frontier input pricing.
- **Provider / access:** OpenRouter `stealth/union-alpha` (was anonymous, now no endpoints; current ID `unbiased/pareto`), also via Cloudflare AI. Chat Completions-style API. Not on OpenCode Zen / no Zen Free ID.
- **Release / knowledge:** Deployed 16 Sep 2026 14:42 UTC; reveal 17 Sep 2026 23:24 UTC; formal launch 10 Oct 2026. Knowledge cutoff undisclosed.
- **IDs:** `unbiased/pareto` (formerly `stealth/union-alpha`); not open-weights.
- **Context window:** 262,144 tokens; max output 131,072.
- **Modalities:** text + image in → text out; tool calling (`tools`/`tool_choice`); JSON output (`response_format`); no exposed reasoning control.
- **Pricing (as of 2026-09-23):** $2.50 in / $7.50 out per 1M; cached input $0.25/1M. Free for a ~33 h promotion window at launch (OpenRouter/OpenCode advertised ~1 week; actually closed earlier). No longer free.
- **Architecture:** proprietary blended/composite (several models evaluated per request, best answer kept); no weights, license, or parameter count.

### Raw benchmarks found

Agent / tool use (vendor-run Unbiased Pareto 26.9 model card unless noted):

- Terminal-Bench 4.0: **51%** (vendor; GPT-6 Astra 58, Fable 5.1 56, DeepSeek 4.1 Flash 31)
- DeepSWE: **74%** (vendor; three-way tie with GPT-6 Astra and DeepSeek 4.1 Flash; Fable 5.1 67)
- SMF Clearinghouse Official A (independent): **136/157 = 86.6%, 10th of 26** (OrcaRouter run, reasoning off; tools 2/2)

Reasoning / knowledge:

- HLE (no tools): **49%** (vendor; Astra 54, Fable 5.1 55)
- ArXivMath: **88%** (vendor; Astra 91, Fable 5.1 72)
- Official A reasoning: **30/30**, math **24/30** (independent OrcaRouter run)

Coding:

- DeepSWE: **74%** (above; ties field leader)
- Terminal-Bench 4.0: **51%** (above)
- Official A coding: **26/30** (independent)

Long context:

- 262K window, 131K out; no long-context retrieval benchmark found in this research.
- Multimodal: MMMU-Pro **78%** (vendor; Astra 87, Fable 5.1 81, DeepSeek 4.1 Flash 77)

### Normalized scores (1–100)

- **Tool use: 72/100.** TB4.0 51% is solid-but-behind-frontier and DeepSWE 74% (agentic) ties the lead; Official A tools 2/2; capped by the absence of any independent agentic-coding reproduction of the headline rows.
- **Reasoning: 78/100.** HLE-no-tools 49%, ArXivMath 88%, independent Official A reasoning 30/30; strong mid-frontier shape behind Fable/Astra on HLE.
- **Context window: 72/100.** 256K window (262,144) with 131K output sits in the 200K–500K band; no retrieval-at-length measurement published.
- **Multimodal: 68/100.** Text + image in / text out only (60–70 band), buoyed by MMMU-Pro 78 (vendor-run vision-reasoning).
- **Coding: 85/100.** DeepSWE 74% equals the current field leader and Official A coding 26/30 is strong; TB4.0 51% + vendor-only scoring cap it below the 90s.
- **Cost efficiency: 72/100.** $2.50/$7.50 with $0.25 cached input is ~25–42% of frontier pricing and per-task modeling favors it; the free tier is gone, and blended routing's real cost-per-task is unmeasured.
- **Overall Score: 75/100.** (72 + 78 + 72 + 68 + 85) / 5 = 75.0 → **75**. Best-fit: budget agentic-coding and research workloads where DeepSWE-class performance at ~25% of Astra's input price matters — keep a switch for A/B vs a named frontier model until the 74 is independently reproduced.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-09-23
- Method: public internet research (OpenRouter listing, Unbiased Pareto 26.9 model card, CellCog, Capital & Compute, OrcaRouter, Siora, Enera Labs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.