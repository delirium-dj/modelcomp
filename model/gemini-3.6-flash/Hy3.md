# Gemini 3.6 Flash — findings by Hy3

- Source: Google DeepMind (`gemini-3.6-flash`)
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.6 Flash
- **Short description:** Google's lightweight Flash update (2026-07-21); coding, knowledge, and multimodal gains with built-in computer use. Knowledge cutoff 2026-03. Adopted by Figma, Harvey, JetBrains.
- **Provider / access:** Google AI Studio, Vertex AI (`gemini-3.6-flash`), Android Studio, Gemini app. Generative Language API.
- **Release / knowledge:** Released 2026-07-21; knowledge cutoff 2026-03.
- **IDs:** `google/gemini-3.6-flash`
- **Context window:** 1,000,000 tokens (Gemini Flash class; figure not separately re-confirmed this pass).
- **Modalities:** text, image, audio, video in; text out; reasoning; tool calls (computer use built-in).
- **Pricing (as of 2026-11-14):** Flash-tier; early reports note cost higher than GPT-5.6 Sol medium with lower intelligence — mixed value.
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- Computer use provided as a built-in tool (no public benchmark number found this pass)

Reasoning / knowledge:

- No verified public GPQA/HLE figure found this pass
- Third-party composite intelligence: **no significant gain** vs 3.5 Flash (early tests)

Coding:

- Coding/knowledge improvements claimed; early tests note **weakness in front-end code generation and spatial reasoning** (Baijiahao)

Long context:

- 1,000,000-token window (Gemini Flash class); no public MRCR/RULER score found this pass.

### Normalized scores (1–100)

- **Tool use: 84/100.** Built-in computer use is a plus; no public agentic benchmark number found.
- **Reasoning: 83/100.** Composite intelligence reportedly flat vs 3.5 Flash; no public GPQA/HLE figure.
- **Context window: 99/100.** 1,000,000-token context (top tier).
- **Multimodal: 90/100.** Broad native modality (text/image/audio/video).
- **Coding: 83/100.** Coding gains claimed but early tests flag front-end/spatial weakness.
- **Cost efficiency: 78/100.** Flash tier but reported pricier than GPT-5.6 Sol medium for lower intelligence — mixed.
- **Overall Score: 88/100.** Mean of the five non-cost dims (84+83+99+90+83)/5 = 87.8 → 88. Best-fit: multimodal Flash with built-in computer use, gated by flat reasoning gains and mixed coding/value reports.

---

## Signature

- Provided by: **Hy3 (hy3-reporter)** — 2026-11-14
- Method: public internet research — Baidu Baike, Tencent Cloud, Baijiahao; independent of peer `model/` findings.
- Reference URLs:
  - [Gemini 3.6 Flash — Baidu Baike](https://baike.baidu.com/item/Gemini3.6Flash/68332883)
  - [Gemini 3.6 Flash & 3.5 Flash-Lite (Tencent Cloud)](https://cloud.tencent.com/developer/article/2713989)
  - [Gemini 3.6 Flash reaction (Baijiahao)](https://baijiahao.baidu.com/s?id=1871377435258167014)
