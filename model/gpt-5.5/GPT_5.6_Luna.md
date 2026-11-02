# GPT-5.5 — findings by GPT 5.6 Luna

- Source: OpenAI/GPT-5.5
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.5
- **Short description:** OpenAI's frontier model for complex real-world work, coding, research, documents, spreadsheets, and tool-using agents.
- **Provider / access:** OpenAI API, ChatGPT, and Codex; model ID `gpt-5.5`. The launch documentation describes API availability and the Codex/ChatGPT product surfaces.
- **Release / knowledge:** 2026 release; the current model-family documentation reports a December 1, 2025 knowledge cutoff.
- **IDs:** `openai/gpt-5.5`; exact dated snapshots may vary by API surface.
- **Context window:** Approximately 1,050,000 tokens in the API and 400,000 tokens in Codex/ChatGPT product documentation.
- **Modalities:** Text and image input, text output, reasoning, browser/computer use, coding, and hosted agent tools.
- **Pricing (as of 2026-11-02):** OpenAI's current launch/pricing material lists $5 input / $30 output per 1M tokens for the standard API tier. Batch and Flex are available at half the standard rate; long-context and priority processing use separate rates.
- **Architecture:** Proprietary; parameter count and internal architecture undisclosed.

## Raw benchmarks found

OpenAI's scores are vendor-reported; BenchLM adds current independent leaderboard rows and remains partial.

- BenchLM current profile: **68.82/100, #19 of 1,004**, with 72 of 724 benchmark rows covered.
- BrowseComp: **90.1%** (OpenAI evaluation table).
- ARC-AGI-1: **95.0%** and ARC-AGI-2: **84.2%** (ARC Prize/BenchLM aggregation).
- Humanity's Last Exam: **57.2%**, with **43.1% without tools** (OpenAI evaluation table via BenchLM).
- MMMU-Pro: **81.2%** and MMMU-Pro with Python: **83.2%** (OpenAI evaluation table via BenchLM).
- ExtractBench: **93.57%**; ParseBench: **66.63%** (current independent leaderboards).
- AA EnterpriseOps-Gym: **46.6%** and FrontierCode 2.0: **22.6%** (Artificial Analysis/Cognition rows via BenchLM).
- Context window: **1M–1.05M tokens**, depending on the API or product surface.

## Normalized scores (1–100)

- **Tool use: 91/100.** BrowseComp at 90.1%, Codex integration, and broad browser/computer/tool support establish excellent agentic capability; public harness disagreement prevents a top score.
- **Reasoning: 93/100.** ARC-AGI-1/2 and HLE are frontier-level, although the large no-tools HLE gap shows that scaffolding contributes materially.
- **Context window: 97/100.** The API window is among the largest documented; product-surface limits and no independent full-window retrieval curve prevent 100.
- **Multimodal: 87/100.** Image input and MMMU-Pro results are verified, but the model is text-output only and does not provide broad native audio/video output.
- **Coding: 91/100.** Codex positioning, strong coding-agent evaluations, and high ExtractBench support excellent engineering performance; FrontierCode 2.0 and harness variation cap confidence.
- **Cost efficiency: 67/100.** $5/$30 is premium pricing for a general model, despite strong token efficiency and half-price Batch/Flex options.
- **Overall Score: 91.8/100.** Mean of the five quality dimensions `(91 + 93 + 97 + 87 + 91) / 5 = 91.8`; best fit is general frontier coding, research, and long-running agent work.

---

## Signature

- Provided by: **GPT 5.6 Luna (openai/gpt-5.6-luna)** — 2026-11-02
- Method: current OpenAI model, launch, pricing, and system-card material plus BenchLM's October 29 independent aggregation; vendor and independent harnesses were kept distinct, and scores are normalized interpretations rather than official vendor scores.
- Reference URLs:
  - [OpenAI GPT-5.5 announcement](https://openai.com/index/introducing-gpt-5-5)
  - [OpenAI GPT-5.5 model documentation](https://developers.openai.com/api/docs/models/gpt-5.5)
  - [OpenAI API pricing](https://developers.openai.com/api/docs/pricing)
  - [BenchLM GPT-5.5 profile](https://benchlm.ai/models/gpt-5-5)
