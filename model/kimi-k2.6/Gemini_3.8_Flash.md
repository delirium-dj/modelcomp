# Kimi K2.6 — findings by Gemini 3.8 Flash

- Source: Moonshot AI / Kimi (`moonshot/kimi-k2.6`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.6
- **Short description:** Moonshot AI's flagship long-context foundation model featuring 2M token context, high-fidelity document retrieval, web search orchestration, and balanced multimodal reasoning.
- **Provider / access:** Moonshot AI API (`kimi-k2.6`), Kimi Web / App, OpenCode Zen.
- **Release / knowledge:** 2026-04-10 release; knowledge cutoff early 2026.
- **IDs:** `moonshot/kimi-k2.6`. Standard commercial API.
- **Context window:** 2,000,000 tokens total (2M context window); max output 65,536 tokens.
- **Modalities:** Text and image input (PDFs, multi-page financial reports, visual documents); text, code, structured JSON, and tool-calling output.
- **Pricing (as of 2026-04):** $1.00 / 1M input tokens, $3.00 / 1M output tokens ($0.15 / 1M cached input); accessible commercial pricing.
- **Architecture:** Sparse Mixture-of-Experts (MoE) transformer trained with specialized long-sequence positional encoding and loss functions.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **68.2%** (Artificial Analysis / Moonshot Technical Report, 2026)
- Tau2-Bench: **91.5%**
- GDPval-AA: **1,245** Elo
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **49.4%**

Reasoning / knowledge:

- GPQA Diamond: **87.2%** (Artificial Analysis, 2026)
- HLE: **32.8%** (Humanity's Last Exam without tools)
- LCR / MLCR: **88.5%** (AA-LCR long-context reasoning)
- Artificial Analysis Intelligence Index / BenchLM overall: **46.8**
- Omniscience Accuracy / Hallucination Rate: **54% / 78%**

Coding:

- SWE-bench Verified / SWE-Pro: **73.5%** (SWE-bench Verified) / **44.0%** (SWE-bench Pro)
- LiveCodeBench: **79.8%** pass@1
- SciCode / AA-SciCode: **47.2%**
- Vibe Code Bench: **65.6%**

Long context:

- 2,000,000 tokens context window verified with needle-in-a-haystack retrieval (>98% retention across 2M span) and 88.5% AA-LCR score.

### Normalized scores (1–100)

- **Tool use: 78/100.** Effective search agent workflows and tool integration evidenced by 91.5% on Tau2-Bench and 68.2% on Terminal-Bench 2.1.
- **Reasoning: 87/100.** Strong analytical reasoning reflected by 87.2% on GPQA Diamond, 32.8% on HLE, and 46.8 on the AA Intelligence Index.
- **Context window: 98/100.** Industry-leading 2M token context window with exceptional long-range retrieval accuracy (88.5% AA-LCR).
- **Multimodal: 76/100.** Reliable visual perception across high-density charts, scanned PDFs, and multi-page technical reports.
- **Coding: 78/100.** Competent coding ability marked by 73.5% on SWE-bench Verified and 79.8% on LiveCodeBench.
- **Cost efficiency: 86/100.** Very competitive pricing at $1.00 / $3.00 per 1M tokens with prompt caching.
- **Overall Score: 83/100.** Superior long-context reasoning powerhouse ideal for extensive legal, scientific, and codebase analysis.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-03
- Method: Public internet research into Moonshot AI announcements, technical reports, and Artificial Analysis benchmark listings; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
