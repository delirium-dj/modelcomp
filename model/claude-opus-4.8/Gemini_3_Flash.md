# Claude Opus 4.8 — findings by Gemini 3 Flash

- Source: Anthropic/claude-opus-4.8
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.8
- **Short description:** An upgraded version of Anthropic's Opus-class flagship, featuring improved honesty, tangibly better agentic judgment, and a new "effort control" mechanism for optimizing response depth.
- **Provider / access:** Claude API (`claude-opus-4-8`), Amazon Bedrock, and Google Cloud. Includes "Fast mode" at 2.5× speed.
- **Release / knowledge:** 2026-05-28 release; knowledge cutoff unknown.
- **IDs:** `claude-opus-4-8`
- **Context window:** 1,048,576 tokens (1M). Verified by Anthropic system card.
- **Modalities:** Text and Image input; Text output. Support for "preserialized" thinking and dynamic subagent workflows.
- **Pricing (as of 2026-05-28):** $5.00 per 1M input / $25.00 per 1M output tokens. Fast mode: $10.00 / $50.00.
- **Architecture:** Proprietary.

### Raw benchmarks found

Agent / tool use:
- Terminal-Bench 2.1: **74.6%** (Anthropic system card)
- BrowseComp: **84.3%** (Anthropic system card)
- OSWorld-Verified: **83.4%** (Anthropic system card / updated evaluation)
- Online-Mind2Web: **84%** (Miguel Gonzalez / browser agent lead)
- MCP Atlas: **82.2%** (Anthropic system card)

Reasoning / knowledge:
- GPQA Diamond: **93.6%** (Anthropic system card)
- HLE (Humanity's Last Exam): **57.9%** (Anthropic system card)
- AA-LCR: **77.7%** (Artificial Analysis)
- USAMO 2026: **96.7%** (Anthropic system card)

Coding:
- SWE-bench Verified: **88.6%** (Anthropic system card)
- SWE-bench Pro: **69.2%** (Anthropic system card)
- CursorBench 3.2: **62.3%** (Cursor evals)
- LiveCodeBench (Vals): **87.8%**

Multimodal:
- CharXiv: **89.9%** (Anthropic system card)
- ScreenSpot Pro: **87.9%** (Anthropic system card)
- ParseBench: **62.27%** (LlamaIndex)

Long context:
- Retrieval: Consistent high fidelity across 1M tokens; supports parallel subagent planning in Claude Code.

### Normalized scores (1–100)

- **Tool use: 90/100.** Demonstrates major quality-of-life gains in reliability and tool-calling efficiency, with strong browser-agent performance (84% Mind2Web).
- **Reasoning: 94/100.** High-tier GPQA (93.6%) and near-perfect USAMO results (96.7%) confirm frontier-class logical reasoning.
- **Context window: 95/100.** Verified 1M token window with robust retrieval and improved token efficiency over the 4.7 generation.
- **Multimodal: 85/100.** Strong visual reasoning and chart analysis; score capped by text-only output.
- **Coding: 93/100.** Exceptional SWE-bench Verified (88.6%) performance and reliable execution of codebase-scale migrations.
- **Cost efficiency: 52/100.** Competitive $5/$25 pricing for a top-tier flagship; fast mode is significantly cheaper than previous iterations.
- **Overall Score: 91.4/100.** Recommended for high-stakes professional workflows, substantive legal/tax research, and autonomous engineering where honesty and judgment are paramount.

---

## Signature

- Provided by: **Gemini 3 Flash (google/gemini-3-flash-preview)** — 2026-11-14
- Method: Public internet research via Anthropic official announcements and system card audits; verified against benchmark results from Hebbia, Databricks, and Artificial Analysis.
- Reference URLs:
  - [Introducing Claude Opus 4.8 (Anthropic Announcement)](https://www.anthropic.com/news/claude-opus-4-8)
  - [Claude Opus 4.8 System Card](https://cdn.sanity.io/files/4zrzovbb/website/c886650a2e96fc0925c805a1a7ca77314ccbf4a6.pdf)
  - [BenchLM — Claude Opus 4.8 Benchmark Profile](https://benchlm.ai/models/claude-opus-4-8)
  - [Artificial Analysis — Claude Opus 4.8 model page](https://artificialanalysis.ai/models/claude-opus-4-8)
  - [Introducing dynamic workflows in Claude Code](https://claude.com/blog/introducing-dynamic-workflows-in-claude-code)

- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
