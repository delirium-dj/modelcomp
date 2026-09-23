# Gemma 4 31B — findings by Ling 3.0

> Provided by: **Ling 3.0 (Google/gemma-4-31b-it)** — 2026-09-23 UTC
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card
- **Name:** Gemma 4 31B
- **Short description:** Google's open-weights 31B dense multimodal instruction-tuned model with strong reasoning, tool use, and coding capabilities under Apache 2.0 license.
- **Provider / access:** Google (`google/gemma-4-31b-it`, `google/gemma-4-31b-non-reasoning`)
- **Release / knowledge:** April 2, 2026
- **IDs:** google/gemma-4-31b-it
- **Context window:** 128K tokens
- **Modalities:** Text in/out only (non-reasoning variant)
- **Pricing (as of 2026-09-23):** Free open weights / standard hosting; API ~$0.09/$0.34 per 1M tokens (CloudPrice.net)
- **Architecture:** 31B dense parameters; reasoning and non-reasoning variants; Apache 2.0 license

### Raw benchmarks found
Agent / tool use:
- Terminal-Bench 2.0: **not measured** (BenchLM.ai comparison)
- Gert Labs agentic score: **35.26%** (BenchLM.ai)
- OSWorld-Verified: **not measured**

Reasoning / knowledge:
- GPQA Diamond: **84.3%** (BenchLM.ai, lmmarketcap.com)
- MMLU-Pro: **85.2%** (BenchLM.ai, lmmarketcap.com)
- HLE: **19.5%** (lmmarketcap.com)
- Artificial Analysis Intelligence Index: **29.4** (Fireworks.ai benchmark table)

Coding:
- SWE-Rebench: **41.6%** (BenchLM.ai)
- React Native Evals: **75.2%** (BenchLM.ai)
- Artificial Analysis Coding Index: **33.2** (CloudPrice.net)
- SWE-bench Pro: **not measured**

Long context:
- No verified long-context benchmark found

### Normalized scores (1-100)
- **Tool use: 50/100.** Gert Labs agentic score of 35.26% and lack of Terminal-Bench measurement indicate limited agentic tool-use capability; OSWorld-Verified not measured; however, the model supports function calling and structured outputs.
- **Reasoning: 75/100.** GPQA Diamond 84.3% and MMLU-Pro 85.2% are strong for an open-weights model; HLE 19.5% and Intelligence Index 29.4 show gaps on frontier reasoning, but knowledge benchmarks are solid.
- **Context window: 50/100.** 128K context window is below the 256K–1M standard; long-context benchmarks are unavailable.
- **Multimodal: 15/100.** Text-only model per meta.json; no image, audio, or video modalities supported.
- **Coding: 50/100.** SWE-Rebench 41.6% and Coding Index 33.2 are modest; React Native Evals 75.2% is an outlier but not representative; SWE-bench Pro not measured.
- **Cost efficiency: 100/100.** Free open weights; self-hosted deployment eliminates API costs entirely; API pricing if used (~$0.09/$0.34) is among the lowest available.
- **Overall Score: 48/100.** As a text-only open-weights model with strong knowledge benchmarks but limited agentic and coding capabilities, the overall score reflects its role as an accessible research model rather than a frontier agent.

---

## Signature
- Provided by: **Ling 3.0 (Google/gemma-4-31b-it)** — 2026-09-23
- Method: Public internet research; scores are normalized 1-100 interpretations.

---

## Submission checklist (delete before finishing)
1. All placeholders replaced
2. Filename is model/gemma-4-31b/Ling_3.0.md
3. Relative links resolve
4. No raw benchmark invented
5. Zero verified benchmarks → Ling_3.0.md.excluded
