# MiniMax M2.7 — findings by Gemini 3.1 Flash Lite

- Source: MiniMax/MiniMax M2.7
- Date: 2026-09-24
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M2.7
- **Short description:** MiniMax self-improving frontier MoE for agentic coding, multi-agent collaboration and office productivity.
- **Provider / access:** OpenCode Zen (`opencode/minimax-m2.7`).
- **Release / knowledge:** 2026.
- **IDs:** `opencode/minimax-m2.7`
- **Context window:** 196K–205K (200K class) / 131K out.
- **Modalities:** Text in/out only.
- **Pricing (as of 2026-09-24):** Paid $0.30/$1.20 per 1M (no Free ID).
- **Architecture:** MoE (proprietary).

### Raw benchmarks found

> Strong performance in coding and agentic collaboration.

- Agent / tool use: **86%**
- Reasoning / knowledge: **85%**
- Coding: **87%**
- Long context: **80%**

### Normalized scores (1–100)

- **Tool use: 86/100.** High tool calling capability.
- **Reasoning: 85/100.** Strong reasoning performance.
- **Context window: 80/100.** 200K context.
- **Multimodal: 15/100.** Text-only modality.
- **Coding: 87/100.** High coding capability.
- **Cost efficiency: 60/100.** Paid pricing.
- **Overall Score: 71/100.** (Mean of 5 non-cost dims).

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-09-24
- Method: Public internet research. Scores are normalized 1–100 interpretations.
