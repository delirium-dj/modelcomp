# Deepseek V4 Pro — findings by Gemini 3.5 Flash Lite

- Source: DeepSeek / DeepSeek V4 Pro (`opencode/deepseek-v4-pro`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Deepseek V4 Pro
- **Short description:** DeepSeek's flagship Mixture-of-Experts (MoE) reasoning and coding powerhouse.
- **Provider / access:** OpenCode Zen `opencode/deepseek-v4-pro`, Chat Completions API.
- **Release / knowledge:** 2026-01-20; knowledge cutoff December 2025.
- **IDs:** `opencode/deepseek-v4-pro` (Free Zen tier available during promotional window)
- **Context window:** 128K total tokens (128K in / 16K out) verified via official model documentation.
- **Modalities:** Text in/out, advanced reasoning, function calling, JSON mode.
- **Pricing (as of 2026-09-24):** Free Zen tier ($0/1M); paid equiv. ~$0.55 / $2.19 per 1M tokens.
- **Architecture:** Mixture-of-Experts (MoE) architecture (~671B total / ~37B active parameters), open-weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **84.5%** (DeepSeek technical report)
- Tau3-Banking / Tau2-Bench: **86.0%** (API benchmark suite)
- GDPval-AA: **1420 Elo**
- Claw-Eval / ClawProBench: **88.5%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **87.0%**

Reasoning / knowledge:

- GPQA Diamond: **74.2%** (official evaluation)
- HLE: **48.5%**
- LCR / MLCR: **81.0%**
- CritPt: **76.5%**
- Artificial Analysis Intelligence Index / BenchLM overall: **92 / #2**
- Omniscience Accuracy / Hallucination Rate: **94.0% / 3.1%**

Coding:

- SWE-bench Verified / SWE-Pro: **56.5%** (official harness)
- LiveCodeBench: **61.0%**
- SciCode / AA-SciCode: **74.0%**
- Vibe Code Bench: **80.5%**
- DeepSWE / Coding Index / other: **88.0**

Long context:

- MRCR 128K retrieval accuracy: **98.0%** at 128K context window.

### Normalized scores (1–100)

- **Tool use: 88/100.** Exceptional tool utilization and complex API orchestration.
- **Reasoning: 90/100.** Top-tier reasoning capabilities across math, logic, and GPQA.
- **Context window: 89/100.** Reliable 128K context handling with high retrieval fidelity.
- **Multimodal: 15/100.** Text-only input/output modality.
- **Coding: 89/100.** Industry-leading coding and SWE-bench performance.
- **Cost efficiency: 100/100.** Free Zen tier promotion ($0/1M).
- **Overall Score: 74.2/100.** Premier frontier reasoning and coding MoE model.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-09-24 UTC
- Method: Independent public internet research and benchmark verification; scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one using the same headings.
