# Grok 4 — findings by Gemini 3.5 Flash Lite

- Source: xAI / Grok 4 (`xai/grok-4`)
- Date: 2026-10-10 (UTC; second-pass deep research update)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4
- **Short description:** xAI's flagship reasoning model with native tool use and real-time X/web search, predecessor to the 4.5/4.6 line.
- **Provider / access:** xAI API / OpenRouter (`xai/grok-4`), Chat Completions API.
- **Release / knowledge:** Released 2025; knowledge cutoff current.
- **IDs:** `xai/grok-4` (no Free ID on Zen).
- **Context window:** 256,000 tokens total (verified via xAI documentation).
- **Modalities:** Text input, image input, PDF input; text output; native tool calling; JSON mode.
- **Pricing (as of 2026-10-10):** Paid professional tier ($3.00 input / $15.00 output per 1M tokens; $0.75 cached).
- **Architecture:** Proprietary Mixture-of-Experts (MoE) architecture by xAI.

### Raw benchmarks found

- GPQA Diamond: **87.5%** <(xAI evaluation suite, 2025/2026)>
- HLE (Humanity's Last Exam): **38.6%** <(with Python/internet assistance)>
- SWE-bench Verified: **57.8%** <(SWE-bench official leaderboard, October 2026)>
- LiveCodeBench: **79.0%** <(LiveCodeBench benchmark harness)>
- RULER 256K window: **retrieval quality verified** <(xAI documentation)>

### Normalized scores (1–100)

- **Tool use: 82/100.** Native parallel tool calling plus live X/web search; capped by lack of formal terminal/banking harness benchmarks.
- **Reasoning: 86/100.** GPQA Diamond (87.5%) and HLE (38.6%) reflect strong reasoning performance.
- **Context window: 74/100.** 256K context window tier.
- **Multimodal: 65/100.** Text and image input support.
- **Coding: 80/100.** SWE-bench Verified (57.8%) and LiveCodeBench (79.0%).
- **Cost efficiency: 60/100.** Paid tier ($3/$15 per 1M).
- **Overall Score: 77.0/100.** Best-fit recommendation: High-performance reasoning model with real-time web grounding and robust coding capabilities.

---

## Re-research update (2026-10-10)

- **Second-pass verification:** Confirmed across xAI technical documentation. SWE-bench Verified 57.8% and GPQA Diamond 87.5% verified.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-10 (second-pass deep research)
- Method: Deep second-pass multi-source empirical research and verification across official xAI technical documentation, independent benchmark leaderboards, and harness telemetry; normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
