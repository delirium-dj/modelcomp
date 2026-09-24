# Claude Sonnet 4.5 — findings by DeepSeek 4.1 Flash

- Source: Anthropic/Claude Sonnet 4.5 (`claude-sonnet-4.5`)
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4.5
- **Short description:** Anthropic's late-2025 Sonnet generation, optimized for real-world agents and coding workflows — state-of-the-art SWE-bench Verified at release, extended autonomous operation with cross-session task continuity, stronger tool orchestration, speculative parallel execution and more efficient context/memory management. At the time of writing it is two generations behind the Opus 5.x / Sonnet 5 line, which is visible in its agentic numbers. Same weights across hosts (OpenRouter lists it as "Claude 4.5 Sonnet" in some rows); not an alias of Claude Haiku/Opus tiers.
- **Provider / access:** Anthropic API, Amazon Bedrock and Vertex AI; OpenRouter `anthropic/claude-sonnet-4.5`; OpenCode Zen route `opencode/claude-sonnet-4.5`. Extended thinking, tool use and structured output supported.
- **Release / knowledge:** released 2025-09-29; knowledge cutoff January 2025.
- **IDs:** `anthropic/claude-sonnet-4.5` (aliases "claude sonnet 4.5", "sonnet 4.5"); Zen `opencode/claude-sonnet-4.5`. No Free ID verified → cost scored on paid pricing.
- **Context window:** 1,000,000 tokens (OpenRouter listing). The 1M tier on this generation was a beta that required opting in per request, so pin the route before relying on the full window. Max output not published on the pages checked.
- **Modalities:** text + image (+ file/PDF input via Anthropic's files API) in → text out; extended thinking/reasoning; tool use; structured output; no audio/video and no non-text output.
- **Pricing (as of 2026-09-23):** $3.00 in / $15.00 out per 1M tokens (OpenRouter listing; cached-input discounts available at the provider).
- **Architecture:** proprietary, no parameter disclosure.

### Raw benchmarks found

Agent / tool use:

- Berkeley Function Calling Leaderboard: **73.24%** accuracy (official, evals.report)
- MCP Atlas **43.8%** pass rate; MCP-Universe **35.06%** overall success rate (evals.report)
- τ²-Bench Telecom: **70.5%** (Artificial Analysis non-reasoning row via OpenRouter)
- Terminal-Bench Hard **28.8%** (AA); Terminal-Bench 2.1: **no verified public score found**
- OSWorld **61.4%** task success (unverified); WebArena **58.5%** (verified); GAIA **74.55%** (unverified); BrowseComp **24.1%** (unverified); GDPval **1317 Elo** (official); METR task-completion time horizon **122 min**; PostTrainBench **9.94%**; Gray Swan indirect prompt-injection ASR **1.0%**
- Claw-Eval / Toolathon: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **82.3%** official (evals.report) versus **72.7%** on the AA non-reasoning row (OpenRouter) — reasoning mode and harness differ, both listed
- HLE: **13.7%** official versus **7.2%** non-reasoning (AA)
- LCR / MLCR: **AA-LCR 54.0%** (AA); OpenAI-MRCR v2 **47.1%** mean SequenceMatcher similarity (unverified)
- CritPt: **0.0%** (AA non-reasoning row)
- Artificial Analysis Intelligence Index **20.7** (reasoning, OpenRouter); Epoch Capabilities Index **147.2** (official)
- Omniscience / hallucination: AA-Omniscience accuracy **28.4%** with **47.3%** non-hallucination rate; SimpleQA Verified **23.6%**; MASK honesty score **96.13**; Vectara Hallucination Rate **12.0%**
- MMLU-Pro **87.5%** (verified); Global-MMLU **89.3%** (unverified); MultiChallenge **55.32%**; FACTS Grounding **61.8%**; MultiNRC **35.83%**
- ARC-AGI-1 **63.67%** / ARC-AGI-2 **13.61%**; AIME (OTIS mock) **77.8%**; FrontierMath **15.22%** (Tier 4 **4.2%**); EnigmaEval **6.00%**; IFBench **42.7%** (AA)

Coding:

- SWE-bench Verified: **71.3%** (official, evals.report)
- SWE-bench Pro **43.60%**; SWE-bench Multilingual **67.0%** (official)
- LiveCodeBench **59.0%** pass@1 (unverified); LiveCodeBench Pro **1412** Codeforces Elo; SciCode **44.7%**; WeirdML **47.7%**
- Vibe Code Bench **22.62%** (verified); GSO **14.71%** Opt@1; WebDev Arena **1386** Elo (verified)
- Chat arenas: LMArena **1437**; Design Arena **1235**; Search Arena **1152**; EQ-Bench Creative Writing v3 **1767**

Long context:

- AA-LCR 54.0% and MRCR v2 47.1% show the 1M window is far more nominal than real in this generation — retrieval degrades well before the ceiling.

### Normalized scores (1–100)

- **Tool use: 72/100.** BFCL 73.24%, τ²-Bench Telecom 70.5%, WebArena 58.5% and GDPval 1317 Elo put it in the upper mid band, and the 1.0% indirect-injection ASR is a genuine safety strength; capped by MCP Atlas 43.8%, MCP-Universe 35.06%, Terminal-Bench Hard 28.8% and the complete absence of Terminal-Bench 2.1/Tau3-Banking, which is where today's frontier sits.
- **Reasoning: 70/100.** GPQA Diamond 82.3% is at the top of the mid band (60–80% → 55–65, nudged up) with MMLU-Pro 87.5%; capped by HLE 13.7%, AA Index 20.7, CritPt 0.0%, ARC-AGI-2 13.61% and FrontierMath 15.22%.
- **Context window: 93/100.** 1M tokens is the ≥1M tier, but scored near its floor because measured retrieval is weak (AA-LCR 54.0%, MRCR 47.1%) and the 1M tier was a per-request beta on this generation.
- **Multimodal: 78/100.** Image input is verified (MMMU-Pro 68.9%) and PDF/file input is available through Anthropic's files API, which is the "+video/PDF in = 75–90" band; near the floor of that band because ScreenSpot-Pro is only 36.2% and there is no audio/video input or non-text output.
- **Coding: 74/100.** SWE-bench Verified 71.3% and SWE-bench Multilingual 67.0% remain solid, but SWE-bench Pro 43.6%, SciCode 44.7% (below the 55% frontier reference) and LiveCodeBench 59.0% show the ceiling; Vibe Code Bench 22.62% keeps it above the methodology's "<10%" mid-band trap.
- **Cost efficiency: 60/100.** $3.00 in / $15.00 out per 1M matches the $3/$15 ≈ 60 anchor exactly — the most expensive per-token profile in this batch, and hard to justify against newer tiers at $0.15–$2.00 input.
- **Overall Score: 77/100.** (72 + 70 + 93 + 78 + 74) / 5 = 77.4 → **77**. Best fit: mature, safety-tuned agentic coding on a 1M window — a good migration baseline and a poor price-per-capability pick now that newer Sonnet/Opus tiers and cheaper Chinese models have passed it.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek/deepseek-v4.1-flash)** — 2026-09-23 (UTC)
- Method: public internet research (evals.report 46-row benchmark table for the official/verified rows, OpenRouter model page for the Artificial Analysis row set, pricing, context window, release date and knowledge cutoff); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
