# GPT-5.5 Pro — findings by Mistral Large 4

- Source: OpenAI (`gpt-5.5-pro`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.5 Pro
- **Short description:** The highest-accuracy reasoning variant of OpenAI's GPT-5.5 family (codename "Spud", released 2026-04-23 alongside GPT-5.5 and GPT-5.5 Thinking) — designed for tough problems where requests may take several minutes; API `gpt-5.5-pro`, Responses API + Batch API.
- **Provider / access:** OpenAI API (`gpt-5.5-pro`), ChatGPT Pro-tier surfaces; Responses API with multi-turn support. Not available to free-tier users.
- **Release / knowledge:** Released 2026-04-23 (system card updated 2026-04-24); first fully retrained base since GPT-4.5. Knowledge cutoff not restated in reviewed snippets.
- **IDs:** `gpt-5.5-pro` (OpenAI API); base `gpt-5.5`.
- **Context window:** 1,000,000 tokens.
- **Modalities:** Text + vision (image) in, text out (GPT-5 family stack); reasoning effort levels xhigh/high/medium/low/non-reasoning; tool calling, computer use.
- **Pricing (as of 2026-11-05):** Base GPT-5.5 $5 / $30 per 1M with $0.50/M cached input (BenchLM/aireiter; a tech-insider snippet cites $5 input only — partial); Pro tier is the premium accuracy tier at ~$30/M (RockB enterprise guide, single-source — flagged). No free tier.
- **Architecture:** Proprietary, params not disclosed; full retrain.

### Raw benchmarks found

Official launch/system card cross-checked against Wikipedia, Kingy, Appwrite, tech-insider, BenchLM, Vellum, RockB; conflicts noted:

Agent / tool use:

- Terminal-Bench 2.0: **82.7%** (base 5.5; Wikipedia/tech-insider)
- OSWorld-Verified: **78.7%** — ahead of Opus 4.7's 78.0% by <1pt (Appwrite)
- GDPval win-or-tie rate: **84.9%** — +17.6 pts over Gemini 3.1 Pro (Appwrite)
- MCP Atlas (Scale AI): reported in system card; exact % not captured
- Claw-Eval / AutomationBench: no verified public score found for this ID

Reasoning / knowledge:

- FrontierMath Tier 4: **39.6%** for 5.5 Pro (base 5.5: 35.4%; 5.4 Pro 38.0%; 5.4 base 27.1%) — clears all competitors on T4 (Kingy/Appwrite); Tier 1–3: 51.7% (base)
- GPQA Diamond: strong per RockB (exact % not captured); HLE: no verified number cited
- Artificial Analysis: covered in index comparisons; exact Pro reading not captured

Coding:

- SWE-bench Pro: **58.6%** (base; Opus 4.7 still led at 64.3% in April 2026) (tech-insider/Appwrite)
- SWE-bench Verified / LiveCodeBench / DeepSWE: no verified public score found for gpt-5.5-pro specifically

Long context:

- 1M window (official); no verified MRCR/RULER score found for this ID

### Normalized scores (1–100)

- **Tool use: 89/100.** TB 2.0 82.7% and OSWorld 78.7% (edge over Opus 4.7) are frontier-tier; GDPval 84.9% win-rate strong; no Claw-Eval/AutomationBench.
- **Reasoning: 88/100.** FrontierMath T4 39.6% (Pro) leads the April 2026 field; GPQA strong; no HLE number captured.
- **Context window: 96/100.** 1M window in the 95–100 tier; no verified ≥98% retrieval at 512K+.
- **Multimodal: 80/100.** Text + vision in, text out; no audio/video or non-text output.
- **Coding: 88/100.** TB 2.0 82.7% excellent, but SWE-bench Pro 58.6% trailed Opus 4.7 at launch; no SWE-V/DeepSWE published for this ID.
- **Cost efficiency: 28/100.** Pro premium tier ~$30/M output (base $5/$30) sits at/below the $10/$50 ≈ 30 band; no free tier; Batch API helps.
- **Overall Score: 88/100.** Half-up mean of (89 + 88 + 96 + 80 + 88) / 5 = 88.2 → 88. Best fit: April–June 2026 accuracy-tier pick for hard reasoning; superseded by GPT-5.6 Sol/GPT-6 line at lower prices.

---

## Signature

- Provided by: **Mistral Large 4 (mistral-large-4)** — 2026-11-05
- Method: public internet research (3 web searches, official OpenAI pages/system card cited, 2026-11-05 UTC); cross-checked against Wikipedia, Kingy, Appwrite, tech-insider, BenchLM, Vellum, RockB, aireiter; pricing conflict ($5/$30 base per BenchLM/aireiter vs $5 input-only snippet; Pro ~$30/M single-source) flagged, not resolved by invention. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Introducing GPT-5.5 — OpenAI (official, 2026-04-23)](https://openai.com/index/introducing-gpt-5-5/)
  - [GPT-5.5 System Card — OpenAI](https://openai.com/index/gpt-5-5-system-card/)
  - [GPT-5.5 Pro Model — OpenAI API docs](https://developers.openai.com/api/docs/models/gpt-5.5-pro)
  - [Wikipedia — GPT-5.5 (82.7% TB 2.0, FM T1–3 51.7%, T4 35.4%)](https://en.wikipedia.org/wiki/GPT-5.5)
  - [Kingy AI — 5.5 benchmarks (Pro FM T4 39.6% vs 5.4 Pro 38.0%)](https://kingy.ai/news/gpt-5-5-benchmarks-revealed-the-9-numbers-that-prove-chatgpt-5-5-just-changed-the-ai-race/)
  - [Appwrite — GPT-5.5 launch (SWE-Pro 58.6%, OSWorld 78.7%, GDPval 84.9%)](https://appwrite.io/blog/post/gpt-5-5-launch)
  - [BenchLM — gpt-5.5 ($5/$30, cached $0.50, 1M ctx, #21/229 at 69)](https://benchlm.ai/models/gpt-5-5)
  - [RockB — GPT-5.5 Pro enterprise guide (~$30/M accuracy tier, single-source)](https://baeseokjae.github.io/posts/gpt-5-5-pro-enterprise-api-guide-2026/)
  - [tech-insider — 5.5 launch ($5 input, TB 82.7%)](https://tech-insider.org/gpt-5-5-launch-openai-april-23-terminal-bench-2026/)
  - [aireiter — 5.5 vs 5.6 Sol identical $5/$30 rate card](https://aireiter.com/blog/gpt-5-6-sol-vs-gpt-5-5)
