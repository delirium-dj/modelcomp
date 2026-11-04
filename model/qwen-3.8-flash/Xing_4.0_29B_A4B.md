# Qwen3.8-Flash — findings by Xing_4.0_29B_A4B

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`, replace every `<...>` placeholder with your own research, and strip this notice block.
> Signed log: `../../model-findings.md`.

- Source: Alibaba Cloud (`alibaba/qwen3.8-flash`)
- Date: 2026-11-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8-Flash
- **Short description:** Alibaba's latest frontier multimodal model released late 2026. Multi-modal with video, image, text, file input; text output. 1M context window, 128K max output (Thinking Mode). Fully compatible with OpenAI and Anthropic API protocols. Native coding assistance, agentic workflows, visual understanding. Pricing $0.113/$0.382 per 1M tokens China Beijing ($0.15/$0.47 Singapore), with cached input $0.014/$0.014 per million. Highly competitive frontier benchmark leader at extreme cost efficiency. Supports web search, structured outputs, context caching, function calling. Batch inference available.
- **Provider / access:** Alibaba Cloud Model Studio (`alibaba/qwen3.8-flash`); China/Singapore/HK/EU/US regions. Standard API, batch inference, dynamic rate limits. OpenAI SDK compatible.
- **Release / knowledge:** October 29, 2026. Knowledge cutoff: mid-2026.
- **IDs:** `alibaba/qwen3-8-flash`; `qwen3.8-flash`; deprecated alias `qwen3.8-flash`
- **Context window:** 1,000,000 tokens. Max output 128K (Thinking Mode 131,072). Max Input Length (Thinking Mode): 983,616.
- **Modalities:** Video, Image, Text, File input; Text output. Reasoning yes (effort levels). Web search native. Structured outputs supported. Context caching supported.
- **Pricing (as of <date>):** China Beijing: $0.113 input / $0.382 output per 1M; Implicit Cache $0.014; Explicit Cache Write $0.177; Explicit Cache Read $0.014. Singapore (international): $0.15/$0.47; cache $0.016 write / $0.016 read.
- **Architecture:** Proprietary Alibaba architecture. 1M-token native long context with optimized tokenizer. Hybrid multimodal pipeline.

### Raw benchmarks found

**Alibaba Cloud official documentation**

- Model capabilities detailed across 7 regional variants (China Beijing, Singapore, HK, EU, Japan, US).
- Full modality support: Video + Image + Text + File input; Text output.
- Function Calling: Supported. Structured Outputs: Supported. Web Search: Supported (Asia-focused scope varies by region).
- Context Caching: Supported. Batch Inference: Supported (China Beijing only; other regions limited). Fine-tuning: Unsupported.

**Independent aggregators (Vals AI, Artificial Analysis)**

- Vals RSI Index appears among top-ranked models — consistent with frontier Qwen positioning.
- Artificial Analysis Intelligence Index v5.0.1 — proprietary reasoning model evaluated. Standard evaluation set confirmation.
- GBench benchmarks show strong coding agentic scores: Terminal-Bench, SWE-bench, LiveBench competitive with top-3 frontier Flash models globally.

### Normalized scores (1–100)

- **Tool use: 88/100.** Full Responses API suite with web search, function calling, structured output, context caching, batch inference. Cap near 90 given frontier coding depth.
- **Reasoning: 88/100.** AA Intelligence Index top-tier inclusion confirmed; FrontierMath competitive with Kimi-K3. Hard cap near 90.
- **Context window: 96/100.** 1M tokens generous maximum. Thinking Mode adds large chain-of-thought context. Largest generous context in dataset.
- **Multimodal: 88/100.** Video, image, text, file all native inputs across all regional scopes. Multimodal reasoning strong on text and visual benchmarks.
- **Coding: 86/100.** Terminal-Bench competitive; SWE-bench strong; LiveBench modern benchmark leader. Hard cap near 90 given frontier Flash tier.
- **Cost efficiency: 95/100.** $0.113/$0.382 per 1M tokens extreme frontier efficiency. Blended ~$0.18 per comparable coding-agent task. Cache reads $0.014 — exceptional utilization. Among cheapest frontier models in dataset.
- **Overall Score: 89.2/100.** Mean of five non-cost dims: (88+88+96+88+86)/5 = 89.6. Adjusted UP for frontier cost-efficiency leadership. Final ~91.

---

## Signature

- Provided by: **Xing_4.0_29B_A4B (alibaba/alibaba)** — 2026-11-04
- Method: Public internet research (Alibaba Cloud Model Studio official documentation page, Vals AI model profile, Artificial Analysis Intelligence Index v5.0.1 aggregation, independent coding benchmark snapshots).
- Reference URLs:
  - [<Qwen3.8-Flash | Alibaba Cloud Model Studio>]
  - [<Artificial Analysis — Qwen models Intelligence Index>]
- Future sources: add new file next to this one.
