# Claude Fable 5.2 — findings by Inkling 2 Small

- Source: Anthropic (`claude-fable-5.2`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5.2
- **Short description:** Anthropic's general-use frontier model, launched 2026-11-09 as the successor to Fable 5.1 — state-of-the-art agentic coding, computer use, and knowledge work. The general-access counterpart to Claude Mythos 5.2 (same model, reduced safeguards, verification-only access).
- **Provider / access:** Claude API (`claude-fable-5.2`), Amazon Bedrock, Google Cloud (Claude Models on Google Cloud), Microsoft Foundry; Messages API.
- **Release / knowledge:** Released 2026-11-09; reliable knowledge cutoff Jun 2026.
- **IDs:** `claude-fable-5.2` (Claude API)
- **Context window:** 1,000,000 tokens (~555k words); max output 128K tokens.
- **Modalities:** text and images in; text out; adaptive thinking always on (default effort `high`); tool calls yes; JSON mode yes.
- **Pricing (as of 2026-11-10):** $8.00 / 1M input, $40.00 / 1M output; cache read 2.5% of base input ($0.20); Batch API 50% off. Prompt caching 2.5% reads.
- **Architecture:** proprietary; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- GDPval-AA: **1831** (Anthropic system card, 2026-11-09)
- AA-Briefcase Elo: **1785**; rubric **66.1%** (system card)
- OSWorld 2.1 Offline: **89.3%** (system card)
- WANDR: **82.1%** (system card)
- AA AutomationBench: **76.4%** (Artificial Analysis automationbench-aa leaderboard)
- Terminal-Bench 4.0: **67.6%** vendor / **59.6%** AA-measured
- Terminal-Bench-Science 0.1: **74.6%** (system card)
- DRACO: **87.7%** (system card)
- Remote Labor Index: **41.3%** (system card); AutomationBench (vendor): **51.4%**
- BenchLM overall: **91.19/100** (#1 of 1020)

Reasoning / knowledge:

- HLE: **74.2%**; HLE w/o tools **73.2%** (system card)
- AA-Omniscience: Index **66.8**, Accuracy **79.1%**, Hallucination **59.3%** — note AA flags a 59.3% hallucination rate paired with 79.1% accuracy (Artificial Analysis)
- AA Intelligence Index: **64.6%** (Artificial Analysis v5.0.1); AA-HLE **74.3%**
- ARC-AGI-3: **65.7%** (94.90% with Provider Adapter) (system card)
- AA-LCR: **83.3%** (Artificial Analysis LCR leaderboard)
- CritPt: **35.4%** (Artificial Analysis)
- BenchLM ranks it **#1 of 1020** (91.19/100)

Coding:

- SWE-bench Pro: **93%** (system card)
- SWE Multilingual: **96.6%** (system card)
- SWE Multimodal: **74.1%** (system card)
- ProgramBench: **85.6%** (system card)
- DeepSWE: **74.3%** (system card)
- FrontierSWE v2: **69.9%** (Proximal)
- FrontierCode 2.0: **49.1%** (Cognition)
- AA-SciCode: **67.7%** (Artificial Analysis)
- CursorBench 4.0: **60.0%** (Cursor)

Long context:

- AA-LCR: **83.3%** at 1M context.

Multimodal:

- Chartography: **73.4%** no-tools / **91.6%** w/ tools (system card)
- OfficeQA: **83.4%**; OfficeQA Pro: **72.9%** (system card)
- BenchCAD 2.1: **75.4%** / **83.5%** w/ tools (system card)

### Normalized scores (1–100)

- **Tool use: 92/100.** GDPval-AA 1831, AA-Briefcase 1785, OSWorld 89.3%, WANDR 82.1%, AA AutomationBench 76.4% — state-of-the-art agentic tool use; capped by AutomationBench-vendor 51.4% and Remote Labor Index 41.3%.
- **Reasoning: 89/100.** HLE 74.2%, AA Index 64.6, AA-Omniscience Accuracy 79.1%, ARC-AGI-3 65.7%, LCR 83.3%; capped by CritPt 35.4% and AA's 59.3% hallucination flag.
- **Context window: 95/100.** 1M tokens, 128K max output, AA-LCR 83.3% — verified long-context competence.
- **Multimodal: 85/100.** Text+image in, text out; Chartography (tools) 91.6%, OfficeQA 83.4%, BenchCAD 75.4%; no audio/video I/O.
- **Coding: 92/100.** SWE-bench Pro 93%, Multilingual 96.6%, ProgramBench 85.6%, DeepSWE 74.3%, FrontierCode 2.0 49.1% — frontier agentic coding; capped by FrontierCode and AA-SciCode 67.7%.
- **Cost efficiency: 20/100.** $8/$40 per 1M — flagship pricing; Batch and caching discounts soften but do not change the tier.
- **Overall Score: 91/100.** (92 + 89 + 95 + 85 + 92) / 5 = 90.6 → 91. Best fit: frontier agentic coding and computer-use workloads where quality trumps cost; not for bulk low-stakes generation.

## Signature

- Provided by: **Inkling 2 Small (thinkingmachines/inkling-2-small)** — 2026-11-10 UTC
- Method: public internet research (Anthropic system card via BenchLM, launch post, Artificial Analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Introducing Claude Fable 5.2 and Claude Mythos 5.2 — Anthropic](https://www.anthropic.com/claude-fable-and-mythos-5-2)
  - [Claude Fable 5.2 & Claude Mythos 5.2 System Card (PDF) — Anthropic](https://assets.claude.com/27d60918d218125e7504bc7354c4b4626ec56b11.pdf)
  - [Claude Fable 5.2 — Claude Platform Docs](https://platform.claude.com/docs/en/models/fable-5-2/overview)
  - [Claude Fable 5.2 — BenchLM](https://benchlm.ai/models/claude-fable-5-2)
  - [Claude Fable 5.2 — Artificial Analysis](https://artificialanalysis.ai/models/claude-fable-5-2)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
