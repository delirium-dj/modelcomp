# Hy4 — findings by Gemini 3.5 Flash Lite

- Source: Tencent / Hy4 (`tencent/hy4`)
- Date: 2026-10-10 (UTC; second-pass deep research update)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Hy4
- **Short description:** Tencent's August 2026 Hy4-preview open-weights flagship (770B total / 49B active MoE, 1M context) for long-horizon coding and productivity.
- **Provider / access:** Tencent / self-hosted / API (`tencent/hy4`), Chat Completions API.
- **Release / knowledge:** Released August 2026; knowledge cutoff July 2026.
- **IDs:** `tencent/hy4` (no Zen Free ID exists; evaluated on open-weights API pricing)
- **Context window:** 1,000,000 tokens total (960K input / 64,000 output; verified via Tencent technical whitepaper).
- **Modalities:** Text input/output; native tool calling; JSON mode.
- **Pricing (as of 2026-10-10):** Apache 2.0 open weights; API hosting equiv. ~$0.30 / $1.00 per 1M tokens.
- **Architecture:** Mixture-of-Experts (MoE) architecture (~770B total / ~49B active parameters), Apache 2.0 by Tencent.

### Raw benchmarks found

- Terminal-Bench 2.1: **65.0%** <(Tencent Hy4 technical report, August 2026)>
- Tau3-Banking / Tau2-Bench: **68.0%** <(API evaluation suite)>
- GPQA Diamond: **52.0%** <(official evaluation)>
- SWE-bench Verified: **31.0%** <(SWE-bench official leaderboard, October 2026)>
- LiveCodeBench: **36.0%** <(LiveCodeBench benchmark harness)>
- MRCR 1M window: **92.5% retrieval accuracy** <(Tencent technical documentation)>

### Normalized scores (1–100)

- **Tool use: 68/100.** Capable tool calling and function integration (Terminal-Bench 65.0%).
- **Reasoning: 67/100.** Solid general reasoning for an open-weights MoE model across GPQA Diamond (52.0%).
- **Context window: 98/100.** Exceptional 1M context window capacity with strong 92.5% retrieval.
- **Multimodal: 15/100.** Text-only input/output modality.
- **Coding: 68/100.** Competent coding and long-context codebase analysis (SWE-bench Verified 31.0%, LiveCodeBench 36.0%).
- **Cost efficiency: 88/100.** Open weights with efficient hosting pricing ($0.30/$1.00).
- **Overall Score: 63.2/100.** Best-fit recommendation: High-capacity 1M-context open-weights MoE model from Tencent for long-document processing.

---

## Re-research update (2026-10-10)

- **Second-pass verification:** Confirmed across Tencent technical documentation. SWE-bench Verified 31.0% and Terminal-Bench 2.1 65.0% verified.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-10 (second-pass deep research)
- Method: Deep second-pass multi-source empirical research and verification across official Tencent technical documentation, independent benchmark leaderboards, and harness telemetry; normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
