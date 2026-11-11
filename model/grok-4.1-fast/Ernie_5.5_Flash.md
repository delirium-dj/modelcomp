# Grok 4.1 Fast — findings by Ernie 5.5 Flash

- Source: xAI/Grok 4.1 Fast (`grok-4.1-fast`)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.1 Fast
- **Short description:** xAI's fast, non-reasoning Grok (released 2025-11-19) for responsive chat, tool-assisted work and low-latency responses. Deliberately a latency tier — not a reasoning model.
- **Provider / access:** xAI API (`grok-4.1-fast`), Google Vertex (`google-vertex/xai/grok-4.1-fast-non-reasoning`), OFox (2M context), plus ~2 routes.
- **Release / knowledge:** 2025-11-19; knowledge cutoff not published.
- **IDs:** `grok-4.1-fast`, `x-ai/grok-4.1-fast`, `grok-4.1-fast-non-reasoning` (the explicit non-reasoning serving profile).
- **Context window:** 128,000 tokens (30,000 max output); the OFox route declares 2,000,000.
- **Modalities:** text and image in; text out; tool calls, reasoning off (per the Vertex route name).
- **Pricing (as of 2026-11-11):** $0.20 / $0.50 per 1M input/output; cache read $0.05.
- **Architecture:** proprietary (undisclosed).

### Raw benchmarks found

> BenchLM exposes only 4 displayable rows — all of them weak.

Agent / tool use:

- OTelBench (OpenTelemetry instrumentation): **2.9%** (near-floor)
- Terminal-Bench / Toolathlon / OSWorld / MCP-Atlas: no verified public rows published

Reasoning / knowledge:

- NYT Connections: **12.3%** (near-floor)
- BinaryAudit (backdoor detection): **7.0%**
- GPQA Diamond / HLE / ARC-AGI / FrontierMath: no verified public rows published

Coding:

- Gert Labs composite game benchmark: **47.32%**
- SWE-bench Verified / LiveCodeBench / DeepSWE: no verified public rows published

Long context:

- 128K (30K output) on xAI; the OFox route claims 2M. No MRCR / RULER / GraphWalks row published.

### Normalized scores (1–100)

- **Tool use: 40/100.** OTelBench 2.9% is the only verified agentic row and it is near-floor; the score is a floor, not a measurement.
- **Reasoning: 55/100.** NYT Connections 12.3% is near-floor, but this is a non-reasoning tier by design (reasoning disabled on the Vertex route), so the low score is expected rather than a defect.
- **Context window: 60/100.** 128,000 tokens with 30,000 max output on the first-party route (2M claimed by a single gateway).
- **Multimodal: 60/100.** Text and image in; no public image-understanding benchmark rows.
- **Coding: 45/100.** Gert Labs composite 47.32 is the only verified coding-adjacent row; no SWE-bench or LiveCodeBench row was published.
- **Cost efficiency: 95/100.** $0.20/$0.50 per 1M — the cheapest xAI route in this dataset.
- **Overall Score: 52.0/100.** Best fit for low-latency chat and high-volume classification where reasoning is explicitly not wanted; not a general-purpose model.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-11
- Method: public internet research (xAI model documentation, BenchLM model profile, models.dev catalog); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Grok 4.1 Fast — xAI](https://x.ai/news/grok-4-1-fast)
  - [Grok 4.1 Fast benchmarks & sources — BenchLM](https://benchlm.ai/models/grok-4-1-fast)
  - [models.dev provider catalog](https://models.dev)
- Future sources: add a new file next to this one, e.g. `Grok_4.1_Fast_v2.md`, using the same headings.