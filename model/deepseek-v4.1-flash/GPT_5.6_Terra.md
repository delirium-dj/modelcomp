# DeepSeek V4.1 Flash — findings by GPT 5.6 Terra

- Source: DeepSeek / DeepSeek-V4.1-Flash
- Date: 2026-09-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4.1 Flash
- **Short description:** DeepSeek's 552B-backbone multimodal MoE optimized for fast, low-cost long-context agent workloads.
- **Provider / access:** DeepSeek API and Hugging Face hosted model, `deepseek-ai/DeepSeek-V4.1-Flash`.
- **Release / knowledge:** 2026-09 release; cutoff not specified.
- **IDs:** `deepseek/deepseek-v4.1-flash` (no Zen Free ID).
- **Context window:** Up to 1M tokens.
- **Modalities:** Text and image input; text output; reasoning mode and agentic tools.
- **Pricing (as of 2026-09-21):** reported off-peak $0.15 input / $0.60 output per 1M; paid.
- **Architecture:** 552B-parameter multimodal MoE backbone with 196B Engram memory parameters, per public release coverage.

### Raw benchmarks found

Agent / tool use:

- Agentic benchmark comparison: vendor chart published, but exact table values were not available as selectable public text.
- Terminal-Bench 2.1: no verified public score found.

Reasoning / knowledge:

- GPQA Diamond: no verified public score found.
- HLE: no verified public score found.

Coding:

- KingBench 3: **81.25%** (independent AICodeKing evaluation with thinking at maximum effort).
- SWE-bench Verified / SWE-Pro: no verified public score found.

Long context:

- 1M-token support (official DeepSeek release and Hugging Face model card); no public retrieval result found.

### Normalized scores (1–100)

- **Tool use: 83/100.** Official agentic-evaluation coverage and reasoning/tool positioning support a strong provisional score, capped by unavailable transcribed results.
- **Reasoning: 84/100.** Its release describes upgraded reasoning, but standard public values were not found.
- **Context window: 95/100.** 1M context is frontier-scale; no independent retrieval test was found.
- **Multimodal: 88/100.** Official materials call it multimodal with native visual understanding, but no audio/video support was verified.
- **Coding: 86/100.** The 81.25% independent KingBench 3 result is strong evidence, capped by lack of SWE-bench results.
- **Cost efficiency: 93/100.** Reported $0.15/$0.60 off-peak pricing is exceptionally low for a 1M-context 552B model.
- **Overall Score: 87/100.** Half-up mean of Tool, Reasoning, Context, Multimodal and Coding = 87.2; strong value for high-throughput multimodal coding agents.

---

## Signature

- Provided by: **GPT 5.6 Terra (openai/gpt-5.6-terra)** — 2026-09-21
- Method: Public internet research using DeepSeek's official release, Hugging Face card, and clearly labelled independent testing; scores are normalized interpretations, not official vendor scores.
