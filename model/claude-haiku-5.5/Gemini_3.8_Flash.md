# Claude Haiku 5.5 — findings by Gemini 3.8 Flash

- Source: Anthropic / Claude (`anthropic/claude-haiku-5.5`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Haiku 5.5
- **Short description:** Anthropic's fastest Claude 5.5-generation compact foundation model equipped with 1M context, adaptive reasoning effort controls, and computer use for high-volume pipelines and automated sub-agent routing.
- **Provider / access:** Anthropic API (`claude-haiku-5.5-20261007`), OpenCode Zen (`opencode/claude-haiku-5.5`), OpenRouter, Amazon Bedrock, Google Cloud Vertex AI.
- **Release / knowledge:** 2026-10-07 release; knowledge cutoff Q3 2026.
- **IDs:** `anthropic/claude-haiku-5.5`, `opencode/claude-haiku-5.5`
- **Context window:** 1,000,000 tokens total (1M context window; 128K maximum output tokens).
- **Modalities:** Text, image, and PDF input; text, code, structured JSON, tool-calling output; adaptive thinking effort parameter.
- **Pricing (as of 2026-10-21):** $0.10 / 1M input, $0.50 / 1M output for prompts ≤100K tokens ($0.50 / $2.50 for prompts >100K); cached input $0.01 / 1M.
- **Architecture:** Compact high-efficiency transformer integrating adaptive thinking budget controls and multi-scale attention optimized for massive token throughput.

### Raw benchmarks found

Agent / tool use:

- OSWorld 2.1: **72.4%** (offline subset with computer use)
- Terminal-Bench 4.0: **39.2%** (max effort budget) / **33.0%** (standard effort)
- GDPval-AA: **1,620** Elo (v2.1 knowledge work)
- AA-Briefcase: **1,578** (v1.1)
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified standalone public score found (integrated in academic reasoning evaluations)
- HLE: **45.9%** (without tools) / **57.4%** (with tools)
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index: **34.0 - 43.0** (medium effort to max effort)
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified / SWE-Pro: optimized for sub-agent automated bug-fixing rather than full repository synthesis
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- Terminal-Bench 4.0: **39.2%**

Long context:

- 1,000,000 token context window evaluated with 128K max output; strong multi-document and repository-wide context preservation up to 1M tokens.

### Normalized scores (1–100)

- **Tool use: 80/100.** High-throughput computer use and agentic tool orchestration evidenced by 72.4% on OSWorld 2.1 and 1,620 on GDPval-AA; capped by sub-frontier Terminal-Bench 4.0 performance (39.2%) compared to Sonnet 5.5 (70.6%).
- **Reasoning: 82/100.** Strong academic reasoning and thinking traces with 45.9% on HLE without tools (57.4% with tools) and 34-43 AA Intelligence Index enabled by the adaptive effort parameter.
- **Context window: 95/100.** Full 1M token context window paired with 128K maximum output buffer.
- **Multimodal: 72/100.** Broad document comprehension across text, diagrams, screenshots, and PDFs; text + vision/PDF in, text out.
- **Coding: 78/100.** Fast and competent automated script execution and codebase modification demonstrated by Terminal-Bench 4.0 (39.2%); capped by deliberate positioning beneath Sonnet/Opus on multi-file SWE architectures.
- **Cost efficiency: 96/100.** Highly aggressive pricing at $0.10 / $0.50 per 1M tokens (prompts ≤100K).
- **Overall Score: 81/100.** Quality arithmetic mean of the 5 core quality dimensions ((80 + 82 + 95 + 72 + 78) / 5 = 81.4 rounded to 81). Top-tier high-speed small model with frontier computer use and 1M context.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-21
- Method: Public documentation, Anthropic October 2026 release notes, OpenRouter specifications, and independent evaluations; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
