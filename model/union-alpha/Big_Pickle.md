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

- **Tool use: 72/100.** TB4.0 51% is solid-but-behind-frontier and DeepSWE 74% (agentic) ties the lead; Official A tools 2/2; still no independent reproduction of the headline rows (2026-10).
- **Reasoning: 78/100.** HLE-no-tools 49%, ArXivMath 88%, independent Official A reasoning 30/30; strong mid-frontier shape behind Fable/Astra on HLE.
- **Context window: 72/100.** 256K window (262,144) with 131K output sits in the 200K–500K band; no retrieval-at-length measurement published.
- **Multimodal: 68/100.** Text + image in / text out only (60–70 band), buoyed by MMMU-Pro 78 (vendor-run vision-reasoning).
- **Coding: 85/100.** DeepSWE 74% equals the current field leader and Official A coding 26/30 is strong; TB4.0 51% + vendor-only scoring cap it below the 90s.
- **Cost efficiency: 72/100.** $2.50/$7.50 with $0.25 cached input is ~25–42% of frontier pricing and per-task modeling favors it; the free tier is gone, and blended routing's real cost-per-task is unmeasured.
- **Overall Score: 75/100.** (72 + 78 + 72 + 68 + 85) / 5 = 75.0 → **75** (light re-verification 2026-10-08 — all rows held). Best-fit: budget agentic-coding and research workloads where DeepSWE-class performance at ~25% of Astra's input price matters — keep a switch for A/B vs a named frontier model until the 74 is independently reproduced.

---

## Re-verification — 2026-10-08 (15 days after original)

Light re-verification — no material change; all dimensions hold. Confirmed via BenchLM compare pages (updated 2026-09-28), Unbiased's live Pareto 26.9 card, endpoints.run (2026-10-06) and The Model Gap.

| Dimension | 2026-09-23 | 2026-10-08 | Δ |
|---|---|---|---|
| Tool use | 72 | 72 | — |
| Reasoning | 78 | 78 | — |
| Context window | 72 | 72 | — |
| Multimodal | 68 | 68 | — |
| Coding | 85 | 85 | — |
| Cost efficiency | 72 | 72 | — |
| **Overall** | **75** | **75** | **—** |

Confirmations and notes:

- **All five numbers still stand:** Terminal-Bench 4.0 51%, DeepSWE 74%, HLE w/o tools 49%, ArXivMath 88%, MMMU-Pro 78% — still vendor-only (BenchLM tracks the model with 4 sourced rows but no standalone overall score; no independent lab reproduction exists as of 2026-10).
- **Pricing/context unchanged:** $2.50 in / $0.25 cached / $7.50 out, 262K ctx / 131K out, two providers (Unbiased + OpenRouter); free stealth period still ended.
- **Lineage advances:** **Pareto 26.10 Preview** (confirmed 2026-10-01, 3 display rows, no overall score yet) is the next blend; a Pareto 26.8 card also exists. Formal 26.9 launch was slated for 2026-10-10.
- **No BenchLM profile page** resolves for the model (`unbiased-pareto` → 404) — it is only present in compare mirrors; still no AA/ARC/DeepSWE-board registration.

Gaps still open after re-run: independent reproduction of the 74 DeepSWE, real cost-per-task measurement, retrieval-at-length, audio input, non-text output.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-10-08 (re-verified; original research 2026-09-23)
- Method: public internet research (OpenRouter listing, Unbiased Pareto 26.9 model card, BenchLM compare mirrors, endpoints.run, The Model Gap, CellCog, Capital & Compute, OrcaRouter); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.