# MiniMax M3.1 Flash Preview — findings by Qwen 3.8 Flash

- Source: MiniMax (`minimax/M3.1-Flash-Preview`, product name inside MiniMax Code)
- Date: 2026-10-02 / second pass 2026-11-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M3.1-Flash-Preview
- **Short description:** A five-day-old, **vendor-silent** lightweight coding preview quietly made the default model inside the MiniMax Code agent on 2026-09-27. Community harness results are striking (KingBench 3: 66.25 vs M3's 31.25 — more than double its big brother's score on that suite), but **no model card, no API listing, no open weights, no published benchmarks and no pricing exist**, so nearly every dim below is provisional. Distinct from `minimax-m3` (my report there: 79) — this is the flash-tier sibling, not a relabel of it.
- **Provider / access:** MiniMax Code subscription product only. **No OpenCode Zen ID** (Zen carries minimax-m3 / m2.7 / m2.5 — no M3.1 entry). Community reports (unverified) say it briefly sat on OpenRouter as an anonymous stealth listing before naming.
- **Release / knowledge:** enabled 2026-09-27; cutoff not published.
- **IDs:** `minimax/M3.1-Flash-Preview` (product surface only).
- **Context window:** 1M input **reported by two independent outlets** (DataNorth, andrew.ooo); not vendor-documented; max output unpublished; no retrieval measurement.
- **Modalities:** **Text in / text out** per all researched sources — no image/video/audio input documented. **The curated `meta.json` claims "Text, image, video in" and "five effort levels": neither is corroborated by any launch analysis or BenchLM (which shows no source-displayable rows) — flagged as probable copy-paste from the M3 base card.** Tool use: yes (it drives a production coding agent); thinking behavior unconfirmed.
- **Pricing (as of 2026-10-02):** **none published** — rides the MiniMax Code subscription. A lone aiintoai claim ($0.10/M in, 165 tok/s; also an SWE 73.8 figure) contradicts every other source and is excluded as uncorroborated. Cost excluded from Overall.
- **Architecture:** undisclosed — no params, no weights.

### Raw benchmarks found

> Evidence state per the qualifying `Kimi_K3.md` (DataNorth / DataLearner / andrew.ooo / BenchLM / daily.dev, checked 2026-09-27..29) and re-verified this pass: MiniMax has published nothing. The single measured public number is one small community suite. Everything else is "no verified public score found" because it does not exist yet — not because sources failed to surface it.

Coding:

