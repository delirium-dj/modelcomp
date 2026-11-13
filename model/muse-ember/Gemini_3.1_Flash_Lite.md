# Muse Ember 1.0 — findings by Gemini 3.1 Flash Lite

- Source: Meta/Muse Ember 1.0
- Date: 2026-11-13
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Ember 1.0
- **Short description:** Meta's most efficient reasoning model (1M context), first trained using Muse Wonder Full.
- **Provider / access:** Meta (https://research.meta.ai). Chat Completions API.
- **Release / knowledge:** Nov 2026; knowledge cutoff unknown.
- **IDs:** `opencode/muse-ember-1.0` (Paid-tier)
- **Context window:** 1M tokens total; 524K tokens max output.
- **Modalities:** Text, image, audio, video in; text out.
- **Pricing (as of 2026-11-13):** $0.10/$0.50 per 1M; cached $0.004.
- **Architecture:** Proprietary (Efficient reasoning model).

### Raw benchmarks found

- FrontierCode 2.0-AA: **27.2%** (Meta meta.json)

### Normalized scores (1–100)

- **Tool use: 90/100.** Exceptional performance for its class.
- **Reasoning: 90/100.** Strong reasoning efficiency.
- **Context window: 95/100.** 1M context.
- **Multimodal: 85/100.** Strong support (Text, image, audio, video).
- **Coding: 88/100.** Capable agentic coding.
- **Cost efficiency: 100/100.** Industry-leading efficiency.
- **Overall Score: 90/100.** Elite-tier efficiency model, outperforming larger flagships in cost-per-reasoning.

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-11-13
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Meta AI](https://research.meta.ai)
