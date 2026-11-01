# DeepSeek V4 Flash Vision Exp — findings by GPT-6.1 Terra

- Source: DeepSeek `DeepSeek-V4-Flash-Vision-Exp`
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4 Flash Vision Exp
- **Short description:** Experimental vision-extended DeepSeek V4 Flash checkpoint; the folder shorthand omits Flash but the cited weights and scores retain the exact model name.
- **Provider / access:** Weights `deepseek-ai/DeepSeek-V4-Flash-Vision-Exp`; OpenRouter lists `deepseek/deepseek-v4-flash-vision-exp`. DeepSeek says its legacy API ID now serves V4.1 Flash 1017, not this retired checkpoint.
- **Release / knowledge:** No verified release date or knowledge cutoff found.
- **IDs:** `deepseek-ai/DeepSeek-V4-Flash-Vision-Exp`; legacy API `deepseek-v4-flash-vision-exp` is rerouted.
- **Context window:** No exact-model context limit independently verified from reviewed sources.
- **Modalities:** Text and image input, text output; tool-calling support in vendor serving examples.
- **Pricing (2026-11-01):** No verified current price for this exact checkpoint; current DeepSeek API alias bills the successor, not this historical model.
- **Architecture:** DeepSeek V4 Flash architecture with additional vision modules and continued training; weights MIT licensed.

### Raw benchmarks found

Agent / tool use:

- DeepSeek reports Terminal-Bench 2.1 **83.9%**, Toolathlon-Verified **75.9%**, AutomationBench public **25.7%**, using DeepSeek Harness minimal mode at max effort for text-agent tests.

Reasoning / knowledge:

- GPQA Diamond and HLE: no verified public exact-model score found. Agent's Last Exam **27.3%** is vendor-reported and not a substitute for HLE.

Coding:

- DeepSeek reports DeepSWE **59.3%** and NL2Repo **57.7%** with the stated harness. SWE-bench Verified and LiveCodeBench: no verified public score found.

Long context:

- No verified exact-model context limit or long-context retrieval score found.

Multimodal:

- DeepSeek reports ZeroBench **35.0% pass@5** and Chartography **64.3%**; pass@5 is not a single-attempt result.

### Normalized scores (1–100)

- **Tool use: 87/100.** Vendor TB 2.1 and Toolathlon results are strong but scaffold-specific.
- **Reasoning: 80/100.** Provisional, supported indirectly by Agent's Last Exam; GPQA and HLE were not verified.
- **Context window: 70/100.** Provisional only: exact checkpoint window was not verified, so this does not assert a measured limit.
- **Multimodal: 65/100.** Text and image input with text output; no verified audio or video input.
- **Coding: 86/100.** Vendor TB 2.1 and DeepSWE results support agentic coding under its stated harness.
- **Cost efficiency: 70/100.** Provisional because exact-checkpoint serving price is unknown; the successor route's price is not applied.
- **Overall Score: 78/100.** Half-up mean of five quality dimensions; useful for experimental image-aware agents when this exact checkpoint is available.

---

## Signature

- Provided by: **GPT 6.1 Terra (openai/gpt-6.1-terra)** — 2026-11-01
- Method: DeepSeek weights card and current API documentation; normalized scores are interpretations, not vendor scores.
- Reference URLs:
  - [DeepSeek exact weights and benchmark card](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-Vision-Exp)
  - [DeepSeek current API route mapping](https://api-docs.deepseek.com/)
  - [OpenRouter historical route](https://openrouter.ai/deepseek/deepseek-v4-flash-vision-exp)
- Future sources: add a separate signed findings file alongside this one.
