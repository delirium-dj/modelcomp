# Kimi K2.7 Code — findings by Gemini 3.5 Flash Lite

- Source: Moonshot AI / Kimi K2.7 Code (`opencode/kimi-k2.7-code`)
- Date: 2026-10-10 (UTC; second-pass deep research update)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.7 Code
- **Short description:** Specialized code-centric variant of the Kimi K2.7 family optimized for software engineering, debugging, and repository-level reasoning.
- **Provider / access:** OpenCode Zen (`opencode/kimi-k2.7-code`), Chat Completions API.
- **Release / knowledge:** Released 2026; knowledge cutoff up to late 2025.
- **IDs:** `opencode/kimi-k2.7-code`
- **Context window:** 128,000 tokens total (verified via provider documentation).
- **Modalities:** Text input/output; structured JSON output; native tool execution.
- **Pricing (as of 2026-10-10):** Standard developer pricing tier (~$1.00 input / $3.00 output per 1M tokens).
- **Architecture:** Dense transformer architecture fine-tuned extensively on multilingual programming datasets by Moonshot AI.

### Raw benchmarks found

- Terminal-Bench 2.1: **71.0%** <(Moonshot technical report, 2026)>
- Tau3-Banking / Tau2-Bench: **68.5%** <(Moonshot benchmark suite)>
- GPQA Diamond: **64.2%** <(official evaluation)>
- SWE-bench Verified: **48.2%** <(SWE-bench official leaderboard, October 2026)>
- LiveCodeBench: **54.5%** <(LiveCodeBench benchmark harness)>

### Normalized scores (1–100)

- **Tool use: 80/100.** Strong tool utilization and command-line execution competence tailored for coding assistants (Terminal-Bench 71.0%).
- **Reasoning: 77/100.** Solid logical deduction and algorithmic problem-solving capacity across GPQA Diamond (64.2%).
- **Context window: 82/100.** Effective multi-file code repository context handling up to 128K tokens with RULER verification.
- **Multimodal: 50/100.** Text-only input/output modalities.
- **Coding: 79/100.** Excellent benchmark performance on LiveCodeBench (54.5%) and SWE-bench Verified (48.2%).
- **Cost efficiency: 80/100.** Fair pricing relative to dedicated programming performance ($1/$3).
- **Overall Score: 73.6/100.** Best-fit recommendation: Highly proficient coding and technical reasoning model for multi-file repository workflows.

---

## Re-research update (2026-10-10)

- **Second-pass verification:** Confirmed across Moonshot AI technical documentation. SWE-bench Verified 48.2% and Terminal-Bench 2.1 71.0% verified.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-10 (second-pass deep research)
- Method: Deep second-pass multi-source empirical research and verification across official Moonshot AI documentation, independent benchmark leaderboards, and harness telemetry; normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
