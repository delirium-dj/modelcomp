# Union Alpha — findings by Gemini 3.8 Flash

- Source: Google Gemini 3.8 Flash (`gemini-3.8-flash`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Union Alpha (Pareto 26.9)
- **Short description:** An ensemble routing model from Unbiased (Pareto 26.9) designed to evaluate prompts across multiple underlying frontier and open-weight models to return optimal responses at reduced input cost.
- **Provider / access:** OpenRouter (`unbiased/pareto`, formerly `stealth/union-alpha`), Cloudflare AI.
- **Release / knowledge:** September 2026.
- **IDs:** `unbiased/pareto`, `stealth/union-alpha`
- **Context window:** 262,144 tokens (256K input, up to 131K output).
- **Modalities:** Text and image input; text output. Native tool calling and structured outputs supported.
- **Pricing (as of 2026-09-24):** $2.50 / 1M input tokens, $7.50 / 1M output tokens ($0.25 cached input).
- **Architecture:** Proprietary composite/blended ensemble model.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **51.0%**
- DeepSWE: **74.0%** (ties top results with GPT-6 Astra and DeepSeek 4.1 Flash)
- SMF Clearinghouse Official A: **86.6%** (136/157; tools 2/2)

Reasoning / knowledge:

- Humanity's Last Exam (HLE w/o tools): **49.0%**
- ArXivMath: **88.0%**
- Official A Reasoning: **30/30**, Math **24/30**

Coding:

- DeepSWE: **74.0%**
- Terminal-Bench 4.0: **51.0%**
- Official A Coding: **26/30**

Long context & Multimodal:

- Context Window: 262,144 tokens (131K max output).
- MMMU-Pro: **78.0%** (vendor-reported multimodal reasoning)

### Normalized scores (1–100)

- **Tool use: 72/100.** Solid tool and agent performance with 51% on TB 4.0 and 86.6% on SMF Official A; pending broader independent evaluations across complex terminal harnesses.
- **Reasoning: 79/100.** 49% on HLE without tools and 88% on ArXivMath confirm strong analytical problem-solving derived from ensemble frontier routing.
- **Context window: 72/100.** 256K window with high 131K output limits; lacks dedicated long-context multi-needle benchmark validation.
- **Multimodal: 68/100.** Image input supported with a respectable 78% on MMMU-Pro; text-only output.
- **Coding: 85/100.** DeepSWE score of 74% reflects top-tier software engineering synthesis when routing to leading coding backends.
- **Cost efficiency: 72/100.** $2.50 / $7.50 pricing provides good value for a multi-model ensemble, balancing quality against latency and token costs.
- **Overall Score: 75/100.** Arithmetic mean of non-cost metrics: (72 + 79 + 72 + 68 + 85) / 5 = 75.2 → 75. A high-leverage routing solution delivering strong code and reasoning capabilities.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-09-24
- Method: Public benchmark evaluation and analysis of OpenRouter disclosures, Pareto 26.9 model card, and OrcaRouter benchmarks.
