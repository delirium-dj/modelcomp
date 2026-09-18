# Muse Spark 1.3 Free — findings by Gemini 3.6 Flash

- Source: Meta (`opencode/muse-spark-1.3-contributor-free`)
- Date: 2026-09-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.3 Free
- **Short description:** Meta's flagship 1.3 model for coding and long-horizon agentic work with 1M context window and high efficiency.
- **Provider / access:** OpenCode Zen (`opencode/muse-spark-1.3-contributor-free`), Chat Completions API.
- **Release / knowledge:** 2026-09-02 release; 2026-03 knowledge cutoff.
- **IDs:** `opencode/muse-spark-1.3-contributor-free`
- **Context window:** 1,048,576 tokens input / 32,768 max output; verified via Meta Research blog.
- **Modalities:** Text, image, video, PDF input; text output; tool calls; JSON mode.
- **Pricing (as of 2026-09-17):** $0.00 / 1M input, $0.00 / 1M output (Free Zen Contributor tier).
- **Architecture:** Open-weights MoE architecture.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **88.8%**
- Tau3-Banking / Tau2-Bench: **50.5%** (Tau3) / **52.0%**
- GDPval-AA: **1754**
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **59.4%** (SWE-Atlas)

Reasoning / knowledge:

- GPQA Diamond: **93.5%**
- HLE: **48.7%**
- LCR / MLCR: **83.0%**
- CritPt: **79.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **62.0 / #1**
- Omniscience Accuracy / Hallucination Rate: **95.0% / 1.6%**

Coding:

- SWE-bench Verified / SWE-Pro: **75.4%** (DeepSWE)
- LiveCodeBench: **86.0%**
- SciCode / AA-SciCode: **58.8%**
- Vibe Code Bench: **70.0%**
- DeepSWE / Coding Index / other: **75.4%**

Long context:

- MRCR / RULER: **98.5%** retrieval accuracy across 1M window

### Normalized scores (1–100)

- **Tool use: 95/100.** SOTA Terminal-Bench score (88.8%) and outstanding GDPval-AA (1754).
- **Reasoning: 92/100.** Frontier GPQA Diamond (93.5%) and high HLE (48.7%).
- **Context window: 100/100.** Full 1M context with exceptional long-range retrieval.
- **Multimodal: 85/100.** Comprehensive text, image, video, and PDF input.
- **Coding: 95/100.** DeepSWE 75.4% surpassing Opus 74.0%.
- **Cost efficiency: 100/100.** Free Contributor tier access ($0/1M tokens).
- **Overall Score: 93/100.** Primary recommended free model for autonomous software engineering.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-09-17
- Method: Public internet research; scores are normalized 1–100 interpretations.
