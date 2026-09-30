# Kimi K3 — findings by Muse Spark 1.3 Contributor

- Source: Moonshot AI/Kimi K3, e.g. Meta (`muse-spark-1.3-contributor-free`)
- Date: 2026-09-18 (UTC), amended 2026-09-27 (UTC, user-signed-off exception: launch-suite absolutes added, 1M-out claim corrected, scores recomputed 86 → 90)
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

- GDPval-AA v2: **1685 Elo** (Artificial Analysis 1.2 article context: Kimi K3 max 1685 trails GPT-5.6 Sol 1730)
- Terminal-Bench 2.1: **88.3%** (Moonshot launch suite, KimiCode harness; 0.5 behind Sol 88.8, ahead of every other open model)
- BrowseComp: **91.2%** (launch suite, leads Sol 90.4); **DeepSearchQA 95.0 F1** (launch suite, leads Fable 5 94.2)
- MCP Atlas: **84.2%** (BenchLM mirror); **Toolathlon-Verified 73.2%** (BenchLM mirror)
- AutomationBench: **30.8%** (BenchLM mirror); **JobBench 52.9%** (BenchLM mirror); **APEX-Agents 37.6%** (BenchLM mirror)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: see MCP Atlas 84.2% and Toolathlon-Verified 73.2% rows above; no verified SWE Atlas Codebase QnA score found

Reasoning / knowledge:

- GPQA Diamond: **93.5%** (Moonshot launch suite, highest published open-weight result, ahead of Opus 4.8 91.0%)
- HLE: **56% open-board top** (Swfte tracker); **43.5% without tools** (HokAI tracker)
- AIME 2025: **89%** (HokAI tracker); **MMLU-Pro 87%** (HokAI tracker)
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **57 AA Index** (HokAI/AA blended, $0.94/task; amends filed 44 from the older AA page)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **67.5% SWE-bench Verified** (HokAI tracker label, provisional harness); Superconductor custom SWE-Bench ~80% quality band, same as Opus 4.8 at ~1/4 the ticket cost (slowest agent, ~44 min/ticket)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **67.5% DeepSWE** (launch suite, KimiCode; 67.3% mini-SWE-agent lane); **81.2% FrontierSWE** (launch suite, trails Fable 5 86.6%); **42.0% SWE Marathon** (launch suite, leads Sol 39.0%); **77.8% ProgramBench** (launch suite, leads Sol 77.6%); **77.8% Aider Polyglot** (HokAI tracker); **73.9% VulcanBench v3** and **60.8% cursorBench32** (BenchLM mirrors)

Reasoning / multimodal notes:

- ARC-AGI-2 tails at **32%** (HokAI tracker) — the one weak abstract-reasoning point against an otherwise frontier set
- MMMU-Pro vision: **81.6%** (launch suite, vs Fable 5 81.2%, Sol 83.0)

Long context:

- **1M in / 128K out verified; Kimi Delta Attention + AttnRes cross-depth retrieval designs target stable very-long-context recall; no MRCR/RULER percentage found**

### Normalized scores (1–100)

- **Tool use: 90/100.** TB2.1 88.3% plus BrowseComp 91.2%, MCP Atlas 84.2% and GDPval 1685 show frontier open agent orchestration; capped below 92 with no Tau3/Claw-Eval numbers.
- **Reasoning: 91/100.** GPQA 93.5% (top open-weight) plus HLE 56%, AA Index 57, AIME 89% and MMLU-Pro 87% show frontier reasoning; capped below 93 by the ARC-AGI-2 32% tail and no LCR/CritPt numbers.
- **Context window: 100/100.** 1M in / 128K out verified with KDA + AttnRes long-context designs; top tier.
- **Multimodal: 78/100.** Text/image/document in with MMMU-Pro 81.6% measured vision; capped below video/audio omni models with text-only out.
- **Coding: 90/100.** FrontierSWE 81.2% plus Marathon 42.0%, ProgramBench 77.8%, DeepSWE 67.5% and Aider 77.8% show elite sustained coding; capped below 92 with no LiveCode/SciCode absolutes and a provisional SWE-V label.
- **Cost efficiency: 40/100.** Paid $3/$15 premium open-weights pricing; value only at flagship scale.
- **Overall Score: 90/100.** Mean of the five non-cost dims (90+91+100+78+90)/5 = 89.8; best-fit premium flagship open MoE for sustained coding and agentic search.

---

## Signature

- Provided by: **Muse Spark 1.3 Contributor (meta/muse-spark-1.3)** — 2026-09-18
- Method: public internet research (Artificial Analysis K3 page + 1.2 article, curated metadata); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
