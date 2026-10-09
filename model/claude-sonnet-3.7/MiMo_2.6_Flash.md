# Claude Sonnet 3.7 — findings by Mimo v2.6 Flash

- Source: Anthropic/Claude Sonnet 3.7 (`claude-3-7-sonnet-20250219`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 3.7 (API: `claude-3-7-sonnet-20250219`)
- **Short description:** Anthropic's first hybrid-reasoning Sonnet (released 2025-02-24) — one checkpoint serving both instant answers and budget-controlled extended thinking; launched alongside the Claude Code CLI research preview and held the SWE-bench Verified record at launch. Superseded/deprecated by the Claude 4.x line (API id deprecated late 2025).
- **Provider / access:** Anthropic first-party API (platform.claude.com, Chat-style Messages API with `thinking` budget) and Anthropic apps (claude.ai, Claude Code). No $0 free API tier found in reviewed sources — Anthropic first-party is paid.
- **Release / knowledge:** released 2025-02-24 (model id dated 2025-02-19); knowledge cutoff January 2025.
- **IDs:** `claude-3-7-sonnet-20250219` (deprecated); no Zen Free ID found.
- **Context window:** 200,000 input; max output 64,000 (extended thinking) / 16,000 standard per benchgen, up to 128,000 including thinking tokens at launch beta (Anthropic docs).
- **Modalities:** text + image in; text out; hybrid reasoning yes (on/off per request, thinking budget 1,024→up to 128K tokens, visible chain-of-thought); tool calls yes; prompt caching (90% cache-read discount).
- **Pricing (as of 2026-10-02):** **$3.00 in / $15.00 out per 1M** (thinking tokens billed as output; same price as Claude 3.5 Sonnet) — Anthropic pricing docs.
- **Architecture:** proprietary; parameters undisclosed.

### Raw benchmarks found

> Measured numbers with (source / rank / harness). Missing rows = "no verified public score found".

Agent / tool use:

- TAU-bench Retail: **81.2%** (Anthropic release table via AwesomeAgents); TAU2 Airline **64.2%** (55th pct, rank 10/21); Tau2 Telecom 50.0%; TAU Airline (HAL) 56.0% (90th pct, rank 2/11) — BenchmarkList/AA
- GDPval-AA: **1046** (73rd pct, rank 91/340) — Artificial Analysis via BenchmarkList
- Terminal-Bench Hard (AA subset): **21.2%** (69th pct, rank 102/326, 2026-06-10); Terminal-Bench 2.1: no verified public score found
- OSWorld-Verified 35.8%; MCP-Universe 24.2%; AgentBench FC 53.2%; SHADE-Arena 26.2 overall success (Anthropic research post)

Reasoning / knowledge:

- GPQA Diamond: **84.8% with extended thinking** (Anthropic release, via AwesomeAgents); **78.5% official** entry on evals.report (2025-02-24); 68% snapshot in release-tracker summary (thinking-off context)
- Humanity's Last Exam: **10.3%** (71st pct, rank 184/466); HLE text-only 7.9% — AA via BenchmarkList
- MMLU-Pro: 80.3% (67th pct) / 80.7%; Artificial Analysis Intelligence Index: **27.06** (71st pct, rank 124/418)
- AIME 2025: 80.0% (AwesomeAgents release summary); FrontierMath 4.14% (evals.report)

Coding:

- SWE-bench Verified: **62.3%** at release (extended thinking, Anthropic official); **63.7%** vanilla on the n=489 solvable subset; **70.3%** with parallel test-time-compute scaffold (Anthropic release post) — still the headline launch record for early 2025
- SWE-bench Full 33.8% (75th pct, rank 3/9); SWE-bench Lite 48.0%; SWE-bench Multimodal 30.6%; Multi-SWE-Bench 19.3% (90th pct, rank 2/11)
- LiveCodeBench: **56.7%** (24th pct, rank 94/123); Aider Polyglot 64.9% (76th pct); SciCode 40.3% (75th pct); BigCodeBench 35.8% (Benchgen); BigCodeBench-Hard 32.4% (89th pct, rank 3/20)

Long context:

- 200K window (Anthropic docs); MRCR / RULER / GraphWalks: no verified public score found

Multimodal:

- MMMU Pro: **71.5%** (29th pct, rank 56/79) — AA via BenchmarkList; DocVQA 93.5%, ChartQA 91.2% (Anthropic); no audio/video-in

### Normalized scores (1–100)

- **Tool use: 72/100.** Strong TAU-bench Retail 81.2% / TAU2 Airline 64.2% and GDPval-AA 1046 anchor the upper-mid band; capped below 80 by Terminal-Bench Hard 21.2%, MCP-Universe 24.2% and no TB2.1/Tau3-Banking number.
- **Reasoning: 68/100.** GPQA Diamond 78.5–84.8% sits above the mid anchor, but HLE 10.3% and AA Intelligence Index 27.06 keep it out of the 90+ frontier band — top of the documented mid range.
- **Context window: 70/100.** 200K input maps exactly to the methodology's 200K anchor (200K–500K band = 65–84, "200K = 70"); 64–128K output with thinking noted as a non-scored capability.
- **Multimodal: 68/100.** Image input + text output with strong document/chart understanding (DocVQA 93.5, ChartQA 91.2, MMMU Pro 71.5) — top of the +image-in band (60–70), capped by no audio/video input or non-text output.
- **Coding: 72/100.** SWE-bench Verified 62.3% (70.3% scaffolded) was launch-state-of-the-art and still solid mid-band alongside Aider Polyglot 64.9% / SciCode 40.3%; well below the 2026 frontier (80%+ SWE-V, TB2.1 85%+), so capped in the 65–75 mid band.
- **Cost efficiency: 60/100.** Methodology anchor: $3/$15 per 1M = ~60 (paid only, thinking tokens billed as output); 90% cache-read discount helps but no free tier exists.
- **Overall Score: 70/100.** (72+68+70+68+72)/5 = 70.0 → 70 — best-fit: proven 2025-era hybrid-reasoning workhorse for TAU-style tool tasks and reliable SWE work, now deprecated in favor of the Claude 4.x line; expensive at $3/$15.

---

## Signature

- Provided by: **Mimo v2.6 Flash (opencode/mimo-v2.6-flash-free)** — 2026-10-02
- Method: public internet research (Anthropic release post and pricing docs, BenchmarkList/Artificial Analysis aggregates, evals.report, benchgen, Awesome Agents); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
