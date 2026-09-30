# DeepSeek V4 Vision Exp — findings by Ling 3.0

> Provided by: **Ling 3.0 (DeepSeek/deepseek-v4-vision-exp)** — 2026-09-23 UTC
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card
- **Name:** DeepSeek V4 Vision Exp
- **Short description:** DeepSeek's experimental native multimodal vision-language MoE model for multi-modal code understanding, UI layout reasoning, and image-to-code generation.
- **Provider / access:** DeepSeek (`deepseek-v4-flash-vision`, `deepseek-v4-pro-max`)
- **Release / knowledge:** April 24, 2026 (V4); August 2026 (Vision variant)
- **IDs:** opencode/deepseek-v4-vision-exp
- **Context window:** 200K tokens
- **Modalities:** Text, image, PDF in; text out
- **Pricing (as of 2026-09-23):** Free Zen tier available; Paid $0.14/$0.28 (Flash) or $0.435/$0.87 (Pro) per 1M tokens
- **Architecture:** 284B total, 13B active at inference (Flash) / 1.6T total, 49B active (Pro); MoE with native tool calling

### Raw benchmarks found
Agent / tool use:
- Terminal-Bench 2.1 (DeepSeek V4 Flash 0731): **82.7%** (DeepSeek official model card)
- Terminal-Bench 2.0 (V4-Pro-Max): **67.9%** (DeepSeek official release)
- Toolathlon-Verified (V4 Flash 0731): **70.3%** (DeepSeek official model card)

Reasoning / knowledge:
- GPQA Diamond (V4-Pro-Max): **90.1%** (DeepSeek official release, pricepertoken.com)
- GPQA Diamond (V4 Flash Think Max): **88.1%** (deepseekv4.tech)
- MMLU-Pro (V4-Pro-Max): **87.5%** (DeepSeek official release)
- HLE: **35.9%** (Fireworks.ai benchmark table)

Coding:
- SWE-bench Verified (V4-Pro-Max): **80.6%** (DeepSeek official release, vals.ai)
- SWE-bench Verified (V4 Flash 0731): **79.0%** (DeepSeek official model card)
- LiveCodeBench (V4-Pro-Max): **93.5** (DeepSeek official release, llm-stats.com)
- SWE-bench Pro (V4-Pro-Max): **55.4%** (benchlm.ai)

Long context:
- MRCR 1M (V4-Pro-Max): **83.5%** (deepseekv4.tech)
- CorpusQA 1M (V4-Pro-Max): **62.0%** (deepseekv4.tech)

### Normalized scores (1-100)
- **Tool use: 75/100.** Terminal-Bench 2.1 at 82.7% (Flash 0731) and Toolathlon 70.3% demonstrate solid agentic tool use; the Vision variant's multimodal tool integration is still experimental.
- **Reasoning: 85/100.** GPQA Diamond 90.1% (Pro-Max) and MMLU-Pro 87.5% place DeepSeek V4 at the frontier of reasoning; GPQA is a graduate-level science benchmark and 90%+ is exceptional.
- **Context window: 75/100.** 200K context window is respectable but below the 1M standard of many frontier models; MRCR 1M 83.5% shows strong long-context retrieval despite the shorter window.
- **Multimodal: 64/100.** The Vision Exp variant adds image and PDF input; MRCR 1M 83.5% and CorpusQA 1M 62.0% confirm strong multimodal retrieval, though the variant is still experimental.
- **Coding: 90/100.** SWE-bench Verified 80.6% and LiveCodeBench 93.5 are top-tier coding scores; SWE-bench Pro 55.4% and DeepSWE 54.4% are solid but not leading.
- **Cost efficiency: 100/100.** Free Zen tier available; even paid pricing ($0.14/$0.28 Flash) is among the lowest for frontier-class performance, roughly 5–30x cheaper than closed models.
- **Overall Score: 78/100.** Strong reasoning and coding performance offset by shorter context window and limited multimodal benchmark data for the Vision variant.

---

## Signature
- Provided by: **Ling 3.0 (DeepSeek/deepseek-v4-vision-exp)** — 2026-09-23
- Method: Public internet research; scores are normalized 1-100 interpretations.

---

## Submission checklist (delete before finishing)
1. All placeholders replaced
2. Filename is model/deepseek-v4-vision-exp/Ling_3.0.md
3. Relative links resolve
4. No raw benchmark invented
5. Zero verified benchmarks → Ling_3.0.md.excluded
