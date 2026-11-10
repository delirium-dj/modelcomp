# Claude Mythos 5.2 — findings by Beam

- Source: Anthropic (`anthropic/claude-mythos-5.2`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5.2
- **Short description:** Anthropic's restricted, security-vetted configuration of Fable 5.2 (1M/128K, $10/$50) deployed with lifted dual-use refusals for verified defensive cyber and biosecurity research.
- **Provider / access:** Anthropic API (`claude-mythos-5.2`); gated behind Cyber Verification Program (CVP) / Project Glasswing. Paid only; no general API access.
- **Release / knowledge:** Released November 9, 2026 (alongside Fable 5.2).
- **IDs:** `anthropic/claude-mythos-5.2`. No Free ID.
- **Context window:** 1,000,000 total tokens; 128,000 max output. Verified via Anthropic system card.
- **Modalities:** Text and image in; text out. Reasoning (extended thinking). Tool calls.
- **Pricing (as of 2026-11-10):** $10.00 / $50.00 per 1M input/output (same as Fable 5.2 tier). Vetted CVP/Glasswing access only.
- **Architecture:** Proprietary; shares the Fable 5.2 architecture (parameter count undisclosed).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **70.50%** (Anthropic system card, Nov 9 2026)
- Terminal-Bench-Science 0.1: **75.3%** (system card)
- CVE Rediscovery: **89.6%** (system card)
- ExploitGym: **38.1%** (system card)
- Binary Exploitation Benchmark: **148** (system card)
- Biomedical image analysis: **80.7%** (system card)
- AA-LCR: **83.3%** (Artificial Analysis, shared Fable 5.2 page)
- CritPt: **35.4%** (Artificial Analysis)

Reasoning / knowledge:

- HLE: **74.2%** (system card, shared with Fable 5.2)
- De novo protein-binder design: **85.1%** (system card)
- Protein Design: **64.6%** (system card)
- SingleCellBench: **65.6%** (system card)
- Protocols (troubleshooting): **77.1%** (system card)
- Protein Domain ID: **91.8%** (system card)
- Protein Mutation Attribution: **51.5%** (system card)
- Morphology-to-molecule matching: **35.2%** (system card)
- Medicinal chemistry: **69.0%** (system card)
- AA-Omniscience Index: **66.8%**; Accuracy **79.1%**; Hallucination Rate **59.3%** (Artificial Analysis)
- AA Intelligence Index: **64.6%** (Artificial Analysis)

Multimodal:

- Biomedical image analysis: **80.7%** (system card)
- Chartography/OfficeQA not separately reported for Mythos; multimodal capability inherited from Fable 5.2 base.

Long context:

- AA-LCR: **83.3%** at 1M context (Artificial Analysis).

### Normalized scores (1–100)

- **Tool use: 90/100.** Terminal-Bench 4.0 70.50% plus strong CVE Rediscovery 89.6% and ExploitGym 38.1%; caps include restricted scope (cyber/bio focus, no general agentic benchmarks like GDPval/OSWorld reported for this SKU).
- **Reasoning: 92/100.** HLE 74.2%, AA-LCR 83.3%, CritPt 35.4%, Protein Domain ID 91.8%; caps include CritPt mid-range and absence of a published GPQA Diamond headline.
- **Context window: 96/100.** Native 1M tokens with AA-LCR 83.3% retrieval; 128K max output generation cap.
- **Multimodal: 75/100.** Text + image input with biomedical image analysis 80.7%; no audio/video input; narrower multimodal eval coverage than Fable 5.2.
- **Coding: 85/100.** Terminal-Bench 4.0 70.50% and Terminal-Bench-Science 75.3%; no SWE-bench headline for this SKU (cyber-focused evals dominate); caps include absence of standard software-engineering benchmarks.
- **Cost efficiency: 25/100.** Paid restricted-access pricing $10.00/$50.00 per 1M; no free tier; vetted access only.
- **Overall Score: 88/100.** Mean of [Tool 90 + Reasoning 92 + Context 96 + Multimodal 75 + Coding 85] / 5 = 87.6 → 88. Best fit: authorized defensive cyber, vulnerability research, and biosecurity analysis where lifted safety filters are required.

---

## Signature

- Provided by: **Beam (Reflection AI — opencode/beam-free)** — 2026-11-10
- Method: fresh public web research (BenchLM + Anthropic system card cited via BenchLM); scores are normalized 1–100 interpretations, not official vendor scores; every number carries a source line.
- Reference URLs:
  - [Anthropic: Claude Fable 5.2 and Claude Mythos 5.2 system card (Nov 9, 2026)](https://assets.claude.com/27d60918d218125e7504bc7354c4b4626ec56b11.pdf)
  - [BenchLM: Claude Mythos 5.2](https://benchlm.ai/models/claude-mythos-5-2)
  - [Artificial Analysis: Claude Fable 5.2 (Max)](https://artificialanalysis.ai/models/claude-fable-5-2)
- Future sources: add a new file next to this one, e.g. `Beam_Alt.md`, using the same headings.
