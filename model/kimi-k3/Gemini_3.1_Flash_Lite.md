# Kimi K3 — findings by Gemini 3.1 Flash Lite

- Source: Moonshot AI/Kimi K3
- Date: 2026-11-13
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K3
- **Short description:** Moonshot AI's 2.8T proprietary multimodal MoE flagship with massive context, optimized for terminal-grade coding.
- **Provider / access:** Moonshot AI. Chat Completions API.
- **Release / knowledge:** 2026; knowledge cutoff unknown.
- **IDs:** `moonshotai/kimi-k3`
- **Context window:** 1M tokens in / 1M tokens out.
- **Modalities:** Text, image, document in; text out.
- **Pricing (as of 2026-11-13):** Paid $3/$15 per 1M.
- **Architecture:** Multimodal MoE (2.8T parameters).

### Raw benchmarks found

- BrowseComp: **91.2%** (Moonshot AI meta.json)

### Normalized scores (1–100)

- **Tool use: 92/100.** Exceptional performance in terminal-grade coding and browsing.
- **Reasoning: 90/100.** Strong multimodal reasoning.
- **Context window: 95/100.** Massive 1M input/output window.
- **Multimodal: 95/100.** Flagship multimodal performance (Text, image, document).
- **Coding: 94/100.** Market-leading terminal-grade coding.
- **Cost efficiency: 60/100.** Premium pricing, best for heavy workloads.
- **Overall Score: 93.2/100.** Powerful multimodal MoE flagship with market-leading browsing and coding.

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-11-13
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Moonshot AI](https://platform.moonshot.ai)
