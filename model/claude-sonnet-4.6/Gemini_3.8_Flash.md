# Claude Sonnet 4.6 — findings by Gemini 3.8 Flash

- Source: Anthropic / Claude (`anthropic/claude-sonnet-4.6`)
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4.6
- **Short description:** Anthropic's early-2026 balanced foundation model featuring native 1M context, state-of-the-art computer use matching Opus-tier baselines, and robust software engineering at mid-tier pricing.
- **Provider / access:** Anthropic API (`claude-sonnet-4-6-20260217`), Amazon Bedrock, Google Cloud Vertex AI, OpenRouter.
- **Release / knowledge:** 2026-02-17 release; knowledge cutoff Q1 2026.
- **IDs:** `anthropic/claude-sonnet-4.6` (no Free ID on Zen)
- **Context window:** 1,000,000 tokens total (1M context window; 128,000 maximum output tokens).
- **Modalities:** Text and image input; text, code, structured JSON, tool-calling output; adaptive runtime thinking.
- **Pricing (as of 2026-10-17):** $3.00 / 1M input tokens, $15.00 / 1M output tokens ($0.30 / 1M prompt cache read; $1.50 / $7.50 batch pricing).
- **Architecture:** Dense foundation transformer featuring full 1M multi-scale attention, advanced computer use, and Claude Code native terminal integration.

### Raw benchmarks found

Agent / tool use:

- OSWorld: **72.5%** (OSWorld-Verified)
- Terminal-Bench 2.1 / 2.0: **59.1%** (Terminal-Bench 2.0)
- GDPval-AA: **1,633** Elo (Artificial Analysis knowledge work)
- Tau3-Banking / Tau2-Bench: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **89.9%**
- ARC-AGI-2: **58.3%** (with max effort thinking budget)
- HLE: no verified standalone public launch score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified / SWE-Pro: **79.6%–80.2%** (SWE-bench Verified)
- LiveCodeBench: no verified standalone public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- 1,000,000 token context window natively supported with 128K max output; parses full multi-repository codebases and lengthy enterprise corpora without quality degradation.

### Normalized scores (1–100)

- **Tool use: 88/100.** Superb autonomous tool orchestration and computer use evidenced by 72.5% on OSWorld-Verified (matching Opus 4.6), 59.1% on Terminal-Bench 2.0, and 1,633 on GDPval-AA.
- **Reasoning: 88/100.** Strong deductive and scientific problem-solving demonstrated by 89.9% on GPQA Diamond and 58.3% on ARC-AGI-2.
- **Context window: 98/100.** Full 1M token context capacity with 128K output buffer billed at standard flat token rates.
- **Multimodal: 70/100.** Dependable document and UI element parsing across technical diagrams and screenshots; text + image in, text out.
- **Coding: 88/100.** Near-flagship code generation and debugging capability evidenced by 79.6%–80.2% on SWE-bench Verified.
- **Cost efficiency: 84/100.** Outstanding economics at $3.00 / $15.00 per 1M tokens with prompt caching at $0.30 per 1M tokens.
- **Overall Score: 86/100.** Arithmetic mean of five quality dimensions: (88 + 88 + 98 + 70 + 88) / 5 = 86.4 → 86. Exceptional mid-tier workhorse delivering near-Opus computer use and software engineering performance at 40% lower cost.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-17
- Method: Public documentation, Anthropic release announcements, benchmark databases, and developer platform listings; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
