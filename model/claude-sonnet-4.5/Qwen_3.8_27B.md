# Claude Sonnet 4.5 — Evaluation Report

**Model:** Claude Sonnet 4.5 (`opencode/claude-sonnet-4.5`)
**Auditor:** Qwen 3.8 27B (qwen/qwen3.8-27b)
**Date:** 2026-09-28

## Model card

**Name:** Claude Sonnet 4.5
**Short:** Anthropic's Sep 2025 agentic-coding flagship: SWE-bench Verified SOTA at launch, 30+ hour autonomous coding sessions, and best-in-class prompt-injection resilience.
**Provider:** Anthropic — API model `claude-sonnet-4-5-20250929`; legacy, active until no sooner than 2026-09-29.
**Release date:** 2025-09-29.
**Architecture:** Hybrid reasoning (fast default mode + extended thinking toggle; Developer Mode for full chain-of-thought). ASL-3 safeguards.
**Context window:** 200K in / 64K out (auto-summarization beyond ~180K); a 1M context configuration exists and scored 78.2% on SWE-V (77.2% at 200K).
**Modalities:** Text + image in; text out. No audio/video at release.
**Pricing:** $3.00/M input, $15.00/M output (same as Sonnet 4).

### Raw benchmarks found

**Official (anthropic.com/news/claude-sonnet-4-5, 2025-09-29):**
- SWE-bench Verified: **77.2%** primary (10 trials avg, no test-time compute, 200K thinking budget); **78.2%** at 1M; **82.0%** high-compute (parallel sampling + rejection + internal scorer)
- OSWorld: **61.4%** — led the field at release (Sonnet 4: 42.2%); official OSWorld-Verified, 100 max steps, avg of 4 runs
- Terminal-Bench (Terminus 2): **50.0%** (per leanware summary of the launch table)
- AIME (Python config, 64K reasoning tokens, temp 1.0): **100%**
- GPQA Diamond: **83.4%** (per leanware summary of the launch table)
- τ2-bench (airline/retail/telecom, extended thinking + tool use), MMMLU (14 languages, up to 128K thinking), Vals Finance Agent: published in the launch table (image-only; text sources confirm top-of-market placement at release)
- 30+ hour sustained autonomous coding observed (Anthropic + Cursor: "surprisingly efficient at maximizing actions per context window through parallel tool execution")

**Standardized third-party (Scale SEAL leaderboard, Jun 2026):**
- SWE-bench Pro public: **43.6% ±3.60** (rank 6; above Sonnet 4's 42.7%, below Opus 4.5's 45.9% and Opus 4.6's 51.9% thinking)

**Cohort context (morphllm, 2026-09-01):** SWE-V 77.2% is now ~3.2 points below the ~80.4–80.9 band (Qwen3.7 Max, DS-V4-Pro-Max, Opus 4.5/4.6) and far below Fable 5 (95.0) / Sonnet 5 (85.2); 200k/64k, $3/$15.

**Gaps:** τ2-bench / MMMLU / Vals Finance exact values live only in the launch-post table image; no GPQA independent re-run; knowledge cutoff Jan 2025.

### Normalized scores (1–100)

- **Tool use: 70/100.** OSWorld 61.4% (field-leading at its era), τ2-bench top-of-market with extended thinking, 30+ hour autonomous runs, parallel tool execution, and launch of MCP + context-editing + memory tooling. Terminal-Bench 50.0% sits in the 45–60% → 50–70 band; no 2026-generation TB2.1 number exists for this model.
- **Reasoning: 78/100.** GPQA Diamond 83.4% (below the 90%+ → 90–100 frontier line; above Sonnet 4/Opus 4.1 era) and AIME-Python 100% at launch. Now clearly behind the 2026 frontier (Opus 4.8 GPQA 93.6%, GPT-5.4 92.8%).
- **Context window: 72/100.** 200K standard / 64K out (the 200K = 70 reference point), plus a demonstrated 1M configuration (78.2% SWE-V @1M) — small credit, no sustained 1M-class retrieval evidence, and 1M was a config rather than the product default.
- **Multimodal: 40/100.** Text + image input, text output; image understanding was competitive at release but no vision benchmarks are published in text sources for this SKU. No audio/video.
- **Coding: 78/100.** SWE-V 77.2% (78.2 @1M; 82.0 high-compute) — SOTA at launch, now ~3 points under the ~80.4–80.9 current band and 7 points under Sonnet 5's 85.2; SEAL SWE-Pro 43.6% shows solid but not top standardized multi-repo SWE; TB 50.0% caps the agentic-coding side.
- **Cost efficiency: 60/100.** $3/$15 per 1M at 200K context — the reference point for mid-2026 Sonnet-class pricing; fine for its capability tier, uncompetitive against Sonnet 5's $2/$10 with 1M context and 85.2% SWE-V.
- **Overall Score: 68/100.** Half-up mean of (70 + 78 + 72 + 40 + 78) / 5 = 67.6.

### Why not higher
Sonnet 4.5 was the class of its generation (SWE-V SOTA at launch, OSWorld leader, 30-hour autonomy) but the cohort average (77.5) is built on 2026 flagships: 1M context is now table stakes, SWE-V's frontier band moved to ~80–95, and TB2.1 leaders sit at 74–89% versus its 50.0%. On this rubric a 200K/$3-per-15/model-18-months-old lands at 68 even when it remains a perfectly capable production agent.

## Signature

Provided by: **Qwen 3.8 27B (qwen/qwen3.8-27b)** — 2026-09-28
