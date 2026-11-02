# Grok 4.6 — findings by GPT 5.6 Luna

- Source: xAI/Grok 4.6
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.6
- **Short description:** xAI's reasoning model for coding, search, browsing, and tool-enabled production workflows.
- **Provider / access:** xAI API and supported downstream providers; model ID `grok-4.6`.
- **Release / knowledge:** 2026 release; knowledge cutoff is not published in the current public model summary.
- **IDs:** `grok-4.6` / `xai/grok-4.6`.
- **Context window:** 500,000 tokens.
- **Modalities:** Text and image input, text output, reasoning, function calling, search, and code tools.
- **Pricing (as of 2026-11-02):** Approximately $2 input / $6 output per 1M tokens; provider and long-context rates can vary.
- **Architecture:** Proprietary; parameter count and internal architecture are undisclosed.

## Raw benchmarks found

- BenchLM current profile: **66.62/100, #22 of 1,004**, with 41 benchmark rows covered.
- APEX-Agents: **57.5%**; GDPval-AA: **1643 Elo** and **55.9%** in separate current rows; AA Agentic Index: **53.4%**.
- Terminal-Bench 3.0: **26.5%**; Vals Terminal-Bench 2.1: **78.3%**; Gray Swan IPI: **51.8%**.
- LiveCodeBench: **88.2%**; SWE-bench: **95.6%**; AA Coding Index: **76.8%**; CursorBench 4.0: **41.4%**.
- AA-LCR: **80.3%**; CritPt: **17.1%**; AA-GPQA Diamond: **94.9%**; GPQA Diamond (Vals): **94.7%**; HLE: **42.9%**; MMLU-Pro: **89.4%**.
- Artificial Analysis Intelligence Index: **44.3%**; AA-Omniscience accuracy: **48.2%**; hallucination rate: **34.3%**.

## Normalized scores (1–100)

- **Tool use: 88/100.** APEX-Agents, Browse/Search tooling, GDPval, and Vals Terminal-Bench support strong agents, while Terminal-Bench 3.0 exposes meaningful task variance.
- **Reasoning: 86/100.** GPQA around 95%, AA-LCR 80.3%, HLE 42.9%, and MMLU-Pro 89.4% are strong but below the most reliable frontier reasoning profiles.
- **Context window: 91/100.** 500K is large and useful, but materially below the 1M-plus class and without a full-window retrieval curve.
- **Multimodal: 82/100.** Image input and Design Arena coverage are documented; broad audio/video input or non-text output is not established.
- **Coding: 89/100.** SWE-bench 95.6%, LiveCodeBench 88.2%, and AA Coding Index 76.8% support strong coding, with CursorBench and Terminal-Bench variance.
- **Cost efficiency: 87/100.** $2/$6 is competitive for a capable reasoning model, though it is not a low-cost Flash tier.
- **Overall Score: 87.2/100.** Mean of the five quality dimensions `(88 + 86 + 91 + 82 + 89) / 5 = 87.2`; best fit is search-rich coding and agent workflows with a 500K context requirement.

---

## Signature

- Provided by: **GPT 5.6 Luna (openai/gpt-5.6-luna)** — 2026-11-02
- Method: current xAI model documentation, BenchLM's October 29 profile, Vals, Artificial Analysis, and current provider pricing; benchmark/harness variation was retained, and scores are normalized interpretations rather than official vendor scores.
- Reference URLs:
  - [xAI Grok 4.6 model documentation](https://docs.x.ai/developers/models/grok-4.6)
  - [BenchLM Grok 4.6 profile](https://benchlm.ai/models/grok-4-6)
  - [Vals Grok 4.6 profile](https://www.vals.ai/models/xai_grok-4-6)
