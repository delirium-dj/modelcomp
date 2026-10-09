# GPT-5.4 Pro — findings by Grok 4.6

- Source: OpenAI (`gpt-5.4-pro`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 Pro
- **Short description:** Extra-compute GPT-5.4 for maximum performance on complex tasks. Same 1.05M-class window and image+text I/O as GPT-5.4; billed at Pro rates with no cached-input discount. Distinct from `gpt-5.4` and from later GPT-5.5 Pro.
- **Provider / access:** OpenAI API `gpt-5.4-pro` (snapshot `gpt-5.4-pro-2026-03-05`); ChatGPT Pro/Enterprise. Also Azure / OpenRouter. Responses-style long-running requests. No verified OpenCode Zen Free ID found.
- **Release / knowledge:** 2026-03-05; knowledge cutoff 2025-08-31 (OpenAI docs).
- **IDs:** `openai/gpt-5.4-pro`; no Free ID on Zen
- **Context window:** 1,050,000 tokens total, 128,000 max output (OpenAI docs). Prompts >272K input billed 2× input / 1.5× output for the full session.
- **Modalities:** Text and image in → text out; reasoning tokens; tools. No native audio/video out on the card.
- **Pricing (as of 2026-10-09):** $30 / $180 per 1M in/out; no cached-input discount; regional +10%; Flex listed $15/$90 on OpenRouter. Cost scored on $30/$180.
- **Architecture:** Proprietary extra-compute serving of GPT-5.4 (closed weights).

### Raw benchmarks found

Agent / tool use:

- BrowseComp: **89.3%** (OpenAI launch post: “GPT-5.4 Pro sets a new state of the art of 89.3%”)
- GDPval wins-or-ties: **82.0%** in the launch Pro column vs **83.0%** for GPT-5.4
- Tau2-bench Telecom: **98.7%** (launch Pro column) vs 98.9% standard
- MCP Atlas: **60.6%** (launch Pro column) vs 67.2% standard
- Toolathlon: **51.9%** (launch Pro column) vs 54.6% standard
- Terminal-Bench 2.0: **77.3%** listed in the coding table’s second numeric slot (Pro column in the same five-model header)
- Tau3-Banking / Claw-Eval: no verified public score found
- GDPval-AA: Artificial Analysis comparison page shows **1248** for GPT-5.4 xhigh and does **not** fill a Pro GDPval-AA cell — not used as a Pro score
- CritPt (AA, Pro xhigh): **30.0%** (OpenRouter / AA / DataLearner)

Reasoning / knowledge:

- GPQA Diamond: **94.4%** (OpenAI launch Pro column); **94.6%** extra-high on DataLearner
- HLE with tools: **58.7%**; without tools: **42.7%** (OpenAI launch Pro column)
- FrontierMath Tier 4: **38.0%** (launch Pro column)
- Frontier Science Research: **36.7%** (launch Pro column)
- ARC-AGI-2: **83.3%** (BenchLM citing the launch post)
- ARC-AGI-1: **94.50%** (ARC Prize GPT-5.4 Pro xhigh, via BenchLM)
- AA Intelligence Index: no complete Pro Index number found (AA comparison leaves Pro Index blank; standard xhigh listed 39*)

Coding:

- SWE-Bench Pro (Public): **56.8%** in the launch table’s Pro column vs **57.7%** for GPT-5.4
- Terminal-Bench 2.0: **77.3%** (launch coding table, Pro slot)
- SWE-bench Verified / LiveCodeBench / SciCode / DeepSWE / Vibe: no verified public score found for the Pro ID

Long context:

- Official 1.05M window. AA-LCR **82%** is listed for GPT-5.4 xhigh, not filled for Pro on the AA comparison page — not counted as Pro-isolated.

Multimodal:

- Image-in / text-out. Launch computer-use/vision table is sparse for Pro; MMMU Pro figures in that table are not cleanly Pro-labeled. No native video/audio I/O.

### Normalized scores (1–100)

- **Tool use: 88/100.** BrowseComp 89.3% SOTA and Tau2 Telecom 98.7% are frontier; TB 2.0 ~77% is strong. Capped by Toolathlon 51.9% / MCP Atlas 60.6% below the standard GPT-5.4 column, missing Tau3, and no Pro GDPval-AA.
- **Reasoning: 93/100.** GPQA ~94.4–94.6% and HLE-with-tools 58.7% clear the 90+/40%+ frontier refs; CritPt 30% and ARC-AGI-2 83.3% support. Capped by a blank AA Index for Pro and HLE no-tools still 42.7%.
- **Context window: 95/100.** 1.05M official is the ≥1M tier; no Pro-isolated ≥98% retrieval score.
- **Multimodal: 68/100.** Documented I/O is image-in / text-out (60–70). Capped by no native audio/video.
- **Coding: 85/100.** SWE-Pro ~56.8% and TB 2.0 ~77% are high-mid, not the 90–100 SWE-Verified 95% / DeepSWE 74%+ band. Capped by missing Pro SWE-Verified/SciCode/LiveCode.
- **Cost efficiency: 18/100.** $30/$180 with no cache discount, plus 2×/1.5× above 272K input, matches the ultra-premium band used for GPT-5.5 Pro.
- **Overall Score: 86/100.** Mean of 88, 93, 95, 68, 85 = 85.8 → 86. Best-fit: paid hardest reasoning/research in ChatGPT Pro; prefer `gpt-5.4` when BrowseComp is not the bottleneck and token price matters.

---

## Signature

- Provided by: **Grok 4.6 (xai/grok-4.6)** — 2026-10-09
- Method: public internet research (OpenAI docs and GPT-5.4 launch post, Artificial Analysis comparison, OpenRouter, BenchLM, DataLearner); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
