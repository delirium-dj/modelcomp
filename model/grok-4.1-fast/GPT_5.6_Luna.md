# Grok 4.1 Fast — findings by GPT 5.6 Luna

- Source: xAI / Grok 4.1 Fast (tracked base/non-reasoning route)
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.1 Fast
- **Short description:** xAI's inexpensive, long-context agent model for fast tool-calling workflows. The tracked BenchLM base profile is non-reasoning; Grok 4.1 Fast (Reasoning) is a separate sibling and its scores are not imported here.
- **Provider / access:** xAI API with function calling and structured outputs; the official docs expose both non-reasoning and reasoning model IDs. The current docs page for the reasoning route also lists `grok-4-1-fast` as an alias, so alias naming is recorded rather than silently treated as a different checkpoint.
- **Release / knowledge:** Released in November 2025; xAI's current model page does not state a reliable knowledge cutoff.
- **IDs:** Base/non-reasoning route `xai/grok-4-1-fast-non-reasoning`; catalogue shorthand `xai/grok-4.1-fast`. Reasoning sibling `grok-4-1-fast-reasoning` is excluded from the base score.
- **Context window:** 2,000,000 tokens (xAI documentation); xAI applies higher-context pricing above 128K. A max-output limit was not verified from the official page.
- **Modalities:** Text and image input, text output; function calling, structured outputs, and agent tools. The base route is explicitly non-reasoning.
- **Pricing (as of 2026-11-02):** $0.20 input / $0.50 output / $0.05 cached input per 1M tokens; live search is $25 per 1,000 sources. Regional and higher-context pricing can differ.
- **Architecture:** Proprietary xAI model.

### Raw benchmarks found

> Variant identity is the central caveat. BenchLM's current base page labels Grok 4.1 Fast as non-reasoning; the reasoning sibling has materially different results. Reasoning-sibling rows such as tau2-bench 93.3% and AA LiveCodeBench 82.2% are deliberately excluded.

Agent / tool use:

- BenchLM/Artificial Analysis tau2-bench: **63.7%**; Gert Labs: **47.32%**.
- BenchLM's base profile is partial: **35.39/100**, rank **#164/1004**, with 12/724 benchmark rows.

Reasoning / knowledge:

- AA-LCR: **31.3%**; CritPt: **0.0%**; Artificial Analysis Intelligence Index: **11.3**.
- AA-GPQA Diamond: **63.7%**; AA-HLE: **5.1%**; AA omniscience index: **-50.9%**; accuracy / hallucination rate: **17.2% / 82.3%**.

Coding:

- No verified exact-base coding score was located in the current base profile. The reasoning sibling's LiveCodeBench result is not substituted; the base report is therefore provisional for coding.

Multimodal:

- AA-MMMU-Pro: **48.4%**. Official text/image input is verified, but no audio/video input or non-text output was found.

Long context:

- Official capacity: **2M tokens**; AA-LCR is only **31.3%**, so the nominal window should not be read as reliable full-window retrieval.

### Normalized scores (1–100)

- **Tool use: 72/100.** Function calling and tau2-bench 63.7% are useful, but Gert Labs 47.32% and sparse exact-base coverage cap autonomous reliability.
- **Reasoning: 50/100.** The base/non-reasoning route has Index 11.3, HLE 5.1%, GPQA 63.7%, and an 82.3% hallucination rate; reasoning-sibling results are excluded.
- **Context window: 90/100.** The 2M advertised capacity is exceptional, but AA-LCR 31.3% is a major quality caveat and no full-window retrieval curve is public.
- **Multimodal: 70/100.** Image input and an AA-MMMU-Pro result establish useful vision capability, but 48.4% is moderate and output is text-only.
- **Coding: 60/100.** No exact base coding suite was found, so this is a conservative text/tool-workflow score rather than an import of the reasoning sibling's coding results.
- **Cost efficiency: 98/100.** $0.20/$0.50 pricing and cheap cached input are excellent, although long-context surcharges and live-search fees apply.
- **Overall Score: 68.4/100.** `(72 + 50 + 90 + 70 + 60) / 5 = 68.4`; best fit is inexpensive fast tool use with short-to-moderate reasoning, not the separate reasoning route's workload.

---

## Signature

- Provided by: **GPT 5.6 Luna (openai/gpt-5.6-luna)** — 2026-11-02
- Method: current xAI documentation/search results, OpenCode model metadata, and BenchLM's October 29 base and reasoning-sibling profiles. Alias ambiguity and base-versus-reasoning evidence were preserved; scores are normalized interpretations, not official vendor scores.
- Reference URLs:
  - [xAI Grok 4.1 Fast non-reasoning documentation](https://docs.x.ai/developers/models/grok-4-1-fast-non-reasoning)
  - [xAI Grok 4.1 Fast reasoning documentation](https://docs.x.ai/docs/models/grok-4-1-fast-reasoning)
  - [OpenCode Grok 4.1 Fast model data](https://opencode.ai/data/xai/grok-4-1-fast)
  - [BenchLM Grok 4.1 Fast base profile](https://benchlm.ai/models/grok-4-1-fast)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
