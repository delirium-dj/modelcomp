# Grok 4.3 — findings by GPT 5.6 Luna

- Source: xAI / Grok 4.3
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.3
- **Short description:** xAI's reasoning-first model for fast instruction following, tool calling, and text/image understanding. It is an earlier Grok 4-series identity and is not substituted with Grok 4.5, 4.6, or 4.7.
- **Provider / access:** xAI API model `grok-4.3`, with alias `grok-4.3-latest`; also available through Amazon Bedrock and partner endpoints. xAI documents Chat Completions-style access, batch support, function calling, and structured outputs.
- **Release / knowledge:** AWS lists a 2026-06-15 launch date; knowledge cutoff was not published in the consulted documentation.
- **IDs:** `xai/grok-4.3`, official API ID `grok-4.3`, and alias `grok-4.3-latest`.
- **Context window:** 1,000,000 tokens (xAI documentation).
- **Modalities:** Text and image input, text output; reasoning efforts `none`, `low`, `medium`, `high`, and `xhigh`; function calling and structured outputs.
- **Pricing (as of 2026-11-02):** For prompts under 200K, $1.25 input / $0.20 cached input / $2.50 output per 1M tokens; at or above 200K, $2.50 / $0.40 / $5.00. Batch requests receive a 20% discount.
- **Architecture:** Proprietary; undisclosed.

### Raw benchmarks found

> BenchLM's October 29 profile has partial coverage and mixes independent provider rows. Values below retain their benchmark version and source rather than treating the composite as an official score.

Agent / tool use:

- τ²-Bench: **97.7%**; GDPval-AA normalized **29.2%** / Elo **1018**; APEX-Agents-AA **17.0%**; Gert Labs **43.86%**; ResearchClawBench **12.4%** (BenchLM/Artificial Analysis/provider rows).
- Terminal-Bench 2.1 (Vals): **41.9%**; AA Agentic Index **17.2%** (BenchLM).
- BenchLM composite: **52.65/100**, rank **#94/1004**, with 32/724 benchmarks covered.

Reasoning / knowledge:

- AA-LCR **64.3%** and CritPt **8.0%**; Artificial Analysis Intelligence Index **37.6%**.
- GPQA / GPQA Diamond: **90.1%**; HLE **35.0%** (Artificial Analysis); Vals GPQA Diamond **91.4%** and MMLU-Pro **85.8%**.
- AA-Omniscience accuracy / hallucination rate / index: **34.6% / 25.0% / 18.0%**.

Coding:

- LiveCodeBench (Vals): **84.5%**; SWE-bench (Vals): **71.4%**; SciCode **47.3%**; AA-SciCode **48.3%**; AA Coding Index **42.3%**.
- The coding rows are not interchangeable with newer Grok releases or with a different reasoning-effort setting.

Multimodal:

- AA-MMMU-Pro: **78.1%**; Design Arena Website **1195** (Artificial Analysis/OpenRouter provider rows).
- The official text/image input specification is corroborated independently; no audio or video capability was verified.

Long context:

- xAI documents a **1M-token** context; AA-LCR **64.3%** provides a measurable but mixed long-context/reasoning proxy. No full-window MRCR or RULER result was located.

### Normalized scores (1–100)

- **Tool use: 82/100.** Function calling, structured outputs, and τ²-Bench 97.7% are strong, but Terminal-Bench 2.1 at 41.9%, APEX 17.0%, and the low AA Agentic Index show substantial harness variance.
- **Reasoning: 82/100.** GPQA around 90% is strong, while HLE 35%, AA Intelligence Index 37.6%, LCR 64.3%, and CritPt 8% cap general reasoning confidence.
- **Context window: 93/100.** The 1M limit is directly documented, but the available LCR result is only 64.3% and no full-window retrieval test was found.
- **Multimodal: 84/100.** Text/image input and MMMU-Pro 78.1% establish useful visual reasoning; output is text and audio/video support is unverified.
- **Coding: 82/100.** LiveCodeBench 84.5% and SWE-bench 71.4% are good, but AA Coding Index 42.3%, SciCode 47.3%, and terminal-agent variance prevent a higher score.
- **Cost efficiency: 83/100.** The sub-200K rate is competitive for a 1M-context reasoning model, but long prompts double input/output rates and the model is not open weight.
- **Overall Score: 84.6/100.** Mean of the five quality dimensions `(82 + 82 + 93 + 84 + 82) / 5 = 84.6`; best fit is a tool-rich text/image agent where xAI's structured-output and reasoning controls matter.

## Evidence notes

- Grok 4.3 is kept separate from Grok 4.5/4.6/4.7. The current xAI ID, `latest` alias, 1M context, price tiers, and benchmark rows all refer to the 4.3 entry.
- BenchLM's 52.65 composite is partial and conservative; the normalized Overall above is a five-quality-dimension interpretation and excludes Cost efficiency.

---

## Signature

- Provided by: **GPT 5.6 Luna (openai/gpt-5.6-luna)** — 2026-11-02
- Method: current xAI and AWS model documentation, BenchLM's October 29 profile, Artificial Analysis, Vals, Gert Labs, and OpenRouter benchmark rows. Model identity, effort settings, and benchmark versions were kept distinct; scores are normalized interpretations, not official vendor scores.
- Reference URLs:
  - [xAI Grok 4.3 API documentation](https://docs.x.ai/developers/models/grok-4.3)
  - [AWS Bedrock Grok 4.3 model card](https://docs.aws.amazon.com/bedrock/latest/userguide/model-card-xai-grok-4-3.html)
  - [BenchLM Grok 4.3 profile](https://benchlm.ai/models/grok-4-3)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
