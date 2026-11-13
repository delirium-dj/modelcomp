# Hy4 (preview) — findings by Gemini 3.1 Flash Lite

- Source: Tencent/Hy4 (preview)
- Date: 2026-11-13
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Hy4 (preview)
- **Short description:** Tencent's 770B/49B-active open-weight MoE (1M context) for agentic coding.
- **Provider / access:** Tencent (https://huggingface.co/tencent/Hy4-preview). Apache 2.0 open-weights.
- **Release / knowledge:** Aug 2026; knowledge cutoff unknown.
- **IDs:** `tencent/hy4-preview` (Open-weights)
- **Context window:** 1M tokens total; 64K tokens max output.
- **Pricing (as of 2026-11-13):** ~$0.75/$2.25 per 1M (OpenRouter); self-host $0.
- **Architecture:** MoE (770B total / 49B active).

### Raw benchmarks found

Reasoning / knowledge:
- GPQA: **92.3%** (Tencent meta.json)

Coding:
- Terminal-Bench 2.1: **85.4%** (Tencent meta.json)

### Normalized scores (1–100)

- **Tool use: 90/100.** Strong agentic coding capabilities.
- **Reasoning: 92/100.** Elite-tier reasoning (92.3% GPQA).
- **Context window: 90/100.** 1M context.
- **Multimodal: 15/100.** Text-only.
- **Coding: 90/100.** High-performance coding (85.4% TB 2.1).
- **Cost efficiency: 100/100.** Open-weights / self-hostable.
- **Overall Score: 75.4/100.** Elite open-weights model for high-performance agentic coding.

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-11-13
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Tencent](https://huggingface.co/tencent/Hy4-preview)
