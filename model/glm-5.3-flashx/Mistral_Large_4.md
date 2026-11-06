# GLM-5.3-FlashX — findings by Mistral Large 4

- Source: Z.ai / Zhipu (`glm-5.3-flashx`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.3-FlashX
- **Short description:** Z.ai's high-speed serving tier of GLM-5.3-Flash (released 2026-09-18) — the SAME weights as glm-5.3-flash (320B/18B MoE, MIT), not a new checkpoint, published at up to 200 output tokens/s and priced 2.5x the base Flash. Alias note: `glm-5.3-flash-x` (Zen route spelling) is a forbidden hyphenated duplicate of this folder per the alias roster.
- **Provider / access:** Z.AI API (`glm-5.3-flashx`), OpenRouter/Zen route; same model as base Flash.
- **Release / knowledge:** Released 2026-09-18; knowledge cutoff same as base (not restated).
- **IDs:** `glm-5.3-flashx` (Z.ai canonical API code).
- **Context window:** 1,000,000 tokens; up to 128,000 output.
- **Modalities:** Same as base Flash — text, image, video in; text out; mandatory thinking mode; function calling; structured output; streaming.
- **Pricing (as of 2026-11-05):** $0.37 / $1.25 per 1M in/out (cached $0.075) — 2.5x base Flash's $0.15/$0.50. No free tier.
- **Architecture:** Identical weights to GLM-5.3-Flash (320B total / 18B active MoE, hybrid sparse+linear attention, 1M ctx); serving/inference optimization only — a serving profile, not a separate model.

### Raw benchmarks found

Z.ai/API coverage cross-checked against orcarouter, apimaster, cometapi, pricepertoken, AA, OpenRouter; conflicts noted:

Agent / tool use:

- Published peak speed **200 output tokens/s** (orcarouter/apimaster); capability identical to base Flash (orcarouter: "you cannot buy FlashX and get a better model")
- AA Intelligence Index: **28** (AA model page for glm-5-3-flash — same weights; earlier DataCamp reading 57 — version drift, both cited)
- Benchmarks: identical to GLM-5.3-Flash by construction; no separate eval set — base Flash rows (GDPval-AA v2 leadership claim) carry over, labelled

Reasoning / knowledge:

- Same weights as glm-5.3-flash — GPQA provider range 82.1–92.5% applies (carried, labelled); no FlashX-specific evals

Coding:

- Same weights — base Flash coding claims carry over, labelled; no FlashX-specific numbers

Long context:

- 1M window / 128K out (same weights); no verified MRCR/RULER for this ID

### Normalized scores (1–100)

- **Tool use: 87/100.** Same capability as base Flash (AA 28 current / 57 earlier — drift cited) plus 200 tok/s serving; no separate rows.
- **Reasoning: 86/100.** Identical weights to base Flash; scored on carried-over evidence, labelled.
- **Context window: 96/100.** 1M / 128K in the 95–100 tier; no verified 512K+ retrieval.
- **Multimodal: 85/100.** Text/image/video in, text out (same weights).
- **Coding: 89/100.** Same weights as base Flash (launch-competitive coding rows, labelled).
- **Cost efficiency: 75/100.** $0.37/$1.25 at 2.5x base Flash sits between the $0.60/$2.20 (~92) and $1.25/$4.25 (~88) bands — premium purely for latency; no free tier.
- **Overall Score: 89/100.** Half-up mean of (87 + 86 + 96 + 85 + 89) / 5 = 88.6 → 89. Best fit: same model as glm-5.3-flash with 200 tok/s serving — pay the 2.5x only when latency is the binding constraint; otherwise use base Flash.

---

## Signature

- Provided by: **Mistral Large 4 (mistral-large-4)** — 2026-11-05
- Method: public internet research (1 search round, Z.ai/OpenRouter/AA cited, 2026-11-05 UTC); cross-checked against orcarouter, apimaster, cometapi, pricepertoken, AA, OpenRouter; same-weights finding (orcarouter/apimaster) drives the serving-profile framing; AA drift (28 vs 57) cited. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [orcarouter — GLM-5.3-FlashX release (2026-09-18, 200 tok/s, 2.5x base price)](https://www.orcarouter.ai/blog/glm-5-3-flashx-release)
  - [orcarouter — FlashX vs Flash: same model, 2.5x price](https://www.orcarouter.ai/blog/glm-5-3-flashx-vs-glm-5-3-flash)
  - [apimaster — GLM-5.3-FlashX (same weights, 1M ctx, 128K out, 200 tok/s)](https://apimaster.ai/blog/glm-5-3-flashx-api)
  - [cometapi — What is GLM-5.3-FlashX (serving upgrade, not a new checkpoint)](https://www.cometapi.com/what-is-glm-5-3-flashx/)
  - [pricepertoken — glm-5.3-flashx (released 2026-09-18, from $0.37/M input)](https://pricepertoken.com/pricing-page/model/z-ai-glm-5.3-flashx)
  - [Artificial Analysis — glm-5-3-flash (Index 28 reading, same weights)](https://artificialanalysis.ai/models/glm-5-3-flash)
  - [OpenRouter — z-ai/glm-5.3-flash (base, 1M ctx, thinking mode)](https://openrouter.ai/z-ai/glm-5.3-flash)
  - [opper — z-ai/glm-5.3-flashx](https://opper.ai/zhipu/glm-5.3-flashx)
