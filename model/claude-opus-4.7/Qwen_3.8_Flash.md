# Claude Opus 4.7 — findings by Qwen 3.8 Flash

- Source: Anthropic (`claude-opus-4-7`), cross-checked against Artificial Analysis, llm-stats, Vellum
- Date: 2026-10-17 (UTC); second pass 2026-11-03 (UTC) — AA v5 rescale + pricing reconfirmed + generational slide vs Opus 5.x noted, bands unchanged
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.7
- **Short description:** Anthropic's flagship reasoning and agentic coding model (Apr 2026), 1M context / 128K output, same $5/$25 price as Opus 4.6. Direct upgrade line (not a new tier); tops GDPval-AA and ties for #1 on the AA Intelligence Index.
- **Provider / access:** Anthropic Claude API (`claude-opus-4-7`, Messages API), Amazon Bedrock, Google Vertex AI, Microsoft Foundry; also Claude App / Claude Code / Claude Cowork.
- **Release / knowledge:** 2026-04-16 release; knowledge cutoff not announced.
- **IDs:** `anthropic/claude-opus-4-7` (gateway form), `claude-opus-4-7` (Claude API); no Free ID exists.
- **Context window:** 1,000,000 tokens input / 128,000 max output (verified via Anthropic launch post and Artificial Analysis; long prompts >200K billed at premium rate).
- **Modalities:** text + image in (images up to 2,576 px long edge, ~3.75 MP — 3.3× prior Claude resolution); text out; reasoning yes (adaptive reasoning only — extended thinking fully removed); tool calls yes; JSON mode not separately verified.
- **Architecture:** proprietary.
- **Pricing (as of 2026-10-17):** $5.00 in / $25.00 out per 1M (≤200K prompts); >200K prompts $10.00 in / $37.50 out. Updated tokenizer maps same text to ~1.0–1.35× more tokens than Opus 4.6 (cost caveat).

### Raw benchmarks found

> Numbers below triangulated across three independent write-ups: Anthropic launch
> announcement (self-reported), llm-stats launch analysis, and Artificial Analysis
> independent re-runs (Adaptive Reasoning, Max Effort). Vellum's comparison confirms
> SWE-bench Pro 64.3%.

Agent / tool use:

