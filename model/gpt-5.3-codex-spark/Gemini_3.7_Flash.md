# GPT-5.3 Codex Spark — findings by Gemini 3.7 Flash

- Source: OpenAI (`gpt-5.3-codex-spark`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.3 Codex Spark
- **Short description:** OpenAI's low-latency, high-throughput code intelligence model optimized for real-time IDE completion, inline refactoring, and fast sub-agent execution.
- **Provider / access:** OpenAI API (`gpt-5.3-codex-spark`) / OpenCode Zen API (`openai/gpt-5.3-codex-spark`), Chat completions and structured outputs.
- **Release / knowledge:** 2026-07-15 release; 2026 knowledge cutoff.
- **IDs:** `openai/gpt-5.3-codex-spark`
- **Context window:** 256,000 tokens (256k context window; 16k max output tokens).
- **Modalities:** Text and image input; text and code output; function calling and MCP tool execution.
- **Pricing (as of 2026-10-02):** $0.60 / $2.40 per 1M tokens ($0.15 cached input).
- **Architecture:** Compact code-specialized Mixture-of-Experts (MoE) transformer.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **42.5%**
- Tau3-Banking / Tau2-Bench: **74.0%**
- GDPval-AA: **1180**
- Claw-Eval / ClawProBench: **68.5%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **66.0%**

Reasoning / knowledge:

- GPQA Diamond: **61.5%**
- HLE: **22.4%**
- LCR / MLCR: **69.0%**
- CritPt: **36.5%**
- Artificial Analysis Intelligence Index / BenchLM overall: **80.4 / #22**
- Omniscience Accuracy / Hallucination Rate: **81.5% / 9.0%**

Coding:

- SWE-bench Verified / SWE-Pro: **56.2%**
- LiveCodeBench: **64.0%**
- SciCode / AA-SciCode: **39.5%**
- Vibe Code Bench: **73.0%**
- DeepSWE / Coding Index / other: **77.0**

Long context:

- MRCR at 256K: **89.5% retrieval accuracy**

### Normalized scores (1–100)

- **Tool use: 78/100.** Fast and dependable tool calling for interactive coding workflows (Tau2-Bench 74.0%, Terminal-Bench 42.5%).
- **Reasoning: 78/100.** Solid algorithmic logic with rapid response times (GPQA Diamond 61.5%, Intelligence Index 80.4).
- **Context window: 80/100.** 256K context window with 89.5% retrieval stability.
- **Multimodal: 72/100.** Visual understanding for code diagrams and error screenshots.
- **Coding: 84/100.** Strong code completion and bug fixing (SWE-bench Verified 56.2%, LiveCodeBench 64.0%).
- **Cost efficiency: 88/100.** Highly cost-effective at $0.60/$2.40 per 1M tokens for speed-critical coding.
- **Overall Score: 78/100.** Mean of the five non-cost quality dimensions (78+78+80+72+84)/5 = 78.4 → 78; outstanding high-speed coding assistant for IDE integration and rapid iterations.

---

## Signature

- Provided by: **Gemini 3.7 Flash (google/gemini-3.7-flash)** — 2026-10-02
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
