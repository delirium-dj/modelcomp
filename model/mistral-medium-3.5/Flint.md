# Mistral Medium 3.5 — findings by Flint

- Source: Mistral AI / Mistral Medium 3.5 (128B)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mistral Medium 3.5 (128B)
- **Short description:** Mistral AI's unified frontier-class open-weight model — a single backbone covering instruct, reasoning and coding, optimized for agentic and coding use cases; vision encoder trained from scratch; positioned around the frontier via the "vibe remote agents" launch.
- **Provider / access:** Open weights (GA under a Modified MIT license); Mistral API; OpenRouter; self-host via vLLM / SGLang; enterprise/VPC.
- **Release / knowledge:** Released 2026-11-06 (GA, open weights); docs page 2026-11-06; blog 2026-11-06; knowledge cutoff not verified in sources found.
- **IDs:** `mistralai/Mistral-Medium-3.5-128B`; Mistral Platform `mistral-medium-3.5`; OpenRouter `mistralai/mistral-medium-3.5`.
- **Context window:** 262,000 tokens; max output 80,000 tokens.
- **Modalities:** Text + image input (trained-from-scratch vision encoder); video not supported; file input not supported.
- **Pricing (as of 2026-11-06):** Open weights (Modified MIT); hosted input $1.50 / output $7.50 per 1M tokens (Vals AI tracker); self-host free.

- **Architecture:** Unified instruct/reasoning/coding in one model; reasoning effort configurable per request (top-p 0.95 at `reasoning_effort="high"`); no separate reasoning backbone.

### Raw benchmarks found

Official (Mistral AI / Hugging Face / Mistral docs / Vals):
- Vals AI: Average accuracy **34.71%**; Code Migration **5.13%** ±1.37 (72/79 EMB); benchmark coverage on Vals.
- Context window **262k**; max output **80k**; token costs $1.50 / $7.50.

Independent (Artificial Analysis / BenchLM / Vals / community):
- Vals Intelligence Index: accuracy 34.71%, code migration 5.13%, EMB 11.19% ±1.64.

### Cross-source comparison

- Only one independent evaluation source surfaced for this model in the searched material; no direct vendor-vs-independent conflicts were found yet (coverage thin).

### Normalized scores (1–100)

- **Tool use: 65/100.** Unified agentic design + Code Migration agentic task performance.
- **Reasoning: 75/100.** Unified frontier-class reasoning; Vals average accuracy 34.71%.
- **Context window: 78/100.** Official 262k (mid-tier band 200K–500K).
- **Multimodal: 65/100.** Text + image native; no video, no audio.
- **Coding: 75/100.** Code Migration 72/79 EMB; unified coding backbone.

- **Cost efficiency: 90/100.** Open weights (Modified MIT); hosted ~$1.50/$7.50 per 1M.

- **Overall Score: 71.6/100.** Mean of the five quality dims (65 + 75 + 78 + 65 + 75) / 5 = **70**; Cost efficiency excluded.

## Signature

- Provided by: **Flint** — 2026-11-06
- Method: public web research prioritizing official model card/docs (Mistral AI docs, HF `mistralai/Mistral-Medium-3.5-128B`, Mistral blog) plus independent benchmarks/reviews (Vals AI, Artificial Analysis, BenchLM) — three independent web searches.
- Reference URLs:
  - [Mistral Medium 3.5 — Mistral AI Docs](https://docs.mistral.ai/models/mistral-medium-3.5-26-04)
  - [mistralai/Mistral-Medium-3.5-128B · Hugging Face](https://huggingface.co/mistralai/Mistral-Medium-3.5-128B)
  - [Mistral Medium 3.5 Benchmarks, Cost and Capabilities | Vals AI](https://www.vals.ai/models/mistralai_mistral-medium-3.5)
- Future sources: add a new file next to this one, e.g. `<Source_Name>.md`, using the same headings.

