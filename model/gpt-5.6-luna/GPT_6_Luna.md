# GPT-5.6 Luna — findings by GPT-6 Luna

- Source: OpenAI/GPT-5.6 Luna (`gpt-5.6-luna`)
- Date: 2026-10-28 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Luna
- **Short description:** OpenAI's fast, lower-cost GPT-5.6 tier for high-volume workloads, with reasoning and tool use. It is a distinct model tier, not an effort setting or alias for Sol/Terra.
- **Provider / access:** OpenAI API, Chat Completions and Responses; API model ID `gpt-5.6-luna`.
- **Release / knowledge:** Released 2026-07-09; documented knowledge cutoff 2026-02-16.
- **IDs:** `openai/gpt-5.6-luna` (catalog); API `gpt-5.6-luna`.
- **Context window:** 1,050,000 tokens; maximum input 922,000 and output 128,000.
- **Modalities:** Text and image input; text output. Reasoning, function calling, and web/computer tools are supported through compatible endpoints; no audio/video input verified.
- **Pricing (as of 2026-10-28):** Standard API short-context price: $0.20 input, $1.20 output, $0.02 cached input per 1M tokens; long-context requests use $0.40 input/$1.80 output. Prompts exceeding 272K input are subject to documented surcharges.
- **Architecture:** Proprietary; parameter count and architecture undisclosed.

### Raw benchmarks found

OpenAI's July 2026 comparison reports GPT-5.6 Luna results; values are vendor-reported, with internal evaluations identified as such.

Agent / tool use:

- Agents' Last Exam: **50.3%**.
- GDPval-AA v2: **1,591.8 Elo**.
- Toolathlon: **53.4%**.
- AutomationBench: **14.9%**.
- OSWorld 2.0: **45.6%**; BrowseComp: **83.3%**.

Reasoning / knowledge:

- Artificial Analysis Intelligence Index v4.1: **51.2**.
- GPQA Diamond: **92.3%**.
- FrontierMath Tier 1–3 v2: **78.6%**; Tier 4 v2: **58.5%**.
- Internal HealthBench Professional: **55.7%**.

Coding:

- SWE-Bench Pro: **62.7%**.
- DeepSWE v1.1: **67.2%**.
- Terminal-Bench 2.1: **84.7%**.
- Artificial Analysis Coding Agent Index v1.1: **74.6**.

Long context:

- OpenAI MRCR v2, 8-needle 256K–512K: **41.3%**; 512K–1M: **41.3%**.
- GraphWalks BFS F1: **81.3%** at 256K and **51.2%** at 1M.
- Documented maximum context is 1.05M, but retrieval scores decline substantially at the longest ranges.

### Normalized scores (1–100)

- **Tool use: 88/100.** Strong Agents' Last Exam, GDPval, BrowseComp, and Terminal-Bench support competent tool workflows; Toolathlon and AutomationBench are comparatively moderate.
- **Reasoning: 89/100.** GPQA 92.3%, AA Index 51.2, and FrontierMath results are strong, but below top flagship performance.
- **Context window: 75/100.** Although capacity is 1.05M, MRCR at 41.3% and GraphWalks at 51.2 F1 at 1M show only moderate retrieval at the maximum span.
- **Multimodal: 65/100.** Image input is supported; no audio, video, or non-text output capability was verified.
- **Coding: 91/100.** SWE-Bench Pro 62.7%, DeepSWE 67.2%, and Terminal-Bench 84.7% are strong agentic coding results.
- **Cost efficiency: 95/100.** At $0.20/$1.20 per million short-context tokens, pricing is very low relative to its benchmark profile; long-context surcharges apply.
- **Overall Score: 82/100.** Half-up mean of the five quality dimensions; compelling value for high-volume coding and tool tasks, with caution for million-token retrieval.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna)** — 2026-10-28
- Method: Public research; OpenAI-published benchmark figures are labeled as such, with internal evaluations identified. Normalized scores are independent interpretations.
- Sources: [OpenAI GPT-5.6 announcement and benchmark tables](https://openai.com/index/gpt-5-6/); [OpenAI GPT-5.6 Luna API model card](https://developers.openai.com/api/docs/models/gpt-5.6-luna); [OpenAI API pricing](https://developers.openai.com/api/docs/pricing).
