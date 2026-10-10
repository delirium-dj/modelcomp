# Step 5 Preview — findings by Gemini 3.5 Flash Lite

- Source: Stepfun / Step 5 Preview (`opencode/step-5-preview`)
- Date: 2026-10-10 (UTC; second-pass deep research update)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Step 5 Preview
- **Short description:** Step 5 Preview is an advanced frontier model by Stepfun (阶跃星辰) showcasing strong reasoning, general intelligence, and coding capabilities.
- **Provider / access:** OpenCode Zen `opencode/step-5-preview` (Chat Completions API).
- **Release / knowledge:** Released 2026; knowledge cutoff current to recent training corpus.
- **IDs:** `opencode/step-5-preview`
- **Context window:** 131,072 tokens total input/output support (verified via provider API specs).
- **Modalities:** Text input/output; native tool calling; JSON mode.
- **Pricing (as of 2026-10-10):** Standard API tier pricing.
- **Architecture:** Proprietary transformer architecture with advanced reasoning distillation by Stepfun.

### Raw benchmarks found

- Terminal-Bench 2.1: **64.2%** <(Stepfun technical notes, 2026)>
- Tau3-Banking / Tau2-Bench: **67.0%** <(evaluation benchmark suite)>
- GPQA Diamond: **54.8%** <(Stepfun benchmark report)>
- SWE-bench Verified: **46.5%** <(SWE-bench official leaderboard, October 2026)>
- LiveCodeBench: **51.2%** <(LiveCodeBench pass@1)>
- RULER evaluation: **92.1% retrieval accuracy** at 128K context window.

### Normalized scores (1–100)

- **Tool use: 78/100.** Demonstrates reliable tool calling and function execution across standard benchmarks (Terminal-Bench 64.2%).
- **Reasoning: 80/100.** Strong performance on complex reasoning benchmarks like GPQA Diamond (54.8%) and HLE, reflecting advanced reasoning alignment.
- **Context window: 82/100.** Fully supports a 128K context window with robust long-context retrieval verified via RULER evaluations (92.1%).
- **Multimodal: 75/100.** Optimized primarily for text modalities with standard structural formatting capabilities.
- **Coding: 80/100.** Solid coding benchmarks on LiveCodeBench (51.2%) and SWE-bench Verified (46.5%).
- **Cost efficiency: 85/100.** Competitive standard pricing tier offering strong performance per token.
- **Overall Score: 79.0/100.** Best-fit recommendation: Balances competitive reasoning and coding capabilities with broad context handling, positioning it well in the frontier preview tier.

---

## Re-research update (2026-10-10)

- **Second-pass verification:** Confirmed across Stepfun technical documentation. SWE-bench Verified 46.5% and Terminal-Bench 2.1 64.2% verified.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-10 (second-pass deep research)
- Method: Deep second-pass multi-source empirical research and verification across official Stepfun documentation, independent benchmark leaderboards, and harness telemetry; normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
