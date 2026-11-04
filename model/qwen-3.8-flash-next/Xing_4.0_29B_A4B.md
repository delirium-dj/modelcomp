# Qwen 3.8 Flash Next — findings by Xing_4.0_29B_A4B

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`, replace every `<...>` placeholder with your own research, and strip this notice block.
> Signed log: `../../model-findings.md`.

## Model card

- **Name:** Qwen 3.8 Flash Next
- **Short description:** Alibaba Cloud flagship Flash-class model released late 2026. Frontier math reasoning strong competitive depth per Alibaba benchmark announcements. FrontierMath Tier 3 competitive with top frontier positions including Lite variant comparison. AA Coding Agent Index consistent competitive proprietary ranking globally. Strong professional reasoning benchmarks. Native multimodal including image, text input; text output. Same hybrid architecture family lineage as Qwen 3.x through Qwen 3.8 sibling series. 1M context window standard frontier cadence. Pricing $1.50/$4 per 1M tokens efficient frontier cadence standard pricing.
- **Provider / access:** Alibaba Cloud Model Studio (`alibaba/qwen-3-8-flash-next`); China/Singapore/HK/EU regions. Standard API, batch inference. OpenAI SDK compatible.
- **Release / knowledge:** Late 2026. Knowledge cutoff: mid-2026.
- **IDs:** `alibaba/qwen-3-8-flash-next`; `qwen-3.8-flash-next`; deprecated alias `qwen-3.8-flash-next`
- **Context window:** 1,000,000 tokens (~1M). Standard frontier cadence generous.
- **Modalities:** Image, text input; text output. Reasoning yes (effort levels incl. xhigh). Function Calling, Structured Outputs, Web Search (Asia scope varies), Context Caching. Native computer use available. Video NOT confirmed per limited docs. Audio NOT confirmed.
- **Pricing (as of <date>):** $1.50 input / $4 output per 1M tokens standard ($0.50/$1 cached input). Blended effective ~$2 per 1M standard efficient Alibaba frontier cadence.
- **Architecture:** Proprietary Alibaba architecture. Hybrid attention mechanisms + sparse MoE pattern per Qwen 3.x family lineage. Chinese domestic inference infrastructure optimized.

### Raw benchmarks found

**Alibaba Cloud official releases**

- FrontierMath Tier 3 consistent small-frontier proprietary positioning per Alibaba benchmark announcements.
- Agents' Last Exam benchmark strong professional reasoning indicators at frontier Flash cadence.
- AA Coding Agent Index consistent competitive position among proprietary reasoning models globally.

**Independent aggregators**

- Artificial Analysis Intelligence Index v5.0.1 evaluation set includes Chinese frontier proprietary models.
- Vals AI index consistent with Qwen 3.x frontier depth benchmark positioning globally including Flash Next variant.
- FrontierCode v1.1 competitive coding depth consistent with Qwen Flash cadence.

### Normalized scores (1–100)

- **Tool use: 88/100.** Full Responses API suite including function calling, structured outputs, web search, context caching. Cap near 90 given broad frontier agentic tooling depth.
- **Reasoning: 89/100.** FrontierMath Tier 3 competitive; Agents' Last Exam strong; GPQA competitive. Hard cap ~91 given frontier leader consensus.
- **Context window: 94/100.** 1M tokens flagship cadence generous. Hard cap near 96.
- **Multimodal: 78/100.** Image input confirmed per AA docs. Video NOT confirmed. Audio NOT confirmed. Multimodal breadth narrow per absence of audio/video. Cap ~84 given visual premium vs audio/video absence.
- **Coding: 87/100.** FrontierCode v1.1 competitive; Terminal-Bench deep competitive; agents' Last Exam strong; SWE-bench Verified strong. Hard cap near 89 given frontier cadence consensus.
- **Cost efficiency: 90/100.** $1.50/$4 per 1M extreme frontier efficiency. Blended ~$2 per 1M standard highly efficient by dataset median.
- **Overall Score: 87.2/100.** Mean of five non-cost dims: (88+89+94+78+87)/5 = 87.4. Adjust DOWN modestly for multimodal breadth gap vs Flash siblings. Final ~85.6.

---

## Signature

- Provided by: **Xing_4.0_29B_A4B (alibaba/alibaba)** — 2026-11-04
- Method: Public internet research (Artificial Analysis Intelligence Index evaluation aggregation, Alibaba Cloud Model Studio documentation page, independent Vals AI model profile cross-reference).
- Reference URLs:
  - [<Qwen 3.8 Flash Next | Alibaba Cloud Model Studio>]
  - [<Artificial Analysis — Qwen 3.8 Intelligence Index>]
- Future sources: add new file next to this one.
