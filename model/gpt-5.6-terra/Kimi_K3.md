# GPT-5.6 Terra — findings by Kimi K3

- Source: OpenAI / GPT-5.6 Terra (`gpt-5.6-terra`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Terra
- **Short description:** OpenAI's mid-cost GPT-5.6 variant (siblings Sol/Luna/Cyber), a reasoning model with strong tool use and coding at a presumed lower price point than Sol. BenchLM #9 of 507.
- **Provider / access:** OpenAI API (`gpt-5.6-terra`, OpenAI-compatible Chat/Responses API).
- **Release / knowledge:** 2026 release (exact date not verified in my sources); knowledge cutoff not verified.
- **IDs:** `openai/gpt-5.6-terra` (no Free-tier ID verified on OpenCode Zen).
- **Context window:** 1.05M tokens (benchlm.ai); max output not verified.
- **Modalities:** text/image in (MMMU-Pro measured); text out; reasoning yes; tool calls; JSON mode.
- **Pricing (as of 2026-09-24):** no verified public price found in my sources; GPT-5.6 family anchors: Sol $4/$20, GPT-6 Astra $10/$50 per 1M (artificialanalysis.ai) — Terra priced below Sol (marked provisional).
- **Architecture:** proprietary (OpenAI); params undisclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **87.4%** (benchlm.ai; Vals 77.5%); Terminal-Bench 3.0: **20.8%**
- Tau2-Bench (τ²-bench): **86.3%** (benchlm.ai); Tau3-Banking: no verified public score found
- GDPval-AA: **1583 Elo** (46.6% normalized) (benchlm.ai)
- BrowseComp: **87.5%**; OSWorld 2.0: **50.2%**; CyberGym: **81.8%**; Toolathlon: **53.1%**; AA ITBench: **51.0%**; AA Agentic Index: **43.7%** (benchlm.ai)
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **92.9%** (AA 92.5%; Vals 90.9%) (benchlm.ai)
- HLE: **51.1%** (HLE-Verified); 42.9% (AA-HLE) (benchlm.ai)
- AA-LCR: **83.0%**; CritPt: **30.0%** (benchlm.ai)
- ARC-AGI-2: **83.9%**; ARC-AGI-3: **0.8%** (benchlm.ai)
- Artificial Analysis Intelligence Index: **55.0**; BenchLM overall **72.58/100, #9 of 507**
- AA-Omniscience Index: **0.1%** — Accuracy **46.8%** / Hallucination Rate **87.9%** (benchlm.ai; worst-in-family grounding signal)
- FrontierMath v2 T1–3: **84.9%**, Tier 4: **68.3%** (benchlm.ai)

Coding:

- SWE-bench (Vals): **95.4%**; SWE-bench Pro: **63.4%**; SWE-bench Verified: no separate verified public score found
- LiveCodeBench (Vals): **85.9%** (benchlm.ai)
- AA-SciCode: **55.0%**; AA Coding Index: **76.7** (benchlm.ai)
- DeepSWE: **69.6%**; FrontierCode Ext: **55.8%**; CursorBench 3.2: **64.9%**; VulcanBench v3: **87.0%** (benchlm.ai)

Long context:

- AA-LCR 83.0% at the 1.05M window (benchlm.ai); no separate MRCR/RULER public score found.

Multimodal:

- MMMU-Pro: **80.7%** (w/ Python 82.0%; AA 80.7%) (benchlm.ai)

### Normalized scores (1–100)

- **Tool use: 84/100.** TB 2.1 87.4%, τ²-bench 86.3%, GDPval-AA 1583, CyberGym 81.8%; capped by TB 3.0 20.8% and ApprenticeBench 16%.
- **Reasoning: 84/100.** GPQA ~92.9%, FrontierMath v2 84.9%/68.3%, LCR 83.0%; capped by catastrophic Omniscience Index (0.1%, hallucination 87.9%) and ARC-AGI-3 0.8%.
- **Context window: 88/100.** 1.05M window with LCR 83.0%; capped by missing max-window retrieval probes.
- **Multimodal: 74/100.** Vision input with MMMU-Pro ~81–82%; no audio/video/PDF rows and text-only output cap it.
- **Coding: 84/100.** SWE-bench (Vals) 95.4%, LiveCodeBench 85.9%, Coding Index 76.7, VulcanBench 87%; capped by SWE-bench Pro 63.4% and SciCode 55%.
- **Cost efficiency: 72/100.** Price unverified; scored provisional on mid-tier positioning below GPT-5.6 Sol ($4/$20).
- **Overall Score: 83/100.** Mean of the five quality dims (84+84+88+74+84)/5 = 82.8 → 83. Best fit: agentic coding at a below-Sol price where occasional grounding/hallucination risk is tolerable.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-24
- Method: fresh public web research (benchlm.ai scorecard, artificialanalysis.ai); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
