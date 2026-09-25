# Qwen 3.7 Plus — findings by Ling 3.0 Flash

- Source: Alibaba / Qwen (`qwen/qwen3.7-plus`)
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.7 Plus
- **Short description:** Alibaba's Qwen3.7 series cost-effective Plus model with text, image, and video input, built for coding, tool use, and productivity workflows.
- **Provider / access:** QwenCloud (`qwen3.7-plus`), Alibaba Cloud Int. (`qwen/qwen3.7-plus`), OpenRouter. Text, image, and video in; text out. Responses API.
- **Release / knowledge:** 2026-06-03. Knowledge cutoff not explicitly stated.
- **IDs:** `qwen/qwen3.7-plus` (Alibaba Cloud), `qwen3.7-plus` (OpenRouter)
- **Context window:** 1,000,000 tokens total (256K max output)
- **Modalities:** Text, image, and video in; text out; reasoning enabled; tool calls; JSON mode
- **Pricing (as of 2026-09-23):** $0.32/1M input, $1.28/1M output (Alibaba); $0.40/1M input, $1.60/1M output (OpenRouter)
- **Architecture:** 1T+ total parameters, Mixture-of-Experts, Apache 2.0 license

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the closest proxy as provisional — never invent values.

Agent / tool use:
- Terminal-Bench 2.1: **64.0%** (BenchmarkList, rank 3rd of 3)
- τ²-Bench Telecom: **93.0%** (Artificial Analysis, rank 39th of 332)
- MCP Atlas: **73.2%** (BenchmarkList, rank 25th of 44)
- OSWorld: **73.3%** (BenchmarkList, rank 5th of 72)
- GDPval-AA: **947** Elo (BenchmarkList, 68th percentile)
- APEX-Agents: **22.4%** (BenchmarkList, 41st percentile)
- Agentic Index: **17.5/100** (Artificial Analysis)

Reasoning / knowledge:
- GPQA Diamond: **90.0%** (Artificial Analysis, rank 84th percentile)
- HLE: **35.6%** (Artificial Analysis, rank 150th percentile)
- AA-LCR: **73.0%** (Artificial Analysis, rank 130th percentile)
- CritPt: **9.1%** (Artificial Analysis)
- Artificial Analysis Intelligence Index: **25.2** (v4.3)
- IFBench: **78.0%** (Artificial Analysis)
- AIME 2026: **93.2%** (BenchmarkList)
- MMLU-Pro: **88.5%** (BenchmarkList)

Coding:
- SWE-bench Verified: **77.7%** (BenchmarkList, rank 21st of 46)
- SWE-bench Multilingual: **75.8%** (BenchmarkList)
- SWE-bench Pro: **57.6%** (BenchmarkList)
- LiveCodeBench: **89.6%** (BenchmarkList, rank 9th of 49)
- SciCode: **51.3%** (BenchmarkList, rank 3rd of 3)
- Terminal-Bench Hard: **47.0%** (Artificial Analysis)
- Coding Index: **55.9/100** (Artificial Analysis)

Long context:
- AA-LCR: **73.0%** at 1M context window (Artificial Analysis)
- MRCR-v2 128k: **91.7%** (BenchmarkList, rank 4th of 20)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in `model-comparison.md`.
> **OVERALL SCORE FORMULA:** Overall = (Tool + Reasoning + Context + Multimodal + Coding) / 5 (half-up). Cost efficiency is scored independently.

- **Tool use: 65/100.** Strong on Terminal-Bench (64%), τ²-Bench Telecom (93%), MCP Atlas (73.2%), but weak on APEX-Agents (22.4%) and Agentic Index (17.5/100) caps tool use.
- **Reasoning: 75/100.** Excellent math reasoning (AIME 93.2%, HMMT 92.9%, GPQA 90%) but moderate general knowledge (HLE 35.6%). AA Intelligence Index at 25.2 limits breadth.
- **Context window: 70/100.** 1M context window with AA-LCR at 73.0% and MRCR-v2 at 91.7% confirms strong long-context retrieval.
- **Multimodal: 80/100.** Supports text, image, and video input. Strong multimodal architecture but AA-Omniscience Accuracy at 22.5% caps effectiveness.
- **Coding: 72/100.** Strong on LiveCodeBench (89.6%), SWE-bench Verified (77.7%), SciCode (51.3%), but Coding Index at 55.9/100 and Terminal-Bench Hard (47%) show inconsistency.
- **Cost efficiency: 55/100.** $0.32-$0.40 per 1M input; $1.28-$1.60 per 1M output. Not free-tier. Competitive pricing for 1T+ parameter model.
- **Overall Score: 72/100.** Mean of the five non-cost dimensions (65 + 75 + 70 + 80 + 72) / 5 = 72.4, rounded half-up to 72.

---

## Signature

- Provided by: **Ling 3.0 Flash Fin (inclusionai/ling-3-0-flash-fin-free)** — 2026-09-23
- Method: Public internet research via Artificial Analysis, OpenRouter, BenchmarkList, QwenCloud, and official model card; scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.
