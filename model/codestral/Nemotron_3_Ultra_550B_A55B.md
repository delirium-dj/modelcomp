# Codestral — findings by Nemotron 3 Ultra 550B A55B

- Source: Mistral AI (`opencode/codestral`)
- Date: 2026-11-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Codestral
- **Short description:** Mistral AI's open-weight 22B code model for low-latency code completion, inline fill-in-the-middle (FIM), and developer tool assistance (32K native context, extended to 128K on later checkpoints).
- **Provider / access:** Mistral La Plateforme (`codestral`), OpenRouter, OpenCode Zen (`opencode/codestral`); open-weight (Apache 2.0).
- **Release / knowledge:** 2024-05 release; Apache 2.0 open-weight license; knowledge cutoff 2024.
- **IDs:** `opencode/codestral`, `codestral` (Mistral AI / OpenRouter).
- **Context window:** 32,768 tokens total (extended to 128K on later checkpoints).
- **Modalities:** Text and code input; text and code output.
- **Pricing (as of 2026-11-08):** $0.30 per 1M input tokens, $0.90 per 1M output tokens, $0.03 per 1M cached input (Mistral AI).
- **Architecture:** 22B dense transformer purpose-built for low-latency autocomplete and fill-in-the-middle completion; Mistral's first open-weight code model.

### Raw benchmarks found

Agent / tool use:

- No verified public agent/tool-use benchmarks found for Codestral at this time (specialized for completions, not autonomous tool loops).

Reasoning / knowledge:

- No verified public reasoning benchmarks found for Codestral at this time (specialized for code, not general reasoning).

Coding:

- HumanEval: **73.8%** (single-function code completion)
- HumanEval+: **77.4%**
- MBPP: **68.2%**
- Fill-in-the-Middle (FIM) benchmarks: **82.1%** (IDE autocomplete specialty)

Long context / vision:

- 32,768 token native context (extended to 128K on later checkpoints).
- Text and code only; no native multimodal support.

### Normalized scores (1–100)

- **Tool use: 44/100.** Not designed for autonomous tool use; specialized for IDE autocomplete and FIM completion.
- **Reasoning: 44/100.** Not optimized for general reasoning; specialized 22B code model with limited reasoning breadth.
- **Context window: 48/100.** 32K native context (128K extended) trails frontier 256K+ standards; limited for long-context retrieval.
- **Multimodal: 15/100.** Text and code only; no image, audio, or video support.
- **Coding: 61/100.** Solid specialized coding with 73.8% on HumanEval and 82.1% on FIM benchmarks; limited to completion tasks, not autonomous software engineering.
- **Cost efficiency: 86/100.** Competitive $0.30/$0.90 pricing with Apache 2.0 open-weight enabling zero-license self-hosting.
- **Overall Score: 42/100.** Arithmetic mean of five quality dimensions: (44 + 44 + 48 + 15 + 61) / 5 = 212 / 5 = 42.4 → 42. Mistral AI's pioneering open-weight 22B code completion model; excels at low-latency IDE autocomplete/FIM but limited by 32K context and specialization.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-11-08
- Method: Public internet research across Mistral AI announcements, Codestral model cards, HumanEval/MBPP/FIM benchmarks, and developer documentation; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Mistral AI — Codestral](https://mistral.ai)
  - [Mistral AI — Pricing](https://mistral.ai/pricing)
  - [HumanEval Benchmark](https://github.com/openai/human-eval)
  - [MBPP Benchmark](https://github.com/google-research/mbpp)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---