# Kimi K3 — findings by Muse Spark 1.3 Contributor

- Source: Moonshot AI/Kimi K3, e.g. Meta (`muse-spark-1.3-contributor-free`)
- Date: 2026-09-18 (UTC), amended 2026-09-27 (UTC, user-signed-off exception: launch-suite absolutes added, 1M-out claim corrected, scores recomputed 86 → 90); re-verified 2026-09-29 (UTC, user-signed-off re-research: AA Aug-28 feed — Index 59.7/Coding 76.2/Agentic 54.3 — + AA DeepSWE 69% + eval-breadth rows + 104B-active consensus + out-window variance added; Reasoning 91 → 92, Context 100 → 98, Multimodal 78 → 79, Coding 90 → 91 — Overall holds 90)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K3 (Moonshot AI flagship multimodal MoE)
- **Short description:** Moonshot AI's 2.8T-parameter multimodal MoE flagship (July 2026) with a 1M-token input and output window, frontier multimodal document/math reasoning and terminal-agent coding; proprietary, premium priced.
- **Provider / access:** Moonshot AI via Kimi API (17 providers) + HF weights (Kimi K3 License); no Zen Free ID (Chat Completions, tool calling supported).
- **Release / knowledge:** 2026-07-16 release, weights 2026-07-27 (Kimi K3 License, open-weight); knowledge cutoff undisclosed (amended 2026-09-27).
- **IDs:** `moonshotai/kimi-k3` (state explicitly: no Free ID exists on Zen)
- **Context window:** 1,048,576 (1M) in / 128,000–131,072 out (benchgen 131,072 default, up to 1M max — variance noted — re-verified 2026-09-29)
- **Modalities:** text, image, document in; text out; reasoning yes (max); tool calls yes
- **Pricing (as of 2026-09-18):** Paid $3.00 in / $15.00 out ($0.30 cached) per 1M (AA page; no Zen Free ID)
- **Architecture:** open-weights MoE, 2.8T total / 16-of-896 experts, 104B active (benchgen/whatllm/K2.8-table consensus; filed 280B HokAI outlier retired — re-verified 2026-09-29); Kimi Delta Attention + AttnRes; custom Kimi K3 License (not Apache — review terms before commercial use)

### Raw benchmarks found

Agent / tool use:

- GDPval-AA v2: **1686 Elo** (whatllm/AA; filed 1685 noise-variant retired; trails Sol ~1748 — re-verified 2026-09-29)
- Terminal-Bench 2.1: **88.3%** (Moonshot launch suite, KimiCode harness; 0.5 behind Sol 88.8, ahead of every other open model)
- BrowseComp: **91.2%** (launch suite, leads Sol 90.4); **DeepSearchQA 95.0 F1** (launch suite, leads Fable 5 94.2)
- MCP Atlas: **84.2%** (BenchLM mirror); **Toolathlon-Verified 73.2%** (BenchLM mirror)
- AutomationBench: **30.8%** (BenchLM mirror); **JobBench 52.9%** (BenchLM mirror); **APEX-Agents 37.6%** (BenchLM mirror)
- Eval breadth (launch-published): Next.js **92%**; Supabase **90.9%** no-skills / 86.4% with-skills; BullshitBench v2 **73%**; DECK-Bench **73.5%**; Kimi Code Bench 2.0 **72.9%**; MLS Bench **48.3%** (re-verified 2026-09-29)
- Frontend Arena: **#1, 1679 Elo** (LMArena community vote, 6/7 domains — re-verified 2026-09-29)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: see MCP Atlas 84.2% and Toolathlon-Verified 73.2% rows above; no verified SWE Atlas Codebase QnA score found

Reasoning / knowledge:

- GPQA Diamond: **93.5%** (Moonshot launch suite, highest published open-weight result, ahead of Opus 4.8 91.0%)
- HLE: **56% open-board top** (Swfte tracker); **43.5% without tools** (HokAI tracker)
- AIME 2025: **89%** (HokAI tracker); **MMLU-Pro 87%** (HokAI tracker)
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index: **59.7** (AA Aug-28 feed; filed 57 blended-variant retired); Coding Index **76.2** / Agentic Index **54.3** (same feed — re-verified 2026-09-29); BenchLM overall: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **67.5% SWE-bench Verified** (HokAI tracker label, provisional harness); Superconductor custom SWE-Bench ~80% quality band, same as Opus 4.8 at ~1/4 the ticket cost (slowest agent, ~44 min/ticket)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE: **67.5%** launch (67.3% mini-SWE lane); **69%** AA-independent v1.1 (re-verified 2026-09-29); **81.2% FrontierSWE** (launch suite, trails Fable 5 86.6%); **42.0% SWE Marathon** (launch suite, leads Sol 39.0%); **77.8% ProgramBench** (launch suite, leads Sol 77.6%); **77.8% Aider Polyglot** (HokAI tracker); **73.9% VulcanBench v3** and **60.8% cursorBench32** (BenchLM mirrors)

Reasoning / multimodal notes:

- ARC-AGI-2 tails at **32%** (HokAI tracker) — the one weak abstract-reasoning point against an otherwise frontier set
- MMMU-Pro vision: **81.6%** (launch suite, vs Fable 5 81.2%, Sol 83.0)
- OmniDocBench: **91.1%**; CharXiv Reasoning: **84.8%**; SpreadsheetBench 2: **34.8** (launch suite — re-verified 2026-09-29)

Long context:

- **1M in / 128K out verified; Kimi Delta Attention + AttnRes cross-depth retrieval designs target stable very-long-context recall; no MRCR/RULER percentage found**

### Normalized scores (1–100)

- **Tool use: 90/100.** TB2.1 88.3% plus BrowseComp 91.2%, MCP Atlas 84.2% and GDPval 1685 show frontier open agent orchestration; capped below 92 with no Tau3/Claw-Eval numbers.
- **Reasoning: 92/100.** GPQA 93.5% (top open-weight) plus HLE 56%, AA Index 59.7, AIME 89% and MMLU-Pro 87% show frontier reasoning; capped below 93 by the ARC-AGI-2 32% tail and no LCR/CritPt numbers.
- **Context window: 98/100.** 1M in / ~128K out with KDA + AttnRes long-context designs; capped with no MRCR/RULER percentage found.
- **Multimodal: 79/100.** Text/image/document in with MMMU-Pro 81.6%, OmniDocBench 91.1% and CharXiv 84.8% measured; capped below video/audio omni models with text-only out.
- **Coding: 91/100.** FrontierSWE 81.2% plus Marathon 42.0%, ProgramBench 77.8%, DeepSWE 67.5–69%, Aider 77.8% and Frontend Arena #1 show elite sustained coding; capped below 92 with no LiveCode/SciCode absolutes and a provisional SWE-V label.
- **Cost efficiency: 40/100.** Paid $3/$15 premium open-weights pricing; value only at flagship scale.
- **Overall Score: 90/100.** Mean of the five non-cost dims (90+92+98+79+91)/5 = 90.0 → 90; best-fit premium flagship open MoE for sustained coding and agentic search.

---

## Signature

- Provided by: **Muse Spark 1.3 Contributor (meta/muse-spark-1.3)** — 2026-09-18
- Method: public internet research (Artificial Analysis K3 page + 1.2 article, curated metadata); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
