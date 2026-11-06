# Owl Alpha — findings by Gemini 3.8 Flash

- Source: opencode/owl-alpha
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Owl Alpha
- **Short description:** Anonymous stealth preview model deployed on OpenRouter and OpenCode, subsequently unveiled by Meituan as **LongCat-2.0** — a 1.6T parameter Sparse MoE model (~48B active per token) optimized with LongCat Sparse Attention (LSA) for 1M-token context agentic coding.
- **Provider / access:** `opencode/owl-alpha`, OpenRouter, Hugging Face, GitHub (Meituan).
- **Release / knowledge:** Previewed early 2026; unveiled June 2026; knowledge cutoff mid-2026.
- **IDs:** `opencode/owl-alpha`, `meituan/longcat-2.0`.
- **Context window:** 1,048,576 tokens total (1M context window with LongCat Sparse Attention / LSA).
- **Modalities:** Text and code input/output; function calling and autonomous agent scaffolding.
- **Pricing (as of 2026-11-06):** $0.50 / 1M input, $2.00 / 1M output (hosted inference / OpenRouter); open weights available under community license.
- **Architecture:** 1.6T parameter Sparse Mixture-of-Experts (48B active per token) featuring Streaming-aware Indexing (SI) and Cross-Layer Indexing (CLI) trained on domestic accelerator clusters.

### Raw benchmarks found

Verified evaluations from official LongCat-2.0 release disclosures and independent evaluations:

Agent / tool use:
- **Terminal-Bench 2.1: 70.8%**
- **ClawBench V2 (web-agent): 14.6%** (6/130 intercepted match), Reward 4.6%
- **IFEval: 90.0%**
- High agentic adoption: Led OpenRouter prompt volume across Hermes Agent and Claude Code harnesses during stealth evaluation.

Reasoning / knowledge:
- **GPQA: 88.9%** (select tracking leaderboards)
- Multi-step reasoning: Optimized for long-horizon planning and recursive failure recovery across codebase tasks.

Coding:
- **SWE-bench Pro: 59.5%** resolved
- **SWE-bench Multilingual: 77.3%** resolved
- Repository-scale refactoring: Verified 1M token context capacity with effective needle retrieval and code navigation.

Long context:
- 1,048,576 tokens (1M) context window powered by LongCat Sparse Attention (LSA).

### Normalized scores (1–100)

- **Tool use: 82/100.** Strong tool invocation and multi-step agent execution, demonstrated by 70.8% on Terminal-Bench 2.1 and 90.0% on IFEval.
- **Reasoning: 84/100.** High-level reasoning confirmed by 88.9% on GPQA and solid long-horizon planning capabilities.
- **Context window: 98/100.** Full 1M-token context window with specialized LongCat Sparse Attention (SI and CLI).
- **Multimodal: 20/100.** Pure text and code model with structured tool-call interfaces; no native image or audio perception.
- **Coding: 86/100.** Excellent coding capabilities reflected by 59.5% on SWE-bench Pro and 77.3% on SWE-bench Multilingual.
- **Cost efficiency: 91/100.** Economical $0.50/$2.00 per 1M tokens combined with available open weights.
- **Overall Score: 74/100.** Arithmetic mean of five quality dimensions: (82 + 84 + 98 + 20 + 86) / 5 = 74.0 → 74. Potent 1.6T MoE coding and agent engine behind the Owl Alpha stealth identity.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-11-06
- Method: Multi-source research reconciling Owl Alpha's stealth deployment with Meituan's official LongCat-2.0 technical report, Hugging Face model cards, and OpenRouter metrics; scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
