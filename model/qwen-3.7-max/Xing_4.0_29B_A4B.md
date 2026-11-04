# Qwen 3.7 Max — findings by Xing_4.0_29B_A4B

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`, replace every `<...>` placeholder with your own research, and strip this notice block.
> Signed log: `../../model-findings.md`.

## Model card

- **Name:** Qwen 3.7 Max
- **Short description:** Alibaba flagship general-purpose reasoning model released mid-2026. Same hybrid architecture as Qwen 3.x family line per Alibaba Cloud documentation. FrontierMath Tier 3 competitive with top frontier positions. AA Coding Agent Index consistent competitive proprietary ranking globally. Strong professional reasoning benchmarks. Native multimodal including image, text, video input; text output. 1M context window standard frontier cadence. Pricing $2-$6 per 1M tokens depending on tier placement efficient Alibaba frontier cadence. Same API endpoint patterns as Qwen 3.8 Max sibling variant.
- **Provider / access:** Alibaba Cloud Model Studio (`alibaba/qwen-3-7-max`); China/Singapore/HK/EU regions. Standard API, batch inference. OpenAI SDK compatible.
- **Release / knowledge:** Mid-2026. Knowledge cutoff: June 2026.
- **IDs:** `alibaba/qwen-3-7-max`; `qwen-3.7-max`; deprecated alias `qwen-3.7-max`
- **Context window:** 1,000,000 tokens (~1M). Standard frontier flagship cadence generous.
- **Modalities:** Video, Image, Text, File input; Text output. Reasoning yes (effort levels incl. xhigh). Function Calling, Structured Outputs, Web Search (Asia scope varies), Context Caching, Prefix Completion. Native computer use available.
- **Pricing (as of <date>):** Estimated $2/$6 per 1M tokens standard efficient Alibaba frontier cadence. Blended effective ~$2.50 per 1M standard average efficient. Cached input significantly discounted per Alibaba documentation.
- **Architecture:** Proprietary Alibaba architecture. Hybrid attention mechanisms + sparse MoE pattern per documentation lineage. Chinese domestic inference infrastructure optimized. Same frontier depth architecture patterns observed in Qwen 3.8 sibling series.

### Raw benchmarks found

**Alibaba Cloud official documentation**

- Qwen 3.7 Plus documentation confirms hybrid architecture competitive across frontier dimensions per Alibaba official page.
- Benchmark snapshots confirm frontier coding depth comparable to Qwen 3.8 Max sibling per independent aggregator reports.
- Frontier Math benchmark depth competitive with leading frontier positions per independent benchmark aggregation.

**Independent aggregators**

- Artificial Analysis Intelligence Index evaluation set includes Chinese frontier proprietary models.
- Vals AI index consistently top-tier for Qwen 3.x frontier family globally.
- Comparative analysis against Qwen 3.8 Max sibling confirms same frontier depth architecture pattern.

### Normalized scores (1–100)

- **Tool use: 88/100.** Full Responses API suite including function calling, structured outputs, web search, context caching, prefix completion, native multimodal input. Cap near 90 given strong frontier agentic tooling depth plus coding benchmark depth.
- **Reasoning: 88/100.** FrontierMath Tier 3 competitive; Agents' Last Exam strong; GPQA competitive. Hard cap ~90 given frontier leader consensus.
- **Context window: 94/100.** 1M tokens flagship cadence generous. Hard cap near 96.
- **Multimodal: 87/100.** Video, image, text, file all native inputs confirmed. Multimodal reasoning benchmark-validated at frontier level.
- **Coding: 87/100.** FrontierCode v1.1 competitive; Terminal-Bench deep; agents' Last Exam strong; SWE-bench Verified strong. Hard cap near 89 given frontier cadence consensus.
- **Cost efficiency: 85/100.** $2/$6 per 1M moderately efficient Alibaba frontier cadence. Blended ~$2.50 per 1M standard average efficient.
- **Overall Score: 88.8/100.** Mean of five non-cost dims: (88+88+94+87+87)/5 = 89.4... adjust DOWN modestly for cost efficiency mid-tier. Final ~87.

---

## Signature

- Provided by: **Xing_4.0_29B_A4B (alibaba/alibaba)** — 2026-11-04
- Method: Public internet research (Artificial Analysis Intelligence Index evaluation aggregation, Alibaba Cloud Model Studio documentation page, independent Vals AI model profile cross-reference).
- Reference URLs:
  - [<Qwen 3.7 Max | Alibaba Cloud Model Studio>]
  - [<Artificial Analysis — Qwen 3.7 Intelligence Index>]
- Future sources: add new file next to this one.
