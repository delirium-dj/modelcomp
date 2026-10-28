# Muse Spark 1.1 — findings by GPT-6 Luna

- Source: Meta/Muse Spark 1.1 (`muse-spark-1.1`)
- Date: 2026-10-28 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.1
- **Short description:** Meta's original Muse Spark version for agentic, coding, and multimodal work. It supports tool use and computer interaction and is distinct from later versions 1.2 and 1.3.
- **Provider / access:** Meta Model API model ID `muse-spark-1.1`, Standard mode only; also accessible via Meta AI. It is not available in Muse Code.
- **Release / knowledge:** Meta currently lists it as the original Muse Spark version; exact public release/cutoff dates were not stated in the documentation reviewed.
- **IDs:** `muse-spark-1.1`.
- **Context window:** 1,048,576 tokens.
- **Modalities:** Text, image, video, audio, and PDF input; text output. Tool calling, computer-use workflows, and search grounding are supported.
- **Pricing (as of 2026-10-28):** Standard API: $1.25 input, $4.25 output, $0.15 cached input per 1M tokens. No Contributor mode for 1.1; Standard mode says content is not used for Meta model training.
- **Architecture:** Proprietary; parameter count and architecture undisclosed.

### Raw benchmarks found

Meta's public model page reports results for Muse Spark 1.1; the report's evaluation guide is linked by Meta. Scores are vendor-published.

Agent / tool use:

- MCP Atlas: **88.1**.
- JobBench: **54.7**.
- Toolathlon-Verified: **75.6**.
- OSWorld-Verified: **80.8**.
- Humanity's Last Exam with tools: **62.1%**.
- Finance Agent v2: **57.2**.

Reasoning / knowledge:

- HLE with tools: **62.1%** (tool-enabled setting; no separate no-tools HLE or GPQA figure was shown on the page).
- CharXiv Reasoning: **88.4**.

Coding:

- Terminal-Bench 2.1: **80.0**.
- SWE-Bench Pro: **61.5**.
- DeepSWE 1.1: **53.3**.

Long context:

- Documented capacity: 1,048,576 tokens; no MRCR/RULER/GraphWalks retrieval score verified.

### Normalized scores (1–100)

- **Tool use: 91/100.** MCP Atlas 88.1, Toolathlon 75.6, and OSWorld 80.8 are strong; capped for vendor-published benchmark results and harness variation.
- **Reasoning: 90/100.** HLE-with-tools 62.1% and CharXiv 88.4 support strong reasoning, but the page does not provide a no-tools broad-reasoning score.
- **Context window: 90/100.** One-million-token capacity is top tier; no retrieval evidence supports a 95–100 score.
- **Multimodal: 95/100.** Meta documents image, video, audio, and PDF inputs; text-only output and lack of independent modality-specific benchmarks cap the score.
- **Coding: 90/100.** Terminal-Bench 80.0 and SWE-Bench Pro 61.5 show strong capability, while DeepSWE 53.3 and vendor-only publication cap the score.
- **Cost efficiency: 72/100.** $1.25/$4.25 per million is moderate; there is no cheaper contributor tier for this version.
- **Overall Score: 91/100.** Half-up mean of the five quality dimensions (91+90+90+95+90)/5 = 91.2; suited to multimodal agent workflows where its API price and preview access fit.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna)** — 2026-10-28
- Method: Public web research using Meta's model page, model API documentation, and pricing documentation. Benchmarks are explicitly attributed to Meta; normalized scores are independent interpretations.
- Sources: [Meta Muse Spark 1.1 benchmarks](https://developer.meta.com/ai/models/muse-spark-1-1/); [Meta Model API model documentation](https://dev.meta.ai/docs/models); [Meta API pricing](https://dev.meta.ai/docs/pricing-rate-limits).
