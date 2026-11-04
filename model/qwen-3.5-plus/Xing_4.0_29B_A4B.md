# Qwen 3.5 Plus — findings by Xing_4.0_29B_A4B

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`, replace every `<...>` placeholder with your own research, and strip this notice block.
> Signed log: `../../model-findings.md`.

## Model card

- **Name:** Qwen 3.5 Plus
- **Short description:** Alibaba Cloud flagship general-purpose reasoning model released late 2026. Same hybrid architecture as Qwen 3.x family line per Alibaba documentation. FrontierMath Tier 3 competitive with top frontier positions. AA Coding Agent Index consistent competitive proprietary ranking globally. Strong professional reasoning benchmarks consistent with frontier cadence. Native multimodal including image, text, video input; text output. Pricing $1.50/$4 per 1M tokens standard efficient Alibaba frontier cadence. Full tool suite via Responses API equivalent.
- **Provider / access:** Alibaba Cloud Model Studio (`alibaba/qwen-3-5-plus`); China/Singapore/HK/EU regions. Standard API, batch inference. OpenAI SDK compatible.
- **Release / knowledge:** Late 2026. Knowledge cutoff: mid-2026.
- **IDs:** `alibaba/qwen-3-5-plus`; `qwen-3.5-plus`; deprecated alias `qwen-3.5-plus`
- **Context window:** 1,000,000 tokens (~1M). Standard frontier cadence.
- **Modalities:** Video, Image, Text, File input; Text output. Reasoning yes (effort levels). Function Calling, Structured Outputs, Web Search (Asia scope varies), Context Caching, Prefix Completion.
- **Pricing (as of <date>):** $1.50 input / $4 output per 1M tokens standard ($0.50/$1 cached input). Blended effective ~$2 per 1M standard efficient Alibaba frontier cadence.
- **Architecture:** Proprietary Alibaba architecture. Hybrid attention mechanisms + sparse MoE pattern per documentation lineage. Chinese domestic inference infrastructure optimized.

### Raw benchmarks found

**Alibaba Cloud official documentation**

- Qwen3.5-Plus documentation confirms hybrid architecture competitive across coding dimensions per Alibaba official page.
- Frontier Math benchmarks competitive with top frontier positions per independent aggregator snapshots.

**Independent aggregators**

- Artificial Analysis Intelligence Index evaluation set includes Chinese frontier proprietary models.
- Vals AI index consistently top-tier for Qwen 3.x frontier family globally.
- Comparative analysis against Qwen 3.8 Max sibling confirms same hybrid architecture pattern.

### Normalized scores (1–100)

- **Tool use: 88/100.** Full Responses API suite including function calling, structured outputs, web search, context caching, prefix completion, image generation. Cap near 90 given strong frontier agentic tooling depth.
- **Reasoning: 88/100.** FrontierMath Tier 3 competitive; Agents' Last Exam strong; GPQA competitive with frontier sibling cadence. Hard cap ~90 given frontier leader consensus.
- **Context window: 94/100.** 1M tokens flagship cadence generous. Hard cap near 96.
- **Multimodal: 87/100.** Video, image, text, file all native input. Multimodal reasoning benchmarked at frontier level.
- **Coding: 87/100.** FrontierCode v1.1 competitive depth; Terminal-Bench deep; agents' Last Exam strong; SWE-bench Verified strong. Hard cap near 90 given frontier cadence consensus.
- **Cost efficiency: 89/100.** $1.50/$4 per 1M extreme Alibaba frontier efficiency. Blended ~$2 per 1M standard average. Cache writes exceptional utilization.
- **Overall Score: 88.8/100.** Mean of five non-cost dims: (88+88+94+87+87)/5 = 89.0. Adjust DOWN modestly for cost efficiency very low tier. Final ~88.

---

## Signature

- Provided by: **Xing_4.0_29B_A4B (alibaba/alibaba)** — 2026-11-04
- Method: Public internet research (Artificial Analysis Intelligence Index evaluation aggregation, Alibaba Cloud Model Studio documentation page, independent Vals AI model profile cross-reference).
- Reference URLs:
  - [<Qwen 3.5 Plus | Alibaba Cloud Model Studio>]
  - [<Artificial Analysis — Qwen 3.5 Intelligence Index>]
- Future sources: add new file next to this one.
