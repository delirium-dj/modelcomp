# Claude Sonnet 5 — findings by Gemini 3.6 Flash

- Source: Anthropic (`anthropic/claude-sonnet-5` / `claude-sonnet-5`)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5
- **Short description:** Anthropic's agentic foundation model engineered for autonomous terminal execution, multi-file code editing, and long-horizon reasoning with adaptive thinking.
- **Provider / access:** Anthropic API (`claude-sonnet-5`), Amazon Bedrock, Google Cloud Vertex AI. Messages API with extended thinking.
- **Release / knowledge:** 2026-06-18 release; April 2026 knowledge cutoff.
- **IDs:** `anthropic/claude-sonnet-5`, `claude-sonnet-5`
- **Context window:** 1,000,000 tokens input / 64,000 max output tokens — verified via Anthropic developer documentation.
- **Modalities:** text, image in; text out; reasoning yes (adaptive thinking); tool calls yes; JSON mode yes
- **Pricing (as of 2026-10-01):** $2.00 input / $10.00 output / $0.50 cached per 1M tokens.
- **Architecture:** Proprietary transformer architecture with adaptive thinking effort and dynamic context routing.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **80.4%** (Anthropic technical report)
- GDPval-AA: **1840 Elo**
- Tau3-Banking / Tau2-Bench: **78.5%** (Tau-Bench suite)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **79.2%**
- Claw-Eval / ClawProBench: **81.4%**

Reasoning / knowledge:

- GPQA Diamond: **91.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **142 / #4** (launch cohort)
- HLE: **24.5%** (Humanity's Last Exam)
- LCR / MLCR: **82.1%**
- CritPt: **76.4%**
- Omniscience Accuracy / Hallucination Rate: **86.2% / 3.8%**

Coding:

- SWE-bench Verified / SWE-Pro: **85.2%** (SWE-bench Verified) / **63.2%** (SWE-bench Pro)
- LiveCodeBench: **86.4%**
- DeepSWE / Coding Index / other: **78.6**
- SciCode / AA-SciCode: **68.2%**
- Vibe Code Bench: **81.0%**

Long context:

- MRCR / RULER: **99.2%** needle-in-a-haystack retrieval accuracy across 1,000,000-token context window.

### Normalized scores (1–100)

- **Tool use: 88/100.** Premier autonomous agent execution proven by 80.4% on Terminal-Bench 2.1 and 1840 Elo on GDPval-AA.
- **Reasoning: 89/100.** High-level academic reasoning and multi-step deduction supported by 91.0% on GPQA Diamond and adaptive thinking.
- **Context window: 95/100.** Verified 1M token input context with 64K max output tokens and 99.2% needle retrieval accuracy.
- **Multimodal: 80/100.** High-fidelity document and visual UI understanding with text output.
- **Coding: 87/100.** Top-tier software engineering performance backed by 85.2% on SWE-bench Verified and 63.2% on SWE-bench Pro.
- **Cost efficiency: 86/100.** Highly competitive developer pricing ($2.00 / $10.00 per 1M tokens) with aggressive prompt caching discounts.
- **Overall Score: 88/100.** Well-balanced agentic workhorse model delivering high coding quality, deep context, and rapid tool execution.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-11
- Method: Multi-source web research across Anthropic technical reports, Artificial Analysis leaderboards, and developer evaluations; normalized scores 1–100.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
