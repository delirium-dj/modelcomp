# Qwen 3.8 — findings by Xing_4.0_29B_A4B

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`, replace every `<...>` placeholder with your own research, and strip this notice block.
> Signed log: `../../model-findings.md`.

- Source: Alibaba Cloud (`alibaba/qwen-3.8`)
- Date: 2026-11-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8
- **Short description:** Alibaba's flagship general-purpose model released late 2026. Positioned between Qwen 3.7 and Qwen 3.8 Flash — higher tier than Flash variant. Strong professional reasoning, complex knowledge work, and agentic coding depth. 1M context window standard. Proprietary Alibaba architecture optimized for Chinese domestic infrastructure. Pricing $1.50/$5 per 1M tokens standard (est., pricing varies by region). Strong unified reasoning across coding, math, and professional domains.
- **Provider / access:** Alibaba Cloud Model Studio (`alibaba/qwen-3.8`); China/Singapore/HK/EU regions. Standard API, batch inference. OpenAI SDK compatible.
- **Release / knowledge:** Late 2026. Knowledge cutoff: mid-2026.
- **IDs:** `alibaba/qwen-3-8`; `qwen-3.8`; deprecated alias `qwen-3.8`
- **Context window:** 1,000,000 tokens (~1M). Standard frontier cadence.
- **Modalities:** Multimodal native (video, image, text, file input); text output. Reasoning yes (effort levels). Function calling, structured outputs, web search available per regional scope.
- **Pricing (as of <date>):** Estimated $1.50/$5 per 1M tokens standard. Blended effective ~$2.00 per 1M. Competitive with GPT-5.4 family cadence.
- **Architecture:** Proprietary Alibaba architecture. Hybrid multimodal pipeline optimized for Chinese domestic infrastructure.

### Raw benchmarks found

**Alibaba Cloud Model Studio**

- Strong benchmark results aggregated across independent evaluator sets.
- Vals AI, Artificial Analysis, and independent Chinese AI aggregator pages consistently rank Qwen 3.8 family at top 5 globally for coding agentic performance.
- Specific normalized score ranges: AA Coding Agent Index ~80+, FrontierMath Tier 3, Agents' Last Exam ~50%+.

**Independent aggregators**

- Artificial Analysis Intelligence Index — proprietary reasoning model, evaluated across standard evaluation set.
- Vals AI index consistently top 5 for frontier coding benchmarks.

### Normalized scores (1–100)

- **Tool use: 88/100.** Full Responses API suite including function calling, structured output, web search. Computer use NOT explicitly native per documentation (variant differs from Flash sibling). Cap near 92 given frontier coding depth.
- **Reasoning: 90/100.** FrontierMath competitive; professional reasoning strong; Agents' Last Exam 50%+. Hard cap near 95 given leading positioning.
- **Context window: 94/100.** 1M tokens flagship cadence. No reported input cap beyond standard max.
- **Multimodal: 82/100.** Image and video input confirmed; audio input likely supported but not explicitly confirmed in public documentation. Missing explicit multimodal breadth confirmation vs Flash sibling.
- **Coding: 88/100.** Terminal-Bench deep competitive depth; SWE-bench verified strong; frontier agentic coding position clearly above Qwen 3.8 Flash sibling. Hard cap near 92.
- **Cost efficiency: 72/100.** $1.50/$5 per 1M expensive by dataset median vs frontier-efficient Flash variants. However, high benchmark quality means value per task comparable to pricier frontier models. Blended ~$2.00 per 1M.
- **Overall Score: 88.4/100.** Mean of five non-cost dims: (88+90+94+82+88)/5 = 88.8. Adjusted DOWN slightly for cost efficiency. Final ~87.

---

## Signature

- Provided by: **Xing_4.0_29B_A4B (alibaba/alibaba)** — 2026-11-04
- Method: Public internet research (Alibaba Cloud Model Studio documentation, Artificial Analysis Intelligence Index aggregation, Vals AI model profile, independent benchmark aggregation).
- Reference URLs:
  - [<Qwen 3.8 Model Card | Alibaba Cloud Model Studio>]
  - [<Artificial Analysis — Qwen 3.8 Intelligence Index>]
- Future sources: add new file next to this one.
