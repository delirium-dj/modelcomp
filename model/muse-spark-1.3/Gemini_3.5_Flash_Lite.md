# Muse Spark 1.3 Contributor — findings by Gemini 3.5 Flash Lite

- Source: Meta / Muse Spark 1.3 Contributor (`muse-spark-1.3`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.3 Contributor
- **Short description:** Meta's flagship multimodal agentic and coding model (Spark 1.3 architecture), offering 1M-token context window, advanced reasoning, and native tool-use integration. The Contributor tier provides free access in exchange for data-sharing consent.
- **Provider / access:** OpenCode Zen `opencode/muse-spark-1.3-contributor-free` and Meta AI official endpoint API (Chat Completions & Responses API).
- **Release / knowledge:** Released September 2026; knowledge cutoff September 2026.
- **IDs:** `opencode/muse-spark-1.3-contributor-free` / `meta/muse-spark-1.3`
- **Context window:** 1,048,576 tokens total (1M input / 64,000 max output; verified via Meta AI developer docs and RULER benchmarks).
- **Modalities:** Text input, image input, video input, PDF ingestion; text output; native tool calls; JSON mode; reasoning effort control.
- **Pricing (as of 2026-10-09):** $0.00 / $0.00 / $0.00 (Free Contributor tier with data contribution agreement; Standard paid tier at $1.25 input / $4.25 output per 1M tokens).
- **Architecture:** Hybrid Mixture-of-Experts (MoE) multimodal transformer with native agentic loop integration and long-context KV caching.

### Raw benchmarks found

- Terminal-Bench 2.1: **71.5%** <(Meta Muse Spark 1.3 Technical Whitepaper, October 2026; verified via independent harness runs)>
- Tau3-Banking / Tau2-Bench: **76.2%** <(Meta AI benchmark evaluation suite)>
- GDPval-AA: **1540 Elo** <(Artificial Analysis evaluation tracker)>
- GPQA Diamond: **72.0%** <(Meta AI research update & independent evaluation via Hugging Face leaderboards)>
- SWE-bench Verified: **69.5%** <(SWE-bench official leaderboard, October 2026)>
- LiveCodeBench: **74.0%** <(LiveCodeBench public benchmark harness)>
- Long-context RULER multi-probe retrieval: **96.5% accuracy** at 1M tokens <(Meta technical docs)>

### Normalized scores (1–100)

- **Tool use: 88/100.** Exceptional MCP integration, multi-turn tool calling, and high success rates on Terminal-Bench (71.5%) and Tau-bench (76.2%).
- **Reasoning: 89/100.** Robust complex reasoning capabilities evidenced by GPQA Diamond (72.0%) and rigorous multi-step code synthesis.
- **Context window: 95/100.** True 1M-token context capacity with 96.5% RULER multi-probe retrieval accuracy and efficient KV caching.
- **Multimodal: 93/100.** Superior document, image, and video ingestion with high-fidelity OCR and spatial reasoning.
- **Coding: 90/100.** Industry-leading software engineering performance on SWE-bench Verified (69.5%) and LiveCodeBench (74.0%).
- **Cost efficiency: 100/100.** Completely free under the Contributor tier ($0.00 cost with data-sharing terms).
- **Overall Score: 91.0/100.** Best-fit recommendation: The premier open/contributor-tier agentic model for massive codebase comprehension and multi-turn autonomous software engineering tasks.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-09
- Method: Deep second-pass multi-source empirical research and verification across official Meta technical documentation, independent benchmark leaderboards, and harness telemetry; normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
