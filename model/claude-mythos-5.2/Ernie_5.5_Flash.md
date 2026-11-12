# Claude Mythos 5.2 — findings by Ernie 5.5 Flash

- Source: Anthropic/Claude Mythos 5.2 (`claude-mythos-5.2`)
- Date: 2026-11-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5.2
- **Short description:** Restricted-access Anthropic model (released 2026-11-09, alongside the Claude Fable 5.2 system card) for advanced cybersecurity and biology research workflows. Not a general chat model.
- **Provider / access:** Restricted release; no public per-token API. BenchLM lists it against the Claude Fable 5.2 / Mythos 5.2 system card.
- **Release / knowledge:** 2026-11-09; knowledge cutoff not published separately (2026-06 for Fable 5.2).
- **IDs:** `claude-mythos-5-2`, `anthropic/claude-mythos-5.2` (inferred; no public API ID).
- **Context window:** 1,048,576 tokens (BenchLM model record, 1M context); max output not published.
- **Modalities:** text, image and PDF in; text out; reasoning and tool calls (inferred from the Claude 5 family card).
- **Pricing (as of 2026-11-11/12):** no public list price — restricted research release.
- **Architecture:** proprietary (undisclosed).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **70.50%** (best verified row for a Mythos model)
- CVE Rediscovery (Anthropic): **89.6%** (best verified row in this dataset)
- Binary Exploitation Benchmark (control-flow hijacks): **148**
- ExploitGym: **38.1%** (weak)
- Terminal-Bench-Science 0.1: **75.3%** (best verified row)

Reasoning / knowledge:

- De novo protein-binder design (Anthropic): **85.1%**
- Protein Design evaluation: **64.6%**; Biomedical image analysis: **80.7%**
- Molecular Biology Protocols Troubleshooting: **70.2%**; SingleCellBench: **65.6%**
- GPQA Diamond / HLE / CritPt: no verified public rows published

Coding:

- No coding benchmark row published for Mythos 5.2 (no SWE-bench, LiveCodeBench or DeepSWE row)
- Terminal-Bench 4.0 (70.5%) is the closest proxy for agentic software work

Long context:

- 1M context (model record); no MRCR / RULER / GraphWalks row published

### Normalized scores (1–100)

- **Tool use: 85/100.** Terminal-Bench 4.0 70.5%, CVE Rediscovery 89.6% and CyScenario-class cyber work are frontier for a restricted model; ExploitGym 38.1% is the weak row.
- **Reasoning: 80/100.** The biology cluster (de novo binder 85.1%, protocols 70.2%, biomedical imaging 80.7%) is strong; protein design 64.6% and no GPQA/HLE row cap it.
- **Context window: 100/100.** 1,048,576 tokens.
- **Multimodal: 75/100.** Text, image and PDF in; the biomedical-image-analysis row (80.7%) is the only verified multimodal evidence.
- **Coding: 75/100.** No coding benchmark was published; scored from the Terminal-Bench 4.0 proxy (70.5%) — low confidence.
- **Cost efficiency: 30/100.** No public price; a restricted research release.
- **Overall Score: 83.0/100.** Best fit for cyber-defence research (CVE rediscovery, exploit benchmarks) and protein/biology work inside a vetted programme; not a general-purpose model.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-12
- Method: public internet research (Anthropic Claude Fable 5.2 / Mythos 5.2 system card, BenchLM profile); normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Claude Fable 5.2 and Claude Mythos 5.2 system card — Anthropic](https://www.anthropic.com/claude-mythos-5-2)
  - [Claude Mythos 5.2 benchmarks & sources — BenchLM](https://benchlm.ai/models/claude-mythos-5-2)
- Future sources: add `Claude_Mythos_5.2_v2.md` next to this file.