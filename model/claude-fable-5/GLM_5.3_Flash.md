# Claude Fable 5 — findings by GLM 5.3 Flash

- Source: Anthropic (`claude-fable-5`)
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5
- **Short description:** Anthropic's first generally available "Mythos-class" model (a capability tier above Opus): the same weights as the restricted Claude Mythos 5, wrapped in production safeguard classifiers that fall back to Claude Opus 4.8 on cybersecurity, biology/chemistry, and distillation requests. Top use case: long-horizon agentic coding, knowledge work, and research; now a legacy model superseded by Claude Fable 5.1 (September 1, 2026).
- **Provider / access:** Anthropic Claude API `claude-fable-5` (Messages API — not Chat Completions; adaptive thinking always on, default effort `high`). Also Amazon Bedrock (`anthropic.claude-fable-5`), Claude Models on Google Cloud (Google-managed and Anthropic-managed, `claude-fable-5`), Microsoft Foundry (`claude-fable-5`), and Claude Platform on AWS (`claude-fable-5`); Artificial Analysis lists 7 API providers. Note: on the Messages API the safeguard default is to block flagged requests unless the developer opts into the Opus 4.8 fallback; Claude apps fall back transparently.
- **Release / knowledge:** Released 2026-06-09; access suspended 2026-06-12 under US export controls, redeployed 2026-07-01 after controls were lifted, and made a standard subscription feature from 2026-07-20. Reliable knowledge cutoff Jan 2026 (training data cutoff Jan 2026), per the official model page.
- **IDs:** `anthropic/claude-fable-5` (Claude API `claude-fable-5`; Bedrock `anthropic.claude-fable-5`). No OpenCode Zen Free ID was verified in this pass.
- **Context window:** 1M tokens total; 128K max output (sync Messages API) — verified via the official model page (platform.claude.com/docs/en/models/fable-5/overview), Artificial Analysis, and Vals AI (all re-checked 2026-11-02). Anthropic prices the full 1M window at the standard rate (no long-context surcharge, unlike OpenAI's 272K threshold).
- **Modalities:** Text + image in → text out (official capabilities table and AA agree). No audio or video input, no image/video output. Reasoning: yes — adaptive thinking, always on. Tool calls: yes (incl. server-side web search/code execution per the family docs; MCP Atlas and Toolathlon results below). JSON/structured-output mode: not re-verified this pass. PDF input is not documented on this model's capabilities table.
- **Pricing (as of 2026-11-02):** $10 / MTok input, $50 / MTok output (paid only; no free tier). Cache: write $12.50 (5m) / $20 (1h), read $1 / MTok (10% of input — the cheaper 2.5% read rate is Fable 5.1-only). Batch API 50% off both directions; blended AA rate $7.70 / MTok (7:2:1). US-only inference reportedly billed at 1.1× (MyClaw). Caveats: mandatory 30-day data retention on business traffic for Mythos-class models (no training use), and always-on high-effort thinking inflates output-token cost.
- **Architecture:** Proprietary, closed weights; parameter count undisclosed (AA FAQ confirms). Mythos-class tier above Opus; identical weights to Claude Mythos 5 (differences are only the safeguard classifiers and access tier). Available to Pro/Max/Team/Enterprise subscribers at up to 50% of plan capacity.

### Raw benchmarks found

> Numbers below were re-verified by fresh web research on 2026-11-02. "Self-reported" = Anthropic launch announcement / system card as compiled by LLM Stats; "Vals" = Vals AI independent harness (max effort, temp 1.0, Opus 4.8 fallback on refusals).

Agent / tool use:

- GDPval-AA: **1932 Elo** (self-reported launch figure, #1 at launch — LLM Stats system-card compilation); on the newer GDPval-AA v2: **1759.6 Elo** (OpenAI GPT-5.6 launch table via CodingFleet)
- Terminal-Bench 2.1: **84.3%** effective Fable 5 with 20.9% of trials hitting safeguard fallback (Mythos 5 twin: 88.0%) — self-reported/system card via LLM Stats; Vals independent: **80.52%**; AA harness: **83.1%**
- Terminal-Bench 4.0: **41.41%** (Vals; later Anthropic models score far higher — Opus 5.5: 66.4%)
- Terminal-Bench-Science 0.1: **15.71%** (Vals)
- MCP-Atlas: **83.3%** (Anthropic system-card configuration, via CodingFleet)
- Toolathlon: **61.7%** (CodingFleet)
- AutomationBench: **17.4%** (self-reported; #1 at launch on this deliberately hard long-horizon suite)
- OSWorld-Verified (computer use): **85.0%** (self-reported; OSWorld 2.0: 54.8% per OpenAI's table)
- Tau2-Bench / Tau3-Bench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **93.18%** (Vals independent) / **92.6%** (OpenAI GPT-5.6 launch table via CodingFleet)
- HLE (with tools): **64.5%** is the Mythos 5 (safeguard-lifted twin) figure; Fable 5's effective score falls back to ≈ Opus 4.8 (**~57.9%**) because bio/chem queries trigger fallback — self-reported via LLM Stats. HLE-Diamond (AA v5.0): no verified public score found (AA page deprecated the model)
- MMLU Pro: **91.50%** (Vals, #3/138); MMMU Pro: **89.31%** (Vals, #3/93)
- FrontierMath: Tier 1–3 **87.0%**, Tier 4 **87.8%** (OpenAI GPT-5.6 launch table via CodingFleet)
- ARC-AGI: no verified public score found
- LCR / MLCR: no verified public score found in this pass
- CritPt: no verified public score found in this pass
- BrowseComp: **84.3%**; Agents' Last Exam: **40.5%**; HealthBench Professional: **60.9%** (OpenAI GPT-5.6 launch table via CodingFleet)
- Artificial Analysis Intelligence Index: **59.9 on v4.1** (edge over GPT-5.6 Sol's 58.9; AA commentary placed Fable ≈60 vs Sol 59 at high effort — via CodingFleet). The current AA model page shows **N/A** because the model is deprecated on AA (benchmarking limited to 10k-input workloads); v4.1 is the last published index value found this pass

Coding:

- SWE-bench Verified: **95.0%** (self-reported; Vals independent confirms **95.00%**, ±0.98)
- SWE-bench Pro: **80.0%** (self-reported; +15.4 pts over GPT-5.6 Sol's published 64.6%)
- LiveCodeBench: **89.78%** (Vals, #2/143)
- FrontierCode (Cognition): Diamond **29.3%** (#1, vs Opus 4.8 13.4%), Main **46.3%**; #1 among frontier models even at medium effort (self-reported)
- Vibe Code Bench: **90.35%** (Vals, #1 — leads the best non-Anthropic model by >20 points)
- IOI v1: **72.25%** (Vals)
- DeepSWE v1.1: **69.7%** (OpenAI GPT-5.6 launch table via CodingFleet; behind Sol's 72.7%)
- SciCode / AA-SciCode: no verified public score found

Long context:

- 1M-token window confirmed by docs/AA/Vals, priced without surcharge across the full window; however, **no MRCR / RULER / GraphWalks public score at window length was found in this pass** — only qualitative memory evidence (launch post: file-based memory improved Slay-the-Spire performance 3× more than for Opus 4.8)

### Normalized scores (1–100)

- **Tool use: 94/100.** Launch-best agentic profile — GDPval-AA 1932 Elo (#1), MCP-Atlas 83.3%, Toolathlon 61.7%, Terminal-Bench 2.1 84.3% effective (Vals 80.5%) — capped by the safeguard layer (20.9% of Terminal-Bench trials fell back to Opus 4.8), a modest 41.4% on Terminal-Bench 4.0, and successors (Opus 5.5) now leading current harnesses.
- **Reasoning: 95/100.** GPQA Diamond 93.2% (Vals), MMLU Pro 91.5%, FrontierMath Tier 4 87.8%, and AA Intelligence Index v4.1 59.9 (above GPT-5.6 Sol) mark elite reasoning — capped by the fallback-suppressed effective HLE (~57.9% vs the twin's 64.5%) and the absence of any ARC-AGI or current AA v5.0 index score.
- **Context window: 92/100.** 1M-token window with 128K output at standard pricing (no long-context surcharge) sits in the top tier of the dataset — capped by the lack of any verified MRCR/RULER/GraphWalks retrieval score at window length, leaving only qualitative memory claims.
- **Multimodal: 85/100.** Text+image input with state-of-the-art vision claims at launch — MMMU Pro 89.3%, OSWorld-Verified 85.0%, Vals Multimodal Index #1 (74.15%) — capped by no audio/video input, no image/video output, and no documented PDF path on the model page.
- **Coding: 97/100.** SWE-bench Verified 95.0% (vendor + Vals agree), SWE-bench Pro 80.0%, LiveCodeBench 89.8%, Vibe Code Bench 90.35% (#1, >20-pt lead), and FrontierCode Diamond 29.3% (#1) — capped by DeepSWE 69.7% (behind GPT-5.6 Sol) and Terminal-Bench 4.0 41.4% (behind Opus 5.5's 66.4%).
- **Cost efficiency: 50/100.** $10/$50 per MTok is ~5× the era's median input price with no free tier, always-on high-effort thinking inflating output tokens, slow delivery (65.4 tok/s, 78.9 s TTFT per AA), and a mandatory 30-day retention on business traffic — the 90%-discounted $1 cache reads and 50% batch pricing soften this, but successor models (Opus 5.5 at $4/$20, Fable 5.1 at the same price with cheaper cache reads) now beat it on current agentic boards, so value at the price point is poor as of 2026-11-02.
- **Overall Score: 93/100.** Mean of the five quality dims (94 + 95 + 92 + 85 + 97) / 5 = 92.6 → 93 (Cost efficiency excluded). Best fit: the hardest long-horizon engineering, research, and knowledge-work jobs where its launch-era #1 agentic and coding results still pay off — not everyday traffic, where cheaper Opus/Sonnet-class models now match or beat it.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-11-02 (re-research pass; prior 2026-10-19)
- Method: public internet research (approved re-research pass); all rows re-verified from primary sources (Anthropic model page, launch announcement, redeployment notice) and independent leaderboards (Vals AI, Artificial Analysis, LLM Stats launch-table compilation, CodingFleet comparative tables) fetched 2026-11-02; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Anthropic — Claude Fable 5 and Claude Mythos 5 (launch announcement, Jun 9 2026)](https://www.anthropic.com/news/claude-fable-5-mythos-5)
  - [Anthropic Docs — Claude Fable 5 model page (IDs, context, pricing, capabilities)](https://platform.claude.com/docs/en/models/fable-5/overview)
  - [Anthropic — Redeploying Claude Fable 5 (export-control timeline)](https://www.anthropic.com/news/redeploying-fable-5)
  - [Vals AI — Claude Fable 5 independent benchmark suite](https://www.vals.ai/models/anthropic_claude-fable-5)
  - [LLM Stats — Claude Fable 5: Review, Benchmarks and Pricing (system-card tables)](https://llm-stats.com/blog/research/claude-fable-5-review)
  - [Artificial Analysis — Claude Fable 5 (Max, Opus 4.8 Fallback) model page](https://artificialanalysis.ai/models/claude-fable-5)
