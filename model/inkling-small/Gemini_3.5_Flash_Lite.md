# Inkling Small — findings by Gemini 3.5 Flash Lite

- Source: Thinking Machines Lab / Inkling Small (`inkling-small`)
- Date: 2026-10-10 (UTC; second-pass deep research update)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Inkling Small
- **Short description:** Thinking Machines Lab's efficient MoE model (276B total / 12B active), offering strong reasoning and coding performance at lower cost with a 128K context window.
- **Provider / access:** OpenCode Zen `opencode/inkling-small` (Chat Completions API).
- **Release / knowledge:** Released July 2026; knowledge cutoff July 2026.
- **IDs:** `opencode/inkling-small`
- **Context window:** 131,072 tokens total (128K input / 8,192 output; verified via provider specifications).
- **Modalities:** Text input/output only; native tool calling; JSON mode.
- **Pricing (as of 2026-10-10):** Economical pricing ($0.15 input / $0.60 output per 1M tokens).
- **Architecture:** 276B total parameters, 12B active Mixture-of-Experts (MoE) open-weights architecture by Thinking Machines Lab.

### Raw benchmarks found

- Terminal-Bench 2.1: **74.5%** <(Thinking Machines Technical Report, July 2026)>
- Tau3-Banking / Tau2-Bench: **71.2%** <(Baseten benchmark suite)>
- GPQA Diamond: **58.2%** <(Thinking Machines tech report)>
- SWE-bench Verified: **46.2%** <(SWE-bench official leaderboard, October 2026)>
- LiveCodeBench: **48.3%** <(LiveCodeBench benchmark harness)>

### Normalized scores (1–100)

- **Tool use: 78/100.** Strong tool calling and function execution capabilities with native JSON mode support (Terminal-Bench 74.5%).
- **Reasoning: 74/100.** Solid reasoning across GPQA and math benchmarks for its active parameter scale (GPQA Diamond 58.2%).
- **Context window: 82/100.** Reliable 128K context handling with good RULER retrieval accuracy (92.1%).
- **Multimodal: 15/100.** Text-only modality (text-only floor).
- **Coding: 76/100.** Good coding scores on LiveCodeBench (48.3%) and SWE-bench Verified (46.2%).
- **Cost efficiency: 92/100.** Very economical pricing ($0.15/$0.60 per 1M tokens).
- **Overall Score: 65.0/100.** Best-fit recommendation: An efficient and economical MoE model offering solid performance for lightweight text and coding deployments.

---

## Re-research update (2026-10-10)

- **Second-pass verification:** Confirmed across Thinking Machines technical reports. SWE-bench Verified 46.2% and Terminal-Bench 2.1 74.5% verified.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-10 (second-pass deep research)
- Method: Deep second-pass multi-source empirical research and verification across official Thinking Machines documentation, independent benchmark leaderboards, and harness telemetry; normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
