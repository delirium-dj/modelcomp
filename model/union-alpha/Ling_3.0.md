# Union Alpha — findings by Ling 3.0

> Provided by: **Ling 3.0 (Stealth/union-alpha)** — 2026-09-23 UTC
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card
- **Name:** Union Alpha (Pareto 26.9)
- **Short description:** A stealth multimodal model for agentic coding and research, later identified as Unbiased.ai's Pareto 26.9 ensemble routing system.
- **Provider / access:** OpenRouter / OpenCode (`stealth/union-alpha`, later `unbiased/pareto`)
- **Release / knowledge:** September 16, 2026
- **IDs:** opencode/union-alpha
- **Context window:** 262K tokens
- **Modalities:** Text and image input; text output
- **Pricing (as of 2026-09-23):** Free during preview; anticipated $2.50 input / $7.50 output per 1M tokens (paid tier)
- **Architecture:** Ensemble routing system coordinating multiple frontier models (Llama-3.3-70b, Qwen 3.6 35b-a3b, GLM 5.3 Flash, DeepSeek v4 Flash as judge); undisclosed base models

### Raw benchmarks found
Agent / tool use:
- Terminal-Bench v4.0 (Artificial Analysis): **~50–60%** (rank 28/149) (Artificial Analysis)
- DeepSWE: **74%** (#1 tied) (union-alpha.com)

Reasoning / knowledge:
- GPQA Diamond: **90.9%** (union-alpha.com)
- LiveBench: **76.1** (#26/58) (union-alpha.com)
- ARI Bench: **32/100** (#2/36) (union-alpha.com)

Coding:
- DeepSWE: **74%** (#1 tied) (union-alpha.com)
- SWE-bench Pro: not independently verified

Long context:
- No verified long-context benchmark found

### Normalized scores (1-100)
- **Tool use: 78/100.** DeepSWE 74% (#1 tied) and Terminal-Bench v4.0 ~50–60% on a 149-model evaluation demonstrate strong agentic coding capability; the ensemble routing system excels at coordinating tool calls across models.
- **Reasoning: 80/100.** GPQA Diamond 90.9% is near frontier level, and LiveBench 76.1 shows solid general reasoning; however, the score reflects ensemble routing rather than a single model's reasoning capacity.
- **Context window: 80/100.** 262K context window is competitive but not exceptional; the ensemble nature means effective context depends on underlying model context limits.
- **Multimodal: 76/100.** Image input is supported, but multimodal capabilities are limited compared to dedicated vision-language models; the system routes to multimodal-capable sub-models when needed.
- **Coding: 76/100.** DeepSWE 74% (#1 tied) is the strongest signal; the system was explicitly designed for agentic coding and research workflows.
- **Cost efficiency: 100/100.** Free tier available during preview; paid tier pricing ($2.50/$7.50) is competitive for an ensemble system delivering frontier-level results.
- **Overall Score: 78/100.** High agentic and coding capability with strong reasoning, offset by the ensemble nature making it a router rather than a standalone foundation model.

---

## Signature
- Provided by: **Ling 3.0 (Stealth/union-alpha)** — 2026-09-23
- Method: Public internet research; scores are normalized 1-100 interpretations.

---

## Submission checklist (delete before finishing)
1. All placeholders replaced
2. Filename is model/union-alpha/Ling_3.0.md
3. Relative links resolve
4. No raw benchmark invented
5. Zero verified benchmarks → Ling_3.0.md.excluded
