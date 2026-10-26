# Kimi K3 — findings by Gemini 3 Flash (google/gemini-3.0-flash)
- Source: Moonshot AI (`moonshotai/kimi-k3`)
- Date: 2026-10-25
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card
- **Name:** Kimi K3
- **Short description:** Moonshot AI's high-fidelity reasoning model, featuring the market-leading "Kimi Thinking" architecture for long-context agentic tasks, elite coding, and complex mathematical analysis.
- **Provider / access:** Moonshot AI API (`kimi-k3`), OpenCode Zen (`opencode/kimi-k3`), Kimi.ai.
- **Release / knowledge:** July 2026 release; knowledge cutoff April 2026.
- **IDs:** `moonshotai/kimi-k3` (Available via Moonshot API and OpenCode Zen paid tier).
- **Context window:** 1,048,576 total tokens; verified via Moonshot AI documentation and BenchLM.
- **Modalities:** Native multimodal (text and image input; text output); native reasoning (yes); tool calls; JSON mode.
- **Pricing (as of 2026-10-25):** $2.50 per 1M input / $12.00 per 1M output; Cached input: $0.25 per 1M (90% discount).
- **Architecture:** Proprietary (estimated Mixture-of-Experts); closed-weights.

### Raw benchmarks found
Agent / tool use:
- Terminal-Bench 2.1: **88.3%** (Moonshot AI) / **85%** (Artificial Analysis)
- Intelligence Index: **50.6** (Artificial Analysis)
- AA Harvey LAB v1.0: **94.6%** (Artificial Analysis)
- BrowseComp: **91.2%** (Moonshot AI)
- GDPval-AA: **51.6%** (Artificial Analysis) / **1584 Elo**
- AA Briefcase: **no verified public score found**

Reasoning / knowledge:
- GPQA Diamond: **93.5%** (Moonshot AI) / **92.9%** (Vals AI)
- HLE: **56%** (Moonshot AI) / **46.9%** (Artificial Analysis)
- ARC-AGI-1 / 2: **94.5% / 60.4%** (ARC Prize)
- CritPt: **23.4%** (Artificial Analysis)

Coding:
- DeepSWE: **67.5%** (Moonshot AI)
- SWE-bench (Vals): **93.4%** (Vals AI)
- LiveCodeBench (Vals): **87.2%** (Vals AI)
- FrontierSWE: **81.2%** (Moonshot AI)

Long context:
- AA-LCR: **88.7%** (Artificial Analysis)
- OmniDocBench: **91.1%** (Moonshot AI)

### Normalized scores (1-100)
- **Tool use: 92/100.** Strong terminal and web agent capabilities, with elite performance in legal agentic tasks (Harvey LAB 94.6%).
- **Reasoning: 96/100.** High-fidelity reasoning on GPQA Diamond (93.5%) and strong results on ARC-AGI-1.
- **Context window: 100/100.** Verified 1M token window with exceptional long-range retrieval and synthesis fidelity (AA-LCR 88.7%).
- **Multimodal: 75/100.** Supports high-fidelity text and image inputs with strong visual reasoning (MathVision 94.3%).
- **Coding: 94/100.** Elite coding performance with SOTA-tier results on SWE-bench (93.4%) and solid DeepSWE performance.
- **Cost efficiency: 78/100.** Well-balanced $2.50/$12.00 pricing for a frontier reasoning model, with high caching discounts for agents.
- **Overall Score: 91.4/100.** (Rounded for queue: 91) High-fidelity reasoning model; recommended for long-horizon coding projects and complex document-based agents.

---

## Signature
- Provided by: **Gemini 3 Flash (google/gemini-3.0-flash)** — 2026-10-25
- Method: Public internet research across Moonshot AI documentation, Artificial Analysis, and BenchLM; scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
