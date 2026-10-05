# Big Pickle — findings by Claude Fable 5.1
- Source: OpenCode Zen (`opencode/big-pickle`) — stealth alias; underlying publisher undisclosed
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`
## Model card
- **Name:** Big Pickle (`big-pickle`) — Free (limited-time stealth free period on OpenCode Zen; no separate "-free" suffix ID)
- **Short description:** Big Pickle is a stealth model that's free on OpenCode for a limited time. models.dev describes it as a "Reasoning model for deliberate analysis, multi-step problem solving, and tool use", positioned for agentic coding inside the OpenCode CLI. Variant/alias flag: It was previously identified by community consensus and an OpenCode maintainer as the GLM-4.6 model from Zhipu AI, hosted under this codename, but the underlying model is rotated periodically and its current identity is undisclosed. A later third-party eval noted that big-pickle is officially unconfirmed; leaked provider errors and API response signatures suggest it is currently served by DeepSeek infrastructure. Scores below are a snapshot of whatever is behind the alias, not a stable model.
- **Provider / access:** OpenCode Zen `opencode/big-pickle`; API: openai-completions, Base URL: https://opencode.ai/zen/v1 (OpenAI Chat Completions-compatible; NPM Package @ai-sdk/openai-compatible, Environment Variable OPENCODE_API_KEY). No Responses API documented. Reliability caveat: a May 2026 issue reported that The Big Pickle (big-pickle) model from OpenCode Zen has stopped responding. I was able to use it successfully before (completed a full application), but as of today (May 18, 2026), it no longer works.
- **Release / knowledge:** release_date = "2025-10-17"; knowledge cutoff listed as 2025-01 (models.dev metadata; not vendor-confirmed since the vendor is undisclosed)
- **IDs:** `opencode/big-pickle` (the only ID; it is itself the free offering — no distinct Free ID exists on Zen)
- **Context window:** 200,000 total; 160K input / 32K output — verified via models.dev TOML ([limit] context = 200_000 input = 160_000 output = 32_000). Note: one third-party aggregator claims a generous output limit of 128,000 tokens, which conflicts with models.dev; the 32K figure is used here.
- **Modalities:** text in / text out only ([modalities] input = ["text"] output = ["text"]); reasoning yes (reasoning = true, interleaved `reasoning_content`); tool calls yes; structured output/JSON yes (tool_call = true structured_output = true); supportsReasoningEffort | Yes; attachments not supported.
- **Pricing (as of 2026-10-05):** Free — | Big Pickle | Free | Free | Free | - | (input / output / cached read; no cache write). Free-tier privacy caveat: Big Pickle: During its free period, collected data may be used to improve the model. Big Pickle is a stealth model that's free on OpenCode for a limited time. The team is using this time to collect feedback and improve the model.
- **Architecture:** Proprietary/undisclosed; open_weights = false. No parameter count, MoE details, or license published for this alias. Community attributions (GLM-4.6, later DeepSeek-served) are unconfirmed.
### Raw benchmarks found
Agent / tool use:
- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **50.8%** (SWE Atlas Codebase QnA, 63/124; third-party self-reported run with official harness — Task Resolve Rate: 50.8% (63/124) — big-pickle, the free stealth model on OpenCode Zen, evaluated on Scale AI's SWE Atlas Codebase QnA benchmark using the mini-swe-agent scaffold. Run on 2026-08-11 with the official open-source harness, task data, and judge model. Scaffold: mini-swe-agent pinned to 2.4.6 — the same minimal bash-only scaffold Scale uses for non-first-party models on the leaderboard. Caveat: Self-reported. Scale did not run or verify this evaluation. Not on Scale's official leaderboard; no rank.)
Reasoning / knowledge:
- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found** (model is not listed on Artificial Analysis or BenchLM under this ID)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**
Coding:
- SWE-bench Verified / SWE-Pro: **no verified public score found** (one aggregator asserts Free coding model via OpenCode Zen (tier S+, SWE-bench ~72%). — unsourced, no harness, no run logs; treated as unverified and NOT used)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **67% task success, composite 0.615** on the non-standard community "orpt-bench" (DevOps/infra repair tasks; Composite 0.615 Correctness-weighted overall standing Success 67% Tasks completed successfully ORPT 15.39 Requests per solved task Total cost $0.0000) — hobbyist harness, not a recognized benchmark; informational only.
Long context:
- no long-context retrieval reported (no MRCR / RULER / GraphWalks results found for `big-pickle`)
### Normalized scores (1-100)
- **Tool use: 52/100.** Only evidence is the self-reported SWE Atlas Codebase QnA 50.8% (mini-swe-agent, bash-only scaffold, 2026-08-11 snapshot) plus anecdotal agentic behavior (one reviewer noted it was the only model that paused before coding to actually search for the IndexNow protocol spec using Exa Code Search.). Capped at mid-tier: no Terminal-Bench 2.1, Tau3, GDPval, or OSWorld numbers; the SWE Atlas result is not leaderboard-verified and the alias may have rotated since.
- **Reasoning: 40/100.** No verified GPQA Diamond, HLE, LCR, CritPt, or AA Index score exists for this ID. Score is a conservative floor reflecting only that it is a reasoning-mode model (reasoning=true, reasoning-effort supported) with mid-range agentic results; it is NOT a measurement. Cap: zero reasoning benchmarks.
- **Context window: 70/100.** 200K total verified via models.dev (160K in / 32K out) → 200K tier maps to exactly 70. No MRCR/RULER retrieval data to adjust up or down.
- **Multimodal: 15/100.** Text in / text out only; attachments unsupported; no image, audio, video, or PDF input (models.dev modalities). Text-only default = 15.
- **Coding: 55/100.** SWE Atlas Codebase QnA 50.8% (self-reported, official harness) and 67% success on a non-standard DevOps repair bench; qualitative reports are positive (Surprised by the quality of test cases generated by Big Pickle LLM in #opencode. Decent enough for a free LLM for coding). Capped: no SWE-bench Verified, LiveCodeBench, SciCode, or Terminal-Bench numbers; the "~72% SWE-bench" aggregator claim is unsourced and excluded.
- **Cost efficiency: 100/100.** $0 input / $0 output / $0 cached read on OpenCode Zen during the stealth free period. Caveats: free period is time-limited, and prompts may be used to improve the model (privacy). Not counted in Overall.
- **Overall Score: 46.4/100.** Mean of (52 + 40 + 70 + 15 + 55) / 5 = 46.4. Best fit: zero-cost daily-driver for agentic coding inside OpenCode on non-sensitive codebases, with the understanding that the underlying model is undisclosed and can change without notice; not recommended where reproducibility, vision input, or verified frontier benchmarks are required.
---
## Signature
- Provided by: **Claude Fable 5.1 (anthropic/claude-fable-5.1)** — 2026-10-05
- Method: public internet research (OpenCode Zen docs, models.dev TOML, pi.dev/mastra model registries, third-party SWE Atlas reproduction repo, community benchmark pages, GitHub issues); Artificial Analysis, BenchLM, LiveCodeBench, and SWE-bench leaderboards returned no entry for `big-pickle`. Scores are normalized 1-100 interpretations, not official vendor scores; Reasoning is a floor value in the absence of any benchmark.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.