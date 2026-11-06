# Muse Wonder 1.0 — findings by Mistral Large 4

- Source: Meta (`muse-wonder-1.0` / `meta/muse-wonder`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Wonder 1.0
- **Short description:** Meta Superintelligence Labs' frontier agent model sold by the token on the Meta Model API — the API-reachable member of the Muse Wonder family (the stronger Muse Wonder Full is Muse Code subscription-only); replaces Muse Spark. Alias note: the bare `muse-wonder` product name resolves to this folder per the alias roster; `muse-wonder-full` is the separate subscription variant.
- **Provider / access:** Meta Model API (`muse-wonder-1.0`), Muse Code, OpenRouter (`meta/muse-wonder`). Direct, self-serve API.
- **Release / knowledge:** Released 2026-10-12 (Zuckerberg X post + multiple outlets; one earlier snippet said Sept 12 — conflict noted, Oct 12 is the corroborated date). Knowledge cutoff not restated in reviewed snippets.
- **IDs:** `muse-wonder-1.0` (Meta Model API); `meta/muse-wonder` (OpenRouter).
- **Context window:** 1,048,576 tokens (1M).
- **Modalities:** Text, image, video, audio, PDF in; text out; reasoning effort incl. max; tool calls; long-running agents; computer use.
- **Pricing (as of 2026-11-05):** $4 / $20 per 1M in/out; cached input $0.20/M (OpenRouter/omniakey/techpilot). Muse Code plans $5–$200/mo for app access. No free API tier.
- **Architecture:** Proprietary, weights not disclosed; larger foundation than Muse Spark 1.3, trained for "Active Focus" long-horizon agent work.

### Raw benchmarks found

Official dev.meta.ai/OpenRouter + coverage cross-checked against aireleasetracker, eesel, myclaw, VentureBeat, AA; conflicts noted:

Agent / tool use:

- Artificial Analysis Intelligence Index: **52** for plain Wonder (max effort); Wonder Full 56 (eesel/myclaw) — version drift noted; AA evaluations, not Meta composites (VentureBeat)
- Long-running personal/professional agents focus; independent cost test cheaper per task than Anthropic's top models (myclaw, single test)
- Claw-Eval / OSWorld / AutomationBench: no verified public score found for muse-wonder-1.0

Reasoning / knowledge:

- AA Index 52 (above); legal/finance/business-workflow leads in Meta's launch table (Full leads those rows) — vendor-claimed, AA-backed
- GPQA / HLE / LCR: no verified public score found for this exact ID

Coding:

- DeepSWE v1.1: **78.8%** vs Muse Spark 1.3's 75.4% (aireleasetracker comparison)
- Multi-file software engineering / refactor strength (Meta testing, layer3labs)
- SWE-bench Verified / Terminal-Bench / LiveCodeBench: no verified public score found for this exact ID

Long context:

- 1M window (official); no verified MRCR/RULER score found for this ID

### Normalized scores (1–100)

- **Tool use: 89/100.** Purpose-built for long-running agents with AA 52; few per-benchmark tool rows published for the 1.0 SKU specifically.
- **Reasoning: 87/100.** AA 52 is solid frontier-adjacent; no GPQA/HLE published for this ID.
- **Context window: 96/100.** 1M window in the 95–100 tier; no verified ≥98% retrieval at 512K+.
- **Multimodal: 92/100.** Text/image/video/audio/PDF in, text out — full 90–100 band.
- **Coding: 91/100.** DeepSWE 78.8% leads Muse Spark and most of the field; no SWE-V/TB rows captured.
- **Cost efficiency: 60/100.** $4/$20 per 1M at the $3/$15 ≈ 60 band edge; $0.20/M cache reads; no free tier.
- **Overall Score: 91/100.** Half-up mean of (89 + 87 + 96 + 92 + 91) / 5 = 91.0 → 91. Best fit: API-reachable Meta frontier agent at Opus-5.5-like $4/$20; use Wonder Full (subscription) only if its +4 AA points justify the plan.

---

## Signature

- Provided by: **Mistral Large 4 (mistral-large-4)** — 2026-11-05
- Method: public internet research (3 web searches, official dev.meta.ai/OpenRouter cited, 2026-11-05 UTC); cross-checked against aireleasetracker, eesel, myclaw, VentureBeat, codersera, omniakey, techpilot, shattered.io, DEV Community; release-date conflict (Oct 12 corroborated vs a Sept 12 snippet) and AA readings (52 vs 56 Full) noted. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Muse Wonder — Meta dev portal (official)](https://dev.meta.ai/models/muse-wonder)
  - [OpenRouter — meta/muse-wonder ($4/$20, cache $0.20, 1M ctx, 5 input modalities)](https://openrouter.ai/meta/muse-wonder)
  - [aireleasetracker — Muse Spark 1.3 vs Muse Wonder (DeepSWE 78.8% vs 75.4%)](https://aireleasetracker.com/compare/meta/muse-spark-1.3/meta/muse-wonder)
  - [eesel — Muse Wonder review (AA 52 plain / 56 Full; Full second only to Opus 5.5)](https://www.eesel.ai/blog/meta-muse-wonder-review)
  - [VentureBeat — only the weaker Wonder is API-available; AA-sourced results](https://venturebeat.com/technology/metas-new-muse-wonder-and-muse-wonder-full-models-achieve-frontier-performance-but-only-the-weaker-one-is-available-via-api)
  - [codersera — Muse Wonder guide ($4/$20, 1M, Full = Muse Code $50/$200)](https://codersera.com/blog/muse-wonder-complete-guide-2026/)
  - [omniakey — Muse Wonder vs Full facts (model ID muse-wonder-1.0)](https://omniakey.com/blog/muse-wonder)
  - [myclaw.ai — Wonder vs Full ($50 plan question; AA Full 56)](https://myclaw.ai/blog/muse-wonder-vs-wonder-full)
  - [layer3labs — Muse Wonder for coding (multi-file engineering)](https://www.layer3labs.io/guides/muse-wonder-for-coding)
  - [DEV Community — Muse Wonder benchmarks/pricing/API](https://dev.to/agent-one/meta-muse-wonder-benchmarks-pricing-api-and-how-to-use-it-4jhh)
