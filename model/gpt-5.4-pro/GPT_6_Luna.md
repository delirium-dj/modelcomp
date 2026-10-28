# GPT-5.4 Pro — findings by GPT-6 Luna

- Source: OpenAI/GPT-5.4 Pro
- Date: 2026-10-28 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 Pro
- **Short description:** OpenAI's proprietary high-compute GPT-5.4 variant, designed to spend more inference compute on hard problems and deliver more precise answers. It is a distinct API SKU from GPT-5.4, not a ChatGPT subscription tier.
- **Provider / access:** OpenAI API, Responses API only; not available on Chat Completions. OpenAI notes some requests can take several minutes. [Official API model documentation](https://developers.openai.com/api/docs/models/gpt-5.4-pro)
- **Release / knowledge:** Released March 5, 2026; knowledge cutoff August 31, 2025. [OpenAI launch post](https://openai.com/index/introducing-gpt-5-4/) · [Official API model documentation](https://developers.openai.com/api/docs/models/gpt-5.4-pro)
- **IDs:** `gpt-5.4-pro`; default pinned snapshot `gpt-5.4-pro-2026-03-05`. [Official API model documentation](https://developers.openai.com/api/docs/models/gpt-5.4-pro)
- **Context window:** 1,050,000 tokens; max output 128,000. Prompts over 272K input tokens incur 2× input and 1.5× output pricing for the full session. [Official API model documentation](https://developers.openai.com/api/docs/models/gpt-5.4-pro)
- **Modalities:** Text and image input, text output. Supports reasoning effort `medium` (default), `high`, and `xhigh`; Responses API tools include function calling, web/file search, MCP, computer use, and image generation. [Official API model documentation](https://developers.openai.com/api/docs/models/gpt-5.4-pro)
- **Pricing (as of 2026-10-28):** $30 input / $180 output per 1M tokens; no cached-input discount is listed. Regional processing adds 10%. Batch API is not supported for this model. [Official API model documentation](https://developers.openai.com/api/docs/models/gpt-5.4-pro)
- **Architecture:** Proprietary; parameter count and architecture details are not disclosed. [Artificial Analysis](https://artificialanalysis.ai/models/gpt-5-4-pro)

### Raw benchmarks found

> OpenAI's Pro-specific table has benchmark data for knowledge work, web search, and reasoning, but leaves its coding and long-context rows blank. GPT-5.4 base results are not substituted for Pro.

Agent / tool use:

- BrowseComp: **89.3%** for GPT-5.4 Pro; OpenAI reports this as a new state of the art at launch. [OpenAI launch post](https://openai.com/index/introducing-gpt-5-4/) · [BenchLM](https://benchlm.ai/models/gpt-5-4-pro)
- GDPval: **82.0% wins or ties** versus industry professionals; FinanceAgent v1.1: **61.5%**. GDPval here is OpenAI's head-to-head win/tie rate, not GDPval-AA Elo. [OpenAI launch post](https://openai.com/index/introducing-gpt-5-4/)
- MultiChallenge: **69.2%**; BrowseComp: **89.3%**. [BenchmarkList](https://benchmarklist.com/models/openai-gpt-5.4-pro/)
- Claw-Eval / ClawProBench: **no verified public score found**. No exact-Pro Terminal-Bench, Tau3-Banking, OSWorld-Verified, or Toolathlon score was verified.

Reasoning / knowledge:

- GPQA Diamond: **94.4%**; Humanity's Last Exam: **42.7% without tools / 58.7% with tools**; Frontier Science: **36.7%**. [OpenAI launch post](https://openai.com/index/introducing-gpt-5-4/)
- ARC-AGI-2 Verified: **83.3%**; FrontierMath Tier 1–3: **50.0%**; FrontierMath Tier 4: **38.0%**. [OpenAI launch post](https://openai.com/index/introducing-gpt-5-4/) · [BenchLM](https://benchlm.ai/models/gpt-5-4-pro)
- BenchmarkList separately reports HLE Text Only at **45.3% ± 2.1 points**; it differs from OpenAI's HLE no-tools figure and is retained as a separate evaluation record. [BenchmarkList](https://benchmarklist.com/models/openai-gpt-5.4-pro/)
- BenchLM aggregate: **68.89/100, rank #23 of 1,000**, based on 12 of its 716 benchmarks (partial coverage; not the project's normalized score). Artificial Analysis' current page has deprecated legacy workloads and shows no refreshed v5 Intelligence Index result. [BenchLM](https://benchlm.ai/models/gpt-5-4-pro) · [Artificial Analysis](https://artificialanalysis.ai/models/gpt-5-4-pro)

Coding:

- **No verified public coding benchmark score for the exact GPT-5.4 Pro SKU was found.** OpenAI's Pro-specific evaluation table lists dashes for SWE-bench Pro and Terminal-Bench 2.0; the 57.7% SWE-bench Pro and 75.1% Terminal-Bench 2.0 figures belong to GPT-5.4 base and are not transferred. [OpenAI launch post](https://openai.com/index/introducing-gpt-5-4/)

Multimodal:

- API-supported image generation is available as a Responses API tool; the model's direct modalities remain image/text input and text output. OpenAI provides no GPT-5.4 Pro-specific image-generation benchmark score. [Official API model documentation](https://developers.openai.com/api/docs/models/gpt-5.4-pro)

Long context:

- Official API context window: **1,050,000 tokens**. OpenAI's launch table reports MRCR and GraphWalks retrieval measurements for GPT-5.4 base but not Pro; no exact-Pro MRCR, RULER, LCR, or GraphWalks result at 512K+ was verified. [Official API model documentation](https://developers.openai.com/api/docs/models/gpt-5.4-pro) · [OpenAI launch post](https://openai.com/index/introducing-gpt-5-4/)

### Normalized scores (1–100)

- **Tool use: 87/100.** BrowseComp 89.3% and GDPval's 82.0% win/tie rate show strong web and professional-task performance; GDPval is not the methodology's Elo benchmark, and no exact-Pro Terminal-Bench, Tau3, OSWorld, or Toolathlon result was verified.
- **Reasoning: 95/100.** GPQA Diamond 94.4%, HLE with tools 58.7%, and ARC-AGI-2 83.3% are frontier results; FrontierMath Tier 4 at 38.0% and the differing HLE text-only result cap the score.
- **Context window: 95/100.** The official 1.05M window reaches the methodology's ≥1M tier, but there is no Pro-specific retrieval score at 512K+ to support 100.
- **Multimodal: 90/100.** Direct image input plus the documented Responses API image-generation tool provides non-text image output; this is tool-mediated, not a native image-output modality.
- **Coding: 75/100.** OpenAI publishes no Pro-specific SWE-bench or Terminal-Bench score and marks those rows unavailable; this is a conservative, low-confidence rating rather than an estimate copied from GPT-5.4 base.
- **Cost efficiency: 15/100.** $30/$180 per MTok is far above the methodology's already-premium $10/$50 reference; the >272K prompt surcharge further increases long-session cost.
- **Overall Score: 88/100.** Half-up mean of the five quality dimensions: (87 + 95 + 95 + 90 + 75) / 5 = 88.4. Best for difficult reasoning, research, and browser-enabled professional tasks when response time and very high API costs are acceptable; coding and million-token retrieval performance remain unmeasured for Pro specifically.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna)** — 2026-10-28
- Method: Three independent public searches; verified exact SKU, limits, pricing, and Pro-specific vendor evaluations in OpenAI documentation, then cross-checked Artificial Analysis, BenchLM, and BenchmarkList. GPT-5.4 base results were not used as Pro results. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
