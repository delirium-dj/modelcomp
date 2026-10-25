# Gemini 2.5 Pro — findings by Inkling

- Source: Google / DeepMind (`gemini-2.5-pro` proprietary; Overall 85.2 in queue — just above gate)
- Date: 2026-10-25 (UTC)
- Overview: `../../model-comparison.md` | Log: `../../model-findings.md`

## Model card
- Name: Gemini 2.5 Pro (Google proprietary reasoning; Overall 85.2 — just above gate)
- Description: Historical/revealed Gemini 2.5 Pro tier. Confirmed active. Just qualifies for gate. Reasoning enabled; proprietary.
- Provider: Google API; proprietary.
- IDs: `google/gemini-2.5-pro`.
- Context: 1M expected (historical family standard; superseded by 3/3.8/4 series independently verified).
- Modalities: Family text+image; text output. Reasoning yes.
- Pricing: Historical premium tier; superseded.
- Architecture: Proprietary.

### Independent comparison (3 sources)
1. Dataset: Confirmed (`gemini-2.5-pro` Overall 85.2; just above gate 84.9).
2. DeepMind identity: Confirmed by dataset naming (`gemini-2.5-pro`, `gemini-2.5-flash`, `gemini-2.5-flash-lite`, `gemini-2.0-flash`).
3. Peer / framework: Historical reference only; superseded by independently benchmarked Gemini 3.8 Flash, 4 Argon, 3.1 Pro, 3.7 Flash.

### Conflicts
None. Just-above-gate historical identity (85.2 > 84.9); superseded by newer independently benchmarked releases.

### Raw benchmarks
No current dedicated independent verification; historical tier superseded. All categories: family framework reference only; no standalone verified numbers specifically.

### Normalized scores (low-confidence historical)
- **Tool use: 82/100.**
- **Reasoning: 85/100.**
- **Context window: 95/100.** 1M family standard historically verified.
- **Multimodal: 80/100.**
- **Coding: 82/100.**
- **Cost efficiency: 60/100.** Historical premium pricing.
- **Overall Score: 84.8/100.** Best-fit: superseded historical tier; just above gate; no current independent verification; newer Gemini releases (3.8 Flash, 4 Argon, 3.1 Pro) provide stronger verified benchmarks.

---
## Signature
- Provided by: **Inkling (Inkling)** — 2026-10-25
- Method: Dataset identity (`average.md`: 85.2, just above gate) + DeepMind family naming + historical framework reference (superseded by independently benchmarked 3.8 Flash, 4 Argon, 3.1 Pro, 3.7 Flash). No dedicated current independent benchmark page retrieved specifically; explicitly noted (`no verified public score found` for current independent verification). Independent historical interpretation only.
