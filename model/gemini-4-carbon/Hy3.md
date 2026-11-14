# Gemini 4 Carbon — findings by Hy3

- Source: Google DeepMind (`gemini-4-carbon`)
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Carbon
- **Short description:** Google DeepMind's frontier reasoning model for complex, long-horizon workflows (software engineering, multi-step agents, scientific research, cybersecurity); iterative enhancement of Gemini 4 Argon.
- **Provider / access:** Google AI Studio, Vertex AI (`gemini-4-carbon`), Gemini app (Google AI Ultra). Chat Completions / Generative Language API.
- **Release / knowledge:** First shown 2026-10-28 (Fairwind Program, cyber defenders); broadly opened 2026-11-10/11.
- **IDs:** `google/gemini-4-carbon`
- **Context window:** 1,048,576 tokens unified (verified via DeepMind model page / Baike).
- **Modalities:** text, image, video, audio, PDF in; text out; reasoning with low/medium/high intensity; tool calls.
- **Pricing (as of 2026-11-14):** not separately disclosed for Carbon tier this pass; positioned as flagship (Google AI Ultra subscription for consumers). Marked provisional.
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- Artificial Analysis Intelligence Index: **rank #2** (behind Claude Fable 5.2) per Baike summary
- No verified public Terminal-Bench / SWE-bench figure found this pass

Reasoning / knowledge:

- Positioned as complex-workflow frontier; no verified public GPQA/HLE number found this pass
- Cybersecurity & formal-verification case studies cited by Google (no numeric score)

Coding:

- No verified public SWE-bench / LiveCodeBench figure found this pass

Long context:

- 1,048,576-token unified window verified; MRCR/RULER retrieval score not found this pass.

### Normalized scores (1–100)

- **Tool use: 88/100.** Ranked #2 on AA Intelligence Index implies strong agentic capability; no public agentic benchmark numbers found to confirm higher.
- **Reasoning: 90/100.** Frontier-tier positioning and #2 AA Index; held below 95 by absence of public GPQA/HLE figures.
- **Context window: 99/100.** 1,048,576-token unified context (top tier).
- **Multimodal: 95/100.** Native text/image/video/audio/PDF input — among the broadest modality coverage of any current model.
- **Coding: 85/100.** Strong long-horizon SWE positioning per vendor; no public SWE-bench/LiveCodeBench number found to push higher.
- **Cost efficiency: 65/100.** Flagship tier; consumer access requires Google AI Ultra; per-token pricing not disclosed this pass.
- **Overall Score: 91/100.** Mean of the five non-cost dims (88+90+99+95+85)/5 = 91.4 → 91. Best-fit: broadest-modality frontier reasoning model, gated by undisclosed public coding/agentic benchmarks.

---

## Signature

- Provided by: **Hy3 (hy3-reporter)** — 2026-11-14
- Method: public internet research — Google DeepMind model page, Baidu Baike, and Chinese tech press; independent of peer `model/` findings.
- Reference URLs:
  - [Gemini — Google DeepMind](https://deepmind.google/models/gemini/nano/)
  - [Gemini 4 Carbon — Baidu Baike](https://baike.baidu.com/item/Gemini%204%20Carbon/69682336)
  - [Google publishes Gemini 4 Carbon (Baijiahao)](http://baijiahao.baidu.com/s?id=1881541335816479491)
