# Qwen 3.7 Flash — findings by GPT-6 Luna

- Source: Alibaba/Qwen 3.7 Flash (`opencode/qwen-3.7-flash`)
- Date: 2026-10-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.7 Flash
- **Short description:** Alibaba's July 2026 proprietary Flash API model with 1M context, multimodal input, function calling and web-search support; this is the Flash SKU, not the unresolved bare Qwen 3.7 family label.
- **Provider / access:** OpenCode route `opencode/qwen-3.7-flash`; Alibaba Cloud/QwenCloud hosted API and OpenRouter provider listing. Chat Completions-compatible tool calling is documented.
- **Release / knowledge:** Listed as a July 2026 model; knowledge cutoff was not published in the reviewed sources.
- **IDs:** `opencode/qwen-3.7-flash`; Alibaba/QwenCloud Qwen3.7 Flash route.
- **Context window:** 1,000,000 tokens total; 131,072 maximum output.
- **Modalities:** Text, image and video input; text output; reasoning, function calling and web search supported.
- **Pricing (as of 2026-10-30):** $0.03/$0.13 per 1M input/output for the documented QwenCloud low-input tier, with $0.006 cached input; paid, route-dependent.
- **Architecture:** Proprietary hosted Flash variant; parameter count and weights were not published in the sources reviewed.

### Raw benchmarks found

Agent / tool use:

- BenchLM's public model directory lists **Qwen3.7 Flash at rank #15** and records the exact 1M/131K hosted profile; the extracted directory record did not expose a component score. No exact Flash Tau, GDPval, Claw-Eval or Toolathlon percentage was verified.

Reasoning / knowledge:

- No exact-Flash GPQA, HLE or composite intelligence score was verified. The public directory rank is retained as traceable model evidence, not converted into a benchmark percentage.

Coding:

- No exact-Flash SWE-bench, LiveCodeBench or Terminal-Bench percentage was verified. Qwen3.7 Max and the bare Qwen3.7 family are not used as proxies.

Long context:

- 1M advertised context and 131K maximum output; no exact-Flash MRCR/RULER retrieval curve was found.

Multimodal:

- Text, image and video input are listed for the exact Flash route; no exact-Flash multimodal benchmark was verified.

### Normalized scores (1–100)

- **Tool use: 70/100.** The exact route supports tools and has a public BenchLM directory rank (#15), but no component agent benchmark was exposed.
- **Reasoning: 72/100.** The exact Flash route is a reasoning SKU, but the absence of exact GPQA/HLE/index values caps this provisional score.
- **Context window: 85/100.** The advertised 1M window is top-tier by size, but no retrieval curve was verified and the output cap is 131K.
- **Multimodal: 76/100.** Image and video input are listed for the route; text-only output and absent benchmark coverage cap the score.
- **Coding: 72/100.** Function calling and coding positioning are documented, but no exact Flash SWE/LiveCode/Terminal result was located.
- **Cost efficiency: 99/100.** The documented $0.03/$0.13 route is exceptionally cheap, though the rate depends on input-size and serving tier.
- **Overall Score: 75/100.** Half-up mean of the five non-cost quality dimensions: (70 + 72 + 85 + 76 + 72) / 5 = 75.0. Cost efficiency is excluded. Best treated as a low-cost long-context multimodal Flash route until exact benchmark rows are published.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna)** — 2026-10-30 UTC
- Method: Public web research using the exact OpenCode/Alibaba route listing and the BenchLM model directory; no bare Qwen 3.7 or Qwen3.7 Max result was substituted. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Source 1](https://www.alibabacloud.com/help/en/model-studio/models)
  - [Source 2](https://benchlm.ai/models/alibaba/qwen3.7-flash)
  - [Source 3](https://opencode.ai/docs/zen)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
