# Xiaomi MiMo V2.5 Pro — findings by Kimi K3

- Source: Xiaomi / MiMo-V2.5-Pro (`xiaomi-mimo-v2.5-pro`; HF `XiaomiMiMo/MiMo-V2.5-Pro`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.5 Pro
- **Short description:** Xiaomi's text-only long-horizon Pro variant — 1.02T-parameter MoE (42B active), hybrid SWA/GA attention with MTP, 1M context, built for 1000+ tool-call agent runs; strong τ²/τ³ tool use (94.2% / 72.9%) and HLE 48% w/ tools with very low hallucination (24.7%), but weak APEX-Agents (2.4%).
- **Provider / access:** Xiaomi MiMo Open Platform API (`mimo-v2.5-pro`, OpenAI-compatible), AI Studio; **open-sourced under MIT on HF** (`XiaomiMiMo/MiMo-V2.5-Pro`, plus `MiMo-V2.5-Pro-Base` at 256K) — SGLang/vLLM deployment guides (mimo.xiaomi.com). Officially deprecating 2026-10-21 10:00 Beijing in favor of MiMo-V2.6-Pro (mimo.mi.com pricing page notice).
- **Release / knowledge:** Released and open-sourced 2026-04-27 (mimo.xiaomi.com/mimo-v2-5-pro); cutoff not verified.
- **IDs:** `mimo-v2.5-pro` (Xiaomi API); `xiaomi/mimo-v2.5-pro` (aggregators; no Free-tier Zen ID verified).
- **Context window:** 1M tokens (pre-trained natively at 32K, extended to 1M; benchlm.ai concurs); max output not verified.
- **Modalities:** text in / text out only (official Pro page describes a language-only hybrid-attention model — the vision/audio encoders live on sibling MiMo-V2.5); reasoning yes; tool calls; JSON mode.
- **Pricing (as of 2026-09-29):** $0.435/M input (cache miss), $0.0036/M cache hit, $0.87/M output on the overseas Xiaomi MiMo API; no batch API for this model (mimo.mi.com pricing, updated 2026-09-22).
- **Architecture:** 1.02T total / 42B active MoE; interleaved Sliding-Window Attention : Global Attention at 6:1 with 128-token window (~7× KV-cache reduction, learnable attention-sink bias); native MTP module (~3× output throughput); 27T pre-training tokens in FP8 (E4M3) mixed precision (mimo.xiaomi.com).

### Raw benchmarks found

Agent / tool use:

- τ²-bench (Tau2-Bench): **94.2%**; τ³-bench (Tau3): **72.9%** (benchlm.ai)
- Claw-Eval: **63.8%** (benchlm.ai); vendor ClawEval: **64% Pass^3 at ~70K tokens/trajectory** — 40–60% fewer tokens than Opus 4.6 / Gemini 3.1 Pro / GPT-5.4 at comparable capability (mimo.xiaomi.com)
- GDPval-AA: **1265 Elo** (30.4% normalized) (benchlm.ai)
- Terminal-Bench 2.0: **68.4%**; TB 2.1 (Vals): **57.3%** (benchlm.ai)
- APEX-Agents-AA: **2.4%**; Gert Labs: **62.7%**; AA Agentic Index: **22.7%** (benchlm.ai)
- Vendor long-horizon demos: SysY compiler in Rust 233/233 hidden tests (672 tool calls, 4.3h); full video-editor app 8,192 LOC (1,868 tool calls, 11.5h); ngspice FVF-LDO analog EDA closed loop (mimo.xiaomi.com — unverified demos)

Reasoning / knowledge:

- HLE: **48.0%** (w/ tools); 34.0% (no tools); AA-HLE 35.7% (benchlm.ai)
- GPQA Diamond: **86.6%** (AA); 82.6% (Vals) (benchlm.ai)
- AA-LCR: **79.7%**; CritPt: **4.0%** (benchlm.ai)
- Artificial Analysis Intelligence Index: **26.0**; BenchLM overall **52.03/100, #68 of 507**
- AA-Omniscience Accuracy / Hallucination Rate: **22.4% / 24.7%** — honest-but-underinformed profile (benchlm.ai)
- MMLU-Pro (Vals): **84.6%**; AA-IFBench: **79.9%** (benchlm.ai)

Coding:

- SWE-bench (Vals): **74.0%**; SWE-bench Pro: **57.2%** (benchlm.ai)
- LiveCodeBench (Vals): **81.4%** (benchlm.ai)
- AA-SciCode: **50.6%**; AA Coding Index: **60.2** (benchlm.ai)
- MiMo Coding Bench: closing the gap to Claude Opus 4.6 (vendor in-house suite; no public number)

Long context:

- AA-LCR 79.7% at the 1M window (benchlm.ai); vendor claims coherence across ultra-long contexts with 1000+ tool calls; no MRCR/RULER rows.

Multimodal:

- None applicable — text-only variant (Design Arena Website **1281 Elo** on benchlm.ai is a text-driven site-design eval, not vision input).

### Normalized scores (1–100)

- **Tool use: 78/100.** τ² 94.2% + τ³ 72.9% + Claw-Eval 63.8% are strong; capped by APEX-Agents 2.4% and GDPval 1265.
- **Reasoning: 72/100.** HLE 48% w/ tools, GPQA ~85%, LCR 79.7%; capped by CritPt 4.0% and AA Index 26.0.
- **Context window: 95/100.** True 1M window (top band) with AA-LCR 79.7% and vendor 1000+ tool-call coherence claims; capped slightly by the absence of MRCR/RULER independent retrieval probes.
- **Multimodal: 12/100.** Text-only variant — no vision/audio encoders on this checkpoint (band: text-only → low); the omni heritage belongs to sibling MiMo-V2.5, not Pro.
- **Coding: 74/100.** LiveCodeBench 81.4%, SWE-bench (Vals) 74.0%; capped by SWE-bench Pro 57.2% and Coding Index 60.2.
- **Cost efficiency: 94/100.** Verified $0.435/$0.87 per 1M ($0.0036 cache hit) — in the sub-$1 frontier-adjacent band; vendor ClawEval token-efficiency claim strengthens it. No batch API for this model.
- **Overall Score: 66.2/100.** Mean of the five quality dims (78+72+95+12+74)/5 = 66.2. Best fit: text-only tool-calling agent loops (τ²/τ³-style) at very low cost; deprecated in favor of the MiMo-V2.6 series on 2026-10-21.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-29
- Method: fresh public web research (mimo.xiaomi.com official V2.5-Pro page, mimo.mi.com pricing/deprecation notice, benchlm.ai scorecard); scores are normalized 1–100 interpretations, not official vendor scores. Reverified 2026-09-29: pricing now verified ($0.435/$0.87 overseas, $0.0036 cache hit, no batch); **deprecation announced for 2026-10-21**; release pinned to 2026-04-27; architecture verified (1.02T/42B, 6:1 SWA:GA, MTP, 27T tokens, FP8, MIT open weights on HF — previously listed as proprietary/unverified); **modalities corrected to text-only** (official card has no vision/audio encoders) → Multimodal 66→12 per band; Context 84→95 per 1M band; Cost 75→94 per $0.435/$0.87 band; Overall 74.8→66.2.
- Future sources: add a new file next to this one using the same headings.
