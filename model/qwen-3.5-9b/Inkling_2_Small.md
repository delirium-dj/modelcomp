# Qwen3.5-9B — findings by Fledge Alpha

- Source: Alibaba (`qwen-3.5-9b`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5-9B
- **Short description:** Compact multimodal member of the Qwen3.5 family with a unified vision-language foundation, released March 2026.
- **Provider / access:** Together AI, DeepInfra, OpenRouter (`qwen/qwen3.5-9b`), Alibaba Model Studio; open weights, Apache 2.0.
- **Release / knowledge:** March 2, 2026; knowledge cutoff not published.
- **IDs:** `Qwen/Qwen3.5-9B`; no Zen Free ID verified.
- **Context window:** 262,144 tokens (extensible toward 1M via RoPE/YaRN scaling); 262K max output.
- **Modalities:** text, image, video in; text out; thinking mode default; tool calling; JSON mode; 201 languages.
- **Pricing (as of 2026-10-05):** ~$0.10 in / $0.15 out per 1M (DeepInfra/Opper floor; Together $0.17/$0.25).
- **Architecture:** 9B dense (Hybrid: Gated DeltaNet + Gated Attention, 3:1 linear-to-full attention); early-fusion multimodal tokens.

### Raw benchmarks found

Agent / tool use:

- BFCL-V4: **66.1%** (Together AI listing)
- TAU2-Bench: **79.1%** (Together AI listing)
- AA Agentic Index: **37.4** (BenchGecko)

Reasoning / knowledge:

- GPQA Diamond: **81.7%** (Opper)
- MMLU-Pro: **82.5** (Opper)
- MMMLU: **81.2%** (Together AI)
- AA Intelligence Index: **11.2** (Opper)
- MathVision: **78.9%** (Together AI)

Coding:

- LiveCodeBench v6: **65.6%** (Together AI)
- AA Coding Index: **28.7** (BenchGecko/Opper)
- LongBench v2: **55.2%**; AA-LCR: **63.0%** (Together AI)

Multimodal:

- OCRBench: **89.2%**; Video-MME: **84.5%**; MMMU-Pro: **70.1%** (Together AI); MMBench **90.1** (Opper)

### Normalized scores (1–100)

> OVERALL SCORE FORMULA (v4): Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`; Cost efficiency scored independently.

- **Tool use: 74/100.** BFCL 66.1 and TAU2 79.1 are credible for a 9B; capped by verboseness at inference.
- **Reasoning: 78/100.** GPQA 81.7 and MMLU-Pro 82.5 for its size; AA index 11.2 modest.
- **Context window: 90/100.** 262K native with RoPE path to ~1M.
- **Multimodal: 84/100.** Video-MME 84.5, OCRBench 89.2 — real video/image coverage.
- **Coding: 64/100.** LCB 65.6 is respectable but AA Coding 28.7 is below mid-tier.
- **Cost efficiency: 94/100.** $0.10/$0.15 per 1M is at the open-model floor.
- **Overall Score: 78/100.** Mean of five non-cost dims (74+78+90+84+64)/5 = 78.0 → 78; best fit: on-device-class multimodal agent with 262K context.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-05
- Method: public internet research (Together AI model page, Opper, BenchGecko, AA provider page, DeepInfra blog); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
