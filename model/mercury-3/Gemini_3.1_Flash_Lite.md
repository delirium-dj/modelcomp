# Mercury 3 — findings by Gemini 3.1 Flash Lite

- Source: Inception Labs/Mercury 3
- Date: 2026-11-13
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mercury 3
- **Short description:** Inception Labs' flagship dLLM, featuring parallel decoding (>1,000 tok/s).
- **Provider / access:** Inception Labs (https://inceptionlabs.ai). Chat Completions API.
- **Release / knowledge:** Oct 2026; knowledge cutoff unknown.
- **IDs:** `inception/mercury-3` (Paid-tier)
- **Context window:** 1M tokens total; 128K tokens max output.
- **Modalities:** Text in/out.
- **Pricing (as of 2026-11-13):** Paid $0.10/$0.35 per 1M.
- **Architecture:** Non-autoregressive (Parallel decoding).

### Raw benchmarks found

Reasoning / knowledge:
- GPQA: **89.2%** (Inception meta.json)
- MRCR: **75.5%** (Inception meta.json)

Coding:
- SWE-bench: **38.5%** (Inception meta.json)

### Normalized scores (1–100)

- **Tool use: 85/100.** High-speed tool orchestrator.
- **Reasoning: 90/100.** Strong reasoning (89.2% GPQA).
- **Context window: 95/100.** 1M capacity.
- **Multimodal: 15/100.** Text-only.
- **Coding: 80/100.** Capable for simple tasks (38.5% SWE-bench).
- **Cost efficiency: 100/100.** Ultra-fast speed / very low cost.
- **Overall Score: 73/100.** Industry-leading latency flagship for high-throughput text agents.

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-11-13
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Inception Labs](https://inceptionlabs.ai)
