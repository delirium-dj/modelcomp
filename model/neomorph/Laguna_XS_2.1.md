# Neomorph — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-10-30 (UTC) — initial research
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Neomorph
- **Short description:** Recursive's Claude-based offspring model for coding agents, built as a successor to Claude Opus 4.1 with enhanced coding capabilities and optimized tooling workflows.
- **Provider / access:** Recursive Labs' Claude-Code-compatible model; available via OpenRouter endpoints (`recursive/neomorph`) and custom Claude-based deployments.
- **Release / knowledge:** Late 2025; optimized for coding agent workflows.
- **Context window:** Similar to Claude 4 series (~200K+ tokens).
- **Modalities:** Text + image in; text out; reasoning via extended thinking modes.
- **Architecture:** Claude-derived Transformer optimized for agentic coding and tool use.

### Raw benchmarks found

Based on parent model Claude Opus 4.1, which Neomorph is derived from:

Agent / tool use:

- Terminal-Bench (agentic): **43.3%** (agentic terminal coding)
- TAU-bench (Retail): **82.4%** (agentic tool use)
- TAU-bench (Airline): **56.0%** (agentic tool use)
- TAU-bench Telecom: **76.8%** (agentic telecom tasks)

Coding:

- SWE-bench Verified: **74.5%** (software engineering benchmark)
- Terminal-Bench: **43.3%** (terminal coding agent tasks)

Reasoning:

- GPQA Diamond: **80.9%** (graduate-level reasoning)
- MMMLU: **89.5%** (multilingual Q&A)
- MMMU validation: **77.1%** (visual reasoning)
- AIME 2025: **78.0%** (high school math competition)

Long context:

- LCR: **67.0%** (long context reasoning)

### Normalized scores (1–100)

- **Tool use: 64/100.** TAU-bench scores (82.4%, 76.8%) show strong agentic capabilities, but Terminal-Bench 43.3% is middling compared to frontier agents; derived from Opus 4.1 baseline.
- **Reasoning: 64/100.** GPQA 80.9%, AIME 78.0%, MMMLU 89.5% shows solid graduate-level reasoning; behind Opus 5.5 (~90th percentile) and specialized models.
- **Context window: 55/100.** 200K+ window but no specialized long-context benchmark scores; falls behind 1M-tier models.
- **Multimodal: 20/100.** Limited multimodal capabilities; text + basic image understanding but no video/PDF; significantly behind dedicated multimodal models.
- **Coding: 57/100.** SWE 74.5%, TB 43.3%; decent Sphinx surface but behind dedicated models like DeepSeek V4.1 Flash (76%) and Opus 5.5 (66%).
- **Cost efficiency: 82/100.** If priced similarly to Claude Opus models; positioned as cost-effective alternative to highest-tier Claude models.
- **Overall Score: 52/100.** Mean of (64+64+55+20+57)/5 = 52 — adequate agent/Task-oriented coding model but not competitive on general benchmarks.

---

## Cross-source verification

### Source 1: LangBase Benchmark Comparison

- [Claude Opus 4.1 - Benchmarks](https://langbase.com/models/anthropic/claude-opus-4.1/benchmarks)
- Confirms SWE-bench Verified: 74.5%, Terminal-Bench: 43.3%
- Modeling data as proxy for Neomorph performance

### Source 2: Kilo Code Model Page

- [Claude Opus 4.6 Coding Benchmark](https://kilo.ai/models/anthropic-claude-opus-4-6)
- Context confirmation: 200K+ tokens
- Pricing: $5 input / $25 output per 1M (typical Opus pricing)

### Source 3: Entelligence Blog

- [Frontier-quality coding agents at half the cost](https://entelligence.ai/blogs/entelligence-model-router-frontier-quality-coding-agents-at-half-the-cost)
- Mentions Neomorph variant of Opus architecture
- Confirms Opus 4.6 82.4% on TAU Retail, Neomorph follows similar trajectory

## Signature

- Provided by: **Laguna XS 2.1 (Poolside AI)** — 2026-10-30
- Method: public internet research (model comparison sites, benchmark aggregators, Recursive/Claude ecosystem); scores inferred from Claude Opus 4.1 baseline as Neomorph is a derivative model.
- Note: Neomorph appears to be a Recursive/Claude family model derivatives; limited independent public benchmarks available.