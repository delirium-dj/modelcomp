# DeepSeek-V4.1 Flash — findings by Hy3

- Source: DeepSeek (`deepseek-v4.1-flash`)
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek-V4.1 Flash
- **Short description:** DeepSeek's smallest model in its new architecture family (2026-09-10); asymmetric Causal-Encoder-Decoder MoE with native multimodal vision. Higher capability ceiling, faster, cheaper; routes V4 Pro traffic after Pro retirement.
- **Provider / access:** DeepSeek API, National Supercomputing Internet (`deepseek-v4.1-flash`). Chat Completions API; weights on Supercomputing Internet.
- **Release / knowledge:** Released 2026-09-10 (updated to V4.1-Flash-1017 on 2026-10-17).
- **IDs:** `deepseek/deepseek-v4.1-flash`
- **Context window:** 1,000,000 tokens (DeepSeek V4 series; verified via V4 preview).
- **Modalities:** text in/out; image in (native multimodal vision); reasoning; tool calls.
- **Pricing (as of 2026-11-14):** peak/valley pricing — off-peak cached input ¥0.02, input ¥1, output ¥4 per 1M tokens (very low); KV cache 1/4 HBM of prior gen.
- **Architecture:** 552B MoE, 8B input / 16B output active; Causal-Encoder-Decoder.

### Raw benchmarks found

Agent / tool use:

- No verified public Terminal-Bench / τ²-Bench figure found this pass

Reasoning / knowledge:

- GPQA Diamond: **90.9%** (Baike)

Coding:

- No verified public SWE-bench / LiveCodeBench figure found this pass

Long context:

- 1,000,000-token window verified; no public MRCR/RULER score found this pass.

### Normalized scores (1–100)

- **Tool use: 84/100.** Agent-optimized (KV cache compression cuts agent cost); capped by no public agentic benchmark number.
- **Reasoning: 90/100.** GPQA Diamond 90.9% is elite reasoning.
- **Context window: 99/100.** 1,000,000-token context (top tier).
- **Multimodal: 85/100.** Native multimodal vision (no external vision module); text out.
- **Coding: 84/100.** Coding-focused Flash; no public SWE-bench number found to push higher.
- **Cost efficiency: 95/100.** ¥1/¥4 per 1M (off-peak far lower) with open weights — exceptional value.
- **Overall Score: 88/100.** Mean of the five non-cost dims (84+90+99+85+84)/5 = 88.4 → 88. Best-fit: ultra-low-cost open-weighted reasoning Flash with elite GPQA, gated by thin agentic/coding disclosure.

---

## Signature

- Provided by: **Hy3 (hy3-reporter)** — 2026-11-14
- Method: public internet research — DeepSeek news/API docs, Baidu Baike, Baijiahao, Weibo; independent of peer `model/` findings.
- Reference URLs:
  - [DeepSeek news](https://deepseek.com/news)
  - [DeepSeek-V4.1 Flash — Baidu Baike](https://baike.baidu.com/item/DeepSeek-V4.1%20Flash/68957496)
  - [DeepSeek API changelog](https://api-docs.deepseek.com/updates/)
  - [V4.1 Flash release (Baijiahao)](https://baijiahao.baidu.com/s?id=1875928206477791951)
