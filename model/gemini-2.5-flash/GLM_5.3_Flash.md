# Gemini 2.5 Flash — findings by GLM 5.3 Flash

- Source: Google (`gemini-2.5-flash`)
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Flash (original 2025 GA release; a refreshed "Gemini 2.5 Flash (Sep)" variant exists — Artificial Analysis deprecates this page in its favor)
- **Short description:** Google's mid-2025 price/performance workhorse: a hybrid-thinking multimodal Flash model that replaced 2.0 Flash with upgraded reasoning, thinking budgets, and a 1M-token window. By 2026 it is a legacy budget model, superseded by the 3.x Flash line.
- **Provider / access:** Google — Gemini API ID `gemini-2.5-flash` (AI Studio, Gemini API, Vertex AI); also on DeepInfra and listed on OpenCode Zen with standard rate limits. Google's own `generateContent` API (not Chat Completions); MCP SDK support added at I/O 2025.
- **Release / knowledge:** preview 2025-04-17 (BenchmarkList tracks the preview); GA at Google I/O 2025-05-20 (llm-stats). Knowledge cutoff January 2025 (llm-stats + AA).
- **IDs:** `gemini-2.5-flash` (Google/DeepInfra). Free tier exists (Google AI Studio / Gemini API free tier; OpenCode Zen lists it with standard rate limits).
- **Context window:** 1,000,000-token input; max output 65,536 tokens via Google (DeepInfra advertises 1M/1M). Verified via llm-stats provider table.
- **Modalities:** text, image, audio and video input, text output (AA). Native tool calls (with Google Search grounding/code execution), JSON mode, thought summaries + thinking budgets. No PDF input and no audio/video output documented on the pages checked.
- **Pricing (as of 2026-09-18):** $0.30 in / $2.50 out per 1M (Google API; DeepInfra matches). 90% prompt-cache discount → AA blended 7:2:1 ≈ $0.33/1M. Free tier available (rate-limited).
- **Architecture:** proprietary, parameters undisclosed. Reasoning toggle (AA benchmarks the non-reasoning variant: II 10; a thinking variant is tracked separately).

### Raw benchmarks found

Agent / tool use:

- Berkeley Function-Calling Leaderboard: **56.2%** (rank 12/85, 87th pct) (BenchmarkList)
- Claw Bench: **88** overall points (Task Completion 88, Efficiency 79.2, Security 83.6; run 2026-07-10) (BenchmarkList)
- Tau2-Bench Telecom: **31.6%** (rank 179/332) — weak for a "Flash" tier (BenchmarkList)
- Terminal-Bench Hard: **13.6%** (rank 137/326) (BenchmarkList)
- MCP-Universe: **21.6%**; GDPval-AA: **742** (rank 157/340); Vending-Bench 2: **548.84**; DPBench: **90.0%** (rank 1/5) (BenchmarkList)
- TB2.0/TB2.1, Tau3, OSWorld, BrowseComp, Finance Agent: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **83%**; AIME 2024: **88%**; AIME 2025: **72%**; MMMU: **80%**; HLE: **11%** (allthemodels aggregate of Google/AA/arena sources)
- ARC-AGI-2: **2.5%** / ARC-AGI-1: **33.3%**; ECI: **120.49** (#141/398) (BenchmarkList)
- Artificial Analysis Intelligence Index v4.3: **10** (#27/80, non-reasoning class; median 8) (artificialanalysis.ai)
- CritPt / MLCR / Omniscience / LCR: no verified public score found

Coding:

- SWE-bench Verified: **60%** (allthemodels aggregate)
- LiveCodeBench / SciCode / SWE-Pro / Vibe Code Bench / DeepSWE: no verified public score found

Long context:

- Window: **1M tokens** (Google: 1M in / 65.5K out; DeepInfra 1M/1M) (llm-stats)
- MRCR / RULER / AA-LCR at window length: no verified public score found

### Normalized scores (1–100)

> Independent derivation per the methodology in `../../model-comparison.md`; Overall = mean of the six.

- **Tool use: 65/100.** Solid function calling (BFCL 56.2, Claw Bench 88 pts, DPBench 90) but the 2026-generation agentic evals are weak: Tau2 Telecom 31.6, TB-Hard 13.6, MCP-Universe 21.6, midpack GDPval-AA 742.
- **Reasoning: 68/100.** GPQA 83 and AIME 2024 88 are respectable, but AIME 2025 72, HLE 11 and ARC-AGI-2 2.5 trail the 2026 frontier badly; AA II 10 (#27/80) confirms above-median-only.
- **Context window: 97/100.** Full 1M-token input at the top tier of this repo, capped slightly by the 65.5K max-output cap via Google and no published long-context retrieval score.
- **Multimodal: 88/100.** Text + image + audio + video in with MMMU 80 — omni input tier; text-only output and no documented PDF input keep it below the 90–95 omni scorers.
- **Coding: 70/100.** SWE-bench Verified 60% is workhorse-class and Terminal-Bench Hard 13.6 is weak; no LiveCodeBench/SWE-Pro/SciCode numbers found to argue higher.
- **Cost efficiency: 95/100.** Rate-limited free tier on AI Studio/Zen plus a very cheap paid rate ($0.30/$2.50, 90% cache → ≈$0.33 blended); only output-side $2.50 keeps it from 100.
- **Overall Score: 81/100.** Mean: (65 + 68 + 97 + 88 + 70 + 95) / 6 = 483/6 = 80.5 → **81**. Best fit: budget multimodal workhorse for high-volume chat/vision — not for hard agentic or coding runs on 2026 benchmarks.

---

## Signature

- Provided by: **GLM 5.3 Flash (z.ai/glm-5.3-flash)** — 2026-09-18
- Method: fresh public internet research from zero (llm-stats model page + provider table, Artificial Analysis Gemini 2.5 Flash page incl. II v4.3 composition and deprecation pointer to the "(Sep)" refresh, BenchmarkList benchmark map with percentile ranks, Google's I/O 2025 Gemini 2.5 update post, allthemodels benchmark aggregate); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
