# GPT-6.1 Terra — findings by Big Pickle

- Source: OpenAI (`gpt-6.1-terra`, OpenAI API / OpenRouter / OpenCode)
- Date: 2026-10-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6.1 Terra
- **Short description:** OpenAI's cost-optimized frontier-tier model (October 2026), positioned one band below GPT-6.1 Sol and GPT-6 Astra; it halves the previous Terra generation's API price while roughly doubling agentic-coding scores, making it the value pick for high-volume terminal, document and vision work rather than the hardest long-horizon jobs.
- **Provider / access:** OpenAI API (`gpt-6.1-terra`), with tool calling through the Responses API; also served through OpenRouter (both Artificial Analysis and independent reviewers ran it there) and the configured `opencode/gpt-6.1-terra` entry on OpenCode Zen.
- **Release / knowledge:** Released 2026-10-26; knowledge cutoff 2026-06-01.
- **IDs:** `openai/gpt-6.1-terra` (OpenAI API / OpenRouter), `opencode/gpt-6.1-terra` (Zen entry configured for this folder). No Free ID verified — all sampled routes are paid.
- **Context window:** 1,050,000 tokens total, 922K max input and 128K max output (Artificial Analysis model page; consistent with the launch material's long-document positioning). This contradicts the scaffolded folder note of "128K total", which is a placeholder rather than a measurement.
- **Modalities:** Text and image in; text out. Reasoning effort ∈ {none, low, medium (default), high, xhigh, max}; tool calls, structured/JSON output and prompt caching ($0.05/1M cached input).
- **Pricing (as of 2026-10-30):** $1.00 in / $5.00 out / $0.05 cached input per 1M tokens — roughly half the GPT-5.6 Terra list price and about a fifth of Opus-class output pricing.
- **Architecture:** Proprietary OpenAI model; no parameter count or weights published.

### Raw benchmarks found

> OpenAI's launch table and third-party harnesses disagree by several points on the same benchmarks, and Artificial Analysis has two live index generations. Both are recorded; the higher-confidence independent run is used for scoring where they diverge.
>
> Key conflicts: Terminal-Bench 4.0 — **50.3%** (OpenAI, max effort) vs **55.6%** (Artificial Analysis, mini-swe-agent, 66 tasks × 3 repeats, 500-step cap) vs **49.5%** (Vals AI). CritPt — **28.0%** (OpenRouter/AA measured) vs **65%** on the *CritPt v2 hard subset* quoted in AA commentary; these are different benchmark versions, not the same test. OSWorld 2.1 — **74.2%** (OpenAI offline set) vs **79.5%** (benchgap estimate, not a measured run).

Agent / tool use:

- Terminal-Bench 4.0: **50.3%** (OpenAI, max) / **55.6%** (Artificial Analysis) / **49.5%** (Vals AI) — a ~20-point jump over GPT-5.6 Terra's 21.5% vendor / 35.4% AA
- Terminal-Bench-Science 0.1: **58.3%** (OpenAI, max) — within five points of Claude Opus 5.5 at under one-fifth the estimated cost
- Agents' Last Exam: **60.0%** at max / **57.6%** at medium (AA) at $1.01 and $0.29 per task respectively
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: **56.9%** (benchgap *estimate*, ±2.9 pp) — no vendor or AA measured value published; **AA-Briefcase v1.1: 1402 Elo**
- AutomationBench-AA: **60.2%** (AA); Toolathlon-Verified **78.6%** and JobBench **69.4%** (both benchgap estimates, low confidence)
- OSWorld 2.1: **74.2%** (OpenAI, offline set) — below Sol/Opus ~80%; **Code Arena WebDev 1671** (+151 over GPT-5.6 Terra) at a $0.40 median task cost
- Claw-Eval / ClawProBench / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found
- Independent agent harnesses: **Gauntlet 7.2 0.6953, 13th of 48** (leanzero, $0.75, capped by a 3D check at 0.699) and **Forge 2.0 0.4384 / 0.4174** (26th/28th of 70, reliability multiplier ~0.48 of raw 0.91/0.88); Bito's long-session rubric **69% overall / 71% planning** vs Sol 74% / 84%

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **51 at max**, 45 at xhigh, 38 at medium (**v5.0**); **48.11 at $0.40/task** on **v4.3.2** — six points above GPT-5.6 Terra on the same index, four below GPT-6.1 Sol (55)
- GPQA Diamond: **95.8%** (benchgap estimate; AA-GPQA 96.1% estimate) — no measured vendor row published
- HLE: **46.2%** (AA measured, no tools) / **47% HLE-Diamond**; HLE w/o tools 56.4% and HLE w/ tools 59.7% are benchgap estimates and should not be mixed with the measured 46.2
- AA-LCR: **82.7%** (AA measured)
- CritPt: **28.0%** (measured, OpenRouter/AA) — the weakest science row; AA's "65%" figure refers to the CritPt v2 hard subset and is not comparable
- SciCode: **55.1%** (AA measured) / 54.8% (estimate); FrontierMath v2 Tier 4 **92.7%** and Tiers 1–3 **90.9%** (measured)
- Omniscience: **47.6% accuracy / 65.5% non-hallucination** (AA measured) — AA's launch note says it guesses on 38% of unknown-answer prompts, down from 88% for GPT-5.6 Terra; OpenAI's internal error-inducing set puts factual-error rate at 4.3% at max effort (from 22.3%), 16.7% at low
- HealthBench Professional: **62.7**; LABBench2 82.4 (estimate); MazeBench 16.0%; ARC-AGI-2 78.3% (estimate, wide interval)

Coding:

- Terminal-Bench 4.0: **50.3%** vendor / **55.6%** AA / 49.5% Vals — effort curve 24.8% low → 35.8% medium → 50.3% max, i.e. Sol at *medium* (52.7%) already beats Terra at max
- AA Coding Agent Index v2.0: **48** (Sol 54, GPT-6 Luna 31); FrontierCode 2.0: **42.3% max / 34.5% medium** — ahead of GPT-6.1 Sol's 40.6% max and near Astra's 42.4%
- SWE-bench Verified **87.9%**, SWE-bench Pro **67.2%**, DeepSWE **65.5%**, CursorBench 4.0 **39.2%**, LiveCodeBench v6 **95.6%** — all benchgap *estimates* (medium-to-low confidence), no vendor rows published
- GDP.pdf: **28.6–29%** (AA measured) — a 5-point gain over GPT-5.6 Terra but still a weak document-finance row
- Code Arena WebDev 1671; Bito long sessions 69% vs Sol 74%; Gauntlet 7.2 13th of 48; Forge 2.0 26th/28th with a ~0.48 reliability multiplier — strong short bursts, weak multi-hour durability
- Vibe Code Bench / ProgramBench: no verified public score found

Long context:

- **1,050,000-token window** with **AA-LCR 82.7%** measured (AA) and MRCRv2 85.9% / GraphWalks BFS (256K–1M) 71.9% as benchgap estimates. The measured LCR result confirms genuine retrieval at ~1M, but the GraphWalks estimate hints that multi-hop navigation near the window edge is weaker than the headline length suggests.

### Normalized scores (1–100)

- **Tool use: 85/100.** A ~20-point Terminal-Bench jump (55.6% AA), 60.0% Agents' Last Exam and a 1671 Code Arena WebDev score make it a capable agent, but the Coding Agent Index (48 vs Sol 54), GDPval-AA 56.9%, AutomationBench 60.2% and OSWorld 74.2% keep it a band below the Sol/Opus agent tier.
- **Reasoning: 85/100.** Index 51 at max effort is four points under Sol with GPQA ~96% and FrontierMath T4 92.7%, but HLE 46.2%, CritPt 28.0% and Omniscience accuracy 47.6% show the hard-science and factual-recall ceiling; the 10-point index spread between medium (38) and max (51) means the default setting is materially weaker.
- **Context window: 94/100.** 1,050,000 tokens with 922K max input, 128K output and 82.7% measured AA-LCR retrieval — a genuine long-document strength, capped only by the estimated (not measured) multi-hop GraphWalks result.
- **Multimodal: 88/100.** Text + image in, text out, with MMMU-Pro 85.5 measured, CharXiv 93.4, strong Roboflow OCR (84.4%) and object detection (84.7 mAP@50); no audio or native video input and text-only output hold it below the omni-modal tier.
- **Coding: 87/100.** Terminal-Bench 4.0 55.6% AA and FrontierCode 2.0 42.3% (ahead of Sol) are excellent, but DeepSWE 65.5%, GDP.pdf 29%, the 13th-of-48 Gauntlet placement and ~0.48 Forge reliability multiplier expose weak long-horizon and from-scratch durability.
- **Cost efficiency: 90/100.** $1.00/$5.00/$0.05 and $0.96 per AA index task at max ($0.40 on the v4.3 run) undercut Sol by roughly a quarter to a third per task and Opus by far more, and AA places low/medium effort on the cost-efficiency frontier; max-effort runs fall off that frontier, which is the only drag.
- **Overall Score: 88/100.** Mean of the five quality dims (85 + 85 + 94 + 88 + 87 = 439 / 5 = 87.8, half-up 88); best fit is high-volume terminal agents, document/vision extraction and cost-sensitive batch coding, with GPT-6.1 Sol or Opus 5.5 preferred for multi-hour reliability-critical work.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-10-30
- Method: public internet research across OpenAI's launch post and system-card material, Artificial Analysis's launch analysis and model page, OpenRouter's benchmark panel, Vals AI and benchgap aggregates, plus independent hands-on evaluations (leanzero's Gauntlet/Forge harnesses, Bito's long-session rubric, kingy.ai and the-decoder cross-checks); vendor and independent numbers are reported side by side and version conflicts (Terminal-Bench harnesses, CritPt v1 vs v2, estimated vs measured rows) are flagged rather than averaged. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Introducing GPT-6.1 Terra — OpenAI](https://openai.com/index/introducing-gpt-6-1-terra/)
  - [Artificial Analysis — GPT-6.1 Terra pushes the cost efficiency frontier](https://artificialanalysis.ai/articles/gpt-6-1-terra-pushes-the-cost-efficiency-frontier)
  - [AI Primer — GPT-6.1 Terra release evaluations (Arena, Roboflow, AA cross-checks)](https://www.ai-primer.com/engineer/stories/gpt-61-terra-release-evaluations)
  - [leanzero — GPT-6.1 Terra benchmarks: 13th of 48 on agentic coding](https://leanzero.net/blog/gpt-6-1-terra-benchmark)
  - [WinBuzzer — OpenAI's GPT-6.1 Terra boosts coding and computer use at lower cost](https://winbuzzer.com/2026/10/27/openai-gpt-6-1-terra-boosts-coding-at-lower-cost-xcxwbn/)
  - [kingy.ai — GPT-6.1 Terra: benchmarks, pricing and model comparisons](https://kingy.ai/blog/gpt-6-1-terra/)
  - [The Decoder — GPT-6.1 Terra halves OpenAI's API prices](https://the-decoder.com/gpt-6-1-terra-halves-openais-api-prices-and-still-gains-ground-on-its-larger-models/)
  - [benchgap — GPT-6.1 Terra benchmark scores](https://benchgap.net/model/gpt-6-1-terra)

---
