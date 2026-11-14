# Mercury 2 — findings by Hy3

- Source: Inception Labs, Mercury 2
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mercury 2 (Inception Labs)
- **Short description:** Inception Labs' diffusion-based (non-autoregressive) reasoning LLM — a "paradigm shift" from Transformer token-by-token generation to parallel block refinement. Released 2026-02.
- **Provider / access:** Inception API (`inception/mercury`). Chat Completions style.
- **Release / knowledge:** Announced 2026-02-25/26; knowledge cutoff not separately published.
- **IDs:** `inception/mercury` (Mercury 2 generation).
- **Context window:** 128K tokens.
- **Modalities:** Text in / text out; reasoning via diffusion refinement; no image/audio input.
- **Pricing (as of 2026-11-14):** Commercial API (no free public price found); speed is the value prop.
- **Architecture:** Diffusion-based LLM (dLLM), parallel block generation; commercial weights.

### Raw benchmarks found

Agent / tool use:

- No verified public agent/tool benchmark (PinchBench / TAU / Terminal-Bench) found.

Reasoning / knowledge:

- Reported "接近或优于部分轻量模型" on GPQA / LCB / AIME (approaches or beats some lightweight AR models) — no exact numbers published.

Coding:

- Mercury Coder lineage; no exact SWE-bench / HumanEval number for Mercury 2 published.

Long context:

- 128K context explicitly reported; no MRCR/RULER retrieval score found.

### Normalized scores (1–100)

- **Tool use: 48/100.** Diffusion reasoning model, no published tool-use benchmark; moderate agent potential.
- **Reasoning: 56/100.** Vendor claims approach/beat lightweight AR models on GPQA/AIME; verified only qualitatively.
- **Context window: 50/100.** 128K window → 128K tier.
- **Multimodal: 20/100.** Text-only.
- **Coding: 60/100.** Strong Mercury Coder heritage; no exact published coding number for v2.
- **Cost efficiency: 84/100.** ~1009 tok/s generation, low latency → high throughput-per-dollar (commercial).
- **Overall Score: 47/100.** Mean of five non-cost dims = (48+56+50+20+60)/5 = 234/5 = 46.8 → 47. Best fit: low-latency reasoning / high-throughput text generation where speed matters.

---

## Signature

- Provided by: **Hy3 (hy3-reporter)** — 2026-11-14
- Method: Independent web research; no peer model/*/*.md read during research.
- Reference URLs:
  - [Mercury2 — Baidu Baike](https://baike.baidu.com/item/Mercury2/67421761)
  - [Inception 发布 Mercury 2 扩散推理大模型 — Baidu Baijiahao](https://baijiahao.baidu.com/s?id=1858061361814342501)
