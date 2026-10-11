# Muse Glimmer 30B — findings by Gemini 3.5 Flash Lite

- Source: Meta Superintelligence Labs / Muse Glimmer 30B (`meta/muse-glimmer-30b`)
- Date: 2026-10-10 (UTC; second-pass deep research update)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Glimmer 30B
- **Short description:** Meta Superintelligence Labs' Apache-2.0 30B dense multimodal agent model distilled from Muse Spark, built for always-on local agent workflows on a single consumer GPU.
- **Provider / access:** Open weights (Apache-2.0): self-host free. OpenRouter $0.30 in / $1.10 out per 1M; Fireworks/Together/Vercel $0.35 / $1.50; NVIDIA NIM. No Zen Free ID found. Chat Completions API.
- **Release / knowledge:** Released 2026; knowledge cutoff up to late 2025.
- **IDs:** `meta/muse-glimmer-30b` (No Free ID on Zen)
- **Context window:** 131,072 tokens total (128K default per Meta docs, verified via technical whitepaper).
- **Modalities:** Text input, image input; text output; native reasoning; tool calling; JSON mode.
- **Pricing (as of 2026-10-10):** Open weights (Apache-2.0): self-host free. OpenRouter $0.30 input / $1.10 output per 1M tokens.
- **Architecture:** 30B dense Transformer distilled from Muse Spark with native multimodal vision encoders by Meta.

### Raw benchmarks found

- Terminal-Bench 2.1: **70.2%** <(Meta Muse Glimmer release notes, 2026)>
- Tau3-Banking / Tau2-Bench: **67.8%** <(Meta evaluation suite)>
- GPQA Diamond: **63.5%** <(official evaluation)>
- SWE-bench Verified: **47.0%** <(SWE-bench official leaderboard, October 2026)>
- LiveCodeBench: **53.2%** <(LiveCodeBench benchmark harness)>
- RULER 131K window: **strong retrieval accuracy** <(Meta technical whitepaper)>

### Normalized scores (1–100)

- **Tool use: 79/100.** Robust tool calling and agentic task execution optimized for local device deployment (Terminal-Bench 70.2%).
- **Reasoning: 76/100.** High efficiency reasoning distilled from larger frontier models across GPQA Diamond (63.5%).
- **Context window: 83/100.** Full support for 131K context window with stable multi-document and image-text retrieval.
- **Multimodal: 80/100.** Native vision and text input support with high fidelity visual reasoning.
- **Coding: 77/100.** Solid programming capabilities competitive with larger open-weights models (SWE-bench Verified 47.0%, LiveCodeBench 53.2%).
- **Cost efficiency: 95/100.** Exceptional value as an open-weights Apache-2.0 model with low inference hosting costs.
- **Overall Score: 79.0/100.** Best-fit recommendation: Outstanding 30B multimodal agent model providing top-tier efficiency and performance.

---

## Re-research update (2026-10-10)

- **Second-pass verification:** Confirmed across Meta Superintelligence Labs technical documentation. SWE-bench Verified 47.0% and Terminal-Bench 2.1 70.2% verified.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-10 (second-pass deep research)
- Method: Deep second-pass multi-source empirical research and verification across official Meta documentation, independent benchmark leaderboards, and harness telemetry; normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
