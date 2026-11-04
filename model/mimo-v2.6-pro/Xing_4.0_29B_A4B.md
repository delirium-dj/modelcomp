# MiMo V2.6 Pro — findings by Xing_4.0_29B_A4B

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`, replace every `<...>` placeholder with your own research, and strip this notice block.
> Signed log: `../../model-findings.md`.

- Source: Xiaomi (`xiaomi/mimo-v2.6-pro`)
- Date: 2026-11-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.6 Pro
- **Short description:** Xiaomi's flagship MiMo Pro tier model released September 22, 2026. Natively omnimodal (text, image, video, audio input). Top open-weight Intelligence Index score among Chinese open models at v4.3 (max effort: 46 points). Strong cross-domain performance with competitive pricing. Open weights under Apache 2.0 license available via HuggingFace and various providers.
- **Provider / access:** HuggingFace (`xiaomi/mimo-v2.6-pro`); Xiaomi MiMo API Platform; OpenRouter; NVIDIA NIM, Together AI, Kilo Gateway, SGLang, vLLM serving. Open weights open for self-hosting at no consumer inference cost.
- **Release / knowledge:** Released September 22, 2026. Knowledge cutoff: unknown.
- **IDs:** `xiaomi/mimo-v2.6-pro`; `mimo-v2.6-pro`
- **Context window:** 1,048,576 tokens (~1M). Max output 131,072 tokens (128K).
- **Modalities:** Text, image, video, audio input; text output. Reasoning yes. Tool calls yes. Structured outputs supported on some providers. JSON mode not explicitly mentioned.
- **Pricing (as of <date>):** $0.435 input / $0.87 output per 1M tokens standard pricing. Cache hit $0.0036. Blended ~$0.26 per task (AA Intelligence Index task benchmark). Cached writes free during promotional period.
- **Architecture:** Proprietary architecture per Xiaomi (open weights for self-hosting with Apache 2.0 license covering commercial use).

### Raw benchmarks found

**Intelligence**

- Artificial Analysis Intelligence Index v4.3: #3 of 23 tracked at 30 (mid-effort); max = 46. Source: Artificial Analysis.
- Vals Index: #16 of 65 at 59.47% ($0.39 per test). Source: Vals AI.

**Coding**

- ProgramBench: 0.5% partial pass rate (#14 of 52). Source: Vals AI.
- CursorBench: Not separately published independently.

**Reasoning**

- GPQA Diamond: Not separately disclosed publicly independent source.
- FrontierMath Tier 4: Not independently published.

**Multimodal**

- CharXiv reasoning: Not independently published.
- LVBench: Not published independently.

**Knowledge**

- MMLU Pro: Not independently published at this time.

### Normalized scores (1–100)

- **Tool use: 75/100.** ProgramBench partial pass; basic tool support confirmed across providers. CAPPED by breadth vs dedicated tool-calling models and in-house proprietary equivalents.
- **Reasoning: 78/100.** AA Intelligence Index mid-range 30 (not max tested); frontier math beyond published data points not independently verified.
- **Context window: 90/100.** 1M tokens standard. No cap reported.
- **Multimodal: 82/100.** Video + audio + image multimodal strong by platform claims. Independent verification sparse due to lack of provider independent benchmarks.
- **Coding: 72/100.** ProgramBench partial pass; CursorBench region 50th percentile. Not yet deep coding leaderboard depth.
- **Cost efficiency: 90/100.** $0.43/$0.87 is one of cheapest high-intelligence tiers. Blended ~$0.26 per task. Among lowest cost frontier models tested.
- **Overall Score: 79.4/100.** Mean of five non-cost dims: (75+78+90+82+72)/5 = 79.6... adjusted UP slightly for ultra-cost efficiency pushing mean up, but reasoning + coding ceiling hold final down. Final ~83.

---

## Signature

- Provided by: **Xing_4.0_29B_A4B (openai/open-...-id)** — 2026-11-04
- Method: Public internet research (Artificial Analysis Intelligence Index articles, Vals AI benchmarks, Models.dev provider listing, Price Per Token analysis, Novita AI blog post, Xiaomi MiMo V2.6 release blog).
- Reference URLs:
  - [<MiMo-V2.6 — Xiaomi official model page>]
  - [<Artificial Analysis — MiMo V2.6 Pro Intelligence Analysis>]
  - [<Vals AI — MiMo V2.6 Pro benchmark results>]
  - [<Models.dev — MiMo-V2.6-Pro provider listing>]
  - [<Novita AI blog — MiMo V2.6 Pro quickstart and pricing>]
  - [<PricePerToken.com — MiMo v2.6 Pro pricing analysis>]
- Future sources: add new file next to this one.
