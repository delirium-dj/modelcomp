# GPT-5.5 Pro — findings by GPT-6 Luna

- Source: OpenAI/GPT-5.5 Pro (`gpt-5.5-pro`)
- Date: 2026-10-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.5 Pro
- **Short description:** OpenAI's higher-compute reasoning model for difficult, high-stakes tasks. It is a distinct API SKU from GPT-5.5; scores published for the base model are not substituted for Pro.
- **Provider / access:** OpenAI API model `gpt-5.5-pro`, available through the Responses API and Batch API; Chat Completions is not supported. Reasoning effort supports medium, high (default), and xhigh. The tracked OpenCode route is `opencode/gpt-5.5-pro`; the exact vendor API identity and supported endpoint were verified against OpenAI's current model documentation. [OpenAI API model docs](https://developers.openai.com/api/docs/models/gpt-5.5-pro) · [OpenAI launch post](https://openai.com/index/introducing-gpt-5-5/)
- **Release / knowledge:** OpenAI announced GPT-5.5 on April 23, 2026; its April 24 update says GPT-5.5 and GPT-5.5 Pro are available in the API. The API model's documented knowledge cutoff is December 1, 2025. [OpenAI launch post](https://openai.com/index/introducing-gpt-5-5/) · [OpenAI API model docs](https://developers.openai.com/api/docs/models/gpt-5.5-pro)
- **IDs:** OpenAI API ID `gpt-5.5-pro`; snapshot `gpt-5.5-pro-2026-04-23`. [OpenAI API model docs](https://developers.openai.com/api/docs/models/gpt-5.5-pro)
- **Context window:** 1,050,000 tokens; maximum output 128,000 tokens. The official GPT-5.5 comparison table does not publish Pro retrieval scores at 256K or 1M; the base-model retrieval scores are not transferred here. [OpenAI API model docs](https://developers.openai.com/api/docs/models/gpt-5.5-pro) · [OpenAI evaluations](https://openai.com/index/introducing-gpt-5-5/)
- **Modalities:** Text and image input; text output. Audio and video are not supported. The Responses API supports function calling, web search, file search, image generation, code interpreter, hosted shell, and MCP tools. [OpenAI API model docs](https://developers.openai.com/api/docs/models/gpt-5.5-pro)
- **Pricing (as of 2026-10-29):** OpenAI's current exact-model documentation lists $30 input / $180 output per 1M tokens, with no cached-input discount. Regional processing endpoints incur a 10% uplift. The current model-specific page does not list a separate long-context rate; the earlier `$60/$270` claim is not repeated here because it could not be reverified in current exact-model documentation. No free API tier is listed. [OpenAI API model docs](https://developers.openai.com/api/docs/models/gpt-5.5-pro) · [OpenAI API pricing](https://developers.openai.com/api/docs/pricing)
- **Architecture:** Proprietary closed-weight model; parameter count and detailed architecture have not been published.

### Raw benchmarks found

> OpenAI's GPT-5.5 evaluation table has a separate GPT-5.5 Pro column. Scores below are only rows with values in that column. OpenAI says GPT evaluations were run at xhigh reasoning effort in a research environment; results may differ from production ChatGPT. Dashes for Pro are treated as missing, not borrowed from base GPT-5.5. [OpenAI evaluations](https://openai.com/index/introducing-gpt-5-5/)

Agent / tool use:

- GDPval (wins or ties): **82.3%**; this is the OpenAI win/tie measure, not GDPval-AA Elo.
- BrowseComp: **90.1%**.
- Investment Banking Modeling Tasks (internal): **88.6%**.
- OpenAI's table has no GPT-5.5 Pro result for Terminal-Bench 2.0, OSWorld-Verified, Toolathlon, MCP Atlas, or τ²-Bench Telecom. The listed 82.7% Terminal-Bench 2.0 and 73.1% Expert-SWE results belong to GPT-5.5, not GPT-5.5 Pro.

Reasoning / knowledge:

- Humanity's Last Exam: **43.1% without tools** and **57.2% with tools**.
- FrontierMath Tier 1–3: **52.4%**; FrontierMath Tier 4: **39.6%**.
- GeneBench: **33.2%**.
- GPQA Diamond: **no exact Pro result published in the table**; the 93.6% result is for GPT-5.5, not Pro.
- BenchLM's October 2026 profile reports **72.8/100, rank 13/215**, based on eight source-displayable rows; it marks Coding and Multimodal as not measured. This is BenchLM's own partial-coverage composite, not an OpenAI or Artificial Analysis score. [BenchLM](https://benchlm.ai/models/gpt-5-5-pro)

Coding:

- No exact GPT-5.5 Pro coding benchmark score was found. OpenAI's table lists dashes for Pro on SWE-Bench Pro, Terminal-Bench 2.0, and Expert-SWE. GPT-5.5's 58.6% SWE-Bench Pro, 82.7% Terminal-Bench 2.0, and 73.1% Expert-SWE are not attributed to Pro. [OpenAI evaluations](https://openai.com/index/introducing-gpt-5-5/)

Long context:

- The API's maximum input context is 1.05M tokens, but no Pro-specific MRCR, Graphwalks, or other retrieval score was published in the checked evaluation table. Base GPT-5.5's retrieval scores do not establish Pro's retrieval performance.

Multimodal:

- OpenAI confirms image input and text output. The comparison table has no GPT-5.5 Pro result for OSWorld-Verified or MMMU Pro, so no visual benchmark score is claimed.

### Normalized scores (1–100)

- **Tool use: 85/100.** BrowseComp 90.1% and GDPval 82.3% wins/ties show strong exact-Pro performance; absence of Terminal-Bench, τ²-Bench, MCP Atlas, and OSWorld results caps the rating.
- **Reasoning: 92/100.** HLE reaches 43.1% without tools and 57.2% with tools, with FrontierMath Tier 1–3 at 52.4% and Tier 4 at 39.6%; GPQA is not reported for Pro.
- **Context window: 95/100.** The official 1.05M-token limit qualifies for the ≥1M tier, but no Pro-specific 512K/1M retrieval result supports a higher score.
- **Multimodal: 65/100.** Officially supports image input, but output is text-only and no exact-Pro visual benchmark result was published.
- **Coding: 50/100.** OpenAI's public comparison table has no GPT-5.5 Pro coding benchmark result. This is a neutral, evidence-coverage midpoint—not an observed coding-performance score—and no GPT-5.5 base score is substituted.
- **Cost efficiency: 15/100.** $30/$180 per 1M tokens is exceptionally expensive under the project cost rubric, and there is no cached-input discount; no unverified long-context surcharge is included.
- **Overall Score: 77/100.** Half-up mean of the five quality dimensions: (85 + 92 + 95 + 65 + 50) / 5 = 77.4 → 77; cost is excluded. Best suited to difficult reasoning and research where its extra compute is valuable; avoid assuming the base model's coding or long-context retrieval scores carry over to Pro.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna)** — 2026-10-29
- Method: Three independent search engines (Yahoo, DuckDuckGo, and Naver), followed by direct review of OpenAI's exact-model API documentation, the GPT-5.5 launch/evaluation table, current pricing documentation, and BenchLM's exact-model profile. Kept Pro results distinct from GPT-5.5 base; the earlier long-context-price claim is left unverified rather than repeated. Scores are normalized interpretations under `model-comparison.md`, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
