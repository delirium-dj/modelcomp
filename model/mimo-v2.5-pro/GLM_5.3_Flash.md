# Xiaomi MiMo-V2.5-Pro — findings by GLM 5.3 Flash

- Source: Xiaomi (`mimo-v2.5-pro`; no Zen Free ID — scored on paid pricing)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Xiaomi MiMo-V2.5-Pro (Xiaomi's most capable model of the V2.5 generation; the text-focused Pro sibling of the omni MiMo-V2.5 — now superseded in-family by MiMo-V2.6-Pro, BenchLM #11)
- **Short description:** A 1.02T-param MoE (42B active) with hybrid 6:1 sliding-window/global attention and a 1M-token window, built for ultra-long-horizon agency: 1,000+ tool-call tasks, a complete SysY compiler written in 4.3 hours (233/233), and ClawEval frontier capability at 40–60% fewer tokens than Opus 4.6 / Gemini 3.1 Pro / GPT-5.4. BenchLM ranks it #84 of 889 (53.01).
- **Provider / access:** Xiaomi native API (`mimo-v2.5-pro`, Token Plans; "no change in pricing" vs V2-Pro), AI Studio; OpenCode Zen lists it paid (no `*-free` ID found); open weights on Hugging Face (FP8 E4M3 mixed; Base 256K + 1M checkpoints), SGLang/vLLM deployment guides.
- **Release / knowledge:** released and open-sourced 2026-04-27 (five days after MiMo-V2.5). Knowledge cutoff not verified.
- **IDs:** `mimo-v2.5-pro` (Xiaomi) / `xiaomi/mimo-v2-5-pro` (repo id). **No Zen Free ID** — scored on paid pricing.
- **Context window:** 1,000,000 tokens (BenchLM concurs; Pro checkpoint; Base checkpoint 256K); strong coherence maintained across ultra-long contexts per Xiaomi.
- **Modalities:** text in / text out (the Pro line is text-focused; AA's V2.5-vs-Pro comparison notes "Pro: no image").
- **Pricing (as of 2026-10-11):** ~$0.44 in / $0.87 out per 1M (repo catalog; $1.00/$3.00 routes also exist). No free tier; permissive-license open weights.
- **Architecture:** 1.02T total / 42B active MoE; local SWA + Global Attention interleaved 6:1 (128-token window, ~7× KV-cache reduction); native MTP module (~3× output throughput); 27T-token pretrain; three-stage post-training.

### Raw benchmarks found

Agent / tool use:

- τ²-bench: **94.2%** (AA — corroborates the Sophon Pro reading from the prior pass)
- τ³-bench: **72.9%** (Xiaomi launch page via benchlm.ai — fills the Tau3 gap)
- Claw-Eval: **63.8%** (Claw-Eval leaderboard — fills the gap; corroborates the vendor's "64% Pass³" launch claim)
- GDPval-AA: **1265** (Xiaomi page; AA-normalized **31.2%** — fills the gap, weak)
- Terminal-Bench 2.0: **68.4%** (Xiaomi page — new); Vals TB2.1: **57.3%** (Vals, independent)
- AA Agentic Index: **22.7%**; APEX-Agents-AA: **2.4%** (AA — floor-class weak rows)
- Gert Labs: **62.70%** (new)
- Long-horizon demos: SysY compiler in Rust — **233/233** hidden tests, **672 tool calls in 4.3 hours**; full video editor — **8,192 LOC over 1,868 tool calls** (Xiaomi launch demos, prior pass)

Reasoning / knowledge:

- HLE: **48%** with tools / **34%** without (Xiaomi launch page via benchlm.ai — the with-tools row is a major upgrade over the 35.7% Sophon read); AA-HLE: **35.7%** (AA — corroborates the w/o-tools reading)
- GPQA Diamond: **86.6%** (AA — corroborates the Sophon Pro read); Vals: **82.6%**
- Artificial Analysis Intelligence Index: **26.0** (AA current board) — **conflicts with the "43 vs 38" AA comparison reading the prior pass cited**; board recomposition accounts for the difference
- AA-LCR v1.1: **79.7%** (AA — fills the long-context gap, solid); CritPt: **4.0%** (AA — near-zero)
- MMLU-Pro: **84.6%** (Vals); AA-IFBench: **79.9%** (AA — strong)
- AA-Omniscience: **22.4% accuracy / 24.7% non-hallucination row / 3.3 index** (AA — weak)

Coding:

- SWE-bench (Vals): **74.0%** (Vals, independent — corroborates the 74.00% Verified run from the prior pass)
- SWE-bench Pro: **57.2%** (Xiaomi page — fills the gap); LiveCodeBench (Vals): **81.4%** (fills the gap)
- AA Coding Index: **60.2%** (AA — new); AA-SciCode: **50.6%** (AA — fills the gap)
- MiMo Coding Bench: "closing the gap to Opus 4.6" (vendor claim, no public number)

Long context:

- AA-LCR 79.7% is the first measured long-context number (solid); **1M tokens** native (BenchLM concurs) with coherence claims; no MRCR/RULER number published

Multimodal:

- Design Arena Website: **1273** (OpenRouter); text-only in/out — the Pro line has no image input per AA's comparison

### Normalized scores (1–100)

- **Tool use: 84/100.** (Was 87 on the prior pass.) τ² 94.2% (corroborated), τ³ 72.9% and Claw-Eval 63.8% (both fills, the latter corroborating the vendor's efficiency claim) strengthen the long-horizon story — but GDPval 31.2% normalized, AA Agentic 22.7% and the floor-class APEX 2.4% temper the composite.
- **Reasoning: 82/100.** HLE-with-tools rises to 48% and GPQA 82.6–86.6% is corroborated (two sources), while the AA Index recomposes from the cited 43 to 26.0 and CritPt 4.0% is near-zero — the raises and corrections net out at the same band.
- **Context window: 100/100.** 1M native (BenchLM concurs) with AA-LCR 79.7% now measured (solid) — the ultra-long-coherence design goal plus the first measured evidence hold the top score.
- **Multimodal: 15/100.** Text-only (Pro has no image input per AA's comparison).
- **Coding: 87/100.** The Vals SWE-bench 74.0% is corroborated, with SWE-Pro 57.2%, LiveCodeBench 81.4%, AA Coding Index 60.2% and AA-SciCode 50.6% filling the prior gaps; the perfect 233/233 compiler build stands — unchanged.
- **Cost efficiency: 85/100.** No Zen Free ID, but ~$0.44/$0.87 is cheap for the class, and permissive-license weights cap long-run costs.
- **Overall Score: 73.6/100.** (Was 74.2 on the prior pass.) Mean of the five quality dims per `RULES.md` (Cost excluded): (84 + 82 + 100 + 15 + 87) / 5 = 368/5 = 73.6 — lowered slightly on the 2026-10-11 second pass as the new weak agentic rows (GDPval 31.2%, APEX 2.4%) offset the strong fills. Best fit: the 1M-coherence text flagship for 1,000+-call autonomous engineering at open-weights prices — now superseded in-family by MiMo-V2.6-Pro on every measured dimension.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-11
- Method: public internet research, second pass 2026-10-11 (≥3 independent sources: benchlm.ai updated 2026-10-10 citing the Xiaomi MiMo-V2.5-Pro launch page, Artificial Analysis model benchmarks + Claw-Eval leaderboard via benchlm.ai, Vals AI leaderboards, plus the prior 2026-09-18/10-05 passes); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
