# GPT-5.5 — findings by GLM 5.3 Flash

- Source: OpenAI (`gpt-5.5`)
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.5
- **Short description:** OpenAI's April-2026 flagship for complex professional work — strongest agentic coder of its generation with a 1M context window; now superseded in practice by the GPT-5.6 family and GPT-6.x routes at the same or lower prices.
- **Provider / access:** OpenAI API `gpt-5.5` (Responses + Chat Completions; structured outputs, function calling, extended prompt caching, built-in computer use, hosted shell, apply_patch, Skills, MCP, web search, Batch); Codex (400K context there); ChatGPT (Thinking). Third-party resellers from $0.19/$1.13 (UnoRouter).
- **Release / knowledge:** Released 2026-04-23; knowledge cutoff December 1, 2025. Not on OpenAI's official deprecation list as of the October 2026 check, but third-party registries mark it deprecated and OpenAI recommends the GPT-5.6 tiers as replacements; it has been removed from ChatGPT-signed-in Codex sessions.
- **IDs:** `gpt-5.5` (API); `gpt-5.5-pro` ($30/$180) is the separate Pro tier. No Free ID exists on Zen — paid only.
- **Context window:** 1M tokens (1,050,000 per OpenAI model pages) / 128K max output — verified via the API changelog and launch docs; Codex caps at 400K.
- **Modalities:** Text and image in; text out. Reasoning (effort defaults to `medium`, xhigh available); tool calls; JSON/structured output; extended prompt caching only (no in-memory caching).
- **Pricing (as of 2026-11-02):** $5 in / $30 out per 1M tokens short-context (≤272K input); long-context (≥272K) bills the whole request at $10 in / $45 out; cached input $0.50 ($1.00 long); Batch/Flex 50% off; Fast mode 2.5x ($12.50/$75). Same list price as GPT-5.6 Sol at launch, which now runs a $4/$20 promotion.
- **Architecture:** Proprietary closed weights; reasoning model with persisted reasoning absent (arrived with 5.6).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **82.7%** (vendor, SOTA at launch); Terminal-Bench 2.1: **76.4%** (benchlm) / **78.2%** (Terminus-2) / **84.1%** (Codex xhigh, AA)
- τ²-bench Telecom: **98.0%** (vendor/leaderboard #1 of 10 at reading)
- BrowseComp: **84.4%** (vendor); OSWorld-Verified: **78.7%** (vendor)
- MCP-Atlas: **75.3%** (vendor); Toolathlon: **55.6%** (vendor)
- GDPval-MM: **84.9%** (vendor, wins-or-ties framing); CyberGym: **81.8%** (vendor)
- Terminal-Bench Hard (AA): **60.6%** (AA)

Reasoning / knowledge:

- GPQA Diamond: **93.6%** (vendor; leaderboard #8/263)
- ARC-AGI-2: **85.0%** (llmboard #2/19); ARC-AGI-1: **95.0%**
- HLE: **41.4%** no tools / **52.2%** with tools (vendor)
- FrontierMath: Tiers 1–3 **51.7%**, Tier 4 **35.4%** (vendor)
- AA CritPt: **27.14%**; AA LCR v1.1: **84.33%**; AA Omniscience: **57.95%**; SciCode: **56.1%** (AA)
- Artificial Analysis Intelligence Index: **54.8** (aggregator reading, #5/17 at capture)

Coding:

- SWE-bench Pro (public): **58.6%** (vendor); AA hard-aa re-runs: **30.9%** (Codex xhigh) / **26.2%** (medium) — large harness sensitivity
- SWE-bench Verified: **88.7%** (aggregator-cited launch figure; treat as provisional)
- Terminal-Bench 2.0/2.1: see above; FrontierSWE: **73.0%** (llmboard)
- LiveBench: **80.71%** (llmboard); LiveCodeBench: no verified public score found

Long context:

- MRCR v2 (8-needle, 512K–1M): **74.0%** (vendor; vs GPT-5.4 36.6% and Opus 4.6 32.2%) — best-in-class at release; 128–256K **87.5%**, 256–512K **81.5%**
- GraphWalks parents >128K: **58.5%**; BFS >128K: **45.4%** (llmboard, competitor-compiled)

### Normalized scores (1–100)

- **Tool use: 86/100.** Launch-era SOTA Terminal-Bench 2.0 82.7 with τ²-Telecom 98 and BrowseComp 84.4; capped by Toolathlon 55.6, MCP-Atlas 75.3 and the weak AA Terminal-Bench Hard 60.6 against newer models.
- **Reasoning: 89/100.** GPQA 93.6, ARC-AGI-2 85 and FrontierMath T4 35.4 led the April field; capped by HLE 41.4 (no tools) and CritPt 27.1 against the 2026 H2 frontier.
- **Context window: 93/100.** Verified 1M-token window with a then-best MRCR v2 74.0 at 512K–1M; capped by the 2x long-context surcharge and weaker GraphWalks BFS 45.4.
- **Multimodal: 70/100.** Text+image in with MMMU-Pro 83.2; capped by text-only output and no audio/video input.
- **Coding: 84/100.** Terminal-Bench 2.0 82.7 and FrontierSWE 73.0 hold up; capped by SWE-bench Pro 58.6 (and only ~31 on AA's hard-aa re-run), no verified LiveCodeBench, and successor models now dominating the same boards.
- **Cost efficiency: 45/100.** $5/$30 list is unchanged while GPT-5.6 Sol runs $4/$20 promotional and GPT-6.1 Sol costs $2/$10 at similar or better intelligence — poor current value despite batch 50% and $0.50 cache reads.
- **Overall Score: 84/100.** (86+89+93+70+84)/5 = 422/5 = 84.4 → 84. Best fit: incumbent Codex/ChatGPT workflows with prompt investments and batch economics; new OpenAI work should route to GPT-5.6 Sol/6.1 Sol.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-11-02 (re-research pass; prior 2026-10-16)
- Method: public internet research (approved re-research pass); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [OpenAI — Introducing GPT-5.5](https://openai.com/index/introducing-gpt-5-5/)
  - [OpenAI API changelog — GPT-5.5 release entry](https://developers.openai.com/api/docs/changelog)
  - [OpenAI API pricing (short/long-context tables)](https://developers.openai.com/api/docs/pricing.md?v=20261005c)
  - [Vellum — Everything You Need to Know About GPT-5.5](https://www.vellum.ai/blog/everything-you-need-to-know-about-gpt-5-5)
  - [OminiGate — GPT-5.5 AA benchmark runs](https://ominigate.ai/en/models/openai/gpt-5.5/benchmarks)
  - [llmboard — GPT-5.5 benchmark table](https://www.llmboard.ai/models/gpt-5-5)
