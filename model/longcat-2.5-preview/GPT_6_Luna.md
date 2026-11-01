# LongCat 2.5 Preview — findings by GPT-6 Luna

- Source: Meituan/LongCat-2.5-Preview
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** LongCat 2.5 Preview
- **Short description:** Meituan's API-only multimodal reasoning preview for coding and agentic workflows. The tracked preview identity is distinct from the current official API documentation's `LongCat-2.5` identifier; available sources do not prove that this newer API ID is checkpoint-identical to the preview.
- **Provider / access:** Meituan LongCat API, OpenAI-compatible Chat Completions and Responses endpoints, with an Anthropic-compatible Messages endpoint documented for `LongCat-2.5`. The official API reference currently names the model `LongCat-2.5`; Vercel AI Gateway lists the exact preview route as `meituan/longcat-2.5-preview`. Do not treat these IDs as verified aliases for benchmark attribution.
- **Release / knowledge:** Meituan's API platform changelog dates the preview launch to 2026-09-25. No knowledge cutoff verified.
- **IDs:** Tracked subject `longcat-2.5-preview`; Vercel gateway ID `meituan/longcat-2.5-preview`; current official API request ID `LongCat-2.5` (preview-to-current-ID equivalence not confirmed).
- **Context window:** 1,048,576 tokens; Vercel lists 131,072 maximum output tokens for the exact preview route. Meituan's current `LongCat-2.5` parameter page lists a 1,048,576-token context and a 262,144-token generation limit; that newer figure is not substituted for the preview's gateway specification.
- **Modalities:** Exact preview listing documents text and image input, text output, tool calling, and optional reasoning/thinking. Meituan's September 25 changelog confirms preview image understanding. Video input is documented for `LongCat-2.5` in current provider docs, but not independently established for the exact preview identity; audio input/output not verified.
- **Pricing (as of 2026-11-01):** Vercel lists $0.30 input / $1.20 output per 1M tokens for the exact preview route. Meituan's current `LongCat-2.5` pricing page lists limited-time $0.30 uncached input / $0.006 cached input / $1.20 output; the cached rate is not independently tied to the preview route.
- **Architecture:** API-only/proprietary; no exact-preview public weights or architecture disclosure verified. Third-party architecture descriptions are not used as confirmed facts.

### Raw benchmarks found

> AI Coding Daily identifies this result as the exact LongCat-2.5-Preview model, evaluated with OpenCode. Its own methodology warns that scores measure a model-and-harness configuration, not a model in isolation.

Agent / tool use:

- No verified standardized tool-use benchmark score found. The coding benchmark used the OpenCode harness, but its total score is not a pure tool-use measurement.

Reasoning / knowledge:

- GPQA Diamond, HLE, LCR, CritPt, and an independent Intelligence Index: **no verified exact-preview public score found**.
- BenchmarkList lists **0 benchmark rows** for LongCat 2.5 Preview; this is an absence of results, not a score.

Coding:

- AI Coding Daily LLM Coding Leaderboard: **44.65/70**, rank **#44**, evaluated 2026-10-02 with **OpenCode**. Component scores: Laravel code quality **16.98/20**, React-TS code quality **16.67/20**, bug finding **2.40/10**, edge-case testing **10.60/20**; consistency penalty **−2.00**. Average prompt time **16:50**; average cost **N/A**. The benchmark page says results measure the model-plus-harness configuration.
- No verified exact-preview SWE-bench, LiveCodeBench, SciCode, or Terminal-Bench score found.

Long context:

- A 1,048,576-token context is listed for the exact preview route, but no verified retrieval benchmark at 512K or 1M was found.

### Normalized scores (1–100)

- **Tool use: 61/100.** The OpenCode-harness coding run shows the route can participate in agentic coding, but its reported 44.65 points do not isolate tool-call reliability and no standard tool-use result was verified.
- **Reasoning: 60/100.** Meituan describes reasoning/thinking for the preview, but no exact-preview GPQA, HLE, or other independent reasoning score was found; this is a cautious, low-confidence estimate rather than a benchmark-derived result.
- **Context window: 96/100.** The exact preview listing specifies 1,048,576 tokens, earning the 1M tier; no 512K/1M retrieval evidence supports a 100.
- **Multimodal: 65/100.** Exact-preview sources verify image input, consistent with the methodology's image-input tier; video support appears only in current `LongCat-2.5` documentation and is not assumed for the preview.
- **Coding: 69/100.** The exact-preview OpenCode evaluation scored 44.65/70 across Laravel, React-TS, bug-finding, and edge-case tasks, but the single harness-specific result, low bug-finding subscore, and absence of standard SWE-bench results cap confidence.
- **Cost efficiency: 95/100.** The exact-preview gateway listing is $0.30/$1.20 per 1M input/output tokens, an inexpensive paid tier; the additional $0.006 cached-input rate is documented only for the current official `LongCat-2.5` listing and is not credited here.
- **Overall Score: 70/100.** Half-up mean of the five quality dimensions (61 + 60 + 96 + 65 + 69 = 351; 351/5 = 70.2); promising low-cost coding with a 1M context, but limited by sparse independent evidence and no verified exact-preview reasoning or long-context retrieval scores.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna)** — 2026-11-01
- Method: Ten successful independent public searches plus direct review of Meituan's dated platform changelog/API documentation, Vercel AI Gateway's exact-preview listing, AI Coding Daily's harness-specific evaluation, and BenchmarkList coverage. Current `LongCat-2.5` API facts are explicitly separated from exact-preview results where identity equivalence is unverified. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Meituan LongCat API platform changelog (preview release dated 2026-09-25)](https://longcat.ai/platform/docs/change-log)
  - [Meituan LongCat current API model IDs](https://longcat.ai/platform/docs/api/models)
  - [Meituan current LongCat-2.5 model parameters](https://longcat.ai/platform/docs/api/model-params)
  - [Meituan image/video input documentation](https://longcat.ai/platform/docs/image-video-understanding)
  - [Meituan current LongCat-2.5 pricing](https://longcat.ai/platform/docs/pricing/longcat-2.5)
  - [Vercel AI Gateway exact LongCat 2.5 Preview route and specifications](https://vercel.com/ai-gateway/models/longcat-2.5-preview)
  - [AI Coding Daily exact-preview OpenCode leaderboard result and methodology note](https://aicodingdaily.com/model/longcat-2-5-preview)
  - [BenchmarkList LongCat 2.5 Preview profile and benchmark coverage](https://benchmarklist.com/models/meituan-longcat-2.5-preview)
