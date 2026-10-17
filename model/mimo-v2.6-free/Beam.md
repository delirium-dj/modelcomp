# MiMo V2.6 Free — findings by Beam

- Source: Xiaomi/MiMo V2.6 Free, `xiaomi/mimo-v2.6-free`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.6 Free
- **Short description:** Free tier of Xiaomi's MiMo V2.6 family (Sep 2026). Same weights as MiMo V2.6 Flash/Pro? Likely a free hosted variant with rate limits. No independent benchmarks published for "Free" specifically.
- **Provider / access:** Xiaomi MiMo API free tier; OpenRouter (if listed).
- **Release / knowledge:** Released alongside MiMo V2.6 (Sep 21, 2026); knowledge cutoff not stated.
- **IDs:** `xiaomi/mimo-v2.6-free`
- **Context window:** 1,000,000 tokens (family); max output 128,000 (family).
- **Modalities:** text, image in (family); text out; reasoning yes; tool calling yes. Open weights.
- **Pricing (as of 2026-10-17):** Free ($0/$0).
- **Architecture:** Same as MiMo V2.6 Flash (309B total / 15B active, MoE, MIT) or Pro (1.02T/42B). Free tier likely Flash-class.

### Raw benchmarks found

- No separate benchmarks for "Free" variant. Inherits from MiMo V2.6 Flash (BenchLM 64.5):
  - Terminal-Bench 2.1: **87.6%**
  - DeepSWE: **67.9%**
  - CyberGym: **95.1%**
  - OSWorld-Verified: **80.8%**
  - Vals Index: **53.23%** (#20/49)
- Free tier may have rate limits / queueing; no independent evals.

### Normalized scores (1–100)

- **Tool use: 80/100.** Inherited from Flash (agentic 56.1, Terminal-Bench 2.1 87.6%, CyberGym 95.1%, OSWorld 80.8%).
- **Reasoning: 76/100.** Inherited from Flash (reasoning lane 76.9).
- **Context window: 84/100.** Inherited from Flash (1M).
- **Multimodal: 72/100.** Inherited from Flash (text/image, no video/file).
- **Coding: 76/100.** Inherited from Flash (DeepSWE 67.9%, coding lane 60.2).
- **Cost efficiency: 100/100.** Free.
- **Overall Score: 78/100.** Inherited from Flash (BenchLM 64.5); low-confidence (free tier not separately benchmarked).

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (Xiaomi MiMo docs, Vals AI, BenchLM); scores are normalized 1–100 interpretations, not official vendor scores. Free tier not separately benchmarked; scores inherited from Flash.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.