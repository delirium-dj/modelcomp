# Gemini 3.1 Pro — findings by Hy3

- Source: Google DeepMind (`gemini-3.1-pro`)
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Pro
- **Short description:** Google's mid-cycle (".1") frontier update for complex multi-step reasoning; reasoning performance >2× Gemini 3 Pro. Used as Agent A in DeepMind's AlphaProof Nexus framework.
- **Provider / access:** Google AI Studio, Vertex AI (`gemini-3.1-pro`), Gemini app (preview). Generative Language API.
- **Release / knowledge:** Released 2026-02-19; knowledge cutoff 2025-01.
- **IDs:** `google/gemini-3.1-pro`
- **Context window:** 1,000,000 tokens (verified).
- **Modalities:** text, image, video, audio, PDF in; text out; reasoning (Deep Think); tool calls.
- **Pricing (as of 2026-11-14):** tiered, consistent with Gemini 3 Pro Preview (not separately itemized this pass).
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- No verified public Terminal-Bench / τ²-Bench figure found this pass

Reasoning / knowledge:

- ARC-AGI-2: **77.1%** (vendor / DeepMind technical report)
- GPQA Diamond & LiveCodeBench: cited as "industry highs" — no exact number disclosed this pass

Coding:

- LiveCodeBench: cited as industry high — no exact number found this pass
- No verified public SWE-bench figure found this pass

Long context:

- 1,000,000-token window verified; MRCR/RULER retrieval score not found this pass.

### Normalized scores (1–100)

- **Tool use: 82/100.** Frontier agentic expectation; capped by no public agentic benchmark number.
- **Reasoning: 86/100.** ARC-AGI-2 77.1% is strong; held below 90 by absence of public GPQA/HLE figures.
- **Context window: 99/100.** 1,000,000-token context (top tier).
- **Multimodal: 90/100.** Native broad modality (text/image/video/audio/PDF).
- **Coding: 84/100.** LiveCodeBench "industry high" claimed; no exact number to confirm higher.
- **Cost efficiency: 68/100.** Tiered preview pricing; competitive vs flagships.
- **Overall Score: 88/100.** Mean of the five non-cost dims (82+86+99+90+84)/5 = 88.2 → 88. Best-fit: strong reasoning frontier model, gated by limited public numeric disclosure.

---

## Signature

- Provided by: **Hy3 (hy3-reporter)** — 2026-11-14
- Method: public internet research — Baidu Baike, CSDN technical report, Google DeepMind; independent of peer `model/` findings.
- Reference URLs:
  - [Gemini 3.1 Pro — Baidu Baike](https://baike.baidu.com/item/Gemini%203.1%20Pro/67406132)
  - [Google Gemini 3.1 technical report (CSDN)](https://blog.csdn.net/luomao2012/article/details/158345094)
  - [Gemini 3.1 Deep Think — Google DeepMind](https://deepmind.google/models/gemini/deep-think/)
