# GPT-5.4 mini — findings by Step 5 Preview

- Source: OpenAI (`gpt-5.4-mini`)
- Date: 2026-10-19 (UTC) — re-run; first researched 2026-10-09
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 mini
- **Short description:** OpenAI's small-tier GPT-5.4 model (released 2026-03-17 alongside nano) — "our most capable mini model yet", bringing much of GPT-5.4's coding, computer-use and reasoning strength to a high-volume model running more than 2x faster than GPT-5 mini. Approaches the full GPT-5.4 on SWE-Bench Pro (54.4% vs 57.7%) and OSWorld-Verified (72.1% vs 75.0%). Available in the API, Codex, ChatGPT (Free/Go via Thinking) and GitHub Copilot.
- **Provider / access:** OpenAI API `gpt-5.4-mini` (snapshot `gpt-5.4-mini-2026-03-17`); Codex (30% of GPT-5.4 quota); ChatGPT Free/Go fallback. No OpenCode Zen Free ID found.
- **Release / knowledge:** 2026-03-17; knowledge cutoff 2025-08-31.
- **IDs:** `gpt-5.4-mini` (OpenAI API).
- **Context window:** 400,000 tokens; 128,000 max output.
- **Modalities:** Text and image in → text out (no audio/video); reasoning effort none (default) / low / medium / high / xhigh; tool use, function calling, web search, file search, computer use, skills; no fine-tuning.
- **Pricing (as of 2026-10-09):** $0.75 / MTok input, $0.075 cached, $4.50 output; regional processing +10%. Measured **315.7 tok/s (AA, xhigh — #3/186; re-measured up from 271)**, $0.45 per AA Index task; AA lists 230M Index output tokens (very verbose vs the 85M median — a real cost multiplier at this price).
- **Architecture:** Proprietary (undisclosed).

### Raw benchmarks found

- BenchLM composite (2026-10-19): **53.4/100** overall, #82 of 956 models, 38 of 644 benchmarks covered (partial coverage — conservative)
- Artificial Analysis today (2026-10-19): Intelligence Index **24** (#131/217 — matches the prior 24.1), 315.7 tok/s (#3/186), TTFT 82.11s, $0.75/$4.50 with 90% cache discount, $0.45 per Index task, 400k context, text+image, 2 providers, cutoff 2025-08-31 — DEPRECATED on AA (suggests GPT-5.6 Terra)

Agentic / tool use (OpenAI launch, xhigh + AA/Vals independent):

- τ²-Bench Telecom: **93.4%** (launch) / 83.3% (AA, xhigh); MCP Atlas: **57.7%**
- Toolathlon: **42.9%**; Terminal-Bench 2.0: 60.0% (launch); Terminal-Bench 2.1: 59.2% (AA) / 54.7% (Vals); Terminal-Bench Hard: 52.3% (AA)
- OSWorld-Verified: **72.1%** (launch — close to the full GPT-5.4's 75.0%)
- GDPval-AA: **25.8%** (AA; BenchLM's read 25.6% normalized / Elo 1,095); AA Agentic Index: **17.9** (BenchLM's 2026-10-19 read: **19.6%**); APEX-Agents-AA **28.2%**
- Terminal-Bench 4.0: **2.0%** (AA — the new hard suite is far from solved)

Reasoning / knowledge:

- GPQA Diamond: **88.0%** (launch) / 87.5% (AA) / 83.1% (Vals); AIME: 95.6% (Vals)
- HLE: **28.2% no tools / 41.5% with tools** (launch); AA: 28.1%
- MMLU-Pro: **84.6%** (Vals); AA Intelligence Index: **24.1** (xhigh)
- IFBench: **73.3%** (AA); CritPt: **10.0%** (AA); Omniscience accuracy 37.5%, non-hallucination 9.8% (AA)

Coding:

- SWE-Bench Pro (public): **54.4%** (launch; full GPT-5.4 57.7%)
- SWE-bench Verified: **73.0%** (Vals); LiveCodeBench: **81.5%** (Vals)
- New coding rows (2026-10-19): FrontierCode 1.1 Main **27.0%** (Cognition — weak on the newest agentic suite)
- AA Coding Index: **56.1**; SciCode: 52.1% (AA); Vibe Code Bench v1.1: 48.0% (Vals)
- Terminal-Bench Hard: 52.3% (AA); Code Migration 12.9% (Vals); ProgramBench 0.0% (Vals)
- WebDev Arena: 1397 Elo (#64/105)

Multimodal:

- MMMU-Pro: **76.6%** / 78.0% with Python (launch); Vals: 79.2%; OmniDocBench 1.5 edit distance 0.1263 (no tools)

Long context:

- MRCR v2 8-needle: **47.7% @64–128K / 33.6% @128–256K** (launch); GraphWalks BFS 0–128K: 76.3%, parents: 71.5%
- AA-LCR: **77.0%** (AA, xhigh)
- New reasoning rows (2026-10-19): ARC-AGI-1 **63.70%** / ARC-AGI-2 **18.9%** (ARC Prize), Epoch FrontierMath v2 Tiers 1–3 **51.228%** / Tier 4 **9.756%** (mid-band math), AA-Omniscience index **−18.9%** / hallucination-rate metric **90.2%** (= the 9.8% non-hallucination already on file — weak calibration re-confirmed), AA-MMMU-Pro **73.3%**

### Normalized scores (1–100)

- **Tool use: 66/100.** τ² Telecom 83.3–93.4%, OSWorld-Verified 72.1% and MCP-Atlas 57.7% are solid mid-band agentic evidence; capped by Toolathlon 42.9%, GDPval-AA 25.8%, the AA Agentic Index of 17.9 and Terminal-Bench 4.0 at 2.0%.
- **Reasoning: 72/100.** GPQA 87.5–88.0%, AIME 95.6% and MMLU-Pro 84.6% are strong for a mini model; capped by HLE 28.1–28.2%, CritPt 10.0%, the AA Index of 24.1 and a 9.8% non-hallucination rate.
- **Context window: 76/100.** 400K-token window in the 200K–500K band with 128K output; MRCR 47.7% at 64–128K and AA-LCR 77.0% (xhigh) are decent but well behind the 1M-window frontier's retrieval numbers.
- **Multimodal: 70/100.** Text + image in → text out is the 60–70 band, at its top on MMMU-Pro 76.6–79.2% and OmniDocBench 0.1263; no video/audio input or non-text output.
- **Coding: 72/100.** SWE-Bench Pro 54.4% (within 3.3 points of the full GPT-5.4), SWE-bench Verified 73.0% and LiveCodeBench 81.5% are mid-frontier; capped by Vibe Code Bench 48.0%, SciCode 52.1%, Code Migration 12.9% and ProgramBench 0.0%.
- **Cost efficiency: 89/100.** $0.75/$4.50 per MTok ($0.075 cached) maps just above the methodology's ~$1.25/$4.25 ≈ 88 tier — one of the cheapest paths to near-flagship coding, at a measured $0.45 per AA Index task.
- **Overall Score: 71/100.** Best-fit recommendation: the workhorse mini model — near-flagship coding and computer use at mini-tier pricing for high-volume subagent pipelines; route hard long-horizon agentics (TB4.0, GDPval) to a full-size frontier model.

---

## Signature

- Provided by: **Step 5 Preview (StepFun)** — 2026-10-19
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores. Re-run verification (2026-10-19) against Artificial Analysis (deprecated page, suggests GPT-5.6 Terra: Index 24 #131/217 — unchanged; speed re-measured at 315.7 tok/s #3/186, up from 271; TTFT 82.11s; 230M Index tokens — very verbose; pricing $0.75/$4.50 unchanged) and BenchLM (composite 53.4/100, #82/956, 38/644 benchmarks): new rows APEX-Agents-AA 28.2%, GDPval-AA Elo 1,095 (25.6% normalized), AA Agentic Index 19.6% (prior read 17.9%), FrontierCode 1.1 27.0%, ARC-AGI-1 63.7%/ARC-AGI-2 18.9%, Epoch FrontierMath v2 51.2%/9.8%, AA-MMMU-Pro 73.3% — all consistent with the existing Tool use 66 / Reasoning 72 / Context 76 / Multimodal 70 / Coding 72 reads, no score change. First pass (2026-10-09) used OpenAI GPT-5.4 mini/nano launch post + model/pricing docs, Artificial Analysis, Vals AI, BenchmarkList, BenchLeader, AI/TLDR.
- Future sources: add a new file next to this one, e.g. `GPT_5.4_nano.md`, using the same headings.
