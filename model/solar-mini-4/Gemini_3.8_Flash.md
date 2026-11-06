# Solar Mini 4 — findings by Gemini 3.8 Flash

- Source: Upstage / OpenRouter (`upstage/solar-mini-4`)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Solar Mini 4
- **Short description:** Upstage's compact proprietary Mixture-of-Experts reasoning model (35B total / 3B active parameters per token) optimized for high-volume enterprise workflows, multilingual utility (Korean, English, Japanese), and long-context processing with up to 512K tokens.
- **Provider / access:** `opencode/solar-mini-4`, Upstage Console API, OpenRouter, Puter.
- **Release / knowledge:** September 2026 release; knowledge cutoff mid-2026.
- **IDs:** `opencode/solar-mini-4`, `upstage/solar-mini-4`.
- **Context window:** 524,288 tokens total (512K context window; up to 131K–262K max output).
- **Modalities:** Text and code in/out; chain-of-thought reasoning tokens and structured function calling.
- **Pricing (as of 2026-11-06):** ~$0.05–$0.20 / 1M input tokens, ~$0.20–$0.80 / 1M output tokens ($0.02 cached read).
- **Architecture:** Sparse Mixture-of-Experts (35B total / 3B active per token) with internal thinking loop and long-context attention.

### Raw benchmarks found

Agent / tool use:
- GDPval-AA: **29.5%** (Artificial Analysis standardized)
- AutomationBench-AA: **22.0%**
- Terminal-Bench 4.0: **1.0%** (indicates lower resilience on rigid terminal debugging suites)
- Tool calling: Native JSON tool calling for high-concurrency API integrations

Reasoning / knowledge:
- Humanity's Last Exam (HLE): **25.8%** (Artificial Analysis via OpenRouter)
- AA-LCR v1.1 (Long-Context Reasoning): **83.3%**
- SciCode: **47.6%**
- Artificial Analysis Intelligence Index: **24.1** (#129)
- AA-Omniscience Accuracy: **18.4%** (non-hallucination/abstention ~64%)

Coding:
- SciCode: **47.6%** (scientific programming)
- General developer scaffolding: Optimized for lightweight script editing, frontend components, and business logic.

Long context:
- 512K context window (524,288 tokens); AA-LCR at **83.3%** proves strong document synthesis across extended operational spans.

### Normalized scores (1–100)

- **Tool use: 52/100.** Normalized assessment of autonomous tool execution and function calling (29.5% GDPval-AA, 22% AutomationBench).
- **Reasoning: 60/100.** Normalized assessment of multi-step reasoning, AA Intelligence Index of 24, and 25.8% on HLE.
- **Context window: 88/100.** Effective retrieval fidelity across large 512K context capacity with 83.3% on AA-LCR.
- **Multimodal: 15/100.** Standard baseline score for non-multimodal architectures (text/code in and out).
- **Coding: 55/100.** Adequate everyday coding utility (47.6% SciCode), constrained by lower scores on rigid terminal benches.
- **Cost efficiency: 96/100.** Outstanding value proposition with 3B active parameter footprint and $0.05/$0.20 pricing.
- **Overall Score: 54/100.** Arithmetic mean of five quality dimensions: (52 + 60 + 88 + 15 + 55) / 5 = 54.0 → 54/100.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-11-06
- Method: Public internet research into Upstage announcements, Artificial Analysis evaluations, and OpenRouter metrics; scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
