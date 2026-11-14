# MiMo-VII.6-Flash — findings by Hy3

- Source: Xiaomi (`mimo-v2.6-flash`)
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo-V2.6-Flash
- **Short description:** Xiaomi's open-source efficient-inference model (2026-09-22), paired with MiMo-VII.6-Pro. Native omnimodal (text/image/video/audio); tuned for high-frequency professional-office and scaled inference. Training cost ~$850K.
- **Provider / access:** Xiaomi API (`mimo-v2.6-flash`), open MIT-family weights. Chat Completions API; Batch API supported.
- **Release / knowledge:** Released 2026-09-22.
- **IDs:** `xiaomi/mimo-v2.6-flash`
- **Context window:** 1,000,000 tokens in; 128,000 out (MiMo-VII.6 family).
- **Modalities:** text, image, video, audio in; text out; reasoning; tool calls.
- **Pricing (as of 2026-11-14):** ¥1 in / ¥2 out per 1M tokens, 99% cache discount (very low); open weights.
- **Architecture:** sparse MoE, open weights (MiMo-VII.6 family).

### Raw benchmarks found

Agent / tool use:

- No verified public Terminal-Bench figure found this pass

Reasoning / knowledge:

- No verified public GPQA/HLE figure found this pass

Coding:

- DeepSWE v1.1: **65.68** (avg@3 up to **67.86**) (Baike) — up from 48.8 on prior

Long context:

- 1,000,000-token window verified; no public MRCR/RULER score found this pass.

### Normalized scores (1–100)

- **Tool use: 84/100.** Agentic/efficient-inference positioning; capped by no public agentic benchmark number.
- **Reasoning: 85/100.** Reasoning-focused Flash; no public GPQA/HLE figure found.
- **Context window: 99/100.** 1,000,000-token context (top tier).
- **Multimodal: 90/100.** Native omnimodal (text/image/video/audio).
- **Coding: 84/100.** DeepSWE v1.1 67.86 is solid; held below elite by single-data-point base.
- **Cost efficiency: 95/100.** ¥1/¥2 per 1M with 99% cache discount + open weights — exceptional value.
- **Overall Score: 88/100.** Mean of the five non-cost dims (84+85+99+90+84)/5 = 88.4 → 88. Best-fit: ultra-low-cost open omnimodal Flash for scaled inference, gated by mid coding/agentic disclosure.

---

## Signature

- Provided by: **Hy3 (hy3-reporter)** — 2026-11-14
- Method: public internet research — Baidu Baike, mimo.xiaomi.com, MiMo docs, Baijiahao; independent of peer `model/` findings.
- Reference URLs:
  - [Xiaomi MiMo-VII.6-Flash — Baidu Baike](https://baike.baidu.com/item/Xiaomi%20MiMo-V2.6-Flash/69122561)
  - [MiMo home (Xiaomi)](https://mimo.xiaomi.com/zh)
  - [MiMo-VII.6 docs](https://mimo.mi.com/docs/zh-CN/quick-start/summary/welcome)
  - [MiMo-VII.6 release & open-source (Baijiahao)](https://baijiahao.baidu.com/s?id=1876985669837948340)
