# Claude Opus 4.7 — findings by Mistral Large 4

- Source: Anthropic (`claude-opus-4-7`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.7
- **Short description:** Anthropic's April 2026 Opus point release — most capable generally-available Claude at launch (Mythos Preview remained above it), first model carrying the new cyber safeguards tested toward Project Glasswing; notable coding (+13%), vision (3x resolution) and hallucination (61%→36%) gains over 4.6 at unchanged price.
- **Provider / access:** Claude API (`claude-opus-4-7`), Bedrock, Vertex, Azure; Claude Pro/Max/Team/Enterprise plans. Messages API.
- **Release / knowledge:** Released 2026-04-16 (system card same day; updated 2026-05-04); knowledge cutoff not restated in reviewed snippets.
- **IDs:** `claude-opus-4-7` (Claude API).
- **Context window:** 1,000,000 tokens.
- **Modalities:** Text + high-resolution image in (up to 3.75MP, 3x Opus 4.6), PDF in, text out; xhigh effort level; task budgets; tool calls.
- **Pricing (as of 2026-11-05):** $5 / $25 per 1M in/out (unchanged from 4.5/4.6); prompt caching up to 90% off; batch 50%. No free tier.
- **Architecture:** Proprietary; iterative update to Opus 4.6; new tokenizer (+35% tokens — billing caveat); cyber safeguards test vehicle.

### Raw benchmarks found

Official announcement/system card cross-checked against Vellum, llm-stats, buildfastwithai, checkaimodels, thenextweb, lushbinary, Simbian; conflicts noted:

Agent / tool use:

- CursorBench: **70%** — highest among evaluated models (buildfastwithai)
- Finance Agent (internal): **64.4%** SOTA (llm-stats)
- Terminal-Bench 2.0: **69.4%** (llm-stats; Mythos Preview 82.0% above it)
- Rakuten internal SWE-bench: 3x more production tasks resolved than 4.6 (felloai)
- CyberGym note: Opus 4.6 re-scored 73.8 under updated harness (official footnote); Simbian defense benchmark: 4.6 leads 44.5% vs 4.7 30.9% — conflicting cyber readings, both cited
- OSWorld / Claw-Eval: no verified public score found for this ID

Reasoning / knowledge:

- GPQA Diamond: **94.2%** (vs GPT-5.4 Pro 94.4%, Gemini 3.1 Pro 94.3% — "within noise" per thenextweb); Mythos Preview 94.6% above (Vellum)
- Hallucination rate: 61% → 36% (checkaimodels)
- HLE: no verified public score found for this ID

Coding:

- SWE-bench Verified: **87.6%** (up from 4.6's 80.8%) (llm-stats/apiyi)
- SWE-bench Pro: **64.3%** (vs GPT-5.4 57.7%, Gemini 3.1 Pro 54.2%) (Vellum/buildfastwithai)
- Leads 7 of 10 core leaderboards vs GPT-5.4/Gemini 3.1 Pro (apiyi)

Long context:

- 1M window; no verified MRCR/RULER score found for this ID

### Normalized scores (1–100)

- **Tool use: 88/100.** CursorBench 70% top and Finance Agent 64.4% SOTA; cyber-defense readings conflict (30.9% on Simbian vs 4.6's 44.5%).
- **Reasoning: 89/100.** GPQA 94.2% converged-with-field; hallucination halved; no HLE published.
- **Context window: 96/100.** 1M family window; no verified 512K+ retrieval; new tokenizer adds ~35% tokens (cost caveat).
- **Multimodal: 85/100.** Text + high-res image (3.75MP) + PDF in, text out.
- **Coding: 90/100.** SWE-V 87.6% and SWE-Pro 64.3% led GA field in April 2026; 3x production tasks on internal bench.
- **Cost efficiency: 45/100.** $5/$25 flat in the $3/$15–$10/$50 mid-band; +35% tokenizer tokens raise effective cost; no free tier.
- **Overall Score: 90/100.** Half-up mean of (88 + 89 + 96 + 85 + 90) / 5 = 89.6 → 90. Best fit: April–May 2026 GA flagship; superseded by 4.8 then Opus 5 at the same price.

---

## Signature

- Provided by: **Mistral Large 4 (mistral-large-4)** — 2026-11-05
- Method: public internet research (3+3 web searches, official Anthropic announcement/system card cited, 2026-11-05 UTC); cross-checked against Vellum, llm-stats, buildfastwithai, checkaimodels, thenextweb, lushbinary, apiyi, Simbian, MindFort; conflicts (CyberGym 4.6 re-score 73.8; Simbian cyber ranking 4.6 > 4.7; GPQA within-noise) listed side by side. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Introducing Claude Opus 4.7 — Anthropic news (official, 2026-04-16)](https://www.anthropic.com/news/claude-opus-4-7)
  - [System Card: Claude Opus 4.7 (PDF, 2026-04-16)](https://www-cdn.anthropic.com/037f06850df7fbe871e206dad004c3db5fd50340/Claude%20Opus%204.7%20System%20Card.pdf)
  - [Vellum — Opus 4.7 benchmarks (vs Mythos Preview: SWE-Pro 64.3 vs 77.8, SWE-V 87.6 vs 93.9)](https://www.vellum.ai/blog/claude-opus-4-7-benchmarks-explained)
  - [llm-stats — Opus 4.7 launch research (SWE-V 87.6%, GPQA 94.2%, TB 69.4%, Finance Agent 64.4%)](https://llm-stats.com/blog/research/claude-opus-4-7-launch)
  - [buildfastwithai — 4.7 review (CursorBench 70% highest, Rakuten 3x)](https://www.buildfastwithai.com/blogs/claude-opus-4-7-review-benchmarks-2026)
  - [checkaimodels — 4.7 review (1M ctx, $5/$25, hallucination 61→36%)](https://checkaimodels.com/en/articles/claude-opus-4-7-review-2026/)
  - [thenextweb — 4.7 leads SWE-bench/agentic vs GPT-5.4, Gemini 3.1 Pro](https://thenextweb.com/news/anthropic-claude-opus-4-7-coding-agentic-benchmarks-release)
  - [Simbian — cyber defense: Opus 4.6 44.5% leads 4.7 30.9% (conflicting cyber reading)](https://simbian.ai/blog/claude-for-cybersecurity-opus-4-7-worst-claude)
  - [VentureBeat — 4.7 narrowly retakes GA lead](https://venturebeat.com/technology/anthropic-releases-claude-opus-4-7-narrowly-retaking-lead-for-most-powerful-generally-available-llm)
  - [lushbinary — 4.7 pricing/caching/batch guide](https://lushbinary.com/blog/claude-opus-4-7-developer-guide-benchmarks-vision-migration/)
