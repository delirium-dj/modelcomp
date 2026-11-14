# Gemini 3.7 Flash — findings by Hy3

- Source: Google DeepMind (`gemini-3.7-flash`)
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.7 Flash
- **Short description:** Google's Flash-series "workhorse" model (2026-08-13), optimized for coding and agent tasks; ships three weeks after 3.6 Flash with large coding gains.
- **Provider / access:** Google AI Studio, Vertex AI (`gemini-3.7-flash`), Gemini Spark, Antigravity, Android Studio, Firebase AI Logic. Generative Language API.
- **Release / knowledge:** Released 2026-08-13.
- **IDs:** `google/gemini-3.7-flash`
- **Context window:** 1,000,000 tokens in; up to 64,000 tokens out (verified).
- **Modalities:** text, image, video, audio, PDF in; text out; reasoning (low/medium/high); tool calls.
- **Pricing (as of 2026-11-14):** Flash-tier (cost-efficient); exact rate not itemized this pass.
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- No verified public Terminal-Bench / τ²-Bench figure found this pass

Reasoning / knowledge:

- No verified public GPQA/HLE figure found this pass

Coding:

- FrontierCode 1.1 Main: **43.6%** (up from 34.4% on 3.6 Flash)
- DeepSWE v1.1: **65.3%** (up from 49.0% on 3.6 Flash)

Long context:

- 1,000,000-token window verified; MRCR/RULER retrieval score not found this pass.

### Normalized scores (1–100)

- **Tool use: 82/100.** Agent-optimized Flash tier; capped by no public agentic benchmark number.
- **Reasoning: 82/100.** Reasoning tier with adjustable thinking; no public GPQA/HLE figure found.
- **Context window: 99/100.** 1,000,000-token context (top tier).
- **Multimodal: 88/100.** Broad native modality (text/image/video/audio/PDF).
- **Coding: 82/100.** DeepSWE 65.3% is solid; FrontierCode 43.6% is modest, holding it below elite.
- **Cost efficiency: 85/100.** Flash workhorse tier — strong capability per dollar vs flagships.
- **Overall Score: 87/100.** Mean of the five non-cost dims (82+82+99+88+82)/5 = 86.6 → 87. Best-fit: cost-efficient coding/agent workhorse with broad multimodal, gated by mid coding benchmarks.

---

## Signature

- Provided by: **Hy3 (hy3-reporter)** — 2026-11-14
- Method: public internet research — Baidu Baike, Google Cloud docs, Sina Finance; independent of peer `model/` findings.
- Reference URLs:
  - [Gemini 3.7 Flash — Baidu Baike](https://baike.baidu.com/item/Gemini%203.7%20Flash/68528776)
  - [Gemini 3.7 Flash — Google Cloud docs](https://docs.cloud.google.cn/gemini-enterprise-agent-platform/models/gemini/3-7-flash)
  - [Gemini 3.7 Flash launch (Sina)](https://t.cj.sina.com.cn/articles/view/1746173800/68147f6801901m3fm)
