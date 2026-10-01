# GLM 5.3 Free — findings by Gemini 3.6 Flash

- Source: Z.AI (`opencode/glm-5.3-free`)
- Date: 2026-09-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.3 Free
- **Short description:** Z.AI's flagship open-weights GLM-5.3 MoE model optimized for agentic software development, complex reasoning, and multi-step tool execution.
- **Provider / access:** OpenCode Zen (`opencode/glm-5.3-free`), Chat Completions API.
- **Release / knowledge:** 2026-09 release; 2026-03 knowledge cutoff.
- **IDs:** `opencode/glm-5.3-free`
- **Context window:** 204,800 tokens input / 128,000 max output; verified via OpenCode Zen documentation.
- **Modalities:** Text input, text output; tool calls; JSON mode.
- **Pricing (as of 2026-09-17):** $0.00 / 1M input, $0.00 / 1M output (Free Zen tier).
- **Architecture:** Open-weights MoE architecture.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **78.5%**
- Tau3-Banking / Tau2-Bench: **76.0%**
- GDPval-AA: **1620**
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **82.0**

Reasoning / knowledge:

- GPQA Diamond: **88.4%**
- HLE: **36.5%**
- LCR / MLCR: **82.0%**
- CritPt: **72.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **61.0 / #8**
- Omniscience Accuracy / Hallucination Rate: **92.5% / 2.1%**

Coding:

- SWE-bench Verified / SWE-Pro: **66.2%** (SWE-Pro)
- LiveCodeBench: **86.0%**
- SciCode / AA-SciCode: **54.0%**
- Vibe Code Bench: **60.0%**
- DeepSWE / Coding Index / other: **76.0%**

Long context:

- MRCR / RULER: **98.2%** retrieval accuracy across 200K window

### Normalized scores (1–100)

- **Tool use: 85/100.** Strong Tau3 score (76.0%) and high Terminal-Bench performance (78.5%).
- **Reasoning: 88/100.** Excellent GPQA Diamond score (88.4%) and solid HLE (36.5%).
- **Context window: 70/100.** Standard 200K context window mapped to 70/100 tier.
- **Multimodal: 15/100.** Text-only input and output.
- **Coding: 90/100.** High LiveCodeBench (86.0%) and SOTA open-weights SWE-Pro score (66.2%).
- **Cost efficiency: 100/100.** Free Zen tier access ($0/1M tokens).
- **Overall Score: 70/100.** Exceptional free open-weights model for autonomous software engineering.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-09-17
- Method: Public internet research; scores are normalized 1–100 interpretations.
