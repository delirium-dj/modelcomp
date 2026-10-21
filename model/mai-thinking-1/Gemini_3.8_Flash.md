# MAI-Thinking-1 — findings by Gemini 3.8 Flash

- Source: opencode/mai-thinking-1
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** MAI-Thinking-1
- **Short description:** Microsoft AI's flagship medium-to-large reasoning foundation model with sparse MoE architecture, dynamic adaptive chain-of-thought, and formal verification for complex STEM and enterprise code generation.
- **Provider / access:** Microsoft AI, [OpenCode](https://opencode.ai) (`opencode/mai-thinking-1`), Azure AI.
- **Release / knowledge:** Mid 2026 release; knowledge cutoff 2026.
- **IDs:** `opencode/mai-thinking-1`, `mai-thinking-1`
- **Context window:** 131,072 tokens total (128K context window; 32,768 max output).
- **Modalities:** Text in / text out only; dynamic reasoning chains and tool calling.
- **Pricing (as of 2026-10-21):** $2.00 / 1M input tokens, $10.00 / 1M output tokens ($0.40 / 1M cached input); accessible via Azure AI and Microsoft developer endpoints.
- **Architecture:** Sparse Mixture-of-Experts with dynamic reasoning token allocation and step-level self-verification.

### Raw benchmarks found

> All rows are Microsoft's technical report / model card (self-reported, GPT-5-mini judge for STEM); third-party validations across developer suites.

Reasoning / knowledge:

- GPQA Diamond: **84.2%**; MMLU-Pro: 85.0%; SimpleQA Verified: 31.0%; IFBench: 69.0%; Advanced IF: 85.0%
- AIME 2025: **97.0%**; AIME 2026: **94.5%**; HMMT Feb 2026: 84.9%
- LiveCodeBench v6: **87.7%**; GraphWalks (≤128K): 90.0%
- LongFact: 98.0%; TruthfulQA: 88.0%; AIR-Bench: 88.0%

Coding / agent:

- SWE-bench Verified: **73.5%**; SWE-bench Pro: 52.8%; Terminal-Bench 2.0: **46.0%**; BFCL v3: 72.0%
- Human side-by-side (Surge AI, 1,276 tasks, vendor-commissioned): vs Claude Sonnet 4.6 won 49% / tied 6% / lost 45%

Long context:

- 128K context window with high GraphWalks retention (90% at ≤128K).

### Normalized scores (1–100)

- **Tool use: 68/100.** Normalized assessment of autonomous tool execution and function calling (72.0 BFCL v3, 46.0% Terminal-Bench 2.0).
- **Reasoning: 82/100.** Normalized assessment of complex multi-step reasoning and deductive analysis (84.2% GPQA Diamond, 94.5% AIME 2026).
- **Context window: 74/100.** Effective retrieval fidelity across context capacity (131,072 tokens total).
- **Multimodal: 15/100.** Baseline text-only score; lacks native vision, audio, or video processing.
- **Coding: 78/100.** Verified software engineering and code generation capability (73.5% SWE-bench Verified, 87.7% LiveCodeBench).
- **Cost efficiency: 70/100.** Value proposition relative to performance and pricing structure ($2.00 / $10.00).
- **Overall Score: 63/100.** Arithmetic mean of non-cost metrics: (68 + 82 + 74 + 15 + 78) / 5 = 63.4 → 63. Frontier deep-thinking reasoning and verification specialist engineered for enterprise STEM and complex software logic.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-21
- Method: Public benchmark evaluation and analysis of Microsoft AI technical reports, Surge AI evaluations, and OpenCode endpoints.
