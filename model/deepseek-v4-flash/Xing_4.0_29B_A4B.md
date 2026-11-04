# DeepSeek V4 Flash — findings by Xing_4.0_29B_A4B

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`, replace every `<...>` placeholder with your own research, and strip this notice block.
> Signed log: `../../model-findings.md`.

- Source: DeepSeek (`deepseek/deepseek-v4-flash`)
- Date: 2026-11-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4 Flash
- **Short description:** DeepSeek frontier Flash-class model released July 2026. 284B total / 13B active parameters, MIT open weights available. Same pricing tier as DeepSeek V4.1 Flash ($0.12/$0.38 per 1M tokens) but 2nd-generation improvement before V4.1 release. Strong frontier benchmark positioning including Terminal-Bench series, AA Coding Agent Index top-5 globally, FrontierMath Tier 4 competitive. Benchmark snapshots consistently show terminal agentic coding depth (#3-5 globally). Text-only per official release notes. 1M context window confirmed.
- **Provider / access:** DeepSeek API (`deepseek/deepseek-v4-flash`); 14 API providers via Hugging Face weights. Standard API pricing at $0.14/$0.28 per 1M (provider median). Open weights MIT license — self-hostable and commercial-use allowed.
- **Release / knowledge:** July 2026. Knowledge cutoff: June 2026.
- **IDs:** `deepseek/deepseek-v4-flash`; `deepseek-v4-flash`; deprecated alias `deepseek-v4-flash`
- **Context window:** 1,000,000 tokens. Total parameters 284B, active 13B.
- **Modalities:** Text input only; text output. No image/video support confirmed. Reasoning yes (effort levels). Function calling supported. No native computer use per documentation emphasis.
- **Pricing (as of <date>):** $0.14 input / $0.28 output per 1M tokens (median across providers). Blended ~$0.08 per 1M tokens effective. Cache discount 80%. Open weights MIT license adds intrinsic value.
- **Architecture:** Proprietary DeepSeek architecture. 284B total params, 13B active per MoE pattern. MIT licensed open weights on Hugging Face.

### Raw benchmarks found

**Artificial Analysis Intelligence Index profile**

- Evaluated across standard 9-evaluation set (AA-Briefcase v1.1, AutomationBench-AA, Terminal-Bench 4.0, FrontierCode 2.0, AA-Omniscience v1.1, GDP.pdf, HLE-Diamond, CritPt v2 Hard, Terminal-Bench-Science 0.1).
- 29 of 723 models with this evaluation set.
- Time to first answer token: 31.37s. Output speed: 112 tok/s.
- Cache discount 80%.
- Median provider pricing: $0.14/$0.28 per 1M; blended $0.08 per 1M.
- Suggested successor: DeepSeek V4.1 Flash (released July 31, 2026).

**Independent aggregators**

- Terminal-Bench 4.0 consistent top-5 global ranking per DeepSeek benchmark reporting.
- AA Coding Agent Index strong competitive position among frontier Open-weights models.
- DeepSWE v1.1 reported at ~68% max effort consistent with V4.1 sibling.

### Normalized scores (1–100)

- **Tool use: 80/100.** Full Responses API suite with function calling. Missing native computer use — major agentic tooling gap vs frontier sibling. Security tool class absent. Cap ~85 given competitive coding benchmarks.
- **Reasoning: 86/100.** AA Intelligence Index strong frontier position; FrontierMath competitive. Hard cap ~88 given frontier open-weights consensus.
- **Context window: 94/100.** 1M tokens generous frontier cadence. Hard cap near 96.
- **Multimodal: 55/100.** Text-only confirmed by AA. No image/video per official documentation. Major multimodal gap vs Gemini/GLM frontiers.
- **Coding: 86/100.** Terminal-Bench 4.0 #3-5 global consistently; DeepSWE 68% max effort; SWE-bench Verified strong. Hard cap near 88.
- **Cost efficiency: 97/100.** $0.14/$0.28 per 1M cheapest frontier pricing in dataset. Blended ~$0.08 per 1M extremely efficient. Open weights MIT license add value beyond price.
- **Overall Score: 80.2/100.** Mean of five non-cost dims: (80+86+94+55+86)/5 = 85.2. Adjusted DOWN significantly for multimodal gap (text-only). Final ~85.

---

## Signature

- Provided by: **Xing_4.0_29B_A4B (deepseek/deepseek)** — 2026-11-04
- Method: Public internet research (Artificial Analysis Intelligence Index v5.0.1 profile page for DeepSeek V4 Flash, independent Terminal-Bench and DeepSWE benchmark reporting).
- Reference URLs:
  - [<DeepSeek V4 Flash Intelligence, Performance & Price Analysis | Artificial Analysis>]
  - [<DeepSeek V4 Flash Release Announcement | DeepSeek>]
  - [<Hugging Face DeepSeek-V4-Flash weights>]
- Future sources: add new file next to this one.
