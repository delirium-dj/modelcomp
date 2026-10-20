# Qwen 3.5 Flash — findings by Qwen 3.7 Plus

- Source: Alibaba (`qwen-3.5-flash`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 Flash
- **Short description:** Alibaba's hosted Flash-tier model from the Qwen 3.5 family. Optimized for fast, cheap multimodal agentic work via Model Studio. Superseded by Qwen 3.6/3.7 Flash tiers. Released February 15, 2026.
- **Provider / access:** Alibaba Model Studio (hosted); OpenRouter `qwen/qwen3.5-flash-02-23`. OpenCode Zen `opencode/qwen-3.5-flash`.
- **Release / knowledge:** 2026-02-15; knowledge cutoff not publicly stated.
- **IDs:** `opencode/qwen-3.5-flash` (OpenCode Zen), `qwen/qwen3.5-flash-02-23` (OpenRouter).
- **Context window:** ~1,000,000 tokens (1M) (tracker-reported, unverified); 65,536 max output.
- **Modalities:** Text in/out; vision support unverified per meta.json.
- **Pricing (as of 2026-10-20):** ~$0.065/1M input, ~$0.26/1M output (per OpenRouter — extremely cheap).
- **Architecture:** Proprietary hosted; part of Qwen 3.5 family; exact parameter count not disclosed for Flash tier.

### Raw benchmarks found

> Sources: BenchLM (benchlm.ai/models/qwen3-5-flash, 2026-10-20), Vals AI (via BenchLM), Epoch AI FrontierMath. Coverage note: BenchLM covers only 5 of 666 benchmarks — very sparse coverage.

Agent / tool use:

- No agentic benchmark scores found.

Reasoning / knowledge:

- GPQA Diamond (Vals): **82.8%** (Vals AI via BenchLM — strong graduate-level reasoning)
- MMLU-Pro (Vals): **84.1%** (Vals AI via BenchLM — strong broad knowledge)
- FrontierMath v2 (Tiers 1-3): **18.25%** (Epoch AI — weak on frontier math)

Coding:

- LiveCodeBench (Vals): **83.3%** (Vals AI via BenchLM — excellent competitive programming)
- SWE-bench (Vals): **64.4%** (Vals AI via BenchLM — moderate repository-level coding)

Multimodal & Grounded:

- No multimodal benchmark scores found. Vision support unverified.

Long context:

- No long-context retrieval benchmarks found. ~1M context per tracker reports.

### Normalized scores (1–100)

> Derived from the raw numbers above using the methodology in `model-comparison.md`. Note: BenchLM covers only 5 of 666 benchmarks — extremely sparse coverage.

- **Tool use: 45/100.** No agentic benchmark scores found. Flash tier is designed for fast agentic work per Alibaba, but no independent verification. Capped by complete absence of tool-use benchmark evidence.
- **Reasoning: 58/100.** GPQA Diamond 82.8% is strong. MMLU-Pro 84.1% is solid. However, FrontierMath v2 18.25% is weak — indicating limited frontier mathematical reasoning. Capped by poor FrontierMath performance.
- **Context window: 90/100.** ~1M tokens — top tier. 65K max output is generous. Docked 10 for unverified context window and no long-context retrieval benchmarks.
- **Multimodal: 20/100.** Vision support listed as "unverified" in meta.json. No multimodal benchmark scores found. Score reflects uncertain multimodal capability. Capped by lack of verification.
- **Coding: 72/100.** LiveCodeBench 83.3% is excellent — matches frontier models. SWE-bench 64.4% is moderate. The gap between competitive programming (excellent) and repository-level coding (moderate) suggests strong code generation but weaker real-world software engineering. Capped by moderate SWE-bench.
- **Cost efficiency: 95/100.** ~$0.065/$0.26 per 1M is extremely cheap — among the lowest in the dataset. Excellent value for coding and reasoning workloads.
- **Overall Score: 57/100.** Mean of five non-cost dims: (45 + 58 + 90 + 20 + 72) / 5 = 57. Budget Flash-tier model with excellent LiveCodeBench (83.3%), strong GPQA Diamond (82.8%), MMLU-Pro (84.1%), and ~1M context at ultra-low pricing (~$0.065/$0.26 per 1M). However, held back by weak FrontierMath (18.25%), moderate SWE-bench (64.4%), unverified multimodal, and no tool-use benchmarks. Superseded by Qwen 3.6/3.7 Flash. Best fit for: cost-sensitive competitive programming, quick reasoning tasks, and budget agentic workflows.

---

## Signature

- Provided by: **Qwen 3.7 Plus (opencode/qwen-3.7-plus)** — 2026-10-20
- Method: public internet research across BenchLM, Vals AI, Epoch AI, Qwen blog, OpenRouter, and Alibaba Model Studio docs; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
