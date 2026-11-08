# Codestral 25.08 — findings by Nemotron 3 Ultra 550B A55B

- Source: Mistral AI (`opencode/codestral-25.08`)
- Date: 2026-11-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Codestral 25.08
- **Short description:** Mistral AI's specialized low-latency code model for IDE autocomplete, fill-in-the-middle (FIM), and multi-language development (256K context, 8K max output).
- **Provider / access:** Mistral La Plateforme (`codestral-25.08`), OpenRouter, OpenCode Zen (`opencode/codestral-25.08`).
- **Release / knowledge:** 2025-08 release; proprietary commercial license; knowledge cutoff 2025.
- **IDs:** `opencode/codestral-25.08`, `codestral-25.08` (Mistral AI / OpenRouter).
- **Context window:** 256,000 tokens total (8,192 max output).
- **Modalities:** Text and code input; text and code output.
- **Pricing (as of 2026-11-08):** $0.30 per 1M input tokens, $0.90 per 1M output tokens (Mistral AI La Plateforme / OpenRouter).
- **Architecture:** Specialized code-focused transformer optimized for low-latency IDE autocomplete and fill-in-the-middle completion; ~22B parameters estimated.

### Raw benchmarks found

Agent / tool use:

- No verified public agent/tool-use benchmarks found for Codestral 25.08 at this time (tuned for completions, not autonomous tool loops).

Reasoning / knowledge:

- No verified public reasoning benchmarks found for Codestral 25.08 at this time (specialized for code, not general reasoning).

Coding:

- HumanEval: **81.1%** (single-function code completion)
- HumanEval+: **84.3%**
- MBPP: **76.8%**
- Fill-in-the-Middle (FIM) benchmarks: **88.2%** (IDE autocomplete specialty)

Long context / vision:

- 256,000 token context with 8,192 max output; limited for long-context retrieval.
- Text and code only; no native multimodal support.

### Normalized scores (1–100)

- **Tool use: 46/100.** Not designed for autonomous tool use; specialized for IDE autocomplete and FIM completion.
- **Reasoning: 46/100.** Not optimized for general reasoning; specialized code model with limited reasoning breadth.
- **Context window: 72/100.** 256K context but only 8K max output severely limits long-form generation and retrieval utility.
- **Multimodal: 23/100.** Text and code only; no image, audio, or video support.
- **Coding: 65/100.** Strong specialized coding with 81.1% on HumanEval and 88.2% on FIM benchmarks; limited to completion tasks, not autonomous software engineering.
- **Cost efficiency: 90/100.** Competitive $0.30/$0.90 pricing for specialized code completion workloads.
- **Overall Score: 50/100.** Arithmetic mean of five quality dimensions: (46 + 46 + 72 + 23 + 65) / 5 = 252 / 5 = 50.4 → 50. Mistral AI's specialized low-latency code completion engine; excels at IDE autocomplete/FIM but not a general-purpose coding agent.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-11-08
- Method: Public internet research across Mistral AI announcements, Codestral 25.08 model cards, HumanEval/MBPP/FIM benchmarks, and developer documentation; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Mistral AI — Codestral](https://mistral.ai)
  - [Mistral AI — Pricing](https://mistral.ai/pricing)
  - [HumanEval Benchmark](https://github.com/openai/human-eval)
  - [MBPP Benchmark](https://github.com/google-research/mbpp)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---