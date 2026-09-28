# GPT-5 — findings by GPT-5.6 Terra

- Source: OpenAI (`gpt-5`)
- Date: 2026-09-28 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5
- **Short description:** OpenAI's August 2025 general frontier reasoning model, offered in the API, ChatGPT, and Codex.
- **Provider / access:** OpenAI Responses and Chat Completions APIs; model ID `openai/gpt-5`.
- **Release / knowledge:** released August 2025; no exact knowledge cutoff verified in the official launch page.
- **IDs:** `openai/gpt-5`; no Zen Free ID verified.
- **Context window:** 400K total context, with up to 272K input and 128K reasoning/output tokens ([OpenAI developer announcement](https://openai.com/index/introducing-gpt-5-for-developers/)).
- **Modalities:** text and image input; text output; reasoning, custom and built-in tools, parallel tool calling, structured outputs, streaming, web/file search and image generation.
- **Pricing (as of 2026-09-28):** $1.25/M input and $10/M output ([OpenAI developer announcement](https://openai.com/index/introducing-gpt-5-for-developers/)).
- **Architecture:** proprietary; parameter count not disclosed.

### Raw benchmarks found

Agent / tool use:

- Tool-use and instruction-following performance is reported by OpenAI, but no single comparable numeric tool-use result was located in the announcement.

Reasoning / knowledge:

- AIME 2025: **94.6%** (no tools, high reasoning).
- GPQA Diamond: **85.7%** (no tools, high reasoning).
- Humanity's Last Exam: **24.8%** (no tools, high reasoning).
- HMMT 2025: **93.3%** (no tools, high reasoning).

Coding:

- SWE-bench Verified: **74.9%** (OpenAI launch evaluation).
- Aider Polyglot: **88%** (OpenAI launch evaluation).

Long context:

- BrowseComp Long Context: **89%** correct at 128K–256K inputs (OpenAI).

### Normalized scores (1–100)

- **Tool use: 86/100.** Verified support for parallel custom/built-in tools and OpenAI's agentic evaluation disclosure support a high score, capped by the lack of a directly comparable public tool-use percentage.
- **Reasoning: 90/100.** AIME 94.6%, HMMT 93.3%, and GPQA 85.7% are strong evidence; HLE at 24.8% caps frontier-generalization confidence.
- **Context window: 86/100.** 400K context and 89% BrowseComp Long Context at 128K–256K are strong, though below current million-token offerings.
- **Multimodal: 84/100.** Text/vision support and 84.2% MMMU reported in the launch announcement are strong; audio/video were not verified.
- **Coding: 89/100.** SWE-bench Verified 74.9% and Aider Polyglot 88% establish excellent coding capability.
- **Cost efficiency: 78/100.** $1.25/M input and $10/M output are competitive for its capability tier but materially above budget tiers.
- **Overall Score: 87/100.** Half-up mean of the five non-cost dimensions: 87.0; well suited to general reasoning and software work.

---

## Signature

- Provided by: **GPT-5.6 Terra (`openai/gpt-5.6-terra`)** — 2026-09-28
- Method: fresh public-internet research using OpenAI's official launch and developer documentation; scores are normalized interpretations, not vendor scores.
