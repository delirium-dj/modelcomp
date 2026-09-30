# Nemotron 3.5 Lightning (Free) — findings by Kimi K3

- Source: NVIDIA / Nemotron 3.5 Lightning 30B-A3B (NVFP4) (`opencode/nemotron-3.5-lightning-free`; HF `nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3.5 Lightning Free
- **Short description:** NVIDIA's compact open 30B/3B-active MoE (NVFP4) built for high-volume low-latency execution as the "worker" paired with a frontier planner. Fast but shallow: CritPt 0%, TB 2.1 23.5%, GPQA 75.6%.
- **Provider / access:** OpenCode Zen `opencode/nemotron-3.5-lightning-free` (free); NVIDIA trial; open weights on HF.
- **Release / knowledge:** Released 2026-08-11 (NVIDIA open release, verified via layer3labs/llm-stats launch coverage); OpenMDW-1.1 license; cutoff not published.
- **IDs:** `opencode/nemotron-3.5-lightning-free` (Free ID); HF `nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4`.
- **Context window:** 1M native per benchlm (catalog notes 262K native serve for the Zen tier); output limit unverified.
- **Modalities:** text-only (catalog); reasoning yes; tool calls; JSON mode.
- **Pricing (as of 2026-09-24):** Free Zen / NVIDIA trial ($0).
- **Architecture:** open weights, hybrid Mamba-2 + MoE + attention, 30B total / ~3B active, NVFP4 quantized, DSpark speculative decoding, tuned for DGX Spark / single-GPU local deployment (benchmarklist/llm-stats launch notes, verified 2026-09-29).

### Raw benchmarks found

Agent / tool use:

- PinchBench: **83.4%** (benchlm.ai); official NVIDIA BF16 checkpoint numbers (layer3labs): PinchBench **85.37**, GPQA **75.44**, MMLU-Pro **81.94**, SWE-bench Verified **51.56**
- Terminal-Bench 2.1: **23.5%**; τ³-bench: **9.5%**; GDPval-AA: **865 Elo** (6.2% normalized); BrowseComp: **36.8%**; AA Agentic Index: **6.1%** (benchlm.ai)
- Tau2 / Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **75.6%** (GPQA-D; AA 74.3%) (benchlm.ai)
- HLE: **10.5%** (no tools); AA-HLE 10.6% (benchlm.ai)
- AA-LCR: **49.2%**; CritPt: **0.0%** (benchlm.ai)
- Artificial Analysis Intelligence Index: **12.9**; AA Openness Index: **83.3**; BenchLM overall **19.1/100, #186 of 507**
- AA-Omniscience Accuracy / Hallucination Rate: **14.4% / 37.6%** (benchlm.ai)
- MMLU-Pro: **81.6%**; IFBench: **72.9%** (benchlm.ai)

Coding:

- SWE-bench Verified: **52.8%**; SWE Multilingual: **36.5%** (benchlm.ai)
- SciCode: **31.4%**; AA Coding Index: **26.8** (benchlm.ai)

Long context:

- AA-LCR 49.2% (benchlm.ai); window spec 1M native (benchlm) vs 262K serve cap on Zen.

Multimodal:

- Text-only (catalog) — floor.

### Normalized scores (1–100)

- **Tool use: 48/100.** PinchBench 83.4% and IFBench 72.9% are its best numbers; agentic depth poor (TB 2.1 23.5%, τ³ 9.5%). 
- **Reasoning: 55/100.** GPQA 75.6% / MMLU-Pro 81.6% decent static QA; capped by CritPt 0.0% and HLE ~10.5% — doesn't think far.
- **Context window: 58/100.** Spec 1M but Zen serve cap 262K and LCR 49.2%.
- **Multimodal: 15/100.** Text-only — floor.
- **Coding: 52/100.** SWE-bench Verified 52.8% is usable; capped by SciCode 31.4% / Coding Index 26.8.
- **Cost efficiency: 99/100.** $0 + open weights at 3B-active — near-minimal serving cost.
- **Overall Score: 46/100.** Mean of the five quality dims (48+55+58+15+52)/5 = 45.6 → 46. Best fit: free high-volume result-execution agents behind a strong planner; not for deep reasoning.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-29
- Method: fresh public web research (benchlm.ai scorecard, repo catalog). Reverified 2026-09-29: release date now verified (2026-08-11), OpenMDW-1.1 license, DSpark/DGX-Spark serving targets added; official NVIDIA BF16 numbers (PinchBench 85.37, GPQA 75.44, MMLU-Pro 81.94, SWE-bench 51.56) recorded alongside benchlm rows; scores unchanged.
- Future sources: add a new file next to this one using the same headings.
