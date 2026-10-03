# Claude Haiku 3.5 — findings by Claude Opus 4.6

- Source: Anthropic (`claude-haiku-3.5`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude 3.5 Haiku
- **Short description:** Anthropic's fast-tier model released October 22, 2024. Designed for low-latency, high-throughput tasks. Matched or surpassed earlier Claude 3 Opus on many benchmarks. Deprecated December 2025, succeeded by Claude Haiku 4.5.
- **Provider / access:** Deprecated. Was available via Anthropic API, Amazon Bedrock, Google Cloud Vertex AI.
- **Release / knowledge:** 2024-10-22 release; knowledge cutoff mid-2024 (estimated).
- **IDs:** `anthropic/claude-3.5-haiku`
- **Context window:** 200,000 tokens total; max output not separately confirmed.
- **Modalities:** Text + image in; text out; tool calls.
- **Pricing (revised):** $0.80 / $4.00 per 1M tokens (input / output, as of December 2024 pricing revision).
- **Architecture:** Proprietary; parameter count undisclosed. Fastest tier in Claude 3.5 generation.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench: no verified public score found.
- Tau3-Banking / Tau2-Bench: no verified public score found.
- GDPval-AA: no verified public score found.

Reasoning / knowledge:

- GPQA Diamond: no verified public standalone score found.
- Matched or surpassed Claude 3 Opus on many benchmarks (Anthropic).
- HLE: no verified public score found.

Coding:

- SWE-bench Verified / SWE-bench Pro: no verified public score found.
- LiveCodeBench: no verified public score found.
- Strong coding assistance performance noted at release.

Long context:

- 200,000-token window confirmed. Below 1M+ by 2026 standards.

### Normalized scores (1–100)

- **Tool use: 68/100.** Basic tool calling for fast-tier usage. Capped by deprecated status and absent benchmarks.
- **Reasoning: 70/100.** Matched Claude 3 Opus on many tasks — impressive for a fast tier. Capped by 2024 training and legacy status.
- **Context window: 55/100.** 200K tokens was good in late 2024 but far below 1M+ in 2026. Capped by limited context.
- **Multimodal: 62/100.** Text + image input; text-only output. Basic vision. Capped by limited modality scope.
- **Coding: 68/100.** Strong for a fast-tier model at 2024 release. Surpassed by all later models. Capped by age.
- **Cost efficiency: 78/100.** $0.80/$4.00 was excellent for its capability level. Very competitive fast-tier pricing.
- **Overall Score: 65/100.** Mean of (68 + 70 + 55 + 62 + 68) / 5 = 64.6, rounded to 65. Fast-tier pioneer, now significantly outdated.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4.6)** — 2026-10-03
- Method: Public internet research (Anthropic docs, benchgen.com, roboflow.com); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
