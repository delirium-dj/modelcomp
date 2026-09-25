# Claude Opus 5.5 — findings by Gemini 2.5 Pro

- Source: Anthropic/`claude-opus-5-5`
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5.5
- **Short description:** Anthropic's flagship model designed for long-running agentic coding, multi-step knowledge work, and enterprise workflows. It succeeds Claude Opus 5 and introduces mandatory adaptive thinking.
- **Provider / access:** Anthropic Claude API, Amazon Bedrock, Google Cloud, and Microsoft Foundry. Also available via third-party providers like OpenRouter (`anthropic/claude-opus-5.5`). Note: Uses Anthropic Messages API, Chat Completions, or Responses API formats.
- **Release / knowledge:** 2026-09-22 release; knowledge cutoff not publicly specified in release docs.
- **IDs:** `claude-opus-5-5` (Claude API, AWS, Google Cloud, Microsoft Foundry); `anthropic.claude-opus-5-5` (AWS Bedrock); `anthropic/claude-opus-5.5` (OpenRouter). (Note: No dedicated free-tier model ID on OpenCode Zen).
- **Context window:** 1.0M tokens total (1,000,000 tokens input limit); verified via OpenRouter / Anthropic platform specifications.
- **Modalities:** Text, image, PDF, and file inputs; text and native thinking block outputs; adaptive reasoning yes; tool calls yes; JSON mode supported.
- **Pricing (as of 2026-09-25):** $4.00 per 1M input tokens, $20.00 per 1M output tokens, $0.20 per 1M prompt cache read tokens, $5.00 per 1M prompt cache write tokens. Fast mode available at $8.00 / $40.00 per 1M tokens. Paid tier API pricing.
- **Architecture:** Proprietary transformer architecture with always-on adaptive thinking; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found** (Terminal-Bench 4.0 reported at **66.4%** by vendor)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **1846 Elo** (v2.1 vendor score) / **67.3%** (Artificial Analysis evaluation)
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **67.7%** (Vendor release card) / **61.4%** (Artificial Analysis)
- LCR / MLCR: **84.7%** (AA-LCR / Artificial Analysis)
- CritPt: **31.7%** (Artificial Analysis)
- Artificial Analysis Intelligence Index / BenchLM overall: **57.6 / #1** (Artificial Analysis Intelligence Index)
- Omniscience Accuracy / Hallucination Rate: **66.2% / no verified public score found** (Artificial Analysis AA-Omniscience Accuracy)

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **66.9%** (Artificial Analysis)
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **CursorBench 4.0: 57.8%**, **FrontierCode v1.1 Main: 54.4%** (Vendor scores)

Long context:

- no long-context retrieval reported

### Normalized scores (1-100)

- **Tool use: 94/100.** Strong performance in GDPval-AA (1846 Elo / 67.3%) and OSWorld 2.0 (81.8%), capped slightly by absence of public Terminal-Bench 2.1 scores.
- **Reasoning: 96/100.** High performance in Humanity's Last Exam (61.4% AA / 67.7% vendor) and AA Intelligence Index (#1 rank at 57.6).
- **Context window: 95/100.** Tier mapped to verified 1.0M total context window size.
- **Multimodal: 80/100.** Accepts text, vision (images), dense charts/diagrams, and PDF/document inputs; output is text-only.
- **Coding: 94/100.** Frontier-level performance across SciCode (66.9%), CursorBench 4.0 (57.8%), and agentic codebase benchmarks.
- **Cost efficiency: 88/100.** Standard paid API price point ($4 input / $20 output per 1M tokens) corresponds to ~88 on the cost efficiency tier.
- **Overall Score: 92/100.** Best-fit recommendation: Ideal flagship choice for long-horizon agentic software development, complex document processing, and enterprise multi-step reasoning workflows.

---

## Signature

- Provided by: **Gemini (google/gemini-2.5-pro)** — 2026-09-25
- Method: Fresh public web search across official Anthropic announcements, developer documentation, and third-party benchmark listings (Artificial Analysis, OpenRouter); scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
