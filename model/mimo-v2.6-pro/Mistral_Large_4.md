# MiMo V2.6 Pro — findings by Mistral Large 4

- Source: Xiaomi (`xiaomi/mimo-v2.6-pro`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.6 Pro
- **Short description:** Xiaomi's flagship open-weight MoE model (1.02T total / 42B active), top-scoring open-weight model on AA's index at launch (v4.3.2, 2026-09-23); omnimodal agent model; V2.5 Pro/Flash retired 2026-10-21 in favor of the V2.6 series.
- **Provider / access:** Xiaomi MiMo platform API, OpenRouter (`xiaomi/mimo-v2.6-pro`); open weights (MIT) on Hugging Face (`XiaomiMiMo/MiMo-V2.6-Pro-RL`) and ModelScope; technical report public.
- **Release / knowledge:** Released 2026-09-21/22 (official mimo.mi.com docs); knowledge cutoff not restated in reviewed snippets.
- **IDs:** `xiaomi/mimo-v2.6-pro` (OpenRouter); API ID `mimo-v2.6-pro`.
- **Context window:** 1,000,000 tokens (ultra-long context; flat pricing, no length threshold).
- **Modalities:** Omnimodal — text, image, video, audio in; text out; reasoning mode; tool calls/agentic.
- **Pricing (as of 2026-11-05):** $0.435 / $0.87 per 1M in/out, cached input $0.0036/M (cache hit <1% of miss; cache writes free per secondtalent), flat rate — no promo expiry. No free tier; MIT weights allow self-hosting.
- **Architecture:** Open weights, MIT license; 1.02T-param sparse MoE, 42B active; custom multilingual tokenizer; RL-trained (V2.6-Pro-RL variant).

### Raw benchmarks found

Official Xiaomi docs + HF cross-checked against BenchLM, BenchmarkList, ARMES, Requesty, AA, codersera, CellCog, XenoSpectrum; conflicts noted:

Agent / tool use:

- AutomationBench-AA: **58.6** (BenchmarkList)
- OSWorld-Verified: **82.0** (rank 13/72) (BenchmarkList)
- Agent's Last Exam: **31.6** (rank 15/43) (BenchmarkList)
- GDPval-AA: rank 22/358; AA-Briefcase: rank 22/155; JobBench: 62.0 (rank 9/57) (BenchmarkList)
- BenchLM composite: **#59 of 216 at 56.44/100** (Estimated)
- Claw-Eval: no verified public score found for this exact ID

Reasoning / knowledge:

- GPQA Diamond: **87.9%** (ARMES, exact-variant published)
- HLE: **49.4%** (Requesty); SciCode: **60.9%** (Requesty)
- Artificial Analysis Intelligence Index: **46** (codersera/CellCog) vs **46.3** (Requesty) — consistent; top open-weight on AA v4.3.2 at launch (XenoSpectrum nuance: "top-scoring open-weight", not "strongest AI")

Coding:

- SWE-bench Verified: **77.6%** (ARMES, exact-variant)
- DeepSWE / LiveCodeBench / FrontierSWE: no verified public score found for this exact ID

Long context:

- 1M window (official, flat-priced); no verified MRCR/RULER score found for this ID

### Normalized scores (1–100)

- **Tool use: 86/100.** AutomationBench-AA 58.6 and OSWorld 82.0 are strong; ALE 31.6 mid; no Claw-Eval for this ID.
- **Reasoning: 85/100.** GPQA 87.9% and HLE 49.4% solid for open weights; AA Index 46 top-of-open-weight band.
- **Context window: 96/100.** 1M flat-priced window in the 95–100 tier; no verified ≥98% retrieval at 512K+.
- **Multimodal: 92/100.** Omnimodal text/image/video/audio in, text out — top 90–100 band.
- **Coding: 88/100.** SWE-V 77.6% strong open-weight; SciCode 60.9%; no DeepSWE/LiveCodeBench captured.
- **Cost efficiency: 96/100.** $0.435/$0.87 per 1M with near-free cache reads sits in the ~$0.60/$2.20 ≈ 92+ band, cheapest frontier-class API found; MIT weights for self-hosting; no free tier.
- **Overall Score: 89/100.** Half-up mean of (86 + 85 + 96 + 92 + 88) / 5 = 89.4 → 89. Best fit: top open-weight pick — omnimodal, 1M context, very cheap API or self-hosted under MIT; trails proprietary frontier (Opus 5.5, Astra) on raw index.

---

## Signature

- Provided by: **Mistral Large 4 (mistral-large-4)** — 2026-11-05
- Method: public internet research (3 web searches, official Xiaomi docs/HF cited, 2026-11-05 UTC); cross-checked against BenchLM, BenchmarkList, ARMES, Requesty, AA, codersera, CellCog, XenoSpectrum, VentureBeat, pricepertoken, themodelgap; AA readings 46 vs 46.3 noted as consistent; "top open-weight" framing nuance cited. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [MiMo V2.6 series — Xiaomi MiMo official docs](https://mimo.mi.com/docs/en-US/updates/model)
  - [MiMo-V2.6: Scaling RL for Self-Improvement — Xiaomi news](https://mimo.mi.com/docs/en-US/news/latest/v2-6)
  - [XiaomiMiMo/MiMo-V2.6-Pro-RL — Hugging Face (MIT weights)](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL)
  - [codersera — MiMo-V2.6-Pro guide (1.02T/42B, AA 46, $0.435/$0.87)](https://codersera.com/blog/xiaomi-mimo-v2-6-pro-guide-2026/)
  - [BenchLM — mimo-v2-6-pro (#59/216 at 56.44, 1M ctx, 4 modalities)](https://benchlm.ai/models/mimo-v2-6-pro)
  - [BenchmarkList — mimo-v2.6-pro (AutomationBench 58.6, OSWorld 82.0, ALE 31.6)](https://benchmarklist.com/models/xiaomi-mimo-v2.6-pro/)
  - [ARMES Docs — mimo-v2.6-pro exact-variant (GPQA 87.9%, SWE-V 77.6%)](https://armes.ai/docs/models/xiaomi/mimo-v2.6-pro)
  - [Requesty — mimo-v2.6-pro (HLE 49.4%, SciCode 60.9%, Index 46.3)](https://www.requesty.ai/models/xiaomi/mimo-v2.6-pro)
  - [themodelgap — pricing verified 2026-09-22 ($0.435/$0.87, cache $0.0036)](https://themodelgap.com/models/mimo-v2-6-pro)
  - [CellCog — MiMo V2.6 open 1T model, AA 46](https://cellcog.ai/blog/mimo-v2-6/)
  - [XenoSpectrum — "top-scoring open-weight on AA v4.3.2" nuance](https://xenospectrum.com/en/xiaomi-mimo-v2-6-agentic-rl/)
  - [OpenRouter — xiaomi/mimo-v2.6-pro](https://openrouter.ai/xiaomi/mimo-v2.6-pro)
