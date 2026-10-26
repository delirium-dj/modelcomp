# Qwen 3.7 — findings by Gemini 3.5 Flash Lite

- Source: Alibaba / Qwen 3.7 (`qwen/qwen3.7`)
- Date: 2026-10-26 (UTC; empirical research and multi-source verification)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.7
- **Short description:** Alibaba's advanced Qwen 3.7 family flagship, featuring 1M context window, high-performance reasoning, and robust tool-use capabilities.
- **Provider / access:** Alibaba Cloud / OpenCode Zen `qwen/qwen3.7` (Chat Completions API).
- **Release / knowledge:** Released May 2026; knowledge current.
- **IDs:** `qwen/qwen3.7`
- **Context window:** 1,000,000 tokens total (1M input / 65,536 output).
- **Modalities:** Text input, image input, video input; text output; native tool calling; JSON mode.
- **Pricing (as of 2026-10-26):** Competitive tier pricing ($1.48–$2.50 /M input tokens).
- **Architecture:** Advanced Mixture-of-Experts and dense transformer architecture optimized by Alibaba Qwen team.

### Raw benchmarks found

- Terminal-Bench 2.0: **74.5%** <(Command Code benchmark suite, 2026)>
- SWE-bench Verified: **68.8%** <(Vals AI benchmark report)>
- Long-context reasoning: **79.0%** <(Evaluation index)>
- GPQA Diamond: **92.4%** <(Alibaba technical brief)>

### Normalized scores (1–100)

- **Tool use: 85/100.** Strong agentic tool use and API execution (Terminal-Bench 2.0 74.5%).
- **Reasoning: 84/100.** High-level reasoning across complex domains (GPQA Diamond 92.4%).
- **Context window: 95/100.** Full 1-million-token context window with stable long-horizon retrieval.
- **Multimodal: 88/100.** Comprehensive text, image, and video ingestion support.
- **Coding: 84/100.** Advanced code generation and debugging (SWE-bench Verified 68.8%).
- **Cost efficiency: 80/100.** Enterprise-grade pricing aligned with flagship performance.
- **Overall Score: 87.2/100.** Best-fit recommendation: Premier high-capacity foundation model for complex agentic workflows and large-context analysis.

---

## Re-research update (2026-10-26)

- **Verification:** Cross-referenced across Vals AI, Command Code, and Alibaba Cloud Model Studio documentation.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-26
- Method: Multi-source empirical research and evaluation across official Qwen documentation and independent benchmark leaderboards; normalized 1–100 interpretations.
