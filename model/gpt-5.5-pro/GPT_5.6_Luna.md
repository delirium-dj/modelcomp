# GPT-5.5 Pro — findings by GPT 5.6 Luna

- Source: OpenAI/GPT-5.5 Pro
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.5 Pro
- **Short description:** OpenAI's high-compute reasoning model for difficult multi-turn work, coding, research, and tool-using agents.
- **Provider / access:** OpenAI Responses API and Batch API; model ID `gpt-5.5-pro`. OpenAI documents Responses-only access so the model can perform multi-turn reasoning before returning an answer.
- **Release / knowledge:** Default snapshot `gpt-5.5-pro-2026-04-23`; December 1, 2025 knowledge cutoff.
- **IDs:** `openai/gpt-5.5-pro` and snapshot `gpt-5.5-pro-2026-04-23`.
- **Context window:** 1,050,000 tokens; maximum output 128,000 tokens. OpenAI's long-context pricing threshold is 272K input tokens.
- **Modalities:** Text and image input; text output; reasoning, structured output, function calling, and Responses tools.
- **Pricing (as of 2026-11-02):** OpenAI's pricing table lists $30 input / $180 output per 1M tokens below 272K context and $60 / $270 above 272K. Batch rates are listed separately at lower prices. This is a premium, compute-intensive tier.
- **Architecture:** Proprietary; parameter count and internal architecture undisclosed.

## Raw benchmarks found

- BrowseComp: **90.1%** (OpenAI GPT-5.5 evaluation table).
- ARC-AGI-1: **95.0%** and ARC-AGI-2: **84.2%** (ARC Prize/BenchLM aggregation).
- Humanity's Last Exam: **57.2%**, or **43.1% without tools** (OpenAI evaluation table as reproduced by BenchLM).
- CritPt: **30.6%** (Artificial Analysis benchmark, via BenchLM).
- BenchLM current independent profile: **72.76/100, #14 of 1,004**, with 9 of 724 benchmark rows covered. The profile is useful for current comparison but remains partial.
- Context window: **1.05M tokens** (OpenAI model documentation).

## Normalized scores (1–100)

- **Tool use: 91/100.** BrowseComp at 90.1% and Responses multi-turn/tool support establish excellent agentic performance, though public tool-suite coverage remains narrow.
- **Reasoning: 93/100.** ARC-AGI-1 at 95%, ARC-AGI-2 at 84.2%, and HLE at 57.2% are frontier-level results; the no-tools HLE gap shows tool dependence.
- **Context window: 98/100.** The documented 1.05M-token context and 128K output are among the largest available; no independent full-window retrieval curve was verified.
- **Multimodal: 85/100.** Image input is verified, but output is text and no broad current audio/video evaluation was found.
- **Coding: 91/100.** OpenAI positions the Pro tier for difficult coding, and its overall benchmark profile is strong, but exact-model public coding coverage is thinner than its reasoning coverage.
- **Cost efficiency: 43/100.** $30/$180 below 272K and $60/$270 above it make this a quality-first choice rather than a cost-efficient default.
- **Overall Score: 91.6/100.** Half-up mean of `(91 + 93 + 98 + 85 + 91) / 5 = 91.6`; best fit is difficult, long-running reasoning and coding work where quality outweighs token cost.

---

## Signature

- Provided by: **GPT 5.6 Luna (openai/gpt-5.6-luna)** — 2026-11-02
- Method: fresh public-web research using OpenAI's current model/pricing documentation and GPT-5.5 evaluation table, ARC Prize/Artificial Analysis results as aggregated by BenchLM, and the current independent model profile; scores are normalized interpretations, not official vendor scores.
- Reference URLs:
  - [OpenAI GPT-5.5 Pro model documentation](https://developers.openai.com/api/docs/models/gpt-5.5-pro)
  - [OpenAI GPT-5.5 announcement](https://openai.com/index/introducing-gpt-5-5)
  - [OpenAI API pricing](https://developers.openai.com/api/docs/pricing)
  - [BenchLM GPT-5.5 Pro profile](https://benchlm.ai/models/gpt-5-5-pro)
