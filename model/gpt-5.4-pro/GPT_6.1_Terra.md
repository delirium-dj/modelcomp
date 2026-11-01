# GPT-5.4 Pro — findings by GPT-6.1 Terra

- Source: OpenAI / GPT-5.4 Pro
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 Pro
- **Short description:** OpenAI's higher-compute GPT-5.4 deployment for complex reasoning and professional tasks; separate API ID from the base model.
- **Provider / access:** OpenAI Responses API only, `gpt-5.4-pro` ([OpenAI](https://developers.openai.com/api/docs/models/gpt-5.4-pro)).
- **Release / knowledge:** Released 2026-03-05; knowledge cutoff 2025-08-31.
- **IDs:** `gpt-5.4-pro`, snapshot `gpt-5.4-pro-2026-03-05`; no free API route verified.
- **Context window:** 1,050,000 tokens and 128,000 maximum output per OpenAI.
- **Modalities:** Text and image input, text output; function calling, web search and computer-use tools are supported.
- **Pricing (2026-11-01):** $30 input / $180 output per million tokens; no cached-input discount listed. Above 272K input, full-session input and output rates rise by 2× and 1.5× respectively ([OpenAI](https://developers.openai.com/api/docs/models/gpt-5.4-pro)).
- **Architecture:** Proprietary; parameter counts undisclosed.

### Raw benchmarks found

Agent / tool use:

- OpenAI BrowseComp **89.3%**, FinanceAgent v1.1 **61.5%**, and GDPval **82.0%** specifically for Pro ([OpenAI](https://openai.com/index/introducing-gpt-5-4)).
- Terminal-Bench, Tau2-Bench and MCP-Atlas: no Pro-specific score reported in the cited table; base GPT-5.4 results are not substituted.

Reasoning / knowledge:

- OpenAI GPQA Diamond **94.4%**, HLE **42.7% without tools / 58.7% with tools**, ARC-AGI-2 **83.3%**, and FrontierMath Tier 4 **38.0%** ([OpenAI](https://openai.com/index/introducing-gpt-5-4)).
- CritPt: no exact Pro score verified here.

Coding:

- No Pro-specific SWE-bench, Terminal-Bench or LiveCodeBench score verified in this research. Base-model coding results are not attributed to Pro.

Long context:

- OpenAI specifies a 1.05M window; its long-context table does not report Pro-specific MRCR or GraphWalks figures.

### Normalized scores (1–100)

- **Tool use: 88/100.** Pro-specific BrowseComp and finance-work results support a strong rating; missing terminal/tool benchmarks cap confidence.
- **Reasoning: 93/100.** GPQA, HLE and ARC results support strong reasoning, but are vendor-reported.
- **Context window: 95/100.** The 1.05M window enters the top size tier; no Pro-specific 98%+ long-range retrieval figure verified.
- **Multimodal: 70/100.** Image input supported; audio/video input and non-text output not credited.
- **Coding: 77/100.** Provisional estimate based on available tool support and model lineage; no Pro-specific coding benchmark verified.
- **Cost efficiency: 35/100.** $30/$180 pricing without a listed cache discount is expensive and rises for long sessions.
- **Overall Score: 85/100.** (88 + 93 + 95 + 70 + 77) / 5 = 84.6, rounded to 85; appropriate for hard research only when cost is justified.

---

## Signature

- Provided by: **GPT-6.1 Terra (openai/gpt-6.1-terra)** — 2026-11-01
- Method: Independent public-source research; scores are normalized 1–100 interpretations, not official vendor scores. Coding is provisional because Pro-specific coding results were not verified.
- Reference URLs:
  - [OpenAI announcement and Pro-specific evaluation table](https://openai.com/index/introducing-gpt-5-4)
  - [OpenAI model specification and pricing](https://developers.openai.com/api/docs/models/gpt-5.4-pro)
- Future sources: add a new file next to this one using the same headings.
