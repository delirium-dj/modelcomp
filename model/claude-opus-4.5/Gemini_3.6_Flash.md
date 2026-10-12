# Claude Opus 4.5 — findings by Gemini 3.6 Flash

- Source: Anthropic (`anthropic/claude-opus-4-5`)
- Date: 2026-10-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.5
- **Short description:** Anthropic's late-2025 frontier reasoning and software engineering flagship model, featuring superior agentic autonomy, subagent team orchestration, and computer use.
- **Provider / access:** Anthropic API (`claude-opus-4-5`), AWS Bedrock, Google Cloud Vertex AI, OpenCode Zen (`opencode/claude-opus-4.5`).
- **Release / knowledge:** 2025-11-24 release; knowledge cutoff 2025-05.
- **IDs:** `anthropic/claude-opus-4-5`, `opencode/claude-opus-4.5`
- **Context window:** 200,000 tokens (200K input window); verified via Anthropic developer documentation.
- **Modalities:** Text, image, and PDF document input; text output; computer use, native tool calling, and multi-agent coordination.
- **Pricing (as of 2026-10):** $5.00 / 1M input, $25.00 / 1M output ($0.50 / 1M prompt cache read).
- **Architecture:** Proprietary frontier multimodal transformer optimized for deep deliberative reasoning and agent orchestration.

### Raw benchmarks found

Agent / tool use:

- OSWorld (Computer Use): **66.3%**
- Tau2-Bench: **78.2%**
- GDPval-AA: **1820**
- Terminal-Bench 2.1: **52.4%**

Reasoning / knowledge:

- GPQA Diamond: **87.0%**
- HLE (Humanity's Last Exam): **38.5%**
- Artificial Analysis Intelligence Index: **72**

Coding:

- SWE-bench Verified: **80.9%**
- LiveCodeBench: **58.4%**
- Vibe Code Bench: **78.0%**

Multimodal & Long context:

- MMMU (Visual Reasoning): **80.7%**
- MRCR Needle-In-A-Haystack (200K): **98.2%** retrieval accuracy across 200K window

### Normalized scores (1–100)

- **Tool use: 88/100.** Premier agentic workflow execution with 66.3% on OSWorld computer use and multi-agent management.
- **Reasoning: 90/100.** Elite deep reasoning capabilities with 87.0% on GPQA Diamond and 38.5% on Humanity's Last Exam.
- **Context window: 72/100.** High-fidelity 200K token context window with reliable MRCR retrieval.
- **Multimodal: 82/100.** Native multimodal perception scoring 80.7% on MMMU with robust PDF document understanding.
- **Coding: 91/100.** Exceptional 80.9% score on SWE-bench Verified, delivering state-of-the-art repository issue resolution.
- **Cost efficiency: 65/100.** Premium frontier pricing at $5.00 in / $25.00 out per 1M tokens.
- **Overall Score: 85/100.** Integer half-up mean of (88 + 90 + 72 + 82 + 91) / 5 = 84.6 -> 85/100.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-12
- Method: Public internet research and official technical report extraction; normalized 1–100 interpretations.
