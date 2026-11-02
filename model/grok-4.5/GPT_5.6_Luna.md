# Grok 4.5 — findings by GPT 5.6 Luna

- Source: xAI/Grok 4.5
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.5
- **Short description:** xAI reasoning model for coding, search, browsing, and function-enabled agent workflows.
- **Provider / access:** xAI API; model ID `grok-4.5`, with `grok-4.5-latest` and `grok-build-latest` aliases documented.
- **Release / knowledge:** 2026 release; knowledge cutoff is not published in the current model documentation.
- **IDs:** `xai/grok-4.5` / `grok-4.5`.
- **Context window:** 500,000 tokens.
- **Modalities:** Text and image input, text output, reasoning, function calling, structured outputs, search, and code tools.
- **Pricing (as of 2026-11-02):** $2 input / $6 output per 1M tokens below 200K prompt tokens; $4 / $12 at 200K and above. Batch API pricing is discounted.
- **Architecture:** Proprietary; parameter count and internal architecture are undisclosed.

### Raw benchmarks found

- BenchLM snapshot (2026-10-29): composite **62.92/100**, rank **#39/1004**, with 37 of 724 benchmarks covered; coverage is explicitly partial. ([BenchLM Grok 4.5](https://benchlm.ai/models/grok-4-5))
- Agent rows: Terminal-Bench 2.1 **83.3%** (xAI launch table), **67.8%** (Vals), **81.6%** (Artificial Analysis); DeepSWE **53%**; GDPval-AA **1430**; Tau3 Banking **42.1%**. ([BenchLM Grok 4.5](https://benchlm.ai/models/grok-4-5))
- Coding rows: SWE-bench Pro **64.7%**; SWE Multilingual **78%**; CursorBench 3.2 **66.7%**; LiveCodeBench **87.4%**; SWE-bench (Vals) **86.6%**; AA Coding Index **72.5%**. ([BenchLM Grok 4.5](https://benchlm.ai/models/grok-4-5))
- Reasoning/knowledge rows: ARC-AGI-2 **52.6%**; AA-LCR **79.3%**; GPQA Diamond **93.1%**; HLE **42.7%**; FrontierMath v2 tiers 1–3 **57.193%** and tier 4 **24.390%**. ([BenchLM Grok 4.5](https://benchlm.ai/models/grok-4-5))
- Multimodal evidence: AA-MMMU-Pro **80.4%** and Design Arena Website **1280**. ([BenchLM Grok 4.5](https://benchlm.ai/models/grok-4-5))

### Normalized scores (1–100)

- **Tool use: 85/100.** Official TB2.1 is strong and Tau3/GDPval support useful agents, but Vals and current Terminal-Bench 3.0 results demonstrate meaningful harness/version variance.
- **Reasoning: 87/100.** GPQA Diamond and HLE are strong, with good LCR and ARC-AGI-2 evidence; the intelligence index and FrontierMath results keep it below the very top tier.
- **Context window: 90/100.** Verified 500K context places it in the methodology’s 500K–1M band, without a full-window retrieval curve.
- **Multimodal: 84/100.** Image input and an 80.4% AA-MMMU-Pro result are direct evidence; audio/video input and non-text output are not documented.
- **Coding: 89/100.** Strong SWE, LiveCodeBench, CursorBench, and TB2.1 results support a high coding score, with benchmark and harness spread retained.
- **Cost efficiency: 88/100.** $2/$6 is competitive for a reasoning model, but the 200K long-context tier doubles the rate.
- **Overall Score: 87.0/100.** Mean of the five quality dimensions `(85 + 87 + 90 + 84 + 89) / 5 = 87.0`; best fit is search-heavy coding and agent work with a 500K context requirement.

## Evidence notes

- Terminal-Bench 2.1, Vals, Artificial Analysis, and Terminal-Bench 3.0 are different harness/version measurements and are not averaged as if interchangeable.
- BenchLM’s composite is a partial external reference, not the source of the normalized Overall score.

## Signature

- Provided by: **GPT 5.6 Luna (openai/gpt-5.6-luna)** — 2026-11-02
- Method: current xAI documentation, launch material, BenchLM’s October 29 profile, Vals, and Artificial Analysis; scores are normalized interpretations rather than official vendor scores.
- Reference URLs:
  - [xAI Grok 4.5 model documentation](https://docs.x.ai/developers/models/grok-4.5)
  - [xAI Grok 4.5 launch post](https://x.ai/news/grok-4-5)
  - [BenchLM Grok 4.5 profile](https://benchlm.ai/models/grok-4-5)
