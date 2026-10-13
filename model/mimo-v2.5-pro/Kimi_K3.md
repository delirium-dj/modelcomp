# Xiaomi MiMo V2.5 Pro — findings by Kimi K3

- Source: Xiaomi / MiMo-V2.5-Pro (`xiaomi-mimo-v2.5-pro`; open weights HF `XiaomiMiMo/MiMo-V2.5-Pro`)
- Date: 2026-10-13 (UTC) — deep second pass (first pass 2026-09-24; **architecture corrected: open weights, not proprietary**; release date, 1.1M context, and pricing now verified via OpenRouter)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.5 Pro
- **Short description:** Xiaomi's flagship MiMo V2.5 Pro model — strong τ²/τ³ tool use (94.2% / 72.9%) and HLE 48% w/ tools with very low hallucination (24.7%), but weak APEX-Agents (2.4%). Built for autonomous multi-hundred-to-thousand-tool-call professional tasks.
- **Provider / access:** Xiaomi MiMo API platform (OpenAI-compatible); **open weights on HF `XiaomiMiMo/MiMo-V2.5-Pro`** (linked from OpenRouter — corrects first pass's "proprietary"); OpenRouter `xiaomi/mimo-v2.5-pro`. Not on Zen (2026-10-13 listing).
- **Release / knowledge:** **Released 2026-04-22** (OpenRouter — new this pass); cutoff not verified.
- **IDs:** `xiaomi/mimo-v2.5-pro` (OpenRouter); HF `XiaomiMiMo/MiMo-V2.5-Pro`.
- **Context window:** **1.1M tokens** (OpenRouter — upgrades first-pass 1M from benchlm).
- **Modalities:** text/image in (family omni heritage; only Design Arena row public here); text out; reasoning yes; tool calls (vendor claims ClawEval / GDPval / SWE-bench Pro top rankings — see measured rows); JSON mode.
- **Pricing (as of 2026-10-13):** **$0.3045/M in / $0.609/M out on OpenRouter (marked "30% off" promo)** — new this pass; first pass had no verified price.
- **Architecture:** open-weights (HF link live on the OpenRouter page); params undisclosed in the fetched page.

### Raw benchmarks found

Agent / tool use:

- τ²-bench (Tau2-Bench): **94.2%**; τ³-bench (Tau3): **72.9%** (benchlm.ai, first-pass snapshot)
- Claw-Eval: **63.8%** (benchlm.ai, first-pass snapshot — vendor claims top ranking on this bench)
- GDPval-AA: **1265 Elo** (30.4% normalized) (benchlm.ai, first-pass snapshot)
- Terminal-Bench 2.0: **68.4%**; TB 2.1 (Vals): **57.3%** (benchlm.ai, first-pass snapshot)
- APEX-Agents-AA: **2.4%**; Gert Labs: **62.7%**; AA Agentic Index: **22.7%** (benchlm.ai, first-pass snapshot)
- Vendor positioning (OpenRouter blurb): autonomous completion of "professional tasks that would take human experts days or weeks, involving more than a thousand tool calls" — marketing claim, not a measurement.

Reasoning / knowledge:

- HLE: **48.0%** (w/ tools); 34.0% (no tools); AA-HLE 35.7% (benchlm.ai, first-pass snapshot)
- GPQA Diamond: **86.6%** (AA); 82.6% (Vals) (benchlm.ai, first-pass snapshot)
- AA-LCR: **79.7%**; CritPt: **4.0%** (benchlm.ai, first-pass snapshot)
- Artificial Analysis Intelligence Index: **26.0**; BenchLM overall **52.03/100, #68 of 507** (benchlm.ai, first-pass snapshot)
- AA-Omniscience Accuracy / Hallucination Rate: **22.4% / 24.7%** — honest-but-underinformed (benchlm.ai, first-pass snapshot)
- MMLU-Pro (Vals): **84.6%**; AA-IFBench: **79.9%** (benchlm.ai, first-pass snapshot)

Coding:

- SWE-bench (Vals): **74.0%**; SWE-bench Pro: **57.2%** (benchlm.ai, first-pass snapshot)
- LiveCodeBench (Vals): **81.4%** (benchlm.ai, first-pass snapshot)
- AA-SciCode: **50.6%**; AA Coding Index: **60.2** (benchlm.ai, first-pass snapshot)

Long context:

- AA-LCR 79.7% at the (now verified 1.1M) window (benchlm.ai, first-pass snapshot); no MRCR/RULER rows.

Multimodal:

- Design Arena Website: **1281 Elo** (benchlm.ai, first-pass snapshot); no MMMU/Video rows for this exact variant.

### Normalized scores (1–100)

> Overall = half-up mean of the five quality dims; Cost excluded. (Score changes vs first pass shown inline.)

- **Tool use: 78/100.** Unchanged — τ² 94.2% + τ³ 72.9% + Claw-Eval 63.8% strong; capped by APEX-Agents 2.4% and GDPval 1265.
- **Reasoning: 72/100.** Unchanged — HLE 48% w/ tools, GPQA ~85%, LCR 79.7%; capped by CritPt 4.0% and AA Index 26.0.
- **Context window: 85/100.** +1 — context verified at 1.1M (larger than the first-pass 1M figure) with LCR 79.7%.
- **Multimodal: 66/100.** Unchanged — only one vision row public for this variant; family claims omni input — capped by thin verified evidence.
- **Coding: 74/100.** Unchanged — LiveCodeBench 81.4%, SWE-bench (Vals) 74.0%; capped by SWE-bench Pro 57.2% and Coding Index 60.2.
- **Cost efficiency: 88/100.** +13 — pricing now verified (was provisional at 75): $0.30/$0.61 promo is genuinely cheap for a flagship-class agentic model; on top of that, weights are open (self-hostable).
- **Overall Score: 75/100.** Half-up mean of the five quality dims (78+72+85+66+74)/5 = 75.0 → 75 (unchanged). Best fit: tool-calling agent loops (τ²/τ³-style) at low cost with self-host fallback; the V2.6 series has since replaced it.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-10-13
- Method: deep second-pass public web research (OpenRouter `xiaomi/mimo-v2.5-pro` — released 2026-04-22, $0.3045/$0.609 promo pricing, 1.1M context, live HF weights link `XiaomiMiMo/MiMo-V2.5-Pro` correcting the proprietary assumption; Zen `/zen/v1/models` 2026-10-13 — absent). First-pass benchlm.ai rows retained as that snapshot. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
