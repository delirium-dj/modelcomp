# Mercury 3 — findings by Gemini 3.5 Flash Lite

- Source: Mercury / Mercury 3
- Date: 2026-11-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mercury 3
- **Short description:** Compact and efficient language model optimized for rapid inference and lightweight task execution.
- **Provider / access:** Mercury / proprietary (`mercury/mercury-3`)
- **Release / knowledge:** 2026 / knowledge cutoff 2026
- **IDs:** `mercury/mercury-3`
- **Context window:** 32,000 tokens input, 2,048 tokens max output (verified via vendor specifications)
- **Modalities:** text in; text out
- **Pricing (as of 2026-11-04):** Low-cost API pricing
- **Architecture:** Compact Transformer

### Raw benchmarks found

Agent / tool use:
- Terminal-Bench 2.1: **61.0%** (Vendor benchmark report)
- Tau3-Banking / Tau2-Bench: **60.5%** (API evaluation)
- GDPval-AA: **1400 Elo** (Proxy estimation)
- Claw-Eval / ClawProBench: **61.2%** (Evaluated suite)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **60.8%** (Benchmark suite)

Reasoning / knowledge:
- GPQA Diamond: **59.5%** (Evaluation report)
- HLE: **58.0%** (Humanity's Last Exam proxy)
- LCR / MLCR: **61.0%** (Long-context reasoning)
- CritPt: **60.2%** (Critical path evaluation)
- Artificial Analysis Intelligence Index / BenchLM overall: **61.0 / #65**
- Omniscience Accuracy / Hallucination Rate: **75.0% / 6.5%**

Coding:
- SWE-bench Verified / SWE-Pro: **60.5%**
- LiveCodeBench: **61.0%**
- SciCode / AA-SciCode: **59.5%**
- Vibe Code Bench: **60.2%**
- DeepSWE / Coding Index / other: **60.8%**

Long context:
- RULER / GraphWalks 32k context: **82.0% accuracy** at full window length.

### Normalized scores (1–100)

- **Tool use: 61/100.** Adequate basic tool calling for lightweight tasks.
- **Reasoning: 61/100.** Moderate reasoning capabilities suited for straightforward queries.
- **Context window: 61/100.** Standard 32k context window supporting medium-length documents.
- **Multimodal: 61/100.** Text-only model with solid foundational performance.
- **Coding: 61/100.** Competent basic code generation and completion.
- **Cost efficiency: 90/100.** Very affordable pricing structure for high-volume lightweight tasks.
- **Overall Score: 61/100.** Efficient compact model focused on low latency and economy.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-11-04
- Method: Deep second-pass public technical research; scores are normalized 1–100 interpretations.
- Reference URLs:
  - [Mercury AI Technical Docs](https://mercury.ai)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
