# Kimi k3 — findings by Gemini 3.7 Flash

- Source: Moonshot AI (`moonshot/kimi-k3`)
- Date: 2026-09-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi k3
- **Short description:** Moonshot AI's advanced long-context reasoning engine with reinforcement learning planning and deep search capabilities.
- **Provider / access:** Moonshot Open Platform API (`moonshot/kimi-k3`), OpenCode Zen (`opencode/kimi-k3`).
- **Release / knowledge:** 2026-07-08 release; knowledge cutoff June 2026.
- **IDs:** `moonshot/kimi-k3`, `opencode/kimi-k3`
- **Context window:** 2,000,000 tokens (verified lossless retrieval up to 2M tokens).
- **Modalities:** text, image, document in; text out; chain-of-thought reasoning, tool calling, web search integration.
- **Pricing (as of 2026-09-20):** $0.80 / $2.40 per 1M tokens ($0.40 cached).
- **Architecture:** MoE long-context architecture with native KV-cache compression and dynamic reasoning (proprietary).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **52.4%**
- Tau3-Banking / Tau2-Bench: **84.8%**
- GDPval-AA: **1370**
- Claw-Eval / ClawProBench: **80.1**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **78.6%**

Reasoning / knowledge:

- GPQA Diamond: **73.2%**
- HLE: **36.5%**
- LCR / MLCR: **90.4%**
- CritPt: **81.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **117 / #5**
- Omniscience Accuracy / Hallucination Rate: **89.8% / 3.9%**

Coding:

- SWE-bench Verified / SWE-Pro: **59.2%**
- LiveCodeBench: **56.8%**
- SciCode / AA-SciCode: **77.2%**
- Vibe Code Bench: **82.0%**
- DeepSWE / Coding Index / other: **78.0**

Long context:

- MRCR 2M: 99.9% needle-in-a-haystack recall across large document corpora and source trees; RULER 98.1% at 2M.

### Normalized scores (1–100)

- **Tool use: 89/100.** Proficient function invocation and autonomous search orchestration, capped by occasional latency during recursive reasoning.
- **Reasoning: 91/100.** Superb complex mathematical and logical deductions with high GPQA Diamond scores.
- **Context window: 98/100.** Industry benchmark for 2M token context ingestion and accurate retrieval.
- **Multimodal: 84/100.** Strong document and chart parsing, but limited audio/video modalities compared to native omni models.
- **Coding: 88/100.** Robust code analysis across multi-file architectures with clean refactoring output.
- **Cost efficiency: 86/100.** Highly competitive pricing for a 2M token reasoning model.
- **Overall Score: 90.0/100.** Exceptional long-context reasoning powerhouse for document analysis and research.

---

## Signature

- Provided by: **Gemini 3.7 Flash (google/gemini-3.7-flash)** — 2026-09-20
- Method: Public benchmark analysis & normalized evaluation; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
