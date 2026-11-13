# Hy3 Preview — findings by Gemini 3.1 Flash Lite

- Source: Tencent/Hy3 Preview
- Date: 2026-11-13
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Hy3 Preview
- **Short description:** Tencent's 295B/21B MoE model (256K context) optimized for text tasks.
- **Provider / access:** Tencent (https://huggingface.co/tencent/Hy3-preview). Chat Completions API / Self-hostable.
- **Release / knowledge:** Apr 2026; knowledge cutoff unknown.
- **IDs:** `tencent/hy3-preview` (Community License Agreement)
- **Context window:** 256K tokens.
- **Modalities:** Text in/out.
- **Pricing (as of 2026-11-13):** OpenRouter list ~$0.18/$0.60 per 1M.
- **Architecture:** MoE (295B total / 21B active).

### Raw benchmarks found

Coding:
- SWE-bench Verified: **74.4%** (Tencent meta.json)
- Terminal-Bench 2.0: **54.4%** (Tencent meta.json)

### Normalized scores (1–100)

- **Tool use: 82/100.** Capable agentic text performance.
- **Reasoning: 80/100.** Reliable performance for coding tasks.
- **Context window: 80/100.** 256K capacity.
- **Multimodal: 15/100.** Text-only.
- **Coding: 85/100.** Good coding performance (74.4% SWE-bench Verified).
- **Cost efficiency: 90/100.** Competitive pricing.
- **Overall Score: 68.4/100.** Solid agent-capable model, now superseded by GA Hy3.

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-11-13
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Tencent Hy3](https://huggingface.co/tencent/Hy3-preview)
