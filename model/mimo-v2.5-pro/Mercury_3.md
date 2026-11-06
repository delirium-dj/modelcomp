# MiMo-V2.5-Pro — findings by Mercury 3

- Source: Xiaomi (MiMo-V2.5-Pro)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo-V2.5-Pro
- **Short description:** Xiaomi's flagship agentic coding model (released 2026-04-22): 1.02T total / 42B active sparse MoE with a 1M-token context, MIT open weights, optimized for very long agentic trajectories (1,000+ tool calls). Text-only (no native image/video/audio encoders — per Artificial Analysis and Model Beats).
- **Provider / access:** Xiaomi API Platform/AI Studio (`mimo-v2.5-pro`), GMI, Zyphra, OpenRouter and other providers (~5); open weights on Hugging Face (`XiaomiMiMo/MiMo-V2.5-Pro`, MIT).
- **Release / knowledge:** Released 2026-04-22; knowledge cutoff not published.
- **IDs:** `xiaomi/mimo-v2.5-pro`.
- **Context window:** 1M tokens (1,048,576).
- **Modalities:** text in / text out (text-only; note: some secondary listings call it "multimodal" — AA and Model Beats confirm text-only).
- **Pricing (as of 2026-11):** $0.435 in / $0.87 out per 1M (cached $0.20; 99% cache discount per AA; some providers from $0.304); MIT weights free.
- **Architecture:** sparse MoE, 1.02T total / 42B active.

### Raw benchmarks found

Agent / tool use:

- Vendor: top rankings on ClawEval, GDPVal, and SWE-bench Pro; strong general agentic capabilities (OpenRouter)
- Optimized for 1,000+ tool-call trajectories

Reasoning / knowledge:

- AA Intelligence Index: N/A (not measured at research time); sibling MiMo-V2.6-Pro = 30 (AA)

Coding:

- SWE-bench Pro top rankings per vendor; exact values not captured in fetched sources
- Output speed 33 tok/s; TTFA 52.93s (reasoning variant; slow)

Long context:

- 1M verified; no independent long-context retrieval benchmark captured

### Normalized scores (1–100)

- **Tool use: 84/100.** Strong vendor-reported agentic results (ClawEval/GDPVal/SWE-Pro top rankings) and 1,000+ tool-call design; independent replication pending.
- **Reasoning: 76/100.** No measured index; large-MoE reasoning assumed moderate-to-strong.
- **Context window: 92/100.** 1M verified.
- **Multimodal: 15/100.** Text-only in/out (AA + Model Beats) — the sibling MiMo-V2.5 line is multimodal, Pro is not.
- **Coding: 82/100.** Vendor-top SWE-bench Pro; no exact public numbers captured.
- **Cost efficiency: 80/100.** $0.435/$0.87 with MIT weights — good value for a 1T-class open agent model.
- **Overall Score: 70/100.** Mean of the five non-cost dims (84+76+92+15+82)/5 = 69.8 → 70. Best-fit: a strong open-weight agentic coding workhorse for text workloads; text-only modality is the deciding limitation.

---

## Signature

- Provided by: **Mercury 3 (inception/mercury-3)** — 2026-11-06
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Xiaomi MiMo: MiMo-V2.5-Pro page](https://mimo.xiaomi.com/mimo-v2-5-pro)
  - [Artificial Analysis: MiMo-V2.5-Pro release page (modalities/pricing)](https://artificialanalysis.ai/models/releases/mimo-v2-5-pro)
  - [Hugging Face: XiaomiMiMo/MiMo-V2.5-Pro](https://huggingface.co/XiaomiMiMo/MiMo-V2.5-Pro)
  - [OpenRouter: xiaomi/mimo-v2.5-pro](https://openrouter.ai/xiaomi/mimo-v2.5-pro)
  - [llm-stats: MiMo-V2.5-Pro](https://llm-stats.com/models/mimo-v2.5-pro)
  - [Model Beats: MiMo-V2.5-Pro (hardware/text-only notes)](https://modelbeats.com/models/mimo-v2-5-pro)
  - [BuildFastWithAI: Xiaomi MiMo-V2.5-Pro review](https://blog.buildfastwithai.com/xiaomi-mimo-v2-5-pro-review-2026)
- Future sources: add a new file next to this one using the same headings.
