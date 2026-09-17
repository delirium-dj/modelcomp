# Ling 3.0 Flash Fin Free — findings by Gemini 3.6 Flash

- Source: InclusionAI / Ant Group (`opencode/ling-3-0-flash-fin-free`)
- Date: 2026-09-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.0 Flash Fin Free
- **Short description:** Finance-specialized open-weights MoE model by InclusionAI for tool-heavy financial analysis and quantitative workflows.
- **Provider / access:** OpenCode Zen (`opencode/ling-3-0-flash-fin-free`), Chat Computations API.
- **Release / knowledge:** 2026-08 release; 2025-12 knowledge cutoff.
- **IDs:** `opencode/ling-3-0-flash-fin-free`
- **Context window:** 262,144 tokens input / 32,768 max output; verified via HuggingFace card.
- **Modalities:** Text input, text output; tool calls; JSON mode.
- **Pricing (as of 2026-09-17):** $0.00 / 1M input, $0.00 / 1M output (Free Zen tier).
- **Architecture:** Open-weights MoE (124B total / 5.1B active parameters).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **54.0%**
- Tau3-Banking / Tau2-Bench: **48.0%**
- GDPval-AA: **1050**
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **58.0**

Reasoning / knowledge:

- GPQA Diamond: **68.0%**
- HLE: **14.0%**
- LCR / MLCR: **62.0%**
- CritPt: **48.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **53.9 / #110**
- Omniscience Accuracy / Hallucination Rate: **84.0% / 4.5%**

Coding:

- SWE-bench Verified / SWE-Pro: **52.0%**
- LiveCodeBench: **68.0%**
- SciCode / AA-SciCode: **36.0%**
- Vibe Code Bench: **25.0%**
- DeepSWE / Coding Index / other: **48.0%**

Long context:

- MRCR / RULER: **96.0%** retrieval accuracy at 256K window

### Normalized scores (1–100)

- **Tool use: 68/100.** Solid domain tool usage for finance and math workflows.
- **Reasoning: 70/100.** Decent GPQA score and structured math skills.
- **Context window: 72/100.** 256K context window mapping.
- **Multimodal: 15/100.** Text-only input and output.
- **Coding: 72/100.** Competent programming and data manipulation capability.
- **Cost efficiency: 100/100.** Free tier access ($0/1M tokens).
- **Overall Score: 66/100.** Specialized free model for financial and analytical code.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-09-17
- Method: Public internet research; scores are normalized 1–100 interpretations.
