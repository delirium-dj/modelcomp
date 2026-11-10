# Mercury Decide — findings by Inkling 2 Small

- Source: Inception Labs (`mercury-decide`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mercury Decide
- **Short description:** Inception Labs' dedicated decision (System-One-style typed decision) model — evaluates named questions against shared context and returns binary probabilities, categorical choices, or ordinal scores with typed answers, plus exact-span text extraction. A specialist decision endpoint for classification/scoring/extraction, not a chat model. Sibling to Mercury 3 (diffusion LLM). Also rival to TypeSafe's Jev.
- **Provider / access:** Inception Labs API `v1/decisions` (NOT `v1/chat/completions`; no streaming, no tools); OpenAI-compatible Decisions-style protocol; also proxied via OpenRouter; BeelineBench harness runs it.
- **Release / knowledge:** 2026-10-01 (launch post, @inception_ai on 2026-10-02); knowledge cutoff not published.
- **IDs:** `mercury-decide` (Inception Labs)
- **Context window:** not published on the models page (`—` / "context: —"); cost model is input-tokens-only.
- **Modalities:** text + JSON + **image** in (the pricing table lists `Text / JSON / Image`); typed decision outputs (probability/categorical/ordinal/extracted spans), never chat text; no tool calls, no chat completions, no streaming.
- **Pricing (as of 2026-11-10):** **$0.02 / 1M input tokens** (50% launch discount from $0.04), $0 output (reported, unbilled); free completion cap n/a — input-only billing makes high-volume classification cheap to near-free.
- **Architecture:** diffusion-based decision model; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use (decision planning):

- BeelineBench 1.0.0 (independent, 7 planning domains 248 trials?): overall **0.28** (tie for best; vs pplx-decider 1.0 0.28, Jev 1.13 0.26, Liquid d1 0.22, GPT-6 Luna-Decisions 0.19). Beats heuristic in **4 of 7** domains (Jev 1.13: 3 of 7). Domain breakdown: Blocksworld **0.63**, Wikispeedia **0.67**, Keys and doors **0.65**, Countdown **0.36**, 8-puzzle **0.16**, Word ladder **0.16**, Rush Hour **0.05** (github.com/kyle-pena-nlp/beelinebench)
- An independent hobbyist (2026-11-06): "better than Jev at what I threw at it… P95 latency ~5.6x lower" than fine-tuned Muse Glimmer (HN)

Reasoning / knowledge (classification quality):

- BeelineBench (above) is the only published scored comparison for this ID — no GPQA/HLE/Index rows (not a generative chat model)
- OpenRouter rerun by an independent tester (2026-10-06/07): Mercury Decide **0.83** vs GPT-6 Luna-Decisions 0.66 on their "investing" tagging ask (same input); later tagged onto the same test, "roughly on par with Jev" (HN)

Coding:

- no verified public score found (not a coding model)

Long context:

- Context window not published; pricing is input-token only — no verified public long-context score found

Multimodal:

- Text/JSON/Image input supported (pricing table); no verified public multimodal benchmark rows for this ID

Safety note:

- Independent red-team test (700+ generated shell commands): approved some unsafe commands, vulnerable to base64-obfuscated `eval "$(...| base64 -d)"` payloads; only Liquid D1 and Clef matched Jev there (HN, 2026-10-07)

### Normalized scores (1–100)

(Scored as the narrow decision specialist it is — not as a general model.)

- **Tool use: 40/100.** No tools/chat at all (endpoint restriction) — credit only for decision-planning ability: BeelineBench 0.28 (best-in-set, 4/7 domains beat heuristic) shows multi-step "tool-like" planning capability in the planner seat, not in the agent seat.
- **Reasoning: 66/100.** Structured decision quality is SOTA-tier for the class: BeelineBench joint-best 0.28 (beats Jev 1.13, Liquid d1, Luna), independent 0.83 vs 0.66 over Luna-Decisions and rep-parity claims vs Jev; capped by the base64-payload safety failure and the absence of GPQA/HLE-class rows.
- **Context window: 55/100.** Window not published ("—" on the models page); input-token-only billing means effectively unknown; scored conservatively below mid-pack.
- **Multimodal: 55/100.** Text/JSON/**Image** input supported (pricing table) — rare for a decision endpoint; zero measured rows for image-in-decision-tasks; provisional.
- **Coding: 15/100.** Not a coding model; no code rows exist; below the text-only floor.
- **Cost efficiency: 98/100.** $0.02 per 1M input tokens, output unbilled — among the cheapest classification calls tracked; high-volume eligible.
- **Overall Score: 46/100.** (40 + 66 + 55 + 55 + 15) / 5 = 46.2 → 46. Best fit: typed classification/scoring/extraction at scale (auto-approve triage, routing, safety gates) — paired with a generative model for the actual work; not for chat, writing, or code.

## Signature

- Provided by: **Inkling 2 Small (thinkingmachines/inkling-2-small)** — 2026-11-10 UTC
- Method: public internet research (Inception Labs docs — models table, HN launch + independent reports, BeelineBench 1.0.0 verified read); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Mercury Decide — Inception Labs models docs](https://docs.inceptionlabs.ai/get-started/models)
  - [Mercury Decide launch post — inception_ai (X/Twitter, 2026-10-01)](https://twitter.com/_inception_ai/status/2105375133003325768)
  - [BeelineBench 1.0.0 — GitHub (7-domain decision benchmark, Mercury Decide rows)](https://github.com/kyle-pena-nlp/beelinebench)
  - [Mercury Decide community reports — Hacker News thread](https://news.ycombinator.com/item?id=49931514)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
