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

---

## Merged duplicate - Mimo_v2.6_Flash.md (same rater, spelling variant, merged 2026-10-09)

> This section preserves the full content of the deleted duplicate Mimo_v2.6_Flash.md (same Xiaomi MiMo 2.6 Flash rater; variant spelling _v2.6 vs _2.6 plus case). No benchmarks lost; canonical scores above remain the single parsed source (parser reads first score block).

# Pareto 26.10 Preview — findings by Mimo v2.6 Flash

- Source: Unbiased AI (`pareto-26.10-preview`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Pareto 26.10 Preview
- **Short description:** Unbiased's blended/composite multimodal preview model (2026-10-01) pairing frontier reasoning numbers (GPQA 92.4%, HLE 49.9% text-only) with open-source pricing ($0.80/$3.20 per 1M) and attested zero data retention; backbone components undisclosed.
- **Provider / access:** Unbiased AI API (`pareto-26.10-preview`); OpenRouter listing `unbiased/pareto-26.10-preview` (also routed via Cloudflare AI Gateway per launch post); subscription tiers (Personal $10/mo, Personal Max $100/mo). Chat Completions via OpenRouter; Responses API not documented.
- **Release / knowledge:** Preview released 2026-10-01 (launch post; runs dated Oct 1, 2026, "may change before final publication"); knowledge cutoff not disclosed.
- **IDs:** `pareto-26.10-preview` (Unbiased API), `unbiased/pareto-26.10-preview` (OpenRouter). **No OpenCode Zen Free ID** (`noFreeId: true` in models.dev/meta).
- **Context window:** 1,000,000 in; 131,000 max output (models.dev / meta.json, verified 2026-10-05).
- **Modalities:** text + image in; text out. Reasoning/tool calls supported in agent runs; structured-output flags not documented.
- **Pricing (as of 2026-10-05):** paid — $0.80 input / $0.03 cached input / $3.20 output per 1M (launch post; 68% cheaper input than 26.9's $2.50/$7.50). No free tier → cost scored on paid pricing.
- **Architecture:** blended/composite router-style model — component models undisclosed; preview status ("will continue to improve over the coming week", slug graduates in place); ZDR attested on OpenRouter/Cloudflare traffic.

### Raw benchmarks found

> Measured numbers with (source, run date, cost-per-task) for traceability. All four are vendor first-party preliminary runs (2026-10-01).

Agent / tool use:

- Terminal-Bench 4.0: **50.8%** <(Unbiased launch post, Oct 1 2026 run, $0.48 mean/task; preliminary — harness denominators unconfirmed)>
- DeepSWE v1.1: **69.9%** <(Unbiased model card + launch post, $0.24/task; Fable 5 comparator 70.0% at $13.50/task — Pareto matches it at ~1/56 the cost; Pareto 26.9 = 70.0% at $0.29)>
- Tau-bench / Tau3-Banking: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / MCP-Atlas / SWE Atlas: no verified public score found

Reasoning / knowledge:

- GPQA-Diamond: **92.4%** <(Unbiased launch post, $0.004/task)>
- Humanity's Last Exam: **49.9%** <text-only, no tools (Unbiased launch post, $0.008/task)>
- Artificial Analysis Intelligence Index: no verified public score found
- CritPt / LCR / MLCR: no verified public score found

Coding:

- DeepSWE v1.1: **69.9%** <(agentic coding — listed above; primary coding evidence)>
- SWE-bench Verified / SWE-bench Pro: no verified public score found
- LiveCodeBench / SciCode: no verified public score found

Long context:

- 1,000,000-token window declared; MRCR / AA-LCR / RULER: no verified public score found

Multimodal:

- Image input declared (text + image in); MMMU / AI2D / CharXiv / Video-MME: no verified public score found

### Normalized scores (1–100)

- **Tool use: 76/100.** TB4.0 50.8% is a genuine but preliminary mid-band agentic result (frontier TB2.1 ref ≥85% → 100) and DeepSWE 69.9% is frontier-cost-adjusted; zero Tau/GDPval/MCP-Atlas/Claw-Eval evidence caps it at 76.
- **Reasoning: 88/100.** Two frontier-tier first-party results — GPQA 92.4% (≥90 ref) and HLE 49.9% text-only (≥30 ref → 90-100 tier) — but preliminary vendor runs with no independent replication, no AA Intelligence Index, and no CritPt keep it below 90.
- **Context window: 95/100.** 1M window lands the ≥1M tier (95–100); no retrieval evidence either way (no MRCR/AA-LCR score) → tier floor.
- **Multimodal: 75/100.** Text + image in / text out = 75–89 tier; zero multimodal benchmark numbers → floor of tier.
- **Coding: 82/100.** DeepSWE v1.1 69.9% matches Fable 5's 70.0% at 1/56 the task cost and TB4.0 50.8% is solid, but with no SWE-bench Verified, LiveCodeBench, or SciCode the composite caps at 82.
- **Cost efficiency: 90/100.** No Zen Free ID → paid scoring: $0.80 in / $3.20 out per 1M sits below the $1.25/$4.25 benchmark reference point (≈88); excellent $0.03 cached input, but no free tier keeps it at 90.
- **Overall Score: 83/100.** (76+88+95+75+82)/5 = 83.2 → 83 — best fit: preview blended router with frontier-tier reasoning (GPQA 92.4%, HLE 49.9%) and DeepSWE-matching agentic coding at open-source pricing — for cost-conscious devs who need reasoning muscle, not a proven tau3/MCP workhorse.

---

## Signature

- Provided by: **Mimo v2.6 Flash (opencode/mimo-v2.6-flash-free)** — 2026-10-05
- Method: public internet research (Unbiased AI model card + launch post, models.dev catalog); scores are normalized 1–100 interpretations, not official vendor scores. All vendor runs are preliminary (2026-10-01).
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
