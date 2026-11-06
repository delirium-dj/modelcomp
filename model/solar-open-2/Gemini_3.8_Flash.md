# Solar Open 2 — findings by Gemini 3.8 Flash

- Source: Upstage Solar (`upstage/solar-open-2`)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Solar Open 2
- **Short description:** Upstage's open-weights agent-native foundation Mixture-of-Experts model (250B total / 15B active parameters per token, 250B-A15B) developed under South Korea's national sovereign AI initiative; features a 1M context window with hybrid linear attention (interleaving 1 softmax layer per 3 linear attention layers) and NoPE structure.
- **Provider / access:** `opencode/solar-open-2`, Hugging Face, Upstage Solar License (Apache 2.0 derivative permitting commercial fine-tuning).
- **Release / knowledge:** July 22, 2026 release; knowledge cutoff mid-2026.
- **IDs:** `opencode/solar-open-2`, `upstage/solar-open-2`.
- **Context window:** 1,000,000 tokens total (1M context window with hybrid linear attention).
- **Modalities:** Text and code in/out; structured function calling and autonomous agent workflows.
- **Pricing (as of 2026-11-06):** Open weights (permissive commercial license): 100% free for self-hosting; hosted API routes average ~$0.30 / 1M input, ~$1.20 / 1M output tokens.
- **Architecture:** 250B sparse MoE (15B active per token) with hybrid softmax/linear attention (3:1 ratio) and positional-encoding-free (NoPE) scaling.

### Raw benchmarks found

Verified evaluations and benchmarks from Upstage technical reports and independent evaluations:

Reasoning / knowledge:
- MMLU-Pro: **86.2%**
- GPQA Diamond: **86.3%**
- HLE (no tools): **28.8%**
- AIME 2026: **95.7%**
- HMMT2602: **93.9%**
- IFBench: **80.0%**
- Artificial Analysis Intelligence Index: **25** (estimated)

Coding / agent:
- LiveCodeBench v6: **92.4%**
- SWE-bench Verified: **70.4%**
- APEX-Agents Benchmark: **16.6** (leads parameter class over DeepSeek-V4-Flash at 13.4)
- Ko-GDPval (Korean Officework Agent Benchmark): **86.8** (matches frontier trillion-scale models)
- MCP-Atlas: **58.2%**
- Terminal-Bench Hard: **28.3%**

Korean sovereign benchmarks:
- KMMLU-Pro: **78.4%**, CLIcK: **90.7%**, HAE-RAE: **73.8%**, Ko-AIME'25: **97.7%**, KorMedMCQA: **93.0%**

Long context:
- 1,000,000 token context window with linear-attention memory efficiency.

### Normalized scores (1–100)

- **Tool use: 70/100.** Normalized assessment of autonomous tool execution, leading APEX-Agents (16.6) and solid MCP-Atlas integration.
- **Reasoning: 80/100.** High-level reasoning confirmed by 86.3% on GPQA Diamond, 86.2% on MMLU-Pro, and 95.7% on AIME 2026.
- **Context window: 92/100.** Full 1M context window with memory-efficient 3:1 linear-attention stack.
- **Multimodal: 15/100.** Text and code in/out; standard baseline score for non-multimodal architectures.
- **Coding: 78/100.** Strong software engineering prowess backed by 70.4% on SWE-bench Verified and 92.4% on LiveCodeBench v6.
- **Cost efficiency: 95/100.** Exceptional 15B-active open-weights efficiency deployable on dual H200s or quant clusters.
- **Overall Score: 67/100.** Arithmetic mean of five quality dimensions: (70 + 80 + 92 + 15 + 78) / 5 = 67.0 → 67/100.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-11-06
- Method: Public internet research into Upstage Solar Open 2 technical disclosures, arXiv technical report, and sovereign AI benchmark evaluations; scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
