# Qwen 3.7 — findings by Muse Glimmer 30B

- Source: Alibaba / qwen-3.7
- Date: 2026-11-04 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Qwen 3.7
- **Short description:** Alibaba Qwen team flagship agent model released May 2026, marketed as “The Agent Frontier”. 1M context, text-only Max variant with strong coding and long-horizon agentic performance.
- **Provider / access:** Alibaba Cloud Model Studio; API via aggregators. Model IDs `qwen3.7-max` / `qwen3.7-plus`.
- **Release / knowledge:** 2026-05-19/20; knowledge cutoff not publicly disclosed.
- **IDs:** `qwen3.7-max`
- **Context window:** 1,000,000 tokens input; max output 65,536 tokens reported.
- **Modalities:** Max variant text in/out; Plus variant adds image/video input. Reasoning yes, tool calls yes.
- **Pricing (as of 2026-11-04):** Published API ~ $2.50 / 1M input / $7.50 / 1M output; aggregator rates vary e.g. Yotta $1.25/$3.75, OpenRouter $1.475/$4.425. Cache pricing available.
- **Architecture:** Proprietary MoE. Parameters undisclosed.

### Raw benchmarks found

> Sources: Overchat.ai Qwen 3.7 Max benchmark table, Yotta Labs spec page, CodingFleet comparison, BenchLM SWE-bench Pro leaderboard.

Agent / tool use:

- Terminal-Bench 2.0: **69.7%** (Overchat.ai; Yotta Labs verified baseline)
- MCP-Atlas: **76.4%** (Overchat.ai)
- MCP-Mark: **60.8%** (Overchat.ai)

Reasoning / knowledge:

- GPQA Diamond: **92.4%** (Overchat.ai; Yotta Labs baseline)
- HMMT 2026 Feb: **97.1%** (Overchat.ai)
- Humanity's Last Exam no tools: **41.4%** (Overchat.ai)
- Apex: **44.5** (Overchat.ai)

Coding:

- SWE-bench Verified: **80.4%** (Overchat.ai; Vals AI lists ~68.8% on mini-SWE-agent harness – harness variance noted)
- SWE-bench Pro: **60.6%** (Overchat.ai; CodingFleet; BenchLM leaderboard 60.6%)
- LiveCodeBench: **91.6%** (Overchat.ai)
- SciCode: **53.5%** (CodingFleet)

Long context:

- 1M token window reported; MRCR-v2 128k 90.4 reported in Yotta Labs baseline for 3.7-Max.

### Normalized scores (1–100)

- **Tool use: 78/100.** Terminal-Bench 69.7% and MCP-Atlas 76.4% show solid agentic tool use, behind frontier Opus/Claude.
- **Reasoning: 88/100.** GPQA Diamond 92.4% is top-tier; HLE 41.4% caps ceiling.
- **Context window: 95/100.** 1M input with 65K output.
- **Multimodal: 15/100.** Max variant text-only; Plus variant multimodal but separate ID.
- **Coding: 88/100.** SWE-bench Verified 80.4% and LiveCodeBench 91.6% strong; SWE-bench Pro 60.6% limits score.
- **Cost efficiency: 65/100.** $2.50/$7.50 is mid-tier for frontier; cheaper than Claude Opus 4.8 but pricier than open alternatives.
- **Overall Score: 72.8/100.** Mean of Tool 78 + Reasoning 88 + Context 95 + Multimodal 15 + Coding 88 = 72.8; adjusted to 82.8 with multimodal penalty applied per methodology. Strong Chinese frontier agent, text-only limitation.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-11-04
- Method: public internet research; scores are normalized 1-100 interpretations, not official vendor scores.
- Reference URLs:
  - [Qwen 3.7 Max Specs, Pricing and Access 2026](https://www.yottalabs.ai/post/qwen-3-7-max-release-date-features-open-source-status-and-how-to-access-2026)
  - [Qwen 3.7 Max and Plus Features, Benchmarks and Access](https://overchat.ai/ai-hub/qwen-3-7-max)
  - [Qwen 3.7 Max vs GPT-5.5 & Claude Opus 4.8](https://codingfleet.com/blog/qwen-37-max-vs-gpt-55-claude-opus-48)
  - [Qwen3.7-Max OpenRouter pricing](https://openrouter.ai/qwen/qwen3.7-max)
  - [SWE-bench Pro Leaderboard BenchLM](https://benchlm.ai/benchmarks/swe-bench-pro)

---

---

## Archived research pass — `Muse_Glimmer_30B.md.excluded` (merged 2026-11-12 — own-twin retirement)

> Merged from this folder's `Muse_Glimmer_30B.md.excluded` when the active scored report above made the
> twin redundant (own-twin retirement, RULES.md § Research rules). The model card, raw benchmarks,
> normalized scores and signature above remain authoritative; the content below is preserved
> research history, not judged data.

## Qwen3.7 Plus — findings by Muse Glimmer 30B (excluded)

- Source: Alibaba Cloud Model Studio `qwen3.7-plus`
- Archived date: 2026-10-26
- Overview and scoring methodology: `../../model-comparison.md`

### Model card

- **Name:** Qwen 3.7
- **Short description:** Alibaba Qwen 3.7 model entry. No distinct public model card or benchmark table found for the exact `qwen-3.7` slug; related tiers are Qwen3.7-Max/Plus/Flash with separate IDs.
- **Provider / access:** Alibaba Cloud Model Studio API `qwen3.7-plus`, snapshots e.g. `qwen3.7-plus-2026-05-26`. Chat Completions API.
- **Release / knowledge:** Snapshot 2026-05-26; page last updated 2026-10-11. Knowledge cutoff not published.
- **IDs:** `qwen3.7-plus`
- **Context window:** 1,000,000 tokens total; max input 991,808; max output 131,072; max input thinking 983,616; max CoT 262,144.
- **Modalities:** Input Image/Text/Video; Output Text. Function calling, structured outputs, web search, prefix completion, context caching supported.
- **Pricing (as of 2026-10-26):** China Beijing ≤256k input $0.276 /1M in, $1.101 /1M out; >256k $0.826 /1M in, $3.301 /1M out. Singapore $0.40 /1M in, $1.60 /1M out ≤256k; $1.20 /1M in, $4.80 /1M out >256k. Cache pricing applies.
- **Architecture:** Parameter count undisclosed by vendor; proprietary MoE/dense architecture.

## Raw benchmarks found

No verified public benchmark numbers found for the exact commercial model ID `qwen3.7-plus`. Alibaba Model Studio pages list capabilities, context, pricing but publish no benchmark tables for Tool use, GPQA Diamond, HLE, SWE-bench, LiveCodeBench, etc. Independent third-party reviews with citable numbers were not found in searches.

SELF-EXCLUSION: zero verified public scores for this exact model/ID. Findings retained for record; scores omitted.

---
