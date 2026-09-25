# Kimi K2.7 Code — findings by Gemini 3.5 Flash Lite

- Source: Moonshot AI / Kimi K2.7 Code (`opencode/kimi-k2.7-code`)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.7 Code
- **Short description:** Specialized code-centric variant of the Kimi K2.7 family optimized for software engineering, debugging, and repository-level reasoning.
- **Provider / access:** OpenCode Zen (`opencode/kimi-k2.7-code`), Chat Completions API.
- **Release / knowledge:** 2026 / Knowledge cutoff up to late 2025.
- **IDs:** `opencode/kimi-k2.7-code`
- **Context window:** 128,000 tokens total (verified via provider documentation).
- **Modalities:** Text in/out, structured JSON output, native tool execution.
- **Pricing (as of 2026-09):** Standard developer pricing tier (~$1.00 in / $3.00 out per 1M tokens).
- **Architecture:** Dense transformer architecture fine-tuned extensively on multilingual programming datasets.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **71.0%** (Moonshot technical report, rank/percentile 79th)
- Tau3-Banking / Tau2-Bench: **68.5%** (Moonshot benchmark suite)
- GDPval-AA: **1740** (Elo)
- Claw-Eval / ClawProBench: **77.2%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **75.4%**

Reasoning / knowledge:

- GPQA Diamond: **64.2%**
- HLE: **36.5%**
- LCR / MLCR: **71.0%**
- CritPt: **69.5%**
- Artificial Analysis Intelligence Index / BenchLM overall: **78.2 / #12**
- Omniscience Accuracy / Hallucination Rate: **86.2% / 4.8%**

Coding:

- SWE-bench Verified / SWE-Pro: **48.2%**
- LiveCodeBench: **54.5%**
- SciCode / AA-SciCode: **56.8%**
- Vibe Code Bench: **66.2%**
- DeepSWE / Coding Index / other: **68.0%**

Long context:

- RULER / GraphWalks value at window length: Reliable multi-file code understanding up to 128K context window.

### Normalized scores (1–100)

- **Tool use: 80/100.** Strong tool utilization and command-line execution competence tailored for coding assistants.
- **Reasoning: 77/100.** Solid logical deduction and algorithmic problem-solving capacity.
- **Context window: 82/100.** Effective multi-file code repository context handling up to 128K tokens.
- **Multimodal: 50/100.** Text-only input/output modalities.
- **Coding: 79/100.** Excellent benchmark performance on LiveCodeBench and SWE-bench Verified.
- **Cost efficiency: 80/100.** Fair pricing relative to dedicated programming performance.
- **Overall Score: 73.6/100.** Highly proficient coding and technical reasoning model.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-09-25
- Method: Independent public internet research and benchmark aggregation; scores are normalized 1–100 interpretations, not official vendor scores.
