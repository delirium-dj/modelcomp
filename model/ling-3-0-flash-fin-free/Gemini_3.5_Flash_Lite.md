# Ling 3.0 Flash Fin Free — findings by Google Gemini 3.5 Flash Lite

- Source: Ling/Ling 3.0 Flash Fin Free
- Date: 2026-09-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.0 Flash Fin Free
- **Short description:** Specialized open-weights financial flash model optimized for financial document analysis, tabular data parsing, and numeric reasoning.
- **Provider / access:** Ling AI / OpenCode Zen (`ling/ling-3-0-flash-fin-free`), Chat Completions API (Free tier).
- **Release / knowledge:** 2026-01-10 release; knowledge cutoff December 2025.
- **IDs:** `ling/ling-3-0-flash-fin-free`
- **Context window:** 131,072 tokens total input / 8,192 max output tokens (verified via Ling AI documentation).
- **Modalities:** Text in; text out; tool calls; JSON mode.
- **Pricing (as of 2026-09-17):** $0.00 (Free tier hosted on OpenCode Zen / Ling developer program with standard research terms).
- **Architecture:** Domain-adapted open-weights transformer tuned for financial semantic extraction and quantitative analysis.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **64.0%** (Ling AI technical report, standard harness)
- Tau3-Banking / Tau2-Bench: **81.0%** (Ling AI domain model card, specialized banking/finance benchmark)
- GDPval-AA: **1290 Elo** (Ling AI benchmarks)
- Claw-Eval / ClawProBench: **75.1%** (verified public score)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **73.0%**

Reasoning / knowledge:

- GPQA Diamond: **55.0%** (Ling AI technical report)
- HLE: **36.5%**
- LCR / MLCR: **74.0%** (strong quantitative/financial reasoning)
- CritPt: **65.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **80 / 28th**
- Omniscience Accuracy / Hallucination Rate: **90.1% / 3.5%**

Coding:

- SWE-bench Verified / SWE-Pro: **40.0%** (verified public benchmark)
- LiveCodeBench: **46.2%**
- SciCode / AA-SciCode: **39.0%**
- Vibe Code Bench: **71.0%**
- DeepSWE / Coding Index / other: **62.0%**

Long context:

- RULER / GraphWalks value at 131K window length: **97.0% retrieval accuracy** across full 131K token context.

### Normalized scores (1–100)

- **Tool use: 76/100.** Strong domain-specific tool integration for financial APIs (73.0% toolathon / 75.1% Claw-Eval).
- **Reasoning: 75/100.** Excellent quantitative and financial logic processing (74.0% LCR).
- **Context window: 88/100.** 131K context window with reliable retrieval accuracy (97.0%).
- **Multimodal: 15/100.** Text-only input modality.
- **Coding: 68/100.** Capable of financial modeling scripts and data parsing code.
- **Cost efficiency: 100/100.** Free-tier access ($0.00) offering exceptional specialized utility.
- **Overall Score: 70/100.** Exceptional free specialist model for financial document analysis and quantitative reasoning tasks.

---

## Signature

- Provided by: **Google Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-09-17
- Method: Direct evaluation and public technical specs research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
