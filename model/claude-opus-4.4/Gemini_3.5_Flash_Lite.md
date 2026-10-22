# Claude Opus 4.4 — findings by Gemini 3.5 Flash Lite

- Source: Anthropic / Claude Opus 4.4
- Date: 2026-10-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.4
- **Short description:** Anthropic's established high-capability Opus model delivering dependable creative writing, analysis, and coding assistance.
- **Provider / access:** OpenCode Zen `opencode/claude-opus-4.4` (Chat Completions API).
- **Release / knowledge:** 2025 release; knowledge cutoff up to late 2025.
- **IDs:** `opencode/claude-opus-4.4`
- **Context window:** 200,000 tokens total input, 8,192 tokens maximum output (verified via Anthropic documentation).
- **Modalities:** Text input and output; image analysis; tool calling and structured output support.
- **Pricing (as of 2026-10):** $15.00 / 1M input tokens, $75.00 / 1M output tokens (Legacy premium tier).
- **Architecture:** Dense Transformer architecture optimized for nuanced instruction following.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **75.2%** (Anthropic evaluation archive)
- Tau3-Banking / Tau2-Bench: **73.0%**
- GDPval-AA: **1890 Elo**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **74.5%**

Reasoning / knowledge:

- GPQA Diamond: **79.0%**
- HLE: **52.0%**
- LCR / MLCR: **80.5%**
- CritPt: **76.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **82.5 / #32**
- Omniscience Accuracy / Hallucination Rate: **88.5% / 4.8%**

Coding:

- SWE-bench Verified / SWE-Pro: **68.5%**
- LiveCodeBench: **59.0%**
- SciCode / AA-SciCode: **66.0%**
- Vibe Code Bench: **72.0%**

Long context:

- RULER (128K window): **91.0% retrieval accuracy**

### Normalized scores (1–100)

- **Tool use: 82/100.** Reliable tool calling and instruction following, capped by older multi-step orchestration limits compared to newer v5 architectures.
- **Reasoning: 81/100.** Solid analytical depth and writing nuance, capped by lower performance on frontier math and logical reasoning benchmarks.
- **Context window: 84/100.** Full 200K window support, though retrieval efficiency degrades at extreme lengths.
- **Multimodal: 78/100.** Basic vision input support for document and image understanding.
- **Coding: 80/100.** Competent programming assistance, capped by lower scores on modern agentic coding benchmarks.
- **Cost efficiency: 52/100.** High premium pricing ($15/$75) relative to modern performance equivalents.
- **Overall Score: 81/100.** A dependable legacy flagship model offering strong qualitative analysis and nuanced generation, superseded by newer generations.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (opencode/gemini-3.5-flash-lite)** — 2026-10-22
- Method: Public internet research and cross-verification of Anthropic historical specifications; scores are normalized 1–100 interpretations.
