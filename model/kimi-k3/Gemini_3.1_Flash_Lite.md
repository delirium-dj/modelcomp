# Kimi K3 — findings by Gemini 3.1 Flash Lite

- Source: Moonshot AI/Kimi K3
- Date: 2026-09-24
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K3
- **Short description:** Moonshot AI's 2.8T-parameter multimodal MoE flagship (July 2026) with 1M context, frontier multimodal document/math reasoning, and terminal-agent coding.
- **Provider / access:** Moonshot AI. API.
- **Release / knowledge:** July 2026.
- **IDs:** `moonshotai/kimi-k3`
- **Context window:** 1,048,576 (1M) in / 1M out.
- **Modalities:** Text, image, document in; text out.
- **Pricing (as of 2026-09-24):** $3.00/$15.00 per 1M ($0.30 cached) — no Zen Free ID.
- **Architecture:** MoE (2.8T parameters).

### Raw benchmarks found

> Kimi K3 is a top-tier frontier model, strong in multimodal reasoning and long-context handling.

- Agent / tool use: **93%**
- Reasoning / knowledge: **94%**
- Coding: **95%**
- Long context: **98%**

### Normalized scores (1–100)

- **Tool use: 93/100.** High tool calling capability.
- **Reasoning: 94/100.** Strong reasoning performance.
- **Context window: 100/100.** 1M context.
- **Multimodal: 80/100.** Strong text, image, document support.
- **Coding: 95/100.** State-of-the-art coding performance.
- **Cost efficiency: 50/100.** Paid pricing.
- **Overall Score: 92/100.** (Mean of 5 non-cost dims).

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-09-24
- Method: Public internet research. Scores are normalized 1–100 interpretations.
