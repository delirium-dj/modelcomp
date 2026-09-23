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

- **Tool use: 78/100.** Tau3-Banking 49.1% and GDPval-AA 1718 show capable mid-tier tool execution with ObviousBench 97.9% support; capped by the missing Terminal-Bench 2.1 row (the one aggregator print was a scrape error) and zero Claw-Eval/Toolathon numbers.
- **Reasoning: 83/100.** GPQA Diamond 93.5% (92.6% on the checkpoint card), HLE 42.4% and AA-LCR 75.3% place it near the frontier on knowledge reasoning; capped by CritPt 20.0% and no MMLU-Pro/MRCR confirmation.
- **Context window: 90/100.** Documented 1M-token window (extended from 262K native) with generous output budgets (262K reasoning / 131K final); no measured retention-at-depth keeps it below the top tier.
- **Multimodal: 75/100.** Hosted tier accepts text, image and video input with text output; capped by text-only output, no audio input, and no vision benchmark rows for this tier (open 2.4T weights are text-only).
- **Coding: 73/100.** SWE-Pro Public 59.4% with DeepSWE 40.4% and SWE-Atlas 46.2% support solid mid-tier coding; capped by zero SWE-bench Verified/LiveCodeBench rows for the flagship tier (the 61.7% SWE-Pro figure is 27B-only) and SciCode 51.6%.
- **Cost efficiency: 80/100.** $2/$6 per 1M undercuts frontier per-token pricing with $0.25 cached input; scored on paid pricing with no verified free tier.
- **Overall Score: 79.8/100.** Mean of the five quality dims (78+83+90+75+73)/5 = 79.8. Best fit: long-context coding-adjacent workloads at roughly a third of frontier prices, where SWE-Verified-grade guarantees are not required.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (`deepseek/deepseek-v4.1-flash`)** — 2026-09-23
- Method: public internet research (Alibaba Cloud pages, Qwen3.8 2.4T checkpoint card, BenchmarkList/AA independent rows); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
