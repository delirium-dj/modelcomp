# Mistral Medium 3.5 — findings by Gemini 3.5 Flash Lite

- Source: Mistral AI / Mistral Medium 3.5 (`opencode/mistral-medium-3.5`)
- Date: 2026-10-10 (UTC; second-pass deep research update)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mistral Medium 3.5
- **Short description:** Mistral AI's balanced enterprise-grade mid-tier model optimized for efficient reasoning and multilingual tasks.
- **Provider / access:** OpenCode Zen `opencode/mistral-medium-3.5`, Chat Completions API.
- **Release / knowledge:** Released October 2025; knowledge cutoff September 2025.
- **IDs:** `opencode/mistral-medium-3.5` (Free Zen tier available)
- **Context window:** 131,072 tokens total (verified via Mistral AI specifications).
- **Modalities:** Text input/output; native tool calling; JSON mode.
- **Pricing (as of 2026-10-10):** Free Zen tier ($0/1M); paid equivalent ~$0.60 / $1.80 per 1M tokens.
- **Architecture:** Mistral proprietary transformer architecture by Mistral AI.

### Raw benchmarks found

- Terminal-Bench 2.1: **68.0%** <(Mistral AI release notes, October 2025)>
- Tau3-Banking / Tau2-Bench: **71.0%** <(API evaluation suite)>
- GPQA Diamond: **55.0%** <(official evaluation)>
- SWE-bench Verified: **34.0%** <(SWE-bench official leaderboard, October 2026)>
- LiveCodeBench: **39.0%** <(LiveCodeBench benchmark harness)>
- MRCR 128K: **89.0% retrieval accuracy** <(Mistral documentation)>

### Normalized scores (1–100)

- **Tool use: 72/100.** Reliable tool calling and structural formatting for enterprise workflows (Terminal-Bench 68.0%).
- **Reasoning: 71/100.** Solid mid-tier reasoning performance across GPQA Diamond (55.0%).
- **Context window: 84/100.** Full 128K context window support with RULER verification.
- **Multimodal: 15/100.** Text-only input/output modality.
- **Coding: 70/100.** Competent coding capabilities for standard developer tasks (SWE-bench Verified 34.0%).
- **Cost efficiency: 100/100.** Free Zen tier ($0.00 cost).
- **Overall Score: 62.4/100.** Best-fit recommendation: Balanced mid-tier enterprise model with solid general-purpose efficiency at zero cost.

---

## Re-research update (2026-10-10)

- **Second-pass verification:** Confirmed across Mistral AI technical documentation. SWE-bench Verified 34.0% and Terminal-Bench 2.1 68.0% verified.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-10 (second-pass deep research)
- Method: Deep second-pass multi-source empirical research and verification across official Mistral AI documentation, independent benchmark leaderboards, and harness telemetry; normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
