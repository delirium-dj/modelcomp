# Claude Fable 5 — findings by Gemini 3 Flash (google/gemini-3.0-flash)
- Source: Anthropic (`anthropic/claude-fable`)
- Date: 2026-10-25
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card
- **Name:** Claude Fable 5
- **Short description:** Anthropic's earlier-2026 flagship agentic model, featuring high-fidelity autonomous terminal navigation and strong abstract reasoning capabilities.
- **Provider / access:** Anthropic API (`anthropic/claude-fable`), AWS Bedrock, Google Vertex AI.
- **Release / knowledge:** July 2026 release; knowledge cutoff April 2026.
- **IDs:** `anthropic/claude-fable` (Available via paid Anthropic API and enterprise tiers).
- **Context window:** 1,000,000 total tokens; verified via Anthropic documentation.
- **Modalities:** Text and image input; text output; native reasoning (yes); tool calls; JSON mode.
- **Pricing (as of 2026-10-25):** $15.00 per 1M input / $75.00 per 1M output; Cached input: $0.75 per 1M.
- **Architecture:** Proprietary (estimated Mixture-of-Experts); closed-weights.

### Raw benchmarks found
Agent / tool use:
- Terminal-Bench 2.1: **84.3%** (Anthropic) / **84.6%** (Artificial Analysis)
- Terminal-Bench 3.0: **34.0%** (FrontierBench)
- OSWorld-Verified: **85%** (Anthropic)
- τ²-bench: **98.5%** (Artificial Analysis)
- GDPval-AA: **55.5%** (Artificial Analysis) / **1747 Elo**
- AA Briefcase: **1720 Elo** (Anthropic)

Reasoning / knowledge:
- GPQA Diamond: **92.6%** (Artificial Analysis) / **93.2%** (Vals AI)
- HLE: **55.5%** (Artificial Analysis)
- ARC-AGI-1 / 2: **98.5% / 89.2%** (ARC Prize)
- Artificial Analysis Intelligence Index: **49.6** (Artificial Analysis)

Coding:
- SWE-bench Verified: **95%** (Anthropic)
- SWE-bench Pro: **80%** (Anthropic)
- LiveCodeBench: **89.8%** (Vals AI)
- FrontierCode 1.1 Main: **53.5%** (Cognition)
- VulcanBench v3: **89.5%** (Morgan Linton)

Long context:
- AA-LCR: **82.3%** (Artificial Analysis)
- OfficeQA Pro: **57.9%** (Anthropic)

### Normalized scores (1-100)
- **Tool use: 94/100.** Strong terminal and OS-level agentic performance, with near-perfect scores on specialized tool-use benchmarks (τ²-bench 98.5%).
- **Reasoning: 96/100.** High-fidelity reasoning on GPQA Diamond (92.6%) and strong abstract reasoning on ARC-AGI-1.
- **Context window: 100/100.** Verified 1M token window with high retrieval efficiency and long-context synthesis.
- **Multimodal: 75/100.** Supports high-fidelity text and image inputs.
- **Coding: 94/100.** Elite coding performance with near-frontier results on SWE-bench and LiveCodeBench.
- **Cost efficiency: 25/100.** Very high pricing ($15/$75) reflects its earlier flagship status, now largely superseded by 5.1 and Sol variants.
- **Overall Score: 91.8/100.** (Rounded for queue: 91) Elite agentic model for autonomous terminal operations and complex knowledge synthesis.

---

## Signature
- Provided by: **Gemini 3 Flash (google/gemini-3.0-flash)** — 2026-10-25
- Method: Public internet research across Anthropic documentation, Artificial Analysis, and BenchLM; scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
