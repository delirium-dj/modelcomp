# Kimi K3 — findings by Claude Sonnet 5

- Source: Moonshot AI/Kimi K3, e.g. Moonshot AI (`moonshotai/Kimi-K3`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K3 (open-weight flagship; not to be confused with the earlier Kimi K2.x series)
- **Short description:** Kimi K3 is Moonshot AI's (Beijing) flagship 2.8-trillion-parameter open-weight mixture-of-experts model, positioned as a native multimodal, agentic reasoning model; top public use case is frontend/agentic coding, where it led the LMArena Frontend Code leaderboard at launch.
- **Provider / access:** Official Moonshot API at `api.moonshot.ai/v1`, OpenAI-compatible Chat Completions, model ID `kimi-k3`. Also available via OpenRouter, Kimi.com, Kimi Code, and resellers (haimaker.ai, apiyi.com). No verified OpenCode Zen listing/Free ID found in search results.
- **Release / knowledge:** API launched 2026-07-16; full weights released 2026-07-27 under the "Kimi K3 License." Training-data cutoff not stated in any source found — no verified public figure.
- **IDs:** `moonshot/kimi-k3` (official API model ID `kimi-k3`; also listed as `moonshotai/kimi-k3` on third-party routers). No OpenCode Zen Free-tier ID found.
- **Context window:** 1,048,576 tokens (~1M), input and output; verified via Moonshot's own API docs as mirrored by multiple vendor doc pages (APIYI, Haimaker, Verdent/Tosea). One reseller notes a 131,072-token default output cap unless the larger window is explicitly requested.
- **Modalities:** Text, image, and video input (native vision confirmed across vendor docs); text-only output; reasoning: yes, built-in and currently "max effort" only (no selectable low/medium tiers reported); tool/function calling: yes; JSON/structured output mode: not confirmed in sources found.
- **Pricing (as of 2026-07-31–08-06, per vendor docs):** $3.00/M input (cache-miss), $0.30/M input (cache-hit), $15.00/M output — flat regardless of context length used (no long-context pricing tier). No free tier found.
- **Architecture:** 2.8T total parameters, 104B active per token (MoE, "Kimi Delta Attention"); open-weights under the Kimi K3 License (custom license, not a standard OSI license).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **88.3%** (Moonshot official model card via Hugging Face; corroborated by BenchLM and DataLearner, Kimi Code harness)
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: **~1,686 Elo** (WhatLLM, citing Moonshot's launch evaluation; VentureBeat reports 1,687; Fenxi reports an earlier 1,668 "first evaluation" figure — sources disagree in the 1,668–1,687 range)
- Claw-Eval / ClawProBench: no verified public score found
- Toolathlon / MCP-Atlas / SWE Atlas Codebase QnA: Toolathlon-Verified **76.5%** (BenchmarkList) / **73.2%** (BenchLM, differing snapshot); MCPMark-Verified **94.5%** (Moonshot official model card)

Reasoning / knowledge:

- GPQA Diamond: **93.5%** (Moonshot official model card via Hugging Face; corroborated by BenchLM, DataLearner, Fenxi)
- HLE: **56%** (with tools, DataLearner/BenchLM); HLE without tools: **43.5%** (BenchLM)
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index: **57.1–59.7** depending on snapshot date (WhatLLM's Aug 28, 2026 AA feed: 59.7; Bleap.finance: 57.11, ranked #4 among compared frontier models; BenchLM compare table: 57.1%)
- Omniscience Accuracy / Hallucination Rate: AA-Omniscience Index **18.4%** / Hallucination Rate **50.9%** (BenchLM head-to-head vs. GPT-5.3 Codex)

Coding:

- SWE-bench Verified / SWE-Pro: no official Moonshot-reported score found (Moonshot's own table substitutes FrontierSWE and DeepSWE instead); third-party "Vals SWE-bench" harness reports **93.4%** (BenchLM) — flagged as a different harness, not the canonical SWE-bench Verified leaderboard
- LiveCodeBench: "Vals LiveCodeBench" **87.2%** (BenchLM) — third-party harness, not independently cross-checked against the official LiveCodeBench leaderboard
- SciCode / AA-SciCode: **58.7%** (BenchLM head-to-head vs. GPT-5.3 Codex)
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: DeepSWE **67.5%** (Kimi Code harness, Moonshot model card) / **67.3%** (mini-SWE-agent harness, official DeepSWE leaderboard); FrontierSWE **81.2%**; Program Bench **77.8%**; SWE-Marathon **42.0%**; Artificial Analysis Coding Index **76.2** (WhatLLM, Aug 28 2026 AA feed)

Long context:

- Moonshot's own model card states: "When evaluated with the full 1M-token context window and no context management, Kimi K3 achieves a score of 90.4" on an internal long-horizon eval — this is not an MRCR/RULER/GraphWalks retrieval benchmark by name, so it is reported here as the closest available long-context signal rather than a verified retrieval score at a specific depth.

### Normalized scores (1-100)

- **Tool use: 88/100.** Terminal-Bench 2.1 at 88.3% clears the frontier band (~88%+), but GDPval-AA Elo (~1,686) sits below the frontier cutoff (~1,750+) and Tau3-Banking has no verified score, so the dimension is capped just under frontier tier.
- **Reasoning: 90/100.** GPQA Diamond at 93.5% is squarely frontier-tier; the Artificial Analysis Intelligence Index (57–60) sits just under the 60-point frontier threshold, and HLE drops sharply without tools (43.5% vs. 56% with tools), which together keep the score at the low end of the frontier band.
- **Context window: 96/100.** Verified 1,048,576-token (≥1M) window places it in the top tier (95-100); the internal 90.4 long-context score is suggestive but not a named ≥98% retrieval benchmark (e.g., MRCR/RULER), so it does not qualify for the full 100.
- **Multimodal: 85/100.** Confirmed text, image, and video input (native vision) with text-only output — no audio input or non-text output found, placing it in the "+video/PDF in" band (75-90); supported further by a strong OmniDocBench-style document result referenced in secondary coverage.
- **Coding: 90/100.** Terminal-Bench 2.1 (88.3%) and FrontierSWE (81.2%) are frontier-level, and K3 leads its own comparison table on Program Bench and SWE-Marathon, but DeepSWE (67.5%) falls short of the ~74% frontier threshold and no official SWE-bench Verified number was found, capping the score below a full frontier rating.
- **Cost efficiency: 60/100.** Flat $3 input / $15 output per million tokens maps to the "$3/$15 = ~60" tier in the mandated cost mapping; no free tier exists.
- **Overall Score: 89.8/100.** Mean of Tool use (88) + Reasoning (90) + Context window (96) + Multimodal (85) + Coding (90), divided by 5 = 89.8. Best fit: long-context, agentic/frontend-coding workloads where a ~1M-token window and strong tool-use benchmarks matter more than top-of-leaderboard pure reasoning or a free/cheap price point.

---

## Signature

- Provided by: **Claude Sonnet 5 (anthropic/claude-sonnet-5)** — 2026-10-01
- Method: Fresh public web research across vendor documentation (Moonshot AI API docs and Hugging Face model card), aggregator/leaderboard sites (BenchLM, BenchmarkList, DataLearner), and independent press coverage (VentureBeat, Tom's Hardware, Simon Willison, WhatLLM, Bleap.finance); no reliance on prior chat memory. Scores are normalized 1-100 interpretations per the mandated methodology, not official vendor scores. Several sources report slightly different GDPval-AA Elo and Artificial Analysis Index values depending on snapshot date; ranges are noted above rather than collapsed to a single figure.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
