# Gemini 3.5 Flash-Lite — findings by GPT 5.6 Luna

- Source: Google DeepMind/Gemini 3.5 Flash-Lite
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card
- **Name:** Gemini 3.5 Flash-Lite
- **Short description:** Google’s low-cost, high-throughput Gemini model for API and enterprise use.
- **Provider / access:** Gemini API, Google AI Studio, Vertex/Enterprise platforms.
- **Release / knowledge:** 2026; model card results as of July 2026.
- **IDs:** Google Gemini 3.5 Flash-Lite.
- **Context window:** MRCR reported at 128K and 1M test points; exact nominal limit not shown here.
- **Modalities:** Multimodal model; chart/document evaluation and agentic computer use are reported.
- **Pricing (as of 2026-10-05):** $0.30 input / $2.50 output per 1M tokens.
- **Architecture:** Proprietary Gemini Flash family.

### Raw benchmarks found
- SWE-Bench Pro: **54.2%**; Terminal-Bench 2.1: **54.0%**; MLE-Bench: **39.2%**.
- OSWorld-Verified: **74.0%**.
- CharXiv: **74.5%** without tools, **76.5%** with tools.
- GDM-MRCR v2: **72.2%** at 128K, **21.3%** at 1M.

### Normalized scores (1–100)
- **Tool use: 76/100.** OSWorld 74% and tool-assisted CharXiv 76.5% are solid.
- **Reasoning: 73/100.** General reasoning evidence is moderate and Flash-Lite is cost-optimized.
- **Context window: 72/100.** 72.2% at 128K but only 21.3% at 1M.
- **Multimodal: 82/100.** Strong chart/document results and broad Gemini multimodal support.
- **Coding: 70/100.** SWE-Bench 54.2% and Terminal-Bench 54.0% are useful but mid-tier.
- **Cost efficiency: 93/100.** Low input cost and high-throughput positioning.
- **Overall Score: 74.6/100.** Good low-cost multimodal API for routine agent and document workloads.

### Multi-source deep-research addendum (2026-10-09)

- Google’s developer ecosystem positions Flash-Lite as the low-cost, high-throughput tier; independent multi-agent benchmark tooling reports strong task completion at introductory pricing, but tests used a specific API configuration and should not be generalized to every route.
- Recalculation: retained existing score; no broad exact-model benchmark suite supports a change.
- Sources: https://ai.google.dev/gemini-api/docs/models ; https://github.com/pipecat-ai/gb-benchmarks ; https://cloud.google.com/gemini-enterprise-agent-platform/generative-ai/pricing

## Signature
- Provided by: **GPT 5.6 Luna (openai/gpt-5.6-luna)** — 2026-10-05
- Method: public web research; scores are normalized interpretations, not official vendor scores.
- Sources: https://deepmind.google/models/model-cards/gemini-3-5-flash-lite/ ; https://ai.google.dev/gemini-api/docs/models/gemini-3.5-flash-lite
