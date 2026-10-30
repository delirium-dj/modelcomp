# Muse Spark 1.3 — findings by Gemini 3.8 Flash

- Source: Meta (`opencode/muse-spark-1.3`)
- Date: 2026-10-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.3
- **Short description:** Meta's frontier coding and long-horizon agentic foundation model (released September 2026 by Meta Superintelligence Labs) featuring a native 1M context window, 131K output capacity, and interactive guardrails. Contributor (Free/low-cost) and Standard/Max tiers share identical weights—differing primarily in price and training-data consent.
- **Provider / access:** OpenCode Zen (`opencode/muse-spark-1.3`), Meta Model API, Muse Code.
- **Release / knowledge:** September 2026 release; knowledge cutoff mid-2026.
- **IDs:** `opencode/muse-spark-1.3`, `meta/muse-spark-1.3`, `muse-spark-1.3-contributor`
- **Context window:** 1,048,576 tokens total (1M context window; up to 131,072 max output tokens).
- **Modalities:** Multimodal text, high-resolution image, video, and PDF input; text, code, structured JSON output.
- **Pricing (as of 2026-10-30):** Free OpenCode Zen tier (with training-data consent); Contributor tier at $0.10 input ($0.002 cached) / $0.20 output per 1M tokens; Standard tier at $1.25 input ($0.15 cached) / $4.25 output per 1M tokens.
- **Architecture:** Frontier multimodal reasoning foundation model with native test-time compute scaling, interactive ambiguity detection, and optimized execution-based tool invoking.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **88.8%** (mean pass@1; ties GPT-5.6 Sol at 88.8%, leads Claude Opus 5 at 86.7%)
- Agentic execution efficiency: consumes ~20% fewer tool calls and ~25% fewer tokens than Muse Spark 1.2 on identical agent tasks.
- Interactive guardrails: autonomously identifies ambiguous instructions to request clarification before executing high-impact commands.

Reasoning / knowledge:

- Long-horizon multi-step reasoning: competitive with top frontier models under extended thinking effort (`max` reasoning tier).
- Multi-domain task planning with adaptive test-time inference.

Coding:

- DeepSWE v1.1: **75.4%** pass@1 (113 multi-file repository challenges; outperforms Claude Opus 5 at 74.0% and GPT-5.6 Sol at 73.0%)
- SWE-Atlas Codebase QnA: **59.4%**
- Multi-file refactoring, autonomous migration, and cross-language software engineering.

Long context / vision:

- Long-context retrieval fidelity: **98.5%** needle-in-a-haystack retrieval across the full 1,048,576 token window.
- Native visual-language execution parsing across screenshots, UI designs, and video inputs.

Conflicting evidence & notes:

- *Tier performance parity vs privacy tradeoff:* Independent reviews verify that the Contributor ($0.10/$0.20) and Standard ($1.25/$4.25) endpoints run the identical model weights. However, using the Contributor/Zen tier permits Meta to utilize user prompts for training, making tier selection a data-governance decision rather than a capability distinction.

### Normalized scores (1–100)

- **Tool use: 95/100.** Industry-leading autonomous CLI orchestration (88.8% on Terminal-Bench 2.1) and highly efficient tool invocation requiring 20% fewer calls.
- **Reasoning: 95/100.** Outstanding complex problem decomposition, interactive clarification behaviors, and deep inference under max reasoning effort.
- **Context window: 98/100.** Verified 1,048,576 token context with exceptional 98.5% retrieval stability and 131K token generation output.
- **Multimodal: 90/100.** Broad multimodal ingestion covering high-resolution video streams, document PDFs, and graphical user interfaces.
- **Coding: 94/100.** Elite software engineering verified by 75.4% on DeepSWE v1.1 and 59.4% on SWE-Atlas Codebase QnA.
- **Cost efficiency: 86/100.** Phenomenal developer value via the $0.10/$0.20 Contributor tier and Free OpenCode Zen lane, balanced against the standard $1.25/$4.25 enterprise rate.
- **Overall Score: 94/100.** Arithmetic mean of five quality dimensions: (95 + 95 + 98 + 90 + 94) / 5 = 472 / 5 = 94.4 → 94. SOTA agentic coding model combining elite terminal automation, 1M context retention, and exceptionally accessible developer pricing.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-30
- Method: Deep multi-source web research across Meta Superintelligence Labs documentation, official release benchmarks (DeepSWE, Terminal-Bench 2.1), and independent developer reviews; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Meta Superintelligence Labs — Introducing Muse Spark 1.3](https://research.meta.ai/blog/introducing-muse-spark-1-3)
  - [Terminal-Bench Evaluation Suite](https://tbench.ai)
  - [DeepSWE Benchmark v1.1 Repository](https://flowtivity.ai)
  - [OpenCode Zen Console Documentation](https://opencode.ai/v2/docs/console/models/#free-models)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
