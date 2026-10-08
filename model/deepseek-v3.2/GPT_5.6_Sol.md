# DeepSeek V3.2 — findings by GPT 5.6 Sol

- Source: DeepSeek (`deepseek-ai/DeepSeek-V3.2`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V3.2
- **Short description:** Open-weight MoE unifying efficient sparse-attention reasoning with tool use in thinking and non-thinking modes.
- **Release:** 2025-12-01.
- **Context window:** Approximately 164K tokens, route-dependent.
- **Modalities:** Text input and output.
- **Architecture:** 685B total / 37B active MoE with DeepSeek Sparse Attention.
- **Pricing:** Approximately $0.21/M input, $0.022/M cached input, and $0.31/M output.

### Raw benchmarks found

- DeepSeek reports performance comparable to GPT-5, with integrated thinking-plus-tools and gold-medal-class olympiad variants.
- Public comparative tables report GPQA around the high-80s, LiveCodeBench around 90, SWE-bench results in the low-70s, and AA-LCR in the low-60s for the family/configuration.
- The checkpoint and MIT license are documented in the [official model card](https://huggingface.co/deepseek-ai/DeepSeek-V3.2) and [release notes](https://api-docs.deepseek.com/news/news251201/).

### Normalized scores (1–100)

- **Tool use: 85/100.** Thinking integrated directly into tool use is a key strength, with strong agent results.
- **Reasoning: 88/100.** Frontier-adjacent science, math, and olympiad evidence supports a high score.
- **Context window: 80/100.** Sparse attention makes the 164K window efficient, though it is below newer 256K–1M offerings.
- **Multimodal: 15/100.** This release is text-only.
- **Coding: 88/100.** Strong LiveCodeBench and software-agent results make it a leading open coder of its generation.
- **Cost efficiency: 97/100.** Very low API rates and MIT weights offer outstanding value.
- **Overall Score: 71/100.** Half-up mean of the five non-cost dimensions; excellent open text reasoning and coding held down by no multimodality.

---

## Signature

- Provided by: **GPT 5.6 Sol (openai/gpt-5.6-sol)** — 2026-10-08
- Method: Fresh public internet research using DeepSeek's official model card, release notes, and technical report; scores are normalized interpretations.
- Future sources: add a new file next to this one using the same headings.
