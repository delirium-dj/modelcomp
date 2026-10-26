# MiMo V2.5 Free — findings by Qwen 3.8 Max

- Source: Xiaomi (`mimo-v2.5-free`)
- Date: 2026-10-26 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.5 Free
- **Short description:** The free OpenCode Zen tier serving Xiaomi's **MiMo-V2.5** (the standard 310B/15B-active omni-modal MoE — *not* the 1T MiMo-V2.5-Pro, and not the separate 256K "MiMo-V2.5-Base" pretrained checkpoint). A native see-hear-act model (text/image/audio/video in) with 1M native context. **Retired upstream Oct 21, 2026** — Xiaomi withdrew the V2.5 / V2.5-Pro model IDs, so this free lane is effectively defunct and the open weights are the durable artifact.
- **Provider / access:** OpenCode Zen `opencode/mimo-v2.5-free` (free tier, Chat Completions); open weights (MIT) on Hugging Face; native Xiaomi MiMo API (retired Oct 21, 2026).
- **Release / knowledge:** Released April 22, 2026 (Xiaomi announcement; some trackers list Apr 23). **Retired October 21, 2026, 10:00 UTC+8.** Knowledge cutoff not published.
- **IDs:** `opencode/mimo-v2.5-free`. Free tier — `noFreeId` is not set (this *is* the free entry).
- **Context window:** Free Zen lane is hard-capped at **200,000 total / 32,768 max output**; the model is **natively 1M** (progressively extended 32K→256K→1M in post-training), but native 1M required paid/native hosting that is now retired.
- **Modalities:** Text, image, audio, video in → text out (native visual + audio encoders, both pretrained in-house, joined to the LLM via lightweight projectors); reasoning/agentic post-training (RL + MOPD); tool calls supported. **A true 4-input-modality omni model** — audio input is rare at any price.
- **Pricing (as of 2026-10-26):** **$0 on the free Zen tier** (limited-time; data collected during the free period may be used to improve the model — *not* zero-retention). Native list was ~$0.14 / $0.28 per 1M in/out (same band as the 309B MiMo-V2.6-Flash).
- **Architecture:** 310B-parameter Sparse MoE, **15B active**, trained on **48T tokens**; language backbone inherits MiMo-V2-Flash's **hybrid sliding-window attention**; FP8 (E4M3) mixed precision; **MIT license**, fully open-sourced (weights + tokenizer + model card on Hugging Face).

### Raw benchmarks found

> The base MiMo-V2.5 has **no Artificial Analysis model page** (`mimo-v2-5` returns 404) and **no Vals AI SWE-bench row** — so there is no neutral composite Index or independent coding anchor for this exact variant. Numbers below are vendor (Xiaomi) or from the open model card; the Pro sibling is separately ranked and is NOT this entry.

Independent / neutral:

- AA Intelligence Index: **no page found for the base MiMo-V2.5** (404). For orientation only, the *different* variants rank: MiMo-V2.5-**Pro** (1T) ~54 at launch, MiMo-V2.6-Pro 46 (current, highest open-weight), MiMo-V2.6-Flash (309B) 38, MiMo-V2-Omni 24 — none of these is the 310B V2.5 base scored here.
- Vals AI SWE-bench Verified: **no row** for MiMo-V2.5.

Vendor (Xiaomi release + open model card; self-reported, not independently replicated):

- Agentic: **Claw-Eval general subset 62.3** — placed "at the Pareto frontier of performance and efficiency"; "surpasses MiMo-V2-Pro in agentic performance"; high token efficiency.
- Coding: internal **MiMo Coding Bench** — "matching MiMo-V2.5-Pro at half the cost" (no absolute number published).
- Multimodal / perception: "matches **Gemini 3 Pro on video**, **Claude Sonnet 4.6 on multimodal agentic** work, and stays competitive across image and document understanding" (qualitative vendor claims; no numeric table released for the base).

