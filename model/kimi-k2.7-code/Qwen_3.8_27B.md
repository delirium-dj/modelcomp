# Kimi K2.7 Code — Evaluation Report

**Model:** Kimi K2.7 Code (`opencode/kimi-k2.7-code`)
**Auditor:** Qwen 3.8 27B (qwen/qwen3.8-27b)
**Date:** 2026-09-28

## Model card

**Name:** Kimi K2.7-Code
**Short:** Moonshot's 1T open-weight coding-specialist MoE (June 2026): long-horizon SWE, elite MCP/τ² tool use, ~30% fewer reasoning tokens.
**Provider:** Moonshot AI — open weights on Hugging Face (Modified MIT, ~340GB), API model `kimi-k2.7-code`, Kimi Code CLI, Cloudflare Workers AI; deployable via vLLM/SGLang/KTransformers.
**Release date:** 2026-06-12.
**Architecture:** ~1T-parameter MoE, coding-focused tuning, native reasoning (≈30% fewer reasoning tokens vs K2.6).
**Context window:** 256K.
**Modalities:** Text in / text out (coding-specialist; no vision/audio rows in any tracked benchmark).
**Pricing:** $0.95/M input, $4.00/M output (Kimi Open Platform API); Kimi Code CLI plans from $19/mo.

### Raw benchmarks found

**BenchLM.ai rows (Moonshot Kimi K2.7 Code, 2026-09-28; overall 50.43/100, #78 of 512):**
- τ²-bench: **90.1%**; MCP Atlas: **76%**; MCP Mark Verified: **81.1%**; Kimi Claw 24/7: 46.9%; Terminal-Bench 2.1 (Vals): **67.0%**; GDPval-AA: Elo 1114 (26.3%); AA Agentic Index: 22.5
- LiveCodeBench (Vals): **82.1%**; SWE-bench (Vals): **78.2%**; Kimi Code Bench v2: **62.0%** (+21.8% vs K2.6); ProgramBench: 53.6%; CursorBench 3.2: 49.7%; AA-SciCode: 47.8%; MLS-Bench Lite: 35.1%; OpenHarmony Bench: 52.1%; AA Coding Index: 60.8
- GPQA Diamond (AA): **89.6%**; AA-HLE: **35.0%**; MMLU-Pro: n/a; AA-LCR: 79.3%; CritPt: 10.0%
- IFBench: 63.1%; AA Intelligence Index: 25.8; AA-Omniscience: −10.2 (accuracy 39.6%, **hallucination 82.4%**)

**Launch coverage (2026-06-12):** on Moonshot's own charts it "still sits behind GPT-5.5 and Claude Opus 4.8 on most tasks"; efficiency claim (−30% reasoning tokens) is the differentiator; launch benchmarks were first-party at release.

**Gaps:** No SWE-bench Verified/Pro, no GPQA independent re-run, no vision benchmarks; 82.4% omniscience hallucination rate is a real knowledge-reliability concern; AA Agentic Index 22.5 is low.

### Normalized scores (1–100)

- **Tool use: 72/100.** τ²-bench 90.1% and MCP Mark Verified 81.1% are elite tool-calling results, MCP Atlas 76% strong, TB2.1 (Vals) 67.0% solid. Offsets: Kimi Claw 24/7 46.9%, GDPval-AA 26.3%, AA Agentic Index 22.5 — the MCP/dialog agent profile is top-decile, open-world agentic work less so.
- **Reasoning: 76/100.** GPQA 89.6% sits one point under the 90+ frontier line, LCR 79.3% is strong, but HLE 35.0% and CritPt 10.0% keep it mid-frontier; the 82.4% hallucination rate signals weak calibrated knowledge despite good benchmark scores.
- **Context window: 74/100.** 256K context — above the 200K = 70 reference, short of the 500K–1M band; no retrieval/synthesis measurement published.
- **Multimodal: 15/100.** Text in/out only — a coding-specialist with no image/audio input or generation in any public material. At the text-only floor of the rubric.
- **Coding: 76/100.** SWE-bench (Vals) 78.2% is the best standardized single-repo SWE signal in the open-weight cohort found this audit, LCB 82.1% strong, Kimi Code Bench v2 62.0% (+21.8% gen-over-gen), ProgramBench 53.6%, TB2.1 67.0%. CursorBench 3.2 49.7% and MLS-Bench Lite 35.1% hold it below the 80s.
- **Cost efficiency: 89/100.** $0.95/$4.00 per 1M at 256K beats the $1.25/$4.25 ≈ 88 anchor on input, Modified-MIT open weights enable self-hosting, and the −30% reasoning-token claim improves effective cost for agentic loops.
- **Overall Score: 63/100.** Half-up mean of (72 + 76 + 74 + 15 + 76) / 5 = 62.6.

### Why not higher
Multimodal 15 is the structural drag on a deliberately text-only coding model, and the cohort's 75.2 average includes raters crediting image I/O. Within its specialty the model is genuinely strong (τ² 90.1, SWE-Vals 78.2, LCB 82.1), but the 82.4% hallucination rate, AA Agentic Index 22.5, and first-party-only launch benchmarks cap trust below the flagship tier.

## Signature

Provided by: **Qwen 3.8 27B (qwen/qwen3.8-27b)** — 2026-09-28
