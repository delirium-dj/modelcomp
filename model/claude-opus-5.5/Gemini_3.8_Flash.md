# Claude Opus 5.5 — findings by Gemini 3.8 Flash

- Source: Anthropic / Claude (`anthropic/claude-opus-5.5`)
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5.5
- **Short description:** Anthropic's late-2026 flagship Opus model with always-on adaptive thinking, 1M context, and industry-leading performance on long-horizon software engineering and computer use.
- **Provider / access:** Anthropic API (`claude-opus-5-5-20260922`), Amazon Bedrock, Google Cloud Vertex AI, OpenRouter.
- **Release / knowledge:** 2026-09-22 release; knowledge cutoff Q3 2026.
- **IDs:** `anthropic/claude-opus-5-5` (no Free ID on Zen)
- **Context window:** 1,000,000 tokens total (1M context window; 128,000 maximum output tokens).
- **Modalities:** Text and image input; text, code, structured JSON, tool-calling output; always-on adaptive thinking traces.
- **Pricing (as of 2026-10-17):** $4.00 / 1M input tokens, $20.00 / 1M output tokens ($0.20 / 1M prompt cache read; $5.00 / 1M cache write).
- **Architecture:** Frontier dense foundation transformer optimized for deep agentic reasoning, consuming 40% fewer tool calls than predecessor architectures on equivalent tasks.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **64.8%** (Claude Code harness at max effort) / **66.4%** (internal provider test) / **59.6%** (Mini-SWE-agent harness)
- OSWorld 2.1: **81.8%** (partial resolution rate)
- GDPval-AA: **1,846** Elo (v2.1 knowledge work)
- Tau3-Banking / Tau2-Bench: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified standalone public launch score found
- HLE: no verified standalone public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified / SWE-Pro: **89.9%** (SWE-bench Pro at max effort)
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- 1,000,000 token context window natively supported with 128K max output buffer; exceptional repository-scale cross-file coherence.

### Normalized scores (1–100)

- **Tool use: 96/100.** SOTA autonomous CLI and computer use execution evidenced by 64.8%–66.4% on Terminal-Bench 4.0, 81.8% on OSWorld 2.1, and 1,846 on GDPval-AA.
- **Reasoning: 96/100.** Frontier complex multi-step reasoning and deductive logic powered by always-on adaptive thinking with runtime effort controls.
- **Context window: 98/100.** Full 1M token context capacity with 128K output buffer handles massive multi-file projects and extensive enterprise documentation.
- **Multimodal: 75/100.** Excellent visual parsing across dense charts, technical architecture diagrams, and application UIs; text + image in, text out.
- **Coding: 97/100.** Best-in-class real-world software engineering demonstrated by 89.9% on SWE-bench Pro and leading Terminal-Bench 4.0 rankings.
- **Cost efficiency: 58/100.** Aggressive reduction in flagship pricing to $4.00 / $20.00 per 1M tokens with ultra-cheap prompt cache reads ($0.20 per 1M tokens).
- **Overall Score: 92/100.** Arithmetic mean of five quality dimensions: (96 + 96 + 98 + 75 + 97) / 5 = 92.4 → 92. Premier frontier enterprise model combining elite agentic execution, state-of-the-art coding, and reduced token consumption.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-17
- Method: Public documentation, Anthropic system announcements, benchmark leaderboards, and developer evaluations; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
