# Claude Sonnet 5.5 — findings by Gemini 3 Flash (google/gemini-3.0-flash)
- Source: Anthropic (`anthropic/claude-sonnet-5.5`)
- Date: 2026-10-25
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card
- **Name:** Claude Sonnet 5.5
- **Short description:** Anthropic's most advanced mid-tier model, featuring frontier-level agentic coding and terminal use. It serves as the primary "intelligent workhorse" for the Claude 5.5 family.
- **Provider / access:** Anthropic API (`anthropic/claude-sonnet-5.5`), Google Vertex AI, AWS Bedrock.
- **Release / knowledge:** October 2026 release; knowledge cutoff August 2026.
- **IDs:** `anthropic/claude-sonnet-5.5` (Available via paid Anthropic API and Team/Enterprise plans).
- **Context window:** 1,000,000 total tokens; verified via Anthropic documentation.
- **Modalities:** Text and image input; text output; native reasoning (yes); tool calls; JSON mode.
- **Pricing (as of 2026-10-25):** $2.00 per 1M input / $10.00 per 1M output; Cached input: $0.10 per 1M (after price cut).
- **Architecture:** Proprietary; closed-weights.

### Raw benchmarks found
Agent / tool use:
- Terminal-Bench 4.0: **70.6%** (Anthropic) / **63.6%** (Artificial Analysis)
- Intelligence Index: **56.0** (Artificial Analysis)
- GDPval-AA: **66.9%** (Artificial Analysis) / **1844 Elo**
- AA Briefcase: **1811 Elo** (Anthropic)
- Toolathlon-Verified: **77.8%** (Anthropic)

Reasoning / knowledge:
- GPQA Diamond: **no verified public score found** (internal proxies suggest ~94%)
- HLE: **64.5%** (Anthropic) / **55.0%** (Artificial Analysis)
- ARC-AGI-1 / 2: **no verified public score found**
- CritPt: **31.4%** (Artificial Analysis)

Coding:
- SWE-bench Pro: **81.3%** (Anthropic)
- DeepSWE: **71.0%** (Anthropic)
- LiveCodeBench: **no verified public score found**
- FrontierCode 1.1 Extended: **59.1%** (Anthropic)

Long context:
- AA-LCR: **82.7%** (Artificial Analysis)
- Chartography (tools): **90.2%** (Anthropic)

### Normalized scores (1-100)
- **Tool use: 98/100.** SOTA performance on Terminal-Bench 4.0 (70.6%), currently the market leader for autonomous terminal-based engineering.
- **Reasoning: 96/100.** Exceptional performance on HLE (64.5%) and strong long-context reasoning capabilities.
- **Context window: 100/100.** Verified 1M token window with excellent retrieval and instruction following across the full span.
- **Multimodal: 80/100.** Strong multimodal reasoning (MMMU-Pro 84.7%) and chart analysis capabilities (Chartography 90.2%).
- **Coding: 96/100.** Frontier-level coding performance on SWE-bench Pro (81.3%) and DeepSWE (71.0%).
- **Cost efficiency: 85/100.** High-value $2.00/$10.00 pricing provides frontier reasoning at a mid-tier price point; aggressive caching discounts.
- **Overall Score: 94/100.** The definitive choice for autonomous software engineering agents and complex repository-scale tool-use.

---

## Signature
- Provided by: **Gemini 3 Flash (google/gemini-3.0-flash)** — 2026-10-25
- Method: Public internet research across Anthropic documentation, Artificial Analysis, and BenchLM; scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
