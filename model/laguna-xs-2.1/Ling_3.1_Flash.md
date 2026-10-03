# Laguna XS 2.1 — findings by Ling 3.1 Flash

- Source: Ling 3.1 Flash (opencode/ling-3.1-flash-free) / Laguna XS 2.1
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Laguna XS 2.1
- **Short description:** Poolside's upgraded compact agentic-coding MoE — 33B total / 3B active, same architecture as XS.2, designed for agentic coding and long-horizon work on a local machine.
- **Provider / access:** Poolside — Hugging Face weights (`poolside/Laguna-XS-2.1`; BF16, FP8, NVFP4, INT4), OpenRouter (`poolside/laguna-xs-2.1`; Poolside provider, 0.24s latency, 91 tok/s, 100% uptime), Poolside API (free limited-use key); runs locally with Ollama, llama.cpp, TRT-LLM, vLLM, SGLang; DFlash draft model for faster inference; `pool` terminal coding agent recommended. **Free inference for a limited time** for XS 2.1 and Laguna M.1.
- **Release / knowledge:** 2026-07-02. Knowledge cutoff not captured.
- **IDs:** `poolside/Laguna-XS-2.1`; folder `laguna-xs-2.1`. Sits below Laguna S 2.1 (118B-A8B) and above nothing smaller in the captured family table.
- **Context window:** 262,144 tokens (benchmarking used 256K); max output 32,768.
- **Modalities:** Text in, text out (no vision documented).
- **Pricing (as of 2026-10):** $0.10 / $0.20 / $0.05 per 1M input/output/cache-read (Poolside, matched to XS.2); OpenRouter 40% off: $0.06 / $0.12 / $0.03.
- **License:** Use-restricted open weights (ModelCap: "weights downloadable under a use-restricted licence").
- **Architecture:** Sparse MoE, 33B total / 3B active (same architecture as XS.2).

### Raw benchmarks found

**Vendor-reported (Poolside blog + HF card, 2026-07-02; Laude Institute's Harbor Framework with Poolside's agent harness; max 500 steps; sandboxed execution; temperature 1.0, top_k 20, top_p 1; thinking enabled; 256K context; tasks in own sandbox with 8GB RAM/2 CPUs except Terminal-Bench 2.0 at 48GB RAM/32 CPUs; SWE-bench Verified and Multilingual = mean pass@1 over 4 attempts, SWE-Bench Pro over 2 attempts, Terminal-Bench 2.0 over 5 attempts; comparators = highest publicly referenced scores, official release blogs or official leaderboards):**
- SWE-bench Verified **70.9%** (XS.2 69.9%; Qwen3.6-35B-A3B 73.4%; North Mini Code 67.6%; MAI-Code-1-Flash 71.6%; Claude Haiku 4.5 73.3%) — strong for 3B active parameters.
- SWE-bench Multilingual **63.1%** (up 5.4pt from XS.2's 57.7%; Qwen3.6-35B-A3B 67.2%; MAI-Code-1-Flash 65.5%).
- SWE-Bench Pro (Public Dataset) **47.6%** (XS.2 46.3%; Qwen3.6-35B-A3B 49.5%; North Mini Code 40.2%; MAI-Code-1-Flash 51.2%; gpt-oss-120B 16.2%; Claude Haiku 4.5 39.5%; GPT-5.4 Nano 52.4%).
- Terminal-Bench 2.0 **37.5%** (XS.2 35.7%; Qwen3.6-35B-A3B 51.5%; North Mini Code 36.0%; MAI-Code-1-Flash 54.8%; gpt-oss-120B 18.7%; Claude Haiku 4.5 29.8%; GPT-5.4 Nano 46.3%).
- HF evaluation-results section confirms leaderboard rows: SWE-bench Verified 70.9, SWE-bench Pro 47.6 (ScaleAI leaderboard), Terminal-Bench 2.0 37.5 (harborframework leaderboard).
- **Kilo Bench (independent, Kilo.ai):** Terminal-Bench 2.0 completion **26.7%**, cost per attempt **$12.03** — lower than the vendor's 37.5% (different harness; flagged, not averaged).
- ModelCap Index **57.4** (#83 of 280; modeled from launch results; range 37.8-77.1).

## Scores

- **Tool use: 51/100.** Terminal-Bench 2.0 37.5% (vendor, 5 attempts) vs 26.7% (Kilo Bench); SWE-Bench Pro 47.6%; no Tau-bench/MCP-Atlas/Toolathlon captured.
- **Reasoning: 49/100.** No GPQA/HLE captured; ModelCap Index 57.4 is modeled, not measured; thinking-mode-only serving.
- **Context window: 70/100.** 262K tokens (256K used in benchmarking); no long-context retrieval benchmark captured.
- **Multimodal: 15/100.** Text-only per captured sources.
- **Coding: 67/100.** SWE-bench Verified 70.9% and SWE-bench Multilingual 63.1% are genuinely strong for 3B active parameters (ahead of North Mini Code's 67.6%/- and Claude Haiku 4.5's 73.3%/- on multilingual); offset by Terminal-Bench 2.0 37.5%/26.7% and SWE-Bench Pro 47.6%.
- **Cost efficiency: 93/100.** $0.10/$0.20 per 1M with $0.05 cache reads (OpenRouter 40% off: $0.06/$0.12/$0.03); free limited-time inference; local deployment on consumer hardware.
- **Overall Score: 50.4/100.** Mean of Tool use 51, Reasoning 49, Context window 70, Multimodal 15, Coding 67 = 50.4.

> **Gap vs folder average (60.2): −9.8.** The peer set appears to weight the SWE-bench Verified 70.9% row heavily; this report credits it fully in Coding, but the weak Terminal-Bench 2.0 rows (37.5% vendor / 26.7% Kilo), the absent reasoning benchmarks (GPQA/HLE), the 262K text-only profile, and the use-restricted license hold the Overall down. The Kilo Bench discrepancy (26.7% vs 37.5%) is harness-dependent and reported, not reconciled.

## Notes

- Verification trail: Poolside blog "Introducing Laguna XS 2.1" (2026-07-02; specs; full benchmark table with comparators; harness and sampling configs; free-inference announcement), HF `poolside/Laguna-XS-2.1` README and evaluation-results section (benchmark table; leaderboard rows; weight formats), OpenRouter page (pricing $0.06/$0.12/$0.03; provider stats), Kilo.ai (Kilo Bench 26.7% @ $12.03; 262,144/32,768; $0.10/$0.20), ModelCap (Index 57.4; #83 of 280; use-restricted licence; 262K).
- Known conflicts: Terminal-Bench 2.0 37.5% (Poolside harness, 5 attempts) vs 26.7% (Kilo Bench); license "use-restricted" (ModelCap) vs unlisted on the HF card capture.
- Open questions: GPQA/HLE and long-context rows; license terms; whether the free-inference period has an end date.

Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-03

Future sources: standard reasoning benchmarks, license terms, independent SWE-bench replications.
