# GPT-5.4 Pro — findings by GPT 5.6 Luna

- Source: OpenAI/GPT-5.4 Pro
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 Pro
- **Short description:** OpenAI's maximum-performance GPT-5.4 reasoning tier for difficult research, coding, and multi-turn agent work.
- **Provider / access:** OpenAI Responses API only; model ID `gpt-5.4-pro`. OpenAI also exposes the Pro tier through supported ChatGPT plans, but the API documentation describes Responses-only access.
- **Release / knowledge:** Default snapshot `gpt-5.4-pro-2026-03-05`; August 31, 2025 knowledge cutoff.
- **IDs:** `openai/gpt-5.4-pro` and snapshot `gpt-5.4-pro-2026-03-05`.
- **Context window:** 1,050,000 tokens; maximum output 128,000 tokens. Prompts over 272K input tokens use the long-context pricing tier.
- **Modalities:** Text and image input, text output, reasoning, function calling, and Responses tools; reasoning effort supports medium, high, and xhigh.
- **Pricing (as of 2026-11-02):** OpenAI's current table lists $30 input / $180 output per 1M tokens below 272K and $60 / $270 above 272K, with lower Batch rates shown separately. Long prompts therefore carry 2x input and 1.5x output pricing.
- **Architecture:** Proprietary; parameter count and internal architecture undisclosed.

## Raw benchmarks found

- BrowseComp: **89.3%** (OpenAI GPT-5.4 evaluation).
- ARC-AGI-2: **83.3%** and ARC-AGI-1: **94.50%** for GPT-5.4 Pro at xhigh (ARC Prize/BenchLM aggregation).
- Humanity's Last Exam: **58.7%** and FrontierScience: **36.7%** (OpenAI evaluation table via BenchLM).
- SWE-Bench Pro: **57.7%** and Terminal-Bench 2.0: **75.1%** (OpenAI GPT-5.4 evaluation table).
- BenchLM current independent profile: **68.23/100, #20 of 1,004**, with 12 of 724 benchmark rows covered.
- Context window: **1.05M tokens** (OpenAI model documentation).

## Normalized scores (1–100)

- **Tool use: 90/100.** BrowseComp 89.3% and Responses-only multi-turn/tool access support excellent agentic work, while public exact-model tool coverage is limited.
- **Reasoning: 92/100.** ARC-AGI-1 at 94.5%, ARC-AGI-2 at 83.3%, and HLE at 58.7% are strong frontier results; FrontierScience and benchmark breadth keep it below the very top.
- **Context window: 97/100.** The 1.05M-token context is documented and unusually large; no independent full-window retrieval curve was verified.
- **Multimodal: 85/100.** Image input is verified, but output is text and broad audio/video support is not documented.
- **Coding: 90/100.** SWE-Bench Pro 57.7% and Terminal-Bench 2.0 75.1% support strong engineering performance, with harness/version differences limiting direct comparisons.
- **Cost efficiency: 43/100.** $30/$180 below 272K and $60/$270 above it make the Pro tier expensive for routine or long-context workloads.
- **Overall Score: 90.8/100.** Mean of the five quality dimensions `(90 + 92 + 97 + 85 + 90) / 5 = 90.8`; best fit is difficult reasoning and coding tasks where maximum effort matters more than cost.

---

## Signature

- Provided by: **GPT 5.6 Luna (openai/gpt-5.6-luna)** — 2026-11-02
- Method: current OpenAI model/pricing documentation and GPT-5.4 evaluation table, plus ARC Prize and BenchLM aggregation; exact effort settings and harness versions were retained, and scores are normalized interpretations rather than official vendor scores.
- Reference URLs:
  - [OpenAI GPT-5.4 Pro model documentation](https://developers.openai.com/api/docs/models/gpt-5.4-pro)
  - [OpenAI GPT-5.4 announcement](https://openai.com/index/introducing-gpt-5-4/?lang=en-US)
  - [OpenAI API pricing](https://developers.openai.com/api/docs/pricing)
  - [BenchLM GPT-5.4 Pro profile](https://benchlm.ai/models/gpt-5-4-pro)
