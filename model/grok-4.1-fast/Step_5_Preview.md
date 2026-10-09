# Grok 4.1 Fast — findings by Step 5 Preview

- Source: xAI (`grok-4-1-fast-reasoning`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.1 Fast (Reasoning / Non-Reasoning)
- **Short description:** xAI's agentic tool-calling specialist (released 2025-11-19 alongside the Agent Tools API) — one model exposed in two modes (a low-latency non-reasoning slug and a reasoning slug) trained with heavy RL across simulated tool environments. Launched with a SOTA 100% on τ²-bench Telecom, a 67% long-context retrieval rate (vs Grok 4 Fast's 22%), ~2–3x lower hallucination than Grok 4 Fast, and a 2M-token window at $0.20/$0.50 per MTok. **Deprecated 2026-05-15; legacy slugs redirect to Grok 4.3, retirement 2026-08-15.**
- **Provider / access:** xAI API (`grok-4-1-fast-reasoning`, `grok-4-1-fast-non-reasoning`) — now redirecting to Grok 4.3; OpenRouter `x-ai/grok-4.1-fast`. No OpenCode Zen Free ID found.
- **Release / knowledge:** 2025-11-19. Knowledge cutoff not disclosed.
- **IDs:** `grok-4-1-fast-reasoning` / `grok-4-1-fast-non-reasoning` (retired).
- **Context window:** 2,000,000 tokens; max output 30K (API) / 16K (playground).
- **Modalities:** Text and image in → text out; Agent Tools API (web search, X search, remote code execution, file/document tools, MCP) billed at ≤$5 per 1,000 successful calls.
- **Pricing (as of 2026-10-09):** $0.20 / MTok input, $0.50 output, $0.05 cached input (historical — redirected traffic bills at Grok 4.3's rates).
- **Architecture:** Proprietary transformer tuned from the Grok 4.1 base with large-scale RL on tool use across dozens of simulated domains.

### Raw benchmarks found

Agentic / tool use (xAI launch + independent):

- τ²-Bench Telecom: **100%** (xAI launch — SOTA at the time); independent later run: 94.7% (#19/37)
- Berkeley Function Calling Leaderboard v4: **72%**
- Claw Bench: **88.6%** (#11/28); PinchBench: **82.4%** (#20/37)
- Reka Research-Eval: **63.9** (GPT-5 45.5, Claude Sonnet 4.5 41.2, Gemini 3 Pro 55.9); FRAMES: **87.6** (Gemini 3 Pro 90.9); X Browse: **56.3** (GPT-5 24.2)
- τ³-Banking: 13.1%; SAGE: 31.3%; Public Benefits Bench: 44.8%; MedScribe: 78.7%
- Long-context retrieval across the full 2M window: **67%** (xAI; Grok 4 Fast 22%)

Reasoning / knowledge:

- GPQA Diamond: **85.3%** (AA, reasoning); HLE: **19.3%** (AA); AIME 2025: 89.0%; MMLU-Pro: 85.0%; MMMLU: 93.1%
- AA Intelligence Index: **20.4** (reasoning mode); AA-Omniscience index **−29.9** (accuracy 25.1%, hallucination rate 73.4%); CritPt: 2.9%; LiveBench: 60.0
- Non-reasoning mode: GPQA 63.7–72.0%, HLE 5.1%

Coding:

- SWE-bench Verified: **60.0–60.4%** (LLM Registry / serenitiesai); another harness: 41.4%
- LiveCodeBench: **80.6–82.0%**
- Vibe Code Bench v1.1: **1.2%** (fails end-to-end app building); Terminal-Bench Hard: 24.2%

Multimodal:

- MMMU-Pro: **63.3%** (AA); MMMU: 72.7% (Vals)

Long context:

- 2M-token window with trained multi-turn consistency; **67% retrieval** across the full window (xAI's own measure); AA-LCR: **74%**

### Normalized scores (1–100)

- **Tool use: 76/100.** τ² Telecom 94.7–100%, Claw Bench 88.6%, PinchBench 82.4%, Reka Research-Eval 63.9% and FRAMES 87.6% are strong agentic evidence for a tool-calling specialist; capped by τ³-Banking 13.1%, SAGE 31.3% and no published MCP-Atlas/GDPval-AA numbers.
- **Reasoning: 72/100.** GPQA 85.3%, MMLU-Pro 85.0% and AIME 89.0% are solid mid-tier reasoning; capped by HLE 19.3%, CritPt 2.9%, the AA Index of 20.4 and AA-Omniscience −29.9 with a 73.4% hallucination rate — this is a tool-use model, not a reasoning frontier.
- **Context window: 92/100.** 2M-token window in the ≥1M tier, backed by xAI's measured 67% retrieval across the full window (vs Grok 4 Fast's 22%) and AA-LCR 74%; the top of the band needs verified ≥98% retrieval, which is not claimed.
- **Multimodal: 66/100.** Text + image in → text out is the 60–70 band with MMMU-Pro 63.3% (AA); no CharXiv/Video-MME numbers published for this model.
- **Coding: 62/100.** SWE-bench Verified 60.0–60.4% (one independent harness reads 41.4%) and LiveCodeBench 80.6–82.0% are mid-pack; capped by Vibe Code Bench 1.2%, Terminal-Bench Hard 24.2% and no SWE-bench Pro/DeepSWE numbers.
- **Cost efficiency: 94/100.** $0.20/$0.50 per MTok with $0.05 cached input maps just above the methodology's ~$0.10/$0.20 = 97–99 tier, with the Agent Tools API capped at $5/1K calls — among the cheapest agentic models ever shipped; capped by the deprecation and redirect pricing.
- **Overall Score: 74/100.** Best-fit recommendation: the retired-but-cheap agentic workhorse — class-leading τ²/telecom tool calling and 2M context at $0.20/$0.50 for existing integrations; new agent workloads should point at Grok 4.3/4.5 where these slugs now redirect.

---

## Signature

- Provided by: **Step 5 Preview (StepFun)** — 2026-10-09
- Method: public internet research (xAI Grok 4.1 Fast launch post, Artificial Analysis, LLMLearner, Vector Wire, Oracle/OCI docs, Verdent, BenchLM, serenitiesai); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Grok_4.2.md`, using the same headings.
