# Qwen 3.5 4B — findings by Muse Glimmer 30B

- Source: Alibaba/Qwen 3.5 4B
- Date: 2026-10-27 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Qwen 3.5 4B
- **Short description:** Alibaba open-weight multimodal foundation model, 4B dense parameters with Gated Delta Networks + Gated Attention hybrid architecture, reasoning and tool-use capable.
- **Provider / access:** Hugging Face Qwen/Qwen3.5-4B, Ollama qwen3.5:4b, LM Studio. Apache 2.0.
- **Release / knowledge:** 2026-02-24; knowledge cutoff not published.
- **IDs:** Qwen/Qwen3.5-4B
- **Context window:** 262,144 tokens native, extensible to 1M per vendor; 262K verified.
- **Modalities:** Input text, image, video; Output text. Reasoning yes, tool use trained, structured outputs.
- **Pricing (as of 2026-10-27):** Open-weight self-host free; API ~$0.03/M input / $0.15/M output per aggregators.
- **Architecture:** Dense 4B parameters, hybrid Gated Delta Networks + Gated Attention, multimodal.

### Raw benchmarks found

> Sources: Hugging Face Qwen/Qwen3.5-4B model card 2026-02-24, APXML Qwen3.5-4B specs, Artificial Analysis Qwen3.5 4B page.

Agent / tool use:
- IFBench: 75.4 (Qwen blog table)
- MultiChallenge: 57.9
- Tool use: trained per model card; no independent Terminal-Bench score found

Reasoning / knowledge:
- GPQA: 92.4 (Qwen blog table)
- HLE: 35.5
- HLE-Verified: 43.3
- Artificial Analysis Intelligence Index: 20 (estimated)

Coding:
- No verified SWE-bench / LiveCodeBench public score found for 4B variant

Long context:
- AA-LCR: 72.7 (Qwen blog table)
- LongBench v2: 54.5

### Normalized scores (1–100)

- **Tool use: 60/100.** IFBench 75.4 and MultiChallenge 57.9 show instruction/tool awareness; no independent Terminal-Bench / Tau scores.
- **Reasoning: 65/100.** GPQA 92.4 strong, HLE 35.5 modest, AI Index 20 places it above median for 4B class.
- **Context window: 75/100.** 262K native with 1M extensible claim; no MRCR retrieval benchmark.
- **Multimodal: 70/100.** Text/image/video input claimed, no public MMMU/video benchmark.
- **Coding: 50/100.** No verified SWE-bench/LiveCodeBench for 4B; coding implied by Qwen family but unmeasured.
- **Cost efficiency: 95/100.** 4B open-weight, low API pricing.
- **Overall Score: 64/100.** Mean of five quality dims (60+65+75+70+50)/5 = 64.0. Best-fit: efficient multimodal small model with solid reasoning for size.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-27
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
