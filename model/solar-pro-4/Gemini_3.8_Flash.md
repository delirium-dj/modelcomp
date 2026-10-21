# Solar Pro 4 — findings by Gemini 3.8 Flash

- Source: Google Gemini 3.8 Flash (`gemini-3.8-flash`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Solar Pro 4
- **Short description:** Upstage AI's proprietary reasoning and agentic foundation model optimized for multi-step enterprise workflows, long document synthesis, and terminal execution across a 512K context window.
- **Provider / access:** Upstage Console API (`solar-pro4`), [OpenRouter](https://openrouter.ai/models/upstage/solar-pro4) (`upstage/solar-pro4`).
- **Release / knowledge:** August 6, 2026.
- **IDs:** `upstageai/solar-pro-4`, `upstage/solar-pro4`, `solar-pro4`
- **Context window:** 524,288 tokens (~512K context window; up to 128K output).
- **Modalities:** Text in / text out only. Tool use and reasoning effort controls.
- **Pricing (as of 2026-10-21):** OpenRouter hosts at ~$0.09 / 1M input tokens, ~$0.36 / 1M output tokens; Upstage direct console standard tier is $0.30 / $1.20 per 1M tokens.
- **Architecture:** Proprietary frontier transformer optimized for Korean, Japanese, and English enterprise tasks, incorporating defensive hallucination reduction.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **57.3%**
- GDPval-AA v2: **30.3% / 1277 Elo**
- BrowseComp: **49.2%**
- τ³-Banking: **23.3%**

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **28–42** (depending on sub-metric version/weighting; 28 on current v4 index)
- GPQA Diamond: **89.0%–89.1%**
- MMLU-Pro: **86.3%**
- Humanity's Last Exam (HLE): **29.2%–29.8%**
- AIME 2026: **95.3%**
- Hallucination Rate: **24%**

Coding:

- SWE-bench Verified: **70.6%** (OpenHands harness)
- LiveCodeBench: **87.8%**
- SciCode: **44.6%**

Long context:

- AA Long Context Reasoning (LCR): **71.0%–74.0%** across 512K context window.

### Normalized scores (1–100)

- **Tool use: 70/100.** Demonstrates measurable improvements over prior generations with 57.3% TB 2.1 and 1277 Elo on GDPval-AA; represents a reliable mid-tier agent.
- **Reasoning: 72/100.** 89.1% on GPQA Diamond, solid Artificial Analysis Intelligence Index standing, and 95.3% on AIME 2026 show strong structured reasoning.
- **Context window: 90/100.** Verified 512K context with solid 71.0%–74.0% AA-LCR long-context retrieval performance.
- **Multimodal: 15/100.** Baseline text-only score; lacks native vision, video, or audio processing.
- **Coding: 74/100.** Solid code generation on LiveCodeBench (87.8%) and SWE-bench Verified (70.6%).
- **Cost efficiency: 95/100.** Highly competitive pricing at $0.09–$0.30 / $0.36–$1.20 per 1M tokens with prompt caching.
- **Overall Score: 64/100.** Arithmetic mean of non-cost metrics: (70 + 72 + 90 + 15 + 74) / 5 = 64.2 → 64. A cost-effective, long-context text model well-suited for document-heavy analysis and agent workflows.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-21
- Method: Public benchmark evaluation and analysis of Upstage AI technical documentation, OpenRouter pricing, and Artificial Analysis leaderboards.
