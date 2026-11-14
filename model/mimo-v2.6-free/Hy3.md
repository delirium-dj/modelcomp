# MiMo-VII.6-Free — findings by Hy3

- Source: Xiaomi (`mimo-v2.6-free`)
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo-VII.6-Free
- **Short description:** Xiaomi's free/low-cost tier of the MiMo-VII.6 family (2026-09-22 release wave). Shares the family's native omnimodal capability (text/image/video/audio) and MIT open-weight lineage; positioned for zero/low-cost scaled access.
- **Provider / access:** Xiaomi API (`mimo-v2.6-free`), open MIT-family weights. Chat Completions API.
- **Release / knowledge:** Released 2026-09-22 (MiMo-VII.6 family).
- **IDs:** `xiaomi/mimo-v2.6-free`
- **Context window:** 1,000,000 tokens in; 128,000 out (MiMo-VII.6 family; free tier may cap lower — undisclosed).
- **Modalities:** text, image, video, audio in; text out; reasoning; tool calls.
- **Pricing (as of 2026-11-14):** free / low-cost tier (family API ¥1/¥2 per 1M for Flash; free tier details undisclosed this pass) — strong value.
- **Architecture:** sparse MoE, MIT open weights (MiMo-VII.6 family).

### Raw benchmarks found

Agent / tool use:

- No verified public Terminal-Bench figure found specifically for the Free tier this pass

Reasoning / knowledge:

- No verified public GPQA/HLE figure found this pass

Coding:

- Family reference (Flash): DeepSWE v1.1 **65.68** (avg@3 up to 67.86) — Free tier expected lower

Long context:

- 1,000,000-token window (family); no public MRCR/RULER score found this pass.

### Normalized scores (1–100)

- **Tool use: 82/100.** Family agentic positioning; Free tier expected weaker than Pro/Flash — capped by no Free-specific number.
- **Reasoning: 83/100.** Family reasoning tier; Free variant expected below Flash/Pro.
- **Context window: 99/100.** 1,000,000-token context (top tier, if unthrottled).
- **Multimodal: 90/100.** Native omnimodal (text/image/video/audio) per family.
- **Coding: 83/100.** Below Flash/Pro (DeepSWE 65.68 reference); Free tier expected lower.
- **Cost efficiency: 98/100.** Free / low-cost tier — best-in-class value.
- **Overall Score: 87/100.** Mean of the five non-cost dims (82+83+99+90+83)/5 = 87.4 → 87. Best-fit: zero/low-cost omnimodal access to the MiMo-VII.6 family, gated by weaker Free-tier capability vs Pro/Flash and undisclosed specifics.

---

## Signature

- Provided by: **Hy3 (hy3-reporter)** — 2026-11-14
- Method: public internet research — Baidu Baike (MiMo-VII.6), MiMo docs, CSDN; independent of peer `model/` findings. Free-tier specifics not separately disclosed; family figures used as anchor.
- Reference URLs:
  - [MiMo-VII.6 — Baidu Baike](https://baike.baidu.com/item/MiMo-V2.6/69089987)
  - [MiMo home (Xiaomi)](https://mimo.xiaomi.com/)
  - [MiMo-VII.6 open-source (CSDN)](https://blog.csdn.net/weixin_42584507/article/details/170426909)
