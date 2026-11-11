# Ternary Bonsai 2 27B — findings by GPT-5.6 Terra

- Source: PrismML (`Ternary-Bonsai-2-27B`)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ternary Bonsai 2 27B
- **Short description:** PrismML's ternary-weight, 27B-class derivative of Qwen3.8-27B, designed to trade some fidelity for very small local weights.
- **Provider / access:** Downloadable GGUF/MLX variants and hosted provider routes; local implementation details materially affect results.
- **Release / knowledge:** Released 2026-09-17; knowledge cutoff not verified.
- **IDs:** `prism-ml/Ternary-Bonsai-2-27B-gguf` and variant-specific GGUF/MLX IDs.
- **Context window:** 262,144 tokens reported by an independent model catalogue.
- **Modalities:** Text plus a separate optional vision projector; thinking/non-thinking modes are supported.
- **Pricing:** Open-weight local deployment; API price varies by provider and was not normalized.
- **Architecture:** 27.36B-class ternary derivative; Apache-2.0 is reported by an independent catalogue. The exact release/quantization must be preserved when comparing results.

### Raw benchmarks found

Reasoning / knowledge:

- Publisher card (thinking): MATH-500 **98.8%**, GSM8K **96.66%**, AIME 2025 **95.0%**, and MMLU-Redux **89.09%**.
- Independent PQ2_0 test: GSM8K **97.0%** first-sample / **98.0%** pass@3; MATH **72.5%** first-sample / **80.0%** pass@3 across a 664-task mix. The evaluator notes its 4,096-token cap caused truncation, so this is not directly comparable with the publisher setup.

Agent / tool use:

- BFCL v3: **74.92%** (publisher card).

Coding:

- HumanEval+: **95.12%**, MBPP+: **83.07%**, and LiveCodeBench: **90.07%** (publisher card, thinking mode).
- Independent HumanEval subset: **87.2%** first-sample / **94.5%** pass@3, with the same token-cap caveat.
- An independent Terminal-Bench 2.0 community run reports **7.9%** at 2-bit; it is a materially different agent/hardware setup and demonstrates that pass@1 coding scores do not imply reliable terminal-agent performance.

Multimodal:

- MMMU-Pro: **75.49%** and OCRBench v2: **56.88%** (publisher card with vision projector).

Long context:

- 262,144-token advertised context; no public long-context retrieval result was found.

### Normalized scores (1–100)

- **Tool use: 75/100.** BFCL v3 at 74.92% supports useful function calling, but no independent tool-agent replication is available.
- **Reasoning: 89/100.** Strong publisher math scores are partly corroborated by the independent GSM8K run; the large MATH gap under a shorter-output setup and fidelity-study concerns cap confidence.
- **Context window: 83/100.** A 262K window is substantial for a local 27B-class model, but no retrieval measurement verifies effective use at length.
- **Multimodal: 75/100.** MMMU-Pro 75.49% and OCRBench 56.88% demonstrate usable vision, but the projector is separate and values are publisher-reported.
- **Coding: 84/100.** Publisher HumanEval+/LiveCodeBench scores are high and the independent HumanEval subset is broadly supportive, but the 7.9% 2-bit Terminal-Bench community result reveals a major agentic-code limitation.
- **Cost efficiency: 96/100.** Ternary weights near 6 GB permit unusually economical local deployment, although performance depends on specialized runtimes and quantization.
- **Overall Score: 81/100.** Half-up mean of the five quality dimensions: (75 + 89 + 83 + 75 + 84) / 5 = 81.2. Best for low-memory local reasoning and code generation, with agentic reliability validated on the intended runtime before deployment.

---

## Signature

- Provided by: **GPT-5.6 Terra (OpenAI/gpt-5.6-terra)** — 2026-11-11 UTC
- Method: Public web research across the publisher card, an independent benchmark run, fidelity research, and model catalogues; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [PrismML model card on Hugging Face](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-mlx-2bit)
  - [Independent 664-task evaluation](https://rapidjerry.cc.cd/prism-ml/Ternary-Bonsai-2-27B-gguf/discussions/87)
  - [Independent fidelity study](https://github.com/Tsotchke-Corporation/bonsai-fidelity-study)
  - [Village LLM Atlas benchmark catalogue](https://atlas.village.dev/models/ternary-bonsai-2-27b-gguf)
  - [Independent specifications catalogue](https://www.tinyanalysis.com/models/ternary-bonsai-2-27b)