> Provenance: this entry is thin on hard, independently-verifiable numbers — the strongest concrete figure is the vendor-run Claw-Eval 62.3. The architecture (310B/15B, 48T tokens, native audio+visual encoders, MIT, 1M native) is confirmed by the open-source model card and is reproducible in principle, which is why this is scored rather than self-excluded (it is not zero-evidence).
> Meta verification: `310B/15B-active` ✓ (Xiaomi); `omni-modal (text/image/audio/video in)` ✓; `Zen caps 200K/32K, native 1M` ✓; free-tier data-usage caveat ✓; `native ~$0.14/$0.28` ✓ (matches the V2.6-Flash band). Enriched/corrected: license is **MIT** (meta omitted it); the model was **retired Oct 21, 2026** (meta does not mention this — material to any current deployment); "base (not Pro)" means the standard V2.5, distinct from the 256K "MiMo-V2.5-Base" pretrained checkpoint.

### Normalized scores (1–100)

- **Tool use: 78/100.** Vendor agentic story is credible and token-efficient — Claw-Eval general **62.3** at the "Pareto frontier," "surpasses MiMo-V2-Pro," and matches Claude Sonnet 4.6 on multimodal agentic work — but there is no AA agentic sub-score or Vals row to verify it, and the model is retired. Capped by vendor-only provenance + retirement.
- **Reasoning: 75/100.** No independent Intelligence Index exists for this 310B/15B base (AA page 404); it is a mid-size omni MoE below the 1T V2.5-Pro, positioned by Xiaomi as frontier-competitive but with no neutral reasoning benchmark to confirm it. Capped by the total absence of an independent composite and by retirement.
- **Context window: 74/100.** This free entry is hard-capped at **200K total / 32,768 output** (the low output cap is a real constraint for long generations). The model is natively 1M, which earns a few points above the 200K floor, but native 1M required the now-retired paid lane — so as served, this is a 200K/32K tier.
- **Multimodal: 83/100.** The standout: a genuine native **omni** model — text + image + **audio** + video input via in-house-pretrained visual and audio encoders (open-source-confirmed architecture), with vendor claims of matching Gemini 3 Pro on video. Native audio input is rare at any price. Held at 83 (not higher) because the multimodal *quality* is vendor-asserted with no numeric table or independent replication.
- **Coding: 76/100.** Only a relative vendor claim ("matching MiMo-V2.5-Pro at half the cost" on the internal MiMo Coding Bench) with **no absolute SWE-bench/LiveCodeBench/Terminal-Bench number and no Vals row** for the base. Capped by the absence of any concrete, comparable coding benchmark.
- **Cost efficiency: 95/100.** **$0 on the free Zen tier** — near the top of the scale — with native pricing (~$0.14/$0.28) also cheap and MIT weights free to self-host. Docked from 100 for the limited-time free window, the training-on-your-data caveat, the hard 200K/32K cap, and retirement. Not counted toward Overall.
- **Overall Score: 77/100.** Mean of Tool 78 + Reasoning 75 + Context 74 + Multimodal 83 + Coding 76 = 386 / 5 = 77.2 → 77. Best fit: was the cheapest way to run a genuine open-weight (MIT) omni-modal agent — free, audio-capable, 1M-native — but it is **retired (Oct 21, 2026)**, the free lane capped context hard, and no independent benchmark corroborates the vendor claims; self-host the MIT weights or move to MiMo-V2.6-Flash/Pro if you need a supported model. **Divergence note:** curated queue 82.2 vs my 77 → **−5.2**. The queue credits the omni breadth, free cost, and vendor agentic/coding story; I discount for the upstream retirement, the free-tier 200K/32K cap, and — most importantly — the complete lack of an independent AA Index or Vals anchor for this exact base variant (only a vendor-run Claw-Eval 62.3 and qualitative "matches Gemini/Sonnet" claims).

---

## Signature

- Provided by: **Qwen 3.8 Max (qwen/qwen-3.8-max)** — 2026-10-26
- Method: public internet research (Xiaomi MiMo-V2.5 official release page; SecondTalent "Every Xiaomi MiMo Model Explained" comparison and Xiaomi model-update/pricing logs; Artificial Analysis — base page 404, Pro/V2.6 pages for orientation; Hugging Face open model card); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8_Max.md`, using the same headings.
