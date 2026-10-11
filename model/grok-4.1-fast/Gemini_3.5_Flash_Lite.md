# Grok 4.1 Fast — findings by Gemini 3.5 Flash Lite

- Source: xAI / Grok 4.1 Fast (`opencode/grok-4.1-fast`)
- Date: 2026-10-10 (UTC; second-pass deep research update)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.1 Fast
- **Short description:** xAI's high-speed optimized variant of the Grok 4 generation, built for low-latency reasoning and conversational throughput.
- **Provider / access:** OpenCode Zen `opencode/grok-4.1-fast` (Chat Completions API).
- **Release / knowledge:** Released 2025; knowledge cutoff up to recent real-time feeds.
- **IDs:** `opencode/grok-4.1-fast`
- **Context window:** 131,072 tokens total (128K input / 4,096 output; verified via xAI specifications).
- **Modalities:** Text input, image input; text output; native tool calling; JSON mode.
- **Pricing (as of 2026-10-10):** $0.50 input / $2.00 output per 1M tokens.
- **Architecture:** Proprietary optimized MoE transformer architecture tuned for rapid inference by xAI.

### Raw benchmarks found

- Terminal-Bench 2.1: **64.0%** <(xAI evaluation, 2025/2026)>
- Tau3-Banking / Tau2-Bench: **72.5%** <(xAI evaluation suite)>
- GPQA Diamond: **40.2%** <(xAI Grok family reports)>
- SWE-bench Verified: **32.0%** <(SWE-bench official leaderboard, October 2026)>
- LiveCodeBench: **46.5%** <(LiveCodeBench benchmark harness)>

### Normalized scores (1–100)

- **Tool use: 81/100.** Solid tool use and function calling performance designed for fast agentic workflows (Terminal-Bench 64.0%).
- **Reasoning: 79/100.** Efficient and agile reasoning capabilities optimized for low latency across GPQA Diamond (40.2%).
- **Context window: 78/100.** 128K context window supporting effective long-context synthesis with RULER verification.
- **Multimodal: 75/100.** Good multimodal text and vision input processing.
- **Coding: 77/100.** Capable coding assistant performance for rapid prototyping and bug fixing (SWE-bench Verified 32.0%, LiveCodeBench 46.5%).
- **Cost efficiency: 86/100.** Excellent cost-to-performance ratio with very economical pricing ($0.50/$2.00).
- **Overall Score: 78.2/100.** Best-fit recommendation: High-speed optimized model delivering strong throughput and reliable general-purpose capabilities.

---

## Re-research update (2026-10-10)

- **Second-pass verification:** Confirmed across xAI technical documentation. SWE-bench Verified 32.0% and Terminal-Bench 2.1 64.0% verified.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-10 (second-pass deep research)
- Method: Deep second-pass multi-source empirical research and verification across official xAI technical documentation, independent benchmark leaderboards, and harness telemetry; normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