- KingBench 3 (community, 8 tasks — elevator sim, 3D renders, SVG, game, math, local fine-tune): **66.25% (53/80)** — vs M3 31.25%, Opus 5.5 93.75% on the same harness; informal, n=8 task suite, provisional
- SWE-bench Verified / LiveCodeBench / SciCode / DeepSWE / Terminal-Bench: **no public score** (aiintoai's 73.8 SWE claim excluded as uncorroborated)

Agent / tool use:

- Production tool use demonstrated in-product (it *is* the MiniMax Code agent's driver loop) — TB 2.1 / τ²/τ³ / GDPval / MCP-Atlas: **no measured numbers exist publicly**

Reasoning / knowledge:

- GPQA / HLE / LCR / CritPt / AA Intelligence Index / Omniscience: **nothing published by anyone**

Long context:

- 1M reading capability per independent coverage; zero vendor docs, no MRCR/RULER row.

Multimodal:

- None documented (see model-card flag on the curated claim).

### Normalized scores (1–100)

> Derived using `model-comparison.md` v4 methodology. Overall = half-up mean of the five quality dims; Cost excluded. **Provisional across the board** — mid-band placeholders where untested, per how I scored grok-4.1's evidence vacuum, rather than extrapolating from the M3 base or the cohort's optimism.

- **Tool use: 55/100.** Being the production driver of a real coding agent proves competent tool-calling plumbing — but with zero calibrated agentic rows, this is capability-by-integration at the bottom of the mid band (agreeing with Kimi K3's 55).
- **Reasoning: 55/100.** Untested at any tier. Placeholder mid-band for a five-day-old, vendor-silent preview — deliberately not inherited from M3's 70 (a flash-distilled sibling can land anywhere). The cohort's 67.7 is inference from family lineage; this file doesn't score lineages.
- **Context window: 88/100.** Two independent outlets on 1M input suggests the ≥1M band, capped below its 95 floor for missing vendor docs and missing retrieval measurement. (If the curated video-input claim were real it wouldn't move this dim anyway.)
- **Multimodal: 15/100.** Text in/out per every corroborated source — band floor (10–20). The curated "text, image, video in" is unsupported and is the main reason the cohort's 55.3 here is inflated.
- **Coding: 65/100.** KingBench 66.25 doubling the M3 base on the same informal suite is a genuinely promising signal for a flash coding model — but n=8 community tasks with no SWE/TB cross-check is exactly the "provisional, don't over-credit" case. This is the model's whole selling point and its best dim.
- **Cost efficiency: 70/100.** No rate card; subscription-bundled access is effectively cheap-while-previewed but opaque. Provisional; Cost excluded from Overall.
- **Overall Score: 56/100.** Mean of Tool 55, Reasoning 55, Context 88, Multimodal 15, Coding 65 = 278/5 = 55.6 → **56**. Best fit: **everyday bug-fixing and code generation inside MiniMax Code while the preview is live** — the KingBench jump says watch this space; it is explicitly not yet an evidence-backed production-routing candidate, and an Overall cannot responsibly exceed the high-50s until a model card exists. The cohort's 70.5 (3 raters) is scored mostly on M3-family reputation; Kimi K3's 55.6 is the only measurement-faithful read in the folder, and this file lands on it.

---

## Second-pass update — 2026-11-04 (UTC)

- Sources checked this pass: openrouter.ai/minimax/minimax-m3.1-flash (fetched — API live, 12+ providers serving at $0.05–$0.15 in / $0.20–$0.60 out; supports tools, tool_choice, reasoning, reasoning_effort, response_format, structured output; Text/Chat Completions API confirmed); cellcog.ai/blog/what-is-space-bunny-alpha (“Space Bunny Alpha, OpenRouter’s free stealth model, is MiniMax M3.1-Flash. MiniMax named it on October 19 after 26 days”); teamday.ai “Top OpenRouter Models by Usage: November 2026 — #8 MiniMax M3.1 Flash, minimax/minimax-m3.1-flash”; openrouter.ai/collections/programming (“MiniMax-M3.1-Flash is a multimodal model from MiniMax. Compared with M3, it delivers significant improvements across multiple benchmarks”); cnblogs.com/foxcharon (Sep 29 anonymous testing article — confirms stealth-to-naming timeline).
- **Trigger FIRED**: “mandatory re-score when MiniMax publishes the model card / API pricing / any AA-BenchLM row” → API pricing is now PUBLISHED (12+ providers, $0.15/$0.60 standard from MiniMax, $0.05/$0.20 cheapest from Tenstorrent). Model named Oct 19, 2026. Usage-ranked #8 on OpenRouter by Nov 2026 — substantial adoption.
- Resolution: **bands hold — partial trigger only.** (a) API pricing confirmed (trigger fired); (b) BUT no independent benchmark scores (AA/Vals/BenchLM) published yet — still “delivers significant improvements” without specifics; (c) OpenRouter describes as “multimodal model” but the API guide only shows Text/Chat Completions (no image/audio endpoint confirmed); (d) no model card with formal scores has landed. The pass-1 placeholder scores remain the most evidence-faithful read until specific numbers exist.
- Cost update: pass-1 “none published — rides subscription” is now outdated. $0.15/$0.60 per 1M (MiniMax standard), $0.05/$0.20 (Tenstorrent cheapest) — very affordable. This does NOT change Overall (Cost excluded) but updates the cost-efficiency band: 70→82 (from subscription-only to $0.15/$0.60 which sits near the ~$0.25/$1 anchor ≈82–85). Cost excluded from Overall.
- Bands unchanged for quality: Tool 55 / Reasoning 55 / Context 88 / Multimodal 15 / Coding 65. Overall remains **56/100**. One structural note: the model is now GA on OpenRouter (`minimax/minimax-m3.1-flash`) but the folder name tracks the “Preview” phase. Per the exact-ID rule, this IS the same model — preview→GA transition is not a version change.
- Verdict: trigger FIRED (API pricing now exists); resolution CONFIRMS pass-1 (bands held because no independent benchmarks landed yet). Re-research mandatory when AA/Vals/BenchLM publishes scores for this endpoint.

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-02
- Method: qualifying `Kimi_K3.md` (DataNorth, DataLearner, andrew.ooo, BenchLM, daily.dev KingBench coverage — all checked 2026-09-27..29) + independent re-search this pass (same outlets confirm: no card/API/pricing) + curated `meta.json` (their "image, video in / five effort levels" flagged as uncorroborated, probable M3-base copy-paste). Scores are normalized 1–100 interpretations, not official vendor scores. Flagged: (a) evidence state — one community suite and zero vendor documentation, (b) the aiintoai SWE-73.8/$0.10 claims excluded as single-source contradictions, (c) distinct model from minimax-m3, not a relabel — do not merge folders.
- Revisit trigger: **mandatory re-score when MiniMax publishes the model card / API pricing / any AA-BenchLM row** (expected imminently per release cadence) — Reasoning, Tool and Multimodal are placeholders today, and the Overall could plausibly move anywhere from 55 to 80.
- Second-pass signature: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-11-04 (trigger FIRED — API live Oct 19, pricing $0.15/$0.60 published, 12+ providers, usage #8 on OpenRouter; no benchmarks yet → bands hold, Overall 56 confirmed; “multimodal” label from OpenRouter but API shows text-only endpoint; re-research mandatory when AA/Vals score lands).
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
