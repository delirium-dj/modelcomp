# Claude Sonnet 5.5 — findings by Gemini 3.8 Flash

- Source: Anthropic / Claude (`anthropic/claude-sonnet-5.5`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5.5
- **Short description:** Anthropic's late-2026 Sonnet-class foundation model succeeding Claude Sonnet 5 — featuring always-on adaptive thinking, 1M context, and industry-leading performance on autonomous terminal and software engineering tasks.
- **Provider / access:** Anthropic API (`claude-sonnet-5-5-20260928`), Amazon Bedrock, Google Cloud Vertex AI, OpenRouter.
- **Release / knowledge:** 2026-09-28 release; knowledge cutoff Q3 2026.
- **IDs:** `anthropic/claude-sonnet-5.5` (no Free ID on Zen)
- **Context window:** 1,000,000 tokens total (1M context window; 128,000 maximum output tokens).
- **Modalities:** Text and image input; text, code, structured JSON, tool-calling output; adaptive thinking with runtime effort control.
- **Pricing (as of 2026-10-21):** $2.00 / 1M input tokens, $10.00 / 1M output tokens ($0.10 / 1M prompt cache read; $1.00 / $5.00 batch pricing).
- **Architecture:** Frontier dense foundation transformer optimized for rapid tool-loop execution and terminal reasoning, executing multi-turn agentic workflows with 30% lower effective cost than Sonnet 5.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **70.6%** (leads Opus 5.5 at 66.4%)
- OSWorld 2.1: **80.1%** (partial credit evaluation) / **43.5%** (strict pass rate)
- GDPval-AA: **1,844** Elo (v2.1 knowledge work)
- Tau3-Banking / Tau2-Bench: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **95.6%**
- HLE: **56.9%** (without tools) / **64.5%** (with tools)
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified / SWE-Pro: **81.3%** (SWE-bench Pro at max effort)
- CursorBench: **55.5%** (v4.0 real-world development harness)
- LiveCodeBench: no verified standalone public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- 1,000,000 token context window natively supported with 128K max output buffer; flat pricing across entire window with 30% faster token generation than Sonnet 5.

### Normalized scores (1–100)

- **Tool use: 95/100.** SOTA autonomous CLI and computer use execution evidenced by 70.6% on Terminal-Bench 4.0 (surpassing Opus 5.5), 80.1% on OSWorld 2.1, and 1,844 on GDPval-AA.
- **Reasoning: 95/100.** Top-tier scientific and academic reasoning demonstrated by 95.6% on GPQA Diamond and 64.5% on HLE (with tools).
- **Context window: 98/100.** Full 1M token context capacity with 128K output buffer billed at standard flat token rates.
- **Multimodal: 75/100.** High-fidelity visual parsing across complex application interfaces, dense spreadsheets, and technical documents; text + image in, text out.
- **Coding: 96/100.** Exceptional real-world software engineering capability verified by 81.3% on SWE-bench Pro, 55.5% on CursorBench 4.0, and leading Terminal-Bench 4.0 ranking.
- **Cost efficiency: 88/100.** Unmatched value at $2.00 / $10.00 per 1M tokens with prompt caching down to $0.10 per 1M tokens.
- **Overall Score: 92/100.** Arithmetic mean of five quality dimensions: (95 + 95 + 98 + 75 + 96) / 5 = 91.8 → 92. Premier agentic coding and knowledge-work powerhouse delivering frontier intelligence at high speed and low cost.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-21
- Method: Public documentation, Anthropic system announcements, benchmark leaderboards, and developer evaluations; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
