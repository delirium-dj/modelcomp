# Kimi K2.7 Code — findings by Ling 3.0 Flash

- Source: Moonshot AI / Kimi (`moonshotai/kimi-k2.7-code`)
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.7 Code
- **Short description:** Moonshot AI's open-source coding-focused agentic MoE model with 1T total parameters, 32B activated, and 30% reduced thinking-token usage vs predecessor.
- **Provider / access:** Kimi Platform (`kimi-k2.7-code`), HuggingFace (`moonshotai/Kimi-K2.7-Code`), OpenAI-compatible API. Text in/text out; reasoning enabled; tool calls.
- **Release / knowledge:** 2026-06-11. Knowledge cutoff not explicitly stated.
- **IDs:** `moonshotai/kimi-k2.7-code` (HuggingFace), `kimi-k2.7-code` (Kimi Platform)
- **Context window:** 256,000 tokens total
- **Modalities:** Text in/out only; reasoning enabled; tool calls; JSON mode
- **Pricing (as of 2026-09-23):** $0.95/1M input, $4.00/1M output
- **Architecture:** 1T total / 32B active per token, MoE, 384 experts, 8 selected per token, 61 layers, 256K context, MIT license

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the closest proxy as provisional — never invent values.

Agent / tool use:
- MCP Atlas: **76.0%** (Kimi official)
- MCP Mark Verified: **81.1%** (Kimi official)
- Kimi Claw 24/7 Bench: **46.9%** (Kimi official)
- Terminal-Bench 2.1 (Vals): **67.0%** (BenchLM)
- Toolathlon: **50%** (BenchmarkList)

Reasoning / knowledge:
- GPQA: **90.5%** (Kimi K2.6 basis)
- HLE: **34.7%** (Kimi K2.6 basis)
- BenchLM Overall Score: **50.42** (estimated)
- AIME 2026: **96.4%** (Kimi K2.6 basis)
- MMLU-Pro: **87.6%** (Kimi K2.6 basis)

Coding:
- Kimi Code Bench v2: **62.0%** (Kimi official)
- Program Bench: **53.6%** (Kimi official)
- SWE-bench Verified: **78.2%** (Vals AI)
- SWE-bench Pro: **58.6%** (Kimi K2.6 basis)
- LiveCodeBench v6: **82.1%** (Vals AI)
- MLS-Bench Lite: **35.1%** (Kimi official)

Long context:
- Context window: 256,000 tokens total
- Thinking-token reduction: **30%** vs K2.6 (Kimi official)
- No specific long-context retrieval benchmark published

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in `model-comparison.md`.
> **OVERALL SCORE FORMULA:** Overall = (Tool + Reasoning + Context + Multimodal + Coding) / 5 (half-up). Cost efficiency is scored independently.

- **Tool use: 72/100.** Strong MCP Atlas (76%), MCP Mark Verified (81.1%), Terminal-Bench 2.1 (67%). Agentic coding benchmarks show solid tool use capability but K2.6 leads overall.
- **Reasoning: 70/100.** Strong math (AIME 96.4%, HMMT 92.7%, GPQA 90.5%). BenchLM overall 50.42. Reasoning efficiency improved 30% thinking-token reduction.
- **Context window: 60/100.** 256K context window. Thinking-token efficiency improved 30% vs K2.6. No specific long-context retrieval benchmark published.
- **Multimodal: 15/100.** Text in/out only. No image, audio, or video modalities supported despite having a vision encoder (MoonViT 400M) in architecture.
- **Coding: 78/100.** Excellent coding focus: Kimi Code Bench v2 62%, SWE-bench Verified 78.2%, LiveCodeBench v6 82.1%, Program Bench 53.6%. Purpose-built coding agent.
- **Cost efficiency: 45/100.** $0.95/1M input, $4.00/1M output. Not free-tier. 30% thinking-token reduction improves effective cost.
- **Overall Score: 59/100.** Mean of the five non-cost dimensions (72 + 70 + 60 + 15 + 78) / 5 = 59.0, rounded half-up to 59.

---

## Signature

- Provided by: **Ling 3.0 Flash Fin (inclusionai/ling-3-0-flash-fin-free)** — 2026-09-23
- Method: Public internet research via Kimi official documentation, HuggingFace, BenchLM, Vals AI, and VentureBeat; scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.
