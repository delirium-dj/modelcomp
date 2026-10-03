# Kimi K3 — findings by Ling 3.1 Flash

- Source: Moonshot AI (`moonshotai/kimi-k3`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K3
- **Short description:** Moonshot AI's 2.8-trillion-parameter open MoE flagship (launched 2026-07-16, Apache 2.0 weights 2026-07-27) — world's first open 3T-class model with native vision, 1M-token input and output window, and frontier-level coding/reasoning.
- **Provider / access:** Moonshot Kimi API (`kimi-k3`), Kimi app and playground; NVIDIA NIM partner deployment. Reasoning always enabled; `reasoning_effort: max` (only level at launch).
- **Release / knowledge:** 2026-07-16 (API); open weights 2026-07-27; knowledge cutoff not stated.
- **IDs:** `moonshotai/kimi-k3`. No Free ID on OpenCode Zen (`noFreeId`) — scored on paid pricing.
- **Context window:** 1,048,576 (1M) input; 1M output (131,072 default, up to 1,048,576); automatic free prefix caching (>90% hit rate in coding workloads).
- **Modalities:** text, image, document in (native multimodal); text out; tool calls, Python execution for vision benchmarks.
- **Pricing (as of 2026-10-02):** $3.00/$15.00 per 1M input/output (cache-miss input); cache-hit input $0.30/M; Batch/Flex discounts per provider.
- **Architecture:** 2.8T-parameter open MoE, ~50B active (16 of 896 experts per forward pass), Stable LatentMoE + Kimi Delta Attention + Attention Residuals; MXFP4 weights / MXFP8 activations; Apache 2.0.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **88.3%** (vendor, Kimi Code harness, max effort); **80.90%** (vals.ai, Terminus 2 harness, independent, 2026-09-23)
- FrontierSWE: **81.2%** (Kimi Code harness; dominance scores recomputed via the official script, 2026-07-16)
- ProgramBench: **77.8%** (vendor)
- SWE-Marathon: **42.0%** (Claude Code harness on an H20-calibrated branch of the v1.1 tasks; correctness/anti-cheat validators unchanged)
- PostTrainBench: **36.6%**; MLS-Bench-Lite: **48.3%**
- Kimi Code Bench 2.0: **72.9%** (vendor's own suite)
- BrowseComp: **91.2%** (with 300K context-compaction strategy); **90.4** with the full 1M window and no context management
- Claw-Eval / ClawProBench / Toolathlon-Verified: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **93.5%** (vendor, max effort)
- Humanity's Last Exam (HLE-Full): **43.5%** no tools / **56.0%** with tools (vendor; the no-tools figure is used for cross-model comparability)
- AA-LCR: **74.7%** (Artificial Analysis long-context retrieval)
- CritPt: **23.4%** (vendor)
- MMLU-Pro: ~8x% (Artificial Analysis measures 0.6 pts below Moonshot's self-report, per AI Model Timeline)
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- DeepSWE v1.1: **67.5%** (Kimi Code harness) / **67.3%** (official DeepSWE leaderboard, mini-SWE-agent harness)
- SciCode: **58.7%** (vendor)
- SWE-bench Verified / SWE-bench Pro: not reported by the vendor (Moonshot reports its own suite instead)
- LiveCodeBench / Vibe Code Bench: no verified public score found

Long context:

- AA-LCR 74.7% and BrowseComp 90.4 at full 1M window (above); no MRCR/RULER/GraphWalks score published

Multimodal:

- MathVision: **94.3%** without / **97.8%** with Python tools (3-run average)
- MMMU-Pro: **81.6%** without / **83.4%** with tools
- MMVU: **82.1%**; BabyVision with Python: **85.7%**

### Normalized scores (1–100)

- **Tool use: 89/100.** Terminal-Bench 2.1 88.3% (Kimi Code harness) hits the frontier bar, and FrontierSWE 81.2% plus ProgramBench 77.8% are strong; the independent vals.ai Terminus 2 run (80.90%) and SWE-Marathon 42.0% cap the score below 92.
- **Reasoning: 91/100.** GPQA 93.5% and HLE 43.5% no-tools (56.0% with tools) clear the frontier reference bars, and AA-LCR 74.7% is a strong long-context-reasoning result; CritPt 23.4% caps it.
- **Context window: 95/100.** 1M-token input AND output window — rare at this tier; AA-LCR 74.7% and BrowseComp 90.4 at full 1M are good but not ≥98% retrieval, so 100 is not justified.
- **Multimodal: 80/100.** native text+image+document in with strong vision results (MathVision 97.8% with Python, MMMU-Pro 83.4% with tools); text-only output keeps it below the 90+ band.
- **Coding: 90/100.** TB 2.1 88.3%, FrontierSWE 81.2%, SciCode 58.7% and ProgramBench 77.8% are top-tier open-model results; DeepSWE 67.3–67.5% (under the 74% frontier ref) and the absent SWE-bench rows cap the score.
- **Cost efficiency: 60/100.** $3/$15 per 1M matches the ~60 reference; the $0.30 cache-hit rate (>90% in coding workloads) materially lowers real agentic cost, and the Apache 2.0 weights enable self-hosting.
- **Overall Score: 89/100.** (89+91+95+80+90)/5 = 89.0 → 89 — the open-model frontier pick: frontier TB 2.1 and GPQA with 1M/1M context and Apache 2.0 weights, at 20% of GPT-6 Astra's list price.

---

## Signature

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-02
- Method: public internet research (Moonshot AI launch blog and GitHub, vals.ai, Benchgen, NVIDIA NIM docs, AI Model Timeline); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
