# Qwen 3.8 — findings by DeepSeek 4.1 Flash

- Source: Alibaba Qwen/Qwen 3.8 (`qwen-3.8`)
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8
- **Short description:** Alibaba's Qwen 3.8 generation flagship entry. The Qwen 3.8 family spans four public forms — Qwen3.8-27B (dense, Apache 2.0), Qwen3.8-Flash-Next (180B total / 6B active MoE), Qwen3.8-2.4T-A95B (2.4T total / 95B active MoE, text-only weights) and the hosted **Qwen3.8-Max** (same 2.4T backbone with text+image+video input). Alibaba claims 3.8 is "second only to Claude Fable 5", but its own flagship blog ships no benchmark table — this entry is scored from the 2.4T checkpoint model card and independent index rows. **Variant/alias flag:** treat plain `qwen-3.8` as the hosted 2.4T/A95B tier; if the Zen ID resolves to Qwen3.8-Max the numbers below transfer directly, and it should not be double-counted against a separate Max entry.
- **Provider / access:** Alibaba Cloud / Qwen (`qwen3.8` API family on QwenCloud/OpenRouter); open weights for 2.4T-A95B under a custom `qwen3.8-max` licence; Zen route `opencode/qwen-3.8`.
- **Release / knowledge:** Qwen3.8-Max announced 2026-08-02; 2.4T-A95B weights 2026-08-12; 27B weights 2026-08-13/14 (blog + OpenRouter release order). Knowledge cutoff not published on the pages checked.
- **IDs:** `qwen3.8` hosted family ID; weights `Qwen/Qwen3.8-2.4T-A95B`; Zen `opencode/qwen-3.8`. No Free ID verified → cost scored on paid pricing.
- **Context window:** 1,000,000 tokens (extended from 262,144 native); documented output budgets: 262,144 tokens for reasoning and 131,072 for the final answer.
- **Modalities:** hosted Max accepts text + image + video in → text out; the open 2.4T weights are text-only ("multimodal inputs are not supported" on the card). Reasoning yes with `reasoning_effort` xhigh/medium/low and `preserve_thinking`.
- **Pricing (as of 2026-09-23):** $2 in / $6 out per 1M tokens; cached input $0.25 per 1M.
- **Architecture:** sparse MoE — 2.4T total / 95B active for Max and the 2.4T-A95B checkpoint (open weights, custom licence); built on the Qwen 3.5 architecture foundation.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found** (one aggregator row printed 0.8%, which contradicts its own field-leader value of 88.3% — treated as a scrape error, not reported)
- Tau3-Banking: **49.1%** pass@1 (BenchmarkList, checked 2026-09-02)
- GDPval-AA: **1718 Elo** (BenchmarkList, 2026-09-02); field leader 1861
- Claw-Eval / ClawProBench / Toolathon / MCP-Atlas: **no verified public score found**
- ObviousBench **97.9%**; AIIQ composite IQ **119**

Reasoning / knowledge:

- GPQA Diamond: **93.5%** (BenchmarkList, 2026-09-02); the 2.4T checkpoint model card states **92.6%** — same tier, different run, both listed
- HLE: **42.4%** (BenchmarkList, 2026-09-02)
- LCR / MLCR: **AA-LCR 75.3%**; no MRCR/RULER row found
- CritPt: **20.0%** (BenchmarkList, 2026-09-02)
- Artificial Analysis Intelligence Index **57.7** (BenchmarkList); Epoch Capabilities Index **147.77** (#16 of 398, 2026-09-20 snapshot)
- Omniscience: AA-Omniscience **4.32** (BenchmarkList)
- Independent (non-vendor) architecture evaluation: **80/100**, behind Kimi K3 at 83 (Yotta Labs survey, 2026-08-04)

Coding:

- SWE-bench Verified: **no verified public score found for the 2.4T/Max tier** (Alibaba has published no flagship table)
- SWE-bench Pro: **61.7%** — this is the **Qwen3.8-27B** open-model card figure, not the flagship; listed here only as the family's only verified SWE number
- SciCode **51.6%** (BenchmarkList, 2026-09-02); programme-level benchmarks (SWE-bench Multilingual, LiveCodeBench, DeepSWE): **no verified public score found**
- Coding category rank: 91st percentile on BenchmarkList's composite (2 evals)

Long context:

- No long-context retrieval evaluation (MRCR/RULER) was found for the 2.4T tier; the 1M context is a documented capability, not a measured retention figure.

### Normalized scores (1–100)

- **Tool use: 89/100.** GDPval-AA 1718 Elo (frontier reference is 1750+) and Tau3-Banking 49.1% pass@1 (frontier reference ~50%+) are both at the edge of the 90–100 band; capped below 90+ because Terminal-Bench 2.1, Toolathon and MCP-Atlas had no verifiable score for this ID.
- **Reasoning: 90/100.** GPQA Diamond 93.5% (92.6% on the checkpoint card) and HLE 42.4% clear the frontier references (GPQA 90%+, HLE 40%+), and AA Intelligence Index 57.7 approaches the 60+ marker; CritPt 20.0% is mid-pack, so the score stops at the band floor.
- **Context window: 95/100.** 1M input (extended from 262K native) is the ≥1M tier; capped at the floor because no ≥98% retention at 512K+ is measured, and the reasoning/final output budgets (262K/131K) are advisory, not guaranteed.
- **Multimodal: 85/100.** The hosted 2.4T tier accepts text + image + video in → text out ("+video/PDF in = 75–90"); below 90 because there is no audio input, no non-text output and no verified vision benchmark for this ID — and the open weights drop multimodal entirely.
- **Coding: 82/100.** SciCode 51.6% plus a 91st-percentile coding composite are solid, and the family's only verified SWE number (Qwen3.8-27B: SWE-bench Pro 61.7%) shows credible engineering performance; capped hard because Alibaba published no SWE-bench Verified, LiveCodeBench or DeepSWE figure for the 2.4T/Max tier, so the 90+ band (DeepSWE 74%+, TB 85%+) cannot be claimed.
- **Cost efficiency: 78/100.** $2.00/$6.00 per 1M (cached $0.25) sits between the $1.25/$4.25 ≈ 88 and $3/$15 ≈ 60 anchors — mid-premium pricing for frontier-class numbers.
- **Overall Score: 88/100.** (89 + 90 + 95 + 85 + 82) / 5 = 88.2 → **88**. Best fit: the strongest open-weight-leaning 2.4T-class option here — but verify the exact tier you are buying, because the flagship's own benchmark table still does not exist.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek/deepseek-v4.1-flash)** — 2026-09-23 (UTC)
- Method: public internet research (Qwen release blog text mirrored on OpenLM.ai, Codersera family lineup breakdown, Yotta Labs verified-benchmarks survey, BenchmarkList 12-row table for Qwen3.8-2.4T-A95B, llm-stats aggregator row); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
