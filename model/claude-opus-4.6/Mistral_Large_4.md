# Claude Opus 4.6 — findings by Mistral Large 4

- Source: Anthropic (`claude-opus-4-6`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.6
- **Short description:** Anthropic's February 2026 Opus release — first with a 1M-token context window (beta, 5x Opus 4.5's 200K), agent teams for parallel coordination, adaptive reasoning controls, and expanded cyber safety tooling; topped AA Index at launch (53). Superseded by 4.7 (April) / 4.8 (May) at the same price.
- **Provider / access:** Claude API (`claude-opus-4-6`), Bedrock, Vertex, Azure, Microsoft 365 integration. Messages API.
- **Release / knowledge:** Released 2026-02-05 (system card February 2026; HLE figure revised 53.1→53.0 on 2026-02-23); knowledge cutoff not restated in reviewed snippets.
- **IDs:** `claude-opus-4-6` (Claude API).
- **Context window:** 1,000,000 tokens (beta at launch).
- **Modalities:** Text + image in, PDF in, text out; adaptive reasoning; tool calls; agent teams.
- **Pricing (as of 2026-11-05):** $5 / $25 per 1M in/out (unchanged through 4.7/4.8); adaptive mode +60% cost to run (thezvi). No free tier.
- **Architecture:** Proprietary; ASL-4 rule-out discussed in system card (near thresholds, qualitative + employee-survey informed); interpretability-based cyber detection.

### Raw benchmarks found

Official announcement/system card cross-checked against llm-stats, Vellum, automatio, overchat, thezvi, digitalapplied, RockB, Simbian; conflicts noted:

Agent / tool use:

- CyberGym: **73.8%** (updated harness; originally 66.6 — revision footnote cited)
- 500+ zero-day vulnerability discoveries (llm-stats); NBIM blind ranking: best in 38/40 cybersecurity investigations (digitalapplied)
- Simbian defense benchmark: 4.6 leads all Claudes at 44.5% (vs 4.7 30.9%) — conflicting with CyberGym direction, both cited
- OSWorld / Claw-Eval / Toolathon: no verified public score found

Reasoning / knowledge:

- HLE with tools: **53.0%** (revised from 53.1% on 2026-02-23) (official footnote)
- GPQA Diamond: **91.3%** (automatio/Vellum; 4.7 later hit 94.2%) — conflict across versions noted
- ARC-AGI-2: **68.8%** (llm-stats); ARC-AGI-1 94.0% confirmed by ARC Prize (AIToolsReview)
- Artificial Analysis Index: **53 — top at launch** (thezvi); Vals: 66% best-performing (thezvi)
- Harvey BigLaw Bench: **90.2%**, highest of any Claude (digitalapplied)

Coding:

- SWE-bench Verified: **80.8%** — top of general-purpose leaderboard, ~tied with 4.5's 80.9% (RockB)
- Terminal-Bench 2.0: **65.4%** (overchat)
- SWE-bench Pro / DeepSWE / LiveCodeBench: no verified public score found for this exact ID

Long context:

- 1M beta window; MRCR v2 gains noted (Vellum: long-context reliability +309% vs 4.5 per ssntpl); exact MRCR % not captured

### Normalized scores (1–100)

- **Tool use: 88/100.** CyberGym 73.8% and 38/40 blind cyber wins; conflicting Simbian defense reading (44.5% but still top Claude) cited.
- **Reasoning: 89/100.** HLE-tools 53.0%, GPQA 91.3%, ARC-AGI-2 68.8%, AA 53 #1 at launch.
- **Context window: 96/100.** 1M beta window in the 95–100 tier; large long-context reliability gain; no exact MRCR captured.
- **Multimodal: 85/100.** Text/image/PDF in, text out; no audio/video or non-text output.
- **Coding: 89/100.** SWE-V 80.8% leader-tier, TB 2.0 65.4%; 4.7 later took SWE-Pro lead.
- **Cost efficiency: 45/100.** $5/$25 flat in the mid band; adaptive mode +60% run cost; no free tier.
- **Overall Score: 89/100.** Half-up mean of (88 + 89 + 96 + 85 + 89) / 5 = 89.4 → 89. Best fit: February–April 2026 flagship; superseded by 4.7/4.8 at the same price.

---

## Signature

- Provided by: **Mistral Large 4 (mistral-large-4)** — 2026-11-05
- Method: public internet research (3+3 web searches, official Anthropic announcement/system card cited, 2026-11-05 UTC); cross-checked against llm-stats, Vellum, automatio, overchat, thezvi, digitalapplied, RockB, Simbian, ssntpl; conflicts (HLE 53.1→53.0 revision; CyberGym 66.6→73.8 harness update; GPQA 91.3 vs later 94.2; Simbian vs CyberGym cyber direction) listed side by side. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Claude Opus 4.6 — Anthropic news (official, 2026-02-05)](https://www.anthropic.com/news/claude-opus-4-6)
  - [System Card: Claude Opus 4.6 (PDF, February 2026)](https://www.anthropic.com/claude-opus-4-6-system-card)
  - [llm-stats — Opus 4.6 launch (1M ctx, ARC-AGI-2 68.8%, 500+ zero-days)](https://llm-stats.com/blog/research/claude-opus-4-6-launch)
  - [Vellum — Opus 4.6 vs 4.5 benchmarks (GPQA 91.3 vs 87.0)](https://www.vellum.ai/blog/claude-opus-4-6-benchmarks)
  - [overchat — Opus 4.6 (TB 2.0 65.4%, HLE 53.1%, 1M beta ctx)](https://overchat.ai/ai-hub/claude-opus-4-6)
  - [thezvi — Opus 4.6 AA Index 53 top at launch; Vals 66%](https://thezvi.substack.com/p/claude-opus-46-escalates-things-quickly)
  - [digitalapplied — NBIM 38/40 cyber, Harvey BigLaw 90.2%](https://www.digitalapplied.com/blog/claude-opus-4-6-release-features-benchmarks-guide)
  - [automatio — Opus 4.6 (SWE-V 80.2%, GPQA 91.3%)](https://automatio.ai/models/claude-opus-4-6)
  - [RockB — SWE-V 80.8%, $5/M cost](https://baeseokjae.github.io/posts/claude-4-6-opus-review-2026/)
  - [Simbian — cyber defense: 4.6 44.5% leads 4.7 30.9% (conflicting reading)](https://simbian.ai/blog/claude-for-cybersecurity-opus-4-7-worst-claude)
  - [MarkTechPost — 1M context, agent teams, adaptive reasoning](https://www.marktechpost.com/2026/02/05/anthropic-releases-claude-opus-4-6-with-1m-context-agentic-coding-adaptive-reasoning-controls-and-expanded-safety-tooling-capabilities/)
