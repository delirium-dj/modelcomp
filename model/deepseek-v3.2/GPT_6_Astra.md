# DeepSeek-V3.2 — findings by GPT 6 Astra

- Source: DeepSeek / DeepSeek-V3.2 (thinking mode)
- Date: 2026-10-08 (UTC)
- [Overview and scoring methodology](../../model-comparison.md)
- [Cross-model signed log](../../model-findings.md)

## Model card

- **Name:** DeepSeek-V3.2.
- **Short description:** Open-weight text reasoning and tool-use model; this report evaluates the final thinking release, not Exp or Speciale.
- **Provider / access:** Local deployment and hosted OpenRouter Chat Completions-compatible routes.
- **Release / knowledge:** December 1, 2025; knowledge cutoff unverified.
- **IDs:** `deepseek-ai/DeepSeek-V3.2`, gateway `deepseek/deepseek-v3.2`; no verified Free Zen ID. Historical native aliases are not treated as immutable V3.2 IDs.
- **Context window:** Vendor evaluated 128k; gateway currently advertises 164k. Score uses the verified vendor 128k configuration; maximum deployed output varies by provider and is unverified here.
- **Modalities:** Text input/output, thinking and non-thinking tool calls; structured-output enforcement depends on serving implementation.
- **Pricing (as of 2026-10-08):** Gateway displayed promotional starting prices $0.2088 input / $0.3096 output per million tokens, marked 28% off. Cached tariff unverified.
- **Architecture:** MoE with DeepSeek Sparse Attention and MLA; repository lists 685B stored parameters, evaluator reports 37B active. MIT weights.

Sources: [official release](https://api-docs.deepseek.com/news/news251201/), [weights/card](https://huggingface.co/deepseek-ai/DeepSeek-V3.2), [gateway offer](https://openrouter.ai/deepseek/deepseek-v3.2), [parameter specifications](https://artificialanalysis.ai/models/deepseek-v3-2).

### Raw benchmarks found

Vendor technical report, final **Thinking** column:
- **Tools:** Terminal-Bench 2.0 **46.4%**, Tau2 mean **80.3%**, MCP-Universe **45.9%**, MCP-Mark **38.0%**, Tool-Decathlon **35.2%**.
- **Reasoning:** GPQA Diamond **82.4%**, text-only HLE **25.1%** (official prompt **23.9%**), AIME 2025 **93.1%**.
- **Coding:** SWE-bench Verified **73.1%**, Multilingual **70.2%**, LiveCodeBench **83.3%**.
- **Harness:** Terminal result uses Claude Code, not Terminus; SWE uses the internal harness. Tau2 uses the tested model as user agent. Tool evaluations use temperature 1.0 and 128k context.
- **Context limitation:** The report describes long tool trajectories overflowing 128k. Exp checkpoint retrieval results are not transferred to the final model; no verified final full-window retrieval percentage found.
- **Missing:** Tau3, GDPval-AA, Claw-Eval, LCR, CritPt, Omniscience, SciCode, Vibe Code Bench and DeepSWE: no verified public score found in inspected primary sources.

[Technical report, Table 2 and evaluation discussion](https://arxiv.org/html/2512.02556v1). Vendor measurements are harness-specific; Speciale competition results do not apply.

### Normalized scores (1–100)

- **Tool use: 65/100.** Strong Tau2 but middling terminal and broader tool results.
- **Reasoning: 77/100.** Good GPQA and HLE, below frontier difficult reasoning.
- **Context window: 56/100.** Vendor 128k window and documented trajectory overflow constrain long tasks.
- **Multimodal: 15/100.** Text-only.
- **Coding: 77/100.** Solid SWE and competitive coding, capped by terminal performance.
- **Cost efficiency: 97/100.** Very low current gateway tariff; promotional pricing can change.
- **Overall Score: 58/100.** Half-up mean: (65 + 77 + 56 + 15 + 77) / 5 = 58. Good fit for economical text reasoning and bounded coding agents.

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-08
- Method: Fresh vendor, evaluator specification and gateway research; scores are normalized interpretations, not official scores.
- Future sources: Add a separate signed report alongside this file.

