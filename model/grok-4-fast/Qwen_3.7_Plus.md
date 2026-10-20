# Grok 4 Fast (Reasoning) — findings by Qwen 3.7 Plus

- Source: xAI (`grok-4-fast-reasoning`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4 Fast (Reasoning)
- **Short description:** xAI's original fast reasoning model with 2M context window. Budget-priced for high-throughput agentic workflows with web and X search integration. Superseded by Grok 4.1 Fast. Released September 19, 2025.
- **Provider / access:** xAI API `grok-4-fast-reasoning`; OpenRouter `x-ai/grok-4-fast-reasoning`.
- **Release / knowledge:** 2025-09-19; knowledge cutoff not publicly stated.
- **IDs:** `grok-4-fast-reasoning` (xAI API), `x-ai/grok-4-fast-reasoning` (OpenRouter).
- **Context window:** 2,000,000 tokens (2M) (per xAI and BenchLM).
- **Modalities:** Text in/out; reasoning mode enabled; tool calling supported; image input per xAI specs.
- **Pricing (as of 2026-10-20):** $0.20/1M input, $0.50/1M output (per xAI API pricing — same as Grok 4.1 Fast).
- **Architecture:** Proprietary; reasoning variant of Grok 4 Fast; exact parameter count not disclosed.

### Raw benchmarks found

> Sources: BenchLM (benchlm.ai/models/grok-4-fast-reasoning, 2026-10-20), Artificial Analysis (via BenchLM), Vals AI (via BenchLM), xAI announcement. Coverage note: BenchLM covers only 12 of 666 benchmarks — very sparse coverage.

Agent / tool use:

- τ²-bench: **65.8%** (Artificial Analysis via BenchLM — moderate agentic tool use)

Reasoning / knowledge:

- GPQA Diamond: **84.7%** (Artificial Analysis via BenchLM — strong)
- AA-LCR: **73.7%** (Artificial Analysis via BenchLM — decent long-context reasoning)
- AA-HLE: **19.1%** (Artificial Analysis via BenchLM — weak)
- CritPt: **2.9%** (Artificial Analysis via BenchLM — very weak)
- AA Intelligence Index: **17.9%** (Artificial Analysis via BenchLM)
- AA-IFBench: **50.5%** (Artificial Analysis via BenchLM — moderate instruction following)
- AA-Omniscience Accuracy: **22.8%** (Artificial Analysis via BenchLM)
- AA-Omniscience Hallucination Rate: **68.3%** (Artificial Analysis via BenchLM — high)
- AA-Omniscience Index: **-29.9%** (Artificial Analysis via BenchLM — very negative)

Coding:

- Vibe Code Bench: **0.00%** (Vals AI via BenchLM — complete failure)

Multimodal & Grounded:

- AA-MMMU-Pro: **61.8%** (Artificial Analysis via BenchLM — moderate)

Long context:

- AA-LCR: **73.7%** at 2M context (Artificial Analysis via BenchLM)

### Normalized scores (1–100)

> Derived from the raw numbers above using the methodology in `model-comparison.md`. Note: BenchLM covers only 12 of 666 benchmarks — extremely sparse coverage.

- **Tool use: 60/100** τ²-bench 65.8% is moderate — significantly below Grok 4.1 Fast's 93.3%. No other tool-use benchmarks found. Capped by moderate τ²-bench and limited coverage.
- **Reasoning: 48/100** GPQA Diamond 84.7% is strong. AA-LCR 73.7% is decent. However, HLE 19.1%, CritPt 2.9%, Intelligence Index 17.9%, IFBench 50.5%, and Omniscience Accuracy 22.8% are all weak. Omniscience Index -29.9% is very negative. Hallucination rate 68.3% is high. Capped by extremely poor performance on hardest reasoning benchmarks.
- **Context window: 95/100** 2M tokens — largest tier. AA-LCR 73.7% confirms effective long-context reasoning. Docked 5 for moderate LCR relative to window size.
- **Multimodal: 28/100** MMMU-Pro 61.8% suggests some image understanding. Image input supported per xAI specs. Limited multimodal benchmark coverage. Capped by moderate MMMU-Pro and lack of dedicated vision benchmarks.
- **Coding: 15/100** Vibe Code Bench 0.00% is a complete failure — the model cannot produce working code end-to-end. τ²-bench 65.8% shows some structured tool use, but the zero coding score is devastating. Capped by catastrophic Vibe Code Bench result.
- **Cost efficiency: 88/100** $0.20/$0.50 per 1M is very cheap for 2M context. Same pricing as successor Grok 4.1 Fast. Excellent value for non-coding agentic workloads.
- **Overall Score: 49/100** Mean of five non-cost dims: (60 + 48 + 95 + 28 + 15) / 5 = 49.2, half-up = 49. Budget-priced 2M context reasoning model with strong GPQA Diamond (84.7%) but catastrophically poor coding (Vibe Code Bench 0.00%), very weak reasoning breadth (CritPt 2.9%, HLE 19.1%), and extremely high hallucination (Omniscience Index -29.9%). Superseded by Grok 4.1 Fast which dramatically improved τ²-bench (93.3% vs 65.8%). Best fit for: cost-sensitive deep research and tool-calling over long contexts where code generation is not required.

---

## Signature

- Provided by: **Qwen 3.7 Plus (opencode/qwen-3.7-plus)** — 2026-10-20
- Method: public internet research across BenchLM, Artificial Analysis, Vals AI, xAI announcement, llm-stats.com, and OpenRouter; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
