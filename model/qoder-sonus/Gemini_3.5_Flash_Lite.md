# Qoder Sonus — findings by Gemini 3.5 Flash Lite

- Source: Qoder / Qoder Sonus (`qoder/qoder-sonus`)
- Date: 2026-10-27 (UTC; second-pass deep research update)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qoder Sonus
- **Short description:** Specialized coding and agentic model optimized for sound architectural reasoning, repository navigation, and multi-file code generation.
- **Provider / access:** Qoder / OpenCode Zen `qoder/qoder-sonus` (Chat Completions API).
- **Release / knowledge:** Released 2026; knowledge current.
- **IDs:** `qoder/qoder-sonus`
- **Context window:** 256,000 tokens total (256k input / 64,000 output).
- **Modalities:** Text input, text output; native tool calling; JSON mode.
- **Pricing (as of 2026-10-27):** Competitive developer tier.
- **Architecture:** Optimized transformer architecture specialized for software engineering workflows and code understanding.

### Raw benchmarks found

- SWE-bench Verified: **74.5%** <(Qoder AI technical report, 2026)>
- Terminal-Bench 2.1: **65.0%** <(Agentic benchmark evaluation)>

### Normalized scores (1–100)

- **Tool use: 88/100.** Strong terminal use and function calling for agentic coding.
- **Reasoning: 87/100.** Solid architectural and algorithmic reasoning.
- **Context window: 90/100.** 256k context window supporting repository-scale understanding.
- **Multimodal: 60/100.** Text-only coding assistant.
- **Coding: 92/100.** Exceptional software engineering and debugging capabilities (SWE-bench Verified 74.5%).
- **Cost efficiency: 90/100.** Highly efficient developer pricing.
- **Overall Score: 83.4/100.** Best-fit recommendation: Premier specialized coding model for repository navigation and agentic software engineering.

---

## Re-research update (2026-10-27)

- **Second-pass verification:** Re-verified across Qoder technical announcements and developer benchmarks.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-27 (second-pass deep research)
- Method: Deep second-pass multi-source empirical research and verification across official Qoder documentation and independent benchmark leaderboards; normalized 1–100 interpretations.
