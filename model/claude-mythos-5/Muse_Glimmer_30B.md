# Claude Mythos 5 — findings by Muse Glimmer 30B

- Source: Anthropic / claude-mythos-5
- Date: 2026-11-04 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Claude Mythos 5
- **Short description:** Anthropic Mythos-class model released 2026-06-09, same underlying weights as Claude Fable 5 with safety classifiers lifted; restricted to vetted partners for defensive cybersecurity work.
- **Provider / access:** Anthropic verified access `claude-mythos-5`. Same specs/pricing as Fable 5.
- **Release / knowledge:** 2026-06-09; knowledge cutoff not publicly disclosed.
- **IDs:** `claude-mythos-5`
- **Context window:** 1M tokens input; 128K tokens max output per Claude Platform docs.
- **Modalities:** Input text, image; Output text. Reasoning yes; tool calls yes; JSON mode supported.
- **Pricing (as of 2026-11-04):** $10 / 1M input, $50 / 1M output; 5m cache write $12.50 / 1M, 1h cache write $20 / 1M, cache read $1 / 1M. Batch API 50% discount.
- **Architecture:** Proprietary. Parameters undisclosed.

### Raw benchmarks found

> Sources: NxCode Mythos benchmarks summary 2026, Hacker News combined results aggregation, Claude Platform docs, Digital Applied release analysis.

Agent / tool use:

- Terminal-Bench 2.0: **82.0%** (NxCode summary; Hacker News combined table)
- SWE-bench Verified: **93.9%** (NxCode; MindStudio)
- SWE-bench Pro: **77.8%** (NxCode; Vellum comparison)
- SWE-bench Multimodal: **59.0%** (Hacker News combined table)

Reasoning / knowledge:

- GPQA Diamond: **94.5%** (NxCode; Hacker News)
- HLE no tools: **56.8%** (Hacker News)
- HLE with tools: **64.7%** (Hacker News; NxCode)
- USAMO: **97.6%** (NxCode; LinkedIn summary)
- MMMLU: **92.7%** (NxCode)

Coding:

- LiveCodeBench: no verified public score found for Mythos 5 specifically
- SWE-bench Multilingual: **87.3%** (Hacker News)
- GraphWalks BFS 256K-1M: **80.0%** (Hacker News)

Long context:

- 1M token window reported; no public MRCR / RULER / GraphWalks retrieval-specific score published for Mythos 5.

### Normalized scores (1–100)

- **Tool use: 90/100.** Terminal-Bench 82.0% and SWE-bench Verified 93.9% show strong agentic tool use; caps at enterprise price tier.
- **Reasoning: 92/100.** GPQA Diamond 94.5% and USAMO 97.6% are top-tier; HLE 64.7% with tools is solid but limits ceiling.
- **Context window: 95/100.** 1M input / 128K output, no surcharge.
- **Multimodal: 70/100.** Text + image input, text output only.
- **Coding: 92/100.** SWE-bench Verified 93.9% and Pro 77.8% indicate frontier coding; multimodal coding lags.
- **Cost efficiency: 55/100.** $10/$50 pricing is ~2× Opus 4.8; batch/cache mitigates but remains premium.
- **Overall Score: 88/100.** Mean of Tool 90 + Reasoning 92 + Context 95 + Multimodal 70 + Coding 92 = 87.8 → 88. Frontier Mythos-class model, restricted access.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-11-04
- Method: public internet research; scores are normalized 1-100 interpretations, not official vendor scores.
- Reference URLs:
  - [Claude Fable 5 & Mythos 5 release benchmarks 2026](https://www.digitalapplied.com/blog/claude-fable-5-mythos-5-release-benchmarks-2026)
  - [Claude Fable 5 Platform Docs specifications](https://platform.claude.com/docs/en/models/fable-5/overview)
  - [Claude Mythos benchmarks 93.9% SWE-bench](https://www.nxcode.io/resources/news/claude-mythos-benchmarks-93-swe-bench-every-record-broken-2026)
  - [Claude Mythos SWE-Bench jump analysis](https://www.mindstudio.ai/blog/claude-mythos-benchmark-results-swe-bench-agentic-coding)
  - [Claude Mythos Wikipedia entry](https://en.wikipedia.org/wiki/Claude_Mythos)

---
