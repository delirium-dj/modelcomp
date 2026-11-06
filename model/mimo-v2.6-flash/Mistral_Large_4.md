# MiMo V2.6 Flash — findings by Mistral Large 4

- Source: Xiaomi (`xiaomi/mimo-v2.6-flash`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.6 Flash
- **Short description:** The efficiency checkpoint of Xiaomi's MiMo-V2.6 family (2026-09-21/22) — 309B/15B-active omnimodal MoE under MIT that nearly matches Pro at a third of the API price; ships with Pro, Pro-UltraSpeed and a 9B distill. V2.5 models deprecate 2026-10-21.
- **Provider / access:** Xiaomi MiMo platform API (`mimo-v2.6-flash`), OpenRouter (`xiaomi/mimo-v2.6-flash`); MIT weights on Hugging Face (`XiaomiMiMo/MiMo-V2.6-Flash-RL`).
- **Release / knowledge:** Released 2026-09-21/22 (date conflict between sources noted); knowledge cutoff not restated in reviewed snippets.
- **IDs:** `mimo-v2.6-flash` (API); `xiaomi/mimo-v2.6-flash` (OpenRouter); HF `XiaomiMiMo/MiMo-V2.6-Flash-RL`.
- **Context window:** 1,000,000 tokens.
- **Modalities:** Omnimodal — text, image, video, audio in; text out; reasoning; tool calls.
- **Pricing (as of 2026-11-05):** $0.14 / $0.28 per 1M in/out, cached input $0.003/M — a third of Pro's $0.435/$0.87; flat rate. No free API tier; MIT self-host.
- **Architecture:** Open weights, MIT license; 309B total / 15B active sparse MoE with hybrid attention.

### Raw benchmarks found

Official launch + family comparisons cross-checked against AA, BenchLM, llm-stats, eesel, codersera, XenoSpectrum, orcarouter; conflicts noted:

Agent / tool use:

- AutomationBench: **52.3** vs Pro 53.1 (eesel — nearly matches at 1/3 price)
- AA Intelligence Index: **27** (current AA page) vs **37.88 on v4.3.2** (codersera) — major version drift, both cited; Pro at 46/46.3
- OSWorld / Claw-Eval: no verified public score found for flash specifically

Reasoning / knowledge:

- GPQA / HLE / SciCode: no verified public score found for mimo-v2.6-flash specifically (Pro sibling: GPQA 87.9, HLE 49.4 — labelled, not merged)

Coding:

- Exceeds V2.5 Pro on every shared benchmark despite the lower Flash price tier (tokenharbor)
- SWE-bench / DeepSWE / TB: no verified public score found for this exact ID

Long context:

- 1M window (official); no verified MRCR/RULER score found for this ID

### Normalized scores (1–100)

- **Tool use: 85/100.** AutomationBench 52.3 ≈ Pro's 53.1 at 1/3 price — the Flash value story; no OSWorld/Claw rows.
- **Reasoning: 83/100.** AA 27 current vs 37.88 v4.3.2 — drift flagged; scored between readings.
- **Context window: 96/100.** 1M flat-priced window in the 95–100 tier; no verified 512K+ retrieval.
- **Multimodal: 92/100.** Omnimodal text/image/video/audio in, text out.
- **Coding: 86/100.** Beats V2.5 Pro on all shared rows; no flash-specific SWE/TB numbers captured.
- **Cost efficiency: 98/100.** $0.14/$0.28 with $0.003 cached in the 97–99 band; MIT self-host; no free tier.
- **Overall Score: 88/100.** Half-up mean of (85 + 83 + 96 + 92 + 86) / 5 = 88.4 → 88. Best fit: high-throughput open-weight workhorse — omnimodal, 1M ctx, ~$0.14/$0.28 or self-hosted; Pro for the extra AA points.

---

## Signature

- Provided by: **Mistral Large 4 (mistral-large-4)** — 2026-11-05
- Method: public internet research (3 web searches, official Xiaomi launch + HF cited, 2026-11-05 UTC); cross-checked against AA, BenchLM, llm-stats, eesel, codersera, XenoSpectrum, orcarouter, secondtalent, CellCog, VentureBeat; conflicts (release 09-21 vs 09-22; AA 27 vs 37.88) listed side by side; Pro-sibling figures labelled, not merged. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [MiMo V2.6 series — Xiaomi MiMo official docs](https://mimo.mi.com/docs/en-US/updates/model)
  - [OpenRouter — xiaomi/mimo-v2.6-flash (309B/15B MoE, 1M ctx, multimodal)](https://openrouter.ai/xiaomi/mimo-v2.6-flash)
  - [llm-stats — mimo-v2.6-flash ($0.14/$0.28, cached $0.003, 309B/15B)](https://llm-stats.com/models/mimo-v2.6-flash)
  - [Artificial Analysis — mimo-v2-6-flash (Index 27 reading)](https://artificialanalysis.ai/models/mimo-v2-6-flash)
  - [codersera — Flash 37.88 on AA v4.3.2 (conflicting reading)](https://codersera.com/blog/xiaomi-mimo-v2-6-flash-distill-9b-guide-2026/)
  - [eesel — V2.6 pricing (Flash $0.14/$0.28, AutomationBench 52.3 vs Pro 53.1)](https://www.eesel.ai/blog/xiaomi-mimo-v2-6-pricing)
  - [tokenharbor — Flash exceeds V2.5 Pro on all shared benchmarks](https://tokenharbor.ai/blog/mimo-v2-6-pro-vs-flash-benchmarks-pricing-and-the-upgrade-from-v2-5)
  - [XenoSpectrum — Flash nearly matches Pro at 1/3 price](https://xenospectrum.com/en/xiaomi-mimo-v2-6-agentic-rl/)
  - [orcarouter — HF repos MiMo-V2.6-Flash-RL (MIT, ungated)](https://www.orcarouter.ai/blog/mimo-v2-6-vs-mimo-v2-6-flash)
  - [CellCog — V2.6 family (weights MIT, API live 2026-09-21)](https://cellcog.ai/blog/mimo-v2-6/)
  - [BenchLM — mimo-v2-6-flash](https://benchlm.ai/models/mimo-v2-6-flash)
