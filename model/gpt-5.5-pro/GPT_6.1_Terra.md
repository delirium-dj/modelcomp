# GPT-5.5 Pro — findings by GPT-6.1 Terra

- Source: OpenAI / GPT-5.5 Pro
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.5 Pro
- **Short description:** OpenAI's higher-compute GPT-5.5 deployment for difficult reasoning and research tasks; separate API ID from GPT-5.5.
- **Provider / access:** OpenAI Responses API and Batch; OpenAI does not offer direct Chat Completions for this ID ([OpenAI model documentation](https://developers.openai.com/api/docs/models/gpt-5.5-pro)).
- **Release / knowledge:** Announced 2026-04-23, API available 2026-04-24; knowledge cutoff 2025-12-01.
- **IDs:** `gpt-5.5-pro` and snapshot `gpt-5.5-pro-2026-04-23`; OpenRouter lists `openai/gpt-5.5-pro` through its gateway.
- **Context window:** 1,050,000 tokens; 128,000 maximum output per OpenAI.
- **Modalities:** Text and image input, text output; function calling, web search and related tools supported via the Responses API.
- **Pricing (2026-11-01):** OpenAI $30 input / $180 output per million tokens, no cached-input discount ([OpenAI](https://developers.openai.com/api/docs/models/gpt-5.5-pro)).
- **Architecture:** Proprietary; parameter counts undisclosed.

### Raw benchmarks found

Agent / tool use:

- OpenAI BrowseComp **90.1%** and GDPval **82.3% wins or ties**, specifically for GPT-5.5 Pro ([OpenAI](https://openai.com/index/introducing-gpt-5-5)).
- Terminal-Bench, Tau2-Bench, MCP-Atlas and Toolathlon: no Pro-specific score reported in the source; do not substitute base GPT-5.5 results.

Reasoning / knowledge:

- OpenAI HLE **43.1% without tools**, **57.2% with tools**; FrontierMath Tier 4 **39.6%**, GPT-5.5 Pro at xhigh reasoning ([OpenAI](https://openai.com/index/introducing-gpt-5-5)).
- GPQA Diamond and CritPt: no exact Pro score found in the source.

Coding:

- No exact-model SWE-bench, Terminal-Bench, LiveCodeBench or SciCode number verified in this research. Base GPT-5.5 coding figures are not assigned to Pro.

Long context:

- OpenAI documents a 1.05M context. Its announcement does not report Pro-specific MRCR or GraphWalks results.

### Normalized scores (1–100)

- **Tool use: 89/100.** Pro-specific BrowseComp and GDPval support a strong rating; missing terminal and tool-use benchmarks cap confidence.
- **Reasoning: 93/100.** Pro-specific HLE and FrontierMath results support advanced reasoning, though these are vendor-run.
- **Context window: 95/100.** A documented 1.05M window enters the top size tier; no Pro-specific 98%+ long-range retrieval result verified.
- **Multimodal: 70/100.** Text and image input are supported; non-text output and audio/video input are not credited.
- **Coding: 78/100.** Provisional estimate reflecting tool access and shared model lineage; no Pro-specific coding benchmark was found, so confidence is limited.
- **Cost efficiency: 35/100.** $30/$180 per million without a cache discount is expensive.
- **Overall Score: 85/100.** (89 + 93 + 95 + 70 + 78) / 5 = 85; best reserved for difficult research where the high price is justified.

---

## Signature

- Provided by: **GPT-6.1 Terra (openai/gpt-6.1-terra)** — 2026-11-01
- Method: Independent public-source research; scores are normalized 1–100 interpretations, not official vendor scores. Coding is explicitly provisional because no Pro-specific coding benchmark was found.
- Reference URLs:
  - [OpenAI announcement and Pro-specific evaluation table](https://openai.com/index/introducing-gpt-5-5)
  - [OpenAI Pro model specification and pricing](https://developers.openai.com/api/docs/models/gpt-5.5-pro)
  - [OpenRouter Pro API route](https://openrouter.ai/openai/gpt-5.5-pro)
- Future sources: add a new file next to this one using the same headings.
