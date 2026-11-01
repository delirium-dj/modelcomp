# GLM 4.5 Flash — findings by GLM 5.3 Flash

- Source: Z.ai (`glm-4.5-flash`, free tier)
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-4.5-Flash
- **Short description:** Z.ai's permanent free tier of the GLM-4.5 generation: a lightweight MoE text model with dual thinking modes (interleaved thinking + instant response), tool calling and streaming, at $0/$0 — the free entry point for agent development on the Z.ai platform.
- **Provider / access:** Z.ai API `glm-4.5-flash` (`@ai-sdk/openai-compatible`, /paas/v4); BigModel (open.bigmodel.cn) free row; OpenCode Zen `opencode/glm-4.5-flash`; aggregators list ~$0.10/$0.10 on one paid router (Infron, 72h uptime 84.6%).
- **Release / knowledge:** GLM-4.5 generation era (July 2025 family); aggregator last-update markers 2025-07-28/2025-11-28; knowledge cutoff not published.
- **IDs:** `glm-4.5-flash` (Z.ai / BigModel); `zhipuai/glm-4.5-flash` (provider catalogues). MIT-licensed thinking base per aggregator notes; the Flash SKU itself is served hosted-only.
- **Context window:** 131,072 total (128K); max output 96K–98K generation (96K per vendor family table; 98,304 in provider catalogues; 32K max generation per one aggregator record).
- **Modalities:** Text in; text out. Thinking/non-thinking dual mode (`thinking.type` toggle, dynamic thinking default-on); native tool calling; streaming; prefix/session caching.
- **Pricing (as of 2026-11-01):** Free ($0.00/$0.00) on both Z.ai and BigModel official tables (still listed free per the official October 2026 pricing table, unlike GLM-4.6-Flash).
- **Architecture:** Lightweight distilled MoE member of the GLM-4.5 family (flagship 355B/32B-active, Air 106B/12B-active; Flash's exact parameter count not published in the surfaces found).

### Raw benchmarks found

(third-party aggregator table — AIBase claims model-card sourcing; treat as provisional, no independent lab row found)

- Math 500: **98.2**
- AIME: **91.0**
- MMLU Pro: **84.6**
- GPQA Diamond: **79.1**
- SciCode: **41.7**
- HLE: **14.4**

Family context (NOT this SKU's scores, labelled as such): the GLM-4.5 flagship ranked #2 globally on the vendor's 12-suite aggregate at launch; the series sits on the SWE-Bench-Verified Pareto frontier of performance-per-parameter. No Flash-specific SWE-bench/Terminal-Bench/τ-bench row was published by the vendor or any independent lab.

### Normalized scores (1–100)

- **Tool use: 62/100.** Verified capability surface (native tool calling, streaming, caching, dual-mode toggling) with the agent-generation lineage behind it; no published agentic harness row for this exact SKU.
- **Reasoning: 74/100.** Aggregator rows put it high for a free lightweight tier (GPQA 79.1, AIME 91, MMLU-Pro 84.6) — provisional single-aggregator provenance keeps the score conservative; HLE 14.4 is the small-active-count ceiling.
- **Context window: 58/100.** Verified 128K context with large 96K+ output allowance; no retrieval benchmark published.
- **Multimodal: 10/100.** Text-only — the GLM-4.5V line covers vision.
- **Coding: 58/100.** SciCode 41.7 (aggregator) plus the coding-trained family lineage; no SWE-bench-class row for the Flash SKU — scored on partial evidence.
- **Cost efficiency: 98/100.** Officially free on both official Z.ai surfaces indefinitely (not a promo), no card required on the international portal; one point off the floor for third-party routing limits/uptime dips.
- **Overall Score: 52/100.** Mean of the five quality dims (62+74+58+10+58)/5 = 52.4 → 52. Best fit: zero-cost agent development, reasoning prototyping and high-volume automation on the GLM-4.x line.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-11-01
- Method: Public internet research (Z.ai official docs + pricing, BigModel docs, provider catalogues, third-party aggregator benchmark table); scores are normalized 1–100 interpretations, not official vendor scores. Aggregator benchmark rows are labelled provisional — vendor publishes no Flash-specific table for this family.
- Reference URLs:
  - [Z.ai docs — GLM-4.5 family (Flash row: free, 128K/96K, dual thinking modes)](https://docs.z.ai/guides/llm/glm-4.5)
  - [BigModel docs — GLM-4.5-Flash page](https://docs.bigmodel.cn/cn/guide/models/text/glm-4.5)
  - [ModelsPedia — Z.ai provider catalogue (GLM-4.5-Flash $0.00/$0.00 row)](https://modelspedia.org/providers/zai)
  - [AIBase — GLM 4.5 Flash aggregated benchmark table (Math500 98.2, AIME 91, GPQA 79.1, SciCode 41.7, HLE 14.4)](https://model.aibase.com/tw/llm/text/1985662202056675329)
  - [Infron — GLM-4.5 Flash serving/uptime data (128K ctx, 96K out, router pricing)](https://infron.ai/models/z-ai/glm-4.5-flash/pricing)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
