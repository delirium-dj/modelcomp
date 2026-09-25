# Xiaomi MiMo V2.5 Pro — findings by Kimi K3

- Source: Xiaomi / MiMo-V2.5-Pro (`xiaomi-mimo-v2.5-pro`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.5 Pro
- **Short description:** Xiaomi's Pro variant of MiMo V2.5 — strong τ²/τ³ tool use (94.2% / 72.9%) and HLE 48% w/ tools with very low hallucination (24.7%), but weak APEX-Agents (2.4%).
- **Provider / access:** Xiaomi MiMo API platform (OpenAI-compatible); sibling: MiMo-V2.5 (open weights).
- **Release / knowledge:** 2026 (exact date not verified in my sources); cutoff not verified.
- **IDs:** `xiaomi/mimo-v2.5-pro` (no Free-tier Zen ID verified).
- **Context window:** 1M tokens (benchlm.ai); max output not verified.
- **Modalities:** text/image in (family omni heritage; only Design Arena row public here); text out; reasoning yes; tool calls; JSON mode.
- **Pricing (as of 2026-09-24):** no verified public price found in my sources.
- **Architecture:** proprietary per benchlm (Zen listing describes family as open-weights MoE; params unverified in my sources).

### Raw benchmarks found

Agent / tool use:

- τ²-bench (Tau2-Bench): **94.2%**; τ³-bench (Tau3): **72.9%** (benchlm.ai)
- Claw-Eval: **63.8%** (benchlm.ai)
- GDPval-AA: **1265 Elo** (30.4% normalized) (benchlm.ai)
- Terminal-Bench 2.0: **68.4%**; TB 2.1 (Vals): **57.3%** (benchlm.ai)
- APEX-Agents-AA: **2.4%**; Gert Labs: **62.7%**; AA Agentic Index: **22.7%** (benchlm.ai)

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

Long context:

- AA-LCR 79.7% at the 1M window (benchlm.ai); no MRCR/RULER rows.

Multimodal:

- Design Arena Website: **1281 Elo** (benchlm.ai); no MMMU/Video rows for this exact variant.

### Normalized scores (1–100)

- **Tool use: 78/100.** τ² 94.2% + τ³ 72.9% + Claw-Eval 63.8% are strong; capped by APEX-Agents 2.4% and GDPval 1265.
- **Reasoning: 72/100.** HLE 48% w/ tools, GPQA ~85%, LCR 79.7%; capped by CritPt 4.0% and AA Index 26.0.
- **Context window: 84/100.** 1M window with LCR 79.7%; no max-window retrieval probes.
- **Multimodal: 66/100.** Only one vision row public for this variant; family claims omni input — capped by thin verified evidence.
- **Coding: 74/100.** LiveCodeBench 81.4%, SWE-bench (Vals) 74.0%; capped by SWE-bench Pro 57.2% and Coding Index 60.2.
- **Cost efficiency: 75/100.** No verified price; provisional on Xiaomi's cheap-tier history.
- **Overall Score: 75/100.** Mean of the five quality dims (78+72+84+66+74)/5 = 74.8 → 75. Best fit: tool-calling agent loops (τ²/τ³-style) at low cost; the V2.6 series has since replaced it.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-24
- Method: fresh public web research (benchlm.ai scorecard); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
