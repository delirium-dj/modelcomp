# Claude Mythos 5.2 — findings by Inkling 2 Small

- Source: Anthropic (`claude-mythos-5.2`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5.2
- **Short description:** Anthropic's verification-gated configuration of the Claude Fable 5.2 model — same weights and specifications, reduced safeguards, offered only to organizations verified through Anthropic's verification programs (e.g. the Cyber Verification Program) for defensive cybersecurity and life-sciences work. Not a separate capability lineage; Fable 5.2 is the general-access twin.
- **Provider / access:** Claude API (`claude-mythos-5-2`), Amazon Bedrock (`anthropic.claude-mythos-5-2`), Google Cloud (Google managed + Anthropic managed), Microsoft Foundry. Verification required; Messages API.
- **Release / knowledge:** Released 2026-11-09; reliable knowledge cutoff Jun 2026.
- **IDs:** `claude-mythos-5-2` (Claude API); `anthropic.claude-mythos-5-2` (Bedrock)
- **Context window:** 1,000,000 tokens (~555k words); max output 128K tokens.
- **Modalities:** text and images in; text out; adaptive thinking always on (default effort `high`); tool calls yes; JSON mode yes.
- **Pricing (as of 2026-11-10):** $8.00 / 1M input, $40.00 / 1M output; 5m cache write $10, 1h cache write $16, cache read $0.20; Batch API 50% off. Restricted to verified organizations.
- **Architecture:** proprietary; parameter count undisclosed.

### Raw benchmarks found

(Mythos 5.2 shares weights with Fable 5.2 — the Fable 5.2 system card rows apply; Mythos-specific rows below are from the same card, Nov 2026.)

Agent / tool use:

- Terminal-Bench 4.0: **70.5%** (system card; Fable 5.2 same configuration)
- Terminal-Bench-Science 0.1: **75.3%** (system card)
- CVE Rediscovery: **89.6%** (system card)
- ExploitGym: **38.1%** (system card)
- Binary Exploitation Benchmark: **148** (system card)
- OSWorld 2.1 Offline: **89.3%** (system card, via Fable 5.2 configuration)

Reasoning / knowledge:

- HLE: **74.2%**; HLE w/o tools **73.2%** (system card)
- AA Intelligence Index: **64.6%** (Artificial Analysis, Fable 5.2 config)
- AA-Omniscience: Accuracy **79.1%** (Artificial Analysis, Fable 5.2 config)
- De novo protein-binder design: **85.1%**; Protein Design **64.6%**; SingleCellBench **65.6%**; Protein Domain ID **91.8%**; Medicinal chemistry **69.0%** (system card)

Coding:

- SWE-bench Pro: **93%**; SWE Multilingual **96.6%** (system card, Fable 5.2 config)
- ProgramBench: **85.6%**; DeepSWE **74.3%** (system card)
- FrontierSWE v2: **69.9%** (Proximal); FrontierCode 2.0: **49.1%** (Cognition)

Long context:

- AA-LCR: **83.3%** at 1M tokens (Artificial Analysis, Fable 5.2 config).

Multimodal:

- Biomedical image analysis: **80.7%** (system card)
- Chartography (tools): **91.6%**; OfficeQA: **83.4%** (system card, Fable 5.2 config)

### Normalized scores (1–100)

- **Tool use: 92/100.** Terminal-Bench 4.0 70.5%, OSWorld 89.3%, CVE Rediscovery 89.6% — elite agentic/cyber tool use; capped by ExploitGym 38.1%.
- **Reasoning: 89/100.** HLE 74.2%, AA Index 64.6, Omniscience Accuracy 79.1%, protein-binder design 85.1% — frontier across domains; capped by CritPt 35.4% (AA, Fable 5.2 config).
- **Context window: 95/100.** 1M tokens, 128K max output, AA-LCR 83.3%.
- **Multimodal: 85/100.** Text+image in, text out; Biomedical image analysis 80.7%, Chartography (tools) 91.6%; no audio/video I/O.
- **Coding: 93/100.** SWE-bench Pro 93%, Multilingual 96.6%, ProgramBench 85.6% — best-in-class agentic software engineering; capped by FrontierCode 2.0 49.1%.
- **Cost efficiency: 20/100.** $8/$40 per 1M — flagship pricing, restricted to verified organizations.
- **Overall Score: 91/100.** (92 + 89 + 95 + 85 + 93) / 5 = 90.8 → 91. Best fit: verified cybersecurity and life-sciences organizations needing maximum capability with reduced safeguards; not for general deployment.

## Signature

- Provided by: **Inkling 2 Small (thinkingmachines/inkling-2-small)** — 2026-11-10 UTC
- Method: public internet research (Anthropic platform docs, Fable 5.2/Mythos 5.2 system card via BenchLM mirrors, launch post); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Claude Mythos 5.2 — Claude Platform Docs](https://platform.claude.com/docs/en/models/mythos-5-2/overview)
  - [Introducing Claude Fable 5.2 and Claude Mythos 5.2 — Anthropic](https://www.anthropic.com/claude-fable-and-mythos-5-2)
  - [Claude Fable 5.2 & Claude Mythos 5.2 System Card (PDF) — Anthropic](https://assets.claude.com/27d60918d218125e7504bc7354c4b4626ec56b11.pdf)
  - [Claude Mythos 5.2 — BenchLM](https://benchlm.ai/models/claude-mythos-5-2)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
