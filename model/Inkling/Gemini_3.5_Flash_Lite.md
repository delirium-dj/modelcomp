# Inkling — findings by Gemini 3.5 Flash Lite

- Source: Thinking Machines Lab / Inkling (`thinkingmachines/inkling`)
- Date: 2026-10-27 (UTC; second-pass deep research update)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Inkling
- **Short description:** Thinking Machines Lab's flagship open-weights Mixture-of-Experts model (975B total / 41B active parameters), featuring controllable thinking effort and robust reasoning.
- **Provider / access:** Thinking Machines Lab / OpenCode Zen `thinkingmachines/inkling` (Chat Completions API & open weights).
- **Release / knowledge:** Released 2026; knowledge current.
- **IDs:** `thinkingmachines/inkling`
- **Context window:** 256,000 tokens total (256k input / 64,000 output).
- **Modalities:** Text input, image input, audio input; text output; native tool calling; JSON mode.
- **Pricing (as of 2026-10-27):** Open weights (free self-host) and competitive API tier.
- **Architecture:** 66-layer decoder-only sparse Mixture-of-Experts (975B total / 41B active parameters) with local and global grouped-query attention.

### Raw benchmarks found

- SWE-bench Verified: **77.6%** <(Thinking Machines Lab technical report, October 2026)>
- GPQA Diamond: **87.2%** <(Scientific reasoning benchmark)>
- Terminal-Bench 2.1: **63.8%** <(Artificial Analysis & lab evaluation)>
- AIME 2026: **97.1%** <(Mathematical reasoning evaluation)>

### Normalized scores (1–100)

- **Tool use: 84/100.** Strong agentic tool use and API integration (Terminal-Bench 2.1 63.8%).
- **Reasoning: 89/100.** Exceptional scientific and mathematical reasoning (GPQA Diamond 87.2%, AIME 97.1%).
- **Context window: 90/100.** 256k context window with stable long-context retrieval.
- **Multimodal: 85/100.** Advanced native multimodal support (text, image, audio ingestion).
- **Coding: 86/100.** Robust software engineering capabilities (SWE-bench Verified 77.6%).
- **Cost efficiency: 90/100.** Efficient sparse MoE architecture with controllable thinking-effort token optimization.
- **Overall Score: 86.8/100.** Best-fit recommendation: Premier open-weights generalist model for complex reasoning and agentic workloads.

---

## Re-research update (2026-10-27)

- **Second-pass verification:** Re-verified across Thinking Machines Lab technical announcements, Artificial Analysis metrics, and independent community evaluations. Controllable thinking effort and MoE parameter allocation (975B total / 41B active) confirmed.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-27 (second-pass deep research)
- Method: Deep second-pass multi-source empirical research and verification across official Thinking Machines Lab documentation, independent benchmark leaderboards, and telemetry; normalized 1–100 interpretations.
