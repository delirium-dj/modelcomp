# GPT-5.1-Codex — findings by Inkling 2 Small

- Source: OpenAI (`gpt-5.1-codex`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.1-Codex
- **Short description:** OpenAI's Codex-tuned GPT-5.1 variant for agentic coding in Codex-like environments. **Shut down** per OpenAI's model documentation; retained for historical comparison.
- **Provider / access:** OpenAI Responses API only (Chat Completions not supported); snapshot `gpt-5.1-codex` — Status: Shut down.
- **Release / knowledge:** Released ~2025 (GPT-5.1 generation); reliable knowledge cutoff Sep 30, 2024.
- **IDs:** `gpt-5.1-codex`
- **Context window:** 400,000 tokens; max output 128,000 tokens.
- **Modalities:** text + image in; text out; reasoning token support; function calling, web search; Responses API only.
- **Pricing (as of 2026-11-10):** $1.25 / 1M input, $10.00 / 1M output, cached input $0.125; no Batch. (Model shut down — pricing retained for record.)
- **Architecture:** proprietary; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- τ²-bench: **83%** (Artificial Analysis)
- Gert Labs: **49.68%** (Gert Labs rankings)
- JobBench: **26.2%** (JobBench paper, arXiv:2605.26329)

Reasoning / knowledge:

- AA-GPQA Diamond: **86.0%** (Artificial Analysis)
- AA Intelligence Index: **23.7%** (Artificial Analysis); BenchLM **53.59/100** (#82/1020)
- AA-HLE: **25.7%**; CritPt: **5.7%**
- AA-LCR: **69.3%** (Artificial Analysis LCR leaderboard)
- AA-Omniscience: Index **-6.5**, Accuracy **39.9%**, Hallucination **77.2%**
- AA-IFBench: **70.0%**

Coding:

- LiveCodeBench (Vals): **85.6%** (Vals AI)
- Vibe Code Bench v1.1: **13.12%** (Vals AI)
- SWE-bench (Vals): not measured for this ID

Long context:

- AA-LCR: **69.3%** at 400K tokens.

Multimodal:

- AA-MMMU-Pro: **72.5%**; Design Arena Website: **1158** (OpenRouter)

### Normalized scores (1–100)

- **Tool use: 64/100.** τ²-bench 83% decent for structured tool calls; JobBench 26.2% exposes weak end-to-end agentic delivery.
- **Reasoning: 52/100.** GPQA 86.0% offsets AA Index 23.7, HLE 25.7%, CritPt 5.7% — coding-strong, judge-weak.
- **Context window: 76/100.** 400K tokens; AA-LCR 69.3% verified.
- **Multimodal: 70/100.** Text+image in, text out; MMMU-Pro 72.5%; no audio/video.
- **Coding: 72/100.** LCB 85.6% (Vals) strong; capped hard by Vibe Code Bench 13.12% and no public SWE-bench row for this ID.
- **Cost efficiency: 68/100.** $1.25/$10 — mid-tier; shut down, so availability drives the practical value.
- **Overall Score: 67/100.** (64 + 52 + 76 + 70 + 72) / 5 = 66.8 → 67. Best fit: historical Codex sessions only — the model is shut down; migrate to current Codex-class models.

## Signature

- Provided by: **Inkling 2 Small (thinkingmachines/inkling-2-small)** — 2026-11-10 UTC
- Method: public internet research (OpenAI model docs, Artificial Analysis, Vals AI, BenchLM); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [GPT-5.1-Codex — OpenAI API docs](https://developers.openai.com/api/docs/models/gpt-5.1-codex)
  - [GPT-5.1-Codex — BenchLM](https://benchlm.ai/models/gpt-5-1-codex)
  - [GPT-5.1-Codex — Artificial Analysis](https://artificialanalysis.ai/models/gpt-5-1-codex)
  - [GPT-5.1-Codex — Vals AI](https://www.vals.ai/models/openai_gpt-5.1-codex)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
