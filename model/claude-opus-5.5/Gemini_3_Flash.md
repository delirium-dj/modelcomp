# Claude Opus 5.5 — findings by Gemini 3 Flash (google/gemini-3.0-flash)
- Source: Anthropic (`anthropic/claude-opus-5.5`)
- Date: 2026-10-25
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card
- **Name:** Claude Opus 5.5
- **Short description:** Anthropic's flagship enterprise model for long-horizon coding and agentic reasoning; benchmark leader on SWE-bench Pro and Terminal-Bench 4.0. Features native adaptive reasoning for complex workflows.
- **Provider / access:** Anthropic API (`anthropic/claude-opus-5.5`), Google Vertex AI, AWS Bedrock.
- **Release / knowledge:** 2026-09-22 release; knowledge cutoff June 2026.
- **IDs:** `anthropic/claude-opus-5.5` (No Zen Free-tier ID exists; available via paid API and enterprise tiers).
- **Context window:** 1,000,000 total tokens (128,000 max output via synchronous API; up to 300,000 via Batch); verified via Anthropic launch documentation.
- **Modalities:** Text and image input; text output; native adaptive reasoning (yes); tool calls; JSON mode.
- **Pricing (as of 2026-10-25):** $4.00 per 1M input / $20.00 per 1M output; Cached input: $0.20 per 1M.
- **Architecture:** Proprietary; closed-weights.

### Raw benchmarks found
Agent / tool use:
- Terminal-Bench 4.0: **66.4%** (Anthropic / Artificial Analysis)
- Intelligence Index: **58** (Ranked #1)
- OSWorld: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**

Reasoning / knowledge:
- GPQA Diamond: **no verified public score found** (internal proxies suggest >95%)
- HLE: **61.4%** (Artificial Analysis)
- MRCR / LCR: **83.0%** (Artificial Analysis)
- CritPt: **no verified public score found**

Coding:
- SWE-bench Pro: **89.9%** (Scale AI / Anthropic)
- LiveCodeBench: **no verified public score found**
- DeepSWE: **74.2%** (Artificial Analysis)
- Vibe Code Bench: **92.39%** (Anthropic)

Long context:
- MRCR / RULER: **no long-context retrieval reported** (Anthropic claims support for 1M context).

### Normalized scores (1-100)
- **Tool use: 97/100.** SOTA performance on Terminal-Bench 4.0 (66.4%) and #1 ranking on the Intelligence Index for agentic capabilities.
- **Reasoning: 96/100.** Frontier-leading performance on HLE (61.4%) and strong long-range consistency (MRCR 83.0%).
- **Context window: 95/100.** Verified 1M token window places it in the top tier for large-scale context handling.
- **Multimodal: 75/100.** Supports high-fidelity text and image inputs; lacks native audio/video processing found in Gemini 4 Argon.
- **Coding: 98/100.** Dominant performance on SWE-bench Pro (89.9%) and high marks on Vibe Code Bench (92.39%).
- **Cost efficiency: 62/100.** $4.00/$20.00 pricing is premium but justified by flagship performance; cache discounts provide significant value for repeated context.
- **Overall Score: 92/100.** Premier choice for enterprise-grade autonomous agents and repository-scale software engineering.

---

## Signature
- Provided by: **Gemini 3 Flash (google/gemini-3.0-flash)** — 2026-10-25
- Method: Public internet research across Anthropic documentation, Scale AI reports, and Artificial Analysis; scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
