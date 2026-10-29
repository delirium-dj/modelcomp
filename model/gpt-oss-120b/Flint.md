# GPT-OSS 120B — findings by Flint

- Source: OpenAI (`openai/gpt-oss-120b`) / Hugging Face (`openai/gpt-oss-120b`) / Artificial Analysis (`artificial-analysis.ai`)
- Date: 2026-10-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-OSS 120B
- **Short description:** OpenAI's open-weight reasoning model (`gpt-oss` family, 120B variant), released under the Apache 2.0 license; text-only model aimed at agentic workflows with tool use, adjustable reasoning effort and full chain-of-thought.
- **Provider / access:** OpenAI open weights (`openai/gpt-oss-120b`) with third-party hosts (Hugging Face `openai/gpt-oss-120b`, Fireworks); Apache 2.0; text in/text out with reasoning; compatible with OpenAI Responses API class of APIs.
- **Release / knowledge:** Released 2025-08-05 (OpenAI launch of `gpt-oss`); knowledge cutoff not independently resolved.

### Raw benchmarks found

Official sources (OpenAI — model card / launch post / Hugging Face `openai/gpt-oss-120b` / arXiv 2508.10925):

- OpenAI reports `gpt-oss-120b` achieves near-parity with OpenAI o4-mini on core reasoning benchmarks while running efficiently on a single 80 GB GPU; mixture-of-experts architecture with roughly 117B total parameters / ~5.1B active; designed for agentic workflows with tool use (web search, Python execution) and adjustable reasoning effort; full chain-of-thought and structured outputs.
- OpenAI safety evaluation: the default `gpt-oss-120b` did not reach OpenAI's indicative High capability thresholds in the Biological/Chemical, Cyber, or AI Self-Improvement tracked categories; adversarial fine-tuning did not raise Biological/Cyber capability to High.

Independent sources:

- Artificial Analysis: `gpt-oss-120b` positioned as the most intelligent American open-weight model in coverage of the launch reaction.
- Fireworks.ai: deep-dive benchmark analysis of the `gpt-oss` 20b & 120b releases.
- Oumi.ai: independent evaluation of GPT-OSS-120B ("reality check" coverage of the launch).
- Benchgecko: evaluation of `gpt-oss-120b` across 48 benchmarks; measured context window **131K tokens**; input pricing about **$0.04/1M tokens**.

Conflicts:

- OpenAI's self-reported near-parity with o4-mini vs independent third-party evaluations (Oumi, Fireworks, Benchgecko): independent runs described more modest absolute gaps / different relative standing; numbers not fully reconciled.
- Context window: OpenAI did not publish a context length in the model card; the independent measurement was ~131K tokens.

## Normalized scores (1–100)

- **Tool use: 50/100.** Official design target for agentic tool use (web search + Python) documented by OpenAI; independent tool-use benchmark capture incomplete → mid band, capped by missing dedicated verified tool score.

- **Reasoning: 55/100.** OpenAI: near-parity with o4-mini on core reasoning benchmarks; independent sources rank the open-weight model highly within the American open-weight tier → high relative standing; capped by undisclosed absolute parity vs proprietary o4-mini.

- **Context window: 40/100.** Official model card silent on context; independent measurement ~131K tokens → low band, capped by source conflict.

- **Multimodal: 15/100.** Text-only model → minimum band.

- **Coding: 50/100.** Agentic coding supported via tool use + Python execution per OpenAI; no dedicated SWE-bench-verified figure captured for this open-weight release → mid band.

- **Cost efficiency: 90/100.** Apache 2.0 open weights plus ~$0.04/1M input token independent pricing → low marginal inference cost.

- **Overall Score: 42/100.** Mean of five quality dims: Tool 50 + Reasoning 55 + Context 40 + Multimodal 15 + Coding 50 = 210 /5 = 42; Cost excluded.

## Signature

- Provided by: **Flint (openai/gpt-oss-120b)** — 2026-10-29
- Method: public web research prioritizing official model card/docs (OpenAI / Hugging Face) plus independent benchmark sources (Artificial Analysis, Fireworks, Oumi, Benchgecko); conflicting results compared.
- Future sources: add a new file next to this one, e.g. `GPT_OSS_120B.md`, using the same headings.
