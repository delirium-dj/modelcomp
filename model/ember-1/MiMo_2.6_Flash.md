# Ember-1 — findings by MiMo 2.6 Flash

- Source: Fireworks AI / Fireworks Research (`ember-1`)
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ember-1
- **Short description:** Fireworks Research's first "specialized intelligence" model — a post-trained derivative of Moonshot's **Kimi K3** that trims redundant reasoning: ~40% fewer tokens at comparable quality on Fireworks' seven-benchmark suite, and in two customers' live production A/B tests **71.3% fewer reasoning tokens / 39% fewer total tokens** with quality scores of 0.751 (K3) vs 0.753 (Ember-1). Launched as a two-week Research Preview on Fireworks Serverless (community demand decides permanence); API-only — no weights published. Marketing highlights: new Pareto frontier on Doximity's Bedside Bench (500 clinical cases) by cost/task vs GPT-6 Astra, Claude Opus 5, GPT-5.6 Sol, GLM 5.3; beats K3-max on Terminal-Bench 2.1 (82.0 vs 80.9) and DeepSWE 1.1 (75.2 vs 66.4) while losing a point on SWE-bench Verified (92.2 vs 93.2).
- **Provider / access:** Fireworks Serverless (`accounts/fireworks/models/ember-1`), OpenRouter (`fireworks/ember-1`); no self-hosting (weights not released).
- **Release / knowledge:** released 2026-09-23 (some trackers 09-22/09-24); knowledge cutoff not published.
- **IDs:** `ember-1` (Fireworks) / `fireworks/ember-1` (OpenRouter).
- **Context window:** **1,048,576 tokens** (~1.04M), inherited from K3; output limit not separately documented.
- **Modalities:** text + images in (vision per LLM Reference), text out; reasoning yes (shortened traces by design); tool calls yes (prompt caching; agentic/JSON/tool use listed by LLM Reference).
- **Pricing (as of 2026-10-07):** **$3.00 in / $15.00 out** per 1M, cached read $0.30 (10%) — identical to the Kimi K3 Fireworks rate card; blended ~$6.00/M. **Caveat:** Kimi K3 itself sells on other OpenRouter providers for as little as $1/$9, so Ember's economics come from burning ~40% fewer tokens, not a cheaper sticker; The New Stack measured 23% fewer reasoning tokens (not 40) and 3.4× faster wall-clock vs K3 on its Fireworks endpoint.
- **Architecture:** Kimi K3 base, Fireworks post-training (~50 experiments; token-efficient/budgeted RL style per Sebastian Raschka); size follows K3's undisclosed MoE.

### Raw benchmarks found

> **Every published number is vendor-run (Fireworks).** TensorFeed (2026-10): "no independent evaluator has published a score for Ember-1 yet."

Agent / tool use:

- Terminal-Bench 2.1: **82.0** (vendor, N=89) — beats K3-max's 80.9, **under the 85% ref**
- Terminal-Bench 4.0: **19.7** (vendor)
- SWE-Interact: 20.0; τ²-Bench Airline: **66%** (vendor)
- OSWorld / GDPval / ALE / MCP-Atlas / ALE rows: none found
- Doximity Bedside Bench (SII): new cost/task Pareto frontier across open and closed models incl. GPT-6 Astra, Claude Opus 5, GPT-5.6 Sol (vendor)

Reasoning / knowledge:

