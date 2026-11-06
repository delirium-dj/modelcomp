# Claude Sonnet 5 — findings by Mistral Large 4

- Source: Anthropic (`claude-sonnet-5`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5
- **Short description:** Anthropic's "most agentic Sonnet yet" (2026-06-30) — pulled Opus-like coding, tool use and browser work down to Sonnet pricing; default on Free/Pro tiers of claude.ai; replaced by Sonnet 5.5 on 2026-09-28 at the same price.
- **Provider / access:** Claude API / Platform (`claude-sonnet-5`), Bedrock, Google Cloud (both), Microsoft Foundry, Claude Code/Cowork; 300K output via `output-300k-2026-03-24` beta header on Batches API.
- **Release / knowledge:** Released 2026-06-30 (system card same day); knowledge cutoff not restated in reviewed snippets.
- **IDs:** `claude-sonnet-5` (Claude API).
- **Context window:** 1,000,000 tokens; 128K max output (300K beta).
- **Modalities:** Text + image in, PDF in, text out; adaptive thinking default high; tool calls; computer use.
- **Pricing (as of 2026-11-05):** $2 / $10 per 1M at launch; sources conflict on permanence — DEV says intro through 2026-08-31 then $3/$15, codersera says $2/$10 permanent, emergent compares at $3/$15 — all cited; new tokenizer maps input to 1.0–1.35x tokens (billing caveat). No free API tier (Free-tier claude.ai access is plan-based).
- **Architecture:** Proprietary; updated tokenizer (like Opus 4.7's); cyber safeguards scored 0 with default mitigations (system card, Mozilla collab eval).

### Raw benchmarks found

Official announcement/system card cross-checked against morphllm, cosmicjs, buildfastwithai, codersera, BenchLM, theairankings; conflicts noted:

Agent / tool use:

- Strong agentic/tool-use gains over Sonnet 4.6 per launch (TechCrunch); exact tool-bench % not captured
- OSWorld / AutomationBench / Claw-Eval: no verified public score found for this ID

Reasoning / knowledge:

- Edges Opus 4.8 on GPQA-AAA v2 per DEV guide; exact % not captured
- AA Intelligence Index v4.3.2 score referenced by codersera; value not captured
- HLE / LCR / CritPt: no verified public score found

Coding:

- SWE-bench Verified: **85.2%** (morphllm/buildfastwithai) vs **72.7%** (cosmicjs, harness difference — conflicting, both cited); Sonnet 4.6 was 62.3–79.4% across sources
- SWE-bench Pro: **63.2%** — 6 pts behind Opus 4.8's 69.2%, ~4.5 ahead of GLM-5.2's 62.1% (buildfastwithai)
- Terminal-Bench / DeepSWE / LiveCodeBench: no verified public score found for this exact ID

Long context:

- 1M / 128K (300K beta); no verified MRCR/RULER score found for this ID

### Normalized scores (1–100)

- **Tool use: 88/100.** "Most agentic Sonnet" positioning with big tool-use gains over 4.6; no per-benchmark tool rows captured.
- **Reasoning: 85/100.** GPQA-AAA v2 edge over Opus 4.8 (DEV); no HLE/AA value captured.
- **Context window: 96/100.** 1M / 128K (300K beta) in the 95–100 tier; no verified 512K+ retrieval; tokenizer +0–35% tokens noted.
- **Multimodal: 85/100.** Text/image/PDF in, text out; no audio/video or non-text output.
- **Coding: 89/100.** SWE-V 72.7–85.2% (harness conflict cited) and SWE-Pro 63.2% — big jump over 4.6.
- **Cost efficiency: 75/100.** $2/$10 launch (permanent vs reverting to $3/$15 — conflict cited); between the $1.25/$4.25 (~88) and $3/$15 (~60) bands; tokenizer uplift caveat.
- **Overall Score: 89/100.** Half-up mean of (88 + 85 + 96 + 85 + 89) / 5 = 88.6 → 89. Best fit: June–September 2026 default workhorse at $2/$10; superseded by Sonnet 5.5 (TB 4.0 70.6% vs its 10.3%).

---

## Signature

- Provided by: **Mistral Large 4 (mistral-large-4)** — 2026-11-05
- Method: public internet research (3+3 web searches, official Anthropic announcement/system card cited, 2026-11-05 UTC); cross-checked against morphllm, cosmicjs, buildfastwithai, codersera, BenchLM, theairankings, TechCrunch, DEV; conflicts (SWE-V 85.2 vs 72.7; pricing $2/$10 permanent vs intro-then-$3/$15; 1.0–1.35x tokenizer) listed side by side. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Introducing Claude Sonnet 5 — Anthropic news (official, 2026-06-30, $2/$10)](https://www.anthropic.com/news/claude-sonnet-5)
  - [System Card: Claude Sonnet 5 (2026-06-30)](https://www.anthropic.com/claude-sonnet-5-system-card)
  - [Claude Sonnet 5 — Claude Platform Docs (300K beta output header)](https://platform.claude.com/docs/en/models/sonnet-5/overview)
  - [morphllm — Claude benchmarks 2026 (Sonnet 5 SWE-V 85.2%)](https://www.morphllm.com/claude-benchmarks)
  - [cosmicjs — Sonnet 5 benchmarks (SWE-V 72.7%, harness-conflicting)](https://www.cosmicjs.com/blog/claude-sonnet-5-benchmarks-pricing-developers)
  - [buildfastwithai — Sonnet 5 review (SWE-Pro 63.2% vs Opus 4.8 69.2%)](https://www.buildfastwithai.com/blogs/claude-sonnet-5-review-benchmarks-pricing-2026)
  - [codersera — Sonnet 5 launch guide ($2/$10 permanent claim, AA v4.3.2)](https://codersera.com/blog/claude-sonnet-5-launch-guide-2026/)
  - [TechCrunch — Sonnet 5 as cheaper agent model (2026-06-30)](https://techcrunch.com/2026/06/30/anthropic-launches-claude-sonnet-5-as-a-cheaper-way-to-run-agents/)
  - [theairankings — Sonnet 5 (default Free/Pro, under Opus 5)](https://theairankings.com/anthropic/claude-sonnet-5/)
  - [emergent.sh — Sonnet 4.6 vs 5 (same $3/$15, +30% tokenizer tokens)](https://emergent.sh/learn/claude-sonnet-4-6-vs-sonnet-5)
  - [BenchLM — claude-sonnet-5](https://benchlm.ai/models/claude-sonnet-5)
