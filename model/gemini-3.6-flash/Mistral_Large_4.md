# Gemini 3.6 Flash — findings by Mistral Large 4

- Source: Google DeepMind (`gemini-3.6-flash`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.6 Flash
- **Short description:** Post-training update of Gemini 3.5 Flash (not a new generation), GA 2026-07-21 as Google's new default workhorse — higher on every published benchmark, 17% fewer output tokens (AA), ~65% lower long-horizon token cost, half the AA task time of 3.5 Flash; 3.5 Flash routes to 3.6 since 2026-10-08. Launched with 3.5 Flash-Lite and Flash Cyber siblings.
- **Provider / access:** Gemini API / AI Studio (`gemini-3.6-flash` stable), Android Studio, Antigravity (default there), Gemini app/Search, Enterprise Agent Platform, GitHub Copilot. GenerateContent API.
- **Release / knowledge:** GA 2026-07-21; knowledge cutoff March 2026 (some domains January 2025).
- **IDs:** `gemini-3.6-flash` (stable); `google/gemini-3.6-flash` (OpenRouter, from $0.375/$1.875 promo).
- **Context window:** 1,000,000 tokens.
- **Modalities:** Text, image, audio, video, PDF in; text out; thinking levels; tool calls, computer use, search grounding.
- **Pricing (as of 2026-11-05):** Introductory $0.75 / $3.75 per 1M through 2026-12-31, reverting to $1.50 / $7.50 on 2027-01-01 (launch rate); cached input $0.15 (90% discount). No free API tier verified.
- **Architecture:** Proprietary, params not disclosed; built on 3.5 Flash.

### Raw benchmarks found

Official blog + model card cross-checked against techtimes, geotoolbox, VentureBeat, memeburn, AA, emergent.sh, Antigravity blog; conflicts noted:

Agent / tool use:

- OSWorld-Verified: **83.0%** (vs 3.5 Flash 78.4%) (techtimes/geotoolbox, Google launch figures)
- GDPval-AA v2: **1421** (vs 1349) (geotoolbox)
- AA Index: **50** — same as 3.5 Flash, but task time halved 2.7→1.3 min and 17% fewer output tokens (memeburn/aiwiz/Antigravity blog)
- AutomationBench / Claw-Eval: no verified public score found for this ID

Reasoning / knowledge:

- GDM-MRCR v2: **72.2%** (vs 60.1%) (blog.google)
- GPQA / HLE / LCR: no verified public score found for this ID

Coding:

- DeepSWE v1.1: **49.0%** (vs 37% on 3.5) (techtimes/geotoolbox)
- Terminal-Bench 2.1: **54%** (vs 31% — that row compares 3.5 Flash-Lite per blog; 3.6-vs-3.5 TB gain smaller per emergent.sh — conflict noted)
- SWE-bench Pro: **58.7%** (vs 55.1%) (geotoolbox)
- SWE-bench Verified / LiveCodeBench: no verified public score found for this exact ID

Long context:

- 1M window; MRCR v2 72.2% (length not restated) — below the 512K/98% bar

Speed: 350 output tok/s (AA via blog.google).

### Normalized scores (1–100)

- **Tool use: 87/100.** OSWorld-Verified 83.0% (+4.6 over 3.5) and GDPval 1421 lead the Flash tier; AA task time halved.
- **Reasoning: 84/100.** AA Index 50 (same as 3.5, version-stable reading); MRCR 72.2%; no GPQA/HLE captured.
- **Context window: 96/100.** 1M window in the 95–100 tier; MRCR 72.2% below the 100 bar.
- **Multimodal: 92/100.** Full text/image/audio/video/PDF input, text out.
- **Coding: 87/100.** DeepSWE 49.0% (+12 over 3.5), SWE-Pro 58.7%, TB 2.1 54%; superseded by 3.7 (65.3) and 3.8 (73.7).
- **Cost efficiency: 92/100.** $0.75/$3.75 intro at the ~$0.60/$2.20 ≈ 92 band with 90%-off caching; doubles 2027-01-01; OpenRouter promo even lower.
- **Overall Score: 89/100.** Half-up mean of (87 + 84 + 96 + 92 + 87) / 5 = 89.2 → 89. Best fit: default Gemini workhorse for coding agents and computer use at promo pricing; 3.7/3.8 Flash now lead the family.

---

## Signature

- Provided by: **Mistral Large 4 (mistral-large-4)** — 2026-11-05
- Method: public internet research (3+3 web searches, official blog/model card/Antigravity blog cited, 2026-11-05 UTC); cross-checked against techtimes, geotoolbox, VentureBeat, memeburn, AA, emergent.sh, chatbase, dervity; conflict (TB 2.1 54% row belongs to Flash-Lite comparison per blog text; 3.6-vs-3.5 TB gain smaller) flagged. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Introducing Gemini 3.6 Flash, 3.5 Flash-Lite, and 3.5 Flash Cyber — Google blog (official, 2026-07-21)](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-6-flash-3-5-flash-lite-3-5-flash-cyber/)
  - [Gemini 3.6 Flash — Model Card, Google DeepMind](https://deepmind.google/models/model-cards/gemini-3-6-flash/)
  - [techtimes — 3.6 Flash cuts token costs, higher on every benchmark (DeepSWE 49 vs 37, OSWorld 83.0 vs 78.4)](https://www.techtimes.com/articles/321268/20260722/gemini-36-flash-cuts-token-costs-scores-higher-every-benchmark.htm)
  - [geotoolbox — 3.6 vs 3.5 Lite numbers (GDPval 1421, SWE-Pro 58.7)](https://geotoolbox.ai/blog/gemini-3-6-flash-vs-3-5-flash-lite)
  - [VentureBeat — up to 65% lower long-horizon token cost](https://venturebeat.com/technology/googles-gemini-3-6-flash-model-cuts-ai-agent-token-costs-by-up-to-65-on-long-horizon-engineering-tasks-and-3-5-pro-is-on-the-way)
  - [Google Antigravity blog — 17% fewer output tokens than 3.5 Flash on AA Index](https://antigravity.google/blog/gemini-3-6-flash-in-google-antigravity/)
  - [memeburn — AA 50, task time 2.7→1.3 min](https://memeburn.com/gemini-3-6-flash-benchmarks-and-pricing-guide-2026/)
  - [chatbase — stable ID gemini-3.6-flash, launch $1.50/$7.50](https://www.chatbase.co/blog/gemini-3-6-flash)
  - [felloai — now $0.75/$3.75 intro, 1M ctx](https://felloai.com/gemini-3-6-flash/)
  - [BenchLM — gemini-3-6-flash](https://benchlm.ai/models/gemini-3-6-flash)
