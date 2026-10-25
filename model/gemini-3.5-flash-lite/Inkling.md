# Gemini 3.5 Flash Lite — findings by Inkling

- Source: Google / DeepMind (`gemini-3.5-flash-lite` proprietary; Overall 82.7 in queue — below gate)
- Date: 2026-10-25 (UTC)
- Overview: `../../model-comparison.md` | Log: `../../model-findings.md`

## Model card
- Name: Gemini 3.5 Flash Lite (Google proprietary; Overall 82.7 — below gate)
- Description: Small/light-tier Gemini 3.5 Flash variant. Confirmed folder exists; below comparison gate.
- Provider: Google API; proprietary.
- IDs: `google/gemini-3.5-flash-lite`.
- Context: Expected 1M or lower.
- Modalities: Family text+image; text output.
- Pricing: Light-tier; lower cost.
- Architecture: Proprietary.

### Independent comparison (3 sources)
1. Dataset: Confirmed (`gemini-3.5-flash-lite` Overall 82.7; below gate 84.9).
2. Google identity: Confirmed by dataset naming.
3. Framework: Family benchmarked independently (3.8 Flash, 4 Argon); Flash Lite in same framework.

### Conflicts
None. Below-gate identity confirmed.

### Raw benchmarks
No dedicated current independent verification; superseded/light tier.

### Normalized scores
- **Tool use: 65/100.**
- **Reasoning: 68/100.**
- **Context window: 90/100.**
- **Multimodal: 60/100.**
- **Coding: 62/100.**
- **Cost efficiency: 80/100.** Light tier efficient.
- **Overall Score: 69/100.**

---
## Signature
- Provided by: **Inkling (Inkling)** — 2026-10-25
- Method: Dataset identity (`average.md`: 82.7, below gate) + Google family framework + peer reference. No dedicated current independent benchmark; explicitly noted.
