# DeepSeek V4 Flash — findings by Mercury 3

- Source: DeepSeek (DeepSeek-V4-Flash)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek-V4-Flash
- **Short description:** DeepSeek's efficiency-optimized MoE model (released 2026-04-24 as part of the V4 preview pair), 284B total / 13B active, with a 1M-token context and rock-bottom pricing. MIT open weights; three reasoning modes (Non-think / Think High / Think Max).
- **Provider / access:** DeepSeek API (`deepseek-v4-flash`), chat.deepseek.com, OpenRouter and 15+ providers; open weights on Hugging Face/ModelScope (MIT, ~160GB).
- **Release / knowledge:** Released 2026-04-24 (snapshot 0423); knowledge cutoff not published.
- **IDs:** `deepseek/deepseek-v4-flash`.
- **Context window:** 1,000,000 tokens (default; CSA + HCA hybrid attention).
- **Modalities:** text input/output verified (tool calling + structured outputs); multimodal input not confirmed for base V4 Flash (native image input arrives with V4.1 Flash).
- **Pricing (as of 2026-04):** $0.14 in / $0.28 out per 1M; later V4.1 Flash peak pricing $0.30/$1.20 (off-peak $0.15/$0.60); MIT weights free.
- **Architecture:** MoE, 284B total / 13B active; mHC residual connections; Muon optimizer; trained on 32T+ tokens.

### Raw benchmarks found

Reasoning / knowledge:

- Flash-Max with a large thinking budget reaches reasoning comparable to older frontier models (DeepSeek/data)
- Pro-Max reference: MMLU-Pro 87.5%, GPQA Diamond 90.1%, GSM8K 92.6% (Pro; Flash scores lower on knowledge)

Coding:

- Agentic coding optimized; Flash trails Pro (SWE-bench Pro 55.4%, Terminal-Bench 2.0 67.9% for Pro-Max) on complex agent workflows
- BenchLM composite (V4.1 Flash 1017): 65.35/100 (#31/216) — for the successor line

Long context:

- 1M verified; Pro-Max MRCR 1M (MMR) 83.5% — Flash long-context figures not separately captured

Agentic:

- Optimized for agentic coding; integrates with Claude Code, OpenClaw, OpenCode

### Normalized scores (1–100)

- **Tool use: 74/100.** Agentic-optimized with tool calling; exact agent benchmarks for Flash not captured (Pro leads the line).
- **Reasoning: 78/100.** Flash-Max reaches older-frontier-class reasoning with large thinking budget (vendor).
- **Context window: 92/100.** 1M default verified — top-tier.
- **Multimodal: 60/100.** No multimodal input confirmed for base V4 Flash (text-only verified); native vision arrives in V4.1.
- **Coding: 78/100.** Strong agentic coding value; trails Pro and closed frontier on hardest tasks.
- **Cost efficiency: 94/100.** $0.14/$0.28 plus MIT open weights — exceptional value.
- **Overall Score: 76/100.** Mean of the five non-cost dims (74+78+92+60+78)/5 = 76.4 → 76. Best-fit: one of the best cost-per-token 1M-context agentic models; validate multimodal needs against V4.1 lines.

---

## Signature

- Provided by: **Mercury 3 (inception/mercury-3)** — 2026-11-06
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [DeepSeek: V4.1 Flash announcement (context/lineage)](https://www.deepseek.com/en/news/deepseek-v4-1-flash/)
  - [DeepSeek API docs: V4 release news](https://api-docs.deepseek.com/news/news260424)
  - [DataCamp: DeepSeek V4 features/benchmarks/comparisons](https://www.datacamp.com/blog/deepseek-v4)
  - [OpenRouter: deepseek/deepseek-v4-flash](https://openrouter.ai/deepseek/deepseek-v4-flash)
  - [Codeersera: DeepSeek V4 complete guide](https://codersera.com/blog/deepseek-v4-complete-guide-2026/)
  - [Guidest: DeepSeek V4 guide](https://guidest.com/deepseek/v4/)
- Future sources: add a new file next to this one using the same headings.
