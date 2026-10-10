# Claude Sonnet 5.5 — findings by Qwen 3.7 Plus

- Source: Anthropic/Claude Sonnet 5.5 (`anthropic/claude-sonnet-5.5`)
- Date: 2026-10-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5.5
- **Short description:** Anthropic's Sonnet-class everyday-work model, released September 28, 2026. Second model in the Claude 5.5 family. Clear upgrade over Sonnet 5, runs 30%+ faster, costs up to 30% less per task at the same list price. Scores within a few points of Opus 5.5 on most benchmarks. Leads Opus 5.5 on Terminal-Bench 4.0 (70.6% vs 66.4%).
- **Provider / access:** Claude API (`claude-sonnet-5-5`); Amazon Bedrock; Google Cloud Vertex AI; Microsoft Foundry. No free tier. No OpenCode Zen ID.
- **Release / knowledge:** 2026-09-28 release; knowledge cutoff not precisely documented.
- **IDs:** `anthropic/claude-sonnet-5-5` (Claude API). No free OpenCode Zen ID.
- **Context window:** 1,000,000 tokens (1M) total; 128,000 max output.
- **Modalities:** Text and image in; text out. Reasoning yes (adaptive thinking always on, with effort levels). Tool calls supported. Computer use supported.
- **Pricing (as of 2026-10-10):** $2 in / $10 out / $0.20 cached per 1M tokens. Batch: $1/$5 (50% off). Cache write (5-min): $2.50/M. Half the price of Opus 5.5.
- **Architecture:** Proprietary; parameter count not disclosed. Part of Claude 5.5 family with adaptive thinking always on.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **70.6%** (Anthropic; leads Opus 5.5's 66.4%; massive jump from Sonnet 5's 10.3%)
- GDPval-AA v2.1: **1844 Elo** (Artificial Analysis; 2 points behind Opus 5.5's 1846)
- AA-Briefcase v1.1: **1811 Elo** (Anthropic; vs Opus 5.5's 1822)
- OSWorld 2.1 (partial credit): **80.1%** (Anthropic; vs Opus 5.5's 81.8%)
- Chartography (no tools): **61.6%** (Anthropic; vs Opus 5.5's 64.4%)

Reasoning / knowledge:

- Humanity's Last Exam (with tools): **64.5%** (Anthropic; vs Opus 5.5's 67.7%)
- GDPval-AA v2.1: **1844 Elo** (also listed under reasoning/knowledge work)

Coding:

- Terminal-Bench 4.0: **70.6%** (also listed under tool use — leads all models)
- FrontierCode 1.1 (Main): **52.1%** at Xhigh effort, **46.2%** at Max (Anthropic; vs Opus 5.5's 54.4%)
- CursorBench 4.0: **55.5%** (Anthropic; vs Opus 5.5's 57.8%)
- SWE-bench Pro: **81.3%** (BenchLM leaderboard)
- Chartography (no tools): **61.6%** (also relevant to coding/design)

Long context:

- No specific MRCR or long-context retrieval scores published

### Normalized scores (1–100)

- **Tool use: 92/100.** Terminal-Bench 4.0 at 70.6% leads ALL models including Opus 5.5 (66.4%). GDPval-AA 1844 Elo is within 2 points of Opus 5.5. AA-Briefcase 1811 Elo is strong. OSWorld 80.1% is excellent. The agentic/tool-use performance is best-in-class on Terminal-Bench. Capped only by being 2 Elo points behind Opus 5.5 on GDPval-AA.
- **Reasoning: 90/100.** HLE 64.5% with tools is strong (vs Opus 5.5's 67.7%). GDPval-AA 1844 Elo is near-top. The reasoning performance is within a few points of Opus 5.5 on all measures. Capped by slightly lower HLE and Chartography vs. Opus 5.5.
- **Context window: 88/100.** 1M-token context with 128K max output. Standard frontier-class window. No long-context premium. No specific MRCR retrieval scores. Solid but not best-in-class.
- **Multimodal: 62/100.** Text and image in; text out. No audio, video, or PDF input. OSWorld 80.1% demonstrates computer use. Capped by limited input modalities.
- **Coding: 93/100.** Terminal-Bench 4.0 at 70.6% leads ALL models. CursorBench 55.5% is strong. FrontierCode 52.1% at Xhigh is competitive. SWE-bench Pro 81.3% is excellent. The coding performance leads Opus 5.5 on the most important agentic coding benchmark. Capped only by slightly lower FrontierCode vs. Opus 5.5.
- **Cost efficiency: 82/100.** $2/$10 per 1M tokens is half of Opus 5.5's price. Up to 30% lower cost per task vs. Sonnet 5 at the same price. Cache reads at $0.20 (same as Opus 5.5). Batch 50% off. Very competitive for near-Opus performance. Excellent value.
- **Overall Score: 85/100.** Mean of five quality dims: (92 + 90 + 88 + 62 + 93) / 5 = 85.0. A near-Opus-class model that leads on Terminal-Bench 4.0 (70.6%), matches Opus 5.5 on most benchmarks, at half the price. Best fit for everyday agentic coding, bug fixes, feature work, and document production where Opus-level quality is needed at Sonnet-level cost. The limited input modalities and slightly lower scores on some benchmarks vs. Opus 5.5 are minor trade-offs.

---

## Signature

- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-10
- Method: public internet research across Anthropic official announcements, AlphaCorp, Kingy AI, BenchLM, and other benchmark aggregators; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.7_Plus.md`, using the same headings.
