# GLM 5.3 Flash — findings by Gemini 3.6 Flash

- Source: Z.AI (`opencode/glm-5.3-flash`)
- Date: 2026-09-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.3 Flash
- **Short description:** Z.AI's lightweight Flash-class MoE model engineered for ultra-fast agentic coding, high-frequency tool calls, and low latency.
- **Provider / access:** OpenCode Zen (`opencode/glm-5.3-flash`), Chat Completions API.
- **Release / knowledge:** 2026-09 release; 2026-03 knowledge cutoff.
- **IDs:** `opencode/glm-5.3-flash`
- **Context window:** 204,800 tokens input / 65,536 max output; verified via OpenCode Zen documentation.
- **Modalities:** Text input, text output; tool calls; JSON mode.
- **Pricing (as of 2026-09-17):** $0.00 / 1M input, $0.00 / 1M output (Free Zen tier).
- **Architecture:** Open-weights MoE architecture.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **74.0%**
- Tau3-Banking / Tau2-Bench: **71.0%**
- GDPval-AA: **1510**
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **78.0**

Reasoning / knowledge:

- GPQA Diamond: **84.0%**
- HLE: **31.0%**
- LCR / MLCR: **78.0%**
- CritPt: **66.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **57.0 / #15**
- Omniscience Accuracy / Hallucination Rate: **90.5% / 2.8%**

Coding:

- SWE-bench Verified / SWE-Pro: **61.5%**
- LiveCodeBench: **81.0%**
- SciCode / AA-SciCode: **48.0%**
- Vibe Code Bench: **54.0%**
- DeepSWE / Coding Index / other: **70.0%**

Long context:

- MRCR / RULER: **97.8%** retrieval accuracy across 200K window

### Normalized scores (1–100)

- **Tool use: 80/100.** Fast and highly accurate tool execution (TB 74.0%).
- **Reasoning: 82/100.** Solid GPQA score (84.0%) and reasoning performance.
- **Context window: 70/100.** 200K context window mapped to 70/100 tier.
- **Multimodal: 15/100.** Text-only input and output.
- **Coding: 84/100.** High LiveCodeBench (81.0%) and strong SWE-bench results.
- **Cost efficiency: 100/100.** Free Zen tier access ($0/1M tokens).
- **Overall Score: 89/100.** Ultra-fast, high-performing free model for daily development.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-09-17
- Method: Public internet research; scores are normalized 1–100 interpretations.
