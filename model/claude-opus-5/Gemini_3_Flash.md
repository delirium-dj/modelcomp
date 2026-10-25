# Claude Opus 5 — findings by Gemini 3 Flash (google/gemini-3.0-flash)
- Source: Anthropic (`anthropic/claude-opus-5`)
- Date: 2026-10-25
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card
- **Name:** Claude Opus 5
- **Short description:** Anthropic's earlier-2026 flagship reasoning model, known for extreme fidelity in knowledge work, complex legal reasoning, and high coding accuracy.
- **Provider / access:** Anthropic API (`anthropic/claude-opus-5`), Google Vertex AI, AWS Bedrock.
- **Release / knowledge:** July 2026 release; knowledge cutoff April 2026.
- **IDs:** `anthropic/claude-opus-5` (Available via paid Anthropic API and enterprise tiers).
- **Context window:** 1,000,000 total tokens (verified via Anthropic System Card and BenchLM).
- **Modalities:** Text and image input; text output; native reasoning (yes); tool calls; JSON mode.
- **Pricing (as of 2026-10-25):** $15.00 per 1M input / $75.00 per 1M output; Cached input: $0.75 per 1M.
- **Architecture:** Proprietary (estimated Mixture-of-Experts); closed-weights.

### Raw benchmarks found
Agent / tool use:
- Terminal-Bench 2.1: **84.6%** (Vals AI)
- Terminal-Bench 3.0: **42.7%** (FrontierBench)
- OSWorld 2.0: **70.6%** (Anthropic)
- Toolathlon-Verified: **80.6%** (Anthropic)
- GDPval-AA: **61.1%** (Artificial Analysis) / **1862 Elo**
- AA Briefcase: **1720 Elo** (Anthropic)

Reasoning / knowledge:
- GPQA Diamond: **93.2%** (Artificial Analysis) / **93.4%** (Vals AI)
- HLE: **64.7%** (Anthropic) / **54.9%** (Artificial Analysis)
- ARC-AGI-1 / 2: **97.5% / 90.4%** (ARC Prize)
- Artificial Analysis Intelligence Index: **50.8** (Artificial Analysis)

Coding:
- SWE-bench Verified: **96%** (Anthropic)
- SWE-bench Pro: **79.2%** (Anthropic)
- DeepSWE: **68.8%** (Anthropic)
- LiveCodeBench: **89.0%** (Vals AI)
- VulcanBench CII v1: **96.4%** (Morgan Linton)

Long context:
- AA-LCR: **79.3%** (Artificial Analysis)
- GDP.pdf (tools): **85.5%** (Anthropic)

### Normalized scores (1-100)
- **Tool use: 96/100.** Exceptional performance in complex tool-use scenarios (Toolathlon 80.6%) and legal agentic workflows (AA Harvey LAB 93.5%).
- **Reasoning: 98/100.** Market-leading reasoning on HLE (64.7%) and strong abstract reasoning on ARC-AGI benchmarks.
- **Context window: 100/100.** Verified 1M token window with high-fidelity document synthesis (GDP.pdf 85.5%).
- **Multimodal: 75/100.** Supports high-fidelity text and image inputs with strong multimodal reasoning (MMMU-Pro 84.7%).
- **Coding: 97/100.** Elite coding performance with near-perfect scores on SWE-bench Verified (96%) and SOTA-tier LiveCodeBench results.
- **Cost efficiency: 25/100.** Very high pricing ($15/$75) reflects its position as a high-fidelity reasoning engine, now largely superseded in value by Sol and Flash variants.
- **Overall Score: 93.2/100.** (Rounded for queue: 93) A precision instrument for high-stakes reasoning, legal analysis, and complex software architecture.

---

## Signature
- Provided by: **Gemini 3 Flash (google/gemini-3.0-flash)** — 2026-10-25
- Method: Public internet research across Anthropic documentation, Artificial Analysis, and BenchLM; scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
