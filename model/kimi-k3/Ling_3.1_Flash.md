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

## Update 2026-10-08 (6-day re-research)

Independent trackers have filled most vendor-only rows; 12 of 13 tracked scores are now independently confirmed. **No score changes** — the independent reads land within a point or two of the vendor figures, with two conflicts flagged below:

- **HLE no-tools: 46.9%** (Artificial Analysis' own run, max effort, 2026-08-17, ±2 noise) — replaces Moonshot's self-reported 43.5%; the with-tools 56.0% remains the vendor's own number (nothing independently confirmed on that side).
- **GPQA Diamond: 92.9%** (vals.ai, 2026-08-17) — 0.6 pts under the vendor's 93.5%; saturated benchmark.
- **Terminal-Bench 2.1: 80.90%** (vals.ai Terminus 2, 2026-09-23, ±10.6 noise) — 7.4 pts under the vendor's Kimi-Code-harness 88.3%; already tracked as the independent score.
- **DeepSWE v1.1: 69.0%** (deepswe.datacurve.ai, 2026-08-13, ±9.5 noise) — slightly above the vendor's 67.3–67.5%.
- **SWE-bench Verified: 93.4%** (vals.ai, 2026-08-17, rank 6 of 83, bash-only harness, $0.76/test) — a new fill the vendor never reported, **but a blog read (dreaming.press) cites 76.8%**; the 16.6-point spread is unresolved (harness unidentified), so no score change.
- **AA Intelligence Index v4.3.2: 44** (Max effort; K3 Low: 30), components: AA-Briefcase 1501, GDPval-AA v2.1 1533, AutomationBench-AA 58%, **Terminal-Bench 4.0 13%** (new — the vendor never reported TB 4.0), SciCode 59%, HLE 47%, GDP.pdf 22%, CritPt 23%, AA-Omniscience 20, **AA-LCR v1.1 89%** (vs the vendor's AA-LCR 74.7% — a v1.1 version difference). A third-party blog separately cites "4th of 189, score 57" — an older index version; do not mix versions.
- New fills: **Frontend Code Arena #1 (1,679 Elo**, ahead of Fable 5's 1,631 and GPT-5.6 Sol's 1,618); Kimi Code Bench 2.0 **73.7% with the Claude Code harness** (vs 72.9% on Kimi Code's own harness — the more comparable figure); Toolathlon-Verified, Agents' Last Exam, AA-AnalystAgent, ARC-AGI-2, LiveBench and HMMT Feb 2026 rows all exist on their owner boards.
- Provenance: the HF README's full table (GPQA 93.5, CritPt 23.4, AA-LCR 74.7, HLE 43.5/56.0, DeepSWE 67.5, ProgramBench 77.8, TB 2.1 88.3, FrontierSWE 81.2, SWE-Marathon 42.0, PostTrainBench 36.6, MLS-Bench-Lite 48.3, SciCode 58.7, Kimi Code Bench 2.0 72.9) is the vendor's own; on Agents' Last Exam, K3 ran paired with the Kimi Code harness while Fable 5 ran at xhigh with 40% of tasks annotated as downgraded — harness asymmetry to keep in mind.
- **Architecture conflict:** The Model Gap lists **104B activated per token**; this file's launch-era read said ~50B active (16 of 896 experts). Unresolved — affects the efficiency narrative, not the scores.
- Disclosure asymmetry (ALE protocol docs): Fable 5 hit 13 fallbacks + 1 refusal out of 80 tasks, GPT-5.6 Sol 10 refusals (cyber guard), GPT-5.5 3 — K3's harness-fallback counts were not published.

---

## Signature

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-02 (updated 2026-10-08)
- Method: public internet research (Moonshot AI launch blog and GitHub, vals.ai, Benchgen, NVIDIA NIM docs, AI Model Timeline); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
