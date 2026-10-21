# Union Alpha — findings by Gemini 3.8 Flash

- Source: Unbiased (`unbiased/pareto`, formerly stealth `stealth/union-alpha`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Union Alpha (Pareto 26.9)
- **Short description:** A parallel-mixture ensemble gateway developed by Unbiased (Circuit & Chisel), originally previewed as stealth "Union Alpha" before being revealed as Pareto 26.9; evaluates and synthesizes responses simultaneously across multiple frontier and open models.
- **Provider / access:** [OpenRouter](https://openrouter.ai/models/unbiased/pareto) (`unbiased/pareto`, retired stealth alias `stealth/union-alpha`), Cloudflare AI.
- **Release / knowledge:** 2026-09 release (stealth preview September 2026; unmasked as Pareto 26.9).
- **IDs:** `unbiased/pareto`, `unbiased/pareto-26.9` (formerly `stealth/union-alpha`)
- **Context window:** 262,144 tokens (256K input window, up to 131,072 max output tokens).
- **Modalities:** Text and image input; text output; native tool calling and structured outputs supported.
- **Pricing (as of 2026-10-21):** $2.50 / 1M input tokens, $7.50 / 1M output tokens ($0.25 cached input) ([OpenRouter](https://openrouter.ai/models/unbiased/pareto)).
- **Architecture:** Parallel-mixture ensemble routing gateway synthesizing multi-model consensus across top frontier backends.

### Raw benchmarks found

Agent / tool use:
- Terminal-Bench 2.1 / 4.0: **51.0%**
- DeepSWE: **74.0%** (ties leading scores with frontier backends)
- SMF Clearinghouse Official A: **86.6%** (136/157; tools 2/2)

Reasoning / knowledge:
- Humanity's Last Exam (HLE w/o tools): **49.0%** ([Scale AI / CAIS HLE](https://scale.com/leaderboard/hle))
- ArXivMath: **88.0%**
- Official A Reasoning: **30/30**, Math **24/30**

Coding:
- DeepSWE: **74.0%** ([Datacurve DeepSWE](https://datacurve.ai))
- Terminal-Bench: **51.0%**
- Official A Coding: **26/30**

Long context & Multimodal:
- Context Window: 262,144 tokens with 131K max output tokens.
- MMMU-Pro: **78.0%** (multimodal perception and diagram understanding).

### Normalized scores (1–100)

- **Tool use: 72/100.** Solid tool and agent performance with 51% on Terminal-Bench and 86.6% on SMF Official A; pending broader independent evaluations across complex terminal harnesses.
- **Reasoning: 79/100.** 49% on HLE without tools and 88% on ArXivMath confirm strong analytical problem-solving derived from ensemble frontier routing.
- **Context window: 72/100.** 256K window with high 131K output limits; lacks dedicated long-context multi-needle benchmark validation.
- **Multimodal: 68/100.** Image input supported with a respectable 78% on MMMU-Pro; text-only output.
- **Coding: 85/100.** DeepSWE score of 74% reflects top-tier software engineering synthesis when routing to leading coding backends.
- **Cost efficiency: 72/100.** $2.50 / $7.50 pricing provides good value for a multi-model ensemble, balancing quality against latency and token costs.
- **Overall Score: 75/100.** Arithmetic mean of five non-cost quality metrics: (72 + 79 + 72 + 68 + 85) / 5 = 75.2 → 75. A high-leverage routing solution delivering strong code and reasoning capabilities.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-21
- Method: Public benchmark evaluation and analysis of OpenRouter disclosures, Pareto 26.9 model documentation, and Datacurve DeepSWE leaderboards; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
