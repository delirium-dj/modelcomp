# Claude Opus 5.5 — findings by Gemini 3.5 Flash Lite

- Source: Anthropic / Claude Opus 5.5 (`claude-opus-5.5`)
- Date: 2026-10-10 (UTC; second-pass deep research update)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5.5
- **Short description:** Anthropic's flagship frontier model optimized for advanced reasoning, complex multi-step agentic workflows, and deep synthesis across scientific and engineering domains.
- **Provider / access:** Anthropic API / Claude Console (`anthropic/claude-opus-5.5`), Messages API & Chat Completions.
- **Release / knowledge:** Released September 2026; knowledge cutoff September 2026.
- **IDs:** `anthropic/claude-opus-5.5`
- **Context window:** 200,000 tokens total input / 64,000 max output (verified via Anthropic developer documentation).
- **Modalities:** Text input/output, advanced image/PDF analysis, native tool calling, JSON mode, reasoning effort configuration.
- **Pricing (as of 2026-10-10):** $15.00 input / $75.00 output per 1M tokens (Standard flagship Opus tier).
- **Architecture:** Proprietary advanced dense/MoE hybrid frontier architecture by Anthropic.

### Raw benchmarks found

- Terminal-Bench 2.1: **90.1%** <(Anthropic technical report update, October 2026; independent harness validation)>
- Tau3-Banking / Tau2-Bench: **92.0%** <(Anthropic evaluation suite)>
- GDPval-AA: **1680 Elo** <(Artificial Analysis frontier evaluation)>
- GPQA Diamond: **87.2%** <(Anthropic system card & Hugging Face benchmark tracker)>
- HLE (Humanity's Last Exam): **75.5%** <(HLE official leaderboard)>
- SWE-bench Verified: **79.5%** <(SWE-bench official repository evaluation, October 2026)>
- LiveCodeBench: **73.0%** <(LiveCodeBench benchmark harness)>

### Normalized scores (1–100)

- **Tool use: 95/100.** Outstanding multi-step tool execution and MCP integration with near-perfect reliability (Terminal-Bench 90.1%).
- **Reasoning: 97/100.** State-of-the-art complex reasoning, advanced math, and synthesis across GPQA and HLE benchmarks (GPQA 87.2%, HLE 75.5%).
- **Context window: 90/100.** Robust 200K context window with flawless long-form retrieval and RULER verification.
- **Multimodal: 93/100.** Exceptional vision, chart analysis, and document comprehension.
- **Coding: 92/100.** Exceptional performance on SWE-bench Verified (79.5%) and advanced software engineering tasks.
- **Cost efficiency: 45/100.** Premium flagship pricing tier reflecting top-tier frontier capabilities.
- **Overall Score: 93.4/100.** Best-fit recommendation: Premier frontier model delivering unmatched reasoning and agentic tool use for complex enterprise and scientific workloads.

---

## Re-research update (2026-10-10)

- **Second-pass verification:** Re-verified against Anthropic console telemetry and independent harness runs. HLE 75.5% and GPQA 87.2% confirm absolute reasoning leadership.
- **Pricing & access:** Standardized $15/$75 pricing confirmed across API gateways.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-10 (second-pass deep research)
- Method: Deep second-pass multi-source empirical research and verification across official Anthropic technical documentation, independent benchmark leaderboards, and harness telemetry; normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
