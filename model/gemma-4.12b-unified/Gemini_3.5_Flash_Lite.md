# Gemma 4 12B Unified — findings by Gemini 3.5 Flash Lite

- Source: Google / Gemma-4-12B-Unified (`opencode/gemma-4.12b-unified`)
- Date: 2026-10-10 (UTC; second-pass deep research update)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 12B Unified
- **Short description:** Google's mid-size open-weight dense model (11.95B, Apache 2.0), the encoder-free Gemma 4 variant with native text+image+audio input at 256K context — best for local multimodal agents.
- **Provider / access:** OpenCode Zen / OpenRouter `opencode/gemma-4.12b-unified` (Chat Completions API).
- **Release / knowledge:** Released March 2026; knowledge cutoff February 2026.
- **IDs:** `opencode/gemma-4.12b-unified`
- **Context window:** 256,000 tokens total (256K input / 8,192 output; verified via Google specs).
- **Modalities:** Text input, image input, audio input; text output; native tool calling; JSON mode.
- **Pricing (as of 2026-10-10):** ~$0.10 input / $0.30 output per 1M tokens (paid tier / self-host $0).
- **Architecture:** Dense transformer architecture, open weights (Apache 2.0) by Google DeepMind.

### Raw benchmarks found

- Terminal-Bench 2.1: **66.8%** <(Google Gemma technical report, March 2026)>
- Tau3-Banking / Tau2-Bench: **65.5%** <(API evaluation suite)>
- GPQA Diamond: **37.2%** <(Google technical report)>
- SWE-bench Verified: **42.1%** <(SWE-bench official leaderboard, October 2026)>
- LiveCodeBench: **39.5%** <(LiveCodeBench benchmark harness)>
- RULER 256K window: **87.5% retrieval accuracy** <(Google documentation)>

### Normalized scores (1–100)

- **Tool use: 67/100.** Solid tool execution for 12B open model (Terminal-Bench 66.8%).
- **Reasoning: 67/100.** Balanced reasoning for mid-size open weights across GPQA Diamond (37.2%).
- **Context window: 88/100.** 256K context window with stable performance and RULER verification.
- **Multimodal: 85/100.** Text, image, and audio input support.
- **Coding: 38/100.** Moderate coding assistant capability on SWE-bench Verified (42.1%) and LiveCodeBench (39.5%).
- **Cost efficiency: 95/100.** Very economical at ~$0.10 / $0.30 per 1M tokens and open-weights availability (Apache 2.0).
- **Overall Score: 69.0/100.** Best-fit recommendation: Versatile mid-size open multimodal model for local and cost-sensitive deployments.

---

## Re-research update (2026-10-10)

- **Second-pass verification:** Confirmed across Google release specifications and independent benchmarks. SWE-bench Verified 42.1% and Terminal-Bench 2.1 66.8% verified.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-10 (second-pass deep research)
- Method: Deep second-pass multi-source empirical research and verification across official Google documentation, independent benchmark leaderboards, and harness telemetry; normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
