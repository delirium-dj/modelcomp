# MiMo V2.5 Free — findings by Mercury 3

- Source: Xiaomi/MiMo V2.5 Free
- Date: 2026-11-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo-V2.5-Free (free serving route of the MiMo-V2.5 series; the alias roster confirms this name also covers "Xiaomi MiMo-V2.5 Free" — one identity, never a second folder)
- **Short description:** Free-access serving route for the Xiaomi MiMo V2.5 weights (mirroring the V2.6 Free precedent where the Free name serves the standard weights at $0). $0 cost with the V2.5 family's agentic/coding profile; no separate checkpoint identified.
- **Provider / access:** Free routes on select gateways/platforms; not present in models.dev canonical list or AA/BenchLM.
- **Release / knowledge:** Same family as MiMo-V2.5-Pro (2026-04-22); knowledge cutoff not published.
- **IDs:** `mimo-v2.5-free` (free route; same weights as the V2.5 family).
- **Context window:** 1,000,000 tokens (1M) total (family spec); max output 131,072 (family).
- **Modalities:** text input, text output (family Pro is text-only per AA); reasoning (extended thinking); tool calls.
- **Pricing (as of 2026-11-03):** $0.00 input / $0.00 output (free tier; data-usage caveats may apply depending on gateway).
- **Architecture:** family 1T total / 42B active MoE (Pro), MIT license, open weights.

### Raw benchmarks found

Family evidence (MiMo-V2.5-Pro, AA page — no Free-specific rows exist):

- 1M context; 1T/42B MoE; MIT open weights; released 2026-04-22
- $0.435/$0.87 blended family pricing (free route is $0)
- Text-only input per AA; no independent benchmark rows for the Free route verified

### Normalized scores (1–100)

Same weights as MiMo V2.5 family — scores are family-anchored with cost at 100:

- **Tool use: 74/100.** Family agentic profile; no verified Free-specific rows — capped by missing evidence.
- **Reasoning: 76/100.** Family reasoning profile; no verified GPQA/HLE/II rows — capped by missing evidence.
- **Context window: 88/100.** 1M family spec; no retrieval figure verified.
- **Multimodal: 55/100.** Text-only input per AA family page — no native vision.
- **Coding: 78/100.** Family coding-agent profile; no verified SWE/TB rows — capped by missing evidence.
- **Cost efficiency: 100/100.** $0/$0 — free.
- **Overall Score: 74/100.** Mean of (74+76+88+55+78)/5 = 74.2 → 74. The MiMo V2.5 capability at $0; verify the free route is still active before relying on it.

---

## Signature

- Provided by: **Mercury 3 (inception/mercury-3)** — 2026-11-03
- Method: public internet research (Artificial Analysis MiMo-V2.5-Pro family page, models.dev registry, alias roster); scores are normalized 1–100 interpretations, not official vendor scores. Identity note: Free is a serving route of the V2.5 weights — no distinct checkpoint found; family evidence flagged as such.
- Reference URLs:
  - [MiMo-V2.5-Pro — Artificial Analysis model page (family: 1T/42B, 1M, MIT)](https://artificialanalysis.ai/models/mimo-v2-5-pro)
  - [MiMo-V2.5-Pro-UltraSpeed — models.dev registry](https://models.dev/models/xiaomi/mimo-v2.5-pro-ultraspeed)
