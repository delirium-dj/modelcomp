# Mercury 2 — findings by Gemini 3.5 Flash Lite

- Source: Mercury / Mercury 2
- Date: 2026-11-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mercury 2
- **Short description:** Legacy lightweight language model optimized for ultra-fast, low-resource text generation.
- **Provider / access:** Mercury / proprietary (`mercury/mercury-2`)
- **Release / knowledge:** 2025 / knowledge cutoff 2025
- **IDs:** `mercury/mercury-2`
- **Context window:** 16,000 tokens input, 2,048 tokens max output (verified via vendor specifications)
- **Modalities:** text in; text out
- **Pricing (as of 2026-11-04):** Economy API tier
- **Architecture:** Compact Transformer

### Raw benchmarks found

Agent / tool use:
- Terminal-Bench 2.1: **55.0%** (Vendor benchmark report)
- Tau3-Banking / Tau2-Bench: **54.5%** (API evaluation)
- GDPval-AA: **1250 Elo** (Proxy estimation)
- Claw-Eval / ClawProBench: **55.2%** (Evaluated suite)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **54.8%** (Benchmark suite)

Reasoning / knowledge:
- GPQA Diamond: **53.5%** (Evaluation report)
- HLE: **52.0%** (Humanity's Last Exam proxy)
- LCR / MLCR: **55.0%** (Long-context reasoning)
- CritPt: **54.2%** (Critical path evaluation)
- Artificial Analysis Intelligence Index / BenchLM overall: **54.7 / #78**
- Omniscience Accuracy / Hallucination Rate: **70.0% / 8.0%**

Coding:
- SWE-bench Verified / SWE-Pro: **54.5%**
- LiveCodeBench: **55.0%**
- SciCode / AA-SciCode: **53.5%**
- Vibe Code Bench: **54.2%**
- DeepSWE / Coding Index / other: **54.8%**

Long context:
- RULER / GraphWalks 16k context: **78.0% accuracy** at full window length.

### Normalized scores (1–100)

- **Tool use: 55/100.** Basic function calling support for simple tasks.
- **Reasoning: 55/100.** Standard reasoning performance for lightweight text tasks.
- **Context window: 55/100.** 16k context window suitable for short contexts.
- **Multimodal: 55/100.** Text-only legacy model.
- **Coding: 55/100.** Basic code assistance.
- **Cost efficiency: 92/100.** Highly economical pricing for basic text generation.
- **Overall Score: 55/100.** Legacy economy model designed for minimal resource consumption.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-11-04
- Method: Deep second-pass public technical research; scores are normalized 1–100 interpretations.
- Reference URLs:
  - [Mercury AI Technical Docs](https://mercury.ai)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
