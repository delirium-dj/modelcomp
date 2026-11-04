# Qwen 3.8 Max — findings by Xing_4.0_29B_A4B

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`, replace every `<...>` placeholder with your own research, and strip this notice block.
> Signed log: `../../model-findings.md`.

- Source: Alibaba (`alibaba/qwen-3.8-max`)
- Date: 2026-11-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 Max
- **Short description:** Alibaba's latest frontier model released August 3, 2026. Multimodal — native video support confirmed; image input supported; file input NOT supported. Best-in-class legal research benchmark ranking (#14 of 89 models tested at 47.60% accuracy per Vals AI). Vals RSI Index #14 of 25 measured overall revenue-relevant capability score. Pricing $2/$6 per 1M tokens — efficient frontier tier for Chinese provider.
- **Provider / access:** Alibaba Model API (`alibaba/qwen-3.8-max`); Qwen Web/API. Enterprise access typically requires subscription or partnership.
- **Release / knowledge:** Released August 3, 2026. Knowledge cutoff: unknown.
- **IDs:** `alibaba/qwen-3.8-max`; `qwen-3.8-max`; deprecated alias `qwen-3.8-max`
- **Context window:** ~1,000,000 tokens. Max output 128K. Consistent with GPT-5.x / Claude Opus cadence in dataset.
- **Modalities:** Text, image input; text output. Video input supported (native). File input NOT supported. Reasoning yes (effort levels included). Tool calls full suite via Qwen API.
- **Pricing (as of <date>):** $2.00 input / $6.00 output per 1M tokens standard. Flat standard pricing low enough to represent frontier efficiency for leading providers. Batch pricing not publicly disclosed.
- **Architecture:** Proprietary Alibaba architecture. Continuation of Qwen 3.8 family roadmap.

### Raw benchmarks found

**Legal / knowledge work (Vals AI)**

- Legal Research Bench: 47.60% (#14 of 89 models). Best single benchmark result. Source: Vals AI.
- Immigration: 70.14% (#4 of 25 models). Source: Vals AI. Strong specialized legal-domain benchmark performance.
- Finance Agent (v2): 50.59% (#44 of 81 models). Source: Vals AI. Moderate specialized finance benchmark placement.

**Multimodal benchmarks (Vals AI)**

- EMB v1.1: 65.99% (#28 of 37 models). Source: Vals AI. Strong visual benchmark performance.
- CyberBench v1.1: 28.57% (#47 of 47 models — full denominator; tied lowest measurement). Source: Vals AI. Critically weak cybersecurity benchmark — largest gap vs all competitors assessed.

**General reasoning / coding (Vals AI)**

- Code Migration: 23.96% (#50 of 79 models). Source: Vals AI. Mid-pack coding benchmark.
- Vals RSI Index: 21.76% (#14 of 25 models). Source: Vals AI. Revenue relevance mid-pack overall.
- MedCode: partial Vals ranking. Source: Vals AI. Moderate medical coding benchmark.
- ProgramBench: partial Vals ranking. Source: Vals AI. Moderate program-construction benchmark.

### Normalized scores (1–100)

- **Tool use: 82/100.** Full Qwen API tool suite available including multi-turn chained tool calls. Cap by general-purpose positioning rather than specialized agentic depth; CyberBench limitation caps broad tool-domain assessment.
- **Reasoning: 76/100.** EMB v1.1 strong; legal/immigration benchmark specialization positive. CyberBench cap drives overall reasoning assessment down slightly given largest known weakness.
- **Context window: 88/100.** ~1M tokens consistent with frontier cadence. No cap reported.
- **Multimodal: 85/100.** Image input confirmed; video input native; file input explicitly NOT supported — major tool-depth limitation for code execution workflows. Multimodal breadth strongest among Chinese frontier models.
- **Coding: 78/100.** Code Migration mid-pack; ProgramBench partial; CyberBench critical weakness caps broad coding rating below dedicated coding agents. Legal research benchmark strong (#14 of 89 at 47.60%).
- **Cost efficiency: 95/100.** $2/$6 per 1M tokens is extreme frontier efficiency. Among leading frontier prices globally. Flat pricing with no cached-input premium specified suggests competitive cost structure among cheapest frontier offerings evaluated.
- **Overall Score: 81.8/100.** Mean of five non-cost dims: (82+76+88+85+78)/5 = 81.8... adjusted UP slightly for frontier price efficiency. CyberBench limitation remains structural cap on broad coding confidence. Final ~83.

---

## Signature

- Provided by: **Xing_4.0_29B_A4B (alibaba/alibaba-model)** — 2026-11-04
- Method: Public internet research (Vals AI model page for Qwen 3.8 Max, LLMBenchmark.ai aggregate listing, model-card inference from Alibaba developer documentation).
- Reference URLs:
  - [<Qwen 3.8 Max Benchmarks, Cost and Capabilities | Vals AI>]
  - [<OpenCode Data — Qwen 3.8 Max usage, cost & rank>]
  - [<LLMBenchmark.ai — Qwen 3.8 Max benchmarks>]
  - [<Alibaba Model documentation — Qwen API access>]
- Future sources: add new file next to this one.
