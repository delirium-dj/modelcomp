# Muse Spark Open — findings by Flint

- Source: Meta / Muse Spark (Muse Spark 1.1 lineage)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark Open
- **Short description:** Meta Superintelligence Labs' **Muse Spark** multimodal reasoning model for agentic tasks (latest release **Muse Spark 1.1**, July 9, 2026) — multimodal reasoning with major gains in tool and computer use, coding, and multimodal understanding; first public preview of the Meta Model API.
- **Provider / access:** Meta AI (Meta AI app, meta.ai), Meta Model API (public preview); OpenAI-compatible API surface.
- **Release / knowledge:** Muse Spark 1.1: 2026-07-09; Thinking mode; context window management up to **1M tokens**.
- **IDs:** Muse Spark Open / Muse Spark; Context: 1M; Modalities: multimodal (images, video, PDFs) plus audio; text out; reasoning (Thinking); tool use; coding; computer use; search with citations; structured output; parallel tool calling.

### Raw benchmarks found

- Agentic / coding: Meta Internal Coding Bench — competitive with leading alternatives; DeepSWE evaluation in OpenCode; Box enterprise work evaluation set — competitive with leading frontier models; Muse Spark 1.1 built OpenCode chat app w/ automated screenshots → fixes → validation.

### Cross-source comparison

- Official Meta announcement (Jul 2026) vs. industry early-partner feedback (Replit, Cline, Box, OpenClaw): convergence that Muse Spark 1.1 packs "massive million-token context, full multimodal support, built-in search with citations, strong reasoning, top-tier coding abilities, structured output, parallel tool calling" into one model.

### Normalized scores (1–100)

- **Tool use: 80/100.** Agentic coding / computer-use eval competitive with frontier alternatives.
- **Reasoning: 78/100.** Strong reasoning + Thinking mode; not top-tier absolute on all reasoning suites.
- **Context window: 90/100.** Documented **1M token** context with management/compaction.
- **Multimodal: 85/100.** Multimodal (images, video, PDFs, audio) plus visual-to-code; captioning.
- **Coding: 82/100.** Real-world large-codebase gains; competitive with leaders on internal bench.
- **Cost efficiency: 70/100.** Pricing/access still emerging (public preview); marked provisional.
- **Overall Score: 83/100.** Mean of the five quality dims (80 + 78 + 90 + 85 + 82) / 5 = 83.2 ≈ **83**; Cost efficiency excluded.

## Signature

- Provided by: **Muse Spark Open (muse-spark-open)** — 2026-11-05
- Method: public web research prioritizing official model card/docs (Meta AI / Muse Spark 1.1 announcement, Meta Model API) plus independent benchmarks/reviews (Replit, Cline, Box, OpenClaw commentary) — three independent source families.
- Reference URLs:
  - [Introducing Muse Spark 1.1 — Meta AI](https://ai.meta.com/blog/introducing-muse-spark-meta-model-api/)
  - [Muse Spark 1.1 Evaluation Report — Meta](https://ai.meta.com/static-resource/muse-spark-1-1-evaluation-report)
  - [Muse Spark 1.1 Evaluation Methodology — Meta](https://ai.meta.com/static-resource/muse-spark-1-1-eval-methodology)
- Future sources: add a new file next to this one, e.g. `Muse_Spark_Open.md`, using the same headings.
