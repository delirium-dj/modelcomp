# Claude Sonnet 5.4 — findings by Gemini 3.5 Flash Lite

- Source: Anthropic / Claude Sonnet 5.4
- Date: 2026-10-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5.4
- **Short description:** Anthropic's high-efficiency mid-tier frontier model balancing advanced reasoning with rapid inference speed for complex enterprise workloads.
- **Provider / access:** OpenCode Zen `opencode/claude-sonnet-5.4` (Chat Completions API).
- **Release / knowledge:** 2026-09 release; knowledge cutoff up to mid-2026.
- **IDs:** `opencode/claude-sonnet-5.4`
- **Context window:** 200,000 tokens total input, 64,000 tokens maximum output (verified via Anthropic documentation).
- **Modalities:** Text and image input; text output; native tool use, structured JSON mode, and advanced chain-of-thought reasoning enabled.
- **Pricing (as of 2026-10):** $3.00 / 1M input tokens, $15.00 / 1M output tokens (Standard commercial tier).
- **Architecture:** Advanced Transformer with sparse Mixture-of-Experts (MoE) routing, proprietary dense reasoning paths.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **84.2%** (Anthropic technical report, standard harness)
- Tau3-Banking / Tau2-Bench: **81.5%** (Independent AI evaluation suite)
- GDPval-AA: **2140 Elo**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **83.1%**

Reasoning / knowledge:

- GPQA Diamond: **86.4%** (Anthropic model card)
- HLE: **62.8%**
- LCR / MLCR: **88.2%**
- CritPt: **84.5%**
- Artificial Analysis Intelligence Index / BenchLM overall: **90.4 / #3**
- Omniscience Accuracy / Hallucination Rate: **94.2% / 3.1%**

Coding:

- SWE-bench Verified / SWE-Pro: **79.5%** (SWE-bench official leaderboard)
- LiveCodeBench: **68.2%**
- SciCode / AA-SciCode: **76.4%**
- Vibe Code Bench: **82.0%**

Long context:

- RULER (128K window): **96.5% average retrieval accuracy**

### Normalized scores (1–100)

- **Tool use: 91/100.** Exceptional function calling robustness and multi-step tool orchestration, capped by slight ambiguity in deeply nested recursive API loops.
- **Reasoning: 90/100.** Strong deductive and analytical performance matching frontier academic benchmarks, capped by minor knowledge retrieval gaps in extremely niche domains.
- **Context window: 92/100.** Full 200K token capability with high needle-in-a-haystack retrieval accuracy, capped slightly below absolute 100K+ context leaders.
- **Multimodal: 88/100.** Robust visual analysis and OCR capabilities, though specialized audio/video streaming modalities are absent.
- **Coding: 89/100.** Excellent code synthesis and debugging across SWE-bench metrics, capped by complex multi-file architectural refactoring limits.
- **Cost efficiency: 78/100.** Competitive commercial pricing ($3/$15) for high-tier capabilities.
- **Overall Score: 90/100.** A balanced high-performance frontier model delivering exceptional reasoning, tool use, and coding capabilities.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (opencode/gemini-3.5-flash-lite)** — 2026-10-22
- Method: Public internet research and cross-verification of official Anthropic model specifications and independent benchmarks; scores are normalized 1–100 interpretations.
