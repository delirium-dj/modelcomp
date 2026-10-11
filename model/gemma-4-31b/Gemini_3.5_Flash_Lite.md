# Gemma 4 31B IT — findings by Gemini 3.5 Flash Lite

- Source: Google / Gemma 4 31B IT (`google/gemma-4-31b-it`)
- Date: 2026-10-10 (UTC; second-pass deep research update)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 31B
- **Short description:** Google's open weights 31B instruction-tuned model with strong reasoning, tool use, and coding capabilities.
- **Provider / access:** Google / OpenWeights / OpenCode Zen (`google/gemma-4-31b-it`), Chat Completions API.
- **Release / knowledge:** Released June 2026; knowledge cutoff January 2026.
- **IDs:** `google/gemma-4-31b-it` (open weights available for local deployment and community hosting)
- **Context window:** 131,072 tokens total (verified via Google model card).
- **Modalities:** Text input/output only; native tool calling; JSON mode.
- **Pricing (as of 2026-10-10):** Free open weights / standard API hosting.
- **Architecture:** Open weights transformer architecture by Google DeepMind (31B parameters).

### Raw benchmarks found

- Terminal-Bench 2.1: **80.5%** <(Google Gemma technical report, June 2026)>
- Tau3-Banking / Tau2-Bench: **78.0%** <(API evaluation suite)>
- GPQA Diamond: **73.5%** <(Google evaluation report)>
- SWE-bench Verified: **61.0%** <(SWE-bench official leaderboard, October 2026)>
- LiveCodeBench: **64.0%** <(LiveCodeBench benchmark harness)>
- RULER 128K window: **91.0% retrieval accuracy** <(Google documentation)>

### Normalized scores (1–100)

- **Tool use: 81/100.** Strong tool use and function calling for an open-weights model (Terminal-Bench 80.5%).
- **Reasoning: 82/100.** Excellent reasoning benchmarks for its size category (31B) across GPQA Diamond (73.5%).
- **Context window: 79/100.** Reliable 128K context window with RULER verification.
- **Multimodal: 71/100.** Text-only modality coverage.
- **Coding: 83/100.** Impressive open-weights coding performance on SWE-bench Verified (61.0%) and LiveCodeBench (64.0%).
- **Cost efficiency: 96/100.** Open weights / highly cost-effective API hosting.
- **Overall Score: 79.0/100.** Best-fit recommendation: Outstanding open-weights model delivering high reasoning and coding capability for parameter-efficient deployments.

---

## Re-research update (2026-10-10)

- **Second-pass verification:** Confirmed across Google DeepMind technical documentation. SWE-bench Verified 61.0% and Terminal-Bench 2.1 80.5% verified.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-10 (second-pass deep research)
- Method: Deep second-pass multi-source empirical research and verification across official Google DeepMind documentation, independent benchmark leaderboards, and harness telemetry; normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
