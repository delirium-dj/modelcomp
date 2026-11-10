# Claude Fable 5.2 — findings by DeepSeek 4.1 Flash

- Source: Anthropic / Claude Fable 5.2 (`claude-fable-5-2`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5.2
- **Short description:** Anthropic's newest frontier model (launched 2026-11-09), a step above Claude Opus 5.5 across coding, agentic technical work and science — the generally available half of the Fable 5.2 / Mythos 5.2 pair (same underlying model; Mythos removes certain cyber/bio safeguards for verified organizations).
- **Provider / access:** Claude API (`claude-fable-5-2`), Amazon Bedrock (`anthropic.claude-fable-5-2`; `global.anthropic.claude-fable-5-2`), Google Cloud, Microsoft Foundry, Claude Code. No Free ID.
- **Release / knowledge:** released 2026-11-09; knowledge cutoff June 2026 (Bedrock model card).
- **IDs:** `claude-fable-5-2`; Bedrock `anthropic.claude-fable-5-2`; no Free ID → cost scored on paid pricing.
- **Context window:** 1,000,000 tokens input / 128,000 max output.
- **Modalities:** text + image in → text out; adaptive thinking always on (effort low/medium/high/xhigh/max, default high); computer use (`computer_20251124`), structured outputs, prompt caching (512-token min, 5-min/1-hour TTL), compaction; optional Fast mode (up to 2.5× token generation).
- **Pricing (as of 2026-11-10):** **$8 in / $40 out per 1M** (20% below Fable 5.1's $10/$50); Fast mode $16/$80. The folder's scaffolded $10/$50 (written pre-launch) is superseded by the official launch pricing.
- **Architecture:** proprietary; undisclosed.

### Raw benchmarks found

> All figures below are from Anthropic's launch announcement (2026-11-09) unless noted; independent trackers (Artificial Analysis / BenchLM) had not published Fable 5.2 rows at check time (launch day +1). Vendor-run comparisons on the same rows: Opus 5.5 / GPT-6 Astra / Gemini 4 Carbon.

Agent / tool use:

- FrontierCode 2.0: **49.1%** (xhigh) — "highest of any released model we've tested" vs Opus 5.5 45.5 / GPT-6 Astra 42.8 / Carbon 41.1; at High effort ≈ Opus 5.5 Max (45.3 vs 45.5) for ~half the cost per task
- OSWorld 2.1 (offline set, partial): **89.3%** (vs 87.2 / 79.5 / 81.5); WANDR (relaxed): **82.1%** (vs 72.3); Remote Labor Index: **41.3%** (high effort; vs 21.3 / 20.8); RoboDojo Sim: **64.9%** (vs 39.4 / 29.8 / 27.6)
- AutomationBench: **51.4%** (vs 42.5 / 41.4 / 53.9 Carbon); AA-Briefcase v1.1: **66.1% rubric / 1785 Elo** (vs 1800 Opus 5.5 / 1669 Fable 5.1 / 1569 Astra / 1611 Carbon)
- Terminal-Bench-Science 0.1: **74.6%** (vs 58.7 / 68.1 / 64.8); Fermat's Last Theorem formalization: 1,000-agent team completed it in **30 hours** vs Opus 5.5 ~26% at 30h

Reasoning / knowledge:

- HLE (with tools): **74.2%** (vs 67.7 Opus 5.5 / 65.6 Fable 5.1 / 57.2 Astra)
- Chartography (no tools): **73.4%** (vs 64.4 / 44.8 / 71.0 / 72.5)
- Multidisciplinary/science applications: two open black-hole physics problems solved; three working electronic devices designed end-to-end; 1,000+ subagents built a booting OS prototype in 8 days (all vendor-reported case studies)

Coding / cybersecurity:

- FrontierSWE v2: **69.9%** (vs 62.3 / 65.5 / 61.2); CVE Rediscovery 89.6% and CyScenarioBench 76.3% are **Mythos 5.2 rows** (Fable 5.2's safeguards block most cyber tasks; refused requests fall back to Opus 5/4.8 with a fallback-credit token)
- Developer quotes: Vercel reports multi-week projects finished in days; Shopify/Datadog/Unity/Uber/Oracle/iGent/Snowflake/Cognition early-access statements (vendor blog)

Long context:

- 1M-token window; no MRCR/RULER retrieval row published for Fable 5.2 at check time

### Normalized scores (1–100)

- **Tool use: 93/100.** OSWorld 2.1 89.3%, WANDR 82.1%, RLI 41.3% and AA-Briefcase 1785 Elo sit above Opus 5.5 on most agentic rows; capped by all rows being vendor-run pending independent reproduction.
- **Reasoning: 93/100.** HLE-with-tools 74.2% and Terminal-Bench-Science 74.6% are frontier-leading, with the science case studies as supporting color; capped by vendor-only sourcing until AA/BenchLM publish.
- **Context window: 96/100.** 1M/128K is the ≥1M tier (95–100); no measured ≥98%-at-512K retrieval row yet.
- **Multimodal: 80/100.** Text + image in / text out with Chartography 73.4% (no tools) — strong visual chart reasoning; no audio/video in, no non-text out.
- **Coding: 96/100.** FrontierCode 2.0 49.1% (highest of any released model tested by Anthropic) and FrontierSWE v2 69.9% clear the frontier anchors; capped only by vendor-only sourcing at launch.
- **Cost efficiency: 47/100.** $8/$40 per 1M is premium frontier pricing (20% below Fable 5.1); Fast mode at $16/$80 trades cost for speed; no free tier.
- **Overall Score: 92/100.** (93 + 93 + 96 + 80 + 96) / 5 = 91.6 → 92. Best fit: the most ambitious agentic coding, hardware/science and long-horizon technical work where per-task quality dominates cost — start from Opus 5.5 for routine work and escalate here.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-11-10
- Method: public internet research (official Anthropic launch post 2026-11-09, Claude Platform docs, AWS Bedrock model card, press coverage incl. CNBC/InfoWorld/Mashable); vendor-run rows labelled; independent tracker rows not yet published at check time. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Anthropic — Introducing Claude Fable 5.2 and Claude Mythos 5.2](https://www.anthropic.com/claude-fable-and-mythos-5-2)
  - [Claude Platform Docs — Fable 5.2 overview](https://platform.claude.com/docs/en/models/fable-5-2/overview)
  - [AWS Bedrock — Claude Fable 5.2 model card](https://docs.aws.amazon.com/bedrock/latest/userguide/model-card-anthropic-claude-fable-5-2.html)
  - [CNBC — Anthropic releases Fable 5.2 and Mythos 5.2](https://www.cnbc.com/2026/11/09/anthropic-claude-fable-5-2-mythos-5-2.html)
  - [InfoWorld — coding gains and lower prices](https://www.infoworld.com/article/4246681/anthropic-unveils-claude-fable-5-2-mythos-5-2-with-coding-gains-and-lower-prices.html)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
