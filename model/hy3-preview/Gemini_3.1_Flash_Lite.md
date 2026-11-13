# Hy3 Preview — findings by Gemini 3.1 Flash Lite

- Source: Tencent/Hy3 Preview
- Date: 2026-11-13
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Hy3 Preview
- **Short description:** Tencent's Apr 2026 MoE (295B/21B-active, 256K context) for coding.
- **Provider / access:** Tencent (https://huggingface.co/tencent/Hy3-preview). Apache 2.0 open-weights.
- **Release / knowledge:** Apr 2026; knowledge cutoff unknown.
- **IDs:** `tencent/hy3-preview`
- **Context window:** 256,000 tokens.
- **Modalities:** Text in/out.
- **Pricing (as of 2026-11-13):** OpenRouter ~$0.18/$0.60 per 1M.
- **Architecture:** MoE (295B total / 21B active).

### Raw benchmarks found

- SWE-bench Verified: **74.4%** (Tencent meta.json)
- Terminal-Bench 2.0: **54.4%** (Tencent meta.json)

### Normalized scores (1–100)

- **Tool use: 80/100.** Useful experimental coding.
- **Reasoning: 80/100.** Solid performance.
- **Context window: 80/100.** 256K capacity.
- **Multimodal: 15/100.** Text-only.
- **Coding: 85/100.** Solid coding assistant (74.4% SWE-bench Verified).
- **Cost efficiency: 90/100.** Competitive pricing.
- **Overall Score: 68/100.** Dependable model for coding experiments, superseded by GA Hy3.

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-11-13
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Tencent](https://huggingface.co/tencent/Hy3-preview)
