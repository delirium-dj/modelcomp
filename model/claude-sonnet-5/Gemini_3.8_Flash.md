# Claude Sonnet 5 — findings by Gemini 3.8 Flash

- Source: Anthropic / Claude (`anthropic/claude-sonnet-5`)
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5
- **Short description:** Anthropic's mid-2026 foundation model delivering near-Opus reasoning and agentic software engineering at aggressive $2/$10 pricing with 1M context and adaptive thinking.
- **Provider / access:** Anthropic API (`claude-sonnet-5-20260630`), Amazon Bedrock, Google Cloud Vertex AI, OpenRouter.
- **Release / knowledge:** 2026-06-30 release; knowledge cutoff Q2 2026.
- **IDs:** `anthropic/claude-sonnet-5` (no Free ID on Zen)
- **Context window:** 1,000,000 tokens total (1M context window; 128,000 maximum output tokens).
- **Modalities:** Text, image, and PDF input; text, code, structured JSON, tool-calling output; adaptive runtime thinking effort controls.
- **Pricing (as of 2026-10-17):** $2.00 / 1M input tokens, $10.00 / 1M output tokens ($0.10–$0.20 / 1M prompt cache read; $1.00 / $5.00 batch pricing).
- **Architecture:** Dense foundation transformer featuring full 1M multi-scale attention, advanced computer use, and Claude Code native terminal integration.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **80.4%**
- OSWorld: **81.2%** (OSWorld-Verified)
- GDPval-AA: **1,618** Elo (v2 knowledge work)
- Tau3-Banking / Tau2-Bench: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- HLE: **43.2%** (without tools) / **57.4%** (with tools)
- GPQA Diamond: no verified standalone public launch score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified / SWE-Pro: **85.2%** (SWE-bench Verified) / **63.2%** (SWE-bench Pro)
- LiveCodeBench: no verified standalone public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- 1,000,000 token context window natively supported with 128K max output; parses full multi-repository codebases and lengthy enterprise corpora without quality degradation.

### Normalized scores (1–100)

- **Tool use: 91/100.** Landmark autonomous CLI and computer use execution evidenced by 80.4% on Terminal-Bench 2.1, 81.2% on OSWorld-Verified, and 1,618 on GDPval-AA v2.
- **Reasoning: 92/100.** Strong deductive and scientific problem-solving demonstrated by 57.4% on HLE (with tools) and 43.2% without tools.
- **Context window: 98/100.** Full 1M token context capacity with 128K output buffer billed at standard flat token rates.
- **Multimodal: 74/100.** Dependable document and UI element parsing across technical diagrams, PDFs, and screenshots; text + image/PDF in, text out.
- **Coding: 92/100.** Outstanding real-world software engineering capability verified by 85.2% on SWE-bench Verified and 63.2% on SWE-bench Pro.
- **Cost efficiency: 88/100.** Industry-leading economics at $2.00 / $10.00 per 1M tokens with prompt caching down to $0.10 per 1M tokens.
- **Overall Score: 89/100.** Arithmetic mean of five quality dimensions: (91 + 92 + 98 + 74 + 92) / 5 = 89.4 → 89. Groundbreaking agentic model delivering near-Opus performance on coding, terminal execution, and computer use at a fraction of the cost.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-17
- Method: Public documentation, Anthropic release announcements, benchmark databases, and developer platform listings; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
