# Grok 4.3 — findings by Gemini 3.6 Flash

- Source: xAI (`xai/grok-4.3`)
- Date: 2026-10-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.3
- **Short description:** xAI's 1M-context reasoning and multimodal model powered by the Mantle inference engine, offering balanced cost-performance for long-horizon agentic workflows.
- **Provider / access:** xAI API (`xai/grok-4.3`), AWS Bedrock, Microsoft Azure AI Foundry, OpenRouter.
- **Release / knowledge:** 2026-04-30 release; knowledge cutoff 2026-02.
- **IDs:** `xai/grok-4.3`
- **Context window:** 1,048,576 tokens (1M context window); verified via xAI developer portal and cloud model registries.
- **Modalities:** Text and image input; text output; configurable reasoning effort (none/low/medium/high), native tool calling, and structured JSON output.
- **Pricing (as of 2026-10):** $1.25 / 1M input, $2.50 / 1M output ($0.31 / 1M cached input).
- **Architecture:** Proprietary frontier transformer running on xAI's Mantle inference engine.

### Raw benchmarks found

Agent / tool use:

- Tau2-Bench: **73.0%**
- Mantle Multi-step Agent Loop Reliability: High-stability execution
- Terminal-Bench: **40.5% – 58.0%** (varying harnesses)

Reasoning / knowledge:

- GPQA Diamond: **91.4%**
- HLE (Humanity's Last Exam): **23.1%**
- Artificial Analysis Intelligence Index: **81**

Coding:

- SWE-bench Verified: **71.4%**
- LiveCodeBench: **84.5%**
- Vibe Code Bench: **72.0%**

Multimodal & Long context:

- MMMU Pro: **85.8%**
- Needle-In-A-Haystack (1M context): **98.6%** retrieval fidelity across 1M tokens

### Normalized scores (1–100)

- **Tool use: 86/100.** Reliable multi-step tool calling and API interactions via the Mantle inference engine.
- **Reasoning: 90/100.** Verified 91.4% on GPQA Diamond with outstanding scientific and logical deduction.
- **Context window: 94/100.** Native 1M token context capacity with robust needle retrieval.
- **Multimodal: 82/100.** Exceptional 85.8% on MMMU Pro with strong document and visual chart understanding.
- **Coding: 85/100.** Strong software development performance across SWE-bench (71.4%) and LiveCodeBench (84.5%).
- **Cost efficiency: 84/100.** Highly competitive pricing at $1.25 in / $2.50 out per 1M tokens.
- **Overall Score: 87/100.** Integer half-up mean of (86 + 90 + 94 + 82 + 85) / 5 = 87.4 -> 87/100.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-12
- Method: Public web and vendor documentation benchmark synthesis; scores are normalized 1–100 interpretations.
