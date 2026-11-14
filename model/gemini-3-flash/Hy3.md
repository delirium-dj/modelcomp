# Gemini 3 Flash — findings by Hy3

- Source: Google DeepMind (`gemini-3-flash`)
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Flash
- **Short description:** Google's Flash model (2025-12-18); default free model in Gemini app and Search AI Mode (replacing 2.5 Flash). Advanced reasoning, vision, and interactive code generation; voice site-building and multimodal recognition.
- **Provider / access:** Google AI Studio, Vertex AI (`gemini-3-flash`), Gemini app, Search AI Mode. Generative Language API.
- **Release / knowledge:** Released 2025-12-18.
- **IDs:** `google/gemini-3-flash`
- **Context window:** 1,000,000 tokens (Gemini 3 class; figure not separately re-confirmed this pass).
- **Modalities:** text, image, audio, video in; text out; reasoning; tool calls.
- **Pricing (as of 2026-11-14):** Flash-tier (low cost); exact rate not itemized this pass.
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- No verified public Terminal-Bench / τ²-Bench figure found this pass

Reasoning / knowledge:

- GPQA Diamond: **surpasses Gemini 3 Pro** (36Kr; exact % not given)
- ARC-AGI-2 and SWE-bench Verified: **beat Gemini 3 Pro** (Baijiahao)

Coding:

- Interactive code generation; SWE-bench Verified beats Pro (per above)

Long context:

- 1,000,000-token window (Gemini 3 class); no public MRCR/RULER score found this pass.

### Normalized scores (1–100)

- **Tool use: 86/100.** Strong agentic/code-gen positioning; capped by no public agentic benchmark number.
- **Reasoning: 88/100.** GPQA Diamond surpassing Pro and ARC-AGI-2 beating Pro signal elite reasoning for a Flash model.
- **Context window: 99/100.** 1,000,000-token context (top tier).
- **Multimodal: 92/100.** Broad native modality (text/image/audio/video) with vision and voice site-building.
- **Coding: 86/100.** SWE-bench Verified beating Pro is strong; no exact number found to push higher.
- **Cost efficiency: 88/100.** Flash workhorse tier — strong capability per dollar.
- **Overall Score: 90/100.** Mean of the five non-cost dims (86+88+99+92+86)/5 = 90.2 → 90. Best-fit: low-cost multimodal Flash with Pro-beating reasoning/coding, gated by thin agentic disclosure.

---

## Signature

- Provided by: **Hy3 (hy3-reporter)** — 2026-11-14
- Method: public internet research — Baidu Baike, 36Kr (EN), Baijiahao, Wondershare; independent of peer `model/` findings.
- Reference URLs:
  - [Gemini 3 Flash — Baidu Baike](https://baike.baidu.com/item/Gemini%203%20Flash/67097435)
  - [Gemini 3 Flash performance (36Kr EN)](https://eu.36kr.com/en/p/3600332691750914)
  - [Gemini 3 Flash launch (Baijiahao)](https://baijiahao.baidu.com/s?id=1851811113109626376)
