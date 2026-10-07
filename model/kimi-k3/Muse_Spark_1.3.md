# Kimi K3 — findings by Muse Spark 1.3 Contributor

- Source: Moonshot AI/Kimi K3, e.g. Meta (`muse-spark-1.3-contributor-free`)
- Date: 2026-10-07 (UTC), amended 2026-09-27 (UTC, user-signed-off exception: launch-suite absolutes added, 1M-out claim corrected, scores recomputed 86 → 90); re-research pass 2026-10-07 adds AA/HF-README gap-fills (Tau3, LCR, CritPt, SciCode, OSWorld), scores recomputed 90 → 91
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K3 (Moonshot AI flagship multimodal MoE)
- **Short description:** Moonshot AI's 2.8T-parameter multimodal MoE flagship (July 2026) with a 1M-token input and output window, frontier multimodal document/math reasoning and terminal-agent coding; proprietary, premium priced.
- **Provider / access:** Moonshot AI via Kimi API (17 providers) + HF weights (Kimi K3 License); no Zen Free ID (Chat Completions, tool calling supported).
- **Release / knowledge:** 2026-07-16 release, weights 2026-07-27 (Kimi K3 License, open-weight); knowledge cutoff undisclosed (amended 2026-09-27).
- **IDs:** `moonshotai/kimi-k3` (state explicitly: no Free ID exists on Zen)
- **Context window:** 1,048,576 (1M) in / 128,000 out — verified via HokAI tracker and launch blog (corrects filed 1M-out claim; amended 2026-09-27)
- **Modalities:** text, image, document in; text out; reasoning yes (max); tool calls yes
- **Pricing (as of 2026-09-18):** Paid $3.00 in / $15.00 out ($0.30 cached) per 1M (AA page; no Zen Free ID)
- **Architecture:** open-weights MoE, 2.8T total / 16-of-896 experts (trackers report ~280B active per HokAI vs 104B per others — vendor-undisclosed exact); Kimi Delta Attention + AttnRes long-sequence designs; Kimi K3 License

### Raw benchmarks found

Agent / tool use:

- GDPval-AA v2: **1685 Elo** (Artificial Analysis 1.2 article context: Kimi K3 max 1685 trails GPT-5.6 Sol 1730); **1686** in vendor README table (rounding/harness variance, both listed)
- Terminal-Bench 2.1: **88.3%** (Moonshot launch suite, KimiCode harness; 0.5 behind Sol 88.8, ahead of every other open model)
- BrowseComp: **91.2%** (launch suite, leads Sol 90.4); **DeepSearchQA 95.0 F1** (launch suite, leads Fable 5 94.2); **ResearchRubrics 76.2** (README table — new)
- MCP Atlas: **84.2%** (BenchLM mirror; README table confirms 84.2); **Toolathlon-Verified 73.2%** (BenchLM mirror) / **76.5%** (README table — harness differs, both listed); **94.5% MCPMark-Verified** (README — new)
- AutomationBench: **30.8%** (BenchLM mirror; README confirms 30.8); **JobBench 52.9%** (BenchLM mirror) / **54.3%** (README — both listed); **APEX-Agents 37.6%** (BenchLM mirror) / **41.0%** (README — both listed); **84.8% OSWorld-Verified, 58.3% OSWorld 2.0** (README — new, fills computer-use gap); **63.3% OfficeQA Pro, 34.8% SpreadsheetBench 2, 60.1% SaaS-Bench** (README — new); **28.3% Agents' Last Exam** (README leaderboard metric — new)
- Tau3-Banking / Tau2-Bench: **33.4% τ³-Banking** (README table, AA-sourced — fills prior gap; vs Sol 33.0, Fable 5 26.8)
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: see MCP Atlas 84.2% and Toolathlon-Verified 73.2% rows above; no verified SWE Atlas Codebase QnA score found

Reasoning / knowledge:

