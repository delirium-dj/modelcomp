# GPT-5.5 — findings by Mistral Large 4

- Source: OpenAI (`gpt-5.5`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.5
- **Short description:** OpenAI's April 2026 flagship ("Spud"), first fully retrained base since GPT-4.5 — "a new class of intelligence for real work" with gains in agentic coding, computer use, knowledge work and early scientific research; ships as base + Thinking + Pro variants; ~40% fewer output tokens per Codex task at latency parity with 5.4.
- **Provider / access:** OpenAI API (`gpt-5.5`, Responses API), ChatGPT Plus/Team/Pro (as 5.5 Thinking), Codex (400K context there). Not on free tier.
- **Release / knowledge:** Released 2026-04-23; knowledge cutoff not restated in reviewed snippets.
- **IDs:** `gpt-5.5` (API); `openai/gpt-5.5` (OpenRouter).
- **Context window:** 1,000,000 tokens via API (400K in Codex); >95% needle-in-a-haystack across the full 1M; MRCR v2 74.0% long-context.
- **Modalities:** Text + vision in, text out; reasoning effort xhigh/high/medium/low/non; tool calling, computer use, web search; JSON mode.
- **Pricing (as of 2026-11-05):** $5 / $30 per 1M in/out — 2x GPT-5.4's $2.50/$15 (llm-stats comparison; BenchLM also lists $5/$30, cached $0.50); Codex Fast mode 1.5x speed at 2.5x cost. No free tier.
- **Architecture:** Proprietary, full retrain; params not disclosed.

### Raw benchmarks found

Official announcement cross-checked against Vellum, Appwrite, VentureBeat, Kingy, renovateqr, ton-technotes, llm-stats; conflicts noted:

Agent / tool use:

- Terminal-Bench 2.0: **82.7%** — SOTA, +13.3 over Opus 4.7's 69.4%, narrowly beats Mythos Preview (Vellum/VentureBeat)
- OSWorld-Verified: **78.7%** (edges Opus 4.7's 78.0%) (official/Appwrite)
- GDPval: **84.9%** win-or-tie across 44 occupations (+17.6 over Gemini 3.1 Pro) (official/Appwrite)
- MCP Atlas: **75.3%** — Opus 4.7 leads at 79.1% (renovateqr); Kingy lists 5.5 leading Toolathlon/OfficeQA/CyberGym/ARC-AGI-2/FM/BixBench
- Claw-Eval / AutomationBench: no verified public score found

Reasoning / knowledge:

- FrontierMath Tier 1–3: **51.7%** (leads; Opus 4.7 43.8%) (Vellum); Tier 4: **35.4%** (Wikipedia; Pro 39.6%)
- ARC-AGI-2: +11.7 p.p. over 5.4 (llm-stats)
- MRCR v2 long-context: **74.0%** (renovateqr); 87.5% at 128K–256K vs Claude's 59.2% (Vellum)
- SWE-bench Pro: **58.6%** — Opus 4.7 leads 64.3%; OpenAI footnotes memorization concerns on this eval (Appwrite/ton-technotes)
- GPQA / HLE: no verified public score found for gpt-5.5 base

Coding:

- Terminal-Bench 2.0 82.7% (above); SWE-bench Pro 58.6% (trails Opus 4.7)
- SWE-bench Verified / LiveCodeBench / DeepSWE: no verified public score found for this exact ID

Long context:

- 1M API window; NiAH >95% full-range (tech-insider); MRCR v2 74.0%

### Normalized scores (1–100)

- **Tool use: 90/100.** TB 2.0 82.7% SOTA, OSWorld 78.7%, GDPval 84.9% top-tier; MCP Atlas trails Opus 4.7.
- **Reasoning: 88/100.** FrontierMath T1–3 51.7% leads, ARC-AGI-2 jump; SWE-Pro memorization footnote and no HLE/GPQA published.
- **Context window: 97/100.** 1M with >95% NiAH across full range and MRCR 74% — top of the 95–100 tier, just under the 100 bar.
- **Multimodal: 80/100.** Text + vision in, text out; no audio/video or non-text output.
- **Coding: 89/100.** TB 2.0 82.7% SOTA; SWE-Pro 58.6% trails Opus 4.7 (64.3%); ~40% fewer Codex tokens offsets.
- **Cost efficiency: 40/100.** $5/$30 per 1M (2x 5.4) between the $3/$15 (~60) and $10/$50 (~30) bands; token efficiency partially offsets; no free tier.
- **Overall Score: 89/100.** Half-up mean of (90 + 88 + 97 + 80 + 89) / 5 = 88.8 → 89. Best fit: April–June 2026 default frontier for agentic/computer-use work; superseded by GPT-5.6 Sol at half the price.

---

## Signature

- Provided by: **Mistral Large 4 (mistral-large-4)** — 2026-11-05
- Method: public internet research (3+3 web searches, official OpenAI announcement cited, 2026-11-05 UTC); cross-checked against Vellum, Appwrite, VentureBeat, Kingy, renovateqr, llm-stats, tech-insider, webscraft, Wikipedia; conflicts (MCP Atlas 75.3 vs Opus 79.1; SWE-Pro memorization footnote) listed side by side. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Introducing GPT-5.5 — OpenAI (official, 2026-04-23)](https://openai.com/index/introducing-gpt-5-5/)
  - [Vellum — Everything you need to know about GPT-5.5 (TB 82.7%, OSWorld 78.7%, FM T1–3 51.7%, 128–256K 87.5% vs Claude 59.2%)](https://www.vellum.ai/blog/everything-you-need-to-know-about-gpt-5-5)
  - [Appwrite — GPT-5.5 launch (SWE-Pro 58.6% vs Opus 64.3%, GDPval 84.9%, 400K Codex ctx)](https://appwrite.io/blog/post/gpt-5-5-launch)
  - [VentureBeat — 5.5 narrowly beats Mythos Preview on TB 2.0](https://venturebeat.com/technology/openais-gpt-5-5-is-here-and-its-no-potato-narrowly-beats-anthropics-claude-mythos-preview-on-terminal-bench-2-0)
  - [llm-stats — GPT-5.5 vs 5.4 ($5/$30 vs $2.50/$15, ARC-AGI-2 +11.7pp, 9/10 benchmarks up)](https://llm-stats.com/blog/research/gpt-5-5-vs-gpt-5-4)
  - [renovateqr — honest scorecard (MRCR 74.0%, MCP Atlas 75.3% vs Opus 79.1%)](https://renovateqr.com/blog/gpt-5-5-review-benchmarks-2026)
  - [Kingy — 5.5 nine numbers (leads TB/GDPval/OSWorld/Toolathlon/CyberGym/ARC-AGI-2/FM)](https://kingy.ai/news/gpt-5-5-benchmarks-revealed-the-9-numbers-that-prove-chatgpt-5-5-just-changed-the-ai-race/)
  - [ton-technotes — honest scorecard with memorization caveat](https://ton-technotes.com/en/blog/2026-04-24-gpt-5-5-honest-scorecard/)
  - [tech-insider — 5.5 launch (NiAH >95% full 1M, TB 82.7%)](https://tech-insider.org/gpt-5-5-launch-openai-april-23-terminal-bench-2026/)
  - [Wikipedia — GPT-5.5 (Spud, FM T4 35.4%)](https://en.wikipedia.org/wiki/GPT-5.5)
  - [OpenRouter — openai/gpt-5.5](https://openrouter.ai/openai/gpt-5.5)
