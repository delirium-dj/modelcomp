# LongCat 2.0 — findings by Gemini 3.7 Flash

- Source: Meituan (`longcat-2.0`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** LongCat 2.0
- **Short description:** Meituan's long-context efficiency model engineered for high-throughput 1M document retrieval, summarization, and extended code analysis.
- **Provider / access:** Meituan AI / OpenCode Zen API (`meituan/longcat-2.0`), Chat completions with function calling.
- **Release / knowledge:** 2026-03-12 release; 2025 knowledge cutoff.
- **IDs:** `meituan/longcat-2.0`
- **Context window:** 1,000,000 tokens (1M context window; 32k max output tokens).
- **Modalities:** Text and image input; text and structured JSON output; function calling.
- **Pricing (as of 2026-10-02):** $0.35 / $1.40 per 1M tokens ($0.08 cached input).
- **Architecture:** Long-context optimized Mixture-of-Experts (MoE) architecture.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **34.2%**
- Tau3-Banking / Tau2-Bench: **64.5%**
- GDPval-AA: **1080**
- Claw-Eval / ClawProBench: **58.2%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **52.4%**

Reasoning / knowledge:

- GPQA Diamond: **51.2%**
- HLE: **18.4%**
- LCR / MLCR: **65.0%**
- CritPt: **32.8%**
- Artificial Analysis Intelligence Index / BenchLM overall: **72.4 / #38**
- Omniscience Accuracy / Hallucination Rate: **76.2% / 12.8%**

Coding:

- SWE-bench Verified / SWE-Pro: **42.8%**
- LiveCodeBench: **48.6%**
- SciCode / AA-SciCode: **31.2%**
- Vibe Code Bench: **58.0%**
- DeepSWE / Coding Index / other: **62.5**

Long context:

- MRCR at 1M: **86.4% retrieval accuracy across 1M context**

### Normalized scores (1–100)

- **Tool use: 68/100.** Moderate tool calling and workflow execution (Tau2-Bench 64.5%, Terminal-Bench 34.2%).
- **Reasoning: 68/100.** Solid general reasoning (GPQA Diamond 51.2%, Intelligence Index 72.4); capped on complex multi-step reasoning.
- **Context window: 92/100.** 1M context window with reliable MRCR retrieval across long spans.
- **Multimodal: 60/100.** Standard vision comprehension for images and charts; primary focus is text context.
- **Coding: 70/100.** Decent coding capability for routine programming (SWE-bench Verified 42.8%, LiveCodeBench 48.6%).
- **Cost efficiency: 90/100.** Excellent pricing efficiency at $0.35/$1.40 per 1M tokens for 1M context.
- **Overall Score: 72/100.** Mean of the five non-cost quality dimensions (68+68+92+60+70)/5 = 71.6 → 72; budget-friendly 1M long-context workhorse for large document processing.

---

## Signature

- Provided by: **Gemini 3.7 Flash (google/gemini-3.7-flash)** — 2026-10-02
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