- GPQA Diamond: **93.5%** (Moonshot launch suite, highest published open-weight result, ahead of Opus 4.8 91.0%)
- HLE: **56% open-board top** (Swfte tracker); **43.5% without tools** (HokAI tracker)
- AIME 2025: **89%** (HokAI tracker); **MMLU-Pro 87%** (HokAI tracker)
- LCR / MLCR: **74.7% AA-LCR** (README table, AA-sourced 2026-07-23 — fills prior gap; vs Sol 73.7, Fable 5 70.0)
- CritPt: **23.4%** (README table, AA-sourced — fills prior gap; vs Sol 32.3, Fable 5 28.6)
- Artificial Analysis Intelligence Index / BenchLM overall: **57 AA Index** (HokAI/AA blended, $0.94/task; amends filed 44 from the older AA page)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **67.5% SWE-bench Verified** (HokAI tracker label, provisional harness); **76.8% SWE-bench Verified max-effort** (changeradar third-party compilation — provisional, harness undisclosed); Superconductor custom SWE-Bench ~80% quality band, same as Opus 4.8 at ~1/4 the ticket cost (slowest agent, ~44 min/ticket)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **58.7% SciCode** (README table, AA-sourced — fills prior gap; vs Fable 5 60.2, Sol 56.1)
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **67.5% DeepSWE** (launch suite, KimiCode; 67.3% mini-SWE-agent lane); **81.2% FrontierSWE** (launch suite, trails Fable 5 86.6%); **42.0% SWE Marathon** (launch suite, leads Sol 39.0%); **77.8% ProgramBench** (launch suite, leads Sol 77.6%); **77.8% Aider Polyglot** (HokAI tracker); **73.9% VulcanBench v3** and **60.8% cursorBench32** (BenchLM mirrors)

Reasoning / multimodal notes:

- ARC-AGI-2 tails at **32%** (HokAI tracker) — the one weak abstract-reasoning point against an otherwise frontier set
- MMMU-Pro vision: **81.6%** (launch suite, vs Fable 5 81.2%, Sol 83.0); **83.4% with tools** (README — new); **82.1% MMVU, 85.7% BabyVision with Python, 94.3/97.8% MathVision without/with tools** (README/NIM card — new)

Long context:

- **1M in / 128K out verified; Kimi Delta Attention + AttnRes cross-depth retrieval designs target stable very-long-context recall; no MRCR/RULER percentage found**

### Normalized scores (1–100)

- **Tool use: 92/100.** TB2.1 88.3% plus τ³-Banking 33.4%, BrowseComp 91.2%, MCP Atlas 84.2%, OSWorld-Verified 84.8% and GDPval ~1685 show frontier open agent orchestration; capped below 94 with no Claw-Eval numbers.
- **Reasoning: 92/100.** GPQA 93.5% (top open-weight) plus HLE 56%, AA Index 57, AIME 89%, MMLU-Pro 87% and AA-LCR 74.7 show frontier reasoning; capped below 94 by CritPt 23.4 trailing Sol and the ARC-AGI-2 32% tail.
- **Context window: 100/100.** 1M in / 128K out verified with KDA + AttnRes long-context designs; top tier.
- **Multimodal: 79/100.** Text/image/document in with MMMU-Pro 81.6/83.4, MMVU 82.1, MathVision up to 97.8 and BabyVision 85.7 measured vision; capped below video/audio omni models with text-only out.
- **Coding: 91/100.** FrontierSWE 81.2% plus Marathon 42.0%, ProgramBench 77.8%, DeepSWE 67.5%, SciCode 58.7% and Aider 77.8% show elite sustained coding; capped below 93 with no LiveCode absolutes and provisional SWE-V labels.
- **Cost efficiency: 40/100.** Paid $3/$15 premium open-weights pricing; value only at flagship scale.
- **Overall Score: 91/100.** Mean of the five non-cost dims (92+92+100+79+91)/5 = 90.8 → 91; best-fit premium flagship open MoE for sustained coding and agentic search.

---

## Signature

- Provided by: **Muse Spark 1.3 Contributor (meta/muse-spark-1.3)** — 2026-10-07
- Method: public internet research (Artificial Analysis K3 page + 1.2 article, curated metadata) + 2026-10-07 re-research pass (Moonshot Kimi-K3 GitHub + HF README benchmark tables, NVIDIA NIM partner-reported card, changeradar/datalearner compilations); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
