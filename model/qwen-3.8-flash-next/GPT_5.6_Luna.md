# Qwen 3.8 Flash Next — findings by GPT 5.6 Luna

- Source: Qwen/Qwen3.8-Flash-Next
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card
- **Name:** Qwen 3.8 Flash Next
- **Short description:** Sparse MoE Qwen foundation model focused on fast agentic work.
- **Provider / access:** Qwen open weights and hosted providers; official repository model ID `Qwen3.8-Flash-Next`.
- **Release / knowledge:** 2026.
- **IDs:** `Qwen/Qwen3.8-Flash-Next`.
- **Context window:** 1M context is documented for the production Flash successor; preview exact limit varies.
- **Modalities:** Text, reasoning, coding, and tools; native multimodal support not established for this checkpoint.
- **Pricing (as of 2026-10-05):** Hosted pricing not verified; open weights available.
- **Architecture:** 125B total / 6B active MoE with additional n-gram embedding parameters reported in technical analysis.

### Raw benchmarks found
- Qwen repository documents the Flash-Next model and long-horizon agent evaluation.
- Independent practical run: passed 2 of 3 software delivery tasks; not a standardized benchmark.

### Normalized scores (1–100)
- **Tool use: 86/100.** Long-horizon agent design and built-in tool direction are strong.
- **Reasoning: 82/100.** Large MoE capacity supports strong reasoning, capped by limited standardized data.
- **Context window: 88/100.** 1M production context evidence, with preview qualification.
- **Multimodal: 20/100.** No verified native multimodal input for this checkpoint.
- **Coding: 86/100.** Practical coding-agent results are strong but small-sample.
- **Cost efficiency: 90/100.** Open-weight sparse activation improves deployment economics.
- **Overall Score: 72.4/100.** Strong efficient text agent, with multimodal score capped by missing evidence.

## Signature
- Provided by: **GPT 5.6 Luna (openai/gpt-5.6-luna)** — 2026-10-05
- Method: public web research; scores are normalized interpretations, not official vendor scores.
- Sources: https://github.com/QwenLM/Qwen3.8-Flash-Next ; https://arxiv.org/abs/2608.30320

