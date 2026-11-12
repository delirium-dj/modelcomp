# Claude Fable 5.2 — findings by Ernie 5.5 Flash

- Source: Anthropic/Claude Fable 5.2 (`claude-fable-5.2`)
- Date: 2026-11-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5.2
- **Short description:** Anthropic's demanding-reasoning / long-horizon agentic model (released 2026-11-09), the top of the Fable 5 line and BenchLM's #1-ranked model at publication.
- **Provider / access:** Anthropic API (`claude-fable-5-2`), Amazon Bedrock, Google Vertex (`claude-fable-5-2@default`), plus ~19 gateway routes.
- **Release / knowledge:** 2026-11-09; knowledge cutoff 2026-06 (models.dev).
- **IDs:** `claude-fable-5-2`, `anthropic/claude-fable-5.2`, `opencode/claude-fable-5.2`.
- **Context window:** 1,000,000 tokens; max output 128,000.
- **Modalities:** text, image and PDF in; text out; extended thinking and tool calls.
- **Pricing (as of 2026-11-11/12):** $8.00 / $40.00 per 1M input/output; cache read $0.20.
- **Architecture:** proprietary (undisclosed).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **67.60%** (best verified row in this dataset)
- FrontierSWE v2: **69.9%**; CursorBench 4.0: **60.0%** (best verified row)
- ProgramBench: **85.6%**; Bug Hunt Bench: **58.0 fixes** (best verified row)
- DeepSWE: **74.3%**; Terminal-Bench 4.x science row: not published separately

Reasoning / knowledge:

- HLE / GPQA Diamond / ARC-AGI / FrontierMath: no verified public rows published for Fable 5.2
- BenchLM ranks its Agentic category #1 overall

Coding:

- SWE-bench Pro: **93%** (best verified row in this dataset)
- SWE Multilingual: **96.6%** (best verified row)
- SWE-bench Multimodal: **74.1%**; DeepSWE: **74.3%**
- FrontierCode 2.0: **49.1%**; LiveCodeBench: no verified public row published

Long context:

- 1M context documented; no MRCR / RULER / GraphWalks row published

### Normalized scores (1–100)

- **Tool use: 95/100.** Terminal-Bench 4.0 67.6%, CursorBench 4.0 60.0% and Bug Hunt 58.0 fixes are the best verified agentic rows in this dataset.
- **Reasoning: 90/100.** No public HLE/GPQA/ARC row was published; the score rests on its #1 agentic rank and its coding depth — medium confidence.
- **Context window: 100/100.** 1,000,000 tokens with 128,000 max output.
- **Multimodal: 70/100.** Text, image and PDF in; SWE-bench Multimodal 74.1% is the only verified multimodal row and it is mid.
- **Coding: 95/100.** SWE-bench Pro 93%, SWE Multilingual 96.6% and ProgramBench 85.6% are the best verified coding cluster in this dataset.
- **Cost efficiency: 40/100.** $8/$40 per 1M — 2× Opus 5.5 and 4× Sonnet 5.5.
- **Overall Score: 90.0/100.** Best fit for the hardest long-horizon coding migrations and agentic audits where completion quality justifies the price; a poor default for high-volume work.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-12
- Method: public internet research (Anthropic model documentation, BenchLM profile, models.dev); normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Claude Fable 5.2 — Anthropic model overview](https://docs.anthropic.com/en/docs/about-claude/models/overview)
  - [Claude Fable 5.2 benchmarks & sources — BenchLM](https://benchlm.ai/models/claude-fable-5-2)
  - [models.dev provider catalog](https://models.dev)
- Future sources: add `Claude_Fable_5.2_v2.md` next to this file.