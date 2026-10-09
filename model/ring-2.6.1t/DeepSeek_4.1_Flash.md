# Ring 2.6 1T — findings by DeepSeek 4.1 Flash

- Source: InclusionAI (Ant Group) / Ring-2.6-1T (`inclusionAI/Ring-2.6-1T`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ring 2.6 1T
- **Short description:** Ant Group / InclusionAI's open-weight trillion-parameter reasoning MoE (Ring series, released 2026-05/06), a sibling of the non-reasoning Ling-2.6-1T. Uses `high`/`xhigh` reasoning effort and trillion-scale async RL (IcePop); MIT open weights.
- **Provider / access:** Open weights self-host (`inclusionAI/Ring-2.6-1T`); OpenAI-compatible providers (~$0.30/$2.50 blended). MIT license.
- **Release / knowledge:** 2026-05-08 (AA) / tech report arXiv:2606.15079 (2026-06-13); knowledge cutoff not published.
- **IDs:** `inclusionAI/Ring-2.6-1T`.
- **Context window:** 128K native → 256K with YaRN (HF card; AA 262K). Max output not separately published.
- **Modalities:** text in; text out. Reasoning (`high`/`xhigh`), agentic tool use, multi-step execution, coding. Not multimodal.
- **Pricing (as of 2026-10-09):** open weights (MIT, self-host); median provider **$0.30 in / $2.50 out** per 1M.
- **Architecture:** MoE, **1T total / 63B active**; "bailing_hybrid" = MLA + linear-attention hybrid (Ling-family design); BF16/FP8; async RL + IcePop.

### Raw benchmarks found

> Vendor (InclusionAI) claims near-frontier scores; the only independent result is the Artificial Analysis Intelligence Index, which shows a large gap.

Reasoning / knowledge:

- GPQA-Diamond **88.27** (self); AIME 2026 **95.83** (self); ARC-AGI-V2 66.18 (self, xhigh)
- Artificial Analysis Intelligence Index: **17** (independent; #64/117, below median 18)

Coding / agent:

- SWE-bench Verified **74** (self); ClawEval 63.82; PinchBench 87.60; Tau2-Bench (Telecom) 95.32 (self)
- AA output speed 115.6 tok/s, TTFT 3.79 s, 120M index output tokens (AA)

Long context:

- 128K native / 256K YaRN; **no MRCR/RULER published — no verified public score found**.

### Normalized scores (1–100)

- **Tool use: 76/100.** Tau2 Telecom 95.3, PinchBench 87.6 and ClawEval 63.8 are strong (self-reported); the low independent AA Index 17 tempers confidence.
- **Reasoning: 76/100.** GPQA 88.3% and AIME 95.8% are high (self-reported); ARC-AGI-2 66.2% and the independent AA Index 17 cap it.
- **Context window: 72/100.** 128K native / 256K YaRN (200K–500K band, at the low edge); no retrieval benchmark.
- **Multimodal: 15/100.** Text-only.
- **Coding: 74/100.** SWE-bench Verified 74% (self-reported) is strong; no independent coding re-run found.
- **Cost efficiency: 93/100.** MIT open weights with ~$0.30/$2.50 provider pricing; self-host optional.
- **Overall Score: 63/100.** (76 + 76 + 72 + 15 + 74) / 5 = 62.6 → 63. Best fit: open-weight reasoning/agent work where self-hosting or low provider cost matters; verify self-reported scores.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek/deepseek-v4.1-flash)** — 2026-10-09
- Method: public internet research, cross-checked across the Hugging Face model card, the Ling/Ring 2.6 technical report (arXiv:2606.15079) and the Artificial Analysis model page. The large self-reported-vs-independent gap is explicitly surfaced. Normalized 1–100 interpretations, not vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
