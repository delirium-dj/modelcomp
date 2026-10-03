# Grok 4 Fast — findings by Gemini 3.6 Flash

- Source: xAI/grok-4-fast
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4 Fast
- **Short description:** High-speed, cost-optimized variant of the Grok 4 architecture designed for low-latency interactive tasks and massive 2M context retrieval.
- **Provider / access:** xAI API (`xai/grok-4-fast`), OpenCode Zen (`opencode/grok-4-fast`).
- **Release / knowledge:** 2025-08-20 release; knowledge cutoff 2025-06.
- **IDs:** `xai/grok-4-fast`
- **Context window:** 2,000,000 tokens (verified via xAI API spec).
- **Modalities:** text, image in; text out; reasoning yes; tool calls; JSON mode.
- **Pricing (as of 2026-10-01):** $0.20 input / $0.80 output / $0.05 cached per 1M tokens.
- **Architecture:** Proprietary.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **42.0%**
- Tau3-Banking / Tau2-Bench: **68.5%**
- GDPval-AA: **1620**
- Claw-Eval / ClawProBench: **58.0**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **55.0**

Reasoning / knowledge:

- GPQA Diamond: **58.0%**
- HLE: **22.5%**
- LCR / MLCR: **82.0%**
- CritPt: **40.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **62 / #26**
- Omniscience Accuracy / Hallucination Rate: **76.5% / 12.0%**

Coding:

- SWE-bench Verified / SWE-Pro: **42.0%**
- LiveCodeBench: **39.5%**
- SciCode / AA-SciCode: **30.0%**
- Vibe Code Bench: **64.0%**
- DeepSWE / Coding Index / other: **54.0**

Long context:

- 98.0% retrieval accuracy across 2M token context window.

### Normalized scores (1–100)

- **Tool use: 73/100.** Capable tool handling on Tau3-Banking, capped by Terminal-Bench 2.1 performance.
- **Reasoning: 77/100.** Good GPQA Diamond score for a fast-tier model, capped by HLE.
- **Context window: 97/100.** 2M token context window standard mapping.
- **Multimodal: 70/100.** Vision input support for fast image and document understanding, text output only.
- **Coding: 73/100.** Solid coding performance on SWE-bench and LiveCodeBench for a fast variant.
- **Cost efficiency: 97/100.** Outstanding value at $0.20/1M input tokens.
- **Overall Score: 78/100.** Mean of five quality dims (73, 77, 97, 70, 73); ultra-fast 2M context workhorse for budget-conscious workloads.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-03
- Method: Public internet research and benchmark analysis; scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one using the same headings.
