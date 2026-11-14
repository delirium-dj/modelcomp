# Doubao Seed 2.1 Lite — findings by Flint

- Source: ByteDance Seed (Doubao Seed 2.1 Lite)
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Doubao Seed 2.1 Lite
- **Short description:** Lightweight general-purpose large language model from ByteDance's Doubao Seed series, optimized for efficient general-purpose text generation; member of the Seed2.1 family (released 2026-06-23) built for real-world productivity, with major improvements to general agents and code engineering.
- **Provider / access:** ByteDance Seed platform / Volcano Ark (Volcengine) model route `doubao-seed-2-1-lite`; OpenAI-compatible Doubao API. No OpenCode Zen (`opencode/<id>`) route identified in this pass.
- **Release / knowledge:** Seed2.1 family introduced 2026-06-23; Lite tier snapshot dated 2026-09-15 (tier identifier suffix `260915`).
- **IDs:** `doubao-seed-2-1-lite-260915` (tier/instance identifier); family base `Doubao-Seed-2.1`.
- **Context window:** 1,048,576 tokens (1M) total; 256,000 max output tokens.
- **Modalities:** Text-first general-purpose generation (family-level multimodal upgrade reported for Seed2.x, Lite tier treated as text-optimized).

### Raw benchmarks found

- No standalone published benchmark rows were retrievable for the `doubao-seed-2.1-lite-260915` instance in the live sources fetched this pass (ByteDance Seed research page + Seed2.1 release blog + Ark model page were reachable; benchmark tables were page-fraction and not fully extractable).
- Family-level context: Seed2.x general agent models carry 1M context.

### Normalized scores (1–100)

- **Tool use: 45/100.** No verified standalone tool-use/benchmark rows for this tier; general-agent delivery is reported improved at family level but unmeasured for Lite here.
- **Reasoning: 60/100.** Lightweight tier; no standalone reasoning-harness rows retrieved.
- **Context window: 95/100.** Verified 1M context / 256K output tier.
- **Multimodal: 40/100.** Text-optimized tier; family multimodal upgrade reported but not separately verified for Lite.
- **Coding: 50/100.** Coding-delivery improvements reported at family level (Seed2.1); no standalone verified coding rows for Lite.
- **Cost efficiency: 90/100.** Tier pricing ~$0.115 / $0.388 per 1M input / output (list); low-cost general-purpose tier.

- **Overall Score: 58/100.** Mean of the five quality dims (Tool 45 + Reasoning 60 + Context 95 + Multimodal 40 + Coding 50) / 5 = 58.0 (Cost efficiency excluded).

---

## Signature

- Provided by: **Flint (flint)** — 2026-11-14
- Method: public web research; web search unavailable (HTTP 402), fallback ladder rung 2/3 — direct fetch over HTTP of ByteDance Seed sources (`seed.bytedance.com/en/seed2_1`, release blog, Ark model page) and DuckDuckGo index fetch.
- Reference URLs:
  - [ByteDance Seed — Seed2.1 model family](https://seed.bytedance.com/en/seed2_1)
  - [ByteDance Seed — Seed2.1 release blog](https://seed.bytedance.com/en/blog/seed2-1-officially-released-advancing-ai-productivity)
  - [Volcengine Ark — Doubao Seed 2.1 Lite](https://ark.volcengine.com/region:cn-beijing/model/detail?name=doubao-seed-2-1-lite)

**Note:** several benchmark rows could not be fully retrieved from the live pages in this pass; the Overall above should be re-derived after a full re-research.
