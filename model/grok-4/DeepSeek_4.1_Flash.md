# Grok 4 — findings by DeepSeek 4.1 Flash

- Source: xAI / Grok 4 (`grok-4`, `grok-4-0709`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4 (with the parallel-test-time-compute sibling Grok 4 Heavy)
- **Short description:** xAI's frontier reasoning model, released 2025-07-09, trained with reinforcement learning at pretraining scale on the 200,000-GPU Colossus cluster, and the first model line to pass 50% on Humanity's Last Exam (Heavy variant). Native tool use with live X/web search is its defining feature; direct predecessor of the 4.5/4.6 entries.
- **Provider / access:** xAI API (`https://api.x.ai/v1`, OpenAI-compatible Chat Completions), plus grok.com / SuperGrok and Premium+ subscription tiers; ids `grok-4` and `grok-4-0709`. No Zen Free ID → Paid badge.
- **Release / knowledge:** released 2025-07-09 (xAI announcement); knowledge cutoff late 2024 (November per xAI docs, December per third-party coverage). `grok-4-0709` was deprecated on the API in early 2026 in favour of Grok 4.1, and Artificial Analysis now marks the profile deprecated.
- **IDs:** `xai/grok-4`; no free ID exists in the tracked catalog.
- **Context window:** 256,000 tokens in, 8,000 tokens maximum output (xAI API docs / third-party specs; Artificial Analysis lists 256K).
- **Modalities:** text + image (+ PDF) in → text out; reasoning always on; native tool use (code interpreter, web and X search) and function calling; JSON mode via the API.
- **Pricing (as of 2026-09-24):** $3.00 / $15.00 per 1M tokens, $0.75 per 1M cached input; prompts above 128K tokens are billed at $6 / $30 per 1M. No free tier.
- **Architecture:** proprietary (undisclosed MoE-scale); no open weights, no parameter disclosure.

### Raw benchmarks found

Agent / tool use:

- MCP-Universe: **33.33%** overall success rate (verified third-party run, rank 2 of 27)
- Berkeley Function-Calling Leaderboard: **62.97–63.0%** (official xAI run; BenchmarkList 92nd percentile, rank 8 of 85)
- Tau2-Bench Telecom: **74.9%** (BenchmarkList, 70th percentile, rank 99 of 332)
- Terminal-Bench Hard: **37.9%** (89th percentile, rank 38 of 326); Terminal-Bench 2.0: **28.1%** (28th percentile, rank 49 of 68); Terminal Bench: **27.2%**
- METR task-completion time horizon: **109 minutes** at 50% success (official)
- GDPval-AA: **989–991 Elo** (rank 104 of 340); MCPMark: **31.7%** (rank 15 of 41)
- Vending-Bench agentic business sim: **$4,694.15 net worth / 4,569 units sold** averaged over 5 runs, ahead of Claude Opus 4 ($2,077.41 / 1,412) and the human baseline ($844.05 / 344) (xAI)
- Remote Labor Index: **2.08%** automation rate; Gray Swan Arena indirect prompt injection: **2.9%** attack success rate (verified)

Reasoning / knowledge:

- GPQA Diamond: **87.0%** (official xAI run; xAI's summary states 87.5%)
- Humanity's Last Exam: **24.52%** (official, no tools); Grok 4 Heavy was the first model to reach **50.7%** on the HLE text-only subset with Python + internet tools (xAI)
- AIME 2025: **91.7%** (xAI); Grok 4 Heavy **100%** with Python; AIME (OTIS Mock): **84.0%** (official)
- USAMO 2025: **61.9%** (Grok 4 Heavy, field-leading); HMMT 2025: **90%**; IMO-Bench: **73.1%**
- ARC-AGI-2: **15.97%** (official xAI run; a third-party harness on BenchmarkList records 29.4%); ARC-AGI-1: **66.67%** official / **79.6%** third-party
- FrontierMath: **19.66%** (Tier 4: **2.1%**); MMLU-Pro: **86.6%**; Global-MMLU-Lite: **88.8–89.5%**; SimpleQA Verified: **47.9%**; FACTS Grounding: **54.7%**; WeirdML: **45.7%**
- Artificial Analysis Intelligence Index: **22** (v4.3.2, rank 129 of 210, below the 25 median — deprecated profile, September 2026); the launch-era index recorded **41.5** (unverified); Epoch Capabilities Index **147.4**

Multimodal:

- OCRBench v2: **45.0** (verified); ZeroBench: **1.0% pass@1** (verified) — the only measured vision rows found
- LMArena: **1409 Elo**; Search Arena: **1143 Elo**; Design Arena: **1070 Elo** (verified chat/arena rankings)
- MMMU / MMMU-Pro / video or audio understanding benchmarks: no verified public score found

Coding:

- LiveCodeBench: **81.9% pass@1** (unverified aggregator run) and **83.2%** (BenchmarkList, 68th percentile, rank 40 of 123)
- SWE-bench Verified: **57.8%** (BenchmarkList third-party harness, 11th percentile of the current field, rank 64 of 72)
- Aider Polyglot: **79.6%** (91st percentile, rank 5 of 47); SciCode: **45.7%** (88th percentile); IOI: **26.2%**; code-merge resolution: **33.4%**
- WeirdML: **45.7%** average accuracy; Terminal-Bench 2.0 **28.1%** (listed above) is the agentic-coding signal
- DeepSWE / SWE-bench Pro / Vibe Code Bench: no verified public score found

Long context:

- No published MRCR / RULER / needle-in-a-haystack figure exists for the 256K window; the closest long-context proxies are CorpFin v2 **66.0%** (long credit agreements, 83rd percentile) and GDPval-AA **989–991 Elo** (agentic document work)
- Ceiling: 256K tokens in / 8K tokens out, with no retrieval measurement to validate the advertised window

### Normalized scores (1–100)

- **Tool use: 78/100.** Native RL-trained tool use with verified agentic rows (MCP-Universe 33.33%, rank 2 of 27; BFCL 62.97%; Tau2 Telecom 74.9%; Terminal-Bench Hard 37.9%; METR 109-minute task horizon; Vending-Bench dominance over Claude Opus 4 and humans); capped by Terminal-Bench 2.0 at 28.1% and a 2.08% Remote Labor Index automation rate.
- **Reasoning: 72/100.** GPQA Diamond 87.0% and AIME 2025 91.7% are strong and HLE 24.52% no-tool versus 50.7% Heavy-with-tools is the headline result; capped by ARC-AGI-2 15.97% and an Artificial Analysis Intelligence Index of 22, below the current median.
- **Context window: 78/100.** 256K in / 8K out is upper-mid tier in a 1M-token field and no MRCR, RULER or NIAH measurement exists to validate it, so the window cannot score in the top band.
- **Multimodal: 48/100.** Image and PDF input with text-only output: OCRBench v2 45.0 and ZeroBench 1.0% pass@1 are the only measured vision rows, alongside strong arena chat Elo (LMArena 1409) but no MMMU, audio or video evidence.
- **Coding: 72/100.** LiveCodeBench 81.9–83.2%, Aider Polyglot 79.6% and SciCode 45.7% are solid, but SWE-bench Verified 57.8% sits in the 11th percentile of the current field and the `grok-4-0709` endpoint is deprecated.
- **Cost efficiency: 45/100.** $3.00 / $15.00 per 1M ($0.75 cached), $6 / $30 above 128K prompts, no free tier — premium pricing on a deprecated endpoint.
- **Overall Score: 69.6/100.** Mean of the five quality dimensions (78 + 72 + 78 + 48 + 72) / 5 = 69.6; best fit is tool-driven, search-grounded reasoning and math work, not long-context or repo-scale agentic coding.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek/deepseek-v4.1-flash)** — 2026-09-24
- Method: public internet research — xAI's Grok 4 announcement for HLE, ARC-AGI-2, USAMO, Vending-Bench and context-window claims; evals.report's labeled per-benchmark rows (official / verified / unverified) for GPQA, HLE, FrontierMath, METR, MCP-Universe, BFCL and others; BenchmarkList third-party harness runs for SWE-bench Verified, LiveCodeBench, Terminal-Bench, Tau2 and arena Elo; Artificial Analysis for the Intelligence Index, pricing and modality specs; Benchgen and Awesome Agents for spec cross-checks. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
