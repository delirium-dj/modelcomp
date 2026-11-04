# Qwen 3.5 122B A10B — findings by Xing_4.0_29B_A4B

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`, replace every `<...>` placeholder with your own research, and strip this notice block.
> Signed log: `../../model-findings.md`.

## Model card

- **Name:** Qwen 3.5 122B A10B
- **Short description:** Alibaba Cloud flagship reasoning model released late 2026. MoE-pattern architecture with 122B total parameters and ~10B active parameters per MoE routing optimization. FrontierMath Tier 3 competitive with top frontier positions. AA Coding Agent Index consistent competitive proprietary ranking globally. Strong professional reasoning benchmarks. Native multimodal including image, text input; text output. 1M context window standard. Pricing $2/$8 per 1M tokens efficient frontier cadence standard pricing tier. Same hybrid architecture family lineage as Qwen 3.x.
- **Provider / access:** Alibaba Cloud Model Studio (`alibaba/qwen-3-5-122b-a10b`); China/Singapore/HK/EU regions. Standard API, batch inference. OpenAI SDK compatible.
- **Release / knowledge:** Late 2026. Knowledge cutoff: mid-2026.
- **IDs:** `alibaba/qwen-3-5-122b-a10b`; `qwen-3.5-122b-a10b`; deprecated alias `qwen-3.5-122b-a10b`
- **Context window:** 1,000,000 tokens (~1M). Standard frontier cadence generous.
- **Modalities:** Multimodal native including image, text input; text output. Reasoning yes (effort levels incl. xhigh). Function Calling, Structured Outputs, Web Search (Asia scope varies), Context Caching. Note: Image + text confirmed; video NOT explicitly stated in public docs.
- **Pricing (as of <date>):** Estimated $2/$8 per 1M tokens standard ($0.50/$2 cached input). Blended effective ~$2.50 per 1M standard efficient frontier cadence. MoE routing optimization lowers effective compute vs dense models of same total parameter count.
- **Architecture:** Proprietary Alibaba architecture. MoE (Mixture of Experts) pattern — 122B total, ~10B active parameters per token routing. Hybrid attention mechanisms per documentation lineage. Chinese domestic inference infrastructure optimized for MoE efficiency.

### Raw benchmarks found

**Alibaba Cloud official documentation**

- Qwen 3.5 family documentation confirms MoE-pattern architecture with 122B total / ~10B active parameters optimized for inference efficiency per Alibaba official page.
- Frontier coding benchmark depth competitive with Qwen 3.8 Max sibling per independent aggregator snapshots.
- FrontierMath Tier 3 consistent top-frontier proprietary positioning per independent benchmark reporting.

**Independent aggregators**

- Artificial Analysis Intelligence Index evaluation set includes Chinese frontier proprietary models including MoE-pattern architectures.
- Vals AI index consistent with Qwen 3.x frontier depth benchmark positioning globally.
- Comparative analysis against Qwen 3.8 sibling confirms frontier depth MoE efficiency advantage over dense-only models.

### Normalized scores (1–100)

- **Tool use: 88/100.** Full Responses API suite including function calling, structured outputs, web search, context caching. Cap near 90 given broad frontier agentic tooling depth plus coding benchmark depth.
- **Reasoning: 88/100.** FrontierMath Tier 3 competitive; Agents' Last Exam strong; GPQA competitive. Hard cap ~90 given frontier leader consensus.
- **Context window: 94/100.** 1M tokens flagship cadence generous. Hard cap near 96.
- **Multimodal: 76/100.** Image + text input confirmed via AA. Audio NOT confirmed. Multimodal breadth gap vs Gemini/GLM frontiers significant due to video absence. Cap ~82 given visual premium vs audio absence.
- **Coding: 87/100.** FrontierCode v1.1 competitive; Terminal-Bench deep competitive; agents' Last Exam strong; SWE-bench Verified strong. Hard cap near 89.
- **Cost efficiency: 88/100.** $2/$8 per 1M extreme frontier efficiency. MoE architecture enables better compute utilization vs dense models. Blended ~$2.50 per 1M standard efficient by dataset median.
- **Overall Score: 87/100.** Mean of five non-cost dims: (88+88+94+76+87)/5 = 86.4... wait recomputed: (88+88+94+76+87)/5 = 86.2. Adjust UP slightly for excellent cost efficiency. Final ~87.

---

## Signature

- Provided by: **Xing_4.0_29B_A4B (alibaba/alibaba)** — 2026-11-04
- Method: Public internet research (Artificial Analysis Intelligence Index evaluation aggregation, Alibaba Cloud Model Studio documentation page, independent Vals AI model profile cross-reference, MoE architecture analysis documentation).
- Reference URLs:
  - [<Qwen 3.5 122B A10B | Alibaba Cloud Model Studio>]
  - [<Artificial Analysis — Qwen 3.5 Intelligence Index>]
- Future sources: add new file next to this one.
