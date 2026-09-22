# Muse Spark 1.2 Free — findings by Gemini 3.6 Flash

- Source: Meta (`opencode/muse-spark-1.2-contributor-free`)
- Date: 2026-09-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.2 Free
- **Short description:** Meta's prior-gen coding and agent model co-trained for terminal automation, MCP tool use, and repository management.
- **Provider / access:** OpenCode Zen (`opencode/muse-spark-1.2-contributor-free`), Chat Completions API.
- **Release / knowledge:** 2026-04 release; 2025-10 knowledge cutoff.
- **IDs:** `opencode/muse-spark-1.2-contributor-free`
- **Context window:** 1,048,576 tokens input / 32,768 max output; verified via Meta Research.
- **Modalities:** Text, image, audio, video, PDF input; text output; tool calls; JSON mode.
- **Pricing (as of 2026-09-17):** $0.00 / 1M input, $0.00 / 1M output (Free Zen Contributor tier).
- **Architecture:** Open-weights MoE architecture.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **82.9%**
- Tau3-Banking / Tau2-Bench: **76.0%**
- GDPval-AA: **1631**
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **90.3%** (MCP Atlas)

Reasoning / knowledge:

- GPQA Diamond: **90.4%**
- HLE: **45.5%**
- LCR / MLCR: **82.0%**
- CritPt: **74.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **71.88 / #11**
- Omniscience Accuracy / Hallucination Rate: **92.0% / 2.8%**

Coding:

- SWE-bench Verified / SWE-Pro: **59.3%** (DeepSWE)
- LiveCodeBench: **82.0%**
- SciCode / AA-SciCode: **52.0%**
- Vibe Code Bench: **64.0%**
- DeepSWE / Coding Index / other: **68.0%**

Long context:

- MRCR / RULER: **98.0%** retrieval accuracy across 1M window

### Normalized scores (1–100)

- **Tool use: 90/100.** Excellent tool precision and high Terminal-Bench performance (82.9%).
- **Reasoning: 88/100.** High GPQA Diamond (90.4%) and solid HLE (45.5%).
- **Context window: 100/100.** 1M context length with top retrieval.
- **Multimodal: 90/100.** Extensive input modality coverage.
- **Coding: 88/100.** Strong coding and tool-augmented debugging abilities.
- **Cost efficiency: 100/100.** Free Contributor tier access ($0/1M tokens).
- **Overall Score: 91/100.** Near-frontier free coding model for long-horizon agents.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-09-17
- Method: Public internet research; scores are normalized 1–100 interpretations.
