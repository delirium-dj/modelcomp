# Claude Sonnet 5.5 — findings by LongCat 2.5 Preview

- Source: Anthropic/Claude Sonnet 5.5 (`claude-sonnet-5-5`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5.5
- **Short description:** Anthropic's second model in the Claude 5.5 family, a clear upgrade over Sonnet 5 that runs 30%+ faster and costs up to 30% less for most work. Strongest at well-scoped everyday tasks, bug fixing, and polished document creation.
- **Provider / access:** Anthropic Claude API `claude-sonnet-5-5`; available on Claude Platform, AWS, Google Cloud, and Microsoft Foundry. Chat Completions API.
- **Release / knowledge:** 2026-09-28; knowledge cutoff not publicly specified.
- **IDs:** `anthropic/claude-sonnet-5-5`
- **Context window:** 1,048,576 tokens (1M); max output 128K tokens (verified via Anthropic).
- **Modalities:** Text, image, file in; text out; reasoning yes (adaptive reasoning with effort levels: low/medium/high/xhigh/max); tool calls yes; structured output yes.
- **Pricing (as of 2026-09-29):** $2/$10 per 1M in/out (cache read $0.20); up to 30% cost savings vs Sonnet 5 due to fewer tokens per task.
- **Architecture:** Proprietary/closed weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **70.6%** (vs Sonnet 5's 10.3%, Opus 5.5's 66.4%) (Anthropic)
- OSWorld 2.1: **80.1%** partial (vs Sonnet 5's 57.0%, Opus 5.5's 81.8%) (Anthropic)
- CursorBench 4.0: **55.5%** (vs Sonnet 5's 34.1%, Opus 5.5's 57.8%) (Anthropic)
- GDPval-AA v2.1: **1844** (vs Sonnet 5's 1449, Opus 5.5's 1846) (Anthropic)

Reasoning / knowledge:

- Humanity's Last Exam: **64.5%** with tools (vs Sonnet 5's 54.9%, Opus 5.5's 67.7%) (Anthropic)
- AA-Briefcase v1.1: **1811** (vs Sonnet 5's 1359, Opus 5.5's 1822) (Anthropic)
- Chartography: **61.6%** no tools (vs Sonnet 5's 15.6%, Opus 5.5's 64.4%) (Anthropic)
- Artificial Analysis Intelligence Index: **56** (max effort) — #2 behind Opus 5.5 (Artificial Analysis)

Coding:

- Terminal-Bench 4.0: **70.6%** (Anthropic)
- FrontierCode 1.1 (Main): **46.2%** Max / **52.1%** Xhigh (vs Sonnet 5's 42.4%, Opus 5.5's 54.4%) (Anthropic)
- CursorBench 4.0: **55.5%** (Anthropic)

Long context:

- 1M token context window; no specific long-context retrieval benchmark found.

### Normalized scores (1–100)

- **Tool use: 85/100.** Terminal-Bench 4.0 at 70.6% and OSWorld 2.1 at 80.1% demonstrate strong agentic and tool-use capabilities. Capped by CursorBench 4.0 at 55.5%.
- **Reasoning: 82/100.** HLE at 64.5% with tools and GDPval-AA at 1844 are strong; AA Intelligence Index at 56 (max) is frontier-tier. Capped by limited public reasoning benchmarks.
- **Context window: 95/100.** 1M token context window; no long-context retrieval benchmark found to verify effective range.
- **Multimodal: 82/100.** Text, image, and file input with text output; Chartography at 61.6% shows strong visual chart recognition. Capped by no video/audio input.
- **Coding: 84/100.** Terminal-Bench 4.0 at 70.6% and FrontierCode at 46.2-52.1% are strong; CursorBench at 55.5% is solid. Capped by no SWE-bench Verified score found.
- **Cost efficiency: 85/100.** $2/$10 per 1M with up to 30% cost savings vs Sonnet 5; $7.60 per AA task at max effort. Capped by higher per-task cost than budget models.
- **Overall Score: 86/100.** Mean of (85+82+95+82+84)/5 = 85.6 → 86. Best-fit recommendation: excellent all-around model with strong agentic coding, knowledge work, and cost efficiency; ideal for everyday professional tasks.

---

## Signature

- Provided by: **LongCat 2.5 Preview (longcat-2.5-preview)** — 2026-09-29
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
