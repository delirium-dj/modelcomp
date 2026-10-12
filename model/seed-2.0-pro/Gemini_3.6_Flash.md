# Seed 2.0 Pro — findings by Gemini 3.6 Flash

- Source: ByteDance (`bytedance/seed-2.0-pro`, `doubao-seed-2.0-pro`)
- Date: 2026-10-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Seed 2.0 Pro
- **Short description:** ByteDance's flagship multimodal foundation model powering the Doubao ecosystem, optimized for long-chain agentic execution, competitive coding, video understanding, and multi-step tool workflows.
- **Provider / access:** Volcano Engine Ark API, BytePlus ModelArk (`bytedance/seed-2.0-pro`), Doubao Developer Platform. OpenAI-compatible API.
- **Release / knowledge:** February 14, 2026 release; knowledge cutoff January 2026.
- **IDs:** `bytedance/seed-2.0-pro`, `doubao-seed-2.0-pro`
- **Context window:** 262,144 tokens (256K tokens) input / 128,000 max output tokens — verified via Volcano Engine Ark platform documentation.
- **Modalities:** Native multimodal (text, high-res image, video in; text and structured action out); reasoning trace; function calling; JSON mode.
- **Pricing (as of October 2026):** ~$0.47 / 1M input, $2.37 / 1M output tokens (varies slightly between domestic Volcano Engine and international BytePlus endpoints).
- **Architecture:** Proprietary Mixture-of-Experts (MoE) multimodal transformer architecture with native video-frame tokenization.

### Raw benchmarks found

Agent / tool use:

- BrowseComp: **77.3%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **79.1%**
- Terminal-Bench 2.0 / 2.1: **55.8%**
- Multi-step Agent Workflows: High task completion in long-horizon autonomous tool chains

Reasoning / knowledge:

- GPQA Diamond: **88.9%**
- AIME 2026: **94.2%** (AIME 2025: **98.3%**)
- Codeforces Elo Rating: **3,020**
- Humanity's Last Exam (HLE): **33.5%**
- Artificial Analysis Intelligence Index: **88 / #7**
- Omniscience Accuracy / Hallucination Rate: **86.4% / 4.9%**

Coding:

- LiveCodeBench v6: **87.8%**
- SWE-bench Verified: **76.5%**
- SciCode / AA-SciCode: **45.6%**
- Vibe Code Bench: **82.3%**
- DeepSWE / Coding Index: **86.4**

Long context & Multimodal:

- VideoMME: **89.5%** (industry-leading video comprehension)
- MMMU: **85.4%**
- Needle-in-a-Haystack (NIAH): **99.1%** retrieval consistency across 256K window.

### Normalized scores (1–100)

- **Tool use: 84/100.** Strong tool calling and browser task execution (77.3% BrowseComp, 79.1% Toolathon).
- **Reasoning: 89/100.** Elite mathematical and competition-level reasoning (88.9% GPQA Diamond, 94.2% AIME 2026, 3,020 Codeforces).
- **Context window: 88/100.** Native 256K context window with expansive 128K max output limit and 99.1% retrieval fidelity.
- **Multimodal: 88/100.** Exceptional video and image understanding verified by 89.5% on VideoMME and 85.4% on MMMU.
- **Coding: 88/100.** Top-tier software engineering throughput (87.8% LiveCodeBench v6, 76.5% SWE-bench Verified).
- **Cost efficiency: 89/100.** Highly competitive pricing at ~$0.47 / $2.37 per 1M tokens for a frontier multimodal model.
- **Overall Score: 87/100.** Arithmetic mean of quality dimensions: (84 + 89 + 88 + 88 + 88) / 5 = 437 / 5 = 87.4 -> 87/100. Balanced, high-performance multimodal powerhouse excelling at complex coding, reasoning, and visual agent tasks.

---

## Sources

- ByteDance Volcano Engine Seed 2.0 Pro Launch Documentation: https://volcengine.com/product/ark
- BytePlus ModelArk Seed 2.0 Pro Developer Overview: https://byteplus.com/en/products/ark
- LLM-Stats & Towards AI Benchmark Synthesis: https://towardsai.net/p/ai/seed-2-0-pro-benchmarks

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-12
- Method: Public web and vendor documentation benchmark synthesis; scores are normalized 1–100 interpretations.
