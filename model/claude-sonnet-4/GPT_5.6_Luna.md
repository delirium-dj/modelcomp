# Claude Sonnet 4 — findings by GPT 5.6 Luna

- Source: Anthropic/Claude Sonnet 4
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card
- **Name:** Claude Sonnet 4
- **Short description:** Anthropic's balanced reasoning, vision, tool-use, and software-engineering model. This entry is the original Sonnet 4 identity, not a later Sonnet variant.
- **Provider / access:** Anthropic API model `claude-sonnet-4-20250514`, plus AWS Bedrock and Google Vertex AI equivalents; Messages API/tool use.
- **Release / knowledge:** 2025-05-22; original model knowledge cutoff reported as March 2025.
- **IDs:** `anthropic/claude-sonnet-4` dataset identity and dated API ID `claude-sonnet-4-20250514`.
- **Context window:** 200,000 tokens; maximum output is documented as up to 64,000 tokens on the original API specification.
- **Modalities:** Text and image input, text output, extended thinking, tool use, and structured/JSON-oriented API features; audio/video input was not verified.
- **Pricing (as of 2026-11-02):** $3 per 1M input tokens and $15 per 1M output tokens on the original paid API; caching discounts and partner pricing vary.
- **Architecture:** Proprietary Anthropic model.

### Raw benchmarks found

- SWE-bench Verified: **72.7%** standard and **80.2%** with parallel test-time compute; Anthropic comparison table, so the latter is not a single-trajectory score.
- Terminal-Bench: **35.5%** standard and **41.3%** with parallel test-time compute.
- GPQA Diamond: **75.4%** standard and **83.8%** with parallel test-time compute.
- TAU-bench: **81.4% retail** and **59.6% airline** in the reported tool-use evaluation.
- No exact-model MRCR/RULER retrieval score at the full 200K window was found.

### Normalized scores (1–100)
- **Tool use: 82/100.** TAU-bench retail 81.4% and airline 59.6% support strong tool workflows, with domain spread as a cap.
- **Reasoning: 83/100.** GPQA 75.4% standard/83.8% parallel is strong, but parallel test-time compute is not the ordinary single-run baseline.
- **Context window: 78/100.** The original 200K context is useful and documented, but no full-window retrieval measurement was found.
- **Multimodal: 70/100.** Official support for image plus text input earns the image-input band; no audio/video contract was verified.
- **Coding: 82/100.** SWE-bench Verified 72.7% and Terminal-Bench 35.5% are strong exact-model results, with the parallel figures kept separate.
- **Cost efficiency: 72/100.** $3/$15 is reasonable for a high-capability paid model but is not a low-cost tier.
- **Overall Score: 79/100.** `(82 + 83 + 78 + 70 + 82) / 5 = 79.0`; best fit is balanced API coding and tool use with image-aware prompts.

## Signature
- Provided by: **GPT 5.6 Luna (openai/gpt-5.6-luna)** — 2026-11-02
- Method: Fresh Anthropic documentation and benchmark-table research; original Sonnet 4 and its parallel-compute configurations were kept distinct from later variants. Scores are normalized interpretations, not official vendor scores.
- Reference URLs:
  - [Anthropic Claude 4 announcement and evaluation](https://www.anthropic.com/news/claude-4)
  - [Anthropic model overview](https://docs.anthropic.com/en/docs/about-claude/models)
  - [Claude Sonnet 4 benchmark table](https://langbase.com/models/anthropic/claude-sonnet-4/benchmarks)
