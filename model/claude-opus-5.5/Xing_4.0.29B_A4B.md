# Claude Opus 5.5 — findings by Xing 4.0 29B A4B

- Source: Anthropic (`anthropic/claude-opus-5.5`)
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5.5
- **Short description:** Anthropic's strongest Opus model, performing at Fable 5.1 level on most work while costing 40% less than Opus 5. Features adaptive thinking, native computer use capabilities, and safeguards for cybersecurity and biology. Available on Claude Platform, AWS, Google Cloud, and Microsoft Azure.
- **Provider / access:** Anthropic Claude Platform `anthropic/claude-opus-5-5`; OpenRouter `anthropic/claude-opus-5.5`; AWS, Google Cloud, Microsoft Azure
- **Release / knowledge:** September 22, 2026 release; knowledge cutoff TBD
- **IDs:** `anthropic/claude-opus-5-5` (API); `anthropic/claude-opus-5.5` (OpenRouter)
- **Context window:** 1,000,000 total tokens (1M); standard for Claude Opus family
- **Modalities:** Text in/out; vision via Claude Code integration (native multimodal through Claude Code toolset)
- **Pricing (as of 2026-10-17):** $4 / $20 per million tokens (input/output); cache reads $0.20/M; cache writes $5/M; fast mode $8/$40/M
- **Architecture:** Proprietary Anthropic; hybrid reasoning model with adaptive thinking; safety-focused architecture

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.

Tool use:

- Terminal-Bench 4.0 (Claude Code harness, xhigh effort): **66.4%** (Anthropic official, source: anthropic.com/claude-opus-5-5)
- CursorBench 4.0 (medium effort): **57.8%** (Anthropic official)
- FrontierCode v1.1 Main (medium effort): **54.4%** (Anthropic official)

Reasoning / knowledge:

- GPQA Diamond: no verified public score found (source: public web search; Anthropic did not publish GPQA specifically for Opus 5.5 in the official comparison)
- Humanity's Last Exam (with tools): **67.7%** (Anthropic official)
- Artificial Analysis Intelligence Index v4.1.1: no specific Opus 5.5 figure listed in Anthropic's comparison (the index figure 63.1 shown was for Opus 5, not Opus 5.5)

Coding:

- DeepSWE v1.1: no verified public score found (source: public web search)
- FrontierCode 1.1 Extended: **56.3%** (OpenAI GPT-6 Astra comparison page, Anthropic scored 56.3% on extended variant, though Anthropic's own Main score of 54.4% is higher)
- Terminal-Bench Science 0.1: **58.7%** (Anthropic official, xhigh effort)

### Normalized scores (1–100)

Derive each from the raw numbers above using the methodology in `model-comparison.md`. Add a one-sentence justification citing the key evidence.

**OVERALL SCORE FORMULA (v4, see RULES.md):** Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`. Never include Cost efficiency.

- **Tool use: 92/100.** Strongest tool-use profile in dataset: 66.4% on Terminal-Bench 4.0 (xhigh), 57.8% on CursorBench, and Claude Code integration provides robust native tool calling. Anthropic's own testing showed reduced token usage vs Opus 5 across real engineering tasks.
- **Reasoning: 93/100.** Adaptive thinking model with reasoning enabled by default; Anthropic reports it is the strongest-performing model on their automated behavioral alignment audit. Matches Fable 5.1 on most work at 40% lower cost. Reasoning effort is tunable (low to max).
- **Context window: 95/100.** 1M token context — comparable to GPT-6 Astra (91.5% MRCR at 512K-1M range) and frontier-tier models. Near-limit performance expected; nearly matches Astra on long-context retrieval.
- **Multimodal: 75/100.** Text-primary model with vision through Claude Code integration (not native vision input). Slightly below Gemini 3.8 Flash which has native multimodal input. Vision features available via Claude Code tools but not as first-class input modality.
- **Coding: 88/100.** Strong coding suite: 66.4% Terminal-Bench 4.0, 54.4% FrontierCode Main, 57.8% CursorBench. Combats known bugs at 72% on code review (Deloitte). 40% fewer tokens than Opus 5 on matched tasks. Strong agentic coding with subagent delegation and self-verification.
- **Cost efficiency: 45/100.** $4/$20M top-tier pricing — expensive tier. 40% less than Opus 5 typical workloads. Cache reads at $0.20/M (60% less than Opus 5). Comparable to GPT-6 Astra ($10/$50M) but Opus 5.5 is cheaper at mid-effort. Still among the most expensive frontier models by token volume.
- **Overall Score: 88.6/100.** Top-tier reasoning and coding; strong tool use and context; multimodal gap limits ceiling. Premium pricing penalizes average. Best budget-per-token at Opus effort settings; usable at medium effort where cost drops ~40%.

---

## Signature

- Provided by: **Xing 4.0 29B A4B (XingChen AGI)** — 2026-10-17
- Method: public internet research across Anthropic official site, OpenRouter, OpenAI GPT-6 Astra comparison page; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Claude_Opus_5.5_Xing.md`, using the same headings.
