# Claude Fable 5.2 — findings by Beam

- Source: Anthropic (`anthropic/claude-fable-5.2`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5.2
- **Short description:** Anthropic's frontier Mythos-class successor to Fable 5.1 (1M/128K, $8/$40) optimized for long-horizon agentic workflows, advanced codebase engineering, and multimodal reasoning.
- **Provider / access:** Anthropic API (`claude-fable-5.2`); OpenCode Console `anthropic/claude-fable-5.2` (Chat Completions / Messages API). Paid only.
- **Release / knowledge:** Released November 9, 2026; knowledge cutoff per Anthropic system card (Nov 2026).
- **IDs:** `anthropic/claude-fable-5.2` (OpenCode Console `claude-fable-5-2`). No Free ID.
- **Context window:** 1,000,000 total tokens; 128,000 max output. Verified via Anthropic system card + Artificial Analysis.
- **Modalities:** Text and image in; text out. Reasoning (extended thinking). Tool calls, JSON mode.
- **Pricing (as of 2026-11-10):** $8.00 / $40.00 per 1M input/output; cache read $0.20/1M; cache write $10.00/1M. Paid only.
- **Architecture:** Proprietary; parameter count not disclosed by Anthropic.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **67.60%** (Anthropic system card, Nov 9 2026)
- Terminal-Bench-Science 0.1: **74.6%** (system card)
- AutomationBench: **51.4%** (system card)
- OSWorld 2.1 Offline: **89.3%** (system card)
- GDPval-AA: **1831** (system card)
- AA Briefcase (Elo): **1785**; rubric **66.1%** (system card)
- WANDR: **82.1%** (system card)
- Remote Labor Index: **41.3%** (system card)
- RoboDojo Sim: **64.9%** (Anthropic announcement)
- Harvey LAB-AA v1.1: **7.2%** (system card)
- DRACO: **87.7%** (system card)
- Real-World Finance v2: **1637** (system card)
- AA AutomationBench: **76.4%** (Artificial Analysis)
- AA Terminal-Bench 4.0: **59.6%** (Artificial Analysis)
- GDP.pdf: **24.2%** (Artificial Analysis)

Reasoning / knowledge:

- HLE: **74.2%** (system card); HLE w/o tools **73.2%**
- CritPt: **35.4%** (Artificial Analysis)
- AA-LCR: **83.3%** (Artificial Analysis)
- ARC-AGI-3: **65.7%**; Provider Adapter **94.90%** (system card)
- STEM Professor Bench: **61.8%** (system card)
- PhysicianBench: **64.4%** (system card)
- HealthBench (raw): **58.8%**; length-adjusted **59.6%** (system card)
- HealthBench Professional (raw): **71.1%**; length-adjusted **67.7%** (system card)
- AA Intelligence Index: **64.6%** (Artificial Analysis)
- AA-HLE: **74.3%** (Artificial Analysis)
- AA-Omniscience Index: **66.8%**; Accuracy **79.1%**; Hallucination Rate **59.3%** (Artificial Analysis)
- Artificial Analysis Intelligence Index: **65** (AA composite)

Coding:

- SWE-bench Pro: **93%** (system card)
- SWE Multilingual: **96.6%** (system card)
- SWE Multimodal: **74.1%** (system card)
- DeepSWE: **74.3%** (system card)
- FrontierSWE v2: **69.9%** (Proximal)
- ProgramBench: **85.6%** (system card)
- FrontierCode 2.0: **49.1%** (Cognition)
- AA-SciCode: **67.7%** (Artificial Analysis)
- CursorBench 4.0: **60.0%** (Cursor evals)

Multimodal:

- Chartography (no tools): **73.4%**; (tools): **91.6%** (system card)
- OfficeQA: **83.4%**; OfficeQA Pro: **72.9%** (system card)
- BenchCAD 2.1: **75.4%**; (tools): **83.5%** (system card)

Long context:

- AA-LCR: **83.3%** at 1M context (Artificial Analysis). Strong retrieval at long context.

Multilingual:

- GMMLU: **96.0%** (system card)
- MILU: **94.1%** (system card)

### Normalized scores (1–100)

- **Tool use: 95/100.** Frontier agentic profile: GDPval-AA 1831, OSWorld 2.1 89.3%, AA Briefcase 1785, WANDR 82.1%; caps include lower AA Terminal-Bench 4.0 (59.6%) and Harvey LAB 7.2%.
- **Reasoning: 96/100.** HLE 74.2%, ARC-AGI-3 Provider Adapter 94.90%, AA-LCR 83.3%, CritPt 35.4%; caps include CritPt mid-range and absence of a published GPQA Diamond headline.
- **Context window: 96/100.** Native 1M tokens with AA-LCR 83.3% retrieval; max output 128K is a generation cap but context ceiling dominates.
- **Multimodal: 80/100.** Text + image input with strong grounded/multimodal scores (Chartography 91.6% with tools, OfficeQA 83.4%); no audio/video input keeps it below omni-frontier tier.
- **Coding: 97/100.** SWE-bench Pro 93%, SWE Multilingual 96.6%, DeepSWE 74.3%, ProgramBench 85.6%; caps include FrontierCode 2.0 49.1% and CursorBench 60.0%.
- **Cost efficiency: 30/100.** Paid frontier pricing $8.00/$40.00 per 1M; no free tier (noFreeId).
- **Overall Score: 93/100.** Mean of [Tool 95 + Reasoning 96 + Context 96 + Multimodal 80 + Coding 97] / 5 = 92.8 → 93. Best fit: highest-capability agentic coding and long-horizon engineering where budget permits.

---

## Signature

- Provided by: **Beam (Reflection AI — opencode/beam-free)** — 2026-11-10
- Method: fresh public web research (Artificial Analysis model page + BenchLM + Anthropic system card PDF cited via BenchLM); scores are normalized 1–100 interpretations, not official vendor scores; every number carries a source line.
- Reference URLs:
  - [Anthropic: Claude Fable 5.2 and Claude Mythos 5.2 system card (Nov 9, 2026)](https://assets.claude.com/27d60918d218125e7504bc7354c4b4626ec56b11.pdf)
  - [Anthropic: Introducing Claude Fable 5.2 and Claude Mythos 5.2](https://www.anthropic.com/claude-fable-and-mythos-5-2)
  - [Artificial Analysis: Claude Fable 5.2 (Max)](https://artificialanalysis.ai/models/claude-fable-5-2)
  - [BenchLM: Claude Fable 5.2](https://benchlm.ai/models/claude-fable-5-2)
- Future sources: add a new file next to this one, e.g. `Beam_Alt.md`, using the same headings.
