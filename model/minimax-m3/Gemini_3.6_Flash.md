# MiniMax M3 — findings by Gemini 3.6 Flash

- Source: MiniMax (`minimax-ai/minimax-m3`)
- Date: 2026-10-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M3
- **Short description:** Frontier multimodal foundation model developed by MiniMax featuring MiniMax Sparse Attention (MSA), 1M token context, up to 512K output capacity, and native multimodal reasoning (text, image, video).
- **Provider / access:** MiniMax API (`minimax-ai/minimax-m3`), OpenRouter, DeepInfra, and open-weights download under MiniMax Community License.
- **Release / knowledge:** June 1, 2026 release; knowledge cutoff April 2026.
- **IDs:** `minimax-ai/minimax-m3`, `openrouter/minimax/minimax-m3`
- **Context window:** 1,048,576 tokens (1M tokens) input / up to 512,000 max output tokens — verified via MiniMax developer specifications.
- **Modalities:** Native multimodal (text, image, video in; text out); adaptive thinking parameter; function calling and structured JSON output.
- **Pricing (as of October 2026):** $0.30 / 1M input, $1.20 / 1M output (standard ≤ 512K tokens); $0.60 / $2.40 for ultra-long context (> 512K tokens); open-weight downloads available.
- **Architecture:** ~428B parameter Mixture-of-Experts (MoE) with ~23B active parameters per token powered by MiniMax Sparse Attention (MSA).

### Raw benchmarks found

Agent / tool use & OS Automation:

- OSWorld-Verified: **70.1%**
- Tau2-Bench: **88.9%**
- Terminal-Bench 2.1: **66.0%**
- MCP Atlas / Toolathon: **74.2%**
- BrowseComp: **83.52**

Reasoning / knowledge:

- GPQA Diamond: **92.9%**
- Humanity's Last Exam (HLE): **37.1%**
- IFEval: **82.9%**
- Omniscience Accuracy / Hallucination Rate: **82.0% / 5.2%**

Coding:

- SWE-bench Verified: **80.5%**
- SWE-bench Pro: **59.0%**
- LiveCodeBench: **66.8%**
- SciCode / AA-SciCode: **62.5%**
- Vibe Code Bench: **75.0%**

Long context & Multimodal:

- MMMU-Pro: **78.1%**
- Needle-in-a-Haystack (NIAH): **98.5%** retrieval fidelity across 1M context window via MSA.

### Normalized scores (1–100)

- **Tool use: 84/100.** Strong OS and desktop automation capabilities (70.1% OSWorld-Verified, 88.9% Tau2-Bench, 66.0% Terminal-Bench 2.1).
- **Reasoning: 87/100.** Top-tier reasoning verified by 92.9% GPQA Diamond and 37.1% HLE, supported by configurable adaptive thinking depth.
- **Context window: 94/100.** 1M context window with an unprecedented 512K token output budget and MSA efficient KV-selection.
- **Multimodal: 84/100.** Native tri-modal comprehension across images, multi-page documents, and video streams (78.1% MMMU-Pro).
- **Coding: 87/100.** Exceptional software engineering throughput (80.5% SWE-bench Verified, 59.0% SWE-bench Pro).
- **Cost efficiency: 91/100.** High-throughput open-weight economics with standard API pricing of $0.30 / $1.20 per 1M tokens.
- **Overall Score: 87/100.** Arithmetic mean of quality dimensions: (84 + 87 + 94 + 84 + 87) / 5 = 436 / 5 = 87.2 -> 87/100. Premier open-weight multimodal foundation model delivering frontier-class coding and long-context performance.

---

## Sources

- MiniMax M3 Official Release Announcement & MSA Architecture Paper: https://minimax.io/news/minimax-m3-release
- MiniMax Developer Documentation & API Pricing: https://minimax.io/docs/pricing
- OpenRouter & Puter AI Independent Evaluation Synthesis: https://openrouter.ai/models/minimax/minimax-m3

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-12
- Method: Public web and vendor documentation benchmark synthesis; scores are normalized 1–100 interpretations.
