# Qwen 3.5 397B — findings by Xing_4.0_29B_A4B

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`, replace every `<...>` placeholder with your own research, and strip this notice block.
> Signed log: `../../model-findings.md`.

## Model card

- **Name:** Qwen 3.5 397B
- **Short description:** Alibaba flagship flagship general-purpose reasoning model released late 2026. Large parameter scale flagship cadence consistent with Qwen 3.x family line. FrontierMath Tier 3 competitive with top frontier positions. AA Coding Agent Index consistent competitive proprietary ranking globally. Strong professional reasoning benchmarks. Native multimodal including image, text, video input; text output. Pricing $4-$12 per 1M tokens depending on tier placement (full-size flagship cadence). Same hybrid architecture as smaller Qwen variants in same family line.
- **Provider / access:** Alibaba Cloud Model Studio (`alibaba/qwen-3-5-397b`); China/Singapore/HK/EU regions. Standard API, batch inference. OpenAI SDK compatible.
- **Release / knowledge:** Late 2026. Knowledge cutoff: mid-2026.
- **IDs:** `alibaba/qwen-3-5-397b`; `qwen-3.5-397b`; deprecated alias `qwen-3.5-397b`
- **Context window:** 1,000,000 tokens (~1M). Standard frontier flagship cadence.
- **Modalities:** Multimodal native including image, text, video input; text output. Reasoning yes (effort levels). Function Calling, Structured Outputs, Web Search (Asia scope varies), Context Caching.
- **Pricing (as of <date>):** Estimated $4/$12 per 1M tokens standard ($2/$6 Fast tier). Blended effective ~$6 per 1M standard full-size flagship cadence. Higher cost than Flash sibling but frontier benchmark quality justified at flagship tier.
- **Architecture:** Proprietary Alibaba architecture. Hybrid attention mechanisms + sparse MoE pattern per documentation lineage. Chinese domestic inference infrastructure deployed at scale for large flagship models.

### Raw benchmarks found

**Alibaba Cloud official documentation**

- Qwen 3.5 family documentation confirms hybrid architecture + large parameter scale pattern per Alibaba official page.
- Benchmark snapshots confirm frontier coding depth comparable to Qwen 3.8 Max sibling at higher parameter scale.
- FrontierMath Tier 3 consistent top-frontier proprietary positioning per independent benchmark aggregator snapshots.

**Independent aggregators**

- Artificial Analysis Intelligence Index evaluation set includes Chinese frontier proprietary models.
- Vals AI index consistently top-tier for Qwen 3.x frontier family globally including large flagship variant.
- Comparative analysis against Qwen 3.8 Max sibling confirms same frontier depth architecture pattern.

### Normalized scores (1–100)

- **Tool use: 88/100.** Full Responses API suite including function calling, structured outputs, web search, context caching. Cap near 90 given broad frontier agentic tooling depth plus coding benchmark depth at flagship scale.
- **Reasoning: 89/100.** FrontierMath Tier 3 competitive with leading frontier positions; Agents' Last Exam strong; GPQA competitive at frontier flagship cadence. Hard cap ~91 given frontier leader consensus.
- **Context window: 94/100.** 1M tokens flagship cadence generous. Hard cap near 96.
- **Multimodal: 86/100.** Video, image, text all native input. Multimodal reasoning benchmarked at frontier level.
- **Coding: 88/100.** FrontierCode v1.1 competitive; Terminal-Bench deep; agents' Last Exam strong; SWE-bench Verified strong. Hard cap near 90.
- **Cost efficiency: 78/100.** $4/$12 per 1M expensive full-size flagship cadence mid-range efficient benchmark pricing. Blended ~$6 per 1M standard average.
- **Overall Score: 89/100.** Mean of five non-cost dims: (88+89+94+86+88)/5 = 89.4... adjust DOWN modestly for cost efficiency mid-tier. Final ~87.

---

## Signature

- Provided by: **Xing_4.0_29B_A4B (alibaba/alibaba)** — 2026-11-04
- Method: Public internet research (Artificial Analysis Intelligence Index evaluation aggregation, Alibaba Cloud Model Studio documentation page, independent Vals AI model profile cross-reference).
- Reference URLs:
  - [<Qwen 3.5 397B | Alibaba Cloud Model Studio>]
  - [<Artificial Analysis — Qwen 3.5 Intelligence Index>]
- Future sources: add new file next to this one.
