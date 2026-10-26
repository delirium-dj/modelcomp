# Claude Fable 5.1 — findings by Gemini 3 Flash (google/gemini-3.0-flash)
- Source: Anthropic (`anthropic/claude-fable-5.1`)
- Date: 2026-10-25
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card
- **Name:** Claude Fable 5.1
- **Short description:** Anthropic's flagship agentic reasoning model from the Fable family, designed for complex autonomous system navigation, high-stakes knowledge work, and elite coding.
- **Provider / access:** Anthropic API (`anthropic/claude-fable-5.1`), AWS Bedrock, Google Vertex AI.
- **Release / knowledge:** September 2026 release; knowledge cutoff June 2026.
- **IDs:** `anthropic/claude-fable-5.1` (No Zen Free-tier ID exists).
- **Context window:** 1,000,000 total tokens; verified via Anthropic launch documentation.
- **Modalities:** Text and image input; text output; native reasoning (yes); tool calls; JSON mode.
- **Pricing (as of 2026-10-25):** $10.00 per 1M input / $50.00 per 1M output; Cached input: $0.25 per 1M (after price cut).
- **Architecture:** Proprietary; closed-weights.

### Raw benchmarks found
Agent / tool use:
- Terminal-Bench 4.0: **55.8%** (Anthropic) / **52.0%** (Artificial Analysis)
- Terminal-Bench 2.1: **91.4%** (Artificial Analysis)
- Intelligence Index: **58.0** (Artificial Analysis)
- Toolathlon-Verified: **77.8%** (Anthropic)
- GDPval-AA: **62.7%** (Artificial Analysis) / **1755 Elo**

Reasoning / knowledge:
- GPQA Diamond: **93.7%** (Artificial Analysis) / **93.4%** (Vals AI)
- HLE: **65.0%** (Anthropic) / **59.1%** (Artificial Analysis)
- ARC-AGI-1 / 2: **97.5% / 90%** (Anthropic)
- CritPt: **29.7%** (Artificial Analysis)

Coding:
- DeepSWE: **67.4%** (Anthropic)
- SWE-bench Pro: **81.2%** (Anthropic)
- LiveCodeBench: **90.5%** (Vals AI)
- FrontierCode 1.1 Extended: **63.6%** (Anthropic)

Long context:
- AA-LCR: **85.3%** (Artificial Analysis)
- Graphwalks BFS (256K–1M): **65.0%** (Google)

### Normalized scores (1-100)
- **Tool use: 95/100.** Elite agentic capabilities with #1-ranked Intelligence Index (58.0) and high terminal performance (91.4% on TB2.1).
- **Reasoning: 98/100.** Frontier-leading reasoning on HLE (65.0%) and strong abstract reasoning on ARC-AGI.
- **Context window: 100/100.** Verified 1M token window with exceptional long-range synthesis fidelity (AA-LCR 85.3%).
- **Multimodal: 75/100.** Supports high-fidelity text and image inputs.
- **Coding: 94/100.** Exceptional coding performance with SOTA-tier LiveCodeBench (90.5%) and strong SWE-bench Pro results.
- **Cost efficiency: 30/100.** Premium $10.00/$50.00 pricing reflects its status as a top-tier reasoning model; aggressive caching discounts offset cost for agents.
- **Overall Score: 92.4/100.** (Rounded for queue: 92) Definitive flagship for high-stakes agentic reasoning and complex repository-scale engineering.

---

## Signature
- Provided by: **Gemini 3 Flash (google/gemini-3.0-flash)** — 2026-10-25
- Method: Public internet research across Anthropic documentation, Artificial Analysis, and BenchLM; scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
