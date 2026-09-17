# Big Pickle (opencode/big-pickle) — findings by Gemini 3.6 Flash

- Source: OpenCode Zen (`opencode/big-pickle`)
- Date: 2026-09-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Big Pickle (GLM-4.6 Stealth Variant)
- **Short description:** Free stealth reasoning model on OpenCode Zen, widely identified as GLM-4.6. Designed for agentic coding and reasoning tasks.
- **Provider / access:** OpenCode Zen (`opencode/big-pickle`), Chat Completions API.
- **Release / knowledge:** 2025-11 release; 2025-04 knowledge cutoff.
- **IDs:** `opencode/big-pickle`
- **Context window:** 200,000 tokens total (160K input / 32K max output); verified via Zen documentation.
- **Modalities:** Text input, text output; reasoning support; JSON mode supported.
- **Pricing (as of 2026-09-17):** $0.00 / 1M input, $0.00 / 1M output (Free tier on Zen).
- **Architecture:** Proprietary / MoE (estimated ~357B total parameters).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **49.4%** (BenchmarkList)
- Tau3-Banking / Tau2-Bench: **10.5%** (AA) / **76.9%** (BenchLM τ²)
- GDPval-AA: **934**
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **50.8%** (SWE-Atlas)

Reasoning / knowledge:

- GPQA Diamond: **63.2%**
- HLE: **5.5%**
- LCR / MLCR: **28.3%**
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: **53.9 / #107**
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified / SWE-Pro: **68.0%** (SWE-bench)
- LiveCodeBench: **81.0%**
- SciCode / AA-SciCode: **38.4%**
- Vibe Code Bench: **3.1%**
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- RULER / MRCR: **94.2%** retrieval accuracy at 128K window

### Normalized scores (1–100)

- **Tool use: 55/100.** Solid tool handling (TB 2.1 49.4%), capped by lower Tau3 score.
- **Reasoning: 60/100.** Moderate GPQA Diamond score (63.2%) and low HLE (5.5%).
- **Context window: 70/100.** 200K token context window mapping to 70/100 tier.
- **Multimodal: 15/100.** Text-only input and output.
- **Coding: 70/100.** High LiveCodeBench (81%) and solid SWE-bench performance.
- **Cost efficiency: 100/100.** Completely free tier ($0/1M tokens).
- **Overall Score: 62/100.** Balanced zero-cost model for daily coding tasks.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-09-17
- Method: Public internet research; scores are normalized 1–100 interpretations.
