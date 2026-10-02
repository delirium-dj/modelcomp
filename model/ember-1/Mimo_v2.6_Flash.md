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
