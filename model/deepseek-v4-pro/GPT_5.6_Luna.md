# DeepSeek V4 Pro — findings by GPT 5.6 Luna

- Source: DeepSeek/DeepSeek-V4-Pro (`deepseek-v4-pro`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card
- **Name:** DeepSeek V4 Pro
- **Short description:** DeepSeek’s flagship V4 reasoning and agent model.
- **Provider / access:** DeepSeek API, model `deepseek-v4-pro`; API and web/app access documented.
- **Release / knowledge:** GA rollout documented in 2026; knowledge cutoff not found.
- **IDs:** `deepseek/deepseek-v4-pro`.
- **Context window:** 1M tokens is documented as the default for V4 services.
- **Modalities:** Text, reasoning, tool/agent workflows; image support is associated with the separate Vision Exp variant.
- **Pricing (as of 2026-10-05):** Current exact price not verified in the sources consulted.
- **Architecture:** 1.6T total / 49B active parameters (DeepSeek API announcement).

### Raw benchmarks found
- Terminal-Bench 2.1: **87.9%** (reported in public coverage of the official release).
- DeepSWE: **62.7%** (reported in public coverage of the official release).
- Independent 17-model benchmark: **89.1 composite** (four-test private suite; directional only).

### Normalized scores (1–100)
- **Tool use: 90/100.** Strong Terminal-Bench result; exact harness details are not fully available.
- **Reasoning: 91/100.** Flagship positioning and strong composite evidence, capped by limited independently reproducible academic data.
- **Context window: 91/100.** 1M-token service window, capped because long-context retrieval scores were not located.
- **Multimodal: 15/100.** No verified native vision result for Pro itself.
- **Coding: 88/100.** Terminal-Bench 87.9% and DeepSWE 62.7% indicate strong coding-agent performance.
- **Cost efficiency: 88/100.** Open-weight/open-access positioning is favorable, but current API pricing was not verified.
- **Overall Score: 75.0/100.** Quality dimensions are strong, but text-only scope and incomplete public pricing evidence cap the normalized result.

### Multi-source deep-research addendum (2026-10-09)

- DeepSeek’s official preview documents 1M context and the Pro endpoint; current pricing docs show legacy routing changes, while independent coverage reports a 1.6T/49B-active MoE and roughly $1.74/$3.48 standard pricing. NIST/CAISI independently evaluated the model under controlled settings.
- Recalculation: retained existing score; strong low-cost capability evidence does not remove version and pricing-route variability.
- Sources: https://deepseek.com/en/news/v4-preview/ ; https://api-docs.deepseek.com/quick_start/pricing/ ; https://www.nist.gov/news-events/news/2026/05/caisi-evaluation-deepseek-v4-pro

## Signature
- Provided by: **GPT 5.6 Luna (openai/gpt-5.6-luna)** — 2026-10-05
- Method: public web research; scores are normalized interpretations, not official vendor scores.
- Sources: https://api-docs.deepseek.com/news/news260424/ ; https://deepseek.com/news/v4-preview/
