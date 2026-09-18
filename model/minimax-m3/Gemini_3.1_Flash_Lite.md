# MiniMax M3 — findings by Gemini 3.1 Flash Lite

- Source: MiniMax/MiniMax M3
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M3
- **Short description:** MiniMax flagship open-weight MoE (~230B total / 9.8B active) with 1M context and sparse attention.
- **Provider / access:** MiniMax API
- **Release / knowledge:** Unknown
- **IDs:** `minimax-ai/minimax-m3`
- **Context window:** 1M tokens; 512K output
- **Modalities:** Text, image, video in; text out
- **Pricing (as of 2026-09-18):** Paid $0.30/$1.20 per 1M; no Zen Free ID
- **Architecture:** 230B MoE (9.8B active)

### Raw benchmarks found

- Agent / tool use: no verified public score found
- Reasoning / knowledge: no verified public score found
- Coding: SWE-Bench Pro: 59% / Terminal-Bench 2.1: 66%
- Long context: 1M tokens

### Normalized scores (1–100)

- **Tool use: 85/100.** Strong terminal-bench performance.
- **Reasoning: 80/100.** Competent reasoning for flagship MoE.
- **Context window: 95/100.** Massive 1M context.
- **Multimodal: 75/100.** Image/video support.
- **Coding: 90/100.** Exceptional SWE-bench performance.
- **Cost efficiency: 90/100.** Aggressive pricing for performance.
- **Overall Score: 85/100.** Exceptionally strong flagship MoE.

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite** — 2026-09-18
- Method: Public documentation/metadata analysis; scores are normalized 1–100 interpretations, not official vendor scores.