- GDPval-AA (**#1 overall**): **1,753 Elo** (Artificial Analysis, +79 Elo over Sonnet 4.6 / GPT-5.4 at 1,674/1,673)
- MCP-Atlas: **77.3%** (Anthropic; +14.6 pts over Opus 4.6 — largest agentic gain)
- OSWorld-Verified (computer use): **78.0%** (Anthropic; +5.3 pts)
- Terminal-Bench 2.0: **69.4%** (Anthropic; +4.0 pts); TerminalBench Hard +5.3 pts vs 4.6 (AA)
- Finance Agent: **64.4%** (Anthropic; state-of-the-art at release)
- BrowseComp: **79.3%** (Anthropic; headline regression −4.7 pts, harness-sensitive — 4.6's 84.0 came from a multi-agent harness)
- τ²-Bench: **regression of ~3.5 pts vs Opus 4.6** (Artificial Analysis independent run)

Reasoning / knowledge:

- GPQA Diamond: **94.2%** (Anthropic; AA measured +1.8 pts vs 4.6)
- HLE: **54.7% with tools / 46.9% without** (Anthropic; AA +2.9 pts)
- Artificial Analysis Intelligence Index: **57** (exact 57.3; tie for #1 with Gemini 3.1 Pro 57.2 and GPT-5.4 56.8 — greatest tie in AA history)
- AA-Omniscience: **26 accuracy index / 36% hallucination rate** (AA; #2 behind Gemini 3.1 Pro, hallucination down 25 pts via more abstention — attempt rate 70%)
- MMMLU: **91.5%** (Anthropic)

Coding:

- SWE-bench Verified: **87.6%** (Anthropic; +6.8 pts over 4.6, memorization-screen adjusted)
- SWE-bench Pro: **64.3%** (Anthropic, confirmed by Vellum; +10.9 pts — gains concentrated on harder problems)
- SciCode: **+2.6 pts vs Opus 4.6** (AA; absolute value not separately published)
- CursorBench: **70%** (Cursor partner testimonial; Opus 4.6 = 58%)
- Rakuten-SWE-Bench: **3× more production tasks resolved than Opus 4.6** (Anthropic announcement)

Long context:

- no long-context retrieval score (MRCR/RULER/GraphWalks) reported by any source at the 1M window; premium >200K pricing tier is the only published long-prompt constraint.

### Normalized scores (1–100)

- **Tool use: 92/100.** #1 on GDPval-AA by a 79-Elo margin plus MCP-Atlas 77.3 and OSWorld 78.0 cap it near the top; the τ²-Bench and BrowseComp regressions (AA-independent) keep it from 95+.
- **Reasoning: 93/100.** AA Index 57 (co-first-place overall), GPQA Diamond 94.2, HLE 54.7 and #2 Omniscience with 36% hallucination; capped by Gemini 3.1 Pro's edge on knowledge benchmarks (HLE/GPQA/IFBench per AA breakdown).
- **Context window: 90/100.** Full 1M tier with 128K output, but no verified long-context retrieval numbers and a >200K premium-rate tier plus a 1.0–1.35× token-inflating tokenizer effectively shrink usable budget.
- **Multimodal: 85/100.** Text + image only; the 3.3× resolution bump and CharXiv-R 91.0 (with tools) / 82.1 (without) are best-in-class for document/vision agents, but no audio or video input and no image output.
- **Coding: 93/100.** SWE-bench Verified 87.6, SWE-bench Pro 64.3 (leader band), Terminal-Bench 69.4 and 3× Rakuten production resolution; AA notes OpenAI still tops TerminalBench Hard and AA-LCR, capping the score.
- **Cost efficiency: 58/100.** Paid flagship at $5/$25 per 1M — same sticker as 4.6 but ~11% cheaper per AA-Index run ($4,406 vs $4,970) thanks to lower token use; still a premium price point with long-prompt surcharges.
- **Overall Score: 90.6/100.** Half-up mean of the five quality dims (92+93+90+85+93)/5 = 90.6. Best fit: long-horizon autonomous engineering and knowledge-work agentics at flagship quality, where self-verification and literal instruction following matter more than raw browsing recall.

---

## Second-pass update — 2026-11-03 (UTC)

Staleness-triggered re-research (prior pass 2026-10-17); three independent sources consulted.

**Sources:** Anthropic official — https://www.anthropic.com/news/claude-opus-4-7 (**"Pricing remains the same as Opus 4.6: $5 per million input tokens and $25 per million output tokens"** — matches pass 1 exactly) and https://platform.claude.com/docs/en/about-claude/model-deprecations (Opus 4.1 retired 2026-08-05, Claude 4 base line retired 2026-06-15 per https://www.totalum.app/blog/claude-4-deprecation-migration-2026; **4.7 is not on any retiree list**) · index — https://artificialanalysis.ai/evaluations/artificial-analysis-intelligence-index (**Index v5, published 2026-10-27: Gemini 4 Carbon (High) 59 leads, Opus 5.5 (Max) second**) and https://cellcog.ai/blog/artificial-analysis-intelligence-index-v5/ (Opus 5.5 max **58** on v5) vs the pre-v5 reading https://www.linkedin.com/pulse/claude-opus-47-sits-top-artificial-analysis-intelligence-9hxdc (**"Claude Opus 4.7 scores 57 … sits at the top"**, still true as of 2026-10-20 on the old scale) · current rows — https://artificialanalysis.ai/evaluations/gdpval-aa (GDPval-AA **v2.1** board, 2026-11-03: Opus 4.7 (Max) 1362 Elo, ~#94 — displaced by the Opus 5.x / Gemini 4 / GPT-6 generation) and https://www.tbench.ai/leaderboard/terminal-bench/2.0?verified=true (80.2% ±2.1 via the WOZCODE harness, Apr 2026 — harness-specific, alongside Anthropic's own 69.4%) · corroboration — https://llm-stats.com/blog (87.6% SWE-bench Verified, 94.2% GPQA, $5/$25 — all match pass 1).

**What moved and how it was resolved:**

1. **AA Index v5 (2026-10-27) — scale drift, bands unchanged.** Pass 1's anchor — 57, co-#1 on the old index (and still top-adjacent on 2026-10-20) — sits on a scale v5 replaces with a 9-eval, majority-private-data basket led by Gemini 4 Carbon at 59 / Opus 5.5 at ~58. The same absolute-rescale pattern seen batch-wide is a methodology change, not an Opus 4.7 capability change; the 57 reading is retained with the v5 leadership noted alongside, no band moved.
2. **GDPval-AA "#1 overall" is now a generational claim.** On the current GDPval-AA v2.1 board Opus 4.7 (Max) sits at 1362 Elo around #94 — overtaken by successors, not by a re-measurement. Per methodology the Tool band keys on the absolute rows (MCP-Atlas 77.3, OSWorld 78.0, Finance Agent 64.4 stand uncontradicted); the slide is recorded here as lifecycle context (4.7 is now two Opus generations behind the flagship), echoing pass 1's own "direct upgrade line" framing.
3. **Pricing reconfirmed, unchanged.** $5/$25 (long-prompt premium beyond 200K) verified against the Anthropic launch post; llm-stats restates the same. Cost stays 58 — and the sibling-pass finding that Opus 4.8 is *also* served at $5/$25 keeps the historic-band concern from applying anywhere on this line.
4. **No deprecation, no new absolutes.** Anthropic's deprecations page retires Opus 4.1 (2026-08-05) and the Claude 4 base line (2026-06-15) but not 4.7; Terminal-Bench 2.0's 80.2% is a third-party harness entry, not an official model run, so it is noted without re-anchoring the Coding band (Anthropic's 69.4% and AA re-runs stand).

**Scores changed by this pass:** None. v5 is scale drift; GDPval rank slide is generational; pricing verified identical. Tool 92, Reasoning 93, Context 90, Multimodal 85, Coding 93 → Overall = half-up mean(92, 93, 90, 85, 93) = 453/5 = **90.6, unchanged**.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-17
- Method: public internet research — Anthropic launch post, llm-stats launch analysis, Artificial Analysis independent evaluation article, Vellum benchmark comparison; scores are normalized 1–100 interpretations, not official vendor scores.
- Second-pass signature: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-11-03. Method: ≥3 independent sources (Anthropic news/docs, Artificial Analysis index + GDPval boards, tbench.ai, llm-stats, totalum deprecation coverage); AA v5 treated as scale drift, GDPval generational slide recorded, pricing reconfirmed at $5/$25, harness-specific TB row declined — **no dimension changed and Overall remains 90.6**. Prior pass retained verbatim per RULES.md.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
