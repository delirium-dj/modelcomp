# Claude Opus 5.5 — findings by Gemini 3.8 Flash

- Source: Anthropic (`anthropic/claude-opus-5-5`)
- Date: 2026-10-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5.5
- **Short description:** Anthropic's flagship frontier reasoning and autonomous software engineering model (released September 22, 2026), featuring always-on adaptive thinking, flat-rate 1M context pricing, and state-of-the-art multi-file code refactoring with ~40% reduced token overhead.
- **Provider / access:** Anthropic API (`claude-opus-5-5`, `claude-opus-5.5`), Claude Code CLI, Claude Console, Amazon Bedrock, Google Cloud Vertex AI.
- **Release / knowledge:** September 22, 2026 release; proprietary commercial license; knowledge cutoff mid-2026.
- **IDs:** `anthropic/claude-opus-5-5`, `anthropic/claude-opus-5.5`
- **Context window:** 1,000,000 tokens total (1M context window; up to 128,000 max output tokens; flat pricing across entire window).
- **Modalities:** Multimodal text, high-resolution document and screenshot input; text, code, structured JSON output; adaptive extended thinking.
- **Pricing (as of 2026-10-30):** $4.00 per 1M input tokens, $20.00 per 1M output tokens; prompt cache write 1.25x; prompt cache read $0.20 per 1M tokens (95% discount); Batch API at 50% discount ($2.00 in / $10.00 out).
- **Architecture:** Frontier multimodal autoregressive transformer with always-on adaptive test-time compute allocation and hardened prompt injection resistance.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **66.4%** (`xhigh` effort; Anthropic technical report), **64.8% ± 3.1** on `tbench.ai` public board using native agent harness, **59.6%** via independent mini-SWE-agent harness.
- Tool-augmented Humanity's Last Exam (HLE): **67.7%** (tier-1 global ranking).
- Token and call efficiency: accomplishes complex CLI and repository tasks with ~40% fewer tool calls and half the token expenditure of previous generation models.

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **58** (Max effort configuration; ranked #1 / global top tier).
- GPQA Diamond: **90.6% – 94.0%** (evaluated across High and Max reasoning effort tiers).
- Humanity's Last Exam (HLE-Diamond, unassisted non-tool): **54.6% – 55.0%**.
- FrontierMath (Tiers 1–3): **91.2%**.

Coding:

- SWE-bench Multimodal: **61.4%**.
- CursorBench 4.0: **57.8%**.
- FrontierCode v1.1 Main: **54.4%**.
- Multi-file autonomous repository migration, zero-shot bug localisation, and architectural refactoring.

Long context / vision:

- 1,000,000 token context window with reliable needle-in-a-haystack recall across large enterprise repositories.
- Document and screenshot OCR, architecture diagram interpretation, and software GUI parsing.

Conflicting evidence & notes:

- *Terminal-Bench harness variance:* While Anthropic claims 66.4% using optimized agent scaffolding, independent third-party evaluations using generic open harnesses (like mini-SWE-agent) report 59.6%, and public leaderboards report 64.8% ± 3.1.
- *Static science trivia vs active agent loops:* Competing models (like GPT-6 Astra) occasionally edge Opus 5.5 on static multiple-choice GPQA Diamond by 1–2 percentage points, but Opus 5.5 holds a consistent operational advantage in practical multi-turn software development and command-line execution loops.

### Normalized scores (1–100)

- **Tool use: 97/100.** Industry-defining autonomous CLI orchestration (64.8%–66.4% on Terminal-Bench 4.0) and 67.7% on tool-augmented HLE with 40% fewer wasted turns.
- **Reasoning: 97/100.** Premier abstract deduction and formal problem solving (Artificial Analysis Intelligence Index 58, 94.0% GPQA Diamond, 91.2% FrontierMath).
- **Context window: 98/100.** Native 1,000,000-token context window with 128K max output generation and flat pricing without large-window surcharges.
- **Multimodal: 75/100.** Elite document and visual schematic OCR; capped at 75 due to omission of native real-time audio and video streaming tokens.
- **Coding: 98/100.** Unrivalled autonomous repository-scale engineering, bug remediation, and code refactoring (61.4% SWE-bench Multimodal, 57.8% CursorBench 4.0).
- **Cost efficiency: 62/100.** Premium enterprise pricing ($4.00 in / $20.00 out per 1M), tempered by a highly effective $0.20/1M prompt cache read rate.
- **Overall Score: 93/100.** Arithmetic mean of five quality dimensions: (97 + 97 + 98 + 75 + 98) / 5 = 465 / 5 = 93.0 → 93. Anthropic's premier flagship agentic model setting the standard for long-horizon repository engineering, CLI mastery, and robust adaptive reasoning.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-30
- Method: Deep multi-source web research across Anthropic official announcements, independent benchmark leaderboards (Artificial Analysis, Terminal-Bench, Humanity's Last Exam), and developer evaluations; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Anthropic — Claude Opus 5.5 Capabilities and Pricing](https://anthropic.com/news/claude-opus-5-5)
  - [Artificial Analysis — Claude Opus 5.5 Benchmark Index](https://artificialanalysis.ai)
  - [Terminal-Bench Leaderboard](https://tbench.ai)
  - [Humanity's Last Exam Leaderboard](https://lastexam.ai)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
