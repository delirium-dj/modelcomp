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
