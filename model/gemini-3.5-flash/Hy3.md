# Gemini 3.5 Flash — findings by Hy3

- Source: Google DeepMind (`gemini-3.5-flash`)
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash
- **Short description:** Google's Flash-series workhorse (2026-05-20, Google I/O); default free model in Gemini app and Search AI Mode, powering the Gemini Spark assistant. Very low latency/high throughput.
- **Provider / access:** Google AI Studio, Vertex AI (`gemini-3.5-flash`), Gemini app, Search AI Mode, Gemini Spark. Generative Language API.
- **Release / knowledge:** Released 2026-05-20.
- **IDs:** `google/gemini-3.5-flash`
- **Context window:** 1,000,000 tokens (Gemini Flash class; figure not separately re-confirmed this pass).
- **Modalities:** text, image, audio, video in; text out; reasoning; tool calls.
- **Pricing (as of 2026-11-14):** Flash-tier (low cost); exact rate not itemized this pass.
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **76.2%** (vs Gemini 3.1 Pro 70.3%) (Digitaling)
- GDPval-AA: referenced as improved (no exact number)

Reasoning / knowledge:

- No verified public GPQA/HLE figure found this pass

Coding:

- No verified public SWE-bench / LiveCodeBench figure found this pass

Long context:

- 1,000,000-token window (Gemini Flash class); no public MRCR/RULER score found this pass.

### Normalized scores (1–100)

- **Tool use: 85/100.** Terminal-Bench 2.1 76.2% is strong for a Flash model; capped by no further agentic numbers.
- **Reasoning: 84/100.** Reasoning-tier Flash; no public GPQA/HLE figure found.
- **Context window: 99/100.** 1,000,000-token context (top tier).
- **Multimodal: 90/100.** Broad native modality (text/image/audio/video).
- **Coding: 85/100.** Coding-focused Flash; Terminal-Bench 76.2% strong; no public SWE-bench number found.
- **Cost efficiency: 88/100.** Flash workhorse tier — strong capability per dollar.
- **Overall Score: 89/100.** Mean of the five non-cost dims (85+84+99+90+85)/5 = 88.6 → 89. Best-fit: low-latency multimodal Flash workhorse with top agentic-terminal score for its class, gated by mid reasoning disclosure.

---

## Signature

- Provided by: **Hy3 (hy3-reporter)** — 2026-11-14
- Method: public internet research — Baidu Baike, Tencent Cloud, Zhihu, Digitaling; independent of peer `model/` findings.
- Reference URLs:
  - [Gemini 3.5 — Baidu Baike](https://baike.baidu.com/item/Gemini%203.5/67833227)
  - [Google I/O 2026 Gemini 3.5 (Tencent Cloud)](https://cloud.tencent.com/developer/article/2671830)
  - [Gemini 3.5 Flash latency (Zhihu)](https://zhuanlan.zhihu.com/p/2042642975675634897)