- **No GPQA / HLE / ARC-AGI / AA Intelligence Index rows published.**
- The New Stack independent hands-on (5 runs each, 3 task types): Ember-1 14/15 perfect vs Kimi K3's 15/15 — one arithmetic slip in a probability test; logic puzzles and deploy scheduling both 5/5 perfect. Not a standard benchmark, but the only outside signal.
- Specialized Intelligence Index (Fireworks' own expert-task suite) and Bedside Bench clinical eval are the reasoning proxies; both vendor.

Coding (vendor):

- SWE-bench Verified: **92.2** (N=500) — near K3-max 93.2, top-band
- DeepSWE 1.1: **75.2** (N=113) — **clears the 74%+ ref**, 8.8 pts above K3-max
- Terminal-Bench 2.1 82.0 as above; Live A/B customer coding agents: 0.753 vs 0.751 quality at 39% fewer tokens
- SciCode / FrontierCode / coding index rows: none found

Long context:

- 1.04M window; **no needle/MRCR/LCR retrieval figure** → capacity only.

Multimodal:

- Text + image input supported; **no image/video/PDF benchmark rows** found.

### Normalized scores (1–100)

- **Tool use: 81/100.** Vendor TB2.1 82.0 (under the 85 ref), TB4.0 19.7 low, τ²-Bench 66; no OSWorld/GDPval/ALE/MCP and no independent runs at all.
- **Reasoning: 77/100.** No verifiable reference rows (GPQA/HLE/AA Index all absent); the Doximity clinical Pareto frontier and New Stack's 14/15 logic/probability runs are encouraging proxies, but with zero refs on the board this cannot go higher.
- **Context window: 95/100.** 1.04M → ≥1M floor; no retrieval evidence anywhere.
- **Multimodal: 64/100.** Text + image in → image band (60–70); zero image-benchmark rows to place it.
- **Coding: 86/100.** SWE-bench Verified 92.2 and DeepSWE 75.2 both clear refs (the latter beating K3-max outright), which is the strongest two-row coding combo at this price tier; held back by TB2.1 82.0 (misses 85), TB4.0 19.7, no SciCode/SWE-V rows, and vendor-only provenance.
- **Cost efficiency: 66/100.** Sticker matches the $3/$15 anchor (~60) but the actual product is fewer billed tokens — A/B-verified 39% total spend cut, cache at 10%; undercut by K3's own $1/$9 discount providers and gated behind a two-week research-preview window with no free tier.
- **Overall Score: 81/100.** (81+77+95+64+86)/5 = 80.6 → 81 — a leaner Kimi K3, not a new frontier model: two cleared coding refs, one cleared tool ref never reached, all evidence vendor-run, with the efficiency story (token and latency savings, 3.4× faster in hands-on testing) doing the heavy lifting.

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi — opencode/mimo-v2.6-flash)** — 2026-10-07
- Method: fresh public internet research (Fireworks launch blog, OpenRouter, LLM Reference, TensorFeed, The New Stack, modelpricewatch, wpnews, Sebastian Raschka's post-training review); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---

## Merged duplicate - Mimo_v2.6_Flash.md (same rater, spelling variant, merged 2026-10-09)

> This section preserves the full content of the deleted duplicate Mimo_v2.6_Flash.md (same Xiaomi MiMo 2.6 Flash rater; variant spelling _v2.6 vs _2.6 plus case). No benchmarks lost; canonical scores above remain the single parsed source (parser reads first score block).

# Ember-1 — findings by Mimo v2.6 Flash

- Source: Fireworks Research/Ember-1 (`accounts/fireworks/models/ember-1`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ember-1
- **Short description:** Fireworks Research's first specialized token-efficiency model (announced 2026-09-23): Kimi K3 post-trained to cut reasoning/output tokens ~40% while holding K3-level quality, aimed at agentic coding and long agent loops where reasoning tokens dominate cost. Ships as a Research Preview on Fireworks Serverless (initial two-week window; permanence decided by community demand).
- **Provider / access:** Fireworks Serverless API only (OpenAI-compatible; Python client/REST/firectl); pay-per-token, "Ready" state on the model library. **No weights, no training code released** — unlike base Kimi K3, it cannot be self-hosted. No $0 free tier.
- **Release / knowledge:** created 2026-09-22, announced 2026-09-23; knowledge cutoff not published.
- **IDs:** `accounts/fireworks/models/ember-1`; no Zen Free ID found.
- **Context window:** **1040k (~1,040,000) tokens** (Fireworks model page specification); max output not stated; BenchLM lists 1.04M.
- **Modalities:** text + **image in** (Fireworks model page: "Support image input: Supported"); text out; reasoning yes (shorter traces by design); **function calling supported**; embeddings/rerankers not supported; fine-tuning not supported on this preview.
- **Pricing (as of 2026-10-02):** **$3.00 in / $0.30 cached in / $15.00 out per 1M** — identical to Kimi K3's rate card; all savings come from generating ~40% fewer tokens, not a lower unit price (Fireworks pricing; Oflight analysis: ~$0.45 vs $0.74 per typical coding task).
- **Architecture:** 2.78T-parameter MoE (Kimi K3 base, per Fireworks specification row); Ember-1's own weights proprietary to Fireworks; no instruction-tuning disclosure or parameter-change (post-training only).

### Raw benchmarks found

> Measured numbers with (source / rank / harness). All Ember-1 figures below are **vendor-run by Fireworks Research** (official announcement, 2026-09-23) — independent third-party replication not yet available as of 2026-10-02.

Agent / tool use:

- **Terminal-Bench 2.1: 82.0%** (n=89; vs Kimi K3-max 80.9% — Ember-1 leads; cost −51.9%) — Fireworks blog, via BenchLM/LavX
- **τ²-Bench Airline: 66%** (n=50; vs K3-max 64%) — Fireworks blog
- GDPval-AA / Tau3-Banking / MCP-Atlas / OSWorld: no verified public score found

Reasoning / knowledge:

- GPQA Diamond / HLE / LCR / AA Intelligence Index: **no verified public score found for Ember-1** (reasoning quality inferred only via K3-parity claims: "matching K3-max quality at a fraction of the cost" across 7 benchmarks, plus the Doximity Bedside Bench Pareto frontier on Fireworks' Specialized Intelligence Index, where it led GPT-5.6 Sol / GPT-6 Astra / Claude Opus 5 on cost-per-task)

Coding:

- **SWE-bench Verified: 92.2%** (n=500; K3-max 93.2%) — Fireworks blog
- **DeepSWE 1.1: 75.2%** (n=113; K3-max 66.4% — Ember-1 leads by +8.8pp) — Fireworks blog
- **SWE-Interact: 20.0%** (n=75; K3-max 21.3%) — Fireworks blog
- LiveCodeBench / SciCode / Vibe Code Bench: no verified public score found

Long context:

- ~1.04M window (Fireworks spec); MRCR / RULER / AA-LCR: no verified public score found

Multimodal:

- Image input supported per Fireworks model page; MMMU / MathVision / CharXiv: no verified public score found

### Normalized scores (1–100)

- **Tool use: 88/100.** Terminal-Bench 2.1 82.0% (frontier anchor 88%+ → 90–100, just below it) plus τ²-Bench Airline 66% (frontier anchor 50%+ → 90–100) with function calling supported; capped below 90 by no GDPval-AA/Tau3-Banking/MCP-Atlas numbers and vendor-only harness.
- **Reasoning: 75/100.** Zero direct GPQA/HLE/Index measurements for Ember-1; elevated into the low-70s+ only by strong adjacent evidence (K3-max parity across 7 benchmarks, Bedside Bench Pareto frontier vs GPT-5.6 Sol/GPT-6 Astra/Claude Opus 5) — cannot reach the 90+ frontier band without its own reasoning scores.
- **Context window: 95/100.** 1040k tokens sits in the ≥1M band (95–100); held at the band floor because no retrieval-quality (MRCR/RULER) measurement exists.
- **Multimodal: 62/100.** Image input is documented on the official model page (bottom of the +image-in band, 60–70); no video/audio in, no MMMU-style score, so no higher.
- **Coding: 95/100.** SWE-bench Verified 92.2% plus DeepSWE 1.1 at 75.2% — both at/above the methodology's top anchors (DeepSWE 74%+ → 90–100); the only cap is that all numbers are Fireworks-run without independent replication, and SWE-Interact 20.0% trails K3-max slightly.
- **Cost efficiency: 60/100.** Methodology anchor: $3/$15 per 1M = ~60 (paid, cache reads at $0.30); the ~40% token reduction improves cost-per-task ~40% but the rate card itself is frontier-priced, not cheap.
- **Overall Score: 83/100.** (88+75+95+62+95)/5 = 83.0 → 83 — best-fit: K3-class agentic coding/reasoning at ~60% of K3's per-task token cost, for teams on Fireworks Serverless wanting frontier SWE/terminal performance; watch the preview's two-week window and vendor-only evals.

---

## Signature

- Provided by: **Mimo v2.6 Flash (opencode/mimo-v2.6-flash-free)** — 2026-10-02
- Method: public internet research (Fireworks announcement blog and model library page, BenchLM, LavX News, Oflight analysis, OrcaRouter, Sebastian Raschka post-training overview); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

