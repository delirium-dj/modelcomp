# Grok 4 Fast — findings by Step 5 Preview

- Source: xAI (`grok-4-fast-reasoning`)
- Date: 2026-10-19 (UTC) — re-run; first researched 2026-10-09
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4 Fast (Reasoning / Non-Reasoning)
- **Short description:** xAI's cost-efficiency model (released 2025-09-19) — a unified architecture blending reasoning and non-reasoning modes that matched Grok 4's frontier benchmark results with ~40% fewer thinking tokens, delivering a 98% cost reduction to reach the same performance at launch. Best known for the then-largest production context window (2M tokens) and the `grok-4-fast-search` variant that topped LMArena's Search Arena (1163 Elo, +17 over o3-search). **Deprecated 2026-05-15 in favor of Grok 4.3; API retirement 2026-08-15** — still running for existing integrations at unchanged rates.
- **Provider / access:** xAI API (`grok-4-fast-reasoning`, `grok-4-fast-non-reasoning`, `grok-4-fast-search`); grok.com and mobile apps (including free tier). No OpenCode Zen Free ID found.
- **Release / knowledge:** 2025-09-19; knowledge cutoff 2025-09-30.
- **IDs:** `grok-4-fast-reasoning` / `grok-4-fast-non-reasoning` (xAI API).
- **Context window:** 2,000,000 tokens; max output 16K (playground) / 30K (API).
- **Modalities:** Text, image and file in → text out; function calling; web and X search (Agent Tools API).
- **Pricing (as of 2026-10-09):** $0.20 / MTok input, $0.50 output (<128K); $0.50 / $1.00 (≥128K); cached input $0.05. Rates unchanged through July 2026 despite the deprecation notice.
- **Architecture:** Proprietary; 227–344 tok/s measured output, 2.55–2.95s TTFT.

### Raw benchmarks found

Reasoning / knowledge (xAI launch table + independent runs):

