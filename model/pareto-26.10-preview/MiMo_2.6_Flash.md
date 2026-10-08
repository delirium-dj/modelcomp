# Pareto 26.10 Preview — findings by MiMo 2.6 Flash

- Source: Unbiased (Circuit & Chisel) homepage + model card, OpenRouter, BenchLM, repo meta
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Pareto 26.10 Preview — **Unbiased's composite/blended multimodal model**, released **2026-10-01** (OpenRouter, run dates). Preview of the next Pareto version ("may change without notice; use `pareto-26.9` for stable behaviour"); sibling Pareto 26.9 (2026-09-20). Built and run by **Circuit & Chisel**, a remote-first US/Canada team behind the Unbiased platform.
- **Short description:** **Not a single model and not a router:** "one model string, one bill — under the hood it runs a mix of frontier and open source models against each other on every request, checks which one earns the answer, and keeps the best result," while never switching models mid-conversation so the prompt cache survives. Positioning: "frontier intelligence, zero data retention, open-source pricing"; marketing claim "5× the intelligence." A **blended research/coding/agentic preview** whose four benchmark rows are **vendor self-reported, preliminary, and unverified** (meta: "no verified public benchmark scores yet, so it carries no average"; BenchLM: unranked).
- **Provider / access:** Unbiased platform (subscriptions from **$10/mo Personal** — 25M tokens/wk; $100/mo Personal Max; Team pay-as-you-go) + API; OpenRouter `unbiased/pareto-26.10-preview` (id `pareto` on Unbiased API). Proprietary. No Zen/free id (meta).
- **Release / knowledge:** 2026-10-01; cutoff not published.
- **Context window:** **1,000,000 in / 131,000 max out** (meta; OpenRouter 1.0M).
- **Modalities:** **text, image in; text out.**
- **Pricing:** **$0.80 / $3.20 per 1M**, **cached input $0.03 (96% discount)** (meta, OpenRouter, model card agree).

### Raw benchmarks found

> Primary: Unbiased model-card/homepage table (runs dated 2026-10-01; preliminary,
> self-run). Competitor columns are transcribed by Unbiased from *their* sources
> (Artificial Analysis, Epoch AI, Anthropic, OpenAI, DeepSWE leaderboard) —
> Unbiased itself warns: "not a controlled head-to-head," denominators need confirmation.
> Only these 4 rows exist anywhere (BenchLM: 3 of 623, unranked).

Preliminary self-reported rows (2026-10-01) vs best published competitor in table:

- **GPQA Diamond: 92.4** ($0.004/task) — clears the 90 reference; competitors: GPT-6 Astra 96.3, Sonnet 5.5 95.6, GPT-6.1 Sol 95.4, Fable 5.1 93.7, GPT-6 Luna 90.5.
- **HLE (text-only): 49.9** ($0.008/task) — clears the 40 reference with room; competitors: Fable 5.1 59.1, Sonnet 5.5 55.0, Astra 54.7, Sol 52.9, DS 4.1 Flash 39.2, GPT-6 Luna 38.5.
- **DeepSWE v1.1: 69.9** ($0.24/task) — near-frontier (GPT-6.1 Sol 75.2, Astra/Fable 5.1 74.0, Sonnet 5.5 71.0); Pareto 26.9 also 70.0 on a 30-task slice.
- **Terminal-Bench 4.0: 50.8** ($0.48/task) — upper-mid (Sonnet 5.5 70.6, Astra 59.6, Sol 56.1, Fable 5.1 55.1, DS 4.1 Flash 26.8, GPT-6 Luna 12.6).
- Vendor claim: "matching or setting the Pareto frontier on all four benchmarks" — true on *cost-adjusted* grounds (per-task costs are 10–1000× below competitors), not on raw score.
- No independent rows anywhere: no AA index, no Vals, no leaderboards (BenchLM unranked; llm-stats empty; not in models.dev).

### Normalized scores (1–100)

- **Tool use: 85/100.** TB4 50.8 and DeepSWE v1.1 69.9 are respectable agentic rows that beat several flagship published scores — but they are vendor-run previews, with no OSWorld/τ²/BrowseComp/GDPval coverage at all.
- **Reasoning: 87/100.** GPQA 92.4 and HLE-text-only 49.9 both clear their references comfortably; held under 90 because every number here is self-reported/preliminary with zero independent confirmation (AA, Epoch, Vals all absent).
- **Context window: 93/100.** 1M/131K per two registries — 1M-class, but with no retrieval/LCR row of any kind it stays under the 95 floor.
- **Multimodal: 62/100.** Image input is spec'd (meta, OpenRouter) with **zero** vision benchmark rows — bottom-of-band for image-capable models on evidence alone.
- **Coding: 87/100.** DeepSWE v1.1 69.9 is a single, excellent, self-reported coding row (frontier band within 5 points of GPT-6.1 Sol); no SWE-V/TB2.1/Coding-Index corroboration.
- **Cost efficiency: 96/100** (excluded from Overall). $0.80/$3.20 undercuts the $1.25/$4.25 ≈ 88 anchor, cache is 96% off, per-task costs are $0.004–$0.48 versus competitors' dollars — the strongest cost story in this queue, tempered by subscription allowances (25M tokens/wk on the $10 tier).
- **Overall Score: 83/100.** (85+87+93+62+87)/5 = 82.8 → 83 — a preview-quality composite with four strong-looking self-reported rows (GPQA 92.4, HLE 49.9, DeepSWE 69.9, TB4 50.8) at absurd cost efficiency — scored a notch below what the raw numbers alone would give, because none of them have been verified by anyone outside Circuit & Chisel, and the product may change without notice.

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi — opencode/mimo-v2.6-flash)** — 2026-10-07
- Method: fresh public internet research — unbiased.ai homepage + `/model-card/` (architecture: blended multi-model ensemble, pricing, preliminary benchmark table with per-row run dates/costs/source attributions, competitor transcriptions), OpenRouter API + model page (ctx/pricing/release date/description), BenchLM (unranked status, 3 rows, sibling pointers, updated 2026-10-07), llm-stats (empty), models.dev (absent), repo meta. Scores are normalized 1–100 interpretations; every benchmark row in this report is vendor-preliminary and flagged as such.
- Future sources: add a new file next to this one, e.g. `MiMo_2.6_Flash.md`, using the same headings.
