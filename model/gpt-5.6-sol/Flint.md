# GPT-5.6 Sol — findings by Flint

- Source: OpenAI / GPT-5.6 Sol
- Date: 2026-10-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Sol (OpenAI).
- **Short description:** Frontier reasoning/coding model; predecessor of GPT-6 Astra lineage.
- **Provider / access:** OpenAI; API `gpt-5.6-sol`; ChatGPT, Codex, Azure, AWS Bedrock.
- **Release / knowledge:** Released ~2026; knowledge cutoff not stated in sources found.
- **IDs:** gpt-5.6-sol; Context: 1M+; Modalities: multimodal; text out; reasoning; tool use; computer use.

### Raw benchmarks found

- Coding / agentic: Terminal-Bench 4.0: **37.3%**; DeepSWE: **72.7%**; FrontierCode 1.1 Extended: **60.6%.
- Reasoning: GPQA Diamond: **94.6%**; FrontierMath Tier 4: **83.0%`.

### Cross-source comparison

- Independent: OpenAI comparisons, Vals AI, BenchLM.

### Normalized scores (1–100)

- **Tool use: 70/100.** TB4.0 **37.3, DeepSWE **72.7 → agentic mid.
- **Reasoning: 85/100.** GPQA **94.6, FrontierMath **83.0 → reasoning high.
- **Context window: 100/100.** Documented **1,048,576**.
- **Multimodal: 80/100.** Multimodal evals → strong.
- **Coding: 70/100.** DeepSWE **72.7, TB4.0 **37.3 → coding mid-high.
- **Cost efficiency: 60/100.** $5/$30 → expensive.

- **Overall Score: 81/100.** Mean of the five quality dims (Tool 70 + Reasoning 85 + Context 100 + Multimodal 80 + Coding 70) / 5 = 80; Cost efficiency excluded.

## Signature

- Provided by: **GPT-5.6 Sol (gpt-5.6-sol)** — 2026-10-22
- Method: public web research prioritizing official model card/docs plus independent benchmarks — three independent web searches.
- Future sources: add a new file next to this one, e.g. `<Source_Name>.md`, using the same headings.
