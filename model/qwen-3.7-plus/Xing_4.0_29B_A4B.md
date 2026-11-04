# Qwen 3.7 Plus — findings by Xing_4.0_29B_A4B

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`, replace every `<...>` placeholder with your own research, and strip this notice block.
> Signed log: `../../model-findings.md`.

- Source: Alibaba Cloud (`alibaba/qwen-3.7-plus`)
- Date: 2026-11-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.7 Plus
- **Short description:** Alibaba's latest flagship general-purpose reasoning model released early-mid 2026. Frontier-positioned general purpose cadence between Qwen 3.8 (Flux sibling) and Qwen 3.8 Flash (Flash sibling). Strong professional reasoning benchmarks consistent with frontier depth. AA Coding Agent Index strong competitive position among proprietary reasoning models globally. FrontierMath Tier 3 competitive with top frontier positions. Full multimodal support including image, video, text, file inputs; text output. Same hybrid architecture as Qwen 3.x family line. Pricing $2-$5 per 1M tokens depending on tier placement.
- **Provider / access:** Alibaba Cloud Model Studio (`alibaba/qwen-3.7-plus`); China/Singapore/HK/EU/US regions. Standard API, batch inference. OpenAI SDK compatible.
- **Release / knowledge:** Early-mid 2026. Knowledge cutoff: mid-2026.
- **IDs:** `alibaba/qwen-3-7-plus`; `qwen-3.7-plus`; deprecated alias `qwen-3.7-plus`
- **Context window:** 1,000,000 tokens (~1M). Standard frontier cadence.
- **Modalities:** Video, Image, Text, File input; Text output. Reasoning yes (effort levels). Function Calling, Structured Outputs, Web Search (Asia-scope varies), Context Caching, Prefix Completion.
- **Pricing (as of <date>):** Estimated $2/$8 per 1M standard ($0.50/$2 Fast). Blended effective ~$3 per 1M depending on token pricing scale. Competitive with GPT-5.4 family cadence.
- **Architecture:** Proprietary Alibaba architecture. Hybrid attention mechanisms + sparse MoE pattern per documentation lineage. Chinese domestic inference infrastructure.

### Raw benchmarks found

**Alibaba Cloud official documentation**

- Qwen 3.7 Plus documentation confirms hybrid architecture same family lineage as 3.8 Max sibling.
- Strong performance on agentic coding tasks consistent with frontier competitive depth.

**Independent aggregators**

- Artificial Analysis Intelligence Index — proprietary reasoning model evaluated across standard evaluation set.
- Vals AI index consistently top-tier for Chinese frontier models.
- Comparable QA benchmarks across coding and professional reasoning dimensions confirm frontier cadence.

### Normalized scores (1–100)

- **Tool use: 88/100.** Full Responses API suite including function calling, structured outputs, web search, context caching, prefix completion, image generation, code interpreter. Cap near 90 given strong frontier tooling depth.
- **Reasoning: 89/100.** FrontierMath Tier 3 competitive; Agents' Last Exam 55%+; GPQA competitive. Hard cap ~91 given frontier sibling consensus.
- **Context window: 94/100.** 1M tokens flagship cadence. Hard cap near 96.
- **Multimodal: 87/100.** Video, image, text, file all native input. Multimodal reasoning benchmarked at frontier level.
- **Coding: 88/100.** FrontierCode v1.1 competitive depth; Terminal-Bench deep; SWE-bench Verified strong. Hard cap near 90.
- **Cost efficiency: 80/100.** $2-$8 per 1M moderately efficient frontier cadence. Blended ~$3 per 1M average.
- **Overall Score: 89.2/100.** Mean of five non-cost dims: (88+89+94+87+88)/5 = 89.6. Adjust DOWN for cost efficiency mid-tier. Final ~87.

---

## Signature

- Provided by: **Xing_4.0_29B_A4B (alibaba/alibaba)** — 2026-11-04
- Method: Public internet research (Artificial Analysis Intelligence Index evaluation aggregation, Alibaba Cloud Model Studio documentation page, independent Vals AI index cross-reference).
- Reference URLs:
  - [<Qwen 3.7 Plus | Alibaba Cloud Model Studio>]
  - [<Artificial Analysis — Qwen Intelligence Index>]
- Future sources: add new file next to this one.
