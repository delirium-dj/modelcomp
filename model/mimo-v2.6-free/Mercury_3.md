# MiMo V2.6 Free — findings by Mercury 3

- Source: Xiaomi/MiMo V2.6 Free
- Date: 2026-11-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo-V2.6-Free (free serving route of the MiMo-V2.6 series)
- **Short description:** Free-access serving route for the Xiaomi MiMo V2.6 Flash weights (mirroring the established V2.5 Free precedent where the Free name serves the standard weights at $0). $0 cost with the V2.6 Flash family's agentic/coding profile; no separate checkpoint identified.
- **Provider / access:** Free routes on select gateways/platforms (no verified OpenRouter route found; Xiaomi platform free access); not present in models.dev canonical list or AA/BenchLM.
- **Release / knowledge:** Same family as MiMo-V2.6-Flash-RL (2026-09-21); knowledge cutoff not published.
- **IDs:** `mimo-v2.6-free` (free route; same weights as `MiMo-V2.6-Flash-RL`).
- **Context window:** 1,000,000 tokens (1M) total (family spec); max output 131,072.
- **Modalities:** text + image + video + audio input (native omni per HF family card), text output; reasoning (extended thinking); tool calls.
- **Pricing (as of 2026-11-03):** $0.00 input / $0.00 output (free tier; data-usage caveats may apply depending on the gateway).
- **Architecture:** 309B total / 15B active MoE (Flash family); MIT license, open weights.

### Raw benchmarks found

Family evidence (MiMo-V2.6-Flash-RL technical report — no Free-specific rows exist):

- Terminal-Bench 2.1: **87.6%**; DeepSWE: **67.9%**; OSWorld-Verified: **80.8%**; AutomationBench v1.0.6: **52.3%**; Toolathlon-Verified: **73.6%**; JobBench: **61.2%**; Agents' Last Exam: 27.6%; CyberGym: **95.1%**
- GDPval-AA normalized: 55.4% (AA); AA-LCR: 74.3%; HLE: 35.1% (AA); II 27 (#9/23 open, AA)
- Sparse independent coverage: no AA/BenchLM page for the Free route itself.

### Normalized scores (1–100)

Same weights as MiMo-V2.6-Flash — scores mirror it with cost at 100:

- **Tool use: 86/100.** TB2.1 87.6%, OSWorld-Verified 80.8%, CyberGym 95.1% (family); capped by TB4.0 28.8% and Agents' Last Exam 27.6%.
- **Reasoning: 78/100.** II 27 (#9/23 open) and LCR 74.3%; capped by HLE 35.1%, CritPt 12%, hallucination rate 52.2%.
- **Context window: 88/100.** 1M with moderate LCR 74.3%; no ≥98%-retrieval figure at depth.
- **Multimodal: 90/100.** Native omni input (text/image/video/audio per HF); text-only output and thin verified video/audio evals cap it.
- **Coding: 84/100.** DeepSWE 67.9% and TB2.1 87.6% strong; capped by ProgramBench 26% and SciCode 51.3%.
- **Cost efficiency: 100/100.** $0/$0 — free.
- **Overall Score: 85/100.** Mean of (86+78+88+90+84)/5 = 85.2 → 85. The same MiMo V2.6 Flash capability at $0; verify the free route is still active before relying on it.

---

## Signature

- Provided by: **Mercury 3 (inception/mercury-3)** — 2026-11-03
- Method: public internet research (Xiaomi MiMo technical report/family card, models.dev registry, OpenRouter); scores are normalized 1–100 interpretations, not official vendor scores. Identity note: Free is a serving route of the V2.6 Flash weights (per the V2.5 Free precedent) — no distinct checkpoint found; family evidence flagged as such.
- Reference URLs:
  - [MiMo-V2.6-Flash-RL model card + technical report (Hugging Face, family)](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL)
  - [MiMo V2.6 blog (Xiaomi)](https://mimo.xiaomi.com/mimo-v2-6)
  - [MiMo-V2.6-Flash — Artificial Analysis model page (family)](https://artificialanalysis.ai/models/mimo-v2-6-flash)
  - [MiMo-V2.6-Flash — models.dev registry](https://models.dev/models/xiaomi/mimo-v2.6-flash)
