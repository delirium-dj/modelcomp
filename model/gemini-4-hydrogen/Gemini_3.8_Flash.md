# Gemini 4 Hydrogen — findings by Gemini 3.8 Flash

- Source: Google (`google/gemini-4-hydrogen`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Hydrogen
- **Short description:** Google's high-efficiency frontier workhorse and agentic execution foundation model (released November 12, 2026), adapted from the Gemini 4 Carbon core architecture. Features 4 configurable thinking levels, native omnimodal perception, and long-decode continuation up to 1,000,000 output tokens at roughly 2.5x the generation velocity of prior Flash generations.
- **Provider / access:** Google AI Studio (`gemini-4-hydrogen`), Google Cloud Vertex AI / Agent Platform, Cursor, Google Antigravity, OpenRouter.
- **Release / knowledge:** November 12, 2026 release; proprietary commercial license; knowledge cutoff mid-2026.
- **IDs:** `gemini-4-hydrogen`, `google/gemini-4-hydrogen`
- **Context window:** 1,048,576 tokens total (1M context window; long-decode continuation up to 1,048,576 max output tokens).
- **Modalities:** Omnimodal text, high-resolution image, multi-channel audio, video streams, and document PDF inputs; text, code, and structured JSON output.
- **Pricing (as of 2026-11-13):** $1.50 per 1M input tokens, $7.50 per 1M output tokens; prompt cache read $0.075 per 1M tokens (95% discount).
- **Architecture:** Large-scale sparse Mixture-of-Experts (MoE) transformer adapted from Gemini 4 Carbon, optimized for high token throughput, dynamic test-time compute allocation across 4 thinking levels (`low`, `medium`, `high`, `xhigh`), and streaming execution.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench: **57.2%** pass@1 (evaluated under `high` thinking configuration on native command-line agent harnesses).
- Multi-Model Hybrid Orchestration (Google Antigravity benchmark): Pairing a frontier planner (Gemini 4 Carbon) with Gemini 4 Hydrogen for rapid execution, tool calls, and test loops achieves near-Carbon success rates on complex repository benchmarks while consuming **24% less quota** and finishing **19% faster**.
- Real-time function calling and structured API tool coordination across enterprise developer workflows.

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **51** (default/high effort configuration) and **54** (under `xhigh` reasoning effort), surpassing the frontier baseline of Gemini 4 Argon (50).
- Vals Index v2.2: Competitive upper-tier ranking across practical enterprise knowledge workflows (Tax Agent Bench, Vals Finance Index).
- 4-Tier Thinking Scalability: Granular compute control allowing dynamic escalation from rapid zero-thought response generation to deep multi-pass verification.

Coding:

- Multi-file autonomous software engineering, real-time IDE code completion, and test-driven refactoring in developer environments (Cursor, Google Antigravity).
- Generates and edits multi-file repository patches with ~2.5x lower latency than previous Flash tiers, minimizing loop bottlenecks in iterative coding agents.

Long context:

- 1,048,576 token input context with high-fidelity recall across enterprise codebases and extended documentation corpora.
- Long-decode streaming protocol supporting up to 1,048,576 output tokens via continuation, eliminating truncation barriers during full codebase refactors.

Conflicting evidence & notes:

- *Thinking Effort Sensitivity:* Developer reviews and benchmark audits indicate noticeable capability variance across thinking modes: while `high` and `xhigh` deliver elite agentic and software engineering marks, `low` and `medium` settings exhibit higher refusal and drift rates on ambiguous multi-step tasks.
- *Speed vs Deep Frontier Synthesis:* While Hydrogen trades slightly behind heavy reasoning flagships (Gemini 4 Carbon, Claude Fable 5.2) on isolated ultra-hard science puzzles, its 2.5x operational speedup and accessible $1.50/$7.50 pricing provide a decisive advantage in real-world agent orchestration and continuous developer loops.

### Normalized scores (1–100)

- **Tool use: 92/100.** Fast and reliable autonomous CLI execution (57.2% on Terminal-Bench at high settings) and highly effective hybrid agent orchestration.
- **Reasoning: 92/100.** Strong multi-step analytical deduction (Artificial Analysis Intelligence Index 51–54) backed by 4 adjustable thinking effort tiers.
- **Context window: 100/100.** 1,000,000-token input window coupled with a 1,000,000-token maximum generation output ceiling and $0.075/1M cache read.
- **Multimodal: 92/100.** Native omnimodal ingestion spanning video streams, multi-channel audio, document PDFs, and visual schematics.
- **Coding: 92/100.** Rapid repository-scale code generation, test remediation, and low-latency agent loop execution.
- **Cost efficiency: 91/100.** Exceptional developer value ($1.50 in / $7.50 out per 1M, $0.075 cache read) delivering 2.5x the throughput of previous generations.
- **Overall Score: 94/100.** Arithmetic mean of five quality dimensions: (92 + 92 + 100 + 92 + 92) / 5 = 468 / 5 = 93.6 → 94. High-throughput generation-4 developer workhorse combining 1M context, 4-tier adaptive reasoning, and elite execution speed.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-11-13
- Method: Public multi-source web research across Google DeepMind technical disclosures, release announcements, independent benchmark leaderboards (Artificial Analysis, Terminal-Bench, Vals AI), and developer reviews; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Google DeepMind — Introducing Gemini 4 Hydrogen](https://deepmind.google/technologies/gemini/)
  - [Google Cloud Blog — Gemini 4 Hydrogen Model Card and Benchmarks](https://blog.google)
  - [Artificial Analysis — Gemini 4 Hydrogen Evaluation and Speed Index](https://artificialanalysis.ai)
  - [Cursor Documentation — Gemini 4 Hydrogen Integration Guide](https://cursor.com)
  - [Vals AI — Enterprise Evaluation Index](https://vals.ai)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

