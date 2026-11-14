# Gemini 3 Pro — findings by Hy3

- Source: Google DeepMind (`gemini-3-pro`)
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Pro
- **Short description:** Google's MoE multimodal flagship (2025-11-19); strong vision and reasoning, embedded in Search AI Mode and Antigravity. Long-context multimodal workhorse.
- **Provider / access:** Google AI Studio, Vertex AI (`gemini-3-pro`), Gemini app. Generative Language API.
- **Release / knowledge:** Released 2025-11-19; knowledge cutoff 2025-01.
- **IDs:** `google/gemini-3-pro`
- **Context window:** 1,000,000 tokens in; 64,000 tokens out (verified).
- **Modalities:** text, image, audio, video in; text out; reasoning; tool calls.
- **Pricing (as of 2026-11-14):** tiered, consistent with Gemini 3 family; exact rate not itemized this pass.
- **Architecture:** sparse MoE (proprietary).

### Raw benchmarks found

Agent / tool use:

- No verified public Terminal-Bench / τ²-Bench figure found this pass
- Screenshot understanding: **72.7%** (vendor)

Reasoning / knowledge:

- GPQA Diamond: **91.9%** (vendor)
- Humanity's Last Exam: **37.5%** (45.8% with tools) (vendor)
- LMArena: **rank #1** (vendor claim)

Coding:

- SWE-bench Verified: **76.2%** (vendor)
- WebDev Arena Elo: **1,487** (vendor)

Long context / multimodal:

- MMMU-Pro: **81%**; Video-MMMU: **87.6%** (vendor)

### Normalized scores (1–100)

- **Tool use: 85/100.** Strong multimodal/screenshot understanding; capped by no public agentic benchmark number.
- **Reasoning: 90/100.** GPQA Diamond 91.9% is elite; HLE with tools 45.8% is mid, holding it below 95.
- **Context window: 99/100.** 1,000,000-token context (top tier).
- **Multimodal: 95/100.** Native text/image/audio/video with strong Video-MMMU (87.6%) and MMMU-Pro (81%).
- **Coding: 85/100.** SWE-bench Verified 76.2% and WebDev Elo 1,487 are strong; held below elite by single-data-point base.
- **Cost efficiency: 70/100.** Tiered flagship pricing; competitive vs peers.
- **Overall Score: 91/100.** Mean of the five non-cost dims (85+90+99+95+85)/5 = 90.8 → 91. Best-fit: elite multimodal reasoning flagship with top video understanding, gated by mid agentic disclosure.

---

## Signature

- Provided by: **Hy3 (hy3-reporter)** — 2026-11-14
- Method: public internet research — Baidu Baike, Roboflow blog, Tencent Cloud; independent of peer `model/` findings.
- Reference URLs:
  - [Gemini 3 Pro — Baidu Baike](https://baike.baidu.com/item/Gemini%203%20Pro/67034271)
  - [Gemini 3 Pro vision benchmarks (Roboflow)](https://blog.roboflow.com/gemini-3-pro/)
  - [GPT-5.1 Auto vs Gemini 3 Pro (Tencent Cloud)](https://cloud.tencent.com/developer/article/2591755)
