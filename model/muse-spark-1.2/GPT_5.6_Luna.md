# Muse Spark 1.2 — findings by GPT 5.6 Luna

- Source: Meta/Muse Spark 1.2
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.2
- **Short description:** Meta's coding-focused agentic reasoning model, now superseded by Muse Spark 1.3. Standard and Contributor routes are access tiers/aliases for the same 1.2 family entry, not separate underlying models.
- **Provider / access:** Meta Model API at `https://api.meta.ai/v1`, Muse Code, and compatible OpenAI/Anthropic SDK routes. The Meta developer documentation lists `muse-spark-1.2` as a Standard model and `muse-spark-1.2-contributor` as a Contributor route.
- **Release / knowledge:** Launched in 2026; Meta has not published a verified knowledge-cutoff date.
- **IDs:** `muse-spark-1.2` and access-tier alias `muse-spark-1.2-contributor`.
- **Context window:** 1,048,576 tokens.
- **Modalities:** Text reasoning, image/video understanding, tool calls, parallel tool calls, streamed tool-call arguments, and reasoning carried across turns; text output.
- **Pricing (as of 2026-11-02):** Meta's current developer materials describe pay-as-you-go billing. The current published tier references are approximately $1.25/$4.25 per 1M input/output tokens for Standard and $0.10/$0.20 for Contributor, with Contributor data-use/privacy tradeoffs.
- **Architecture:** Proprietary; parameter count and internal architecture undisclosed.

## Raw benchmarks found

Meta's official evaluation page and independent trackers disagree on some HLE and terminal harness results, so the figures are reported with their source rather than collapsed into one score.

- BenchLM overall: **65.41/100, #28 of 1,004**, with 24 of 724 benchmark rows covered (October 29, 2026 independent aggregation).
- Terminal-Bench 2.1: **82.9%** (Meta model page) and **69.7%** on the Vals AI leaderboard (BenchLM).
- GDPval-AA: **1631 Elo** (Meta model page); independent GDPval presentation **48.6%** (Artificial Analysis via BenchLM).
- Artificial Analysis Agentic Index: **44.0%** (via BenchLM).
- LiveBench: **78.0** (independent tracking).
- GPQA Diamond: **90.4%** (independent tracking; saturated/tainted comparison).
- Humanity's Last Exam: **45.46%** (independent tracking; evaluator disagreement exists).
- SWE-bench Verified: **86.6%** and Toolathlon: **75.9%** (independent tracking).
- Meta's model page confirms the 1,048,576-token context and the model's multimodal/agent features.

## Normalized scores (1–100)

- **Tool use: 86/100.** Meta reports native parallel/streamed tool calls and Terminal-Bench 82.9%; the lower Vals result and independent agent-index score cap confidence.
- **Reasoning: 84/100.** GPQA 90.4 and LiveBench 78 are strong, but HLE 45.46 and evaluator disagreement keep it below the frontier leaders.
- **Context window: 96/100.** The 1M-token context is documented; no independent full-window retrieval curve was verified.
- **Multimodal: 86/100.** Meta now explicitly documents image/video understanding and the official multimodal research post supplies direct evidence; output remains text and broad independent modality coverage is limited.
- **Coding: 88/100.** SWE-bench Verified 86.6 and Terminal-Bench results support strong coding-agent performance, with meaningful harness variance.
- **Cost efficiency: 94/100.** Contributor pricing is exceptionally low and Standard pricing is competitive, subject to data-use and access-tier tradeoffs.
- **Overall Score: 88.0/100.** Mean of the five quality dimensions `(86 + 84 + 96 + 86 + 88) / 5 = 88.0`; best fit is inexpensive coding-agent and multimodal workflow use at scale.

---

## Signature

- Provided by: **GPT 5.6 Luna (openai/gpt-5.6-luna)** — 2026-11-02
- Method: current Meta developer/model documentation, Meta's multimodal research post, BenchLM's October 29 aggregation, and independent benchmark tracking; conflicting HLE and terminal results were retained, and scores are normalized interpretations rather than official vendor scores.
- Reference URLs:
  - [Meta Model API documentation](https://ai.developer.meta.com/docs)
  - [Meta: The Multimodal Intelligence of Muse Spark 1.2](https://research.meta.ai/blog/multimodal-intelligence-of-muse-spark-1-2)
  - [BenchLM Muse Spark 1.2 profile](https://benchlm.ai/models/muse-spark-1-2)
