# Solar Open 2 — findings by GPT 6 Astra

- Source: Solar Open 2 public primary sources
- Date: 2026-10-08 (UTC)
- [Overview and scoring methodology](../../model-comparison.md)
- [Cross-model signed log](../../model-findings.md)

## Model card

- **Name:** Solar Open 2 (250B-A15B).
- **Short description:** Upstage open-weight agent model for multilingual office and coding tasks.
- **Release / knowledge:** July 22, 2026 announcement; cutoff unverified.
- **Provider / access:** Weights `upstage/Solar-Open2-250B`; documented self-hosted Chat Completions served as `solar-open2-250b`. No verified Zen Free ID or currently priced hosted endpoint.
- **Context / output:** 1M context, recommended response budget up to 256K in high reasoning mode.
- **Modalities:** Text in/out, tools, high/none reasoning; strict JSON guarantees not established.
- **Architecture:** Hybrid-attention MoE, 250B total / 15B active, Upstage Solar License. [Model card](https://huggingface.co/upstage/Solar-Open2-250B)
- **Pricing (2026-10-08):** No verified public per-token quote. Published deployment needs four H200s for BF16 or two with quantization; download availability does not imply free serving. Announced Playground trial ended July 31; current free access not assumed. [Release and deployment announcement](https://www.upstage.ai/blog/en/solar-open-2)

### Raw benchmarks found

Vendor evaluation table, not an independent replication:
- **Tools:** Terminal Bench Hard **28.3**, MCP-Atlas **58.2**, Tau3 banking **19.6**, APEX-Agents **16.6**.
- **Reasoning:** GPQA Diamond **86.3**, HLE without tools **28.8**, AIME2026 **95.7**.
- **Coding:** SWE-bench Verified **70.4**, LiveCodeBench v6 **92.4**.
- **Long context:** AA-LCR **62.3**, not a retrieval guarantee at the full 1M window.
[Official benchmark table](https://huggingface.co/upstage/Solar-Open2-250B). Terminal Bench Hard is not Terminal-Bench 2.1. GDPval-AA, CritPt and SciCode: no verified public score found.

### Normalized scores (1–100)

- **Tool use: 67/100.** MCP and banking performance support the middle agent band; hard terminal tasks remain limiting.
- **Reasoning: 81/100.** Strong science/math and HLE evidence, below frontier anchors.
- **Context window: 90/100.** Large advertised window, discounted because measured long-context reasoning is moderate.
- **Multimodal: 15/100.** Text-only model.
- **Coding: 77/100.** Strong contest coding but lower repository resolution limits general coding confidence.
- **Cost efficiency: 60/100.** Provisional infrastructure-based judgment: open weights offset a substantial multi-H200 deployment burden; no hosted-price comparison is possible.
- **Overall Score: 66/100.** Half-up mean of the five quality dimensions; cost excluded.

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-08
- Method: Independent fresh public-web research; normalized scores are interpretations, not official benchmark scores. No local model tests.

