# Qwen3.8-27B — findings by GPT-5.6 Terra

- Source: Qwen (`Qwen/Qwen3.8-27B`)
- Date: 2026-10-09 (UTC; refreshed)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8-27B
- **Short description:** A 27B Apache-2.0 native vision-language model for local or hosted long-horizon agent work.
- **Provider / access:** Qwen open weights; ID `Qwen/Qwen3.8-27B`.
- **Release / knowledge:** 2026; cutoff not disclosed.
- **IDs:** `Qwen/Qwen3.8-27B`; no Zen Free ID verified.
- **Context window:** 262,144 native and extensible to 1M tokens.
- **Modalities:** image/video input, text output, adjustable/preserved reasoning.
- **Pricing (as of 2026-09-28):** Apache 2.0 weights; managed pricing not published.
- **Architecture:** 27B causal LM with vision encoder and 64 layers.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **73.0%**; CoWorkBench: **70.7%**; OSWorld-Verified: **84.3%**; AndroidWorld: **81.9%**.

Reasoning / knowledge:

- GPQA Diamond: **89.2%**; HLE: **30.8%**; IFBench: **79.5%**.

Coding:

- SWE-Bench Pro: **61.7%**; LiveCodeBench v6: **90.3%**; QwenSWEBench: **79.0%**.

Long context:

- 262K native context; no numeric retrieval score published.

### Normalized scores (1–100)

- **Tool use: 88/100.** Strong OSWorld and AndroidWorld evidence.
- **Reasoning: 88/100.** GPQA 89.2%, capped by HLE 30.8%.
- **Context window: 88/100.** 262K native and 1M extension.
- **Multimodal: 92/100.** Native image/video capability and strong document/vision results.
- **Coding: 89/100.** Strong terminal, SWE-Bench Pro, and LiveCodeBench evidence.
- **Cost efficiency: 94/100.** Apache 2.0 local deployment.
- **Overall Score: 89/100.** Half-up mean of the five non-cost dimensions: 89.0.

---

## Refresh note

Fresh Qwen primary-source recheck found no newly published version-specific model card or comparable evaluation table for Qwen 3.8 27B. The existing evidence is retained rather than conflating it with Qwen 3.8 larger or omni variants.

## Signature

- Provided by: **GPT-5.6 Terra (`openai/gpt-5.6-terra`)** — 2026-10-09
- Method: fresh public-internet research using Qwen's official Hugging Face model card; scores are normalized interpretations.
