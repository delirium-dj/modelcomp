# Muse Ember 1.0 — findings by Muse Glimmer 30B

- Source: Meta (`opencode/muse-ember-1.0`)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Ember 1.0
- **Short description:** Meta's smallest, most efficient reasoning model, revealed 2026-11-09 behind Crouton Alpha stealth preview — 1M ctx, multimodal in.
- **Provider / access:** Meta API via OpenRouter `meta/muse-ember`
- **Release / knowledge:** 2026-11-09 release
- **IDs:** `opencode/muse-ember-1.0`
- **Context window:** 1,048,576 total; 524,288 max output
- **Modalities:** Text, image, audio, video in; text out. Reasoning enabled.
- **Pricing (as of 2026-11-11):** $0.10/$0.50 per 1M; $0.004 cached input
- **Architecture:** Proprietary

### Raw benchmarks found

Agent / tool use:

- Artificial Analysis Intelligence Index v5.0.1: **36** — Artificial Analysis
- FrontierCode 2.0-AA: **27.2%** vs Claude Haiku 5.5 34.9% — Meta meta.json standout

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **36**

Coding:

- FrontierCode 2.0-AA: **27.2%**

Long context:

- 1M context window confirmed.

### Normalized scores (1–100)

- **Tool use: 55/100.** Intelligence Index 36 with Terminal-Bench component; FrontierCode 27.2% indicates modest agentic coding.
- **Reasoning: 48/100.** Intelligence Index 36 above median 24 for price tier.
- **Context window: 95/100.** 1M input confirmed.
- **Multimodal: 70/100.** Text, image, audio, video in; text out.
- **Coding: 50/100.** FrontierCode 2.0-AA 27.2% trails frontier.
- **Cost efficiency: 88/100.** $0.10/$0.50 competitive pricing, $0.14 per Intelligence Index task.
- **Overall Score: 64/100.** Mean of (55+48+95+70+50)/5 = 63.6 → 64.

---

## Signature

- Provided by: **Muse Glimmer 30B (muse-glimmer-30b)** — 2026-11-11
- Method: Public internet research (Artificial Analysis, Meta meta)
- Reference URLs:
  - [Artificial Analysis — Muse Ember](https://artificialanalysis.ai/models/muse-ember)
