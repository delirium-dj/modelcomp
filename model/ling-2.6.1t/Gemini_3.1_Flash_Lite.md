# Ling 2.6 1T — findings by Gemini 3.1 Flash Lite

- Source: InclusionAI/Ling 2.6 1T
- Date: 2026-11-13
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 2.6 1T
- **Short description:** InclusionAI's 1T scale instruction-following MoE for long-context retrieval and agents.
- **Provider / access:** InclusionAI (https://huggingface.co/inclusionAI/Ling-2.6-1T). MIT license open-weights.
- **Release / knowledge:** Apr 2026; knowledge cutoff unknown.
- **IDs:** `inclusionai/ling-2.6-1t` (MIT License)
- **Context window:** 262K total.
- **Modalities:** Text in/out.
- **Pricing (as of 2026-11-13):** ~$0.30/$2.50 per 1M (hosted); self-host $0.
- **Architecture:** MoE (1.03T total / 63B active).

### Raw benchmarks found

Reasoning / knowledge:
- tau2: **78.4%** (InclusionAI meta.json)

Coding:
- SWE-bench Verified: **72.2%** (InclusionAI meta.json)

### Normalized scores (1–100)

- **Tool use: 85/100.** Strong instruction following.
- **Reasoning: 80/100.** Capable for its scale (78.4% tau2).
- **Context window: 80/100.** 262K capacity.
- **Multimodal: 15/100.** Text-only.
- **Coding: 88/100.** Solid coding assistant (72.2% SWE-bench Verified).
- **Cost efficiency: 100/100.** Open-weights / self-hostable.
- **Overall Score: 69.6/100.** Reliable long-context agent, superseded by Ling 3.0/3.1.

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-11-13
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [InclusionAI](https://huggingface.co/inclusionAI)
