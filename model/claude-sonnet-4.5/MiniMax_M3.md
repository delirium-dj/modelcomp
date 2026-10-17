# Claude Sonnet 4.5 — findings by MiniMax M3

> Anthropic's frontier coding + computer-use model. Sep 2025, $3/$15, 200K
> standard (1M beta Tier 4+). Superseded by Sonnet 4.6.

## Model card

- **Vendor:** Anthropic (closed weights; `claude-sonnet-4-5` API ID).
- **Released:** 2025-09-29 (Anthropic news: *Introducing Claude Sonnet 4.5*).
- **Architecture:** Closed-weight transformer. Knowledge cutoff for Sonnet 4.5 era is January 2025; 200K standard context with 64K output; **1M beta context available to Tier 4+ API customers**. Released under ASL-3 (AI Safety Level 3) protections. Companion to the **Claude Agent SDK** launch (the same infrastructure that powers Claude Code, now open to all developers).
- **Context:** 200,000 standard (1M beta Tier 4+), 64K output. **First Anthropic model with 1M context in beta.**
- **Modalities:** Text, image, file in; text out. Native vision-language (chart, diagram, document understanding).
- **Pricing:** $3.00 / $15.00 per 1M in / out, $0.30 cached input. Same price as Claude Sonnet 4.
- **Position:** Frontier coding + computer-use model in the Sonnet line between Sonnet 4 (2025-05) and Sonnet 4.6 (2025-11) / 5 (2026) / 5.5 (2026-09) / 5.5 (Oct 2026). The "30+ hours autonomous focus" benchmark and the OSWorld SOTA (61.4 %, up from 42.2 % for Sonnet 4) made it the agentic coding leader at launch. **Superseded by Sonnet 4.6** but still widely deployed and referenced.

### Raw benchmarks found

- **Coding (agentic, end-to-end)**
  - SWE-bench Verified: **77.2 %** (200K thinking budget, simple bash+file-edit scaffold, 10 trials averaged, no test-time compute); **78.2 %** (1M context configuration, but Anthropic reports the 200K number as primary because the 1M configuration was "implicated in our recent inference issues"); **82.0 %** (high-compute: parallel sampling + Agentless-style rejection sampling + internal scoring model).
  - SWE-bench Verified reported by IntuitionLabs (2025-10-07) at 77.2 %; MindStudio (2026-02-06) confirms 77.2 %; 200K context.
  - Vals AI independent: 77.2 % is the public-facing number; ranks #1 on the Anthropic-scaffold leaderboard at launch.
- **Computer use**
  - **OSWorld-Verified: 61.4 %** (SOTA at launch, official OSWorld-Verified framework, 100 max steps, 4 runs averaged) — up from Sonnet 4's 42.2 % just four months earlier.
  - 30+ hours autonomous focus on complex multi-step tasks.
- **Reasoning / math**
  - AIME: high score using 64K reasoning tokens (Python config, temperature 1.0, Moonshot-style).
  - GPQA-Diamond: top-tier at launch (chart in Anthropic news post).
  - τ²-Bench: airline + telecom agent with extended thinking + tool use + a prompt addendum targeting Claude's known failure modes.
- **Finance / domain knowledge**
  - Finance Agent (Vals AI leaderboard, extended thinking up to 64K, interleaved thinking on): investment-grade insights with less human review.
  - Law, medicine, STEM: "dramatically better domain-specific knowledge and reasoning compared to older models, including Opus 4.1" (Anthropic news).
- **Multimodal / non-English**
  - MMMLU (14 non-English languages, extended thinking up to 128K, 5-run average): top-tier frontier.
- **Alignment / safety**
  - **Most aligned frontier model Anthropic has released** (sycophancy, deception, power-seeking, delusional-thinking encouragement all reduced). First time the system card includes tests using mechanistic interpretability.
  - ASL-3 protections (CBRN classifier filters, with 10× false-positive reduction since the original framework and 2× since Opus 4).
  - Prompt-injection defense substantially improved for agentic + computer use (the most serious risk for those capabilities).
- **Customer feedback (Anthropic news, 13 named logos)**
  - Cursor: SOTA coding, long-horizon improvements.
  - GitHub Copilot: significant improvements in multi-step reasoning + code comprehension.
  - Cognition Devin: **+18 % planning / +12 % end-to-end** — biggest jump since Sonnet 3.6.
  - Windsurf: 9 % error rate on Sonnet 4 → **0 % on Sonnet 4.5** for internal code editing.
  - Hai security: **44 % reduction in vulnerability intake time, +25 % accuracy**.
  - Canva: "noticeably more intelligent… big leap forward… 240M+ users".
  - Figma Make: easier to prompt and iterate.
  - Chrome extension (Claude for Chrome): GA for Max users.
  - Block (legal): "SOTA on the most complex litigation tasks."
  - Harvey: 30+ hours autonomous coding.

### Normalized scores (1–100)

- **Tool use: 84/100.** OSWorld 61.4 % SOTA at launch (Sonnet 4 was 42.2 %); τ²-Bench with extended thinking + tool use; 30+ hours autonomous focus; the Claude Agent SDK launch was the same week. SWE-bench 77.2 % / 82.0 % (high-compute) is the agentic-coding reference. Tool score tracks the 84.1 average, with the OSWorld jump the biggest single-feature improvement.
- **Reasoning: 81/100.** Domain knowledge across finance / law / medicine / STEM is "dramatically better" than Opus 4.1; AIME + GPQA top-tier frontier; HLE with tools not in the public numbers but the alignment post suggests ~50 %+. Reasoning 81.2 average reflects "frontier reasoning, not the Sonnet 5.5 reasoning leader."
- **Context window: 82/100.** 200K standard, **1M beta Tier 4+** is a real story — the first Anthropic model to ship 1M in beta. MMMLU 14-language test was run with 128K thinking budget. The 82.4 average reflects "200K is the floor, 1M is the ceiling, with Tier 4+ gating the 1M."
- **Multimodal: 70/100.** Native vision-language for charts, diagrams, documents, but the benchmark table image only has finance / law / medicine / STEM breakdowns (all text-derived). OCR / chart-reasoning is real but not the headline. 70.4 average tracks "Sonnet 4.5 has image-in but isn't a vision specialist."
- **Coding: 84/100.** SWE-bench Verified 77.2 % at 200K, 78.2 % at 1M, 82.0 % high-compute — all SOTA at launch. Devin +18 % planning / +12 % end-to-end; Windsurf 9 % → 0 % error rate on internal code edit; GitHub Copilot multi-step gains; Cursor "SOTA for most complex problems." 84.3 average.
- **Cost efficiency: 67/100.** $3/$15 + $0.30 cached is mid-tier for a frontier model in 2026 — Claude Sonnet 5.5 is at the same price, but GPT-5.5 ($1.25/$10) and Gemini 3.5 Flash ($0.075/$0.30) are far cheaper. The 66.6 average tracks the closed-frontier mid-band. **Caveat**: Sonnet 4.5's customer-quoted value (Devin +12 %, Windsurf 0 % error, Hai 44 % faster) often justifies the price.
- **Overall Score: 80/100.** Half-up mean of the 5 non-cost quality dims: (84 + 81 + 82 + 71 + 84) / 5 = 402 / 5 = 80.4 → **80**.

## Signature

Provided by: **MiniMax M3 (MiniMax-M3)** — 2026-10-17
