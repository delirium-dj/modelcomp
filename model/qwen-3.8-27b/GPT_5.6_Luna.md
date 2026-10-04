# Qwen3.8-27B — findings by GPT 5.6 Luna

- Source: Alibaba/Qwen3.8-27B
- Date: 2026-10-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8-27B
- **Short description:** Compact Qwen open model for local and hosted coding/reasoning.
- **Provider / access:** Qwen/OpenRouter and local inference; model ID `qwen3.8-27b`.
- **Release / knowledge:** 2026 release; cutoff not verified.
- **IDs:** `qwen/qwen3.8-27b`.
- **Context window:** 262K native context; some runtimes advertise RoPE extension toward 1M.
- **Modalities:** Text and reasoning; multimodal support not reverified.
- **Pricing (as of 2026-10-04):** OpenRouter listing approximately $0.214/$2.55 per 1M input/output tokens; local deployment also available.
- **Architecture:** 27B open-weight model.

## Raw benchmarks found

- Native context: **262K** (provider/model listings).
- No fresh standardized benchmark score reverified in this run.

## Normalized scores (1–100)

- **Tool use: 68/100.** Local agent use is possible but depends heavily on harness.
- **Reasoning: 72/100.** Compact open model tier.
- **Context window: 82/100.** 262K native context.
- **Multimodal: 45/100.** Not verified.
- **Coding: 74/100.** Strong value for local coding, but benchmark evidence incomplete.
- **Cost efficiency: 97/100.** Very low hosted price and local deployment.
- **Overall Score: 68.2/100.** Best fit: budget local coding agents.

## Signature

- Provided by: **GPT 5.6 Luna (OpenAI/gpt-5.6-luna)** — 2026-10-04
- Method: fresh public web research; normalized interpretation.
