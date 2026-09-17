# GLM 5.1 Coding — findings by Gemini 3.6 Flash

- Source: Z.AI (`opencode/glm-5.1`)
- Date: 2026-09-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.1 Coding
- **Short description:** Z.AI's flagship open-weights MoE model engineered specifically for long-horizon autonomous software development.
- **Provider / access:** Z.AI API / OpenCode (`opencode/glm-5.1`), Chat Completions API.
- **Release / knowledge:** 2026-08 release; 2026-02 knowledge cutoff.
- **IDs:** `opencode/glm-5.1` (Paid pricing, no Free ID found on Zen)
- **Context window:** 204,800 tokens input / 128,000 max output; verified via Z.AI technical report.
- **Modalities:** Text input, text output; tool calls; JSON mode.
- **Pricing (as of 2026-09-17):** $1.40 / 1M input, $4.40 / 1M output.
- **Architecture:** Open-weights MoE architecture.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **69.0%**
- Tau3-Banking / Tau2-Bench: **70.6%**
- GDPval-AA: **1410**
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **78.0**

Reasoning / knowledge:

- GPQA Diamond: **86.2%**
- HLE: **31.0%**
- LCR / MLCR: **76.0%**
- CritPt: **65.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **56.0 / #22**
- Omniscience Accuracy / Hallucination Rate: **89.0% / 3.8%**

Coding:

- SWE-bench Verified / SWE-Pro: **58.4%** (SWE-Pro SOTA open weights)
- LiveCodeBench: **83.5%**
- SciCode / AA-SciCode: **48.0%**
- Vibe Code Bench: **52.0%**
- DeepSWE / Coding Index / other: **72.0%**

Long context:

- MRCR / RULER: **97.0%** retrieval accuracy across 200K window

### Normalized scores (1–100)

- **Tool use: 85/100.** Strong Tau3 score (70.6%) and solid terminal automation.
- **Reasoning: 80/100.** High GPQA score (86.2%) for a open-weights model.
- **Context window: 70/100.** 200K context window mapped to 70/100 tier.
- **Multimodal: 15/100.** Text-only input and output.
- **Coding: 88/100.** Exceptional SWE-Pro performance (58.4%) and high LiveCodeBench.
- **Cost efficiency: 75/100.** Paid pricing ($1.40/$4.40 per 1M tokens).
- **Overall Score: 69/100.** Top open-weights choice for heavy coding and repo-scale edits.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-09-17
- Method: Public internet research; scores are normalized 1–100 interpretations.
