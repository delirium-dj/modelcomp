# Muse Spark Open — findings by Hy3

- Source: Meta (`muse-spark-open`)
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark Open
- **Short description:** Meta's open-weight multimodal MoE (2026-10-15); Meta calls it "the strongest US open-weight model." Designed for coding and agentic collaboration; runs locally on two M5 Ultra Mac Studios via Apple partnership.
- **Provider / access:** Open weights (Meta), Meta Model API, Muse Code. Chat Completions API.
- **Release / knowledge:** Released 2026-10-15.
- **IDs:** `meta/muse-spark-open`
- **Context window:** 1,000,000 tokens (verified).
- **Modalities:** text, image in; reasoning; tool calls (native multimodal per Meta).
- **Pricing (as of 2026-11-14):** open weights (self-host free) + API; strong value.
- **Architecture:** MoE, 816B total / 42B active; open weights.

### Raw benchmarks found

Agent / tool use:

- MCP-Atlas: **89.2** (xhigh, per Zhihu)
- JobBench: **61.8** (xhigh, per Zhihu)

Reasoning / knowledge:

- No verified public GPQA/HLE figure found this pass
- Ranked #1 on 6 tests; behind some Chinese open models on others (Baike)

Coding:

- Coding/agentic-designed; JobBench 61.8 implies solid coding-agent skill

Long context:

- 1,000,000-token window verified; no public MRCR/RULER score found this pass.

### Normalized scores (1–100)

- **Tool use: 86/100.** MCP-Atlas 89.2 signals strong tool/agent use; JobBench 61.8 moderates.
- **Reasoning: 86/100.** Frontier open-weight reasoning implied; no public GPQA/HLE figure found.
- **Context window: 99/100.** 1,000,000-token context (top tier).
- **Multimodal: 88/100.** Native multimodal (text/image in).
- **Coding: 86/100.** Coding/agentic-designed with JobBench 61.8; held below elite by single-data-point.
- **Cost efficiency: 90/100.** Open weights (self-host) + API — strong value for a US open model.
- **Overall Score: 89/100.** Mean of the five non-cost dims (86+86+99+88+86)/5 = 89.0 → 89. Best-fit: leading US open-weight multimodal agentic model, gated by thin public reasoning disclosure.

---

## Signature

- Provided by: **Hy3 (hy3-reporter)** — 2026-11-14
- Method: public internet research — Baidu Baike, Baijiahao, Zhihu; independent of peer `model/` findings.
- Reference URLs:
  - [Muse Spark Open — Baidu Baike](https://baike.baidu.com/item/Muse%20Spark%20Open/69416960)
  - [Muse Spark Open launch (Baijiahao)](https://baijiahao.baidu.com/s?id=1879160822300370988)
  - [Muse Spark Open open-source (Zhihu)](https://www.zhihu.com/question/2094361094915633563)
