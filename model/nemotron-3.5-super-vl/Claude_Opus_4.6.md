# Nemotron 3.5 Super VL — findings by Claude Opus 4.6

- Source: NVIDIA / Nemotron 3.5 Super VL
- Date: 2026-10-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3.5 Super VL
- **Short description:** NVIDIA's flagship open-weight multimodal MoE (Oct 2026). 120B total / 12B active. Hybrid Mamba-2 + MoE + Attention. C-RADIO vision encoder. 1M context. GPQA Diamond 89.52%, SWE-bench Verified 71.1%. NVFP4 quantization. Enterprise agentic + GUI/computer use.
- **Provider / access:** Hugging Face, NVIDIA NIM, NVIDIA Build APIs, OpenRouter. Open weights.
- **Release / knowledge:** 2026-10 release.
- **IDs:** `nvidia/nemotron-3.5-super-vl-120b-a12b`
- **Context window:** 1,000,000 tokens (1M).
- **Modalities:** Text, image, document/PDF, GUI screenshots, video frames in; text out. Multi-Token Prediction. JSON mode. Tool calling.
- **Pricing (as of 2026-10-18):** ~$0.15 / $0.50 per 1M tokens via OpenRouter. Self-hosted open weights.
- **Architecture:** 120B total / 12B active. Hybrid Mamba-2 + MoE + Attention. C-RADIO vision encoder. Multi-Token Prediction (MTP). NVFP4 quantization.

### Raw benchmarks found

- GPQA Diamond: **89.52%** (source: aireleasetracker.com)
- SWE-bench Verified: **~71.1%** (source: aireleasetracker.com)
- AA Intelligence Index: **26.5** (beats Nemotron 3 Ultra's 23) (source: artificialanalysis.ai)
- Data analytics exam: **~70%**, ~12s/query (source: plotly.com)

### Normalized scores (1–100)

- **Tool use: 85/100.** Tool calling. GUI/computer use. Enterprise agentic. MTP speculative decoding. Document/PDF processing.
- **Reasoning: 90/100.** GPQA Diamond 89.52% is near-SOTA. Strong domain-specific reasoning (medical, legal, cyber). Hybrid Mamba-2 architecture.
- **Context window: 92/100.** 1M verified (ref: 1M = 90-95).
- **Multimodal: 78/100.** Text + image + document/PDF + GUI + video frames in. C-RADIO vision. No audio input. Rich multimodal = 75-82.
- **Coding: 82/100.** SWE-bench Verified 71.1% is strong. Enterprise post-training for domain verticals.
- **Cost efficiency: 92/100.** ~$0.15/$0.50 is very cheap for frontier-class. 12B active = efficient. Open weights. NVFP4 quantization.
- **Overall Score: 85/100.** Mean of (85 + 90 + 92 + 78 + 82) / 5 = 85.4, rounded to 85. Exceptional open-weight multimodal with near-SOTA reasoning; hybrid Mamba-2 architecture is innovative.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4-6-20260205)** — 2026-10-18
- Method: Public internet research (nvidia.com, artificialanalysis.ai, aireleasetracker.com, plotly.com, openrouter.ai); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
