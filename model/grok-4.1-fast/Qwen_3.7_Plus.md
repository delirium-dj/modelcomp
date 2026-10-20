# Grok 4.1 Fast (Reasoning) — findings by Qwen 3.7 Plus

- Source: xAI (`grok-4.1-fast-reasoning`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.1 Fast (Reasoning)
- **Short description:** xAI's reasoning variant of Grok 4.1 Fast — a high-throughput tool-calling model with 2M context window. Optimized for agentic workflows, customer support, and deep research via RL training in simulated environments. Released November 19, 2025.
- **Provider / access:** xAI API `grok-4-1-fast-reasoning`; OpenRouter `x-ai/grok-4.1-fast-reasoning`. OpenCode Zen `opencode/grok-4.1-fast` (non-reasoning variant).
- **Release / knowledge:** 2025-11-19; knowledge cutoff not publicly stated.
- **IDs:** `grok-4-1-fast-reasoning` (xAI API), `x-ai/grok-4.1-fast-reasoning` (OpenRouter).
- **Context window:** 2,000,000 tokens (2M) (per xAI announcement and BenchLM).
- **Modalities:** Text in/out; reasoning mode enabled; tool calling with Agent Tools API (web search, X search, code execution, MCP); image input supported per meta.json.
- **Pricing (as of 2026-10-20):** $0.20/1M input, $0.05/1M cached input, $0.50/1M output; tool calls from $5/1000 successful invocations (per xAI API pricing).
- **Architecture:** Proprietary; reasoning variant of Grok 4.1 Fast; exact parameter count not disclosed.

### Raw benchmarks found

> Sources: xAI announcement (x.ai/news/grok-4-1-fast, 2025-11-19), BenchLM (benchlm.ai/models/grok-4-1-fast-reasoning, 2026-10-20), Artificial Analysis (via BenchLM), Vals AI (via BenchLM). Coverage note: BenchLM covers only 12 of 666 benchmarks — very sparse coverage, scores are highly conservative.

Agent / tool use:

- τ²-bench: **93.3%** (Artificial Analysis via BenchLM — exceptional agentic tool use)
- Berkeley Function Calling v4: **72%** overall accuracy (xAI announcement)
- Research-Eval Reka: **63.9** at avg cost $0.046 (xAI announcement — beats GPT-5 at 45.5/$0.107)
- FRAMES: **87.6** at avg cost $0.048 (xAI announcement)
- X Browse: **56.3** at avg cost $0.091 (xAI announcement — internal multihop search benchmark)
- Multi-turn long context: consistent performance across full 2M window (xAI announcement)

Reasoning / knowledge:

- GPQA Diamond: **85.3%** (Artificial Analysis via BenchLM — strong)
- AA-LCR: **74.0%** (Artificial Analysis via BenchLM — decent long-context reasoning)
- AA-HLE: **19.3%** (Artificial Analysis via BenchLM — weak)
- CritPt: **2.9%** (Artificial Analysis via BenchLM — very weak)
- AA Intelligence Index: **20.4%** (Artificial Analysis via BenchLM)
- AA-IFBench: **52.7%** (Artificial Analysis via BenchLM — moderate instruction following)
- AA-Omniscience Accuracy: **25.1%** (Artificial Analysis via BenchLM)
- AA-Omniscience Hallucination Rate: **73.4%** (Artificial Analysis via BenchLM — high)
- AA-Omniscience Index: **-29.9%** (Artificial Analysis via BenchLM — very negative)

Coding:

- Vibe Code Bench: **1.20%** (Vals AI via BenchLM — catastrophically poor)

Multimodal & Grounded:

- AA-MMMU-Pro: **63.3%** (Artificial Analysis via BenchLM — moderate college-level understanding)

Long context:

- AA-LCR: **74.0%** at 2M context (Artificial Analysis via BenchLM)
- Consistent multi-turn performance across 2M window (xAI announcement)

### Normalized scores (1–100)

> Derived from the raw numbers above using the methodology in `model-comparison.md`. Note: BenchLM covers only 12 of 666 benchmarks — extremely sparse coverage means scores carry very high uncertainty.

- **Tool use: 78/100** τ²-bench 93.3% is exceptional — among the highest reported. Berkeley Function Calling v4 72% is strong. Research-Eval Reka 63.9 and FRAMES 87.6 beat GPT-5 and Claude Sonnet 4.5. X Browse 56.3 shows strong deep research. Consistent multi-turn performance across 2M context. Capped by limited independent verification of τ²-bench result.
- **Reasoning: 50/100** GPQA Diamond 85.3% is strong. AA-LCR 74.0% is decent. However, AA-HLE 19.3%, CritPt 2.9%, AA Intelligence Index 20.4%, IFBench 52.7%, and Omniscience Accuracy 25.1% are all weak. Omniscience Index -29.9% is very negative (far more wrong than right). Hallucination rate 73.4% is high. Capped by extremely poor performance on hardest reasoning benchmarks and very high hallucination.
- **Context window: 95/100** 2M tokens — largest in the dataset. AA-LCR 74.0% confirms effective long-context reasoning. xAI trained the model with RL over long horizons to ensure consistent performance across full window. Docked 5 for moderate LCR score relative to window size.
- **Multimodal: 30/100** MMMU-Pro 63.3% suggests some image understanding capability. Meta.json lists image input support. However, limited multimodal benchmark coverage and moderate score. Capped by lack of dedicated vision benchmarks.
- **Coding: 30/100** Vibe Code Bench 1.20% is catastrophically poor — essentially non-functional for real-world software delivery. τ²-bench 93.3% shows strong tool-calling in structured environments, but the Vibe Code result indicates the model cannot produce working code end-to-end. Capped by near-zero Vibe Code Bench score.
- **Cost efficiency: 88/100** $0.20/$0.50 per 1M is very cheap. Cached input at $0.05 helps further. Tool calls at $5/1000 invocations add cost for agentic use. Excellent price-performance for tool-calling workloads.
- **Overall Score: 57/100** Mean of five non-cost dims: (78 + 50 + 95 + 30 + 30) / 5 = 56.6, half-up = 57. Best-in-class tool calling (τ²-bench 93.3%, FRAMES 87.6) with massive 2M context at rock-bottom pricing ($0.20/$0.50 per 1M), but catastrophically poor coding delivery (Vibe Code Bench 1.20%), weak reasoning breadth (CritPt 2.9%, HLE 19.3%), and very high hallucination (Omniscience Index -29.9%). Best fit for: high-throughput agentic tool calling, customer support agents, and deep research over long contexts where code generation is not required.

---

## Signature

- Provided by: **Qwen 3.7 Plus (opencode/qwen-3.7-plus)** — 2026-10-20
- Method: public internet research across xAI announcement, BenchLM, Artificial Analysis, Vals AI, OpenRouter, and Medium; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