- GPQA Diamond: **85.7%** (vendor; Grok 4 87.5%, GPT-5 High 85.7%); AA's independent run: 84.7–84.8% (thinking); Vals: 85.3% thinking / 62.1% non-reasoning
- AIME 2025 (no tools): **92.0%** (beating Grok 4's 91.7%); HMMT 2025: **93.3%** (Grok 4 90.0%)
- HLE (no tools): **20.0%** (Grok 4 25.4%, GPT-5 24.8%); AA's run: 19.1%
- MMLU-Pro: **85%** (#24/203); SimpleQA: **95.0%** (#2 of 53 — behind only DeepSeek V3.2 Exp's 97.1%)
- Artificial Analysis Intelligence Index: **60** at launch (old scale — same tier as Gemini 2.5 Pro and Claude 4.1 Opus) / **17.9** (thinking) and **11.1** (non-reasoning) on the current rebased v4.3.2
- AA-Omniscience index **−29.9** (accuracy 22.8%, hallucination rate 68.3%) — knowledge depth is the weak column

Coding:

- LiveCodeBench (Jan–May): **80.0%** (vendor — beat Grok 4's 79.0% and topped the leaderboard at launch); Vals: 79.0% thinking / 46.1% non-reasoning
- SWE-bench Verified: **45.4–48.0%** (Vals and serenitiesai — mid-pack, far below the current frontier)
- Vibe Code Bench v1.1: **0.0%** (Vals — fails end-to-end app building)
- LMArena Coding: 1438–1458 Elo; WebDev Arena: 1160

Agentic / tool use:

- BrowseComp: **44.9%** (vendor); BrowseComp (zh): 51.2%; X Bench Deepsearch (zh): 74.0%; X Browse: 58%
- Reka Research Eval: **66.0%** (vendor); Kagi LLM Benchmark: 66.1%
- Terminal-Bench / τ²-Bench / MCP-Atlas / GDPval-AA: **no verified public score found**

Long context (the headline spec):

- 2M-token window with 16–30K max output; **no independent needle-in-a-haystack recall figure published for Grok 4 Fast** — recall quality above 1M is unverified
- AA-LCR: **73.7%** (Artificial Analysis, 2026-10-19) — the first published long-context measure for the reasoning variant, decent but not top-tier
- 61M output tokens to complete the AA Intelligence Index (vs 93M for Gemini 2.5 Pro and 120M for Grok 4) — the token-efficiency evidence

Third-pass verification (2026-10-19):

- BenchLM composite: **43.49/100** overall (reasoning variant), #129 of 956 models, 12 of 644 benchmarks covered; Artificial Analysis today: deprecated (suggests Grok 4.1 Fast), non-reasoning variant Index **11** (estimated, #23/71 — matches the file's 11.1), $0.20/$0.50 unchanged (blended $0.23/M), 2M context, 1 provider
- New independent rows: AA-MMMU-Pro **61.8%** (first published MMMU — fills the prior gap, low-mid), AA-LCR **73.7%** (fills the long-context gap), CritPt **2.9%**, AA-IFBench **50.5%**; τ²-Bench 65.8%, GPQA 84.7%, HLE 19.1%, Omniscience −29.9 and Vibe Code 0.00% all reconfirmed

### Normalized scores (1–100)

- **Tool use: 55/100.** BrowseComp 44.9%, Reka Research Eval 66.0% and the LMArena Search Arena #1 finish (1163 Elo) show real search-agent ability; capped by SWE-bench 45.4–48.0% on the agentic harnesses, no published Terminal-Bench/τ²/MCP-Atlas/GDPval numbers, and the model's deprecation.
- **Reasoning: 72/100.** GPQA 84.7–85.7%, AIME 92.0%, HMMT 93.3% and MMLU-Pro 85% remain solid mid-frontier reasoning for a 2025 model; capped by HLE 19.1–20.0%, the rebased AA Index of 17.9, and AA-Omniscience −29.9 with a 68.3% hallucination rate.
- **Context window: 88/100.** 2,000,000-token window is the ≥1M tier and was the largest production window at its launch; the first published long-context measure (AA-LCR 73.7%, 2026-10-19) is decent but below the 83–84% leaders, and the 128K pricing cliff plus unverified recall above 1M keep it from the top of the band. Trimmed from 90 on the measured LCR.
- **Multimodal: 66/100.** Text, image and file in → text out is the 60–70 band; the first published MMMU row (AA-MMMU-Pro 61.8%, 2026-10-19) sits at the low end of the band, so it is now bottom-of-band rather than unspecified mid-band. Trimmed from 68.
- **Coding: 62/100.** LiveCodeBench 79–80% (leaderboard-topping at launch) and LMArena Coding 1438–1458 are respectable; capped by SWE-bench Verified 45.4–48.0%, Vibe Code Bench 0.0% and no SWE-bench Pro/DeepSWE/CursorBench numbers — competitive programming strength did not carry into repository-scale agentic coding.
- **Cost efficiency: 94/100.** $0.20/$0.50 per MTok ($0.05 cached, half rates above 128K) maps just above the methodology's ~$0.10/$0.20 = 97–99 tier — the SOTA price-to-intelligence ratio at launch, confirmed independently by Artificial Analysis, and still ~25x cheaper than Gemini 2.5 Pro per the independent review.
- **Overall Score: 69/100.** Mean of the five non-cost dims (55+72+88+66+62)/5 = 68.6 (Context 90→88 and Multimodal 68→66 on the newly measured AA-LCR 73.7% / AA-MMMU-Pro 61.8%; Overall unchanged). Best-fit recommendation: a deprecated but uniquely cheap long-context workhorse — 2M-token ingestion at $0.20/$0.50 for large-document and search-agent workloads on existing integrations; new projects should evaluate Grok 4.3/4.5 instead.

---

## Signature

- Provided by: **Step 5 Preview (StepFun)** — 2026-10-19
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores. Re-run verification (2026-10-19) against Artificial Analysis (deprecated, suggests Grok 4.1 Fast: non-reasoning Index 11 #23/71 — unchanged from the file's 11.1; pricing unchanged) and BenchLM (reasoning-variant composite 43.49/100, #129/956, 12/644 benchmarks): the file's multimodal and long-context gaps are now measured — AA-MMMU-Pro 61.8% (low end of the band — Multimodal trimmed 68→66) and AA-LCR 73.7% (decent, below the leaders — Context trimmed 90→88) — plus CritPt 2.9% and IFBench 50.5%. Overall unchanged at 69. First pass (2026-10-09) used xAI Grok 4 Fast launch post + pricing, Artificial Analysis, HokAI, BenchLeader, ai-atlas, BenchLM, serenitiesai, TechTalks.
- Future sources: add a new file next to this one, e.g. `Grok_4.1_Fast.md`, using the same headings.
